import{r as t,i as e,c as o,e as a,f as s,b as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i,a as l,q as d,e as n,f as c,d as p}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{o as h,T as m}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{D as b}from"/__mirror/assets/ae4bf4f4ba8e8d905a9a94c2";import{s as g}from"/__mirror/assets/579a4c6140e643b41d22eee8";import{b as f,v as u}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{SurfaceElement as _}from"/__mirror/assets/e09cf4eae8f90fbcbeb198a9";import{S as y,k as S,T as v,i as x,y as E,J as k}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{name as C}from"/__mirror/assets/1744c47504083b26d862e98f";import{name as $}from"/__mirror/assets/8257e2a086fb91e13056fdae";import{name as B}from"/__mirror/assets/ea6784fd34f0ec31a8e3ea36";import{n as w}from"/__mirror/assets/a6479ea808b36b42c5f26c81";import{a as A,n as j}from"/__mirror/assets/a6c6f415f3fcc13d76b9625a";const T={display:"flex",flexDirection:"column",gap:"var(--ds-app-space-micro-2xl, 3rem)",paddingInline:"var(--ds-app-space-surface-comfortable, 1.5rem)",paddingBlock:"var(--ds-app-space-surface-comfortable, 1.5rem)",borderRadius:"var(--ds-app-radii-l, 1.5rem)",gapTransition:`gap ${b.d800} ease-in-out`,height:"100%",justifyContent:"space-between"},O="flex",D="column",z="var(--ds-app-space-micro-s, 0.75rem)",I="100%",P=e`
  :host {
    --ds-surface-box-shadow: var(
      --ds-elevation-level-2,
      0px 2px 4px rgba(0, 0, 0, 0.14) 0px 0px 2px rgba(0, 0, 0, 0.12)
    );
    --ds-surface-solid-border-box-shadow: var(
      --ds-elevation-level-2,
      0px 2px 4px rgba(0, 0, 0, 0.14) 0px 0px 2px rgba(0, 0, 0, 0.12)
    );
    --ds-badge-box-shadow: none;
    --ds-surface-border-radius: var(
      --ds-card-badge-radius,
      ${t(T.borderRadius)}
    );
    display: var(--ds-card-badge-display, ${t(T.display)});
    flex-direction: var(
      --ds-card-badge-flex-direction,
      ${t(T.flexDirection)}
    );
    gap: var(--ds-card-badge-gap, ${t(T.gap)});
    padding-inline: var(
      --ds-card-badge-padding-inline,
      ${t(T.paddingInline)}
    );
    padding-block: var(--ds-card-badge-padding-block, ${t(T.paddingBlock)});
    height: var(--ds-card-badge-height, ${t(T.height)});
    width: var(--ds-card-badge-width, auto);
    max-width: var(--ds-card-badge-max-width, initial);
    justify-content: var(
      --ds-card-badge-justify-content,
      ${t(T.justifyContent)}
    );
    align-items: var(--ds-card-badge-align-items, flex-start);
    text-align: var(--ds-card-badge-text-align, start);
  }

  :host([alignment='center']) {
    --ds-card-badge-align-items: center;
    --ds-card-badge-text-align: center;
  }

  :host([clickable]:hover) {
    --ds-surface-cursor: pointer;
  }

  :host([clickable]:focus),
  :host([clickable]:focus-visible) {
    ${h};
  }

  .card-badge__footer {
    display: var(--ds-card-badge-footer-display, ${t(O)});
    flex-direction: var(
      --ds-card-badge-footer-flex-direction,
      ${t(D)}
    );
    gap: var(--ds-card-badge-footer-gap, ${t(z)});
    width: var(--ds-card-badge-footer-width, ${t(I)});
  }

  :host([collapsible-content]) {
    transition: ${t(T.gapTransition)};
  }

  :host([collapsible-content]) reimagine-accordion-item {
    --ds-accordion-item-indicator-display: none;
    --ds-accordion-item-divider-display: none;
    --ds-accordion-item-collapse-container-flex-direction: column-reverse;
    --ds-accordion-item-icon-container-width: 2rem;
    --ds-accordion-item-icon-container-height: 2rem;
    --ds-collapse-button-color: var(--ds-app-color-interactive-primary-fg-selected);
    --ds-collapse-button-padding: 0.25rem 0.5rem 0.5rem 0;
    --ds-collapse-button-margin: -0.1875rem 0 0.5rem -0.5rem;
    --ds-collapse-content-padding: 0 0 1.5rem;
    --ds-collapse-content-margin-inline-start: -0.5rem;
  }

  :host([collapsible-content][collapsible-content-open]) {
    --ds-card-badge-gap: 1rem;
  }

  ::slotted([slot='card-badge__accordion-item-title']) {
    ${g};
  }
`,R=e`
  @media (max-width: ${t(f(u.sm))}) {
    :host([collapsible-content]) reimagine-accordion-item {
      --ds-collapse-button-justify-content: flex;
      --ds-collapse-button-width: auto;
    }
  }

  @media (max-width: ${t(f(u.md))}) {
    /* VP1-2 footer requirements (per Figma):
       - standalone button spans full-width
       - button group uses stacked layout */
    ::slotted(reimagine-button[slot='card-badge__footer-bottom']) {
      --ds-button-host-display: block;
      --ds-button-width: 100%;
    }

    ::slotted(reimagine-button-group[slot='card-badge__footer-bottom']) {
      --ds-button-group-flex-direction: column;
      --ds-button-group-width: 100%;
    }
  }
`,L={solidBorder:y.solidBorder,glass:y.glass};var F=Object.defineProperty,K=Object.getOwnPropertyDescriptor,q=(t,e,o,a)=>{for(var s,r=a>1?void 0:a?K(e,o):e,i=t.length-1;i>=0;i--)(s=t[i])&&(r=(a?s(e,o,r):s(r))||r);return a&&r&&F(e,o,r),r};const U="reimagine-card-badge";let H=class extends _{constructor(){super(),this.collapsibleContent=!1,this.collapsibleContentOpen=!1,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._topSlotEmpty=!0,this._footerTopSlotEmpty=!0,this._footerBottomSlotEmpty=!0,this._footerSlotsEmpty=!0,this._cardBadgeEvents=[],this.themeLightSurface=L.solidBorder,this.themeDarkSurface=L.glass,this.theme===m.dark?this.surface=this.themeDarkSurface:this.surface=this.themeLightSurface;const t=this.closest("html"),e=this.closest("body");this.theme!==m.light&&(t&&this.isDarkTheme(t)||e&&this.isDarkTheme(e))&&(this.surface=L.glass)}_handleSlotChange(t){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length,this._topSlotEmpty=0===this._topSlot.length,this._footerTopSlotEmpty=0===this._footerTopSlot.length,this._footerBottomSlotEmpty=0===this._footerBottomSlot.length,this._footerSlotsEmpty=this._footerTopSlotEmpty&&this._footerBottomSlotEmpty&&!this.collapsibleContent;const e=t.target.name;""===e&&!this._topSlotEmpty&&this._updateTextBlockAttributes(),"card-badge__footer-top"===e&&!this._footerTopSlotEmpty&&this._updateRelatedProductsAttributes(),"card-badge__footer-bottom"===e&&!this._footerBottomSlotEmpty&&this._updateFooterLinkAttributes(),this._footerSlotsEmpty&&!this.collapsibleContent&&this.style.setProperty("--ds-card-badge-gap","0")}_updateTextBlockAttributes(){const t=this._topSlot.filter(t=>i(t,C));t.length>0&&t.forEach(t=>{t.setAttribute("configuration",this.textBlockConfiguration??S.default),t.hasAttribute("size")||t.setAttribute("size",v["size-2xs"]),this.hasAttribute("alignment")&&t.setAttribute("alignment",this.alignment??x.center)})}_updateRelatedProductsAttributes(){const t=this._footerTopSlot.filter(t=>i(t,$));t.length>0&&t.forEach(t=>{t.hasAttribute("configuration")||t.setAttribute("configuration",E.horizontal),t.hasAttribute("density")||t.setAttribute("density",k.default)})}_updateFooterLinkAttributes(){const t=t=>{t.hasAttribute("icon-position")||t.setAttribute("icon-position","left")},e=this._footerBottomSlot.filter(t=>i(t,B)),o=this._footerBottomSlot.filter(t=>i(t,w));e.length>0&&e.forEach(e=>{const o=l(e,w),a=l(e,"reimagine-button");o.length>0&&o.forEach(e=>{t(e)}),a.length>0&&a.forEach(t=>{t.hasAttribute("size")||t.setAttribute("size","small"),t.hasAttribute("shape")||t.setAttribute("shape","rounded")})}),o.length>0&&o.forEach(e=>{t(e)})}_renderOptionalSlot(t,e){return r`
      <div part=${t} class=${t} style="${e?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_renderCollapsibleTemplate(){return r`
      <reimagine-accordion-item
        appearance=${A.subtleButton}
        size="small"
        class="card-badge__accordion-item"
        part="card-badge__accordion-item"
        ?open=${this.collapsibleContentOpen}
      >
        <slot name="card-badge__accordion-item-content"></slot>
        <slot name="card-badge__accordion-item-title" slot="collapse__title"></slot>
      </reimagine-accordion-item>
    `}_toggleCollapsibleContent(t){this.collapsibleContentOpen=t}_updateSurface(){this.theme===m.dark&&(this.surface=this.themeDarkSurface)}_handleKeydown(t){if(t instanceof KeyboardEvent){const e=" "===t.key||"Spacebar"===t.key,o="Enter"===t.key||"NumpadEnter"===t.key;(e||o)&&this.hasAttribute("clickable")&&this.hasAttribute("chat-trigger")&&(t.preventDefault(),this.click())}}firstUpdated(){super.firstUpdated(),this._accordionItem=d(this.shadowRoot,j),this._accordionItem&&this.collapsibleContent&&(this._cardBadgeEvents.push({el:this._accordionItem,type:"onShow",handler:()=>{this._toggleCollapsibleContent(!0),this.dispatchEvent(new CustomEvent("card-badge-opened",{bubbles:!0,composed:!0}))}},{el:this._accordionItem,type:"onHide",handler:()=>{this._toggleCollapsibleContent(!1),this.dispatchEvent(new CustomEvent("card-badge-closed",{bubbles:!0,composed:!0}))}}),n(this._cardBadgeEvents))}connectedCallback(){super.connectedCallback(),this._cardBadgeEvents.push({el:this,type:"keydown",handler:this._handleKeydown}),n(this._cardBadgeEvents)}disconnectedCallback(){super.disconnectedCallback(),c(this._cardBadgeEvents)}render(){return r`
      ${this._renderOptionalSlot("card-badge__first",this._firstSlotEmpty)}
      <div part="card-badge__top" class="card-badge__top">
        <slot @slotchange=${this._handleSlotChange}></slot>
      </div>
      <div
        part="card-badge__footer"
        class="card-badge__footer"
        style="${this._footerSlotsEmpty?"display: none;":""}"
      >
        ${this._renderOptionalSlot("card-badge__footer-top",this._footerTopSlotEmpty)}
        ${this.collapsibleContent?this._renderCollapsibleTemplate():""}
        ${this._renderOptionalSlot("card-badge__footer-bottom",this._footerBottomSlotEmpty)}
      </div>
      ${this._renderOptionalSlot("card-badge__last",this._lastSlotEmpty)}
    `}updated(t){super.updated(t),t.has("theme")&&this._updateSurface()}};H.styles=[P,R],q([o({reflect:!0})],H.prototype,"alignment",2),q([o({reflect:!0})],H.prototype,"theme",2),q([o({reflect:!0,attribute:"text-block-configuration"})],H.prototype,"textBlockConfiguration",2),q([o({type:Boolean,reflect:!0,attribute:"collapsible-content"})],H.prototype,"collapsibleContent",2),q([o({type:Boolean,reflect:!0,attribute:"collapsible-content-open"})],H.prototype,"collapsibleContentOpen",2),q([a({slot:"card-badge__first"})],H.prototype,"_firstSlot",2),q([a({slot:"card-badge__last"})],H.prototype,"_lastSlot",2),q([a({slot:"card-badge__footer-top"})],H.prototype,"_footerTopSlot",2),q([a({slot:"card-badge__footer-bottom"})],H.prototype,"_footerBottomSlot",2),q([a()],H.prototype,"_topSlot",2),q([s()],H.prototype,"_firstSlotEmpty",2),q([s()],H.prototype,"_lastSlotEmpty",2),q([s()],H.prototype,"_topSlotEmpty",2),q([s()],H.prototype,"_footerTopSlotEmpty",2),q([s()],H.prototype,"_footerBottomSlotEmpty",2),q([s()],H.prototype,"_footerSlotsEmpty",2),q([s()],H.prototype,"_cardBadgeEvents",2),H=q([p(U)],H);export{H as CardBadge,U as name};
