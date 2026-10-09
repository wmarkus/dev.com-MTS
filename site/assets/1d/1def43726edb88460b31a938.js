import{r as t,i as e,c as a,e as s,f as r,b as o}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i,d}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{T as n,M as c}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{n as l}from"/__mirror/assets/bf0b3498e45fc20534cec8b1";import{c as p}from"/__mirror/assets/a0679f491075e7b16b00f1b4";import{S as m,k as h,T as u}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{SurfaceElement as _}from"/__mirror/assets/e09cf4eae8f90fbcbeb198a9";import{name as f}from"/__mirror/assets/1744c47504083b26d862e98f";import{name as g}from"/__mirror/assets/9bce10b1f8f8949b4fd224b8";import{B as b}from"/__mirror/assets/4230c2711e37b2e85105da0e";const S="column",y="0",v="initial",q="100%",k="var(--ds-app-space-micro-xs, 0.5rem)",$="var(--ds-app-space-micro-xs, 0.5rem)",x="var(--ds-app-space-micro-xs, 0.5rem)",E="0",j="1",A="var(--ds-app-space-surface-comfortable, 1.5rem)",C="var(--ds-app-space-surface-comfortable, 1.5rem)",B="var(--ds-app-space-surface-comfortable, 1.5rem)",D="var(--ds-app-space-surface-comfortable, 1.5rem)",O=e`
  :host {
    display: var(--ds-card-quote-display, ${t("flex")});
    gap: var(--ds-card-quote-gap, ${t(y)});
    flex-direction: var(
      --ds-card-quote-flex-direction,
      ${t(S)}
    );
    justify-content: var(
      --ds-card-quote-justify-content,
      ${t(v)}
    );
    height: var(--ds-card-quote-height, ${t(q)});

    --ds-media-asset-border-start-start-radius: var(--ds-app-radii-m, 0.5rem);
    --ds-media-asset-border-start-end-radius: var(--ds-app-radii-m, 0.5rem);
    --ds-media-asset-border-end-end-radius: var(--ds-app-radii-m, 0.5rem);
    --ds-media-asset-border-end-start-radius: var(--ds-app-radii-m, 0.5rem);
    --ds-surface-border-radius: var(--ds-app-radii-l, 1.5rem) !important;
    --ds-media-width: 100%;
    --ds-media-asset-width: 100%;
    --ds-card-quote-flex-direction: column;
    --ds-text-block-body-gap: var(--ds-app-space-micro-2xs, 0.25rem);
    --ds-badge-box-shadow: none;
  }

  ::slotted(reimagine-text-block[slot='card-quote__content']) {
    --ds-text-block-gap: var(--ds-app-space-micro-s, 0.75rem);
  }

  .card-quote__media {
    /* Padding for the top media section */
    padding-inline-start: var(
      --ds-card-quote-media-padding-inline-start,
      ${t(k)}
    );
    padding-inline-end: var(
      --ds-card-quote-media-padding-inline-end,
      ${t($)}
    );
    padding-block-start: var(
      --ds-card-quote-media-padding-block-start,
      ${t(x)}
    );
    padding-block-end: var(
      --ds-card-quote-media-padding-block-end,
      ${t(E)}
    );
    flex: var(--ds-card-quote-top-flex, ${t(j)});
  }

  .card-quote__content {
    /* Styles for the content section */
    padding-inline-start: var(
      --ds-card-quote-content-padding-inline-start,
      ${t(A)}
    );
    padding-inline-end: var(
      --ds-card-quote-content-padding-inline-end,
      ${t(C)}
    );
    padding-block-start: var(
      --ds-card-quote-content-padding-block-start,
      ${t(B)}
    );
    padding-block-end: var(
      --ds-card-quote-content-padding-block-end,
      ${t(D)}
    );
  }
`,T={solidBorder:m.solidBorder,glass:m.glass};var z=Object.defineProperty,w=Object.getOwnPropertyDescriptor,M=(t,e,a,s)=>{for(var r,o=s>1?void 0:s?w(e,a):e,i=t.length-1;i>=0;i--)(r=t[i])&&(o=(s?r(e,a,o):r(o))||o);return s&&o&&z(e,a,o),o};const P="reimagine-card-quote";let L=class extends _{constructor(){super(),this._firstSlotEmpty=!0,this._mediaSlotEmpty=!0,this._contentSlotEmpty=!0,this._lastSlotEmpty=!0,this.surface=T.solidBorder,this.themeLightSurface=T.solidBorder,this.themeDarkSurface=T.glass,this.theme===n.dark?this.surface=this.themeDarkSurface:this.surface=this.themeLightSurface;const t=this.closest("html"),e=this.closest("body");this.theme!==n.light&&(t&&this.isDarkTheme(t)||e&&this.isDarkTheme(e))&&(this.surface=T.glass)}updated(t){super.updated(t),t.has("theme")&&this._updateSurface()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}_updateSurface(){this.theme===n.dark&&(this.surface=this.themeDarkSurface)}_handleSlotChange(t){this._firstSlotEmpty=0===this._firstSlot.length,this._mediaSlotEmpty=0===this._mediaSlot.length,this._contentSlotEmpty=0===this._contentSlot.length,this._lastSlotEmpty=0===this._lastSlot.length;const e=t.target.name;"card-quote__media"===e&&!this._mediaSlotEmpty&&this._updateMediaAttributes(),"card-quote__content"===e&&!this._contentSlotEmpty&&this._updateTextBlockAttributes()}_updateMediaAttributes(){const t=this._mediaSlot.filter(t=>i(t,l));t.length>0&&t.forEach(t=>{t.hasAttribute("aspect-ratio")||t.setAttribute("aspect-ratio",c.ratio16to9)})}_updateTextBlockAttributes(){const t=this._contentSlot.filter(t=>i(t,f)),e=this._contentSlot.filter(t=>i(t,g));t.length>0&&t.forEach(t=>{t.hasAttribute("configuration")||t.setAttribute("configuration",h.stacked),t.hasAttribute("size")||t.setAttribute("size",u["size-2xs"])}),e.length>0&&e.forEach(t=>{t.hasAttribute("size")||t.setAttribute("size",b.s)})}_renderOptionalSlot(t="card-quote__first",e=this._firstSlotEmpty){return o`
      <div part=${t} class=${t} style="${e?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_renderSlot(t){return o`
      <div part="${t}" class="${t}">
        <slot name="${t}" @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}render(){return o`
      ${this._renderOptionalSlot("card-quote__first",this._firstSlotEmpty)}
      ${this._renderSlot("card-quote__media")} ${this._renderSlot("card-quote__content")}
      ${this._renderOptionalSlot("card-quote__last",this._lastSlotEmpty)}
    `}};L.styles=[p,O],M([a({reflect:!0})],L.prototype,"theme",2),M([s({slot:"card-quote__first"})],L.prototype,"_firstSlot",2),M([s({slot:"card-quote__media"})],L.prototype,"_mediaSlot",2),M([s({slot:"card-quote__content"})],L.prototype,"_contentSlot",2),M([s({slot:"card-quote__last"})],L.prototype,"_lastSlot",2),M([r()],L.prototype,"_firstSlotEmpty",2),M([r()],L.prototype,"_mediaSlotEmpty",2),M([r()],L.prototype,"_contentSlotEmpty",2),M([r()],L.prototype,"_lastSlotEmpty",2),L=M([d(P)],L);export{L as CardQuote,P as name};
