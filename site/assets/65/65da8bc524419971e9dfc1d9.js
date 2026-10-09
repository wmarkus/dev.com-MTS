import{r as t,i as e,b as o,c as a,e as i,f as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{SurfaceElement as d}from"/__mirror/assets/e09cf4eae8f90fbcbeb198a9";import{i as s,a as l,d as n}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{v as p,r as c,S as g}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{c as h}from"/__mirror/assets/a0679f491075e7b16b00f1b4";import{b as y,v as _}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{B as m,j as f}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{D as u,d as b}from"/__mirror/assets/58cacecb3a70e11d710dca69";import{n as S}from"/__mirror/assets/5d2e1bf3d87581457a2b76db";import{name as v}from"/__mirror/assets/ea6784fd34f0ec31a8e3ea36";import{n as E,a as $}from"/__mirror/assets/6bb79ec1ff52647184ef326a";import"/__mirror/assets/34233ee5ac8acdb3aa831b25";const x="flex",w="column",C="var(--ds-app-space-micro-2xl, 3rem)",z="var(--ds-app-space-surface-comfortable, 1.5rem)",H="var(--ds-app-space-surface-comfortable, 1.5rem)",F="var(--ds-app-space-surface-comfortable, 1.5rem)",L="var(--ds-app-space-surface-comfortable, 1.5rem)",j="flex",I="column",O="var(--ds-app-space-micro-xl, 2rem)",k={contentPaddingInlineEnd:"var(--ds-app-space-micro-2xl, 3rem)",textColor:"var(--ds-app-color-base-default-fg-body, #17253d)",textFontWeight:`var(--ds-app-type-body-m-font-weight, ${c.fontWeight})`,textFontSize:`var(--ds-app-type-body-m-font-size, ${c.fontSize})`,textLineHeight:`var(--ds-app-type-body-m-line-height, ${c.lineHeight})`,textLetterSpacing:`var(--ds-app-type-body-m-letter-spacing, ${c.letterSpacing})`},A={headerTextColor:"var(--ds-app-color-base-default-fg-body, #17253d)",headerFontWeight:`var(--ds-app-type-body-m-font-weight, ${c.fontWeight})`,headerFontSize:`var(--ds-app-type-body-m-font-size, ${c.fontSize})`,headerLineHeight:`var(--ds-app-type-body-m-line-height, ${c.lineHeight})`,headerLetterSpacing:`var(--ds-app-type-body-m-letter-spacing, ${c.letterSpacing})`,headerDisplay:"flex",headerJustifyContent:"space-between",headerAlignItems:"center"},D={marginBlockEnd:"var(--ds-app-space-micro-xs, 0.5rem)",subtitleFontSize:p.fontSize,subtitleFontWeight:p.fontWeight,subtitleLineHeight:p.lineHeight,subtitleLetterSpacing:p.letterSpacing,subtitleTextColor:"var(--ds-app-color-base-default-fg-heading, #0E1726)"},W="flex",B="column",P="var(--ds-app-space-micro-2xs, 0.25rem)",T="608px",G=e`
  :host {
    /* Apply default or custom values to the host element */
    display: var(--ds-card-dialog-display, ${t(x)});
    flex-direction: var(
      --ds-card-dialog-flex-direction,
      ${t(w)}
    );
    row-gap: var(--ds-card-dialog-row-gap, ${t(C)});
    padding-inline-start: var(
      --ds-card-dialog-padding-inline-start,
      ${t(z)}
    );
    padding-inline-end: var(
      --ds-card-dialog-padding-inline-end,
      ${t(H)}
    );
    padding-block-start: var(
      --ds-card-dialog-padding-block-start,
      ${t(F)}
    );
    padding-block-end: var(
      --ds-card-dialog-padding-block-end,
      ${t(L)}
    );

    --ds-text-block-body-gap: 'var(--ds-app-space-micro-xs, .5rem)';
    --ds-badge-box-shadow: none;
  }

  .card-dialog__top_right {
    margin-inline-start: var(
      --ds-card-dialog-top-right-margin-inline-start,
      ${t("var(--ds-app-space-micro-xl, 2rem)")}
    );
  }

  .card-dialog__base {
    display: var(--card-dialog-base-display, ${t(j)});
    gap: var(--ds-card-dialog-base-gap, ${t(O)} 0);
    flex-direction: var(
      --card-dialog-flex-direction,
      ${t(I)}
    );
  }

  .card-dialog__content_footer {
    display: var(--ds-card-dialog-content-footer-display);
    justify-content: var(--ds-card-dialog-content-footer-justify-content);
  }

  ::slotted([slot='card-dialog__subtitle']) {
    margin-bottom: var(
      --ds-card-dialog-subtitle-margin-block-end,
      ${t(D.marginBlockEnd)}
    );
    color: var(
      --ds-card-dialog-subtitle-color,
      ${t(D.subtitleTextColor)}
    );
    font-weight: var(
      --ds-card-dialog-subtitle-font-weight,
      ${t(D.subtitleFontWeight)}
    );
    font-size: var(
      --ds-card-dialog-subtitle-font-size,
      ${t(D.subtitleFontSize)}
    );
    line-height: var(
      --ds-card-dialog-subtitle-line-height,
      ${t(D.subtitleLineHeight)}
    );
    letter-spacing: var(
      --ds-card-dialog-subtitle-letter-spacing,
      ${t(D.subtitleLetterSpacing)}
    );
  }

  ::slotted([slot='card-dialog__body-copy']) {
    font-weight: var(
      --ds-card-dialog-content-font-weight,
      ${t(k.textFontWeight)}
    );
    font-size: var(
      --ds-card-dialog-content-font-size,
      ${t(k.textFontSize)}
    );
    line-height: var(
      --ds-card-dialog-content-line-height,
      ${t(k.textLineHeight)}
    );
    letter-spacing: var(
      --ds-card-dialog-content-letter-spacing,
      ${t(k.textLetterSpacing)}
    );
  }

  .card-dialog__content {
    padding-block-end: var(--ds-card-dialog-content-padding-block-end, 0);
    padding-inline-end: var(
      --ds-card-dialog-content-padding-inline-end,
      ${t(k.contentPaddingInlineEnd)}
    );
    color: var(--ds-card-dialog-content-color, ${t(k.textColor)});
  }

  .card-dialog__header {
    justify-content: var(
      --ds-card-dialog-justify-content,
      ${t(A.headerJustifyContent)}
    );
    align-items: var(
      --ds-card-dialog-align-items,
      ${t(A.headerAlignItems)}
    );
    display: var(
      --ds-card-dialog-header-display,
      ${t(A.headerDisplay)}
    );
    color: var(--ds-card-dialog-header-color, ${t(A.headerTextColor)});
    font-weight: var(
      --ds-card-dialog-header-font-weight,
      ${t(A.headerFontWeight)}
    );
    font-size: var(
      --ds-card-dialog-header-font-size,
      ${t(A.headerFontSize)}
    );
    line-height: var(
      --ds-card-dialog-header-line-height,
      ${t(A.headerLineHeight)}
    );
    letter-spacing: var(
      --ds-card-dialog-header-letter-spacing,
      ${t(A.headerLetterSpacing)}
    );
  }

  :host([configuration='details']) {
    --ds-card-dialog-align-items: flex-start;
    --ds-card-dialog-content-padding-inline-end: 0;
    max-width: var(
      --ds-card-dialog-details-max-width,
      ${t(T)}
    );
  }

  :host([configuration='details']) .card-dialog__top-left {
    display: var(
      --ds-card-dialog-details-display,
      ${t(W)}
    );
    flex-direction: var(
      --ds-card-dialog-details-flex-direction,
      ${t(B)}
    );
    gap: var(--ds-card-dialog-details-gap, ${t(P)});
  }

  :host([configuration='details']) ::slotted([slot='card-dialog__eyebrow']) {
    font-weight: var(--ds-app-type-label-s-font-weight, 600);
    font-size: var(--ds-app-type-label-s-font-size, 0.75rem);
    line-height: var(--ds-app-type-label-s-line-height, 1rem);
    color: var(--ds-app-color-interactive-secondary-fg-default, #005597);
  }

  :host([configuration='details']) ::slotted([slot='card-dialog__top']) {
    font-weight: var(--ds-app-type-heading-2xs-font-weight, 600) !important;
    font-size: var(--ds-app-type-heading-2xs-font-size, 1.125rem) !important;
    line-height: var(--ds-app-type-heading-2xs-line-height, 1.5rem) !important;
    letter-spacing: var(--ds-app-type-heading-2xs-letter-spacing, -0.03em) !important;
    color: var(--ds-app-color-base-default-fg-heading, #0e1726);
  }

  :host([configuration='details']) ::slotted([slot='card-dialog__sub-heading-1']),
  :host([configuration='details']) ::slotted([slot='card-dialog__sub-heading-2']) {
    font-weight: var(--ds-app-type-body-m-font-weight, 400);
    font-size: var(--ds-app-type-body-m-font-size, 1rem);
    line-height: var(--ds-app-type-body-m-line-height, 1.5rem);
    letter-spacing: var(--ds-app-type-body-m-letter-spacing, -0.03em);
    color: var(--ds-app-color-base-default-fg-body, #17253d);
  }
`,J=e`
  @media (min-width: ${t(y(_.sm))}) {
    .card-dialog__content_footer {
      --ds-card-dialog-content-footer-display: flex;
      --ds-card-dialog-content-footer-justify-content: flex-end;
    }
  }
`,N="compare-plans";var U=Object.defineProperty,q=Object.getOwnPropertyDescriptor,K=(t,e,o,a)=>{for(var i,r=a>1?void 0:a?q(e,o):e,d=t.length-1;d>=0;d--)(i=t[d])&&(r=(a?i(e,o,r):i(r))||r);return a&&r&&U(e,o,r),r};const M="reimagine-card-dialog";let Q=class extends(u(d)){constructor(){super(...arguments),this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._topSlotEmpty=!0,this._eyebrowSlotEmpty=!0,this._subHeading1SlotEmpty=!0,this._subHeading2SlotEmpty=!0,this._subtitleSlotEmpty=!0,this._bodyCopySlotEmpty=!0,this._secondaryInfoSlotEmpty=!0,this._shareSlotEmpty=!0,this._contentFooterSlotEmpty=!0,this._cardsSlotEmpty=!0}willUpdate(t){super.willUpdate(t),this.surface=this.surface??g.solidBorder,this.dialogSlotPrefix=this.dialogSlotPrefix??"card-dialog",this.dialogCloseEventName=this.dialogCloseEventName??"close__card-dialog"}_handleSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length,this._topSlotEmpty=0===this._topSlot.length,this._eyebrowSlotEmpty=0===this._eyebrowSlot.length,this._subHeading1SlotEmpty=0===this._subHeading1Slot.length,this._subHeading2SlotEmpty=0===this._subHeading2Slot.length,this._subtitleSlotEmpty=0===this._subtitleSlot.length,this._bodyCopySlotEmpty=0===this._bodyCopySlot.length,this._secondaryInfoSlotEmpty=0===this._secondaryInfoSlot.length,this._shareSlotEmpty=0===this._shareSlot.length,this._contentFooterSlotEmpty=0===this._contentFooterSlot.length,this._cardsSlotEmpty=0===this._cardsSlot.length,this._contentFooterSlotEmpty||this._updateFooterButtonGroupAttributes(),this._secondaryInfoSlotEmpty||this._updateSecondaryInfoSearchAttributes(),this._cardsSlotEmpty||this._updateCardsLayout()}_updateCardsLayout(){this.configuration===N&&(this._cardsLayoutConfig=`${this._cardsSlot.length}-col-even`)}_updateFooterButtonGroupAttributes(){const t=this._contentFooterSlot.filter(t=>s(t,v));t.length>0&&t.forEach(t=>{const e=l(t,S);e.length>0&&e.forEach(t=>{t.setAttribute("size",m.medium),t.setAttribute("shape",f.rounded)})})}_updateSecondaryInfoSearchAttributes(){const t=this._secondaryInfoSlot.filter(t=>s(t,E));t.length>0&&t.forEach(t=>{t.setAttribute("size",$.medium)})}_renderCardsLayout(){const t=this._cardsLayoutConfig||`${this._cardsSlot.length}-col-even`;return o`
      <reimagine-layout class="cards-layout" part="cards-layout" configuration="${t}">
        <slot name="cards"></slot>
      </reimagine-layout>
    `}_renderCardDialogHeader(){return this.renderDialogHeader(o`
      ${this._renderOptionalSlot("card-dialog__eyebrow",this._eyebrowSlotEmpty)}
      ${this._renderOptionalSlot("card-dialog__top",this._topSlotEmpty)}
      ${this._renderOptionalSlot("card-dialog__sub-heading-1",this._subHeading1SlotEmpty)}
      ${this._renderOptionalSlot("card-dialog__sub-heading-2",this._subHeading2SlotEmpty)}
    `)}renderDefaultLayout(){const t=this._subtitleSlotEmpty&&this._bodyCopySlotEmpty?"display: none;":"";return o`
      <div part="card-dialog__base" class="card-dialog__base">
        ${this._renderCardDialogHeader()}
        <div class="card-dialog__content" style="${t}">
          ${this._renderOptionalSlot("card-dialog__subtitle",this._subtitleSlotEmpty)}
          ${this._renderOptionalSlot("card-dialog__body-copy",this._bodyCopySlotEmpty)}
        </div>
        ${this.configuration===N?this._renderCardsLayout():""}
        ${this._renderOptionalSlot("card-dialog__secondary_info",this._secondaryInfoSlotEmpty)}
        ${this._renderOptionalSlot("card-dialog__share",this._shareSlotEmpty)}
        ${this._renderOptionalSlot("card-dialog__content_footer",this._contentFooterSlotEmpty)}
      </div>
    `}render(){return o`
      ${this._renderOptionalSlot("card-dialog__first",this._firstSlotEmpty)}
      ${this.renderDefaultLayout()}
      ${this._renderOptionalSlot("card-dialog__last",this._lastSlotEmpty)}
    `}};Q.styles=[h,G,J,b],K([a({reflect:!0})],Q.prototype,"configuration",2),K([i({slot:"card-dialog__first"})],Q.prototype,"_firstSlot",2),K([i({slot:"card-dialog__last"})],Q.prototype,"_lastSlot",2),K([i({slot:"card-dialog__top"})],Q.prototype,"_topSlot",2),K([i({slot:"card-dialog__eyebrow"})],Q.prototype,"_eyebrowSlot",2),K([i({slot:"card-dialog__sub-heading-1"})],Q.prototype,"_subHeading1Slot",2),K([i({slot:"card-dialog__sub-heading-2"})],Q.prototype,"_subHeading2Slot",2),K([i({slot:"card-dialog__subtitle"})],Q.prototype,"_subtitleSlot",2),K([i({slot:"card-dialog__body-copy"})],Q.prototype,"_bodyCopySlot",2),K([i({slot:"card-dialog__secondary_info"})],Q.prototype,"_secondaryInfoSlot",2),K([i({slot:"card-dialog__share"})],Q.prototype,"_shareSlot",2),K([i({slot:"card-dialog__content_footer"})],Q.prototype,"_contentFooterSlot",2),K([i({slot:"cards"})],Q.prototype,"_cardsSlot",2),K([r()],Q.prototype,"_firstSlotEmpty",2),K([r()],Q.prototype,"_lastSlotEmpty",2),K([r()],Q.prototype,"_topSlotEmpty",2),K([r()],Q.prototype,"_eyebrowSlotEmpty",2),K([r()],Q.prototype,"_subHeading1SlotEmpty",2),K([r()],Q.prototype,"_subHeading2SlotEmpty",2),K([r()],Q.prototype,"_subtitleSlotEmpty",2),K([r()],Q.prototype,"_bodyCopySlotEmpty",2),K([r()],Q.prototype,"_secondaryInfoSlotEmpty",2),K([r()],Q.prototype,"_shareSlotEmpty",2),K([r()],Q.prototype,"_contentFooterSlotEmpty",2),K([r()],Q.prototype,"_cardsSlotEmpty",2),K([r()],Q.prototype,"_cardsLayoutConfig",2),Q=K([n(M)],Q);export{Q as CardDialog,M as name};
