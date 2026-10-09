import{r as t,i as s,b as o,c as i,e,g as a,f as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as l}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{b as n}from"/__mirror/assets/7e3cbd307d93b862d54c4d69";import{l as c,R as d}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{s as h}from"/__mirror/assets/5662500ccacfc106da428b8f";import{v as p}from"/__mirror/assets/a0c58371e5804c03cae366bb";import{B as u}from"/__mirror/assets/6ad137053d5da8fc91d912f1";const _="stretch",m="0",b="var(--ds-app-color-base-default-fg-heading, #0e1726)",f="0",g="inherit",y="inherit",v="100%",S=s`
  :host {
    --ds-tab-item-base-width: 100%;

    display: var(--ds-carousel-indicator-display, ${t("inline-flex")});
    align-items: var(--ds-carousel-indicator-align-items, ${t(_)});
  }

  :host(.hidden) {
    --ds-carousel-indicator-display: none;
  }

  .carousel-indicator__base {
    margin-block-end: var(
      --ds-carousel-indicator-margin-block-end,
      ${t(y)}
    );
    width: var(--ds-carousel-indicator-width, ${t(v)});
    line-height: var(--ds-carousel-indicator-line-height, ${t(g)});
  }

  button {
    ${n};
    background: none;
    padding: 0;
    margin: var(--ds-carousel-indicator-button-margin, ${t(m)});
    width: 100%;
  }

  button:focus {
    outline: 0;
  }

  button:focus ::slotted(*) {
    ${c};
    color: var(--ds-carousel-indicator-focus-color, ${t(b)});
    outline-offset: var(
      --ds-carousel-indicator-outline-offset,
      ${t(f)}
    );
  }
`;var $=Object.defineProperty,C=Object.getOwnPropertyDescriptor,j=(t,s,o,i)=>{for(var e,a=i>1?void 0:i?C(s,o):s,r=t.length-1;r>=0;r--)(e=t[r])&&(a=(i?e(s,o,a):e(a))||a);return i&&a&&$(s,o,a),a};const k="reimagine-carousel-indicator";let w=class extends(u(d)){constructor(){super(...arguments),this.active=!1,this.disableClicks=!1,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0}_handleSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length,this._slot.length>0&&this._slot[0].hasAttribute("configuration")&&this.setAttribute("configuration",this._slot[0].getAttribute("configuration")||"")}_renderOptionalSlot(t,s){return o`
      <div part=${t} class=${t} style="${s?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}updated(t){this._slot.length>0&&(t.has("active")&&this.active?this._slot[0].setAttribute("active",""):this._slot[0].removeAttribute("active"))}_renderIndicatorContent(){return o`
      ${this._renderOptionalSlot("carousel-indicator__first",this._firstSlotEmpty)}
      <div part="carousel-indicator__base tabs__base" class="carousel-indicator__base tabs__base">
        <slot @slotchange="${this._handleSlotChange}"></slot>
      </div>
      ${this._renderOptionalSlot("carousel-indicator__last",this._lastSlotEmpty)}
    `}render(){return this.disableClicks?this._renderIndicatorContent():this.renderButton(this._renderIndicatorContent())}};w.shadowRootOptions={...d.shadowRootOptions,delegatesFocus:!0},w.styles=[h,p,S],j([i({type:Boolean,reflect:!0})],w.prototype,"active",2),j([i({type:Boolean,reflect:!0,attribute:"disable-clicks"})],w.prototype,"disableClicks",2),j([e({slot:"carousel-indicator__first"})],w.prototype,"_firstSlot",2),j([e({slot:"carousel-indicator__last"})],w.prototype,"_lastSlot",2),j([a()],w.prototype,"_slot",2),j([r()],w.prototype,"_firstSlotEmpty",2),j([r()],w.prototype,"_lastSlotEmpty",2),w=j([l(k)],w);export{w as CarouselIndicator,k as name};
