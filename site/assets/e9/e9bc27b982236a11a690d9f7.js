import{r as e,i as t,c as o,b as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as s}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{R as a}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";const i="flex",d="var(--ds-app-color-interactive-secondary-fg-default, #2a446f)",l="var(--ds-app-space-micro-xs, 0.5rem)",p="row",n="var(--ds-app-type-label-l-font-weight, 600)",c="var(--ds-app-type-label-m-font-size, 0.875rem)",m="var(--ds-app-type-label-s-font-size, 0.75rem)",f="var(--ds-app-type-label-s-line-height, 1rem)",u=t`
  :host {
    gap: var(--ds-product-item-gap, ${e(l)});
    display: var(--ds-product-item-display, ${e(i)});
    font-weight: var(--ds-product-item-font-weight, ${e(n)});
    font-size: var(--ds-product-item-font-size, ${e(c)});
    align-items: center;
    flex-direction: var(
      --ds-product-item-flex-direction,
      ${e(p)}
    );
    color: var(--ds-product-item-color, ${e(d)});

    --ds-badge-font-size: ${e(m)};
    --ds-badge-line-height: ${e(f)};
  }

  :host([overflow]) {
    display: none;
  }

  :host([overflow][hidden]) {
    visibility: hidden;
    position: absolute;
  }

  .related-product-item__body {
    display: flex;
    align-items: center;
    gap: var(--ds-product-item-gap, ${e(l)});
  }
`;var v=Object.defineProperty,b=Object.getOwnPropertyDescriptor,h=(e,t,o,r)=>{for(var s,a=r>1?void 0:r?b(t,o):t,i=e.length-1;i>=0;i--)(s=e[i])&&(a=(r?s(t,o,a):s(a))||a);return r&&a&&v(t,o,a),a};const g="reimagine-related-products-item";let y=class extends a{constructor(){super(...arguments),this.overflow=!1}connectedCallback(){super.connectedCallback(),this.getAttribute("slot")||this.setAttribute("slot","related-product__items")}updated(e){super.updated(e),e.has("overflow")&&this.dispatchEvent(new CustomEvent("overflow-changed",{detail:{overflow:this.overflow},bubbles:!0,composed:!0}))}render(){return r`
      <slot name="related-product-item__badge"></slot>
      <slot name="related-product-item__text"></slot>
    `}};y.styles=[u],h([o({type:Boolean,reflect:!0})],y.prototype,"overflow",2),y=h([s(g)],y);export{y as RelatedProductsItem,g as name};
