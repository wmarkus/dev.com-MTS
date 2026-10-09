import{r as t,i as e,e as o,f as a,b as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{b as i,H as n,c as s}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{i as l,d as p}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{s as d,b as h,c,d as y}from"/__mirror/assets/daab3f96e18c70a4751d1a7b";import{v as m}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{n as b}from"/__mirror/assets/b261b011546c5001df09e043";import{name as g}from"/__mirror/assets/e03438b5798d9e90c6c162a8";const f={leftContentRowGap:`${t(c)}`,rightContentGap:`${t(h)}`,leftContentTopGap:`${t(d)}`,leftContentBottomGap:`${t(d)}`},_={display:"flex",flexDirection:"column",rowGap:`${t(c)}`},v={display:"flex",flexDirection:"column",gap:`${t(y)}`},u=e`
  :host {
    color: var(--ds-app-color-base-default-fg-body, #17253d);
  }

  .left-content {
    display: var(--ds-article-header-left-content-display, flex);
    flex-direction: var(--ds-article-header-left-content-direction, column);
    gap: var(--ds-left-content-gap, 1.5625rem);
  }

  .row {
    display: var(--ds-article-header-left-content-row-display, flex);
    flex-direction: var(--ds-article-header-left-content-direction, row-reverse);
    gap: var(
      --ds-article-header-left-content-row-gap,
      ${t(f.leftContentRowGap)}
    );
    justify-content: var(--ds-article-header-left-content-justify-content, space-between);
  }

  .right-content {
    display: var(--ds-article-header-right-content-display, flex);
    flex-direction: var(--ds-article-header-right-content-direction, column);
    gap: var(--ds-article-header-right-content-gap, ${t(f.rightContentGap)});
    padding-top: var(--ds-article-header-right-content-padding-top, 1.5rem);
  }

  .top {
    display: var(--ds-article-header-left-content-top-display, flex);
    flex-direction: var(--ds-article-header-left-content-top-direction, column);
    gap: var(
      --ds-article-header-left-content-top-gap,
      ${t(f.leftContentTopGap)}
    );
  }

  .bottom {
    display: var(--ds-article-header-left-content-bottom-display, flex);
    flex-direction: var(--ds-article-header-left-content-bottom-direction, column);
    gap: var(
      --ds-article-header-left-content-bottom-gap,
      ${t(f.leftContentBottomGap)}
    );
  }

  .author-list {
    display: var(--ds-author-data-display, ${t(v.display)});
    flex-direction: var(
      --ds-author-data-direction,
      ${t(v.flexDirection)}
    );
    gap: var(--ds-author-data-row-gap, ${t(v.gap)});
  }

  ::slotted([slot='top-eyebrow']),
  ::slotted([slot='bottom-eyebrow']) {
    color: var(
      --ds-heading-block-eyebrow-label-color,
      var(--ds-app-color-base-default-fg-highlight, #005597)
    );
    font-size: var(--ds-heading-block-eyebrow-label-font-size, 0.75rem);
    font-weight: var(--ds-heading-block-eyebrow-label-font-weight, 600);
    line-height: var(--ds-heading-block-eyebrow-label-line-height, 1rem);
    letter-spacing: var(--ds-heading-block-eyebrow-label-letter-spacing, 0.08em);
  }

  .bottom-body-text {
    font-size: var(--ds-app-type-body-s-font-size, 0.875rem);
    font-weight: var(--ds-app-type-body-s-font-weight, 400);
    line-height: var(--ds-app-type-body-s-line-height, 1.25rem);
    letter-spacing: var(--ds-app-type-body-s-letter-spacing, -0.03em);
  }

  .bottom-label {
    font-size: var(--ds-app-type-label-s-font-size, 0.75rem);
    font-weight: var(--ds-app-type-label-s-font-weight, 600);
    line-height: var(--ds-app-type-label-s-line-height, 1rem);
    letter-spacing: var(--ds-app-type-label-s-letter-spacing, 0);
  }

  .body-text,
  ::slotted(div[slot='body-text']) {
    display: var(--ds-body-text-display, ${t(_.display)});
    flex-direction: var(
      --ds-body-text-direction,
      ${t(_.flexDirection)}
    );
    row-gap: var(--ds-body-text-gap, ${t(_.rowGap)});
  }
`,w=e`
  @media (min-width: ${t(m.md)}) {
    .content-divider {
      display: none;
    }

    .row {
      --ds-article-header-left-content-direction: column;
    }

    .right-content {
      --ds-article-header-right-content-padding-top: 0;
    }
  }

  @media (max-width: ${t(m.sm)}) {
    :host([type='multiple-authors']) .row {
      --ds-article-header-left-content-direction: column;
    }
  }
`;var E=Object.defineProperty,x=Object.getOwnPropertyDescriptor,$=Object.getPrototypeOf,T=Reflect.get,C=(t,e,o,a)=>{for(var r,i=a>1?void 0:a?x(e,o):e,n=t.length-1;n>=0;n--)(r=t[n])&&(i=(a?r(e,o,i):r(i))||i);return a&&i&&E(e,o,i),i};const L="reimagine-editorial-article-header";let O=class extends i{constructor(){super(...arguments),this._topEyebrowEmpty=!0,this._topTagEmpty=!0,this._headingEmpty=!0,this._bottomEyebrowEmpty=!0,this._bottomBodyTextEmpty=!0,this._bottomLabelEmpty=!0,this._contentDividerEmpty=!0,this._authorListEmpty=!0}_handleSlotChange(t){this._topEyebrowEmpty=0===this._topEyebrow.length,this._headingEmpty=0===this._heading.length,this._topTagEmpty=0===this._topTag.length,this._bottomEyebrowEmpty=0===this._bottomEyebrow.length,this._bottomBodyTextEmpty=0===this._bottomBodyText.length,this._bottomLabelEmpty=0===this._bottomLabel.length,this._contentDividerEmpty=0===this._contentDivider.length,this._authorListEmpty=0===this._authorList.length,this._updateSlotDefaultAttributes(t)}_updateSlotDefaultAttributes(t){const e=t.target.name;"heading"===e&&!this._headingEmpty&&this._updateHeadingBlockAttributes(this._heading,n["size-md"]),"top-tag"===e&&!this._topTagEmpty&&this._updateTopTagAttributes(this._topTag,"appearance","base")}_updateHeadingBlockAttributes(t,e){const o=t.filter(t=>l(t,b));o.length>0&&o.forEach(t=>{l(t,b)&&!t.hasAttribute("size")&&t.setAttribute("size",e)})}_updateTopTagAttributes(t,e,o){const a=t.filter(t=>l(t,g));a.length>0&&a.forEach(t=>{l(t,g)&&!t.hasAttribute(e)&&t.setAttribute(e,o)})}_renderOptionalSlot(t,e){return r`
      <div part=${t} class=${t} style="${e?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_renderLeftContent(){return r`
      <div part="top" class="top">
        <div part="top-eyebrow" class="top-eyebrow">
          ${this._renderOptionalSlot("top-eyebrow",this._topEyebrowEmpty)}
        </div>
        ${this._renderOptionalSlot("top-tag",this._topTagEmpty)}
      </div>

      <div part="bottom" class="bottom">
        ${this._renderOptionalSlot("bottom-eyebrow",this._bottomEyebrowEmpty)}
        ${this._renderOptionalSlot("author-list",this._authorListEmpty)}
        ${this._renderOptionalSlot("bottom-body-text",this._bottomBodyTextEmpty)}
        ${this._renderOptionalSlot("bottom-label",this._bottomLabelEmpty)}
      </div>
    `}_renderRightContent(){return r`
      ${this._renderOptionalSlot("heading",this._headingEmpty)}
      <div part="body-text" class="body-text">
        <slot name="body-text"></slot>
      </div>
    `}_renderBlade(){const t="container",e=r`
      <reimagine-layout
        configuration="${s.col2editorial}"
        density="relaxed"
        class="content"
        part="content"
      >
        <reimagine-layout-column part="left-content" class="left-content">
          <div part="row" class="row">${this._renderLeftContent()}</div>
          <div part="content-divider" class="content-divider">
            ${this._renderOptionalSlot("content-divider",this._contentDividerEmpty)}
          </div>
        </reimagine-layout-column>
        <reimagine-layout-column part="right-content" class="right-content">
          ${this._renderRightContent()}
        </reimagine-layout-column>
      </reimagine-layout>
    `;return this.baseContent?r` <div class=${t} part=${t}>${e}</div> `:r`
      <reimagine-container class=${t} part=${t}>
        ${e}
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var S,D,j;O.styles=[...(S=O,D=O,j="styles",T($(S),j,D)||[]),u,w],C([o({slot:"top-eyebrow"})],O.prototype,"_topEyebrow",2),C([o({slot:"heading"})],O.prototype,"_heading",2),C([o({slot:"top-tag"})],O.prototype,"_topTag",2),C([o({slot:"bottom-eyebrow"})],O.prototype,"_bottomEyebrow",2),C([o({slot:"bottom-body-text"})],O.prototype,"_bottomBodyText",2),C([o({slot:"bottom-label"})],O.prototype,"_bottomLabel",2),C([o({slot:"content-divider"})],O.prototype,"_contentDivider",2),C([o({slot:"author-list"})],O.prototype,"_authorList",2),C([a()],O.prototype,"_topEyebrowEmpty",2),C([a()],O.prototype,"_topTagEmpty",2),C([a()],O.prototype,"_headingEmpty",2),C([a()],O.prototype,"_bottomEyebrowEmpty",2),C([a()],O.prototype,"_bottomBodyTextEmpty",2),C([a()],O.prototype,"_bottomLabelEmpty",2),C([a()],O.prototype,"_contentDividerEmpty",2),C([a()],O.prototype,"_authorListEmpty",2),O=C([p(L)],O);export{O as EditorialArticleHeader,L as name};
