import{r as t,i,b as e,o,a as s,c as n}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{s as r,r as a,c as l,d as c}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{ListItem as d}from"/__mirror/assets/d0f2740c702159d74ce93cda";import{l as m,v as h}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{v as u,o as g,L as v}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{C as p,s as b}from"/__mirror/assets/03f57ab24c107a836026fcc3";import{a as _}from"/__mirror/assets/34233ee5ac8acdb3aa831b25";import{a as f}from"/__mirror/assets/5849ec5e150363c91281fb26";const $={default:"default",link:"link",option:"option",checkmark:"checkmark",tab:"tab",heading:"heading"},k={small:"small",large:"large"},y="var(--ds-app-color-base-default-fg-heading, #0e1726)",x="var(--ds-app-space-micro-xs, 0.5rem)",w="var(--ds-app-space-micro-m, 0.75rem)",S="var(--ds-app-space-micro-s, 0.75rem)",z="var(--ds-app-radii-s, 0.5rem)",j="var(--ds-app-color-interactive-secondary-bg-hover, #8ac1eb)",D="var(--ds-app-color-interactive-secondary-bg-active, #54a5e2)",O="var(--ds-app-color-interactive-secondary-bg-hover, #8ac1eb)",C="var(--ds-app-color-interactive-secondary-fg-hover, #263e65)",A="var(--ds-app-color-interactive-secondary-fg-active, #0e1726)",I="var(--ds-app-color-interactive-secondary-fg-inactive, #9da9bd)",B="var(--ds-app-color-interactive-secondary-fg-default, #2a446f)",E="var(--ds-border-xs, 0.0625rem)",L="0",T=i`
  :host,
  a {
    display: var(--ds-menu-list-item-display, ${t("block")});
    color: var(--ds-menu-list-item-color, ${t(y)});
    border-radius: var(
      --ds-menu-list-item-border-radius,
      ${t(z)}
    );

    --ds-tab-justify-content: normal;
  }

  :host(:focus) a {
    ${m};
    outline-offset: ${h};
  }

  a {
    text-decoration: none;
  }

  :host .list-item__inner {
    --ds-list-item-inner-padding-block-start: var(
      --ds-menu-list-item-padding-block,
      ${t(S)}
    );
    --ds-list-item-inner-padding-block-end: var(
      --ds-menu-list-item-padding-block,
      ${t(S)}
    );
    --ds-list-item-inner-padding-inline-start: var(
      --ds-menu-list-item-padding-inline,
      ${t(x)}
    );
    --ds-list-item-inner-padding-inline-end: var(
      --ds-menu-list-item-padding-inline-end,
      var(--ds-menu-list-item-padding-inline, ${t(w)})
    );

    border-radius: var(
      --ds-menu-list-item-border-radius,
      ${t(z)}
    );
  }

  /*
   * Selected (single-select): persistent base background. Declared before the
   * hover/active rules so interaction feedback (hover, pressed) still wins while a
   * row is selected. Figma reuses the hover-blue fill for the Selected state, so
   * the default intentionally points at the same token as hover; override
   * --ds-menu-list-item-selected-background-color to decouple them. Tab owns its
   * own state styling, so it is excluded here.
   */
  :host([active]:not([configuration='${t($.tab)}']))
    .list-item__inner {
    background-color: var(
      --ds-menu-list-item-selected-background-color,
      ${t(O)}
    );
  }

  :host(:hover) .list-item__inner,
  :host(:focus) .list-item__inner,
  a:hover .list-item__inner,
  a:focus .list-item__inner {
    background-color: var(
      --ds-menu-list-item-hover-background-color,
      ${t(j)}
    );
  }

  /* To prevent focus outline from showing on the option */
  .option:focus {
    outline: none;
  }

  :host(:active) .list-item__inner {
    background-color: var(
      --ds-menu-list-item-active-background-color,
      ${t(D)}
    );
  }

  /* State text colors for label + subtext (excludes tab which owns its own colors) */
  :host(:hover:not([configuration='${t($.tab)}'])) {
    --ds-list-item-title-color: var(
      --ds-menu-list-item-hover-text-color,
      ${t(C)}
    );
    --ds-list-item-subtext-color: var(
      --ds-menu-list-item-hover-text-color,
      ${t(C)}
    );
  }

  :host(:active:not([configuration='${t($.tab)}'])) {
    --ds-list-item-title-color: var(
      --ds-menu-list-item-active-text-color,
      ${t(A)}
    );
    --ds-list-item-subtext-color: var(
      --ds-menu-list-item-active-text-color,
      ${t(A)}
    );
  }

  /* Disable :active state on touch devices to prevent sticky active state */
  @media (hover: none) and (pointer: coarse) {
    :host(:active) .list-item__inner {
      background-color: transparent;
    }
  }

  .list-item__leading {
    display: inline-flex;
    visibility: hidden;
    opacity: 0;
    transition: var(
      --ds-menu-list-item-leading-transition,
      ${t("opacity 0.2s ease")}
    );
    align-self: stretch;

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }

  .list-item__trailing {
    --ds-list-item-trailing-display: inline-flex;
  }

  /* Default configuration */
  :host([configuration='${t($.link)}']:hover) .list-item__leading,
  :host([configuration='${t($.link)}']:focus) .list-item__leading,
  :host([configuration='${t($.link)}']:active) .list-item__leading,
  :host([configuration='${t($.link)}']) a:hover .list-item__leading,
  :host([configuration='${t($.link)}']) a:focus .list-item__leading,
  :host([configuration='${t($.default)}']:hover) .list-item__leading,
  :host([configuration='${t($.default)}']:focus) .list-item__leading,
  :host([configuration='${t($.default)}']:active) .list-item__leading,
  :host([configuration='${t($.default)}']) a:hover .list-item__leading,
  :host([configuration='${t($.default)}']) a:focus .list-item__leading,
  :host([size='${t(k.large)}']:hover) .list-item__leading,
  :host([size='${t(k.large)}']:focus) .list-item__leading,
  :host([size='${t(k.large)}']:active) .list-item__leading,
  :host([active]) .list-item__leading,
  :host([configuration='${t($.tab)}']:hover) .list-item__leading,
  :host([configuration='${t($.tab)}']:focus) .list-item__leading,
  :host([configuration='${t($.tab)}']:active) .list-item__leading,
  :host([configuration='${t($.tab)}']) a:hover .list-item__leading,
  :host([configuration='${t($.tab)}']) a:focus .list-item__leading,
  :host([configuration='${t($.option)}']:hover) .list-item__leading,
  :host([configuration='${t($.option)}']:focus-within)
    .list-item__leading,
  :host([configuration='${t($.option)}']:active)
    .list-item__leading,
  .option:focus .list-item__leading {
    visibility: visible;
    opacity: 1;
  }

  /* Disable :active indicator on touch devices to prevent sticky active state */
  @media (hover: none) and (pointer: coarse) {
    :host([configuration='${t($.option)}']:active)
      .list-item__leading {
      visibility: hidden;
      opacity: 0;
    }
  }

  /* Size large */
  :host([size='${t(k.large)}']) ::slotted([slot='list-item__title']) {
    --ds-list-item-title-font-weight: ${t(u.fontWeight)};
    --ds-list-item-title-font-size: ${t(u.fontSize)};
    --ds-list-item-title-line-height: ${t(u.lineHeight)};
    --ds-list-item-title-margin-bottom: ${t(u.marginBottom)};
  }

  /* Subtext follows Figma body/s (14px) at both sizes */
  :host([size='${t(k.large)}']) ::slotted([slot='list-item__subtext']),
  :host([size='${t(k.small)}']) ::slotted([slot='list-item__subtext']) {
    --ds-list-item-subtext-font-weight: ${t(g.fontWeight)};
    --ds-list-item-subtext-font-size: ${t(g.fontSize)};
    --ds-list-item-subtext-line-height: ${t(g.lineHeight)};
    --ds-list-item-subtext-margin-bottom: ${t(g.marginBottom)};
  }

  :host([configuration='${t($.option)}'])
    ::slotted([slot='list-item__title']) {
    margin-top: ${t(L)};
  }

  /* Inactive / Disabled — Figma uses muted token colors for menu items, opacity for tab/heading */
  :host([disabled]) {
    pointer-events: none;
  }

  :host(
      [disabled]:not([configuration='${t($.tab)}']):not(
          [configuration='${t($.heading)}']
        )
    ) {
    --ds-list-item-title-color: var(
      --ds-menu-list-item-inactive-text-color,
      ${t(I)}
    );
    --ds-list-item-subtext-color: var(
      --ds-menu-list-item-inactive-text-color,
      ${t(I)}
    );
    --ds-icon-color: var(
      --ds-menu-list-item-inactive-text-color,
      ${t(I)}
    );
  }

  :host([disabled][configuration='${t($.tab)}']),
  :host([disabled][configuration='${t($.heading)}']) {
    opacity: 0.2;
  }

  :host([configuration='${t($.checkmark)}'][disabled])
    .checkbox__control {
    opacity: 1;

    --ds-checkbox-control-border-color: var(
      --ds-app-color-interactive-secondary-border-inactive,
      #bdc5d2
    );
  }

  :host([configuration='${t($.tab)}']:focus-within) {
    background-color: ${t(j)};
  }

  :host([configuration='${t($.tab)}']:focus-within)
    .list-item__leading {
    visibility: visible;
    opacity: 1;
  }

  :host([configuration='${t($.tab)}']) .list-item__leading {
    align-self: center;
  }

  .heading-wrapper {
    padding-block-start: var(
      --ds-menu-list-item-padding-block,
      ${t(S)}
    );
    padding-block-end: var(
      --ds-menu-list-item-padding-block,
      ${t(S)}
    );
    padding-inline-start: var(
      --ds-menu-list-item-padding-inline,
      ${t(x)}
    );
    padding-inline-end: var(
      --ds-menu-list-item-padding-inline,
      ${t(x)}
    );
  }

  /* Trailing chevron icon colors per state (single-select link only; disabled keeps the inactive host color) */
  :host([configuration='${t($.link)}']:not([disabled]))
    .list-item__trailing
    reimagine-icon {
    --ds-icon-color: var(--ds-menu-list-item-icon-color, ${t(B)});
  }

  :host([configuration='${t($.link)}']:not([disabled]):hover)
    .list-item__trailing
    reimagine-icon {
    --ds-icon-color: var(
      --ds-menu-list-item-icon-hover-color,
      ${t(C)}
    );
  }

  :host([configuration='${t($.link)}']:not([disabled]):active)
    .list-item__trailing
    reimagine-icon {
    --ds-icon-color: var(
      --ds-menu-list-item-icon-active-color,
      ${t(A)}
    );
  }

  /* Multi-select checkbox: 1px border + per-state colors + selected fill */
  :host([configuration='${t($.checkmark)}']) .checkbox__control {
    --ds-checkbox-control-border-width: ${t(E)};
    --ds-checkbox-control-border-color: var(
      --ds-app-color-interactive-secondary-border-default,
      #2a446f
    );
  }

  :host([configuration='${t($.checkmark)}']:hover)
    .checkbox__control {
    --ds-checkbox-control-border-color: var(
      --ds-app-color-interactive-secondary-border-hover,
      #263e65
    );
  }

  :host([configuration='${t($.checkmark)}']:active)
    .checkbox__control {
    --ds-checkbox-control-border-color: var(
      --ds-app-color-interactive-secondary-border-active,
      #17253d
    );
  }

  :host([configuration='${t($.checkmark)}'][checked])
    .checkbox__control {
    --ds-checkbox-control-background-color: var(
      --ds-app-color-interactive-primary-bg-active,
      #004275
    );
    --ds-checkbox-control-border-color: var(--ds-app-color-interactive-primary-bg-active, #004275);
  }

  /* Ensure disabled+checked keeps the disabled inactive border color (overrides checked state). */
  :host([configuration='${t($.checkmark)}'][disabled][checked])
    .checkbox__control {
    --ds-checkbox-control-border-color: var(
      --ds-app-color-interactive-secondary-border-inactive,
      #bdc5d2
    );
  }

  .option,
  label {
    cursor: pointer;
  }
`;var F=Object.defineProperty,H=Object.getOwnPropertyDescriptor,R=Object.getPrototypeOf,P=Reflect.get,q=(t,i,e,o)=>{for(var s,n=o>1?void 0:o?H(i,e):i,r=t.length-1;r>=0;r--)(s=t[r])&&(n=(o?s(i,e,n):s(n))||n);return o&&n&&F(i,e,n),n};const M="reimagine-menu-list-item";let W=class extends(p(v(d))){constructor(){super(...arguments),this.configuration=$.default,this.disabled=!1,this.itemSize=k.small,this.active=!1,this.selectable=!1}_renderLeadingSlot(){return e`
      <div part="list-item__leading" class="list-item__leading">
        <slot name="list-item__leading">
          <reimagine-indicator
            configuration="${f.rounded}"
          ></reimagine-indicator>
        </slot>
      </div>
    `}_renderTrailingSlot(){return e`
      <div
        part="list-item__trailing"
        class="list-item__trailing"
        style="${this.trailing?"":"display: none;"}"
      >
        <slot name="list-item__trailing">
          ${this.configuration===$.link?e`<reimagine-icon
                icon="chevron-${"rtl"===this.dir?"left":"right"}"
                size="${_.medium}"
              ></reimagine-icon>`:""}
          ${this.configuration===$.checkmark?this.renderCheckbox():""}
        </slot>
      </div>
    `}_renderContent(){return e`
      <div part="list-item__inner" class="list-item__inner">
        ${this._renderOptionalSlot("list-item__first",this._firstSlotEmpty)}
        ${this._renderLeadingSlot()}
        <div part="list-item__content" class="list-item__content">
          ${this._renderOptionalSlot("list-item__title",this._titleSlotEmpty)}
          ${this._renderOptionalSlot("list-item__subtext",this._subtextSlotEmpty)}
        </div>
        ${this._renderTrailingSlot()}
        ${this._renderOptionalSlot("list-item__last",this._lastSlotEmpty)}
      </div>
    `}_renderHeadingContent(){return e`
      <div part="heading-wrapper" class="heading-wrapper">
        <div part="text-block" class="text-block">
          <slot name="text-block"></slot>
        </div>
        <div part="divider" class="divider">
          <slot name="divider"></slot>
        </div>
      </div>
    `}updated(t){t.has("configuration")&&(this.trailing=this.configuration!==$.default),t.has("disabled")&&(this.ariaDisabled=this.disabled?"true":"false"),t.has("checked")&&this.configuration===$.checkmark&&(this.checked?r(this,{checked:""},!0):a(this,["checked"])),this._collapseCheckmarkAnnouncement()}_collapseCheckmarkAnnouncement(){var t,i;const e=this.querySelector('[slot="list-item__title"]'),o=null==(t=this.shadowRoot)?void 0:t.querySelector('input[type="checkbox"]'),s=null==(i=null==e?void 0:e.textContent)?void 0:i.trim(),n=this.configuration===$.checkmark&&this.isInsideDropdown;if(e){if(!n||!o||!s)return e.removeAttribute("aria-hidden"),void(null==o||o.removeAttribute("aria-label"));o.getAttribute("aria-label")!==s&&o.setAttribute("aria-label",s),"true"!==e.getAttribute("aria-hidden")&&e.setAttribute("aria-hidden","true")}}get isInsideDropdown(){return null!==l(this,"reimagine-dropdown")}render(){if(this.size="small",this.configuration===$.checkmark)return e` <label for=${this.checkboxId}> ${this._renderContent()} </label> `;if(this.configuration===$.heading)return this._renderHeadingContent();const t=this._renderContent();if(this.selectable||this.configuration===$.option){const i=this.isInsideDropdown?"option":void 0,s=this.isInsideDropdown?this.disabled?"true":"false":void 0;return e`
        <div
          part="option"
          class="option"
          tabindex=${"true"===s?-1:0}
          role=${o(i)}
          aria-hidden=${o(s)}
        >
          ${t}
        </div>
      `}return this.renderLink(t)}};var G,J,K;W.shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0},W.styles=[...(G=W,J=W,K="styles",P(R(G),K,J)),b,T],q([n({reflect:!0})],W.prototype,"configuration",2),q([n({type:Boolean,reflect:!0})],W.prototype,"disabled",2),q([n({reflect:!0,attribute:"size"})],W.prototype,"itemSize",2),q([n({type:Boolean,reflect:!0})],W.prototype,"active",2),q([n({type:Boolean,reflect:!0})],W.prototype,"selectable",2),W=q([c(M)],W);export{W as M,$ as a,k as b,M as n};
