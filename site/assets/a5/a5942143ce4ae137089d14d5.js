import{r as e,i,c as t,g as r,f as l,b as s,o}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{R as a}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{q as n,i as d,d as p}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{V as m}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import"/__mirror/assets/8f3f82a93bb54383cc9bbcb4";import"/__mirror/assets/1db4ee73d7e46e9ea9afc127";import"/__mirror/assets/08c2f7191e700d0b495894c6";import"/__mirror/assets/674e87e1db3168cb538c091d";import"/__mirror/assets/c180aa30a3b15984764facc1";import"/__mirror/assets/c55634b5c47498bb74d55729";import"/__mirror/assets/ac1415d701004f2dd9f24260";const c="inline-flex",b="wrap",h="var(--ds-app-space-micro-m, 1rem)",g=i`
  :host {
    display: var(--ds-link-bar-display, ${e("block")});

    --ds-link-bar-item-box-shadow: var(--ds-elevation-level-2);
  }

  :host([configuration='tab']) {
    --ds-scrollslider-item-gap: 0;
    --ds-link-bar-item-margin-block-start: 0.25rem;
    --ds-link-bar-item-margin-block-end: 0.75rem;
  }

  :host([configuration='tab']) ::slotted(reimagine-scrollslider-item) {
    --ds-link-bar-item-divider-display: block;
  }

  :host([configuration='tab']) ::slotted(reimagine-scrollslider-item:first-of-type) {
    --ds-link-bar-item-border-start-start-radius: var(--ds-app-radii-m, 0.5rem);
    --ds-link-bar-item-border-end-start-radius: var(--ds-app-radii-m, 0.5rem);
    --ds-link-bar-item-margin-inline-start: 2px;
    --ds-hcm-border-inline-start-width: 2px;
  }

  :host([configuration='tab']) ::slotted(reimagine-scrollslider-item:last-of-type) {
    --ds-link-bar-item-border-start-end-radius: var(--ds-app-radii-m, 0.5rem);
    --ds-link-bar-item-border-end-end-radius: var(--ds-app-radii-m, 0.5rem);
    --ds-link-bar-item-margin-inline-end: 2px;
    --ds-link-bar-item-divider-display: none;
    --ds-hcm-border-inline-end-width: 2px;
  }

  :host([configuration='tab']) ::slotted(reimagine-scrollslider-item:only-child) {
    --ds-link-bar-item-divider-display: none;
  }

  :host([configuration='selector']) {
    --ds-scrollslider-base-padding-block: 0.5rem;
    --ds-scrollslider-base-padding-inline: 0;
    --ds-scrollslider-item-gap: 0;
    --ds-link-bar-color: unset;
  }

  :host([configuration='pill']) {
    --ds-scrollslider-item-gap: 0.5rem;
  }

  :host([configuration='radio']) .link-bar-base {
    display: var(--ds-link-bar-base-display, ${e(c)});
    flex-wrap: var(--ds-link-bar-base-flex-wrap, ${e(b)});
    gap: var(--ds-link-bar-base-gap, ${e(h)});
  }

  :host([configuration='selector']) ::slotted(reimagine-scrollslider-item) {
    --ds-list-item-clip-path-inset-top: -10px;
    --ds-list-item-clip-path-inset-right: 0px;
    --ds-list-item-clip-path-inset-bottom: -10px;
    --ds-list-item-clip-path-inset-left: 0px;
  }

  :host([configuration='selector']) ::slotted(reimagine-scrollslider-item:first-of-type) {
    --ds-link-bar-item-wrapper-border-start-start-radius: var(--ds-app-radii-circle);
    --ds-link-bar-item-wrapper-border-end-start-radius: var(--ds-app-radii-circle);
    --ds-link-bar-item-margin-inline-start: 2px;
    --ds-list-item-clip-path-inset-left: -4px;
  }

  :host([configuration='selector']) ::slotted(reimagine-scrollslider-item:last-of-type) {
    --ds-link-bar-item-wrapper-border-start-end-radius: var(--ds-app-radii-circle);
    --ds-link-bar-item-wrapper-border-end-end-radius: var(--ds-app-radii-circle);
    --ds-link-bar-item-margin-inline-end: 2px;
    --ds-list-item-clip-path-inset-right: -4px;
  }

  .show-dropdown reimagine-scrollslider,
  .show-scrollslider reimagine-dropdown {
    display: none;
  }
`;var u=Object.defineProperty,f=Object.getOwnPropertyDescriptor,w=Object.getPrototypeOf,k=Reflect.get,v=(e,i,t,r)=>{for(var l,s=r>1?void 0:r?f(i,t):i,o=e.length-1;o>=0;o--)(l=e[o])&&(s=(r?l(i,t,s):l(s))||s);return r&&s&&u(i,t,s),s};const _="reimagine-link-bar";let y=class extends a{constructor(){super(...arguments),this.disableScrollslider=!1,this.enableMobileDropdown=!1,this.dropdownAriaLabel="Dropdown Trigger",this.fullBleed=!1,this._viewportObserver=new m(this,{callback:()=>this._handleViewportChange()}),this._toggleMobileDropdown=!1,this._toggleScrollSlider=!1}_handleViewportChange(){this._toggleMobileDropdown=this.enableMobileDropdown&&this._viewportObserver.isMobile(),this._toggleScrollSlider=!(this.disableScrollslider||this.enableMobileDropdown&&this._viewportObserver.isMobile())}_handleSlotChange(e){this._configureLinkBarItems(),"pill"===this.configuration&&e.target.assignedElements({flatten:!0}).forEach(e=>{var i;const t=n(e,"reimagine-link-bar-item"),r=n(t,"reimagine-pill");if(t&&r){const e=document.createElement("reimagine-menu-list-item");null!=t&&t.hasAttribute("href")&&e.setAttribute("href",t.getAttribute("href")||""),null!=t&&t.hasAttribute("active")&&e.setAttribute("active","");const l=document.createElement("span");l.slot="list-item__title",l.textContent=r.textContent||"",e.append(l),null==(i=this._mobileMenuList)||i.append(e)}})}_configureLinkBarItems(){this._slottedItems.forEach(e=>{(e.nodeType===Node.ELEMENT_NODE&&e instanceof HTMLElement&&d(e,"reimagine-scrollslider-item")||e.nodeType===Node.ELEMENT_NODE&&e instanceof HTMLElement&&d(e,"reimagine-link-bar-item"))&&this._configureLinkBarItem(e)})}_scrollToActiveItem(){this._activeLinkBarItem&&window.requestAnimationFrame(()=>{const e="ltr"===this.dir?this._activeLinkBarItem.offsetLeft:-1*this._activeLinkBarItem.offsetLeft;this._scrollsliderBaseElement.scroll({left:e,behavior:"instant"})})}_configureLinkBarItem(e){const i=n(e,"reimagine-link-bar-item")||e;i&&d(i,"reimagine-link-bar-item")&&(this.configuration&&i.setAttribute("configuration",this.configuration),this.theme&&i.setAttribute("theme",this.theme),"radio"===this.configuration&&this.disableScrollslider&&i.setAttribute("role","listitem"),!this._activeLinkBarItem&&i.hasAttribute("active")&&(this._activeLinkBarItem=e))}connectedCallback(){super.connectedCallback(),"pill"===this.configuration&&(this.enableMobileDropdown=!0)}firstUpdated(){super.firstUpdated(),this.disableScrollslider||customElements.whenDefined("reimagine-scrollslider").then(()=>{var e;const i=n(this.shadowRoot,"reimagine-scrollslider");this._scrollsliderBaseElement=null==(e=null==i?void 0:i.shadowRoot)?void 0:e.querySelector(".scrollslider__base"),this._scrollsliderBaseElement&&this._scrollToActiveItem()}),this.enableMobileDropdown&&(this._mobileDropdown=n(this.shadowRoot,"reimagine-dropdown"),this._mobileMenuList=n(this._mobileDropdown,"reimagine-menu-list"))}updated(e){super.updated(e),e.has("configuration")&&this._configureLinkBarItems()}_renderMobileDropdownTemplate(){var e;const i=n(n(this,"reimagine-link-bar-item","[active]"),"reimagine-pill"),t=(null==(e=null==i?void 0:i.textContent)?void 0:e.trim())||"Placeholder text";return s`
      <reimagine-dropdown
        id="link-bar-mobile-dropdown"
        class="link-bar-mobile-dropdown"
        part="link-bar-mobile-dropdown"
        aria-label=${this.dropdownAriaLabel}
      >
        <reimagine-dropdown-trigger slot="dropdown__trigger">
          <span slot="dropdown-trigger__input-label">${this.dropdownLabelText}</span>
          ${t}
        </reimagine-dropdown-trigger>
        <reimagine-menu-list configuration="link" size="small"> </reimagine-menu-list>
      </reimagine-dropdown>
    `}_renderScrollsliderTemplate(){return s`
      <reimagine-scrollslider
        control-size="small"
        scrollslider-role="list"
        ?full-bleed=${this.fullBleed}
      >
        <slot @slotchange="${this._handleSlotChange}"></slot>
      </reimagine-scrollslider>
    `}render(){return s`
      <div
        part="link-bar-base"
        class="link-bar-base ${this._toggleMobileDropdown?"show-dropdown":""} ${this._toggleScrollSlider?"show-scrollslider":""}"
        role=${o(this.disableScrollslider?"list":void 0)}
      >
        ${this.enableMobileDropdown?this._renderMobileDropdownTemplate():""}
        ${this.disableScrollslider?s`<slot @slotchange="${this._handleSlotChange}"></slot>`:s`${this._renderScrollsliderTemplate()}`}
      </div>
    `}};var x,L,S;y.styles=[...(x=y,L=y,S="styles",k(w(x),S,L)||[]),g],v([t({reflect:!0})],y.prototype,"configuration",2),v([t({attribute:"disable-scrollslider",type:Boolean,reflect:!0})],y.prototype,"disableScrollslider",2),v([t({attribute:"enable-mobile-dropdown",type:Boolean,reflect:!0})],y.prototype,"enableMobileDropdown",2),v([t({attribute:"dropdown-label-text",type:String})],y.prototype,"dropdownLabelText",2),v([t({attribute:"dropdown-aria-label",type:String})],y.prototype,"dropdownAriaLabel",2),v([t({attribute:"full-bleed",type:Boolean,reflect:!0})],y.prototype,"fullBleed",2),v([r({flatten:!0})],y.prototype,"_slottedItems",2),v([l()],y.prototype,"_toggleMobileDropdown",2),v([l()],y.prototype,"_toggleScrollSlider",2),y=v([p(_)],y);export{y as LinkBar,_ as name};
