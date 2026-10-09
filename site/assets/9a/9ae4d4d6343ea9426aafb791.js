import{r as a,i as t,g as s,b as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{b as e,i as g,d as i}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{name as l}from"/__mirror/assets/e03438b5798d9e90c6c162a8";import{R as n}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";const o="wrap",d="var(--ds-app-space-micro-xs, 0.5rem)",p="none",b="0",m="0",c="0",h=t`
  .tag-bar {
    display: var(--ds-tag-bar-display, ${a("flex")});
    flex-wrap: var(--ds-tag-bar-flex-wrap, ${a(o)});
    gap: var(--ds-tag-bar-gap, ${a(d)});
    list-style-type: var(--ds-tag-bar-list-style-type, ${a(p)});
    padding: var(--ds-tag-bar-padding, ${a(b)});
    margin-block-start: var(
      --ds-tag-bar-margin-block-start,
      ${a(m)}
    );
    margin-block-end: var(
      --ds-tag-bar-margin-block-end,
      ${a(c)}
    );
  }
`;var v=Object.defineProperty,f=Object.getOwnPropertyDescriptor,y=(a,t,s,r)=>{for(var e,g=r>1?void 0:r?f(t,s):t,i=a.length-1;i>=0;i--)(e=a[i])&&(g=(r?e(t,s,g):e(g))||g);return r&&g&&v(t,s,g),g};const u="reimagine-tag-bar";let $=class extends n{get _tags(){return e(this._assignedTags,l)}_handleSlotChange(){var a;this._tags&&this._tags.length>0&&(null==(a=this._tags)||a.forEach(a=>{g(a,l)&&a.setAttribute("role","listitem")}))}render(){return r`
      <ul class="tag-bar">
        <slot @slotchange="${this._handleSlotChange}"></slot>
      </ul>
    `}};$.styles=[h],y([s({flatten:!0})],$.prototype,"_assignedTags",2),$=y([i(u)],$);export{$ as TagBar,u as name};
