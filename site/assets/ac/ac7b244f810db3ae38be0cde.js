import{i as t,e,f as o,b as a}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as l}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{b as r,c as n}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";const s=t`
  .base {
    --ds-container-display: flex;
    --ds-container-flex-direction: column;
    --ds-container-gap: var(--ds-app-space-layout-stack-comfortable, 3rem);
  }

  :host([base-content]) .base {
    display: var(--ds-container-display, flex);
    flex-direction: var(--ds-container-flex-direction, column);
    gap: var(--ds-container-gap, var(--ds-app-space-layout-stack-comfortable, 3rem));
  }

  .body {
    --ds-layout-column-display: flex;
    --ds-layout-column-flex-direction: column;
    --ds-layout-column-align-items: center;
  }
`;var i=Object.defineProperty,c=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Reflect.get,p=(t,e,o,a)=>{for(var l,r=a>1?void 0:a?c(e,o):e,n=t.length-1;n>=0;n--)(l=t[n])&&(r=(a?l(e,o,r):l(r))||r);return a&&r&&i(e,o,r),r};const m="reimagine-features-and-pricing-product-highlight";let u=class extends r{constructor(){super(...arguments),this._bodySlotEmpty=!0,this._footerSlotEmpty=!0}connectedCallback(){super.connectedCallback(),this.headerLayoutConfiguration||(this.headerLayoutConfiguration=n.col1focus)}disconnectedCallback(){super.disconnectedCallback()}_handleSlotChange(){this._bodySlotEmpty=0===this._bodySlot.length,this._footerSlotEmpty=0===this._footerSlot.length}_renderBlade(){const t="base",e=a`
      <reimagine-layout
        configuration=${n.col1even}
        part="body"
        class="body"
        style="${this.toggleDisplay(this._bodySlotEmpty)}"
      >
        <reimagine-layout-column>
          <slot name="body" @slotchange=${this._handleSlotChange}></slot>
        </reimagine-layout-column>
      </reimagine-layout>
      <reimagine-layout
        configuration=${n.col1even}
        part="footer"
        class="footer"
        style="${this.toggleDisplay(this._footerSlotEmpty)}"
      >
        <reimagine-layout-column>
          <slot name="footer" @slotchange=${this._handleSlotChange}></slot>
        </reimagine-layout-column>
      </reimagine-layout>
    `;return this.baseContent?a` <div class=${t} part=${t}>${e}</div> `:a`
      <reimagine-container part=${t} class=${t}>
        ${e}
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var g,h,f;u.styles=[...(g=u,h=u,f="styles",y(d(g),f,h)||[]),s],p([e({slot:"body"})],u.prototype,"_bodySlot",2),p([e({slot:"footer"})],u.prototype,"_footerSlot",2),p([o()],u.prototype,"_bodySlotEmpty",2),p([o()],u.prototype,"_footerSlotEmpty",2),u=p([l(m)],u);export{u as FeaturesAndPricingProductHighlight,m as name};
