import{r as t,i as a,c as i,e,k as o,f as s,b as n}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{e as r,b as l,c as d,r as c,M as h}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{i as g,s as m,a as p,d as y}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{V as f}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{a as u,m as _,v as b}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{n as M}from"/__mirror/assets/42f825e3dad9c53f1fc34d82";import{n as S}from"/__mirror/assets/bf0b3498e45fc20534cec8b1";const v={containerMaxWidth:u.xs,containerWidth:"100%",containerMarginInlineStart:_.xs.marginInlineStart,containerMarginInlineEnd:_.xs.marginInlineEnd},x=a`
  :host {
    --ds-media-ump-height: 100%;
    --ds-media-ump-min-width: auto;
    --ds-media-ump-min-height: auto;
  }

  .media-tabs-container {
    position: relative;
    max-width: var(
      --ds-media-tabs-container-max-width,
      ${t(v.containerMaxWidth)}
    );
    width: var(--ds-media-tabs-container-width, ${t(v.containerWidth)});
    margin-inline-start: var(
      --ds-media-tabs-container-margin-inline-start,
      ${t(v.containerMarginInlineStart)}
    );
    margin-inline-end: var(
      --ds-media-tabs-container-margin-inline-end,
      ${t(v.containerMarginInlineEnd)}
    );
  }

  .floating-asset-primary,
  .floating-asset-secondary {
    display: none;
    width: 240px;
    position: absolute;
    z-index: var(--ds-z-index-0, 0);
    pointer-events: none;
  }

  .floating-asset-primary {
    inset-block: 0 auto;
    inset-inline: 0 auto;
  }

  .floating-asset-secondary {
    inset-block: auto 50px;
    inset-inline: auto 0;
  }

  :host([float-asset-configuration='right-top']) .floating-asset-primary {
    inset-block: auto 50px;
  }

  :host([float-asset-configuration='right-top']) .floating-asset-secondary {
    inset-block: 0 auto;
  }

  .floating-asset-secondary.floating-asset-bottom-0,
  :host([float-asset-configuration='right-top']) .floating-asset-primary.floating-asset-bottom-0 {
    inset-block: auto 0;
  }

  :host ::slotted(*) {
    --ds-carousel-item-padding-block: ${t(r)};
    --ds-carousel-item-padding-inline: ${t(r)};
    --ds-carousel-item-outline-offset: calc(-1 * ${t(r)});
    --ds-media-box-sizing: border-box;
    --ds-media-width: 100%;
    --ds-media-max-width: 100%;
    --ds-media-asset-width: 100%;
    --ds-media-height: 100%;
    --ds-media-asset-height: 100%;
  }

  :host ::slotted(reimagine-carousel) {
    --ds-layout-justify-content: flex-start;
  }
`,E=a`
  @media (min-width: ${t(b.md)}) {
    .floating-asset-primary,
    .floating-asset-secondary {
      display: block;
      width: 240px;
    }

    .floating-asset-secondary,
    :host([float-asset-configuration='right-top']) .floating-asset-primary {
      inset-block: auto 140px;
    }

    :host([float-asset-configuration='right-top']) .floating-asset-secondary {
      inset-block: 0 auto;
    }

    .floating-asset-secondary.floating-asset-bottom,
    :host([float-asset-configuration='right-top']) .floating-asset-primary.floating-asset-bottom {
      inset-block: auto 50px;
    }
  }

  @media (min-width: ${t(b.lg)}) {
    .floating-asset-primary,
    .floating-asset-secondary {
      display: block;
      width: 400px;
    }
  }
`,w="left-top",$="right-top",C="scroll",k="slide-in-bottom",j="delay-0",F="short-2",O="scroll",I="slide-in-bottom",P="delay-5",A="long-2";var z=Object.defineProperty,B=Object.getOwnPropertyDescriptor,V=Object.getPrototypeOf,L=Reflect.get,R=(t,a,i,e)=>{for(var o,s=e>1?void 0:e?B(a,i):a,n=t.length-1;n>=0;n--)(o=t[n])&&(s=(e?o(a,i,s):o(s))||s);return e&&s&&z(a,i,s),s};const T="reimagine-high-impact-media-tabs";let W=class extends l{constructor(){super(),this.floatAssetConfiguration=w,this._primaryMediaSlotEmpty=!0,this._secondaryMediaSlotEmpty=!0,this._layoutConfiguration=d.col1boxed,this._carousels=[],this._debouncedHandleViewportChange=c(100,this._handleViewportChange.bind(this)),this.headerLayoutConfiguration=d.col1focus,this._viewportResizeObserver=new f(this,{callback:()=>{this._debouncedHandleViewportChange()}})}_handleSlotChange(){const t=[];this._defaultSlot.forEach(a=>{g(a,M)?this._carousels.push(a):g(a,S)&&t.push(a)}),this._carousels.length>0&&this._carousels.forEach(t=>{m(t,{"indicator-configuration":"tabs","layout-configuration":d.card1},!0),p(t,S).forEach(t=>{m(t,{"aspect-ratio":h.ratio16to9,type:"highlight--glass"},!0)})}),t.length>0&&t.forEach(t=>{m(t,{"aspect-ratio":h.ratio16to9,type:"highlight--glass"},!0)})}_handleViewportChange(){const t=this._viewportResizeObserver.isDesktop();this._layoutConfiguration=t?d.col1boxed:d.col1staged,this._updatedFloatingMediaPosition()}_updatedFloatingMediaPosition(){0===this._carousels.length&&this._setFloatingAssetBottom("floating-asset-bottom-0",!0),this._carousels.forEach(t=>{var a;const i=null==(a=t.shadowRoot)?void 0:a.querySelector(".carousel__controls");if(i){const t="none"===globalThis.getComputedStyle(i).display;this._setFloatingAssetBottom("floating-asset-bottom",t)}})}_setFloatingAssetBottom(t,a){this.floatAssetConfiguration===$?this._primaryMediaElement.classList.toggle(t,a):this._secondaryMediaElement.classList.toggle(t,a)}_configureFloatingMediaSlot(t,a,i,e,o){t.forEach(t=>{if(t.nodeType===Node.ELEMENT_NODE){const s=t;g(s,S)&&m(s,{"aspect-ratio":h.ratio1to1,"animation-view":a,"animation-enter":i,"animation-delay":e,"animation-duration":o})}})}_handlePrimaryMediaSlotChange(){this._primaryMediaSlotEmpty=0===this._primaryMediaSlot.length,!this._primaryMediaSlotEmpty&&this._configureFloatingMediaSlot(this._primaryMediaSlot,C,k,j,F)}_handleSecondaryMediaSlotChange(){this._secondaryMediaSlotEmpty=0===this._secondaryMediaSlot.length,!this._secondaryMediaSlotEmpty&&this._configureFloatingMediaSlot(this._secondaryMediaSlot,O,I,P,A)}_renderFloatingMedia(){return n`
      <div
        part="floating-asset-primary"
        class="floating-asset-primary"
        style="${this._primaryMediaSlotEmpty?"display: none;":""}"
      >
        <slot
          name="floating-asset-primary"
          @slotchange=${this._handlePrimaryMediaSlotChange}
        ></slot>
      </div>
      <div
        part="floating-asset-secondary"
        class="floating-asset-secondary"
        style="${this._secondaryMediaSlotEmpty?"display: none;":""}"
      >
        <slot
          name="floating-asset-secondary"
          @slotchange=${this._handleSecondaryMediaSlotChange}
        ></slot>
      </div>
    `}_renderBlade(){const t="container",a=n`
      <reimagine-layout configuration="${this._layoutConfiguration}">
        <reimagine-layout-column>
          <div class="body" part="body">
            <slot @slotchange=${this._handleSlotChange}></slot>
          </div>
        </reimagine-layout-column>
      </reimagine-layout>
    `;return this.baseContent?n`
        <div class="media-tabs-container">
          ${this._renderFloatingMedia()}
          <div class=${t} part=${t}>${a}</div>
        </div>
      `:n`
      <div class="media-tabs-container">
        ${this._renderFloatingMedia()}
        <reimagine-container class=${t} part=${t}>
          ${a}
        </reimagine-container>
      </div>
    `}disconnectedCallback(){super.disconnectedCallback(),this._carousels.length=0}render(){return this.renderUiShell(this._renderBlade())}};var D,H,N;W.styles=[...(D=W,H=W,N="styles",L(V(D),N,H)||[]),x,E],R([i({attribute:"float-asset-configuration",reflect:!0})],W.prototype,"floatAssetConfiguration",2),R([e({slot:"floating-asset-primary"})],W.prototype,"_primaryMediaSlot",2),R([o(".floating-asset-primary")],W.prototype,"_primaryMediaElement",2),R([s()],W.prototype,"_primaryMediaSlotEmpty",2),R([e({slot:"floating-asset-secondary"})],W.prototype,"_secondaryMediaSlot",2),R([o(".floating-asset-secondary")],W.prototype,"_secondaryMediaElement",2),R([s()],W.prototype,"_secondaryMediaSlotEmpty",2),R([e()],W.prototype,"_defaultSlot",2),R([s()],W.prototype,"_layoutConfiguration",2),W=R([y(T)],W);export{W as HighImpactMediaTabs,T as name};
