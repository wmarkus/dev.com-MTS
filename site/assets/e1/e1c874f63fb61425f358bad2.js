import{i as e,r as a,b as t,h as s}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{q as i,s as o,i as r,d as n}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{b as l,H as d,f as c,M as m,g}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{b as h,v as p}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";const u=e`
  .media {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  ::part(layout__base) {
    --ds-grid-column-gap: var(--ds-app-space-layout-stack-comfortable, 3rem);
    --ds-layout-column-gap: var(--ds-app-space-layout-stack-comfortable, 3rem);
  }

  ::slotted(reimagine-heading-block) {
    --ds-heading-block-body-gap: var(--ds-app-space-micro-2xl, 3rem);
    --ds-heading-block-content-text-font-size: var(--ds-app-type-body-m-font-size, 1rem);
    --ds-heading-block-eyebrow-label-font-size: var(--ds-app-type-heading-2xs-font-size, 1.125rem);
  }
`,b=e`
  @media (max-width: ${a(h(p.md))}) {
    :host {
      --ds-layout-row-gap: var(--ds-app-space-micro-2xl, 2rem);
    }
  }
`;var y=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,v=Reflect.get;const _="reimagine-hero-dynamic-text";let k=class extends l{constructor(){super(...arguments),this._boundSlotChange=this._slotChangeHandler.bind(this)}_slotChangeHandler(){this._updateHeadingBlockDefaults(),this._updateMediaDefaults()}_updateHeadingBlockDefaults(){const e=i(this,"reimagine-heading-block");e&&o(e,{size:d["size-2xl"]})}_updateMediaDefaults(){const e=this.querySelector('[slot="media"]');if(e&&r(e,"reimagine-media")){const a={type:g.highlightGlass,"aspect-ratio":m.ratio1to1,"drop-shadow":"true","border-width":c.s};o(e,a)}}_renderBlade(){const e={base:!0,[this.background??"_"]:!!this.background},a=t`
      <reimagine-layout-column>
        <div class="media" part="media">
          <slot name="media" @slotchange="${this._boundSlotChange}"></slot>
        </div>
      </reimagine-layout-column>
      <reimagine-layout-column>
        <div class="header" part="header">
          <slot name="header" @slotchange="${this._boundSlotChange}"></slot>
        </div>
      </reimagine-layout-column>
    `;return t`
      <reimagine-container part=${"base"} class="${s(e)}">
        <reimagine-layout configuration="${this.headerLayoutConfiguration||"2-col-even"}">
          ${a}
        </reimagine-layout>
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var x,j,w;k.styles=[...(x=k,j=k,w="styles",v(f(x),w,j)||[]),u,b],k=((e,a,t,s)=>{for(var i,o=s>1?void 0:s?y(a,t):a,r=e.length-1;r>=0;r--)(i=e[r])&&(o=i(o)||o);return o})([n(_)],k);export{k as HeroDynamicText,_ as name};
