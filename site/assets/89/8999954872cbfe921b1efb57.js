import{r as t,i as e,e as a,f as o,c as r,o as i,b as s}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{b as l,c as n,M as d,g as c}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{i as u,s as p,d as m}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{n as g}from"/__mirror/assets/bf0b3498e45fc20534cec8b1";const y="var(--ds-app-space-micro-xl, 2rem)",f=e`
  .container {
    --ds-container-display: flex;
    --ds-container-flex-direction: column;
    --ds-container-gap: var(--ds-media-video-gap-xl, ${t("var(--ds-app-space-micro-2xl, 3rem)")});
  }

  :host([configuration='media-video-large']) {
    gap: var(--ds-media-video-gap, ${t(y)});
  }

  :host([configuration='media-video-large']) .container {
    --ds-container-gap: var(--ds-media-video-gap, ${t(y)});
  }

  .related-products,
  .media {
    --ds-layout-column-display: flex;
    --ds-layout-column-flex-direction: column;
    --ds-layout-column-align-items: center;
  }
`,h="media-video-large";var _=Object.defineProperty,v=Object.getOwnPropertyDescriptor,S=Object.getPrototypeOf,$=Reflect.get,P=(t,e,a,o)=>{for(var r,i=o>1?void 0:o?v(e,a):e,s=t.length-1;s>=0;s--)(r=t[s])&&(i=(o?r(e,a,i):r(i))||i);return o&&i&&_(e,a,i),i};const x="reimagine-media-video";let E=class extends l{constructor(){super(...arguments),this._defaultSlotEmpty=!0,this._relatedProductsSlotEmpty=!0}_defaultSlotChange(){if(this._defaultSlotEmpty=0===this._defaultSlot.length,this._defaultSlotEmpty)return;const t={type:c.highlightGlass,"aspect-ratio":d.ratio16to9},e=this._defaultSlot.find(t=>t instanceof HTMLElement&&u(t,g));p(e,t)}_relatedProductChange(){this._relatedProductsSlotEmpty=0===this._relatedProductsSlot.length}_setMediaLayout(){return this.configuration===h?n.col1staged:n.col1even}_renderDefaultTemplate(){return s`
      <reimagine-layout
        part="related-products"
        class="related-products"
        configuration=${n.col1staged}
        style="${this.toggleDisplay(this._relatedProductsSlotEmpty)}"
      >
        <reimagine-layout-column>
          <slot name="related-products" @slotchange=${this._relatedProductChange}></slot>
        </reimagine-layout-column>
      </reimagine-layout>

      <reimagine-layout
        configuration=${i(this._setMediaLayout())}
        part="media"
        class="media"
        style="${this.toggleDisplay(this._defaultSlotEmpty)}"
      >
        <reimagine-layout-column>
          <slot @slotchange=${this._defaultSlotChange}></slot>
        </reimagine-layout-column>
      </reimagine-layout>
    `}_renderBlade(){const t="container",e=this._renderDefaultTemplate();return this.baseContent?s` <div part=${t} class="${t}">${e}</div> `:s`
      <reimagine-container part=${t} class="${t}">
        ${e}
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var b,j,C;E.styles=[...(b=E,j=E,C="styles",$(S(b),C,j)||[]),f],P([a()],E.prototype,"_defaultSlot",2),P([a({slot:"related-products"})],E.prototype,"_relatedProductsSlot",2),P([o()],E.prototype,"_defaultSlotEmpty",2),P([o()],E.prototype,"_relatedProductsSlotEmpty",2),P([r({type:String,reflect:!0,attribute:"configuration"})],E.prototype,"configuration",2),E=P([m(x)],E);export{E as MediaVideo,x as name};
