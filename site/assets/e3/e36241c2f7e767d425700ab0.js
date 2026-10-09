import{r as t,i as e,c as o,f as i,e as r,k as n,g as s,b as d,o as a}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{R as l,i as p}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{c as h,a as c,t as g,u,e as _,f,d as m}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{a as b}from"/__mirror/assets/f66db7b1caa4a26dc952f373";import{a as w,n as y}from"/__mirror/assets/ac1415d701004f2dd9f24260";import{a as v}from"/__mirror/assets/34233ee5ac8acdb3aa831b25";import{u as x}from"/__mirror/assets/6ad137053d5da8fc91d912f1";const S="relative",T="0.2",k="flex",$="column",E="var(--ds-app-space-micro-xs)",I=e`
  :host {
    display: var(--ds-title-dropdown-display, ${t("block")});
    position: var(--ds-title-dropdown-position, ${t(S)});

    --ds-indicator-background-image: linear-gradient(89.97deg, var(--ds-app-color-base-special-bg-opt2-stop2, #0078d4) 0.03%, var(--ds-app-color-base-special-bg-opt2-stop1, #6dd1c1) 99.97%);
    --ds-indicator-horizontal-width: 100%;
  }

  reimagine-flyout {
    width: var(--ds-flyout-width, 100%);
    max-width: 100%;

    --ds-flyout-border-width: 0;
    --ds-flyout-bg-color: transparent;
  }

  :host([open]) {
    --ds-dropdown-trigger-icon-transform: rotate(-180deg);
  }

  :host([disabled]) reimagine-indicator {
    opacity: var(
      --ds-title-dropdown-indicator-opacity,
      ${t(T)}
    );
  }

  .title-dropdown__trigger {
    display: var(--ds-title-dropdown-trigger-display, ${t(k)});
    flex-direction: var(
      --ds-title-dropdown-trigger-flex-direction,
      ${t($)}
    );
    gap: var(--ds-title-dropdown-trigger-gap, ${t(E)});
  }

  ::slotted([slot='title-dropdown__trigger']) {
    --ds-button-font-size: var(--ds-app-type-heading-xl-font-size);
    --ds-button-font-weight: var(--ds-app-type-heading-xl-font-weight);
    --ds-button-line-height: var(--ds-app-type-heading-xl-line-height);
    --ds-button-letter-spacing: var(--ds-app-type-heading-xl-letter-spacing);
    --ds-button-medium-padding-inline-start: 0;
    --ds-button-medium-padding-inline-end: 3rem;
    --ds-button-medium-padding-block-start: 0;
    --ds-button-medium-padding-block-end: 0;
    --ds-button-medium-gap: 0;
    --ds-button-icon-color: var(--ds-app-color-base-default-fg-accent);
    --ds-button-ghost-hover-background-color: transparent;
    --ds-button-justify-content: flex-start;
    --ds-button-width: 100%;
    --ds-button-word-break: break-all;
    --ds-icon-display: flex;
    --ds-icon-position: absolute;
    --ds-icon-inset-inline-end: 0;
    --ds-icon-bottom: 0;
    --ds-button-text-overflow: ellipsis;
    --ds-button-white-space: nowrap;
    --ds-button-overflow: clip;
    --ds-button-overflow-clip-margin: 6px;
    --ds-button-display: block;
    --ds-button-text-align: start;
    --ds-button-outline-offset: 4px;
  }

  :host([theme='dark']) {
    --ds-button-ghost-color: var(--ds-app-color-interactive-primary-bg-default);
    --ds-button-ghost-hover-color: var(--ds-app-color-interactive-primary-bg-hover);
    --ds-button-ghost-pressed-color: var(--ds-app-color-interactive-primary-bg-active);
  }
`;var A=Object.defineProperty,D=Object.getOwnPropertyDescriptor,O=(t,e,o,i)=>{for(var r,n=i>1?void 0:i?D(e,o):e,s=t.length-1;s>=0;s--)(r=t[s])&&(n=(i?r(e,o,n):r(n))||n);return i&&n&&A(e,o,n),n};const C="reimagine-title-dropdown";let N=0,H=class extends l{constructor(){super(...arguments),this._componentId=++N,this._anchorIdFallback=`anchor${this._componentId}`,this.noReflow=!1,this.offset=24,this.open=!1,this.placement=b.bottomStart,this.disabled=!1,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._dropdownItems=[],this._dropdownEvents=[],this._initialPlaceHolderText="Placeholder Text",this._placeholderTextNode=null}_updatePlaceholderTextForSingleSelect(t){var e;const o=this._dropdownItems.find(t=>t.hasAttribute("active"))||t,i=null==(e=null==o?void 0:o.textContent)?void 0:e.trim();return this.hide(),i}_handleDropdownItemClick(t){var e;if(!(t.target instanceof HTMLElement))return;const o=t.target;if(!this._defaultSlot.find(t=>t.contains(o))||(null==(e=h(o,"reimagine-menu-list-item"))?void 0:e.getAttribute("configuration"))===w.heading)return;const i=this._updatePlaceholderTextForSingleSelect(o);this._placeholderTextNode&&(this._placeholderTextNode.textContent=i||this._initialPlaceHolderText)}_handleSlotChange(){var t;this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length,this._menuList=this._defaultSlot[0],this._dropdownTrigger=this._trigger[0],this._dropdownItems=[...c(this._defaultSlot[0],y)],this._dropdownTrigger.setAttribute("id",this.anchorId),this._dropdownTrigger.setAttribute("configuration",x.buttonSelect),this._dropdownTrigger.buttonAppearance=p.buttonGhost,this._dropdownTrigger.iconSize=v.x3large,this.disabled&&this._dropdownTrigger.setAttribute("disabled","true"),this._placeholderTextNode=Array.from(this._dropdownTrigger.childNodes).find(t=>{var e;return t.nodeType===Node.TEXT_NODE&&(null==(e=t.textContent)?void 0:e.trim().length)})??null;const e=null==(t=this._placeholderTextNode)?void 0:t.textContent;this._dropdownTrigger.setAttribute("trigger-label",e||this._initialPlaceHolderText),this._dropdownItems.forEach(t=>{t.getAttribute("configuration")!==w.heading&&(t.setAttribute("configuration",w.option),t.setAttribute("role","option"))})}_handleOnHide(){this.hide(),this._trigger[0].removeAttribute("active")}_handleOnShow(){var t;this.show(),null==(t=this._menuList)||t.updateScrollbarVisible(),this._trigger[0].setAttribute("active","")}_handleCloseFlyout(t,e){t.preventDefault(),this._flyout.removeAttribute("open"),null==e||e.focus()}_handleTriggerKeyDown(t){var e;if(this._dropdownItems.length>0&&t.key===g.ARROW_DOWN){t.preventDefault();const o=this._menuList._focusableItems;if(o&&o.length>0)return void(null==(e=this._menuList)||e._focusFirstItem());this._dropdownItems[0].focus()}}_handleKeyDown(t){const e=t.target,o=[...this._dropdownItems,...u(this._menuList)],i=this._trigger[0],r=o[0],n=o[o.length-1];switch(t.key){case g.TAB:(t.shiftKey&&e===r||!t.shiftKey&&e===n)&&this._handleCloseFlyout(t,i);break;case g.ARROW_DOWN:t.preventDefault(),this._handleArrowDownKey(e);break;case g.ARROW_UP:{t.preventDefault();const o=e.previousElementSibling;if(e===r)return e.focus(),void t.preventDefault();o&&o instanceof HTMLElement&&o.focus();break}case g.HOME:{t.preventDefault();const e=o[0];e&&e instanceof HTMLElement&&e.focus();break}case g.END:{t.preventDefault();const e=o[o.length-1];e&&e instanceof HTMLElement&&e.focus();break}}}_handleArrowDownKey(t){const e=t.nextElementSibling;if(e){if(e.getAttribute("configuration")===w.heading)return void this._handleArrowDownKey(e);e.focus()}}_renderOptionalSlot(t="title-dropdown__first",e=this._firstSlotEmpty){return d`
      <div part=${t} class=${t} style="${e?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),this._dropdownEvents.push({el:this,type:"click",handler:this._handleDropdownItemClick.bind(this)}),_(this._dropdownEvents)}disconnectedCallback(){f(this._dropdownEvents),super.disconnectedCallback()}willUpdate(){this.anchorId=this.anchorId&&this.anchorId.length>0?this.anchorId:this._anchorIdFallback}hide(){this.open=!1}show(){this.open=!0}toggle(){this.open=!this.open}render(){return d`
      <div
        part="title-dropdown__trigger"
        class="title-dropdown__trigger"
        aria-controls="title-dropdown__flyout"
        id="${a(this.anchorId)}"
        @keydown="${this._handleTriggerKeyDown}"
      >
        <slot name="title-dropdown__trigger" @slotchange="${this._handleSlotChange}"></slot>
        <reimagine-indicator configuration="rounded" orientation="horizontal"></reimagine-indicator>
      </div>

      <reimagine-flyout
        id="title-dropdown__flyout"
        anchor="${a(this.anchorId)}"
        part="title-dropdown__flyout"
        class="title-dropdown__flyout"
        placement="${this.placement}"
        ?reflow="${!this.noReflow}"
        offset="${this.offset}"
        ?open="${this.open}"
        @keydown="${this._handleKeyDown}"
        @onHide="${this._handleOnHide}"
        @onShow="${this._handleOnShow}"
      >
        ${this._renderOptionalSlot("title-dropdown__first",this._firstSlotEmpty)}
        <div
          aria-labelledby="${a(this.anchorId)}"
          part="title-dropdown__base"
          class="title-dropdown__base"
        >
          <slot @slotchange="${this._handleSlotChange}"></slot>
        </div>
        ${this._renderOptionalSlot("title-dropdown__last",this._lastSlotEmpty)}
      </reimagine-flyout>
    `}};H.shadowRootOptions={...l.shadowRootOptions,delegatesFocus:!0},H.styles=[I],O([o({attribute:"anchor-id"})],H.prototype,"anchorId",2),O([o({type:Boolean,attribute:"no-reflow"})],H.prototype,"noReflow",2),O([o({type:Number})],H.prototype,"offset",2),O([o({type:Boolean,reflect:!0})],H.prototype,"open",2),O([o()],H.prototype,"placement",2),O([o({reflect:!0})],H.prototype,"theme",2),O([o({type:Boolean,reflect:!0})],H.prototype,"disabled",2),O([i()],H.prototype,"_firstSlotEmpty",2),O([i()],H.prototype,"_lastSlotEmpty",2),O([i()],H.prototype,"_menuList",2),O([i()],H.prototype,"_dropdownTrigger",2),O([i()],H.prototype,"_icon",2),O([i()],H.prototype,"_dropdownItems",2),O([i()],H.prototype,"_dropdownEvents",2),O([i()],H.prototype,"_initialPlaceHolderText",2),O([i()],H.prototype,"_placeholderTextNode",2),O([r({slot:"title-dropdown__first"})],H.prototype,"_firstSlot",2),O([r({slot:"title-dropdown__last"})],H.prototype,"_lastSlot",2),O([n("reimagine-flyout")],H.prototype,"_flyout",2),O([s()],H.prototype,"_defaultSlot",2),O([s({slot:"title-dropdown__trigger"})],H.prototype,"_trigger",2),H=O([m(C)],H);export{H as TitleDropdown,C as name};
