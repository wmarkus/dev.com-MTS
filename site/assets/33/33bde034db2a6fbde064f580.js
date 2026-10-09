import{r as e,i as t,f as a,e as o,b as s}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{a as l,q as n,r as i,d as r}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{b as d,v as b}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{Tabs as c}from"/__mirror/assets/75afd3b650a13c2d07b54168";const g=t`
  @media (max-width: ${e(d(b.md))}) {
    :host {
      --ds-surface-cursor: default;
      --ds-tab-cursor: default;
      --ds-tab-pointer-events: none;
      --ds-tab-compound-width: 187px; /* Tab compound width for mobile viewports (from Figma design) */
      --tab-panel-display: block;
    }

    .logotabs-stack,
    .content-groups {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: var(--ds-app-space-layout-stack-comfortable, 2rem);
    }

    .content-groups reimagine-tab-compound,
    .content-groups reimagine-card-dialog {
      box-sizing: border-box;
      box-shadow: var(
        --ds-elevation-level-2,
        0 2px 4px rgba(0, 0, 0, 0.14) 0 0 2px rgba(0, 0, 0, 0.12)
      );
      background-color: var(--ds-app-color-surface-solid-bg-default, #fefefe);
      border-radius: var(--ds-app-radii-l, 1.5rem);
    }

    .content-groups reimagine-tab-panel {
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        margin-block: var(
          --ds-logo-tabs-margin-block,
          ${e("0")}
        ); // base.min.css styles not being inherited in mobile viewports
      }
      z-index: var(--ds-z-index-10, 10); //added to fix the issue with popover flyer getting overlapped by the tabcompound.
    }

    ::slotted(reimagine-scrollslider-item) {
      display: contents;
    }
  }
`;var p=Object.defineProperty,h=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,u=Reflect.get,_=(e,t,a,o)=>{for(var s,l=o>1?void 0:o?h(t,a):t,n=e.length-1;n>=0;n--)(s=e[n])&&(l=(o?s(t,a,l):s(l))||l);return o&&l&&p(t,a,l),l};const T="reimagine-logo-tabs";let v=class extends c{constructor(){super(),this._logoTabsMedia=[],this._logoTabsPanel=[],this._logoTabsSlotReady=!1,this._logoTabsPanelSlotReady=!1,this.configuration="tab-compound--label-logo-4-3"}_handleTabSlotChange(e){this._logoTabsMedia=[];const t=l(this,"reimagine-tab");e.target.assignedElements().forEach(e=>{var t;const a=null==(t=n(e,"reimagine-tab-compound"))?void 0:t.cloneNode(!0);a&&(a.setAttribute("configuration",this.configuration),i(a,["active","tabindex","delegate-outline","role","clickable"]),this._logoTabsMedia.push(a))}),this._logoTabsSlotReady=this._logoTabsMedia.length===t.length,this._logoTabsSlotReady&&this._renderLogoTabsTemplate()}_handleTabPanelSlotChange(e){this._logoTabsPanel=[];const t=l(this,"reimagine-tab-panel");e.target.assignedElements().forEach(e=>{const t=e.cloneNode(!0);t&&(i(t,["slot","role","tabindex"]),this._logoTabsPanel.push(t))}),this._logoTabsPanelSlotReady=this._logoTabsPanelSlot.length===t.length,this._logoTabsPanelSlotReady&&this._renderLogoTabsTemplate()}_removeMobileTabPanelAttrs(e){var t,a;i(e,["slot","role","tabindex"]);const o=null==(t=e.shadowRoot)?void 0:t.querySelector(".tab-panel__base");o instanceof HTMLElement&&o.removeAttribute("tabindex");const s=null==(a=e.shadowRoot)?void 0:a.querySelector(".tab-panel__sr-button");s&&(s.style.display="none")}_renderLogoTabsTemplate(){var e,t;if(!this._logoTabsSlotReady||!this._logoTabsPanelSlotReady)return;const a=null==(e=this.shadowRoot)?void 0:e.querySelector(".logotabs-stack");if(!a)return;a.innerHTML="",this._logoTabsMedia.forEach((e,t)=>{const o=this._logoTabsPanel[t];if(e&&o){const t=document.createElement("div");t.classList.add("content-groups"),t.setAttribute("part","content-groups"),i(e,["active","slot","tabindex","delegate-outline","role","clickable"]),t.append(e,o),a.append(t),o.updateComplete.then(()=>{this._removeMobileTabPanelAttrs(o)})}});const o=null==(t=this.shadowRoot)?void 0:t.querySelector(".logo-tabs-temp");o&&o.remove()}renderMobileLayout(){return s`
      <div class="logo-tabs-temp" style="display: none;">
        <slot @slotchange="${this._handleTabSlotChange}"></slot>
        <slot name="tabs__tabpanel" @slotchange="${this._handleTabPanelSlotChange}"></slot>
      </div>
      <div
        class="logotabs-stack"
        part="logotabs-stack"
        style="${this._isMobileViewport?"":"display:none;"}"
      ></div>
    `}renderTabsBase(){const e=this.renderScrollSliderTemplate(),t=this.enableBaseContainer?s`<reimagine-container>${e}</reimagine-container>`:e;return s`
      <div
        part="tabs__base"
        class="tabs__base"
        @click="${this.handleClick}"
        @keydown="${this.handleKeyDown}"
        role="tablist"
      >
        ${t}
      </div>
    `}renderTabsPanel(){const e=s`<slot name="tabs__tabpanel"></slot>`,t=this.enablePanelContainer?s`<reimagine-container>${e}</reimagine-container>`:e;return s` <div part="tabs__tabpanel" class="tabs__tabpanel">${t}</div> `}renderTemplates(){return this._isMobileViewport?s`${this.renderMobileLayout()}`:s` ${this.renderTabsBase()} ${this.renderTabsPanel()} `}render(){return s` ${this.renderTemplates()} `}};var y,f,x;v.styles=[...(y=v,f=v,x="styles",u(m(y),x,f)),g],_([a()],v.prototype,"_logoTabsSlotReady",2),_([a()],v.prototype,"_logoTabsPanelSlotReady",2),_([o({slot:"tabs__tabpanel"})],v.prototype,"_logoTabsPanelSlot",2),v=_([r(T)],v);export{v as LogoTabs,T as name};
