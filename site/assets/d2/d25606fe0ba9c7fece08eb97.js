import{i as e,r as t,b as i,h as o}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as a}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{v as r,b as s}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{b as n,c as d}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";const l=e`
  :host {
    --ds-layout-column-display: flex;
    --ds-layout-column-justify-content: center;
    --ds-media-slot-max-width: 100vw;
    --ds-media-slot-padding-inline: var(--ds-app-space-micro-m);
    max-height: 1600px;
    min-height: 700px;
    overflow-x: hidden;
    padding-top: 240px;
  }

  :host .ui-shell-media ::slotted(reimagine-media) {
    max-height: 1200px;
  }
`,m=e`
  /* VP2 */
  @media (min-width: ${t(r.sm)}) {
    :host {
      padding-top: 285px;
    }
  }

  /* VP1 - mobile portrait (up to sm breakpoint) */
  @media (max-width: ${t(s(r.sm))}) {
    :host {
      --ds-heading-block-heading-text-word-break: break-word;
    }
  }
`;var c=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,u=Reflect.get;const p="reimagine-hero-featured-xl-video";let g=class extends n{_renderBlade(){const e={base:!0,[this.background||"_"]:!!this.background},t=i`
      <reimagine-layout configuration=${d.col1focus} part="body">
        <reimagine-layout-column>
          <slot></slot>
        </reimagine-layout-column>
      </reimagine-layout>
    `;return i`
      <reimagine-container part=${"base"} class="${o(e)}">
        ${t}
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}connectedCallback(){super.connectedCallback(),this.breadth=(null==this?void 0:this.breadth)||"comfortable",this.headerLayoutConfiguration=(null==this?void 0:this.headerLayoutConfiguration)||d.col1focus}};var b,f,x;g.styles=[...(b=g,f=g,x="styles",u(h(b),x,f)||[]),l,m],g=((e,t,i,o)=>{for(var a,r=o>1?void 0:o?c(t,i):t,s=e.length-1;s>=0;s--)(a=e[s])&&(r=a(r)||r);return r})([a(p)],g);export{g as HeroFeaturedXlVideo,p as name};
