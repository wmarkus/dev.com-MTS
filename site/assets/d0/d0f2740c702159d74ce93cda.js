import{r as t,i,e,f as o,c as l,b as s,A as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as n}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{W as a}from"/__mirror/assets/597f3dbe3ef56339bfbefa4a";import{c as m,l as d,n as p}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import"/__mirror/assets/5f924eec6274a2d611fc1ea0";import"/__mirror/assets/34233ee5ac8acdb3aa831b25";const _="initial",g="var(--ds-app-color-base-default-fg-heading, #0e1726)",h="0",y="flex",v="1",c="column",b="var(--ds-app-space-micro-2xs, 0.25rem)",S="1rem",f="1rem",$="0",u="0",w="var(--ds-app-space-micro-xs, 0.50rem)",x="flex",E="center",D=i`
  :host {
    display: var(--ds-list-item-display, ${t("block")});
    width: var(--ds-list-item-width, ${t(_)});
  }

  :host .list-item__inner {
    align-items: var(
      --ds-list-item-inner-align-items,
      ${t(E)}
    );
    column-gap: var(
      --ds-list-item-inner-column-gap,
      ${t(w)}
    );
    display: var(--ds-list-item-inner-display, ${t(x)});
    padding-block-start: var(
      --ds-list-item-inner-padding-block-start,
      ${t(S)}
    );
    padding-block-end: var(
      --ds-list-item-inner-padding-block-end,
      ${t(f)}
    );
    padding-inline-start: var(
      --ds-list-item-inner-padding-inline-start,
      ${t($)}
    );
    padding-inline-end: var(
      --ds-list-item-inner-padding-inline-end,
      ${t(u)}
    );
  }

  :host .list-item__content {
    display: var(
      --ds-list-item-content-display,
      ${t(y)}
    );
    flex-grow: var(
      --ds-list-item-content-flex-grow,
      ${t(v)}
    );
    flex-direction: var(
      --ds-list-item-content-flex-direction,
      ${t(c)}
    );
    row-gap: var(
      --ds-list-item-content-row-gap,
      ${t(b)}
    );
  }

  :host .list-item__trailing {
    display: var(
      --ds-list-item-trailing-display,
      ${t("initial")}
    );
  }

  ::slotted([slot='list-item__eyebrow']) {
    font-size: var(
      --ds-list-item-eyebrow-font-size,
      ${t(m.fontSize)}
    ) !important;
    font-weight: var(
      --ds-list-item-eyebrow-font-weight,
      ${t(m.fontWeight)}
    ) !important;
    line-height: var(
      --ds-list-item-eyebrow-line-height,
      ${t(m.lineHeight)}
    ) !important;
    color: var(
      --ds-list-item-eyebrow-color,
      ${t("var(--ds-app-color-base-default-fg-highlight, #005597)")}
    ) !important;
    margin-bottom: var(
      --ds-list-item-eyebrow-margin-bottom,
      ${t(m.marginBottom)}
    ) !important;
  }

  ::slotted([slot='list-item__leading']) {
    color: var(
      --ds-list-item-leading-color,
      ${t(g)}
    ) !important;
    margin-bottom: var(
      --ds-list-item-leading-margin-bottom,
      ${t(h)}
    );
  }

  ::slotted([slot='list-item__title']) {
    font-size: var(
      --ds-list-item-title-font-size,
      ${t(d.fontSize)}
    ) !important;
    font-weight: var(
      --ds-list-item-title-font-weight,
      ${t(d.fontWeight)}
    ) !important;
    line-height: var(
      --ds-list-item-title-line-height,
      ${t(d.lineHeight)}
    ) !important;
    color: var(
      --ds-list-item-title-color,
      ${t("var(--ds-app-color-base-default-fg-heading, #0e1726)")}
    ) !important;
    margin-bottom: var(
      --ds-list-item-title-margin-bottom,
      ${t(d.marginBottom)}
    ) !important;
  }

  ::slotted([slot='list-item__subtext']) {
    font-size: var(
      --ds-list-item-subtext-font-size,
      ${t(p.fontSize)}
    ) !important;
    font-weight: var(
      --ds-list-item-subtext-font-weight,
      ${t(p.fontWeight)}
    ) !important;
    line-height: var(
      --ds-list-item-subtext-line-height,
      ${t(p.lineHeight)}
    ) !important;
    color: var(
      --ds-list-item-subtext-color,
      ${t("var(--ds-app-color-base-default-fg-body, #17253d)")}
    ) !important;
    margin-bottom: var(
      --ds-list-item-subtext-margin-bottom,
      ${t(p.marginBottom)}
    ) !important;
  }
`;var z=Object.defineProperty,O=Object.getOwnPropertyDescriptor,j=(t,i,e,o)=>{for(var l,s=o>1?void 0:o?O(i,e):i,r=t.length-1;r>=0;r--)(l=t[r])&&(s=(o?l(i,e,s):l(s))||s);return o&&s&&z(i,e,s),s};const B="reimagine-list-item";let k=class extends a{constructor(){super(...arguments),this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._leadingSlotEmpty=!0,this._eyebrowSlotEmpty=!0,this._titleSlotEmpty=!0,this._subtextSlotEmpty=!0,this.topDivider=!1,this.bottomDivider=!1,this.trailing=!1}_handleSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length,this._leadingSlotEmpty=0===this._leadingSlot.length,this._eyebrowSlotEmpty=0===this._eyebrowSlot.length,this._titleSlotEmpty=0===this._titleSlot.length,this._subtextSlotEmpty=0===this._subtextSlot.length}_renderOptionalSlot(t,i){return s`
      <div part=${t} class=${t} style="${i?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_renderTopDividerSlot(){return this.topDivider?s`<slot name="list-item__top-divider"><reimagine-divider></reimagine-divider></slot>`:r}_renderBottomDividerSlot(){return this.bottomDivider?s`<slot name="list-item__bottom-divider"><reimagine-divider></reimagine-divider></slot>`:r}_renderTrailingSlot(){return s`
      <div
        part="list-item__trailing"
        class="list-item__trailing"
        style="${this.trailing?"":"display: none;"}"
      >
        <slot name="list-item__trailing">
          <reimagine-icon
            icon="chevron-${"rtl"===this.dir?"left":"right"}"
            size="medium"
          ></reimagine-icon>
        </slot>
      </div>
    `}render(){return s`
      ${this._renderTopDividerSlot()}
      <div part="list-item__inner" class="list-item__inner">
        ${this._renderOptionalSlot("list-item__first",this._firstSlotEmpty)}
        ${this._renderOptionalSlot("list-item__leading",this._leadingSlotEmpty)}
        <div part="list-item__content" class="list-item__content">
          ${this._renderOptionalSlot("list-item__eyebrow",this._eyebrowSlotEmpty)}
          ${this._renderOptionalSlot("list-item__title",this._titleSlotEmpty)}
          ${this._renderOptionalSlot("list-item__subtext",this._subtextSlotEmpty)}
        </div>
        ${this._renderTrailingSlot()}
        ${this._renderOptionalSlot("list-item__last",this._lastSlotEmpty)}
      </div>
      ${this._renderBottomDividerSlot()}
    `}};k.styles=[D],j([e({slot:"list-item__first"})],k.prototype,"_firstSlot",2),j([e({slot:"list-item__last"})],k.prototype,"_lastSlot",2),j([e({slot:"list-item__leading"})],k.prototype,"_leadingSlot",2),j([e({slot:"list-item__eyebrow"})],k.prototype,"_eyebrowSlot",2),j([e({slot:"list-item__title"})],k.prototype,"_titleSlot",2),j([e({slot:"list-item__subtext"})],k.prototype,"_subtextSlot",2),j([o()],k.prototype,"_firstSlotEmpty",2),j([o()],k.prototype,"_lastSlotEmpty",2),j([o()],k.prototype,"_leadingSlotEmpty",2),j([o()],k.prototype,"_eyebrowSlotEmpty",2),j([o()],k.prototype,"_titleSlotEmpty",2),j([o()],k.prototype,"_subtextSlotEmpty",2),j([l({type:Boolean,reflect:!0,attribute:"top-divider"})],k.prototype,"topDivider",2),j([l({type:Boolean,reflect:!0,attribute:"bottom-divider"})],k.prototype,"bottomDivider",2),j([l({type:Boolean,reflect:!0,attribute:"trailing"})],k.prototype,"trailing",2),k=j([n(B)],k);export{k as ListItem,B as name};
