import{r as t,i as a,c as e,e as s,f as r,b as d}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i,d as o}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{T as n,B as c,i as l,j as p,H as m,M as h}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{v as _}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{n as g,a as f}from"/__mirror/assets/34233ee5ac8acdb3aa831b25";import{n as u}from"/__mirror/assets/b261b011546c5001df09e043";import{n as b}from"/__mirror/assets/5d2e1bf3d87581457a2b76db";import{S}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{c as v}from"/__mirror/assets/a0679f491075e7b16b00f1b4";import{SurfaceElement as y}from"/__mirror/assets/e09cf4eae8f90fbcbeb198a9";const x="column",$="initial",E="320px",w="320px",k="auto",C="var(--ds-app-space-micro-xs, 0.5rem)",j="var(--ds-app-space-micro-xs, 0.5rem)",A="var(--ds-app-space-micro-xs, 0.5rem)",F="1",M="flex",z="column",D="var(--ds-app-space-micro-2xl, 2rem)",H="var(--ds-app-space-surface-comfortable, 1.5rem)",B="var(--ds-app-space-surface-comfortable, 1.5rem)",O="var(--ds-app-space-surface-comfortable, 1.5rem)",T="var(--ds-app-space-surface-comfortable, 1.5rem)",L="space-between",P="1",V="flex",q="column",G="var(--ds-app-space-micro-s, 0.75rem)",I="0.75rem",J="break-word",K="183.5px",N="relative",Q="absolute",R="100%",U="100%",W="10",X="20",Y=a`
  :host {
    display: var(--ds-card-stat-display, ${t("flex")});
    flex-direction: var(--ds-card-stat-flex-direction, ${t(x)});
    justify-content: var(
      --ds-card-stat-justify-content,
      ${t($)}
    );
    min-height: var(--ds-card-stat-min-height, ${t(w)});

    --ds-card-base-overflow: hidden;
    --ds-media-asset-border-start-start-radius: var(--ds-app-radii-m);
    --ds-media-asset-border-start-end-radius: var(--ds-app-radii-m);
    --ds-media-asset-border-end-end-radius: var(--ds-app-radii-m);
    --ds-media-asset-border-end-start-radius: var(--ds-app-radii-m);
    --ds-surface-border-radius: var(--ds-app-radii-l) !important;
    --ds-media-width: 100%;
    --ds-media-display: block;
  }

  :host([configuration='banner']) {
    --ds-media-asset-width: 100%;
    --ds-media-asset-height: 100%;
  }

  :host([configuration='vertical']) {
    max-width: var(--ds-card-stat-max-width, ${t(E)});
    height: var(--ds-card-stat-height, ${t(k)});

    --ds-media-max-height: var(
      --ds-card-stat-media-max-height,
      ${t(K)}
    );
  }

  .card-stat__media {
    padding-inline-start: var(
      --ds-card-stat-media-padding-inline-start,
      ${t(C)}
    );
    padding-inline-end: var(
      --ds-card-stat-media-padding-inline-end,
      ${t(j)}
    );
    padding-block-start: var(
      --ds-card-stat-media-padding-block-start,
      ${t(A)}
    );
    padding-block-end: var(--ds-card-stat-media-padding-block-end, 0);
    flex: var(--ds-card-stat-media-flex, ${t(F)});
  }

  .card-stat__content {
    display: var(
      --ds-card-stat-content-display,
      ${t(M)}
    );
    flex-direction: var(
      --ds-card-stat-content-flex-direction,
      ${t(z)}
    );
    justify-content: var(
      --ds-card-stat-content-justify-content,
      ${t(L)}
    );
    gap: var(--ds-card-stat-content-gap, ${t(D)});
    padding-inline-start: var(
      --ds-card-stat-content-padding-inline-start,
      ${t(H)}
    );
    padding-inline-end: var(
      --ds-card-stat-content-padding-inline-end,
      ${t(B)}
    );
    padding-block-start: var(
      --ds-card-stat-content-padding-block-start,
      ${t(O)}
    );
    padding-block-end: var(
      --ds-card-stat-content-padding-block-end,
      ${t(T)}
    );
    flex: var(--ds-card-stat-media-flex, ${t(P)});
  }

  .card-stat__content-stat {
    display: var(
      --ds-card-stat-content-stat-display,
      ${t(V)}
    );
    flex-direction: var(
      --ds-card-stat-content-stat-flex-direction,
      ${t(q)}
    );
    gap: var(
      --ds-card-stat-content-stat-gap,
      ${t(G)}
    );
  }

  :host([configuration='vertical']) .card-stat__content-stat {
    word-break: var(
      --ds-card-stat-vertical-content-stat-word-break,
      ${t(J)}
    );
  }

  /* Css for Vertical Configuration */

  :host([configuration='vertical']) .card-stat__media {
    --ds-card-stat-media-padding-block-end: var(--ds-app-space-micro-xs, 0.5rem);
    --ds-card-stat-media-padding-block-start: 0;
  }

  :host([configuration='vertical']) .card-stat__content {
    --ds-card-stat-content-gap: var(--ds-app-space-micro-l, 1.5rem);
    padding-block-start: var(
      --ds-card-stat-vertical-content-padding-block-start,
      ${t(I)}
    );
  }

  /* Css for Full Bleed Configuration */

  :host([media-configuration='full-bleed']) {
    --ds-surface-border-width: initial !important;
    --ds-media-asset-border-start-start-radius: 0;
    --ds-media-asset-border-start-end-radius: 0;
    --ds-media-asset-border-end-end-radius: 0;
    --ds-media-asset-border-end-start-radius: 0;
    --ds-media-max-height: var(--ds-card-stat-media-max-height, 184.5px);
  }

  :host([media-configuration='full-bleed']) .card-stat__media {
    --ds-card-stat-media-padding-inline-start: 0;
    --ds-card-stat-media-padding-inline-end: 0;
    --ds-card-stat-media-padding-block-start: 0;
    --ds-card-stat-media-padding-block-end: 0;
  }

  /* Css for Background Media */
  :host([with-bg-media]) {
    position: var(
      --ds-card-stat-bg-media-host-position,
      ${t(N)}
    );
  }

  :host([with-bg-media]) .card-stat__content {
    z-index: var(
      --ds-card-stat-bg-media-card-stat-content-z-index,
      var(--ds-z-index-20, ${t(X)})
    );
  }

  :host([with-bg-media]) .bg-media {
    --ds-media-max-height: 100%;
    --ds-media-max-width: 100%;
    --ds-media-object-fit: cover;

    height: var(--ds-card-stat-bg-media-height, ${t(R)});
    width: var(--ds-card-stat-bg-media-width, ${t(U)});
    position: var(
      --ds-card-stat-bg-media-position,
      ${t(Q)}
    );

    z-index: var(
      --ds-card-stat-bg-media-z-index,
      var(--ds-z-index-10, ${t(W)})
    );
  }

  :host([text-style='statement']) {
    --ds-heading-block-heading-text-word-break: break-all;
  }

  :host([text-style='statement-center']) {
    --ds-card-stat-content-justify-content: center;
  }
`,Z=a`
  @media (min-width: ${t(_.md)}) {
    :host {
      --ds-card-stat-flex-direction: row-reverse;
      --ds-card-stat-justify-content: space-between;
    }

    :host([configuration='banner']) {
      --ds-card-stat-min-height: auto;
      --ds-card-stat-content-gap: 0;
    }

    :host([configuration='banner']) .card-stat__media {
      --ds-card-stat-media-padding-block-end: var(--ds-app-space-micro-xs, 0.5rem);
      --ds-card-stat-media-padding-inline-start: 0;
    }

    :host([configuration='vertical']) {
      --ds-card-stat-flex-direction: column;
      --ds-media-max-height: var(--ds-card-stat-media-max-height, 179px);
    }
    :host([media-configuration='full-bleed']) {
      --ds-media-max-height: var(--ds-card-stat-media-max-height, 180px);
    }
  }

  @media (min-width: ${t(_.lg)}) {
    .card-stat__content {
      --ds-card-stat-content-gap: var(--ds-app-space-micro-4xl);
    }
  }
`,tt="banner",at="vertical",et="contained",st="stat",rt="heading-block";var dt=Object.defineProperty,it=Object.getOwnPropertyDescriptor,ot=(t,a,e,s)=>{for(var r,d=s>1?void 0:s?it(a,e):a,i=t.length-1;i>=0;i--)(r=t[i])&&(d=(s?r(a,e,d):r(d))||d);return s&&d&&dt(a,e,d),d};const nt="reimagine-card-stat";let ct=class extends y{constructor(){super(),this.configuration=tt,this.mediaConfiguration=et,this.withBgMedia=!1,this.textStyle=st,this.topAsset=rt,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._contentDropdownSlotEmpty=!0,this._contentStatSlotEmpty=!0,this._contentHeaderSlotEmpty=!0,this._contentFooterSlotEmpty=!0,this._mediaSlotEmpty=!0,this._bgMediaSlotEmpty=!0,this.surface=S.solidBorder,this.themeLightSurface=S.solidBorder,this.themeDarkSurface=S.glass,this.textStyle||(this.textStyle="stat")}_updateSurface(){this.hasAttribute("surface")||(this.theme===n.light&&this.themeLightSurface?this.surface=this.themeLightSurface:this.theme===n.dark&&this.themeDarkSurface&&(this.surface=this.themeDarkSurface))}_updateContentHeaderAttributes(){this._contentHeaderSlot.forEach(t=>{const a=t;i(a,g)&&a.setAttribute("size",f.x3large)})}_updateContentFooterAttributes(){this._contentFooterSlot.forEach(t=>{const a=t;i(a,b)&&(a.setAttribute("size",c.small),a.setAttribute("appearance",l.buttonPrimary),a.setAttribute("shape",p.rounded),a.setAttribute("icon-only",""))})}_updateContentFooterTopAttributes(){this._contentStatSlot.forEach(t=>{const a=t;i(a,u)&&a.setAttribute("size",m["size-lg"])})}_renderTemplate(){let t;return this.configuration===tt?t=d`
        <div part="card-stat__media" class="card-stat__media">
          <slot name="card-stat__media" @slotchange=${this._handleSlotChange}></slot>
        </div>
        <div part="card-stat__content" class="card-stat__content">
          <div part="card-stat__content-header" class="card-stat__content-header">
            <slot name="card-stat__content-header" @slotchange=${this._handleSlotChange}></slot>
          </div>
          <div part="card-stat__content-stat" class="card-stat__content-stat">
            <slot name="card-stat__content-stat" @slotchange=${this._handleSlotChange}></slot>
            ${this._renderOptionalSlot("card-stat__content-dropdown",this._contentDropdownSlotEmpty)}
          </div>
        </div>
      `:this.configuration===at&&(t=d`
        <div part="card-stat__content" class="card-stat__content">
          <div part="card-stat__content-stat" class="card-stat__content-stat">
            <slot name="card-stat__content-stat" @slotchange=${this._handleSlotChange}></slot>
          </div>
          <div part="card-stat__content-footer" class="card-stat__content-footer">
            <slot name="card-stat__content-footer" @slotchange=${this._handleSlotChange}></slot>
          </div>
        </div>
        ${this._renderOptionalSlot("card-stat__media",this._mediaSlotEmpty)}
        ${this._renderOptionalSlot("bg-media",this._bgMediaSlotEmpty)}
      `),t}_handleSlotChange(t){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length,this._mediaSlotEmpty=0===this._mediaSlot.length,this._contentHeaderSlotEmpty=0===this._contentHeaderSlot.length,this._contentFooterSlotEmpty=0===this._contentFooterSlot.length,this._contentDropdownSlotEmpty=0===this._contentDropdownSlot.length,this._contentStatSlotEmpty=0===this._contentStatSlot.length,this._bgMediaSlotEmpty=0===this._bgMediaSlot.length;const a=t.target.getAttribute("name");"card-stat__content-header"===a&&!this._contentHeaderSlotEmpty&&this._updateContentHeaderAttributes(),"card-stat__content-footer"===a&&!this._contentFooterSlotEmpty&&this._updateContentFooterAttributes(),"card-stat__content-stat"===a&&!this._contentStatSlotEmpty&&this._updateContentFooterTopAttributes(),this.withBgMedia&&(this.surface=S.media)}_renderOptionalSlot(t="card-stat__first",a=this._firstSlotEmpty){return d`
      <div part=${t} class=${t} style="${a?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}updated(t){if(super.updated(t),t.has("theme")&&!t.has("surface")&&this._updateSurface(),t.has("_mediaSlotEmpty")&&!this._mediaSlotEmpty){const t=this._mediaSlot[0];!t.hasAttribute("aspect-ratio")&&this.configuration===tt&&t.setAttribute("aspect-ratio",h.ratio4to3)}}render(){return d`
      ${this._renderOptionalSlot("card-stat__first",this._firstSlotEmpty)}
      ${this._renderTemplate()} ${this._renderOptionalSlot("card-stat__last",this._lastSlotEmpty)}
    `}};ct.styles=[v,Y,Z],ot([e({reflect:!0})],ct.prototype,"theme",2),ot([e({reflect:!0})],ct.prototype,"configuration",2),ot([e({reflect:!0,attribute:"media-configuration"})],ct.prototype,"mediaConfiguration",2),ot([e({type:Boolean,reflect:!0,attribute:"with-bg-media"})],ct.prototype,"withBgMedia",2),ot([e({reflect:!0,attribute:"text-style"})],ct.prototype,"textStyle",2),ot([e({reflect:!0,attribute:"top-asset"})],ct.prototype,"topAsset",2),ot([s({slot:"card-stat__first"})],ct.prototype,"_firstSlot",2),ot([s({slot:"card-stat__last"})],ct.prototype,"_lastSlot",2),ot([s({slot:"card-stat__content-stat"})],ct.prototype,"_contentStatSlot",2),ot([s({slot:"card-stat__content-dropdown"})],ct.prototype,"_contentDropdownSlot",2),ot([s({slot:"card-stat__content-header"})],ct.prototype,"_contentHeaderSlot",2),ot([s({slot:"card-stat__content-footer"})],ct.prototype,"_contentFooterSlot",2),ot([s({slot:"card-stat__media"})],ct.prototype,"_mediaSlot",2),ot([s({slot:"bg-media"})],ct.prototype,"_bgMediaSlot",2),ot([r()],ct.prototype,"_firstSlotEmpty",2),ot([r()],ct.prototype,"_lastSlotEmpty",2),ot([r()],ct.prototype,"_contentDropdownSlotEmpty",2),ot([r()],ct.prototype,"_contentStatSlotEmpty",2),ot([r()],ct.prototype,"_contentHeaderSlotEmpty",2),ot([r()],ct.prototype,"_contentFooterSlotEmpty",2),ot([r()],ct.prototype,"_mediaSlotEmpty",2),ot([r()],ct.prototype,"_bgMediaSlotEmpty",2),ct=ot([o(nt)],ct);export{ct as CardStat,nt as name};
