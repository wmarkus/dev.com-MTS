import{r as t,i as l,b as e,e as r,f as o,c as i}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as a}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{o as s,R as p}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{b as d}from"/__mirror/assets/7e3cbd307d93b862d54c4d69";import"/__mirror/assets/34233ee5ac8acdb3aa831b25";import{B as c}from"/__mirror/assets/6ad137053d5da8fc91d912f1";const n="inline-flex",v="var(--ds-app-space-micro-l, 1.5rem)",g="var(--ds-app-space-micro-l, 1.5rem)",h="var(--ds-app-space-micro-xs, 0.5rem)",u="transparent",b="solid",f="var(--ds-border-xs, 0.0625rem)",m="var(--ds-app-radii-circle, 12.5rem)",y="var(--ds-app-color-interactive-secondary-fg-default, #2a446f)",$="var(--ds-app-color-interactive-secondary-bg-default, #e6f2fb)",_="var(--ds-app-color-interactive-secondary-fg-hover, #263e65)",k="var(--ds-app-color-interactive-secondary-bg-hover, #8ac1eb)",S="var(--ds-app-color-interactive-secondary-fg-active, #0e1726)",w="var(--ds-app-color-interactive-secondary-bg-active, #54a5e2)",x="var(--ds-app-color-interactive-secondary-fg-selected, #ffffff)",B="var(--ds-app-color-interactive-secondary-bg-selected, #005597)",j="var(--ds-app-color-interactive-secondary-fg-inactive, #9da9bd)",E="var(--ds-app-color-interactive-secondary-bg-inactive, #e6f2fb)",O="-0.3px",z="center",C="600",P="0.9375rem",R="var(--ds-app-space-micro-xs, 0.5rem)",A="auto",D=l`
  :host {
    ${d};

    display: var(--ds-pill-display, ${t(n)});
    text-align: var(--ds-pill-text-align, ${t(z)});
    letter-spacing: var(--ds-pill-letter-spacing, ${t(O)});
    font-weight: var(--ds-pill-font-weight, ${t(C)});
    font-size: var(--ds-pill-font-size, ${t(P)});
    gap: var(--ds-pill-gap, ${t(R)});
    padding-block: var(--ds-app-space-micro-xs, ${t(h)});
    padding-inline-start: var(
      --ds-pill-padding-inline-start,
      ${t(v)}
    );
    padding-inline-end: var(
      --ds-pill-padding-inline-end,
      ${t(g)}
    );
    border-style: var(--ds-pill-border-style, ${t(b)});
    border-width: var(--ds-pill-border-width, ${t(f)});
    border-color: var(--ds-pill-border-color, ${t(u)});
    border-radius: var(--ds-pill-border-radius, ${t(m)});
    color: var(--ds-pill-color, ${t(y)});
    background-color: var(
      --ds-pill-background-color,
      ${t($)}
    );
    width: var(--ds-pill-width, ${t(A)});
  }

  :host button {
    ${d};
    background-color: transparent;
    color: inherit;
    text-align: inherit;
    letter-spacing: inherit;
    font-weight: inherit;
    font-size: inherit !important;
    gap: inherit;
    padding-block: 0;
    padding-inline-start: 0;
    padding-inline-end: 0;
    outline: none;
  }

  /* Apply the outer dotted line effect */
  :host([delegate-outline]:focus) {
    ${s};
  }

  :host:hover {
    --ds-pill-color: var(--ds-pill-hover-color, ${t(_)});
    --ds-pill-background-color: var(
      --ds-pill-hover-background-color,
      ${t(k)}
    );
  }

  :host:active {
    --ds-pill-color: var(--ds-pill-pressed-color, ${t(S)});
    --ds-pill-background-color: var(
      --ds-pill-pressed-background-color,
      ${t(w)}
    );
  }

  :host([disabled]) {
    --ds-pill-color: var(
      --ds-pill-inactive-color,
      ${t(j)}
    );
    --ds-pill-background-color: var(
      --ds-pill-inactive-background-color,
      ${t(E)}
    );
    pointer-events: none;
  }

  :host([disabled]) button {
    pointer-events: none;
    cursor: default;
  }

  :host([active]) {
    --ds-pill-color: var(--ds-pill-active-color, ${t(x)});
    --ds-pill-background-color: var(
      --ds-pill-active-background-color,
      ${t(B)}
    );
  }

  @media (forced-colors: active) {
    :host([active]) {
      --ds-pill-background-color: highlight;
    }
  }

  :host([multi-select][active]) {
    --ds-pill-border-color: var(--ds-pill-multi-select-active-border-color, #2a446f);
    --ds-pill-padding-inline-end: var(--ds-app-space-micro-xs, 0.5rem);
    --ds-pill-color: var(
      --ds-pill-multi-select-active-color,
      ${t(S)}
    );
    --ds-pill-background-color: var(
      --ds-pill-multi-select-active-background-color,
      ${t($)}
    );
  }

  :host([disabled][active]),
  :host([disabled][multi-select][active]) {
    --ds-pill-color: var(
      --ds-pill-inactive-color,
      ${t(j)}
    );
    --ds-pill-background-color: var(
      --ds-pill-inactive-background-color,
      ${t(E)}
    );
    --ds-pill-border-color: transparent;
  }

  :host([multi-select]) .pill_wrapper {
    display: var(--ds-pill-wrapper-display, ${t(n)});
    gap: var(--ds-pill-wrapper-gap, ${t(R)});
  }
`;var F=Object.defineProperty,q=Object.getOwnPropertyDescriptor,G=(t,l,e,r)=>{for(var o,i=r>1?void 0:r?q(l,e):l,a=t.length-1;a>=0;a--)(o=t[a])&&(i=(r?o(l,e,i):o(i))||i);return r&&i&&F(l,e,i),i};const H="reimagine-pill";let I=class extends(c(p)){constructor(){super(...arguments),this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this.active=!1,this.disabled=!1,this.multiSelect=!1,this.delegateOutline=!1,this.asButton=!1}_handleSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length}render(){const t=e`
      <span
        part="pill__first"
        class="pill__first"
        style="${this._firstSlotEmpty?"display: none":""}"
      >
        <slot name="pill__first" @slotchange="${this._handleSlotChange}"></slot>
      </span>
      <slot></slot>
      ${this.active&&this.multiSelect?e`<reimagine-icon icon="dismiss-circle" filled size="large"></reimagine-icon>`:""}
      <span
        part="pill__last"
        class="pill__last"
        style="${this._lastSlotEmpty?"display: none":""}"
      >
        <slot name="pill__last" @slotchange="${this._handleSlotChange}"></slot>
      </span>
    `;return this.asButton?this.renderButton(t):e`<div part="pill_wrapper" class="pill_wrapper">${t}</div>`}};I.styles=[D],I.shadowRootOptions={...p.shadowRootOptions,delegatesFocus:!0},G([r({slot:"pill__first"})],I.prototype,"_firstSlot",2),G([r({slot:"pill__last"})],I.prototype,"_lastSlot",2),G([o()],I.prototype,"_firstSlotEmpty",2),G([o()],I.prototype,"_lastSlotEmpty",2),G([i({reflect:!0,type:Boolean})],I.prototype,"active",2),G([i({reflect:!0,type:Boolean})],I.prototype,"disabled",2),G([i({reflect:!0,type:Boolean,attribute:"multi-select"})],I.prototype,"multiSelect",2),G([i({type:Boolean,reflect:!0,attribute:"delegate-outline"})],I.prototype,"delegateOutline",2),G([i({reflect:!0,type:Boolean,attribute:"as-button"})],I.prototype,"asButton",2),I=G([a(H)],I);export{I as Pill,H as name};
