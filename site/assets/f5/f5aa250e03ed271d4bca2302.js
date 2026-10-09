import{r as t,i as o,c as i,e,f as r,b as l}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{s,q as a,d as n}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{R as p}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";const c="flex",d="row",y="var(--ds-app-space-micro-2xs, 0.25rem)",h="center",_=o`
  :host {
    display: var(--ds-indicator-row-display, ${t(c)});
    align-items: var(--ds-indicator-row-align-items, ${t(h)});
    gap: var(--ds-indicator-row-gap, ${t(y)});
  }

  ol {
    display: var(--ds-indicator-row-ordered-list-display, ${t(c)});
    flex-direction: var(
      --ds-indicator-row-ordered-list-flex-direction,
      ${t(d)}
    );
    gap: var(--ds-indicator-row-ordered-list-gap, ${t(y)});
  }

  :host([orientation='vertical']) ol {
    --ds-indicator-row-ordered-list-flex-direction: column;
  }
`;var m=Object.defineProperty,S=Object.getOwnPropertyDescriptor,u=(t,o,i,e)=>{for(var r,l=e>1?void 0:e?S(o,i):o,s=t.length-1;s>=0;s--)(r=t[s])&&(l=(e?r(o,i,l):r(l))||l);return e&&l&&m(o,i,l),l};const f="reimagine-indicator-row";let g=class extends p{constructor(){super(...arguments),this.clickable=!1,this.active=!0,this.configuration="sharp",this.orientation="horizontal",this.indicatorStyle="subtle",this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._rowSlotEmpty=!0,this._playButtonSlotEmpty=!0}_handleSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length,this._rowSlotEmpty=0===this._rowSlot.length,this._playButtonSlotEmpty=0===this._playButtonSlot.length,this._updateSlotElements()}_updateSlotElements(){var t;const o=null==(t=this.shadowRoot)?void 0:t.querySelectorAll('slot[name="indicator-row__indicators"]');null==o||o.forEach(t=>{t.assignedElements().forEach(t=>{this.clickable?t.setAttribute("clickable","true"):t.removeAttribute("clickable")})})}updated(){if(this._rowSlotEmpty||this._rowSlot.forEach(t=>{const o=t;o.setAttribute("role","listitem"),o.setAttribute("configuration",this.configuration),o.setAttribute("orientation",this.orientation),o.setAttribute("indicator-style",this.indicatorStyle)}),!this._playButtonSlotEmpty){this._playButtonSlot.forEach(t=>{s(t,{"icon-only":"",appearance:"button--ghost",shape:"rounded",size:"small"})});const t=a(this,"reimagine-icon");t&&s(t,{size:"medium",filled:"",icon:"play","aria-hidden":"true",role:"presentation"})}}_renderOptionalSlot(t,o){return l`
      <div part=${t} class=${t} style="${o?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}render(){return l`
      ${this._renderOptionalSlot("indicator-row__first",this._firstSlotEmpty)}
      <ol>
        <slot name="indicator-row__indicators" @slotchange="${this._handleSlotChange}"></slot>
      </ol>
      <div
        part="play-button"
        class="play-button"
        style="${this._playButtonSlotEmpty?"display: none;":""}"
      >
        <slot name="play-button" @slotchange="${this._handleSlotChange}"></slot>
      </div>
      ${this._renderOptionalSlot("indicator-row__last",this._lastSlotEmpty)}
    `}};g.styles=[_],u([i({type:Boolean})],g.prototype,"clickable",2),u([i({type:Boolean})],g.prototype,"active",2),u([i({type:String,reflect:!0})],g.prototype,"configuration",2),u([i({type:String,reflect:!0})],g.prototype,"orientation",2),u([i({type:String,reflect:!0,attribute:"indicator-style"})],g.prototype,"indicatorStyle",2),u([e({slot:"indicator-row__first"})],g.prototype,"_firstSlot",2),u([e({slot:"indicator-row__last"})],g.prototype,"_lastSlot",2),u([e({slot:"indicator-row__indicators"})],g.prototype,"_rowSlot",2),u([e({slot:"play-button"})],g.prototype,"_playButtonSlot",2),u([r()],g.prototype,"_firstSlotEmpty",2),u([r()],g.prototype,"_lastSlotEmpty",2),u([r()],g.prototype,"_rowSlotEmpty",2),u([r()],g.prototype,"_playButtonSlotEmpty",2),g=u([n(f)],g);export{g as IndicatorRow,f as name};
