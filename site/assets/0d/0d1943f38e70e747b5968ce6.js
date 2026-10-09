import{r as t,i as e,f as o,c as s,e as i,b as r,o as n,A as a}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{R as l,i as p,B as d,j as u}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{q as c,s as h,d as m}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{s as _,S as g}from"/__mirror/assets/579a4c6140e643b41d22eee8";import{r as k,n as y,c as f,o as S}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{name as v,SkuItem as $}from"/__mirror/assets/e0e73fe054b9586e2d3ef775";import{TextBlock as b,name as x}from"/__mirror/assets/1744c47504083b26d862e98f";import{name as E,ButtonGroup as G}from"/__mirror/assets/ea6784fd34f0ec31a8e3ea36";import{B as w}from"/__mirror/assets/5d2e1bf3d87581457a2b76db";import"/__mirror/assets/5f924eec6274a2d611fc1ea0";import{v as I}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";const B="flex",C="column",z="var(--ds-app-color-base-default-fg-body, #17253d)",T="var(--ds-app-space-micro-m, 1rem)",j="block",H="var(--ds-app-space-micro-l, 1.5rem)",O="var(--ds-app-space-micro-s, 0.75rem)",P={display:"flex",flexDirection:"column",gap:"var(--ds-app-space-micro-m, 1rem)",linkFontSize:S.fontSize},D="unset",L="unset",q="var(--ds-app-space-micro-l, 1.5rem)",A="contents",F=e`
  :host {
    display: var(--ds-sku-display, ${t(B)});
    flex-direction: var(--ds-sku-flex-direction, ${t(C)});
    gap: var(--ds-sku-gap, ${t(T)});
  }

  .price-content {
    display: var(--ds-sku-price-content-display, ${t(B)});
    flex-direction: var(
      --ds-sku-price-content-flex-direction,
      ${t(C)}
    );
    gap: var(--ds-sku-price-content-gap, ${t("var(--ds-app-space-micro-s, 0.75rem)")});
  }

  .description {
    font-size: var(--ds-sku-description-font-size, ${t(k.fontSize)});
    font-weight: var(--ds-sku-description-font-weight, ${t(k.fontWeight)});
    line-height: var(--ds-sku-description-line-height, ${t(k.lineHeight)});
    letter-spacing: var(
      --ds-sku-description-letter-spacing,
      ${t(k.letterSpacing)}
    );
    color: var(
      --ds-sku-description-color,
      ${t("var(--ds-app-color-base-default-fg-heading, #0e1726)")}
    );
  }

  .note {
    font-size: var(--ds-sku-note-font-size, ${t(y.fontSize)});
    font-weight: var(--ds-sku-note-font-weight, ${t(y.fontWeight)});
    line-height: var(--ds-sku-note-line-height, ${t(y.lineHeight)});
    color: var(--ds-sku-note-color, ${t(z)});
  }

  .footer {
    display: flex;
    flex-direction: column;
    gap: var(--ds-sku-footer-gap, ${t(H)});
    padding-block-start: var(
      --ds-sku-footer-padding-block-start,
      ${t(O)}
    );
  }

  .footnote {
    font-size: var(--ds-sku-footnote-font-size, ${t(y.fontSize)});
    font-weight: var(--ds-sku-footnote-font-weight, ${t(y.fontWeight)});
    line-height: var(--ds-sku-footnote-line-height, ${t(y.lineHeight)});
    color: var(--ds-sku-footnote-color, ${t(z)});

    --ds-link-font-size: ${t(f.fontSize)};
  }

  .link-wrapper {
    display: var(
      --ds-sku-link-wrapper-display,
      ${t(P.display)}
    );
    flex-direction: var(
      --ds-sku-link-wrapper-flex-direction,
      ${t(P.flexDirection)}
    );
    gap: var(--ds-sku-link-wrapper-gap, ${t(P.gap)});

    --ds-link-font-size: var(
      --ds-sku-link-font-size,
      ${t(P.linkFontSize)}
    );
  }

  .sr-only {
    ${_};
  }

  /* Grid Sku Styles */
  :host([layout='grid']) .title {
    grid-row-start: var(
      --ds-sku-title-grid-row-start,
      ${t(D)}
    );
    grid-column-start: var(
      --ds-sku-title-grid-column-start,
      ${t(L)}
    );
  }

  :host([layout='grid']) .sku-item {
    display: var(--ds-sku-item-display, ${t(j)});
  }

  :host([layout='grid']) .description {
    grid-row-start: var(
      --ds-sku-description-grid-row-start,
      ${t(D)}
    );
    grid-column-start: var(
      --ds-sku-description-grid-column-start,
      ${t(L)}
    );
  }

  :host([layout='grid']) .note {
    grid-row-start: var(
      --ds-sku-note-grid-row-start,
      ${t(D)}
    );
    grid-column-start: var(
      --ds-sku-note-grid-column-start,
      ${t(L)}
    );
  }

  :host([layout='grid']) .footer {
    grid-row-start: var(
      --ds-sku-footer-grid-row-start,
      ${t(D)}
    );
    grid-column-start: var(
      --ds-sku-footer-grid-column-start,
      ${t(L)}
    );
  }
`,N=e`
  /* Grid Sku Styles */
  @media (min-width: ${t(I.md)}) {
    :host([layout='grid']) {
      --ds-sku-display: ${t(A)};
    }

    :host([layout='grid']) .price-content {
      --ds-sku-price-content-display: ${t(A)};
      --ds-sku-item-display: ${t(A)};
    }

    :host([layout='grid']) ::slotted([slot='sku-item']) {
      --ds-sku-item-display: ${t(A)};
      --ds-sku-price-content-display: ${t(A)};
      --ds-sku-item-tag-grid-row-start: 5;
      --ds-sku-item-pricing-container-grid-row-start: 6;
      --ds-sku-item-unavailable-grid-row-start: 6;
      --ds-sku-item-recurrence-grid-row-start: 7;
      --ds-sku-item-margin-inline: var(
        --ds-card-product-pricing-padding-inline,
        ${t(q)}
      );
      --ds-sku-item-tag-padding-top: var(--ds-app-space-micro-m);
      --ds-sku-item-padding-top: var(--ds-app-space-micro-3xs);
    }

    :host([layout='grid']) .title,
    :host([layout='grid']) .description,
    :host([layout='grid']) .note,
    :host([layout='grid']) .footer {
      margin-inline: var(
        --ds-card-product-pricing-padding-inline,
        ${t(q)}
      );
    }

    :host([layout='grid']) .description,
    :host([layout='grid']) .note {
      padding-top: var(--ds-app-space-micro-s);
    }

    :host([layout='grid']) .title,
    :host([layout='grid']) .footer {
      padding-top: var(--ds-app-space-micro-m);
    }
  }
`,R="grid";var U=Object.defineProperty,W=Object.getOwnPropertyDescriptor,J=(t,e,o,s)=>{for(var i,r=s>1?void 0:s?W(e,o):e,n=t.length-1;n>=0;n--)(i=t[n])&&(r=(s?i(e,o,r):i(r))||r);return s&&r&&U(e,o,r),r};const M="reimagine-sku";let K=class extends l{constructor(){super(...arguments),this._sku={},this._titleSlotEmpty=!0,this._skuItemSlotEmpty=!0,this._descriptionSlotEmpty=!0,this._noteSlotEmpty=!0,this._buttonGroupSlotEmpty=!0,this._footnoteSlotEmpty=!0,this._linkSlotEmpty=!0}get sku(){return this._sku}set sku(t){const e=this._sku;if("string"==typeof t)try{this._sku=JSON.parse(t)}catch(t){console.error("Failed to parse sku JSON:",t),this._sku={}}else this._sku=t??{};this._updateInternalState(),this.requestUpdate("sku",e)}getTitle(){var t;return this._textBlockHeading||(null==(t=this.querySelector('[slot="title"]'))?void 0:t.textContent)||void 0}getButtonGroupElement(){return c(this.shadowRoot,E)||this._buttonGroupSlot&&this._buttonGroupSlot.length>0&&this._buttonGroupSlot.find(t=>t instanceof G)||null}async getCurrentPriceElement(){var t,e;const o=c(this.shadowRoot,v);if(o)return await o.updateComplete,null==(t=o.shadowRoot)?void 0:t.querySelector(".current-price");if(this._skuItemSlot&&this._skuItemSlot.length>0){const t=this._skuItemSlot.find(t=>t instanceof $);if(t)return await t.updateComplete,null==(e=t.shadowRoot)?void 0:e.querySelector(".current-price")}return null}firstUpdated(){super.firstUpdated(),this._updateInternalState(),this._applySkuConfigToSlottedSkuItem()}updated(t){super.updated(t),t.has("sku")&&(this._updateInternalState(),this._applySkuConfigToSlottedSkuItem()),t.has("layout")&&this._updateSkuItemLayout()}_updateInternalState(){if(this.sku&&0===Object.keys(this.sku).length)return;this._sku=this.sku??{};const{textBlockHeading:t,textBlockContent:e,description:o,note:s,buttonGroup:i,footnote:r}=this._sku;this._textBlockHeading=t??void 0,this._textBlockContent=e??void 0,this._description=o??void 0,this._note=s??void 0,this._buttonGroup=i??void 0,this._footnote=r??void 0}_handleSlotChange(){this._descriptionSlotEmpty=0===this._descriptionSlot.length,this._noteSlotEmpty=0===this._noteSlot.length,this._footnoteSlotEmpty=0===this._footnoteSlot.length}_handleSkuItemSlotChange(){this._skuItemSlotEmpty=0===this._skuItemSlot.length,this._skuItemSlotEmpty||(this._updateSkuItemLayout(),this._applySkuConfigToSlottedSkuItem())}_updateSkuItemLayout(){!this._skuItemSlotEmpty&&this.layout===g.grid&&this._skuItemSlot.forEach(t=>{t.nodeType===Node.ELEMENT_NODE&&h(t,{layout:R})})}_applySkuConfigToSlottedSkuItem(){if(!this._sku||0===Object.keys(this._sku).length||!this._skuItemSlot||0===this._skuItemSlot.length)return;const t=this._skuItemSlot.find(t=>t instanceof $);if(!t)return;const{appearance:e,size:o,alignment:s,tagText:i,label:r,srText:n,discountPrice:a,currentPrice:l,recurrence:p,priceUnavailableText:d,isDiscounted:u}=this._sku;void 0!==e&&(t.appearance=e),void 0!==o&&(t.size=o),void 0!==s&&(t.alignment=s),void 0!==i&&(t.tagText=i),void 0!==r&&(t.label=r),void 0!==n&&(t.srText=n),void 0!==a&&(t.discountPrice=a),void 0!==l&&(t.currentPrice=l),void 0!==p&&(t.recurrence=p),void 0!==d&&(t.priceUnavailableText=d),"boolean"==typeof u&&(t.isDiscounted=u)}_handleTitleSlotChange(){this._titleSlotEmpty=0===this._titleSlot.length,!this._titleSlotEmpty&&this._titleSlot.forEach(t=>{t instanceof b&&this._setTextBlockAttributes(t)})}_handleButtonGroupSlotChange(){if(this._buttonGroupSlotEmpty=0===this._buttonGroupSlot.length,this._buttonGroupSlotEmpty)return;const t=this._buttonGroupSlot.find(t=>t instanceof G),e=t?Array.from(t.children).filter(t=>t instanceof w):[];this._setButtonAttributes(e)}_setButtonAttributes(t){t.forEach((t,e)=>{const o={appearance:0===e?p.buttonPrimary:p.buttonSecondary,size:d.medium,shape:u.rounded};h(t,o)})}_setTextBlockAttributes(t){if(!t)return;h(t,{configuration:"default"},!0),h(t,{size:"s"})}_renderTitle(){const t=!this._textBlockHeading&&this._titleSlotEmpty,e=this.querySelector('[slot="title"]'),o=(t,e,o,s="span")=>{if(!o)return;let i=this.querySelector(`[slot="${e}"]`);i?i.textContent=o:(i=document.createElement(s),i.setAttribute("slot",e),i.textContent=o,t.append(i))};if(e&&this._textBlockHeading)o(e,"text-block__heading",this._textBlockHeading),o(e,"text-block__content",this._textBlockContent,"p");else if(!e&&this._textBlockHeading){const t=document.createElement(x);t.setAttribute("slot","title"),o(t,"text-block__heading",this._textBlockHeading),o(t,"text-block__content",this._textBlockContent,"p"),this.append(t)}return r`
      <div part="title" class="title" style=${t?"display: none;":""}>
        <slot name="title" @slotchange=${this._handleTitleSlotChange}></slot>
      </div>
    `}_renderDescription(){const t=!this._description&&this._descriptionSlotEmpty;return r`
      <div part="description" class="description" style=${t?"display: none;":""}>
        ${this._description?r`<span>${this._description}</span>`:r`<slot name="description" @slotchange=${this._handleSlotChange}></slot>`}
      </div>
    `}_renderNote(){const t=!this._note&&this._noteSlotEmpty;return r`
      <div part="note" class="note" style=${t?"display: none;":""}>
        ${this._note?r`<span>${this._note}</span>`:r`<slot name="note" @slotchange=${this._handleSlotChange}></slot>`}
      </div>
    `}_renderSkuItem(){const t=!this._skuItemSlotEmpty;return r`
      <div part="sku-item" class="sku-item" style=${t?"":"display: none;"}>
        <slot name="sku-item" @slotchange=${this._handleSkuItemSlotChange}></slot>
      </div>
    `}_renderButtonGroup(){var t,e;const o=!(null!=(t=this._buttonGroup)&&t.primary)&&this._buttonGroupSlotEmpty;let s;if(null!=(e=this._buttonGroup)&&e.primary){const t=r`
        <reimagine-button
          appearance=${p.buttonPrimary}
          size=${d.medium}
          shape=${u.rounded}
          button-label=${this._buttonGroup.primary.text}
          href=${n(this._buttonGroup.primary.href)}
          target=${n(this._buttonGroup.primary.target)}
        >
          <span slot="button__text">${this._buttonGroup.primary.text}</span>
        </reimagine-button>
      `;let e=a;this._buttonGroup.secondary&&(e=r`
          <reimagine-button
            appearance=${p.buttonSecondary}
            size=${d.medium}
            shape=${u.rounded}
            button-label=${this._buttonGroup.secondary.text}
            href=${n(this._buttonGroup.secondary.href)}
            target=${n(this._buttonGroup.secondary.target)}
          >
            <span slot="button__text">${this._buttonGroup.secondary.text}</span>
          </reimagine-button>
        `),s=r`
        <reimagine-button-group> ${t} ${e} </reimagine-button-group>
      `}else s=r`
        <slot name="button-group" @slotchange=${this._handleButtonGroupSlotChange}></slot>
      `;return r`
      <div
        part="button-group"
        class="button-group"
        style=${o?"display: none;":""}
      >
        ${s}
      </div>
    `}_renderFootnote(){const t=!this._footnote&&this._footnoteSlotEmpty;return r`
      <div part="footnote" class="footnote" style=${t?"display: none;":""}>
        ${this._footnote?r`<span>${this._footnote}</span>`:r`<slot name="footnote" @slotchange=${this._handleSlotChange}></slot>`}
      </div>
    `}_handleLinkSlotChange(){const t=0===this._linkSlot.length;this._linkSlotEmpty!==t&&(this._linkSlotEmpty=t)}_renderLinkWrapper(){const t=this._linkSlotEmpty;return r`
      <div
        part="link-wrapper"
        class="link-wrapper"
        style=${t?"display: none;":""}
      >
        <reimagine-divider></reimagine-divider>
        <slot name="link" @slotchange=${this._handleLinkSlotChange}></slot>
      </div>
    `}_renderFooter(){const t=!this._buttonGroup&&this._buttonGroupSlotEmpty&&!this._footnote&&this._footnoteSlotEmpty&&this._linkSlotEmpty;return r`
      <div part="footer" class="footer" style=${t?"display: none;":""}>
        ${this._renderButtonGroup()} ${this._renderFootnote()} ${this._renderLinkWrapper()}
      </div>
    `}render(){return r`
      ${this._renderTitle()}
      <div part="price-content" class="price-content">
        ${this._renderSkuItem()} ${this._renderDescription()} ${this._renderNote()}
      </div>
      ${this._renderFooter()}
    `}};K.styles=[F,N],J([o()],K.prototype,"_sku",2),J([s({type:Object,attribute:"sku"})],K.prototype,"sku",1),J([s({type:String,reflect:!0})],K.prototype,"layout",2),J([o()],K.prototype,"_textBlockHeading",2),J([o()],K.prototype,"_textBlockContent",2),J([o()],K.prototype,"_description",2),J([o()],K.prototype,"_note",2),J([o()],K.prototype,"_buttonGroup",2),J([o()],K.prototype,"_footnote",2),J([o()],K.prototype,"_titleSlotEmpty",2),J([o()],K.prototype,"_skuItemSlotEmpty",2),J([o()],K.prototype,"_descriptionSlotEmpty",2),J([o()],K.prototype,"_noteSlotEmpty",2),J([o()],K.prototype,"_buttonGroupSlotEmpty",2),J([o()],K.prototype,"_footnoteSlotEmpty",2),J([o()],K.prototype,"_linkSlotEmpty",2),J([i({slot:"title"})],K.prototype,"_titleSlot",2),J([i({slot:"sku-item"})],K.prototype,"_skuItemSlot",2),J([i({slot:"description"})],K.prototype,"_descriptionSlot",2),J([i({slot:"note"})],K.prototype,"_noteSlot",2),J([i({slot:"button-group",flatten:!0})],K.prototype,"_buttonGroupSlot",2),J([i({slot:"footnote"})],K.prototype,"_footnoteSlot",2),J([i({slot:"link"})],K.prototype,"_linkSlot",2),K=J([m(M)],K);export{K as Sku,M as name};
