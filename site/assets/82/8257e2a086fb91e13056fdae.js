import{r as e,i as t,c as o,f as r,b as a}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as i}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{R as d}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{c as l}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{f as s}from"/__mirror/assets/4230c2711e37b2e85105da0e";const n="flex",c="var(--ds-app-space-micro-xs, 0.5rem)",h="row",p="var(--ds-app-type-label-l-font-weight, 600)",f="var(--ds-app-type-label-m-font-size, 0.875rem)",u="wrap",g="center",b={alignItems:"center",background:"var(--ds-app-color-surface-solid-bg-default, #fefefe)",borderRadius:"var(--ds-app-radii-s, 0.5rem)",borderWidth:"1px",borderStyle:s.borderStyle,borderColor:s.borderColor,display:"inline-flex",height:"2rem",width:"2rem",justifyContent:"center",maxWidth:"2rem",maxHeight:"2rem",color:"var(--ds-app-color-base-default-fg-heading, #0e1726)",userSelect:"none",listStyle:"none",paddingBlock:"0.5rem",boxSizing:"border-box"},v=t`
  :host {
    gap: var(--ds-product-gap, ${e(c)});
    display: var(--ds-product-display, ${e(n)});
    font-weight: var(--ds-font-weight, ${e(p)});
    font-size: var(--ds-font-size, ${e(f)});
    flex-direction: var(--ds-product-flex-direction, ${e(h)});
  }

  ol {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: var(--ds-product-display, ${e(n)});
    flex-direction: var(--ds-product-flex-direction, ${e(h)});
    flex-wrap: var(--ds-product-flex-wrap, ${e(u)});
    gap: var(--ds-product-gap, ${e(c)});
  }

  :host([configuration='horizontal']) ol {
    align-items: ${e(g)};
  }

  :host([configuration='vertical']) {
    --ds-product-flex-direction: column;
  }

  :host([configuration='horizontal']) {
    --ds-product-flex-direction: row;
  }

  :host([configuration='vertical'][density='comfortable']) {
    --ds-product-gap: var(--ds-app-space-micro-2xl, 2rem);
  }

  :host([configuration='horizontal'][density='comfortable']) {
    --ds-product-gap: var(--ds-app-space-micro-2xl, 2rem);
  }

  :host([variant='badge-only']) ol {
    gap: var(--ds-product-badge-only-gap, ${e("var(--ds-app-space-micro-2xs, 0.25rem)")});
  }

  .overflow-badge {
    display: ${e(b.display)};
    justify-content: ${e(b.justifyContent)};
    align-items: ${e(b.alignItems)};
    width: ${e(b.width)};
    height: ${e(b.height)};
    max-width: ${e(b.maxWidth)};
    max-height: ${e(b.maxHeight)};
    padding-block: var(
        --ds-badge-padding-block-start,
        ${e(b.paddingBlock)}
      )
      var(--ds-badge-padding-block-end, ${e(b.paddingBlock)});

    background: ${e(b.background)};
    border-width: ${e(b.borderWidth)};
    border-style: ${e(b.borderStyle)};
    border-color: ${e(b.borderColor)};
    border-radius: ${e(b.borderRadius)};
    box-sizing: ${e(b.boxSizing)};
    color: ${e(b.color)};
    font-size: ${e(l.fontSize)};
    font-weight: ${e(l.fontWeight)};
    line-height: ${e(l.lineHeight)};
    user-select: ${e(b.userSelect)};
    list-style: ${e(b.listStyle)};
  }

  .overflow-badge.hidden {
    display: none;
  }
`;var m=Object.defineProperty,w=Object.getOwnPropertyDescriptor,y=(e,t,o,r)=>{for(var a,i=r>1?void 0:r?w(t,o):t,d=e.length-1;d>=0;d--)(a=e[d])&&(i=(r?a(t,o,i):a(i))||i);return r&&i&&m(t,o,i),i};const $="reimagine-related-products",_='slot[name="related-product__items"]';let x=class extends d{constructor(){super(...arguments),this.isOverflowEnabled=!1,this._overflowCount=0,this._boundHandleOverflowChanged=this._handleOverflowChanged.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("overflow-changed",this._boundHandleOverflowChanged)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("overflow-changed",this._boundHandleOverflowChanged),this._cachedSlot=void 0}_handleOverflowChanged(){this.isOverflowEnabled&&this._calculateOverflow()}_handleSlotChange(){this.isOverflowEnabled&&this._calculateOverflow()}_calculateOverflow(){if(this._cachedSlot||(this._cachedSlot=this.renderRoot.querySelector(_)),!this._cachedSlot)return;const e=this._cachedSlot.assignedElements({flatten:!0});if(0===e.length)return;let t=0;const o=[],r=[];e.forEach(e=>{e.hasAttribute("overflow")?(o.push(e),t++):r.push(e)}),o.forEach(e=>e.setAttribute("hidden","")),r.forEach(e=>e.removeAttribute("hidden")),this._overflowCount=t}_renderOverflowBadge(){if(!this.isOverflowEnabled||0===this._overflowCount)return a``;const e=`+${this._overflowCount}`;return a`
      <li
        class="overflow-badge"
        role="listitem"
        aria-label="Additional ${this._overflowCount} items"
      >
        ${e}
      </li>
    `}firstUpdated(){this._handleSlotChange()}updated(e){super.updated(e),e.has("isOverflowEnabled")&&this._calculateOverflow(),this._cachedSlot||(this._cachedSlot=this.renderRoot.querySelector(_)),this._cachedSlot&&this._cachedSlot.assignedElements({flatten:!0}).forEach(e=>{e.setAttribute("role","listitem")})}render(){return a`
      <ol>
        <slot name="related-product__items" @slotchange=${this._handleSlotChange}></slot>
        ${this._renderOverflowBadge()}
      </ol>
    `}};x.styles=[v],y([o({reflect:!0})],x.prototype,"density",2),y([o({reflect:!0})],x.prototype,"variant",2),y([o({reflect:!0})],x.prototype,"configuration",2),y([o({type:Boolean,attribute:"is-overflow-enabled"})],x.prototype,"isOverflowEnabled",2),y([r()],x.prototype,"_overflowCount",2),x=y([i($)],x);export{x as RelatedProducts,$ as name};
