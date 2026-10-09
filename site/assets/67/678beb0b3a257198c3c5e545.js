import{r as t,i as e,c as a,e as r,f as o,b as s}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i,s as d,q as n,d as c}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{T as l,M as f,i as p,j as u,B as h}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{c as m,l as _,S as g,U as y,p as b}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{n as S}from"/__mirror/assets/bf0b3498e45fc20534cec8b1";import{name as v}from"/__mirror/assets/ea6784fd34f0ec31a8e3ea36";import{v as $}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{c as E}from"/__mirror/assets/a0679f491075e7b16b00f1b4";import{SurfaceElement as x}from"/__mirror/assets/e09cf4eae8f90fbcbeb198a9";const k="column",j="0",z="initial",w="100%",A="var(--ds-app-space-micro-xs)",B="var(--ds-app-space-micro-xs)",C="var(--ds-app-space-micro-xs)",O="0",T="1",D="block",P="var(--ds-app-color-base-default-fg-highlight)",L="var(--ds-app-space-micro-xs)",M="flex",H="space-between",q="column",F="1",U="var(--ds-app-space-surface-comfortable)",W="var(--ds-app-space-surface-comfortable)",G="var(--ds-app-space-surface-comfortable)",I="var(--ds-app-space-surface-comfortable)",J="0",K="0",N="0",Q="initial",R="0",V="flex",X="var(--ds-app-space-micro-s)",Y="column",Z="var(--ds-app-space-micro-2xl)",tt="flex-start",et=e`
  :host {
    display: var(--ds-card-feature-display, ${t("flex")});
    gap: var(--ds-card-feature-gap, ${t(j)});
    flex-direction: var(
      --ds-card-feature-flex-direction,
      ${t(k)}
    );
    justify-content: var(
      --ds-card-feature-justify-content,
      ${t(z)}
    );
    height: var(--ds-card-feature-height, ${t(w)});

    --ds-media-asset-border-start-start-radius: var(--ds-app-radii-m);
    --ds-media-asset-border-start-end-radius: var(--ds-app-radii-m);
    --ds-media-asset-border-end-end-radius: var(--ds-app-radii-m);
    --ds-media-asset-border-end-start-radius: var(--ds-app-radii-m);
    --ds-surface-border-radius: var(--ds-app-radii-l) !important;
    --ds-media-width: 100%;
    --ds-media-height: 100%;
    --ds-card-feature-flex-direction: column;
    --ds-badge-box-shadow: none;
    --ds-media-asset-width: 100%;
    --ds-media-asset-height: auto;
  }

  ::slotted(reimagine-tag) {
    margin-bottom: var(--ds-app-space-micro-xs, 0.5rem);
  }

  .card-feature__media {
    /* Padding for the top media section */
    padding-inline-start: var(
      --ds-card-feature-media-padding-inline-start,
      ${t(A)}
    );
    padding-inline-end: var(
      --ds-card-feature-media-padding-inline-end,
      ${t(B)}
    );
    padding-block-start: var(
      --ds-card-feature-media-padding-block-start,
      ${t(C)}
    );
    padding-block-end: var(
      --ds-card-feature-media-padding-block-end,
      ${t(O)}
    );
    flex: var(--ds-card-feature-top-flex, ${t(T)});
  }

  .card-feature__content {
    /* Styles for the content section */
    display: var(
      --ds-card-feature-content-display,
      ${t(M)}
    );
    justify-content: var(
      --ds-card-feature-content-justify-content,
      ${t(H)}
    );
    flex-direction: var(
      --ds-card-feature-content-flex-direction,
      ${t(q)}
    );
    padding-inline-start: var(
      --ds-card-feature-content-padding-inline-start,
      ${t(U)}
    );
    padding-inline-end: var(
      --ds-card-feature-content-padding-inline-end,
      ${t(W)}
    );
    padding-block-start: var(
      --ds-card-feature-content-padding-block-start,
      ${t(G)}
    );
    padding-block-end: var(
      --ds-card-feature-content-padding-block-end,
      ${t(I)}
    );
    flex: var(--ds-card-feature-content-flex, ${t(F)});
  }

  .card-feature__content-header {
    /* Styles for the content header text section */
    font-size: var(--ds-card-feature-label-font-size, ${t(m.fontSize)});
    line-height: var(
      --ds-card-feature-label-line-height,
      ${t(m.lineHeight)}
    );
    color: var(--ds-feature-label-color, ${t(P)});
    font-weight: var(
      --ds-card-feature-label-font-weight,
      ${t(m.fontWeight)}
    );
    padding-block-end: var(
      --ds-card-feature-label-padding-block-end,
      ${t(L)}
    );
  }

  :host(:not([configuration='vertical'])) .card-feature__content-header {
    display: var(--ds-card-feature-label-display, ${t(D)});
  }

  :host(:not([configuration='vertical'])) .card-feature__content-body {
    flex-grow: 1;
  }

  :host(:not([configuration='vertical'])) .card-feature__media {
    flex: var(
      --ds-card-feature-horizontal-top-flex,
      var(--ds-card-feature-top-flex, ${t(T)})
    );
  }

  :host([theme='dark']) .card-feature__content-header {
    --ds-feature-label-color: var(--ds-color-sky-blue-50);
  }

  .card-feature__content-body {
    /* Styles for the content body textblock section */
    margin-inline-start: var(
      --ds-card-feature-content-body-margin-inline-start,
      ${t(J)}
    );
    margin-inline-end: var(
      --ds-card-feature-content-body-margin-inline-end,
      ${t(K)}
    );
    margin-block-start: var(
      --ds-card-feature-content-body-margin-block-start,
      ${t(N)}
    );
    margin-block-end: var(
      --ds-card-feature-content-body-margin-block-end,
      ${t(Q)}
    );
  }

  :host([configuration='vertical']) .card-feature__content-body {
    margin-block-end: var(
      --ds-card-feature-content-body-margin-block-end-vertical,
      ${t(R)}
    );
  }

  .card-feature__content-footer {
    /* Styles for the content footer section */
    display: var(
      --ds-card-feature-content-footer-display,
      ${t(V)}
    );
    gap: var(--ds-card-feature-content-footer-gap, ${t(X)});
    flex-direction: var(
      --ds-card-feature-content-footer-flex-direction,
      ${t(Y)}
    );
    margin-block-start: var(
      --ds-card-feature-content-footer-margin-block-start,
      ${t(Z)}
    );
  }

  :host([alignment='right']) .card-feature__content-footer-bottom {
    align-items: var(
      --ds-card-feature-content-footer-bottom-align-items,
      ${t(tt)}
    );
  }
`,at=e`
  :host {
    --ds-card-feature-flex-direction: column;
  }
  @media (min-width: ${t($.md)}) {
    :host([configuration='horizontal']) {
      --ds-card-feature-display: flex;
      --ds-card-feature-justify-content: space-between;
      --ds-card-feature-flex-direction: row-reverse;
      --ds-card-feature-media-padding-inline-start: 0;
      --ds-card-feature-media-padding-block-end: var(--ds-app-space-micro-xs);
    }

    :host([configuration='horizontal']) .card-feature__content-header {
      --ds-card-feature-label-font-size: ${t(_.fontSize)};
      --ds-card-feature-label-line-height: ${t(_.lineHeight)};
    }

    :host([configuration='horizontal']) .card-feature__content {
      --ds-card-feature-content-justify-content: space-between;
    }

    :host([configuration='horizontal']) .card-feature__content-header,
    :host([configuration='horizontal']) .card-feature__content-body,
    :host([configuration='horizontal']) .card-feature__content-footer {
      padding-inline-end: var(--ds-app-space-surface-comfortable);
    }
  }
`;var rt=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,st=(t,e,a,r)=>{for(var o,s=r>1?void 0:r?ot(e,a):e,i=t.length-1;i>=0;i--)(o=t[i])&&(s=(r?o(e,a,s):o(s))||s);return r&&s&&rt(e,a,s),s};const it="reimagine-card-feature";let dt=class extends x{constructor(){super(),this._firstSlotEmpty=!0,this._tagSlotEmpty=!0,this._mediaSlotEmpty=!0,this._headerSlotEmpty=!0,this._footerTopSlotEmpty=!0,this._footerBottomSlotEmpty=!0,this._footerContentEmpty=!0,this._lastSlotEmpty=!0,this.surface=g.solidBorder,this.themeLightSurface=g.solidBorder,this.themeDarkSurface=g.glass}updated(t){super.updated(t),t.has("theme")&&this._updateSurface()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}_updateSurface(){this.theme===l.light&&this.themeLightSurface?this.surface=this.themeLightSurface:this.theme===l.dark&&this.themeDarkSurface&&(this.surface=this.themeDarkSurface)}_handleSlotChange(t){this._firstSlotEmpty=0===this._firstSlot.length,this._mediaSlotEmpty=0===this._mediaSlot.length,this._headerSlotEmpty=0===this._topSlot.length,this._footerTopSlotEmpty=0===this._footerTopSlot.length,this._footerBottomSlotEmpty=0===this._footerBottomSlot.length,this._lastSlotEmpty=0===this._lastSlot.length,this._tagSlotEmpty=0===this._tagSlot.length,this._footerContentEmpty=this._footerTopSlotEmpty&&this._footerBottomSlotEmpty;const e=t.target.name;"card-feature__media"===e&&!this._mediaSlotEmpty&&this._updateMediaAttributes(),"card-feature__content-footer-bottom"===e&&!this._footerBottomSlotEmpty&&this._updateButtonAttributes(),"tag"===e&&!this._tagSlotEmpty&&this._updateTagAttributes()}_updateMediaAttributes(){const t=this._mediaSlot.filter(t=>i(t,S));t.length>0&&t.forEach(t=>{t.hasAttribute("aspect-ratio")||t.setAttribute("aspect-ratio","vertical"===this.configuration?f.ratio21to9:"initial")})}_updateTagAttributes(){const t=this._tagSlot.filter(t=>i(t,"reimagine-tag"));t.length>0&&t.forEach(t=>{d(t,{size:b.small,appearance:y.new})})}_updateButtonAttributes(){const t=this._footerBottomSlot.filter(t=>i(t,v));t.length>0&&t.forEach(t=>{const e=n(t,"reimagine-button");e&&(e.hasAttribute("appearance")||e.setAttribute("appearance",p.buttonPrimary),e.hasAttribute("shape")||e.setAttribute("shape",u.rounded),e.hasAttribute("size")||e.setAttribute("size",h.medium))})}_renderOptionalSlot(t="card-feature__first",e=this._firstSlotEmpty){return s`
      <div part=${t} class=${t} style="${e?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_renderSlot(t){return s`
      <div part="${t}" class="${t}">
        <slot name="${t}" @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}render(){return s`
      ${this._renderOptionalSlot("card-feature__first",this._firstSlotEmpty)}
      ${this._renderSlot("card-feature__media")}
      <div class="card-feature__content" part="card-feature__content">
        ${this._renderOptionalSlot("tag",this._tagSlotEmpty)}
        ${this._renderOptionalSlot("card-feature__content-header",this._headerSlotEmpty)}
        ${this._renderSlot("card-feature__content-body")}
        <div
          class="card-feature__content-footer"
          part="card-feature__content-footer"
          style="${this._footerContentEmpty?"display: none;":""}"
        >
          ${this._renderOptionalSlot("card-feature__content-footer-top",this._footerTopSlotEmpty)}
          ${this._renderOptionalSlot("card-feature__content-footer-bottom",this._footerBottomSlotEmpty)}
        </div>
      </div>
      ${this._renderOptionalSlot("card-feature__last",this._lastSlotEmpty)}
    `}};dt.styles=[E,et,at],st([a({reflect:!0})],dt.prototype,"theme",2),st([a({type:String,reflect:!0})],dt.prototype,"configuration",2),st([r({slot:"card-feature__first"})],dt.prototype,"_firstSlot",2),st([r({slot:"tag"})],dt.prototype,"_tagSlot",2),st([r({slot:"card-feature__media"})],dt.prototype,"_mediaSlot",2),st([r({slot:"card-feature__content-header"})],dt.prototype,"_topSlot",2),st([r({slot:"card-feature__content-footer-top"})],dt.prototype,"_footerTopSlot",2),st([r({slot:"card-feature__content-footer-bottom"})],dt.prototype,"_footerBottomSlot",2),st([r({slot:"card-feature__last"})],dt.prototype,"_lastSlot",2),st([o()],dt.prototype,"_firstSlotEmpty",2),st([o()],dt.prototype,"_tagSlotEmpty",2),st([o()],dt.prototype,"_mediaSlotEmpty",2),st([o()],dt.prototype,"_headerSlotEmpty",2),st([o()],dt.prototype,"_footerTopSlotEmpty",2),st([o()],dt.prototype,"_footerBottomSlotEmpty",2),st([o()],dt.prototype,"_footerContentEmpty",2),st([o()],dt.prototype,"_lastSlotEmpty",2),dt=st([c(it)],dt);export{dt as CardFeature,it as name};
