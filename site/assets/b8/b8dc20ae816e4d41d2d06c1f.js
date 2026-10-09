import{r as e,i as t,c as i,f as r,e as s,o as a,b as o}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{o as l,R as d,T as n}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{f as c,e as p,d as h}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{b as u,v}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";const g="var(--ds-app-space-micro-s, 0.75rem)",_="var(--ds-app-radii-circle, 12.5rem)",m="var(--ds-app-color-interactive-secondary-bg-hover, #00559766)",b="var(--ds-app-color-base-default-fg-accent, #f4fafd)",x="73px",f="16px",y="6px",S="4px",w=t`
  :host {
    --ds-selector-slider-step-width: ${e("54px")};
    --ds-selector-slider-active-step-width: ${e(x)};
    --ds-selector-slider-step-gap: ${e(f)};
    --ds-selector-slider-dot-size: ${e(y)};
    --ds-selector-slider-indicator-fill-padding: ${e(S)};
  }

  .selector-slider {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--ds-selector-slider-gap, ${e(g)});
    margin: auto;
  }

  .slider-container {
    display: flex;
    align-items: center;
    width: 100%;
    height: 56px;
    background-color: var(--ds-app-color-surface-solid-bg-default, #fefefe);
    border: 1px solid var(--ds-app-color-surface-solid-border-default, #e6f2fb);
    border-radius: ${e(_)};
    padding-inline: var(--ds-app-space-micro-xs, 0.5rem);
  }

  .slider-input {
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-appearance: none;
    background-color: transparent;
    display: flex;
    width: 100%;
    z-index: var(--ds-z-index-10, 10);
    cursor: pointer;
    margin: var(--ds-selector-slider-indicator-fill-padding);
  }

  .slider-input:focus {
    outline: none;
  }

  .slider-input::-webkit-slider-thumb {
    appearance: none;
    width: var(--ds-selector-slider-active-step-width);
    height: 32px;
    background-color: transparent;
    border: none;
  }

  .slider-input::-moz-range-thumb {
    width: var(--ds-selector-slider-active-step-width);
    height: 32px;
    background-color: transparent;
    border: none;
  }

  .slider-input::-ms-thumb {
    width: var(--ds-selector-slider-active-step-width);
    height: 32px;
    background-color: transparent;
    border: none;
  }

  .indicators-wrapper {
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 40px;
  }

  .indicator-fill {
    position: absolute;
    height: 100%;
    background-color: var(--ds-app-color-interactive-secondary-bg-default, #005597);
    border-radius: ${e(_)};
    transition: width 0.3s ease;
    @media (forced-colors: active) {
      background-color: Highlight;
    }
  }

  .slider-indicator {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--ds-selector-slider-dot-size);
    height: var(--ds-selector-slider-dot-size);
    border-radius: ${e(_)};
    background-color: var(--ds-app-color-base-default-fg-accent, #0078d4);
    cursor: pointer;
    transition:
      background-color 0.3s ease,
      opacity 0.3s ease;
    @media (forced-colors: active) {
      background-color: ButtonText;
    }
  }

  .slider-indicator::before {
    content: '';
    position: absolute;
    width: var(--ds-selector-slider-step-width);
    height: 32px;
    border-radius: ${e(_)};
    background-color: transparent;
    opacity: 0;
    pointer-events: none;
    transition:
      background-color 0.3s ease,
      opacity 0.3s ease;
  }

  /* Pill-shaped hover background */
  .slider-indicator.hovered::before {
    content: '';
    position: absolute;
    width: var(--ds-selector-slider-step-width);
    height: 32px;
    border-radius: ${e(_)};
    background-color: var(
      --ds-selector-slider-indicator-bg-color-hover,
      ${e(m)}
    );
    opacity: 1;
    pointer-events: none;
    @media (forced-colors: active) {
      background-color: ButtonFace;
      border: 1px solid ButtonText;
    }
  }

  .slider-indicator.active::before {
    width: var(--ds-selector-slider-active-step-width, 73px);
    transition: width 1s ease;
  }

  /* Center white dot */
  .slider-indicator.hovered::after {
    content: '';
    width: var(--ds-selector-slider-dot-size);
    height: var(--ds-selector-slider-dot-size);
    border-radius: ${e(_)};
    background-color: var(
      --ds-selector-slider-indicator-dot-color-hover,
      ${e(b)}
    );
    z-index: var(--ds-z-index-10, 10);
    cursor: pointer;
    @media (forced-colors: active) {
      background-color: ButtonText;
    }
  }

  .slider-indicator.active {
    background: transparent;
    opacity: 0;
    transition:
      left 1s ease,
      right 1s ease;
  }

  .drag-pill {
    position: relative;
    display: flex;
    align-items: center;
  }

  .drag-pill-label {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--ds-app-color-surface-solid-bg-selected, #fefefe);
    color: var(--ds-app-color-base-default-fg-heading, #0e1726);
    font-weight: 600;
    font-size: 0.938rem;
    line-height: 1.375rem;
    letter-spacing: -0.01875rem;
    border-radius: ${e(_)};
    min-width: var(--ds-selector-slider-active-step-width);
    height: 32px;
    white-space: nowrap;
    cursor: pointer;
    box-shadow: var(
      --ds-elevation-level-2,
      0 2px 4px rgba(0, 0, 0, 0.14),
      0 0 2px rgba(0, 0, 0, 0.12)
    );
    transition: all 0.3s ease;
    @media (forced-colors: active) {
      border: 1px solid ButtonText;
    }
  }

  /* A11y focus style */
  .slider-container:focus-within .drag-pill-label {
    ${l};
  }

  .step-values {
    display: none;
  }

  /* Theme dark */
  :host([theme='dark']) {
    --ds-selector-slider-indicator-dot-color-hover: var(
      --ds-app-color-base-default-fg-heading,
      #0e1726
    );
  }
`,I=t`
  @media (max-width: ${e(u(v.sm))}) {
    :host {
      --ds-selector-slider-step-width: 48.75px;
      --ds-selector-slider-active-step-width: 57px;
      --ds-selector-slider-step-gap: 6px;
    }
  }
`;var $=Object.defineProperty,k=Object.getOwnPropertyDescriptor,E=(e,t,i,r)=>{for(var s,a=r>1?void 0:r?k(t,i):t,o=e.length-1;o>=0;o--)(s=e[o])&&(a=(r?s(t,i,a):s(a))||a);return r&&a&&$(t,i,a),a};const C="reimagine-selector-slider";let R=class extends d{constructor(){super(...arguments),this.dataValueText="%{value} employees",this.dataMinText="Minimum employees %{value}",this.dataMaxText="Maximum employees %{value}",this.ariaLabel="Number of employees",this._currentIndex=2,this._dragPillLabel="",this._containerMaxWidth="0px",this._fillWidth="0px",this._stepValuesSlotEmpty=!0,this._popoverSlotEmpty=!0,this._dirObserver=null,this._sliderResizeObserver=null,this._pageDirection="ltr",this._sliderEvents=[],this._stepWidth=54,this._stepGap=16,this._activeStepWidth=73,this._inputMarginInline=4,this._dotSize=6,this._highlightClosestIndicatorOnHover=e=>{var t,i;const r=e,s=r.currentTarget.getBoundingClientRect(),a=null==(t=this.shadowRoot)?void 0:t.querySelector(".slider-input");if(!a)return;const o=a.getBoundingClientRect(),l=r.clientX>=o.left&&r.clientX<=o.right&&r.clientY>=o.top&&r.clientY<=o.bottom,d=(null==(i=this.shadowRoot)?void 0:i.querySelectorAll(".slider-indicator"))??[];if(!l)return void d.forEach(e=>e.classList.remove("hovered"));const n=r.clientX-s.left;let c=null,p=1/0;for(let e=0;e<d.length;e++){const t=d[e],i=t.getBoundingClientRect(),r=i.left+i.width/2-s.left,a=Math.abs(r-n);a<p&&t instanceof HTMLElement&&(c=t,p=a)}d.forEach(e=>e.classList.remove("hovered")),c&&c.classList.add("hovered")},this._removeIndicatorHoverState=()=>{var e;((null==(e=this.shadowRoot)?void 0:e.querySelectorAll(".slider-indicator"))??[]).forEach(e=>e.classList.remove("hovered"))},this._selectIndicatorOnClick=()=>{var e;const t=Array.from((null==(e=this.shadowRoot)?void 0:e.querySelectorAll(".slider-indicator"))??[]);if(!t.length)return;const i=t.findIndex(e=>e.classList.contains("hovered"));-1===i||i===this._currentIndex||this._updateSliderStateFromIndex(i)}}get currentIndex(){return this._currentIndex}get _numberOfSteps(){var e;return(null==(e=this._stepValuesSlot)?void 0:e.length)||5}_handleSlotChange(){this._popoverSlotEmpty=0===this._popoverSlot.length,this._stepValuesSlotEmpty=0===this._stepValuesSlot.length}_updateSliderStateFromIndex(e){var t;const i=null==(t=this.shadowRoot)?void 0:t.querySelector(".slider-input");i&&(i.value=String(e+1)),this._currentIndex=e,this._updateDragPill(),this._updateFillWidth(),this._updateAriaValueText(),this._dispatchSliderValueChange()}_handleInputChange(e){const t=e.target,i=Number(t.value)-1;i!==this._currentIndex&&(this._updateSliderStateFromIndex(i),this._updateSliderIndicators())}_createSliderIndicators(){var e,t;const i=null==(e=this.shadowRoot)?void 0:e.querySelector(".indicators-wrapper"),r=Array.from((null==(t=this.shadowRoot)?void 0:t.querySelectorAll(".slider-indicator"))||[]);if(!i)return;r.length&&r.forEach(e=>e.remove());const s=Number(this._numberOfSteps||5);for(let e=1;e<=s;e++){const e=document.createElement("span");e.className="slider-indicator",i.append(e)}}_updateSliderIndicators(){var e,t;const i=null==(e=this.shadowRoot)?void 0:e.querySelector(".slider-input"),r=Array.from((null==(t=this.shadowRoot)?void 0:t.querySelectorAll(".slider-indicator"))||[]);if(!i||!r.length)return;this._pageDirection="rtl"===document.documentElement.getAttribute("dir")?"rtl":"ltr";const s="rtl"===this._pageDirection?"right":"left";r.forEach((e,t)=>{let r=0;r=i.valueAsNumber>t+1?this._inputMarginInline+.5*this._stepWidth-.5*this._dotSize+(this._stepGap+this._stepWidth)*t:this._activeStepWidth+this._inputMarginInline+this._stepGap*t+this._stepWidth*(t-.5),e.style[s]=`${r}px`}),this._updateDragPill(),this._updateFillWidth()}_addIndicatorHoverListeners(){var e;const t=null==(e=this.shadowRoot)?void 0:e.querySelectorAll(".slider-indicator");t&&t.forEach(e=>{e.addEventListener("mouseenter",()=>{e.classList.add("hovered")}),e.addEventListener("mouseleave",()=>{e.classList.remove("hovered")})})}_updateDragPill(){var e,t,i,r;const s=null==(e=this.shadowRoot)?void 0:e.querySelector(".slider-input"),a=null==(t=this.shadowRoot)?void 0:t.querySelector(".drag-pill-label"),o=Array.from((null==(i=this.shadowRoot)?void 0:i.querySelectorAll(".slider-indicator"))||[]);if(!s||!a)return;o.forEach((e,t)=>{t!==this._currentIndex&&e.classList.remove("active")}),o[this._currentIndex].classList.add("active"),this._dragPillLabel=`${null==(r=this._stepValuesSlot[this._currentIndex].textContent)?void 0:r.trim()}`,this._pageDirection="rtl"===document.documentElement.getAttribute("dir")?"rtl":"ltr";const l="rtl"===this._pageDirection?"right":"left",d=this._inputMarginInline+(this._stepGap+this._stepWidth)*(s.valueAsNumber-1);a.style[l]=`${d}px`}_updateFillWidth(){var e;const t=null==(e=this.shadowRoot)?void 0:e.querySelector(".slider-input");this._fillWidth=`${this._activeStepWidth+2*this._inputMarginInline+(this._stepGap+this._stepWidth)*(t.valueAsNumber-1)}px`}_updateAriaValueText(){var e,t;const i=null==(e=this.shadowRoot)?void 0:e.querySelector(".slider-input");if(!i||!this._stepValuesSlot[this._currentIndex])return;const r=(null==(t=this._stepValuesSlot[this._currentIndex].textContent)?void 0:t.trim())??"";let s;s=0===this._currentIndex?this.dataMinText.replace("%{value}",r):this._currentIndex===this._stepValuesSlot.length-1?this.dataMaxText.replace("%{value}",r):this.dataValueText.replace("%{value}",r),i.setAttribute("aria-valuetext",s)}_updateStepDimensions(){const e=getComputedStyle(this);this._stepWidth=parseFloat(e.getPropertyValue("--ds-selector-slider-step-width"))||54,this._stepGap=parseFloat(e.getPropertyValue("--ds-selector-slider-step-gap"))||16,this._activeStepWidth=parseFloat(e.getPropertyValue("--ds-selector-slider-active-step-width"))||73,this._inputMarginInline=parseFloat(e.getPropertyValue("--ds-selector-slider-input-margin-inline"))||4,this._dotSize=parseFloat(e.getPropertyValue("--ds-selector-slider-dot-size"))||6}_updateContainerMaxWidth(){if(!this._stepValuesSlotEmpty){const e=this._stepValuesSlot.length,t=(this._stepWidth+this._stepGap)*(e-1)+this._activeStepWidth+2*this._inputMarginInline;this._containerMaxWidth=`${t}px`}}_dispatchSliderValueChange(){var e,t;this.dispatchEvent(new CustomEvent("slider-value-change",{bubbles:!0,composed:!0,detail:{index:this._currentIndex,value:null==(t=null==(e=this._stepValuesSlot[this._currentIndex])?void 0:e.textContent)?void 0:t.trim()}}))}connectedCallback(){super.connectedCallback(),this._dirObserver=new MutationObserver(e=>{for(const t of e)if("attributes"===t.type&&"dir"===t.attributeName){const e="rtl"===document.documentElement.getAttribute("dir")?"rtl":"ltr";e!==this._pageDirection&&(this._pageDirection=e,this._updateSliderIndicators())}}),this._dirObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]})}disconnectedCallback(){var e,t;super.disconnectedCallback(),null==(e=this._dirObserver)||e.disconnect(),null==(t=this._sliderResizeObserver)||t.disconnect(),c(this._sliderEvents)}firstUpdated(){var e,t;if(!this.theme){const e=document.querySelector("html"),t=document.querySelector("body");this.theme!==n.light&&(e&&e.classList.contains("theme-dark")||t&&t.classList.contains("theme-dark"))&&(this.theme=n.dark)}this._createSliderIndicators(),this._addIndicatorHoverListeners(),this._updateAriaValueText();const i=null==(e=this.shadowRoot)?void 0:e.querySelector(".selector-slider");i&&(this._sliderResizeObserver=new ResizeObserver(()=>{this._updateStepDimensions(),this._updateContainerMaxWidth(),this._updateSliderIndicators()}),this._sliderResizeObserver.observe(i));const r=null==(t=this.shadowRoot)?void 0:t.querySelector(".slider-container");r&&(this._sliderEvents.push({el:r,type:"mousemove",handler:this._highlightClosestIndicatorOnHover},{el:r,type:"mouseleave",handler:this._removeIndicatorHoverState},{el:r,type:"click",handler:this._selectIndicatorOnClick}),p(this._sliderEvents))}render(){return o`
      <div class="selector-slider" part="selector-slider">
        <div class="label" part="label" ?hidden=${this._popoverSlotEmpty}>
          <slot name="label" @slotchange=${this._handleSlotChange}></slot>
        </div>
        <div
          class="slider-container"
          part="slider-container"
          style="max-width: ${this._containerMaxWidth};"
        >
          <div
            class="indicators-wrapper"
            part="indicators-wrapper"
            @slotchange=${this._handleSlotChange}
          >
            <div
              class="indicator-fill"
              part="indicator-fill"
              style="width: ${this._fillWidth};"
            ></div>
            <!-- dynamically inserted spans -->
          </div>

          <div class="drag-pill" part="drag-pill">
            <span class="drag-pill-label" part="drag-pill-label">${this._dragPillLabel}</span>
          </div>

          <input
            type="range"
            min="1"
            max="${this._numberOfSteps}"
            step="1"
            .value=${String(this._currentIndex+1)}
            class="slider-input"
            part="slider-input"
            @input="${this._handleInputChange}"
            data-valuetext="${a(this.dataValueText)}"
            data-mintext="${a(this.dataMinText)}"
            data-maxtext="${a(this.dataMaxText)}"
            aria-label="${a(this.ariaLabel)}"
          />

          <div class="step-values" part="step-values">
            <slot name="step-values" @slotchange=${this._handleSlotChange}></slot>
          </div>
        </div>
      </div>
    `}};R.styles=[w,I],E([i({reflect:!0})],R.prototype,"theme",2),E([i({reflect:!0,type:String,attribute:"data-value-text"})],R.prototype,"dataValueText",2),E([i({reflect:!0,type:String,attribute:"data-min-text"})],R.prototype,"dataMinText",2),E([i({reflect:!0,type:String,attribute:"data-max-text"})],R.prototype,"dataMaxText",2),E([i({reflect:!0,type:String,attribute:"aria-label"})],R.prototype,"ariaLabel",2),E([r()],R.prototype,"_currentIndex",2),E([r()],R.prototype,"_dragPillLabel",2),E([r()],R.prototype,"_containerMaxWidth",2),E([r()],R.prototype,"_fillWidth",2),E([r()],R.prototype,"_stepValuesSlotEmpty",2),E([r()],R.prototype,"_popoverSlotEmpty",2),E([r()],R.prototype,"_dirObserver",2),E([r()],R.prototype,"_sliderResizeObserver",2),E([r()],R.prototype,"_pageDirection",2),E([r()],R.prototype,"_sliderEvents",2),E([s({slot:"label"})],R.prototype,"_popoverSlot",2),E([s({slot:"step-values"})],R.prototype,"_stepValuesSlot",2),R=E([h(C)],R);export{R as SelectorSlider,C as name};
