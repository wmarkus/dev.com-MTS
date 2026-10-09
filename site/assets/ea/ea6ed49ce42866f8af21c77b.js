import{r as t,i as e,e as o,k as n,f as i,c as s,o as l,b as a}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{r,s as d,i as h,f as p,e as u,d as m}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{b as g,w as y,i as _,M as v,h as c,H as b,u as E}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{V as B}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{b as C,v as w}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{n as f}from"/__mirror/assets/bf0b3498e45fc20534cec8b1";import{n as x}from"/__mirror/assets/b261b011546c5001df09e043";const O=1280,S=4,V=4,P={toggleOverlay:"toggle-overlay"},M=()=>window.matchMedia("(min-width: 1280px)").matches,$="50",T=e`
  :host {
    --ds-big-play-button-padding: 14px;
    --ds-big-play-button-width: 48px;
    --ds-big-play-button-height: 48px;
    --ds-big-play-button-border: none;
    --ds-big-play-button-icon-width: 20px;
    --ds-big-play-button-icon-height: 20px;
    display: flex;
    flex-direction: column;
    position: relative;
    outline: var(--ds-media-playlist-video-item-outline, none);
    outline-offset: var(--ds-media-playlist-video-item-outline-offset, 0);
  }

  .overlay-content-container {
    padding: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: var(
      --media-playlist-video-overlay-bottom-spacing,
      ${t("250px")}
    );
    width: 100%;
    max-width: 1328px;
    text-align: center;
    z-index: var(
      --media-playlist-video-overlay-z-index,
      var(--ds-z-index-50, ${t($)})
    );
    overflow: hidden;
    transition: bottom 0.5s ease-in-out;
  }

  .overlay-content-container.overlay-hidden {
    --media-playlist-video-overlay-bottom-spacing: 55px;
  }

  .hidden {
    display: none;
  }

  .toggle-button-container {
    margin-bottom: var(--ds-app-space-micro-m);
  }
`,L=e`
  @media (max-width: ${t(C("1280px"))}) {
    :host {
      --ds-big-play-button-padding: 12px;
      --ds-big-play-button-width: 40px;
      --ds-big-play-button-height: 40px;
      --ds-big-play-button-icon-width: 14px;
      --ds-big-play-button-icon-height: 14px;
    }

    .overlay-content-container {
      position: static;
      padding-top: var(--ds-app-space-micro-l, 1.5rem);
      padding-inline: var(--ds-app-space-micro-l, 1.5rem);
      transform: none;
      left: revert;
      width: 100%;
      order: 1;
    }

    .toggle-button {
      display: none;
    }
  }

  @media (max-width: ${t(C(w.sm))}) {
    .overlay-content-container {
      padding-inline: var(--ds-app-space-micro-l, 1.5rem);
    }
  }
`,U="universal-media-player",A="video",j="ump-controls",k="ump-control-bar",D="ump-big-play-button",R=".controls";var z=Object.defineProperty,I=Object.getOwnPropertyDescriptor,H=Object.getPrototypeOf,q=Reflect.get,N=(t,e,o,n)=>{for(var i,s=n>1?void 0:n?I(e,o):e,l=t.length-1;l>=0;l--)(i=t[l])&&(s=(n?i(e,o,s):i(s))||s);return n&&s&&z(e,o,s),s};const G="reimagine-media-playlist-video-item";let Z=class extends g{constructor(){super(),this._overlayContentSlotEmpty=!0,this._mediaSlotEmpty=!0,this._toggleDownButtonAriaLabel="Hide overlay content",this._toggleUpButtonAriaLabel="Show overlay content",this._overlayContentZIndex=11,this.events=[],this.umpEvents=[],this._styleInjected=!1,this._viewportResizeObserver=new B(this,{callback:()=>this._handleViewportChange()}),this.baseContent=!0}pauseVideo(){this._umpVideoElement&&this._umpVideoElement.pause instanceof Function&&this._umpVideoElement.pause()}isVideoPaused(){return!this._umpVideoElement||this._umpVideoElement.paused}showOverlayControls(){this._handleToggleButtonClick(!0,!1)}isOverlayVisible(){var t;return!(null!=(t=this._overlayContentContainer)&&t.classList.contains("overlay-hidden"))}_getUMPElements(){!this._umpElement||!this._umpElement.shadowRoot||(this._umpVideoElement=this._umpElement.shadowRoot.querySelector(A),this._umpControl=this._umpElement.shadowRoot.querySelector(j),this._umpControl&&this._umpControl.shadowRoot&&(this._umpControlElement=this._umpControl.shadowRoot.querySelector(R),this._umpControlBar=this._umpControl.shadowRoot.querySelector(k),this._umpVideoBigPlayButton=this._umpControl.shadowRoot.querySelector(D)))}_handleViewportChange(){var t;const e=M();this._mediaElement&&null!=(t=this._viewportResizeObserver)&&t.isXsmall()?r(this._mediaElement,["aspect-ratio"]):d(this._mediaElement,{"aspect-ratio":`${v.ratio16to9}`}),this._updateUMPVideoElementStyle();const o=this.isVideoPaused();e?(this._toggleOverlayContentHeading(o),this._toggleMediaOverlay(o),this._toggleOverlayToggleButtons(o,!1),this._toggleButtonGroup(!this._umpVideoBigPlayButton)):(this._toggleOverlayContentHeading(!0),this._toggleMediaOverlay(!1),this._toggleButtonGroup(!1))}_overlayContentSlotChange(){if(this._overlayContentSlotEmpty=0===this._overlayContentSlot.length,this._overlayContentSlotEmpty)return;const t=this._overlayContentSlot[0];t instanceof HTMLElement&&h(t,x)&&d(t,{size:b["size-sm"],alignment:c.center}),this._bindToggleButtonEvents(),this._toggleButtonGroup(!1)}_mediaSlotChange(){if(this._mediaSlotEmpty=0===this._mediaSlot.length,this._mediaSlotEmpty)return;const t=M(),e=this._mediaSlot[0];e instanceof HTMLElement&&h(e,f)&&(this._mediaElement=e,this._umpElement=this._mediaElement.querySelector(U),t&&d(this._mediaElement,{overlay:`${E.overlayAssetBottom3}`}),d(this._mediaElement,{"aspect-ratio":`${v.ratio16to9}`})),this._umpElement&&requestAnimationFrame(()=>{this._bindUMPEvents()})}_bindUMPEvents(){this._umpElement&&(p(this.umpEvents),this.umpEvents.push({el:this._umpElement,type:"ready",handler:()=>{this._getUMPElements(),this._updateUMPVideoElementStyle(),this._observeUMPState();const t=this.isVideoPaused()&&M();this._toggleMediaOverlay(t),this._toggleButtonGroup(!this._umpVideoBigPlayButton)}},{el:this._umpElement,type:"play",handler:this._handleToggleButtonClick.bind(this,!1,!1)})),u(this.umpEvents)}_bindToggleButtonEvents(){p(this.events),this.events.push({el:this._toggleButtonUp,type:"click",handler:this._handleToggleButtonClick.bind(this,!0,!0)},{el:this._toggleButtonDown,type:"click",handler:this._handleToggleButtonClick.bind(this,!1,!0)}),u(this.events)}_removeAllEvents(){this.events.length>0&&(p(this.events),this.events=[]),this.umpEvents.length>0&&(p(this.umpEvents),this.umpEvents=[])}_handleToggleButtonClick(t,e=!0){var o;M()&&(this._toggleMediaOverlay(t),this._toggleOverlayContentHeading(t),this._toggleOverlayToggleButtons(t,e),t&&(null==(o=this._umpVideoElement)||o.pause()),this.dispatchEvent(new CustomEvent("toggle-overlay",{bubbles:!0,detail:{isOverlayContentVisible:t,byClick:e}})))}_toggleOverlayToggleButtons(t,e=!0){this._toggleButtonDown.classList.toggle("hidden",!t),this._toggleButtonUp.classList.toggle("hidden",t),this._overlayContentContainer.classList.toggle("overlay-hidden",!t),e&&(t?this._toggleButtonDown.focus():this._toggleButtonUp.focus())}_toggleOverlayContentHeading(t){this._overlayContentElement&&(t?this._overlayContentElement.classList.remove("hidden"):this._overlayContentElement.classList.add("hidden"))}_toggleMediaOverlay(t){var e,o;this._mediaElement&&(t?(d(this._mediaElement,{overlay:`${E.overlayAssetBottom3}`}),d(this._mediaElement,{style:`--ds-media-overlay-zindex: ${this._overlayContentZIndex};`},!0),null==(e=this._umpControlBar)||e.setAttribute("tabindex","-1")):(r(this._mediaElement,["overlay","style"]),null==(o=this._umpControlBar)||o.removeAttribute("tabindex")))}_toggleButtonGroup(t){this._toggleButtonsContainer&&this._toggleButtonsContainer.classList.toggle("hidden",!t)}_updateUMPVideoElementStyle(){if(!this._umpElement)return;const t="rtl"===this.dir,e=M();if(this._overlayContentZIndex=this._umpVideoBigPlayButton?10:11,this._umpVideoBigPlayButton){if(e){const e=`top: 40px; ${t?" right: 40px; left: revert; transform: translate(50%, -50%)":"left: 40px;"} `;this._umpVideoBigPlayButton.setAttribute("style",e)}else this._viewportResizeObserver.isXsmall()?this._umpVideoBigPlayButton.setAttribute("style","transform: translate(-50%, -50%);"):this._umpVideoBigPlayButton.removeAttribute("style");if(!this._styleInjected&&this._umpVideoBigPlayButton.shadowRoot){const t=document.createElement("style");t.textContent=`\n        button {\n          padding: var(--ds-big-play-button-padding) !important;\n          width: var(--ds-big-play-button-width) !important;\n          height: var(--ds-big-play-button-height) !important;\n          border: var(--ds-big-play-button-border) !important;\n        }\n        button:focus, button:focus-visible {\n          ${y}\n        }\n        svg {\n          width: var(--ds-big-play-button-icon-width) !important;\n          height: var(--ds-big-play-button-icon-height) !important;\n        }\n      `,this._umpVideoBigPlayButton.shadowRoot.append(t),this._styleInjected=!0}}}_observeUMPState(){!this._umpElement||!this._umpControlElement||(this._cleanupMutationObserver(),this._mutationObserver=new MutationObserver(t=>{var e;for(const o of t){if("attributes"===o.type&&"class"===o.attributeName){const t=null==(e=this._umpControlElement)?void 0:e.classList.contains("hidden");this._toggleButtonGroup(!t)}"childList"===o.type&&o.removedNodes.length>0&&(this._getUMPElements(),o.removedNodes.forEach(t=>{t.nodeType===Node.ELEMENT_NODE&&t.nodeName.toLowerCase()===D&&(this._overlayContentZIndex=11,d(this._mediaElement,{style:`--ds-media-overlay-zindex: ${this._overlayContentZIndex};`},!0))}))}}),this._mutationObserver.observe(this._umpControlElement,{attributes:!0,childList:!0,attributeOldValue:!0}))}_cleanupMutationObserver(){this._mutationObserver&&(this._mutationObserver.disconnect(),this._mutationObserver=void 0)}_renderOverlayToggleButton(){return a`
      <reimagine-button
        icon-only
        button-label="${this._toggleUpButtonAriaLabel}"
        button-title="${l(this._toggleUpButtonTitle)}"
        shape="rounded"
        appearance=${_.buttonPrimary}
        class="toggle-button-up hidden"
      >
        <reimagine-icon
          icon="chevron-up"
          slot="button__icon"
          role="presentation"
          aria-hidden="true"
          size="medium"
        ></reimagine-icon>
      </reimagine-button>
      <reimagine-button
        shape="rounded"
        icon-only
        button-label="${this._toggleDownButtonAriaLabel}"
        button-title="${l(this._toggleDownButtonTitle)}"
        appearance=${_.buttonPrimary}
        class="toggle-button-down"
      >
        <reimagine-icon
          icon="chevron-down"
          slot="button__icon"
          role="presentation"
          aria-hidden="true"
          size="medium"
        ></reimagine-icon>
      </reimagine-button>
    `}_renderDefaultTemplate(){return a`
      <slot name="media" @slotchange="${this._mediaSlotChange}"></slot>
      <div
        class="overlay-content-container"
        part="overlay-content-container"
        style="${this._overlayContentSlotEmpty?"display: none;":""}"
      >
        <div class="toggle-button-container">${this._renderOverlayToggleButton()}</div>
        <slot
          name="overlay-content"
          class="overlay-content"
          @slotchange=${this._overlayContentSlotChange}
        ></slot>
      </div>
    `}_renderBlade(){return a` ${this._renderDefaultTemplate()} `}render(){return this.renderUiShell(this._renderBlade())}disconnectedCallback(){super.disconnectedCallback(),this._removeAllEvents(),this._cleanupMutationObserver()}};var X,F,J;Z.styles=[...(X=Z,F=Z,J="styles",q(H(X),J,F)||[]),T,L],N([o({slot:"overlay-content"})],Z.prototype,"_overlayContentSlot",2),N([o({slot:"media"})],Z.prototype,"_mediaSlot",2),N([n(".toggle-button-up")],Z.prototype,"_toggleButtonUp",2),N([n(".toggle-button-down")],Z.prototype,"_toggleButtonDown",2),N([n(".overlay-content-container")],Z.prototype,"_overlayContentContainer",2),N([n(".overlay-content")],Z.prototype,"_overlayContentElement",2),N([n(".toggle-button-container")],Z.prototype,"_toggleButtonsContainer",2),N([i()],Z.prototype,"_overlayContentSlotEmpty",2),N([i()],Z.prototype,"_mediaSlotEmpty",2),N([s({type:String,reflect:!0,attribute:"toggle-down-button-aria-label"})],Z.prototype,"_toggleDownButtonAriaLabel",2),N([s({type:String,reflect:!0,attribute:"toggle-down-button-title"})],Z.prototype,"_toggleDownButtonTitle",2),N([s({type:String,reflect:!0,attribute:"toggle-up-button-aria-label"})],Z.prototype,"_toggleUpButtonAriaLabel",2),N([s({type:String,reflect:!0,attribute:"toggle-up-button-title"})],Z.prototype,"_toggleUpButtonTitle",2),Z=N([m(G)],Z);export{P as C,S as I,V as L,Z as M,O as a,M as b,G as n};
