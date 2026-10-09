import{i as t,r as e,f as i,g as a,e as o,c as r,b as n}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{b as s,M as l,c}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{q as m,i as p,d as g}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{V as h}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{v as u}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{n as d}from"/__mirror/assets/b261b011546c5001df09e043";import{n as b}from"/__mirror/assets/bf0b3498e45fc20534cec8b1";const f=t`
  :host .container {
    display: flex;
    flex-direction: column;
    gap: var(--ds-app-space-micro-2xl, 3rem);
  }

  :host([media-orientation='mobile-stack']) {
    --ds-app-space-layout-stack-comfortable: 3.5rem;
  }

  :host([configuration='selector'][alignment='center']) ::slotted([slot='link_bar']) {
    max-width: fit-content;
    margin-inline: auto;
  }

  :host ::slotted([slot='link_bar']) {
    padding-bottom: var(--ds-app-space-micro-xl, 2rem);
  }
`,y=t`
  @media (min-width: ${e(u.lg)}) {
    :host {
      min-height: 680px;
    }

    :host .container .heading-block {
      padding-top: var(--ds-app-space-micro-xl, 2rem);
    }
  }

  @media (min-width: ${e(u.md)}) {
    :host([configuration='tab']),
    :host([configuration='selector'][alignment='left']) {
      --ds-heading-block-copy-padding: var(--ds-app-space-micro-2xl, 3rem);
    }
  }
`,v="tab",_="selector",k="center";var A=Object.defineProperty,x=Object.getOwnPropertyDescriptor,S=Object.getPrototypeOf,j=Reflect.get,w=(t,e,i,a)=>{for(var o,r=a>1?void 0:a?x(e,i):e,n=t.length-1;n>=0;n--)(o=t[n])&&(r=(a?o(e,i,r):o(r))||r);return a&&r&&A(e,i,r),r};const O="reimagine-hero-tabs";let $=class extends s{constructor(){super(),this.configuration=v,this.alignment=k,this._viewportResizeObserver=new h(this,{callback:this._updateMediaAspectRatio.bind(this)})}setDefaultAttributes(){this.hasAttribute("media-orientation")||this.setAttribute("media-orientation","mobile-stack")}_handleSlotChange(){const t=this.configuration===_,e=this.alignment===k,i=t&&e?"2xl":"l";this._defaultSlot.forEach(e=>{if(!("querySelector"in e))return;const a=m(e,d);a&&(a.hasAttribute("size")||a.setAttribute("size",i),t&&!a.hasAttribute("alignment")&&a.setAttribute("alignment",this.alignment))})}_updateMediaAspectRatio(){var t,e;const i=this._mediaSlot.filter(t=>p(t,b));null!=(t=this._viewportResizeObserver)&&t.isMobile()?i.forEach(t=>t.setAttribute("aspect-ratio",l.ratio16to9)):null!=(e=this._viewportResizeObserver)&&e.isDesktop()&&i.forEach(t=>t.setAttribute("aspect-ratio",l.ratio21to9))}_linkBarSlotChange(){const t=m(this,"reimagine-link-bar");if(!t)return;const e=this.configuration===v?"tab":"selector";t.setAttribute("configuration",e),"selector"===e&&!t.hasAttribute("alignment")&&t.setAttribute("alignment",this.alignment)}firstUpdated(){super.firstUpdated(),this.setDefaultAttributes()}_renderBlade(){const t=this.configuration===_,e=this.alignment===k,i=t&&e?c.col1staged:c.col2even,a=n`
      <reimagine-layout configuration=${i} part="heading-block" class="heading-block">
        <reimagine-layout-column>
          <slot @slotchange=${this._handleSlotChange}></slot>
        </reimagine-layout-column>
      </reimagine-layout>
    `,o=t?n`
          <reimagine-layout
            configuration=${c.col1even}
            part="link-bar"
            class="link-bar"
          >
            <reimagine-layout-column>
              <slot name="link_bar" @slotchange=${this._linkBarSlotChange}></slot>
            </reimagine-layout-column>
          </reimagine-layout>
        `:n`<slot name="link_bar" @slotchange=${this._linkBarSlotChange}></slot>`;return n`
      <reimagine-container class="container" part="container">
        ${a} ${o}
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var R,z,B;$.styles=[...(R=$,z=$,B="styles",j(S(R),B,z)),f,y],w([i()],$.prototype,"_viewportResizeObserver",2),w([a()],$.prototype,"_defaultSlot",2),w([o({slot:"ui-shell-media"})],$.prototype,"_mediaSlot",2),w([r({type:String,reflect:!0,attribute:"configuration"})],$.prototype,"configuration",2),w([r({type:String,reflect:!0,attribute:"alignment"})],$.prototype,"alignment",2),$=w([g(O)],$);export{$ as HeroTabs,O as name};
