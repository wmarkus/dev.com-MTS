import{r as t,i as e,e as s,f as l,c as a,b as o}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{R as r}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{d as i}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{l as p,t as n,e as m,f as d}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{v as h}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";const c="column",g="var(--ds-app-space-micro-xs, 0.5rem)",f="0",v="var(--ds-app-color-base-default-fg-heading, #0e1726)",b="none",S="flex",$="column",y="var(--ds-app-space-micro-3xs, 0.125rem)",u="500",x="-0.025em",_="-0.015em",z="var(--ds-app-color-base-default-fg-heading, #0E1726)",w=e`
  :host {
    display: var(--ds-statement-display, ${t("flex")});
    flex-direction: var(
      --ds-statement-flex-direction,
      ${t(c)}
    );
    gap: var(--ds-statement-gap, ${t(g)});
  }

  .top-label {
    font-weight: var(
      --ds-statement-top-label-font-weight,
      ${t(p.fontWeight)}
    );
    font-size: var(--ds-statement-top-label-font-size, ${t(p.fontSize)});
    line-height: var(
      --ds-statement-top-label-line-height,
      ${t(p.lineHeight)}
    );
    letter-spacing: var(
      --ds-statement-top-label-letter-spacing,
      ${t(f)}
    );
    color: var(--ds-statement-top-label-color, ${t(v)});
  }

  ::slotted(a[slot='label-superscript']) {
    text-decoration: var(
      --ds-statement-top-label-superscript-text-decoration,
      ${t(b)}
    );
    color: var(
      --ds-statement-top-label-superscript-color,
      ${t(v)}
    ) !important;
  }

  .text-wrapper {
    display: var(
      --ds-statement-text-wrapper-display,
      ${t(S)}
    );
    flex-direction: var(
      --ds-statement-text-wrapper-flex-direction,
      ${t($)}
    );
    gap: var(
      --ds-statement-text-wrapper-gap,
      ${t(y)}
    );
  }

  :host([size='medium']) .text-wrapper,
  :host([size='small']) .text-wrapper {
    --ds-statement-text-wrapper-gap: var(--ds-app-space-micro-2xs, 0.25rem);
  }

  ::slotted([slot='title']) {
    font-weight: var(
      --ds-statement-title-slot-font-weight,
      ${t(u)}
    );
    color: var(
      --ds-statement-title-slot-color,
      ${t(z)}
    );
  }

  :host([size='large']) ::slotted([slot='title']) {
    font-size: var(
      --ds-statement-title-slot-font-size-large,
      ${t(n.fontSize)}
    );
    line-height: var(
      --ds-statement-title-slot-line-height-large,
      ${t(n.lineHeight)}
    );
    letter-spacing: var(
      --ds-statement-title-slot-letter-spacing-large,
      ${t(x)}
    );
  }

  :host([size='medium']) ::slotted([slot='title']) {
    font-size: var(
      --ds-statement-title-slot-font-size-medium,
      ${t(m.fontSize)}
    );
    line-height: var(
      --ds-statement-title-slot-line-height-medium,
      ${t(m.lineHeight)}
    );
    letter-spacing: var(
      --ds-statement-title-slot-letter-spacing-medium,
      ${t(x)}
    );
  }

  :host([size='small']) ::slotted([slot='title']) {
    font-size: var(
      --ds-statement-title-slot-font-size-small,
      ${t(d.fontSize)}
    );
    line-height: var(
      --ds-statement-title-slot-line-height-small,
      ${t(d.lineHeight)}
    );
    letter-spacing: var(
      --ds-statement-title-slot-letter-spacing-small,
      ${t(_)}
    );
  }
`,E=e`
  @media (max-width: ${t(h.md)}) {
    :host([size='large']) .text-wrapper {
      --ds-statement-text-wrapper-gap: var(--ds-app-space-micro-2xs, 0.25rem);
    }
  }
`,j="medium";var O=Object.defineProperty,C=Object.getOwnPropertyDescriptor,H=Object.getPrototypeOf,P=Reflect.get,L=(t,e,s,l)=>{for(var a,o=l>1?void 0:l?C(e,s):e,r=t.length-1;r>=0;r--)(a=t[r])&&(o=(l?a(e,s,o):a(o))||o);return l&&o&&O(e,s,o),o};const R="reimagine-statement";let T=class extends r{constructor(){super(...arguments),this._labelSlotEmpty=!0,this._labelSuperscriptSlotEmpty=!0,this._footerSlotEmpty=!0,this.size=j}_handleSlotChange(){this._labelSlotEmpty=0===this._labelSlot.length,this._labelSuperscriptSlotEmpty=0===this._labelSuperscriptSlot.length,this._footerSlotEmpty=0===this._footerSlot.length}_renderOptionalSlot(t,e){return o`
      <div part=${t} class=${t} style="${e?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_renderTopLabel(){return o`
      <div
        part="top-label"
        class="top-label"
        style="${this._labelSlotEmpty&&this._labelSuperscriptSlotEmpty?"display: none;":""}"
      >
        <slot name="label" @slotchange="${this._handleSlotChange}"></slot>
        <sup style="${this._labelSuperscriptSlotEmpty?"display: none;":""}">
          <slot name="label-superscript" @slotchange="${this._handleSlotChange}"></slot>
        </sup>
      </div>
    `}render(){return o`
      ${this._renderTopLabel()}
      <div part="text-wrapper" class="text-wrapper">
        <slot name="title"></slot>
        ${this._renderOptionalSlot("footer",this._footerSlotEmpty)}
      </div>
    `}};var k,D,W;T.styles=[...(k=T,D=T,W="styles",P(H(k),W,D)||[]),w,E],L([s({slot:"label"})],T.prototype,"_labelSlot",2),L([s({slot:"label-superscript"})],T.prototype,"_labelSuperscriptSlot",2),L([s({slot:"footer"})],T.prototype,"_footerSlot",2),L([l()],T.prototype,"_labelSlotEmpty",2),L([l()],T.prototype,"_labelSuperscriptSlotEmpty",2),L([l()],T.prototype,"_footerSlotEmpty",2),L([a({reflect:!0,attribute:"size"})],T.prototype,"size",2),T=L([i(R)],T);export{T as Statement,R as name};
