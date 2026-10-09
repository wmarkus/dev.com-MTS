import{r as e,i as t,f as i,c as r,b as s}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{R as n}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{d as o}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{q as c}from"/__mirror/assets/6ad137053d5da8fc91d912f1";const a="product-title",l="sku-title",p="list-price",d="msrp-price",u="discount-price",h="tax-disclaimer",_="promo-price",m="var(--ds-app-color-base-default-fg-heading, #0E1726)",f="row",P="flex-end",v="var(--ds-app-space-micro-2xs, 0.25rem)",y=t`
  :host {
    display: var(--ds-inline-price-values-display, ${e("flex")});
    flex-direction: var(
      --ds-inline-price-values-flex-direction,
      ${e(f)}
    );
    align-items: var(
      --ds-inline-price-values-align-items,
      ${e(P)}
    );
    gap: var(--ds-inline-price-values-gap, ${e(v)});
    color: var(--ds-inline-price-values-color, ${e(m)});
    flex-wrap: wrap;
  }

  .promo ::slotted([slot='default']) {
    font-weight: var(
      --ds-inline-price-promo-font-weight,
      ${e(c.fontWeight)}
    );
  }

  .discount-price {
    text-decoration: line-through;
    color: var(--ds-inline-price-discount-price-color, var(--ds-comp-color-sku-text-strikethrough, #61615E));
  }
`;var k=Object.defineProperty,x=Object.getOwnPropertyDescriptor,g=(e,t,i,r)=>{for(var s,n=r>1?void 0:r?x(t,i):t,o=e.length-1;o>=0;o--)(s=e[o])&&(n=(r?s(t,i,n):s(n))||n);return r&&n&&k(t,i,n),n};const T="reimagine-inline-price";let b=class extends n{constructor(){super(...arguments),this._inlinePrice={}}get inlinePrice(){return this._inlinePrice}set inlinePrice(e){const t=this._inlinePrice;if("string"==typeof e)try{this._inlinePrice=JSON.parse(e)}catch(e){console.error("Failed to parse inline price JSON:",e),this._inlinePrice={}}else this._inlinePrice=e??{};this._updateInternalState(),this.requestUpdate("inlinePrice",t)}firstUpdated(){super.firstUpdated(),this._updateInternalState()}updated(e){super.updated(e),e.has("inline-price")&&this._updateInternalState()}_updateInternalState(){if(this.inlinePrice&&0===Object.keys(this.inlinePrice).length)return;this._inlinePrice=this.inlinePrice??{};const{tokenType:e,productTitle:t,skuTitle:i,currentPrice:r,msrpPrice:s,discount:n,taxDisclaimer:o}=this._inlinePrice;this._tokenType=e??void 0,this._productTitle=t??void 0,this._skuTitle=i??void 0,this._currentPrice=r??void 0,this._msrpPrice=s??void 0,this._discount=n??void 0,this._taxDisclaimer=o??void 0}_setOrCreateSlottedSpan(e,t){if(!t)return;const i=this.querySelector(`[slot="${e}"]`);if(i)i.textContent=t;else{const i=document.createElement("span");i.setAttribute("slot",e),i.textContent=t,this.append(i)}}_renderDiscountPrice(){const e=!(this._tokenType===_||this._msrpPrice&&this._currentPrice);return e||this._setOrCreateSlottedSpan("discount-price",this._msrpPrice),s`
      <div
        part="discount-price"
        class="discount-price"
        style=${e?"display: none;":""}
      >
        <slot name="discount-price"></slot>
      </div>
    `}_renderDefaultText(){let e;switch(this._tokenType){case a:e=this._productTitle;break;case l:e=this._skuTitle;break;case p:case _:e=this._currentPrice;break;case d:e=this._msrpPrice;break;case u:e=this._discount;break;case h:e=this._taxDisclaimer;break;default:e=void 0}return this._setOrCreateSlottedSpan("default",e),s`
      <div
        part="default"
        class="default ${this._tokenType===_?"promo":""}"
        style=${e?"":"display: none;"}
      >
        <slot name="default"></slot>
      </div>
    `}render(){return s` ${this._renderDiscountPrice()} ${this._renderDefaultText()} `}};b.styles=[y],g([i()],b.prototype,"_inlinePrice",2),g([r({type:Object,attribute:"inline-price"})],b.prototype,"inlinePrice",1),g([i()],b.prototype,"_tokenType",2),g([i()],b.prototype,"_productTitle",2),g([i()],b.prototype,"_skuTitle",2),g([i()],b.prototype,"_currentPrice",2),g([i()],b.prototype,"_msrpPrice",2),g([i()],b.prototype,"_discount",2),g([i()],b.prototype,"_taxDisclaimer",2),b=g([o(T)],b);export{b as InlinePrice,T as name};
