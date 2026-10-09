import{r as e,i as a,b as t}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{R as r}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{d as s}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{s as i}from"/__mirror/assets/daab3f96e18c70a4751d1a7b";const d={display:"flex",flexDirection:"row",fontSize:"var(--ds-app-type-body-s-font-size, 0.875rem)",lineHeight:"var(--ds-app-type-body-s-line-height, 1.25rem)",letterSpacing:"var(--ds-app-type-body-s-letter-spacing, -0.03em)",gap:`${e(i)}`},o=a`
  :host {
    --ds-ui-shell-padding-block-start: 0;
    --ds-ui-shell-padding-block-end: 0;
  }

  .author {
    --ds-media-asset-border-start-start-radius: var(--ds-app-radii-s, 0.5rem);
    --ds-media-asset-border-start-end-radius: var(--ds-app-radii-s, 0.5rem);
    --ds-media-asset-border-end-start-radius: var(--ds-app-radii-s, 0.5rem);
    --ds-media-asset-border-end-end-radius: var(--ds-app-radii-s, 0.5rem);

    display: var(--ds-article-header-author-display, ${e(d.display)});
    flex-direction: var(
      --ds-article-header-author-flex-direction,
      ${e(d.flexDirection)}
    );
    gap: var(--ds-article-header-author-gap, ${e(d.gap)});
    font-size: var(--ds-article-header-author-font-size, ${e(d.fontSize)});
    line-height: var(
      --ds-article-header-author-line-height,
      ${e(d.lineHeight)}
    );
    letter-spacing: var(
      --ds-article-header-author-letter-spacing,
      ${e(d.letterSpacing)}
    );
  }
`;var l=Object.getOwnPropertyDescriptor,n=Object.getPrototypeOf,p=Reflect.get;const c="reimagine-article-header-author";let h=class extends r{render(){return t` <div class="author" part="author">
      <div class="media" part="media">
        <slot name="media"></slot>
      </div>
      <div class="content" part="content">
        <slot name="content-text"></slot>
        <slot name="content-label"></slot>
      </div>
    </div>`}};var m,v,g;h.styles=[...(m=h,v=h,g="styles",p(n(m),g,v)||[]),o],h=((e,a,t,r)=>{for(var s,i=r>1?void 0:r?l(a,t):a,d=e.length-1;d>=0;d--)(s=e[d])&&(i=s(i)||i);return i})([s(c)],h);export{h as ArticleHeaderAuthor,c as name};
