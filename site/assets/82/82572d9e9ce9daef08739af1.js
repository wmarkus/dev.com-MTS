import{r as e,i as t,g as a,f as o,b as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{a as s,s as i,q as n,d as l}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{m as d,V as c}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{v as m}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{n as p}from"/__mirror/assets/b261b011546c5001df09e043";import{n as h}from"/__mirror/assets/bf0b3498e45fc20534cec8b1";import{b as g,c as y,M as b,g as u}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import"/__mirror/assets/75afd3b650a13c2d07b54168";import"/__mirror/assets/5fa0268efc308181a7ee82be";import"/__mirror/assets/7e7eaf4c4d267bf73504882c";const f="3rem",v="2rem",w="2rem",_=t`
  :host {
    --ds-ui-shell-gap: 0;
    --ds-layout-column-display: flex;
    --ds-layout-column-flex-direction: column;
    --ds-layout-column-row-gap: var(--ds-app-space-micro-xl, 2rem);
    --ds-layout-column-justify-content: center;
    --ds-tabs-base-margin-block-end: var(--ds-app-space-micro-s, 0.75rem);
    --ds-sku-item-current-font-size: 2rem;
    --ds-sku-item-current-font-weight: 500;
    --ds-sku-item-current-line-height: 2.5rem;
    --ds-card-product-pricing-body-row-gap: var(--ds-app-space-micro-m, 1rem);
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .eyebrow {
    margin-block-start: var(--ds-app-space-layout-stack-comfortable, 3rem);
    margin-block-end: var(
      --ds-hero-transactional-eyebrow-radio-gap,
      var(--ds-app-space-micro-s, 0.75rem)
    );
  }

  .radio-tabs {
    display: flex;
  }

  :host ::slotted([slot='radio-tabs']) {
    display: block;
    width: 100%;

    --ds-tab-panel-gap: 0;
    --ds-heading-padding-block-end: var(
      --ds-hero-transactional-tab-panel-gap,
      ${e("var(--ds-app-space-micro-xl, 2rem)")}
    );
  }

  :host ::slotted([slot='eyebrow']) {
    display: block;
    color: var(
      --ds-hero-transactional-eyebrow-color,
      var(--ds-app-color-base-default-fg-accent, #005ca5)
    );
    font-family: var(
      --ds-hero-transactional-eyebrow-font-family,
      ${e(d.fontFamily)}
    );
    font-weight: var(
      --ds-hero-transactional-eyebrow-font-weight,
      ${e(d.fontWeight)}
    );
    font-size: var(
      --ds-hero-transactional-eyebrow-font-size,
      ${e(d.fontSize)}
    );
    line-height: var(
      --ds-hero-transactional-eyebrow-line-height,
      ${e(d.lineHeight)}
    );
    letter-spacing: var(
      --ds-hero-transactional-eyebrow-letter-spacing,
      ${e(d.letterSpacing)}
    );
    text-transform: uppercase;
    margin: 0;
  }

  :host ::slotted([slot='ui-shell-media']) {
    position: var(--ds-hero-transactional-ui-shell-media-position, absolute);
  }

  :host ::slotted([slot='fg-media']) {
    --ds-media-display: block;
    --ds-media-width: fit-content;
    --ds-media-height: auto;

    display: var(
      --ds-hero-transactional-fg-media-column-display,
      var(
        --ds-hero-transactional-fg-media-display,
        ${e("block")}
      )
    );
    padding-inline: var(
      --ds-hero-transactional-fg-media-column-padding-inline,
      ${e(f)}
    );
    padding-block-start: var(
      --ds-hero-transactional-fg-media-column-padding-block-start,
      ${e(v)}
    );
    padding-block-end: var(
      --ds-hero-transactional-fg-media-column-padding-block-end,
      ${e(w)}
    );
  }
`,S=t`
  @media (min-width: ${e(m.md)}) {
    .container {
      --ds-layout-flex-direction: row;
      --ds-layout-flex-wrap: wrap;
    }

    :host ::slotted([slot='fg-media']) {
      --ds-hero-transactional-fg-media-column-padding-block-start: 0;
      --ds-hero-transactional-fg-media-column-padding-inline: 0;
      --ds-hero-transactional-fg-media-column-padding-block-end: 0;

      align-items: center;
      height: auto;
    }
  }
`;var $=Object.defineProperty,k=Object.getOwnPropertyDescriptor,x=Object.getPrototypeOf,M=Reflect.get,j=(e,t,a,o)=>{for(var r,s=o>1?void 0:o?k(t,a):t,i=e.length-1;i>=0;i--)(r=e[i])&&(s=(o?r(t,a,s):r(s))||s);return o&&s&&$(t,a,s),s};const C="reimagine-hero-transactional";let z=class extends g{constructor(){super(),this._eyebrowSlotEmpty=!0,this._viewportResizeObserver=new c(this,{})}_handleEyebrowSlotChange(){var e;const t=!(null!=(e=this._eyebrowSlot)&&e.length);this._eyebrowSlotEmpty!==t&&(this._eyebrowSlotEmpty=t)}_handleRadioTabsSlotChange(){const e=(this._radioTabsSlot??[]).flatMap(e=>Array.from(s(e,p))).filter(Boolean);i(e,{size:"m"})}_handleFgMediaSlotChange(){const e=(this._fgMediaSlot??[]).map(e=>n(e,h)).filter(Boolean);i(e,{type:u.highlightGlass,"aspect-ratio":b.ratio16to9}),this.requestUpdate()}_renderFgMediaSlot(){return r` <slot name="fg-media" @slotchange=${this._handleFgMediaSlotChange}></slot> `}_renderFgMedia(){var e;return null!=(e=this._viewportResizeObserver)&&e.isMobile()?"":r`<reimagine-layout-column> ${this._renderFgMediaSlot()} </reimagine-layout-column>`}_renderContentColumn(){return r`
      <reimagine-layout-column part="content" class="content">
        <div
          part="eyebrow"
          class="eyebrow"
          style="${this._eyebrowSlotEmpty?"display: none;":""}"
        >
          <slot name="eyebrow" @slotchange=${this._handleEyebrowSlotChange}></slot>
        </div>
        <div part="radio-tabs" class="radio-tabs">
          <slot name="radio-tabs" @slotchange=${this._handleRadioTabsSlotChange}></slot>
        </div>
      </reimagine-layout-column>
    `}renderUiShellMediaSlot(){var e;const t=r` <reimagine-layout> ${this._renderFgMediaSlot()} </reimagine-layout> `;return r`
      <div
        part="ui-shell-media"
        class="ui-shell-media"
        style="${this.toggleDisplay(this.uiShellMediaSlotEmpty)}"
      >
        <slot name="ui-shell-media" @slotchange="${this.handleUiShellMediaSlotChange}"></slot>
        ${null!=(e=this._viewportResizeObserver)&&e.isMobile()?t:""}
      </div>
    `}_renderBlade(){const e="container",t=r`
      <reimagine-layout configuration=${y.col2even} density="relaxed">
        ${this._renderContentColumn()} ${this._renderFgMedia()}
      </reimagine-layout>
    `;return this.baseContent?r` <div class=${e} part=${e}>${t}</div> `:r`
      <reimagine-container part=${e} class="${e}">
        ${t}
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var O,E,F;z.styles=[...(O=z,E=z,F="styles",M(x(O),F,E)||[]),_,S],j([a({slot:"radio-tabs"})],z.prototype,"_radioTabsSlot",2),j([a({slot:"eyebrow"})],z.prototype,"_eyebrowSlot",2),j([a({slot:"fg-media"})],z.prototype,"_fgMediaSlot",2),j([o()],z.prototype,"_viewportResizeObserver",2),j([o()],z.prototype,"_eyebrowSlotEmpty",2),z=j([l(C)],z);export{z as HeroTransactional,C as name};
