import{r as t,i as e,c as l,k as s,g as r,e as i,f as o,b as n,h as a}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{W as d}from"/__mirror/assets/597f3dbe3ef56339bfbefa4a";import{t as c,C as h,e as p,f as _,d as m}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{j as b}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{B as g,i as u,j as f,r as v}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{a as y}from"/__mirror/assets/34233ee5ac8acdb3aa831b25";import"/__mirror/assets/5d2e1bf3d87581457a2b76db";const x={middleStart:"middle-start",middleJustified:"middle-justified",middleEnd:"middle-end",bottomStart:"bottom-start",bottomJustified:"bottom-justified",bottomEnd:"bottom-end"},$="start",S={scroll:"onScroll"},w="show-start-fade",C="show-end-fade",E="var(--ds-app-space-micro-xl, 2rem)",I="var(--ds-app-space-micro-xs, 0.5rem)",k="var(--ds-app-space-micro-m, 1rem)",B="initial",A="initial",z="100vw",R="0",O="0",j="row",P="start",L="var(--ds-scrollslider-full-bleed-spacing, 0)",J="hidden",T="12rem",D="initial",F="initial",N=e`
  :host {
    position: relative;
    display: flex;
    flex-direction: var(
      --ds-scrollslider-flex-direction,
      ${t("column")}
    );
    gap: var(--ds-scrollslider-gap, ${t(E)});
    align-items: var(--ds-scrollslider-align-items, ${t(B)});
    justify-content: var(
      --ds-scrollslider-justify-content,
      ${t(A)}
    );
  }

  .scrollslider__controls {
    display: flex;
    align-items: center;
    gap: var(--ds-scrollslider-controls-gap, ${t(I)});
  }

  .scrollslider__base {
    display: flex;
    flex-direction: var(
      --ds-scrollslider-base-flex-direction,
      ${t(j)}
    );
    overflow-x: scroll;
    scrollbar-width: none;
    scroll-snap-type: x mandatory;
    overscroll-behavior-x: none;
    gap: var(--ds-scrollslider-item-gap, ${t(k)});
    scroll-behavior: smooth;
    padding-inline: var(--ds-scrollslider-base-padding-inline, var(--ds-scrollslider-base-padding, ${t(R)}));
    padding-block: var(--ds-scrollslider-base-padding-block, var(--ds-scrollslider-base-padding, ${t(O)}));
    justify-content: var(
      --ds-scrollslider-base-justify-content,
      ${t(P)}
    );
    align-items: var(--ds-scrollslider-base-align-items, ${t(B)});
    margin-inline-start: var(--ds-scrollslider-base-margin-inline-start, ${t(D)});
    width: var(--ds-scrollslider-base-width, ${t(F)});
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-mask-image: none;
    mask-image: none;
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;

    @media (prefers-reduced-motion: reduce) {
      scroll-behavior: auto;
    }
  }

  /* show left fade */
  :host([gradient-fade].show-start-fade) .scrollslider__base,
  :host(:dir(rtl)[gradient-fade].show-end-fade) .scrollslider__base {
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1)
        calc(
          var(
            --ds-scrollslider-gradient-fade-width,
            ${t(T)}
          )
        ),
      rgba(0, 0, 0, 1) 100%
    );
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1)
        calc(
          var(
            --ds-scrollslider-gradient-fade-width,
            ${t(T)}
          )
        ),
      rgba(0, 0, 0, 1) 100%
    );
  }

  /* show right fade */
  :host([gradient-fade].show-end-fade) .scrollslider__base,
  :host(:dir(rtl)[gradient-fade].show-start-fade) .scrollslider__base {
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-mask-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1)
        calc(
          var(
            --ds-scrollslider-gradient-fade-width,
            ${t(T)}
          )
        ),
      rgba(0, 0, 0, 1) 100%
    );
    mask-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1)
        calc(
          var(
            --ds-scrollslider-gradient-fade-width,
            ${t(T)}
          )
        ),
      rgba(0, 0, 0, 1) 100%
    );
  }

  /* show left and right fade */
  :host([gradient-fade].show-start-fade.show-end-fade) .scrollslider__base {
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1)
        calc(
          var(
            --ds-scrollslider-gradient-fade-width,
            ${t(T)}
          )
        ),
      rgba(0, 0, 0, 1)
        calc(
          100% - var(
              --ds-scrollslider-gradient-fade-width,
              ${t(T)}
            )
        ),
      rgba(0, 0, 0, 0) 100%
    );
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1)
        calc(
          var(
            --ds-scrollslider-gradient-fade-width,
            ${t(T)}
          )
        ),
      rgba(0, 0, 0, 1)
        calc(
          100% - var(
              --ds-scrollslider-gradient-fade-width,
              ${t(T)}
            )
        ),
      rgba(0, 0, 0, 0) 100%
    );
  }

  .scrollslider__base::-webkit-scrollbar {
    display: none;
  }

  :host([hide-controls]) .scrollslider__controls {
    display: none;
  }

  :host([alignment='center'][hide-controls]) .scrollslider__base {
    justify-content: center;
  }

  :host([control-position^='middle']) {
    --ds-scrollslider-flex-direction: row;
  }

  :host([control-position='${t(x.middleJustified)}'])
    .scrollslider__controls {
    position: absolute;
    pointer-events: none;
    height: 100%;
    width: 100%;
    top: 0;
    z-index: var(--ds-z-index-10, 10);
    justify-content: space-between;
  }

  :host([control-position='${t(x.middleJustified)}'])
    .scrollslider__prev-control-default,
  :host([control-position='${t(x.middleJustified)}'])
    .scrollslider__next-control-default,
  :host([control-position='${t(x.middleJustified)}'])
    [slot='scrollslider__prev-control']::slotted(*),
  :host([control-position='${t(x.middleJustified)}'])
    [slot='scrollslider__next-control']::slotted(*) {
    pointer-events: visible;
  }

  :host([control-position='${t(x.middleJustified)}'])
    .scrollslider__prev-control-disabled,
  :host([control-position='${t(x.middleJustified)}'])
    .scrollslider__next-control-disabled {
    visibility: var(
      --ds-scrollslider-controls-visibility,
      ${t(J)}
    );
  }

  :host([control-position='${t(x.middleJustified)}'])
    .scrollslider__prev-control,
  :host([control-position='${t(x.middleJustified)}'])
    .scrollslider__next-control {
    height: 100%;
    display: flex;
    align-items: center;
  }

  :host([control-position='${t(x.middleJustified)}'])
    .scrollslider__next-control {
    justify-content: end;
  }

  :host([control-position='${t(x.middleEnd)}'])
    .scrollslider__controls {
    order: 4;
  }

  :host([control-position^='bottom']) .scrollslider__controls {
    order: 4;
  }

  :host([control-position='${t(x.bottomJustified)}'])
    .scrollslider__controls {
    justify-content: space-between;
  }

  :host([control-position='${t(x.bottomEnd)}'])
    .scrollslider__controls {
    justify-content: end;
  }

  :host([full-bleed]) .scrollslider__base {
    width: calc(
      var(--ds-scrollslider-vw, ${t(z)}) -
        (
          var(
              --ds-scrollslider-base-full-bleed-spacing,
              ${t(L)}px
            ) *
            2
        )
    );
    padding-inline: var(
      --ds-scrollslider-base-full-bleed-spacing,
      ${t(L)}
    );
    margin-inline: calc(
      var(
          --ds-scrollslider-base-full-bleed-spacing,
          ${t(L)}
        ) *
        (-1)
    );
    scroll-padding-inline: var(
      --ds-scrollslider-base-full-bleed-spacing,
      ${t(L)}
    );
  }

  :host(
    [full-bleed][control-position='${t(x.middleJustified)}']
  ) {
    .scrollslider__prev-control {
      margin-inline-start: calc(
        var(
            --ds-scrollslider-base-full-bleed-spacing,
            ${t(L)}
          ) *
          (-1)
      );
    }

    .scrollslider__prev-control-default {
      padding-inline-start: var(
        --ds-scrollslider-base-full-bleed-spacing,
        ${t(L)}
      );
    }

    .scrollslider__next-control {
      margin-inline-end: calc(
        var(
            --ds-scrollslider-base-full-bleed-spacing,
            ${t(L)}
          ) *
          (-1)
      );
    }

    .scrollslider__next-control-default {
      padding-inline-end: var(
        --ds-scrollslider-base-full-bleed-spacing,
        ${t(L)}
      );
    }
  }

  @media (forced-colors: active) {
    .scrollslider__prev-control,
    .scrollslider__next-control {
      background-color: currentcolor;
    }
  }
`;var W=Object.defineProperty,q=Object.getOwnPropertyDescriptor,G=(t,e,l,s)=>{for(var r,i=s>1?void 0:s?q(e,l):e,o=t.length-1;o>=0;o--)(r=t[o])&&(i=(s?r(e,l,i):r(i))||i);return s&&i&&W(e,l,i),i};const M="reimagine-scrollslider";let H=class extends d{constructor(){super(...arguments),this.alignment=$,this.controlPosition=x.bottomStart,this.controlSize=g.large,this.fullBleed=!1,this.scrollSliderRole="list",this.scrollSliderItemRole="listitem",this.hideControls=!1,this.enableGradientFade=!1,this._scrollsliderItems=[],this._first=0,this._last=0,this._prevControlDisabled=!1,this._nextControlDisabled=!1,this._scrollsliderEvents=[],this._controlIconSize=y.medium,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0}_handleBaseSlotChange(){this._setScrollsliderItems(),this._setButtonAttrs(),this._checkContainerOverflow()}_handleSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length}_handleControlSlotChange(){this._setButtonAttrs()}_checkContainerOverflow(){const t=!(this._scrollableElement.scrollWidth>this._scrollableElement.clientWidth+2);this.hideControls!==t&&(this.hideControls=t)}_onScroll(){const t=new CustomEvent(S.scroll,{cancelable:!0,bubbles:!0});this.dispatchEvent(t),!t.defaultPrevented&&this._setButtonAttrs()}_setScrollsliderItems(){const t=this._findAttributeBasedItems();if(t.length>0)this._scrollsliderItems=t,this._startObservingScrollsliderItems(this._scrollsliderItems);else{if(1===this._slot.length&&"slot"===this._slot[0].tagName.toLowerCase()){const t=this._slot[0].assignedElements();this._scrollsliderItems=t}else this._scrollsliderItems=this._slot;this._scrollsliderItems.forEach(t=>{t.setAttribute("role",this.scrollSliderItemRole)})}}get scrollableElement(){return this._scrollableElement}get atBeginning(){return Math.abs(this._scrollableElement.scrollLeft)<=1}get atEnd(){return Math.abs(this._scrollableElement.scrollLeft)+1>=this._scrollableElement.scrollWidth-this._scrollableElement.clientWidth}_findAttributeBasedItems(){const t=[];return this._slot.forEach(e=>{e.hasAttribute("scrollslider-item")&&t.push(e),"slot"===e.tagName.toLowerCase()?e.assignedElements({flatten:!0}).forEach(e=>{e instanceof HTMLElement&&(e.hasAttribute("scrollslider-item")&&t.push(e),t.push(...Array.from(e.querySelectorAll("[scrollslider-item]"))))}):t.push(...Array.from(e.querySelectorAll("[scrollslider-item]")))}),Array.from(new Set(t))}_startObservingScrollsliderItems(t){this._itemObserver&&(this._itemObserver.disconnect(),this._itemObserver=void 0);const e=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting?t.target.removeAttribute("partial"):t.target.setAttribute("partial","")})},{root:this,rootMargin:"0px",threshold:.99});t.forEach(t=>{e.observe(t)}),this._itemObserver=e}_setButtonAttrs(){const t=this._prevControlSlot.length>0?this._prevControlSlot[0]:this._prevControlDefault,e=this._nextControlSlot.length>0?this._nextControlSlot[0]:this._nextControlDefault;if(!t||!e)return;const{atBeginning:l}=this,{atEnd:s}=this;l&&t.matches(":focus")&&requestAnimationFrame(()=>{e.focus()}),s&&e.matches(":focus")&&requestAnimationFrame(()=>{t.focus()}),l?t.setAttribute("disabled",""):t.removeAttribute("disabled"),s?e.setAttribute("disabled",""):e.removeAttribute("disabled"),this._prevControlDisabled=l,this._nextControlDisabled=s,this.classList.toggle(w,!l),this.classList.toggle(C,!s)}_handleFullBleedResize(t){setTimeout(()=>{const e=document.documentElement.clientWidth,l=Math.abs(t.getBoundingClientRect().left);this.style.setProperty("--ds-scrollslider-vw",`${e}px`),this._scrollsliderSpacing=l,t.style.setProperty("--ds-scrollslider-full-bleed-spacing",`${l}px`)},100)}_scrollToNextItem(t){t.stopPropagation();const e=t.target;if(e===this._scrollsliderItems[this._scrollsliderItems.length-1]){const t="ltr"===this.dir?this._scrollableElement.scrollWidth:-1*this._scrollableElement.scrollWidth;window.requestAnimationFrame(()=>{this._scrollableElement.scroll({left:t})})}else this.controlPosition===x.middleJustified?e.scrollIntoView({block:"nearest",inline:"center"}):this.triggerNext()}_scrollToPrevItem(t){t.stopPropagation();const e=t.target;e===this._scrollsliderItems[0]?window.requestAnimationFrame(()=>{this._scrollableElement.scroll({left:0})}):this.controlPosition===x.middleJustified?e.scrollIntoView({block:"nearest",inline:"center"}):this.triggerPrev()}_handleLeftRight(t){const e=t;(e.key===c.ARROW_LEFT||e.key===c.ARROW_RIGHT)&&e.preventDefault()}_getItemGap(){if(this._scrollsliderItems.length>=2){const t=this._scrollsliderItems[0].getBoundingClientRect(),e=this._scrollsliderItems[1].getBoundingClientRect();return Math.max(0,e.left-t.right)}return Number.parseInt(getComputedStyle(this._scrollableElement).columnGap,10)||0}_scrollLeft(){const t=(this.fullBleed?this:this._scrollableElement).getBoundingClientRect(),e=this._scrollsliderItems.map(t=>({item:t,rect:t.getBoundingClientRect()})),l=[],s=this._getItemGap();let r=0;if(e.forEach(({item:e,rect:s})=>{("ltr"===this.dir&&s.left<t.left||"rtl"===this.dir&&s.right<=t.right)&&l.push({item:e,rect:s})}),l.length>0){let e=null,i=null,o=null;"ltr"===this.dir?(e=l.length-1,i=e+1,o=e):(e=0,i=e-1,o=e),r=l[e].item.hasAttribute("partial")?l[e].rect.left-t.left:-1*(l[e].rect.width+s),this.dispatchEvent(new CustomEvent("slide-changed",{bubbles:!0,detail:{previousIndex:i,currentIndex:o}}))}return r}_scrollRight(){const t=(this.fullBleed?this:this._scrollableElement).getBoundingClientRect(),e=this._scrollsliderItems.map(t=>({item:t,rect:t.getBoundingClientRect()})),l=[],s=this._getItemGap();let r=0,i=null,o=null;if(e.forEach(({item:e,rect:s},r)=>{let n=null;("ltr"===this.dir&&s.left>=t.left||"rtl"===this.dir&&s.right>t.right)&&(n=e),n&&(l.push({item:e,rect:s}),i??(i=r),o=r)}),l.length>0){h(null!==i),h(null!==o);let e=null,n=null,a=null;"ltr"===this.dir?(e=0,n=i,a=i+1):(e=l.length-1,n=o+1,a=o),this.dispatchEvent(new CustomEvent("slide-changed",{bubbles:!0,detail:{previousIndex:n,currentIndex:a}})),r=l[e].item.hasAttribute("partial")?l[e].rect.right-t.right:l[e].rect.width+s}return r}_renderOptionalSlot(t,e){return n`
      <div part=${t} class=${t} style="${e?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}prevControlTemplate(){const t={"scrollslider__prev-control-disabled":this._prevControlDisabled};return n`
      <div
        part="scrollslider__prev-control"
        class="scrollslider__prev-control ${a(t)}"
      >
        <slot
          name="scrollslider__prev-control"
          @slotchange="${this._handleControlSlotChange}"
          @click=${v(200,this.triggerPrev,{atBegin:!0})}
        >
          <reimagine-button
            class="scrollslider__prev-control-default"
            icon-only
            appearance=${u.buttonSecondary}
            size=${this.controlSize}
            shape=${f.circle}
            button-label=${this.prevControlLabel||this.msg("prev")||"Previous slide"}
            button-title=${this.prevControlLabel||this.msg("prev")||"Previous slide"}
          >
            <reimagine-icon
              icon="arrow-${"rtl"===this.dir?"right":"left"}"
              size=${this._controlIconSize}
              aria-hidden="true"
              role="presentation"
              filled
              slot="button__icon"
            ></reimagine-icon>
          </reimagine-button>
        </slot>
      </div>
    `}nextControlTemplate(){const t={"scrollslider__next-control-disabled":this._nextControlDisabled};return n`
      <div
        part="scrollslider__next-control"
        class="scrollslider__next-control ${a(t)}"
      >
        <slot
          name="scrollslider__next-control"
          @slotchange="${this._handleControlSlotChange}"
          @click=${v(200,this.triggerNext,{atBegin:!0})}
        >
          <reimagine-button
            class="scrollslider__next-control-default"
            icon-only
            appearance=${u.buttonSecondary}
            size=${this.controlSize}
            shape=${f.circle}
            button-label=${this.nextControlLabel||this.msg("next")||"Next slide"}
            button-title=${this.nextControlLabel||this.msg("next")||"Next slide"}
          >
            <reimagine-icon
              icon="arrow-${"rtl"===this.dir?"left":"right"}"
              size=${this._controlIconSize}
              aria-hidden="true"
              role="presentation"
              filled
              slot="button__icon"
            ></reimagine-icon>
          </reimagine-button>
        </slot>
      </div>
    `}controlsTemplate(){return n`
      <div part="scrollslider__controls" class="scrollslider__controls">
        ${this.prevControlTemplate()} ${this.nextControlTemplate()}
      </div>
    `}baseSlotTemplate(){return n`
      <div
        part="scrollslider__base"
        class="scrollslider__base"
        tabindex="-1"
        @scroll="${v(60,this._onScroll)}"
      >
        <slot @slotchange=${this._handleBaseSlotChange} role="presentation"></slot>
      </div>
    `}setScrollsliderItems(t){this._scrollsliderItems=t}setControlSize(t){this.controlSize=t,(this.controlSize===g.small||this.controlSize===g.medium)&&(this._controlIconSize=y.small),this.controlSize===g.large&&(this._controlIconSize=y.medium)}firstUpdated(){this._baseElement.setAttribute("role",this.scrollSliderRole),this._scrollableElement=this._baseElement}updated(t){t.has("scrollSliderRole")&&this._baseElement.setAttribute("role",this.scrollSliderRole)}connectedCallback(){super.connectedCallback(),this._resizeObserver=new ResizeObserver(()=>{this._setButtonAttrs(),this._checkContainerOverflow(),this.fullBleed&&this._handleFullBleedResize(this)}),this._resizeObserver.observe(this),this._scrollsliderEvents.push({el:this,type:b.partialFocusNext,handler:this._scrollToNextItem},{el:this,type:b.partialFocusPrev,handler:this._scrollToPrevItem},{el:this,type:"keydown",handler:this._handleLeftRight}),p(this._scrollsliderEvents),this.controlPosition===x.middleJustified&&(this.enableGradientFade=!0)}disconnectedCallback(){var t,e;super.disconnectedCallback(),null==(t=this._resizeObserver)||t.disconnect(),null==(e=this._itemObserver)||e.disconnect(),_(this._scrollsliderEvents)}triggerPrev(){if(this.atBeginning)return;const t="rtl"===this.dir?this._scrollRight():this._scrollLeft();window.requestAnimationFrame(()=>{this._scrollableElement.scrollBy({left:t})})}triggerNext(){if(this.atEnd)return;const t="rtl"===this.dir?this._scrollLeft():this._scrollRight();window.requestAnimationFrame(()=>{this._scrollableElement.scrollBy({left:t})})}render(){return n`
      ${this._renderOptionalSlot("scrollslider__first",this._firstSlotEmpty)}
      ${this.controlsTemplate()} ${this.baseSlotTemplate()}
      ${this._renderOptionalSlot("scrollslider__last",this._lastSlotEmpty)}
    `}};H.styles=[N],G([l({reflect:!0})],H.prototype,"alignment",2),G([l({attribute:"control-position",reflect:!0})],H.prototype,"controlPosition",2),G([l({attribute:"control-size",reflect:!0})],H.prototype,"controlSize",2),G([l({attribute:"full-bleed",reflect:!0,type:Boolean})],H.prototype,"fullBleed",2),G([l({attribute:"scrollslider-role"})],H.prototype,"scrollSliderRole",2),G([l({attribute:"scrollslider-item-role"})],H.prototype,"scrollSliderItemRole",2),G([l({attribute:"hide-controls",type:Boolean,reflect:!0})],H.prototype,"hideControls",2),G([l({attribute:"gradient-fade",type:Boolean,reflect:!0})],H.prototype,"enableGradientFade",2),G([l({attribute:"prev-control-label"})],H.prototype,"prevControlLabel",2),G([l({attribute:"next-control-label"})],H.prototype,"nextControlLabel",2),G([l({reflect:!0})],H.prototype,"theme",2),G([s(".scrollslider__prev-control reimagine-button")],H.prototype,"_prevControlDefault",2),G([s(".scrollslider__next-control reimagine-button")],H.prototype,"_nextControlDefault",2),G([r({slot:"scrollslider__prev-control"})],H.prototype,"_prevControlSlot",2),G([r({slot:"scrollslider__next-control"})],H.prototype,"_nextControlSlot",2),G([r()],H.prototype,"_slot",2),G([r({selector:"[scrollslider-item]",flatten:!0})],H.prototype,"attributeBasedScrollSliderItems",2),G([i({slot:"scrollslider__first"})],H.prototype,"_firstSlot",2),G([i({slot:"scrollslider__last"})],H.prototype,"_lastSlot",2),G([s(".scrollslider__base")],H.prototype,"_baseElement",2),G([o()],H.prototype,"_scrollableElement",2),G([o()],H.prototype,"_scrollsliderItems",2),G([o()],H.prototype,"_resizeObserver",2),G([o()],H.prototype,"_scrollsliderSpacing",2),G([o()],H.prototype,"_first",2),G([o()],H.prototype,"_last",2),G([o()],H.prototype,"_prevControlDisabled",2),G([o()],H.prototype,"_nextControlDisabled",2),G([o()],H.prototype,"_scrollsliderEvents",2),G([o()],H.prototype,"_controlIconSize",2),G([o()],H.prototype,"_firstSlotEmpty",2),G([o()],H.prototype,"_lastSlotEmpty",2),H=G([m(M)],H);export{H as S,x as a,S as b,M as n};
