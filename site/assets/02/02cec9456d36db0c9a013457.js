import{r as t,i as e,c as s,e as l,f as i,b as a}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as o}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{a as r}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{R as n}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";const c="flex",p="var(--ds-app-space-micro-xs, 0.5rem)",h="column",d=e`
  :host {
    gap: var(--ds-checklist-gap, ${t(p)});
    display: var(--ds-checklist-display, ${t(c)});
    flex-direction: var(--ds-checklist-flex-direction, ${t(h)});
  }

  ul {
    list-style-type: none;
    display: var(--ds-checklist-display, ${t(c)});
    flex-direction: var(--ds-checklist-flex-direction, ${t(h)});
    padding: 0;
    margin: 0;
    gap: var(--ds-checklist-gap, ${t(p)});
  }
`;var m=Object.defineProperty,f=Object.getOwnPropertyDescriptor,g=(t,e,s,l)=>{for(var i,a=l>1?void 0:l?f(e,s):e,o=t.length-1;o>=0;o--)(i=t[o])&&(a=(l?i(e,s,a):i(a))||a);return l&&a&&m(e,s,a),a};const y="reimagine-checklist";let _=class extends n{constructor(){super(...arguments),this.configuration=r.small,this._labelSlotEmpty=!0}_renderOptionalSlot(t="label",e=this._labelSlotEmpty){return a`
      <div part=${t} class=${t} style="${e?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_handleSlotChange(){this._labelSlotEmpty=0===this._labelSlot.length,this._listItems.length>0&&this._listItems.forEach(t=>{t.nodeType===Node.ELEMENT_NODE&&(t.setAttribute("role","listitem"),t.setAttribute("configuration",this.configuration??""))})}render(){return a`
      ${this._renderOptionalSlot("label",this._labelSlotEmpty)}
      <ul>
        <slot name="checklist__items" @slotchange=${this._handleSlotChange}></slot>
      </ul>
    `}};_.styles=[d],g([s({reflect:!0,attribute:"configuration"})],_.prototype,"configuration",2),g([l({slot:"checklist__items",flatten:!0})],_.prototype,"_listItems",2),g([l({slot:"label",flatten:!0})],_.prototype,"_labelSlot",2),g([i()],_.prototype,"_labelSlotEmpty",2),_=g([o(y)],_);export{_ as CheckList,y as name};
