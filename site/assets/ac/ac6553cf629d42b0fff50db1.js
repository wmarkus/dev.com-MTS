import{r as e,i as t,e as i,f as a,b as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as s}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{v as d}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{b as o,c as m}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";const l=t`
  :host {
    --ds-heading-block-copy-padding: var(
      --ds-hero-article-heading-copy-padding,
      ${e("0")}
    );
    --ds-media-height: 100%;
  }
`,n="580px",h="center",c="unset",u="absolute",p="0",b="0",g="50%",y="100%",v=t`
  @media (min-width: ${e(d.lg)}) {
    :host {
      min-height: var(
        --ds-hero-article-min-height,
        ${e(n)}
      );
    }
  }

  @media (min-width: ${e(d.md)}) {
    :host {
      justify-content: var(
        --ds-hero-article-justify-content,
        ${e(h)}
      );
    }

    .media {
      position: var(--ds-hero-article-media-position, ${e(u)});
      inset-inline-end: var(
        --ds-hero-article-media-inset-inline-end,
        ${e(p)}
      );
      inset-block-start: var(
        --ds-hero-article-media-inset-block-start,
        ${e(b)}
      );
      width: var(--ds-hero-article-media-width, ${e(g)});
      height: var(--ds-hero-article-media-height, ${e(y)});
    }
  }

  @media (max-width: ${e(d.md)}) {
    .media {
      --ds-media-width: var(--ds-ui-shell-media-width, 100%);
      --ds-media-asset-width: var(--ds-media-width, 100%);
    }

    :host([double-media]) {
      gap: var(--ds-hero-article-mobile-gap, ${e(c)});
    }

    :host([double-media]) ::slotted([slot='ui-shell-media']) {
      display: none;
    }
  }
`;var _=Object.defineProperty,$=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,w=Reflect.get,C=(e,t,i,a)=>{for(var r,s=a>1?void 0:a?$(t,i):t,d=e.length-1;d>=0;d--)(r=e[d])&&(s=(a?r(t,i,s):r(s))||s);return a&&s&&_(t,i,s),s};const j="reimagine-hero-article";let E=class extends o{constructor(){super(...arguments),this._breadCrumbsEmpty=!0,this._mediaEmpty=!1}_handleBreadcrumbsSlotChange(){var e;this._breadCrumbsEmpty=0===(null==(e=this._breadCrumbs)?void 0:e.length)}_handleMediaSlotChange(){var e;this._mediaEmpty=0===(null==(e=this._media)?void 0:e.length),this._mediaEmpty?this.removeAttribute("double-media"):this.setAttribute("double-media","")}_renderBlade(){return r`
      <div
        part="breadcrumbs"
        class="breadcrumbs"
        style="${this.toggleDisplay(this._breadCrumbsEmpty)}"
      >
        <slot name="breadcrumbs" @slotchange="${this._handleBreadcrumbsSlotChange}"></slot>
      </div>
      <div part="media" class="media" style="${this._mediaEmpty?"display: contents;":""}">
        <slot name="media" @slotchange="${this._handleMediaSlotChange}"></slot>
      </div>
      <reimagine-container>
        <reimagine-layout configuration="${m.col2even}">
          <reimagine-layout-column>
            <slot></slot>
          </reimagine-layout-column>
          <reimagine-layout-column> </reimagine-layout-column>
        </reimagine-layout>
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var O,S,x;E.styles=[...(O=E,S=E,x="styles",w(f(O),x,S)||[]),l,v],C([i({slot:"breadcrumbs"})],E.prototype,"_breadCrumbs",2),C([i({slot:"media"})],E.prototype,"_media",2),C([a()],E.prototype,"_breadCrumbsEmpty",2),C([a()],E.prototype,"_mediaEmpty",2),E=C([s(j)],E);export{E as HeroArticle,j as name};
