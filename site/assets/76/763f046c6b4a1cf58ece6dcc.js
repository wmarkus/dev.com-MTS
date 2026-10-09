import{r as e,i as t,g as s,e as i,c as n,f as o,b as l}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i as a,d as r}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{s as c}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{C as d}from"/__mirror/assets/68715377d2d0e5c736890372";import{name as p}from"/__mirror/assets/a58177e8a2d05ab042fe96d3";const h="var(--ds-app-space-micro-s, 0.75rem)",m="32px",k="var(--ds-app-space-micro-2xs, 0.25rem)",_="var(--ds-app-space-micro-xs, 0.5rem)",b=t`
  :host {
    display: var(--ds-filter-item-with-nested-list-display, ${e("flex")});
    gap: var(--ds-filter-item-with-nested-list-gap, ${e(h)});
    min-height: var(
      --ds-filter-item-with-nested-list-min-height,
      ${e(m)}
    );
    padding-inline-start: var(
      --ds-filter-item-with-nested-list-padding-inline-start,
      ${e(_)}
    );
    padding-block-start: var(
      --ds-filter-item-with-nested-list-padding-block-start,
      ${e(k)}
    );

    --ds-filter-item-with-nested-list-display: flex;
    --ds-collapse-button-padding: auto;
    --ds-collapse-content-padding: auto;
    --ds-collapse-content-gap: var(--ds-app-space-micro-m, 1rem);
    --ds-collapse-title-font-size: ${e(c.fontSize)};
    --ds-collapse-icon-color: var(--ds-app-color-interactive-secondary-fg-default, #2a446f);
    --ds-collapse-content-margin-inline-start: calc(-1 * (var(--ds-app-space-micro-l, 1.5rem) - 0.125rem));
    --ds-collapse-content-padding-block-start: var(--ds-app-space-micro-m, 1rem);
    --ds-collapse-title-width: 100%;
  }

  :host([leading-element]) {
    --ds-collapse-content-margin-inline-start: calc(-1 * (var(--ds-app-space-micro-4xl, 6rem) - 0.45rem));
  }

  :host([disabled]) {
    pointer-events: none;
    opacity: 0.2;
  }
`;var g=Object.defineProperty,v=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,C=Reflect.get,y=(e,t,s,i)=>{for(var n,o=i>1?void 0:i?v(t,s):t,l=e.length-1;l>=0;l--)(n=e[l])&&(o=(i?n(t,s,o):n(o))||o);return i&&o&&g(t,s,o),o};const E="reimagine-filter-item-with-nested-list";let x=class extends d{constructor(){super(...arguments),this.leadingElement=!1,this.controlSize="small",this._checkboxElements=[],this._leadingElementSlotEmpty=!0,this._nestedItemFirstSlotEmpty=!0,this._nestedItemLastSlotEmpty=!0,this._onParentCheckboxClick=e=>{const t=e.target,{checked:s}=t;this._findChildCheckboxes().forEach(t=>{t.checked!==s&&(t.checked=s,t.dispatchEvent(new Event(e.type,{bubbles:!0,composed:!0})))})},this._onChildCheckboxClick=()=>{const e=this._findParentCheckbox(),t=this._findChildCheckboxes();if(!e||0===t.length)return;const s=t.every(e=>e.checked),i=t.every(e=>!e.checked);e.checked=s,s||i?e.removeAttribute("indeterminate"):e.setAttribute("indeterminate","")}}_renderOptionalSlot(e,t){return l`
      <div part=${e} class=${e} style="${t?"display: none;":""}">
        <slot name=${e} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_handleSlotChange(){this._leadingElementSlotEmpty=0===this._leadingElementSlot.length;const e=this._findParentCheckbox();null==e||e.setAttribute("size",this.controlSize||"small")}_findParentCheckbox(){var e;return null==(e=this._parentCheckboxes)?void 0:e[0]}_findChildCheckboxes(){this._checkboxElements=this._collapseAssignedElements??[];const e=t=>t.flatMap(t=>(a(t,p)?[t]:[]).concat(e(Array.from(t.children))));return e(this._checkboxElements)}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._setupEventListeners()})}_setupEventListeners(){const e=this._findParentCheckbox();e&&e.addEventListener("click",this._onParentCheckboxClick),this._findChildCheckboxes().forEach(e=>{e.addEventListener("click",this._onChildCheckboxClick)})}_removeEventListeners(){const e=this._findParentCheckbox();e&&e.removeEventListener("click",this._onParentCheckboxClick),this._findChildCheckboxes().forEach(e=>{e.removeEventListener("click",this._onChildCheckboxClick)})}disconnectedCallback(){this._removeEventListeners(),super.disconnectedCallback()}render(){return l`
      ${this._renderOptionalSlot("nested-item-first",this._nestedItemFirstSlotEmpty)}
      <div class="nested-item-control" part="nested-item-control">
        <slot name="nested-item-control" @slotchange="${this._handleSlotChange}"></slot>
      </div>
      ${this._renderOptionalSlot("nested-item-leading-element",this._leadingElementSlotEmpty)}
      ${this.collapseTemplate()}
      ${this._renderOptionalSlot("nested-item-last",this._nestedItemLastSlotEmpty)}
    `}};var u,S,$;x.styles=[...(u=x,S=x,$="styles",C(f(u),$,S)||[]),b],y([s({slot:"nested-item-control"})],x.prototype,"_parentCheckboxes",2),y([s()],x.prototype,"_collapseAssignedElements",2),y([i({slot:"nested-item-leading-element"})],x.prototype,"_leadingElementSlot",2),y([n({type:Boolean,attribute:"leading-element"})],x.prototype,"leadingElement",2),y([n({type:String,attribute:"control-size"})],x.prototype,"controlSize",2),y([o()],x.prototype,"_checkboxElements",2),y([o()],x.prototype,"_leadingElementSlotEmpty",2),y([o()],x.prototype,"_nestedItemFirstSlotEmpty",2),y([o()],x.prototype,"_nestedItemLastSlotEmpty",2),x=y([r(E)],x);export{x as FilterItemWithNestedList,E as name};
