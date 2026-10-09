import{r as e,i as r,c as t,f as s,b as a}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{R as i}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{d as o}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{m as l}from"/__mirror/assets/6ad137053d5da8fc91d912f1";const p="column",n="flex-start",d="var(--ds-app-space-micro-s, 0.75rem)",g="0.5rem",m="var(--ds-app-color-interactive-secondary-bg-default, #e6f2fb)",c="var(--ds-app-radii-circle, 12.5rem)",h="var(--ds-app-color-base-default-fg-highlight, #005597)",b="var(--ds-app-radii-circle, 12.5rem)",u=r`
  :host {
    display: var(--ds-progress-meter-display, ${e("flex")});
    flex-direction: var(
      --ds-progress-meter-flex-direction,
      ${e(p)}
    );
    align-items: var(--ds-progress-meter-align-items, ${e(n)});
    gap: var(--ds-progress-meter-gap, ${e(d)});
    width: 100%;
    box-sizing: border-box;
  }

  .progress-meter__meter {
    width: 100%;
    height: var(--ds-progress-meter-meter-height, ${e(g)});
    background-color: var(
      --ds-progress-meter-meter-background-color,
      ${e(m)}
    );
    border-radius: var(
      --ds-progress-meter-meter-border-radius,
      ${e(c)}
    );
    overflow: hidden;
  }

  .progress-meter__indicator {
    width: 100%;
    height: 100%;
    background-color: var(
      --ds-progress-meter-indicator-background-color,
      ${e(h)}
    );
    border-radius: var(
      --ds-progress-meter-indicator-border-radius,
      ${e(b)}
    );
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  :host(:dir(rtl)) .progress-meter__indicator {
    transform-origin: right;
  }

  @media (prefers-reduced-motion: reduce) {
    .progress-meter__indicator {
      transition: none;
    }
  }

  .progress-meter__label {
    width: 100%;
    margin: 0;
    text-transform: uppercase;
    color: var(--ds-progress-meter-label-color, ${e("var(--ds-app-color-base-default-fg-highlight, #005597)")});

    /* The label text has its own directionality resolved from its content (see dir="auto"
       on the element), which can differ from the host's direction when the template mixes
       neutral characters (digits) with LTR words. Force the visual alignment to follow the
       host's direction so the label stays aligned with the meter regardless of that. */
    font-weight: var(
      --ds-progress-meter-label-font-weight,
      ${e(l.fontWeight)}
    );
    font-size: var(
      --ds-progress-meter-label-font-size,
      ${e(l.fontSize)}
    );
    line-height: var(
      --ds-progress-meter-label-line-height,
      ${e(l.lineHeight)}
    );
    letter-spacing: var(
      --ds-progress-meter-label-letter-spacing,
      ${e(l.letterSpacing)}
    );
  }

  :host(:dir(rtl)) .progress-meter__label {
    text-align: right;
  }
`;var f=Object.defineProperty,v=Object.getOwnPropertyDescriptor,_=(e,r,t,s)=>{for(var a,i=s>1?void 0:s?v(r,t):r,o=e.length-1;o>=0;o--)(a=e[o])&&(i=(s?a(r,t,i):a(i))||i);return s&&i&&f(r,t,i),i};const x="reimagine-progress-meter";let S=class extends i{constructor(){super(...arguments),this.currentStep=1,this.totalSteps=1,this.labelText="{x} of {y}",this._percentage=0}willUpdate(e){if(super.willUpdate(e),e.has("currentStep")||e.has("totalSteps")){const e=Number.isFinite(this.totalSteps)&&this.totalSteps>0?this.totalSteps:1,r=Number.isFinite(this.currentStep)?this.currentStep:0;this._percentage=Math.min(100,Math.max(0,r/e*100))}}render(){const e=((e,r,t)=>e.replaceAll("{x}",String(r)).replaceAll("{y}",String(t)))(this.labelText,this.currentStep,this.totalSteps);return a`
      <div
        part="progress-meter__meter"
        class="progress-meter__meter"
        role="progressbar"
        aria-valuenow="${this.currentStep}"
        aria-valuemin="0"
        aria-valuemax="${this.totalSteps}"
        aria-labelledby="progress-meter__label"
      >
        <div
          part="progress-meter__indicator"
          class="progress-meter__indicator"
          style="transform: scaleX(${this._percentage/100})"
        ></div>
      </div>
      <p
        id="progress-meter__label"
        part="progress-meter__label"
        class="progress-meter__label"
        dir="auto"
      >
        ${e}
      </p>
    `}};S.styles=[u],_([t({type:Number,attribute:"current-step"})],S.prototype,"currentStep",2),_([t({type:Number,attribute:"total-steps"})],S.prototype,"totalSteps",2),_([t({type:String,attribute:"label-text"})],S.prototype,"labelText",2),_([s()],S.prototype,"_percentage",2),S=_([o(x)],S);export{S as ProgressMeter,x as name};
