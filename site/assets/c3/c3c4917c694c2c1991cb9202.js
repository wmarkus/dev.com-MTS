import{r as t,i as o,o as e,b as n,c as a,e as s,f as i}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{c as l,b as r,m as u}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{q as p,s as h,i as m,d as c}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{S as g}from"/__mirror/assets/ecadaafe454c3c322d56b64c";import{v as d}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";const y=o`
  :host {
    --ds-card-feature-top-flex: 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: var(--ds-card-grid-container-gap, ${t("var(--ds-app-space-micro-m, 1rem)")});
  }

  ::slotted(reimagine-layout-column.top-button-column) {
    --ds-layout-column-flex-direction: column;
    --ds-button-min-width: 100%;

    display: flex;
  }

  ::slotted(reimagine-layout-column[slot='button']) {
    display: flex;
    justify-content: center;
  }

  ::slotted(reimagine-tabs) {
    --ds-tabs-width: 100%;
  }
`,b=o`
  @media (min-width: ${t(d.sm)}) {
    ::slotted(reimagine-layout-column.top-button-column) {
      --ds-layout-column-flex-direction: row;
    }
  }

  @media (min-width: ${t(d.md)}) {
    ::slotted(reimagine-layout-column.top-button-column) {
      justify-content: flex-end;
    }
  }
`,f=l.col3Even;var S=Object.defineProperty,w=Object.getOwnPropertyDescriptor,_=Object.getPrototypeOf,$=Reflect.get,E=(t,o,e,n)=>{for(var a,s=n>1?void 0:n?w(o,e):o,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(n?a(o,e,s):a(s))||s);return n&&s&&S(o,e,s),s};const v="reimagine-featured";let C=class extends(g(r)){constructor(){super(...arguments),this.enableShowMoreShowLess=!1,this._topSlotEmpty=!0,this._buttonSlotEmpty=!0}handleTopSlotChange(){this._topSlotEmpty=0===this._topSlot.length,!this._topSlotEmpty&&this._topSlot.length>0&&(this._topSlot.forEach((t,o)=>{const e=t,n=p(e,"reimagine-heading-block");if(h(n,{size:"s"}),1===o){e.classList.add("top-button-column");const t=p(e,"reimagine-button");h(t,{size:"large",shape:"rounded",appearance:"button--secondary"})}}),2===this._topSlot.length&&(this.topLayoutConfiguration=this.topLayoutConfiguration??u.col2even))}handleButtonSlotChange(){this._buttonSlotEmpty=0===this._buttonSlot.length,!this._buttonSlotEmpty&&this._buttonSlot.length>0&&this._buttonSlot.forEach(t=>{let o=null;m(t,"reimagine-layout-column")&&(o=p(t,"reimagine-button")),o&&h(o,{shape:"rounded",appearance:"button--secondary"})})}handleBaseSlotChange(t){t.target.assignedElements({flatten:!0}).forEach(t=>{if(m(t,"reimagine-layout-column")){const o=p(t,"reimagine-card-promo");if(o){o.style.height="100%";const e=o.getAttribute("column-span");e&&t.classList.add(`column-span-${e}`)}}})}_renderBlade(){const t="container",o=n`
      <reimagine-layout
        class="top"
        part="top"
        style="${this.toggleDisplay(this._topSlotEmpty)}"
        configuration=${e(this.topLayoutConfiguration)}
      >
        <slot name="top" @slotchange=${this.handleTopSlotChange}></slot>
      </reimagine-layout>
      <reimagine-layout
        part="base"
        class="base"
        configuration=${this.configuration||f}
        ?show-more-show-less-container=${this.enableShowMoreShowLess}
      >
        <slot @slotchange=${this.handleBaseSlotChange}></slot>
      </reimagine-layout>
      <reimagine-layout
        class="button"
        part="button"
        style="${this.toggleDisplay(this._buttonSlotEmpty)}"
      >
        <slot name="button" @slotchange=${this.handleButtonSlotChange}></slot>
      </reimagine-layout>
      <reimagine-layout
        class="show-more"
        part="show-more"
        style="${this.toggleDisplay(this._showMoreButtonSlotEmpty)}"
      >
        <slot name="show-more-button" @slotchange=${this.handleShowMoreButtonSlotChange}></slot>
      </reimagine-layout>
    `;return this.baseContent?n` <div class=${t} part=${t}>${o}</div> `:n`
      <reimagine-container class=${t} part=${t}>
        ${o}
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var x,j,B;C.styles=[...(x=C,j=C,B="styles",$(_(x),B,j)||[]),y,b],E([a({attribute:"configuration",reflect:!0})],C.prototype,"configuration",2),E([a({attribute:"top-layout-configuration",reflect:!0})],C.prototype,"topLayoutConfiguration",2),E([a({type:Boolean,reflect:!0,attribute:"enable-show-more-show-less"})],C.prototype,"enableShowMoreShowLess",2),E([s({slot:"top"})],C.prototype,"_topSlot",2),E([s({slot:"button"})],C.prototype,"_buttonSlot",2),E([i()],C.prototype,"_topSlotEmpty",2),E([i()],C.prototype,"_buttonSlotEmpty",2),C=E([c(v)],C);export{C as Featured,v as name};
