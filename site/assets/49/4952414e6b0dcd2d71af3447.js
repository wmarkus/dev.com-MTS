import{r as i,i as t,c as r,b as e}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as o}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{c as n}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{v as a}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{R as s}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";const l="flex",p="flex-start",d="row",g="var(--ds-app-space-micro-s)",c="var(--ds-app-space-micro-xl)",m="initial",u="initial",f="center",k="0",v="0",h="0",w=t`
  :host {
    display: flex;
    flex-direction: column !important ;
    row-gap: ${i("var(--ds-app-space-micro-m)")};
  }

  .title {
    font-weight: var(
      --ds-link-group-title-font-weight,
      ${i(n.fontWeight)}
    );
    line-height: var(
      --ds-link-group-title-line-height,
      ${i(n.lineHeight)}
    );
    font-size: var(--ds-link-group-title-font-size, ${i(n.fontSize)});
    color: var(--ds-app-color-base-default-fg-highlight, #005597);
  }

  .link-group {
    display: ${i(l)};
    flex-direction: var(
      --ds-link-group-flex-direction,
      ${i(d)}
    );
    flex-wrap: wrap;
    list-style-type: none;
    align-items: var(
      --ds-link-group-align-items,
      ${i(f)}
    );
    padding-inline-start: var(
      --ds-link-group-padding-inline-start,
      ${i(v)}
    );
    padding-inline-end: var(
      --ds-link-group-padding-inline-end,
      ${i(h)}
    );
    margin: ${i(k)};

    justify-content: var(
      --ds-link-group-justify-content,
      ${i(p)}
    );
    row-gap: ${i(g)};
    column-gap: var(--ds-link-group-column-gap, ${i(c)});

    width: var(--ds-link-group-width, ${i(u)});
    max-width: var(--ds-link-group-max-width, ${i(m)});
  }

  :host([orientation='vertical']) {
    row-gap: var(--ds-app-space-micro-s);
  }

  :host([orientation='vertical']) .link-group {
    --ds-link-group-align-items: start;
    --ds-link-group-flex-direction: column !important;
    row-gap: var(--ds-app-space-micro-m);
  }
`,$=t`
  @media (min-width: ${i(a.sm)}) {
    :host .link-group {
      --ds-link-group-align-items: center;
      --ds-link-group-flex-direction: var(
        --ds-link-group-flex-direction,
        ${i("row")}
      ) !important;
    }
  }
`;var x=Object.defineProperty,y=Object.getOwnPropertyDescriptor,j=(i,t,r,e)=>{for(var o,n=e>1?void 0:e?y(t,r):t,a=i.length-1;a>=0;a--)(o=i[a])&&(n=(e?o(t,r,n):o(n))||n);return e&&n&&x(t,r,n),n};const b="reimagine-link-group";let z=class extends s{render(){return e`
      <slot name="title" class="title" part="title"></slot>
      <ul class="link-group" part="link-group">
        <slot name="link-group-item"></slot>
      </ul>
    `}};z.styles=[w,$],j([r({reflect:!0})],z.prototype,"orientation",2),z=j([o(b)],z);export{z as LinkGroup,b as name};
