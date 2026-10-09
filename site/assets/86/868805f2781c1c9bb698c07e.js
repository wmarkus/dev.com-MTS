import{r as t,i as e,e as r,f as i,b as s}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{b as o}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{d as a}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{m as l}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{v as d}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";const n="var(--ds-app-space-micro-xs, 0.5rem)",c="var(--ds-app-color-base-default-fg-heading, #0E1726)",p="uppercase",m="var(--ds-app-color-base-default-fg-highlight, #005597)",g=e`
  :host {
    --ds-button-group-margin-inline-start: var(--article-list-item-button-group-inline-start, 0);
    --ds-button-group-flex-direction: var(--article-list-item-button-group-flex-direction, column);
    --ds-button-group-link-justify-content: var(
      --article-list-item-button-group-link-justify-content,
      flex-start
    );
    padding-block-start: var(--ds-article-list-item-padding-block-start, 0);
    padding-block-end: var(--ds-article-list-item-padding-block-end, 0);
    gap: var(--ds-article-list-item-gap, ${t("var(--ds-app-space-micro-s, 0.75rem)")});
    flex-grow: var(--ds-article-list-item-flex-grow, 1);
    flex-shrink: var(--ds-article-list-item-flex-shrink, 1);
    flex-basis: var(--ds-article-list-item-flex-basis, auto);
    color: var(--ds-article-list-item-color, ${t(c)});
  }

  :host ::slotted([slot='eyebrow']) {
    color: var(
      --ds-articlt-list-item-eyebrow-font-color,
      ${t(m)}
    );
    font-size: var(
      --ds-article-list-item-eyebrow-font-size,
      ${t(l.fontSize)}
    );
    font-weight: var(
      --ds-article-list-item-eyebrow-font-weight,
      ${t(l.fontWeight)}
    );
    line-height: var(
      --ds-article-list-item-eyebrow-line-height,
      ${t(l.lineHeight)}
    );
    letter-spacing: var(
      --ds-article-list-item-eyebrow-letter-spacing,
      ${t(l.letterSpacing)}
    );
    text-transform: var(
      --ds-article-list-item-eyebrow-text-transform,
      ${t(p)}
    );
  }

  :host ::slotted(reimagine-related-products) {
    --ds-product-row-gap: var(
      --ds-article-item-product-row-gap,
      ${t(n)}
    );
  }
`,h="var(--ds-app-space-grid-default, 0.75rem)",b="0.625rem",f="var(--ds-app-space-micro-xl, 2rem)",u=e`
  @media (min-width: ${t(d.sm)}) and (max-width: ${t(d.md)}) {
    :host ::slotted(reimagine-related-products) {
      --ds-article-item-product-row-gap: ${t(h)};
    }
  }

  @media (min-width: ${t(d.md)}) and (max-width: ${t(d.lg)}) {
    :host ::slotted(reimagine-related-products) {
      --ds-article-item-product-row-gap: ${t(b)};
    }
  }

  @media (min-width: ${t(d.lg)}) {
    :host ::slotted(reimagine-related-products) {
      --ds-article-item-product-row-gap: ${t(f)};
    }
  }
`;var v=Object.defineProperty,w=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,$=Reflect.get,x=(t,e,r,i)=>{for(var s,o=i>1?void 0:i?w(e,r):e,a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i?s(e,r,o):s(o))||o);return i&&o&&v(e,r,o),o};const S="reimagine-article-list-item";let j=class extends o{constructor(){super(...arguments),this._eyebrowSlotEmpty=!0}_handleSlotChange(){this._eyebrowSlotEmpty=0===this._eyebrowSlot.length}_renderOptionalSlot(t,e){return s`
      <div part=${t} class=${t} style="${e?"display: none;":""}">
        <slot name=${t} @slotchange=${this._handleSlotChange}></slot>
      </div>
    `}render(){return s`
      ${this._renderOptionalSlot("eyebrow",this._eyebrowSlotEmpty)}
      <slot></slot>
    `}};var _,k,O;j.styles=[...(_=j,k=j,O="styles",$(y(_),O,k)||[]),g,u],x([r({slot:"eyebrow"})],j.prototype,"_eyebrowSlot",2),x([i()],j.prototype,"_eyebrowSlotEmpty",2),j=x([a(S)],j);export{j as ArticleListItem,S as name};
