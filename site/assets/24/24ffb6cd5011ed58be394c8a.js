import{r as t,i as e,c as o,e as i,f as s,b as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{j as n,d as l}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{R as a,r as d}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{M as h,x as c}from"/__mirror/assets/6ad137053d5da8fc91d912f1";const _="flex",u="column",m="var(--ds-app-space-micro-m, 0.75rem)",f=e`
  ol {
    list-style-type: var(
      --ds-footnote-orderd-list-style-type,
      ${t("none")}
    );
    padding: 0;
    margin: 0;
    display: var(--ds-footnote-orderd-list-display, ${t(_)});
    flex-direction: var(
      --ds-footnote-orderd-list-felx-direction,
      ${t(u)}
    );
    row-gap: var(--ds-footnote-orderd-list-row-gap, ${t(m)});
  }

  :host reimagine-divider {
    margin-bottom: var(
      --ds-footnote-divider-margin-bottom,
      ${t("var(--ds-app-space-micro-xl, 1.5rem)")}
    );
  }
`;var p=Object.defineProperty,S=Object.getOwnPropertyDescriptor,y=(t,e,o,i)=>{for(var s,r=i>1?void 0:i?S(e,o):e,n=t.length-1;n>=0;n--)(s=t[n])&&(r=(i?s(e,o,r):s(r))||r);return i&&r&&p(e,o,r),r};const b="reimagine-footnote";let g=class extends a{constructor(){super(...arguments),this.withDivider=!1,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._msRteLinksWithListener=new WeakSet,this._msRteLinksCount=0,this._debouncedGenerateHrefValue=d(0,this._generateHrefValueForFootnoteItems.bind(this)),this._debouncedSetRoleAttributes=d(0,this._setRoleAttributesOnFootnoteItems.bind(this)),this._boundHandleMsRteLinkClick=this._handleMsRteLinkClick.bind(this)}_handleSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length,this._debouncedSetRoleAttributes(),this._debouncedGenerateHrefValue()}_setRoleAttributesOnFootnoteItems(){const t=this.renderRoot.querySelector('slot[name="footnote__item"]');t&&t.assignedNodes({flatten:!0}).forEach(t=>{t.nodeType===Node.ELEMENT_NODE&&t.setAttribute("role","listitem")})}_renderTopDividerSlot(){return this.withDivider?r`<reimagine-divider></reimagine-divider>`:""}_generateEventsForMSRteLink(){const t=document.querySelectorAll(`a${h}`);!t||0===t.length||t.forEach(t=>{this._msRteLinksWithListener.has(t)||(t.addEventListener("click",this._boundHandleMsRteLinkClick),this._msRteLinksWithListener.add(t),this._msRteLinksCount++)})}_generateHrefValueForFootnoteItems(){!this.footnoteItemSlot||0===this.footnoteItemSlot.length||this.footnoteItemSlot.forEach(t=>{t.updateHrefValue&&"function"==typeof t.updateHrefValue&&t.generateHrefValue()})}_handleMsRteLinkClick(t){t.preventDefault();const e=t.currentTarget;if(!e)return;const o=e.getAttribute("href"),i=e.getAttribute("id");if(null==o||!o.startsWith("#")||!i)return;const s=this.querySelector(o);if(!s||"function"!=typeof s.updateHrefValue)return;s.updateHrefValue(i);const r=s.querySelector('[slot="footnote-item__superscript"]');r&&n(r,t,c)}firstUpdated(){this._handleSlotChange(),this._generateEventsForMSRteLink()}disconnectedCallback(){super.disconnectedCallback(),this._debouncedGenerateHrefValue&&this._debouncedGenerateHrefValue.cancel(),this._debouncedSetRoleAttributes&&this._debouncedSetRoleAttributes.cancel(),this._msRteLinksCount>0&&document.querySelectorAll(`a${h}`).forEach(t=>{this._msRteLinksWithListener.has(t)&&(t.removeEventListener("click",this._boundHandleMsRteLinkClick),this._msRteLinksWithListener.delete(t),this._msRteLinksCount--)})}_renderOptionalSlot(t="footnote-item__first",e=this._firstSlotEmpty){return r`
      <div part=${t} class=${t} style="${e?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_buildFootnoteMarkup(){return r`
      ${this._renderTopDividerSlot()}
      <ol>
        <slot name="footnote__item" @slotchange=${this._handleSlotChange}></slot>
      </ol>
    `}render(){return r` ${this._renderOptionalSlot("footnote-item__first",this._firstSlotEmpty)}
    ${this._buildFootnoteMarkup()}
    ${this._renderOptionalSlot("footnote-item__last",this._lastSlotEmpty)}`}};g.styles=[f],y([o({type:Boolean,reflect:!0,attribute:"with-divider"})],g.prototype,"withDivider",2),y([i({slot:"footnote-item__first"})],g.prototype,"_firstSlot",2),y([i({slot:"footnote-item__last"})],g.prototype,"_lastSlot",2),y([i({slot:"footnote__item"})],g.prototype,"footnoteItemSlot",2),y([s()],g.prototype,"_firstSlotEmpty",2),y([s()],g.prototype,"_lastSlotEmpty",2),g=y([l(b)],g);export{g as Footnote,b as name};
