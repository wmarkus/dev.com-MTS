import{r as t,i as o,c as i,e as r,f as e,b as a}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i as c,d as n}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{a as s}from"/__mirror/assets/a6c6f415f3fcc13d76b9625a";import{name as p}from"/__mirror/assets/1376567b2b82d941066974ae";import{b as d}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";const l="var(--ds-app-space-micro-xl)",h="column",u=o`
  :host {
    --ds-ui-shell-content-row-gap: 20px;
    --ds-ui-shell-gap: var(--ds-app-space-layout-stack-cozy, 2rem);
    --ds-link-outline-offset: 3px;
  }

  :host ::slotted(reimagine-layout-column:first-child) {
    display: flex;
  }

  :host ::slotted(reimagine-accordion) {
    min-width: auto;
  }

  .high-impact-product-accordion_container {
    display: var(
      --ds-high-impact-product-accordion-container-display,
      ${t("flex")}
    );
    gap: var(
      --ds-high-impact-product-accordion-container-gap,
      ${t(l)}
    );
    flex-direction: var(
      --ds-high-impact-product-accordion-container-flex-direction,
      ${t(h)}
    );
  }

  :host([configuration='contained']),
  :host([configuration='contained-without-pillbar']) {
    --ds-surface-border-radius: var(--ds-app-radii-l);
  }
`,m="default",f="contained",g="contained-without-pillbar";var b=Object.defineProperty,_=Object.getOwnPropertyDescriptor,A=Object.getPrototypeOf,y=Reflect.get,v=(t,o,i,r)=>{for(var e,a=r>1?void 0:r?_(o,i):o,c=t.length-1;c>=0;c--)(e=t[c])&&(a=(r?e(o,i,a):e(a))||a);return r&&a&&b(o,i,a),a};const x="reimagine-high-impact-product-accordion";let S=class extends d{constructor(){super(...arguments),this.configuration=m,this.accordionAppearance=s.subtleChevron,this._bottomSlotEmpty=!0}_handleSlotChange(){this._bottomSlotEmpty=0===this._bottomSlot.length,this._bottomSlotEmpty||(this._updateAccordionAttributes(),this._setAccordionAppearance())}_setAccordionAppearance(){const t=this._bottomSlot.filter(t=>c(t,p));t.length>0&&!t[0].hasAttribute("appearance")&&t[0].setAttribute("appearance",this.accordionAppearance)}_updateAccordionAttributes(){const t=this._bottomSlot.filter(t=>c(t,p));t.length>0&&(this.configuration===m?t.forEach(t=>{t.hasAttribute("configuration")||t.setAttribute("configuration","product")}):(this.configuration===f||this.configuration===g)&&t.forEach(t=>{t.hasAttribute("configuration")||t.setAttribute("configuration","product--contained"),t.hasAttribute("appearance")||t.setAttribute("appearance","subtle--chevron"),t.hasAttribute("surface")||t.setAttribute("surface","solid-border")}))}_renderBlade(){const t="high-impact-product-accordion__container",o=a`
      <div
        part="high-impact-product-accordion__bottom"
        class="high-impact-product-accordion__bottom"
      >
        <slot @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `;return this.baseContent?a` <div class=${t} part=${t}>${o}</div> `:a`
      <reimagine-container class=${t} part=${t}>
        ${o}
      </reimagine-container>
    `}render(){return a` ${this.renderUiShell(this._renderBlade())} `}};var $,j,E;S.styles=[...($=S,j=S,E="styles",y(A($),E,j)||[]),u],v([i({attribute:"configuration",reflect:!0})],S.prototype,"configuration",2),v([i({attribute:"accordion-configuration",reflect:!0})],S.prototype,"accordionConfiguration",2),v([i({attribute:"accordion-appearance",reflect:!0})],S.prototype,"accordionAppearance",2),v([r({flatten:!0})],S.prototype,"_bottomSlot",2),v([e()],S.prototype,"_bottomSlotEmpty",2),S=v([n(x)],S);export{S as HighImpactProductAccordion,x as name};
