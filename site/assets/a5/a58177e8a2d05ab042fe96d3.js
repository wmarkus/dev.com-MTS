import{b as t,e as s,f as e}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as o}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{C as r,s as l}from"/__mirror/assets/03f57ab24c107a836026fcc3";import{R as i}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";var a=Object.defineProperty,n=Object.getOwnPropertyDescriptor,p=(t,s,e,o)=>{for(var r,l=o>1?void 0:o?n(s,e):s,i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o?r(s,e,l):r(l))||l);return o&&l&&a(s,e,l),l};const h="reimagine-checkbox";let _=class extends(r(i)){constructor(){super(...arguments),this._firstSlotEmpty=!0,this._lastSlotEmpty=!0}_handleSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length}_renderOptionalSlot(s,e){return t`
      <div part=${s} class=${s} style=${e?"display: none;":""}>
        <slot name=${s} @slotchange=${this._handleSlotChange}></slot>
      </div>
    `}render(){return t`
      ${this._renderOptionalSlot("checkbox__first",this._firstSlotEmpty)} ${this.renderCheckbox()}
      ${this._renderOptionalSlot("checkbox__last",this._lastSlotEmpty)}
    `}};_.styles=[l],p([s({slot:"checkbox__first"})],_.prototype,"_firstSlot",2),p([s({slot:"checkbox__last"})],_.prototype,"_lastSlot",2),p([e()],_.prototype,"_firstSlotEmpty",2),p([e()],_.prototype,"_lastSlotEmpty",2),_=p([o(h)],_);export{_ as Checkbox,h as name};
