import{f as e,b as t,c as o,e as c,r,i as l}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import"/__mirror/assets/34233ee5ac8acdb3aa831b25";import{s as a}from"/__mirror/assets/579a4c6140e643b41d22eee8";import{l as i}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{q as s}from"/__mirror/assets/6ad137053d5da8fc91d912f1";var h=Object.defineProperty,n=(e,t,o,c)=>{for(var r,l=void 0,a=e.length-1;a>=0;a--)(r=e[a])&&(l=r(t,o,l)||l);return l&&h(t,o,l),l};const b=r=>{class l extends r{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.indeterminate=!1,this.size="medium",this.checkboxId="default-checkbox-id",this.name=void 0,this.form=void 0,this.value=void 0,this.required=!1,this.ariaChecked="false",this.leadingLabel=!1,this.labelText=null,this._checkboxLabelSlotEmpty=!0,this._checkboxLabelBeforeSlotEmpty=!0,this._checkboxLabelAfterSlotEmpty=!0}_handleClick(e){if(this.disabled)return;this.checked=!this.checked,this.indeterminate=!1;const t=new CustomEvent(e.type,{bubbles:!0,composed:!0});this.dispatchEvent(t)}_getIconName(){return this.indeterminate?"subtract":this.checked?"checkmark":""}handleCheckboxSlotChange(){this._checkboxLabelSlotEmpty=0===this._checkboxLabelSlot.length,this._checkboxLabelBeforeSlotEmpty=0===this._checkboxLabelBeforeSlot.length,this._checkboxLabelAfterSlotEmpty=0===this._checkboxLabelAfterSlot.length}renderCheckboxLabelSlot(){return t`
        <div
          part="checkbox__label-before"
          class="checkbox__label-before"
          style=${this._checkboxLabelBeforeSlotEmpty?"display: none;":""}
        >
          <slot name="checkbox__label-before" @slotchange=${this.handleCheckboxSlotChange}></slot>
        </div>
        <span
          part="checkbox__label-text"
          class="checkbox__label-text"
          style=${this._checkboxLabelSlotEmpty?"display: none;":""}
        >
          <slot name="checkbox__label-text" @slotchange=${this.handleCheckboxSlotChange}></slot>
        </span>
        <div
          part="checkbox__label-after"
          class="checkbox__label-after"
          style=${this._checkboxLabelAfterSlotEmpty?"display: none;":""}
        >
          <slot name="checkbox__label-after" @slotchange=${this.handleCheckboxSlotChange}></slot>
        </div>
      `}renderCheckbox(){var e;const o=this._getIconName();this.indeterminate||this.removeAttribute("indeterminate"),this.labelText=null==(e=this.querySelector('[slot="checkbox__label-text"]'))?void 0:e.textContent;const c=this.value||this.labelText;return t`
        <label class="checkbox__label" for=${this.checkboxId}>
          ${this.leadingLabel?this.renderCheckboxLabelSlot():""}
          <input
            type="checkbox"
            class="checkbox__input"
            id=${this.checkboxId}
            @click=${this._handleClick}
            name=${this.name}
            .value=${c}
            ?checked=${this.checked}
            ?disabled=${this.disabled}
            ?required=${this.required}
          />
          <span class="checkbox__control">
            ${o&&t`<reimagine-icon icon=${o} filled size=${this.size}></reimagine-icon>`||""}
          </span>
          ${this.leadingLabel?"":this.renderCheckboxLabelSlot()}
        </label>
      `}}return n([o({type:Boolean,reflect:!0})],l.prototype,"checked"),n([o({type:Boolean})],l.prototype,"disabled"),n([o({type:Boolean})],l.prototype,"indeterminate"),n([o({type:String})],l.prototype,"size"),n([o({type:String,attribute:"id"})],l.prototype,"checkboxId"),n([o({type:String})],l.prototype,"name"),n([o({type:String})],l.prototype,"form"),n([o({type:String})],l.prototype,"value"),n([o({type:Boolean})],l.prototype,"required"),n([o({type:String,attribute:!1})],l.prototype,"ariaChecked"),n([o({type:Boolean,attribute:"leading-label"})],l.prototype,"leadingLabel"),n([o({reflect:!1})],l.prototype,"labelText"),n([c({slot:"checkbox__label-text"})],l.prototype,"_checkboxLabelSlot"),n([e()],l.prototype,"_checkboxLabelSlotEmpty"),n([c({slot:"checkbox__label-before"})],l.prototype,"_checkboxLabelBeforeSlot"),n([e()],l.prototype,"_checkboxLabelBeforeSlotEmpty"),n([c({slot:"checkbox__label-after"})],l.prototype,"_checkboxLabelAfterSlot"),n([e()],l.prototype,"_checkboxLabelAfterSlotEmpty"),l},d="flex",p="var(--ds-app-space-micro-s, 0.75rem)",k="304px",x="32px",_="var(--ds-app-space-micro-xs, 0.5rem)",m="inline-flex",y="center",v="var(--ds-app-space-micro-s, 0.75rem)",f="relative",g="inline-flex",u="center",$="center",S="var(--ds-app-color-interactive-secondary-fg-default, #2a446f)",L="var(--ds-app-radii-xs, var(--ds-app-space-micro-2xs, 0.25rem))",C="var(--ds-border-s, 0.125rem)",w="solid",E="initial",B="2rem",j="2rem",z=l`
  /**
   * Default styles for the host element
   */
  :host {
    display: var(--ds-checkbox-display, ${r("flex")});
  }

  :host([appearance='filter-item']) {
    display: var(
      --ds-checkbox-filter-item-display,
      ${r(d)}
    );
    gap: var(--ds-checkbox-filter-item-gap, ${r(p)});
    width: var(--ds-checkbox-filter-item-width, ${r(k)});
    min-height: var(
      --ds-checkbox-filter-item-min-height,
      ${r(x)}
    );
    padding-inline-start: var(
      --ds-checkbox-filter-item-padding-inline-start,
      ${r(_)}
    );
  }

  /**
   * Styles for the label element
   */
  :host .checkbox__label {
    display: var(--ds-checkbox-label-display, ${r(m)});
    position: var(--ds-checkbox-label-position, ${r(f)});
    align-items: var(
      --ds-checkbox-label-align-items,
      ${r(y)}
    );
    gap: var(--ds-checkbox-label-gap, ${r(v)});
    font-weight: var(--ds-checkbox-label-font-weight, ${r(s.fontWeight)});
    font-size: var(--ds-checkbox-label-font-size, ${r(s.fontSize)});
    line-height: var(--ds-checkbox-label-line-height, ${r(s.lineHeight)});
    color: var(--ds-app-color-base-default-fg-heading);
  }

  /**
   * Styles for the input element (visually hidden)
   */
  :host .checkbox__input {
    ${a};
  }

  /**
   * Styles for the checkbox control element
   */
  :host .checkbox__control {
    display: var(
      --ds-checkbox-control-display,
      ${r(g)}
    );
    flex-shrink: var(--ds-checkbox-control-flex-shrink, 0);
    align-items: var(
      --ds-checkbox-control-align-items,
      ${r(u)}
    );
    justify-content: var(
      --ds-checkbox-control-justify-content,
      ${r($)}
    );
    border-color: var(
      --ds-checkbox-control-border-color,
      ${r(S)}
    );
    width: var(
      --ds-checkbox-control-width,
      calc(
        ${r(B)} - calc(
            ${r(C)} * 2
          )
      )
    );
    height: var(
      --ds-checkbox-control-height,
      calc(
        ${r(j)} - calc(
            ${r(C)} * 2
          )
      )
    );
    border-style: var(
      --ds-checkbox-control-border-style,
      ${r(w)}
    );
    border-radius: var(
      --ds-checkbox-control-border-radius,
      ${r(L)}
    );
    border-width: var(
      --ds-checkbox-control-border-width,
      ${r(C)}
    );
    background-color: var(
      --ds-checkbox-control-background-color,
      ${r(E)}
    );
  }

  /**
   * Styles for checked and indeterminate states
   */
  :host([checked]) .checkbox__control,
  :host([indeterminate]) .checkbox__control {
    --ds-checkbox-control-background-color: var(--ds-app-color-interactive-primary-bg-default);
    --ds-checkbox-control-border-color: var(--ds-app-color-interactive-primary-bg-default);
  }

  /**
   * Icon color styling for checked and indeterminate states
   */
  :host([checked]) .checkbox__control reimagine-icon,
  :host([indeterminate]) .checkbox__control reimagine-icon {
    --ds-checkbox-control-background-color: var(--ds-app-color-interactive-primary-bg-default);
    --ds-icon-color: var(--ds-app-color-base-default-bg-opt3);
  }

  /**
   * Hover state styling for the checkbox control
   */
  :host .checkbox__control:hover {
    --ds-checkbox-control-border-color: var(--ds-app-color-interactive-secondary-fg-hover);
  }

  /**
   * Hover state styling when checked or indeterminate
   */
  :host([checked]) .checkbox__control:hover,
  :host([indeterminate]) .checkbox__control:hover {
    --ds-checkbox-control-border-color: var(--ds-app-color-interactive-primary-bg-default);
  }

  /**
   * Small size adjustments for the checkbox control
   */
  :host([size='small']) .checkbox__control {
    --ds-checkbox-control-width: calc(
      1.5rem - calc(
          var(
              --ds-checkbox-control-border-width,
              ${r(C)}
            ) *
            2
        )
    );
    --ds-checkbox-control-height: calc(
      1.5rem - calc(
          var(
              --ds-checkbox-control-border-width,
              ${r(C)}
            ) *
            2
        )
    );
  }

  /**
   * Disabled state styles
   */
  :host([disabled]) .checkbox__control,
  :host([disabled]) ::slotted([slot='checkbox__label-text']) {
    opacity: 0.2;
  }

  :host([disabled]) .checkbox__control {
    cursor: not-allowed;
  }

  /**
   * Active state styling for the checkbox control
   */
  :host .checkbox__input:not([disabled]):active + .checkbox__control {
    --ds-checkbox-control-border-color: var(--ds-app-color-interactive-secondary-border-active);
  }

  /**
   * Active state styling for checked or indeterminate checkboxes
   */
  :host([checked]) .checkbox__input:not([disabled]):active + .checkbox__control,
  :host([indeterminate]) .checkbox__input:not([disabled]):active + .checkbox__control {
    --ds-checkbox-control-background-color: var(--ds-app-color-interactive-primary-bg-active);
    --ds-checkbox-control-border-color: var(--ds-app-color-interactive-primary-bg-active);
  }

  /**
   * Hidden label styling for accessibility (screen readers only)
   */
  :host([label-hidden]) {
    --ds-checkbox-label-gap: 0;
  }

  :host([label-hidden]) ::slotted([slot='checkbox__label-text']) {
    ${a};
  }

  /**
   * Focus state styling for the checkbox control
   */
  :host .checkbox__input:focus + .checkbox__control {
    ${i};
  }
`;export{b as C,z as s};
