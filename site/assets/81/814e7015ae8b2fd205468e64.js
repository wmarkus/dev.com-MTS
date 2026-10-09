import{i as e,r as t,c as a,e as o,b as s,h as i}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i as r,s as l,d as n}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{b as d}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{b as c,v as m}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{n as u}from"/__mirror/assets/42f825e3dad9c53f1fc34d82";const g="image-first",h=e`
  :host {
    --ds-button-group-justify-content: flex-start;
    --ds-media-box-sizing: border-box;
    --ds-layout-column-display: flex;
    --ds-layout-column-align-items: center;
    --ds-media-width: 100%;
    --ds-media-height: 100%;
  }

  .base.supportive-fade,
  .base.neutral-fade,
  .base.neutral-color {
    --ds-heading-block-content-text-color: var(--ds-app-color-base-alt1-fg-body, #17253d);
  }

  .base.supportive-color {
    --ds-heading-block-content-text-color: var(--ds-app-color-base-alt2-fg-body, #3e143f);
  }

  .base.special-color {
    --ds-heading-block-content-text-color: var(--ds-app-color-base-special-fg-body, #3e143f);
  }

  :host([has-carousel]) {
    overflow: hidden;
  }

  ::slotted(reimagine-carousel) {
    --ds-carousel-full-bleed-inline-start: 0;
  }
`,b=e`
  @media (max-width: ${t(c(m.md))}) {
    :host {
      --ds-layout-row-gap: 3.5rem;
    }
  }
`;var p=Object.defineProperty,f=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,v=Reflect.get,x=(e,t,a,o)=>{for(var s,i=o>1?void 0:o?f(t,a):t,r=e.length-1;r>=0;r--)(s=e[r])&&(i=(o?s(t,a,i):s(i))||i);return o&&i&&p(t,a,i),i};const j="reimagine-section-with-media";let _=class extends d{_handleMediaSlotChange(){const e=this._mediaSlot.find(e=>r(e,u));this.toggleAttribute("has-carousel",!!e),e&&l(e,{"full-bleed":""})}_renderBlade(){const e={base:!0,[this.background??"_"]:!!this.background},t=s`
      <reimagine-layout-column>
        <slot name="header"></slot>
      </reimagine-layout-column>
      <reimagine-layout-column>
        <slot name="media" @slotchange=${this._handleMediaSlotChange}></slot>
      </reimagine-layout-column>
    `,a=s`
      <reimagine-layout-column>
        <slot name="media" @slotchange=${this._handleMediaSlotChange}></slot>
      </reimagine-layout-column>
      <reimagine-layout-column>
        <slot name="header"></slot>
      </reimagine-layout-column>
    `;return s`
      <reimagine-container part=${"base"} class="${i(e)}">
        <reimagine-layout configuration="2-col-even">
          ${this.configuration===g?a:t}
        </reimagine-layout>
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var w,S,$;_.styles=[...(w=_,S=_,$="styles",v(y(w),$,S)||[]),h,b],x([a({reflect:!0})],_.prototype,"configuration",2),x([o({slot:"media"})],_.prototype,"_mediaSlot",2),_=x([n(j)],_);export{_ as SectionWithMedia,j as name};
