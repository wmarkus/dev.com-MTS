import{i as e,r as t,f as s,b as o}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{a as i,q as r,d as a}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{b as n,v as d}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{b as l,c,h as u}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{d as p,V as m}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{n as h}from"/__mirror/assets/42f825e3dad9c53f1fc34d82";import{n as b}from"/__mirror/assets/b261b011546c5001df09e043";import{name as v}from"/__mirror/assets/183c4411ec679f3100ca3ad0";import{n as f}from"/__mirror/assets/5849ec5e150363c91281fb26";import"/__mirror/assets/c3028ac1e7450290cd8de498";import{a as g}from"/__mirror/assets/1db4ee73d7e46e9ea9afc127";const y=e`
  :host {
    --ds-carousel-padding-top: 0;
    --ds-carousel-padding-bottom: 0;
    --ds-carousel-layout-column-gap: 0;
    --ds-carousel-controls-padding-inline: 5%;
    --ds-carousel-controls-width: 90%;
    --ds-carousel-controls-z-index: var(--ds-z-index-10, 10);
    --ds-carousel-indicators-position: absolute;
    --ds-carousel-indicators-gap: var(--ds-app-space-micro-2xs, 0.25rem);
    --ds-carousel-indicators-justify-content: center;
    --ds-carousel-indicators-width: 100%;
    --ds-carousel-indicators-bottom: var(--ds-app-space-micro-xl, 2rem);
    --ds-carousel-indicators-z-index: var(--ds-z-index-10, 10);
    --ds-media-overlay-slot-zindex: var(--ds-z-index-50, 50);
    --ds-scrollslider-middle-justified-prev-control-background: none;
    --ds-scrollslider-middle-justified-next-control-background: none;
    --ds-scrollslider-controls-visibility: visible;
    --ds-skip-link-top-offset: 0;
  }
`,_=e`
  @media (max-width: ${t(n(d.md))}) {
    :host {
      gap: 0;

      --ds-layout-justify-content: flex-start;
      --ds-carousel-gap: 0;
      --ds-carousel-controls-bottom-margin-inline: var(--ds-app-space-micro-2xl, 3rem);
      --ds-carousel-indicators-display: none;
    }

    :host([breadth]) {
      padding-block-start: 0;
    }
  }

  @media (max-width: ${t(n(d.sm))}) {
    :host {
      --ds-carousel-controls-bottom-margin-inline: var(--ds-app-space-micro-m, 1rem);
    }
  }

  @media (min-width: ${t(d.sm)}) and (max-width: ${t(n(d.md))}) {
    :host {
      --ds-carousel-controls-bottom-margin-inline: 4rem;
      --ds-media-slot-top-left-x: 4rem;
      --ds-media-slot-top-left-y: var(--ds-app-space-micro-xl, 2rem);
    }
  }

  @media (min-width: ${t(d.md)}) {
    :host {
      --ds-media-slot-top-left-x: 3.5rem;
      --ds-media-slot-top-left-y: 5rem;
      --ds-container-margin-block-start: var(--ds-app-space-micro-xl, 2rem);
      --ds-container-margin-block-end: var(--ds-app-space-micro-xl, 2rem);
      --ds-carousel-controls-bottom-margin-inline: 3.5rem;
      --ds-carousel-controls-width: 100%;
      --ds-carousel-controls-padding-inline: 3.5rem;
      --ds-carousel-controls-box-sizing: border-box;
      --ds-media-carousel-item-heading-block-content-text-padding-inline-end: var(
        --ds-app-space-micro-3xl,
        4.5rem
      );
      --ds-media-carousel-item-heading-block-content-text-padding-inline-start: var(
        --ds-app-space-micro-3xl,
        4.5rem
      );
    }

    :host([breadth]) {
      padding-block: 0;
    }
  }

  @media (min-width: ${t(d.lg)}) {
    :host {
      --ds-media-slot-top-left-x: 0;
      --ds-media-slot-padding-inline: 2.5%;
      --ds-carousel-controls-padding-inline: 5%;
    }
  }
`;var x=Object.defineProperty,A=Object.getOwnPropertyDescriptor,k=Object.getPrototypeOf,w=Reflect.get,j=(e,t,s,o)=>{for(var i,r=o>1?void 0:o?A(t,s):t,a=e.length-1;a>=0;a--)(i=e[a])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&x(t,s,r),r};const C="reimagine-hero-media-carousel";let O=class extends l{constructor(){super(...arguments),this._carousel=null,this._headingBlocks=[],this._previousIsMobile=!1,this._videoSlides={}}setDefaultAttributes(){Object.entries({breadth:"cozy"}).forEach(([e,t])=>{this.hasAttribute(e)||this.setAttribute(e,t)})}setCarouselDefaultAttributes(){const e=this._carousel;if(!e)return;const t={"layout-configuration":c.card1,"indicator-configuration":p.bars,"disable-indicator-clicks":"","show-controls":""};Object.entries(t).forEach(([t,s])=>{e.hasAttribute(t)||e.setAttribute(t,s)})}setIndicatorConfigurations(){const e=this._carousel;e&&i(e,v).forEach(e=>{const t=r(e,f);t&&(t.setAttribute("decorative",""),t.setAttribute("orientation","horizontal"),t.setAttribute("configuration","rounded"),t.setAttribute("indicator-style","subtle"))})}_updateLayoutConfiguration(){var e,t;const s=null==(t=null==(e=this._resizeObserver)?void 0:e.isMobile)?void 0:t.call(e);if(this._carousel){const e=s?g.bottomStart:g.middleJustified;this._carousel.setAttribute("control-position",e)}this._headingBlocks.forEach(e=>{const t=s?u.left:u.center;e.setAttribute("alignment",t)})}_waitForShadowRoot(e){return new Promise(t=>{const s=()=>{e.shadowRoot?t(e.shadowRoot):requestAnimationFrame(s)};s()})}_detectVideoPausedByUser(e,t){e.addEventListener("click",e=>{const s=(null==e?void 0:e.target).getAttribute("video-control");this._videoSlides[t].pausedByUser="play"===s})}_preventAutoplay(e){const t=()=>{e.pause(),e.removeEventListener("play",t)};e.addEventListener("play",t)}_isAutoplayEnabled(e){if(e.hasAttribute("options")){const t=e.getAttribute("options");if(t&&JSON.parse(t).autoplay)return!0}return!1}_autoplayVideoOnSlideChange(){this._carousel&&this._carousel.addEventListener("slide-changed",e=>{const t=e;t.stopPropagation();const{previousIndex:s,currentIndex:o}=t.detail,i=this._videoSlides[s];void 0!==i&&(i.video.pause(),i.playPauseButton.setAttribute("video-control","play"));const r=this._videoSlides[o];void 0!==r&&!r.pausedByUser&&(r.video.play(),r.playPauseButton.setAttribute("video-control","pause"))})}async _setupAutoplayForVideoSlides(){i(this,"reimagine-hero-media-carousel-item").forEach(async(e,t)=>{const s=e.querySelector("universal-media-player");if(!s)return;const o=await this._waitForShadowRoot(s);if(!o)return;const i=o.querySelector("video"),a=r(e,"reimagine-button","[slot^='media__pos-']");this._detectVideoPausedByUser(a,t),this._isAutoplayEnabled(s)&&!(0===t)&&this._preventAutoplay(i),this._videoSlides[t]={video:i,playPauseButton:a,pausedByUser:!1}}),this._autoplayVideoOnSlideChange()}async firstUpdated(){super.firstUpdated(),this._carousel=r(this,h),this._headingBlocks=Array.from(i(this,b)),this._updateLayoutConfiguration(),this.setDefaultAttributes(),this.setCarouselDefaultAttributes(),this.setIndicatorConfigurations(),this._setupAutoplayForVideoSlides()}getCurrentIsMobile(){return this._resizeObserver.isMobile()}connectedCallback(){super.connectedCallback(),this._resizeObserver=new m(this,{callback:()=>{const e=this.getCurrentIsMobile();this._previousIsMobile!==e&&(this._updateLayoutConfiguration(),this._previousIsMobile=e)}}),this._previousIsMobile=this.getCurrentIsMobile()}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver&&this._resizeObserver.hostDisconnected()}_renderBlade(){return o`<slot></slot> `}render(){return this.renderUiShell(this._renderBlade())}};var S,z,B;O.styles=[...(S=O,z=O,B="styles",w(k(S),B,z)||[]),y,_],j([s()],O.prototype,"_resizeObserver",2),O=j([a(C)],O);export{O as HeroMediaCarousel,C as name};
