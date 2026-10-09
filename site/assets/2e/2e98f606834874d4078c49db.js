import{r as t,i as e,e as o,f as s,b as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as a}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{v as i}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{b as l,c as n}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";const p="var(--ds-app-color-base-default-fg-body, #17253d)",d="var(--ds-app-type-body-s-font-size, 0.875rem)",m="var(--ds-app-type-body-s-line-height, 1.25rem)",h="var(--ds-app-type-body-s-letter-spacing, -0.03em)",c=e`
  .base {
    --ds-container-display: flex;
    --ds-container-flex-direction: column;
    --ds-container-gap: var(--ds-app-space-micro-2xl, 3rem);
  }

  .footer {
    --ds-app-type-body-m-font-weight: var(
      --ds-jumplinks-footer-text-font-weight,
      ${t("var(--ds-app-type-body-s-font-weight, 400)")}
    );
    --ds-app-type-body-m-font-size: var(
      --ds-jumplinks-footer-text-font-size,
      ${t(d)}
    );
    --ds-app-type-body-m-line-height: var(
      --ds-jumplinks-text-line-height,
      ${t(m)}
    );
    --ds-app-type-body-m-letter-spacing: var(
      --ds-jumplinks-footer-text-letter-spacing,
      ${t(h)}
    );

    color: var(--ds-jumplinks-content-text-color, ${t(p)});
    text-align: center;
    margin-top: var(--ds-app-space-micro-m, 1rem);
  }
`,y=e`
  @media (max-width: ${t(i.sm)}) {
    :host ::slotted([slot='header']),
    :host ::slotted([slot='body']) {
      margin-bottom: var(--ds-app-space-micro-2xl, 2rem);
    }
  }
`;var g=Object.defineProperty,f=Object.getOwnPropertyDescriptor,v=Object.getPrototypeOf,b=Reflect.get,u=(t,e,o,s)=>{for(var r,a=s>1?void 0:s?f(e,o):e,i=t.length-1;i>=0;i--)(r=t[i])&&(a=(s?r(e,o,a):r(a))||a);return s&&a&&g(e,o,a),a};const $="reimagine-jumplinks";let _=class extends l{constructor(){super(...arguments),this._headerSlotEmpty=!0,this._footerSlotEmpty=!0}_handleSlotChange(){this._headerSlotEmpty=0===this._headerSlot.length,this._footerSlotEmpty=0===this._footerSlot.length}_renderBlade(){const t="base",e=r`
      <reimagine-layout
        configuration=${n.col1even}
        part="content"
        class="content"
      >
        <reimagine-layout-column>
          <div part="header" class="header" style="${this.toggleDisplay(this._headerSlotEmpty)}">
            <slot name="header" @slotchange=${this._handleSlotChange}></slot>
          </div>
          <div part="body" class="body">
            <slot name="body"></slot>
          </div>
          <div part="footer" class="footer" style="${this.toggleDisplay(this._footerSlotEmpty)}">
            <slot name="footer" @slotchange=${this._handleSlotChange}></slot>
          </div>
        </reimagine-layout-column>
      </reimagine-layout>
    `;return this.baseContent?r`<div class=${t} part=${t}>${e}</div>`:r`
          <reimagine-container part=${t} class="${t}">
            ${e}
          </reimagine-container>
        `}render(){return this.renderUiShell(this._renderBlade())}};var S,j,x;_.styles=[...(S=_,j=_,x="styles",b(v(S),x,j)||[]),c,y],u([o({slot:"header"})],_.prototype,"_headerSlot",2),u([o({slot:"footer"})],_.prototype,"_footerSlot",2),u([s()],_.prototype,"_headerSlotEmpty",2),u([s()],_.prototype,"_footerSlotEmpty",2),_=u([a($)],_);export{_ as Jumplinks,$ as name};
