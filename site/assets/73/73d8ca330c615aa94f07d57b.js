import{r as t,i as s,b as a}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as r}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{R as o}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";const i="flex",n="center",e="var(--ds-app-space-micro-2xs, 0.25rem)",l="var(--ds-app-color-base-default-fg-body, #17253D)",d="block",c="var(--ds-color-golden-yellow-500, currentColor)",g=s`
  :host {
    --ds-star-rating-font-size: ${t("var(--ds-app-type-label-s-font-size, 0.75rem)")};
    --ds-star-rating-icon-color: ${t(c)};
    --ds-star-rating-icon-display: ${t(d)};

    display: var(--ds-star-rating-display, ${t(i)});
    align-items: var(--ds-star-rating-align-items, ${t(n)});
    gap: var(--ds-star-rating-gap, ${t(e)});
    color: var(--ds-star-rating-color, ${t(l)});
  }

  ::slotted([slot='star-rating__asset']) {
    --ds-icon-color: var(--ds-star-rating-icon-color);
    display: var(--ds-star-rating-icon-display);
  }

  ::slotted([slot='star-rating__content']) {
    font-size: var(--ds-star-rating-font-size);
  }
`;var p=Object.getOwnPropertyDescriptor;const v="reimagine-star-rating";let m=class extends o{render(){return a`
      <div part="star-rating__asset" class="star-rating__asset">
        <slot name="star-rating__asset"></slot>
      </div>
      <div part="star-rating__content" class="star-rating__content">
        <slot name="star-rating__content"></slot>
      </div>
    `}};m.styles=[g],m=((t,s,a,r)=>{for(var o,i=r>1?void 0:r?p(s,a):s,n=t.length-1;n>=0;n--)(o=t[n])&&(i=o(i)||i);return i})([r(v)],m);export{m as StarRating,v as name};
