import{r as e,i as t,b as n,o,e as s,f as a,c as i,k as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{q as l,s as c,w as d,d as m}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{c as p,B as h}from"/__mirror/assets/4230c2711e37b2e85105da0e";import{r as u,w as _,C as g,S as f}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{s as b}from"/__mirror/assets/579a4c6140e643b41d22eee8";import{v}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{F as y,P as w,i as x,j as S,B as $}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{D as k,a as E}from"/__mirror/assets/34233ee5ac8acdb3aa831b25";import"/__mirror/assets/5d2e1bf3d87581457a2b76db";import{SurfaceElement as C}from"/__mirror/assets/e09cf4eae8f90fbcbeb198a9";const z="flex",j="space-between",B="start",T="initial",H="var(--ds-app-space-micro-xs, 0.5rem)",M="var(--ds-app-space-micro-xs, 0.5rem)",I="var(--ds-app-space-micro-xs, 0.5rem)",P="var(--ds-app-space-micro-xs, 0.5rem)",D="var(--ds-app-space-micro-xs, 0.5rem)",A="var(--ds-app-color-base-default-fg-heading, #0e1726)",L=t`
  .announcement__banner {
    background: var(
      --ds-fill-color-override,
      var(--ds-announcement-background, ${e(p.background)})
    );
    display: var(--ds-announcement-display, ${e(z)});
    gap: var(--ds-announcement-gap, ${e(H)});
    position: var(--ds-announcement-position, ${e(T)});
    align-items: var(--ds-announcement-align-items, ${e(B)});
    padding-block-start: var(
      --ds-announcement-block-start,
      ${e(M)}
    );
    padding-block-end: var(
      --ds-announcement-padding-block-end,
      ${e(I)}
    );
    padding-inline-start: var(
      --ds-announcement-padding-inline-start,
      ${e(P)}
    );
    padding-inline-end: var(
      --ds-announcement-padding-inline-end,
      ${e(D)}
    );
    justify-content: var(
      --ds-announcement-justify-content,
      ${e(j)}
    );
  }

  .announcement__close-sr {
    ${b};
  }

  .announcement__center {
    display: var(--ds-announcement-center-display, flex);
    flex-direction: var(--ds-announcement-center-flex-direction, column);
    align-items: var(--ds-announcement-center-align-items, center);
    text-align: var(--ds-announcement-center-text-align, center);
    gap: var(
      --ds-announcement-center-gap,
      ${e("0")}
    );
    width: var(--ds-announcement-center-width, 100%);
    z-index: var(--ds-z-index-10, 10);
  }

  :host ::slotted([slot='announcement__badge']) {
    z-index: var(--ds-z-index-10, 10);
  }

  :host ::slotted([slot='announcement__label']) {
    color: ${e(A)};
    font-weight: ${e(u.fontWeight)};
    font-size: ${e(u.fontSize)};
    line-height: ${e(u.lineHeight)};
    letter-spacing: ${e(u.letterSpacing)};
  }

  :host ::slotted([slot='announcement__link']) {
    --ds-link-color: var(--ds-text-color-override, ${e(A)});
  }

  :host([countdown]) {
    --ds-card-timer-number-font-size: var(--ds-app-type-body-m-font-size, 1rem);
    --ds-card-timer-separator-display: none;
    --ds-card-timer-base-child-display: flex;
    --ds-card-timer-base-child-gap: var(--ds-app-space-micro-2xs, 0.25rem);
    --ds-card-timer-padding-block: 0;
    --ds-card-timer-padding-inline: 0;
    --ds-card-timer-number-line-height: 1.5;
    --ds-card-timer-gap: var(--ds-app-space-micro-2xs, 0.25rem);
    --ds-card-timer-number-font-weight: 600;
    --ds-announcement-center-display: block;
    --ds-link-display: inline-block;
    --ds-surface-cursor: pointer;
  }

  :host([countdown]) .announcement__center {
    --ds-announcement-center-gap: var(--ds-app-space-micro-2xs, 0.25rem);
  }

  :host([countdown]) ::slotted([slot='announcement__label']),
  :host([countdown]) ::slotted([slot='announcement__expired-label']),
  :host([countdown]) ::slotted([slot='announcement__expired-post-label']),
  :host([countdown]) ::slotted([slot='announcement__post-label']) {
    display: inline;
    color: var(--ds-app-color-base-default-fg-heading, #0e1726);
  }

  :host([countdown]) ::slotted([slot='announcement__countdown']) {
    display: inline-flex;
  }

  /* In-Hero configuration styles */
  .media {
    position: absolute;
    inset: 0;
    overflow: hidden;
    z-index: var(--ds-z-index-0, 0);
  }

  :host([scroll-effect]) .media {
    will-change: transform;
  }

  .media ::slotted(*) {
    --ds-media-display: block;
    --ds-media-width: 100%;
    --ds-media-height: 100%;
    --ds-media-object-fit: cover;
    --ds-media-picture-height: 100%;
    --ds-media-asset-display: block;
    --ds-media-asset-width: 100%;
    --ds-media-asset-height: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .wrapper {
    display: contents;
  }

  /* Full-width Stacked: content stacks in a centered column (badge/asset above text + link) */
  :host([configuration='full-width--stacked']) .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--ds-app-space-micro-2xs, 0.25rem);
    width: 100%;
  }

  :host([configuration='in-hero--horizontal']) .wrapper,
  :host([configuration='in-hero--stacked']) .wrapper {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: var(--ds-announcement-content-gap, var(--ds-app-space-micro-xs, 0.5rem));
    width: 100%;
  }

  :host([configuration='in-hero--horizontal']) .announcement__banner,
  :host([configuration='in-hero--stacked']) .announcement__banner {
    padding-block: var(--ds-app-space-micro-s, 0.75rem);

    /* Combines outer inset (--ds-app-space-micro-s) with inner content padding to match Figma spec */
    padding-inline: calc(
      var(--ds-app-space-micro-s, 0.75rem) +
        var(--ds-announcement-content-padding-inline, var(--ds-app-space-micro-2xl, 2rem))
    );
    min-height: inherit;
  }

  :host([configuration='in-hero--horizontal']),
  :host([configuration='in-hero--stacked']) {
    position: relative;
    display: block;
    overflow: hidden;
    
    --ds-surface-border-radius: var(--ds-radii-l, 1rem);
    --ds-announcement-center-gap: var(--ds-app-space-micro-xs, 0.5rem);
  }

  @media (prefers-reduced-motion: no-preference) {
    :host([configuration='in-hero--horizontal'][animation-enter]) .media,
    :host([configuration='in-hero--stacked'][animation-enter]) .media {
      animation: announcement-slide-in 800ms ease;
    }

    :host([configuration='in-hero--horizontal'][animation-enter]) .wrapper,
    :host([configuration='in-hero--stacked'][animation-enter]) .wrapper {
      animation: announcement-slide-in 800ms ease both;
      animation-delay: 400ms;
    }
  }

  @keyframes announcement-slide-in {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  :host([configuration='in-hero--horizontal']) ::slotted(reimagine-media[slot='asset']),
  :host([configuration='in-hero--stacked']) ::slotted(reimagine-media[slot='asset']) {
    --ds-media-height: 32px;
    --ds-media-max-height: 32px;
  }

  :host([configuration='in-hero--stacked']) .announcement__dismiss,
  :host([configuration='in-hero--horizontal']) .announcement__dismiss {
    position: absolute;
    inset-block-start: var(--ds-app-space-micro-s, 0.75rem);
    inset-inline-end: var(--ds-app-space-micro-s, 0.75rem);
    transform: translateY(0);
  }
`,O=t`
  @media (min-width: ${e(v.md)}) {
    :host {
      --ds-announcement-justify-content: center;
      --ds-announcement-align-items: center;
      --ds-announcement-position: relative;
      --ds-announcement-gap: var(--ds-app-space-micro-s, 0.75rem);
      --ds-announcement-padding-block-start: var(--ds-app-space-micro-xs, 0.5rem);
      --ds-announcement-padding-block-end: var(--ds-app-space-micro-xs, 0.5rem);
      --ds-announcement-padding-inline-start: var(--ds-app-space-micro-4xl, 6rem);
      --ds-announcement-padding-inline-end: var(--ds-app-space-micro-4xl, 6rem);
    }

    .announcement__center {
      --ds-announcement-center-flex-direction: row;
      --ds-announcement-center-gap: var(--ds-app-space-micro-xs, 0.5rem);
      --ds-announcement-center-width: auto;
    }

    /* Full-width Stacked keeps the label + link in a centered column on VP3+ */
    :host([configuration='full-width--stacked']) .announcement__center {
      --ds-announcement-center-flex-direction: column;
      --ds-announcement-center-width: 100%;
    }

    .announcement__dismiss {
      position: absolute;
      inset-inline-end: var(--ds-app-space-micro-m, 1rem);
      inset-block-start: 50%;
      transform: translateY(-50%);
    }

    /* In-Hero: horizontal layout on VP3+ */
    :host([configuration='in-hero--horizontal']) {
      --ds-announcement-content-gap: var(--ds-app-space-micro-l, 1.5rem);
    }

    :host([configuration='in-hero--stacked']) .announcement__center {
      --ds-announcement-center-flex-direction: column;
    }

    :host([configuration='in-hero--horizontal']) .announcement__center {
      --ds-announcement-center-gap: var(--ds-app-space-micro-l, 1.5rem);
    }

    :host([configuration='in-hero--horizontal']),
    :host([configuration='in-hero--stacked']) {
      --ds-surface-border-radius: var(--ds-radii-m, 1rem);
    }

    :host([configuration='in-hero--horizontal']) .wrapper {
      flex-direction: row;
      align-items: center;
      text-align: start;
    }

    :host([configuration='in-hero--horizontal']) .announcement__dismiss {
      inset-block-start: 50%;
      transform: translateY(-50%);
    }
  }

  @media (max-width: ${e(v.sm)}) {
    :host([countdown='active']) {
      --ds-card-timer-base-flex-wrap: wrap;
    }
  }
`;var F=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,U=(e,t,n,o)=>{for(var s,a=o>1?void 0:o?Y(t,n):t,i=e.length-1;i>=0;i--)(s=e[i])&&(a=(o?s(t,n,a):s(a))||a);return o&&a&&F(t,n,a),a};const q="reimagine-announcement";let V=class extends(y(_(C))){constructor(){super(...arguments),this._closeButtonMouseDown=!1,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._badgeSlotEmpty=!0,this._mediaSlotEmpty=!0,this._assetSlotEmpty=!0,this._closed=!1,this.scrollEffect=!1,this._scrollTarget=null,this._rafId=0,this._onScroll=()=>{this._rafId||(this._rafId=requestAnimationFrame(()=>{if(this._rafId=0,!this._mediaEl)return;const e=this.getBoundingClientRect(),t=this._scrollTarget instanceof HTMLElement?this._scrollTarget.clientHeight:window.innerHeight,n=e.top+e.height/2,o=1+.1*Math.abs((n-t/2)/(t/2));this._mediaEl.style.transform=`scale(${o})`}))},this._onCloseButtonMouseDown=e=>{0===e.button&&(this._closeButtonMouseDown=!0)},this._onCloseButtonMouseUp=()=>{this._closeButtonMouseDown=!1},this._onProtectCloseClick=e=>{this._closeButtonMouseDown&&(this._closeButtonMouseDown=!1,e.stopImmediatePropagation())}}get _isInHero(){return this.configuration===w.inHeroHorizontal||this.configuration===w.inHeroStacked}_getScrollParent(e){let t=e.parentElement;for(;t;){const e=getComputedStyle(t).overflowY;if("auto"===e||"scroll"===e)return t;t=t.parentElement}return globalThis}_setCountdownSurfaceAttributes(){const e=l(this,"reimagine-card-timer");e&&c(e,{surface:f.transparent})}_handleSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length,this._badgeSlotEmpty=0===this._badgeSlot.length}_handleMediaSlotChange(){const e=0===this._mediaSlot.length;this._mediaSlotEmpty!==e&&(this._mediaSlotEmpty=e)}_handleAssetSlotChange(){const e=0===this._assetSlot.length;this._assetSlotEmpty!==e&&(this._assetSlotEmpty=e)}_handleCountdownSlotChange(){this._countdownSlot.forEach(e=>{const t=e;t._timerBound||(t.addEventListener("timer-expired",()=>{this.countdown="expired"}),t._timerBound=!0)})}_renderOptionalSlot(e,t,o){return n`
      <div part=${e} class=${e} style="${t?"display: none;":""}">
        <slot name=${e} @slotchange="${o??this._handleSlotChange}"></slot>
      </div>
    `}close(e){e&&e.stopPropagation(),this._isInHero&&!d()?this._animateClose():this._closed=!0}_animateClose(){const e=this.offsetHeight;this.style.overflow="hidden",this.animate([{opacity:1,height:`${e}px`},{opacity:0,height:"0px"}],{duration:500,easing:"ease",fill:"forwards"}).finished.then(()=>{this.style.overflow="",this._closed=!0})}updated(){var e;this._badgeSlotEmpty||null==(e=this._badgeSlot[0])||e.setAttribute("size",h.xs)}firstUpdated(){super.firstUpdated(),this.clickable||new g(this),this.addEventListener("click",this._onProtectCloseClick),this._setCountdownSurfaceAttributes(),this._setInHeroSurfaceType(),this._setupScrollMotion()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._onProtectCloseClick),this._scrollTarget&&this._scrollTarget.removeEventListener("scroll",this._onScroll),this._rafId&&cancelAnimationFrame(this._rafId)}_setInHeroSurfaceType(){this._isInHero&&c(this,{surface:f.media})}_setupScrollMotion(){this.scrollEffect&&!d()&&(this._scrollTarget=this._getScrollParent(this),this._scrollTarget.addEventListener("scroll",this._onScroll,{passive:!0}),this._onScroll())}_renderCountdown(){return n`
      ${"expired"===this.countdown?n`<slot name="announcement__expired-label"></slot>`:""}
      ${"active"===this.countdown?n` <slot
              name="announcement__countdown"
              @slotchange=${this._handleCountdownSlotChange}
            ></slot>
            <slot name="announcement__post-label"></slot>`:""}
      ${"expired"===this.countdown?n`<slot name="announcement__expired-post-label"></slot>`:""}
    `}_renderDismissButton(){return n`
      <div part="announcement__dismiss" class="announcement__dismiss">
        <slot name="announcement__button" @slotchange="${this._handleSlotChange}">
          <reimagine-button
            @click=${e=>this.close(e)}
            @mousedown=${this._onCloseButtonMouseDown}
            @mouseup=${this._onCloseButtonMouseUp}
            icon-only
            appearance=${x.buttonGhost}
            shape=${S.rounded}
            size=${$.small}
            button-label=${o(this.closeLabel)}
            button-title=${o(this.closeTitle)}
          >
            <reimagine-icon
              filled
              icon=${k.name}
              size=${E.medium}
              role="presentation"
              aria-hidden="true"
              slot="button__icon"
            ></reimagine-icon>
          </reimagine-button>
        </slot>
      </div>
    `}render(){if(this._closed)return n`<span
        aria-live="polite"
        class="announcement__close-sr"
        part="announcement__close-sr"
        aria-atomic="true"
        sr-close-text="${o(this.srCloseText)}"
        >${o(this.srCloseText)}</span
      >`;const e=this._renderDismissButton(),t=n`
      <div part="announcement__center" class="announcement__center">
        ${this.countdown&&"active"!==this.countdown?"":n`<slot name="announcement__label"></slot>`}
        ${this._renderCountdown()}
        <slot name="announcement__link"></slot>
      </div>
    `,s=n`<slot
      name="announcement__badge"
      @slotchange="${this._handleSlotChange}"
    ></slot>`,a=this._renderOptionalSlot("media",this._mediaSlotEmpty,this._handleMediaSlotChange),i=this._renderOptionalSlot("asset",this._assetSlotEmpty,this._handleAssetSlotChange);return n`
      ${this._renderOptionalSlot("announcement__first",this._firstSlotEmpty)}
      <div part="announcement__banner" class="announcement__banner">
        ${a}
        <div part="wrapper" class="wrapper">
          ${i} ${s} ${t}
        </div>
        ${e}
      </div>
      ${this._renderOptionalSlot("announcement__last",this._lastSlotEmpty)}
    `}};V.styles=[L,O],U([s({slot:"announcement__first"})],V.prototype,"_firstSlot",2),U([s({slot:"announcement__last"})],V.prototype,"_lastSlot",2),U([s({slot:"announcement__badge"})],V.prototype,"_badgeSlot",2),U([s({slot:"announcement__countdown"})],V.prototype,"_countdownSlot",2),U([s({slot:"media"})],V.prototype,"_mediaSlot",2),U([s({slot:"asset"})],V.prototype,"_assetSlot",2),U([a()],V.prototype,"_firstSlotEmpty",2),U([a()],V.prototype,"_lastSlotEmpty",2),U([a()],V.prototype,"_badgeSlotEmpty",2),U([a()],V.prototype,"_mediaSlotEmpty",2),U([a()],V.prototype,"_assetSlotEmpty",2),U([a()],V.prototype,"_closed",2),U([i()],V.prototype,"countdown",2),U([i({attribute:"close-label"})],V.prototype,"closeLabel",2),U([i({attribute:"close-title"})],V.prototype,"closeTitle",2),U([i({attribute:"sr-close-text",reflect:!0})],V.prototype,"srCloseText",2),U([i({reflect:!0})],V.prototype,"configuration",2),U([i({type:Boolean,reflect:!0,attribute:"scroll-effect"})],V.prototype,"scrollEffect",2),U([r(".media")],V.prototype,"_mediaEl",2),V=U([m(q)],V);export{V as Announcement,q as name};
