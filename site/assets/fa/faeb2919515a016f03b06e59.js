import{r as t,i as e,e as o,f as a,b as s}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{b as i,c as n}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{d as l}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{e as r,f as d}from"/__mirror/assets/6ad137053d5da8fc91d912f1";const m=e`
  :host {
    --ds-layout-display: ${t("flex")};
    --ds-layout-column-display: flex;
    --ds-layout-column-flex-direction: column;
    --ds-layout-column-row-gap: var(--ds-app-space-micro-2xs, 0.25rem);
    color: var(--ds-app-color-base-default-fg-heading);
  }

  .quote-symbol {
    font-size: ${t(r.fontSize)};
  }

  ::slotted([slot='quote']) {
    font-size: var(--ds-quote-font-size, ${t(r.fontSize)}) !important;
    line-height: var(
      --ds-quote-line-height,
      ${t(r.lineHeight)}
    ) !important;
    font-weight: var(
      --ds-quote-font-weight,
      ${t(r.fontWeight)}
    ) !important;
    letter-spacing: var(
      --ds-quote-letter-spacing,
      ${t(r.letterSpacing)}
    ) !important;
  }

  :host([size='small']) {
    --ds-quote-font-size: ${t(d.fontSize)};
    --ds-quote-line-height: ${t(d.lineHeight)};
    --ds-quote-font-weight: ${t(d.fontWeight)};
    --ds-quote-letter-spacing: ${t(d.letterSpacing)};
  }
`;var u=Object.defineProperty,c=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,g=Reflect.get,h=(t,e,o,a)=>{for(var s,i=a>1?void 0:a?c(e,o):e,n=t.length-1;n>=0;n--)(s=t[n])&&(i=(a?s(e,o,i):s(i))||i);return a&&i&&u(e,o,i),i};const f="reimagine-editorial-article-quote";let y=class extends i{constructor(){super(...arguments),this._quoteNameSlotEmpty=!0}_handleSlotChange(){this._quoteNameSlotEmpty=0===this._quoteNameSlot.length}_renderOptionalSlot(t,e){return s`
      <div part=${t} class=${t} style="${e?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_renderBlade(){const t="container",e=s`
      <reimagine-layout configuration="${n.col1staged}">
        <reimagine-layout-column>
          <div class="quote-symbol" part="quote-symbol">&#8220;</div>
          <div class="quote" part="quote">
            <slot name="quote" @slotchange=${this._handleSlotChange}></slot>
          </div>
          ${this._renderOptionalSlot("quote-name",this._quoteNameSlotEmpty)}
        </reimagine-layout-column>
      </reimagine-layout>
    `;return this.baseContent?s` <div class=${t} part=${t}>${e}</div> `:s`
      <reimagine-container class=${t} part=${t}>
        ${e}
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var q,$,v;y.styles=[...(q=y,$=y,v="styles",g(p(q),v,$)||[]),m],h([o({slot:"quote-name"})],y.prototype,"_quoteNameSlot",2),h([a()],y.prototype,"_quoteNameSlotEmpty",2),y=h([l(f)],y);export{y as EditorialArticleQuote,f as name};
