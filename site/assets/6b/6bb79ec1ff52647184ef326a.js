import{r as t,i as e,b as s,e as r,f as a,c as o}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as i}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{s as d}from"/__mirror/assets/4230c2711e37b2e85105da0e";import{F as l}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{R as n,B as p}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";const h={small:"small",medium:"medium"},c="var(--ds-app-space-micro-s)",b="var(--ds-app-space-micro-m)",m="var(--ds-app-space-micro-s)",_="var(--ds-app-space-micro-s)",u="var(--ds-app-radii-m)",v="var(--ds-elevation-level-2)",y="1",S="1px solid ButtonText",g=e`
  .search__base {
    background: var(--ds-search-background, ${t(d.background)});
    border-style: var(--ds-search-border-style, ${t(d.borderStyle)});
    border-color: var(--ds-search-border-color, ${t(d.borderColor)});
    padding-inline-start: var(
      --ds-search-padding-inline-start,
      ${t(b)}
    );
    padding-inline-end: var(
      --ds-search-padding-inline-end,
      ${t(c)}
    );
    padding-block-start: var(
      --ds-search-padding-block-start,
      ${t(_)}
    );
    padding-block-end: var(
      --ds-search-padding-block-end,
      ${t(m)}
    );
    border-radius: var(--ds-search-border-radius, ${t(u)});
    box-shadow: var(--ds-search-box-shadow, ${t(v)});
    opacity: var(--ds-search-opacity, ${t(y)});

    @media (forced-colors: active) {
      border: var(--ds-search-forced-colors-border, ${t(S)});
    }
  }

  :host([size='small']) .search__base {
    --ds-search-padding-block-start: var(--ds-app-space-micro-xs);
    --ds-search-padding-block-end: var(--ds-app-space-micro-xs);
    --ds-search-border-radius: var(--ds-app-radii-m);
  }

  :host([disabled]) .search__base {
    --ds-search-box-shadow: none;

    cursor: not-allowed;
    pointer-events: none;
  }

  :host(:hover:not([disabled])) .search__base {
    --ds-search-box-shadow: var(--ds-elevation-level-3);
  }
`;var f=Object.defineProperty,$=Object.getOwnPropertyDescriptor,E=(t,e,s,r)=>{for(var a,o=r>1?void 0:r?$(e,s):e,i=t.length-1;i>=0;i--)(a=t[i])&&(o=(r?a(e,s,o):a(o))||o);return r&&o&&f(e,s,o),o};const x="reimagine-search";let k=class extends(l(n)){constructor(){super(),this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this.labelHidden=!0,this.disabled=!1,this.role="search",this.action="",this.method="get",this.id="search",this.theme="light"}_handleSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length}updated(t){this.inputElement&&(t.has("labelHidden")&&(this.hasAttribute("label-hidden")?this.inputElement.setAttribute("label-hidden",""):this.inputElement.removeAttribute("label-hidden")),t.has("disabled")&&(this.disabled?(this.inputElement.setAttribute("disabled",""),this.inputElement.setAttribute("tabindex","-1")):(this.inputElement.removeAttribute("disabled"),this.inputElement.removeAttribute("tabindex"))),t.has("size")&&this._setButtonSize())}firstUpdated(){this.inputElement=this._baseSlot[0],this._setButtonSize()}_setButtonSize(){this.inputElement.setAttribute("button-size",this.size===h.small?p.medium:p.large)}_renderOptionalSlot(t,e){return s`
      <div part=${t} class=${t} style="${e?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_renderSearchSlots(){return s`
      ${this._renderOptionalSlot("search__first",this._firstSlotEmpty)}
      ${this._renderOptionalSlot("search__base",!1)}
      ${this._renderOptionalSlot("search__last",this._lastSlotEmpty)}
    `}render(){const t=this._renderSearchSlots();return s` ${this.renderFormElement(t)} `}};k.styles=[g],E([r({slot:"search__first"})],k.prototype,"_firstSlot",2),E([r({slot:"search__last"})],k.prototype,"_lastSlot",2),E([r({slot:"search__base"})],k.prototype,"_baseSlot",2),E([a()],k.prototype,"_firstSlotEmpty",2),E([a()],k.prototype,"_lastSlotEmpty",2),E([o({reflect:!0})],k.prototype,"size",2),E([o({type:Boolean,attribute:"label-hidden"})],k.prototype,"labelHidden",2),E([o({type:Boolean})],k.prototype,"disabled",2),E([o()],k.prototype,"role",2),E([o()],k.prototype,"action",2),E([o()],k.prototype,"method",2),E([o()],k.prototype,"id",2),E([o()],k.prototype,"inputElement",2),k=E([i(x)],k);export{k as S,h as a,x as n};
