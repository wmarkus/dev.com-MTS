import{r as e,i as t,e as o,f as a,b as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as s}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{b as i,c as l}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";const n="var(--ds-app-space-micro-l, 1.5rem)",p=t`
  :host {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .header ::slotted(reimagine-text-block),
  .header ::slotted(reimagine-heading-block) {
    --ds-app-type-heading-xs-font-size: var(--ds-app-type-heading-3xs-font-size, 1rem);
    --ds-app-type-heading-xs-font-weight: var(--ds-app-type-heading-3xs-font-weight, 600);
  }

  .body {
    display: flex;
    margin-inline: auto;
    gap: var(--ds-utility-logo-footer-body-gap, ${e("var(--ds-app-space-micro-m, 1rem)")});
  }

  .footer {
    text-align: center;
  }

  .content reimagine-layout-column {
    display: flex;
    flex-direction: column;
    gap: var(--ds-utility-logo-footer-content-gap, ${e(n)});
  }
`;var d=Object.defineProperty,h=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,g=Reflect.get,m=(e,t,o,a)=>{for(var r,s=a>1?void 0:a?h(t,o):t,i=e.length-1;i>=0;i--)(r=e[i])&&(s=(a?r(t,o,s):r(s))||s);return a&&s&&d(t,o,s),s};const y="reimagine-logo-footer";let f=class extends i{constructor(){super(...arguments),this._headerSlotEmpty=!0,this._footerSlotEmpty=!0}_handleSlotChange(){this._headerSlotEmpty=0===this._headerSlot.length,this._footerSlotEmpty=0===this._footerSlot.length}_renderBlade(){const e="base",t=r`
      <reimagine-layout
        configuration=${l.col1focus}
        part="content"
        class="content"
      >
        <reimagine-layout-column>
          <div part="header" class="header" style="${this.toggleDisplay(this._headerSlotEmpty)}">
            <slot name="header" @slotchange=${this._handleSlotChange}></slot>
          </div>
          <div part="body" class="body">
            <slot></slot>
          </div>
          <div part="footer" class="footer" style="${this.toggleDisplay(this._footerSlotEmpty)}">
            <slot name="footer" @slotchange=${this._handleSlotChange}></slot>
          </div>
        </reimagine-layout-column>
      </reimagine-layout>
    `;return this.baseContent?r`<div class=${e} part=${e}>${t}</div>`:r`
          <reimagine-container part=${e} class="${e}">
            ${t}
          </reimagine-container>
        `}render(){return this.renderUiShell(this._renderBlade())}};var u,v,_;f.styles=[...(u=f,v=f,_="styles",g(c(u),_,v)||[]),p],m([o({slot:"header"})],f.prototype,"_headerSlot",2),m([o({slot:"footer"})],f.prototype,"_footerSlot",2),m([a()],f.prototype,"_headerSlotEmpty",2),m([a()],f.prototype,"_footerSlotEmpty",2),f=m([s(y)],f);export{f as LogoFooter,y as name};
