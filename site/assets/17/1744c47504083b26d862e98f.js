import{r as t,i as e,e as o,f as i,c as s,b as l}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i as a,d as r}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{c as n,s as d,n as c,X as h,v as p,h as b,f as _,k as g,Y as y}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{n as m,a as x}from"/__mirror/assets/34233ee5ac8acdb3aa831b25";import{R as k}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";const f="flex",S="flex-start",$="start",v="column",E="var(--ds-app-space-micro-m, 1rem)",w="flex",z="flex-start",u="start",O="row",H="var(--ds-app-space-micro-m, 1rem)",D="normal",L="flex",B="column",C="var(--ds-app-space-micro-2xs, 0.25rem)",j="flex-start",A="flex",T="row",W="center",I="var(--ds-app-space-micro-2xs, 0.25rem)",P="var(--ds-app-color-base-alt1-fg-body, #17253d)",q="0.7",F="flex",R="stretch",X="0.5rem",Y="flex",G="column",J="flex-start",K="var(--ds-app-space-micro-m, 1rem)",M="flex",N="column",Q="start",U="var(--ds-app-space-micro-m, 1rem)",V=e`
  :host {
    display: var(--ds-text-block-display, ${t(f)});
    align-items: var(--ds-text-block-align-items, ${t(S)});
    text-align: var(--ds-text-block-text-align, ${t($)});
    flex-direction: var(
      --ds-text-block-flex-direction,
      ${t(v)}
    );
    gap: var(--ds-text-block-gap, ${t(E)});
  }

  :host [part='text-block__header'] {
    display: var(--ds-text-block-header-display, ${t(w)});
    align-items: var(
      --ds-text-block-header-align-items,
      ${t(z)}
    );
    text-align: var(
      --ds-text-block-header-text-align,
      ${t(u)}
    );
    flex-direction: var(
      --ds-text-block-header-flex-direction,
      ${t(O)}
    );
    gap: var(--ds-text-block-header-gap, ${t(H)});
  }

  :host [part='text-block__headings'] {
    display: var(
      --ds-text-block-headings-display,
      ${t(L)}
    );
    flex-direction: var(
      --ds-text-block-headings-flex-direction,
      ${t(B)}
    );
    gap: var(--ds-text-block-headings-gap, ${t(C)});
    align-items: var(
      --ds-text-block-headings-align-items,
      ${t(j)}
    );
    margin-block: auto;
  }

  :host [part='text-block__eyebrow'] {
    display: var(
      --ds-text-block-eyebrow-display,
      ${t(A)}
    );
    flex-direction: var(
      --ds-text-block-eyebrow-flex-direction,
      ${t(T)}
    );
    gap: var(--ds-text-block-eyebrow-gap, ${t(I)});
    align-items: var(
      --ds-text-block-eyebrow-gap,
      ${t(W)}
    );
  }

  :host [part='text-block__title-indicator'] {
    display: var(
      --ds-text-block-indicator-display,
      ${t(F)}
    );
    align-items: var(
      --ds-text-block-indicator-align-items,
      ${t(R)}
    );
    gap: var(--ds-text-block-indicator-gap, ${t(X)});
  }

  ::slotted([slot='text-block__eyebrow-label']) {
    color: var(
      --ds-text-block-eyebrow-label-color,
      ${t("var(--ds-app-color-base-default-fg-highlight, #005597)")}
    );
    font-weight: var(
      --ds-text-block-eyebrow-label-font-weight,
      ${t(n.fontWeight)}
    ) !important;
    font-size: var(
      --ds-text-block-eyebrow-label-font-size,
      ${t(n.fontSize)}
    ) !important;
    line-height: var(
      --ds-text-block-eyebrow-label-line-height,
      ${t(n.lineHeight)}
    ) !important;
  }

  ::slotted([slot='text-block__heading']) {
    color: var(--ds-text-block-heading-color, ${t("var(--ds-app-color-base-default-fg-heading, #0E1726)")});
    font-family: var(
      --ds-text-block-heading-font-family,
      ${t(d.fontFamily)}
    );
    font-weight: var(
      --ds-text-block-heading-font-weight,
      ${t(d.fontWeight)}
    ) !important;
    font-size: var(
      --ds-text-block-heading-font-size,
      ${t(d.fontSize)}
    ) !important;
    word-break: var(
      --ds-text-block-heading-word-break,
      ${t(D)}
    );
    line-height: var(
      --ds-text-block-heading-line-height,
      ${t(d.lineHeight)}
    ) !important;
    margin-bottom: var(
      --ds-text-block-heading-margin-bottom,
      ${t(d.marginBottom)}
    ) !important;
    margin-top: var(
      --ds-text-block-heading-margin-top,
      ${t(d.marginTop)}
    ) !important;
  }

  ::slotted([slot='text-block__content']) {
    color: var(--ds-text-block-content-color, ${t("var(--ds-app-color-base-default-fg-body, #17253d)")});
    font-weight: var(
      --ds-text-block-content-font-weight,
      ${t(c.fontWeight)}
    ) !important;
    font-size: var(
      --ds-text-block-content-font-size,
      ${t(c.fontSize)}
    ) !important;
    line-height: var(
      --ds-text-block-content-line-height,
      ${t(c.lineHeight)}
    ) !important;
    letter-spacing: var(
      --ds-text-block-content-letter-spacing,
      ${t(c.letterSpacing)}
    ) !important;
    margin-top: var(
      --ds-text-block-content-margin-top,
      ${t(c.marginTop)}
    ) !important;
    margin-bottom: var(
      --ds-text-block-content-margin-bottom,
      ${t(c.marginBottom)}
    ) !important;
  }

  ::slotted([slot='text-block__eyebrow-date']) {
    display: var(--ds-text-block-eyebrow-date-dispay, ${t(f)});
    font-weight: var(
      --ds-text-block-eyebrow-date-font-weight,
      ${t(n.fontWeight)}
    ) !important;
    font-size: var(
      --ds-text-block-eyebrow-date-font-size,
      ${t(n.fontSize)}
    ) !important;
    line-height: var(
      --ds-text-block-eyebrow-date-line-height,
      ${t(n.lineHeight)}
    ) !important;
    margin-bottom: var(
      --ds-text-block-eyebrow-date-margin-bottom,
      ${t(n.marginBottom)}
    ) !important;
    color: var(
      --ds-text-block-eyebrow-date-color,
      ${t(P)}
    );
    opacity: var(
      --ds-text-block-eyebrow-date-opacity,
      ${t(q)}
    );
    margin-top: var(
      --ds-text-block-eyebrow-date-margin-top,
      ${t(n.marginTop)}
    ) !important;
  }

  :host [part='text-block__body'] {
    display: var(--ds-text-block-body-display, ${t(Y)});
    flex-direction: var(
      --ds-text-block-body-flex-direction,
      ${t(G)}
    );
    align-items: var(
      --ds-text-block-body-align-items,
      ${t(J)}
    );
    gap: var(--ds-text-block-body-gap, ${t(K)});
  }

  :host [part='text-block__footer'] {
    display: var(--ds-text-block-footer-display, ${t(M)});
    flex-direction: var(
      --ds-text-block-footer-flex-direction,
      ${t(N)}
    );
    align-items: var(
      --ds-text-block-footer-align-items,
      ${t(Q)}
    );
    gap: var(--ds-text-block-footer-gap, ${t(U)});
  }

  :host ::slotted([slot='text-block__title-indicator']) {
    --ds-indicator-height: auto;
  }

  :host([size='m']) [part='text-block__headings'],
  :host([size='s']) [part='text-block__headings'],
  :host([size='xs']) [part='text-block__headings'] {
    --ds-text-block-headings-gap: var(--ds-app-space-micro-xs, 0.5rem);
  }

  :host([size='m']),
  :host([size='s']),
  :host([size='xs']),
  :host([size='2xs']),
  :host([configuration='list']),
  :host([configuration='stacked']) {
    --ds-text-block-gap: var(--ds-app-space-micro-m, 1rem);
  }

  :host([size='2xs']) ::slotted([slot='text-block__content']),
  :host([size='xs']) ::slotted([slot='text-block__content']),
  :host([size='s']) ::slotted([slot='text-block__content']) {
    --ds-text-block-content-font-size: var(--ds-app-type-body-m-font-size);
    --ds-text-block-content-line-height: var(--ds-app-type-body-m-line-height);
  }

  :host([size='2xs']) ::slotted([slot='text-block__heading']),
  :host([size='xs']) ::slotted([slot='text-block__heading']) {
    --ds-text-block-heading-font-family: var(--ds-font-family-display);
  }

  :host([size='m']) ::slotted([slot='text-block__content']) {
    --ds-text-block-content-font-size: ${t(h.fontSize)};
    --ds-text-block-content-line-height: ${t(h.lineHeight)};
    --ds-text-block-content-letter-spacing: ${t(h.letterSpacing)};
  }

  :host([size='2xs']) ::slotted([slot='text-block__heading']) {
    --ds-text-block-heading-font-size: ${t(p.fontSize)};
    --ds-text-block-heading-line-height: ${t(p.lineHeight)};
  }

  :host([size='xs']) ::slotted([slot='text-block__heading']) {
    --ds-text-block-heading-font-weight: ${t(b.fontWeight)};
    --ds-text-block-heading-font-size: ${t(b.fontSize)};
    --ds-text-block-heading-line-height: ${t(b.lineHeight)};
  }

  :host([size='s']) ::slotted([slot='text-block__heading']) {
    --ds-text-block-heading-font-weight: ${t(_.fontWeight)};
    --ds-text-block-heading-font-size: ${t(_.fontSize)};
    --ds-text-block-heading-line-height: ${t(_.lineHeight)};
  }

  :host([size='m']) ::slotted([slot='text-block__heading']) {
    --ds-text-block-heading-font-weight: var(--ds-app-type-heading-m-font-weight);
    --ds-text-block-heading-font-size: var(--ds-app-type-heading-m-font-size);
    --ds-text-block-heading-line-height: var(--ds-app-type-heading-m-line-height);
  }

  :host([configuration='list']) {
    --ds-text-block-flex-direction: row;
  }

  /* Alignment styles */
  :host([alignment='center']) {
    --ds-text-block-align-items: center;
    --ds-text-block-text-align: center;
    --ds-text-block-body-align-items: center;
    --ds-text-block-headings-align-items: center;
    --ds-text-block-flex-direction: column;
  }

  :host([alignment='center']) [part='text-block__header'] {
    --ds-text-block-header-flex-direction: column;
    --ds-text-block-header-align-items: center;
  }
`;var Z=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,et=(t,e,o,i)=>{for(var s,l=i>1?void 0:i?tt(e,o):e,a=t.length-1;a>=0;a--)(s=t[a])&&(l=(i?s(e,o,l):s(l))||l);return i&&l&&Z(e,o,l),l};const ot="reimagine-text-block";let it=class extends k{constructor(){super(...arguments),this._eyebrowDateSlotEmpty=!0,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._contentSlotEmpty=!0,this._badgeSlotEmpty=!0,this._iconSlotEmpty=!0,this._headingSlotEmpty=!0,this._eyebrowLabelSlotEmpty=!0,this._footerSlotEmpty=!0,this._eyebrowEmpty=!0,this._headingsEmpty=!0,this._bodyEmpty=!0,this._headerEmpty=!0,this.indicator=!1}_handleSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length,this._contentSlotEmpty=0===this._contentSlot.length,this._eyebrowDateSlotEmpty=0===this._eyebrowDateSlot.length,this._badgeSlotEmpty=0===this._badgeSlot.length,this._iconSlotEmpty=0===this._iconSlot.length,this._headingSlotEmpty=0===this._headingSlot.length,this._eyebrowLabelSlotEmpty=0===this._eyebrowLabelSlot.length,this._footerSlotEmpty=0===this._footerSlot.length,this._eyebrowEmpty=this._eyebrowLabelSlotEmpty&&this._eyebrowDateSlotEmpty,this._headingsEmpty=this._eyebrowEmpty&&this._headingSlotEmpty,this._bodyEmpty=this._contentSlotEmpty&&this._footerSlotEmpty,this._headerEmpty=this._badgeSlotEmpty&&this._iconSlotEmpty,this.configuration!==g.default&&(this._bodyEmpty=this._bodyEmpty&&this._headingsEmpty),this._updateContentLinkColor()}_updateContentLinkColor(){this._contentSlot.forEach(t=>{t instanceof Element&&t.querySelectorAll("a").forEach(t=>{t.style.color="inherit"})})}updated(t){if(t.has("_badgeSlotEmpty")&&!this._badgeSlotEmpty){const t=y[this.size]||y.default,e=this._badgeSlot[0];e.hasAttribute("size")||e.setAttribute("size",t)}if(t.has("_iconSlotEmpty")&&!this._iconSlotEmpty){const t=this._iconSlot[0];a(t,m)&&!t.hasAttribute("size")&&t.setAttribute("size",x.x2large)}}_renderOptionalSlot(t,e){return l`
      <div part=${t} class=${t} style="${e?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_renderEyebrow(){return l`
      <div
        part="text-block__eyebrow"
        class="text-block__eyebrow"
        style="${this._eyebrowEmpty?"display: none;":""}"
      >
        <slot name="text-block__eyebrow-label" @slotchange="${this._handleSlotChange}"></slot>
        ${this._renderOptionalSlot("text-block__eyebrow-date",this._eyebrowDateSlotEmpty)}
      </div>
    `}_renderTitleIndicator(){return l`
      <div part="text-block__title-indicator" class="text-block__title-indicator">
        ${"stacked"===this.configuration&&this.indicator?l`<slot name="text-block__indicator"></slot>`:""}
        <slot name="text-block__heading" @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_renderBadge(){return l` ${this._renderOptionalSlot("text-block__badge",this._badgeSlotEmpty)} `}_renderIcon(){return l` ${this._renderOptionalSlot("text-block__icon",this._iconSlotEmpty)} `}_renderHeadings(){return l`
      <div
        part="text-block__headings"
        class="text-block__headings"
        style="${this._headingsEmpty?"display: none;":""}"
      >
        ${this._renderEyebrow()} ${this._renderTitleIndicator()}
      </div>
    `}_renderListStacked(){return l`
      ${this._renderOptionalSlot("text-block__first",this._firstSlotEmpty)}
      <div
        part="text-block__header"
        class="text-block__header"
        style="${this._headerEmpty?"display: none;":""}"
      >
        ${this._renderBadge()} ${this._renderIcon()}
      </div>

      <div
        part="text-block__body"
        class="text-block__body"
        style="${this._bodyEmpty?"display: none;":""}"
      >
        ${this._renderHeadings()}
        ${this._renderOptionalSlot("text-block__content",this._contentSlotEmpty)}
        ${this._renderOptionalSlot("text-block__footer",this._footerSlotEmpty)}
      </div>
      ${this._renderOptionalSlot("text-block__last",this._lastSlotEmpty)}
    `}_renderDefault(){return l`
      ${this._renderOptionalSlot("text-block__first",this._firstSlotEmpty)}
      <div part="text-block__header" class="text-block__header">
        ${this._renderBadge()} ${this._renderIcon()} ${this._renderHeadings()}
      </div>

      <div
        part="text-block__body"
        class="text-block__body"
        style="${this._bodyEmpty?"display: none;":""}"
      >
        ${this._renderOptionalSlot("text-block__content",this._contentSlotEmpty)}
        ${this._renderOptionalSlot("text-block__footer",this._footerSlotEmpty)}
      </div>
      ${this._renderOptionalSlot("text-block__last",this._lastSlotEmpty)}
    `}render(){return"list"===this.configuration||"stacked"===this.configuration?this._renderListStacked():this._renderDefault()}};it.styles=[V],et([o({slot:"text-block__eyebrow-date"})],it.prototype,"_eyebrowDateSlot",2),et([o({slot:"text-block__first"})],it.prototype,"_firstSlot",2),et([o({slot:"text-block__last"})],it.prototype,"_lastSlot",2),et([o({slot:"text-block__content"})],it.prototype,"_contentSlot",2),et([o({slot:"text-block__badge"})],it.prototype,"_badgeSlot",2),et([o({slot:"text-block__icon"})],it.prototype,"_iconSlot",2),et([o({slot:"text-block__heading"})],it.prototype,"_headingSlot",2),et([o({slot:"text-block__eyebrow-label"})],it.prototype,"_eyebrowLabelSlot",2),et([o({slot:"text-block__footer"})],it.prototype,"_footerSlot",2),et([i()],it.prototype,"_eyebrowDateSlotEmpty",2),et([i()],it.prototype,"_firstSlotEmpty",2),et([i()],it.prototype,"_lastSlotEmpty",2),et([i()],it.prototype,"_contentSlotEmpty",2),et([i()],it.prototype,"_badgeSlotEmpty",2),et([i()],it.prototype,"_iconSlotEmpty",2),et([i()],it.prototype,"_headingSlotEmpty",2),et([i()],it.prototype,"_eyebrowLabelSlotEmpty",2),et([i()],it.prototype,"_footerSlotEmpty",2),et([i()],it.prototype,"_eyebrowEmpty",2),et([i()],it.prototype,"_headingsEmpty",2),et([i()],it.prototype,"_bodyEmpty",2),et([i()],it.prototype,"_headerEmpty",2),et([s({reflect:!0})],it.prototype,"configuration",2),et([s({reflect:!0})],it.prototype,"size",2),et([s({type:Boolean,reflect:!0})],it.prototype,"indicator",2),et([s({reflect:!0})],it.prototype,"alignment",2),it=et([r(ot)],it);export{it as TextBlock,ot as name};
