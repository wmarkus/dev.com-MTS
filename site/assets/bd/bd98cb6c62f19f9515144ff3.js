import{r as t,i as e,c as o,e as a,f as i,b as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i as s,a as d,d as n}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{T as c,i as l,j as m,B as p,M as u}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{name as h}from"/__mirror/assets/ea6784fd34f0ec31a8e3ea36";import{n as f}from"/__mirror/assets/5d2e1bf3d87581457a2b76db";import{v as _}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{c as b}from"/__mirror/assets/a0679f491075e7b16b00f1b4";import{S as y,k as S,T as g,y as v,J as $}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{SurfaceElement as x}from"/__mirror/assets/e09cf4eae8f90fbcbeb198a9";import{name as E}from"/__mirror/assets/1744c47504083b26d862e98f";import{n as k}from"/__mirror/assets/bf0b3498e45fc20534cec8b1";import{name as A}from"/__mirror/assets/8257e2a086fb91e13056fdae";const j="column",B="0",T="initial",w="100%",C="var(--ds-app-space-micro-xs, 0.5rem)",O="var(--ds-app-space-micro-xs, 0.5rem)",z="var(--ds-app-space-micro-xs, 0.5rem)",D="var(--ds-app-space-micro-xs, 0.5rem)",P="1",M="flex",G="var(--ds-app-space-micro-2xl, 3rem)",L="space-between",R="column",J="1",q="var(--ds-app-space-surface-comfortable, 1.5rem)",F="var(--ds-app-space-surface-comfortable, 1.5rem)",H="var(--ds-app-space-surface-comfortable, 1.5rem)",I="var(--ds-app-space-surface-comfortable, 1.5rem)",K="flex",N="var(--ds-app-space-micro-s, 0.75rem)",Q="column",U=e`
  :host {
    display: var(--ds-card-multiaction-display, ${t("flex")});
    gap: var(--ds-card-multiaction-gap, ${t(B)});
    flex-direction: var(
      --ds-card-multiaction-flex-direction,
      ${t(j)}
    );
    justify-content: var(
      --ds-card-multiaction-justify-content,
      ${t(T)}
    );
    height: var(--ds-card-multiaction-height, ${t(w)});

    --ds-media-asset-border-start-start-radius: var(--ds-app-radii-m, 1rem);
    --ds-media-asset-border-start-end-radius: var(--ds-app-radii-m, 1rem);
    --ds-media-asset-border-end-end-radius: var(--ds-app-radii-m, 1rem);
    --ds-media-asset-border-end-start-radius: var(--ds-app-radii-m, 1rem);
    --ds-surface-border-radius: var(--ds-app-radii-l, 1.5rem) !important;
    --ds-media-width: 100%;
    --ds-media-asset-width: 100%;
    --ds-card-multiaction-flex-direction: column;
    --ds-button-group-display: flex;
    --ds-button-group-flex-direction: column;
    --ds-badge-box-shadow: none;
  }

  .card-multiaction__media {
    /* Padding for the top media section */
    padding-inline-start: var(
      --ds-card-multiaction-media-padding-inline-start,
      ${t(C)}
    );
    padding-inline-end: var(
      --ds-card-multiaction-media-padding-inline-end,
      ${t(O)}
    );
    padding-block-start: var(
      --ds-card-multiaction-media-padding-block-start,
      ${t(z)}
    );
    padding-block-end: var(
      --ds-card-multiaction-media-padding-block-end,
      ${t(D)}
    );
    flex: var(--ds-card-multiaction-top-flex, ${t(P)});
  }

  .card-multiaction__content {
    /* Styles for the content section */
    display: var(
      --ds-card-multiaction-content-display,
      ${t(M)}
    );
    justify-content: var(
      --ds-card-multiaction-content-justify-content,
      ${t(L)}
    );
    flex-direction: var(
      --ds-card-multiaction-content-flex-direction,
      ${t(R)}
    );
    padding-inline-start: var(
      --ds-card-multiaction-content-padding-inline-start,
      ${t(q)}
    );
    padding-inline-end: var(
      --ds-card-multiaction-content-padding-inline-end,
      ${t(F)}
    );
    padding-block-start: var(
      --ds-card-multiaction-content-padding-block-start,
      ${t(H)}
    );
    padding-block-end: var(
      --ds-card-multiaction-content-padding-block-end,
      ${t(I)}
    );
    flex: var(--ds-card-multiaction-content-flex, ${t(J)});
    gap: var(--ds-card-multiaction-content-gap, ${t(G)});
  }

  .card-multiaction__content-footer {
    /* Styles for the content footer section */
    display: var(
      --ds-card-multiaction-content-footer-display,
      ${t(K)}
    );
    gap: var(
      --ds-card-multiaction-content-footer-gap,
      ${t(N)}
    );
    flex-direction: var(
      --ds-card-multiaction-content-footer-flex-direction,
      ${t(Q)}
    );
  }
`,V=e`
  @media (min-width: ${t(_.md)}) {
    :host {
      --ds-button-group-display: inline-flex;
      --ds-button-group-flex-direction: row;
    }
  }
`,W={solidBorder:y.solidBorder,glass:y.glass};var X=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,Z=(t,e,o,a)=>{for(var i,r=a>1?void 0:a?Y(e,o):e,s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a?i(e,o,r):i(r))||r);return a&&r&&X(e,o,r),r};const tt="reimagine-card-multiaction";let et=class extends x{constructor(){super(),this._firstSlotEmpty=!0,this._bodySlotEmpty=!0,this._footerTopSlotEmpty=!0,this._footerBottomSlotEmpty=!0,this._mediaSlotEmpty=!0,this._lastSlotEmpty=!0,this.surface=W.solidBorder,this.themeLightSurface=W.solidBorder,this.themeDarkSurface=W.glass,this.theme===c.dark?this.surface=this.themeDarkSurface:this.surface=this.themeLightSurface;const t=this.closest("html"),e=this.closest("body");this.theme!==c.light&&(t&&this.isDarkTheme(t)||e&&this.isDarkTheme(e))&&(this.surface=W.glass)}updated(t){super.updated(t),t.has("theme")&&this._updateSurface()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}_updateSurface(){this.theme===c.dark&&(this.surface=this.themeDarkSurface)}_handleSlotChange(t){this._firstSlotEmpty=0===this._firstSlot.length,this._bodySlotEmpty=0===this._bodySlot.length,this._footerTopSlotEmpty=0===this._footerTopSlot.length,this._footerBottomSlotEmpty=0===this._footerBottomSlot.length,this._mediaSlotEmpty=0===this._mediaSlot.length,this._lastSlotEmpty=0===this._lastSlot.length;const e=t.target.name;"card-multiaction__content-body"===e&&!this._bodySlotEmpty&&this._updateTextBlockAttributes(),"card-multiaction__content-footer-top"===e&&!this._footerTopSlotEmpty&&this._updateRelatedProductsAttributes(),"card-multiaction__content-footer-bottom"===e&&!this._footerBottomSlotEmpty&&this._updateButtonGroupAttributes(),"card-multiaction__media"===e&&!this._mediaSlotEmpty&&this._updateMediaAttributes()}_updateTextBlockAttributes(){const t=this._bodySlot.filter(t=>s(t,E));t.length>0&&t.forEach(t=>{t.hasAttribute("configuration")||t.setAttribute("configuration",S.default),t.hasAttribute("size")||t.setAttribute("size",g["size-2xs"])})}_updateRelatedProductsAttributes(){const t=this._footerTopSlot.filter(t=>s(t,A));t.length>0&&t.forEach(t=>{t.hasAttribute("configuration")||t.setAttribute("configuration",v.horizontal),t.hasAttribute("density")||t.setAttribute("density",$.default)})}_updateButtonGroupAttributes(){const t=this._footerBottomSlot.filter(t=>s(t,h));t.length>0&&t.forEach(t=>{d(t,f).forEach(t=>{t&&(t.hasAttribute("appearance")||t.setAttribute("appearance",l.buttonPrimary),t.hasAttribute("shape")||t.setAttribute("shape",m.rounded),t.hasAttribute("size")||t.setAttribute("size",p.medium))})})}_updateMediaAttributes(){const t=this._mediaSlot.filter(t=>s(t,k));t.length>0&&t.forEach(t=>{t.hasAttribute("aspect-ratio")||t.setAttribute("aspect-ratio",u.ratio21to9)})}_renderOptionalSlot(t="card-multiaction__first",e=this._firstSlotEmpty){return r`
      <div part=${t} class=${t} style="${e?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_renderSlot(t){return r`
      <div part="${t}" class="${t}">
        <slot name="${t}" @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}render(){return r`
      ${this._renderOptionalSlot("card-multiaction__first",this._firstSlotEmpty)}
      <div class="card-multiaction__content" part="card-multiaction__content">
        ${this._renderSlot("card-multiaction__content-body")}
        <div class="card-multiaction__content-footer" part="card-multiaction__content-footer">
          ${this._renderOptionalSlot("card-multiaction__content-footer-top",this._footerTopSlotEmpty)}
          ${this._renderOptionalSlot("card-multiaction__content-footer-bottom",this._footerBottomSlotEmpty)}
        </div>
      </div>
      ${this._renderSlot("card-multiaction__media")}
      ${this._renderOptionalSlot("card-multiaction__last",this._lastSlotEmpty)}
    `}};et.styles=[b,U,V],Z([o({reflect:!0})],et.prototype,"theme",2),Z([a({slot:"card-multiaction__first"})],et.prototype,"_firstSlot",2),Z([a({slot:"card-multiaction__content-body"})],et.prototype,"_bodySlot",2),Z([a({slot:"card-multiaction__content-footer-top"})],et.prototype,"_footerTopSlot",2),Z([a({slot:"card-multiaction__content-footer-bottom"})],et.prototype,"_footerBottomSlot",2),Z([a({slot:"card-multiaction__media"})],et.prototype,"_mediaSlot",2),Z([a({slot:"card-multiaction__last"})],et.prototype,"_lastSlot",2),Z([i()],et.prototype,"_firstSlotEmpty",2),Z([i()],et.prototype,"_bodySlotEmpty",2),Z([i()],et.prototype,"_footerTopSlotEmpty",2),Z([i()],et.prototype,"_footerBottomSlotEmpty",2),Z([i()],et.prototype,"_mediaSlotEmpty",2),Z([i()],et.prototype,"_lastSlotEmpty",2),et=Z([n(tt)],et);export{et as CardMultiaction,tt as name};
