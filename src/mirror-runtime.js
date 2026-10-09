(() => {
  "use strict";
  const source = "https://developer.microsoft.com";
  const excluded = /\/(?:blog|microsoft-edge|games|microsoft-365|microsoft-teams|office|office-scripts|graph|sharepoint|outlook|onenote)(?:[/.]|$)/i;
  const flow = /\/(?:auth\/|home\/setculture|home\/settimezone)/i;
  const telemetry = /clarity|facebook|applicationinsights|onecollector|\/v2\/track|\/collect(?:[/?]|$)/i;
  const resolve = (value) => {
    if (!value || typeof value !== "string" || /^(data:|blob:|#)/.test(value)) return value;
    const url = new URL(value, location.href);
    if (url.origin === location.origin) return value;
    if (url.origin === source) return url.pathname + url.search + url.hash;
    return `/__mirror/resource?url=${encodeURIComponent(url.href)}`;
  };
  const originalFetch = window.fetch;
  window.fetch = function (input, init) {
    const url = typeof input === "string" ? input : input instanceof URL ? input.href : input.url;
    if (telemetry.test(url)) return Promise.reject(new Error("Telemetry is disabled in the local recreation."));
    const mapped = resolve(url);
    return originalFetch.call(this, input instanceof Request ? new Request(mapped, input) : mapped, init);
  };
  const open = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (method, url, ...rest) {
    return open.call(this, method, resolve(String(url)), ...rest);
  };
  const setAttribute = Element.prototype.setAttribute;
  Element.prototype.setAttribute = function (name, value) {
    if ((name === "src" && /^(IMG|SCRIPT|SOURCE|VIDEO|AUDIO|TRACK)$/.test(this.tagName)) ||
        name === "poster") value = resolve(value);
    return setAttribute.call(this, name, value);
  };
  for (const [prototype, property] of [
    [HTMLImageElement.prototype, "src"], [HTMLScriptElement.prototype, "src"],
    [HTMLSourceElement.prototype, "src"], [HTMLVideoElement.prototype, "poster"],
  ]) {
    const descriptor = Object.getOwnPropertyDescriptor(prototype, property);
    if (!descriptor?.set || !descriptor.get) continue;
    Object.defineProperty(prototype, property, {
      ...descriptor, set(value) { descriptor.set.call(this, resolve(value)); },
    });
  }
  window.enableAdobeTarget = false;
  window.clarityEnabled = false;
  // A local consent adapter, never an affirmative analytics grant.
  window.WcpConsent = {
    consentCategories: { Required: "Required", Analytics: "Analytics", Advertising: "Advertising", SocialMedia: "SocialMedia" },
    siteConsent: {
      isConsentRequired: false,
      getConsentFor: () => false,
      getConsent: () => ({ Required: true, Analytics: false, Advertising: false, SocialMedia: false }),
      manageConsent: () => preferences(),
    },
    init: (_language, _element, ready) => {
      if (typeof ready === "function") ready(null, window.WcpConsent.siteConsent);
    },
    onConsentChanged: () => {},
  };
  window.siteConsent = window.WcpConsent.siteConsent;
  document.cookie = "PreferredTimeZone=UTC;path=/;SameSite=Lax";

  function preferences() {
    const dialog = document.createElement("dialog");
    dialog.style.cssText = "max-width:520px;padding:28px;border:1px solid #888;font:16px system-ui";
    const heading = document.createElement("h2");
    heading.textContent = "Local preview privacy";
    const description = document.createElement("p");
    description.textContent = "Analytics and advertising are disabled in this local recreation. No Microsoft consent or account service is connected.";
    const close = document.createElement("button");
    close.textContent = "Close";
    close.onclick = () => dialog.close();
    dialog.append(heading, description, close);
    dialog.addEventListener("close", () => dialog.remove());
    document.body.append(dialog);
    dialog.showModal();
  }
  document.addEventListener("click", (event) => {
    const anchor = event.target.closest?.("a");
    if (!anchor) return;
    if (/manage cookies/i.test(anchor.textContent)) {
      event.preventDefault();
      preferences();
      return;
    }
    const url = new URL(anchor.href, location.href);
    if (url.origin === source && !excluded.test(url.pathname) && !flow.test(url.pathname)) {
      anchor.href = url.pathname + url.search + url.hash;
    }
  }, true);
  document.addEventListener("submit", (event) => {
    const form = event.target;
    const query = form.querySelector('input[name="q"]');
    if (query) {
      event.preventDefault();
      location.href = `/__mirror/search?q=${encodeURIComponent(query.value)}`;
    }
    if (/\/reactor\/home\/settimezone/i.test(form.action)) {
      event.preventDefault();
      const select = form.querySelector("select");
      if (select) {
        try { localStorage.setItem("mirror-timezone", select.value); }
        catch (error) { console.error("Could not save preview time zone", error); }
      }
    }
    if (/\/reactor\/home\/setculture/i.test(form.action)) {
      event.preventDefault();
      const select = form.querySelector("select");
      if (select) select.value = "en-us";
    }
  }, true);
  document.addEventListener("DOMContentLoaded", () => {
    if (location.pathname.includes("/azure-devops/")) {
      const navigation = document.createElement("script");
      navigation.type = "module";
      navigation.src = "/__mirror/uhf-entry.js";
      navigation.onerror = () => console.error("The captured Formula global navigation module could not load.");
      document.head.append(navigation);
    }
    const timeZoneReload = document.getElementById("shouldRunTimeZoneReExecution");
    if (timeZoneReload) timeZoneReload.setAttribute("data-executeTimeZone", "False");
    const timeZone = document.getElementById("timeZoneOffset");
    if (timeZone) {
      timeZone.value = "UTC";
      timeZone.disabled = true;
      timeZone.title = "This captured site's event times are shown in UTC.";
    }
    for (const video of document.querySelectorAll("video[data-local-hls]")) {
      if (video.canPlayType("application/vnd.apple.mpegurl")) continue;
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/hls.js@1.6.13/dist/hls.min.js";
      script.onload = () => {
        if (!window.Hls?.isSupported()) {
          console.error("This browser does not support the captured video.");
          return;
        }
        const player = new window.Hls();
        player.loadSource(video.dataset.localHls);
        player.attachMedia(video);
        player.on(window.Hls.Events.ERROR, (_event, data) => {
          if (data.fatal) console.error("Captured video playback failed", data.type, data.details);
        });
      };
      script.onerror = () => console.error("The captured HLS player could not load.");
      document.head.append(script);
    }
  });
})();
