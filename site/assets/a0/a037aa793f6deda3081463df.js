import{r as i,i as a,c as e,e as o,f as t,b as n,o as r,A as s}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{B as d,d as c}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{O as l}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{I as m,S as p}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{SurfaceElement as v}from"/__mirror/assets/e09cf4eae8f90fbcbeb198a9";import{b as g,a as h}from"/__mirror/assets/5849ec5e150363c91281fb26";import{b as y}from"/__mirror/assets/a6479ea808b36b42c5f26c81";import{name as u}from"/__mirror/assets/9bce10b1f8f8949b4fd224b8";import"/__mirror/assets/5f924eec6274a2d611fc1ea0";import{n as f}from"/__mirror/assets/34233ee5ac8acdb3aa831b25";import{n as b}from"/__mirror/assets/bf0b3498e45fc20534cec8b1";const _="var(--ds-app-color-base-default-fg-heading, #0e1726)",k="flex",$="var(--ds-app-space-micro-s, .75rem)",x="var(--ds-app-space-micro-2xs, 0.25rem)",w="var(--ds-app-type-body-m-letter-spacing, -0.03em)",S="var(--ds-app-space-micro-m, 1rem)",I="var(--ds-app-type-body-xs-font-size, 0.75rem)",z="var(--ds-app-radii-s, 0.5rem)",j="var(--ds-app-color-interactive-secondary-bg-hover, rgba(0, 85, 151, 0.4))",N="var(--ds-app-color-interactive-secondary-bg-active, #54a5e2)",E="var(--ds-elevation-level-2, 0px 2px 4px rgba(0, 0, 0, 0.14) 0px 0px 2px rgba(0, 0, 0, 0.12))",q="var(--ds-app-space-micro-xs, 0.5rem)",D="0.375rem",O="var(--ds-app-radii-s, 0.5rem)",A="var(--ds-app-space-micro-2xs, 0.25rem)",B="var(--ds-app-space-micro-xs, 0.5rem)",C="var(--ds-app-space-micro-2xs, .25rem)",L="var(--ds-app-space-micro-xs, .5rem)",Q="var(--ds-app-space-micro-s, .75rem)",J="var(--ds-app-space-micro-3xs, .125rem)",P="var(--ds-app-radii-s, 0.5rem)",F="fit-content",G="var(--ds-app-radii-s, 0.5rem)",H="var(--ds-app-space-micro-xs, 0.5rem)",K="var(--ds-app-radii-xs, 0.25rem)",M="var(--ds-app-radii-xs, 0.25rem)",R="2rem",T="2rem",U="var(--ds-app-space-micro-m, 1rem)",V="7.75rem",W="var(--ds-app-space-micro-l, 1.5rem)",X="var(--ds-app-space-micro-xs, 0.5rem)",Y="flex",Z="center",ii="column",ai="initial",ei=a`
  :host {
    --ds-badge-host-display: inline;

    position: relative;
    display: var(--ds-secondary-nav-item-display, ${i("block")});
    width: fit-content;
    list-style: none;
    white-space: var(--ds-secondary-nav-item-white-space, ${i(ai)});
  }

  :host,
  :host a {
    border-radius: var(
      --ds-secondary-nav-item-border-radius,
      ${i(z)}
    );
  }

  /** Navigation (variant) */
  :host a {
    text-decoration: none;
    display: var(--ds-secondary-nav-item-link-display, ${i(k)});
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-block: var(
      --ds-secondary-nav-item-padding-block,
      ${i($)}
    );
    color: var(--ds-secondary-nav-item-label-color, ${i(_)});
  }

  :host([configuration='navigation']) {
    --ds-secondary-nav-item-white-space: nowrap;
    padding-block: var(
      --ds-secondary-nav-item-navigation-padding-block,
      ${i(D)}
    );
  }

  :host([configuration='navigation']) ::slotted([slot='secondary-nav-item__description']),
  :host([configuration='dropdown']) ::slotted([slot='secondary-nav-item__description']) {
    display: none;
  }

  a:focus-visible {
    ${l()};

    border-radius: 0;
  }

  :host(:not([active])) reimagine-indicator {
    display: none;
  }

  :host reimagine-icon {
    display: var(--ds-secondary-nav-icon, none);
  }

  :host([active]) reimagine-indicator {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: block;
  }

  /** Jumplink (horizontal) */
  :host([configuration='horizontal']) {
    --ds-secondary-nav-item-link-flex-direction: row;
    --ds-secondary-nav-item-body-align-items: start;
    --ds-secondary-nav-item-jumplink-padding-block: 0.5rem;
    --ds-secondary-nav-item-padding-inline: 0.5rem 1.5rem;
    --ds-secondary-nav-item-badge-margin-block-end: 0;
    --ds-secondary-nav-item-body-margin-block: 0.3125rem;
    --ds-secondary-nav-item-body-margin-inline: 1rem 0.5rem;
    --ds-secondary-nav-item-description-text-align: start;
    --ds-secondary-nav-jumplinks-gap: 0.5rem;
    --ds-surface-border-radius: var(
      --ds-secondary-nav-item-jumplink-border-radius,
      ${i(G)}
    );

    width: 100%;
  }

  /** Jumplink (vertical) */
  :host([configuration='vertical']) {
    --ds-surface-border-radius: var(
      --ds-secondary-nav-item-jumplink-border-radius,
      ${i(P)}
    );

    min-width: var(--ds-secondary-nav-item-jumplink-width, 7.75rem);
    height: var(
      --ds-secondary-nav-item-jumplink-vertical-height,
      ${i(F)}
    );
  }

  :host([configuration='horizontal']) a,
  :host([configuration='vertical']) a {
    --ds-secondary-nav-item-padding-block: var(
      --ds-secondary-nav-item-jumplink-padding-block,
      1.5rem
    );
    display: var(--ds-secondary-nav-item-jumplink-display, flex);
    box-shadow: var(
      --ds-secondary-nav-item-jumplink-box-shadow,
      ${i(E)}
    );
    padding-inline: var(
      --ds-secondary-nav-item-padding-inline,
      ${i(H)}
    );
    flex-direction: var(--ds-secondary-nav-item-link-flex-direction, column);
    border-radius: var(
      --ds-secondary-nav-item-link-border-radius,
      ${i(z)}
    );
  }

  :host([active][configuration='horizontal']) reimagine-indicator,
  :host([active][configuration='vertical']) reimagine-indicator {
    border-end-end-radius: var(
      --ds-secondary-nav-indicator-border-bottom-right-radius,
      ${i(K)}
    );
    border-end-start-radius: var(
      --ds-secondary-nav-indicator-border-bottom-left-radius,
      ${i(M)}
    );
  }

  :host([configuration='horizontal']) a:hover,
  :host([configuration='vertical']) a:hover {
    --ds-secondary-nav-item-jumplink-box-shadow: var(
      --ds-elevation-level-3,
      0px 4px 8px rgba(0, 0, 0, 0.14) 0px 0px 2px rgba(0, 0, 0, 0.12)
    );

    background-color: var(--ds-app-color-surface-solid-bg-pressed, #17253d);
  }

  :host([configuration='horizontal']:active) a,
  :host([configuration='vertical']:active) a {
    background-color: var(--ds-app-color-base-alt1-bg-opt2, #1e304f);
  }

  /** Quicklink (variant) */
  :host([configuration='quicklink']) {
    --ds-link-gap: var(
      --ds-secondary-nav-item-quicklink-gap,
      ${i(U)}
    );
    --ds-surface-border-radius: var(
      --ds-secondary-nav-item-quicklink-border-radius,
      ${i(z)}
    );
    width: var(
      --ds-secondary-nav-item-quicklink-min-width,
      ${i(V)}
    );
    padding-block: var(
      --ds-secondary-nav-item-quicklink-padding-block,
      ${i(W)}
    );
    padding-inline: var(
      --ds-secondary-nav-item-quicklink-padding-inline,
      ${i(X)}
    );
    display: var(
      --ds-secondary-nav-item-quicklink-display,
      ${i(Y)}
    );
    align-items: var(
      --ds-secondary-nav-item-quicklink-align-items,
      ${i(Z)}
    );
    flex-direction: var(
      --ds-secondary-nav-item-quicklink-flex-direction,
      ${i(ii)}
    );
  }

  :host([configuration='horizontal'][active]) a,
  :host([configuration='vertical'][active]) a,
  :host([configuration='quicklink'][disabled]) {
    background-color: var(--ds-app-color-surface-solid-bg-selected, #fefefe);
  }

  :host([configuration='horizontal'][disabled]),
  :host([configuration='vertical'][disabled]),
  :host([configuration='quicklink'][disabled]) {
    opacity: 0.2;
    pointer-events: none;
    cursor: not-allowed;
  }

  :host([configuration='horizontal'][disabled]) a:focus-visible,
  :host([configuration='vertical'][disabled]) a:focus-visible {
    outline: none;
  }

  :host([configuration='dropdown']) {
    --ds-surface-border-radius: var(
      --ds-secondary-nav-item-dropdown-border-radius,
      ${i(O)}
    );

    width: auto;
    margin-block: var(
      --ds-secondary-nav-item-dropdown-margin-block,
      ${i(C)}
    );
  }

  :host([configuration='dropdown']) a {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    width: auto;
    height: auto;
    padding-inline: var(
      --ds-secondary-nav-item-dropdown-padding-inline,
      ${i(Q)}
    );
    padding-block: var(
      --ds-secondary-nav-item-dropdown-padding-inline,
      ${i(L)}
    );
  }

  :host([configuration='dropdown']) reimagine-indicator {
    position: relative;
    visibility: hidden;
    display: block;
    width: var(
      --ds-secondary-nav-item-dropdown-indicator-width,
      ${i(A)}
    );
  }

  :host([configuration='dropdown']) a:active {
    background-color: var(
      --ds-secondary-nav-item-dropdown-active-background-color,
      ${i(N)}
    ) !important;
  }

  :host([configuration='dropdown'][active]) a,
  :host([configuration='dropdown']) a:focus-visible,
  :host([configuration='dropdown']) a:hover {
    background-color: var(
      --ds-secondary-nav-item-dropdown-hover-background-color,
      ${i(j)}
    );
    border-radius: var(
      --ds-secondary-nav-item-dropdown-focus-border-radius,
      ${i(O)}
    );
  }

  :host([configuration='dropdown'][active]) reimagine-indicator,
  :host([configuration='dropdown']) a:focus-visible reimagine-indicator,
  :host([configuration='dropdown']) a:hover reimagine-indicator {
    visibility: visible;
  }

  :host([configuration='dropdown']) .secondary-nav-item__label {
    padding-inline-start: var(
      --ds-secondary-nav-item-dropdown-label-padding-inline-start,
      ${i(B)}
    );
  }

  :host([configuration='horizontal']) reimagine-icon,
  :host([configuration='vertical']) reimagine-icon {
    display: flex;
  }

  /* Badge */
  :host([configuration='horizontal']) reimagine-badge,
  :host([configuration='vertical']) reimagine-badge {
    --ds-secondary-nav-item-badge-display: flex;

    margin-block-end: var(
      --ds-secondary-nav-item-badge-margin-block-end,
      ${i(S)}
    );
  }

  /* Badge icon */
  :host([configuration='horizontal']) reimagine-badge reimagine-icon,
  :host([configuration='vertical']) reimagine-badge reimagine-icon {
    margin-block-start: 0;
    margin-inline-start: 0;
  }

  :host([configuration='vertical']) reimagine-icon {
    margin-block-start: var(
      --ds-secondary-nav-item-padding-block-start,
      ${i(q)}
    );
  }

  :host([configuration='horizontal']) reimagine-icon {
    margin-inline-start: auto;
  }

  :host([configuration='horizontal']) .secondary-nav-item__label,
  :host([configuration='vertical']) .secondary-nav-item__label {
    line-height: 1;
  }

  :host([configuration='horizontal']) a:focus-visible,
  :host([configuration='vertical']) a:focus-visible {
    outline-offset: var(
      --ds-secondary-nav-item-jumplink-outline-offset,
      ${i(J)}
    );
  }

  :host([configuration='navigation']) a:focus-visible {
    outline: none;
    position: relative;
  }

  :host([configuration='navigation']) a:focus-visible::before {
    content: '';
    position: absolute;
    top: 0;
    left: -0.3rem;
    right: -0.3rem;
    bottom: 0;
    border: 0.1875rem dotted var(--ds-focus-ring-color, currentColor);
  }

  @media (forced-colors: active) {
    :host([configuration='navigation']) a:focus-visible {
      outline: auto;
    }
  }

  :host ::slotted([slot='secondary-nav-item__description']) {
    text-align: var(--ds-secondary-nav-item-description-text-align, center);
    margin-block: var(
      --ds-secondary-nav-item-description-margin-block,
      ${i(x)}
    );
    font-size: var(
      --ds-secondary-nav-item-description-font-size,
      ${i(I)}
    );
    color: var(--ds-app-color-base-default-fg-body, #0e1726);
    font-weight: var(--ds-app-type-body-xs-font-weight, 400);
    line-height: var(--ds-app-type-body-xs-line-height, 1rem);
    letter-spacing: var(
      --ds-secondary-nav-item-description-letter-spacing,
      ${i(w)}
    );
  }

  .secondary-nav-item__body {
    display: flex;
    flex-direction: column;
    align-items: var(--ds-secondary-nav-item-body-align-items, center);
    font-weight: var(--ds-app-type-label-m-font-weight, 600);
    font-size: var(--ds-app-type-label-m-font-size, 0.875rem);
    line-height: var(--ds-app-type-label-m-line-height, 1.25rem);
    margin-inline: var(--ds-secondary-nav-item-body-margin-inline, 0);
    margin-block: var(--ds-secondary-nav-item-body-margin-block, 0);
  }

  :host ::slotted([slot='secondary-nav-item__asset']) {
    min-width: var(
      --ds-secondary-nav-item-quicklink-width,
      ${i(R)}
    );
    height: var(
      --ds-secondary-nav-item-quicklink-height,
      ${i(T)}
    );
    width: var(
      --ds-secondary-nav-item-quicklink-width,
      ${i(R)}
    );
    min-height: var(
      --ds-secondary-nav-item-quicklink-height,
      ${i(T)}
    );
  }
`;var oi=Object.defineProperty,ti=Object.getOwnPropertyDescriptor,ni=(i,a,e,o)=>{for(var t,n=o>1?void 0:o?ti(a,e):a,r=i.length-1;r>=0;r--)(t=i[r])&&(n=(o?t(a,e,n):t(n))||n);return o&&n&&oi(a,e,n),n};const ri="reimagine-secondary-nav-item";let si=class extends v{constructor(){super(...arguments),this.active=!1,this.disabled=!1,this.href="",this.ariaLabel=null,this.icon="",this._firstSecondaryNavItemSlotEmpty=!0,this._lastSecondaryNavItemSlotEmpty=!0,this._secondaryNavItemDescriptionSlotEmpty=!0,this._assetSlotEmpty=!0}_handleSecondaryNavItemSlotChange(){this._firstSecondaryNavItemSlotEmpty=0===this._firstSecondaryNavItemSlot.length,this._lastSecondaryNavItemSlotEmpty=0===this._lastSecondaryNavItemSlot.length,this._secondaryNavItemDescriptionSlotEmpty=0===this._secondaryNavItemDescriptionSlot.length,this._assetSlotEmpty=0===this._assetSlot.length,this._assetSlotEmpty||this._updateAssetsSlotAttributes()}_updateAssetsSlotAttributes(){const i={[b]:{attr:"aspect-ratio",value:"1-1"},[f]:{attr:"size",value:"xlarge"},[u]:{attr:"size",value:"xs"}};this._assetSlot.forEach(a=>{const e=i[d(a)];if(e){const i=a;i.hasAttribute(e.attr)||i.setAttribute(e.attr,e.value)}})}_renderOptionalSlot(i,a){return n`
      <div part=${i} class=${i} style="${a?"display: none;":""}">
        <slot name=${i} @slotchange="${this._handleSecondaryNavItemSlotChange}"></slot>
      </div>
    `}_renderDropdownIndicator(){if(this.configuration===m.dropdown)return n`
        <reimagine-indicator
          orientation=${g.vertical}
          configuration=${h.rounded}
        ></reimagine-indicator>
      `}_renderBadge(){if(this.configuration===m.horizontal||this.configuration===m.vertical)return n` <reimagine-badge>
        <reimagine-icon icon=${r(this.icon)} aria-hidden="true" role="presentation">
        </reimagine-icon>
      </reimagine-badge>`}_renderIndicator(){return this.configuration===m.horizontal||this.configuration===m.vertical?n`<reimagine-indicator
        orientation=${g.horizontal}
      ></reimagine-indicator>`:this.configuration===m.navigation?n`
        <reimagine-indicator
          orientation=${g.horizontal}
          configuration=${h.rounded}
        ></reimagine-indicator>
      `:void 0}_renderIcon(){if(this.configuration===m.horizontal||this.configuration===m.vertical)return n`<reimagine-icon icon="arrow-down" size="medium"></reimagine-icon>`}_renderQuicklink(){return n` <reimagine-link
      class="secondary-nav-item__link"
      part="secondary-nav-item__link"
      configuration="${y.stacked}"
      href=${r(this.href)}
      aria-label=${r(r(this.ariaLabel))}
      aria-disabled=${r(this.disabled?"true":void 0)}
    >
      <span slot="link__asset" class="secondary-nav-item__asset" part="secondary-nav-item__asset">
        <slot
          name="secondary-nav-item__asset"
          @slotchange="${this._handleSecondaryNavItemSlotChange}"
        ></slot>
      </span>
      <span slot="link__text" class="secondary-nav-item__label" part="secondary-nav-item__label">
        <slot @slotchange="${this._handleSecondaryNavItemSlotChange}"></slot>
      </span>
    </reimagine-link>`}render(){return this.configuration===m.quicklink?this._renderQuicklink():n`
      ${this._renderOptionalSlot("secondary-nav-item__first",this._firstSecondaryNavItemSlotEmpty)}
      <a
        href=${r(this.href)}
        class="secondary-nav-item__link"
        part="secondary-nav-item__link"
        aria-current=${this.active?"true":s}
      >
        ${this._renderDropdownIndicator()} ${this.icon&&this._renderBadge()}
        <span class="secondary-nav-item__body" part="secondary-nav-item__body">
          <span class="secondary-nav-item__label" part="secondary-nav-item__label">
            <slot></slot>
          </span>
          ${this._renderOptionalSlot("secondary-nav-item__description",this._secondaryNavItemDescriptionSlotEmpty)}
        </span>
        ${this._renderIcon()}
      </a>
      ${this._renderOptionalSlot("secondary-nav-item__last",this._lastSecondaryNavItemSlotEmpty)}
      ${this._renderIndicator()}
    `}connectedCallback(){super.connectedCallback(),this.configuration===m.quicklink||this.configuration===m.navigation?this.surface=p.transparent:this.surface=p.solid}};si.styles=[ei],ni([e({reflect:!0,type:Boolean})],si.prototype,"active",2),ni([e({reflect:!0})],si.prototype,"configuration",2),ni([e({reflect:!0,type:Boolean})],si.prototype,"disabled",2),ni([e({reflect:!0})],si.prototype,"href",2),ni([e({attribute:"aria-label"})],si.prototype,"ariaLabel",2),ni([e({reflect:!0})],si.prototype,"icon",2),ni([e({reflect:!0})],si.prototype,"theme",2),ni([o({slot:"secondary-nav-item__first"})],si.prototype,"_firstSecondaryNavItemSlot",2),ni([o({slot:"secondary-nav-item__last"})],si.prototype,"_lastSecondaryNavItemSlot",2),ni([o({slot:"secondary-nav-item__description"})],si.prototype,"_secondaryNavItemDescriptionSlot",2),ni([o({slot:"secondary-nav-item__asset"})],si.prototype,"_assetSlot",2),ni([t()],si.prototype,"_firstSecondaryNavItemSlotEmpty",2),ni([t()],si.prototype,"_lastSecondaryNavItemSlotEmpty",2),ni([t()],si.prototype,"_secondaryNavItemDescriptionSlotEmpty",2),ni([t()],si.prototype,"_assetSlotEmpty",2),si=ni([c(ri)],si);export{si as SecondaryNavItem,ri as name};
