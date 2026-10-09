import{i as e,r as t,g as i,f as o,b as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as s}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{b as a,c as d}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{b as l,v as n}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";const m=e`
  :host {
    --ds-hero-featured-foreground-image-vp1-min-height: 240px;
    --ds-hero-featured-foreground-image-vp2-min-height: 344px;
    --ds-hero-featured-foreground-image-vp3-min-height: 416px;
    --ds-hero-featured-foreground-image-vp4-min-height: 580px;
    --ds-media-slot-max-width: 100vw;
    --ds-media-slot-padding-inline: var(--ds-app-space-micro-m);
    overflow-x: hidden;
  }

  .has-breadcrumbs {
    --ds-media-slot-top-left-y: var(--ds-media-trigger-slot-offset-y);
    --ds-media-slot-top-right-y: var(--ds-media-trigger-slot-offset-y);
    --ds-media-slot-bottom-left-y: var(--ds-media-trigger-slot-offset-y);
    --ds-media-slot-bottom-right-y: var(--ds-media-trigger-slot-offset-y);
  }

  .ui-shell-base {
    display: none;
  }

  .ui-shell-media {
    position: relative;
  }

  .ui-shell-media.double-image {
    height: var(--ds-hero-featured-foreground-image-vp1-min-height);
  }

  .ui-shell-media .foreground-image {
    position: absolute;
    top: 0;
    height: 100%;
    z-index: var(--ds-z-index-20, 20);
    inset-inline-start: 50%;
    transform: translate(-50%, 0);
    pointer-events: none;
  }

  .ui-shell-media.foreground-only .foreground-image {
    position: relative;
    height: var(--ds-hero-featured-foreground-image-vp1-min-height);
    width: fit-content;
  }

  ::slotted([slot='ui-shell-media']) {
    --ds-media-slot-top-left-x: 0;
    --ds-media-slot-top-right-x: 0;
    --ds-media-slot-bottom-left-x: 0;
    --ds-media-slot-bottom-right-x: 0;
  }
`,h=e`
  /* VP2 and below */
  @media (max-width: ${t(l(n.md))}) {
    :host {
      padding-block-start: 0;
    }

    .has-breadcrumbs {
      --ds-media-trigger-slot-offset-y: unset;
    }

    ::slotted([slot='ui-shell-media']) {
      --ds-media-slot-max-width: 100vw;
      --ds-media-overlay-background: none;
    }
  }

  /* VP2 */
  @media (min-width: ${t(l(n.sm))}) {
    .ui-shell-media.double-image {
      height: var(--ds-hero-featured-foreground-image-vp2-min-height);
    }

    .ui-shell-media.foreground-only .foreground-image {
      height: var(--ds-hero-featured-foreground-image-vp2-min-height);
    }

    ::slotted([slot='ui-shell-media']) {
      --ds-media-slot-max-width: 1328px;
      --ds-media-slot-margin-inline: auto;
    }
  }

  /* VP3 */
  @media (min-width: ${t(l(n.md))}) {
    :host {
      min-height: var(--ds-hero-featured-foreground-image-vp3-min-height);
      justify-content: center;
    }

    ::slotted([slot='ui-shell-media']) {
      --ds-media-slot-padding-inline: 3.5rem;
      --ds-media-slot-margin-inline: 0;
    }

    .ui-shell-media {
      position: absolute;
      min-height: 100%;
    }

    .ui-shell-media .foreground-image {
      min-height: 100%;
      position: absolute;
      inset-inline-start: calc(50% + 3rem);
      top: 0;
      transform: unset;
    }

    .ui-shell-media.foreground-only .foreground-image {
      min-height: 100%;
    }
  }

  /* VP4 */
  @media (min-width: ${t(l(n.lg))}) {
    :host {
      min-height: var(--ds-hero-featured-foreground-image-vp4-min-height);
    }

    ::slotted([slot='ui-shell-media']) {
      --ds-media-slot-padding-inline: 5%;
      --ds-media-slot-margin-inline: auto;

      /* Vertical offset of media trigger to match blade design */
      --ds-media-trigger-slot-offset-y: 86px;
    }
  }
`;var g=Object.defineProperty,u=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,p=Reflect.get,v=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?u(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&g(t,i,s),s};const y="reimagine-hero-featured";let c=class extends a{constructor(){super(),this._breadcrumbsEmpty=!0,this._foregroundImageEmpty=!0,this.headerLayoutConfiguration||(this.headerLayoutConfiguration=d.col2even)}_renderOptionalSlot(e,t){return r`
      <div part=${e} class=${e} style="${t?"display: none;":""}">
        <slot name=${e} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_handleSlotChange(){var e,t,i,o,r;this._foregroundImageEmpty=0===(null==(e=this._foregroundImage)?void 0:e.length),this._foregroundImage&&!this.uiShellMedia&&(null==(i=null==(t=this.shadowRoot)?void 0:t.querySelector(".ui-shell-media"))||i.classList.add("foreground-only")),this._foregroundImage&&this.uiShellMedia&&(null==(r=null==(o=this.shadowRoot)?void 0:o.querySelector(".ui-shell-media"))||r.classList.add("double-image"))}_renderBlade(){return r`
      ${this._renderOptionalSlot("breadcrumbs",this._breadcrumbsEmpty)}
      <reimagine-container> </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}renderUiShellMediaSlot(){return r`
      <div
        part="ui-shell-media"
        class="ui-shell-media"
        style="${this.toggleDisplay(this._foregroundImageEmpty&&this.uiShellMediaSlotEmpty)}"
      >
        <slot name="ui-shell-media" @slotchange="${this.handleUiShellMediaSlotChange}"></slot>
        <div
          part="foreground-image"
          class="foreground-image"
          style="${this.toggleDisplay(this._foregroundImageEmpty)}"
        >
          <slot name="foreground-image" @slotchange="${this._handleSlotChange}"></slot>
        </div>
      </div>
    `}};var b,x,_;c.styles=[...(b=c,x=c,_="styles",p(f(b),_,x)||[]),m,h],v([i({slot:"foreground-image"})],c.prototype,"_foregroundImage",2),v([o()],c.prototype,"_breadcrumbsEmpty",2),v([o()],c.prototype,"_foregroundImageEmpty",2),c=v([s(y)],c);export{c as HeroFeatured,y as name};
