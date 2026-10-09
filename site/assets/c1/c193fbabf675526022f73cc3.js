import{i as t,c as e,e as o,f as a,b as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i,a as s,s as n,d}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{v as c,b as l,c as m}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{T as u}from"/__mirror/assets/aa6cee6f34201a882984ee0e";import{d as p}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{n as b}from"/__mirror/assets/54716721f6ce76b6127c2436";import{n as g}from"/__mirror/assets/2731684d53f7044984bbf6c7";import{n as f}from"/__mirror/assets/42f825e3dad9c53f1fc34d82";const y=t`
  :host {
    --ds-tabs-base-margin-block-end: var(--ds-app-space-micro-xl, 2rem);
    --ds-carousel-indicator-container-padding: 0 var(--ds-app-space-micro-m, 1rem);
    --ds-card-banner-height: 100%;
    --ds-card-case-study-height: 100%;
    --ds-media-height: auto;
    --ds-carousel-item-outline-offset: ${c};
  }

  ::slotted(reimagine-carousel) {
    --ds-carousel-item-padding-block: var(--ds-app-space-micro-2xs, 0.25rem);
    --ds-carousel-item-padding-inline: var(--ds-app-space-micro-3xs, 0.125rem);
    width: 100%;
  }
`,h="tabs",v="media";var j=Object.defineProperty,_=Object.getOwnPropertyDescriptor,x=Object.getPrototypeOf,S=Reflect.get,C=(t,e,o,a)=>{for(var r,i=a>1?void 0:a?_(e,o):e,s=t.length-1;s>=0;s--)(r=t[s])&&(i=(a?r(e,o,i):r(i))||i);return a&&i&&j(e,o,i),i};const $="reimagine-carousel-featured";let E=class extends l{constructor(){super(...arguments),this._bodySlotEmpty=!0}_updateCarouselAttributes(){if(this._bodySlotEmpty=0===this._bodySlot.length,this._bodySlotEmpty)return;const t=this._bodySlot[0];if(!t||!i(t,f))return;const e=s(t,b),o=s(t,g);t.setAttribute("layout-configuration",m.card1),this.indicatorConfiguration===h?(n(t,{"indicator-configuration":p.tabs}),e.forEach(t=>{t.setAttribute("configuration",u.tabItemHorizontal)})):this.indicatorConfiguration===v&&(n(t,{"indicator-configuration":p.media}),o.forEach(t=>{t.setAttribute("configuration",u.tabCompoundLabelLogo21To9)}))}_renderBlade(){const t="container",e=r`
      <reimagine-layout class="body" part="body">
        <slot name="body" @slotchange=${()=>this._updateCarouselAttributes()}></slot>
      </reimagine-layout>
      <!-- Default slot used exclusively for the pill bar variant -->
      <reimagine-layout configuration="1-col-even">
        <reimagine-layout-column>
          <slot></slot>
        </reimagine-layout-column>
      </reimagine-layout>
    `;return this.baseContent?r` <div class=${t} part=${t}>${e}</div> `:r`
      <reimagine-container class=${t} part=${t}>
        ${e}
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var A,O,k;E.styles=[...(A=E,O=E,k="styles",S(x(A),k,O)||[]),y],C([e({type:String,reflect:!0,attribute:"indicator-configuration"})],E.prototype,"indicatorConfiguration",2),C([o({slot:"body"})],E.prototype,"_bodySlot",2),C([a()],E.prototype,"_bodySlotEmpty",2),E=C([d($)],E);export{E as CarouselFeatured,$ as name};
