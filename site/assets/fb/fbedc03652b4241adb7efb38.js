import{r as t,i,c as e,o,b as n}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as a}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{R as s,i as d,B as r}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import"/__mirror/assets/5d2e1bf3d87581457a2b76db";const c={dots:"dots",numbers:"numbers"},l=5,b={change:"onChange"},u="4px",p="6px",g="var(--ds-app-radii-s)",h=i`
  :host {
    display: var(--ds-pagination-item-display, ${t("flex")});
  }

  :host([active]) {
    --ds-button-cursor: default;
  }

  :host([configuration='dots']) {
    --ds-button-border-width: 0;
    --ds-button-outline: 0;
    --ds-button-padding-block-start: calc(${t(u)} / 2);
    --ds-button-padding-block-end: calc(${t(u)} / 2);
    --ds-button-padding-inline-start: calc(${t(u)} / 2);
    --ds-button-padding-inline-end: calc(${t(u)} / 2);
    --ds-button-min-width: ${t(u)};
    --ds-button-min-height: 0;
    --ds-button-max-height: ${t(u)};
  }

  :host([configuration='dots'][active]) {
    --ds-button-padding-block-start: calc(${t(p)} / 2);
    --ds-button-padding-block-end: calc(${t(p)} / 2);
    --ds-button-padding-inline-start: calc(${t(p)} / 2);
    --ds-button-padding-inline-end: calc(${t(p)} / 2);
    --ds-button-min-width: ${t(p)};
    --ds-button-max-height: ${t(p)};
  }

  :host([configuration='dots'][active]) reimagine-button {
     --ds-button-background-color: var(--ds-app-color-interactive-secondary-bg-selected);
  }

  :host([configuration='dots']) reimagine-button,
  :host([configuration='dots']) .pagination-item {
    display: inline-flex;
  }

  :host([configuration='dots']) reimagine-button slot {
    display: none;
  }

  :host([configuration='numbers']) reimagine-button {
    --ds-button-border-radius: var(
      --ds-pagination-item-number-border-radius,
      ${t(g)}
    );
  }
`,m=i`
  @media (forced-colors: active) {
    reimagine-button[appearance='button--primary'] {
      --ds-button-border-width: 0.125rem;
    }
  }
`;var f=Object.defineProperty,v=Object.getOwnPropertyDescriptor,$=(t,i,e,o)=>{for(var n,a=o>1?void 0:o?v(i,e):i,s=t.length-1;s>=0;s--)(n=t[s])&&(a=(o?n(i,e,a):n(a))||a);return o&&a&&f(i,e,a),a};const y="reimagine-pagination-item";let x=class extends s{constructor(){super(...arguments),this.configuration=c.dots,this.active=!1,this.disabled=!1,this.index=1}_handleClickItem(){if(!this.active&&!this.disabled){const t={detail:{[this.configuration===c.dots?"activeIndex":"activePage"]:this.index},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent(b.change,t))}}render(){const t=this.configuration===c.dots,i=this.active||t;return n`<div part="base" class="pagination-item">
      <reimagine-button
        button-label=${o(this.label)}
        aria-current="${o(this.active?"page":void 0)}"
        size=${o(t?void 0:r.small)}
        appearance=${i?d.buttonPrimary:d.buttonGhost}
        @click=${this._handleClickItem}
        ?disabled=${this.disabled}
        ><span slot="button__text"><slot></slot></span
      ></reimagine-button>
    </div>`}};x.styles=[h,m],$([e({reflect:!0})],x.prototype,"configuration",2),$([e()],x.prototype,"label",2),$([e({type:Boolean,reflect:!0})],x.prototype,"active",2),$([e({type:Boolean,reflect:!0})],x.prototype,"disabled",2),$([e({type:Number,reflect:!0})],x.prototype,"index",2),x=$([a(y)],x);export{l as M,x as P,c as a,b,y as n};
