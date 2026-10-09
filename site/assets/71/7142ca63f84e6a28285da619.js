import{r as t,i as a,c as i,b as s}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{b as r,c as o}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{d as e}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{b as l,v as c}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";const m="flex",n="var(--ds-app-space-micro-xl, 2rem)",d=a`
  :host {
    display: var(--ds-article-list-columns-display, ${t(m)});
    padding-block-start: var(--ds-article-list-padding-block-start, 0);
    padding-block-end: var(--ds-article-list-padding-block-end, 0);

    --ds-layout-column-display: var(
      --ds-article-list-columns-display,
      ${t(m)}
    );
  }

  :host ::slotted(reimagine-layout-column) {
    flex-direction: var(--ds-article-list-column-flex-direction, column);
    gap: var(--ds-article-list-column-items-gap, ${t(n)});
  }
`,p="var(--ds-app-space-layout-stack-comfortable, 3rem)",u="var(--ds-app-space-layout-stack-comfortable, 2rem)",g="var(--ds-app-space-micro-xl, 1.5rem)",v="var(--ds-app-space-micro-m, 1rem)",f=a`
  @media (max-width: ${t(l(c.sm))}) {
    :host {
      --ds-layout-column-gap: var(
        --ds-article-list-column-gap,
        ${t(g)}
      );
      --ds-layout-row-gap: var(--ds-article-list-row-gap, ${t(g)});
    }

    :host([configuration='row']) ::slotted(reimagine-layout-column) {
      gap: var(--ds-article-list-column-items-gap, var(--ds-app-space-micro-xl, 1.5rem));
    }
  }

  @media (min-width: ${t(c.sm)}) and (max-width: ${t(c.md)}) {
    :host {
      --ds-layout-column-gap: var(
        --ds-article-list-column-gap,
        ${t(u)}
      );
      --ds-layout-row-gap: var(--ds-article-list-row-gap, ${t(u)});
    }
  }

  @media (min-width: ${t(c.sm)}) and (max-width: ${t(c.lg)}) {
    :host([configuration='column']) {
      --ds-article-list-column-items-gap: var(
        --ds-article-list-column-items-gap,
        ${t(p)}
      );
    }
  }

  @media (min-width: ${t(c.md)}) {
    :host([configuration='row']) ::slotted(reimagine-layout-column) {
      flex-direction: var(--ds-article-list-column-flex-direction, row);
      flex-basis: var(--ds-article-list-column-flex-basis, 100%);
    }
  }

  @media (min-width: ${t(c.lg)}) {
    :host([configuration='row']) ::slotted(reimagine-layout-column) {
      gap: var(--ds-article-list-column-items-gap, ${t(v)});
    }
  }
`,y="column";var h=Object.defineProperty,w=Object.getOwnPropertyDescriptor,$=Object.getPrototypeOf,b=Reflect.get,x=(t,a,i,s)=>{for(var r,o=s>1?void 0:s?w(a,i):a,e=t.length-1;e>=0;e--)(r=t[e])&&(o=(s?r(a,i,o):r(o))||o);return s&&o&&h(a,i,o),o};const j="reimagine-article-list";let k=class extends r{constructor(){super(...arguments),this.configuration=y}render(){return s`
      <reimagine-layout configuration=${o.col4even1}>
        <slot></slot>
      </reimagine-layout>
    `}};var O,P,A;k.styles=[...(O=k,P=k,A="styles",b($(O),A,P)||[]),d,f],x([i({reflect:!0,attribute:"configuration"})],k.prototype,"configuration",2),k=x([e(j)],k);export{k as ArticleList,j as name};
