import{i as e,e as t,f as a,b as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{a as s,c as o,s as i,d as l}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{v as n,b as d,c}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{n as u}from"/__mirror/assets/42f825e3dad9c53f1fc34d82";const m=e`
  :host {
    --ds-carousel-item-padding-block: var(--ds-app-space-micro-2xs, 0.5rem);
    --ds-carousel-item-padding-inline: var(--ds-app-space-micro-2xs, 0.5rem);
    --ds-carousel-item-outline-offset: ${n};
    --ds-ui-shell-gap: var(--ds-app-space-micro-xl, 2rem);
  }

  ::slotted(reimagine-layout-column.ui-shell-header-button-column) {
    padding-top: var(--ds-app-space-micro-2xs, 0.5rem);
  }
`;var p=Object.defineProperty,g=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,f=Reflect.get,y=(e,t,a,r)=>{for(var s,o=r>1?void 0:r?g(t,a):t,i=e.length-1;i>=0;i--)(s=e[i])&&(o=(r?s(t,a,o):s(o))||o);return r&&o&&p(t,a,o),o};const b="reimagine-carousel-storytelling";let _=class extends d{constructor(){super(...arguments),this._defaultSlotEmpty=!0}_updateCarouselAttributes(){const e=Array.from(s(this,u)).filter(e=>!o(e,"reimagine-modal"));0!==e.length&&e.forEach(e=>{i(e,{"layout-configuration":c.card5,"full-bleed":""})})}_updateCardBadgeAttributes(){const e=Array.from(s(this,"reimagine-card-badge"));0!==e.length&&e.forEach(e=>{i(e,{"text-block-configuration":"stacked"})})}_handleDefaultSlotChange(){this._defaultSlotEmpty=0===this._defaultSlot.length,!this._defaultSlotEmpty&&(this._updateCarouselAttributes(),this._updateCardBadgeAttributes())}_renderBlade(){const e="container",t=r`
      <reimagine-layout configuration="1-col-even">
        <reimagine-layout-column>
          <slot @slotchange=${()=>this._handleDefaultSlotChange()}></slot>
        </reimagine-layout-column>
      </reimagine-layout>
    `;return this.baseContent?r` <div class=${e} part=${e}>${t}</div> `:r`
      <reimagine-container class=${e} part=${e}>
        ${t}
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var v,S,x;_.styles=[...(v=_,S=_,x="styles",f(h(v),x,S)||[]),m],y([t()],_.prototype,"_defaultSlot",2),y([a()],_.prototype,"_defaultSlotEmpty",2),_=y([l(b)],_);export{_ as CarouselStoryTelling,b as name};
