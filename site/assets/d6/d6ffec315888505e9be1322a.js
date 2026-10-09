import{r as t,i as e,e as o,f as n,b as i,o as a}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{b as r,H as s,c as l}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{i as p,d as c}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{c as d,n as h}from"/__mirror/assets/b261b011546c5001df09e043";import{c as m,b as y,e as u,f as _}from"/__mirror/assets/daab3f96e18c70a4751d1a7b";import{v as g}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";const S={contentGapDefault:`${t(_)}`,contentTopBottomGap:`${t(u)}`,contentHeaderContainerGap:`${t(y)}`,contentListDefaultGap:`${t(m)}`},b="var(--ds-app-type-heading-2xs-font-size, 1.25rem)",f="var(--ds-app-type-heading-2xs-line-height, 1.75rem)",$="var(--ds-editorial-chapter-letter-spacing, 0)",v=e`
  :host {
    color: var(--ds-app-color-base-default-fg-body, #17253d);
  }

  .sidebar {
    --ds-layout-column-amount: 4;
  }

  .content {
    --ds-layout-column-amount: 7;
  }

  .sidebar-title ::slotted([slot='sidebar-title']) {
    font-weight: var(
      --ds-editorial-article-chapter-sidebar-title-font-weight,
      ${t("var(--ds-app-type-heading-2xs-font-weight, 600)")}
    ) !important;
    font-size: var(
      --ds-editorial-article-chapter-sidebar-title-font-size,
      ${t(b)}
    ) !important;
    line-height: var(
      --ds-editorial-article-chapter-sidebar-title-line-height,
      ${t(f)}
    ) !important;
    letter-spacing: var(
      --ds-editorial-article-chapter-sidebar-title-letter-spacing,
      ${t($)}
    ) !important;
  }

  .content article,
  .content-header-container,
  .content-top,
  .content-bottom {
    display: flex;
    flex-direction: column;
    gap: var(
      --ds-editorial-article-chapter-content-gap-default,
      ${t(S.contentGapDefault)}
    );
  }

  .content-top,
  .content-bottom {
    gap: var(
      --ds-editorial-article-chapter-content-top-bottom-gap,
      ${t(S.contentTopBottomGap)}
    );
  }

  .content-header-container {
    gap: var(
      --ds-editorial-article-chapter-content-header-container-gap,
      ${t(S.contentHeaderContainerGap)}
    );
  }

  .content-subheader {
    --ds-heading-block-content-text-font-size: var(--ds-app-type-body-l-font-size, 1.25rem) !important;
    --ds-heading-block-content-text-font-weight: var(--ds-app-type-body-l-font-weight, 400) !important;
    --ds-heading-block-content-text-line-height: var(--ds-app-type-body-l-line-height, 1.5rem) !important;
    --ds-heading-block-content-text-letter-spacing: var(
      --ds-app-type-body-l-letter-spacing,
      -0.03em
    ) !important;
    --ds-heading-block-content-text-display: ${t(d.contentDisplay)};
    --ds-heading-block-content-text-flex-direction: ${t(d.contentFlexDirection)};
    --ds-heading-block-content-text-row-gap: ${t(S.contentListDefaultGap)};
    display: flex;
    flex-direction: column;
    gap: var(
      --ds-editorial-article-chapter-content-subheader-gap,
      ${t(S.contentListDefaultGap)}
    );
  }

  .content-list {
    display: flex;
    flex-direction: column;
    gap: var(
      --ds-editorial-article-chapter-content-list-gap-default,
      ${t(S.contentListDefaultGap)}
    );
  }

  .content-list ::slotted(*) {
    font-size: var(--ds-app-type-body-m-font-size, 1.125rem) !important;
  }

  .content-list ::slotted(.content-list-header) {
    font-size: var(--ds-app-type-heading-2xs-font-size, 1.65rem) !important;
  }

  .content-list ::slotted(ul) {
    display: flex;
    flex-direction: column;
    gap: var(
      --ds-editorial-article-chapter-content-list-gap-default,
      ${t(S.contentListDefaultGap)}
    );
    padding-inline-start: 20px;
    margin-bottom: 0 !important;
  }
`,E=e`
  @media (min-width: ${t(g.lg)}) {
    .sidebar {
      --ds-layout-column-amount: 5;
    }

    .content {
      --ds-layout-column-amount: 12;
    }
  }
`;var x=Object.defineProperty,D=Object.getOwnPropertyDescriptor,B=Object.getPrototypeOf,H=Reflect.get,L=(t,e,o,n)=>{for(var i,a=n>1?void 0:n?D(e,o):e,r=t.length-1;r>=0;r--)(i=t[r])&&(a=(n?i(e,o,a):i(a))||a);return n&&a&&x(e,o,a),a};const O="reimagine-editorial-article-chapter",T="top-divider",z="sidebar-title",A="content-header",k="content-subheader",C="content-top",G="content-list",w="content-bottom",j="content-footer";let F=class extends r{constructor(){super(...arguments),this._topDividerSlotEmpty=!0,this._sidebarTitleSlotEmpty=!0,this._contentHeaderSlotEmpty=!0,this._contentSubheaderSlotEmpty=!0,this._contentTopSlotEmpty=!0,this._contentListSlotEmpty=!0,this._contentBottomSlotEmpty=!0,this._contentFooterSlotEmpty=!0}_handleSlotChange(t){this._topDividerSlotEmpty=0===this._topDividerSlot.length,this._sidebarTitleSlotEmpty=0===this._sidebarTitleSlot.length,this._contentHeaderSlotEmpty=0===this._contentHeaderSlot.length,this._contentSubheaderSlotEmpty=0===this._contentSubheaderSlot.length,this._contentTopSlotEmpty=0===this._contentTopSlot.length,this._contentListSlotEmpty=0===this._contentListSlot.length,this._contentBottomSlotEmpty=0===this._contentBottomSlot.length,this._contentFooterSlotEmpty=0===this._contentFooterSlot.length,this._updateSlotDefaultAttributes(t)}_updateSlotDefaultAttributes(t){const e=t.target.name;e===A&&!this._contentHeaderSlotEmpty&&this._updateHeadingBlockAttributes(this._contentHeaderSlot,s["size-sm"]),e===k&&!this._contentSubheaderSlotEmpty&&this._updateHeadingBlockAttributes(this._contentSubheaderSlot,s["size-xs"]),e===C&&!this._contentTopSlotEmpty&&this._updateHeadingBlockAttributes(this._contentTopSlot,s["size-xs"]),e===w&&!this._contentBottomSlotEmpty&&this._updateHeadingBlockAttributes(this._contentBottomSlot,s["size-xs"]),e===G&&!this._contentListSlotEmpty&&this._updateContentListElements()}_updateHeadingBlockAttributes(t,e){const o=t.filter(t=>p(t,h));o.length>0&&o.forEach(t=>{p(t,h)&&!t.hasAttribute("size")&&t.setAttribute("size",e)})}_updateContentListElements(){this._contentListSlot.forEach(t=>{"ul"===t.nodeName.toLowerCase()?(t.setAttribute("class","content-list-items"),t.setAttribute("part","content-list-items")):(t.setAttribute("class","content-list-header"),t.setAttribute("part","content-list-header"))})}_renderOptionalSlot(t,e){return i`
      <div part=${t} class=${t} style="${e?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_renderOptionalContainer(t,e,o){return i`
      <reimagine-container
        class=${t}
        part=${t}
        style="${o?"display: none;":""}"
      >
        ${e}
      </reimagine-container>
    `}_renderBlade(){const t=["divider-container","container"],e=i`
      <reimagine-layout
        part="top"
        class="top"
        configuration=${a(l.col1even)}
      >
        <reimagine-layout-column>
          ${this._renderOptionalSlot(T,this._topDividerSlotEmpty)}
        </reimagine-layout-column>
      </reimagine-layout>
    `,o=i`
      <reimagine-layout
        part="base"
        class="base"
        configuration=${a(l.col2editorial)}
      >
        <reimagine-layout-column part="sidebar" class="sidebar">
          <aside role="complementary" aria-label="${a(this.id)}">
            ${this._renderOptionalSlot(z,this._sidebarTitleSlotEmpty)}
          </aside>
        </reimagine-layout-column>
        <reimagine-layout-column part="content" class="content">
          <article>
            <div part="content-header-container" class="content-header-container">
              ${this._renderOptionalSlot(A,this._contentHeaderSlotEmpty)}
              ${this._renderOptionalSlot(k,this._contentSubheaderSlotEmpty)}
            </div>
            ${this._renderOptionalSlot(C,this._contentTopSlotEmpty)}
            ${this._renderOptionalSlot(G,this._contentListSlotEmpty)}
            ${this._renderOptionalSlot(w,this._contentBottomSlotEmpty)}
            ${this._renderOptionalSlot(j,this._contentFooterSlotEmpty)}
          </article>
        </reimagine-layout-column>
      </reimagine-layout>
    `;return this.baseContent?i`
        <div class=${t[0]} part=${t[0]}>${e}</div>
        <div class=${t[1]} part=${t[1]}>${o}</div>
      `:i`
      ${this._renderOptionalContainer(t[0],e,this._topDividerSlotEmpty)}
      <reimagine-container class=${t[1]} part=${t[1]}>
        ${o}
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var P,N,R;F.styles=[...(P=F,N=F,R="styles",H(B(P),R,N)||[]),v,E],L([o({slot:T})],F.prototype,"_topDividerSlot",2),L([o({slot:z})],F.prototype,"_sidebarTitleSlot",2),L([o({slot:A})],F.prototype,"_contentHeaderSlot",2),L([o({slot:k})],F.prototype,"_contentSubheaderSlot",2),L([o({slot:C})],F.prototype,"_contentTopSlot",2),L([o({slot:G})],F.prototype,"_contentListSlot",2),L([o({slot:w})],F.prototype,"_contentBottomSlot",2),L([o({slot:j})],F.prototype,"_contentFooterSlot",2),L([n()],F.prototype,"_topDividerSlotEmpty",2),L([n()],F.prototype,"_sidebarTitleSlotEmpty",2),L([n()],F.prototype,"_contentHeaderSlotEmpty",2),L([n()],F.prototype,"_contentSubheaderSlotEmpty",2),L([n()],F.prototype,"_contentTopSlotEmpty",2),L([n()],F.prototype,"_contentListSlotEmpty",2),L([n()],F.prototype,"_contentBottomSlotEmpty",2),L([n()],F.prototype,"_contentFooterSlotEmpty",2),F=L([c(O)],F);export{F as EditorialArticleChapter,O as name};
