import{r as t,i as s,e as o,f as e,b as a}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{SurfaceElement as i}from"/__mirror/assets/e09cf4eae8f90fbcbeb198a9";import{c as r}from"/__mirror/assets/a0679f491075e7b16b00f1b4";import{i as l,s as d,q as p,d as n}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{l as m,T as h}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{v as c}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{name as b}from"/__mirror/assets/1744c47504083b26d862e98f";import{name as g}from"/__mirror/assets/5f924eec6274a2d611fc1ea0";const y="flex",f="column",w="var(--ds-app-space-surface-comfortable, 1.5rem)",_="var(--ds-app-space-surface-comfortable, 1.5rem)",L="var(--ds-app-space-surface-comfortable, 1.5rem)",v="var(--ds-app-space-surface-comfortable, 1.5rem)",E="flex",$="column",k="var(--ds-app-space-micro-m, 1rem)",u="var(--ds-app-space-micro-m, 1rem)",x="var(--ds-app-space-micro-m, 1rem)",R="var(--ds-app-space-micro-m, 1rem)",S="var(--ds-app-space-micro-m, 1rem)",C={labelColor:"var(--ds-app-color-base-default-fg-heading, #0e1726)",labelFontWeight:m.fontWeight,labelFontSize:m.fontSize,labelLineHeight:m.lineHeight},j=s`
  :host {
    display: var(--ds-card-data-display, ${t(y)});
    flex-direction: var(--ds-card-data-flex-direction, ${t(f)});
    padding-block-start: var(
      --ds-card-data-padding-block-start,
      ${t(w)}
    );
    padding-block-end: var(
      --ds-card-data-padding-block-end,
      ${t(_)}
    );
    padding-inline-start: var(
      --ds-card-data-padding-inline-start,
      ${t(L)}
    );
    padding-inline-end: var(
      --ds-card-data-padding-inline-end,
      ${t(v)}
    );
  }

  ::slotted([slot='title']) {
    --ds-text-block-gap: 0;

    margin-block-end: var(
      --ds-card-data-title-margin-block-end,
      ${t("var(--ds-app-space-micro-m, 1rem)")}
    );
  }

  .rows {
    display: var(--ds-card-data-rows-display, ${t(E)});
    flex-direction: var(
      --ds-card-data-rows-flex-direction,
      ${t($)}
    );
    gap: var(--ds-card-data-rows-gap, ${t(k)});
    padding-block-start: var(
      --ds-card-data-rows-padding-block-start,
      ${t(u)}
    );
    padding-block-end: var(
      --ds-card-data-rows-padding-block-end,
      ${t(x)}
    );
  }

  ::slotted([slot='rows-left-label']),
  ::slotted([slot='rows-right-label']),
  ::slotted([slot='bottom-label']) {
    color: var(--ds-card-data-label-color, ${t(C.labelColor)});
    font-weight: var(
      --ds-card-data-label-font-weight,
      ${t(C.labelFontWeight)}
    ) !important;
    font-size: var(
      --ds-card-data-label-font-size,
      ${t(C.labelFontSize)}
    ) !important;
    line-height: var(
      --ds-card-data-label-line-height,
      ${t(C.labelLineHeight)}
    ) !important;
  }

  .rows-left,
  .rows-right,
  .rows-left-list,
  .rows-right-list {
    display: flex;
    gap: var(--ds-app-space-micro-xs, 0.25rem);
    flex-direction: column;
    width: 100%;
  }

  :host ::slotted([slot='rows-left']),
  :host ::slotted([slot='rows-right']) {
    width: fit-content;
  }

  .bottom {
    display: flex;
    gap: var(--ds-app-space-micro-xs, 0.25rem);
    flex-direction: column;
    padding-block-start: var(
      --ds-card-data-bottom-padding-block-start,
      ${t(R)}
    );
    padding-block-end: var(
      --ds-card-data-bottom-padding-block-end,
      ${t(S)}
    );
  }

  .bottom-links {
    --ds-divider-vh: auto;

    display: flex;
    gap: var(--ds-app-space-micro-s, 0.75rem);
    flex-wrap: wrap;
  }

  ::slotted([slot='bottom-links']) {
    display: inline-flex;
    flex-direction: row;
    gap: var(--ds-app-space-micro-s, 0.75rem);
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`,z=s`
  @media (min-width: ${t(c.md)}) {
    .rows {
      --ds-card-data-rows-flex-direction: row;
    }
  }
`;var B=Object.defineProperty,O=Object.getOwnPropertyDescriptor,F=Object.getPrototypeOf,H=Reflect.get,P=(t,s,o,e)=>{for(var a,i=e>1?void 0:e?O(s,o):s,r=t.length-1;r>=0;r--)(a=t[r])&&(i=(e?a(s,o,i):a(i))||i);return e&&i&&B(s,o,i),i};const W="reimagine-card-data";let D=class extends i{constructor(){super(...arguments),this._titleEmpty=!0,this._rowsLeftEmpty=!0,this._rowsLeftLabelEmpty=!0,this._rowsLeftListEmpty=!0,this._rowsRightEmpty=!0,this._rowsRightLabelEmpty=!0,this._rowsRightListEmpty=!0,this._bottomLabelEmpty=!0,this._bottomLinksEmpty=!0,this._isBottomEmpty=!0}_handleSlotChange(t){this._titleEmpty=0===this._title.length,this._rowsLeftLabelEmpty=0===this._rowsLeftLabel.length,this._rowsLeftListEmpty=0===this._rowsLeftList.length,this._rowsLeftEmpty=this._rowsLeftLabelEmpty&&this._rowsLeftListEmpty,this._rowsRightLabelEmpty=0===this._rowsRightLabel.length,this._rowsRightListEmpty=0===this._rowsRightList.length,this._rowsRightEmpty=this._rowsRightLabelEmpty&&this._rowsRightListEmpty,this._bottomLabelEmpty=0===this._bottomLabel.length,this._bottomLinksEmpty=0===this._bottomLinks.length,this._isBottomEmpty=this._bottomLinksEmpty&&this._bottomLabelEmpty;const s=t.target.name;if("title"===s&&!this._titleEmpty){const t=this._title.filter(t=>l(t,b));d(t,{size:h["size-2xs"]})}"bottom-links"===s&&!this._bottomLinksEmpty&&this._bottomLinks.forEach(t=>{if("li"===t.nodeName.toLowerCase()&&t instanceof Element){const s=p(t,g);s&&d([s],{orientation:"vertical"})}})}_renderSlot(t,s){return a`
      <div part=${t} class=${t} style="${s?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}firstUpdated(){super.firstUpdated(),this.surface=this.surface||"solid-border"}render(){return a`
      <div class="top" part="top">${this._renderSlot("title",this._titleEmpty)}</div>

      ${this._renderSlot("top-divider",this._titleEmpty)}

      <div
        class="rows"
        part="rows"
        style="${this._rowsLeftEmpty&&this._rowsRightEmpty?"display: none;":""}"
      >
        <div
          class="rows-left"
          part="rows-left"
          style="${this._rowsLeftEmpty?"display: none;":""}"
        >
          <slot name="rows-left-label" @slotchange="${this._handleSlotChange}"></slot>
          <ul class="rows-left-list" part="rows-left-list">
            <slot name="rows-left-list" @slotchange="${this._handleSlotChange}"></slot>
          </ul>
        </div>
        <div
          class="rows-right"
          part="rows-right"
          style="${this._rowsRightEmpty?"display: none;":""}"
        >
          <slot name="rows-right-label" @slotchange="${this._handleSlotChange}"></slot>
          <ul class="rows-right-list" part="rows-right-list">
            <slot name="rows-right-list" @slotchange="${this._handleSlotChange}"></slot>
          </ul>
        </div>
      </div>

      ${this._renderSlot("bottom-divider",this._isBottomEmpty)}

      <div class="bottom" part="bottom" style="${this._isBottomEmpty?"display: none;":""}">
        <slot name="bottom-label" @slotchange="${this._handleSlotChange}"></slot>
        <ul class="bottom-links" part="bottom-links">
          <slot name="bottom-links" @slotchange="${this._handleSlotChange}"></slot>
        </ul>
      </div>
    `}};var U,q,N;D.styles=[...(U=D,q=D,N="styles",H(F(U),N,q)||[]),r,j,z],P([o({slot:"title"})],D.prototype,"_title",2),P([o({slot:"rows-left-label"})],D.prototype,"_rowsLeftLabel",2),P([o({slot:"rows-left-list"})],D.prototype,"_rowsLeftList",2),P([o({slot:"rows-right-label"})],D.prototype,"_rowsRightLabel",2),P([o({slot:"rows-right-list"})],D.prototype,"_rowsRightList",2),P([o({slot:"bottom-label"})],D.prototype,"_bottomLabel",2),P([o({slot:"bottom-links"})],D.prototype,"_bottomLinks",2),P([e()],D.prototype,"_titleEmpty",2),P([e()],D.prototype,"_rowsLeftEmpty",2),P([e()],D.prototype,"_rowsLeftLabelEmpty",2),P([e()],D.prototype,"_rowsLeftListEmpty",2),P([e()],D.prototype,"_rowsRightEmpty",2),P([e()],D.prototype,"_rowsRightLabelEmpty",2),P([e()],D.prototype,"_rowsRightListEmpty",2),P([e()],D.prototype,"_bottomLabelEmpty",2),P([e()],D.prototype,"_bottomLinksEmpty",2),P([e()],D.prototype,"_isBottomEmpty",2),D=P([n(W)],D);export{D as CardData,W as name};
