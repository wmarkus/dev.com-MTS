import{r as t,i as o,c as e,e as s,f as r,b as a}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i,q as d,d as n}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{SurfaceElement as c}from"/__mirror/assets/e09cf4eae8f90fbcbeb198a9";import{S as p,T as m}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{c as l}from"/__mirror/assets/a0679f491075e7b16b00f1b4";import{name as y}from"/__mirror/assets/1744c47504083b26d862e98f";import{n as _}from"/__mirror/assets/bf0b3498e45fc20534cec8b1";import{name as u}from"/__mirror/assets/9bce10b1f8f8949b4fd224b8";import{name as h}from"/__mirror/assets/8257e2a086fb91e13056fdae";const f="column",b="flex",g="column",v="var(--ds-app-space-micro-2xl, 3rem)",S="var(--ds-app-space-surface-comfortable, 1.5rem)",E="var(--ds-app-space-surface-comfortable, 1.5rem)",x="var(--ds-app-space-surface-comfortable, 1.5rem)",$="var(--ds-app-space-surface-comfortable, 1.5rem)",A="var(--ds-app-space-micro-xs, 0.5rem)",B="var(--ds-app-space-micro-xs, 0.5rem)",F="var(--ds-app-space-micro-xs, 0.5rem)",T="flex",k="var(--ds-app-space-micro-s, 0.75rem)",j="column",P="var(--ds-app-space-micro-xs, 0.5rem)",O=o`
  :host {
    display: var(--ds-customer-story-display, ${t("flex")});
    flex-direction: var(
      --ds-customer-story-flex-direction,
      ${t(f)}
    );

    --ds-badge-box-shadow: none;
  }

  .customer-story__media {
    padding-inline-start: var(
      --ds-customer-story-media-padding-inline-start,
      ${t(A)}
    );
    padding-inline-end: var(
      --ds-customer-story-media-padding-inline-end,
      ${t(B)}
    );
    padding-block-start: var(
      --ds-customer-story-media-padding-block-start,
      ${t(F)}
    );

    --ds-media-width: 100%;
    --ds-media-height: 100%;
    --ds-media-asset-border-start-start-radius: var(--ds-app-radii-m, 1rem);
    --ds-media-asset-border-start-end-radius: var(--ds-app-radii-m, 1rem);
    --ds-media-asset-border-end-start-radius: var(--ds-app-radii-m, 1rem);
    --ds-media-asset-border-end-end-radius: var(--ds-app-radii-m, 1rem);
  }

  .customer-story__content {
    display: var(
      --ds-customer-story-content-display,
      ${t(b)}
    );
    flex-direction: var(
      --ds-customer-story-content-flex-direction,
      ${t(g)}
    );
    gap: var(--ds-customer-story-content-gap, ${t(v)});
    padding-inline-start: var(
      --ds-customer-story-content-padding-inline-start,
      ${t(S)}
    );
    padding-inline-end: var(
      --ds-customer-story-content-padding-inline-end,
      ${t(E)}
    );
    padding-block-start: var(
      --ds-customer-story-content-padding-block-start,
      ${t(x)}
    );
    padding-block-end: var(
      --ds-customer-story-content-padding-block-end,
      ${t($)}
    );
  }

  .customer-story__content-footer {
    display: var(
      --ds-customer-story-content-footer-display,
      ${t(T)}
    );
    flex-direction: var(
      --ds-customer-story-content-footer-flex-direction,
      ${t(j)}
    );
    gap: var(
      --ds-customer-story-content-footer-gap,
      ${t(k)}
    );
  }

  ::slotted(reimagine-related-products[slot='customer-story__content-footer-top']) {
    --ds-product-badge-only-gap: ${t(P)};
  }
`,w="badge";var C=Object.defineProperty,z=Object.getOwnPropertyDescriptor,D=(t,o,e,s)=>{for(var r,a=s>1?void 0:s?z(o,e):o,i=t.length-1;i>=0;i--)(r=t[i])&&(a=(s?r(o,e,a):r(a))||a);return s&&a&&C(o,e,a),a};const M="reimagine-card-customer-story";let R=class extends c{constructor(){super(),this.configuration=w,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._contentFooterTopEmpty=!0,this._contentFooterBottomEmpty=!0,this._contentBodyEmpty=!0,this._mediaEmpty=!0,this.surface=p.solidBorder,this.themeLightSurface=p.solidBorder,this.themeDarkSurface=p.glass}_updateTextBlockAttributes(){this._contentBodySlot.forEach(t=>{const o=t;i(o,y)&&!o.hasAttribute("size")&&o.setAttribute("size",m["size-2xs"])})}_updateReimagineMediaAttributes(){this._mediaSlot.forEach(t=>{const o=t;i(o,_)&&!o.hasAttribute("aspect-ratio")&&o.setAttribute("aspect-ratio","21-9")})}_updateFooterTopAttributes(){this._contentFooterTopSlot.forEach(t=>{const o=t;i(o,h)&&(o.setAttribute("density","default"),o.setAttribute("configuration","horizontal"),o.setAttribute("variant","badge-only"))})}_updateTopSlotAttributes(){this._mediaSlot.forEach(t=>{const o=t,e=d(o,u),s=d(o,_);if(e&&e.setAttribute("size","m"),s){const t="var(--ds-app-radii-s, 0.5rem)",o=["media","media-asset"],e=["start-start","start-end","end-start","end-end"];s.style.setProperty("--ds-media-max-width","96px"),s.style.setProperty("--ds-media-height","54px"),s.style.setProperty("--ds-media-aspect-ratio","21/9"),s.style.setProperty("--ds-media-border-style","solid"),s.style.setProperty("--ds-media-border-width","1px"),s.style.setProperty("--ds-media-border-color","var(--ds-color-sky-blue-200, #cbe6f4)"),s.style.setProperty("--ds-media-overflow","hidden"),o.forEach(o=>{e.forEach(e=>{const r=`--ds-${o}-border-${e}-radius`;s.style.setProperty(r,t)})})}})}_handleSlotChange(t){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length,this._contentFooterTopEmpty=0===this._contentFooterTopSlot.length,this._contentFooterBottomEmpty=0===this._contentFooterBottomSlot.length,this._contentBodyEmpty=0===this._contentBodySlot.length,this._mediaEmpty=0===this._mediaSlot.length;const o=t.target.getAttribute("name");"customer-story__content-body"===o&&!this._contentBodyEmpty&&this._updateTextBlockAttributes(),"customer-story__media"===o&&!this._mediaEmpty&&this._updateReimagineMediaAttributes(),"customer-story__content-footer-top"===o&&!this._contentFooterTopEmpty&&this._updateFooterTopAttributes()}_renderOptionalSlot(t="customer-story__first",o=this._firstSlotEmpty){return a`
      <div part=${t} class=${t} style="${o?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}updated(){this._mediaEmpty||this._updateTopSlotAttributes()}render(){return a`
      ${this._renderOptionalSlot("customer-story__first",this._firstSlotEmpty)}
      <div part="customer-story__media" class="customer-story__media">
        <slot name="customer-story__media" @slotchange=${this._handleSlotChange}></slot>
      </div>
      <div part="customer-story__content" class="customer-story__content">
        <div part="customer-story__content-body" class="customer-story__content-body">
          <slot name="customer-story__content-body" @slotchange=${this._handleSlotChange}></slot>
        </div>
        <div part="customer-story__content-footer" class="customer-story__content-footer">
          ${this._renderOptionalSlot("customer-story__content-footer-top",this._contentFooterTopEmpty)}
          ${this._renderOptionalSlot("customer-story__content-footer-bottom",this._contentFooterBottomEmpty)}
        </div>
      </div>
      ${this._renderOptionalSlot("customer-story__last",this._lastSlotEmpty)}
    `}};R.styles=[l,O],D([e({reflect:!0})],R.prototype,"theme",2),D([e({reflect:!0})],R.prototype,"configuration",2),D([s({slot:"customer-story__first"})],R.prototype,"_firstSlot",2),D([s({slot:"customer-story__last"})],R.prototype,"_lastSlot",2),D([s({slot:"customer-story__content-footer-top"})],R.prototype,"_contentFooterTopSlot",2),D([s({slot:"customer-story__content-footer-bottom"})],R.prototype,"_contentFooterBottomSlot",2),D([s({slot:"customer-story__content-body"})],R.prototype,"_contentBodySlot",2),D([s({slot:"customer-story__media"})],R.prototype,"_mediaSlot",2),D([r()],R.prototype,"_firstSlotEmpty",2),D([r()],R.prototype,"_lastSlotEmpty",2),D([r()],R.prototype,"_contentFooterTopEmpty",2),D([r()],R.prototype,"_contentFooterBottomEmpty",2),D([r()],R.prototype,"_contentBodyEmpty",2),D([r()],R.prototype,"_mediaEmpty",2),R=D([n(M)],R);export{R as CardCustomerStory,M as name};
