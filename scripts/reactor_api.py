"""Offline implementation of the source catalog's filtering and look-ahead pagination."""

import calendar
import datetime as dt
import math
from urllib.parse import unquote


def selected(raw, options):
    decoded = unquote(raw).casefold()
    return [option for option in options if option.casefold() in decoded]


def catalog_response(catalog, query):
    def value(key):
        return query.get(key, [""])[0]

    page = max(1, int(value("page") or "1"))
    options = catalog["filterOptions"]
    items = catalog["items"]
    search = value("search").casefold().strip()
    types = value("eventTypes")
    dates = value("dates").casefold()
    captured = dt.datetime.fromisoformat(catalog["captured_at"]).astimezone(dt.timezone.utc)
    today = captured.date()

    def included(item):
        if search and search not in " ".join(str(item.get(k, "")) for k in ("title", "description", "tags")).casefold():
            return False
        if types and bool(item.get("isSeries")) != ("eventSeries" in types):
            if not ("eventSeries" in types and "individualEvents" in types):
                return False
        mappings = [
            ("topics", "topics", "eventTopic", "eventSeriesTopics"),
            ("formats", "formats", "formats", "eventSeriesFormat"),
            ("contentLevels", "contentLevels", "contentLevel", "eventSeriesContentLevels"),
            ("eventLanguage", "eventLanguages", "languages", "eventSeriesLanguage"),
            ("regions", "regions", "regions", "eventSeriesRegions"),
        ]
        for parameter, option_key, field, series_field in mappings:
            raw = value(parameter)
            if not raw:
                continue
            choices = selected(raw, options.get(option_key, []))
            if not choices:
                return False
            actual = str(item.get(series_field) if item.get("isSeries") else item.get(field)).casefold()
            if not any(choice.casefold() in actual for choice in choices):
                return False
        if dates:
            timestamp = item.get("startDateFirstUpcomingEvent") if item.get("isSeries") else item.get("startDateTimeUtc")
            if not timestamp or timestamp.startswith("0001"):
                return False
            date = dt.datetime.fromisoformat(timestamp.replace("Z", "+00:00")).date()
            next_month = (today.replace(day=1) + dt.timedelta(days=32)).replace(day=1)
            ranges = {
                "today": (today, today),
                "thisweek": (today, today + dt.timedelta(days=6 - today.weekday())),
                "thismonth": (today, today.replace(day=calendar.monthrange(today.year, today.month)[1])),
                "nextmonth": (next_month, next_month.replace(day=calendar.monthrange(next_month.year, next_month.month)[1])),
            }
            chosen = [interval for name, interval in ranges.items() if name in dates]
            if not chosen or not any(start <= date <= end for start, end in chosen):
                return False
        return True

    filtered = [item for item in items if included(item)]
    total = len(filtered)
    page = min(page, max(1, math.ceil(total / 9)))
    start = (page - 1) * 9
    return {
        "currentPage": page, "totalPages": math.ceil(total / 9),
        "totalItems": total, "totalBackFillItems": 0,
        "items": filtered[start:start + 10],
        "filterOptions": options, "timeZone": catalog["timeZone"],
        "selectedLanguage": catalog["selectedLanguage"],
    }
