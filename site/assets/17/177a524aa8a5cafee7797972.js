import{i as e,r as a,b as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as s}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{b as t,c as i}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{b as n,v as o}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";const l=e`
  :host {
    --ds-ui-shell-gap: var(--ds-app-space-layout-stack-cozy, 2rem);
    --ds-ui-shell-padding-block-start: var(--ds-app-space-layout-inset-vertical-compact, 3rem);
    --ds-ui-shell-padding-block-end: var(--ds-app-space-layout-inset-vertical-compact, 3rem);
    --ds-secondary-nav-quicklinks-list-gap: var(--ds-app-space-grid-default, 0.75rem);
  }
`,c=e`
  @media (max-width: ${a(n(o.md))}) {
    :host {
      --ds-ui-shell-padding-block-start: var(--ds-app-space-layout-inset-vertical-comfortable, 3.5rem);
      --ds-ui-shell-padding-block-end: var(--ds-app-space-layout-inset-vertical-comfortable, 3.5rem);
    }

    reimagine-container {
      --ds-container-padding-inline-start: var(--ds-app-space-micro-l, 1rem);
      --ds-container-padding-inline-end: var(--ds-app-space-micro-l, 1rem);
    }
  }
`;var d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Reflect.get;const v="reimagine-hero-quicklinks";let u=class extends t{_renderBlade(){const e="container",a=r`
      <reimagine-layout configuration=${i.col1even}>
        <slot></slot>
      </reimagine-layout>
    `;return this.baseContent?r`<div class=${e} part=${e}>${a}</div>`:r`
      <reimagine-container class=${e} part=${e}>
        ${a}
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var g,h,b;u.styles=[...(g=u,h=u,b="styles",m(p(g),b,h)||[]),l,c],u=((e,a,r,s)=>{for(var t,i=s>1?void 0:s?d(a,r):a,n=e.length-1;n>=0;n--)(t=e[n])&&(i=t(i)||i);return i})([s(v)],u);export{u as HeroQuicklinks,v as name};
