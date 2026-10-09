import{r,i as e,c as o,b as d}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as t}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{R as i}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";const s="solid",a="1px",l="100vh",n=e`
  :host {
    border: 0;
    margin: 0;
    border-color: var(--ds-divider-border-color, ${r("var(--ds-app-color-base-default-border-subtle)")});
    border-style: var(--ds-divider-border-style, ${r(s)});
    border-top-width: var(--ds-divider-border-width, ${r(a)});
    display: var(--ds-divider-display, block);
  }

  /* Configuration Styles - Size */
  :host([size='s']) {
    --ds-divider-border-color: var(--ds-app-color-base-default-border-strong);
    --ds-divider-border-width: 2px;
  }

  :host([size='m']) {
    --ds-divider-border-color: var(--ds-app-color-base-default-border-strong);
    --ds-divider-border-width: 4px;
  }

  /* Configuration Styles - Color */
  :host([color='subtle']) {
    --ds-divider-border-color: var(--ds-app-color-base-default-border-subtle);
  }

  :host([color='strong']) {
    --ds-divider-border-color: var(--ds-app-color-base-default-border-strong);
  }

  /* Configuration Styles - Orientation */
  :host([orientation='vertical']) {
    border-top: none;
    border-inline-start-width: var(
      --ds-divider-border-width,
      ${r(a)}
    );
    height: var(--ds-divider-vh, ${r(l)});
    width: 0;
  }
`;var b=Object.defineProperty,p=Object.getOwnPropertyDescriptor,v=(r,e,o,d)=>{for(var t,i=d>1?void 0:d?p(e,o):e,s=r.length-1;s>=0;s--)(t=r[s])&&(i=(d?t(e,o,i):t(i))||i);return d&&i&&b(e,o,i),i};const c="reimagine-divider";let h=class extends i{render(){return d``}};h.styles=[n],v([o({type:String,reflect:!0})],h.prototype,"orientation",2),v([o({type:String,reflect:!0})],h.prototype,"size",2),v([o({type:String,reflect:!0})],h.prototype,"color",2),h=v([t(c)],h);export{h as Divider,c as name};
