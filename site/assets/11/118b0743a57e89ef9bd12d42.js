import{r as t,i as e,c as i,g as r,k as s,f as a,o,b as n,A as d}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{l,b as c,i as m,j as h}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{d as p}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{s as u}from"/__mirror/assets/579a4c6140e643b41d22eee8";import{a1 as _,V as g}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{b as v,v as b}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{TimelineBar as f}from"/__mirror/assets/918f45e48217cde7d98b9358";import"/__mirror/assets/674e87e1db3168cb538c091d";import"/__mirror/assets/c180aa30a3b15984764facc1";import"/__mirror/assets/c55634b5c47498bb74d55729";import"/__mirror/assets/ac1415d701004f2dd9f24260";import"/__mirror/assets/5d2e1bf3d87581457a2b76db";import"/__mirror/assets/34233ee5ac8acdb3aa831b25";const C="default",x="carousel",y="Previous",w="Next",$="Select milestone",P="Select",k="Back to Next and Previous controls",D="End of items",B="row",I="center",S="2rem",T="7.688rem",j="flex",A="center",L="2rem",M="2.5rem",R=e`
  :host {
    overflow-x: hidden;
  }

  .cards-top,
  .cards-bottom {
    display: var(--ds-timeline-cards-display, ${t("flex")});
    flex-direction: var(
      --ds-timeline-cards-flex-direction,
      ${t(B)}
    );
    justify-content: var(
      --ds-timeline-cards-justify-content,
      ${t(I)}
    );
    gap: var(--ds-timeline-cards-gap, ${t(S)});
  }

  :host([configuration='carousel']) .cards-top {
    margin-inline-start: calc(
      -1 *
        var(
          --ds-timeline-cards-top-offset,
          var(--ds-timeline-cards-offset, ${t(T)})
        )
    );
  }

  .cards-top {
    margin-inline-end: var(
      --ds-timeline-cards-offset,
      ${t(T)}
    );
  }

  .cards-bottom {
    margin-inline-start: var(
      --ds-timeline-cards-bottom-offset,
      var(--ds-timeline-cards-offset, ${t(T)})
    );
  }

  .bar-container {
    display: var(
      --ds-timeline-bar-container-display,
      ${t(j)}
    );
    justify-content: var(
      --ds-timeline-bar-container-justify-content,
      ${t(A)}
    );
    margin-block-start: var(
      --ds-timeline-bar-container-margin-block-start,
      ${t(L)}
    );
    margin-block-end: var(
      --ds-timeline-bar-container-margin-block-end,
      ${t(M)}
    );
  }

  .carousel-controls {
    display: none;
  }

  .sr-only {
    color: var(--ds-app-color-base-alt1-fg-heading, #0e1726);
    background-color: var(--ds-app-color-base-alt1-bg-opt1, #f7f7f7);
    position: absolute;
    z-index: var(--ds-z-index-10, 10);
  }

  .sr-only:not(:active):not(:focus) {
    ${u};
  }

  .sr-only__anchor {
    ${l};
    background-color: var(--ds-app-color-base-alt1-bg-opt1, #f7f7f7);
    padding-inline: var(--ds-app-space-micro-s, 0.75rem);
    padding-block: var(--ds-app-space-micro-2xs, 0.25rem);
    text-decoration: none;
    outline-offset: -0.375rem;
    border-radius: var(--ds-app-radii-s, 0.5rem);
    font-weight: ${t(_.fontWeight)};
    font-size: ${t(_.fontSize)};
    line-height: ${t(_.lineHeight)};
    letter-spacing: ${t(_.letterSpacing)};
  }

  a[href='${t("#end-of-timeline")}'].sr-only {
    top: var(--ds-skip-link-top-offset, -2rem);
  }
`,z=e`
  /* Mobile viewport styles (VP1 and VP2) */
  @media (max-width: ${t(v(b.md))}) {
    .timeline {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 0;
    }

    /* Hide timeline bar on mobile */
    .bar-container {
      display: none;
    }

    :host {
      --ds-timeline-cards-offset: 0;
      --ds-timeline-cards-top-offset: 0;
      --ds-timeline-cards-bottom-offset: 0;
    }

    /* Show only the active card on mobile */
    .cards-top,
    .cards-bottom {
      width: 100%;
    }

    .cards-top ::slotted(*:not(.active)),
    .cards-bottom ::slotted(*:not(.active)) {
      display: none;
    }

    .cards-top ::slotted(.active),
    .cards-bottom ::slotted(.active) {
      --ds-card-badge-width: 100%;
      width: 100%;
    }

    /* Show milestone dropdown on mobile */
    .milestone-selector {
      display: block;
      width: 100%;
      margin-bottom: var(--ds-app-space-layout-stack-comfortable, 3rem);
    }

    /* Dropdown component spans full width within padded container */
    .milestone-selector reimagine-dropdown {
      width: 100%;
    }
  }

  /* Desktop: hide dropdown */
  @media (min-width: ${t(b.md)}) {
    :host {
      --ds-timeline-card-width: 100%;
      --ds-timeline-card-max-width: 220px;
      --ds-timeline-card-height: auto;
      --ds-timeline-bar-width: 100%;
      --ds-timeline-bar-max-width: 660px;
    }

    /* Map timeline card variables to card-badge and card-summary */
    .cards-top ::slotted(*),
    .cards-bottom ::slotted(*) {
      --ds-card-badge-width: var(--ds-timeline-card-width, auto);
      --ds-card-badge-max-width: var(--ds-timeline-card-max-width, initial);
      --ds-card-badge-height: var(--ds-timeline-card-height, 100%);
      --ds-card-summary-width: var(--ds-timeline-card-width, auto);
      --ds-card-summary-max-width: var(--ds-timeline-card-max-width, initial);
      --ds-card-summary-height: var(--ds-timeline-card-height, 100%);
    }

    .milestone-selector {
      display: none;
    }

    :host([configuration='carousel']) {
      --ds-timeline-cards-justify-content: flex-start;
      --ds-timeline-cards-gap: 7rem;
      --ds-timeline-cards-offset: 9.375rem;
      --ds-timeline-card-width: 272px;
      --ds-timeline-bar-max-width: 616px;
      --ds-timeline-bar-width: 616px;

      & .cards-top ::slotted(*),
      & .cards-bottom ::slotted(*) {
        flex-shrink: 0;
      }

      & .cards-top,
      & .cards-bottom {
        max-width: none;
        overflow: visible;
        scrollbar-width: none;
        padding: 0.5rem;
        margin-block: -0.5rem;
      }

      & .cards-top::-webkit-scrollbar,
      & .cards-bottom::-webkit-scrollbar {
        display: none;
      }

      & .cards-top::after,
      & .cards-bottom::after {
        content: '';
        flex-shrink: 0;
        min-width: 100%;
      }

      & .bar-container {
        align-items: center;
        gap: var(--ds-app-space-micro-s, 1rem);
      }

      & .carousel-controls {
        display: flex;
        gap: var(--ds-app-space-micro-xs, 0.5rem);
        flex-shrink: 0;
      }

      & .carousel-control--disabled {
        opacity: 0.4;
        pointer-events: none;
      }
    }

    /* Reversed carousel offset overrides — direction is applied via JS */
    :host([configuration='carousel'][reversed]) {
      --ds-timeline-cards-top-offset: -2.75rem;
      --ds-timeline-cards-bottom-offset: 15.75rem;
    }
  }

  /* VP3 only: constrain carousel timeline width */
  @media (min-width: ${t(b.md)}) and (max-width: ${t(v(b.lg))}) {
    :host([configuration='carousel']) {
      --ds-timeline-cards-top-offset: 0rem;
      --ds-timeline-cards-bottom-offset: 11.875rem;
      --ds-timeline-card-max-width: 272px;

      & .timeline {
        max-width: 960px;
        margin-inline: auto;
      }
    }
  }

  @media (min-width: 1084px) {
    /* Calculating values here by taking viewport large values and reducing by 22.5% */
    :host {
      --ds-timeline-card-width: 248px;
      --ds-timeline-card-max-width: 248px;
      --ds-timeline-cards-gap: 4.06875rem;
      --ds-timeline-cards-offset: 9.6875rem;
      --ds-timeline-bar-max-width: calc(
        (var(--ds-timeline-card-width) * 3) + (var(--ds-timeline-cards-gap) * 2) -
          (var(--ds-timeline-cards-offset) / 2)
      );
    }
  }

  @media (min-width: ${t(b.lg)}) {
    :host {
      --ds-timeline-card-width: 320px;
      --ds-timeline-card-max-width: 320px;
      --ds-timeline-cards-gap: 5.25rem;
      --ds-timeline-cards-offset: 12.5rem;
    }

    :host([configuration='carousel']) {
      --ds-timeline-cards-gap: 5.1875rem;
      --ds-timeline-cards-top-offset: 4.75rem;
      --ds-timeline-cards-bottom-offset: 8.75rem;
      --ds-timeline-card-width: 320px;
      --ds-timeline-bar-max-width: 1056px;
      --ds-timeline-bar-width: 1056px;

      & .cards-top::after,
      & .cards-bottom::after {
        min-width: 100%;
      }
    }
  }
`;var E=Object.defineProperty,O=Object.getOwnPropertyDescriptor,V=Object.getPrototypeOf,N=Reflect.get,q=(t,e,i,r)=>{for(var s,a=r>1?void 0:r?O(e,i):e,o=t.length-1;o>=0;o--)(s=t[o])&&(a=(r?s(e,i,a):s(a))||a);return r&&a&&E(e,i,a),a};const F="reimagine-timeline";let H=class extends c{constructor(){super(),this.configuration=C,this.reversed=!1,this.activeIndex=0,this._prevControlDisabled=!0,this._nextControlDisabled=!1,this._currentPage=0,this._slottedCardDates=[],this._cardIndexMap=new WeakMap,this._handleIndicatorClick=t=>{const{index:e}=t.detail;this._setActiveItem(e)},this._updateCarouselControlStates=()=>{this._prevControlDisabled=this._currentPage<=0,this._nextControlDisabled=this._currentPage>=this._totalCarouselPages-1},this._scrollCarouselPrev=()=>{this._currentPage<=0||(this._currentPage--,this._scrollToCarouselPage())},this._scrollCarouselNext=()=>{this._currentPage>=this._totalCarouselPages-1||(this._currentPage++,this._scrollToCarouselPage())},this._handleBackToControls=t=>{var e,i;t.preventDefault();const r=this.reversed!==("rtl"===this._getComputedDir()),s=r?this._nextControlDisabled:this._prevControlDisabled;!(r?this._prevControlDisabled:this._nextControlDisabled)&&null!=(e=this._nextControlButton)&&e.checkVisibility()?this._nextControlButton.focus():!s&&null!=(i=this._prevControlButton)&&i.checkVisibility()&&this._prevControlButton.focus()},this._viewportResizeObserver=new g(this,{callback:()=>{var t;null!=(t=this._viewportResizeObserver)&&t.isMobile()||(this._resetCarouselPage(),this._updateVisibleIndicators(),this._updateCarouselControlStates()),0===this._slottedCardDates.length&&this._extractCardDates()}})}get _timelineBar(){return this._assignedBar.filter(t=>t instanceof f)}updated(t){super.updated(t),t.has("activeIndex")&&this._updateActiveCard(),t.has("reversed")&&this._applyReversedDirection()}firstUpdated(){this.updateComplete.then(()=>{this._updateActiveCard()})}connectedCallback(){super.connectedCallback(),this.addEventListener("timelineBarIndicatorClick",this._handleIndicatorClick)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this._viewportResizeObserver)||t.hostDisconnected(),this.removeEventListener("timelineBarIndicatorClick",this._handleIndicatorClick)}_getAllSlottedCards(){return[...this._cardsTop||[],...this._cardsBottom||[]]}_updateActiveCard(){this._getAllSlottedCards().forEach(t=>{(this._cardIndexMap.get(t)??0)===this.activeIndex?t.classList.add("active"):t.classList.remove("active")}),this._updateCardTabIndex()}_updateCardTabIndex(){const t=this._getAllSlottedCards();if(this.configuration===x){const e=this._currentPage*this._cardsPerPage,i=e+this._cardsPerPage;t.forEach(t=>{const r=this._cardIndexMap.get(t)??0,s=r>=e&&r<i;t.setAttribute("tabindex",s?"":"-1")})}}_updateIndicatorTabIndex(){var t;const e=null==(t=this._timelineBar)?void 0:t[0];e&&e.getIndicators().forEach(t=>{var e;const i=null==(e=t.shadowRoot)?void 0:e.querySelector("button");i&&i.setAttribute("tabindex","-1")})}_setActiveItem(t){this.activeIndex=t,this._timelineBar[0]&&(this._timelineBar[0].activeIndicator=t)}_extractCardDates(){const t=this._getAllSlottedCards().map(t=>({card:t,index:this._cardIndexMap.get(t)??0})).sort((t,e)=>t.index-e.index).map(({card:t})=>t);this._slottedCardDates=t.map((t,e)=>{var i;const r=t.querySelector('[slot="text-block__eyebrow-label"], [slot="card-summary-eyebrow"]');return(null==(i=null==r?void 0:r.textContent)?void 0:i.trim())||`Card ${e+1}`})}_handleSlotChange(){var t,e;null==(t=this._cardsTop)||t.forEach((t,e)=>{this._cardIndexMap.set(t,2*e)}),null==(e=this._cardsBottom)||e.forEach((t,e)=>{this._cardIndexMap.set(t,2*e+1)}),this._extractCardDates(),this._attachCardListeners(),this._updateActiveCard(),this._currentPage=0,this._updateCarouselControlStates(),requestAnimationFrame(()=>{this._updateVisibleIndicators(),this._updateIndicatorTabIndex(),this._applyReversedDirection()})}_getComputedDir(){return getComputedStyle(this).direction||"ltr"}_applyReversedDirection(){var t;if(this.configuration!==x)return;const e=[this._cardsTopContainer,this._cardsBottomContainer].filter(Boolean),i=null==(t=this._timelineBar)?void 0:t[0];if(!this.reversed){for(const t of e)t.style.direction="";return i&&(i.style.direction=""),void this._setSlottedCardDirection("")}const r=this._getComputedDir(),s="rtl"===r?"ltr":"rtl";for(const t of e)t.style.direction=s;i&&(i.style.direction=s),this._setSlottedCardDirection(r)}_setSlottedCardDirection(t){const e=this._getAllSlottedCards();for(const i of e)i.style.direction=t}_attachCardListeners(){this._getAllSlottedCards().forEach(t=>{const e=this._cardIndexMap.get(t)??0;t.addEventListener("click",()=>this._setActiveItem(e)),t.addEventListener("mouseenter",()=>{var t;null!=(t=this._viewportResizeObserver)&&t.isMobile()||this._setActiveItem(e)})})}get _cardsPerPage(){var t,e;return null!=(t=this._viewportResizeObserver)&&t.isLarge()?6:null!=(e=this._viewportResizeObserver)&&e.isMedium()?4:1}get _totalCarouselPages(){return Math.ceil(this._getAllSlottedCards().length/this._cardsPerPage)}_resetCarouselPage(){this.configuration===x&&(this._currentPage=Math.min(this._currentPage,Math.max(this._totalCarouselPages-1,0)))}_getCarouselPageScrollAmount(){var t,e;const i=(null==(t=this._cardsTop)?void 0:t[0])||(null==(e=this._cardsBottom)?void 0:e[0]),r=this._cardsTopContainer||this._cardsBottomContainer,s=r?Number.parseFloat(getComputedStyle(r).columnGap||"0"):0;return this._cardsPerPage/2*(i.getBoundingClientRect().width+s)}_scrollToCarouselPage(){const t=this._currentPage*this._getCarouselPageScrollAmount(),e=`translateX(${this.reversed!==("rtl"===this._getComputedDir())?t:-t}px)`;this._cardsTopContainer&&(this._cardsTopContainer.style.transform=e,this._cardsTopContainer.style.transition="transform 0.5s ease"),this._cardsBottomContainer&&(this._cardsBottomContainer.style.transform=e,this._cardsBottomContainer.style.transition="transform 0.5s ease"),this._updateVisibleIndicators(),this._updateCarouselControlStates(),this._updateCardTabIndex()}_updateVisibleIndicators(){var t,e;if(this.configuration!==x)return;const i=this._timelineBar[0],r=i.getIndicators(),s=this._currentPage*this._cardsPerPage,a=s+this._cardsPerPage,o=Math.min(r.length-s,this._cardsPerPage);r.forEach((t,e)=>{t.style.display=e>=s&&e<a?"":"none"});const n=null==(t=i.shadowRoot)?void 0:t.querySelector(".indicators"),d=null==(e=i.shadowRoot)?void 0:e.querySelector(".line");this._applyIndicatorLayout(n,d,o,this._cardsPerPage)}_resetLineStyles(t){t.style.display="",t.style.right="",t.style.left=""}_applyIndicatorLayout(t,e,i,r){if(i<=1)return t&&(t.style.width=""),void(e&&(e.style.display="none"));if(i<r){const s=(i-1)/(r-1);if(t&&(t.style.width=100*s+"%"),e){this._resetLineStyles(e);const t=this.reversed!==("rtl"===this._getComputedDir())?"left":"right";e.style[t]=`calc(16px + ${100*(1-s)}% - ${32*(1-s)}px)`}return}t&&(t.style.width=""),e&&this._resetLineStyles(e)}_skipLinkTemplate(t,e,i,r){return n`
      <a
        href=${o(r)}
        id=${o(i)}
        tabindex=${o(i?-1:void 0)}
        class="sr-only sr-only__anchor"
        @click=${e}
        >${t}</a
      >
    `}_renderCarouselControls(){var t,e,i,r;if(this.configuration!==x)return d;const s=this.reversed!==("rtl"===this._getComputedDir()),a=s?this._scrollCarouselNext:this._scrollCarouselPrev,o=s?this._scrollCarouselPrev:this._scrollCarouselNext,l=s?this._nextControlDisabled:this._prevControlDisabled,c=s?this._prevControlDisabled:this._nextControlDisabled;return n`
      <div class="carousel-controls" part="carousel-controls">
        <div
          class="carousel-control carousel-control--prev ${l?"carousel-control--disabled":""}"
          part="carousel-control--prev"
        >
          <reimagine-button
            icon-only
            appearance=${m.buttonSecondary}
            size="large"
            shape=${h.circle}
            button-label="${(null==(t=this.messages)?void 0:t.previousButton)||y}"
            button-title="${(null==(e=this.messages)?void 0:e.previousButton)||y}"
            ?disabled=${l}
            @click=${a}
          >
            <reimagine-icon
              icon="arrow-${"rtl"===this.dir?"right":"left"}"
              aria-hidden="true"
              role="presentation"
              filled
              slot="button__icon"
            ></reimagine-icon>
          </reimagine-button>
        </div>
        <div
          class="carousel-control carousel-control--next ${c?"carousel-control--disabled":""}"
          part="carousel-control--next"
        >
          <reimagine-button
            icon-only
            appearance=${m.buttonSecondary}
            size="large"
            shape=${h.circle}
            button-label="${(null==(i=this.messages)?void 0:i.nextButton)||w}"
            button-title="${(null==(r=this.messages)?void 0:r.nextButton)||w}"
            ?disabled=${c}
            @click=${o}
          >
            <reimagine-icon
              icon="arrow-${"rtl"===this.dir?"left":"right"}"
              aria-hidden="true"
              role="presentation"
              filled
              slot="button__icon"
            ></reimagine-icon>
          </reimagine-button>
        </div>
      </div>
    `}_renderDropdown(){var t,e;return 0===this._slottedCardDates.length?"":n`
      <div class="milestone-selector" part="milestone-selector">
        <reimagine-dropdown selectable>
          <reimagine-dropdown-trigger slot="dropdown__trigger">
            <span slot="dropdown-trigger__input-label"
              >${(null==(t=this.messages)?void 0:t.selectMilestoneLabel)||$}</span
            >
            ${this._slottedCardDates[this.activeIndex]||(null==(e=this.messages)?void 0:e.selectFallback)||P}
          </reimagine-dropdown-trigger>
          <reimagine-menu-list>
            ${this._slottedCardDates.map((t,e)=>n`
                <reimagine-menu-list-item
                  @click=${()=>this._setActiveItem(e)}
                  ?selected=${e===this.activeIndex}
                >
                  <span slot="list-item__title">${t}</span>
                </reimagine-menu-list-item>
              `)}
          </reimagine-menu-list>
        </reimagine-dropdown>
      </div>
    `}_renderBlade(){var t,e;const i=(null==(t=this.messages)?void 0:t.backToControlsLabel)||k,r=(null==(e=this.messages)?void 0:e.endLabel)||D,s=n`
      <div class="timeline" part="timeline">
        <!-- Mobile milestone dropdown -->
        ${this._renderDropdown()}

        <div class="cards-top" part="cards-top">
          <slot name="cards-top" @slotchange=${this._handleSlotChange}></slot>
        </div>
        <div class="bar-container" part="bar-container" tabindex="-1">
          <slot name="bar"></slot>
          ${this._renderCarouselControls()}
        </div>
        <div class="cards-bottom" part="cards-bottom">
          <slot name="cards-bottom" @slotchange=${this._handleSlotChange}></slot>
        </div>

        <!-- Back to controls (sr-only) -->
        ${this.configuration===x?this._skipLinkTemplate(i,this._handleBackToControls,void 0,"#"):d}

        <!-- End of timeline skip target (not tabbable) -->
        ${this._skipLinkTemplate(r,void 0,"end-of-timeline")}
      </div>
    `;return n`
      <reimagine-container part="container" class="container">
        ${s}
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var U,W,G;H.styles=[...(U=H,W=H,G="styles",N(V(U),G,W)||[]),R,z],q([i({reflect:!0})],H.prototype,"configuration",2),q([i({type:Object})],H.prototype,"messages",2),q([i({type:Boolean,reflect:!0})],H.prototype,"reversed",2),q([i({type:Number,reflect:!0,attribute:"active-index"})],H.prototype,"activeIndex",2),q([r({slot:"bar"})],H.prototype,"_assignedBar",2),q([r({slot:"cards-top"})],H.prototype,"_cardsTop",2),q([r({slot:"cards-bottom"})],H.prototype,"_cardsBottom",2),q([s(".cards-top")],H.prototype,"_cardsTopContainer",2),q([s(".cards-bottom")],H.prototype,"_cardsBottomContainer",2),q([a()],H.prototype,"_prevControlDisabled",2),q([a()],H.prototype,"_nextControlDisabled",2),q([a()],H.prototype,"_currentPage",2),q([a()],H.prototype,"_viewportResizeObserver",2),q([a()],H.prototype,"_slottedCardDates",2),q([s(".carousel-control--prev reimagine-button")],H.prototype,"_prevControlButton",2),q([s(".carousel-control--next reimagine-button")],H.prototype,"_nextControlButton",2),H=q([p(F)],H);export{H as Timeline,F as name};
