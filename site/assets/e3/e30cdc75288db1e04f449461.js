import{r as t,i as o,b as r,c as e,e as a,f as i}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{s,d as l}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{T as p}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{l as d,n,a2 as c,a3 as g,A as h,a4 as m}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{b as u,v as y}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{SurfaceElement as f}from"/__mirror/assets/e09cf4eae8f90fbcbeb198a9";import{S as b}from"/__mirror/assets/579a4c6140e643b41d22eee8";import{C as v,s as S}from"/__mirror/assets/03f57ab24c107a836026fcc3";const _="var(--ds-app-space-micro-l, 1.5rem)",k="var(--ds-app-space-surface-comfortable, 1.5rem)",E="var(--ds-app-space-surface-comfortable, 1.5rem)",$="var(--ds-app-radii-l, 1.5rem)",x="var(--ds-app-color-base-default-fg-body, #17253d)",w="var(--ds-app-space-micro-l, 1.5rem)",O="var(--ds-app-space-micro-s, .75rem)",L="var(--ds-app-space-micro-s, .75rem)",C="0",P="var(--ds-app-space-micro-xs, .5rem)",z="var(--ds-app-space-micro-xs, .5rem) 0 var(--ds-app-space-micro-xs, .5rem) 0",T="var(--ds-app-space-micro-xs, .5rem)",D="var(--ds-app-color-base-default-fg-heading, #0e1726)",B="var(--ds-app-color-base-default-fg-heading, #0e1726)",j="var(--ds-app-space-micro-xs, .5rem)",N="0",A="1.5rem solid var(--ds-app-color-overlay-fill, #fff9)",H="var(--ds-app-space-micro-l, 1.5rem)",W="var(--ds-app-space-micro-xs, .5rem) var(--ds-app-space-micro-m, 1rem)",F="var(--ds-comp-color-pricing-banner-bg, #005597)",R="var(--ds-comp-color-pricing-banner-fg, #f4fafd)",G="1px solid var(--ds-app-color-interactive-primary-bg-hover, #006dc1)",I="var(--ds-app-space-micro-m, 1rem)",M="var(--ds-app-space-micro-s, .75rem)",q="var(--ds-app-radii-s, .5rem)",J="var(--ds-app-color-base-special-bg-opt2-left)",K="var(--ds-app-space-micro-s, .75rem)",Q="var(--ds-app-space-micro-s, .75rem)",U="var(--ds-app-space-micro-xs, .5rem)",V="var(--ds-app-space-micro-xs, .5rem)",X="var(--ds-app-space-micro-2xs, .25rem)",Y="1rem",Z="var(--ds-app-space-micro-m, 1rem)",tt="var(--ds-app-space-micro-m, 1rem)",ot="var(--ds-app-space-micro-l, 1.5rem)",rt="var(--ds-app-space-micro-m, 1rem)",et=o`
  :host {
    --ds-surface-box-shadow: var(--ds-elevation-level-2) !important;
    height: var(--ds-card-product-pricing-height, ${t("auto")});
  }

  :host,
  .highlight,
  .body {
    --ds-surface-border-radius: var(
      --ds-card-product-pricing-radius,
      ${t($)}
    );

    display: flex;
    flex-direction: column;
    row-gap: var(--ds-card-product-pricing-row-gap, ${t(_)});
    padding-inline: var(
      --ds-card-product-pricing-padding-inline,
      ${t(k)}
    );
    padding-block: var(
      --ds-card-product-pricing-padding-block,
      ${t(E)}
    );
    color: var(--ds-card-product-pricing-color, ${t(x)});
  }

  .highlight {
    background-color: var(--ds-app-color-surface-glass-bg-default);
  }

  :host([configuration='highlight']) {
    background-color: var(--ds-app-color-overlay-fill, #fff9) !important;
    padding: var(
      --ds-card-product-pricing-highlight-padding,
      ${t(N)}
    );
    outline: var(
      --ds-card-product-pricing-highlight-outline,
      ${t(A)}
    );
    margin: var(
      --ds-card-product-pricing-highlight-margin,
      ${t(H)}
    );

    --ds-surface-border-color: var(--ds-app-color-base-default-border-subtle) !important;
  }

  :host([configuration='featured']) {
    padding: var(
      --ds-card-product-pricing-featured-padding,
      ${t(C)}
    );
    gap: 0;
  }

  .checkbox__label {
    margin-inline-start: auto;
  }

  .header-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .top-banner {
    padding: var(
      --ds-card-product-pricing-top-banner-padding,
      ${t(W)}
    );
    text-align: center;
    border-radius: var(--ds-app-radii-l, 1.5rem) var(--ds-app-radii-l, 1.5rem) 0 0;
    background-color: var(
      --ds-card-product-pricing-top-banner-background-color,
      ${t(F)}
    );
    color: var(
      --ds-card-product-pricing-top-banner-color,
      ${t(R)}
    );
    outline: var(
      --ds-card-product-pricing-top-banner-outline,
      ${t(G)}
    );
    font-weight: var(
      --ds-card-product-pricing-top-banner-font-weight,
      ${t(d.fontWeight)}
    );
    font-size: var(
      --ds-card-product-pricing-top-banner-font-size,
      ${t(d.fontSize)}
    );
    line-height: var(
      --ds-card-product-pricing-top-banner-line-height,
      ${t(d.lineHeight)}
    );
  }

  ::slotted([slot='payment-options-label']) {
    color: var(
      --ds-card-product-pricing-payment-options-label-color,
      ${t(B)}
    );
    font-weight: var(
      --ds-card-product-pricing-payment-options-label-font-weight,
      ${t(d.fontWeight)}
    );
    font-size: var(
      --ds-card-product-pricing-payment-options-label-font-size,
      ${t(d.fontSize)}
    );
    line-height: var(
      --ds-card-product-pricing-payment-options-label-line-height,
      ${t(d.lineHeight)}
    );
  }

  .payment-options-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(
      --ds-card-product-pricing-payment-options-wrapper-gap,
      ${t(V)}
    );
    flex: 1 0 0;
  }

  ::slotted([slot='payment-options']) {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
    gap: var(
      --ds-card-product-pricing-payment-options-gap,
      ${t(X)}
    );
    align-self: stretch;
    list-style: none;
    margin: 0;
    padding: 0;

    --ds-media-height: var(
      --ds-card-product-pricing-payment-options-media-height,
      ${t(Y)}
    );
  }

  .footer-bottom {
    display: flex;
    align-items: flex-start;
    gap: var(
      --ds-card-product-pricing-footer-bottom-gap,
      ${t(tt)}
    );
    align-self: stretch;
  }

  .footer-bottom > .footer-link {
    flex: 1 0 0;
  }

  ::slotted(reimagine-sku) {
    width: 100%;
  }

  .sku {
    margin-block-start: var(
      --ds-card-product-pricing-sku-footer-link-margin-block-start,
      ${t(O)}
    );
    display: var(--ds-card-product-pricing-sku-display, flex);
  }

  .footer-link {
    display: flex;
  }

  .footer {
    display: flex;
    flex-direction: column;
    gap: var(
      --ds-card-product-pricing-footer-gap,
      ${t(Z)}
    );
  }

  .body {
    row-gap: var(--ds-card-product-pricing-body-row-gap, ${t(w)});
  }

  .body .sku,
  .checklist-title,
  .related-products-label {
    margin-bottom: var(
      --ds-card-product-pricing-featured-margin-block-end,
      ${t(L)}
    );
  }

  .checklist-content {
    display: flex;
    flex-direction: column;
    gap: var(
      --ds-card-product-pricing-checklist-content-gap,
      ${t(T)}
    );
  }

  .checklist-title,
  ::slotted([slot='checklist-title']) {
    color: var(
      --ds-card-product-pricing-checklist-title-color,
      ${t(D)}
    );
    font-weight: var(
      --ds-card-product-pricing-checklist-title-font-weight,
      ${t(d.fontWeight)}
    ) !important;
    font-size: var(
      --ds-card-product-pricing-checklist-title-font-size,
      ${t(d.fontSize)}
    ) !important;
    line-height: var(
      --ds-card-product-pricing-checklist-title-line-height,
      ${t(d.lineHeight)}
    ) !important;
  }

  .checklist-label {
    margin: var(
      --ds-card-product-pricing-checklist-label-margin,
      ${t(z)}
    );
  }

  .legal-copy,
  ::slotted([slot='legal-copy']) {
    font-weight: var(
      --ds-card-product-pricing-legal-copy-font-weight,
      ${t(n.fontWeight)}
    ) !important;
    font-size: var(
      --ds-card-product-pricing-legal-copy-font-size,
      ${t(n.fontSize)}
    ) !important;
    line-height: var(
      --ds-card-product-pricing-legal-copy-line-height,
      ${t(n.lineHeight)}
    ) !important;
    display: flex;
    margin-block-end: var(
      --ds-card-product-pricing-legal-copy-margin-block-end,
      ${t(P)}
    );
    margin-block-start: 0;
  }

  :host::slotted([slot='legal-copy']) sup {
    top: 0;
  }

  .related-products-content {
    display: flex;
    flex-direction: column;
    gap: var(
      --ds-card-product-pricing-related-products-content-gap,
      ${t(j)}
    );
  }

  .related-products-label,
  ::slotted([slot='related-products-label']) {
    font-weight: var(
      --ds-card-product-pricing-checklist-title-font-weight,
      ${t(d.fontWeight)}
    ) !important;
    font-size: var(
      --ds-card-product-pricing-checklist-title-font-size,
      ${t(d.fontSize)}
    ) !important;
    line-height: var(
      --ds-card-product-pricing-checklist-title-line-height,
      ${t(d.lineHeight)}
    ) !important;
  }

  .promo-banner {
    margin-block-start: var(
      --ds-card-product-pricing-promo-banner-block-start,
      ${t(I)}
    );
    margin-block-end: var(
      --ds-card-product-pricing-promo-banner-block-end,
      ${t(M)}
    );
    border-radius: var(
      --ds-card-product-pricing-promo-banner-border-radius,
      ${t(q)}
    );
    background-image: var(
      --ds-card-product-pricing-promo-banner-background-image,
      ${t(J)}
    );
    padding: var(
      --ds-card-product-pricing-promo-banner-padding,
      ${t(K)}
    );
    gap: var(
      --ds-card-product-pricing-promo-banner-gap,
      ${t(Q)}
    );
    display: flex;
  }

  .promo-banner-badge {
    display: flex;
  }

  .promo-banner-copy,
  ::slotted([slot='promo-banner']) {
    font-size: var(
      --ds-card-product-pricing-promo-banner-copy-font-size,
      ${t(n.fontSize)}
    ) !important;
    line-height: var(
      --ds-card-product-pricing-promo-banner-copy-line-height,
      ${t(n.lineHeight)}
    ) !important;
    letter-spacing: var(
      --ds-card-product-pricing-promo-banner-copy-letter-spacing,
      ${t(n.letterSpacing)}
    ) !important;
  }

  .promo-banner-body {
    display: flex;
    flex-direction: column;
    gap: var(
      --ds-card-product-pricing-promo-banner-body-gap,
      ${t(U)}
    );
  }

  .collapse {
    --ds-collapse-button-padding: var(
      --ds-card-plan-detail-collapse-heading-button-padding,
      ${t("0 0 var(--ds-app-space-micro-m, 1rem) 0")}
    );
    --ds-collapse-content-padding: var(
      --ds-card-plan-detail-collapse-content-padding,
      ${t("0")}
    );
  }
`,at=o`
  @media (max-width: ${t(u(y.xs))}) {
    .body .sku {
      margin-block-start: 0;
    }

    .legal-copy {
      margin-block-end: 0;
    }

    .related-products-label {
      margin-block-end: var(
        --ds-card-product-pricing-featured-margin-block-end,
        var(--ds-app-space-micro-m, 0.1rem)
      );
    }
  }

  /* Grid Card Styles */
  @media (min-width: ${t(y.md)}) {
    :host([layout='grid']) {
      display: contents;
      grid-row: 16 / span 17;

      --grid-cards-rows: 19;
      --card-column: 1; /* Default column position */
      --row-offset: 0; /* Default row offset for wrapping cards */
    }

    /* Set card column position based on grid-index attribute */
    :host([layout='grid'][grid-index='1']) {
      --card-column: 1;
    }
    :host([layout='grid'][grid-index='2']) {
      --card-column: 2;
    }
    :host([layout='grid'][grid-index='3']) {
      --card-column: 3;
    }
    :host([layout='grid'][grid-index='4']) {
      --card-column: 4;
    }

    :host([layout='grid']) .grid-style-div {
      display: block;
      grid-column-start: var(--card-column);
      grid-row: calc(1 + var(--row-offset)) / span var(--grid-cards-rows);
      background: var(--ds-surface-background, var(--ds-app-color-surface-solid-bg-default, #fefefe));
      backdrop-filter: var(--ds-surface-backdrop-filter, none);
      border-width: var(--ds-surface-border-width, 0);
      border-style: var(--ds-surface-border-style, none) solid;
      border-color: var(--ds-surface-border-color, var(--ds-app-color-surface-solid-border-default, #e0e0e0));
      border-radius: var(--ds-surface-border-radius, 0);
      box-shadow: var(--ds-surface-box-shadow, none);
      z-index: var(--ds-z-index-n1, -1);
    }

    :host([layout='grid']) .body,
    :host([layout='grid']) ::slotted([slot='sku']) {
      display: contents;

      --ds-card-product-pricing-sku-display: contents;
    }

    /* All grid elements use the same column positioning */
    :host([layout='grid']) .grid-style-div,
    :host([layout='grid']) .top-banner,
    :host([layout='grid']) .header-content,
    :host([layout='grid']) .text-block,
    :host([layout='grid']) .legal-copy,
    :host([layout='grid']) .divider,
    :host([layout='grid']) .checklist-label,
    :host([layout='grid']) .checklist-content,
    :host([layout='grid']) .promo-banner,
    :host([layout='grid']) .related-products-content,
    :host([layout='grid']) .footer {
      grid-column-start: var(--card-column);
    }

    :host([layout='grid']) ::slotted([slot='sku']) {
      --ds-sku-title-grid-column-start: var(--card-column);
      --ds-sku-item-tag-grid-column-start: var(--card-column);
      --ds-sku-item-pricing-container-grid-column-start: var(--card-column);
      --ds-sku-item-recurrence-grid-column-start: var(--card-column);
      --ds-sku-description-grid-column-start: var(--card-column);
      --ds-sku-note-grid-column-start: var(--card-column);
      --ds-sku-footer-grid-column-start: var(--card-column);
      --ds-sku-title-grid-row-start: calc(4 + var(--row-offset));
      --ds-sku-description-grid-row-start: calc(8 + var(--row-offset));
      --ds-sku-note-grid-row-start: calc(9 + var(--row-offset));
      --ds-sku-footer-grid-row-start: calc(10 + var(--row-offset));
    }

    /* Row positioning - all cards use same row structure */
    :host([layout='grid']) .top-banner {
      grid-row-start: calc(1 + var(--row-offset));
    }

    :host([layout='grid']) .header-content {
      grid-row-start: calc(2 + var(--row-offset));
      padding-top: var(
        --ds-card-product-pricing-top-bottom-padding,
        ${t(ot)}
      );
    }

    :host([layout='grid']) .text-block {
      grid-row-start: calc(3 + var(--row-offset));
      padding-top: var(
        --ds-card-product-pricing-padding-top,
        ${t(rt)}
      );
    }

    :host([layout='grid']) .legal-copy {
      grid-row-start: calc(11 + var(--row-offset));
    }

    :host([layout='grid']) .divider {
      display: block;
      grid-row-start: calc(12 + var(--row-offset));
    }

    :host([layout='grid']) .checklist-label {
      grid-row-start: calc(13 + var(--row-offset));
    }

    :host([layout='grid']) .checklist-content {
      grid-row-start: calc(14 + var(--row-offset));
    }

    :host([layout='grid']) .promo-banner {
      grid-row-start: calc(15 + var(--row-offset));
    }

    :host([layout='grid']) .related-products-content {
      grid-row-start: calc(16 + var(--row-offset));
    }

    :host([layout='grid']) .footer {
      grid-row-start: calc(17 + var(--row-offset));
      padding-bottom: var(
        --ds-card-product-pricing-top-bottom-padding,
        ${t(ot)}
      );
    }

    :host([layout='grid']) .header-content,
    :host([layout='grid']) .text-block,
    :host([layout='grid']) .legal-copy,
    :host([layout='grid']) .divider,
    :host([layout='grid']) .checklist-label,
    :host([layout='grid']) .checklist-content,
    :host([layout='grid']) .promo-banner,
    :host([layout='grid']) .related-products-content,
    :host([layout='grid']) .footer {
      margin-inline: var(
        --ds-card-product-pricing-padding-inline,
        ${t(k)}
      );
      padding-top: var(
        --ds-card-product-pricing-padding-top,
        ${t(rt)}
      );
    }
  }

  /* Tablet breakpoint: Cards 3 & 4 wrap to second row */
  @media (min-width: ${t(y.md)}) and (max-width: ${t(u(y.lg))}) {
    /* Cards 3 & 4 move to columns 1 & 2 on second row */
    :host([layout='grid'][grid-index='3']) {
      --card-column: 1;
      --row-offset: var(--grid-cards-rows);
    }

    :host([layout='grid'][grid-index='4']) {
      --card-column: 2;
      --row-offset: var(--grid-cards-rows);
    }

    :host([layout='grid'][grid-index='3']) .grid-style-div,
    :host([layout='grid'][grid-index='4']) .grid-style-div {
      margin-top: var(
        --ds-card-product-pricing-padding-top,
        ${t(rt)}
      );
    }

    :host([layout='grid'][grid-index='3']) .top-banner,
    :host([layout='grid'][grid-index='4']) .top-banner {
      margin-top: var(
        --ds-card-product-pricing-padding-top,
        ${t(rt)}
      );
    }
  }
`;var it=Object.defineProperty,st=Object.getOwnPropertyDescriptor,lt=(t,o,r,e)=>{for(var a,i=e>1?void 0:e?st(o,r):o,s=t.length-1;s>=0;s--)(a=t[s])&&(i=(e?a(o,r,i):a(i))||i);return e&&i&&it(o,r,i),i};const pt="reimagine-card-product-pricing";let dt=class extends(v(f)){constructor(){super(),this._topBannerSlotEmpty=!0,this._checklistSlotEmpty=!0,this._textBlockSlotEmpty=!0,this._legalTextSlotEmpty=!0,this._legalNumberSlotEmpty=!0,this._relatedProductsSlotEmpty=!0,this._relatedProductsLabelSlotEmpty=!0,this._badgeSlotEmpty=!0,this._copySlotEmpty=!0,this._linkSlotEmpty=!0,this._checklistLabelSlotEmpty=!0,this._checklistTitleSlotEmpty=!0,this._footerDividerSlotEmpty=!0,this._footerLinkSlotEmpty=!0,this._topAssetSlotEmpty=!0,this._collapseSlotEmpty=!0,this._skuSlotEmpty=!0,this._paymentOptionsSlotEmpty=!0,this._paymentOptionsLabelSlotEmpty=!0,this.size=c.small,this.themeLightSurface=g.solidBorder,this.themeDarkSurface=g.glass,this.theme===p.dark?this.surface=g.glass:this.surface=g.solidBorder;const t=this.closest("html"),o=this.closest("body");this.theme!==p.light&&(t&&this.isDarkTheme(t)||o&&this.isDarkTheme(o))&&(this.surface=g.glass)}_handleSlotChange(){this._checklistSlotEmpty=0===this._checklistSlot.length,this._textBlockSlotEmpty=0===this._textBlockSlot.length,this._legalTextSlotEmpty=0===this._legalTextSlot.length,this._legalNumberSlotEmpty=0===this._legalNumberSlot.length,this._relatedProductsLabelSlotEmpty=0===this._relatedProductsLabelSlot.length,this._relatedProductsSlotEmpty=0===this._relatedProductsSlot.length,this._badgeSlotEmpty=0===this._badgeSlot.length,this._copySlotEmpty=0===this._copySlot.length,this._linkSlotEmpty=0===this._linkSlot.length,this._checklistLabelSlotEmpty=0===this._checklistLabelSlot.length,this._checklistTitleSlotEmpty=0===this._checklistTitleSlot.length,this._footerDividerSlotEmpty=0===this._footerDividerSlot.length,this._footerLinkSlotEmpty=0===this._footerLinkSlot.length,this._topAssetSlotEmpty=0===this._topAssetSlot.length,this._topBannerSlotEmpty=0===this._topBannerSlot.length,this._collapseSlotEmpty=0===this._collapseSlot.length,this._paymentOptionsSlotEmpty=0===this._paymentOptionsSlot.length,this._paymentOptionsLabelSlotEmpty=0===this._paymentOptionsLabelSlot.length}_handleSkuSlotChange(){this._skuSlotEmpty=0===this._skuSlot.length,this._updateSkuLayout()}_updateSkuLayout(){!this._skuSlotEmpty&&this.layout===h.grid&&this._skuSlot.forEach(t=>{t.nodeType===Node.ELEMENT_NODE&&s(t,{layout:b.grid})})}isHeaderContentEmpty(){return this._topAssetSlotEmpty&&!this.labelText}isPromoBannerEmpty(){return this._badgeSlotEmpty&&this._copySlotEmpty&&this._linkSlotEmpty}isChecklistContentEmpty(){return this._checklistSlotEmpty&&this._checklistTitleSlotEmpty}isFooterContentEmpty(){return this._footerDividerSlotEmpty&&this._footerLinkSlotEmpty&&this._paymentOptionsSlotEmpty&&this._paymentOptionsLabelSlotEmpty}isPaymentOptionsEmpty(){return this._paymentOptionsSlotEmpty&&this._paymentOptionsLabelSlotEmpty}isRelatedProductsEmpty(){return this._relatedProductsLabelSlotEmpty&&this._relatedProductsSlotEmpty}isLegalCopyEmpty(){return this._legalTextSlotEmpty&&this._legalNumberSlotEmpty}_updateSurface(){this.theme===p.dark?this.surface=this.themeDarkSurface:this.surface=this.themeLightSurface}_renderOptionalSlot(t,o){return r`
      <div part=${t} class=${t} style="${o?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_renderCollapseSlot(t,o){return r`
      ${o?r``:r`<reimagine-divider></reimagine-divider>`}
      <div part=${t} class=${t} style="${o?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_renderDefaultContent(){return r`
      <div
        class="header-content"
        part="header-content"
        style="${this.isHeaderContentEmpty()?"display: none;":""}"
      >
        ${this._renderOptionalSlot("top-asset",this._topAssetSlotEmpty)} ${this.renderCheckbox()}
      </div>
      ${this._renderOptionalSlot("text-block",this._textBlockSlotEmpty)}
      <slot class="sku" part="sku" name="sku" @slotchange=${this._handleSkuSlotChange}></slot>
      <p
        class="legal-copy"
        part="legal-copy"
        style="${this.isLegalCopyEmpty()?"display: none;":""}"
      >
        ${this._renderOptionalSlot("legal-text",this._legalTextSlotEmpty)}
        ${this._renderOptionalSlot("legal-number",this._legalNumberSlotEmpty)}
      </p>
    `}_renderFeatured(){return r`
      ${this.layout===h.grid?r`<div class="grid-style-div"></div>`:r``}
      ${this._renderOptionalSlot("top-banner",this._topBannerSlotEmpty)}
      <div class="body" part="body">
        ${this._renderDefaultContent()}
        <slot
          class="divider"
          part="divider"
          name="divider"
          @slotchange=${this._handleSlotChange}
        ></slot>
        ${this._renderOptionalSlot("checklist-label",this._checklistLabelSlotEmpty)}
        <div
          class="checklist-content"
          part="checklist-content"
          style="${this.isChecklistContentEmpty()?"display: none;":""}"
        >
          ${this._renderOptionalSlot("checklist-title",this._checklistTitleSlotEmpty)}
          <slot
            class="checklist"
            part="checklist"
            name="checklist"
            @slotchange=${this._handleSlotChange}
          ></slot>
        </div>
        <div
          class="promo-banner"
          part="promo-banner"
          style="${this.isPromoBannerEmpty()?"display: none;":""}"
        >
          ${this._renderOptionalSlot("promo-banner-badge",this._badgeSlotEmpty)}
          <div class="promo-banner-body" part="promo-banner-body">
            ${this._renderOptionalSlot("promo-banner-copy",this._copySlotEmpty)}
            ${this._renderOptionalSlot("promo-banner-link",this._linkSlotEmpty)}
          </div>
        </div>
        <div
          class="related-products-content"
          part="related-products-content"
          style="${this.isRelatedProductsEmpty()?"display: none;":""}"
        >
          ${this._renderOptionalSlot("related-products-label",this._relatedProductsLabelSlotEmpty)}
          ${this._renderOptionalSlot("related-products",this._relatedProductsSlotEmpty)}
        </div>
        <div
          class="footer"
          part="footer"
          style="${this.isFooterContentEmpty()?"display: none;":""}"
        >
          ${this._renderOptionalSlot("footer-divider",this._footerDividerSlotEmpty)}
          <div class="footer-bottom" part="footer-bottom">
            ${this._renderOptionalSlot("footer-link",this._footerLinkSlotEmpty)}
            <div
              class="payment-options-wrapper"
              part="payment-options-wrapper"
              style="${this.isPaymentOptionsEmpty()?"display: none;":""}"
            >
              ${this._renderOptionalSlot("payment-options-label",this._paymentOptionsLabelSlotEmpty)}
              ${this._renderOptionalSlot("payment-options",this._paymentOptionsSlotEmpty)}
            </div>
          </div>
        </div>
        ${this._renderCollapseSlot("collapse",this._collapseSlotEmpty)}
      </div>
    `}render(){if(this.configuration===m.featured)return this._renderFeatured();const t=r`
      ${this._renderDefaultContent()}
      ${this._renderOptionalSlot("related-products",this._relatedProductsSlotEmpty)}
    `;return this.configuration===m.highlight?r`<div class="highlight" part="highlight">${t}</div>`:t}updated(t){super.updated(t),t.has("theme")&&this._updateSurface(),t.has("layout")&&this._updateSkuLayout()}};dt.styles=[et,at,S],lt([e({type:String,reflect:!0})],dt.prototype,"configuration",2),lt([e({attribute:"grid-index",reflect:!0})],dt.prototype,"gridIndex",2),lt([e({reflect:!0})],dt.prototype,"size",2),lt([e({type:String,reflect:!0})],dt.prototype,"layout",2),lt([a({slot:"top-banner"})],dt.prototype,"_topBannerSlot",2),lt([a({slot:"checklist-label"})],dt.prototype,"_checklistLabelSlot",2),lt([a({slot:"checklist-title"})],dt.prototype,"_checklistTitleSlot",2),lt([a({slot:"checklist"})],dt.prototype,"_checklistSlot",2),lt([a({slot:"text-block"})],dt.prototype,"_textBlockSlot",2),lt([a({slot:"legal-text"})],dt.prototype,"_legalTextSlot",2),lt([a({slot:"legal-number"})],dt.prototype,"_legalNumberSlot",2),lt([a({slot:"related-products-label"})],dt.prototype,"_relatedProductsLabelSlot",2),lt([a({slot:"related-products"})],dt.prototype,"_relatedProductsSlot",2),lt([a({slot:"footer-divider"})],dt.prototype,"_footerDividerSlot",2),lt([a({slot:"promo-banner-badge"})],dt.prototype,"_badgeSlot",2),lt([a({slot:"promo-banner-copy"})],dt.prototype,"_copySlot",2),lt([a({slot:"promo-banner-link"})],dt.prototype,"_linkSlot",2),lt([a({slot:"footer-link"})],dt.prototype,"_footerLinkSlot",2),lt([a({slot:"top-asset"})],dt.prototype,"_topAssetSlot",2),lt([a({slot:"collapse"})],dt.prototype,"_collapseSlot",2),lt([a({slot:"sku",flatten:!0})],dt.prototype,"_skuSlot",2),lt([a({slot:"payment-options"})],dt.prototype,"_paymentOptionsSlot",2),lt([a({slot:"payment-options-label"})],dt.prototype,"_paymentOptionsLabelSlot",2),lt([i()],dt.prototype,"_topBannerSlotEmpty",2),lt([i()],dt.prototype,"_checklistSlotEmpty",2),lt([i()],dt.prototype,"_textBlockSlotEmpty",2),lt([i()],dt.prototype,"_legalTextSlotEmpty",2),lt([i()],dt.prototype,"_legalNumberSlotEmpty",2),lt([i()],dt.prototype,"_relatedProductsSlotEmpty",2),lt([i()],dt.prototype,"_relatedProductsLabelSlotEmpty",2),lt([i()],dt.prototype,"_badgeSlotEmpty",2),lt([i()],dt.prototype,"_copySlotEmpty",2),lt([i()],dt.prototype,"_linkSlotEmpty",2),lt([i()],dt.prototype,"_checklistLabelSlotEmpty",2),lt([i()],dt.prototype,"_checklistTitleSlotEmpty",2),lt([i()],dt.prototype,"_footerDividerSlotEmpty",2),lt([i()],dt.prototype,"_footerLinkSlotEmpty",2),lt([i()],dt.prototype,"_topAssetSlotEmpty",2),lt([i()],dt.prototype,"_collapseSlotEmpty",2),lt([i()],dt.prototype,"_skuSlotEmpty",2),lt([i()],dt.prototype,"_paymentOptionsSlotEmpty",2),lt([i()],dt.prototype,"_paymentOptionsLabelSlotEmpty",2),dt=lt([l(pt)],dt);export{dt as CardProductPricing,pt as name};
