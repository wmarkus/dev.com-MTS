import{r as e,i as t,c as a,e as r,f as s,b as o}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{q as i,i as n,s as l,a as c,d}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{m as h,V as g,S as m,g as p,I as u}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{v as f}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{b as v,c as y,U as _,H as b}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";const C="center",S="var(--ds-app-space-micro-m, 1rem)",w="var(--ds-app-color-base-default-fg-body, #17253D)",E="flex",k="center",$="center",L="6rem",x=t`
  .ui-shell-header {
    padding-block-end: ${e("3rem")};
  }

  ::slotted([slot='cards-heading']) {
    font-size: var(
      --ds-hero-ai-search-cards-heading-font-size,
      ${e(h.fontSize)}
    ) !important;
    font-weight: var(
      --ds-hero-ai-search-cards-heading-font-weight,
      ${e(h.fontWeight)}
    ) !important;
    line-height: var(
      --ds-hero-ai-search-cards-heading-line-height,
      ${e(h.lineHeight)}
    ) !important;
    letter-spacing: var(
      --ds-hero-ai-search-cards-heading-letter-spacing,
      ${e(h.letterSpacing)}
    ) !important;
    text-align: var(
      --ds-hero-ai-search-cards-heading-text-align,
      ${e(C)}
    );
    padding-block-end: var(
      --ds-hero-ai-search-cards-heading-padding-bottom,
      ${e(S)}
    );
    color: var(
      --ds-hero-ai-search-cards-heading-color,
      ${e(w)}
    );
  }

  .search-bar {
    padding-block-start: var(
      --ds-hero-ai-search-search-bar-padding-top,
      ${e("3rem")}
    );
  }

  .footer {
    display: var(
      --ds-hero-ai-search-footer-display,
      ${e(E)}
    );
    justify-content: var(
      --ds-hero-ai-search-footer-justify-content,
      ${e(k)}
    );
    align-items: var(
      --ds-hero-ai-search-footer-align-items,
      ${e($)}
    );
    padding-block-start: var(
      --ds-hero-ai-search-footer-padding-top,
      ${e(L)}
    );
  }
`,A=t`
  @media (min-width: ${e(f.lg)}) {
    ::slotted(reimagine-carousel) {
      --ds-carousel-controls-display: none;
    }
  }

  @media (max-width: ${e(f.lg)}) {
    ::slotted(reimagine-carousel) {
      --ds-carousel-gap: 1rem;
    }

    .search-bar {
      --ds-search-bar-padding-top: 2rem;
    }
  }

  @media (max-width: ${e(f.md)}) {
    .footer {
      --ds-footer-padding-top: 2rem;

      ::slotted(reimagine-secondary-nav-item) {
        --ds-elevation-level-2: none;
      }
    }
  }
`;class T{constructor(e){this._aiAssistantComponent=void 0,this._chatTriggers=[],this.handleClick=e=>{var t;const a=e.currentTarget.querySelector('[slot="text-block__content"]'),r=(null==(t=null==a?void 0:a.textContent)?void 0:t.trim())||"";r&&this._aiAssistantComponent&&("handleChatPanelOpen"in this._aiAssistantComponent&&"function"==typeof this._aiAssistantComponent.handleChatPanelOpen?this._aiAssistantComponent.handleChatPanelOpen(r):console.warn("Warn: handleChatPanelOpen method does not exist on _aiAssistantComponent",this._aiAssistantComponent))},(this._host=e).addController(this)}hostConnected(){const e=i(document,"reimagine-ai-powered-assistant"),t=null==e?void 0:e.drawerElement;if(t)this.connectDrawerAndTriggers(t);else{const e=()=>{const e=i(document,"reimagine-ai-powered-assistant"),t=null==e?void 0:e.drawerElement;t&&this.connectDrawerAndTriggers(t)};window.addEventListener("reimagine-ai-powered-assistant-drawer-ready",e,{once:!0}),window.addEventListener("reimagine-ai-powered-assistant-drawer-pricing-hub-ready",e,{once:!0})}}hostDisconnected(){this.removeEventListeners()}refreshTriggers(){this.removeEventListeners(),this.updateChatTriggers(),this.addEventListeners()}connectDrawerAndTriggers(e){this._aiAssistantComponent=e,this.updateChatTriggers(),this.addEventListeners()}updateChatTriggers(){this._chatTriggers=Array.from(this._host.querySelectorAll("[chat-trigger]"))}addEventListeners(){this._chatTriggers.forEach(e=>{e.addEventListener("click",this.handleClick)})}removeEventListeners(){this._chatTriggers.forEach(e=>{e.removeEventListener("click",this.handleClick)})}}var O=Object.defineProperty,z=Object.getOwnPropertyDescriptor,j=Object.getPrototypeOf,B=Reflect.get,D=(e,t,a,r)=>{for(var s,o=r>1?void 0:r?z(t,a):t,i=e.length-1;i>=0;i--)(s=e[i])&&(o=(r?s(t,a,o):s(o))||o);return r&&o&&O(t,a,o),o};const F="reimagine-hero-ai-search";let H=class extends v{constructor(){super(),this._cardsSlotEmpty=!0,this._footerSlotEmpty=!0,this._clickToChatController=new T(this),this.headerLayoutConfiguration||(this.headerLayoutConfiguration=y.col1staged),this.topBreadth||(this.topBreadth=_.comfortable),this.bottomBreadth||(this.bottomBreadth=_.cozy),this._resizeObserver||(this._resizeObserver=new g(this,{callback:()=>this._updateJumpLinkSurface()}))}_handleCarouselSlotChange(){var e;if(this._cardsSlotEmpty=0===this._cardsSlot.length,this._cardsSlotEmpty)return;const t={"control-position":p.bottomStart,"full-bleed":""},a=this._cardsSlot.find(e=>n(e,"reimagine-carousel"));if(!a)return;l(a,t),l(a,{"layout-configuration":y.card4},!0);const r=c(a,"reimagine-card-badge"),s={clickable:"","chat-trigger":"",tabindex:"0"};r.forEach(e=>{l(e,s),l(e,{surface:m.glass},!0)}),null==(e=this._clickToChatController)||e.refreshTriggers(),c(a,"reimagine-layout-column").forEach(e=>{e.style.minWidth="296px",e.style.maxWidth="320px"})}_handleFooterSlotChange(){const e=this._getJumpLinkFromFooterSlot();if(!e)return;const t={surface:m.glass,configuration:u.vertical};l(e,t,!0)}_updateJumpLinkSurface(){var e,t;const a=this._getJumpLinkFromFooterSlot();if(!a)return;const r=null!=(t=null==(e=this._resizeObserver)?void 0:e.isMobile)&&t.call(e)?m.transparent:m.glass;a.setAttribute("surface",r)}_getJumpLinkFromFooterSlot(){return this._footerSlotEmpty=0===this._footerSlot.length,this._footerSlotEmpty?null:this._footerSlot.find(e=>n(e,"reimagine-secondary-nav-item"))??null}setHeaderHeadingBlockDefaults(e){super.setHeaderHeadingBlockDefaults(e);const t=e.getAttribute("size");(!t||t===b["size-md"])&&l(e,{size:b["size-xl"]},!0)}_renderBlade(){return o`
      <div part="base" class="base">
        <reimagine-container part="container" class="container">
          <reimagine-layout configuration=${y.col1focus}>
            <reimagine-layout-column part="cards-heading" class="cards-heading">
              <slot name="cards-heading"></slot>
            </reimagine-layout-column>
          </reimagine-layout>

          <reimagine-layout
            part="cards"
            class="cards"
            configuration=${y.col1even}
          >
            <reimagine-layout-column>
              <slot name="cards" @slotchange=${this._handleCarouselSlotChange}></slot>
            </reimagine-layout-column>
          </reimagine-layout>

          <reimagine-layout configuration=${y.col1even}>
            <reimagine-layout-column part="search-bar" class="search-bar">
              <slot name="search-bar"></slot>
            </reimagine-layout-column>
          </reimagine-layout>

          <div part="footer" class="footer">
            <reimagine-layout configuration=${y.col1focus}>
              <reimagine-layout-column>
                <slot name="footer" @slotchange=${this._handleFooterSlotChange}></slot>
              </reimagine-layout-column>
            </reimagine-layout>
          </div>
        </reimagine-container>
      </div>
    `}render(){return this.renderUiShell(this._renderBlade())}};var P,J,W;H.styles=[...(P=H,J=H,W="styles",B(j(P),W,J)||[]),x,A],D([a({reflect:!0})],H.prototype,"theme",2),D([r({slot:"cards"})],H.prototype,"_cardsSlot",2),D([r({slot:"footer"})],H.prototype,"_footerSlot",2),D([s()],H.prototype,"_cardsSlotEmpty",2),D([s()],H.prototype,"_footerSlotEmpty",2),H=D([d(F)],H);export{H as HeroAiSearch,F as name};
