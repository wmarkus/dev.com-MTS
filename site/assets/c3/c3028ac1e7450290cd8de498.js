import{r as t,i,e,f as s,b as a}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{c as l,d as o}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{ScrollsliderItem as r}from"/__mirror/assets/08c2f7191e700d0b495894c6";import{p as n,v as d,q as m}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";const c={marginBlockStart:"initial",marginInlineStart:"initial",marginBlockEnd:"initial",marginInlineEnd:"initial",padding:"initial",paddingBlock:"initial",paddingInline:"initial",boxSizing:"initial",outlineOffset:d},p=i`
  :host {
    padding-block: var(
      --ds-carousel-item-padding-block,
      ${t(c.paddingBlock)}
    );
    padding-inline: var(
      --ds-carousel-item-padding-inline,
      ${t(c.paddingInline)}
    );
  }

  :host([tabindex]:focus:not(:focus-visible)) {
    outline: none !important;
  }

  :host([tabindex]:focus-visible) {
    --ds-vfi-text-color: var(--ds-app-color-interactive-secondary-border-default);
    --ds-hero-featured-slider-item-outline: ${n};
    --ds-hero-featured-slider-item-outline-offset: ${d};
    --ds-media-playlist-video-item-outline: ${n};
    --ds-media-playlist-video-item-outline-offset: ${m};
    --ds-hero-media-carousel-item-outline: ${n};
    --ds-hero-media-carousel-item-outline-offset: ${d};
    outline: var(--ds-carousel-item-outline, ${n}) !important;
    outline-offset: var(
      --ds-carousel-item-outline-offset,
      ${t(c.outlineOffset)}
    );
  }

  .carousel-item__base {
    display: flow-root; /* Prevents clipping of slotted elements with margins */
    height: 100%;
    margin-block-end: var(
      --ds-carousel-item-margin-block-end,
      ${t(c.marginBlockEnd)}
    );
    margin-inline-end: var(
      --ds-carousel-item-margin-inline-end,
      ${t(c.marginInlineEnd)}
    );
    margin-block-start: var(
      --ds-carousel-item-margin-block-start,
      ${t(c.marginBlockStart)}
    );
    margin-inline-start: var(
      --ds-carousel-item-margin-inline-start,
      ${t(c.marginInlineStart)}
    );
    padding: var(--ds-carousel-item-padding, ${t(c.padding)});
    box-sizing: var(--ds-carousel-item-box-sizing, ${t(c.boxSizing)});
  }
`;var u=Object.defineProperty,g=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,f=Reflect.get,_=(t,i,e,s)=>{for(var a,l=s>1?void 0:s?g(i,e):i,o=t.length-1;o>=0;o--)(a=t[o])&&(l=(s?a(i,e,l):a(l))||l);return s&&l&&u(i,e,l),l};const b="reimagine-carousel-item";let v=0,S=class extends r{constructor(){super(...arguments),this._componentId=++v,this._componentIdFallback=`carousel-item-${this._componentId}`,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0}_handleSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length}_renderOptionalSlot(t,i){return a`
      <div part=${t} class=${t} style="${i?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_findParentSlider(){return l(this,"reimagine-carousel")||this.parentElement}_isFocused(){return this===document.activeElement}willUpdate(t){this.id=this.id.length>0?this.id:this._componentIdFallback,t.has("partial")&&(this.partial?(this.setAttribute("tabindex","-1"),this.setAttribute("inert","")):(this.removeAttribute("inert"),this._isFocused()||this.setAttribute("tabindex","0")))}render(){return a`
      ${this._renderOptionalSlot("carousel-item__first",this._firstSlotEmpty)}
      <div part="carousel-item__base" class="carousel-item__base">
        <slot></slot>
      </div>
      ${this._renderOptionalSlot("carousel-item__last",this._lastSlotEmpty)}
    `}};var $,y,k;S.styles=[...($=S,y=S,k="styles",f(h($),k,y)),p],_([e({slot:"carousel-item__first"})],S.prototype,"_firstSlot",2),_([e({slot:"carousel-item__last"})],S.prototype,"_lastSlot",2),_([s()],S.prototype,"_firstSlotEmpty",2),_([s()],S.prototype,"_lastSlotEmpty",2),S=_([o(b)],S);export{S as CarouselItem,b as name};
