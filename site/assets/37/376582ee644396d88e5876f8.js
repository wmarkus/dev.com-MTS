import{r as t,i as e,b as s}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{b as o,c as r}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{s as i,q as a,a as n,d as c}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{b as d,v as l}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{c as u,n as m}from"/__mirror/assets/42f825e3dad9c53f1fc34d82";import{d as f,g as p}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{name as b}from"/__mirror/assets/183c4411ec679f3100ca3ad0";import{n as h}from"/__mirror/assets/5849ec5e150363c91281fb26";const g=e`
  :host {
    --ds-carousel-controls-justify-content: space-between;
    --ds-carousel-controls-padding-block: 16px;
    --ds-carousel-controls-container-z-index: var(--ds-z-index-20, 20);
    --ds-carousel-indicators-container-z-index: var(--ds-z-index-0, 0);
    --ds-carousel-gap: 0;
    --ds-tabs-base-margin-block-end: 0;
    --ds-carousel-indicators-height: var(--ds-app-space-micro-2xl, 2rem);
    --ds-carousel-indicators-container-position: absolute;
    --ds-carousel-indicators-container-bottom: 0;
    --ds-carousel-indicators-container-left: 0;
    --ds-carousel-indicators-container-right: 0;
    --ds-carousel-indicators-container-margin-inline: auto;
    --ds-carousel-indicators-container-align-items: center;
    --ds-carousel-indicators-container-justify-content: center;
    --ds-carousel-indicator-line-height: 0;
    --ds-carousel-indicator-align-items: center;
    --ds-carousel-indicators-gap: var(--ds-app-space-micro-2xs, 0.25rem);
    --ds-carousel-item-outline: none;
    --ds-carousel-controls-bottom-margin-inline: auto;
    --ds-skip-link-top-offset: 0;
    --ds-carousel-indicators-container-width: fit-content;

    overflow-x: var(--ds-hero-featured-slider-overflow-x, ${t("hidden")});
  }
`,x=e`
  /* vp1 only */
  @media (max-width: ${t(d(l.sm))}) {
    :host {
      --ds-layout-column-flex-basis-override: 100%;
    }
  }

  /* below md */
  @media (max-width: ${t(d(l.md))}) {
    :host {
      --ds-carousel-indicators-container-z-index: var(--ds-z-index-30, ${t(u.indicatorsZIndex)});
    }
  }
`;var v=Object.getOwnPropertyDescriptor,j=Object.getPrototypeOf,w=Reflect.get;const y="reimagine-hero-featured-slider";let A=class extends o{setDefaultAttributes(){i(this,{breadth:"none"})}setCarouselDefaultAttributes(){const t={"control-position":p.bottomStart,"indicator-configuration":f.bars,"layout-configuration":r.card1,"enable-indicator-container":"true","show-controls":"","disable-indicator-clicks":""},e=a(this,m);e&&i(e,t)}setIndicatorConfigurations(){const t=a(this,m);t&&n(t,b).forEach(t=>{const e=a(t,h);e&&(e.setAttribute("decorative",""),e.setAttribute("orientation","horizontal"),e.setAttribute("configuration","rounded"),e.setAttribute("indicator-style","subtle"))})}firstUpdated(){super.firstUpdated(),this.setDefaultAttributes(),this.setCarouselDefaultAttributes(),this.setIndicatorConfigurations()}_renderBlade(){return s` <slot></slot>`}render(){return this.renderUiShell(this._renderBlade())}};var z,k,D;A.styles=[...(z=A,k=A,D="styles",w(j(z),D,k)||[]),g,x],A=((t,e,s,o)=>{for(var r,i=o>1?void 0:o?v(e,s):e,a=t.length-1;a>=0;a--)(r=t[a])&&(i=r(i)||i);return i})([c(y)],A);export{A as HeroFeaturedSlider,y as name};
