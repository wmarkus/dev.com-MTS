import{r as t,i as e,b as i,A as s,c as a,f as o,e as n,k as l,g as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{I as d}from"/__mirror/assets/597f3dbe3ef56339bfbefa4a";import{q as h,c as b,z as c,T as p,A as _,t as u,a as m,i as g,s as f,d as v}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{v as w,b as y}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{s as T}from"/__mirror/assets/5662500ccacfc106da428b8f";import{a as S,n as A}from"/__mirror/assets/54716721f6ce76b6127c2436";import{a as I,n as P}from"/__mirror/assets/2731684d53f7044984bbf6c7";import{T as x}from"/__mirror/assets/aa6cee6f34201a882984ee0e";import{Tab as E,name as D}from"/__mirror/assets/5fa0268efc308181a7ee82be";import{name as R}from"/__mirror/assets/7e7eaf4c4d267bf73504882c";import{name as k}from"/__mirror/assets/8211e5b454c0493e54031c58";import"/__mirror/assets/34233ee5ac8acdb3aa831b25";import"/__mirror/assets/5d2e1bf3d87581457a2b76db";import{a as C}from"/__mirror/assets/1db4ee73d7e46e9ea9afc127";import"/__mirror/assets/08c2f7191e700d0b495894c6";import{R as $,T as L,i as V,B as M,j as O}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import"/__mirror/assets/674e87e1db3168cb538c091d";import"/__mirror/assets/c55634b5c47498bb74d55729";import{n as W,M as B}from"/__mirror/assets/ac1415d701004f2dd9f24260";const H="center",j="onHide",F="onHidden",q="onShow",N="onShown",z={pill:"pill",selector:"selector",radio:"radio",...S,...I},K=e`
  @media (min-width: ${t(w.sm)}) {
    :host([configuration='tab-compound--video']) {
      --ds-tab-compound-media-width: 160px;
      --ds-tab-compound-base-width: 160px;
    }

    :host([configuration='tab-compound--video']) ::slotted(reimagine-scrollslider-item) {
      padding-block: 0.25rem;
      padding-inline: 0.25rem;
    }

    :host([configuration='tab-compound--video']) .tabs__load-more {
      display: none;
    }

    :host([configuration^='tab-compound--video']) ::slotted(reimagine-scrollslider-item) {
      display: block;
    }
  }

  @media (max-width: ${t(y(w.md))}) {
    :host {
      --ds-pill-border-style: none;
      --ds-pill-border-width: none;
      --ds-pill-border-color: none;
      --ds-pill-border-radius: none;
      --ds-pill-background-color: transparent;
      --ds-pill-hover-color: transparent;
      --ds-pill-active-background-color: transparent;
      --ds-pill-active-color: 'var(--ds-app-color-base-default-fg-heading, #0e1726)';
      --ds-pill-color: 'var(--ds-app-color-base-default-fg-heading, #0e1726)';
      --ds-pill-padding-inline-start: 0;
      --ds-pill-padding-inline-end: 0;
      --ds-tabs-base-width: 100%;
      --ds-tabs-base-background-color: transparent;
      --ds-tabs-base-border-color: transparent;
      --ds-tabs-base-border-radius: none;
      --ds-tabs-base-padding-inline-start: 0;
      --ds-tabs-base-padding-inline-end: 0;
      --ds-tabs-base-padding-block-start: 0;
      --ds-tabs-base-padding-block-end: 0;
      --ds-menu-list-min-width: 0;
    }

    :host([configuration='selector']) {
      --ds-pill-text-align: left;
      --ds-tab-white-space: normal;
    }

    :host([configuration='pill']) {
      --ds-pill-text-align: left;
      --ds-tab-white-space: normal;
    }

    :host([configuration='radio']) .tabs__base {
      --ds-scrollslider-base-justify-content: flex-start;
    }
  }
`;var U=Object.defineProperty,G=Object.getOwnPropertyDescriptor,J=(t,e,i,s)=>{for(var a,o=s>1?void 0:s?G(e,i):e,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(s?a(e,i,o):a(o))||o);return s&&o&&U(e,i,o),o};const Q="reimagine-tabs";let X=class extends(d($)){constructor(){super(),this.alignment=H,this.defaultTabIndex=0,this.configuration=z.tabItemVertical,this.updateHistory=!1,this.disableScrollslider=!1,this.isDropdown=!1,this.disableDropdownLabel=!1,this.dropdownLabelText="Label",this.controlPosition=C.bottomStart,this.fullBleed=!1,this.enableBaseContainer=!1,this.enablePanelContainer=!1,this._tabs=[],this._tabPanels=[],this._activeTabIndex=0,this._activeTabPanelIndex=0,this._tabScrollsliderItems=[],this._menuListItems=[],this._pills=[],this._observedWindowDimensions={width:window.innerWidth,height:window.innerHeight},this._isMobileViewport=!1,this._isDesktopViewport=!1,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._buttonSlotEmpty=!0,this._placeHolderText="Placeholder text",this._handlePopState=()=>{if(!this._tabPanels.length||!this._tabs.length)return void(this._initialHash&&requestAnimationFrame(this._handlePopState));const{hash:t}=window.location;if(t.length>0&&this._tabs.length>0){const e=this._tabPanels.find(e=>e.id===t.slice(1));if(e){const t=e.getAttribute("aria-labelledby");t&&(e.tab=this.querySelector(`#${CSS.escape(t)}`)),e.tab&&e.tab instanceof E&&this._setActiveTab(e.tab),requestAnimationFrame(()=>{e&&this._handleScrollAndFocus(e.tab)})}else{const e=this._tabPanels.find(e=>e.slotItems.find(e=>e.id===t.slice(1)));e&&e.tab instanceof E?(this._setActiveTab(e.tab),this._handleScrollAndFocus(this._activeTab)):this._setActiveTab(this._tabs[this.defaultTabIndex])}}else this._setActiveTab(this._tabs[this.defaultTabIndex])},this._isMobileViewport=this._observedWindowDimensions.width<parseInt(w.md,10),this._isDesktopViewport=this._observedWindowDimensions.width>=parseInt(w.md,10),this._resizeObserver=new ResizeObserver(()=>{this._observedWindowDimensions={width:window.innerWidth,height:window.innerHeight},requestAnimationFrame(()=>{this._handleViewportChange()})})}get tabs(){return this._tabs}get activeTab(){return this._activeTab}get activePill(){return this._activePill}get isMobileViewport(){return this._isMobileViewport}connectedCallback(){super.connectedCallback(),window.addEventListener("popstate",this._handlePopState),this._initialHash=window.location.hash,this._updateMobileViewportTabs(),(this.configuration===x.tabItemVertical||this.configuration===z.radio)&&(this.disableScrollslider=!0),requestAnimationFrame(()=>{this._updateTabShowInMobile()}),this._resizeObserver.observe(document.body)}disconnectedCallback(){window.removeEventListener("popstate",this._handlePopState),this._resizeObserver.disconnect(),super.disconnectedCallback()}_handleViewportChange(){const t=this._observedWindowDimensions.width<parseInt(w.md,10),e=this._observedWindowDimensions.width>=parseInt(w.md,10);this._isDesktopViewport&&t?(this._isDesktopViewport=!1,this._isMobileViewport=!0,this._updateMobileViewportTabs(),this._updateTabShowInMobile()):this._isMobileViewport&&e&&(this._isDesktopViewport=!0,this._isMobileViewport=!1,this.configuration===z.tabCompoundVideo&&(this.disableScrollslider=!1))}_updateMobileViewportTabs(){var t;if(this.isDropdown&&(this.configuration===z.pill||this.configuration===z.selector)){for(const e of this._tabPanels){const i=h(null==(t=e.shadowRoot)?void 0:t.querySelector('[part="tab-panel__base"]'),"reimagine-button");i&&(i.hidden=!0)}0!==this._menuListItems.length&&(this._menuListItems.length=0),this._tabScrollsliderItems.forEach(t=>{const e=document.createElement(W),i=h(t,D);i.setAttribute("slot","list-item__title"),e.append(i.cloneNode(!0)),e.setAttribute("selectable",""),e.setAttribute("configuration","tab"),this._menuListItems.push(e),i.replaceWith(e)})}}_updateTabShowInMobile(){this._isMobileViewport&&this.configuration===z.tabCompoundVideo&&(this.disableScrollslider=!0,this._tabScrollsliderItems.forEach((t,e)=>{e<4&&(t.style.display="block"),t.setAttribute("role","tablist")}))}handleFocusOut(t){const e=this._observedWindowDimensions.width<parseInt(w.md,10);if(this.configuration!==z.pill&&!e||e&&this.isDropdown)return;const i=t,{relatedTarget:s}=i,a=h(this.shadowRoot,"reimagine-dropdown");!a||!s||!(s instanceof HTMLElement)||s&&null!==b(s,R)&&a.removeAttribute("open")}_handleScrollAndFocus(t){if(!t)return;const e=this._tabPanels[this._activeTabPanelIndex];if(!e)return;const i=c(e.base),s=()=>{try{t.scrollIntoView({block:"start",inline:"nearest"}),t.focus({preventScroll:!0})}catch{t.scrollIntoView(!0),t.focus()}};e.addEventListener(p,()=>{s(),cancelAnimationFrame(a)},{once:!0});const a=requestAnimationFrame(()=>requestAnimationFrame(s));_(e,i)}handleClick(t){var e;const i=t.target;let s=b(i,D),a=b(i,k);if(!s&&this.isDropdown&&this._isMobileViewport){const t=b(i,W);if(t){const e=h(t,D),i=(null==e?void 0:e.id)||(null==e?void 0:e.getAttribute("tabPanelId"));s=this._tabs.find(t=>t.id===i||t.tabPanelId===i),a=h(t,k)}}const o=h(this.shadowRoot,"reimagine-dropdown");null!==s&&(this._setActiveTab(s),this._setActivePill(a),o&&(o.removeAttribute("open"),null==(e=h(this.shadowRoot,"reimagine-dropdown-trigger"))||e.focus()))}_handleLoadMore(t){t.currentTarget.style.display="none",this._tabScrollsliderItems.forEach(t=>{t.style.display="block"});const e=this._tabScrollsliderItems[this._tabScrollsliderItems.length-1],i=h(e,D);i&&i.focus()}handleKeyDown(t){var e;const i=t.target,s=this._getTab(i),a=h(this.shadowRoot,"reimagine-dropdown");switch(t.key){case u.SPACE:case u.ENTER:null!==s&&(this._setActiveTab(s),a&&(a.removeAttribute("open"),null==(e=h(this.shadowRoot,"reimagine-dropdown-trigger"))||e.focus()),t.preventDefault());break;case u.HOME:case u.END:case u.ARROW_LEFT:case u.ARROW_RIGHT:case u.ARROW_DOWN:case u.ARROW_UP:this._handleDirectionKey(t.key,s),t.preventDefault();break;case u.TAB:this._activeTab&&this._activeTab.setAttribute("tabindex","0"),this._handleTabKey(t)}}_handleDirectionKey(t,e){const i=this._getTabIndex(e);if(-1!==i||t!==u.ARROW_DOWN||void 0===this._activeTab){if(-1!==i){const e=this._getNextTabIndex(i,t);this._focusTab(e)}}else this._focusTab(this._activeTabIndex)}_getNextTabIndex(t,e){const i="rtl"===this.dir,s=h(this.shadowRoot,"reimagine-dropdown"),a=this.configuration===z.tabItemVertical,o=s||this._isMobileViewport||a;let n=t;switch(e){case u.HOME:return 0;case u.END:return this._tabs.length-1;case i?u.ARROW_RIGHT:u.ARROW_LEFT:n=t-1;break;case i?u.ARROW_LEFT:u.ARROW_RIGHT:n=t+1;break;case u.ARROW_DOWN:o&&(n=Math.min(t+1,this._tabs.length-1));break;case u.ARROW_UP:o&&(n=Math.max(t-1,0))}return n<0?this._tabs.length-1:n>=this._tabs.length?0:n}_handleTabKey(t){const e=t.target,i=this._getTabIndex(e);!t.shiftKey&&-1!==i&&i>=this._activeTabIndex&&(this._tabPanels[this._activeTabPanelIndex].focus(),t.preventDefault())}_getTabIndex(t){if(!t)return-1;const e=this._getTab(t);return e?this._tabs.indexOf(e):-1}_getTab(t){return t?t instanceof B?h(t,D):b(t,D):null}_focusTab(t){if(this.isDropdown&&this._isMobileViewport){const e=m(this,"reimagine-menu-list-item"),i=null==e?void 0:e[t];i&&i.focus()}else{const e=this._tabs[t];e&&e.focus()}}_isHashUsedByAnyTabs(t){if(!t)return!1;const e=t.slice(1);return Array.from(m(document,"reimagine-tabs")).some(t=>{var i;return null==(i=t._tabPanels)?void 0:i.some(t=>t.id===e||t.querySelector(`#${CSS.escape(e)}`))})}_setActivePill(t){if(t){if(this._pills.find(t=>t.active)===t)return;this._pills.forEach(e=>{var i;if(e===t){e.active=!0;const s=b(t,W),a=h(this.shadowRoot,"reimagine-menu-list"),o=null==(i=null==a?void 0:a.shadowRoot)?void 0:i.querySelector(".menu-list .menu-list__content");null==o||o.setAttribute("aria-activedescendant",(null==s?void 0:s.id)||""),s&&(s.setAttribute("active","true"),s.setAttribute("aria-selected","true"))}else{e.active=!1;const t=b(e,W);t&&(t.removeAttribute("active"),t.removeAttribute("aria-selected"))}})}}_setActiveTab(t){if(t!==this._activeTab){const e=this._activeTab;this._activeTab=t,this._activePill=this._pills[this._tabs.indexOf(t)],this._activePill&&this._setActivePill(this._activePill);const i=new CustomEvent(j,{detail:{relatedTarget:this._activeTab}}),s=new CustomEvent(q,{detail:{relatedTarget:e}});if(e&&e.dispatchEvent(i),this._activeTab.dispatchEvent(s),s.defaultPrevented||i.defaultPrevented)return;this._tabs.forEach((t,e)=>{var i,s;t===this._activeTab?(t.active=!0,t.setAttribute("aria-selected","true"),this._activeTabIndex=e,this._activeTabPanelIndex=e):(t.active=!1,t.setAttribute("aria-selected","false"),null==(s=null==(i=this._tabPanels[e])?void 0:i.base)||s.classList.remove("show"))});const a=new CustomEvent(F,{detail:{relatedTarget:this._activeTab}}),o=new CustomEvent(N,{detail:{relatedTarget:e}});e&&e.dispatchEvent(a),this._activeTab.dispatchEvent(o);const{hash:n}=window.location;if(n){const t=this._tabPanels.findIndex(t=>n===`#${t.id}`);-1!==t&&(this._activeTabIndex=t)}const l=`#${this._tabPanels[this._activeTabPanelIndex].id}`,{title:r}=document,{state:d}=window.history,h=!n&&this._activeTabIndex!==this.defaultTabIndex,b=n&&this._tabPanels[this._activeTabPanelIndex]&&!this._tabPanels[this._activeTabPanelIndex].querySelector(n),u=this._isHashUsedByAnyTabs(n);if((h||b&&n!==l&&u)&&(this.updateHistory?window.history.pushState(d,r,l):window.history.replaceState(d,r,l)),this._tabPanels.length>0){const t=this._tabPanels[this._activeTabPanelIndex];if(t){const e=c(t.base);t.addEventListener(p,()=>this._completeTransitionEnd(t),{once:!0}),_(t,e)}}}this._setPlaceHolderText()}_setChildTabConfiguration(t){const e=h(t,A)||h(t,P),i=e;if(e&&(e.setAttribute("configuration",this.configuration),g(e,P))){e.theme=this.theme;const t=this.theme===L.dark?i.themeDarkSurface:i.themeLightSurface;t&&this.configuration!==I.tabCompoundBadge&&i.setAttribute("surface",t)}}_setTabPanels(){this._tabPanels=this._tabPanelSlot.filter(t=>g(t,R))}_completeTransitionEnd(t){this._tabPanels.forEach(e=>{e.active=e===t})}_handleFirstLastSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length,this._buttonSlotEmpty=0===this._buttonSlot.length}handleSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length,this._buttonSlotEmpty=0===this._buttonSlot.length}_handleBaseSlotChange(t){const e=t.target;this._tabs=e.assignedElements().filter(t=>g(t,D)),this._pills=this._tabs.map(t=>h(t,k)).filter(t=>null!==t);let i=null;if(0===this._tabPanels.length&&this._setTabPanels(),this._tabs.forEach((t,e)=>{t.setAttribute("role","tab");const s=this._tabPanels.find(e=>e.id===t.tabPanelId);s&&(this._tabPanels.push(s),t.setAttribute("aria-controls",t.tabPanelId||""),s.setAttribute("aria-labelledby",t.id)),t.active&&(i=t),this._setChildTabConfiguration(t),!this.disableScrollslider&&this._tabScrollsliderItems.length!==this._baseSlotElements.length&&this._scrollsliderItemTabWrap(t,e)}),this._tabScrollsliderItems.length>0){this._tabs=this._tabScrollsliderItems.map(t=>h(t,D)).filter(t=>null!==t),i=this._tabs.find(t=>t.active)||i,this._pills=this._tabScrollsliderItems.map(t=>h(t,k)).filter(t=>null!==t);const t=this._tabScrollsliderItems[this._tabScrollsliderItems.length-1];t&&t.classList.add("tabs__base__last")}else if(this._tabs.length>0){const t=this._tabs[this._tabs.length-1];t&&t.classList.add("tabs__base__last")}i&&(this._activeTabIndex=this._tabs.indexOf(i),this.defaultTabIndex=this._activeTabIndex),this._setPlaceHolderText(),this._initialHash?(this._initialHash="",this._handlePopState()):this._setActiveTab(this._tabs[this._activeTabIndex])}_setPlaceHolderText(){var t,e;this._placeHolderText=(null==(e=null==(t=this._activeTab)?void 0:t.textContent)?void 0:e.trim())||"Placeholder text"}_scrollsliderItemTabWrap(t,e){const i=document.createElement("reimagine-scrollslider-item");if(this.configuration!==z.pill&&this.configuration!==z.selector||!this.isDropdown){const e=t.cloneNode(!0),s=t.id||t._componentIdFallback;s&&e.setAttribute("id",s),i.append(e)}else{const s=document.createElement(W);t.setAttribute("slot","list-item__title");const a=t.id||t._componentIdFallback,o=t.cloneNode(!0);a&&o.setAttribute("id",a),s.append(o),s.setAttribute("selectable",""),s.setAttribute("id",`menu-item-${e}`),s.setAttribute("configuration","tab"),this._menuListItems.push(s),i.append(s.cloneNode(!0))}t.replaceWith(i),this._tabScrollsliderItems.push(i)}_updateScrollSlider(){const t=this._scrollslider;this._tabScrollsliderItems.length>0&&t&&(t.scrollSliderRole="tablist",t.scrollSliderItemRole="",this.configuration===z.pill||this.configuration===z.selector?t.setControlSize("medium"):t.setControlSize("small"),t.setScrollsliderItems(this._tabScrollsliderItems),this._tabScrollsliderItems.forEach(t=>{t.hasAttribute("role")&&t.removeAttribute("role")}))}renderScrollSliderTemplate(){const t=i`<slot @slotchange="${this._handleBaseSlotChange}"></slot>`,e=this.configuration===z.pill||this.configuration===z.selector;return this.disableScrollslider?t:i`
      <reimagine-scrollslider
        control-position="${this.controlPosition}"
        alignment="${this.alignment}"
        ?full-bleed=${this.fullBleed}
        ?gradient-fade="${e}"
      >
        ${t}
      </reimagine-scrollslider>
    `}renderMobileTemplate(){return i`
      <reimagine-dropdown selectable>
        <reimagine-dropdown-trigger slot="dropdown__trigger">
          ${this.disableDropdownLabel?s:i`<span slot="dropdown-trigger__input-label">${this.dropdownLabelText}</span>`}
          ${this._placeHolderText}
        </reimagine-dropdown-trigger>
        <reimagine-menu-list selectable configuration="tab">
          <slot @slotchange="${this._handleBaseSlotChange}"></slot>
        </reimagine-menu-list>
      </reimagine-dropdown>
    `}show(t){const e=this._tabs.find(e=>e.tabPanelId===t);e&&this._setActiveTab(e)}_updateButtonAttributes(){const t=h(this._buttonSlot[0],"reimagine-button");t&&!t.hasAttribute("appearance")&&!t.hasAttribute("size")&&!t.hasAttribute("shape")&&(t.setAttribute("appearance",V.buttonSecondary),t.setAttribute("size",M.medium),t.setAttribute("shape",O.rounded))}_renderLoadMoreButton(){const t=i`
      <div
        part="tabs__load-more"
        class="tabs__load-more"
        style="${this._buttonSlotEmpty?"display: none":""}"
        @slotchange=${this.handleSlotChange}
        @click="${this._handleLoadMore}"
      >
        <slot name="tabs__load-more"></slot>
      </div>
    `;return this._tabScrollsliderItems.length>4?t:s}renderTabsBase(){let t=i`${this.renderScrollSliderTemplate()}`;this._isMobileViewport&&this.isDropdown&&(this.configuration===z.pill||this.configuration===z.selector)&&(t=i`${this.renderMobileTemplate()}`);let e=i` ${t} ${this._renderLoadMoreButton()} `;return this.enableBaseContainer&&(e=i` <reimagine-container> ${e} </reimagine-container> `),i`
      <div
        part="tabs__base"
        class="tabs__base"
        @click="${this.handleClick}"
        @keydown="${this.handleKeyDown}"
        @focusout="${this.handleFocusOut}"
        role="tablist"
      >
        ${e}
      </div>
    `}renderTabsPanel(){const t=i`<slot name="tabs__tabpanel"></slot>`;let e=t;return this.enablePanelContainer&&(e=i` <reimagine-container> ${t} </reimagine-container> `),i` <div part="tabs__tabpanel" class="tabs__tabpanel">${e}</div> `}updated(t){var e,i,s;if(!this.disableScrollslider&&this._tabs.length>0&&(this._updateScrollSlider(),this._baseElement&&this._baseElement.hasAttribute("role")&&this._baseElement.removeAttribute("role")),this._isDesktopViewport&&this.isDropdown&&this._tabScrollsliderItems.forEach(t=>{const e=h(t,D);e.hasAttribute("delegate-outline")||e.setAttribute("delegate-outline",""),e.hasAttribute("slot")&&e.removeAttribute("slot");const i=h(t,W);i&&i.replaceWith(e)}),this._isMobileViewport&&this.isDropdown){const t=h(this.shadowRoot,"reimagine-menu-list"),s=null==(e=null==t?void 0:t.shadowRoot)?void 0:e.querySelector(".menu-list .menu-list__content");null==s||s.setAttribute("role","tablist");const a=b(this._activePill,W);null==a||a.setAttribute("active",""),this._tabScrollsliderItems.forEach(t=>{const e=h(t,D);e.hasAttribute("delegate-outline")&&e.removeAttribute("delegate-outline")});for(const t of this._tabPanels){const e=h(null==(i=t.shadowRoot)?void 0:i.querySelector('[part="tab-panel__base"]'),"reimagine-button");e&&(e.hidden=!0)}}if(this._isDesktopViewport)for(const t of this._tabPanels){const e=h(null==(s=t.shadowRoot)?void 0:s.querySelector('[part="tab-panel__base"]'),"reimagine-button");e&&(e.hidden=!1)}this._buttonSlotEmpty||this._updateButtonAttributes(),(this.configuration===z.pill||this.configuration===z.selector)&&(this._pills.forEach(t=>{t.hasAttribute("as-button")&&t.removeAttribute("as-button")}),this.configuration===z.selector?this.controlPosition=C.middleEnd:this.controlPosition=C.middleStart,this.isDropdown=!0),this.configuration===z.radio&&this._tabs.forEach(t=>{const e=h(t,"reimagine-radiobutton");e&&f(e,{"disable-interaction":""},!1)})}renderFirst(){return i`
      <div
        part="tabs__first"
        class="tabs__first"
        style="${this._firstSlotEmpty?"display: none":s}"
      >
        <slot name="tabs__first" @slotchange=${this._handleFirstLastSlotChange}></slot>
      </div>
    `}renderLast(){return i`
      <div
        part="tabs__last"
        class="tabs__last"
        style="${this._lastSlotEmpty?"display: none":s}"
      >
        <slot name="tabs__last" @slotchange=${this._handleFirstLastSlotChange}></slot>
      </div>
    `}render(){return i`
      ${this.renderFirst()}
      ${this.renderTabsBase()} ${this.renderTabsPanel()}
      ${this.renderLast()}
    `}};X.styles=[T,K],J([a({reflect:!0})],X.prototype,"alignment",2),J([a({attribute:"default-tab-index",type:Number})],X.prototype,"defaultTabIndex",2),J([a({reflect:!0})],X.prototype,"configuration",2),J([a({attribute:"update-history",type:Boolean})],X.prototype,"updateHistory",2),J([a({attribute:"disable-scrollslider",type:Boolean})],X.prototype,"disableScrollslider",2),J([a({attribute:"is-dropdown",type:Boolean})],X.prototype,"isDropdown",2),J([a({attribute:"disable-dropdown-label",type:Boolean})],X.prototype,"disableDropdownLabel",2),J([a({attribute:"dropdown-label-text",type:String})],X.prototype,"dropdownLabelText",2),J([a({attribute:"control-position",reflect:!0})],X.prototype,"controlPosition",2),J([a({attribute:"full-bleed",type:Boolean})],X.prototype,"fullBleed",2),J([a({type:Boolean,reflect:!0,attribute:"enable-base-container"})],X.prototype,"enableBaseContainer",2),J([a({type:Boolean,reflect:!0,attribute:"enable-panel-container"})],X.prototype,"enablePanelContainer",2),J([o()],X.prototype,"_tabs",2),J([o()],X.prototype,"_tabPanels",2),J([o()],X.prototype,"_activeTab",2),J([o()],X.prototype,"_activePill",2),J([o()],X.prototype,"_activeTabIndex",2),J([o()],X.prototype,"_activeTabPanelIndex",2),J([o()],X.prototype,"_initialHash",2),J([o()],X.prototype,"_tabScrollsliderItems",2),J([o()],X.prototype,"_menuListItems",2),J([o()],X.prototype,"_pills",2),J([o()],X.prototype,"_resizeObserver",2),J([o()],X.prototype,"_observedWindowDimensions",2),J([o()],X.prototype,"_isMobileViewport",2),J([o()],X.prototype,"_isDesktopViewport",2),J([n({slot:"tabs__first"})],X.prototype,"_firstSlot",2),J([n({slot:"tabs__last"})],X.prototype,"_lastSlot",2),J([n({slot:"tabs__tabpanel"})],X.prototype,"_tabPanelSlot",2),J([n({slot:"tabs__load-more"})],X.prototype,"_buttonSlot",2),J([l(".tabs__base")],X.prototype,"_baseElement",2),J([l("reimagine-scrollslider")],X.prototype,"_scrollslider",2),J([r()],X.prototype,"_baseSlotElements",2),J([o()],X.prototype,"_firstSlotEmpty",2),J([o()],X.prototype,"_lastSlotEmpty",2),J([o()],X.prototype,"_buttonSlotEmpty",2),J([o()],X.prototype,"_placeHolderText",2),X=J([v(Q)],X);export{X as Tabs,Q as name};
