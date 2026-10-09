import{r as t,i as e,b as o,c as r,g as n,f as s,k as i}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{R as a}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{a as l,e as d,q as c,f as p,d as u}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{s as h}from"/__mirror/assets/579a4c6140e643b41d22eee8";import{v as m,b}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{V as g}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{I as w,a as _}from"/__mirror/assets/597f3dbe3ef56339bfbefa4a";import"/__mirror/assets/1376567b2b82d941066974ae";import{b as v}from"/__mirror/assets/a6c6f415f3fcc13d76b9625a";import"/__mirror/assets/674e87e1db3168cb538c091d";import"/__mirror/assets/c180aa30a3b15984764facc1";import"/__mirror/assets/c55634b5c47498bb74d55729";const y="var(--ds-app-space-micro-xs, 0.5rem)",C=e`
  :host {
    --ds-button-width: var(
      --ds-dropdown-bar-button-width,
      ${t("100%")}
    );
    --ds-flyout-width: max-content;
    --ds-flyout-max-width: calc(100vw - 1rem);
  }

  :host reimagine-layout::part(layout__base) {
    --ds-layout-column-gap: var(--ds-dropdown-bar-column-gap, ${t(y)});
    --ds-layout-row-gap: var(--ds-dropdown-bar-row-gap, ${t(y)});
    --ds-grid-column-width: var(
      --ds-dropdown-bar-column-width,
      calc(50% - var(--ds-grid-column-gap))
    );
    --ds-dropdown-trigger-display: flex;
    --ds-layout-column-amount: var(--ds-dropdown-bar-column-count, 1);
    --ds-layout-column-width: var(--ds-dropdown-bar-column-width, fit-content);
    --ds-layout-column-flex-basis: var(
      --ds-dropdown-bar-column-flex-basis,
      var(--ds-grid-column-width)
    );
  }

  .sr-only {
    ${h};
  }

  .dropdown-bar {
    --ds-dropdown-height: 100%;
    --ds-dropdown-trigger-button-height: 100%;
    --ds-button-height: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--ds-app-space-micro-m, 1rem);

    .dropdown-bar-top {
      display: flex;
      gap: var(--ds-app-space-micro-l, 1.5rem);
      align-items: center;
    }

    .dropdown-bar-bottom {
      display: flex;
      justify-content: space-between;
    }
  }
`,f=e`
  @media (min-width: ${t(m.md)}) {
    :host {
      --ds-button-width: auto;
      --ds-layout-column-flex-basis-override: var(--ds-dropdown-bar-flex-basis, auto);
      --ds-layout-column-width: var(--ds-dropdown-bar-column-width, auto);
      --ds-app-type-body-m-font-weight: var(--ds-app-type-heading-3xl-font-weight, 600);
    }
    :host([configuration='collapsed']) .collapsed-layout-desktop {
      display: block;
      visibility: visible;
    }
    :host([configuration='collapsed']) .collapsed-layout-mobile {
      display: none;
      visibility: hidden;
    }
  }

  @media (max-width: ${t(b(m.md))}) {
    :host reimagine-layout::part(layout__base) {
      justify-content: space-between;
    }
    :host([configuration='collapsed']) reimagine-layout::part(layout__base) {
      --ds-dropdown-bar-column-width: 100%;
    }
    .dropdown-bar-top {
      display: block !important;
    }
    :host([configuration='collapsed']) .collapsed-layout-desktop {
      display: none;
      visibility: hidden;
    }
    :host([configuration='collapsed']) .collapsed-layout-mobile {
      display: block;
      visibility: visible;
    }
  }
`,x="collapsed";var A=Object.defineProperty,k=Object.getOwnPropertyDescriptor,S=(t,e,o,r)=>{for(var n,s=r>1?void 0:r?k(e,o):e,i=t.length-1;i>=0;i--)(n=t[i])&&(s=(r?n(e,o,s):n(s))||s);return r&&s&&A(e,o,s),s};const E="reimagine-dropdown-bar";let O=class extends(w(a)){constructor(){super(),this._clearAllSlotEmpty=!0,this._counterSlotEmpty=!0,this._dropdownBarEvents=[],this._collapseLayoutCompleted=!1,this._clearAnnounceCounter=0,this._countAtOpen=0,this._boundHandleCheckboxChange=this._handleCheckboxChange.bind(this),this._viewportResizeObserver=new g(this,{})}firstUpdated(){super.firstUpdated(),this._dropdowns=[...l(this,"reimagine-dropdown")],this.updateReimagineDropdownTriggers(),this._setupCheckboxListeners(),this._clearAllSlot.forEach(t=>{this._dropdownBarEvents.push({el:t,type:"click",handler:this._clearCheckboxes.bind(this)},{el:t,type:"keydown",handler:this._clearCheckboxes.bind(this)})}),d(this._dropdownBarEvents),requestAnimationFrame(()=>this._setClearButtonDisabled(0===this._getTotalCheckedCount())),this._observeDropdownState()}updateReimagineDropdownTriggers(){this._dropdowns.forEach(t=>{const e=c(t,"reimagine-dropdown-trigger");e&&e.setAttribute("configuration","button-select")})}updateItemCount(t){if(0===this._counterSlot.length)return;const e=this._counterSlot[0];if(!e)return;const o=e.getAttribute("data-count-template");if(o)try{const r=new _(o,this.lang||"en-us");return void(e.textContent=String(r.format({count:t})))}catch{}e.textContent&&(e.textContent=e.textContent.replaceAll(/\b\d+\b/g,t.toString()))}disconnectedCallback(){var t;p(this._dropdownBarEvents),null==(t=this._dropdownOpenObserver)||t.disconnect(),super.disconnectedCallback()}connectedCallback(){super.connectedCallback(),this.addEventListener("ready",()=>{this.dispatchEvent(new CustomEvent("reimagine-dropdown-bar-ready",{bubbles:!0,composed:!0}))})}_setupCheckboxListeners(){this._dropdowns.forEach(t=>{l(t,"reimagine-menu-list-item").forEach(t=>{this._dropdownBarEvents.push({el:t,type:"click",handler:this._boundHandleCheckboxChange,options:{once:!1,capture:!0}})})})}_handleCheckboxChange(){requestAnimationFrame(()=>{requestAnimationFrame(()=>{if(!this.isConnected)return;const t=this._getTotalCheckedCount();this.updateItemCount(t),this._setClearButtonDisabled(0===t)})})}_getTotalCheckedCount(){let t=0;return this._dropdowns.forEach(e=>{l(e,"reimagine-menu-list-item").forEach(e=>{this._isItemSelected(e)&&t++})}),t}_getSelectedDropdownCount(){let t=0;return this._dropdowns.forEach(e=>{[...l(e,"reimagine-menu-list-item")].some(t=>this._isItemSelected(t))&&t++}),t}_isItemSelected(t){var e;if(t.hasAttribute("checked")||t.hasAttribute("active")||"true"===t.getAttribute("aria-selected"))return!0;const o=null==(e=t.shadowRoot)?void 0:e.querySelector('input[type="checkbox"]');return!(null==o||!o.checked)}_setClearButtonDisabled(t){var e;null==(e=this._clearAllSlot)||e.forEach(e=>e.toggleAttribute("disabled",t))}_focusLastDropdownTrigger(){var t;const e=null==(t=this._dropdowns)?void 0:t[this._dropdowns.length-1],o=c(e,"reimagine-dropdown-trigger");null==o||o.focus()}_observeDropdownState(){this._dropdownOpenObserver=new MutationObserver(t=>{t.forEach(t=>{t.target.hasAttribute("open")?this._countAtOpen=this._getTotalCheckedCount():this._getTotalCheckedCount()!==this._countAtOpen&&this._getSelectedDropdownCount()>1&&this._announceCounterText()})}),this._dropdowns.forEach(t=>{var e;return null==(e=this._dropdownOpenObserver)?void 0:e.observe(t,{attributes:!0,attributeFilter:["open"]})})}_announceCounterText(){var t,e,o;if(!this._srCountAnnouncer)return;const r=null==(o=null==(e=null==(t=this._counterSlot)?void 0:t[0])?void 0:e.textContent)?void 0:o.trim();r&&(this._srCountAnnouncer.textContent="",window.setTimeout(()=>{this._srCountAnnouncer&&(this._srCountAnnouncer.textContent=r)},350))}_clearCheckboxes(t){if("keydown"===t.type&&!["Enter"," "].includes(t.key)||(t.preventDefault(),0===this._getTotalCheckedCount()))return;this._dropdowns.forEach(t=>{t.clearCheckboxes(!0)}),this.updateItemCount(0),this._setClearButtonDisabled(!0),this._countAtOpen=0,this._focusLastDropdownTrigger();const e=(this.msg("clear-status")||"All selections cleared")+"​".repeat(++this._clearAnnounceCounter);requestAnimationFrame(()=>this.announceToScreenReader(e))}handleSlotChange(){this._clearAllSlotEmpty=0===this._clearAllSlot.length,this._counterSlotEmpty=0===this._counterSlot.length}_collapsedLayoutSlotChange(t){const e=t.target.assignedElements({flatten:!0});if(0===e.length)return;const o=document.createElement("reimagine-accordion");if(o.setAttribute("configuration",v.dropdownMenuList),e.forEach(t=>{const e=c(t,"reimagine-dropdown");if(!e)return;const r=null==e?void 0:e.cloneNode(!0),n=document.createElement("reimagine-accordion-item");n.append(r),o.append(n)}),0!==o.children.length&&!this._collapseLayoutCompleted){const t=document.createElement("reimagine-layout-column"),e=document.createElement("reimagine-dropdown"),r=document.createElement("reimagine-dropdown-trigger"),n=document.createElement("reimagine-menu-list");r.setAttribute("configuration","button-select"),r.setAttribute("slot","dropdown__trigger"),r.textContent=this.collapsedDropdownLabel||"Site navigation",n.append(o),e.append(r),e.append(n),t.append(e),t.setAttribute("slot","collapse-dropdown"),this.append(t),this._collapseLayoutCompleted=!0}}_isMobileViewPort(){var t;return(null==(t=this._viewportResizeObserver)?void 0:t.isMobile())||!1}announceToScreenReader(t){this._srAnnouncer&&(this._srAnnouncer.textContent=t,setTimeout(()=>{this._srAnnouncer&&(this._srAnnouncer.textContent="")},100))}renderOptionalSlot(t,e){return o`
      <div part=${t} class=${t} style="${e?"display: none;":""}">
        <slot name=${t} @slotchange="${this.handleSlotChange}"></slot>
      </div>
    `}_renderClearButton(t){var e,o;const r=(null==(e=this._viewportResizeObserver)?void 0:e.isDesktop())&&t,n=(null==(o=this._viewportResizeObserver)?void 0:o.isMobile())&&!t;return r||n?this.renderOptionalSlot("clear-all",this._clearAllSlotEmpty):null}renderCollapsedLayout(){return o`
      <div aria-live="assertive" aria-atomic="true" class="sr-only sr-announcer"></div>
      <div aria-live="polite" aria-atomic="true" class="sr-only sr-count-announcer"></div>
      <div class="dropdown-bar" part="dropdown-bar">
        <div class="dropdown-bar-top" part="dropdown-bar-top">
          <reimagine-layout
            class="collapsed-layout-desktop"
            part="collapsed-layout-desktop"
            aria-hidden="${this._isMobileViewPort()}"
          >
            <slot @slotchange="${this._collapsedLayoutSlotChange}"></slot>
          </reimagine-layout>
          <reimagine-layout
            class="collapsed-layout-mobile"
            part="collapsed-layout-mobile"
            aria-hidden="${!this._isMobileViewPort()}"
          >
            <slot name="collapse-dropdown"></slot>
          </reimagine-layout>
        </div>
      </div>
    `}renderDefaultLayout(){return o`
      <div aria-live="assertive" aria-atomic="true" class="sr-only sr-announcer"></div>
      <div aria-live="polite" aria-atomic="true" class="sr-only sr-count-announcer"></div>
      <div class="dropdown-bar" part="dropdown-bar">
        <div class="dropdown-bar-top" part="dropdown-bar-top">
          <reimagine-layout>
            <slot></slot>
          </reimagine-layout>
          ${this._renderClearButton(!0)}
        </div>
        <div class="dropdown-bar-bottom" part="dropdown-bar-bottom">
          ${this.renderOptionalSlot("counter",this._counterSlotEmpty)}
          ${this._renderClearButton(!1)}
        </div>
      </div>
    `}render(){return this.configuration===x?o`${this.renderCollapsedLayout()}`:o`${this.renderDefaultLayout()}`}};O.styles=[C,f],O.dict={"clear-status":"All selections cleared"},S([r({reflect:!0})],O.prototype,"configuration",2),S([r({type:String,attribute:"collapsed-dropdown-label"})],O.prototype,"collapsedDropdownLabel",2),S([n({slot:"clear-all"})],O.prototype,"_clearAllSlot",2),S([n({slot:"counter"})],O.prototype,"_counterSlot",2),S([s()],O.prototype,"_viewportResizeObserver",2),S([s()],O.prototype,"_clearAllSlotEmpty",2),S([s()],O.prototype,"_counterSlotEmpty",2),S([s()],O.prototype,"_dropdownBarEvents",2),S([s()],O.prototype,"_dropdowns",2),S([s()],O.prototype,"_collapseLayoutCompleted",2),S([i(".sr-announcer")],O.prototype,"_srAnnouncer",2),S([i(".sr-count-announcer")],O.prototype,"_srCountAnnouncer",2),O=S([u(E)],O);export{O as DropdownBar,E as name};
