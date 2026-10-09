import{r as t,i as e,e as o,f as l,b as r,o as a}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{b as i,c as s,M as n}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{i as d,s as p,d as c}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{n as u}from"/__mirror/assets/bf0b3498e45fc20534cec8b1";import{n as h,a as y}from"/__mirror/assets/a6479ea808b36b42c5f26c81";import{name as m}from"/__mirror/assets/9bce10b1f8f8949b4fd224b8";import{d as S,s as g,g as _,f as b,c as v,h as E}from"/__mirror/assets/daab3f96e18c70a4751d1a7b";import{B as f}from"/__mirror/assets/4230c2711e37b2e85105da0e";const $={sidebarGap:`${t(v)}`,contentGap:`${t(b)}`,footerGap:`${t(_)}`,sidebarLinkGap:`${t(g)}`,sidebarContentGap:`${t(S)}`},k=e`
  :host {
    color: var(--ds-app-color-base-default-fg-body, #17253d);
  }

  .sidebar,
  .content,
  .content-footer,
  .related-resource,
  .related-solution,
  .related-resource-top,
  .related-solution-top {
    display: flex;
    flex-direction: column;
  }

  .sidebar {
    gap: var(
      --ds-editorial-article-summary-sidebar-gap-default,
      ${t($.sidebarGap)}
    );
  }

  .content {
    gap: var(
      --ds-editorial-article-summary-content-gap-default,
      ${t($.contentGap)}
    );
  }

  .content-footer {
    gap: var(
      --ds-editorial-article-summary-footer-gap-default,
      ${t($.footerGap)}
    );
  }

  .related-resource,
  .related-solution {
    gap: var(
      --ds-editorial-article-summary-sidebar-link-gap,
      ${t($.sidebarLinkGap)}
    );
  }

  .related-resource-top,
  .related-solution-top {
    gap: var(
      --ds-editorial-article-summary-sidebar-content-gap,
      ${t($.sidebarContentGap)}
    );
  }

  ::slotted([slot='related-resource-eyebrow']),
  ::slotted([slot='related-solution-eyebrow']) {
    color: var(--ds-heading-block-eyebrow-label-color, #005597);
    font-size: var(--ds-heading-block-eyebrow-label-font-size, 0.75rem);
    font-weight: var(--ds-heading-block-eyebrow-label-font-weight, 600);
    line-height: var(--ds-heading-block-eyebrow-label-line-height, 1rem);
    letter-spacing: var(--ds-heading-block-eyebrow-label-letter-spacing, 0.08em);
  }

  .related-resource-media {
    --ds-media-asset-border-start-start-radius: var(--ds-app-radii-m, 1rem);
    --ds-media-asset-border-start-end-radius: var(--ds-app-radii-m, 1rem);
    --ds-media-asset-border-end-start-radius: var(--ds-app-radii-m, 1rem);
    --ds-media-asset-border-end-end-radius: var(--ds-app-radii-m, 1rem);
  }

  .related-resource-caption {
    font-size: var(--ds-app-type-body-xs-font-size, 0.75rem);
    font-weight: var(--ds-app-type-body-xs-font-weight, 400);
    line-height: var(--ds-app-type-body-xs-line-height, 1rem);
    letter-spacing: var(--ds-app-type-body-xs-letter-spacing, -0.03em);
  }

  .related-solution-title {
    font-weight: var(--ds-app-type-heading-2xs-font-weight, 600);
    font-size: var(--ds-app-type-heading-2xs-font-size, 1.125rem);
    line-height: var(--ds-app-type-heading-2xs-line-height, 1.5rem);
    letter-spacing: var(--ds-app-type-heading-2xs-letter-spacing, -0.03em);
  }

  .related-solution-badge {
    display: flex;
    flex-direction: row;
    gap: ${t(E)};
  }

  .related-solution-description {
    font-size: var(--ds-app-type-body-s-font-size, 0.875rem);
    font-weight: var(--ds-app-type-body-s-font-weight, 400);
    line-height: var(--ds-app-type-body-s-line-height, 1.25rem);
    letter-spacing: var(--ds-app-type-body-s-letter-spacing, -0.03em);
  }
`;var R=Object.defineProperty,w=Object.getOwnPropertyDescriptor,C=Object.getPrototypeOf,D=Reflect.get,x=(t,e,o,l)=>{for(var r,a=l>1?void 0:l?w(e,o):e,i=t.length-1;i>=0;i--)(r=t[i])&&(a=(l?r(e,o,a):r(a))||a);return l&&a&&R(e,o,a),a};const L="reimagine-editorial-article-summary";let j=class extends i{constructor(){super(...arguments),this._relatedDividerSlotEmpty=!0,this._contentDividerSlotEmpty=!0,this._contentFootnoteSlotEmpty=!0,this._relatedResourceEnabled=!0,this._relatedResourceMediaSlotEmpty=!0,this._relatedResourceCaptionSlotEmpty=!0,this._relatedResourceLinkSlotEmpty=!0,this._relatedSolutionEnabled=!0,this._relatedSolutionEyebrowSlotEmpty=!0,this._relatedSolutionBadgeSlotEmpty=!0,this._relatedSolutionTitleSlotEmpty=!0,this._relatedSolutionDescriptionSlotEmpty=!0,this._relatedSolutionLinkSlotEmpty=!0}_handleSlotChange(t){this._relatedDividerSlotEmpty=0===this._relatedDividerSlot.length,this._contentDividerSlotEmpty=0===this._contentDividerSlot.length,this._contentFootnoteSlotEmpty=0===this._contentFootnoteSlot.length,this._relatedResourceEnabled=0!==this._relatedResourceEyebrowSlot.length,this._relatedResourceMediaSlotEmpty=0===this._relatedResourceMediaSlot.length,this._relatedResourceCaptionSlotEmpty=0===this._relatedResourceCaptionSlot.length,this._relatedResourceLinkSlotEmpty=0===this._relatedResourceLinkSlot.length,this._relatedSolutionBadgeSlotEmpty=0===this._relatedSolutionBadgeSlot.length,this._relatedSolutionEyebrowSlotEmpty=0===this._relatedSolutionEyebrowSlot.length,this._relatedSolutionEnabled=!this._relatedSolutionBadgeSlotEmpty&&!this._relatedSolutionEyebrowSlotEmpty,this._relatedSolutionTitleSlotEmpty=0===this._relatedSolutionTitleSlot.length,this._relatedSolutionDescriptionSlotEmpty=0===this._relatedSolutionDescriptionSlot.length,this._relatedSolutionLinkSlotEmpty=0===this._relatedSolutionLinkSlot.length,this._updateSlotDefaultAttributes(t)}_updateSlotDefaultAttributes(t){const e=t.target.name;if("related-resource-media"===e&&!this._relatedResourceMediaSlotEmpty){const t=this._relatedResourceMediaSlot.filter(t=>d(t,u))||[],e={"aspect-ratio":n.ratio16to9};p(t,e)}if("related-resource-link"===e&&!this._relatedResourceLinkSlotEmpty){const t=this._relatedResourceLinkSlot.filter(t=>d(t,h))||[],e={"with-button":"true","icon-position":y.left};p(t,e)}if("related-solution-link"===e&&!this._relatedSolutionLinkSlotEmpty){const t=this._relatedSolutionLinkSlot.filter(t=>d(t,h))||[],e={"with-button":"true","icon-position":y.left};p(t,e)}if("related-solution-badge"===e&&!this._relatedSolutionBadgeSlotEmpty){const t=this._relatedSolutionBadgeSlot.filter(t=>d(t,m))||[],e={size:f.m};p(t,e)}}_renderOptionalSlot(t,e){return r`
      <div part=${t} class=${t} style=${e?"display: none;":""}>
        <slot name=${t} @slotchange=${this._handleSlotChange}></slot>
      </div>
    `}_renderRelatedResource(){const t=this._relatedResourceEnabled?"":"display: none;";return r`
      <div part="related-resource" class="related-resource" style=${t}>
        <div part="related-resource-top" class="related-resource-top">
          <slot name="related-resource-eyebrow" @slotchange=${this._handleSlotChange}></slot>
          <div
            part="related-resource-media"
            class="related-resource-media"
            style=${this._relatedResourceMediaSlotEmpty?"display: none;":""}
          >
            <slot name="related-resource-media" @slotchange=${this._handleSlotChange}></slot>
          </div>
          <div
            part="related-resource-caption"
            class="related-resource-caption"
            style=${this._relatedResourceCaptionSlotEmpty?"display: none;":""}
          >
            <slot name="related-resource-caption" @slotchange=${this._handleSlotChange}></slot>
          </div>
        </div>
        <div
          part="related-resource-link"
          class="related-resource-link"
          style=${this._relatedResourceLinkSlotEmpty?"display: none;":""}
        >
          <slot name="related-resource-link" @slotchange=${this._handleSlotChange}></slot>
        </div>
      </div>
    `}_renderRelatedSolution(){const t=this._relatedSolutionEnabled?"":"display: none;";return r`
      <div part="related-solution" class="related-solution" style=${t}>
        <div part="related-solution-top" class="related-solution-top">
          <slot name="related-solution-eyebrow" @slotchange=${this._handleSlotChange}></slot>
          <div part="related-solution-badge" class="related-solution-badge">
            <slot name="related-solution-badge" @slotchange=${this._handleSlotChange}></slot>
          </div>
          <div
            part="related-solution-title"
            class="related-solution-title"
            style=${this._relatedSolutionTitleSlotEmpty?"display: none;":""}
          >
            <slot name="related-solution-title" @slotchange=${this._handleSlotChange}></slot>
          </div>
          <div
            part="related-solution-description"
            class="related-solution-description"
            style=${this._relatedSolutionDescriptionSlotEmpty?"display: none;":""}
          >
            <slot name="related-solution-description" @slotchange=${this._handleSlotChange}></slot>
          </div>
        </div>
        <div
          part="related-solution-link"
          class="related-solution-link"
          style=${this._relatedSolutionLinkSlotEmpty?"display: none;":""}
        >
          <slot name="related-solution-link" @slotchange=${this._handleSlotChange}></slot>
        </div>
      </div>
    `}_renderBlade(){const t="container",e=r`
      <reimagine-layout
        part="base"
        class="base"
        configuration=${a(s.col2editorial)}
      >
        <reimagine-layout-column part="sidebar" class="sidebar">
          ${this._renderRelatedResource()}
          ${this._renderOptionalSlot("related-divider",this._relatedDividerSlotEmpty)}
          ${this._renderRelatedSolution()}
        </reimagine-layout-column>
        <reimagine-layout-column part="content" class="content">
          <div part="content-copy" class="content-copy">
            <slot name="content-copy" @slotchange=${this._handleSlotChange}></slot>
          </div>
          <div part="content-footer" class="content-footer">
            ${this._renderOptionalSlot("content-divider",this._contentDividerSlotEmpty)}
            ${this._renderOptionalSlot("content-footnote",this._contentFootnoteSlotEmpty)}
            <div part="content-tagbar" class="content-tagbar">
              <slot name="content-tagbar" @slotchange=${this._handleSlotChange}></slot>
            </div>
          </div>
        </reimagine-layout-column>
      </reimagine-layout>
    `;return this.baseContent?r` <div class=${t} part=${t}>${e}</div> `:r`
      <reimagine-container class=${t} part=${t}>
        ${e}
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var B,G,z;j.styles=[...(B=j,G=j,z="styles",D(C(B),z,G)||[]),k],x([o({slot:"related-divider"})],j.prototype,"_relatedDividerSlot",2),x([o({slot:"content-divider"})],j.prototype,"_contentDividerSlot",2),x([o({slot:"content-footnote"})],j.prototype,"_contentFootnoteSlot",2),x([o({slot:"related-resource-eyebrow"})],j.prototype,"_relatedResourceEyebrowSlot",2),x([o({slot:"related-resource-media"})],j.prototype,"_relatedResourceMediaSlot",2),x([o({slot:"related-resource-caption"})],j.prototype,"_relatedResourceCaptionSlot",2),x([o({slot:"related-resource-link"})],j.prototype,"_relatedResourceLinkSlot",2),x([o({slot:"related-solution-eyebrow"})],j.prototype,"_relatedSolutionEyebrowSlot",2),x([o({slot:"related-solution-badge"})],j.prototype,"_relatedSolutionBadgeSlot",2),x([o({slot:"related-solution-title"})],j.prototype,"_relatedSolutionTitleSlot",2),x([o({slot:"related-solution-description"})],j.prototype,"_relatedSolutionDescriptionSlot",2),x([o({slot:"related-solution-link"})],j.prototype,"_relatedSolutionLinkSlot",2),x([l()],j.prototype,"_relatedDividerSlotEmpty",2),x([l()],j.prototype,"_contentDividerSlotEmpty",2),x([l()],j.prototype,"_contentFootnoteSlotEmpty",2),x([l()],j.prototype,"_relatedResourceEnabled",2),x([l()],j.prototype,"_relatedResourceMediaSlotEmpty",2),x([l()],j.prototype,"_relatedResourceCaptionSlotEmpty",2),x([l()],j.prototype,"_relatedResourceLinkSlotEmpty",2),x([l()],j.prototype,"_relatedSolutionEnabled",2),x([l()],j.prototype,"_relatedSolutionEyebrowSlotEmpty",2),x([l()],j.prototype,"_relatedSolutionBadgeSlotEmpty",2),x([l()],j.prototype,"_relatedSolutionTitleSlotEmpty",2),x([l()],j.prototype,"_relatedSolutionDescriptionSlotEmpty",2),x([l()],j.prototype,"_relatedSolutionLinkSlotEmpty",2),j=x([c(L)],j);export{j as EditorialArticleSummary,L as name};
