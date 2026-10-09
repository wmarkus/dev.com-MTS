import{r as t,i as a,a as e,c as s,f as i,k as l,g as o,e as n,b as r,h as b}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{W as p}from"/__mirror/assets/597f3dbe3ef56339bfbefa4a";import{g as h,h as d,c,q as _,d as u}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{l as f}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{s as m}from"/__mirror/assets/579a4c6140e643b41d22eee8";import"/__mirror/assets/5d2e1bf3d87581457a2b76db";const y=a`
  :host {
    color: var(--ds-tab-panel-color, ${t("var(--ds-app-color-base-default-fg-heading, #0e1726)")});
  }

  :host .tab-panel__base {
    display: var(--tab-panel-display, none);
    color: var(--ds-app-color-base-default-fg-body, #17253d);
  }

  :host([active]) .tab-panel__base {
    display: var(--ds-tab-panel-active-display, block);
    position: relative;
    flex-direction: var(--ds-tab-panel-active-flex-direction, initial);
    gap: var(--ds-tab-panel-active-gap, unset);
  }

  /* Prevents double VFI in Firefox */
  :host(:focus),
  .tab-panel__sr-button:focus {
    outline: none !important;
  }

  :host :focus {
    ${f}
  }

  .tab-panel__sr-button {
    --ds-button-background-color: var(--ds-app-color-base-alt1-bg-opt1, #f7f7f7);

    position: absolute;
    z-index: var(--ds-z-index-10, 10);
  }

  .tab-panel__sr-button:not(:active):not(:focus) {
    ${m}
  }
`;var v=Object.defineProperty,g=Object.getOwnPropertyDescriptor,I=(t,a,e,s)=>{for(var i,l=s>1?void 0:s?g(a,e):a,o=t.length-1;o>=0;o--)(i=t[o])&&(l=(s?i(a,e,l):i(l))||l);return s&&l&&v(a,e,l),l};const S="reimagine-tab-panel";let $=0,k=class extends p{constructor(){super(...arguments),this._attrId=++$,this._componentIdFallback=`tab${this._attrId}`,this._tabIdFallback=`${this._componentIdFallback}-tab`,this.active=!1,this.tabId=null,this.tabLabel=null,this.ariaLabelledby=null,this.tab=null,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tabpanel"),this.setAttribute("tabindex","0"),this._initializeFromAttributes()}_initializeFromAttributes(){var t;this.id=this.id.length>0?this.id:this._componentIdFallback,this.ariaLabelledby&&this.ariaLabelledby.length>0?this.tabId=this.ariaLabelledby:this.tabId=this.tabId&&this.tabId.length>0?this.tabId:this._tabIdFallback,this.tab=h(this,`#${this.tabId}`),this.tabLabel=this.tabLabel&&this.tabLabel.length>0?this.tabLabel:null==(t=this.tab)?void 0:t.textContent}willUpdate(){(!this.tab||this.tabId!==this.ariaLabelledby)&&this._initializeFromAttributes()}async updated(t){t.has("active")&&(await this.updateComplete,d(this.base))}_handleClick(t){const a=c(this,"reimagine-tabs");this.tab=h(this,`#${this.tabId}`);const e=null==a?void 0:a.isMobileViewport,s=null==a?void 0:a.isDropdown;if(e&&s){const t=_(null==a?void 0:a.shadowRoot,"reimagine-dropdown-trigger");null==t||t.focus()}else this.tab&&this.tab.focus();t.preventDefault()}_handleSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length}_renderOptionalSlot(t="tab-panel__first",a=this._firstSlotEmpty){return r`
      <div part=${t} class=${t} style="${a?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}render(){const t={show:this.active};return r`
      ${this._renderOptionalSlot("tab-panel__first",this._firstSlotEmpty)}
      <div part="tab-panel__base" class="tab-panel__base ${b(t)}" tabindex="0">
        <slot></slot>
        <reimagine-button
          class="tab-panel__sr-button"
          part="tab-panel__sr-button"
          appearance="button--ghost"
          shape="rounded"
          href="#"
          size="small"
          @click="${this._handleClick}"
        >
          <span slot="button__text"
            >${this.msg("back",{label:this.tabLabel||"tab"})||`Back to ${this.tabLabel||"tab"}`}</span
          >
        </reimagine-button>
      </div>
      ${this._renderOptionalSlot("tab-panel__last",this._lastSlotEmpty)}
    `}};k.shadowRootOptions={...e.shadowRootOptions,delegatesFocus:!0},k.styles=[y],I([s({type:Boolean,reflect:!0})],k.prototype,"active",2),I([s({attribute:"tab-id"})],k.prototype,"tabId",2),I([s({attribute:"tab-label"})],k.prototype,"tabLabel",2),I([s({attribute:"aria-labelledby",reflect:!0})],k.prototype,"ariaLabelledby",2),I([i()],k.prototype,"tab",2),I([l(".tab-panel__base")],k.prototype,"base",2),I([o({flatten:!0})],k.prototype,"slotItems",2),I([n({slot:"tab-panel__first"})],k.prototype,"_firstSlot",2),I([n({slot:"tab-panel__last"})],k.prototype,"_lastSlot",2),I([i()],k.prototype,"_firstSlotEmpty",2),I([i()],k.prototype,"_lastSlotEmpty",2),k=I([u(S)],k);export{k as TabPanel,S as name};
