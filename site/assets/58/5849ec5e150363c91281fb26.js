import{r as t,i as o,e as r,f as i,c as a,b as e}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as s}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{w as d,R as n}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";const l={alignSelf:"stretch",backgroundColor:"var(--ds-app-color-base-default-fg-highlight)",width:"0.25rem",height:"auto",display:"inline-block",borderRadius:"initial",border:"none"},c=o`
  :host {
    display: var(--ds-indicator-display, ${t(l.display)});
    background-color: var(
      --ds-indicator-background-color,
      var(--ds-app-color-base-default-fg-highlight, ${t(l.backgroundColor)})
    );
    background-image: var(--ds-indicator-background-image, none);
    height: var(--ds-indicator-height, ${t(l.height)});
    width: var(--ds-indicator-width, ${t(l.width)});
    border: var(--ds-indicator-border, ${t(l.border)});
    border-radius: var(--ds-indicator-border-radius, ${t(l.borderRadius)});
    flex-shrink: 0;
    align-self: var(--ds-indicator-align-self, ${t(l.alignSelf)});
  }

  @media (forced-colors: active) {
    :host([active]) {
      --ds-indicator-border: var(--ds-border-m) solid;
      box-sizing: content-box !important;
    }

    :host {
      background-color: highlight;
    }
  }

  :host([clickable]) {
    cursor: pointer;

    --ds-indicator-background-color: var(--ds-app-color-interactive-secondary-bg-default);
  }

  :host([decorative]) {
    --ds-indicator-background-color: var(--ds-app-color-interactive-secondary-bg-default);
  }

  :host([clickable]:hover) {
    --ds-indicator-background-color: var(--ds-app-color-interactive-secondary-bg-hover);
  }

  :host([clickable]:focus) {
    ${d};
  }

  :host([clickable]:active) {
    --ds-indicator-background-color: var(--ds-app-color-interactive-secondary-bg-active);
  }

  :host([clickable][active]),
  :host([decorative][active]) {
    --ds-indicator-background-color: var(--ds-app-color-interactive-secondary-bg-selected);
  }

  :host([configuration='sharp']) {
    --ds-indicator-border-radius: 0;
  }

  :host([configuration='rounded']) {
    --ds-indicator-border-radius: 12.5rem;
  }

  :host([indicator-style='subtle']) {
    --ds-indicator-width: 0.125rem;
  }

  :host([indicator-style='strong']) {
    --ds-indicator-width: 0.5rem;
  }

  :host([orientation='horizontal']) {
    --ds-indicator-height: 0.25rem;
    --ds-indicator-width: var(--ds-indicator-horizontal-width, 1.5rem);
  }

  :host([orientation='horizontal'][indicator-style='subtle']) {
    --ds-indicator-height: 0.125rem;
  }

  :host([orientation='horizontal'][indicator-style='strong']) {
    --ds-indicator-height: 0.5rem;
  }
`;var h=Object.defineProperty,p=Object.getOwnPropertyDescriptor,g=(t,o,r,i)=>{for(var a,e=i>1?void 0:i?p(o,r):o,s=t.length-1;s>=0;s--)(a=t[s])&&(e=(i?a(o,r,e):a(e))||e);return i&&e&&h(o,r,e),e};const b="reimagine-indicator";let y=class extends n{constructor(){super(...arguments),this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this.clickable=!1,this.active=!1}_handleSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length}_renderOptionalSlot(t,o){return e`
      <div part=${t} class=${t} style="${o?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}render(){return e`
      ${this._renderOptionalSlot("indicator__first",this._firstSlotEmpty)}
      <slot></slot>
      ${this._renderOptionalSlot("indicator__last",this._lastSlotEmpty)}
    `}};y.styles=[c],g([r({slot:"indicator__first"})],y.prototype,"_firstSlot",2),g([r({slot:"indicator__last"})],y.prototype,"_lastSlot",2),g([i()],y.prototype,"_firstSlotEmpty",2),g([i()],y.prototype,"_lastSlotEmpty",2),g([a({type:Boolean})],y.prototype,"clickable",2),g([a({type:Boolean})],y.prototype,"active",2),g([a({type:String,reflect:!0})],y.prototype,"configuration",2),g([a({type:String,reflect:!0})],y.prototype,"orientation",2),g([a({type:String,reflect:!0,attribute:"indicator-style"})],y.prototype,"indicatorStyle",2),y=g([s(b)],y);const v={rounded:"rounded"},u={vertical:"vertical",horizontal:"horizontal"};export{y as I,v as a,u as b,l as c,b as n};
