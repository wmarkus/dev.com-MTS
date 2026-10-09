import{r as t,i as e,e as o,k as s,f as a,c as i,o as r,b as n}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{f as l,e as d,i as c,s as u,a as h,q as m,d as _}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{b as p,c as b,j as g,B as y,i as f}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{V as I,d as v}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{a as C,I as S,C as E,L as M,n as x,b as w}from"/__mirror/assets/ea6ed49ce42866f8af21c77b";import{n as B}from"/__mirror/assets/42f825e3dad9c53f1fc34d82";import{name as L}from"/__mirror/assets/183c4411ec679f3100ca3ad0";import{name as A}from"/__mirror/assets/08c2f7191e700d0b495894c6";import{name as T}from"/__mirror/assets/c3028ac1e7450290cd8de498";import{n as j,a as V}from"/__mirror/assets/2731684d53f7044984bbf6c7";import{b as O,v as $}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";const P="flex",k="center",q=e`
  @media (max-width: ${t(O(`${C}px`))}) {
    :host {
      --ds-tab-compound-base-active-visibility: block;
      --ds-tab-compound-base-active-max-width: auto;
      --ds-tab-compound-active-gap: var(--ds-app-space-micro-l, 1.5rem);
      --ds-tab-compound-base-active-transform: none;
    }

    .load-more-button-container {
      display: var(
        --ds-media-playlist-video-load-more-button-display,
        ${t(P)}
      );
      justify-content: var(
        --ds-media-playlist-video-load-more-button-justify-content,
        ${t(k)}
      );
      margin-top: var(--ds-app-space-micro-l, 1.5rem);
    }
  }

  @media (max-width: ${t(O($.sm))}) {
    :host {
      --ds-tab-compound-media-max-width: auto;
      --ds-button-group-width: 100%;
    }
  }
`,U=e`
  :host {
    --ds-carousel-item-outline: none;
  }

  .load-more-button-container {
    display: none;
    padding-inline: var(--ds-app-space-micro-l, 1.5rem);
  }

  .hidden {
    display: none;
  }
`;var W=Object.defineProperty,D=Object.getOwnPropertyDescriptor,R=Object.getPrototypeOf,z=Reflect.get,F=(t,e,o,s)=>{for(var a,i=s>1?void 0:s?D(e,o):e,r=t.length-1;r>=0;r--)(a=t[r])&&(i=(s?a(e,o,i):a(i))||i);return s&&i&&W(e,o,i),i};const H="reimagine-media-playlist-video";let N=class extends p{constructor(){super(),this._carouselSlotEmpty=!0,this._loadMoreButtonAriaLabel="Load more items",this._loadMoreButtonLabel="Load More",this._carouselItems=[],this._carouselIndicatorSliderItems=[],this._indicatorsToShow=S,this._carouselItemsCount=0,this._carouselEvents=[],this._loadMoreEvents=[],new I(this,{callback:()=>this._handleViewportChange()}),this.headerLayoutConfiguration=b.col1focus}disconnectedCallback(){super.disconnectedCallback(),l(this._carouselEvents),l(this._loadMoreEvents)}_bindCarouselEvents(){this._carouselElement&&(l(this._carouselEvents),this._carouselEvents=[{el:this._carouselElement,type:E.toggleOverlay,handler:this._handleCarouselToggleOverlay.bind(this)}],d(this._carouselEvents))}_bindLoadMoreButtonEvents(){this._loadMoreButton&&(l(this._loadMoreEvents),this._loadMoreEvents=[{el:this._loadMoreButton,type:"click",handler:this._handleLoadMore.bind(this)}],d(this._loadMoreEvents))}_handleViewportChange(){if(this._carouselIndicatorSliderItems){let t=0;for(this._carouselIndicatorSliderItems.forEach((e,o)=>{e.hasAttribute("active")&&(t=o)});this._indicatorsToShow<t+1;)this._indicatorsToShow+=M}this._updateCarousel()}_handleCarouselSlotChange(){if(this._carouselSlotEmpty=0===this._carouselSlot.length,!this._carouselSlotEmpty){if(this._indicatorsToShow=S,this._carouselSlot.length>0){const t=this._carouselSlot[0];t instanceof HTMLElement&&c(t,B)&&(this._carouselElement=t,u(this._carouselElement,{"indicator-configuration":v.mediaPlaylistVideo,"layout-configuration":b.card1,"hide-control":"true"},!0),this._carouselItems=Array.from(h(this._carouselElement,T)),this._tabsCompound=Array.from(h(this,j)),u(this._tabsCompound,{configuration:V.tabCompoundVideo},!0),this._setLoadMoreButtonAttributes(),window.requestAnimationFrame(()=>{var t;const e=Array.from(h(this._carouselElement,L));this._carouselIndicatorSliderItems=e.map(t=>this._scrollsliderItemTabWrap(t)),this._carouselIndicatorsContainer=null==(t=this._carouselElement.shadowRoot)?void 0:t.querySelector(".carousel__indicators"),this._carouselItemsCount=this._carouselItems.length,this._updateCarousel(),this._bindCarouselEvents()}))}this._bindLoadMoreButtonEvents()}}_focusIndicatorAtIndex(t){const e=m(this._carouselIndicatorSliderItems[t],L);null==e||e.focus()}_getCurrentIndex(){const t=this._carouselItems.findIndex(t=>0===t.tabIndex);return-1===t?0:t}_handleLoadMore(t){if(t.preventDefault(),!this._carouselElement||0===this._carouselItemsCount)return;const e=this._carouselItemsCount,o=this._indicatorsToShow+M;this._indicatorsToShow=o<e?o:e,this._updateCarousel(),this._carouselIndicatorSliderItems.length>this._indicatorsToShow-1&&this._focusIndicatorAtIndex(this._indicatorsToShow-1)}_handleCarouselToggleOverlay(t){const{detail:e}=t;if(!e||!this._carouselElement)return;const{isOverlayContentVisible:o}=e;this._toggleCarouselIndicatorsVisibility(o)}_setLoadMoreButtonAttributes(){this._loadMoreButton&&u(this._loadMoreButton,{appearance:f.buttonSecondary,size:y.medium,shape:g.rounded})}_getUMPPausedState(){const t=this._getCurrentIndex(),e=this._carouselItems[t];if(e){const t=m(e,x);if(t)return t.isVideoPaused()}return!0}_updateCarousel(){if(!this._carouselElement)return;const t=w(),e=this._getUMPPausedState();t?this._toggleCarouselIndicatorsVisibility(e):this._toggleCarouselIndicatorsVisibility(!0),this._updateCarouselIndicators()}_updateCarouselIndicators(){const t=w();this._carouselIndicatorSliderItems.forEach((e,o)=>{t||o<this._indicatorsToShow?e.classList.toggle("hidden",!1):e.classList.toggle("hidden",!0)}),this._indicatorsToShow>=this._carouselItemsCount?this._loadMoreButton.classList.toggle("hidden",!0):this._loadMoreButton.classList.toggle("hidden",!1)}_toggleCarouselIndicatorsVisibility(t){this._carouselIndicatorsContainer&&this._carouselIndicatorsContainer.classList.toggle("hidden",!t)}_scrollsliderItemTabWrap(t){const e=document.createElement(A);return["slot","role"].forEach(o=>this._moveAttributeTo(t,e,o)),e.append(t.cloneNode(!0)),t.replaceWith(e),e}_moveAttributeTo(t,e,o){const s=t.getAttribute(o);s&&(e.setAttribute(o,s),t.removeAttribute(o))}_renderBlade(){return n`
      <reimagine-layout>
        <reimagine-layout-column>
          <slot
            name="media-playlist-video-carousel"
            @slotchange="${this._handleCarouselSlotChange}"
            style="${this._carouselSlotEmpty?"display: none":""}"
          ></slot>
          <div
            class="load-more-button-container"
            part="load-more-button-container"
            style="${this._carouselSlotEmpty?"display: none":""}"
          >
            <reimagine-button-group>
              <reimagine-button
                class="load-more-button"
                part="load-more-button"
                button-label="${this._loadMoreButtonAriaLabel}"
                button-title="${r(this._loadMoreButtonTitle)}"
              >
                <span slot="button__text">${this._loadMoreButtonLabel}</span>
              </reimagine-button>
            </reimagine-button-group>
          </div>
        </reimagine-layout-column>
      </reimagine-layout>
    `}handleBackToControls(){if(this._carouselElement){if(w()){const t=this._carouselItems[this._getCurrentIndex()];if(t){const e=m(t,x);e&&!e.isOverlayVisible()&&e.showOverlayControls()}}this._focusActiveIndicator()}}_focusActiveIndicator(){!this._carouselIndicatorSliderItems||0===this._carouselIndicatorSliderItems.length||this._focusIndicatorAtIndex(this._getCurrentIndex())}render(){return this.renderUiShell(this._renderBlade())}};var G,J,K;N.styles=[...(G=N,J=N,K="styles",z(R(G),K,J)||[]),U,q],F([o({slot:"media-playlist-video-carousel"})],N.prototype,"_carouselSlot",2),F([s(".load-more-button")],N.prototype,"_loadMoreButton",2),F([a()],N.prototype,"_carouselSlotEmpty",2),F([i({type:String,reflect:!0,attribute:"load-more-button-aria-label"})],N.prototype,"_loadMoreButtonAriaLabel",2),F([i({type:String,reflect:!0,attribute:"load-more-button-label"})],N.prototype,"_loadMoreButtonLabel",2),F([i({type:String,reflect:!0,attribute:"load-more-button-title"})],N.prototype,"_loadMoreButtonTitle",2),N=F([_(H)],N);export{N as MediaPlaylistVideo,H as name};
