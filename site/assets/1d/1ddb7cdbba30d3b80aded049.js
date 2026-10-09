import{r as t,i as e,f as s,e as o,b as a}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{e as i,v as l,b as r,c as n}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{a as c,s as d,d as m}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{b as u,v as p}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import"/__mirror/assets/08c2f7191e700d0b495894c6";const h=e`
  :host {
    --ds-carousel-auto-columns: calc((100% - 1rem) * 10 / 24);
    --ds-carousel-item-padding: ${t(i)};
    --ds-carousel-item-box-sizing: border-box;
    --ds-app-color-interactive-secondary-fg-default: currentcolor;
    --ds-carousel-item-outline-offset: ${t(l)};
  }

  :host ::slotted(reimagine-layout-column:not(.ui-shell-header-button-column)) {
    --ds-button-group-display: none;
  }

  :host ::slotted(reimagine-layout-column.ui-shell-header-button-column) {
    --ds-layout-column-align-items: flex-start;
  }
`,g=e`
  @media (max-width: ${t(u(p.sm))}) {
    :host {
      --ds-tab-item-display: block;
      --ds-carousel-indicator-margin-block-end: 0;
    }
  }

  @media (min-width: ${t(p.sm)}) {
    :host {
      --ds-carousel-indicator-display: none;
      --ds-carousel-indicator-padding: 0;
    }
  }

  @media (min-width: ${t(p.md)}) {
    :host {
      --ds-card-feature-height: fit-content;
      --ds-carousel-column-total: 2;
      --ds-carousel-indicator-padding: 2rem;
      --ds-carousel-indicator-display: inline-flex;
    }
  }

  @media (min-width: ${t(p.lg)}) {
    :host {
      --ds-carousel-column-total-viewports-large: 2;
    }
  }
`;var b=Object.defineProperty,y=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,_=Reflect.get,v=(t,e,s,o)=>{for(var a,i=o>1?void 0:o?y(e,s):e,l=t.length-1;l>=0;l--)(a=t[l])&&(i=(o?a(e,s,i):a(i))||i);return o&&i&&b(e,s,i),i};const P="reimagine-high-impact-vertical-tabs";let S=class extends r{constructor(){super(...arguments),this._tabsPillSlotEmpty=!0}_slotChangeHandler(){if(this._tabsPillSlotEmpty=0===this._tabsPillSlot.length,this._tabsPillSlotEmpty)return;const t=this._tabsPillSlot.flatMap(t=>Array.from(c(t,"reimagine-carousel")));d(t,{"layout-configuration":n.card1},!0)}_renderBlade(){return a`
      <reimagine-container>
        <reimagine-layout
          configuration="1-col-even"
          style="${this.toggleDisplay(this._tabsPillSlotEmpty)}"
        >
          <reimagine-layout-column>
            <slot name="tabs-pill" @slotchange=${this._slotChangeHandler}></slot>
          </reimagine-layout-column>
        </reimagine-layout>
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var j,x,$;S.styles=[...(j=S,x=S,$="styles",_(f(j),$,x)||[]),h,g],v([s()],S.prototype,"_tabsPillSlotEmpty",2),v([o({slot:"tabs-pill"})],S.prototype,"_tabsPillSlot",2),S=v([m(P)],S);export{S as HighImpactVerticalTabs,P as name};
