import{r as t,i as o,e,f as i,c as s,b as l}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{a as n,d as r}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{R as d}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{f as a}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{v as p}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";const _="column",h="var(--ds-app-space-micro-xl, 2rem)",c="var(--ds-app-color-base-default-fg-heading)",m="flex",y="space-between",b="center",v="var(--ds-app-space-micro-l)",S=o`
  :host {
    display: var(--ds-section-title-host-display, ${t("flex")});
    flex-direction: var(
      --ds-section-title-host-flex-direction,
      ${t(_)}
    );
    gap: var(--ds-section-title-host-gap, ${t(h)});
  }

  :host [part='section-title__body'] {
    display: var(--ds-section-title-body-display, ${t(m)});
    justify-content: var(
      --ds-section-title-body-justify-content,
      ${t(y)}
    );
    align-items: var(
      --ds-section-title-body-align-items,
      ${t(b)}
    );
  }

  ::slotted([slot='section-title__body-text']) {
    color: var(--ds-section-title-body-text-color, ${t(c)});
    font-weight: var(--ds-button-font-weight, ${t(a.fontWeight)});
    font-size: var(--ds-button-font-size, ${t(a.fontSize)});
    line-height: var(--ds-button-line-height, ${t(a.lineHeight)});
  }

  :host ::slotted([slot='section-title__body-text']) {
    margin-inline-end: var(
      --ds-section-title-margin-inline-end,
      ${t(v)}
    );
  }

  :host ::slotted([slot='section-title__body-button']) {
    display: var(
      --ds-section-title-button-display,
      ${t("none")}
    );
  }
`,f=o`
  @media (min-width: ${t(p.md)}) {
    :host ::slotted([slot='section-title__body-button']) {
      --ds-section-title-button-display: block;
    }
  }
`;var u=Object.defineProperty,g=Object.getOwnPropertyDescriptor,$=(t,o,e,i)=>{for(var s,l=i>1?void 0:i?g(o,e):o,n=t.length-1;n>=0;n--)(s=t[n])&&(l=(i?s(o,e,l):s(l))||l);return i&&l&&u(o,e,l),l};const E="reimagine-section-title";let x=class extends d{constructor(){super(...arguments),this._buttonSlotEmpty=!0,this._dividerTopSlotEmpty=!0,this._dividerBottomSlotEmpty=!0,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0}_handleSlotChange(){this._buttonSlotEmpty=0===this._buttonSlot.length,this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length,this._dividerTopSlotEmpty=0===this._dividerTopSlot.length,this._dividerBottomSlotEmpty=0===this._dividerBottomSlot.length}updated(){if(this._dividerTopSlotEmpty||this._dividerTopSlot[0].setAttribute("size","m"),this._dividerBottomSlotEmpty||this._dividerBottomSlot[0].setAttribute("size","m"),!this._buttonSlotEmpty){const t=this._buttonSlot[0];n(t,"reimagine-button").forEach(t=>{t.setAttribute("size","large")})}}_renderOptionalSlot(t,o){return l`
      <div part=${t} class=${t} style="${o?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}render(){return l`
      ${this._renderOptionalSlot("section-title__first",this._firstSlotEmpty)}
      ${this.topDivider?l`<slot
            name="section-title__divider-top"
            @slotchange="${this._handleSlotChange}"
          ></slot>`:""}
      <div class="section-title__body" part="section-title__body">
        <slot name="section-title__body-text"></slot>
        ${this._renderOptionalSlot("section-title__body-button",this._buttonSlotEmpty)}
      </div>
      ${this.bottomDivider?l`<slot
            name="section-title__divider-bottom"
            @slotchange="${this._handleSlotChange}"
          ></slot>`:""}
      ${this._renderOptionalSlot("section-title__last",this._lastSlotEmpty)}
    `}};x.styles=[S,f],$([e({slot:"section-title__body-button"})],x.prototype,"_buttonSlot",2),$([e({slot:"section-title__divider-top"})],x.prototype,"_dividerTopSlot",2),$([e({slot:"section-title__divider-bottom"})],x.prototype,"_dividerBottomSlot",2),$([e({slot:"section-title__first"})],x.prototype,"_firstSlot",2),$([e({slot:"section-title__last"})],x.prototype,"_lastSlot",2),$([i()],x.prototype,"_buttonSlotEmpty",2),$([i()],x.prototype,"_dividerTopSlotEmpty",2),$([i()],x.prototype,"_dividerBottomSlotEmpty",2),$([i()],x.prototype,"_firstSlotEmpty",2),$([i()],x.prototype,"_lastSlotEmpty",2),$([s({type:Boolean,reflect:!0,attribute:"top-divider"})],x.prototype,"topDivider",2),$([s({type:Boolean,reflect:!0,attribute:"bottom-divider"})],x.prototype,"bottomDivider",2),x=$([r(E)],x);export{x as SectionTitle,E as name};
