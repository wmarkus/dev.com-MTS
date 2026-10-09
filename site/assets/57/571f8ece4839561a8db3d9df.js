import{i as e,r as t,e as a,f as r,b as o}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i,d as s}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{v as n}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{b as c,M as l,c as p}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{V as d}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{n as m}from"/__mirror/assets/bf0b3498e45fc20534cec8b1";const u=e`
  :host {
    --ds-layout-flex-direction: column;
    --ds-button-group-column-gap: var(--ds-app-space-micro-m);
    --ds-heading-block-copy-padding: var(--ds-app-space-surface-roomy, 0);
  }

  ::part(layout__base) {
    --ds-layout-row-gap: var(--ds-app-space-micro-2xl);
  }

  .ui-shell-breadcrumbs-container {
    --ds-container-margin-block-end: calc(-1 * var(--ds-app-space-micro-2xl, 2rem));
  }

  .ui-shell-announcement-container {
    position: absolute;
    top: calc(var(--ds-ui-shell-breadcrumbs-height, 0px) + var(--ds-app-space-micro-l, 1rem));
    z-index: 1;
  }

  .ui-shell-header {
    --ds-layout-flex-direction: row;
    --ds-layout-column-gap: var(--ds-app-space-layout-inset-vertical-comfortable, 3.5rem);
  }
`,h=e`
  @media (min-width: ${t(n.md)}) {
    :host {
        /* Breadcrumbs-to-announcement gap: 48px gap, offset to 32px */
        --ds-ui-shell-announcement-margin-block-start: -16px;
    }

    .ui-shell-breadcrumbs-container {
      --ds-container-margin-block-end: initial;
    }

    .ui-shell-announcement-container {
      position: relative;
      top: auto;
      z-index: auto;
    }
  }
`;var b=Object.defineProperty,v=Object.getOwnPropertyDescriptor,g=Object.getPrototypeOf,f=Reflect.get,y=(e,t,a,r)=>{for(var o,i=r>1?void 0:r?v(t,a):t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r?o(t,a,i):o(i))||i);return r&&i&&b(t,a,i),i};const x="reimagine-hero-category";let _=class extends c{_updateMediaAspectRatio(){var e,t;const a=this._mediaSlot.filter(e=>i(e,m));null!=(e=this._viewportResizeObserver)&&e.isMobile()?a.forEach(e=>e.setAttribute("aspect-ratio",l.ratio16to9)):null!=(t=this._viewportResizeObserver)&&t.isDesktop()&&a.forEach(e=>e.setAttribute("aspect-ratio",l.ratio21to9))}_renderBlade(){const e="container",t=o`
      <reimagine-layout configuration=${p.col1even} density="relaxed">
        <slot></slot>
      </reimagine-layout>
    `;return this.baseContent?o` <div class=${e} part=${e}>${t}</div> `:o`
      <reimagine-container class=${e} part=${e}>
        ${t}
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}constructor(){super(),this.headerLayoutConfiguration||(this.headerLayoutConfiguration=p.col2even),this._viewportResizeObserver=new d(this,{callback:this._updateMediaAspectRatio.bind(this)})}};var w,j,O;_.styles=[...(w=_,j=_,O="styles",f(g(w),O,j)||[]),u,h],y([a({slot:"ui-shell-media"})],_.prototype,"_mediaSlot",2),y([r()],_.prototype,"_viewportResizeObserver",2),_=y([s(x)],_);export{_ as HeroCategory,x as name};
