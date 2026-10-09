import{r as e,i as t,c as a,e as i,f as s,b as d}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{q as o,s as l,d as m}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{b as n,g as r}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import"/__mirror/assets/e9bc27b982236a11a690d9f7";import{v as g,b,p}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{T as c,y as h}from"/__mirror/assets/6ad137053d5da8fc91d912f1";const u="column",y="1rem",f="center",v="absolute",$="100%",x="100%",k="-1",S="2rem",w="-3rem",B=t`
  :host {
    --ds-layout-flex-direction: column;
    --ds-layout-row-gap: 1rem;
    --ds-ui-shell-padding-block-start: 2rem;
    --ds-ui-shell-padding-block-end: 2rem;
    --ds-tabs-base-margin-block-end: 0;
    --ds-text-block-gap: 0;
    --ds-media-margin-block-start: 1rem;
    --ds-media-object-fit: cover;
    --ds-media-height: 100%;
  }

  ::slotted(reimagine-layout-column) {
    display: var(--ds-media-demo-display, ${e("flex")});
    flex-direction: var(
      --ds-media-demo-flex-direction,
      ${e(u)}
    );
    gap: var(--ds-media-demo-gap, ${e(y)});
    align-items: var(--ds-media-demo-align-items, ${e(f)});
  }

  ::slotted([slot='tabs-bg-image']) {
    position: var(--ds-media-demo-bg-image-position, ${e(v)});
    width: var(--ds-media-demo-bg-image-width, ${e($)});
    height: var(--ds-media-demo-bg-image-height, ${e(x)});
    z-index: var(--ds-media-demo-bg-image-z-index, var(--ds-z-index-n1, ${e(k)}));
    padding-top: var(
      --ds-media-demo-bg-image-padding-top,
      ${e(S)}
    );

    --ds-media-width: 100%;
  }

  ::slotted(reimagine-tabs) {
    --ds-media-demo-tabs-margin-top: ${e(w)};
  }

  :host([tablist-off]) ::slotted(reimagine-tabs) {
    --ds-tabs-base-display: none;
    --ds-media-demo-tabs-margin-top: 0;
    --ds-media-demo-layout-column-padding-top: 0;
  }

  :host([tablist-off]) ::slotted([slot='tabs-bg-image']) {
    --ds-media-margin-block-start: 0;
    --ds-media-demo-bg-image-padding-top: 0;
  }

  :host([tablist-off]) .ui-shell-base {
    padding-block-end: var(--ds-media-demo-ui-shell-padding-block-end, 2rem);
  }

  :host([tablist-off]) {
    --ds-ui-shell-padding-block-end: 0;
  }

  .ui-shell-base {
    position: relative;
  }
`,j="0",I="0",z="1rem",O=t`
  @media (min-width: ${e(g.md)}) {
    ::slotted(reimagine-tabs) {
      --ds-tabs-compound-padding-block-end: var(--ds-app-space-micro-xl, 2rem);
      --ds-scrollslider-gap: 0;
    }
  }

  @media (max-width: ${e(b(g.md))}) {
    :host {
      --ds-ui-shell-padding-block-start: 1rem;
      --ds-ui-shell-padding-block-end: 1rem;
    }

    .body {
      --ds-tabs-base-viewport-width: calc(100% + var(--ds-container-padding-inline-end, 0));
    }

    ::slotted(reimagine-layout-column) {
      padding-top: var(
        --ds-media-demo-layout-column-padding-top,
        ${e(z)}
      );
    }

    ::slotted([slot='tabs-bg-image']) {
      --ds-media-demo-bg-image-padding-top: ${e(j)};
    }

    ::slotted(reimagine-tabs) {
      --ds-media-demo-tabs-margin-top: ${e(I)};
      --ds-tabs-compound-padding-block-end: 0;
    }
  }

  @media (max-width: ${e(b(g.sm))}) {
    .body {
      --ds-tabs-base-viewport-width: calc(100% + ${e(p.xs.paddingInlineStart)});
    }

    :host([tablist-off]) {
      --ds-ui-shell-content-row-gap: var(--ds-app-space-layout-stack-cozy, 1.5rem);
    }
  }
`;var _=Object.defineProperty,C=Object.getOwnPropertyDescriptor,E=Object.getPrototypeOf,P=Reflect.get,T=(e,t,a,i)=>{for(var s,d=i>1?void 0:i?C(t,a):t,o=e.length-1;o>=0;o--)(s=e[o])&&(d=(i?s(t,a,d):s(d))||d);return i&&d&&_(t,a,d),d};const U="reimagine-media-demo";let q=class extends n{constructor(){super(...arguments),this.tablistOff=!1,this._tabsBgImageSlotEmpty=!0}handleSlotChange(){const e=o(this,"reimagine-tabs"),t=o(e,"reimagine-tab-panel"),a=o(t,"reimagine-text-block");if(a&&(l(a,{alignment:"center"}),l(a,{size:1===a.children.length?c["size-2xs"]:c["size-xs"]})),t){const e=o(t,"reimagine-media"),a=o(t,"reimagine-related-products");l(e,{type:r.highlight}),l(a,{configuration:h.horizontal})}if(this.tablistOff){const e=o(o(this,"reimagine-layout-column"),"reimagine-media");l(e,{type:r.highlight})}}handleTabsBgImageSlotChange(){this._tabsBgImageSlotEmpty=0===this._tabsBgImageSlot.length;const e=o(this,"reimagine-tabs"),t=this.querySelector('[slot="tabs-bg-image"]');e&&t&&e.setAttribute("style","margin-top: var(--ds-media-demo-tabs-margin-top);")}renderUiShellBase(e,t=!1){return d`
      <div part="ui-shell-base" class="ui-shell-base">
        <div class="tabs-bg-image" style="${this._tabsBgImageSlotEmpty?"display: none":""}">
          <slot name="tabs-bg-image" @slotchange="${this.handleTabsBgImageSlotChange}"></slot>
        </div>
        ${t?d`<slot @slotchange="${this.handleUiShellBaseSlotChange}"></slot>`:e}
      </div>
    `}_renderBlade(){const e="container",t=d`
      <reimagine-layout>
        <reimagine-layout-column>
          <div class="body" part="body">
            <slot @slotchange=${this.handleSlotChange}></slot>
          </div>
        </reimagine-layout-column>
      </reimagine-layout>
    `;return this.baseContent?d` <div class=${e} part=${e}>${t}</div> `:d`
      <reimagine-container class=${e} part=${e}>
        ${t}
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var D,A,M;q.styles=[...(D=q,A=q,M="styles",P(E(D),M,A)||[]),B,O],T([a({attribute:"tablist-off",type:Boolean,reflect:!0})],q.prototype,"tablistOff",2),T([i()],q.prototype,"_tabsBgImageSlot",2),T([s()],q.prototype,"_tabsBgImageSlotEmpty",2),q=T([m(U)],q);export{q as MediaDemo,U as name};
