import{r as i,i as t,b as e,c as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{o as a,G as o,I as s,J as n,R as d,T as l}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{q as c,s as h,d as m}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{v as p}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{L as b}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import"/__mirror/assets/5849ec5e150363c91281fb26";import"/__mirror/assets/d0f2740c702159d74ce93cda";const v=t`
  /* VP3 and up (md: 860px+) - Shared padding styles */
  @media (min-width: ${i(p.md)}) {
    :host {
      --ds-list-item-inner-padding-inline-start: var(--ds-app-space-micro-l, 1.5rem);
      --ds-list-item-inner-padding-inline-end: var(--ds-app-space-micro-l, 1.5rem);
    }

    :host([configuration='tab']) {
      --ds-link-bar-item-width: 282px;
      --ds-link-bar-item-height: 84px;
      --ds-list-item-inner-padding-block-start: 28px;
    }

    :host([configuration='selector']) {
      --ds-link-bar-item-width: 259px;
      --ds-link-bar-item-height: 74px;
    }
  }

  /* VP4 (lg: 1440px+) - Specific widths */
  @media (min-width: ${i(p.lg)}) {
    :host([configuration='tab']) {
      --ds-link-bar-item-width: 331px;
    }
  }
`,g="64px",u="200px",f="center",k="center",x="initial",y="0px",w="0px",$="0px",j="0px",L="0px",D="0px",S="0px",V="0px",P="0px",T="none",_="fit-content",A="var(--ds-app-radii-circle)",C=t`
  :host(:not(:is([configuration='pill'], [configuration='radio']))) {
    --ds-list-item-trailing-display: flex;
    --ds-list-item-inner-padding-inline-start: var(--ds-app-space-micro-l, 1rem);
    --ds-list-item-inner-padding-inline-end: var(--ds-app-space-micro-l, 1rem);

    /* Theme colors are shifted one step down */
    --ds-link-bar-item-theme-enabled: var(--ds-app-color-surface-solid-bg-default);
    --ds-link-bar-item-theme-hover: var(--ds-app-color-interactive-secondary-bg-default);
    --ds-link-bar-item-theme-pressed: var(--ds-app-color-interactive-secondary-bg-hover);
    --ds-link-bar-item-theme-active: var(--ds-app-color-interactive-secondary-bg-selected);

    display: flex;
    background-color: var(
      --ds-link-bar-item-background-color,
      ${i("var(--ds-link-bar-item-theme-enabled)")}
    );
    height: var(--ds-link-bar-item-height, ${i(g)});
    width: var(--ds-link-bar-item-width, ${i(u)});
    justify-content: var(
      --ds-link-bar-item-justify-content,
      ${i(f)}
    );
    align-items: var(--ds-link-bar-item-align-items, ${i(k)});
    flex-direction: column;
    position: relative;
    opacity: var(--ds-link-bar-item-opacity, ${i(x)});
    border-start-start-radius: var(
      --ds-link-bar-item-border-start-start-radius,
      ${i(y)}
    );
    border-start-end-radius: var(
      --ds-link-bar-item-border-start-end-radius,
      ${i(w)}
    );
    border-end-start-radius: var(
      --ds-link-bar-item-border-end-start-radius,
      ${i($)}
    );
    border-end-end-radius: var(
      --ds-link-bar-item-border-end-end-radius,
      ${i(j)}
    );
    box-shadow: var(--ds-link-bar-item-box-shadow, ${i(L)});
    margin-inline-start: var(
      --ds-link-bar-item-margin-inline-start,
      ${i(V)}
    );
    margin-inline-end: var(
      --ds-link-bar-item-margin-inline-end,
      ${i(P)}
    );
    margin-block-start: var(
      --ds-link-bar-item-margin-block-start,
      ${i(D)}
    );
    margin-block-end: var(
      --ds-link-bar-item-margin-block-end,
      ${i(S)}
    );
  }

  :host([configuration='pill']) {
    display: flex;
    white-space: nowrap;
    width: var(--ds-link-bar-item-pill-width, ${i(_)});
    padding-block: 7px;
  }

  :host([configuration='radio']) {
    display: flex;
    width: fit-content;
    white-space: nowrap;

    --ds-radiobutton-pointer-events: all;
    --ds-radiobutton-cursor: pointer;
  }

  /* Tab Variant */
  :host([configuration='tab']) {
    --ds-link-bar-item-border-radius: 0;
    --ds-list-item-inner-padding-block-start: 1rem;
    --ds-list-item-inner-align-items: center;
    overflow: hidden;
  }

  :host([configuration='tab']) .list-item {
    width: 100%;
  }

  :host([configuration='tab']) .vertical-divider {
    z-index: var(--ds-z-index-20, 20);
    display: var(--ds-link-bar-item-divider-display, ${i(T)});
  }

  :host([configuration='tab']) reimagine-divider {
    height: 100%;
  }

  /* Enabled, Dark theme */
  :host(:not([active])[theme='dark'][configuration='tab']) {
    --ds-link-bar-item-background-color: var(
      --ds-app-color-surface-glass-bg-default,
      rgba(255, 255, 255, 0.05)
    );
  }

  /* Hovered, Light theme */
  :host(:not([active])[configuration='selector']) a:hover,
  :host(:not([active])[configuration='tab']:hover) {
    --ds-link-bar-item-background-color: var(
      --ds-link-bar-item-theme-hover,
      rgba(0, 85, 151, 0.15)
    );
  }

  /* Hovered, Dark theme */
  :host(:not([active])[theme='dark'][configuration='selector']) a:hover,
  :host(:not([active])[theme='dark'][configuration='tab']:hover) {
    --ds-link-bar-item-background-color: var(
      --ds-link-bar-item-theme-hover,
      rgba(84, 165, 226, 0.15)
    );
  }

  /* Pressed, Light theme */
  :host(:not([active])[configuration='selector']) a:active,
  :host(:not([active])[configuration='tab']:active) {
    --ds-link-bar-item-background-color: var(
      --ds-link-bar-item-theme-pressed,
      rgba(0, 85, 151, 0.4)
    );
  }

  /* Pressed, Dark theme */
  :host(:not([active])[theme='dark'][configuration='selector']) a:active,
  :host(:not([active])[theme='dark'][configuration='tab']:active) {
    --ds-link-bar-item-background-color: var(
      --ds-link-bar-item-theme-pressed,
      rgba(84, 165, 226, 0.4)
    );
  }

  /* Active, Light theme */
  :host([configuration='tab'][active]) {
    --ds-link-bar-item-background-color: var(
      --ds-app-color-surface-solid-bg-default,
      rgba(254, 254, 254, 1)
    );
  }

  /* Active, Dark theme */
  :host([configuration='tab'][theme='dark'][active]) {
    --ds-link-bar-item-background-color: var(
      --ds-app-color-surface-glass-bg-selected,
      rgba(255, 255, 255, 0.2)
    );
  }

  /* Disabled, Light and Dark theme */
  :host([disabled]) {
    --ds-link-bar-item-opacity: 20%;
    --ds-list-item-trailing-display: none;
    pointer-events: none;
  }

  /* Selector Variant */
  :host([configuration='selector']) {
    background-color: var(--ds-app-color-surface-solid-bg-default);
    border-start-start-radius: var(
      --ds-link-bar-item-wrapper-border-start-start-radius,
      ${i(y)}
    );
    border-start-end-radius: var(
      --ds-link-bar-item-wrapper-border-start-end-radius,
      ${i(w)}
    );
    border-end-start-radius: var(
      --ds-link-bar-item-wrapper-border-end-start-radius,
      ${i($)}
    );
    border-end-end-radius: var(
      --ds-link-bar-item-wrapper-border-end-end-radius,
      ${i(j)}
    );
    padding: 8px;

    --ds-list-item-inner-padding-block-start: 0;
    --ds-list-item-inner-padding-block-end: 0;
    --ds-list-item-inner-padding-inline-start: var(--ds-app-space-micro-l, 1rem);
    --ds-list-item-inner-padding-inline-end: var(--ds-app-space-micro-l, 1rem);

    clip-path: inset(
      var(--ds-list-item-clip-path-inset-top) var(--ds-list-item-clip-path-inset-right)
        var(--ds-list-item-clip-path-inset-bottom) var(--ds-list-item-clip-path-inset-left)
    );
    height: unset;
    width: fit-content;
  }

  :host([configuration='selector']) .list-item {
    border-radius: var(--ds-app-radii-circle);
    background-color: var(--ds-link-bar-item-background-color);
    width: var(--ds-link-bar-item-width, ${i(u)});
    height: var(--ds-link-bar-item-height, ${i(g)});
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Active, Light and Dark theme */
  :host([active]) {
    --ds-list-item-trailing-display: none;
  }

  :host([configuration='selector'][active]) {
    --ds-link-bar-item-background-color: var(--ds-link-bar-item-theme-active);
  }

  :host([configuration='selector'][active]) a {
    --ds-list-item-leading-color: var(--ds-app-color-interactive-secondary-fg-selected);
    --ds-list-item-title-color: var(--ds-app-color-interactive-secondary-fg-selected);
  }

  :host a {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    outline: none;
  }

  :host reimagine-indicator {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  :host([configuration='tab']:focus),
  :host([configuration='radio']:focus) {
    ${a};
    --ds-vfi-text-color: var(--ds-app-color-interactive-secondary-border-default);
  }

  :host([configuration='radio']:focus) {
    outline-offset: 0.2rem;
  }

  :host([configuration='pill']) a:focus {
    --ds-vfi-outline-offset: -0.4rem;
  }

  :host([configuration='selector']) a:focus,
  :host([configuration='pill']) a:focus {
    ${o};
    --ds-vfi-text-color: var(--ds-app-color-interactive-secondary-border-default);
    border-radius: var(
      --ds-link-bar-item-vfi-border-radius,
      ${i(A)}
    );
  }

  :host([configuration='pill'][active]) a:focus {
    --ds-vfi-text-color: var(
      --ds-pill-active-color,
      var(--ds-app-color-interactive-secondary-fg-selected)
    );
  }

  @media (forced-colors: active), (prefers-contrast: more) {
    :host(:hover) {
      ${s};
    }

    :host([configuration='tab']),
    :host([configuration='radio']) {
      ${n};
      border-inline-start-width: var(--ds-hcm-border-inline-start-width, 1px);
      border-inline-end-width: var(--ds-hcm-border-inline-end-width, 1px);
    }

    :host([configuration='selector']),
    :host([configuration='pill']) {
      outline: 2px solid CanvasText;

      --ds-vfi-outline-width: 5px;
    }

    :host([configuration='selector'][active]) .list-item {
      background-color: Highlight;
    }

    :host([configuration='selector']) ::slotted(reimagine-list-item) {
      background-color: Canvas;
    }
  }
`,O="tab",q="selector",z="pill",B="radio";var H=Object.defineProperty,I=Object.getOwnPropertyDescriptor,R=Object.getPrototypeOf,E=Reflect.get,G=(i,t,e,r)=>{for(var a,o=r>1?void 0:r?I(t,e):t,s=i.length-1;s>=0;s--)(a=i[s])&&(o=(r?a(t,e,o):a(o))||o);return r&&o&&H(t,e,o),o};const J="reimagine-link-bar-item";let U=class extends(b(d)){constructor(){super(...arguments),this.active=!1,this.disabled=!1}_handleSlotChange(){if(this.configuration===z){const i=c(this,"reimagine-pill");i&&this.active&&i.setAttribute("active","")}if(this.configuration===B){const i=c(this,"reimagine-radiobutton");i&&(this.active&&i.setAttribute("active",""),h(i,{"disable-interaction":""},!0))}}updated(i){var t;if(i.has("disabled")){const i=null==(t=this.disabled)?void 0:t.toString();"true"===i?this.ariaDisabled="true":"false"===i&&(this.ariaDisabled=null)}i.has("active")&&(this.ariaCurrent=this.active?"page":null)}_renderTabVariant(){return e`
      <div part="list-item" class="list-item">
        <slot name="list-item"></slot>
      </div>
      <div part="vertical-divider" class="vertical-divider">
        <reimagine-divider orientation="vertical"></reimagine-divider>
      </div>
      ${this.active?e`<reimagine-indicator
            ?active=${this.active}
            configuration="sharp"
            orientation="horizontal"
          >
          </reimagine-indicator>`:""}
    `}_renderSelectorVariant(){return e`
      <div part="list-item" class="list-item">
        <slot name="list-item"></slot>
      </div>
    `}render(){return this.configuration===O?this.renderLink(this._renderTabVariant()):this.configuration===q?this.renderLink(this._renderSelectorVariant()):this.configuration===z||this.configuration===B?this.renderLink(e`<slot @slotchange="${this._handleSlotChange}"></slot>`):e``}firstUpdated(){if(!this.theme){const i=document.querySelector("html"),t=document.querySelector("body");this.theme!==l.light&&(i&&i.classList.contains("theme-dark")||t&&t.classList.contains("theme-dark"))&&(this.theme=l.dark)}}};var F,K,M;U.styles=[...(F=U,K=U,M="styles",E(R(F),M,K)||[]),C,v],G([r({reflect:!0})],U.prototype,"theme",2),G([r({type:Boolean,reflect:!0})],U.prototype,"active",2),G([r({reflect:!0})],U.prototype,"configuration",2),G([r({type:Boolean,reflect:!0})],U.prototype,"disabled",2),U=G([m(J)],U);export{U as LinkBarItem,J as name};
