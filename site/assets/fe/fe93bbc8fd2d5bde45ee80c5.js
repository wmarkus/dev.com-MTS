import{i as e,r as t,g as a,f as i,b as s}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i as r,c as n,a as o,q as l,b as d,e as c,f as h,d as p}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{b as m,c as g}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{V as u}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{v as b,b as _}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";const v=e`
  :host {
    display: flex;
  }

  /* Nested blades (inside tab panels) should not stretch vertically */
  :host([nested]) {
    height: auto !important;
  }

  :host([nested]) reimagine-layout,
  :host([nested]) reimagine-layout-column {
    height: auto !important;
    min-height: auto !important;
    flex: none !important;
  }

  :host([nested]) ::slotted(reimagine-media) {
    height: auto !important;
    max-height: none !important;
  }

  ::slotted(reimagine-media) {
    --ds-media-box-shadow: none;
  }

  ::slotted(reimagine-card-badge) {
    width: 100%;

    --ds-surface-box-shadow: none;
  }

  ::slotted(reimagine-tabs) {
    --ds-ui-shell-padding-block-start: 0;
    --ds-ui-shell-padding-block-end: 0;
  }

  reimagine-layout-column {
    position: relative;
  }

  .cards {
    display: flex;
    margin-block-start: var(--ds-app-space-micro-m, 1rem);
    margin-block-end: var(--ds-app-space-micro-xs, 0.5rem);
    row-gap: var(--ds-app-space-micro-xs, 0.5rem);
    column-gap: var(--ds-app-space-micro-m, 1rem);
    flex-direction: column;
  }

  .cards ::slotted(:not([collapsible-content])) {
    height: auto;
  }
`,f=e`
  /* (VP3 and VP4) */
  @media (min-width: ${t(b.md)}) {
    .cards {
      position: absolute;
      inset: auto var(--ds-app-space-micro-xl, 2rem) var(--ds-app-space-micro-xl, 2rem);
      margin-block: 0;
      flex-direction: row;
    }

    ::slotted([collapsible-content]) {
      --ds-collapse-button-display: flex;

      align-self: flex-end;
    }
  }

  /* (VP1 and VP2) */
  @media (max-width: ${t(_(b.md))}) {
    reimagine-layout:not([part*='ui-shell-header']) {
      padding: var(--ds-app-space-micro-xs, 0.5rem);
      border-radius: var(--ds-app-space-micro-m, 1rem);
      background-color: var(--ds-app-color-surface-solid-bg-default, #fefefe);
    }

    :host([selector]) reimagine-layout {
      background-color: transparent;
    }

    :host([nested]) {
      background-color: var(--ds-app-color-surface-solid-bg-default, #fefefe);
      border-radius: var(--ds-app-space-micro-m, 1rem);
      gap: 0;
    }

    .selector-layout {
      padding: 0 !important;
    }

    :host ::slotted(reimagine-media) {
      padding: 0;
      transition: none !important;
      translate: 0 !important;
    }

    ::slotted([collapsible-content]) {
      --ds-collapse-button-display: none;
    }

    ::slotted(reimagine-card-badge) {
      --ds-surface-border-color: var(--ds-app-color-surface-solid-border-default, #e6f2fb) !important;
    }
  }
`;var y=Object.defineProperty,M=Object.getOwnPropertyDescriptor,C=Object.getPrototypeOf,E=Reflect.get,O=(e,t,a,i)=>{for(var s,r=i>1?void 0:i?M(t,a):t,n=e.length-1;n>=0;n--)(s=e[n])&&(r=(i?s(t,a,r):s(r))||r);return i&&r&&y(t,a,r),r};const w="reimagine-stats-featured";let x=class extends m{constructor(){super(),this._hasTabs=!1,this._featuredEvents=[],this._activeCardsByTabPanel=new WeakMap,this._isInTabPanel=!1,this._handleCardBadgeOpened=e=>{var t;const a=e.target,i=r(a,"reimagine-card-badge")?a:n(a,"reimagine-card-badge");if(!i)return;const s=n(i,"reimagine-tab-panel"),l=s&&this.contains(s)?s:null;let d;if(this._refreshMediaMinHeight(),null!=(t=this._viewportResizeObserver)&&t.isMobile())return;l?(d=o(l,"reimagine-card-badge","[collapsible-content]"),this._activeCardsByTabPanel.set(l,i)):(d=o(this,"reimagine-card-badge","[collapsible-content]").filter(e=>e.parentElement===this),this._activeCard=i),d.forEach(e=>{e!==i&&e.collapsibleContentOpen&&(e.collapsibleContentOpen=!1)});const c=i.getAttribute("data-media-src");c&&this._updateMediaImage(c,l||void 0)},this._handleCardBadgeClosed=e=>{var t;const a=e.target,i=r(a,"reimagine-card-badge")?a:n(a,"reimagine-card-badge");if(!i)return;const s=n(i,"reimagine-tab-panel"),d=s&&this.contains(s)?s:null;if(null!=(t=this._viewportResizeObserver)&&t.isMobile())return void(i.collapsibleContentOpen=!0);let c;d?(c=o(d,"reimagine-card-badge","[collapsible-content]"),this._activeCardsByTabPanel.get(d)===i&&this._activeCardsByTabPanel.delete(d)):(c=o(this,"reimagine-card-badge","[collapsible-content]").filter(e=>e.parentElement===this),this._activeCard===i&&(this._activeCard=void 0)),c.some(e=>e.collapsibleContentOpen)||(this._updateMediaImage(void 0,d||void 0),d?this._resetMediaMinHeight(l(d,"reimagine-media")):this._resetMediaMinHeight(this.mediaElements[0]??null))},this.headerLayoutConfiguration||(this.headerLayoutConfiguration=g.col1focus)}get mediaElements(){return d(this._assignedElements,"reimagine-media")}get tabElements(){return d(this._assignedElements,"reimagine-tabs")}_handleSlotChange(){var e;const t=((null==(e=this.tabElements)?void 0:e.length)??0)>0;this._hasTabs!==t&&(this._hasTabs=t)}_suppressTransitions(e,t){const a=e.map(e=>l(e.shadowRoot,"reimagine-accordion-item"));e.forEach((e,i)=>{e.style.transition="none";const s=a[i];s&&(s.style.transition="none"),e.collapsibleContentOpen=t}),requestAnimationFrame(()=>{e.forEach((e,t)=>{e.style.removeProperty("transition");const i=a[t];i&&i.style.removeProperty("transition")})})}_handleViewportChange(){var e;const t=null==(e=this._viewportResizeObserver)?void 0:e.isMobile();if(t===this._lastMobileState)return;this._lastMobileState=t;const a=o(this,"reimagine-card-badge","[collapsible-content]").filter(e=>e.parentElement===this);if(a.length>0)if(t)this._suppressTransitions(a,!0),this._updateMediaImage(),this.mediaElements.forEach(e=>{e.style.minHeight=""});else if(this._suppressTransitions(a,!1),this._activeCard&&a.includes(this._activeCard)){this._activeCard.collapsibleContentOpen=!0;const e=this._activeCard.getAttribute("data-media-src");e?this._updateMediaImage(e):this._updateMediaImage()}else this._updateMediaImage();this._isInTabPanel||Array.from(o(this,"reimagine-tab-panel")).forEach(e=>{if(l(e,"reimagine-stats-featured"))return;const a=o(e,"reimagine-card-badge","[collapsible-content]");if(0!==a.length)if(t)this._suppressTransitions(a,!0),this._updateMediaImage(void 0,e);else{this._suppressTransitions(a,!1);const t=this._activeCardsByTabPanel.get(e);if(t&&a.includes(t)){t.collapsibleContentOpen=!0;const a=t.getAttribute("data-media-src");a?this._updateMediaImage(a,e):this._updateMediaImage(void 0,e)}else this._updateMediaImage(void 0,e)}})}_updateMediaImage(e,t){const a=t?this.mediaElements.find(e=>t.contains(e)):this.mediaElements[0],i=null==a?void 0:a.querySelector('img[slot="media__asset"]');if(i){this._defaultMediaSrc||(this._defaultMediaSrc=i.src);const t=e||this._defaultMediaSrc||i.src;e&&i.src!==t&&a&&(a.style.transition="none",a.style.opacity="0",a.style.translate="-20px",a.offsetHeight,a.style.transition="opacity var(--ds-motion-duration-long1) var(--ds-motion-easing-enter), translate var(--ds-motion-duration-long1) var(--ds-motion-easing-enter)",a.style.opacity="1",a.style.translate="-10px",a.style.width="100%"),i.src=t}}_setupCardResizeObserver(){var e;null==(e=this._cardResizeObserver)||e.disconnect(),this._cardResizeObserver=new ResizeObserver(()=>{this._refreshMediaMinHeight()}),o(this,"reimagine-card-badge").forEach(e=>{this._cardResizeObserver.observe(e)})}_refreshMediaMinHeight(){var e;if(null!=(e=this._viewportResizeObserver)&&e.isMobile())return;const t=o(this,"reimagine-card-badge",":not([collapsible-content])").filter(e=>e.parentElement===this);t.length>0&&this._applyStaticMediaMinHeight(t,this.mediaElements[0]??null),this._activeCard&&this._applyMediaMinHeight(this._activeCard,this.mediaElements[0]??null),this._isInTabPanel||Array.from(o(this,"reimagine-tab-panel")).forEach(e=>{const t=l(e,"reimagine-media"),a=o(e,"reimagine-card-badge",":not([collapsible-content])");a.length>0&&this._applyStaticMediaMinHeight(a,t);const i=this._activeCardsByTabPanel.get(e);i&&this._applyMediaMinHeight(i,t)})}_applyStaticMediaMinHeight(e,t){if(!t||0===e.length)return;let a=0;for(const t of e)a=Math.max(a,t.getBoundingClientRect().height);if(a>0){const e=a/.4;t.style.minHeight=`${e}px`;const i=t.querySelector('img[slot="media__asset"]');i&&(i.style.objectFit="cover",i.style.height="100%")}}_applyMediaMinHeight(e,t){if(!t)return;const a=e.getBoundingClientRect().height;if(a>0){const e=a/.4;if(e>(parseFloat(t.style.minHeight)||0)){t.style.minHeight=`${e}px`;const a=t.querySelector('img[slot="media__asset"]');a&&(a.style.objectFit="cover",a.style.height="100%")}}}_resetMediaMinHeight(e){if(!e)return;e.style.minHeight="",e.style.removeProperty("transition"),e.style.removeProperty("opacity"),e.style.removeProperty("translate"),e.style.removeProperty("width");const t=e.querySelector('img[slot="media__asset"]');t&&(t.style.objectFit="",t.style.height="")}_renderBlade(){const e="container",t=s`
      <reimagine-layout
        configuration=${g.col1even}
        class=${this._hasTabs?"selector-layout":""}
        part=${this._hasTabs?"selector-layout":""}
      >
        <reimagine-layout-column>
          <slot @slotchange=${this._handleSlotChange}></slot>
          <div part="cards" class="cards">
            <slot name="card"></slot>
          </div>
        </reimagine-layout-column>
      </reimagine-layout>
    `;return this.baseContent?s` <div class=${e} part=${e}>${t}</div> `:s`
      <reimagine-container part=${e} class="${e}">
        ${t}
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}async firstUpdated(){await this.updateComplete,this._setupCardResizeObserver(),this._refreshMediaMinHeight()}connectedCallback(){var e;super.connectedCallback(),this._isInTabPanel=!!n(this,"reimagine-tab-panel"),this._isInTabPanel&&(this.baseContent=!0,this.setAttribute("nested",""),null==(e=n(this.parentElement,"reimagine-stats-featured"))||e.setAttribute("selector","")),this._viewportResizeObserver=new u(this,{callback:()=>this._handleViewportChange()}),this._featuredEvents.push({el:this,type:"card-badge-opened",handler:this._handleCardBadgeOpened},{el:this,type:"card-badge-closed",handler:this._handleCardBadgeClosed}),c(this._featuredEvents)}disconnectedCallback(){var e,t;super.disconnectedCallback(),null==(e=this._cardResizeObserver)||e.disconnect(),this._cardResizeObserver=void 0,null==(t=this._viewportResizeObserver)||t.hostDisconnected(),h(this._featuredEvents)}};var P,T,H;x.styles=[...(P=x,T=x,H="styles",E(C(P),H,T)||[]),v,f],O([a({flatten:!0})],x.prototype,"_assignedElements",2),O([i()],x.prototype,"_hasTabs",2),x=O([p(w)],x);export{x as StatsFeatured,w as name};
