import{r as e,i as r,c as t,e as a,f as s,b as o}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as i}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{o as d,T as m}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{m as l,S as c}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{c as n}from"/__mirror/assets/a0679f491075e7b16b00f1b4";import{SurfaceElement as y}from"/__mirror/assets/e09cf4eae8f90fbcbeb198a9";const p="flex",h="column",u="var(--ds-app-space-micro-xl, 1.5rem)",b="var(--ds-app-space-micro-l, 1rem)",f="100%",g="flex-start",v={eyebrowColor:"var(--ds-app-color-base-default-fg-highlight, #005597)",eyebrowFontWeight:l.fontWeight,eyebrowFontSize:l.fontSize,eyebrowLineHeight:l.lineHeight,eyebrowLetterSpacing:l.letterSpacing,eyebrowTextTransform:"uppercase"},w="flex",S="column",k="var(--ds-app-space-micro-l, 1rem)",$="1",x="flex",_="column",E="0",L="var(--ds-app-type-label-s-font-size, 0.75rem)",j=r`
  :host {
    display: var(--ds-card-summary-display, ${e(p)});
    flex-direction: var(
      --ds-card-summary-flex-direction,
      ${e(h)}
    );
    gap: var(--ds-card-summary-gap, ${e(u)});
    padding: var(--ds-card-summary-padding, ${e(b)});
    height: var(--ds-card-summary-height, ${e(f)});
    width: var(--ds-card-summary-width, auto);
    max-width: var(--ds-card-summary-max-width, initial);
    justify-content: var(
      --ds-card-summary-justify-content,
      ${e(g)}
    );
  }

  :host([clickable]:hover) {
    --ds-surface-cursor: pointer;
  }

  :host([clickable]:focus),
  :host([clickable]:focus-visible) {
    ${d};
  }

  .card-summary-top {
    display: var(--ds-card-summary-top-display, ${e(w)});
    flex-direction: var(
      --ds-card-summary-top-flex-direction,
      ${e(S)}
    );
    flex: var(--ds-card-summary-top-flex, ${e($)});
    gap: var(--ds-card-summary-top-gap, ${e(k)});
  }

  .card-summary-eyebrow {
    color: var(--ds-card-summary-eyebrow-color, ${e(v.eyebrowColor)});
    font-weight: var(
      --ds-card-summary-eyebrow-font-weight,
      ${e(v.eyebrowFontWeight)}
    );
    font-size: var(
      --ds-card-summary-eyebrow-font-size,
      ${e(v.eyebrowFontSize)}
    );
    line-height: var(
      --ds-card-summary-eyebrow-line-height,
      ${e(v.eyebrowLineHeight)}
    );
    letter-spacing: var(
      --ds-card-summary-eyebrow-letter-spacing,
      ${e(v.eyebrowLetterSpacing)}
    );
    text-transform: var(
      --ds-card-summary-eyebrow-text-transform,
      ${e(v.eyebrowTextTransform)}
    );
  }

  .card-summary-body {
    display: var(--ds-card-summary-body-display, ${e(x)});
    flex-direction: var(
      --ds-card-summary-body-flex-direction,
      ${e(_)}
    );
    gap: var(--ds-card-summary-body-gap, ${e(E)});

    --ds-list-item-title-font-size: var(
      --ds-card-summary-body-list-item-title-font-size,
      ${e(L)}
    );
    --ds-list-item-inner-padding-block-start: var(--ds-app-space-micro-m, 0.75rem);
    --ds-list-item-inner-padding-block-end: var(--ds-app-space-micro-m, 0.75rem);
  }

  .card-summary-body ::slotted(reimagine-list-item:first-of-type) {
    --ds-list-item-inner-padding-block-start: 0;
  }

  .card-summary-body ::slotted(reimagine-list-item:last-of-type) {
    --ds-list-item-inner-padding-block-end: 0;
  }
`,z={glass:c.glass};var C=Object.defineProperty,T=Object.getOwnPropertyDescriptor,D=(e,r,t,a)=>{for(var s,o=a>1?void 0:a?T(r,t):r,i=e.length-1;i>=0;i--)(s=e[i])&&(o=(a?s(r,t,o):s(o))||o);return a&&o&&C(r,t,o),o};const F="reimagine-card-summary";let H=class extends y{constructor(){super(),this.hideEyebrow=!1,this.hideLink=!1,this._eyebrowSlotEmpty=!0,this._linkSlotEmpty=!0,this.themeLightSurface=z.glass,this.themeDarkSurface=z.glass,this.theme===m.dark?this.surface=this.themeDarkSurface:this.surface=this.themeLightSurface}_handleSlotChange(){this._eyebrowSlotEmpty=0===this._eyebrowSlot.length,this._linkSlotEmpty=0===this._linkSlot.length}_updateSurface(){this.theme===m.dark&&(this.surface=this.themeDarkSurface)}updated(e){super.updated(e),e.has("theme")&&this._updateSurface()}_renderEyebrowSlot(){const e=this.hideEyebrow||this._eyebrowSlotEmpty;return o`
      <div
        part="card-summary-eyebrow"
        class="card-summary-eyebrow"
        style="${e?"display: none;":""}"
      >
        <slot name="card-summary-eyebrow" @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_renderLinkSlot(){const e=this.hideLink||this._linkSlotEmpty;return o`
      <div
        part="card-summary-link"
        class="card-summary-link"
        style="${e?"display: none;":""}"
      >
        <slot name="card-summary-link" @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}render(){return o`
      <div part="card-summary-top" class="card-summary-top">
        ${this._renderEyebrowSlot()}
        <div part="card-summary-body" class="card-summary-body">
          <slot @slotchange="${this._handleSlotChange}"></slot>
        </div>
      </div>
      <div part="card-summary-footer" class="card-summary-footer">${this._renderLinkSlot()}</div>
    `}};H.styles=[n,j],D([t({reflect:!0})],H.prototype,"theme",2),D([t({type:Boolean,reflect:!0,attribute:"hide-eyebrow"})],H.prototype,"hideEyebrow",2),D([t({type:Boolean,reflect:!0,attribute:"hide-link"})],H.prototype,"hideLink",2),D([a({slot:"card-summary-eyebrow"})],H.prototype,"_eyebrowSlot",2),D([a({slot:"card-summary-link"})],H.prototype,"_linkSlot",2),D([s()],H.prototype,"_eyebrowSlotEmpty",2),D([s()],H.prototype,"_linkSlotEmpty",2),H=D([i(F)],H);export{H as CardSummary,F as name};
