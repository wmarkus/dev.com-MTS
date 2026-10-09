import{d as e}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{i as t,r as i}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{b as n,v as s}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{b as o}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";const a=t`
  :host {
    --ds-layout-overflow: none;
    --ds-media-overlay-slot-zindex: var(--ds-z-index-50, 50);
    --ds-media-pointer-events: none;
    --ds-ui-shell-height: 100%;
    --ds-container-margin-block-start: auto;
    --ds-container-margin-block-end: auto;
    outline: var(--ds-hero-media-carousel-item-outline, none);
    outline-offset: var(--ds-hero-media-carousel-item-outline-offset, 0);
  }
`,d=t`
  @media (max-width: ${i(n(s.md))}) {
    :host {
      --ds-ui-shell-padding-block-start: 0;
      --ds-ui-shell-padding-block-end: 0;
    }
  }

  @media (min-width: ${i(s.md)}) {
    :host {
      --ds-layout-justify-content: center;
      --ds-heading-block-content-text-padding-inline-end: var(
        --ds-media-carousel-item-heading-block-content-text-padding-inline-end
      );
      --ds-heading-block-content-text-padding-inline-start: var(
        --ds-media-carousel-item-heading-block-content-text-padding-inline-start
      );
    }
  }

  @media (min-width: ${i(s.lg)}) {
    :host {
      min-height: 580px;
    }
  }
`;var r=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,m=Reflect.get;const c="reimagine-hero-media-carousel-item";let h=class extends o{firstUpdated(){super.firstUpdated(),this.mediaOrientation??(this.mediaOrientation="mobile-stack")}render(){return this.renderUiShell()}};var u,g,p;h.styles=[...(u=h,g=h,p="styles",m(l(u),p,g)||[]),a,d],h=((e,t,i,n)=>{for(var s,o=n>1?void 0:n?r(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(o)||o);return o})([e(c)],h);export{h as HeroMediaCarouselItem,c as name};
