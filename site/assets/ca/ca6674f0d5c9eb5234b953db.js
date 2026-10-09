import{r as t,i as e,c as a,e as n,f as r,b as o}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i as d,s as i,q as s,d as c}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{c as l,l as p,T as b,S as m,k as _}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{M as h,i as f,j as g,B as y}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{n as u}from"/__mirror/assets/bf0b3498e45fc20534cec8b1";import{name as v}from"/__mirror/assets/1744c47504083b26d862e98f";import{name as S}from"/__mirror/assets/ea6784fd34f0ec31a8e3ea36";import{v as $,b as x}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{c as E}from"/__mirror/assets/a0679f491075e7b16b00f1b4";import{SurfaceElement as k}from"/__mirror/assets/e09cf4eae8f90fbcbeb198a9";const j="column",w="0",B="auto",A="initial",z="initial",O="initial",T="initial",C="initial",P="initial",M="var(--ds-app-space-micro-xs)",H="var(--ds-app-space-micro-xs)",U="var(--ds-app-space-micro-xs)",q="0",D="1",W="var(--ds-app-color-base-default-fg-highlight)",F="var(--ds-app-space-micro-l)",G="flex",I="initial",J="initial",K="column",L="1",N="var(--ds-app-space-surface-comfortable)",Q="var(--ds-app-space-surface-comfortable)",R="var(--ds-app-space-surface-comfortable)",V="var(--ds-app-space-surface-comfortable)",X="0",Y="0",Z="0",tt="var(--ds-app-space-micro-3xl)",et="flex",at="var(--ds-app-space-micro-s)",nt="column",rt=e`
  :host {
    display: var(--ds-card-banner-display, ${t("flex")});
    gap: var(--ds-card-banner-gap, ${t(w)});
    height: var(--ds-card-banner-height, ${t(B)});
    flex-direction: var(
      --ds-card-banner-flex-direction,
      ${t(j)}
    );
    justify-content: var(
      --ds-card-banner-justify-content,
      ${t(A)}
    );
    margin-block-start: var(
      --ds-card-banner-margin-block-start,
      ${t(z)}
    );
    margin-block-end: var(
      --ds-card-banner-margin-block-end,
      ${t(O)}
    );
    margin-inline-start: var(
      --ds-card-banner-margin-inline-start,
      ${t(T)}
    );
    margin-inline-end: var(
      --ds-card-banner-margin-inline-end,
      ${t(C)}
    );
    max-width: var(--ds-card-banner-max-width, ${t(P)});

    --ds-media-asset-border-start-start-radius: var(--ds-app-radii-m);
    --ds-media-asset-border-start-end-radius: var(--ds-app-radii-m);
    --ds-media-asset-border-end-end-radius: var(--ds-app-radii-m);
    --ds-media-asset-border-end-start-radius: var(--ds-app-radii-m);
    --ds-surface-border-radius: var(--ds-app-radii-l) !important;
    --ds-media-width: 100%;
    --ds-media-height: 100%;
    --ds-badge-box-shadow: none;
    --ds-media-asset-width: 100%;
    --ds-media-asset-height: auto;
  }

  .card-banner__media {
    /* Padding for the top media section */
    padding-inline-start: var(
      --ds-card-banner-media-padding-inline-start,
      ${t(M)}
    );
    padding-inline-end: var(
      --ds-card-banner-media-padding-inline-end,
      ${t(H)}
    );
    padding-block-start: var(
      --ds-card-banner-media-padding-block-start,
      ${t(U)}
    );
    padding-block-end: var(
      --ds-card-banner-media-padding-block-end,
      ${t(q)}
    );
    flex: var(--ds-card-banner-top-flex, ${t(D)});
    display: flex;
  }

  .card-banner__content-header {
    /* Styles for the content header text section */
    font-size: var(--ds-card-banner-label-font-size, ${t(l.fontSize)});
    line-height: var(
      --ds-card-banner-label-line-height,
      ${t(l.lineHeight)}
    );
    color: var(--ds-banner-label-color, ${t(W)});
    font-weight: var(
      --ds-card-banner-label-font-weight,
      ${t(l.fontWeight)}
    );
    padding-block-end: var(
      --ds-card-banner-label-padding-block-end,
      ${t(F)}
    );
  }

  ::slotted([slot='card-banner__media']) {
    height: auto;
  }

  :host([theme='dark']) .card-banner__content-header {
    --ds-banner-label-color: var(--ds-color-sky-blue-50);
  }

  .card-banner__content {
    /* Styles for the content section */
    display: var(
      --ds-card-banner-content-display,
      ${t(G)}
    );
    gap: var(--ds-card-banner-content-gap, ${t(I)});
    justify-content: var(
      --ds-card-banner-content-justify-content,
      ${t(J)}
    );
    flex-direction: var(
      --ds-card-banner-content-flex-direction,
      ${t(K)}
    );
    padding-inline-start: var(
      --ds-card-banner-content-padding-inline-start,
      ${t(N)}
    );
    padding-inline-end: var(
      --ds-card-banner-content-padding-inline-end,
      ${t(Q)}
    );
    padding-block-start: var(
      --ds-card-banner-content-padding-block-start,
      ${t(R)}
    );
    padding-block-end: var(
      --ds-card-banner-content-padding-block-end,
      ${t(V)}
    );
    flex: var(--ds-card-banner-content-flex, ${t(L)});
  }

  .card-banner__content-body {
    /* Styles for the content body textblock section */
    margin-inline-start: var(
      --ds-card-banner-content-body-margin-inline-start,
      ${t(X)}
    );
    margin-inline-end: var(
      --ds-card-banner-content-body-margin-inline-end,
      ${t(Y)}
    );
    margin-block-start: var(
      --ds-card-banner-content-body-margin-block-start,
      ${t(Z)}
    );
    margin-block-end: var(
      --ds-card-banner-content-body-margin-block-end,
      ${t(tt)}
    );
  }

  .card-banner__content-footer {
    /* Styles for the content footer section */
    display: var(
      --ds-card-banner-content-footer-display,
      ${t(et)}
    );
    gap: var(--ds-card-banner-content-footer-gap, ${t(at)});
    flex-direction: var(
      --ds-card-banner-content-footer-flex-direction,
      ${t(nt)}
    );
  }

  :host([layout='stacked']) {
    --ds-card-banner-flex-direction: column;
    --ds-card-banner-justify-content: initial;
    --ds-card-banner-media-padding-inline-start: var(--ds-app-space-micro-xs);
    --ds-card-banner-media-padding-block-end: 0;
    --ds-card-banner-max-width: 20.5rem;
  }
`,ot=e`
  @media (min-width: ${t($.md)}) {
    :host {
      --ds-card-banner-display: flex;
      // --ds-card-banner-gap: var(--ds-app-space-micro-l);
      --ds-card-banner-justify-content: space-between;
      --ds-card-banner-flex-direction: row-reverse;
      --ds-card-banner-media-padding-inline-start: 0;
      --ds-card-banner-media-padding-block-end: var(--ds-app-space-micro-xs);
    }

    .card-banner__content-header {
      --ds-card-banner-label-font-size: ${t(p.fontSize)};
      --ds-card-banner-label-line-height: ${t(p.lineHeight)};
      --ds-card-banner-label-padding-block-end: 0;
    }

    .card-banner__content {
      --ds-card-banner-content-justify-content: space-between;
      gap: var(--ds-card-banner-content-gap, var(--ds-app-space-micro-l));
    }

    .card-banner__content-body {
      --ds-card-banner-content-body-margin-block-end: 0;
    }

    .card-banner__content-header,
    .card-banner__content-body,
    .card-banner__content-footer {
      padding-inline-end: var(--ds-app-space-surface-comfortable);
    }
  }

  @media (max-width: ${t(x($.sm))}) {
    :host {
      --ds-button-group-link-justify-content: start;
    }
  }
`;var dt=Object.defineProperty,it=Object.getOwnPropertyDescriptor,st=(t,e,a,n)=>{for(var r,o=n>1?void 0:n?it(e,a):e,d=t.length-1;d>=0;d--)(r=t[d])&&(o=(n?r(e,a,o):r(o))||o);return n&&o&&dt(e,a,o),o};const ct="reimagine-card-banner";let lt=class extends k{constructor(){super(...arguments),this._firstSlotEmpty=!0,this._mediaSlotEmpty=!0,this._headerSlotEmpty=!0,this._bodySlotEmpty=!0,this._footerTopSlotEmpty=!0,this._footerBottomSlotEmpty=!0,this._lastSlotEmpty=!0}_handleSlotChange(t){this._firstSlotEmpty=0===this._firstSlot.length,this._mediaSlotEmpty=0===this._mediaSlot.length,this._headerSlotEmpty=0===this._topSlot.length,this._bodySlotEmpty=0===this._middleSlot.length,this._footerTopSlotEmpty=0===this._footerTopSlot.length,this._footerBottomSlotEmpty=0===this._footerBottomSlot.length,this._lastSlotEmpty=0===this._lastSlot.length;const e=t.target.name;"card-banner__media"===e&&!this._mediaSlotEmpty&&this._updateMediaAttributes(),"card-banner__content-body"===e&&!this._bodySlotEmpty&&this._updateTextBlockAttributes(),"card-banner__content-footer-bottom"===e&&!this._footerBottomSlotEmpty&&this._updateButtonAttributes()}_updateMediaAttributes(){const t=this._mediaSlot.filter(t=>d(t,u));t.length>0&&t.forEach(t=>{t.hasAttribute("aspect-ratio")||t.setAttribute("aspect-ratio","slim"===this.configuration?h.ratio21to9:h.ratio4to3)})}_updateTextBlockAttributes(){const t=this._middleSlot.filter(t=>d(t,v));0!==t.length&&i(t,{configuration:_.default,size:"slim"===this.configuration?b["size-xs"]:b["size-s"]})}_updateButtonAttributes(){const t=this._footerBottomSlot.filter(t=>d(t,S));t.length>0&&t.forEach(t=>{const e=s(t,"reimagine-button");e&&(e.hasAttribute("appearance")||e.setAttribute("appearance",f.buttonPrimary),e.hasAttribute("shape")||e.setAttribute("shape",g.rounded),e.hasAttribute("size")||e.setAttribute("size",y.medium))})}_renderOptionalSlot(t="card-banner__first",e=this._firstSlotEmpty){return o`
      <div part=${t} class=${t} style="${e?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_renderSlot(t){return o`
      <div part="${t}" class="${t}">
        <slot name="${t}" @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}firstUpdated(){super.firstUpdated(),this.surface||(this.surface=m.solidBorder)}render(){return o`
      ${this._renderOptionalSlot("card-banner__first",this._firstSlotEmpty)}
      ${this._renderSlot("card-banner__media")}
      <div class="card-banner__content" part="card-banner__content">
        ${this._renderOptionalSlot("card-banner__content-header",this._headerSlotEmpty)}
        ${this._renderSlot("card-banner__content-body")}
        <div class="card-banner__content-footer" part="card-banner__content-footer">
          ${this._renderOptionalSlot("card-banner__content-footer-top",this._footerTopSlotEmpty)}
          ${this._renderOptionalSlot("card-banner__content-footer-bottom",this._footerBottomSlotEmpty)}
        </div>
      </div>
      ${this._renderOptionalSlot("card-banner__last",this._lastSlotEmpty)}
    `}};lt.styles=[E,rt,ot],st([a({reflect:!0})],lt.prototype,"theme",2),st([a({type:String,reflect:!0})],lt.prototype,"configuration",2),st([a({type:String,reflect:!0})],lt.prototype,"layout",2),st([n({slot:"card-banner__first"})],lt.prototype,"_firstSlot",2),st([n({slot:"card-banner__media"})],lt.prototype,"_mediaSlot",2),st([n({slot:"card-banner__content-header"})],lt.prototype,"_topSlot",2),st([n({slot:"card-banner__content-body"})],lt.prototype,"_middleSlot",2),st([n({slot:"card-banner__content-footer-top"})],lt.prototype,"_footerTopSlot",2),st([n({slot:"card-banner__content-footer-bottom"})],lt.prototype,"_footerBottomSlot",2),st([n({slot:"card-banner__last"})],lt.prototype,"_lastSlot",2),st([r()],lt.prototype,"_firstSlotEmpty",2),st([r()],lt.prototype,"_mediaSlotEmpty",2),st([r()],lt.prototype,"_headerSlotEmpty",2),st([r()],lt.prototype,"_bodySlotEmpty",2),st([r()],lt.prototype,"_footerTopSlotEmpty",2),st([r()],lt.prototype,"_footerBottomSlotEmpty",2),st([r()],lt.prototype,"_lastSlotEmpty",2),lt=st([c(ct)],lt);export{lt as CardBanner,ct as name};
