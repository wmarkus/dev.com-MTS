import{r as t,i as e,c as s,e as o,f as a,b as d}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i as r,d as i}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{M as c,T as n}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{s as l}from"/__mirror/assets/837e94fcdaabee469909dbdc";import{b as u,v as p}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{S as _,k as y,T as h,J as m,y as f}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{SurfaceElement as b}from"/__mirror/assets/e09cf4eae8f90fbcbeb198a9";import{n as g}from"/__mirror/assets/bf0b3498e45fc20534cec8b1";import{name as S}from"/__mirror/assets/1744c47504083b26d862e98f";import{name as w}from"/__mirror/assets/8257e2a086fb91e13056fdae";const E=e`
  :host([layout='stacked'][configuration='media']) {
    --ds-card-case-study-flex-direction: column;
    flex-direction: var(--ds-card-case-study-flex-direction);
  }

  :host([layout='stacked'][configuration='media']) .card-case-study__content {
    --ds-card-case-study-content-margin-block-start: auto;
  }

  :host([layout='stacked'][configuration='media']) .card-case-study__content-wrapper {
    --ds-card-case-study-content-wrapper-width: 100%;
    --ds-card-case-study-content-wrapper-box-sizing: border-box;
  }

  @media (max-width: ${t(u(p.md))}) {
    :host([configuration='media']:not([layout='stacked'])) {
      --ds-card-case-study-flex-direction: column;
      flex-direction: var(--ds-card-case-study-flex-direction);
    }

    :host([configuration='media']:not([layout='stacked'])) .card-case-study__content {
      --ds-card-case-study-content-margin-block-start: auto;
    }

    :host([configuration='media']:not([layout='stacked'])) .card-case-study__content-wrapper {
      --ds-card-case-study-content-wrapper-width: 100%;
      --ds-card-case-study-content-wrapper-box-sizing: border-box;
    }
  }

  @media (min-width: ${t(p.md)}) {
    :host([configuration='default']:not([layout='stacked'])) {
      --ds-card-case-study-justify-content: space-between;
      --ds-card-case-study-flex-direction: row-reverse;
      --ds-card-case-study-min-height: 450px;
    }

    :host([configuration='media'][aspect-ratio='21-9']) ::slotted([slot='card-case-study__media']),
    :host([configuration='media'][aspect-ratio='16-9']) ::slotted([slot='card-case-study__media']) {
      --ds-media-display: flex;
    }
    
    :host([configuration='default']:not([layout='stacked'])) .card-case-study__media {
      --ds-card-case-study-padding-inline-start: 0;
      --ds-card-case-study-padding-block-end: var(--ds-app-space-micro-xs);
      --ds-card-case-study-flex: 1;
    }

    :host(:not([layout='stacked'])) .card-case-study__content {
      --ds-card-case-study-content-display: flex;
    }

    :host([configuration='media']:not([layout='stacked'])) .card-case-study__content {
      --ds-card-case-study-content-width: 50%;
    }

    :host ::slotted([slot='card-case-study__content-logo']),
    :host([configuration='media']) ::slotted([slot='card-case-study__content-logo']) {
      --ds-card-case-study-content-logo-slot-overflow: hidden;
    }

    :host([configuration='media']:not([layout='stacked'])) .card-case-study__content-wrapper {
      --ds-card-case-study-content-wrapper-width: 100%;
      --ds-card-case-study-content-wrapper-box-sizing: border-box;
    }

    :host([configuration='default']:not([layout='stacked'])) .card-case-study__content-wrapper {
      --ds-card-case-study-content-wrapper-justify-content: space-between;
    }

    :host([configuration='default']:not([layout='stacked'])) .card-case-study__content-stat {
      --ds-card-case-study-content-stat-flex-direction: row;
      --ds-card-case-study-content-stat-gap: var(--ds-app-space-micro-2xl);
    }

    :host([configuration='default']:not([layout='stacked']))
      .card-case-study__content-related-products {
      --ds-card-case-study-content-related-products-padding-block-end: var(--ds-app-space-micro-xl);
    }
    :host(:not([layout='stacked'])) .card-case-study__content-button {
      --ds-card-case-study-content-button-position: absolute;
      --ds-card-case-study-content-button-bottom: var(--ds-app-space-micro-l);
    }

    /* Stacked layout forces the column arrangement even at desktop widths. */
    :host([layout='stacked'][configuration='default']) {
      --ds-card-case-study-flex-direction: column;
      --ds-card-case-study-justify-content: initial;
      --ds-card-case-study-min-height: initial;
    }

    :host([layout='stacked'][configuration='default']) .card-case-study__media {
      --ds-card-case-study-padding-inline-start: var(--ds-app-space-micro-xs);
      --ds-card-case-study-padding-block-end: 0;
      --ds-card-case-study-flex: initial;
    }

    :host([layout='stacked'][configuration='default']) .card-case-study__content-wrapper {
      --ds-card-case-study-content-wrapper-justify-content: initial;
    }

    :host([layout='stacked'][configuration='default']) .card-case-study__content-stat {
      --ds-card-case-study-content-stat-flex-direction: column;
      --ds-card-case-study-content-stat-gap: var(--ds-app-space-micro-xl);
    }

    :host([layout='stacked'][configuration='default']) .card-case-study__content-related-products {
      --ds-card-case-study-content-related-products-padding-block-end: var(--ds-app-space-micro-xl);
    }

  }
`;var v=Object.defineProperty,k=Object.getOwnPropertyDescriptor,x=(t,e,s,o)=>{for(var a,d=o>1?void 0:o?k(e,s):e,r=t.length-1;r>=0;r--)(a=t[r])&&(d=(o?a(e,s,d):a(d))||d);return o&&d&&v(e,s,d),d};const A="reimagine-card-case-study";let $=class extends b{constructor(){super(),this._firstSlotEmpty=!0,this._contentTagSlotEmpty=!0,this._mediaSlotEmpty=!0,this._contentLogoSlotEmpty=!0,this._contentBodySlotEmpty=!0,this._statSlotEmpty=!0,this._labelSlotEmpty=!0,this._relatedProductsSlotEmpty=!0,this._buttonGroupSlotEmpty=!0,this._buttonSlotEmpty=!0,this._lastSlotEmpty=!0,this._isMobileViewport=!1,this._isDesktopViewport=!1,this._observedWindowDimensions={width:window.innerWidth,height:window.innerHeight},this.surface=_.solidBorder,this.themeLightSurface=_.solidBorder,this.themeDarkSurface=_.glass,this._isMobileViewport=this._observedWindowDimensions.width<parseInt(p.md,10),this._isDesktopViewport=this._observedWindowDimensions.width>=parseInt(p.md,10),this._resizeObserver=new ResizeObserver(()=>{this._observedWindowDimensions={width:window.innerWidth,height:window.innerHeight},requestAnimationFrame(()=>{this._handleViewportChange()})})}updated(t){super.updated(t),t.has("theme")&&this._updateSurface(),"media"===this.configuration&&(this.surface=_.media)}connectedCallback(){super.connectedCallback(),this._resizeObserver.observe(document.body)}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver.disconnect()}_handleViewportChange(){const t=this._observedWindowDimensions.width<parseInt(p.md,10),e=this._observedWindowDimensions.width>=parseInt(p.md,10);this._isDesktopViewport&&t?(this._isDesktopViewport=!1,this._isMobileViewport=!0,this._updateDefaultAspectRatio(c.ratio16to9)):this._isMobileViewport&&e&&(this._isDesktopViewport=!0,this._isMobileViewport=!1,this._updateDefaultAspectRatio(c.ratio4to3))}_updateDefaultAspectRatio(t){const e=this._mediaSlot.filter(t=>r(t,g));e.length>0&&e.forEach(e=>{"default"===this.configuration&&e.setAttribute("aspect-ratio",t)})}_updateSurface(){this.theme===n.light&&this.themeLightSurface?this.surface=this.themeLightSurface:this.theme===n.dark&&this.themeDarkSurface&&(this.surface=this.themeDarkSurface)}_handleSlotChange(t){this._firstSlotEmpty=0===this._firstSlot.length,this._mediaSlotEmpty=0===this._mediaSlot.length,this._contentTagSlotEmpty=0===this._contentTagSlot.length,this._contentLogoSlotEmpty=0===this._contentLogoSlot.length,this._contentBodySlotEmpty=0===this._contentBodySlot.length,this._statSlotEmpty=0===this._statSlot.length,this._labelSlotEmpty=0===this._labelSlot.length,this._relatedProductsSlotEmpty=0===this._relatedProductsSlot.length,this._buttonGroupSlotEmpty=0===this._buttonGroupSlot.length,this._buttonSlotEmpty=0===this._buttonSlot.length,this._lastSlotEmpty=0===this._lastSlot.length;const e=t.target.name;"card-case-study__media"===e&&!this._mediaSlotEmpty&&this._updateMediaAttributes(),"card-case-study__content-logo"===e&&!this._contentLogoSlotEmpty&&this._updateContentMediaAttributes(),"card-case-study__content-body"===e&&!this._contentBodySlotEmpty&&this._updateContentTextBlockAttributes(),"card-case-study__content-related-products"===e&&!this._relatedProductsSlotEmpty&&this._updateRelatedProductsAttributes()}_updateMediaAttributes(){const t=this._mediaSlot.filter(t=>r(t,g));t.length>0&&t.forEach(t=>{!t.hasAttribute("overlay")&&this.bgMediaOverlay&&"media"===this.configuration&&t.setAttribute("overlay",this.bgMediaOverlay),!t.hasAttribute("aspect-ratio")&&this.mediaAspectRatio?t.setAttribute("aspect-ratio",this.mediaAspectRatio):t.setAttribute("aspect-ratio",c.ratio4to3)})}_updateContentMediaAttributes(){const t=this._contentLogoSlot.filter(t=>r(t,g));t.length>0&&t.forEach(t=>{t.hasAttribute("aspect-ratio")||t.setAttribute("aspect-ratio",c.ratio21to9)})}_updateContentTextBlockAttributes(){const t=this._contentBodySlot.filter(t=>r(t,S));t.length>0&&t.forEach(t=>{t.hasAttribute("configuration")||t.setAttribute("configuration",y.default),t.hasAttribute("size")||t.setAttribute("size","media"===this.configuration?h["size-2xs"]:h["size-xs"])})}_updateRelatedProductsAttributes(){const t=this._relatedProductsSlot.filter(t=>r(t,w));t.length>0&&t.forEach(t=>{t.hasAttribute("density")||t.setAttribute("density",m.comfortable),t.hasAttribute("configuration")||t.setAttribute("configuration",f.horizontal)})}_renderOptionalSlot(t="card-case-study__first",e=this._firstSlotEmpty){return d`
      <div part=${t} class=${t} style="${e?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_renderSlot(t){return d`
      <div part=${t} class=${t}>
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}render(){return d`
      ${this._renderOptionalSlot("card-case-study__first",this._firstSlotEmpty)}
      ${this._renderSlot("card-case-study__media")}
      <div part="card-case-study__content" class="card-case-study__content">
        <div part="card-case-study__content-wrapper" class="card-case-study__content-wrapper">
          <div part="card-case-study__content-top" class="card-case-study__content-top">
            ${this._renderOptionalSlot("card-case-study__content-tag",this._contentTagSlotEmpty)}
            ${this._renderSlot("card-case-study__content-logo")}
            ${this._renderSlot("card-case-study__content-body")}
            <div
              part="card-case-study__content-stat-wrapper"
              class="card-case-study__content-stat-wrapper"
            >
              ${this._renderOptionalSlot("card-case-study__content-stat",this._statSlotEmpty)}
            </div>
            ${this._renderOptionalSlot("card-case-study__content-label",this._labelSlotEmpty)}
            ${this._renderOptionalSlot("card-case-study__content-related-products",this._relatedProductsSlotEmpty)}
            ${"media"===this.configuration?this._renderOptionalSlot("card-case-study__content-button",this._buttonSlotEmpty):""}
          </div>
          ${"default"===this.configuration?d`<div
                part="card-case-study__content-bottom"
                class="card-case-study__content-bottom"
              >
                ${this._renderOptionalSlot("card-case-study__content-button-group",this._buttonGroupSlotEmpty)}
              </div>`:""}
        </div>
      </div>
      ${this._renderOptionalSlot("card-case-study__last",this._lastSlotEmpty)}
    `}};$.styles=[l,E],x([s({reflect:!0})],$.prototype,"theme",2),x([s({reflect:!0})],$.prototype,"configuration",2),x([s({reflect:!0})],$.prototype,"layout",2),x([s({reflect:!0,attribute:"bg-media-overlay"})],$.prototype,"bgMediaOverlay",2),x([s({reflect:!0,attribute:"aspect-ratio"})],$.prototype,"mediaAspectRatio",2),x([o({slot:"card-case-study__first"})],$.prototype,"_firstSlot",2),x([o({slot:"card-case-study__media"})],$.prototype,"_mediaSlot",2),x([o({slot:"card-case-study__content-tag"})],$.prototype,"_contentTagSlot",2),x([o({slot:"card-case-study__content-body"})],$.prototype,"_contentBodySlot",2),x([o({slot:"card-case-study__content-logo"})],$.prototype,"_contentLogoSlot",2),x([o({slot:"card-case-study__content-stat"})],$.prototype,"_statSlot",2),x([o({slot:"card-case-study__content-label"})],$.prototype,"_labelSlot",2),x([o({slot:"card-case-study__content-related-products"})],$.prototype,"_relatedProductsSlot",2),x([o({slot:"card-case-study__content-button-group"})],$.prototype,"_buttonGroupSlot",2),x([o({slot:"card-case-study__content-button"})],$.prototype,"_buttonSlot",2),x([o({slot:"card-case-study__last"})],$.prototype,"_lastSlot",2),x([a()],$.prototype,"_firstSlotEmpty",2),x([a()],$.prototype,"_contentTagSlotEmpty",2),x([a()],$.prototype,"_mediaSlotEmpty",2),x([a()],$.prototype,"_contentLogoSlotEmpty",2),x([a()],$.prototype,"_contentBodySlotEmpty",2),x([a()],$.prototype,"_statSlotEmpty",2),x([a()],$.prototype,"_labelSlotEmpty",2),x([a()],$.prototype,"_relatedProductsSlotEmpty",2),x([a()],$.prototype,"_buttonGroupSlotEmpty",2),x([a()],$.prototype,"_buttonSlotEmpty",2),x([a()],$.prototype,"_lastSlotEmpty",2),x([a()],$.prototype,"_isMobileViewport",2),x([a()],$.prototype,"_isDesktopViewport",2),x([a()],$.prototype,"_resizeObserver",2),x([a()],$.prototype,"_observedWindowDimensions",2),$=x([i(A)],$);export{$ as CardCaseStudy,A as name};
