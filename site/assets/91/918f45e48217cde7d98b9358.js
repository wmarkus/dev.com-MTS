import{r as i,i as e,c as t,g as a,b as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as s}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{R as n}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{TimelineBarIndicator as d}from"/__mirror/assets/f0cea525b6f3c710ac88f68c";const o="32px",c="1px solid var(--ds-app-color-surface-solid-border-default, #E6F2FB)",l="29px",p="1px",b=e`
  :host {
    display: block;
    width: var(--ds-timeline-bar-width, ${i("1040px")});
    height: var(--ds-timeline-bar-height, ${i(o)});
    max-width: var(--ds-timeline-bar-max-width, initial);
  }

  .bar {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: var(--ds-app-color-surface-solid-bg-default, #fefefe);
    border: var(--ds-timeline-bar-border, ${i(c)});
    border-radius: var(--ds-app-radii-l, 1rem);
    box-shadow: var(--ds-elevation-level-2);
    padding: 0 16px;
    box-sizing: border-box;
  }

  .line {
    position: absolute;
    left: 16px;
    right: 16px;
    height: var(--ds-timeline-bar-line-thickness, ${i(p)});
    background: linear-gradient(
      90deg,
      rgba(23, 37, 61, 0) 0%,
      #17253d 5%,
      #17253d 95%,
      rgba(23, 37, 61, 0) 100%
    );
  }

  .indicators {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    z-index: var(--ds-z-index-10, 10);
  }

  ::slotted(reimagine-timeline-bar-indicator) {
    --timeline-bar-date-position: absolute;
    --timeline-bar-date-top: 25px;
    --timeline-bar-date-left: 50%;
    --timeline-bar-date-transform: translateX(-50%);
    --timeline-bar-date-margin-top: 0;
    --timeline-bar-indicator-node-wrapper-background: var(
      --ds-app-color-surface-solid-bg-default,
      #fefefe
    );
  }

  :host([clickable]) {
    --timeline-bar-indicator-cursor: pointer;
  }

  ::slotted(reimagine-timeline-bar-indicator[active]) {
    --timeline-bar-date-top: var(
      --ds-timeline-bar-active-date-top,
      ${i(l)}
    );
  }

  @media (forced-colors: active) {
    .line {
      background: CanvasText;
    }

    .bar {
      border-color: CanvasText;
    }
  }
`;var h=Object.defineProperty,m=Object.getOwnPropertyDescriptor,v=(i,e,t,a)=>{for(var r,s=a>1?void 0:a?m(e,t):e,n=i.length-1;n>=0;n--)(r=i[n])&&(s=(a?r(e,t,s):r(s))||s);return a&&s&&h(e,t,s),s};const g="reimagine-timeline-bar";let f=class extends n{constructor(){super(...arguments),this.activeIndicator=0,this.clickable=!1}get _indicators(){return this._assignedElements.filter(i=>i instanceof d)}updated(i){super.updated(i),i.has("activeIndicator")&&this._updateActiveIndicator(),i.has("clickable")&&this._attachIndicatorListeners()}_handleSlotChange(){this._updateActiveIndicator(),this._setIndicatorIndices()}_setIndicatorIndices(){this._indicators.forEach((i,e)=>{i.index=e})}_attachIndicatorListeners(){!this._indicators||0===this._indicators.length||this.clickable&&this._indicators.forEach(i=>{const e=()=>{void 0!==i.index&&this._indicatorClicked(i.index)};i.removeEventListener("click",e),i.addEventListener("click",e)})}_indicatorClicked(i){this.activeIndicator=i,this.dispatchEvent(new CustomEvent("timelineBarIndicatorClick",{detail:{index:i},bubbles:!0,composed:!0}))}_updateActiveIndicator(){!this._indicators||0===this._indicators.length||this._indicators.forEach((i,e)=>{e===this.activeIndicator?i.active=!0:i.active=!1})}getIndicators(){return this._indicators}render(){return r`
      <div class="bar" part="bar">
        <div class="line" part="line"></div>
        <div class="indicators" part="indicators">
          <slot @slotchange=${this._handleSlotChange}></slot>
        </div>
      </div>
    `}};f.styles=[b],v([t({type:Number,reflect:!0,attribute:"active-indicator"})],f.prototype,"activeIndicator",2),v([t({type:Boolean,reflect:!0})],f.prototype,"clickable",2),v([a()],f.prototype,"_assignedElements",2),f=v([s(g)],f);export{f as TimelineBar,g as name};
