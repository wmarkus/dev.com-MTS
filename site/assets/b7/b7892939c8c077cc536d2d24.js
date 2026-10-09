import{r as t,i as e,c as i,e as a,f as o,b as s}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i as r,s as d,d as n}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{R as l,K as p,f as m,M as c,g as h}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{H as g}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{v as y}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";const x="column",v="flex-start",k="var(--ds-app-space-micro-2xl, 3rem)",S="var(--ds-app-space-micro-l, 1.5rem)",_="304px",f="192px",b={mediaHeight:f},w="var(--ds-app-type-label-s-font-weight, 600)",u="var(--ds-app-type-label-s-font-size, 0.75rem)",$="var(--ds-app-type-label-s-line-height, 1rem)",E="var(--ds-app-color-interactive-secondary-fg-default, #005597)",z="var(--ds-app-type-heading-2xs-font-weight, 600)",H="var(--ds-app-type-heading-2xs-font-size, 1.125rem)",O="var(--ds-app-type-heading-2xs-line-height, 1.5rem)",L="var(--ds-app-type-heading-2xs-letter-spacing, -0.03em)",j="var(--ds-app-color-base-default-fg-heading, #0e1726)",D="var(--ds-app-type-body-m-font-weight, 400)",C="var(--ds-app-type-body-m-font-size, 1rem)",P="var(--ds-app-type-body-m-line-height, 1.5rem)",M="var(--ds-app-type-body-m-letter-spacing, -0.03em)",R="var(--ds-app-color-base-default-fg-body, #17253D)",T=e`
  :host {
    --ds-media-height: var(
      --ds-media-text-stack-media-height,
      ${t(b.mediaHeight)}
    );
    --ds-media-width: var(
      --ds-media-text-stack-media-width,
      var(--ds-media-text-stack-media-height, ${t(b.mediaHeight)})
    );
    --ds-media-display: grid;
    --ds-media-object-fit: var(--ds-media-text-stack-object-fit, cover);
    display: flex;
    flex-wrap: nowrap;
    align-items: var(--ds-media-text-stack-align-items, ${t(v)});
    column-gap: var(--ds-media-text-stack-column-gap, ${t(k)});
    row-gap: var(--ds-media-text-stack-row-gap, ${t(S)});
    padding-inline-end: var(--ds-media-text-stack-copy-padding, var(--ds-app-space-layout-inset-cozy));

    flex-direction: var(
      --ds-media-text-stack-flex-direction,
      ${t(x)}
    );
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: var(--ds-app-space-micro-l, 1.5rem);
    padding-inline-start: var(
      --ds-media-text-stack-content-wrapper-padding-inline-start,
      var(--ds-app-space-micro-2xs, 0.25rem)
    );
  }

  .heading {
    display: flex;
    flex-direction: column;
    row-gap: var(--ds-app-space-micro-2xs, 0.25rem);
  }

  .horizontal-top {
    display: flex;
    flex-direction: var(--ds-media-text-stack-horizontal-top-flex-direction, row);
    align-items: var(--ds-media-text-stack-horizontal-top-align-items, center);
    column-gap: var(--ds-media-text-stack-horizontal-top-column-gap, var(--ds-app-space-micro-2xl, 3rem));
  }

  .horizontal-bottom {
    display: flex;
    flex-direction: column;
    row-gap: var(--ds-app-space-micro-l, 1.5rem);
    padding-inline-start: var(
      --ds-media-text-stack-horizontal-bottom-padding-inline-start,
      var(--ds-app-space-micro-2xs, 0.25rem)
    );
  }

  /* Typography styles for slotted content */
  ::slotted([slot='eyebrow']) {
    font-weight: var(
      --ds-media-text-stack-eyebrow-font-weight,
      ${t(w)}
    );
    font-size: var(
      --ds-media-text-stack-eyebrow-font-size,
      ${t(u)}
    );
    line-height: var(
      --ds-media-text-stack-eyebrow-line-height,
      ${t($)}
    );
    color: var(--ds-media-text-stack-eyebrow-color, ${t(E)});
  }

  ::slotted([slot='title']) {
    font-weight: var(
      --ds-media-text-stack-title-font-weight,
      ${t(z)}
    ) !important;
    font-size: var(
      --ds-media-text-stack-title-font-size,
      ${t(H)}
    ) !important;
    line-height: var(
      --ds-media-text-stack-title-line-height,
      ${t(O)}
    ) !important;
    letter-spacing: var(
      --ds-media-text-stack-title-letter-spacing,
      ${t(L)}
    ) !important;
    color: var(--ds-media-text-stack-title-color, ${t(j)});
  }

  ::slotted([slot='sub-heading-1']),
  ::slotted([slot='sub-heading-2']),
  ::slotted([slot='description']) {
    font-weight: var(
      --ds-media-text-stack-subheading-description-font-weight,
      ${t(D)}
    );
    font-size: var(
      --ds-media-text-stack-subheading-description-font-size,
      ${t(C)}
    );
    line-height: var(
      --ds-media-text-stack-subheading-description-line-height,
      ${t(P)}
    );
    letter-spacing: var(
      --ds-media-text-stack-subheading-description-letter-spacing,
      ${t(M)}
    );
    color: var(
      --ds-media-text-stack-subheading-description-color,
      ${t(R)}
    );
  }

  :host([orientation='horizontal']) {
    --ds-media-text-stack-flex-direction: row;
    --ds-media-text-stack-align-items: center;
    --ds-media-height: var(
      --ds-media-text-stack-media-height,
      ${t(_)}
    );
    --ds-media-width: var(
      --ds-media-text-stack-media-width,
      var(--ds-media-text-stack-media-height, ${t(_)})
    );
  }

  :host([orientation='horizontal']) .content-wrapper {
    --ds-media-text-stack-content-wrapper-padding-inline-start: 0;
  }

  :host([orientation='horizontal-stacked']) {
    --ds-media-text-stack-flex-direction: column;
    --ds-media-text-stack-align-items: flex-start;
    --ds-media-height: var(
      --ds-media-text-stack-media-height,
      ${t(_)}
    );
    --ds-media-width: var(
      --ds-media-text-stack-media-width,
      var(--ds-media-text-stack-media-height, ${t(_)})
    );
  }

  :host([orientation='horizontal-stacked']) .content-wrapper {
    --ds-media-text-stack-content-wrapper-padding-inline-start: 0;
    padding-block-end: var(
      --ds-media-text-stack-content-wrapper-padding-block-end,
      var(--ds-app-space-micro-xs, 0.5rem)
    );
  }
`,F=e`
  @media (max-width: ${t(y.md)}) {
    :host,
    :host([orientation='horizontal']),
    :host([orientation='horizontal-stacked']) {
      --ds-media-text-stack-flex-direction: column;
      --ds-media-text-stack-align-items: flex-start;
      --ds-media-height: var(
        --ds-media-text-stack-media-height,
        ${t(f)}
      );
      --ds-media-width: var(
        --ds-media-text-stack-media-width,
        var(--ds-media-text-stack-media-height, ${t(f)})
      );
    }

    /* For horizontal-stacked on mobile, make description full width */
    :host([orientation='horizontal-stacked']) {
      --ds-media-text-stack-horizontal-top-flex-direction: column;
      --ds-media-text-stack-horizontal-top-align-items: flex-start;
    }

    :host([orientation='horizontal']) .content-wrapper,
    :host([orientation='horizontal-stacked']) .content-wrapper {
      --ds-media-text-stack-content-wrapper-padding-inline-start: var(--ds-app-space-micro-2xs, 0.25rem);
      --ds-media-text-stack-content-wrapper-padding-block-end: 0;
    }
  }
`;var K=Object.defineProperty,q=Object.getOwnPropertyDescriptor,A=Object.getPrototypeOf,B=Reflect.get,G=(t,e,i,a)=>{for(var o,s=a>1?void 0:a?q(e,i):e,r=t.length-1;r>=0;r--)(o=t[r])&&(s=(a?o(e,i,s):o(s))||s);return a&&s&&K(e,i,s),s};const I="reimagine-media-text-stack";let J=class extends l{constructor(){super(...arguments),this._mediaSlotEmpty=!0,this._eyebrowSlotEmpty=!0,this._titleSlotEmpty=!0,this._subHeading1SlotEmpty=!0,this._subHeading2SlotEmpty=!0,this._socialLinkSlotEmpty=!0,this._descriptionSlotEmpty=!0,this._footerLinkSlotEmpty=!0,this._modalSlotEmpty=!0}_handleSlotChange(t){this._mediaSlotEmpty=0===this._mediaSlot.length,this._eyebrowSlotEmpty=0===this._eyebrowSlot.length,this._titleSlotEmpty=0===this._titleSlot.length,this._subHeading1SlotEmpty=0===this._subHeading1Slot.length,this._subHeading2SlotEmpty=0===this._subHeading2Slot.length,this._socialLinkSlotEmpty=0===this._socialLinkSlot.length,this._descriptionSlotEmpty=0===this._descriptionSlot.length,this._footerLinkSlotEmpty=0===this._footerLinkSlot.length,this._modalSlotEmpty=0===this._modalSlot.length;const e=t.target;"media"===e.name&&e.assignedElements().forEach(t=>{if(r(t,"reimagine-media")){const e={type:h.highlightSolid,"aspect-ratio":c.ratio1to1,"border-width":m.s,"object-fit":p.cover};d(t,e)}})}_renderOptionalSlot(t,e){return s`
      <div class="${t}" part="${t}" style="${e?"display: none;":""}">
        <slot name="${t}" @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_renderHeadingSection(){return s`
      <div class="heading" part="heading">
        ${this._renderOptionalSlot("eyebrow",this._eyebrowSlotEmpty)}
        ${this._renderOptionalSlot("title",this._titleSlotEmpty)}
        ${this._renderOptionalSlot("sub-heading-1",this._subHeading1SlotEmpty)}
        ${this._renderOptionalSlot("sub-heading-2",this._subHeading2SlotEmpty)}
      </div>
      ${this._renderOptionalSlot("social-link",this._socialLinkSlotEmpty)}
    `}_renderDescriptionSection(){return s`
      ${this._renderOptionalSlot("description",this._descriptionSlotEmpty)}
      ${this._renderOptionalSlot("footer-link",this._footerLinkSlotEmpty)}
    `}_renderHorizontalStackedContent(){return s`
      <div class="horizontal-top" part="horizontal-top">
        ${this._renderOptionalSlot("media",this._mediaSlotEmpty)}
        <div class="content-wrapper" part="content-wrapper">${this._renderHeadingSection()}</div>
      </div>
      <div class="horizontal-bottom" part="horizontal-bottom">
        ${this._renderDescriptionSection()}
      </div>
    `}_renderDefaultContent(){return s`
      ${this._renderOptionalSlot("media",this._mediaSlotEmpty)}
      <div class="content-wrapper" part="content-wrapper">
        ${this._renderHeadingSection()} ${this._renderDescriptionSection()}
      </div>
    `}render(){const t=this.orientation===g.horizontalStacked;return s`
      ${t?this._renderHorizontalStackedContent():this._renderDefaultContent()}
      ${this._renderOptionalSlot("modal",this._modalSlotEmpty)}
    `}};var N,Q,U;J.styles=[...(N=J,Q=J,U="styles",B(A(N),U,Q)||[]),T,F],G([i({reflect:!0})],J.prototype,"orientation",2),G([a({slot:"media"})],J.prototype,"_mediaSlot",2),G([a({slot:"eyebrow"})],J.prototype,"_eyebrowSlot",2),G([a({slot:"title"})],J.prototype,"_titleSlot",2),G([a({slot:"sub-heading-1"})],J.prototype,"_subHeading1Slot",2),G([a({slot:"sub-heading-2"})],J.prototype,"_subHeading2Slot",2),G([a({slot:"social-link"})],J.prototype,"_socialLinkSlot",2),G([a({slot:"description"})],J.prototype,"_descriptionSlot",2),G([a({slot:"footer-link"})],J.prototype,"_footerLinkSlot",2),G([a({slot:"modal"})],J.prototype,"_modalSlot",2),G([o()],J.prototype,"_mediaSlotEmpty",2),G([o()],J.prototype,"_eyebrowSlotEmpty",2),G([o()],J.prototype,"_titleSlotEmpty",2),G([o()],J.prototype,"_subHeading1SlotEmpty",2),G([o()],J.prototype,"_subHeading2SlotEmpty",2),G([o()],J.prototype,"_socialLinkSlotEmpty",2),G([o()],J.prototype,"_descriptionSlotEmpty",2),G([o()],J.prototype,"_footerLinkSlotEmpty",2),G([o()],J.prototype,"_modalSlotEmpty",2),J=G([n(I)],J);export{J as MediaTextStack,I as name};
