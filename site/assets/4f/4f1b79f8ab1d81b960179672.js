import{r as t,i as o,c as e,e as s,f as r,b as a}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{SurfaceElement as i}from"/__mirror/assets/e09cf4eae8f90fbcbeb198a9";import{i as l,a as n,d as p}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{c as d}from"/__mirror/assets/a0679f491075e7b16b00f1b4";import{S as h,T as c,k as m}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{name as _}from"/__mirror/assets/1744c47504083b26d862e98f";import{name as f}from"/__mirror/assets/ea6784fd34f0ec31a8e3ea36";import{B as y,j as S}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{n as b}from"/__mirror/assets/5d2e1bf3d87581457a2b76db";const g="column",u="var(--ds-app-space-micro-2xl, 3rem)",E="var(--ds-app-space-surface-comfortable, 1.5rem)",v="var(--ds-app-space-surface-comfortable, 1.5rem)",x="var(--ds-app-space-surface-comfortable, 1.5rem)",$="var(--ds-app-space-surface-comfortable, 1.5rem)",A=o`
  :host {
    /* Apply default or custom values to the host element */
    display: var(--ds-card-in-hero-display, ${t("flex")});
    flex-direction: var(
      --ds-card-in-hero-flex-direction,
      ${t(g)}
    );
    row-gap: var(--ds-card-in-hero-row-gap, ${t(u)});
    padding-inline-start: var(
      --ds-card-in-hero-padding-inline-start,
      ${t(E)}
    );
    padding-inline-end: var(
      --ds-card-in-hero-padding-inline-end,
      ${t(v)}
    );
    padding-block-start: var(
      --ds-card-in-hero-padding-block-start,
      ${t(x)}
    );
    padding-block-end: var(
      --ds-card-in-hero-padding-block-end,
      ${t($)}
    );

    --ds-text-block-body-gap: 'var(--ds-app-space-micro-xs, .5rem)';
  }

  :host([surface]) {
    --ds-badge-box-shadow: none;
    --ds-surface-box-shadow: none;
  }
`;var j=Object.defineProperty,k=Object.getOwnPropertyDescriptor,B=(t,o,e,s)=>{for(var r,a=s>1?void 0:s?k(o,e):o,i=t.length-1;i>=0;i--)(r=t[i])&&(a=(s?r(o,e,a):r(a))||a);return s&&a&&j(o,e,a),a};const C="reimagine-card-in-hero";let O=class extends i{constructor(){super(),this._topSlotEmpty=!0,this._bottomSlotEmpty=!0,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this.surface=h.glass}_handleSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length}_handleTopSlotChange(){if(this._topSlotEmpty=0===this._topSlot.length,!this._topSlotEmpty){const t=this._topSlot.filter(t=>l(t,_));t.length>0&&this._setTextBlockAttr(t)}}_handleBottomSlotChange(){if(this._bottomSlotEmpty=0===this._bottomSlot.length,!this._bottomSlotEmpty){const t=this._bottomSlot.filter(t=>l(t,f));t.length>0&&this._setButtonAttr(t)}}_setTextBlockAttr(t){t.forEach(t=>{const o=t;o.hasAttribute("size")||o.setAttribute("size",c["size-2xs"]),o.hasAttribute("configuration")||o.setAttribute("configuration",m.list)})}_setButtonAttr(t){t.forEach(t=>{const o=n(t,b);o&&o.length>0&&o.forEach(t=>{t.hasAttribute("size")||t.setAttribute("size",y.large),t.hasAttribute("shape")||t.setAttribute("shape",S.rounded)})})}_renderOptionalSlot(t="card-in-hero__first",o=this._firstSlotEmpty){return a`
      <div part=${t} class=${t} style="${o?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}render(){return a`
      ${this._renderOptionalSlot("card-in-hero__first",this._firstSlotEmpty)}
      <slot
        name="card-in-hero__top"
        @slotchange="${this._handleTopSlotChange}"
        style="${this._topSlotEmpty?"display: none;":""}"
      ></slot>
      <slot
        name="card-in-hero__bottom"
        @slotchange="${this._handleBottomSlotChange}"
        style="${this._bottomSlotEmpty?"display: none;":""}"
      ></slot>
      ${this._renderOptionalSlot("card-in-hero__last",this._lastSlotEmpty)}
    `}};O.styles=[d,A],B([e({reflect:!0})],O.prototype,"theme",2),B([s({slot:"card-in-hero__first"})],O.prototype,"_firstSlot",2),B([s({slot:"card-in-hero__last"})],O.prototype,"_lastSlot",2),B([s({slot:"card-in-hero__top"})],O.prototype,"_topSlot",2),B([s({slot:"card-in-hero__bottom"})],O.prototype,"_bottomSlot",2),B([r()],O.prototype,"_topSlotEmpty",2),B([r()],O.prototype,"_bottomSlotEmpty",2),B([r()],O.prototype,"_firstSlotEmpty",2),B([r()],O.prototype,"_lastSlotEmpty",2),O=B([p(C)],O);export{O as CardInHero,C as name};
