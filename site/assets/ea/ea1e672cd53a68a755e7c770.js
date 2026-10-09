import{r as t,i,b as n,f as o,c as a}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{R as e}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{d as r}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{G as s,w as l}from"/__mirror/assets/6ad137053d5da8fc91d912f1";const m="playing",h="paused",g={display:"inline-block",background:"var(--ds-rolling-text-gradient, linear-gradient(90deg, #882A8B 0%, #DC2C04 100%, #B54128 100%))",animationDuration:"400ms",fontSize:s.fontSize,fontWeight:s.fontWeight,lineHeight:s.lineHeight,letterSpacing:s.letterSpacing,paddingBlockEnd:"var(--ds-app-space-micro-xl, 2rem)"},d=i`
  .rolling-text {
    display: var(--ds-rolling-text-display, ${t(g.display)});
    position: relative;
    overflow: visible;
    word-break: break-word;
    background-image: var(--ds-rolling-text-background, ${t(g.background)});
    color: var(--ds-text-color-override, transparent);
    background-clip: text;
    font-size: var(--ds-rolling-text-font-size, ${t(g.fontSize)});
    font-weight: var(--ds-rolling-text-font-weight, ${t(g.fontWeight)});
    line-height: var(--ds-rolling-text-line-height, ${t(g.lineHeight)});
    letter-spacing: var(
      --ds-rolling-text-letter-spacing,
      ${t(g.letterSpacing)}
    );
    padding-block-end: var(
      --ds-rolling-text-padding-block-end,
      ${t(g.paddingBlockEnd)}
    );
    contain: layout style paint;
  }

  :host([text-color]) .rolling-text {
    background-image: none;
  }

  .animating-in {
    will-change: transform, opacity;
    animation: roll-in-from-bottom ${t(g.animationDuration)} linear forwards;
  }

  .animating-out {
    will-change: transform, opacity;
    animation: roll-out-to-top ${t(g.animationDuration)} linear forwards;
  }

  :not(.animating-in):not(.animating-out) {
    animation: none !important;
    transform: translateY(0) !important;
    opacity: 1 !important;
    will-change: auto;
  }

  [data-animation-key]::before {
    content: '';
    display: none;
  }

  @keyframes roll-out-to-top {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-100%);
      opacity: 0;
    }
  }

  @keyframes roll-in-from-bottom {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .animating-in,
    .animating-out {
      animation: none;
      transform: none;
      opacity: 1;
      will-change: auto;
    }
  }
`;var p=Object.defineProperty,_=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,u=Reflect.get,A=(t,i,n,o)=>{for(var a,e=o>1?void 0:o?_(i,n):i,r=t.length-1;r>=0;r--)(a=t[r])&&(e=(o?a(i,n,e):a(e))||e);return o&&e&&p(i,n,e),e};const y="reimagine-rolling-text";let f=class extends(l(e)){constructor(){super(...arguments),this._rollingAnimationTransitionDuration=400,this._rollingWords=[],this._currentWordIndex=0,this._animationState=h,this._isRollingComplete=!0,this._isAnimatingIn=!1,this._isAnimatingOut=!1,this._animationKey=0,this.autoPlay=!1,this.pauseDuration=500}connectedCallback(){super.connectedCallback(),this._initializeFromTextContent()}_initializeFromTextContent(){var t;const i=null==(t=this.textContent)?void 0:t.trim();i&&(this._parseRollingText(i),this.autoPlay&&this._animationState===h&&this._startAnimation())}_parseRollingText(t){const i=t.split(";");this._rollingWords=i.map(t=>t.trim()),this._currentWordIndex=0}_startAnimation(){const t=this._rollingWords.length;if(0===t)return;this._animationState=m,this._isRollingComplete=!1,this._dispatchAnimationStateChange();const i=(this._currentWordIndex+1)%t;0===i&&(this._isRollingComplete=!0),this._triggerWordTransition(i)}_stopAnimation(){this._animationState!==h&&(this._animationState=h,this._animationTimer&&(clearTimeout(this._animationTimer),this._animationTimer=void 0),this._outAnimationTimer&&(clearTimeout(this._outAnimationTimer),this._outAnimationTimer=void 0),this._inAnimationTimer&&(clearTimeout(this._inAnimationTimer),this._inAnimationTimer=void 0),this._isAnimatingIn=!1,this._isAnimatingOut=!1,this._isRollingComplete=!1,this._dispatchAnimationStateChange())}_scheduleNextWord(){if(this._animationState!==m)return;const t=2*this._rollingAnimationTransitionDuration+(this.pauseDuration??500);this._animationTimer=window.setTimeout(()=>{if(this._isRollingComplete)return void this._stopAnimation();const t=(this._currentWordIndex+1)%this._rollingWords.length;0===t&&(this._isRollingComplete=!0),this._triggerWordTransition(t)},t)}_triggerWordTransition(t){this._isAnimatingOut=!0,this._isAnimatingIn=!1,this._outAnimationTimer=window.setTimeout(()=>{this._isAnimatingOut=!1,this._currentWordIndex=t,this._animationKey++,requestAnimationFrame(()=>{this._isAnimatingIn=!0,this._inAnimationTimer=window.setTimeout(()=>{this._isAnimatingIn=!1,this._isRollingComplete?this._stopAnimation():this._scheduleNextWord()},this._rollingAnimationTransitionDuration)})},this._rollingAnimationTransitionDuration)}toggleAnimation(){this._animationState===m?this._stopAnimation():this._startAnimation()}getAnimationState(){return this._animationState}_dispatchAnimationStateChange(){this.dispatchEvent(new CustomEvent("rolling-animation-state-change",{detail:{state:this._animationState},bubbles:!0,composed:!0}))}_getCurrentWord(){return 0===this._rollingWords.length?"":this._rollingWords[this._currentWordIndex]||""}_renderRollingText(){const t=this._getCurrentWord();if(!t)return null;const i=[];return this._isAnimatingIn&&i.push("animating-in"),this._isAnimatingOut&&i.push("animating-out"),n`
      <span
        class="rolling-text ${i.join(" ")}"
        part="rolling-text ${i.join(" ")}"
        aria-live="polite"
        aria-atomic="true"
        data-animation-key="${this._animationKey}"
        data-word-index="${this._currentWordIndex}"
        >${t}</span
      >
    `}disconnectedCallback(){super.disconnectedCallback(),this._stopAnimation(),this._outAnimationTimer&&(clearTimeout(this._outAnimationTimer),this._outAnimationTimer=void 0),this._inAnimationTimer&&(clearTimeout(this._inAnimationTimer),this._inAnimationTimer=void 0)}render(){return n` ${this._renderRollingText()} `}};var T,x,b;f.styles=[...(T=f,x=f,b="styles",u(c(T),b,x)||[]),d],A([o()],f.prototype,"_rollingWords",2),A([o()],f.prototype,"_currentWordIndex",2),A([o()],f.prototype,"_animationState",2),A([o()],f.prototype,"_isRollingComplete",2),A([o()],f.prototype,"_isAnimatingIn",2),A([o()],f.prototype,"_isAnimatingOut",2),A([o()],f.prototype,"_animationKey",2),A([a({type:Boolean,attribute:"auto-play"})],f.prototype,"autoPlay",2),A([a({type:Number,attribute:"pause-duration"})],f.prototype,"pauseDuration",2),f=A([r(y)],f);export{f as RollingText,y as name};
