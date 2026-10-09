import{r as e,i as a,c as t,f as o,e as r,b as s}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{s as i,a as l,i as n,d as c}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{b as p,c as d,U as h,M as m,t as g,u}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{v as b,b as f}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{LogoBar as y}from"/__mirror/assets/f1056dbb2bc56626f0e90a55";import{LogoBarItem as v,name as k}from"/__mirror/assets/b53611747e168f8af3c1226d";import{V as S,S as _}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{n as B}from"/__mirror/assets/bf0b3498e45fc20534cec8b1";const j="solid",w="transparent",x="slim",O="var(--ds-app-space-micro-xl, 2rem)",E=a`
  :host {
    --ds-ui-shell-gap: 0;
    --ds-heading-padding-block-start: var(--ds-app-space-layout-stack-comfortable, 3rem);
    --ds-heading-padding-block-end: var(--ds-app-space-layout-stack-comfortable, 3rem);
  }
  ::slotted([slot='logo-bar']) {
    --ds-layout-justify-content: center;
  }

  :host([appearance='transparent']) ::slotted([slot='logo-bar'][enable-background]) {
    --ds-logobar-background: var(--ds-hero-search-logobar-background, transparent);
  }

  :host([appearance='solid']) ::slotted([slot='logo-bar'][enable-background]) {
    --ds-logobar-background: var(
      --ds-hero-search-logobar-background,
      ${e("var(--ds-app-color-surface-solid-bg-default, #fefefe)")}
    );
  }

  :host([appearance='with-link']) .search {
    display: flex;
    flex-direction: column;
    gap: var(--ds-hero-search-gap, ${e(O)});
  }

  :host([appearance='with-link']) ::slotted(reimagine-link) {
    margin-inline: auto;
  }

  .ui-shell-base {
    --ds-app-space-layout-stack-comfortable: 6rem;
  }
`,M=a`
  @media (max-width: ${e(b.md)}) {
    .ui-shell-base {
      --ds-app-space-layout-stack-comfortable: 3.5rem;
    }
  }

  @media (max-width: ${e(f(b.sm))}) {
    :host([appearance='with-link']) ::slotted(reimagine-link) {
      margin-inline: inherit;
    }
  }
`;var R=Object.defineProperty,$=Object.getOwnPropertyDescriptor,A=Object.getPrototypeOf,L=Reflect.get,z=(e,a,t,o)=>{for(var r,s=o>1?void 0:o?$(a,t):a,i=e.length-1;i>=0;i--)(r=e[i])&&(s=(o?r(a,t,s):r(s))||s);return o&&s&&R(a,t,s),s};const C="reimagine-hero-search";let U=class extends p{constructor(){super(),this._logoBarSlotEmpty=!1,this._viewportResizeObserver=new S(this,{callback:this._updateMediaAspectRatio.bind(this)})}updated(e){var a,t;if(null==(a=super.updated)||a.call(this,e),e.has("appearance")){if(this.appearance===x?this.headerLayoutConfiguration=d.col2even:this.headerLayoutConfiguration=d.col1focus,this.appearance===j&&(this.bottomBreadth=h.none),this.appearance===w&&(this.bottomBreadth=h.cozy),this._logoBarSlotEmpty=0===this._logoBarSlot.length,this._logoBarSlotEmpty)return;null==(t=this._logoBarSlot)||t.forEach(e=>{e instanceof y&&(this.appearance===x?e.removeAttribute("enable-background"):e.setAttribute("enable-background",""),this.appearance===j&&(e.strokeHidden=!0,this._setLogoBarItemSurfaceTransparent(e)))})}}handleUiShellMediaSlotChange(){super.handleUiShellMediaSlotChange(),this.uiShellMedia&&i(this,{"media-overlay":u.overlayBgFill,"media-orientation":g.mobileStack})}_setLogoBarItemSurfaceTransparent(e){l(e,k).forEach(e=>{e instanceof v&&(e.surface=_.transparent)})}_updateMediaAspectRatio(){var e,a;const t=this._mediaSlot.filter(e=>n(e,B));null!=(e=this._viewportResizeObserver)&&e.isMobile()?t.forEach(e=>e.setAttribute("aspect-ratio",m.ratio16to9)):null!=(a=this._viewportResizeObserver)&&a.isDesktop()&&t.forEach(e=>e.setAttribute("aspect-ratio",m.ratio21to9))}_renderBlade(){return s`
      <reimagine-container part="search-container" class="search-container">
        <reimagine-layout
          configuration="${this.appearance===x?d.col2even:d.col1focus}"
        >
          <reimagine-layout-column part="search" class="search">
            <slot></slot>
          </reimagine-layout-column>
        </reimagine-layout>
      </reimagine-container>

      ${this.appearance===j||this.appearance===w?s`
            <reimagine-layout configuration=${d.col1even}>
              <reimagine-layout-column part="logo-bar" class="logo-bar">
                <slot name="logo-bar"></slot>
              </reimagine-layout-column>
            </reimagine-layout>
          `:null}
    `}render(){return this.renderUiShell(this._renderBlade())}};var I,P,D;U.styles=[...(I=U,P=U,D="styles",L(A(I),D,P)||[]),E,M],z([t({reflect:!0})],U.prototype,"appearance",2),z([o()],U.prototype,"_logoBarSlotEmpty",2),z([o()],U.prototype,"_viewportResizeObserver",2),z([r({slot:"logo-bar"})],U.prototype,"_logoBarSlot",2),z([r({slot:"ui-shell-media"})],U.prototype,"_mediaSlot",2),U=z([c(C)],U);export{U as HeroSearch,C as name};
