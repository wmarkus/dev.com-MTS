import{i as t,r as e,e as a,g as o,c as r,b as s}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i,a as l,s as n,d}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{v as c}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{name as u}from"/__mirror/assets/1744c47504083b26d862e98f";import{c as p,b as m,n as h}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{name as f}from"/__mirror/assets/5f924eec6274a2d611fc1ea0";import{n as _}from"/__mirror/assets/34233ee5ac8acdb3aa831b25";import{k as g}from"/__mirror/assets/6ad137053d5da8fc91d912f1";const y=t`
  :host ::part(layout__base) {
    --ds-layout-row-gap: var(--ds-app-space-micro-4xl);
  }

  :host {
    --ds-layout-column-display: flex;
    --ds-layout-column-column-gap: var(--ds-app-space-micro-l, 1.5rem);
    --ds-divider-vh: auto;
  }

  :host ::slotted([slot='modal']) {
    --ds-layout-column-display: block;
    --ds-layout-column-column-gap: initial;
  }
`,b=t`
  @media (min-width: ${e(c.md)}) {
    :host ::part(layout__base) {
      --ds-layout-row-gap: var(--ds-app-space-micro-2xl);
    }
  }
`,S=p.col3Even;var v=Object.defineProperty,x=Object.getOwnPropertyDescriptor,A=Object.getPrototypeOf,E=Reflect.get,$=(t,e,a,o)=>{for(var r,s=o>1?void 0:o?x(e,a):e,i=t.length-1;i>=0;i--)(r=t[i])&&(s=(o?r(e,a,s):r(s))||s);return o&&s&&v(e,a,s),s};const j="reimagine-features-and-pricng-3-col";let k=class extends m{constructor(){super(...arguments),this._defaultSlotEmpty=!1}_updateTextBlockAttributes(){this._defaultSlot.filter(t=>i(t,h)).forEach(t=>{l(t,u).forEach(t=>{t.hasAttribute("configuration")||t.setAttribute("configuration",g.stacked)})})}_updateIconAttributes(){this._defaultSlot.filter(t=>i(t,h)).forEach(t=>{l(t,_).forEach(t=>{t.hasAttribute("size")||t.setAttribute("size","3xlarge")})})}_updateDividerAttributes(){this._defaultSlot.filter(t=>i(t,h)).forEach(t=>{l(t,f).forEach(t=>{n(t,{orientation:"vertical"})})})}_updateModalSlot(){var t;null!=(t=this._modalSlot)&&t.length&&this._modalSlot.forEach(t=>{t&&t.children&&Array.from(t.children).forEach(t=>{i(t,"reimagine-modal")&&t.setAttribute("configuration","carousel")})})}_handleModalSlotChange(){this._updateModalSlot()}_handleSlotChange(){this._defaultSlotEmpty=0===this._defaultSlot.length,this._defaultSlotEmpty||(this._updateDividerAttributes(),this._updateTextBlockAttributes(),this._updateIconAttributes())}_renderModalSlot(){return s` <slot name="modal" @slotchange=${this._handleModalSlotChange}></slot> `}_renderBlade(){const t="container",e=s`
      <reimagine-layout
        configuration="${this.configuration||S}"
        density="relaxed"
        part="features-and-pricing-3-col__layout"
        class="features-and-pricing-3-col__layout"
      >
        <slot @slotchange="${this._handleSlotChange}"></slot>
      </reimagine-layout>
    `;return this.baseContent?s` <div class=${t} part=${t}>${e}</div> `:s`
      <reimagine-container class=${t} part=${t}>
        ${e} ${this._renderModalSlot()}
      </reimagine-container>
    `}render(){return s` ${this.renderUiShell(this._renderBlade())} `}};var C,M,w;k.styles=[...(C=k,M=k,w="styles",E(A(C),w,M)||[]),y,b],$([a({flatten:!0})],k.prototype,"_defaultSlot",2),$([o({slot:"modal"})],k.prototype,"_modalSlot",2),$([r({attribute:"configuration",reflect:!0})],k.prototype,"configuration",2),$([r({type:Boolean,reflect:!0})],k.prototype,"_defaultSlotEmpty",2),k=$([d(j)],k);export{k as FeaturesAndPricing3Col,j as name};
