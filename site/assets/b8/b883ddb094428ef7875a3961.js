import{r as t,i as o,e,f as a,b as r,h as s}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i as n,s as i,q as l,d}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{n as p}from"/__mirror/assets/bf0b3498e45fc20534cec8b1";import{n as c,a as y}from"/__mirror/assets/53ebd49096a5d15936f4d45e";import{name as m}from"/__mirror/assets/d85c69aad3852816cbccc749";import{b as f,c as b,M as g,g as h}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";const u="var(--ds-app-color-base-default-fg-body, #17253d)",v="var(--ds-app-type-body-xs-font-weight, 400)",x="var(--ds-app-type-body-xs-font-size, 0.75rem)",S="var(--ds-app-type-body-xs-line-height, 1rem)",_="var(--ds-app-type-body-xs-letter-spacing, -0.03em)",$=o`
  :host {
    --ds-link-line-height: var(--ds-app-space-micro-m);
    --ds-ui-shell-gap: var(--ds-app-space-layout-stack-cozy, 2rem);
  }

  .base {
    --ds-container-display: flex;
    --ds-container-flex-direction: column;
    --ds-container-gap: var(--ds-app-space-layout-stack-cozy, 2rem);
  }

  :host([base-content]) .base {
    display: var(--ds-container-display, flex);
    flex-direction: var(--ds-container-flex-direction, column);
    gap: var(--ds-container-gap, var(--ds-app-space-layout-stack-cozy, 2rem));
  }

  .body,
  .footer {
    --ds-layout-column-display: flex;
    --ds-layout-column-flex-direction: column;
    --ds-layout-column-align-items: center;
  }

  .body {
    --ds-button-border-radius: var(--ds-app-radii-s, 0.5rem);
    --ds-media-max-width: ${t("var(--ds-cta-banner-media-width, 208px)")};
    --ds-layout-column-row-gap: var(--ds-app-space-layout-stack-cozy, 2rem);
  }

  .footer {
    --ds-layout-column-row-gap: var(--ds-app-space-micro-xs, 0.5rem);
    --ds-app-type-body-m-font-weight: var(
      --ds-cta-banner-footer-text-font-weight,
      ${t(v)}
    );
    --ds-app-type-body-m-font-size: var(
      --ds-cta-banner-footer-text-font-size,
      ${t(x)}
    );
    --ds-app-type-body-m-line-height: var(
      --ds-cta-banner-footer-text-line-height,
      ${t(S)}
    );
    --ds-app-type-body-m-letter-spacing: var(
      --ds-cta-banner-footer-text-letter-spacing,
      ${t(_)}
    );

    color: var(
      --ds-heading-block-content-text-color,
      ${t(u)}
    );
    font-weight: var(
      --ds-cta-banner-footer-text-font-weight,
      ${t(v)}
    );
    font-size: var(
      --ds-cta-banner-footer-text-font-size,
      ${t(x)}
    ) !important;
    line-height: var(
      --ds-cta-banner-footer-text-line-height,
      ${t(S)}
    ) !important;
    letter-spacing: var(
      --ds-cta-banner-footer-text-letter-spacing,
      ${t(_)}
    ) !important;
    text-align: center;
  }

  .base.supportive-fade,
  .base.neutral-fade,
  .base.neutral-color {
    --ds-heading-block-content-text-color: var(--ds-app-color-base-alt1-fg-body, #17253d);
  }

  .base.supportive-color {
    --ds-heading-block-content-text-color: var(--ds-app-color-base-alt2-fg-body, #3e143f);
  }

  .base.special-color {
    --ds-heading-block-content-text-color: var(--ds-app-color-base-special-fg-body, #3e143f);
  }
`;var k=Object.defineProperty,w=Object.getOwnPropertyDescriptor,z=Object.getPrototypeOf,E=Reflect.get,j=(t,o,e,a)=>{for(var r,s=a>1?void 0:a?w(o,e):o,n=t.length-1;n>=0;n--)(r=t[n])&&(s=(a?r(o,e,s):r(s))||s);return a&&s&&k(o,e,s),s};const C="reimagine-cta-banner";let O=class extends f{constructor(){super(),this._bodySlotEmpty=!0,this._footerSlotEmpty=!0,this.headerLayoutConfiguration||(this.headerLayoutConfiguration=b.col1focus)}_bodySlotChange(){if(this._bodySlotEmpty=0===this._bodySlot.length,this._bodySlotEmpty)return;const t={type:h.highlightSolid,"aspect-ratio":g.ratio4to3},o=this._bodySlot.find(t=>n(t,p));i(o,t)}_footerSlotChange(){if(this._footerSlotEmpty=0===this._footerSlot.length,this._footerSlotEmpty)return;const t=this._footerSlot.find(t=>n(t,m)),o=l(t,c),e={"text-size":y.labelSmall};i(o,e,!0)}_renderBlade(){const t="base",o={base:!0,[this.background||"_"]:!!this.background},e=r`
      <reimagine-layout
        configuration=${b.col1focus}
        part="body"
        class="body"
        style="${this.toggleDisplay(this._bodySlotEmpty)}"
      >
        <reimagine-layout-column>
          <slot name="body" @slotchange=${this._bodySlotChange}></slot>
        </reimagine-layout-column>
      </reimagine-layout>
      <reimagine-layout
        configuration=${b.col1focus}
        part="footer"
        class="footer"
        style="${this.toggleDisplay(this._footerSlotEmpty)}"
      >
        <reimagine-layout-column>
          <slot name="footer" @slotchange=${this._footerSlotChange}></slot>
        </reimagine-layout-column>
      </reimagine-layout>
    `;return this.baseContent?r` <div class=${t} part=${t}>${e}</div> `:r`
      <reimagine-container part=${t} class="${s(o)}">
        ${e}
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var B,D,P;O.styles=[...(B=O,D=O,P="styles",E(z(B),P,D)||[]),$],j([e({slot:"body"})],O.prototype,"_bodySlot",2),j([e({slot:"footer"})],O.prototype,"_footerSlot",2),j([a()],O.prototype,"_bodySlotEmpty",2),j([a()],O.prototype,"_footerSlotEmpty",2),O=j([d(C)],O);export{O as CtaBanner,C as name};
