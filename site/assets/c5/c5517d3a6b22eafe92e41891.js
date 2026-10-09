import{r as t,i as e,c as i,e as s,f as a,b as o}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i as l,d as r}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{l as n,r as c,a as d,S as p,p as m}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{SurfaceElement as g}from"/__mirror/assets/e09cf4eae8f90fbcbeb198a9";import{name as h}from"/__mirror/assets/9bce10b1f8f8949b4fd224b8";import{B as f,a as _}from"/__mirror/assets/4230c2711e37b2e85105da0e";import{n as u,a as v}from"/__mirror/assets/34233ee5ac8acdb3aa831b25";import{name as S}from"/__mirror/assets/e03438b5798d9e90c6c162a8";const k="flex",E="row",$="center",y="var(--ds-app-radii-s)",b="var(--ds-app-color-base-default-fg-heading)",x=e`
  :host {
    gap: var(--ds-checklist-item-gap, ${t("var(--ds-app-space-micro-xs, 0.5rem)")});
    display: var(--ds-checklist-item-display, ${t(k)});
    color: var(--ds-checklist-item-color, ${t(b)});
    align-items: var(--ds-checklist-item-aligment, ${t($)});
    flex-direction: var(
      --ds-checklist-item-flex-direction,
      ${t(E)}
    );
  }

  ::slotted([slot='checklist-item__title']) {
    font-weight: var(--ds-checklist-item-font-weight, ${t(n.fontWeight)});
    font-size: var(--ds-checklist-item-font-size, ${t(n.fontSize)});
    line-height: var(
      --ds-checklist-item-line-height,
      ${t(n.lineHeight)}
    ) !important;

    letter-spacing: var(
      --ds-checklist-item-item-spacing,
      ${t(n.letterSpacing)}
    ) !important;
  }

  :host([configuration='large']) {
    --ds-checklist-item-gap: var(--ds-app-space-micro-l);
    --ds-surface-border-radius: ${t(y)};
    --ds-checklist-item-width: var(27rem);
    --ds-checklist-item-font-weight: ${t(c.fontWeight)};
    --ds-checklist-item-font-size: ${t(c.fontSize)};
    --ds-checklist-item-line-height: ${t(c.lineHeight)};
    --ds-checklist-item-item-spacing: ${t(c.letterSpacing)};

    padding-block-start: var(--ds-app-space-micro-s);
    padding-block-end: var(--ds-app-space-micro-s);
    padding-inline-start: var(--ds-app-space-micro-l);
    padding-inline-end: var(--ds-app-space-micro-l);
  }

  :host([configuration='large']) ::slotted(reimagine-badge[surface='glass']) {
    --ds-icon-color: var(
      --ds-app-color-base-default-fg-accent,
      #0078d4
    );
  }
`;var z=Object.defineProperty,O=Object.getOwnPropertyDescriptor,A=(t,e,i,s)=>{for(var a,o=s>1?void 0:s?O(e,i):e,l=t.length-1;l>=0;l--)(a=t[l])&&(o=(s?a(e,i,o):a(o))||o);return s&&o&&z(e,i,o),o};const j="reimagine-checklist-item";let N=class extends g{constructor(){super(...arguments),this.configuration=d.small,this._popOverSlotEmpty=!0,this._leadingElementSlotEmpty=!0}_renderSlot(t){return o`
      <div part=${t} class=${t}>
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_renderConditionalSlot(t,e){return o`
      <div part=${t} class=${t} style="${e?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_handleSlotChange(t){this._popOverSlotEmpty=0===this._popOverSlot.length,this._leadingElementSlotEmpty=0===this._leadingElementSlot.length,this.configuration===d.large&&(this.surface=p.special),"checklist-item__leading-element"===t.target.name&&!this._leadingElementSlotEmpty&&this._updateLeadingSlotAtrributes()}_handleTagSlotChange(){const t=this._tagSlot.find(t=>t.nodeType===Node.ELEMENT_NODE&&l(t,S));(!t.getAttribute("size")||t.getAttribute("size")!==m.small)&&t.setAttribute("size",m.small)}_updateLeadingSlotAtrributes(){if(this.configuration===d.large){const t=this._leadingElementSlot.find(t=>t.nodeType===Node.ELEMENT_NODE&&l(t,h));t.getAttribute("size")||t.setAttribute("size",f.s),t.getAttribute("surface")||t.setAttribute("surface",_.solidBorder)}else{const t=this._leadingElementSlot.find(t=>t.nodeType===Node.ELEMENT_NODE&&l(t,u));t.getAttribute("size")||t.setAttribute("size",v.medium)}}render(){return o`
      ${this._renderSlot("checklist-item__leading-element")}
      <slot name="checklist-item__tag" @slotchange="${this._handleTagSlotChange}"></slot>
      <slot name="checklist-item__title"></slot>
      ${this._renderConditionalSlot("checklist-item__popover",this._popOverSlotEmpty)}
    `}};N.styles=[x],A([i({reflect:!0,attribute:"configuration"})],N.prototype,"configuration",2),A([s({slot:"checklist-item__popover"})],N.prototype,"_popOverSlot",2),A([s({slot:"checklist-item__leading-element"})],N.prototype,"_leadingElementSlot",2),A([s({slot:"checklist-item__tag"})],N.prototype,"_tagSlot",2),A([a()],N.prototype,"_popOverSlotEmpty",2),A([a()],N.prototype,"_leadingElementSlotEmpty",2),N=A([r(j)],N);export{N as CheckListItem,j as checkListItemName};
