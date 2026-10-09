import{r as t,i as e,c as r,f as a,k as i,e as s,A as n,o,b as l}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{R as h}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{d}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{r as u,p as c}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import"/__mirror/assets/e03438b5798d9e90c6c162a8";const m="number",p="time",b="slider-range-change",v="var(--ds-app-space-micro-l, 1rem)",g="var(--ds-app-space-micro-m, 0.75rem)",_="var(--ds-app-color-base-default-fg-heading)",f="0.5rem",$="var(--ds-app-color-interactive-secondary-bg-default)",y="var(--ds-app-radii-circle, 12.5rem)",x="var(--ds-app-color-interactive-secondary-bg-selected)",T="var(--ds-app-color-interactive-primary-fg-default)",k="var(--ds-border-s, 0.125rem)",S="var(--ds-app-color-interactive-primary-border-default)",w="var(--ds-elevation-level-1, 0 0 0.125rem rgba(0, 0, 0, 0.12), 0 0.063rem 0.125rem rgba(0, 0, 0, 0.14))",z="var(--ds-app-color-base-default-fg-accent)",P="var(--ds-app-color-base-default-bg-opt2)",C=e`
  :host {
    display: block;
    inline-size: 100%;

    --ds-slider-range-thumb-size: ${t("1rem")};
    --ds-slider-range-track-height: ${t(f)};
  }

  :host([hidden]) {
    display: none;
  }

  .slider-range {
    display: flex;
    flex-direction: column;
    gap: var(--ds-slider-range-gap, ${t(v)});
    inline-size: 100%;
  }

  .label {
    color: var(--ds-slider-range-label-color, ${t(_)});
    font-weight: ${t(u.fontWeight)};
    font-size: ${t(u.fontSize)};
    line-height: ${t(u.lineHeight)};
    letter-spacing: ${t(u.letterSpacing)};
  }

  .label[hidden] {
    display: none;
  }

  .label ::slotted(p) {
    margin-block: 0;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--ds-slider-range-wrapper-gap, ${t(g)});
    inline-size: 100%;
  }

  .track {
    position: relative;
    inline-size: 100%;
    block-size: var(--ds-slider-range-track-height, ${t(f)});
    box-sizing: border-box;
    background-color: var(
      --ds-slider-range-track-background-color,
      ${t($)}
    );
    border-radius: var(
      --ds-slider-range-track-border-radius,
      ${t(y)}
    );
    cursor: pointer;
    touch-action: none;

    @media (forced-colors: active) {
      border: 1px solid CanvasText;
    }
  }

  .range-fill {
    position: absolute;
    inset-block: 0;
    inset-inline-start: calc(
      var(--ds-slider-range-thumb-size) / 2 + var(--ds-slider-range-start, 0) *
        (100% - var(--ds-slider-range-thumb-size))
    );
    inline-size: calc(
      (var(--ds-slider-range-end, 0) - var(--ds-slider-range-start, 0)) *
        (100% - var(--ds-slider-range-thumb-size))
    );
    background-color: var(--ds-slider-range-fill-color, ${t(x)});
    border-radius: var(
      --ds-slider-range-track-border-radius,
      ${t(y)}
    );
    pointer-events: none;

    @media (forced-colors: active) {
      background-color: Highlight;
    }
  }

  .thumb {
    position: absolute;
    inset-block-start: 50%;
    box-sizing: border-box;
    inline-size: var(--ds-slider-range-thumb-size);
    block-size: var(--ds-slider-range-thumb-size);
    background-color: var(--ds-slider-range-thumb-color, ${t(T)});
    border: var(--ds-slider-range-thumb-border-width, ${t(k)})
      solid var(--ds-slider-range-thumb-border-color, ${t(S)});
    border-radius: var(--ds-app-radii-circle, 12.5rem);
    box-shadow: var(--ds-slider-range-thumb-shadow, ${t(w)});

    /* Center the handle on its position with a logical margin (RTL-safe) and
       reserve the transform for vertical centering only — CSS transforms are
       physical and would not mirror in RTL. */
    margin-inline-start: calc(var(--ds-slider-range-thumb-size) / -2);
    transform: translateY(-50%);
    cursor: grab;
    touch-action: none;

    @media (forced-colors: active) {
      background-color: ButtonText;
      border: 1px solid ButtonFace;
    }
  }

  .thumb:active {
    cursor: grabbing;
  }

  .thumb:focus-visible {
    outline: 0.125rem solid var(--ds-slider-range-focus-color, ${t(z)});
    outline-offset: 0.125rem;
  }

  .thumb-start {
    inset-inline-start: calc(
      var(--ds-slider-range-thumb-size) / 2 + var(--ds-slider-range-start, 0) *
        (100% - var(--ds-slider-range-thumb-size))
    );
  }

  .thumb-end {
    inset-inline-start: calc(
      var(--ds-slider-range-thumb-size) / 2 + var(--ds-slider-range-end, 0) *
        (100% - var(--ds-slider-range-thumb-size))
    );
  }

  .values {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    inline-size: 100%;
  }

  .tag-start,
  .tag-end {
    --ds-tag-background: var(
      --ds-slider-range-value-tag-background-color,
      ${t(P)}
    );
  }
`;var R=Object.defineProperty,E=Object.getOwnPropertyDescriptor,M=(t,e,r,a)=>{for(var i,s=a>1?void 0:a?E(e,r):e,n=t.length-1;n>=0;n--)(i=t[n])&&(s=(a?i(e,r,s):i(s))||s);return a&&s&&R(e,r,s),s};const D="reimagine-slider-range";let V=class extends h{constructor(){super(...arguments),this.min=0,this.max=100,this.step=1,this.showValues=!1,this.valueText="%{value}",this.valueFormat=m,this.startAriaLabel="Minimum value",this.endAriaLabel="Maximum value",this._start=0,this._end=100,this._labelSlotEmpty=!0,this._activeThumb=null,this._rtl=!1,this._thumbSizePx=16}_clamp(t,e,r){return Math.min(Math.max(t,e),r)}_roundToStep(t){const e=this.step>0?this.step:1,r=this.min+Math.round((t-this.min)/e)*e;return parseFloat(r.toFixed(6))}_pageStep(){const t=this.max-this.min,e=this.step>0?this.step:1;return Math.max(e,this._roundToStep(this.min+t/10)-this.min)}_resolveValues(){let t=Number.isFinite(this.valueStart)?this.valueStart:this.min,e=Number.isFinite(this.valueEnd)?this.valueEnd:this.max;return t=this._clamp(this._roundToStep(t),this.min,this.max),e=this._clamp(this._roundToStep(e),this.min,this.max),t>e&&(t=e),{start:t,end:e}}_fraction(t){const e=this.max-this.min;return e>0?this._clamp((t-this.min)/e,0,1):0}_formatValue(t){return this.valueFormat===p?this._formatTime(t):(this.valueText||"%{value}").replace("%{value}",String(t))}_formatTime(t){const e=Math.max(0,Math.round(t)),r=Math.floor(e/3600),a=Math.floor(e%3600/60),i=String(e%60).padStart(2,"0");return r>0?`${r}:${String(a).padStart(2,"0")}:${i}`:`${a}:${i}`}_isRtl(){return"rtl"===getComputedStyle(this).direction}_thumbSide(t){return t.currentTarget.classList.contains("thumb-start")?"start":"end"}_valueFromClientX(t){var e;const r=this._trackRect??(null==(e=this._track)?void 0:e.getBoundingClientRect());if(!r)return null;const a=this._thumbSizePx/2,i=Math.max(r.width-this._thumbSizePx,1);let s=(t-r.left-a)/i;return this._rtl&&(s=1-s),s=this._clamp(s,0,1),this._roundToStep(this.min+s*(this.max-this.min))}_nearestThumb(t){return t<=this._start?"start":t>=this._end?"end":t-this._start<=this._end-t?"start":"end"}_setThumbValue(t,e){const r=this._roundToStep(e);if("start"===t){const t=this._clamp(r,this.min,this._end);if(t===this._start)return;this.valueStart=t}else{const t=this._clamp(r,this._start,this.max);if(t===this._end)return;this.valueEnd=t}this._dispatchChange()}_dispatchChange(){const{start:t,end:e}=this._resolveValues();this.dispatchEvent(new CustomEvent(b,{bubbles:!0,composed:!0,detail:{start:t,end:e}}))}_handleSlotChange(){const t=0===this._labelSlot.length;this._labelSlotEmpty!==t&&(this._labelSlotEmpty=t)}_onThumbPointerDown(t){var e;const r=t.currentTarget;t.preventDefault(),r.focus(),this._activeThumb=this._thumbSide(t),this._rtl=this._isRtl(),this._thumbSizePx=r.offsetWidth||16,this._trackRect=null==(e=this._track)?void 0:e.getBoundingClientRect(),r.setPointerCapture(t.pointerId)}_onThumbPointerMove(t){if(!this._activeThumb)return;const e=this._valueFromClientX(t.clientX);null!==e&&this._setThumbValue(this._activeThumb,e)}_onThumbPointerUp(t){if(!this._activeThumb)return;const e=t.currentTarget;e.hasPointerCapture(t.pointerId)&&e.releasePointerCapture(t.pointerId),this._activeThumb=null,this._trackRect=void 0}_onTrackPointerDown(t){var e,r;if(t.target.classList.contains("thumb"))return;this._rtl=this._isRtl(),this._thumbSizePx=(null==(e=this._startThumb)?void 0:e.offsetWidth)||16,this._trackRect=null==(r=this._track)?void 0:r.getBoundingClientRect();const a=this._valueFromClientX(t.clientX);if(null===a)return;const i=this._nearestThumb(a);this._activeThumb=i;const s="start"===i?this._startThumb:this._endThumb;s&&(s.focus(),s.setPointerCapture(t.pointerId)),this._setThumbValue(i,a)}_onThumbKeyDown(t){const e=this._thumbSide(t),r="start"===e?this._start:this._end,a=this._isRtl(),i=this.step>0?this.step:1;let s=r;switch(t.key){case"ArrowRight":s=r+(a?-i:i);break;case"ArrowUp":s=r+i;break;case"ArrowLeft":s=r-(a?-i:i);break;case"ArrowDown":s=r-i;break;case"PageUp":s=r+this._pageStep();break;case"PageDown":s=r-this._pageStep();break;case"Home":s="start"===e?this.min:this._start;break;case"End":s="end"===e?this.max:this._end;break;default:return}t.preventDefault(),this._setThumbValue(e,s)}willUpdate(t){if(super.willUpdate(t),t.has("min")||t.has("max")||t.has("step")||t.has("valueStart")||t.has("valueEnd")){const t=this._resolveValues();this._start=t.start,this._end=t.end}}render(){const t=this._fraction(this._start),e=this._fraction(this._end),r=this._formatValue(this._start),a=this._formatValue(this._end);return l`
      <div class="slider-range" part="slider-range">
        <div class="label" part="label" id="slider-range-label" ?hidden=${this._labelSlotEmpty}>
          <slot name="label" @slotchange=${this._handleSlotChange}></slot>
        </div>

        <div
          class="wrapper"
          part="wrapper"
          role=${o(this._labelSlotEmpty?void 0:"group")}
          aria-labelledby=${o(this._labelSlotEmpty?void 0:"slider-range-label")}
        >
          <div
            class="track"
            part="track"
            style="--ds-slider-range-start: ${t}; --ds-slider-range-end: ${e};"
            @pointerdown=${this._onTrackPointerDown}
          >
            <div class="range-fill" part="range-fill"></div>
            <div
              class="thumb thumb-start"
              part="thumb-start"
              role="slider"
              tabindex="0"
              aria-orientation="horizontal"
              aria-valuemin=${this.min}
              aria-valuemax=${this._end}
              aria-valuenow=${this._start}
              aria-valuetext=${o(r)}
              aria-label=${o(this.startAriaLabel)}
              @pointerdown=${this._onThumbPointerDown}
              @pointermove=${this._onThumbPointerMove}
              @pointerup=${this._onThumbPointerUp}
              @pointercancel=${this._onThumbPointerUp}
              @keydown=${this._onThumbKeyDown}
            ></div>
            <div
              class="thumb thumb-end"
              part="thumb-end"
              role="slider"
              tabindex="0"
              aria-orientation="horizontal"
              aria-valuemin=${this._start}
              aria-valuemax=${this.max}
              aria-valuenow=${this._end}
              aria-valuetext=${o(a)}
              aria-label=${o(this.endAriaLabel)}
              @pointerdown=${this._onThumbPointerDown}
              @pointermove=${this._onThumbPointerMove}
              @pointerup=${this._onThumbPointerUp}
              @pointercancel=${this._onThumbPointerUp}
              @keydown=${this._onThumbKeyDown}
            ></div>
          </div>

          ${this.showValues?l`
                <div class="values" part="values">
                  <reimagine-tag
                    class="tag-start"
                    part="tag-start"
                    size=${c.small}
                    >${r}</reimagine-tag
                  >
                  <reimagine-tag
                    class="tag-end"
                    part="tag-end"
                    size=${c.small}
                    >${a}</reimagine-tag
                  >
                </div>
              `:n}
        </div>
      </div>
    `}};V.styles=[C],M([r({type:Number,reflect:!0})],V.prototype,"min",2),M([r({type:Number,reflect:!0})],V.prototype,"max",2),M([r({type:Number,reflect:!0})],V.prototype,"step",2),M([r({type:Number,reflect:!0,attribute:"value-start"})],V.prototype,"valueStart",2),M([r({type:Number,reflect:!0,attribute:"value-end"})],V.prototype,"valueEnd",2),M([r({type:Boolean,reflect:!0,attribute:"show-values"})],V.prototype,"showValues",2),M([r({attribute:"value-text"})],V.prototype,"valueText",2),M([r({reflect:!0,attribute:"value-format"})],V.prototype,"valueFormat",2),M([r({attribute:"start-aria-label"})],V.prototype,"startAriaLabel",2),M([r({attribute:"end-aria-label"})],V.prototype,"endAriaLabel",2),M([a()],V.prototype,"_start",2),M([a()],V.prototype,"_end",2),M([a()],V.prototype,"_labelSlotEmpty",2),M([i(".track")],V.prototype,"_track",2),M([i(".thumb-start")],V.prototype,"_startThumb",2),M([i(".thumb-end")],V.prototype,"_endThumb",2),M([s({slot:"label"})],V.prototype,"_labelSlot",2),V=M([d(D)],V);export{V as SliderRange,D as name};
