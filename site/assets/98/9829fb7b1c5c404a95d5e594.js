import{r as e,i as t,c as i,e as o,b as s}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{s as a,d as r}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{R as n}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{l,T as d}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import"/__mirror/assets/5f924eec6274a2d611fc1ea0";const c={color:"var(--ds-app-color-base-default-fg-heading, #0E1726)",fontSize:l.fontSize,lineHeight:l.lineHeight,fontWeight:l.fontWeight},g=t`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--ds-agenda-item-gap, ${e("var(--ds-app-space-micro-l, 1.5rem)")});
  }

  .title {
    font-size: var(--ds-agenda-item-title-font-size, ${e(c.fontSize)});
    line-height: var(
      --ds-agenda-item-title-line-height,
      ${e(c.lineHeight)}
    );
    font-weight: var(
      --ds-agenda-item-title-font-weight,
      ${e(c.fontWeight)}
    );
    color: var(--ds-agenda-item-title-color, ${e(c.color)});
  }

  .description ::slotted(reimagine-text-block[size='2xs']) {
    --ds-text-block-gap: var(--ds-app-space-micro-2xs, 0.25rem);
  }
`;var m=Object.defineProperty,p=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,f=Reflect.get,u=(e,t,i,o)=>{for(var s,a=o>1?void 0:o?p(t,i):t,r=e.length-1;r>=0;r--)(s=e[r])&&(a=(o?s(t,i,a):s(a))||a);return o&&a&&m(t,i,a),a};const v="reimagine-agenda-item";let y=class extends n{constructor(){super(...arguments),this.hideDivider=!1}_handleSlotChange(){if(this._descriptionSlot.length>0){const e=this._descriptionSlot[0];e instanceof HTMLElement&&!e.hasAttribute("size")&&a(e,{size:d["size-2xs"]})}}render(){return s`
      <reimagine-layout configuration="2-col-offset-right">
        <reimagine-layout-column part="title" class="title">
          <slot name="title"></slot>
        </reimagine-layout-column>
        <reimagine-layout-column part="description" class="description">
          <slot name="description" @slotchange=${this._handleSlotChange}></slot>
        </reimagine-layout-column>
      </reimagine-layout>
      ${this.hideDivider?"":s`<reimagine-divider></reimagine-divider>`}
    `}};var x,b,z;y.styles=[...(x=y,b=y,z="styles",f(h(x),z,b)||[]),g],u([i({type:Boolean,attribute:"hide-divider",reflect:!0})],y.prototype,"hideDivider",2),u([o({slot:"description"})],y.prototype,"_descriptionSlot",2),y=u([r(v)],y);export{y as AgendaItem,v as name};
