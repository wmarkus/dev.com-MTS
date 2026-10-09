import{i as a,r as i,c as e,b as t}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{b as n,c as r,h as o,H as s}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{q as c,s as l,d}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{v as m,b as p}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";const g=a`
  .container {
    display: flex;
    flex-direction: column;
    gap: var(--ds-banner-search-gap, var(--ds-app-space-micro-xl, 2rem));
  }

  ::slotted([slot='button-group']) {
    justify-content: center;
  }

  :host([configuration='slim']) .container {
    gap: 0;
  }

  :host(:not([configuration='slim'])) {
    --ds-container-padding-inline-start: 0;
    --ds-container-padding-inline-end: 0;
    --ds-container-width: 100%;
    --ds-ui-shell-padding-block-start: var(
      --ds-app-space-layout-inset-vertical-compact,
      var(--ds-app-space-micro-2xl, 3rem)
    );
    --ds-ui-shell-padding-block-end: var(
      --ds-app-space-layout-inset-vertical-compact,
      var(--ds-app-space-micro-2xl, 3rem)
    );

    width: 90%;
    box-sizing: content-box;
    max-width: 1328px;
    margin-inline: auto;
    border-radius: var(--ds-banner-search-border-radius, var(--ds-app-radii-l, 1.5rem));
    margin-block: var(--ds-app-space-layout-inset-vertical-comfortable, var(--ds-app-space-micro-4xl, 6rem));
    gap: var(--ds-banner-search-gap, var(--ds-app-space-micro-xl, 2rem));
  }

  :host(:not([configuration='slim'])) .container {
    --ds-container-width: 100%;
    --ds-container-padding-inline-start: 0;
    --ds-container-padding-inline-end: 0;
    --ds-layout-justify-content: center;
  }

  :host(:not([configuration='slim'])[breadth='comfortable']) {
    margin-block: var(--ds-app-space-layout-inset-vertical-comfortable, var(--ds-app-space-micro-4xl, 6rem));
  }

  :host(:not([configuration='slim'])[breadth='cozy']) {
    margin-block: var(--ds-app-space-layout-inset-vertical-cozy, var(--ds-app-space-micro-3xl, 4.5rem));
  }

  :host(:not([configuration='slim'])[breadth='compact']) {
    margin-block: var(--ds-app-space-layout-inset-vertical-compact, var(--ds-app-space-micro-2xl, 3rem));
  }

  :host(:not([configuration='slim'])[breadth='none']) {
    margin-block: 0;
  }
`,u=a`
  @media (min-width: ${i(m.sm)}) {
    :host(:not([configuration='slim'])) {
      padding-block: 3rem;
    }
  }

  @media (min-width: ${i(m.md)}) and (max-width: ${i(p(m.lg))}) {
    :host(:not([configuration='slim'])) .container,
    :host(:not([configuration='slim'])) .ui-shell-header {
      --ds-container-padding-inline-start: 3.5rem;
      --ds-container-padding-inline-end: 3.5rem;
    }
  }

  @media (max-width: ${i(p(m.lg))}) {
    :host(:not([configuration='slim'])) {
      --ds-app-space-layout-inset-vertical-compact: initial;

      padding-inline: var(--ds-app-space-micro-m, 1rem);
      margin-inline: 3.5rem;
    }
  }

  @media (max-width: ${i(p(m.md))}) {
    :host(:not([configuration='slim'])) {
      width: auto;
      margin-inline: 4rem;
    }

    :host(:not([configuration='slim'])) .ui-shell-header {
      --ds-container-width: 100%;
      --ds-container-padding-inline-start: 0;
      --ds-container-padding-inline-end: 0;
      --ds-layout-justify-content: center;
    }
  }

  @media (max-width: ${i(p(m.sm))}) {
    :host(:not([configuration='slim'])) {
      margin-inline: var(--ds-app-space-micro-m, 1rem);
    }
  }
`,h="left",f="slim";var b=Object.defineProperty,v=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,x=Reflect.get,w=(a,i,e,t)=>{for(var n,r=t>1?void 0:t?v(i,e):i,o=a.length-1;o>=0;o--)(n=a[o])&&(r=(t?n(i,e,r):n(r))||r);return t&&r&&b(i,e,r),r};const k="reimagine-banner-search";let j=class extends n{_setHeadingBlockAttributes(){const a=c(this,"reimagine-heading-block");a&&l(a,{size:s["size-md"],alignment:o.center})}_renderBlade(){const a=this.configuration===f&&this.alignment===h?r.col2even:r.col1staged;return t`
      <reimagine-container part="container" class="container">
        <reimagine-layout configuration=${a}>
          <reimagine-layout-column part="search" class="search">
            <slot name="search"></slot>
          </reimagine-layout-column>
        </reimagine-layout>

        <reimagine-layout configuration=${r.col1even}>
          <reimagine-layout-column part="button-group" class="button-group">
            <slot name="button-group"></slot>
          </reimagine-layout-column>
        </reimagine-layout>
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}firstUpdated(){super.firstUpdated(),this._setHeadingBlockAttributes()}};var $,z,B;j.styles=[...($=j,z=j,B="styles",x(y($),B,z)||[]),g,u],w([e({reflect:!0,type:String})],j.prototype,"alignment",2),w([e({reflect:!0,type:String})],j.prototype,"configuration",2),j=w([d(k)],j);export{j as BannerSearch,k as name};
