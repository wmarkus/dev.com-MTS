import{r as t,i,c as e,g as r,e as a,f as s,b as d}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i as o,d as l}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{a as n}from"/__mirror/assets/daab3f96e18c70a4751d1a7b";import{v as m}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{T as p,k as h,D as c}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{name as f}from"/__mirror/assets/1744c47504083b26d862e98f";import{Divider as v}from"/__mirror/assets/5f924eec6274a2d611fc1ea0";import{R as g}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";const u={gap:n.s.value,dividerGap:n.s.value,mediaWidth:"240px",maxWidth:"100%"},x=i`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--ds-card-editorial-gap, ${t(u.gap)});
    max-width: var(--ds-card-editorial-max-width, ${t(u.maxWidth)});
  }

  .text-with-divider {
    display: flex;
    flex-direction: column;
    gap: var(--ds-card-editorial-divider-gap, ${t(u.dividerGap)});
  }

  ::slotted(reimagine-media) {
    --ds-media-asset-border-start-start-radius: var(--ds-app-radii-m, 1rem);
    --ds-media-asset-border-end-start-radius: var(--ds-app-radii-m, 1rem);
    --ds-media-asset-border-end-end-radius: var(--ds-app-radii-m, 1rem);
    --ds-media-asset-border-start-end-radius: var(--ds-app-radii-m, 1rem);
    --ds-media-display: block;
  }

  :host([configuration='medium']) ::slotted(reimagine-divider) {
    display: none;
  }

  :host([configuration='small']) .media {
    width: var(--ds-card-editorial-media-width, inherit);
  }
`,y=i`
  /* Medium viewport */
  @media (min-width: ${t(m.md)}) {
    :host {
      gap: var(--ds-card-editorial-gap, ${t(n.m.value)});
      align-items: flex-start;
    }

    .text-with-divider {
      display: flex;
      flex-direction: column;
      gap: var(--ds-card-editorial-divider-gap, ${t(n.m.value)});
      flex-grow: 1;
    }

    :host([configuration='small']) {
      --ds-card-editorial-columns: 2;
      flex-direction: row;
      max-width: var(--ds-card-editorial-max-width, 548px);
    }

    :host([configuration='small'][text-first]) {
      flex-direction: row-reverse;
      justify-content: flex-end;
    }

    :host([configuration='small']) .media {
      width: var(--ds-card-editorial-media-width, ${t(u.mediaWidth)});
      flex-shrink: 0;
    }
  }
`,_="medium";var S=Object.defineProperty,w=Object.getOwnPropertyDescriptor,b=(t,i,e,r)=>{for(var a,s=r>1?void 0:r?w(i,e):i,d=t.length-1;d>=0;d--)(a=t[d])&&(s=(r?a(i,e,s):a(s))||s);return r&&s&&S(i,e,s),s};const $="reimagine-card-editorial";let E=class extends g{constructor(){super(...arguments),this.configuration=_,this.textFirst=!1,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._mediaSlotEmpty=!0}get _divider(){return(this._assignedDivider??[]).filter(t=>t instanceof v)}_handleSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length,this._mediaSlotEmpty=0===this._mediaSlot.length}_textBlockSlotChanged(t){t.target.assignedNodes().filter(t=>t instanceof HTMLElement&&o(t,f)).forEach(t=>{t.hasAttribute("size")||t.setAttribute("size",p["size-2xs"]),t.hasAttribute("configuration")||t.setAttribute("configuration",h.default)})}_dividerSlotChanged(){this._divider&&this._divider.forEach(t=>{t.hasAttribute("size")||t.setAttribute("size",c.s)})}_renderOptionalSlot(t,i){return d`
      <div part=${t} class=${t} style="${i?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}render(){return d`
      ${this._renderOptionalSlot("first",this._firstSlotEmpty)}
      ${this._renderOptionalSlot("media",this._mediaSlotEmpty)}
      <div part="text-with-divider" class="text-with-divider">
        <slot name="divider" @slotchange=${this._dividerSlotChanged}></slot>
        <slot @slotchange=${this._textBlockSlotChanged}></slot>
      </div>
      ${this._renderOptionalSlot("last",this._lastSlotEmpty)}
    `}};E.styles=[x,y],b([e({reflect:!0,type:String})],E.prototype,"configuration",2),b([r({slot:"divider"})],E.prototype,"_assignedDivider",2),b([e({reflect:!0,type:Boolean,attribute:"text-first"})],E.prototype,"textFirst",2),b([a({slot:"first"})],E.prototype,"_firstSlot",2),b([a({slot:"last"})],E.prototype,"_lastSlot",2),b([a({slot:"media"})],E.prototype,"_mediaSlot",2),b([s()],E.prototype,"_firstSlotEmpty",2),b([s()],E.prototype,"_lastSlotEmpty",2),b([s()],E.prototype,"_mediaSlotEmpty",2),E=b([l($)],E);export{E as CardEditorial,$ as name};
