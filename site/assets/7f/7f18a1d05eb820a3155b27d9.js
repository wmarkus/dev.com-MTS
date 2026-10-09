import{r as t,i as e,e as o,f as r,b as i}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{j as s,p as n,d as a}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{R as p}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{m as l,o as c,x as d,M as h,P as f}from"/__mirror/assets/6ad137053d5da8fc91d912f1";const m="column",_="var(--ds-app-space-micro-xs, 0.5rem)",u="block",g="row",v="baseline",S="var(--ds-app-color-interactive-secondary-fg-default, #2a446f)",y="var(--ds-app-space-micro-3xs, 0.125rem)",b="none",k="var(--ds-app-space-micro-3xs, 0.125rem)",$="var(--ds-border-xs, 0.0625rem)",E="solid",C="transparent",w="var(--ds-app-color-interactive-secondary-fg-hover, #263e65)",x="var(--ds-app-color-interactive-secondary-fg-active, #0e1726)",V=e`
  :host {
    display: var(--ds-footnote-item-display, ${t("flex")});
    flex-direction: var(
      --ds-footnote-item-felx-direction,
      ${t(m)}
    );
    row-gap: var(--ds-footnote-item-row-gap, ${t(_)});
  }

  .footnote-item__superscript {
    display: inline-flex;
    inline-size: fit-content;
    padding-block-end: var(
      --ds-footnote-item-superscript-wrapper-padding-block-end,
      ${t(k)}
    );
    border-block-end-width: var(
      --ds-footnote-item-superscript-wrapper-border-block-end-width,
      ${t($)}
    );
    border-block-end-style: ${t(E)};
    border-block-end-color: var(
      --ds-footnote-item-superscript-wrapper-border-block-end-color,
      ${t(C)}
    );
  }

  .footnote-item__superscript:hover {
    --ds-footnote-item-superscript-color: ${t(w)};
    --ds-footnote-item-superscript-wrapper-border-block-end-color: ${t(w)};
  }

  .footnote-item__superscript:active {
    --ds-footnote-item-superscript-color: ${t(x)};
    --ds-footnote-item-superscript-wrapper-border-block-end-color: transparent;
  }

  :host ::slotted([slot='footnote-item__superscript']) {
    text-decoration: var(
      --ds-footnote-item-superscript-text-decoration,
      ${t(b)}
    );
    font-weight: var(
      --ds-footnote-item-superscript-font-weight,
      ${t(l.fontWeight)}
    );
    text-underline-offset: var(
      --ds-footnote-item-superscript-underline-offset,
      ${t(y)}
    );
    font-size: var(
      --ds-footnote-item-superscript-font-size,
      ${t(l.fontSize)}
    );
    line-height: var(
      --ds-footnote-item-superscript-line-height,
      ${t(l.lineHeight)}
    ) !important;
    color: var(
      --ds-footnote-item-superscript-color,
      ${t(S)}
    ) !important;
    letter-spacing: var(
      --ds-footnote-item-superscript-letter-spacing,
      ${t(l.letterSpacing)}
    ) !important;
  }

  .footnote-item__body {
    display: var(--ds-footnote-item-body-display, ${t(u)});
    flex-direction: var(
      --ds-footnote-item-body-flex-direction,
      ${t(g)}
    );
    align-items: var(
      --ds-footnote-item-body-align-items,
      ${t(v)}
    );
  }

  .footnote-item__paragraph,
  .footnote-item__link,
  :host ::slotted([slot='footnote-item__paragraph']) {
    display: inline;
  }

  :host ::slotted([slot='footnote-item__link']) {
    white-space: nowrap;
  }

  :host ::slotted([slot='footnote-item__paragraph']),
  :host ::slotted([slot='footnote-item__link']) {
    margin: 0;
    font-weight: var(
      --ds-footnote-item-paragraph-font-weight,
      ${t(c.fontWeight)}
    ) !important;
    font-size: var(
      --ds-footnote-item-paragraph-font-size,
      ${t(c.fontSize)}
    ) !important;
    line-height: var(
      --ds-footnote-item-paragraph-line-height,
      ${t(c.lineHeight)}
    ) !important;
    color: var(
      --ds-footnote-item-paragraph-color,
      ${t("var(--ds-app-color-base-default-fg-body, #3a4c56)")}
    ) !important;
    letter-spacing: var(
      --ds-footnote-item-paragraph-letter-spacing,
      ${t(c.letterSpacing)}
    ) !important;
  }
`;var L=Object.defineProperty,H=Object.getOwnPropertyDescriptor,j=(t,e,o,r)=>{for(var i,s=r>1?void 0:r?H(e,o):e,n=t.length-1;n>=0;n--)(i=t[n])&&(s=(r?i(e,o,s):i(s))||s);return r&&s&&L(e,o,s),s};const z="reimagine-footnote-item";let A=class extends p{constructor(){super(...arguments),this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._linkSlotEmpty=!0,this._superscriptSlotEmpty=!0,this.hrefValue="",this.hrefValueChangeable=!1,this._superscriptClickEvents=new WeakSet,this._boundHandleSuperscriptClick=this._handleSuperscriptLinkClick.bind(this)}_handleSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length,this._linkSlotEmpty=0===this._linkSlot.length}_handleSuperscriptLinkSlotChange(){this._superscriptSlotEmpty=0===this._superscriptSlot.length,this._bindEvents()}_bindEvents(){this._superscriptSlot&&this._superscriptSlot.length>0&&this._superscriptSlot.forEach(t=>{t instanceof HTMLElement&&"a"===t.tagName.toLowerCase()&&!this._superscriptClickEvents.has(t)&&(t.addEventListener("click",this._boundHandleSuperscriptClick),this._superscriptClickEvents.add(t))})}_handleSuperscriptLinkClick(t){if(this.hrefValue){t.preventDefault();const e=this.hrefValue,o=document.querySelector(e);o&&s(o,t,d)}}generateHrefValue(){if(this._superscriptSlot.length>0){const t=this._superscriptSlot[0];if("a"!==t.tagName.toLowerCase()||!this.id)return;const e=t.getAttribute("href"),o=document.querySelectorAll(`a${h}[href="#${this.id}"]`);if(!o||0===o.length)return;for(let t=0;t<o.length;t++){let e=o[t].getAttribute("id");e||(e=n(this.id,t,f),o[t].setAttribute("id",`${e}`))}e?(this.hrefValue=e,this.hrefValueChangeable=!1):(this.hrefValue=`#${o[0].getAttribute("id")}`,this.hrefValueChangeable=!0),t.setAttribute("href",this.hrefValue)}}updateHrefValue(t){if(!this._superscriptSlot||0===this._superscriptSlot.length)return;const e=this._superscriptSlot[0];"a"===e.tagName.toLowerCase()&&this.hrefValueChangeable&&(this.hrefValue=`#${t}`,e.setAttribute("href",`#${t}`))}_renderOptionalSlot(t="footnote-item__first",e=this._firstSlotEmpty){return i`
      <div part=${t} class=${t} style="${e?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}render(){return i`
      ${this._renderOptionalSlot("footnote-item__first",this._firstSlotEmpty)}
      <div
        part="footnote-item__superscript"
        class="footnote-item__superscript"
        style="${this._superscriptSlotEmpty?"display: none;":""}"
      >
        <slot
          name="footnote-item__superscript"
          @slotchange="${this._handleSuperscriptLinkSlotChange}"
        ></slot>
      </div>
      <div part="footnote-item__body" class="footnote-item__body">
        <div part="footnote-item__paragraph" class="footnote-item__paragraph">
          <slot name="footnote-item__paragraph"></slot>
        </div>
        ${this._renderOptionalSlot("footnote-item__link",this._linkSlotEmpty)}
      </div>
      ${this._renderOptionalSlot("footnote-item__last",this._lastSlotEmpty)}
    `}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this._superscriptSlot)||t.forEach(t=>{t instanceof HTMLElement&&this._superscriptClickEvents.has(t)&&(t.removeEventListener("click",this._boundHandleSuperscriptClick),this._superscriptClickEvents.delete(t))})}};A.styles=[V],j([o({slot:"footnote-item__first"})],A.prototype,"_firstSlot",2),j([o({slot:"footnote-item__last"})],A.prototype,"_lastSlot",2),j([o({slot:"footnote-item__link"})],A.prototype,"_linkSlot",2),j([o({slot:"footnote-item__superscript"})],A.prototype,"_superscriptSlot",2),j([r()],A.prototype,"_firstSlotEmpty",2),j([r()],A.prototype,"_lastSlotEmpty",2),j([r()],A.prototype,"_linkSlotEmpty",2),j([r()],A.prototype,"_superscriptSlotEmpty",2),A=j([a(z)],A);export{A as FootnoteItem,z as name};
