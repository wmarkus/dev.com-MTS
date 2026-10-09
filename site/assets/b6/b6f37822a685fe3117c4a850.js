import{r as a,i as e,c as r,b as s}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i,a as t,s as o,d as n}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{v as c,b as l,c as d,A as m}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{v as u}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{n as g}from"/__mirror/assets/42f825e3dad9c53f1fc34d82";const p=e`
  :host {
    --ds-container-flex-direction: column;
    --ds-container-gap: var(--ds-app-space-layout-stack-cozy);
    --ds-tab-panel-padding-top: var(--ds-app-space-micro-2xl);
    --ds-container-display: block;
    --ds-card-banner-margin-block-end: var(--ds-app-space-micro-2xl);
    --ds-card-feature-top-flex: 0;
    --ds-ui-shell-gap: var(--ds-app-space-layout-stack-cozy, 2rem);
    --ds-tabs-base-margin-block-end: var(--ds-app-space-layout-stack-cozy, 2rem);
    --ds-carousel-item-margin: var(--ds-app-space-micro-2xs, 0.5rem);
    --ds-carousel-base-margin: calc(-1 * var(--ds-app-space-micro-2xs, 0.5rem));
    --ds-carousel-item-margin-block-start: var(--ds-carousel-item-margin);
    --ds-carousel-item-margin-inline-start: var(--ds-carousel-item-margin);
    --ds-carousel-item-margin-block-end: var(--ds-carousel-item-margin);
    --ds-carousel-item-margin-inline-end: var(--ds-carousel-item-margin);
    --ds-carousel-base-margin-block-start: var(--ds-carousel-base-margin);
    --ds-carousel-base-margin-inline-start: var(--ds-carousel-base-margin);
    --ds-carousel-base-margin-block-end: var(--ds-carousel-base-margin);
    --ds-carousel-base-margin-inline-end: var(--ds-carousel-base-margin);
    --ds-scrollslider-item-default-height: calc(100% - 2 * var(--ds-app-space-micro-2xs, 0.5rem));
    --ds-carousel-item-outline-offset: ${c};

    overflow-x: var(--ds-carousel-card-grid-overflow-x, ${a("hidden")});
  }
`,b=e`
  @media (max-width: ${a(u.md)}) {
    :host {
      --ds-carousel-item-margin: var(--ds-app-space-micro-3xs, 0.125rem);
      --ds-carousel-base-margin: calc(-1 * var(--ds-app-space-micro-3xs, 0.125rem));
      --ds-carousel-item-margin-block-start: var(--ds-carousel-item-margin);
      --ds-carousel-item-margin-inline-start: var(--ds-carousel-item-margin);
      --ds-carousel-item-margin-block-end: var(--ds-carousel-item-margin);
      --ds-carousel-item-margin-inline-end: var(--ds-carousel-item-margin);
      --ds-carousel-base-margin-block-start: var(--ds-carousel-base-margin);
      --ds-carousel-base-margin-inline-start: var(--ds-carousel-base-margin);
      --ds-carousel-base-margin-block-end: var(--ds-carousel-base-margin);
      --ds-carousel-base-margin-inline-end: var(--ds-carousel-base-margin);
      --ds-scrollslider-item-default-height: calc(100% - 2 * var(--ds-app-space-micro-3xs, 0.125rem));
      --ds-card-banner-height: 100%;
      --ds-card-banner-top-flex: 0;
      --ds-card-banner-content-justify-content: space-between;
    }
  }
`,v="default",f="two-featured",y="three-featured",h="stacked",x="vertical",k="horizontal";var _=Object.defineProperty,j=Object.getOwnPropertyDescriptor,w=Object.getPrototypeOf,$=Reflect.get,A=(a,e,r,s)=>{for(var i,t=s>1?void 0:s?j(e,r):e,o=a.length-1;o>=0;o--)(i=a[o])&&(t=(s?i(e,r,t):i(t))||t);return s&&t&&_(e,r,t),t};const C="reimagine-carousel-card-grid";let O=class extends l{constructor(){super(...arguments),this.configuration=v}updated(a){super.updated(a),a.has("configuration")&&this._updateConfiguration()}_updateConfiguration(){const a=Array.from(this.querySelectorAll("*")).filter(a=>i(a,g));if(0===a.length)return;const e={[v]:{layout:d.card1,card:k},[f]:{layout:d.card2Alt,card:x},[y]:{layout:d.card3,card:x},[h]:{layout:d.card3,card:x}},{layout:r,card:s}=e[this.configuration]||e[v];a.forEach(a=>{let e=1;a.setAttribute("layout-configuration",r),t(a,"reimagine-card-feature").forEach(a=>{a.setAttribute("configuration",s),this.animationEnter===m.effect2&&o(a,{"animation-enter":m.slideInRight,"animation-view":"scroll","animation-delay":"delay-"+e%4}),e++})})}renderDefaultTemplate(){return s`
      <reimagine-layout
        configuration="${d.col1even}"
        class="carousel-card-grid__layout"
        part="carousel-card-grid__layout"
      >
        <reimagine-layout-column>
          <div part="carousel-card-grid__content" class="carousel-card-grid__content">
            <slot name="carousel-card-grid__content"></slot>
          </div>
        </reimagine-layout-column>
      </reimagine-layout>

      <!-- Default slot used exclusively for the pill bar variant -->
      <reimagine-layout configuration="${d.col1even}">
        <reimagine-layout-column>
          <slot></slot>
        </reimagine-layout-column>
      </reimagine-layout>
    `}_renderBlade(){const a=this.renderDefaultTemplate();return this.baseContent?s` <div>${a}</div> `:s` <reimagine-container> ${a} </reimagine-container> `}render(){return this.renderUiShell(this._renderBlade())}};var z,D,E;O.styles=[...(z=O,D=O,E="styles",$(w(z),E,D)||[]),p,b],A([r({reflect:!0})],O.prototype,"configuration",2),O=A([n(C)],O);export{O as CarouselCardGrid,C as name};
