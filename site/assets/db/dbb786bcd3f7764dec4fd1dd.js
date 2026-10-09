import{r as t,i as o,e,f as r,b as a}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{b as s,c as i}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{d as l}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{b as n,v as m}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";const d="flex",p="var(--ds-app-space-layout-stack-comfortable, 3rem)",y="column",u="var(--ds-app-color-base-default-fg-highlight, #005597)",c="var(--ds-app-space-micro-l, 1.5rem)",h="row-reverse",g=o`
  :host {
    --ds-container-display: var(
      --ds-story-summary-container-display,
      ${t(d)}
    );
    --ds-container-gap: var(--ds-story-summary-container-gap, ${t(p)});
    --ds-container-flex-direction: var(
      --ds-story-summary-container-flex-direction,
      ${t(y)}
    );
  }

  :host ::slotted([slot='footer-text']) {
    --ds-text-block-gap: var(--ds-story-summary-footer-text-gap, 0);
    --ds-text-block-content-color: var(
      --ds-story-summary-footer-text-content-color,
      ${t(u)}
    );

    color: var(
      --ds-story-summary-footer-text-color,
      ${t(u)}
    );
    padding-block-end: var(
      --ds-story-summary-footer-text-padding-block-end,
      ${t(c)}
    );
  }

  :host .share-button {
    display: var(--ds-story-summary-button-display, ${t(d)});
    flex-direction: var(
      --ds-story-summary-button-flex-direction,
      ${t(h)}
    );
  }
`,S=o`
  @media (max-width: ${t(n(m.md))}) {
    :host ::slotted(reimagine-button) {
      --ds-button-width: var(--ds-story-summary-footer-button-width, 100%);
    }
  }
`;var v=Object.defineProperty,_=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,$=Reflect.get,b=(t,o,e,r)=>{for(var a,s=r>1?void 0:r?_(o,e):o,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(r?a(o,e,s):a(s))||s);return r&&s&&v(o,e,s),s};const x="reimagine-story-summary";let E=class extends s{constructor(){super(...arguments),this._topSlotEmpty=!0,this._textBlockSlotEmpty=!0,this._dividerSlotEmpty=!0,this._shareButtonSlotEmpty=!0,this.topSlotLayoutConfiguration=i.col2even}_handleSlotChange(){this._topSlotEmpty=0===this._topSlot.length,this._textBlockSlotEmpty=0===this._footerTextSlot.length,this._dividerSlotEmpty=0===this._dividerSlot.length,this._shareButtonSlotEmpty=0===this._shareButtonSlot.length}_renderOptionalSlot(t,o){return a`
      <div part=${t} class=${t} style="${o?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_renderBlade(){const t="container",o=a`
      <reimagine-layout
        configuration=${this.topSlotLayoutConfiguration}
        style="${this.toggleDisplay(this._topSlotEmpty)}"
      >
        <reimagine-layout-column class="top-header" part="top-header">
          <slot name="top-header" @slotchange=${this._handleSlotChange}></slot>
        </reimagine-layout-column>
      </reimagine-layout>

      <reimagine-layout>
        <reimagine-layout-column class="body" part="body">
          <slot></slot>
        </reimagine-layout-column>
      </reimagine-layout>

      <reimagine-layout>
        <reimagine-layout-column>
          ${this._renderOptionalSlot("footer-text",this._textBlockSlotEmpty)}
          ${this._renderOptionalSlot("divider",this._dividerSlotEmpty)}
        </reimagine-layout-column>
      </reimagine-layout>

      <reimagine-layout>
        <reimagine-layout-column>
          ${this._renderOptionalSlot("share-button",this._shareButtonSlotEmpty)}
        </reimagine-layout-column>
      </reimagine-layout>
    `;return this.baseContent?a` <div class=${t} part=${t}>${o}</div> `:a`
      <reimagine-container part=${t} class=${t}>
        ${o}
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var B,k,O;E.styles=[...(B=E,k=E,O="styles",$(f(B),O,k)||[]),g,S],b([e({slot:"top-header"})],E.prototype,"_topSlot",2),b([e({slot:"footer-text"})],E.prototype,"_footerTextSlot",2),b([e({slot:"divider"})],E.prototype,"_dividerSlot",2),b([e({slot:"share-button"})],E.prototype,"_shareButtonSlot",2),b([r()],E.prototype,"_topSlotEmpty",2),b([r()],E.prototype,"_textBlockSlotEmpty",2),b([r()],E.prototype,"_dividerSlotEmpty",2),b([r()],E.prototype,"_shareButtonSlotEmpty",2),E=b([l(x)],E);export{E as StorySummary,x as name};
