import{r as e,i as t,b as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{b as a,c as i}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{d as o}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{b as s,v as n}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";const d=t`
  @media (max-width: ${e(s(n.md))}) {
    :host {
      --ds-logobar-item-max-width: none;
      --ds-logobar-item-max-height: none;
    }
  }

  @media (min-width: ${e(n.md)}) {
    :host {
      --ds-ui-shell-gap: var(--ds-app-space-micro-xl, 2rem);
    }
  }

  @media (min-width: ${e(n.lg)}) {
    :host {
      --ds-logobar-container-width: 100%;
    }
  }
`,l=t`
  :host {
    --ds-logobar-padding-inline-start: 0;
    --ds-logobar-padding-inline-end: 0;
    --ds-logobar-margin-inline: auto;
  }
`;var m=Object.getOwnPropertyDescriptor,g=Object.getPrototypeOf,c=Reflect.get;const h="reimagine-card-grid-logo-wall";let p=class extends a{_renderBlade(){const e="container",t=r`
      <reimagine-layout configuration=${i.col1even}>
        <slot></slot>
      </reimagine-layout>
    `;return this.baseContent?r` <div class=${e} part=${e}>${t}</div> `:r`
      <reimagine-container part=${e} class=${e}>
        ${t}
      </reimagine-container>
    `}render(){return r`${this.renderUiShell(this._renderBlade())}`}constructor(){super(),this.headerLayoutConfiguration||(this.headerLayoutConfiguration=i.col1focus)}};var u,b,f;p.styles=[...(u=p,b=p,f="styles",c(g(u),f,b)||[]),l,d],p=((e,t,r,a)=>{for(var i,o=a>1?void 0:a?m(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=i(o)||o);return o})([o(h)],p);export{p as CardGridLogoWall,h as name};
