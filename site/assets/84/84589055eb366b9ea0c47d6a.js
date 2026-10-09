const setTimeZone = () => {
    const select = document.getElementById('timeZoneOffset');
    const dateString = new Date();
    const offset = getOffset(moment.tz.guess()); // e.g. -07:00
    let browserTimeZoneString = dateString.toString().split('(')[1].replace(')', ''); // e.g. Pacific Daylight Time (Chrome/Firefox), or PDT (Safari)

    const timeZoneAbbreviations = getTimeZoneAbbreviations();
    const safariTimeZone = timeZoneAbbreviations.find(x => x.abbreviation == browserTimeZoneString);

    if (safariTimeZone) {
        browserTimeZoneString = safariTimeZone.name;
    }

    const standardTimeZoneString = browserTimeZoneString.replace('Daylight', 'Standard');
    const currentUserCity = moment.tz.guess().split('/')[1].replace('_', ' '); // e.g. Los Angeles

    let stringOffset = '';
    let matches = [];
    let defaultForNoMatches = 'UTC';
    let hasMatch = false;

    stringOffset = offset.toString();

    if (stringOffset.includes('.5')) {
        stringOffset = stringOffset.replace('.5', ':30');
    }

    for (let i = 0; i < select.length; i++) { // e.g. It takes all the '-07:00' time zones from the select
        let option = select.options[i];
        let optionDataTimeZone = option.getAttribute('data-timezone');

        if (option.text.includes(stringOffset)) {
            matches.push({
                key: optionDataTimeZone,
                value: option.value
            });
            if (defaultForNoMatches == 'UTC') {
                defaultForNoMatches = option.value; // e.g. First of the '-07:00' time zones
            }
        }
    }

    let cookieExpiration = new Date();
    cookieExpiration.setFullYear(cookieExpiration.getFullYear() + 1);

    for (let element of matches) {
        if (element.value == standardTimeZoneString ||
            element.key.includes(currentUserCity)) {
            hasMatch = true;
            select.value = element.value;

            const cookieValue = "PreferredTimeZone=" + encodeURIComponent(element.value) + ";expires=" + cookieExpiration.toUTCString() + ";path=/;secure";
            document.cookie = cookieValue;

            break;
        }
    }

    if (!hasMatch) {
        select.value = defaultForNoMatches;

        const cookieValue = "PreferredTimeZone=" + encodeURIComponent(defaultForNoMatches) + ";expires=" + cookieExpiration.toUTCString() + ";path=/;secure";
        document.cookie = cookieValue;
    }
}

function getOffset(zone) {
    const timezone = moment.tz(zone);

    return timezone.format('Z');
}