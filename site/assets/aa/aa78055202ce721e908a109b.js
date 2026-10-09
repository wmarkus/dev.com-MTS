import{r as e,i as t,b as o,c as i,e as s,f as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{R as n}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{d as a}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{r as l,c,l as d,L as h}from"/__mirror/assets/6ad137053d5da8fc91d912f1";const p="var(--ds-comp-tabs-item-linkbarselector-item-width, 16.1875rem)",u="4rem",v="5rem",m="var(--ds-app-radii-circle, 624.9375rem)",b="var(--ds-app-color-surface-solid-bg-default, #fefefe)",f="var(--ds-app-color-base-default-fg-heading, #0e1726)",g="var(--ds-app-space-micro-l, 1.5rem)",y="var(--ds-app-space-micro-m, 1rem)",w="var(--ds-app-space-micro-xs, 0.5rem)",k="11rem",$="var(--ds-app-space-micro-2xs, 0.25rem)",x="var(--ds-app-color-base-default-fg-body, #3a4c56)",S="-0.02em",_="var(--ds-app-color-base-default-fg-highlight, #005597)",E="var(--ds-app-color-base-default-fg-accent, #0078d4)",C="1.25rem",O="150ms",z="ease-in-out",j="0.1875rem",T="dotted",I="-0.5rem",R="var(--ds-app-color-interactive-secondary-fg-default, #2a446f)",D="var(--ds-app-color-interactive-secondary-fg-selected, #ffffff)",F="var(--ds-app-color-interactive-secondary-bg-default, #e6f2fb)",A="var(--ds-app-color-interactive-secondary-fg-hover, #263e65)",L="var(--ds-app-color-interactive-secondary-bg-hover, #8ac1eb)",U="var(--ds-app-color-interactive-secondary-fg-active, #0e1726)",q="var(--ds-app-color-interactive-primary-bg-selected, #005597)",H="var(--ds-app-color-interactive-secondary-fg-selected, #ffffff)",W="var(--ds-app-color-interactive-primary-fg-selected, #ffffff)",B="var(--ds-app-color-surface-solid-bg-nonclickable, #fefefe)",M="var(--ds-app-color-interactive-secondary-fg-inactive, #9da9bd)",P="var(--ds-app-color-interactive-secondary-fg-inactive, #9da9bd)",G=t`
  /* The [hidden] attribute is used to hide optional slot wrappers when their
     slot is empty (see index.ts _renderOptionalSlot). We define an explicit
     !important rule because the .number / .eyebrow / .icon selectors below
     set an explicit display: flex, which would otherwise beat the UA
     [hidden] { display: none } rule. */
  [hidden] {
    display: none !important;
  }

  :host {
    display: var(--ds-selector-links-item-display, ${e("inline-flex")});
    width: var(--ds-selector-links-item-width, ${e(p)});
    min-height: var(--ds-selector-links-item-min-height, ${e(u)});
    max-height: var(--ds-selector-links-item-max-height, ${e(v)});
    border-radius: var(
      --ds-selector-links-item-border-radius,
      ${e(m)}
    );
    background-color: var(
      --ds-selector-links-item-background-color,
      ${e(b)}
    );
    color: var(--ds-selector-links-item-color, ${e(f)});
    overflow: clip;
    box-sizing: border-box;
    cursor: pointer;
    transition:
      background-color
        var(
          --ds-selector-links-item-transition-duration,
          ${e(O)}
        )
        ${e(z)},
      color
        var(
          --ds-selector-links-item-transition-duration,
          ${e(O)}
        )
        ${e(z)};
  }

  :host a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    min-height: inherit;
    max-height: inherit;
    padding: var(--ds-selector-links-item-padding, ${e(g)});
    color: inherit;
    background: transparent;
    border: none;
    text-decoration: none;
    outline: none;
    cursor: inherit;
  }

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-inline: var(
      --ds-selector-links-item-inner-padding-inline,
      ${e(y)}
    );
  }

  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--ds-selector-links-item-row-gap, ${e(w)});
    width: var(--ds-selector-links-item-row-width, ${e(k)});
    max-width: 100%;
  }

  .number,
  .eyebrow,
  .label,
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: inherit;
  }

  .text-column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: var(
      --ds-selector-links-item-text-column-gap,
      ${e($)}
    );
  }

  .number {
    font-weight: ${e(l.fontWeight)};
    font-size: ${e(l.fontSize)};
    line-height: ${e(l.lineHeight)};
    letter-spacing: var(
      --ds-selector-links-item-number-letter-spacing,
      ${e(S)}
    );
    color: var(--ds-selector-links-item-number-color, ${e(x)});
    white-space: nowrap;
  }

  .eyebrow {
    font-weight: ${e(c.fontWeight)};
    font-size: ${e(c.fontSize)};
    line-height: ${e(c.lineHeight)};
    color: var(--ds-selector-links-item-eyebrow-color, ${e(_)});
    white-space: nowrap;
  }

  .label {
    font-weight: ${e(d.fontWeight)};
    font-size: ${e(d.fontSize)};
    line-height: ${e(d.lineHeight)};
    color: inherit;
    white-space: nowrap;
  }

  /* The slotted <reimagine-icon> ignores parent \`color\` inheritance —
     its own :host rule sets \`color: var(--ds-icon-color, ...accent)\`
     which wins over the cascaded value. Route the icon color through
     \`--ds-icon-color\` (which IS inherited as a custom property) so the
     rendered SVG's \`fill: currentColor\` actually picks it up. Setting
     both \`color\` and \`--ds-icon-color\` covers both slotted <svg>
     (which uses currentColor from the .icon container) and slotted
     <reimagine-icon> (which reads from --ds-icon-color). */
  .icon {
    flex-shrink: 0;
    width: var(--ds-selector-links-item-icon-size, ${e(C)});
    height: var(--ds-selector-links-item-icon-size, ${e(C)});
    color: var(--ds-selector-links-item-icon-color, ${e(E)});

    --ds-icon-color: var(
      --ds-selector-links-item-icon-color,
      ${e(E)}
    );
  }

  .icon ::slotted(*) {
    width: 100%;
    height: 100%;
    display: block;
  }

  /* The trailing icon slot is meant for a directional glyph (e.g. chevron-right)
     that indicates onward navigation. Mirror it in RTL so the arrow points toward
     the reading direction. Matches the pattern used in pagination.styles.ts. */
  :host(:dir(rtl)) .icon ::slotted(*) {
    transform: scaleX(-1);
  }

  /* Hover — applies only when interactive (not selected, not disabled, not inactive) */
  :host(:hover:not([selected]):not([disabled]):not([inactive])) {
    background-color: var(
      --ds-selector-links-item-hover-background-color,
      ${e(F)}
    );
    color: var(--ds-selector-links-item-hover-color, ${e(A)});
  }

  /* On hover/active, per Figma the number, eyebrow, label, and icon all share
     the host's foreground color. Force the .number, .eyebrow, and .icon
     descendants to inherit so their default per-descendant tokens don't
     override the shared state color. */
  :host(:hover:not([selected]):not([disabled]):not([inactive])) .number,
  :host(:hover:not([selected]):not([disabled]):not([inactive])) .eyebrow,
  :host(:hover:not([selected]):not([disabled]):not([inactive])) .icon {
    color: inherit;
  }

  /* Slotted <reimagine-icon> reads its fill from --ds-icon-color, not the
     cascaded color — same reason the default .icon and disabled .icon rules
     set both. Point it at the hover-state color token so the chevron tracks
     hover instead of staying frozen at the default accent-blue. */
  :host(:hover:not([selected]):not([disabled]):not([inactive])) .icon {
    --ds-icon-color: var(
      --ds-selector-links-item-hover-color,
      ${e(A)}
    );
  }

  /* Active (pressed) — applies only when interactive (not selected, not disabled, not inactive) */
  :host(:active:not([selected]):not([disabled]):not([inactive])) {
    background-color: var(
      --ds-selector-links-item-active-background-color,
      ${e(L)}
    );
    color: var(--ds-selector-links-item-active-color, ${e(U)});
  }

  :host(:active:not([selected]):not([disabled]):not([inactive])) .number,
  :host(:active:not([selected]):not([disabled]):not([inactive])) .eyebrow,
  :host(:active:not([selected]):not([disabled]):not([inactive])) .icon {
    color: inherit;
  }

  :host(:active:not([selected]):not([disabled]):not([inactive])) .icon {
    --ds-icon-color: var(
      --ds-selector-links-item-active-color,
      ${e(U)}
    );
  }

  /* Selected — filled primary surface with light foreground; icon is hidden */
  :host([selected]) {
    background-color: var(
      --ds-selector-links-item-selected-background-color,
      ${e(q)}
    );
    color: var(
      --ds-selector-links-item-selected-color,
      ${e(H)}
    );
  }

  :host([selected]) .eyebrow {
    color: var(
      --ds-selector-links-item-selected-eyebrow-color,
      ${e(W)}
    );
  }

  :host([selected]) .number {
    color: inherit;
  }

  :host([selected]) .icon {
    display: none;
  }

  /* Disabled / Inactive — Figma State=Inactive. Both attributes trigger the
     same treatment; 'disabled' is the legacy name, 'inactive' is the
     Figma-canonical name (see index.ts for two-way mirror). */
  :host([disabled]),
  :host([inactive]) {
    background-color: var(
      --ds-selector-links-item-disabled-background-color,
      ${e(B)}
    );
    color: var(
      --ds-selector-links-item-disabled-color,
      ${e(M)}
    );
    cursor: not-allowed;
    pointer-events: none;
  }

  :host([disabled]) .number,
  :host([disabled]) .eyebrow,
  :host([inactive]) .number,
  :host([inactive]) .eyebrow {
    color: inherit;
  }

  /* Icon uses an explicit disabled token rather than \`inherit\` because the
     inner \`<reimagine-icon>\` reads its stroke/fill from its own
     \`--ds-icon-color\` chain, which doesn't pick up the host's \`color\`
     cascade reliably across the slot boundary. Set both \`color\` (for
     slotted <svg> using currentColor) and \`--ds-icon-color\` (for slotted
     <reimagine-icon>, whose :host rule overrides inherited color).
     Routed through a component-level custom property so consumers can
     still override it. */
  :host([disabled]) .icon,
  :host([inactive]) .icon {
    color: var(
      --ds-selector-links-item-disabled-icon-color,
      ${e(P)}
    );

    --ds-icon-color: var(
      --ds-selector-links-item-disabled-icon-color,
      ${e(P)}
    );
  }

  /* Focus — paint the outline on the host itself so it isn't clipped by
     the host's own \`overflow: clip\`. Three overlapping browser/spec
     quirks shape this rule:

     1. Selector: \`:host(:focus-within)\` is the only reliable form.
        \`:host(:has(a:focus-visible))\` is silently dropped at parse
        time in current Chromium (\`:has()\` inside \`:host()\` isn't
        reliably supported), and \`:host(:focus-visible)\` does not
        match even when the delegated internal anchor is keyboard-
        focused — only \`:focus\` and \`:focus-within\` propagate through
        \`delegatesFocus: true\`. \`:focus-within\` reflects focus on any
        descendant, including the shadow-DOM anchor. In practice this
        behaves like a keyboard-focus indicator because the internal
        anchor has \`outline: none\` and browsers suppress UA focus
        rings for mouse activation on links.

     2. Specificity padding: \`:host([tabindex]:focus-within)\` (rather
        than plain \`:host(:focus-within)\`) raises specificity above
        the global \`[tabindex]:focus\` reset shipped by the app-shell
        stylesheet, so \`outline-offset\` and the other longhands win
        the cascade. The host always carries \`tabindex\` (set in
        \`connectedCallback\`), so requiring the attribute doesn't
        narrow the match, only its weight.

     3. \`!important\` on \`outline-color\`: even with higher specificity,
        Chromium's cascade lets the app-shell reset's shorthand
        \`outline: ... currentColor\` win the \`outline-color\` slot
        against \`:host()\` rules — collapsing the ring to the host's
        text color and blending it into the Selected surface.
        \`!important\` is a defensive standard for critical focus
        indicators and does not lock consumers out: overriding via
        \`--ds-selector-links-item-outline-color\` (or its selected
        counterpart) still works because the important applies to the
        whole var() expression, not any resolved value.

     Longhand outline properties are used (rather than the \`outline\`
     shorthand) so each token resolves independently — nested var()
     fallbacks like \`var(--x, var(--y))\` inside the shorthand can
     collapse to the initial value in some browsers. */
  :host([tabindex]:focus),
  :host([tabindex]:focus-within) {
    outline-width: var(
      --ds-selector-links-item-outline-width,
      ${e(j)}
    );
    outline-style: var(
      --ds-selector-links-item-outline-style,
      ${e(T)}
    );
    outline-color: var(
      --ds-selector-links-item-outline-color,
      ${e(R)}
    ) !important;
    outline-offset: var(
      --ds-selector-links-item-outline-offset,
      ${e(I)}
    );
  }

  /* Selected + focused — the interactive-secondary-fg-default token used
     for the default focus ring lacks contrast against the filled Selected
     surface. Swap to the interactive-secondary-fg-selected token so the
     focus ring stays visible when the item is both selected and focused.
     \`!important\` is inherited from the reasoning above — the reset.css
     global rule fights this override too. */
  :host([selected][tabindex]:focus),
  :host([selected][tabindex]:focus-within) {
    outline-color: var(
      --ds-selector-links-item-selected-outline-color,
      ${e(D)}
    ) !important;
  }

  @media (forced-colors: active) {
    :host {
      border: 1px solid CanvasText;
    }

    :host([selected]) {
      background-color: SelectedItem;
      color: SelectedItemText;
    }

    :host([disabled]),
    :host([inactive]) {
      color: GrayText;
    }
  }
`;var K=Object.defineProperty,V=Object.getOwnPropertyDescriptor,X=(e,t,o,i)=>{for(var s,r=i>1?void 0:i?V(t,o):t,n=e.length-1;n>=0;n--)(s=e[n])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&K(t,o,r),r};const J="reimagine-selector-links-item";let N=class extends(h(n)){constructor(){super(...arguments),this.selected=!1,this.inactive=!1,this._numberSlotEmpty=!0,this._eyebrowSlotEmpty=!0,this._iconSlotEmpty=!0,this._anchor=null,this._handleKeyDown=e=>{var t;" "!==e.key&&"Spacebar"!==e.key&&"Enter"!==e.key||(e.preventDefault(),!this.disabled&&!this.inactive&&(null==(t=this._anchor)||t.click()))}}_handleSlotChange(){const e=0===this._numberSlot.length;this._numberSlotEmpty!==e&&(this._numberSlotEmpty=e);const t=0===this._eyebrowSlot.length;this._eyebrowSlotEmpty!==t&&(this._eyebrowSlotEmpty=t);const o=0===this._iconSlot.length;this._iconSlotEmpty!==o&&(this._iconSlotEmpty=o)}_renderOptionalSlot(e,t){return o`
      <div part=${e} class=${e} ?hidden=${t}>
        <slot name=${e} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute("tabindex")||this.setAttribute("tabindex",this.disabled||this.inactive?"-1":"0")}firstUpdated(){var e,t;this._anchor=(null==(e=this.shadowRoot)?void 0:e.querySelector("a"))??null,null==(t=this._anchor)||t.addEventListener("keydown",this._handleKeyDown)}focus(e){var t,o;null==(o=this._anchor??(null==(t=this.shadowRoot)?void 0:t.querySelector("a")))||o.focus(e)}willUpdate(e){var t;if(null==(t=super.willUpdate)||t.call(this,e),e.has("selected")&&(this.ariaCurrent=this.selected?"page":null),e.has("disabled")||e.has("inactive")){const e=this.disabled||this.inactive;this.setAttribute("tabindex",e?"-1":"0"),this.ariaDisabled=e?"true":null}}render(){const e=o`
      <div part="inner" class="inner">
        <div part="row" class="row">
          ${this._renderOptionalSlot("number",this._numberSlotEmpty)}
          <div part="text-column" class="text-column">
            ${this._renderOptionalSlot("eyebrow",this._eyebrowSlotEmpty)}
            <div part="label" class="label">
              <slot></slot>
            </div>
          </div>
          ${this._renderOptionalSlot("icon",this._iconSlotEmpty)}
        </div>
      </div>
    `;return this.renderLink(e)}};N.styles=[G],N.shadowRootOptions={...n.shadowRootOptions,delegatesFocus:!0},X([i({type:Boolean,reflect:!0})],N.prototype,"selected",2),X([i({type:Boolean,reflect:!0})],N.prototype,"inactive",2),X([s({slot:"number"})],N.prototype,"_numberSlot",2),X([s({slot:"eyebrow"})],N.prototype,"_eyebrowSlot",2),X([s({slot:"icon"})],N.prototype,"_iconSlot",2),X([r()],N.prototype,"_numberSlotEmpty",2),X([r()],N.prototype,"_eyebrowSlotEmpty",2),X([r()],N.prototype,"_iconSlotEmpty",2),N=X([a(J)],N);export{N as SelectorLinksItem,J as name};
