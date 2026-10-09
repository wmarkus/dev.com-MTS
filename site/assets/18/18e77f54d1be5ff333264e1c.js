import{r as e,i as t,c as r,b as a}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as i}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{c as s,b as o}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import"/__mirror/assets/24143c91ae535a4bf153c862";const n=s.col4even1,l=t`
  :host {
    --ds-ui-shell-gap: var(--ds-app-space-micro-2xl, 3rem);
  }

  .body::part(layout__base) {
    --ds-layout-row-gap: var(--ds-app-space-micro-2xl, 3rem) !important;
  }

  .base {
    display: flex;
    flex-direction: column;
    gap: var(--ds-link-list-container-gap, ${e("var(--ds-app-space-micro-m, 1rem)")});
  }
`;var c=Object.defineProperty,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,m=Reflect.get,g=(e,t,r,a)=>{for(var i,s=a>1?void 0:a?p(t,r):t,o=e.length-1;o>=0;o--)(i=e[o])&&(s=(a?i(t,r,s):i(s))||s);return a&&s&&c(t,r,s),s};const u="reimagine-utility-link-list";let y=class extends o{_renderBlade(){const e="base",t=a`
      <reimagine-layout
        part="body"
        class="body"
        configuration=${this.configuration||n}
      >
        <slot></slot>
      </reimagine-layout>
    `;return this.baseContent?a`<div class=${e} part=${e}>${t}</div>`:a`
      <reimagine-container part=${e} class="${e}">
        ${t}
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var b,f,v;y.styles=[...(b=y,f=y,v="styles",m(d(b),v,f)||[]),l],g([r({attribute:"configuration",reflect:!0})],y.prototype,"configuration",2),y=g([i(u)],y);export{y as LinkListBlade,u as name};
