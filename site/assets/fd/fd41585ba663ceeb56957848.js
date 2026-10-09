import{r as t,i as e,c as o,g as r,f as i,k as a,b as n}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{l as s,R as d}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{i as l,s as c,r as h,d as p}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{n as u,q as b,p as g}from"/__mirror/assets/6ad137053d5da8fc91d912f1";const v={display:"inline-flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"var(--ds-app-color-interactive-primary-bg-default, #0078d4)",foregroundColor:"var(--ds-app-color-base-default-fg-body, #17253d)",borderColorEnabled:"var(--ds-app-color-interactive-secondary-border-default, #2a446f)",borderColorHover:"var(--ds-app-color-interactive-secondary-border-hover, #263e65)",borderColorPressed:"var(--ds-app-color-interactive-secondary-border-active, #17253d)",borderWidth:"var(--ds-border-xs, 0.0625rem)",borderRadius:"var(--ds-app-radii-circle, 50%)",borderColorInactive:"var(--ds-app-color-interactive-secondary-border-inactive, #bdc5d2)",foregroundColorInactive:"var(--ds-app-color-interactive-secondary-fg-inactive, #9da9bd)",controlWidth:"1.5rem",controlHeight:"1.5rem",dotWidth:"0.75rem",dotHeight:"0.75rem",spacing:"var(--ds-app-space-micro-xs, 0.5rem)",fontWeight:u.fontWeight,fontSize:u.fontSize,lineHeight:u.lineHeight,letterSpacing:u.letterSpacing,spacingLarge:"var(--ds-app-space-micro-s, 0.75rem)",fontWeightLarge:b.fontWeight,fontSizeLarge:b.fontSize,lineHeightLarge:b.lineHeight,letterSpacingLarge:b.letterSpacing,pointerEvents:"auto",cursor:"auto"},f=e`
  .radiobutton__wrapper {
    display: ${t(v.display)};
    flex-direction: ${t(v.flexDirection)};
    align-items: ${t(v.alignItems)};
    justify-content: ${t(v.justifyContent)};
    gap: ${t(v.spacing)};
  }

  .radiobutton__tag {
    display: ${t(v.display)};
  }

  .radiobutton__label {
    font-size: ${t(v.fontSize)};
    font-weight: ${t(v.fontWeight)};
    line-height: ${t(v.lineHeight)};
    letter-spacing: ${t(v.letterSpacing)};
    color: ${t(v.foregroundColor)};
    display: grid;
    grid-template-columns: ${t(v.controlWidth)} auto;
    gap: ${t(v.spacing)};
    align-items: ${t(v.alignItems)};
    pointer-events: var(
      --ds-radiobutton-pointer-events,
      ${t(v.pointerEvents)}
    );
    cursor: var(--ds-radiobutton-cursor, ${t(v.cursor)});
  }

  :host([size='large']) .radiobutton__label {
    font-size: ${t(v.fontSizeLarge)};
    font-weight: ${t(v.fontWeightLarge)};
    line-height: ${t(v.lineHeightLarge)};
    letter-spacing: ${t(v.letterSpacingLarge)};
    gap: ${t(v.spacingLarge)};
  }

  .radiobutton__input {
    /* Hide the default radio button */
    appearance: none;

    /* Not removed via appearance */
    margin: 0;

    /* For iOS < 15 to remove gradient background */
    background-color: transparent;

    /* Add new styles for custom appearance */
    font: inherit;
    color: currentcolor;
    width: ${t(v.controlWidth)};
    height: ${t(v.controlHeight)};
    border-color: ${t(v.borderColorEnabled)};
    border-radius: ${t(v.borderRadius)};
    border-width: ${t(v.borderWidth)};
    border-style: solid;
    display: grid;
    place-content: center;
    pointer-events: var(
      --ds-radiobutton-pointer-events,
      ${t(v.pointerEvents)}
    );
    cursor: var(--ds-radiobutton-cursor, ${t(v.cursor)});

    &:focus {
      ${s};
    }

    &:hover {
      border-color: ${t(v.borderColorHover)};
    }

    &:checked {
      border-color: ${t(v.borderColorPressed)};
    }

    /* Create the custom inner dot for when radiobutton is checked */
    &::before {
      content: '';
      width: ${t(v.dotWidth)};
      height: ${t(v.dotHeight)};
      border-radius: ${t(v.borderRadius)};

      /* Using box-shadow instead of background-color so the state of the radio can be visible when printed */
      box-shadow: inset 1rem 1rem ${t(v.backgroundColor)};

      /* Fallback so the dot is visible in forced-colors mode */
      background-color: canvastext;

      /* Hide the dot by default */
      transform: scale(0);
      transition: 120ms transform ease-in-out;
    }

    /* Show the dot when radiobutton is checked */
    :host([active]) &::before,
    &:checked::before {
      transform: scale(1);
    }
  }

  /* Inactive (disabled) state */
  :host([disabled]) .radiobutton__input,
  :host([disabled]) .radiobutton__input:hover {
    border-color: var(
      --ds-radiobutton-border-color-inactive,
      ${t(v.borderColorInactive)}
    );
  }

  :host([disabled]) .radiobutton__input::before {
    /* Ensure checked disabled radios don't keep the enabled fill color */
    box-shadow: inset 1rem 1rem
      var(
        --ds-radiobutton-dot-color-inactive,
        ${t(v.foregroundColorInactive)}
      );

    /* Fallback so the dot uses a disabled-friendly color in forced-colors mode */
    background-color: GrayText;
  }

  :host([disabled]) .radiobutton__text {
    color: var(
      --ds-radiobutton-foreground-color-inactive,
      ${t(v.foregroundColorInactive)}
    );
  }
`;var _=Object.defineProperty,m=Object.getOwnPropertyDescriptor,$=Object.getPrototypeOf,y=Reflect.get,k=(t,e,o,r)=>{for(var i,a=r>1?void 0:r?m(e,o):e,n=t.length-1;n>=0;n--)(i=t[n])&&(a=(r?i(e,o,a):i(a))||a);return r&&a&&_(e,o,a),a};const C="reimagine-radiobutton";let E=class extends d{constructor(){super(...arguments),this.id="",this.text="",this.value="",this.group="",this.checked=!1,this.disabled=!1,this._tagSlotEmpty=!0,this.disableInteraction=!1,this._evListener=null}connectedCallback(){super.connectedCallback(),this._evListener=this._handleRadioButtonChanged.bind(this),document.addEventListener("radiobutton-changed",this._evListener)}disconnectedCallback(){this._evListener&&document.removeEventListener("radiobutton-changed",this._evListener),this._evListener=null,super.disconnectedCallback()}_handleRadiobuttonChange(t){const e=t.target;e.tabIndex=e.checked?0:-1,this.checked=e.checked,e.checked&&e.focus(),this.dispatchEvent(new CustomEvent("radiobutton-changed",{detail:{group:this.group,id:this.id,value:this.value,checked:this.checked},bubbles:!0,composed:!0}))}_handleRadioButtonChanged(t){const{group:e,id:o,checked:r}=t.detail;this.group===e&&this.id!==o&&r&&(this.checked=!1,this._inputEl.tabIndex=-1,this._inputEl.checked=!1)}_handleTagSlotChange(){var t;if(this._tagSlotEmpty=0===(null==(t=this._tagSlotEls)?void 0:t.length),!this._tagSlotEmpty){const t={size:g.small},e=["href","clickable"];this._tagSlotEls.forEach(o=>{if(l(o,"reimagine-tag")){const r=o;c(r,t),h(r,e)}})}}firstUpdated(){super.firstUpdated(),this.checked&&!this.disableInteraction&&this._inputEl.setAttribute("checked","")}updated(t){var e;super.updated(t),t.has("checked")&&!this.disableInteraction&&(null==(e=this._inputEl)?void 0:e.checked)!==this.checked&&(this._inputEl.checked=this.checked,this._inputEl.checked&&this._inputEl.focus())}_generateTemplate(){return n`
      <div class="radiobutton__wrapper" part="radiobutton__wrapper">
        <span class="radiobutton__control" part="radiobutton__control">
          <label class="radiobutton__label" for="${this.id}">
            ${this.disableInteraction?n`<div class="radiobutton__input" role="presentation" aria-hidden="true"></div>`:n`
                  <input
                    type="radio"
                    class="radiobutton__input"
                    id="${this.id}"
                    name="${this.group}"
                    value="${this.value}"
                    ?checked="${this.checked}"
                    ?disabled="${this.disabled}"
                    @change="${this._handleRadiobuttonChange}"
                  />
                `}
            <span class="radiobutton__text">${this.text}</span>
          </label>
        </span>
        <span
          class="radiobutton__tag"
          part="radiobutton__tag"
          style=${this._tagSlotEmpty?"display: none;":""}
        >
          <slot name="radiobutton__tag" @slotchange="${this._handleTagSlotChange}"></slot>
        </span>
      </div>
    `}render(){return n`
      ${this.firstSlotTemplate()} ${this._generateTemplate()} ${this.lastSlotTemplate()}
    `}};var S,x,w;E.styles=[...(S=E,x=E,w="styles",y($(S),w,x)||[]),f],k([o({attribute:"id",reflect:!0})],E.prototype,"id",2),k([o({attribute:"text",reflect:!0})],E.prototype,"text",2),k([o({attribute:"value",reflect:!0})],E.prototype,"value",2),k([o({attribute:"group",reflect:!0})],E.prototype,"group",2),k([o({attribute:"checked",reflect:!0,type:Boolean})],E.prototype,"checked",2),k([o({attribute:"disabled",reflect:!0,type:Boolean})],E.prototype,"disabled",2),k([o({attribute:"size",reflect:!0})],E.prototype,"size",2),k([r({slot:"radiobutton__tag",flatten:!0})],E.prototype,"_tagSlotEls",2),k([i()],E.prototype,"_tagSlotEmpty",2),k([a('input[type="radio"]',!0)],E.prototype,"_inputEl",2),k([o({attribute:"disable-interaction",type:Boolean})],E.prototype,"disableInteraction",2),E=k([p(C)],E);export{E as RadioButton,C as name};
