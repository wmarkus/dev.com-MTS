import{r as t,i as e,c as r,e as i,f as o,b as a}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{c as s,b as n}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{i as d,q as l,s as c,d as g}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{c as p,v as h,b as m}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{V as f,A as u}from"/__mirror/assets/6ad137053d5da8fc91d912f1";const y="100%",b="100%",_="var(--ds-app-space-layout-stack-comfortable, 1.5rem)",v="flex-end",S=e`
  :host {
    width: var(--ds-pricing-grid-width, ${t(y)});

    --ds-card-product-pricing-height: ${t(b)};
  }

  ::slotted(reimagine-tabs) {
    --ds-tabs-width: ${t(y)};
  }

  ::slotted(reimagine-tabs[enable-tab-links]) {
    --ds-tabs-base-margin-block-end: var(--ds-app-space-micro-xl);
  }

  ::slotted(reimagine-link-bar) {
    width: 100%;
    margin-block-end: var(--ds-app-space-layout-stack-cozy);
  }

  ::slotted(reimagine-link-bar[configuration='radio']) {
    display: flex;
    justify-content: var(
      --ds-pricing-grid-radio-justify-content,
      ${t(v)}
    );
  }

  .footnote {
    margin-top: var(--ds-pricing-grid-footnote-margin, ${t(_)});
  }
`,$="grid",w="11px",C="contents",x=e`
  /* Grid Styles */
  @media (min-width: ${t(h.md)}) {
    :host([configuration='grid']) {
      --ds-grid-card-space: ${t(w)};
      --ds-grid-card-width: calc(${p.lg} / var(--ds-grid-cards));
    }

    :host([configuration='grid']) .base {
      display: ${t($)};
      grid-template-columns: repeat(
        var(--ds-grid-cards),
        calc((100% * var(--ds-grid-card-width) / ${p.lg}) - var(--ds-grid-card-space))
      );
      column-gap: var(--ds-app-space-micro-m, 1rem);
    }

    :host([configuration='grid']) ::slotted(reimagine-layout-column) {
      display: var(
        --ds-pricing-grid-column-display,
        ${t(C)}
      );
    }

    ::slotted(reimagine-tabs[configuration='radio']) {
      --ds-tabs-radio-base-justify-content: flex-end;
    }
  }

  @media (max-width: ${t(m(h.md))}) {
    :host([configuration='grid']) .base {
      display: flex;
      flex-wrap: wrap;
      row-gap: var(--ds-app-space-micro-m, 1.5rem);
    }

    :host([configuration='grid']) ::slotted(reimagine-layout-column) {
      width: 100%;
    }

    ::slotted(reimagine-link-bar[configuration='radio']) {
      --ds-pricing-grid-radio-justify-content: flex-start;
    }
  }
`,E=s.col1even,j="grid";var k=Object.defineProperty,O=Object.getOwnPropertyDescriptor,P=Object.getPrototypeOf,F=Reflect.get,T=(t,e,r,i)=>{for(var o,a=i>1?void 0:i?O(e,r):e,s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i?o(e,r,a):o(a))||a);return i&&a&&k(e,r,a),a};const V="reimagine-pricing-grid";let G=class extends n{constructor(){super(...arguments),this._defaultSlotEmpty=!0,this._footnoteSlotEmpty=!0,this._viewportObserver=new f(this,{callback:()=>this._handleViewportChange()})}handleFootnoteSlotChange(){this._footnoteSlotEmpty=0===this._footnoteSlot.length}_getPricingCards(){return this._defaultSlot.filter(t=>t.nodeType===Node.ELEMENT_NODE).flatMap(t=>{if(d(t,"reimagine-card-product-pricing"))return[t];const e=l(t,"reimagine-card-product-pricing");return e?[e]:[]})}_handleSlotChange(){this._defaultSlotEmpty=0===this._defaultSlot.length,!this._defaultSlotEmpty&&this.configuration===j&&this._getPricingCards().forEach((t,e)=>{c(t,{layout:u.grid,"grid-index":(e+1).toString()})})}_setGridCardsVar(){if(this.configuration!==j)return;const t=this._getPricingCards().length;if(0===t)return;let e;e=this._viewportObserver.isLarge()?t:this._viewportObserver.isMedium()?2:1,this.style.setProperty("--ds-grid-cards",e.toString())}_handleViewportChange(){this._setGridCardsVar()}_renderLayout(){return a`
      <reimagine-layout
        part="base"
        class="base"
        configuration=${this.configuration||E}
      >
        <slot @slotchange=${this._handleSlotChange}></slot>
      </reimagine-layout>
      ${this._renderFootnote()}
    `}_renderContentTemplate(){return this.configuration===j?a`<slot @slotchange=${this._handleSlotChange}></slot>${this._renderFootnote()}`:this._renderLayout()}_renderFootnote(){return a`
      <div class="footnote" part="footnote" style="${this.toggleDisplay(this._footnoteSlotEmpty)}">
        <slot name="footnote" @slotchange=${this.handleFootnoteSlotChange}></slot>
      </div>
    `}_renderBlade(){return this.baseContent?a` <div class="base" part="base">${this._renderContentTemplate()}</div> `:a`<reimagine-container part="base" class="base"
      >${this._renderContentTemplate()}</reimagine-container
    > `}render(){return this.renderUiShell(this._renderBlade())}};var L,D,M;G.styles=[...(L=G,D=G,M="styles",F(P(L),M,D)||[]),S,x],T([r({attribute:"configuration",reflect:!0})],G.prototype,"configuration",2),T([i()],G.prototype,"_defaultSlot",2),T([i({slot:"footnote"})],G.prototype,"_footnoteSlot",2),T([o()],G.prototype,"_defaultSlotEmpty",2),T([o()],G.prototype,"_footnoteSlotEmpty",2),G=T([g(V)],G);export{G as PricingGrid,V as name};
