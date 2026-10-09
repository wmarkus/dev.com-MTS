import{r as t,i as e,b as i}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{R as s}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{d as l}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{h as n}from"/__mirror/assets/6ad137053d5da8fc91d912f1";const a=e`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--ds-link-list-gap, ${t("var(--ds-app-space-micro-l, 1.5rem)")});
  }

  ::slotted([slot='title']) {
    font-weight: var(
      --ds-link-list-title-font-weight,
      ${t(n.fontWeight)}
    );
    line-height: var(
      --ds-link-list-title-line-height,
      ${t(n.lineHeight)}
    );
    font-size: var(--ds-link-list-title-font-size, ${t(n.fontSize)});
    color: var(--ds-app-color-base-default-fg-heading, #0e1726);
  }

  .links-list {
    display: flex;
    flex-direction: column;
    gap: var(--ds-app-space-micro-m, 1rem);
    margin: 0;
    padding: 0;
    text-indent: 0;
  }

  .link {
    margin: 0;
    padding: 0;
    text-indent: 0;
    list-style-type: none;
  }
`;var r=Object.getOwnPropertyDescriptor,o=Object.getPrototypeOf,p=Reflect.get;const d="reimagine-link-list";let c=class extends s{render(){return i`
      <slot class="title" part="title" name="title"></slot>
      <ul class="links-list">
        <slot class="link" part="link" name="link"></slot>
      </ul>
    `}};var m,g,f;c.styles=[...(m=c,g=c,f="styles",p(o(m),f,g)||[]),a],c=((t,e,i,s)=>{for(var l,n=s>1?void 0:s?r(e,i):e,a=t.length-1;a>=0;a--)(l=t[a])&&(n=l(n)||n);return n})([l(d)],c);export{c as LinkList,d as name};
