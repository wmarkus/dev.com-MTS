import{r as t,i as a,c as e,e as s,g as i,f as o,A as l,b as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i as n,d}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{w as b,o as p,R as h}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{n as c}from"/__mirror/assets/2731684d53f7044984bbf6c7";import{name as _}from"/__mirror/assets/8211e5b454c0493e54031c58";const m="0",g="0",u="var(--ds-app-color-base-default-fg-heading)",f="1",v="pointer",y="auto",S="normal",$=a`
  :host {
    color: var(--ds-tab-color, ${t("var(--ds-app-color-base-default-fg-heading, #0e1726)")});
    display: var(--ds-tab-display, inline-flex);
    align-items: var(--ds-tab-align-items, center);
    justify-content: var(--ds-tab-justify-content, center);
    cursor: var(--ds-tab-cursor, ${t(v)});
    width: var(--ds-tab-width, 100%);
    max-width: var(--ds-tab-max-width, 100%);
    margin-inline: var(--ds-tab-margin-inline, ${t(m)});
    margin-block: var(--ds-tab-margin-block, ${t(g)});
    opacity: var(--ds-tab-opacity, ${t(f)});
    pointer-events: var(--ds-tab-pointer-events, ${t(y)});
    white-space: var(--ds-tab-white-space, ${t(S)});
  }

  /* Disabled state styles */
  :host([disabled]) {
    --ds-tab-opacity: 0.2;
    pointer-events: none;
    cursor: not-allowed;
  }

  :host(:focus) {
    ${b};
  }

  :host([delegate-outline]:focus) {
    outline: none !important;
  }

  :host([delegate-outline]:focus) .tab__base ::slotted(*) {
    ${p};
    outline-color: var(--ds-tab-vfi-outline, ${t(u)}) !important;
  }

  :host([delegate-outline]:focus) .tab__base ::slotted(reimagine-pill[active]) {
    ${p};
    --ds-tab-vfi-outline: var(--ds-app-color-interactive-primary-fg-default, #fff) !important;
  }

  :host([delegate-outline]:focus) .tab__base ::slotted(reimagine-pill) {
    ${p};
    --ds-tab-vfi-outline: var(--ds-app-color-interactive-secondary-fg-default, #2a446f) !important;
  }

  .tab__base {
    display: var(--ds-tab-base-display, initial);
    height: var(--ds-tab-base-height, initial);
  }

  .tab__base ::slotted(reimagine-radiobutton) {
    --ds-radiobutton-cursor: var(--ds-tab-cursor, ${t(v)});
    --ds-radiobutton-pointer-events: var(
      --ds-tab-pointer-events,
      ${t(y)}
    );
  }
`;var w=Object.defineProperty,E=Object.getOwnPropertyDescriptor,I=(t,a,e,s)=>{for(var i,o=s>1?void 0:s?E(a,e):a,l=t.length-1;l>=0;l--)(i=t[l])&&(o=(s?i(a,e,o):i(o))||o);return s&&o&&w(a,e,o),o};const A="reimagine-tab";let j=0,C=class extends h{constructor(){super(...arguments),this._componentId=++j,this._panelIdFallback=`tab${this._componentId}`,this._componentIdFallback=`${this._panelIdFallback}-tab`,this.active=!1,this.disabled=!1,this.delegateOutline=!1,this.tabPanelId=null,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._baseSlotEmpty=!0}willUpdate(){this.id=this.id.length>0?this.id:this._componentIdFallback,this.tabPanelId=this.tabPanelId&&this.tabPanelId.length>0?this.tabPanelId:this._panelIdFallback,this.setAttribute("tabindex",this.active?"0":"-1"),this._toggleActiveState()}_handleSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length,this._baseSlotEmpty=0===this._baseSlot.length,!this._baseSlotEmpty&&(n(this._baseSlot[0],c)||n(this._baseSlot[0],_))&&(this.delegateOutline=!0)}_toggleActiveState(){if(!this._baseSlotEmpty){let t=this._baseSlot[0];this._baseSlot[0].tagName.toLowerCase().includes("tab")||this._baseSlot[0].tagName.toLowerCase().includes("reimagine-pill")||this._baseSlot[0].tagName.toLowerCase().includes("reimagine-radiobutton")?t=this._baseSlot[0]:(t=this._baseSlot.flatMap(t=>Array.from(t.children)).find(t=>t.tagName.toLowerCase().includes("tab")),t||(t=this._baseSlot.flatMap(t=>Array.from(t.children)).find(t=>t.tagName.toLowerCase().includes("reimagine-pill")))),t&&(this.active?t.setAttribute("active",""):t.removeAttribute("active"))}}updated(t){t.has("active")&&this._toggleActiveState(),t.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled"))}render(){return r`
      <span
        part="tab__first"
        class="tab__first"
        style="${this._firstSlotEmpty?"display: none":l}"
      >
        <slot name="tab__first" @slotchange=${this._handleSlotChange}></slot>
      </span>
      <span part="tab__base" class="tab__base">
        <slot @slotchange=${this._handleSlotChange}></slot>
      </span>
      <span
        part="tab__last"
        class="tab__last"
        style="${this._lastSlotEmpty?"display: none":l}"
      >
        <slot name="tab__last" @slotchange=${this._handleSlotChange}></slot>
      </span>
    `}};C.styles=[$],I([e({type:Boolean,reflect:!0})],C.prototype,"active",2),I([e({type:Boolean,reflect:!0})],C.prototype,"disabled",2),I([e({type:Boolean,reflect:!0,attribute:"delegate-outline"})],C.prototype,"delegateOutline",2),I([e({attribute:"tab-panel-id"})],C.prototype,"tabPanelId",2),I([s({slot:"tab__first"})],C.prototype,"_firstSlot",2),I([s({slot:"tab__last"})],C.prototype,"_lastSlot",2),I([i()],C.prototype,"_baseSlot",2),I([o()],C.prototype,"_firstSlotEmpty",2),I([o()],C.prototype,"_lastSlotEmpty",2),I([o()],C.prototype,"_baseSlotEmpty",2),C=I([d(A)],C);export{C as Tab,A as name};
