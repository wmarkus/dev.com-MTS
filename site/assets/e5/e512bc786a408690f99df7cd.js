import{r as t,i as e,c as o,e as a,f as i,o as s,j as r,b as l}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{c as n,b as p,m}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{q as c,d}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{a as u}from"/__mirror/assets/daab3f96e18c70a4751d1a7b";import{v as h}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";const y="var(--ds-app-space-layout-stack-cozy, 2rem)",g="100%",b=e`
  :host {
    --ds-card-editorial-max-width: 100%;
  }
  :host::part(layout__base) {
    --ds-layout-row-gap: ${t({gap:u.xl.value}.gap)};
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: var(--ds-editorial-feature-container-gap, ${t(y)});
  }

  reimagine-layout.mobile {
    --ds-button-min-width: var(
      --ds-editorial-feature-mobile-button-min-width,
      ${t(g)}
    );
    display: none;

    reimagine-button {
      width: var(
        --ds-editorial-feature-mobile-button-width,
        ${t(g)}
      );
    }
  }

  ::slotted([slot='top']) {
    width: ${t(g)};
  }
`,f=e`
  @media (max-width: ${t(h.md)}) {
    reimagine-layout.mobile {
      display: flex;
    }
  }
`,_=n.col2even;var $=Object.defineProperty,S=Object.getOwnPropertyDescriptor,v=Object.getPrototypeOf,E=Reflect.get,w=(t,e,o,a)=>{for(var i,s=a>1?void 0:a?S(e,o):e,r=t.length-1;r>=0;r--)(i=t[r])&&(s=(a?i(e,o,s):i(s))||s);return a&&s&&$(e,o,s),s};const j="reimagine-editorial-featured";let x=class extends p{constructor(){super(...arguments),this._baseSlotEmpty=!0,this._topSlotEmpty=!0,this._mobileButton=""}handleTopSlotChange(){this._baseSlotEmpty=0===this._baseSlot.length,this._topSlotEmpty=0===this._topSlot.length,!this._topSlotEmpty&&this._topSlot.length>0&&this._topSlot.forEach(t=>{var e;const o=t;this._mobileButton=(null==(e=c(o,"reimagine-button"))?void 0:e.outerHTML)||""})}_renderBlade(){const t="container",e=l`
      <reimagine-layout
        class="top"
        part="top"
        style="${this.toggleDisplay(this._topSlotEmpty)}"
        configuration=${s(m.col1even)}
      >
        <slot name="top"></slot>
      </reimagine-layout>
      <reimagine-layout
        part="base"
        class="base"
        style="${this.toggleDisplay(this._baseSlotEmpty)}"
        configuration=${this.configuration||_}
      >
        <slot @slotchange=${this.handleTopSlotChange}></slot>
      </reimagine-layout>
      <reimagine-layout
        part="mobile"
        class="mobile"
        style="${this.toggleDisplay(this._topSlotEmpty)}"
        configuration=${s(m.col1even)}
      >
        ${r(this._mobileButton)}
      </reimagine-layout>
    `;return this.baseContent?l` <div class=${t} part=${t}>${e}</div> `:l`
      <reimagine-container class=${t} part=${t}>
        ${e}
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}connectedCallback(){super.connectedCallback(),this.breadth="comfortable",this.horizontalDensity="relaxed"}};var B,C,D;x.styles=[...(B=x,C=x,D="styles",E(v(B),D,C)||[]),b,f],w([o({attribute:"configuration",reflect:!0})],x.prototype,"configuration",2),w([o({attribute:"top-layout-configuration",reflect:!0})],x.prototype,"baseLayoutConfiguration",2),w([a({slot:"top"})],x.prototype,"_topSlot",2),w([a({slot:""})],x.prototype,"_baseSlot",2),w([i()],x.prototype,"_baseSlotEmpty",2),w([i()],x.prototype,"_topSlotEmpty",2),w([i()],x.prototype,"_mobileButton",2),x=w([d(j)],x);export{x as EditorialFeatured,j as name};
