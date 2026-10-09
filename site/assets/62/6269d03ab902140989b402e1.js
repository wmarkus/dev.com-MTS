import{r as e,i as t,g as i,f as o,c as a,b as r,A as s}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{q as l,s as d,i as n,d as p}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{V as c}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{v as g,b as h}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{n as m}from"/__mirror/assets/b261b011546c5001df09e043";import{n as u,V as v}from"/__mirror/assets/bf0b3498e45fc20534cec8b1";import{b as y,c as f,M as b,g as S,j as _,B as $,i as x}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";const w="column",k="var(--ds-app-space-micro-xl, 1.5rem)",M="3rem",T="2rem",V="2rem",z=t`
  :host {
    --ds-ui-shell-gap: 0;
    --ds-heading-padding-block-start: var(--ds-app-space-layout-stack-comfortable, 3rem);
  }

  :host([configuration='video']) {
    --ds-heading-padding-block-start: 0;
    --ds-hero-product-video-trigger-gap: var(--ds-app-space-micro-s, 0.75rem);
    --ds-ui-shell-breadcrumbs-padding-block-end: 0;
  }

  .video-trigger {
    display: flex;
    align-items: center;
    margin-block: var(--ds-hero-product-video-trigger-gap, var(--ds-app-space-micro-s, 0.75rem));
  }

  .container {
    --ds-layout-flex-wrap: no-wrap;
  }

  :host ::slotted(reimagine-layout-column:first-of-type) {
    display: var(
      --ds-hero-product-layout-col-2-display,
      ${e("flex")}
    );
    flex-direction: var(
      --ds-hero-product-layout-col-2-flex-direction,
      ${e(w)}
    );
    gap: var(
      --ds-hero-product-layout-col-2-gap,
      ${e(k)}
    );
  }

  .ui-shell-announcement-container {
    position: absolute;
    top: calc(var(--ds-ui-shell-breadcrumbs-height, 0px) + var(--ds-app-space-micro-xl, 1.5rem));
    z-index: 1;
  }

  .ui-shell-announcement-container ::slotted([slot='ui-shell-announcement']) {
    margin-block-end: var(--ds-app-space-micro-l, 1rem);
  }

  :host([configuration='default']) ::slotted([slot='ui-shell-media']) {
    position: var(--ds-hero-product-ui-shell-media-position, absolute);
  }

  /* Push fg media below the absolutely-positioned announcement on mobile */
  :host ::slotted([slot='fg-media']) {
    margin-block-start: calc(
      var(--ds-ui-shell-announcement-height, 0px) 
    );
    display: var(
      --ds-hero-product-fg-media-display,
      ${e("block")}
    );

    --ds-media-ump-min-width: auto;
    --ds-media-ump-min-height: auto;
  }

  :host ::slotted(reimagine-layout-column:nth-of-type(2)) {
    --ds-media-display: block;
    --ds-media-width: 100%;
    --ds-media-height: auto;

    display: var(--ds-hero-product-col-2-display, flex);
    padding-inline: var(
      --ds-hero-product-col-3-padding-inline,
      ${e(M)}
    );
    padding-block-start: var(
      --ds-hero-product-col-3-padding-block-start,
      ${e(T)}
    );
    padding-block-end: var(
      --ds-hero-product-col-3-padding-block-end,
      ${e(V)}
    );
  }
`,j=t`
  @media (min-width: ${e(g.md)}) {
    :host {
      --ds-ui-shell-announcement-margin-block-start: var(--ds-app-space-micro-xl, 2rem);
      --ds-ui-shell-announcement-margin-block-end: var(--ds-app-space-micro-2xl, 3rem);
    }

    .ui-shell-announcement-container {
      position: relative;
      top: auto;
      z-index: auto;
    }

    .ui-shell-announcement-container ::slotted([slot='ui-shell-announcement']) {
      margin-block-end: 0;
    }

    :host ::slotted([slot='fg-media']) {
      margin-block-start: 0;
    }

    .container {
      --ds-layout-flex-direction: row;
      --ds-layout-flex-wrap: wrap;
    }

    :host ::slotted(reimagine-layout-column:nth-of-type(2)) {
      --ds-hero-product-col-3-padding-block-start: 0;
      --ds-hero-product-col-3-padding-inline: 0;
      --ds-hero-product-col-3-padding-block-end: 0;

      align-items: center;
      height: auto;
    }

    :host ::slotted(reimagine-layout-column:first-of-type) {
      --ds-hero-product-layout-col-2-padding-block-start: 0;
    }
  }

  @media (min-width: ${e(g.sm)}) and (max-width: ${e(h(g.md))}) {
    .container {
      --ds-layout-flex-direction: column;
      --ds-layout-flex-wrap: nowrap;
    }
  }

  @media (max-width: ${e(h(g.md))}) {
    :host([configuration='video']) .ui-shell-media {
      margin-block-end: var(--ds-app-space-micro-2xl, 2rem);
    }

    .ui-shell-media .video-trigger {
      position: absolute;
      top: 0;
      left: 0;
      z-index: var(--ds-z-index-20, 20);
      padding: var(--ds-app-space-micro-m, 0.75rem);

      --ds-hero-product-video-trigger-gap: 0;
    }
  }
`,O="default";var C=Object.defineProperty,E=Object.getOwnPropertyDescriptor,R=Object.getPrototypeOf,P=Reflect.get,F=(e,t,i,o)=>{for(var a,r=o>1?void 0:o?E(t,i):t,s=e.length-1;s>=0;s--)(a=e[s])&&(r=(o?a(t,i,r):a(r))||r);return o&&r&&C(t,i,r),r};const B="reimagine-hero-product";let U=class extends y{constructor(){super(),this._isVideoTriggerSlotEmpty=!0,this.configuration=O,this._viewportResizeObserver=new c(this,{})}_handleSlotChange(){const e=this._defaultSlot.map(e=>l(e,m)).filter(Boolean);d(e,{size:"m"})}_handleFgMediaSlotChange(){const e=this._fgMediaSlot.map(e=>l(e,u)).filter(Boolean);d(e,{type:S.highlightGlass,"aspect-ratio":b.ratio16to9})}_handleVideoTriggerSlotChange(){this._isVideoTriggerSlotEmpty=0===this._videoTriggerSlot.length,this._isVideoTriggerSlotEmpty||this._videoTriggerSlot.forEach(e=>{var t;const i=e,o=null==(t=this.uiShellMedia)?void 0:t.querySelector("universal-media-player");if(!this.uiShellMedia||!o||!n(i,"reimagine-button"))return;d(i,{"video-control":"pause",appearance:x.buttonPrimary,size:$.small,shape:_.rounded}),null==o||o.classList.add("ump-hidden");const a={videoTrigger:i,videoElement:o};new v(this.uiShellMedia,a)})}renderUiShellMediaSlot(){var e,t;const i=r`
      <reimagine-layout>
        <slot name="fg-media" @slotchange=${this._handleFgMediaSlotChange}></slot>
      </reimagine-layout>
    `,o=r`
      <div
        part="video-trigger"
        class="video-trigger"
        style="${this._isVideoTriggerSlotEmpty?"display: none;":""}"
      >
        <slot name="video-trigger" @slotchange=${this._handleVideoTriggerSlotChange}></slot>
      </div>
    `;return r`
      <div
        part="ui-shell-media"
        class="ui-shell-media"
        style="${this.toggleDisplay(this.uiShellMediaSlotEmpty)}"
      >
        <slot name="ui-shell-media" @slotchange="${this.handleUiShellMediaSlotChange}"></slot>
        ${null!=(e=this._viewportResizeObserver)&&e.isMobile()?i:s}
        ${null!=(t=this._viewportResizeObserver)&&t.isMobile()?o:s}
      </div>
    `}_renderFgMedia(){var e;const t="no-media"===this.configuration?null:r`<slot name="fg-media" @slotchange=${this._handleFgMediaSlotChange}></slot>`;return null!=(e=this._viewportResizeObserver)&&e.isMobile()?"":t}_renderVideoTrigger(){var e;return null!=(e=this._viewportResizeObserver)&&e.isMobile()?s:r` <div
      part="video-trigger"
      class="video-trigger"
      style="${this._isVideoTriggerSlotEmpty?"display: none;":""}"
    >
      <slot name="video-trigger" @slotchange=${this._handleVideoTriggerSlotChange}></slot>
    </div>`}_renderBlade(){const e="container",t=r`
      ${this._renderVideoTrigger()}
      <reimagine-layout
        configuration=${f.col2even}
        density="relaxed"
        part="top"
        class="top"
      >
        <slot @slotchange=${this._handleSlotChange}></slot>
        ${this._renderFgMedia()}
      </reimagine-layout>
    `;return this.baseContent?r` <div class=${e} part=${e}>${t}</div> `:r`
      <reimagine-container part=${e} class="${e}">
        ${t}
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var q,D,A;U.styles=[...(q=U,D=U,A="styles",P(R(q),A,D)||[]),z,j],F([i()],U.prototype,"_defaultSlot",2),F([i({slot:"fg-media"})],U.prototype,"_fgMediaSlot",2),F([i({slot:"video-trigger"})],U.prototype,"_videoTriggerSlot",2),F([o()],U.prototype,"_isVideoTriggerSlotEmpty",2),F([o()],U.prototype,"_viewportResizeObserver",2),F([a({type:String,reflect:!0,attribute:"configuration"})],U.prototype,"configuration",2),U=F([p(B)],U);export{U as HeroProduct,B as name};
