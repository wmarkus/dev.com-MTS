import{r as t,i as e,c as i,f as s,e as r,b as n,A as a}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{R as o}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{s as l,d as c}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{s as d}from"/__mirror/assets/579a4c6140e643b41d22eee8";import{h as u,f as p,l as h,n as g,c as m,v as f,e as v,t as $}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{b as k,v as S}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{Tag as y}from"/__mirror/assets/e03438b5798d9e90c6c162a8";const b="flex",_="column",z="flex-start",x="flex-start",w="var(--ds-app-color-base-default-fg-heading, #0e1726)",E="400",P="var(--ds-app-space-micro-3xs, 0.125rem)",T="var(--ds-app-space-micro-3xs, 0.125rem)",C="var(--ds-app-space-micro-3xs, 0.125rem)",H="flex",W="row",U="flex-end",j="var(--ds-app-space-micro-2xs, 0.25rem)",O="flex",D="row",A="flex-end",L="var(--ds-app-space-micro-2xs, 0.25rem)",R="column",q="var(--ds-app-space-micro-xs, 0.5rem)",I="var(--ds-app-space-micro-xs, 0.5rem)",B="var(--ds-app-space-micro-m, 1rem)",G="var(--ds-app-color-base-default-fg-body, #17253d)",V="unset",F="unset",J="0",K=e`
  :host {
    display: var(--ds-sku-item-display, ${t(b)});
    flex-direction: var(--ds-sku-item-flex-direction, ${t(_)});
    gap: var(--ds-sku-item-gap, ${t(P)});
    align-items: var(--ds-sku-item-align-items, ${t(x)});
  }

  .tag {
    padding-block-end: var(
      --ds-sku-item-tag-padding-block-end,
      ${t(T)}
    );
  }

  .label {
    font-weight: var(
      --ds-sku-item-label-font-weight,
      ${t(u.fontWeight)}
    ) !important;
    font-size: var(
      --ds-sku-item-label-font-size,
      ${t(u.fontSize)}
    ) !important;
    line-height: var(
      --ds-sku-item-label-line-height,
      ${t(u.lineHeight)}
    ) !important;
    color: var(--ds-sku-item-label-color, ${t(w)}) !important;
    padding-block-end: var(
      --ds-sku-item-label-padding-block-end,
      ${t(C)}
    );
  }

  .pricing-container {
    display: var(
      --ds-sku-item-pricing-container-display,
      ${t(H)}
    );
    flex-direction: var(
      --ds-sku-item-pricing-container-flex-direction,
      ${t(W)}
    );
    align-items: var(
      --ds-sku-item-pricing-container-align-items,
      ${t(U)}
    );
    gap: var(
      --ds-sku-item-pricing-container-gap,
      ${t(j)}
    );
    flex-wrap: wrap;
  }

  .pricing-values {
    display: var(
      --ds-sku-item-pricing-values-display,
      ${t(O)}
    );
    flex-direction: var(
      --ds-sku-item-pricing-values-flex-direction,
      ${t(D)}
    );
    align-items: var(
      --ds-sku-item-pricing-values-align-items,
      ${t(A)}
    );
    gap: var(--ds-sku-item-pricing-values-gap, ${t(L)});
    flex-wrap: wrap;
  }

  .discount-price {
    text-decoration: line-through;
    font-size: var(--ds-sku-item-discount-font-size, ${t(p.fontSize)});
    font-weight: var(
      --ds-sku-item-discount-font-weight,
      ${t(p.fontWeight)}
    );
    line-height: var(
      --ds-sku-item-discount-line-height,
      ${t(p.lineHeight)}
    );
    color: var(--ds-sku-item-discount-color, var(--ds-comp-color-sku-text-strikethrough, #61615e));
  }

  .current-price {
    font-weight: var(
      --ds-sku-item-current-font-weight,
      ${t(p.fontWeight)}
    );
    font-size: var(--ds-sku-item-current-font-size, ${t(p.fontSize)});
    line-height: var(
      --ds-sku-item-current-line-height,
      ${t(p.lineHeight)}
    );
    color: var(--ds-sku-item-current-color, ${t(w)});
  }

  .recurrence {
    font-size: var(--ds-sku-item-recurrence-font-size, ${t(h.fontSize)});
    font-weight: var(
      --ds-sku-item-recurrence-font-weight,
      ${t(h.fontWeight)}
    );
    line-height: var(
      --ds-sku-item-recurrence-line-height,
      ${t(h.lineHeight)}
    );
    color: var(--ds-sku-item-recurrence-color, ${t(w)});
  }

  .note {
    margin-top: var(--ds-sku-item-note-margin-top, ${t(I)});
    font-size: var(--ds-sku-item-note-font-size, ${t(g.fontSize)});
    font-weight: var(--ds-sku-item-note-font-weight, ${t(E)});
    line-height: var(--ds-sku-item-note-line-height, ${t(g.lineHeight)});
    color: var(--ds-sku-item-note-color, ${t(w)});
    display: var(--ds-sku-item-note-display, ${t(b)});
    justify-content: var(
      --ds-sku-item-note-justify-content,
      ${t(z)}
    );
    align-items: var(--ds-sku-item-note-align-items, ${t(x)});
    flex-direction: var(
      --ds-sku-item-note-flex-direction,
      ${t(R)}
    );
    gap: var(--ds-sku-item-note-gap, ${t(q)});
  }

  .footnote {
    margin-top: var(
      --ds-sku-item-footnote-margin-top,
      ${t(B)}
    );
    font-size: var(--ds-sku-item-footnote-font-size, ${t(g.fontSize)});
    font-weight: var(--ds-sku-item-footnote-font-weight, ${t(E)});
    line-height: var(
      --ds-sku-item-footnote-line-height,
      ${t(g.lineHeight)}
    );
    color: var(--ds-sku-item-footnote-color, ${t(G)});
  }

  .unavailable {
    color: var(--ds-sku-item-unavailable-color, ${t(w)});
  }

  .sr-only {
    ${d};
  }

  :host([size='xsmall']) {
    --ds-sku-item-label-font-weight: ${t(m.fontWeight)};
    --ds-sku-item-label-font-size: ${t(m.fontSize)};
    --ds-sku-item-label-line-height: ${t(m.lineHeight)};
    --ds-sku-item-current-font-size: ${t(h.fontSize)};
    --ds-sku-item-current-font-weight: ${t(h.fontWeight)};
    --ds-sku-item-current-line-height: ${t(h.lineHeight)};
    --ds-sku-item-discount-font-size: ${t(h.fontSize)};
    --ds-sku-item-discount-font-weight: ${t(h.fontWeight)};
    --ds-sku-item-discount-line-height: ${t(h.lineHeight)};
    --ds-sku-item-recurrence-font-size: ${t(m.fontSize)};
    --ds-sku-item-recurrence-font-weight: ${t(m.fontWeight)};
    --ds-sku-item-recurrence-line-height: ${t(m.lineHeight)};
  }

  :host([size='small']) {
    --ds-sku-item-label-font-weight: ${t(h.fontWeight)};
    --ds-sku-item-label-font-size: ${t(h.fontSize)};
    --ds-sku-item-label-line-height: ${t(h.lineHeight)};
    --ds-sku-item-current-font-size: ${t(f.fontSize)};
    --ds-sku-item-current-font-weight: ${t(f.fontWeight)};
    --ds-sku-item-current-line-height: ${t(f.lineHeight)};
    --ds-sku-item-discount-font-size: ${t(f.fontSize)};
    --ds-sku-item-discount-font-weight: ${t(f.fontWeight)};
    --ds-sku-item-discount-line-height: ${t(f.lineHeight)};
  }

  :host([size='medium']) {
    --ds-sku-item-label-font-weight: ${t(h.fontWeight)};
    --ds-sku-item-label-font-size: ${t(h.fontSize)};
    --ds-sku-item-label-line-height: ${t(h.lineHeight)};
    --ds-sku-item-current-font-size: ${t(u.fontSize)};
    --ds-sku-item-current-font-weight: ${t(u.fontWeight)};
    --ds-sku-item-current-line-height: ${t(u.lineHeight)};
    --ds-sku-item-discount-font-size: ${t(u.fontSize)};
    --ds-sku-item-discount-font-weight: ${t(u.fontWeight)};
    --ds-sku-item-discount-line-height: ${t(u.lineHeight)};
  }

  :host([size='xlarge']) {
    --ds-sku-item-label-font-weight: ${t(p.fontWeight)};
    --ds-sku-item-label-font-size: ${t(p.fontSize)};
    --ds-sku-item-label-line-height: ${t(p.lineHeight)};
    --ds-sku-item-current-font-size: ${t(v.fontSize)};
    --ds-sku-item-current-font-weight: ${t(v.fontWeight)};
    --ds-sku-item-current-line-height: ${t(v.lineHeight)};
    --ds-sku-item-discount-font-size: ${t(v.fontSize)};
    --ds-sku-item-discount-font-weight: ${t(v.fontWeight)};
    --ds-sku-item-discount-line-height: ${t(v.lineHeight)};
  }

  :host([appearance='stacked']) {
    --ds-sku-item-pricing-container-flex-direction: column;
    --ds-sku-item-pricing-container-align-items: flex-start;
  }

  :host([alignment='right']) {
    --ds-sku-item-align-items: flex-end;
    --ds-sku-item-pricing-container-align-items: flex-end;
  }

  /* Grid Sku Item Styles */
  :host([layout='grid']) .tag {
    grid-row-start: var(
      --ds-sku-item-tag-grid-row-start,
      ${t(V)}
    );
    grid-column-start: var(
      --ds-sku-item-tag-grid-column-start,
      ${t(F)}
    );
    margin-inline: var(--ds-sku-item-margin-inline);
    padding-top: var(
      --ds-sku-item-tag-padding-top,
      ${t(J)}
    );
  }

  :host([layout='grid']) .pricing-container {
    grid-row-start: var(
      --ds-sku-item-pricing-container-grid-row-start,
      ${t(V)}
    );
    grid-column-start: var(
      --ds-sku-item-pricing-container-grid-column-start,
      ${t(F)}
    );
    margin-inline: var(--ds-sku-item-margin-inline);
    padding-top: var(--ds-sku-item-padding-top, ${t(J)});
  }

  :host([layout='grid']) .recurrence {
    grid-row-start: var(
      --ds-sku-item-recurrence-grid-row-start,
      ${t(V)}
    );
    grid-column-start: var(
      --ds-sku-item-recurrence-grid-column-start,
      ${t(F)}
    );
    margin-inline: var(--ds-sku-item-margin-inline);
    padding-top: var(--ds-sku-item-padding-top, ${t(J)});
  }

  :host([layout='grid']) .unavailable {
    grid-row-start: var(
      --ds-sku-item-unavailable-grid-row-start,
      ${t(V)}
    );
    grid-column-start: var(
      --ds-sku-item-unavailable-grid-column-start,
      ${t(F)}
    );
    margin-inline: var(--ds-sku-item-margin-inline);
    padding-top: var(--ds-sku-item-padding-top, ${t(J)});
  }
`,M=e`
  /* VP2 and below */
  @media (max-width: ${t(k(S.md))}) {
    :host([size='small']) {
      --ds-sku-item-current-font-size: ${t(u.fontSize)};
    }

    :host([size='medium']) {
      --ds-sku-item-current-font-size: ${t(p.fontSize)};
    }

    :host([size='large']) {
      --ds-sku-item-label-font-size: ${t(u.fontSize)};
      --ds-sku-item-discount-font-size: ${t(u.fontSize)};
      --ds-sku-item-current-font-size: ${t(v.fontSize)};
    }

    :host([size='xlarge']) {
      --ds-sku-item-label-font-size: ${t(p.fontSize)};
      --ds-sku-item-discount-font-size: ${t(p.fontSize)};
      --ds-sku-item-current-font-size: ${t($.fontSize)};
    }

    :host([appearance='stacked'][alignment='right']) {
      .pricing-values {
        justify-content: flex-end;
      }
    }
  }
`;var N=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,X=(t,e,i,s)=>{for(var r,n=s>1?void 0:s?Q(e,i):e,a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s?r(e,i,n):r(n))||n);return s&&n&&N(e,i,n),n};const Y="reimagine-sku-item";let Z=class extends o{constructor(){super(...arguments),this._tagSlotEmpty=!0,this._discountSlotEmpty=!0,this._currentPriceSlotEmpty=!0,this._recurrenceSlotEmpty=!0,this._labelSlotEmpty=!0,this._priceUnavailableSlotEmpty=!0}_handleSlotChange(){this._labelSlotEmpty=0===this._labelSlot.length,this._discountSlotEmpty=0===this._discountSlot.length,this._currentPriceSlotEmpty=0===this._currentPriceSlot.length,this._recurrenceSlotEmpty=0===this._recurrenceSlot.length,this._priceUnavailableSlotEmpty=0===this._priceUnavailableSlot.length}_handleTagSlotChange(){this._tagSlotEmpty=0===this._tagSlot.length,!this._tagSlotEmpty&&this._tagSlot.forEach(t=>{t instanceof y&&this.setTagAttributes(t)})}_setOrCreateSlottedSpan(t,e){if(!e)return;const i=this.querySelector(`[slot="${t}"]`);if(i)i.textContent=e;else{const i=document.createElement("span");i.setAttribute("slot",t),i.textContent=e,this.append(i)}}_renderTag(){const t=!this.tagText&&this._tagSlotEmpty,e=this.querySelector('[slot="tag"]');if(e&&this.tagText)e.textContent=this.tagText??"";else if(!e&&this.tagText){const t=document.createElement("reimagine-tag");t.setAttribute("slot","tag"),t.textContent=this.tagText??"",this.append(t)}return n`
      <div part="tag" class="tag" style=${t?"display: none;":""}>
        <slot name="tag" @slotchange=${this._handleTagSlotChange}></slot>
      </div>
    `}_renderLabel(){const t=!this.label&&this._labelSlotEmpty;return this._setOrCreateSlottedSpan("label",this.label),n`
      <div part="label" class="label" style=${t?"display: none;":""}>
        <slot name="label" @slotchange=${this._handleSlotChange}></slot>
      </div>
    `}_renderSrText(){return this._setOrCreateSlottedSpan("sr-only",this.srText),n`
      <div part="sr-only" class="sr-only">
        <slot name="sr-only" @slotchange=${this._handleSlotChange}></slot>
      </div>
    `}_renderDiscountPrice(){const t=!this.discountPrice&&this._discountSlotEmpty&&!this.isDiscounted;return this._setOrCreateSlottedSpan("discount-price",this.discountPrice),n`
      <div
        part="discount-price"
        class="discount-price"
        style=${t?"display: none;":""}
      >
        <slot name="discount-price" @slotchange=${this._handleSlotChange}></slot>
      </div>
    `}_renderCurrentPrice(){const t=!this.currentPrice&&this._currentPriceSlotEmpty;return this._setOrCreateSlottedSpan("current-price",this.currentPrice),n`
      <div
        part="current-price"
        class="current-price"
        style=${t?"display: none;":""}
      >
        <slot name="current-price" @slotchange=${this._handleSlotChange}></slot>
      </div>
    `}_renderPrice(){return n`
      ${this._renderCurrentPrice()} ${this.isDiscounted?this._renderDiscountPrice():a}
    `}_renderRecurrence(){const t=!this.recurrence&&this._recurrenceSlotEmpty;return this._setOrCreateSlottedSpan("recurrence",this.recurrence),n`
      <div part="recurrence" class="recurrence" style=${t?"display: none;":""}>
        <slot name="recurrence" @slotchange=${this._handleSlotChange}></slot>
      </div>
    `}_renderPriceUnavailableTemplate(){const t=!this.priceUnavailableText&&this._priceUnavailableSlotEmpty;return this._setOrCreateSlottedSpan("unavailable",this.priceUnavailableText),n` <div
      part="unavailable"
      class="unavailable"
      style="${t?"display: none;":""}"
    >
      <slot name="unavailable" @slotchange=${this._handleSlotChange}></slot>
    </div>`}_renderPriceAvailableTemplate(){if(this.priceUnavailableText||!this._priceUnavailableSlotEmpty)return a;const t="stacked"===this.appearance?n`
            <div part="pricing-values" class="pricing-values">
              ${this._renderLabel()} ${this._renderCurrentPrice()}
            </div>
            ${this.isDiscounted?this._renderDiscountPrice():a}
          `:n`
            <div part="pricing-values" class="pricing-values">
              ${this._renderLabel()} ${this._renderPrice()}
            </div>
          `;return n`
      ${this._renderSrText()}
      <div part="pricing-container" class="pricing-container" aria-hidden="true">
        ${t}
      </div>

      ${this._renderRecurrence()}
    `}setTagAttributes(t,e){e?l(t,e,!0):l(t,e={size:"small"})}render(){const t=this.priceUnavailableText||!this._priceUnavailableSlotEmpty;return n`
      ${this._renderTag()}
      ${t?this._renderPriceUnavailableTemplate():this._renderPriceAvailableTemplate()}
    `}};Z.styles=[K,M],X([i({reflect:!0})],Z.prototype,"appearance",2),X([i({reflect:!0})],Z.prototype,"size",2),X([i({reflect:!0})],Z.prototype,"alignment",2),X([i({reflect:!0,attribute:"tag-text"})],Z.prototype,"tagText",2),X([i({reflect:!0})],Z.prototype,"label",2),X([i({reflect:!0,attribute:"sr-only"})],Z.prototype,"srText",2),X([i({reflect:!0,attribute:"discount-price"})],Z.prototype,"discountPrice",2),X([i({reflect:!0,attribute:"current-price"})],Z.prototype,"currentPrice",2),X([i({reflect:!0,attribute:"recurrence"})],Z.prototype,"recurrence",2),X([i({reflect:!0,attribute:"price-unavailable-text"})],Z.prototype,"priceUnavailableText",2),X([i({reflect:!0,attribute:"is-discounted",type:Boolean})],Z.prototype,"isDiscounted",2),X([i({type:String,reflect:!0})],Z.prototype,"layout",2),X([s()],Z.prototype,"_tagSlotEmpty",2),X([s()],Z.prototype,"_discountSlotEmpty",2),X([s()],Z.prototype,"_currentPriceSlotEmpty",2),X([s()],Z.prototype,"_recurrenceSlotEmpty",2),X([s()],Z.prototype,"_labelSlotEmpty",2),X([s()],Z.prototype,"_priceUnavailableSlotEmpty",2),X([r({slot:"tag"})],Z.prototype,"_tagSlot",2),X([r({slot:"discount-price"})],Z.prototype,"_discountSlot",2),X([r({slot:"current-price"})],Z.prototype,"_currentPriceSlot",2),X([r({slot:"recurrence"})],Z.prototype,"_recurrenceSlot",2),X([r({slot:"label"})],Z.prototype,"_labelSlot",2),X([r({slot:"unavailable"})],Z.prototype,"_priceUnavailableSlot",2),Z=X([c(Y)],Z);export{Z as SkuItem,Y as name};
