import{i as e,r as t,c as i}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{b as o,c as s,U as r}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{d as a}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{C as n}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{v as d,b as m}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";const l=e`
  :host {
    --ds-layout-overflow: hidden;
    height: 100%;
    outline: var(--ds-hero-featured-slider-item-outline);
    outline-offset: var(--ds-hero-featured-slider-item-outline-offset);
  }

  .ui-shell-base {
    display: none;
  }
`,h=e`
  /* VP3 & above */
  @media (min-width: ${t(d.md)}) {
    :host {
      --ds-heading-block-copy-padding: var(--ds-app-space-micro-2xl, 3rem);
      min-height: 580px;
      justify-content: center;
    }

    :host([text-position-right]) .ui-shell-header {
      --ds-layout-flex-direction: row-reverse;
    }
  }

  /**
   * Mobile viewport optimization for better content visibility
   * 
   * Changes media object-fit from 'cover' to 'fill' on mobile viewports
   * to ensure full content visibility on smaller screens where cropping
   * might hide important visual elements.
   * 
   * Fixes Bug 14123106 - Media stretching issues on mobile viewports
   */
  @media (max-width: ${t(m(d.sm))}) {
    :host {
      display: grid;
      grid-template-rows: auto 1fr;
      grid-auto-rows: auto;
      align-items: start;
    }

    ::slotted(reimagine-media) {
      --ds-media-object-fit: var(--ds-hero-featured-slider-item-media-mobile-view-object-fit, fill);
    }
  }

  /**
   * Accessibility Enhancement: High Zoom Support (400% zoom)
   * 
   * Switches the object-fit from cover to contain when browser zoom is ~400%.
   * This uses a max-width: 20em media query, which only matches at typical desktop widths when zoomed in 400%.
   *
   * @see Bug 13943005 - Fixes A11Y issue where images were clipped at high zoom levels
   * @wcag 1.4.4 Resize text (Level AA) - Content must be readable at 400% zoom
   */
  @media (max-width: 20em) and (min-resolution: 192dpi) {
    ::slotted(reimagine-media) {
      --ds-media-object-fit: var(--ds-hero-featured-slider-item-media-object-fit, contain);
    }
  }
`;var c=Object.defineProperty,p=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,f=Reflect.get,g=(e,t,i,o)=>{for(var s,r=o>1?void 0:o?p(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&c(t,i,r),r};const b="reimagine-hero-featured-slider-item";let v=class extends o{constructor(){super(...arguments),this.textPositionRight=!1}firstUpdated(){super.firstUpdated(),this.headerLayoutConfiguration??(this.headerLayoutConfiguration=s.col2even),this.mediaOrientation??(this.mediaOrientation="mobile-stack"),this.density??(this.density="none"),this.breadth??(this.breadth=r.comfortable),new n(this)}render(){return this.renderUiShell()}};var w,y,x;v.styles=[...(w=v,y=v,x="styles",f(u(w),x,y)||[]),l,h],g([i({type:Boolean,reflect:!0,attribute:"text-position-right"})],v.prototype,"textPositionRight",2),v=g([a(b)],v);export{v as HeroFeaturedSliderItem,b as name};
