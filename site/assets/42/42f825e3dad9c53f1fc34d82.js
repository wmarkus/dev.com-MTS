import{r as t,i as e,c as i,f as o,e as s,g as a,k as r,b as l,A as n,o as c}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{e as d,v as u,l as h,c as p,r as _,B as m}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{q as g,c as b,b as y,s as v,f,e as $,a as S,d as I}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{s as x}from"/__mirror/assets/579a4c6140e643b41d22eee8";import{d as C,l as E,a1 as k,a5 as w,V as B}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{v as T,b as A}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{a as z,n as V,M as P}from"/__mirror/assets/ea6ed49ce42866f8af21c77b";import{S as R}from"/__mirror/assets/1db4ee73d7e46e9ea9afc127";import{a as L,n as O}from"/__mirror/assets/54716721f6ce76b6127c2436";import{n as j}from"/__mirror/assets/34233ee5ac8acdb3aa831b25";import{name as M}from"/__mirror/assets/183c4411ec679f3100ca3ad0";import{name as D}from"/__mirror/assets/39f1ed08dc709b5515b4ed55";const H="flex",q="column",W="var(--ds-app-space-micro-xl, 2rem)",F="initial",N="var(--ds-app-space-micro-xs, 0.5rem)",J="2",Z="var(--ds-app-space-micro-m, 1rem)",G="1",U="1rem",K="row",Q=12,X=24,Y="1fr",tt="initial",et="initial",it="initial",ot="initial",st="flex-start",at="0",rt="auto",lt="initial",nt="0",ct="0",dt="100%",ut="auto",ht={indicatorsPosition:"static",indicatorsBottom:"auto",indicatorsLeft:"auto",indicatorsRight:"auto",indicatorsMarginInline:"0",indicatorsAlignItems:"stretch",indicatorsJustifyContent:"flex-start",indicatorsGap:"var(--ds-app-space-micro-2xs, 0.25rem)",indicatorsZIndex:"30",indicatorsWidth:"auto",indicatorsDisplay:"flex"},pt="relative",_t="auto",mt="auto",gt="30",bt="var(--ds-app-space-micro-2xs, 0.25rem)",yt="1",vt=e`
  :host {
    --ds-card-feature-top-flex: 0;
    --ds-media-height: 100%;
    position: relative;
    display: var(--ds-carousel-display, ${t(H)});
    flex-direction: var(--ds-carousel-flex-direction, ${t(q)});
    gap: var(--ds-carousel-gap, ${t(W)});
    justify-content: var(
      --ds-carousel-justify-content,
      ${t(F)}
    );
  }

  :host([indicator-configuration='${t(C.bars)}']) {
    --ds-carousel-indicator-align-items: center;
  }

  .carousel__controls {
    display: var(--ds-carousel-controls-display, ${t(H)});
    align-items: center;
    gap: var(--ds-scrollslider-controls-gap, ${t(N)});
    justify-content: var(
      --ds-carousel-controls-justify-content,
      ${t(st)}
    );
    padding-block: var(
      --ds-carousel-controls-padding-block,
      ${t(at)}
    );
    z-index: var(
      --ds-carousel-controls-z-index,
      var(--ds-z-index-auto, ${t(ut)})
    );
  }

  .carousel__controls .carousel__trailing,
  .carousel__controls .carousel__trailing-status {
    margin-inline-start: auto;
  }

  .carousel__trailing-status {
    color: var(--ds-carousel-trailing-status-color, var(--ds-app-color-base-default-fg-body, #3a4c56));
    font-family: ${t(E.fontFamily)};
    font-size: var(--ds-carousel-trailing-status-font-size, ${t(E.fontSize)});
    font-weight: ${t(E.fontWeight)};
    line-height: ${t(E.lineHeight)};
    letter-spacing: ${t(E.letterSpacing)};
  }

  .carousel__indicators-container {
    position: var(
      --ds-carousel-indicators-container-position,
      ${t(ht.indicatorsPosition)}
    );
    bottom: var(
      --ds-carousel-indicators-container-bottom,
      ${t(ht.indicatorsBottom)}
    );
    left: var(
      --ds-carousel-indicators-container-left,
      ${t(ht.indicatorsLeft)}
    );
    right: var(
      --ds-carousel-indicators-container-right,
      ${t(ht.indicatorsRight)}
    );
    margin-inline: var(
      --ds-carousel-indicators-container-margin-inline,
      ${t(ht.indicatorsMarginInline)}
    );
    align-items: var(
      --ds-carousel-indicators-container-align-items,
      ${t(ht.indicatorsAlignItems)}
    );
    justify-content: var(
      --ds-carousel-indicators-container-justify-content,
      ${t(ht.indicatorsJustifyContent)}
    );
    z-index: var(
      --ds-carousel-indicators-container-z-index,
      var(--ds-z-index-30, ${t(ht.indicatorsZIndex)})
    );
    width: var(
      --ds-carousel-indicators-container-width,
      ${t(ht.indicatorsWidth)}
    );
  }

  .carousel__controls-container {
    z-index: var(
      --ds-carousel-controls-container-z-index,
      var(--ds-z-index-auto, ${t(rt)})
    );
  }

  .carousel__controls-container,
  .carousel__indicators-container {
    --ds-container-width: 100%;
  }

  :host([control-position^='bottom']) .carousel__controls,
  :host([control-position^='bottom']) .carousel__controls-container {
    order: var(--ds-carousel-controls-order, ${t(J)});
    margin-inline: var(
      --ds-carousel-controls-bottom-margin-inline,
      ${t(ct)}
    );
  }

  :host([control-position$='end']) .carousel__controls,
  :host([control-position$='end']) .carousel__controls-container {
    justify-content: end;
  }

  :host([control-position$='end']) .carousel__controls .carousel__trailing,
  :host([control-position$='end']) .carousel__controls .carousel__trailing-status {
    margin-inline-start: 0;
  }

  :host([control-position='middle-justified']) .carousel__controls,
  :host([control-position='middle-justified']) .carousel__controls-container {
    position: absolute;
    pointer-events: none;
    height: 100%;
    width: var(
      --ds-carousel-controls-width,
      ${t(dt)}
    );
    top: 0;
    justify-content: space-between;
    padding-inline: var(
      --ds-carousel-controls-padding-inline,
      ${t(nt)}
    );
    box-sizing: var(
      --ds-carousel-controls-box-sizing,
      ${t(lt)}
    );
  }

  ::part(layout__base) {
    scrollbar-width: none;
    scroll-snap-type: x mandatory;
    overscroll-behavior-x: none;
    scroll-behavior: smooth;
    column-gap: var(--ds-carousel-layout-column-gap, var(--ds-grid-column-gap));

    @media (prefers-reduced-motion: reduce) {
      scroll-behavior: auto;
    }
  }

  ::part(layout__base)::-webkit-scrollbar {
    display: none;
  }

  :host([full-bleed]) ::part(layout__base) {
    padding-inline-start: var(
      --ds-carousel-full-bleed-inline-start,
      var(--ds-scrollslider-full-bleed-spacing)
    );
    padding-inline-end: var(
      --ds-carousel-full-bleed-inline-end,
      var(--ds-scrollslider-full-bleed-spacing)
    );
    margin-inline-start: calc(
      var(--ds-carousel-full-bleed-inline-start, var(--ds-scrollslider-full-bleed-spacing)) * -1
    );
    margin-inline-end: calc(
      var(--ds-carousel-full-bleed-inline-end, var(--ds-scrollslider-full-bleed-spacing)) * -1
    );
    scroll-padding-inline-start: var(
      --ds-carousel-full-bleed-inline-start,
      var(--ds-scrollslider-full-bleed-spacing)
    );
    scroll-padding-inline-end: var(
      --ds-carousel-full-bleed-inline-end,
      var(--ds-scrollslider-full-bleed-spacing)
    );
    padding-top: 0.375rem;
    padding-bottom: 0.75rem;
  }

  .carousel__indicators {
    order: var(--ds-carousel-indicators-order, ${t(G)});
    display: var(
      --ds-carousel-indicators-display,
      ${t(ht.indicatorsDisplay)}
    );
    flex-direction: var(
      --ds-carousel-indicators-flex-direction,
      ${t(K)}
    );
    overflow-x: scroll;
    scrollbar-width: none;
    scroll-behavior: smooth;
    scroll-snap-type: x proximity;
    gap: var(--ds-carousel-indicators-gap, ${t(Z)});
    position: var(
      --ds-carousel-indicators-position,
      ${t(ht.indicatorsPosition)}
    );
    bottom: var(
      --ds-carousel-indicators-bottom,
      ${t(ht.indicatorsBottom)}
    );
    justify-content: var(
      --ds-carousel-indicators-justify-content,
      ${t(ht.indicatorsJustifyContent)}
    );
    width: var(
      --ds-carousel-indicators-width,
      ${t(ht.indicatorsWidth)}
    );
    height: var(--ds-carousel-indicators-height, auto);
    z-index: var(
      --ds-carousel-indicators-z-index,
      var(--ds-z-index-30, ${t(ht.indicatorsZIndex)})
    );
  }

  .play-button {
    order: var(
      --ds-carousel-play-button-order,
      ${t(yt)}
    );
    margin-inline-start: var(
      --ds-carousel-play-button-margin-inline-start,
      ${t(bt)}
    );
    z-index: var(
      --ds-carousel-play-button-z-index,
      var(--ds-z-index-30, ${t(gt)})
    );
    position: var(
      --ds-carousel-play-button-position,
      ${t(pt)}
    );
    bottom: var(
      --ds-carousel-play-button-bottom,
      ${t(_t)}
    );
    inset-inline-end: var(
      --ds-carousel-play-button-inset-inline-end,
      ${t(mt)}
    );
  }

  :host > .play-button {
    /* Only override properties that differ for direct child.
    This will target the play button not inside the indicator container */
    position: var(--ds-carousel-play-button-position, absolute);
    bottom: var(--ds-carousel-play-button-bottom, 0);
    inset-inline-end: var(--ds-carousel-play-button-inset-inline-end, 0);
  }

  .carousel__indicators::-webkit-scrollbar {
    display: none;
  }

  :host(
    [indicator-configuration='${t(C.mediaPlaylistVideo)}']
  ) {
    --ds-tab-compound-media-width: 50%;
    --ds-tab-compound-base-max-width: 160px;
    --ds-tab-compound-base-width: 50%;
    --ds-button-group-max-width: 267px;
    --ds-button-group-margin-inline: auto;
    --ds-carousel-indicators-flex-direction: column;
  }

  :host([indicator-configuration='${t(C.mediaPlaylistVideo)}'])
    .carousel__indicators
    ::slotted(reimagine-scrollslider-item) {
    padding: ${t(d)};
  }

  :host(
    [indicator-configuration='${t(C.mediaPlaylistVideo)}']
  ) {
    .carousel__indicators {
      position: absolute;
      left: 136px;
      right: 0;
      bottom: 48px;
      z-index: var(--ds-z-index-40, 40);
      transition: bottom 0.6s ease-in-out;
      max-width: 100%;
      padding: ${t(d)};
      opacity: 1;
      display: flex;
    }

    .carousel__indicators.hidden {
      display: none;
    }
  }

  :host(
      [indicator-configuration='${t(C.mediaPlaylistVideo)}'][dir='rtl']
    )
    .carousel__indicators {
    left: 0;
    right: 136px;
  }

  :host(
    [indicator-configuration='${t(C.mediaPlaylistVideo)}']
  ) {
    .carousel__controls {
      position: absolute;
      bottom: 180px;
      left: 136px;
      z-index: var(--ds-z-index-40, 40);
      transition: bottom 0.6s ease-in-out;
      opacity: 1;
    }

    .carousel__controls.hidden {
      bottom: 0;
      opacity: 0;
    }
  }

  :host([indicator-configuration='${t(C.tabs)}'])
    .carousel__indicators {
    --ds-carousel-indicator-button-margin: ${d};
  }

  :host([indicator-configuration='${t(C.labels)}'])
    .carousel__indicators,
  :host([indicator-configuration='${t(C.media)}'])
    .carousel__indicators,
  :host([indicator-configuration='${t(C.badges)}'])
    .carousel__indicators,
  :host([indicator-configuration='${t(C.videos)}'])
    .carousel__indicators,
  :host([indicator-configuration='${t(C.verticalTabs)}'])
    .carousel__indicators {
    padding: var(--ds-carousel-indicator-padding, 1rem);
    margin: -1rem;
  }

  :host([indicator-configuration='${t(C.labels)}'])
    .carousel__indicators,
  :host([indicator-configuration='${t(C.media)}'])
    .carousel__indicators {
    --ds-carousel-indicator-outline-offset: ${u};
  }

  :host([indicator-configuration='${t(C.labels)}'])
    .carousel__indicators,
  :host([indicator-configuration='${t(C.labels)}'])
    .carousel__indicators-container,
  :host([indicator-configuration='${t(C.media)}'])
    .carousel__indicators,
  :host([indicator-configuration='${t(C.media)}'])
    .carousel__indicators-container,
  :host([indicator-configuration='${t(C.badges)}'])
    .carousel__indicators,
  :host([indicator-configuration='${t(C.badges)}'])
    .carousel__indicators-container {
    justify-content: var(--ds-carousel-indicator-justify-content, safe center);
  }

  :host([indicator-configuration='${t(C.bars)}'])
    .carousel__indicators {
    gap: var(
      --ds-carousel-indicators-gap,
      ${t(ht.indicatorsGap)}
    );
  }

  :host([indicator-configuration='${t(C.labels)}'])
    .carousel__indicators,
  :host([indicator-configuration='${t(C.media)}'])
    .carousel__indicators {
    --ds-carousel-indicators-gap: 0;
  }

  :host([indicator-configuration='${t(C.labels)}'])
    .carousel__indicators
    ::slotted(reimagine-carousel-indicator:first-of-type),
  :host([indicator-configuration='${t(C.media)}'])
    .carousel__indicators
    ::slotted(reimagine-carousel-indicator:first-of-type) {
    --ds-tab-compound-border-start-start-radius: var(--ds-app-radii-m, 0.5rem);
    --ds-tab-compound-border-end-start-radius: var(--ds-app-radii-m, 0.5rem);
  }

  :host([indicator-configuration='${t(C.labels)}'])
    .carousel__indicators
    ::slotted(reimagine-carousel-indicator:last-of-type),
  :host([indicator-configuration='${t(C.media)}'])
    .carousel__indicators
    ::slotted(reimagine-carousel-indicator:last-of-type) {
    --ds-tab-compound-border-start-end-radius: var(--ds-app-radii-m, 0.5rem);
    --ds-tab-compound-border-end-end-radius: var(--ds-app-radii-m, 0.5rem);
  }

  :host([enable-indicator-container]) {
    --ds-carousel-indicator-padding: calc(calc(var(--ds-vfi-outline-width, 0.1875rem) + 0.1875rem));
  }

  :host([enable-indicator-container]) .carousel__indicators-container {
    padding: var(
      --ds-carousel-indicator-container-padding,
      ${t(U)}
    );
    display: flex;
    order: var(--ds-carousel-indicators-order, ${t(G)});
  }

  .carousel__screen-reader {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .sr-only {
    color: var(--ds-app-color-base-alt1-fg-heading, #0e1726);
    background-color: var(--ds-app-color-base-alt1-bg-opt1, #f7f7f7);

    position: absolute;
    z-index: var(--ds-z-index-10, 10);
  }

  .sr-only:not(:active):not(:focus) {
    ${x};
  }

  .sr-only__anchor {
    ${h};

    // Style the native anchor element to look like the (button--ghost rounded small) component
    background-color: var(--ds-app-color-base-alt1-bg-opt1, #f7f7f7);
    padding-inline: var(--ds-app-space-micro-s, 0.75rem);
    padding-block: var(--ds-app-space-micro-2xs, 0.25rem);
    text-decoration: none;
    outline-offset: -0.375rem;
    border-radius: var(--ds-app-radii-s, 0.5rem);
    font-weight: ${t(k.fontWeight)};
    font-size: ${t(k.fontSize)};
    line-height: ${t(k.lineHeight)};
    letter-spacing: ${t(k.letterSpacing)};
  }

  a[href='${t(w)}'].sr-only {
    top: var(--ds-skip-link-top-offset, -2rem);
  }

  :host([indicator-configuration='${t(C.media)}'])
    .carousel__indicators {
    display: none;
  }

  .carousel__base {
    margin-block-start: var(
      --ds-carousel-base-margin-block-start,
      ${t(tt)}
    );
    margin-block-end: var(
      --ds-carousel-base-margin-block-end,
      ${t(et)}
    );
    margin-inline-start: var(
      --ds-carousel-base-margin-inline-start,
      ${t(it)}
    );
    margin-inline-end: var(
      --ds-carousel-base-margin-inline-end,
      ${t(ot)}
    );
  }

  .carousel__load-more {
    display: none;
  }
`,ft=e`
  @media (min-width: ${t(T.sm)}) {
    :host([indicator-configuration='${t(C.videos)}'])
      .carousel__indicators {
      --ds-media-max-width: auto;
    }
  }

  @media (max-width: ${t(A(T.sm))}) {
    :host([indicator-configuration='${t(C.videos)}'])
      .carousel__indicators {
      flex-direction: column;
      align-items: center;
    }

    :host(
        [indicator-configuration='${t(C.mediaPlaylistVideo)}']
      )
      .carousel__indicators {
      --ds-scrollslider-base-padding: ${t(d)} var(--ds-app-space-micro-l);
    }
  }

  @media (min-width: ${t(T.md)}) {
    :host([indicator-configuration='${t(C.media)}'])
      .carousel__indicators {
      display: flex;
    }

    :host([indicator-configuration='${t(C.verticalTabs)}']) {
      --ds-carousel-flex-direction: row-reverse;
      --ds-carousel-justify-content: space-between;
      --ds-tabs-base-margin-block-end: 0;
      --ds-carousel-indicator-display: block;
      --ds-carousel-display: grid;
      --ds-carousel-gap-size: 1rem;
      --ds-carousel-gap: calc(
        (var(--ds-carousel-column-total, ${t(Q)}) - 1) *
          var(--ds-carousel-gap-size)
      );

      grid-auto-flow: column;
      grid-auto-columns: var(--ds-carousel-auto-columns, ${t(Y)});

      .carousel__indicators {
        --ds-carousel-indicators-flex-direction: column;
        order: 1;
      }

      .carousel__base {
        order: 2;
      }

      .carousel__controls {
        --ds-carousel-controls-display: none;
      }
    }
  }

  @media (min-width: ${t(T.lg)}) {
    :host([indicator-configuration='${t(C.verticalTabs)}']) {
      --ds-carousel-gap: calc(
        (
            var(
                --ds-carousel-column-total-viewports-large,
                ${t(X)}
              ) -
              1
          ) *
          var(--ds-carousel-gap-size)
      );
    }
  }

  @media (max-width: ${t(A(`${z}px`))}) {
    :host(
      [indicator-configuration='${t(C.mediaPlaylistVideo)}']
    ) {
      .carousel__indicators {
        --ds-carousel-indicators-flex-direction: column;
        --ds-app-space-layout-stack-comfortable: 0;
        --ds-tab-compound-base-display: block;
        --ds-scrollslider-base-flex-direction: column;
        --ds-scrollslider-base-align-items: center;
        overflow-x: hidden;
        position: static;
        align-items: center;
      }

      .carousel__controls {
        display: none;
      }
    }
  }

  @media (min-width: ${t(`${z}px`)}) {
    :host(
      [indicator-configuration='${t(C.mediaPlaylistVideo)}']
    ) {
      .carousel__indicators {
        --ds-media-max-width: auto;
      }
    }
  }
`;class $t{constructor(t,e){this._active=!0,this._toggleAutoplay=()=>{this._active?this._pause():this._play()},this._host=t,this._playPauseButton=null==e?void 0:e.playPauseButton,this._interval=(null==e?void 0:e.interval)??3e3,this._getNextSlide=(null==e?void 0:e.getNextSlide)??(()=>{}),this._onAutoplayStateChange=null==e?void 0:e.onAutoplayStateChange,this._liveRegionId=`autoplay-controller-live-region-${Math.random().toString(36).slice(2)}`,t.addController(this)}hostConnected(){var t;if(null==(t=this._playPauseButton)||t.addEventListener("click",this._toggleAutoplay),this._playPauseButton&&this._playPauseButton.parentElement&&!document.querySelector(`#${this._liveRegionId}`)){const t=document.createElement("div");t.setAttribute("id",this._liveRegionId),t.setAttribute("aria-live","polite"),t.style.position="absolute",t.style.width="1px",t.style.height="1px",t.style.overflow="hidden",t.style.clip="rect(1px, 1px, 1px, 1px)",t.style.clipPath="inset(50%)",t.style.left="0",t.style.top="0",document.body.append(t),this._liveRegion=t}this._active&&this._start()}hostDisconnected(){var t;null==(t=this._playPauseButton)||t.removeEventListener("click",this._toggleAutoplay),this._clear(),this._liveRegion&&this._liveRegion.parentElement&&(this._liveRegion.remove(),this._liveRegion=void 0)}get isActive(){return this._active}_play(){var t;this._active=!0,this._start(),this._updateButton(),null==(t=this._onAutoplayStateChange)||t.call(this,this._active)}_pause(){var t;this._active=!1,this._clear(),this._updateButton(),null==(t=this._onAutoplayStateChange)||t.call(this,this._active)}pauseAutoplay(){this._active&&this._pause()}_start(){this._clear(),this._timer=window.setInterval(()=>{this._getNextSlide()},this._interval)}_clear(){this._timer&&(clearInterval(this._timer),this._timer=void 0)}_updateButton(){if(this._playPauseButton){const t=g(this._playPauseButton,j);if(t&&t.setAttribute("icon",this._active?"pause":"play"),this._liveRegion){this._liveRegion.textContent="";const t=this._host.playButtonLabel||"Play",e=this._host.pauseButtonLabel||"Pause";this._liveRegion.textContent=this._active?t:e}}}}var St=Object.defineProperty,It=Object.getOwnPropertyDescriptor,xt=Object.getPrototypeOf,Ct=Reflect.get,Et=(t,e,i,o)=>{for(var s,a=o>1?void 0:o?It(e,i):e,r=t.length-1;r>=0;r--)(s=t[r])&&(a=(o?s(e,i,a):s(a))||a);return o&&a&&St(e,i,a),a};const kt="reimagine-carousel";let wt=class extends R{constructor(){super(),this.layoutConfiguration=p.card1,this.slideLabel="slide",this.skipLabel="Skip Items",this.endLabel="End of items",this.playButtonLabel="Play",this.pauseButtonLabel="Pause",this.backToControlsLabel="Back to Next and Previous controls",this.enableIndicatorContainer=!1,this.enableBaseContainer=!1,this.showControls=!1,this.disableIndicatorClicks=!1,this.showTrailingStatus=!1,this.autoplay=!1,this.autoplayInterval=3e3,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._carouselIndicatorSlotEmpty=!0,this._carouselHeaderSlotEmpty=!0,this._trailingSlotEmpty=!0,this._playButtonSlotEmpty=!0,this._carouselEvents=[],this._firstVisibleIndex=0,this._lastVisibleIndex=0,this._isAutoplayActive=!1,this._isHorizontalOverflow=!1,this._isScrolling=!1,this._debouncedSetStatusMessage=_(100,this._setStatusMessage.bind(this)),this._handleScrollSettle=_(150,this._onScrollSettle.bind(this)),this._handleBackToControls=t=>{t.preventDefault(),this.indicatorConfiguration!==C.mediaPlaylistVideo?!this._nextControlDisabled&&this._nextControlDefault.checkVisibility()?this._nextControlDefault.focus():!this._prevControlDisabled&&this._prevControlDefault.checkVisibility()?this._prevControlDefault.focus():this._carouselIndicators.length?this._carouselIndicators[this._carouselIndicators.length-1].focus():this._scrollsliderItems[this._scrollsliderItems.length-1].focus():this._handleMediaPlaylistVideoBackToControls()},this._handleMediaPlaylistVideoBackToControls=()=>{const t=b(this,"reimagine-media-playlist-video");t&&"function"==typeof t.handleBackToControls&&t.handleBackToControls()},this._handleSkip=t=>{var e;t.preventDefault(),(null==(e=this.shadowRoot)?void 0:e.querySelector(w)).focus()},this._handleIndicatorClick=t=>{if(!this.disableIndicatorClicks)for(let e=0;e<this._carouselIndicators.length;e++){(this._carouselIndicators[e]===t.target||this._carouselIndicators[e].contains(t.target))&&(this._setIndicatorAttributes(e),this._scrollsliderItems[e]&&(this._scrollsliderItems[e].removeAttribute("inert"),this._scrollsliderItems[e].focus(),setTimeout(()=>{this._scrollsliderItems[e].scrollIntoView({block:"nearest"})},0)));const i=this._scrollsliderItems[e];if(i){const t=g(i,V);t instanceof P&&t.pauseVideo()}}},this._handleIndicatorFocus=t=>{t.target.scrollIntoView({block:"nearest"})},this._handleScrollActivity=()=>{this._isScrolling=!0,this._handleScrollSettle()},this._handlePlayButtonClick=()=>{setTimeout(()=>{if(!this._playButtonSlot[0]||!this._screenReaderStatusElement||!this._autoplayController)return;const t=this._autoplayController.isActive,e=this._screenReaderStatusElement.querySelector("span.sr-only");t?(this._screenReaderStatusElement.removeAttribute("role"),e&&e.removeAttribute("aria-live")):(this._screenReaderStatusElement.setAttribute("role","status"),e&&e.setAttribute("aria-live","polite"))},0)},this._handleControlClick=()=>{this.autoplay&&this._autoplayController&&"function"==typeof this._autoplayController.pauseAutoplay&&this._autoplayController.pauseAutoplay()},this.scrollSliderRole="",this.scrollSliderItemRole="group",this._viewportResizeObserver=new B(this,{callback:()=>this._handleViewportChange()})}get _trailingPagination(){return y(this._trailingElements,D)}_detectCarouselOverflow(){requestAnimationFrame(()=>{var t;if(!this._baseElement||!this._carouselControlsElement||!this._scrollableElement)return;const e=this._scrollableElement.scrollWidth>this._scrollableElement.clientWidth+1,i=this._getIndicatorsOverflow(),o=!this._carouselIndicatorSlotEmpty&&this.hasAttribute("indicator-configuration"),s=(null==(t=this._viewportResizeObserver)?void 0:t.isDesktop())||!1,a=o&&s?this.showControls&&e||i:e;this._carouselControlsElement.style.display=a?"":"none",this._isHorizontalOverflow=e,this._layoutElement&&(this._layoutElement.overflowTabIndex=e?0:void 0)})}_getIndicatorsOverflow(){return!!this._carouselIndicatorsElement&&this._carouselIndicatorsElement.scrollWidth>this._carouselIndicatorsElement.clientWidth}_isItemVisibleInScrollViewport(t,e){const i=t.getBoundingClientRect();return Math.min(i.right,e.right)-Math.max(i.left,e.left)>1}_setItemVisibility(t,e){e?(t.removeAttribute("inert"),this._isHorizontalOverflow?t.removeAttribute("tabindex"):t.setAttribute("tabindex","0")):(t.setAttribute("tabindex","-1"),t.setAttribute("inert",""))}_updateItemVisibility(){var t;const e=null==(t=this._scrollableElement)?void 0:t.getBoundingClientRect(),i=this._scrollsliderItems.map((t,i)=>i>=this._firstVisibleIndex&&i<=this._lastVisibleIndex||!!e&&this._isItemVisibleInScrollViewport(t,e));this._scrollsliderItems.forEach((t,e)=>{this._setItemVisibility(t,i[e])})}_checkIndicatorOverflow(){requestAnimationFrame(()=>{var t;this._carouselIndicatorsElement&&this._carouselControlsElement&&(!this._getIndicatorsOverflow()&&null!=(t=this._viewportResizeObserver)&&t.isDesktop()&&this.hasAttribute("indicator-configuration")&&!this.showControls?this._carouselControlsElement.style.display="none":this._carouselControlsElement.style.display="")})}_setScrollsliderItems(){const t=[];this._windowSlot.forEach(e=>{const i=g(e,"reimagine-carousel-item");i&&t.push(i)}),this._scrollsliderItems=t;const e=this._scrollsliderItems.length;this._scrollsliderItems.forEach((t,i)=>{t.setAttribute("role",this.scrollSliderItemRole),t.setAttribute("aria-roledescription",this.slideLabel),t.setAttribute("aria-label",this.msg("slidePosition",{index:i+1,total:e})||`${i+1} of ${e}`)}),this._updateItemVisibility()}_setStatusMessage(){const t=[];!this._scrollsliderItems||0===this._scrollsliderItems.length||(this._scrollsliderItems.forEach((e,i)=>{e.hasAttribute("partial")||t.push(i)}),0!==t.length&&(this._firstVisibleIndex=t[0],this._lastVisibleIndex=t[t.length-1],this._updateItemVisibility(),void 0!==this._firstVisibleIndex&&this._setIndicatorAttributes(this._firstVisibleIndex),this._isScrolling||this._updateTrailingStatus()))}getVisibleSlides(){if(!this._scrollsliderItems||0===this._scrollsliderItems.length)return 1;const t=this._baseElement;if(!t)return 1;const e=t.getBoundingClientRect();let i=0;for(const t of this._scrollsliderItems){const o=t.getBoundingClientRect(),s=Math.max(o.left,e.left),a=Math.min(o.right,e.right),r=Math.max(0,a-s),l=o.width;l>0&&r/l>=.5&&i++}return i||1}_goToNextSlide(){if(!this._scrollsliderItems||0===this._scrollsliderItems.length)return;const t=this.getVisibleSlides();let e=this._firstVisibleIndex+t;e>=this._scrollsliderItems.length&&(e=0),this._setIndicatorAttributes(e,!1),setTimeout(()=>{const t=this._scrollsliderItems[e],i=this._scrollableElement||this._baseElement;if(i&&t){const e=t.offsetLeft;i.scrollTo({left:e,behavior:"smooth"})}},0)}_handleSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length,this._carouselHeaderSlotEmpty=0===this._headerSlot.length,this._playButtonSlotEmpty=0===this._playButtonSlot.length,this._trailingSlotEmpty=0===this._trailingSlot.length,this.autoplay&&!this._playButtonSlotEmpty&&this._updateAutoplay()}_updateAutoplay(){var t;this._isAutoplayActive=!0;let e=!1,i=!1;i=(null==(t=this._viewportResizeObserver)?void 0:t.isDesktop())||!1,requestAnimationFrame(()=>{var t;if(e="none"===(null==(t=this._carouselControlsElement)?void 0:t.style.display),this.isInIndicatorContainer&&!e&&i&&(this.movePlayButton(),this.style.setProperty("--ds-carousel-play-button-order","0"),this._carouselIndicatorsElement)){const t=this._carouselIndicatorsElement.offsetWidth,e=this._playButtonSlot[0],i=(null==e?void 0:e.offsetWidth)||0;null==e||e.style.setProperty("margin-inline-start",`${t}px`),this._carouselIndicatorsElement.style.setProperty("margin-inline-start",-i+"px")}}),this._autoplayController instanceof $t||(this._autoplayController=new $t(this,{playPauseButton:this._playButtonSlot[0],interval:this.autoplayInterval,getNextSlide:this._goToNextSlide.bind(this),onAutoplayStateChange:t=>{this._isAutoplayActive=t}})),this._playButtonSlot.forEach(t=>{v(t,{"icon-only":"",appearance:"button--ghost",shape:"rounded",size:"small"})});const o=g(this,j);o&&v(o,{size:"medium",filled:"",icon:"pause","aria-hidden":"true",role:"presentation"})}_handleBaseSlotChange(){if(super._handleBaseSlotChange(),this._carouselIndicatorSlotEmpty=0===this._carouselIndicators.length,requestAnimationFrame(()=>{this._checkIndicatorOverflow(),this._detectCarouselOverflow()}),this._scrollsliderItems.length>0&&this._debouncedSetStatusMessage(),!this._carouselIndicatorSlotEmpty&&this._scrollsliderItems.length>0){for(let t=0;t<this._carouselIndicators.length;t++)this._carouselEvents.push({el:this._carouselIndicators[t],type:"click",handler:this._handleIndicatorClick},{el:this._carouselIndicators[t],type:"focus",handler:this._handleIndicatorFocus}),this._carouselIndicators[t].setAttribute("role","listitem");f(this._carouselEvents),$(this._carouselEvents)}}_renderOptionalSlot(t,e){return l`
      <div part=${t} class=${t} style="${e?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_setIndicatorAttributes(t,e=!1){if(void 0!==t)for(let i=0;i<this._carouselIndicators.length;i++){let o=this._carouselIndicators[i];o&&o.tagName.toLocaleLowerCase()!==M&&(o=g(this._carouselIndicators[i],M)),i===t?(o.setAttribute("aria-current","true"),o.setAttribute("active",""),e&&o.scrollIntoView({block:"nearest"})):(o.setAttribute("aria-current","false"),o.removeAttribute("active")),this.disableIndicatorClicks?o.setAttribute("disable-clicks",""):o.removeAttribute("disable-clicks")}}_onScroll(){super._onScroll(),void 0!==this._firstVisibleIndex&&this._setIndicatorAttributes(this._firstVisibleIndex,!1)}_handleLayoutMount(){var t;this._scrollableElement=this._layoutElement.renderRoot.querySelector(".layout__base"),null==(t=this._scrollableElement)||t.addEventListener("scroll",this._handleScrollActivity,{passive:!0})}_onScrollSettle(){this._isScrolling=!1,this._setStatusMessage()}_updateTrailingStatus(){this._trailingStatusText=this._getStatusLabel("-"),this._screenReaderStatusText=this._getStatusLabel("through")}indicatorSliderTemplate(){const t=l`
      <reimagine-scrollslider
        control-position="top-start"
        control-size="large"
        part="carousel__indicators"
        class="carousel__indicators"
        style="${this._carouselIndicatorSlotEmpty?"display: none":""}"
      >
        <slot name="carousel__indicators" @slotchange="${this._handleBaseSlotChange}"></slot>
      </reimagine-scrollslider>
    `;return this.enableIndicatorContainer?l`
        <reimagine-container
          class="carousel__indicators-container"
          part="carousel__indicators-container"
          style="${this._carouselIndicatorSlotEmpty?"display: none":""}"
        >
          ${t}
        </reimagine-container>
      `:t}skipTargetTemplate(){return l`<slot name="skip-target">
      ${this._skipLinkTemplate(this.endLabel,void 0,"end-of-carousel")}
    </slot>`}backToControlsTemplate(){return l`<slot name="back-to-controls">
      ${this.backToControlsLabel&&!this.hideControls?l`${this._skipLinkTemplate(this.backToControlsLabel,this._handleBackToControls,void 0,"#")}`:n}
    </slot>`}_getStatusLabel(t){const e=this._firstVisibleIndex+1,i=this._lastVisibleIndex+1,o=this._scrollsliderItems.length,s=e===i?`Showing ${e} of ${o} items`:`Showing ${e} ${t} ${i} of ${o} items`;return this.msg("status",{start:e,end:i,total:o})||s}screenReaderTemplate(){const t=this._screenReaderStatusText??"";return l`
      <div part="carousel__screen-reader" class="carousel__screen-reader">
        <!-- Status -->
        <div
          part="carousel__screen-reader-status"
          class="carousel__screen-reader-status"
          role=${c(this._isAutoplayActive?void 0:"status")}
        >
          <span
            class="sr-only"
            aria-live=${c(this._isAutoplayActive?void 0:"polite")}
          >
            ${t}
          </span>
        </div>
        <!-- Back to Controls  -->
        ${this.backToControlsTemplate()}
        <!-- Skip Target Template  -->
        ${this.skipTargetTemplate()}
      </div>
    `}indicatorTemplate(){const t=l`
      <div
        part="carousel__indicators"
        class="carousel__indicators"
        role="list"
        style="${this._carouselIndicatorSlotEmpty?"display: none":""}"
      >
        <slot name="carousel__indicators" @slotchange="${this._handleBaseSlotChange}"></slot>
      </div>
    `;return this.enableIndicatorContainer?l`
        <reimagine-container
          class="carousel__indicators-container"
          part="carousel__indicators-container"
          style="${this._carouselIndicatorSlotEmpty?"display: none":""}"
        >
          ${t} ${this.autoplay?this.autoPlayButtonTemplate():n}
        </reimagine-container>
      `:t}autoPlayButtonTemplate(){return this.autoplay?l`
      <div
        part="play-button"
        class="play-button"
        style="${this._playButtonSlotEmpty?"display: none;":""}"
      >
        <slot name="play-button" @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `:n}controlsTemplate(){var t;this.controlSize=null!=(t=this._viewportResizeObserver)&&t.isMobile()?m.small:m.large;const e=l`
        <div part="carousel__controls" class="carousel__controls">
          ${super.prevControlTemplate()} ${super.nextControlTemplate()}
          ${this._renderOptionalSlot("carousel__trailing",this._trailingSlotEmpty)}
          ${this.showTrailingStatus?this.trailingStatusTemplate():n}
        </div>
    `;return this.enableIndicatorContainer?l`
        <reimagine-container
          class="carousel__controls-container"
          part="carousel__controls-container"
        >
          ${e}
        </reimagine-container>
      `:e}_skipLinkTemplate(t,e,i,o,s){return o||i?l`
        <a
          href=${c(o)}
          id=${c(i)}
          tabindex=${c(i?-1:void 0)}
          target=${c(s)}
          class="sr-only sr-only__anchor"
          @click=${e}
          >${t}</a
        >
      `:l`
      <reimagine-button
        class="sr-only"
        appearance="button--ghost"
        shape="rounded"
        size="small"
        @click=${e}
      >
        <span slot="button__text">${t}</span>
      </reimagine-button>
    `}_handleViewportChange(){var t,e,i;null!=(t=this._viewportResizeObserver)&&t.isDesktop()&&this._checkIndicatorOverflow(),this._detectCarouselOverflow(),this.indicatorConfiguration===C.verticalTabs&&(null!=(e=this._viewportResizeObserver)&&e.isMobile()&&"horizontal"!==this._tabItemConfig?this._updateTabItemHorizontal():null!=(i=this._viewportResizeObserver)&&i.isDesktop()&&"vertical"!==this._tabItemConfig&&this._updateTabItemVertical())}_getTabItems(){return this._carouselIndicators.filter(t=>t instanceof HTMLElement).flatMap(t=>Array.from(S(t,O)??[]))}_updateTabItemHorizontal(){const t=this._getTabItems();if(this.indicatorConfiguration===C.verticalTabs)for(let e=0;e<this._carouselIndicators.length;e++){const i=this._carouselIndicators[e],o=t[e];null==i||i.setAttribute("configuration",L.tabItemHorizontal),null==o||o.setAttribute("configuration",L.tabItemHorizontal)}this._tabItemConfig="horizontal"}_updateTabItemVertical(){const t=this._getTabItems();if(this.indicatorConfiguration===C.verticalTabs)for(let e=0;e<this._carouselIndicators.length;e++){const i=this._carouselIndicators[e],o=t[e];null==i||i.setAttribute("configuration",L.tabItemVertical),null==o||o.setAttribute("configuration",L.tabItemVertical)}this._tabItemConfig="vertical"}updated(){this._checkIndicatorOverflow(),this._detectCarouselOverflow(),this._syncTrailingPagination()}_syncTrailingPagination(){var t,e;const i=null==(t=this._trailingPagination)?void 0:t[0];if(!i)return;const o=(null==(e=this._scrollsliderItems)?void 0:e.length)??0;o<1||(i.setAttribute("total-pages",String(o)),i.setAttribute("current",String(this._firstVisibleIndex+1)))}baseSlotTemplate(){let t=l`
      <reimagine-layout
        part="carousel__layout"
        class="carousel__layout"
        configuration=${this.layoutConfiguration}
        @onMount="${this._handleLayoutMount}"
      >
        <slot
          name="carousel__window"
          @slotchange=${this._handleBaseSlotChange}
          @onPartialChange=${this._debouncedSetStatusMessage}
        ></slot>
      </reimagine-layout>
    `;return this.enableBaseContainer&&(t=l`
        <reimagine-container class="carousel__base-container" part="carousel__base-container">
          ${t}
        </reimagine-container>
      `),l` <div
      part="carousel__base"
      class="carousel__base"
      tabindex="-1"
      @onScroll="${_(60,this._onScroll)}"
    >
      ${t}
    </div>`}firstUpdated(){if(super.firstUpdated(),this.autoplay){const t=this._playButtonSlot[0];if(t&&this._carouselEvents.push({el:t,type:"click",handler:this._handlePlayButtonClick}),this._prevControlElement){const t=this._prevControlElement.querySelector(".scrollslider__prev-control-default");t&&this._carouselEvents.push({el:t,type:"click",handler:this._handleControlClick})}if(this._nextControlElement){const t=this._nextControlElement.querySelector(".scrollslider__next-control-default");t&&this._carouselEvents.push({el:t,type:"click",handler:this._handleControlClick})}if(f(this._carouselEvents),$(this._carouselEvents),this._screenReaderStatusElement){this._screenReaderStatusElement.removeAttribute("role");const t=this._screenReaderStatusElement.querySelector("span.sr-only");t&&t.removeAttribute("aria-live")}}}connectedCallback(){super.connectedCallback();const t=b(this,"reimagine-tabs"),e=S(t,"reimagine-carousel");this.fullBleed&&t&&e&&e.length>0&&(this._resizeObserver=new ResizeObserver(()=>{e.forEach(t=>{const e=t;super._handleFullBleedResize(e)})}),this._resizeObserver.observe(t))}disconnectedCallback(){var t,e;super.disconnectedCallback(),f(this._carouselEvents),null==(t=this._scrollableElement)||t.removeEventListener("scroll",this._handleScrollActivity),null==(e=this._resizeObserver)||e.disconnect(),this._carouselEvents=[]}trailingStatusTemplate(){const t=this._trailingStatusText??"";return l`
      <div
        part="carousel__trailing-status"
        class="carousel__trailing-status"
      >
        ${t}
      </div>
    `}render(){return l`
      <!-- Skip link -->
      ${this.skipLabel?this._skipLinkTemplate(this.skipLabel,this._handleSkip,void 0,w,"_self"):n}

      <!-- First slot -->
      ${this._renderOptionalSlot("carousel__first",this._firstSlotEmpty)}

      <!-- Header slot -->
      ${this._renderOptionalSlot("carousel__header",this._carouselHeaderSlotEmpty)}

      <!-- Indicator slot -->
      ${this.indicatorConfiguration===C.mediaPlaylistVideo?this.indicatorSliderTemplate():this.indicatorTemplate()}

      <!-- Controls -->
      ${this.controlsTemplate()}

      <!-- Render autoplay button outside indicator container if enabled -->
      ${!this.enableIndicatorContainer&&this.autoplay?this.autoPlayButtonTemplate():n}

      <!-- Base slot -->
      ${this.baseSlotTemplate()}

      <!-- Last Slot -->
      ${this._renderOptionalSlot("carousel__last",this._lastSlotEmpty)}

      <!-- Screen reader -->
      ${this.screenReaderTemplate()}
    `}get isInIndicatorContainer(){return!(!this.enableIndicatorContainer||this._playButtonSlotEmpty||!this._carouselIndicatorsContainerElement.contains(this._playButtonElement))}movePlayButton(){this._playButtonElement&&this._carouselControlsElement&&this._prevControlElement&&this._carouselControlsElement.insertBefore(this._playButtonElement,this._prevControlElement.nextSibling)}};var Bt,Tt,At;wt.styles=[...(Bt=wt,Tt=wt,At="styles",Ct(xt(Bt),At,Tt)),vt,ft],Et([i({attribute:"layout-configuration",type:String,reflect:!0})],wt.prototype,"layoutConfiguration",2),Et([i({type:String,attribute:"slide-label"})],wt.prototype,"slideLabel",2),Et([i({attribute:"indicator-configuration",reflect:!0})],wt.prototype,"indicatorConfiguration",2),Et([i({reflect:!0,attribute:"skip-label"})],wt.prototype,"skipLabel",2),Et([i({reflect:!0,attribute:"end-label"})],wt.prototype,"endLabel",2),Et([i({type:String,attribute:"play-button-label"})],wt.prototype,"playButtonLabel",2),Et([i({type:String,attribute:"pause-button-label"})],wt.prototype,"pauseButtonLabel",2),Et([i({reflect:!0,attribute:"back-to-controls-label"})],wt.prototype,"backToControlsLabel",2),Et([i({type:Boolean,reflect:!0,attribute:"enable-indicator-container"})],wt.prototype,"enableIndicatorContainer",2),Et([i({type:Boolean,reflect:!0,attribute:"enable-base-container"})],wt.prototype,"enableBaseContainer",2),Et([i({type:Boolean,reflect:!0,attribute:"show-controls"})],wt.prototype,"showControls",2),Et([i({type:Boolean,reflect:!0,attribute:"disable-indicator-clicks"})],wt.prototype,"disableIndicatorClicks",2),Et([i({type:Boolean,reflect:!0,attribute:"show-trailing-status"})],wt.prototype,"showTrailingStatus",2),Et([i({type:Boolean,reflect:!0})],wt.prototype,"autoplay",2),Et([i({type:Number,reflect:!0,attribute:"autoplay-interval"})],wt.prototype,"autoplayInterval",2),Et([o()],wt.prototype,"_autoplayController",2),Et([s({slot:"carousel__first"})],wt.prototype,"_firstSlot",2),Et([s({slot:"carousel__last"})],wt.prototype,"_lastSlot",2),Et([a({slot:"carousel__window"})],wt.prototype,"_windowSlot",2),Et([a({slot:"carousel__indicators"})],wt.prototype,"_carouselIndicators",2),Et([s({slot:"carousel__trailing"})],wt.prototype,"_trailingSlot",2),Et([a({slot:"carousel__trailing"})],wt.prototype,"_trailingElements",2),Et([s({slot:"carousel__header"})],wt.prototype,"_headerSlot",2),Et([s({slot:"play-button"})],wt.prototype,"_playButtonSlot",2),Et([r(".carousel__base")],wt.prototype,"_baseElement",2),Et([r(".carousel__layout")],wt.prototype,"_layoutElement",2),Et([r(".carousel__indicators-container")],wt.prototype,"_carouselIndicatorsContainerElement",2),Et([r(".carousel__indicators")],wt.prototype,"_carouselIndicatorsElement",2),Et([r(".carousel__controls")],wt.prototype,"_carouselControlsElement",2),Et([r(".play-button")],wt.prototype,"_playButtonElement",2),Et([r(".scrollslider__prev-control")],wt.prototype,"_prevControlElement",2),Et([r(".scrollslider__next-control")],wt.prototype,"_nextControlElement",2),Et([r(".carousel__screen-reader-status")],wt.prototype,"_screenReaderStatusElement",2),Et([o()],wt.prototype,"_firstSlotEmpty",2),Et([o()],wt.prototype,"_lastSlotEmpty",2),Et([o()],wt.prototype,"_carouselIndicatorSlotEmpty",2),Et([o()],wt.prototype,"_carouselHeaderSlotEmpty",2),Et([o()],wt.prototype,"_trailingSlotEmpty",2),Et([o()],wt.prototype,"_playButtonSlotEmpty",2),Et([o()],wt.prototype,"_carouselEvents",2),Et([o()],wt.prototype,"_firstVisibleIndex",2),Et([o()],wt.prototype,"_lastVisibleIndex",2),Et([o()],wt.prototype,"_trailingStatusText",2),Et([o()],wt.prototype,"_screenReaderStatusText",2),Et([o()],wt.prototype,"_scrollsliderSpacing",2),Et([o()],wt.prototype,"_tabItemConfig",2),Et([o()],wt.prototype,"_viewportResizeObserver",2),wt=Et([I(kt)],wt);export{wt as C,ht as c,kt as n};
