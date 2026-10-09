import{r as t,i as n,c as i,e as o,f as e,b as l,o as s}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{q as a,e as r,f as p,d}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{R as u,B as c,i as h,j as _}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{l as m,q as b}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{s as v}from"/__mirror/assets/579a4c6140e643b41d22eee8";import{s as g}from"/__mirror/assets/4230c2711e37b2e85105da0e";import{I as y}from"/__mirror/assets/2e9aed9389db597dff461cb3";import{a as f}from"/__mirror/assets/34233ee5ac8acdb3aa831b25";import"/__mirror/assets/5d2e1bf3d87581457a2b76db";const $="center",S="space-between",E="var(--ds-app-space-micro-xs)",k="var(--ds-app-space-micro-s)",x="var(--ds-app-space-micro-m)",w="var(--ds-app-space-micro-s)",z="var(--ds-app-space-micro-s)",j="var(--ds-app-radii-m)",C="var(--ds-elevation-level-2)",O="flex",L="column",B="var(--ds-app-space-micro-3xs)",D="1",H="flex",P="column",q="var(--ds-app-color-base-default-fg-highlight)",A="none",I="24px",K="0.8",M="var(--ds-app-color-base-default-fg-body, #17253d)",R="0rem",W="0rem",F="0rem",G="0rem",J="0rem",N=n`
  :host {
    display: var(--ds-input-display, ${t("flex")});
    align-items: var(--ds-input-align-items, ${t($)});
    gap: var(--ds-input-gap, ${t(E)});
    justify-content: var(--ds-input-justify-content, ${t(S)});
  }

  :host([contained]) {
    background: var(--ds-input-contained-background, ${t(g.background)});
    border-style: var(
      --ds-input-contained-border-style,
      ${t(g.borderStyle)}
    );
    border-color: var(
      --ds-input-contained-border-color,
      ${t(g.borderColor)}
    );
    padding-inline-start: var(
      --ds-input-contained-padding-inline-start,
      ${t(x)}
    );
    padding-inline-end: var(
      --ds-input-contained-padding-inline-end,
      ${t(k)}
    );
    padding-block-start: var(
      --ds-input-contained-padding-block-start,
      ${t(z)}
    );
    padding-block-end: var(
      --ds-input-contained-padding-block-end,
      ${t(w)}
    );
    border-radius: var(
      --ds-input-contained-border-radius,
      ${t(j)}
    );
    box-shadow: var(
      --ds-input-contained-box-shadow,
      ${t(C)}
    );
  }

  :host(:focus) {
    outline: none !important;
  }

  .input__control {
    display: var(--ds-input-control-display, ${t(O)});
    flex-direction: var(
      --ds-input-control-flex-direction,
      ${t(L)}
    );
    gap: var(--ds-input-control-gap, ${t(B)});
    flex-grow: var(
      --ds-input-control-flex-grow,
      ${t(D)}
    );
  }

  .input__trailing {
    display: var(--ds-input-trailing-display, initial);
    align-self: var(--ds-input-trailing-align-self, initial);
  }

  .input__control-label,
  ::slotted([slot='input__control-label']) {
    display: var(
      --ds-input-control-label-display,
      ${t(H)}
    );
    flex-direction: var(
      --ds-input-control-label-flex-direction,
      ${t(P)}
    );
    color: var(--ds-input-control-label-color, ${t(q)});
    font-size: var(
      --ds-input-label-font-size,
      ${t(m.fontSize)}
    ) !important;
    font-weight: var(--ds-input-label-font-weight, ${t(m.fontWeight)});
    line-height: var(--ds-input-label-line-height, ${t(m.lineHeight)});
  }

  .input__control-input,
  ::slotted([slot='input__control-input']) {
    display: var(--ds-input-control-input-displ, 'flex');
    width: var(--ds-input-control-input-width, 100%);
    overflow: var(--ds-input-control-input-overflow, initial);
    text-overflow: var(--ds-input-control-input-text-overflow, ellipsis);
    border: var(
      --ds-input-control-input-border,
      ${t(A)}
    );
    background: var(--ds-input-control-input-background, 'none');
    color: var(
      --ds-input-control-input-color,
      ${t(M)}
    );
    font-size: var(--ds-input-control-input-font-size, ${t(b.fontSize)});
    font-weight: var(
      --ds-input-control-input-font-weight,
      ${t(b.fontWeight)}
    );
    line-height: var(
      --ds-input-control-input-line-height,
      ${t(b.lineHeight)}
    );
    height: var(
      --ds-input-control-input-height,
      ${t(I)}
    );
    padding-inline-start: var(
      --ds-input-control-input-inline-start,
      ${t(R)}
    );
    padding-inline-end: var(
      --ds-input-control-input-inline-end,
      ${t(W)}
    );
    padding-block-start: var(
      --ds-input-control-input-block-start,
      ${t(F)}
    );
    padding-block-end: var(
      --ds-input-control-input-block-end,
      ${t(G)}
    );
    outline-offset: var(
      --ds-input-control-input-outline-offset,
      ${t(J)}
    );
  }

  ::slotted([slot='input__control-input'])::placeholder {
    color: var(--ds-input-control-input-color);
    opacity: var(
      --ds-input-control-input-opacity,
      ${t(K)}
    );
  }

  :host(:focus) ::slotted([slot='input__control-input'])::placeholder,
  :host(:active) ::slotted([slot='input__control-input'])::placeholder,
  :host(:hover) ::slotted([slot='input__control-input'])::placeholder {
    --ds-input-control-input-opacity: 1;
  }

  :host([label-hidden]) ::slotted([slot='input__control-label']) {
    ${v};
  }

  :host([disabled]) {
    opacity: 0.2;
    cursor: not-allowed;
    pointer-events: none;
  }
`;var Q=Object.defineProperty,T=Object.getOwnPropertyDescriptor,U=(t,n,i,o)=>{for(var e,l=o>1?void 0:o?T(n,i):n,s=t.length-1;s>=0;s--)(e=t[s])&&(l=(o?e(n,i,l):e(l))||l);return o&&l&&Q(n,i,l),l};const V="reimagine-input";let X=class extends u{constructor(){super(...arguments),this.buttonSize=c.small,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._leadingSlotEmpty=!0,this._inputLabelSlotEmpty=!0,this._inputElementSlotEmpty=!0,this._inputEvents=[],this._handleClick=()=>{const t=this._inputElementSlot[0].value,n=new CustomEvent(y.submit,{detail:{value:t}});this.dispatchEvent(n)},this._handleKeyDown=t=>{"Enter"===t.key&&this._handleClick()}}_handleSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length,this._leadingSlotEmpty=0===this._leadingSlot.length,this._inputLabelSlotEmpty=0===this._inputLabelSlot.length,this._inputElementSlotEmpty=0===this._inputElementSlot.length}updated(t){var n;this._leadingSlotEmpty||this._leadingSlot[0].setAttribute("size","xs"),t.has("size")&&(null==(n=a(this.shadowRoot,"reimagine-button"))||n.setAttribute("size",this.buttonSize))}_renderOptionalSlot(t,n){return l`
      <div part=${t} class=${t} style="${n?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}connectedCallback(){super.connectedCallback();const t=a(this,"reimagine-button");this._inputEvents.push({el:t??this,type:"click",handler:this._handleClick},{el:this,type:"keydown",handler:this._handleKeyDown}),r(this._inputEvents)}disconnectedCallback(){super.disconnectedCallback(),p(this._inputEvents)}_buildMarkup(){return l`
      ${this._renderOptionalSlot("input__first",this._firstSlotEmpty)}
      ${this._renderOptionalSlot("input__leading",this._leadingSlotEmpty)}

      <div class="input__control" part="input__control">
        <slot></slot>
        ${this._renderOptionalSlot("input__control-label",this._inputLabelSlotEmpty)}
        ${this._renderOptionalSlot("input__control-input",this._inputElementSlotEmpty)}
      </div>

      <div part="input__trailing" class="input__trailing" @slotchange="${this._handleSlotChange}">
        <slot name="input__trailing">
          <reimagine-button
            size="${this.buttonSize}"
            appearance="${h.buttonPrimary}"
            shape="${_.rounded}"
            icon-only
            button-label="${s(this.inputButtonLabel)}"
          >
            <reimagine-icon
              slot="button__icon"
              size="${f.medium}"
              icon="search"
              role="presentation"
              aria-hidden="true"
            >
            </reimagine-icon>
          </reimagine-button>
        </slot>
      </div>

      ${this._renderOptionalSlot("input__last",this._lastSlotEmpty)}
    `}render(){return this._buildMarkup()}};X.styles=[N],U([i({reflect:!0,attribute:"input-button-label"})],X.prototype,"inputButtonLabel",2),U([i({reflect:!0,attribute:"label-hidden"})],X.prototype,"labelHidden",2),U([i({reflect:!0})],X.prototype,"contained",2),U([i({reflect:!0,attribute:"button-size"})],X.prototype,"buttonSize",2),U([o({slot:"input__first"})],X.prototype,"_firstSlot",2),U([o({slot:"input__last"})],X.prototype,"_lastSlot",2),U([o({slot:"input__leading"})],X.prototype,"_leadingSlot",2),U([o({slot:"input__control-label"})],X.prototype,"_inputLabelSlot",2),U([o({slot:"input__control-input"})],X.prototype,"_inputElementSlot",2),U([e()],X.prototype,"_firstSlotEmpty",2),U([e()],X.prototype,"_lastSlotEmpty",2),U([e()],X.prototype,"_leadingSlotEmpty",2),U([e()],X.prototype,"_inputLabelSlotEmpty",2),U([e()],X.prototype,"_inputElementSlotEmpty",2),U([e()],X.prototype,"_inputEvents",2),X=U([d(V)],X);export{X as Input,V as name};
