import{r as t,i as s,c as e,e as i,f as r,a as l,b as o}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{c as a,d as n}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{g as c}from"/__mirror/assets/597f3dbe3ef56339bfbefa4a";import{j as d}from"/__mirror/assets/6ad137053d5da8fc91d912f1";const h="start",p="initial",m=s`
  :host {
    display: var(--ds-scrollslider-item-display, ${t("block")});
    max-width: 100%;
    height: var(--ds-scrollslider-item-default-height, 100%);
    scroll-snap-align: var(
      --ds-scrollslider-item-scroll-snap-align,
      ${t(h)}
    );
  }

  .scrollslider-item__base {
    display: var(--ds-scrollslider-item-display, initial);
    height: var(--ds-scrollslider-item-height, ${t(p)});
  }

  :host(.hidden) {
    --ds-scrollslider-item-display: none;
  }
`;var _=Object.defineProperty,v=Object.getOwnPropertyDescriptor,u=(t,s,e,i)=>{for(var r,l=i>1?void 0:i?v(s,e):s,o=t.length-1;o>=0;o--)(r=t[o])&&(l=(i?r(s,e,l):r(l))||l);return i&&l&&_(s,e,l),l};const f="reimagine-scrollslider-item";let g=class extends l{constructor(){super(...arguments),this.i18nManager=c(),this.partial=!1,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0}_findParentSlider(){return a(this,"reimagine-scrollslider")||this.parentElement}_handleFocus(){var t;const s=this._findParentSlider();if(!s)return;const e=this.getBoundingClientRect(),i=s.getBoundingClientRect(),r=e.left<i.left-1,l=e.right>i.right+1;if(!r&&!l)return;const o=(null==(t=this.i18nManager)?void 0:t.dir)||"ltr",a="rtl"===o?d.partialFocusNext:d.partialFocusPrev,n="rtl"===o?d.partialFocusPrev:d.partialFocusNext,c=r?a:n;this.dispatchEvent(new CustomEvent(c,{bubbles:!0,composed:!0}))}_handleSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length}_renderOptionalSlot(t="scrollslider-item__first",s=this._firstSlotEmpty){return o`
      <div part=${t} class=${t} style="${s?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.addEventListener("focusin",this._handleFocus),this.addEventListener("click",this._handleFocus);const t={root:this._findParentSlider(),rootMargin:"0px",threshold:.99};this._observer=new IntersectionObserver(t=>{t.forEach(t=>{this.partial=!t.isIntersecting})},t),this._observer.observe(this)}disconnectedCallback(){var t;super.disconnectedCallback(),this.removeEventListener("focusin",this._handleFocus),this.removeEventListener("click",this._handleFocus),null==(t=this._observer)||t.disconnect()}updated(t){t.has("partial")&&this.dispatchEvent(new CustomEvent(d.partialChange,{bubbles:!0,composed:!0}))}render(){return o`
      ${this._renderOptionalSlot("scrollslider-item__first",this._firstSlotEmpty)}
      <div part="scrollslider-item__base" class="scrollslider-item__base">
        <slot></slot>
      </div>
      ${this._renderOptionalSlot("scrollslider-item__last",this._lastSlotEmpty)}
    `}};g.styles=[m],u([e({type:Boolean,reflect:!0})],g.prototype,"partial",2),u([e({reflect:!0})],g.prototype,"theme",2),u([i({slot:"scrollslider-item__first"})],g.prototype,"_firstSlot",2),u([i({slot:"scrollslider-item__last"})],g.prototype,"_lastSlot",2),u([r()],g.prototype,"_firstSlotEmpty",2),u([r()],g.prototype,"_lastSlotEmpty",2),u([r()],g.prototype,"_observer",2),g=u([n(f)],g);export{g as ScrollsliderItem,f as name};
