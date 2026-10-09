import{r as t,i as e,g as o,f as s,b as a}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as i}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{v as l}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{n as r}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{b as n,c as p}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";const m="var(--ds-app-type-body-xs-font-size, 0.75rem)",d="var(--ds-app-type-body-xs-line-height, 1rem)",g="var(--ds-app-type-body-xs-letter-spacing, -0.03em)",c=e`
  :host {
    --ds-scrollslider-align-items: center;
  }

  :host reimagine-layout::part(layout__base) {
    --ds-layout-row-gap: var(--ds-app-space-micro-xl, 2rem);
    --ds-layout-column-display: flex;
    --ds-layout-column-flex-direction: column;
    --ds-layout-column-align-items: center;
    --ds-layout-column-row-gap: var(--ds-app-space-micro-xs, 0.5rem);
    --ds-button-group-width: 100%;
    --ds-button-group-justify-content: center;
  }

  .base {
    display: var(--ds-container-display, flex);
    flex-direction: var(--ds-container-flex-direction, column);
    gap: var(--ds-app-space-micro-xl, 2rem);
    justify-content: center;
    align-items: center;
    text-align: center;
    color: var(--ds-app-color-base-default-fg-body, #17253d);
  }

  ::slotted([slot='popover']) {
    --ds-app-type-body-m-font-weight: var(
      --ds-logo-testimonials-footer-text-font-weight,
      ${t("var(--ds-app-type-body-xs-font-weight, 400)")}
    );
    --ds-app-type-body-m-font-size: var(
      --ds-logo-testimonials-footer-text-font-size,
      ${t(m)}
    );
    --ds-app-type-body-m-line-height: var(
      --ds-logo-testimonials-text-line-height,
      ${t(d)}
    );
    --ds-app-type-body-m-letter-spacing: var(
      --ds-logo-testimonials-footer-text-letter-spacing,
      ${t(g)}
    );
  }

  :host ::slotted(reimagine-popover[slot='popover']) {
    text-align: start;
  }
`,y=e`
  @media (max-width: ${t(l.md)}) {
    .footer {
      display: block;
      width: 100%;
    }

    :host ::slotted([slot='popover']) {
      margin: 0, auto;
      font-size: ${t(r.fontSize)};
      font-weight: ${t(r.fontWeight)};
      line-height: ${t(r.lineHeight)};
      letter-spacing: ${t(r.letterSpacing)};
    }
  }
`;var h=Object.defineProperty,u=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,v=Reflect.get,_=(t,e,o,s)=>{for(var a,i=s>1?void 0:s?u(e,o):e,l=t.length-1;l>=0;l--)(a=t[l])&&(i=(s?a(e,o,i):a(i))||i);return s&&i&&h(e,o,i),i};const S="reimagine-logo-testimonials";let $=class extends n{constructor(){super(),this._defaultSlotEmpty=!0,this._popoverSlotEmpty=!0,this._footerSlotEmpty=!0,this.headerLayoutConfiguration||(this.headerLayoutConfiguration=p.col1focus)}_handleSlotChange(){this._defaultSlotEmpty=0===this._defaultSlot.length,this._popoverSlotEmpty=0===this._popoverSlot.length,this._footerSlotEmpty=0===this._footerSlot.length}_renderBlade(){const t="base",e=a`
      <reimagine-layout
        configuration=${p.col1even}
        part="content"
        class="content"
        style="${this.toggleDisplay(this._defaultSlotEmpty)}"
      >
        <slot @slotchange=${this._handleSlotChange}></slot>
      </reimagine-layout>
      <reimagine-layout
        configuration=${p.col1even}
        part="popover"
        class="popover"
        style="${this.toggleDisplay(this._popoverSlotEmpty)}"
      >
        <reimagine-layout-column
          ><slot name="popover" @slotchange=${this._handleSlotChange}></slot
        ></reimagine-layout-column>
      </reimagine-layout>
      <reimagine-layout
        configuration=${p.col1even}
        part="footer"
        class="footer"
        style="${this.toggleDisplay(this._footerSlotEmpty)}"
      >
        <reimagine-layout-column
          ><slot name="footer" @slotchange=${this._handleSlotChange}></slot
        ></reimagine-layout-column>
      </reimagine-layout>
    `;return this.baseContent?a`<div class=${t} part=${t}>${e}</div>`:a`
          <reimagine-container part=${t} class="${t}">
            ${e}
          </reimagine-container>
        `}render(){return this.renderUiShell(this._renderBlade())}};var b,x,E;$.styles=[...(b=$,x=$,E="styles",v(f(b),E,x)||[]),c,y],_([o()],$.prototype,"_defaultSlot",2),_([o({slot:"popover"})],$.prototype,"_popoverSlot",2),_([o({slot:"footer"})],$.prototype,"_footerSlot",2),_([s()],$.prototype,"_defaultSlotEmpty",2),_([s()],$.prototype,"_popoverSlotEmpty",2),_([s()],$.prototype,"_footerSlotEmpty",2),$=_([i(S)],$);export{$ as HighImpactLogoTestimonials,S as name};
