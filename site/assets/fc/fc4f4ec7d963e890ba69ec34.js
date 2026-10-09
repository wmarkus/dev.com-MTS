import{r as t,i as e,e as o,f as r,b as n}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{b as s,c as a}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{d as i}from"/__mirror/assets/8b9fb2358bf27923e12447c9";const l="var(--ds-density-vertical-compact, 2rem)",c="var(--ds-ui-shell-content-row-gap, var(--ds-density-vertical-default, 3rem))",d=e`
  :host {
    --ds-scrollslider-justify-content: ${t("center")};
    --ds-ui-shell-gap: ${t(l)};
  }

  .footnote {
    padding-block-start: var(
      --ds-pricing-comparison-footnote-padding-block-start,
      ${t(c)}
    );
  }
`;var p=Object.defineProperty,m=Object.getOwnPropertyDescriptor,g=Object.getPrototypeOf,f=Reflect.get,h=(t,e,o,r)=>{for(var n,s=r>1?void 0:r?m(e,o):e,a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r?n(e,o,s):n(s))||s);return r&&s&&p(e,o,s),s};const u="reimagine-features-and-pricing-comparison";let y=class extends s{constructor(){super(...arguments),this._footnoteSlotEmpty=!0}_handleFootnoteSlotChange(){this._footnoteSlotEmpty=0===this._footnoteSlot.length}_renderFootnoteSlot(t,e){return n`
      <div part=${t} class=${t} style="${e?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleFootnoteSlotChange}"></slot>
      </div>
    `}_renderBlade(){const t="base",e=n`
      <reimagine-layout configuration=${a.col1even}>
        <reimagine-layout-column>
          <slot name="table"></slot>
          ${this._renderFootnoteSlot("footnote",this._footnoteSlotEmpty)}
        </reimagine-layout-column>
      </reimagine-layout>
    `;return this.baseContent?n`<div class=${t} part=${t}>${e}</div>`:n`
      <reimagine-container class=${t} part=${t}>
        ${e}
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var $,v,_;y.styles=[...($=y,v=y,_="styles",f(g($),_,v)||[]),d],h([o({slot:"footnote"})],y.prototype,"_footnoteSlot",2),h([r()],y.prototype,"_footnoteSlotEmpty",2),y=h([i(u)],y);export{y as FeaturesAndPricingComparison,u as name};
