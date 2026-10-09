import{r as e,i as t,c as a,e as i,f as s,b as r,A as n}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{SurfaceElement as o}from"/__mirror/assets/e09cf4eae8f90fbcbeb198a9";import{d as l}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{v as d,t as h,r as p,S as m}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{c}from"/__mirror/assets/a0679f491075e7b16b00f1b4";const u="var(--ds-app-space-micro-xs, 0.5rem)",g="var(--ds-app-space-micro-xs, 0.5rem)",_="var(--ds-app-space-micro-m, 1rem)",v="var(--ds-app-radii-l, 1.5rem)",f="var(--ds-app-space-micro-2xl, 3rem)",y="var(--ds-app-space-micro-2xl, 3rem)",b="var(--ds-app-color-base-default-fg-heading, #0e1726)",S="var(--ds-app-color-base-default-fg-body, #17253D)",$="var(--ds-app-space-micro-2xs, 0.25rem)",x=t`
  :host {
    display: inline-block;
    width: var(--ds-card-timer-width, ${e("fit-content")});
  }

  .base {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-block: var(--ds-card-timer-padding-block, ${e(f)});
    padding-inline: var(
      --ds-card-timer-padding-inline,
      ${e(y)}
    );
    border-radius: var(--ds-card-timer-radius, ${e(v)});
    color: ${e(b)};
  }

  .heading {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block-end: var(--ds-card-timer-heading-gap, ${e(g)});
  }

  :host ::slotted([slot='heading']) {
    font-size: var(
      --ds-card-timer-heading-font-size,
      ${e(d.fontSize)}
    );
    font-weight: var(
      --ds-card-timer-heading-font-weight,
      ${e(d.fontWeight)}
    );
    line-height: var(
      --ds-card-timer-heading-line-height,
      ${e(d.lineHeight)}
    );
  }

  .timer {
    display: flex;
    justify-content: center;
    gap: var(--ds-card-timer-gap, ${e(u)});
    flex-wrap: var(--ds-card-timer-base-flex-wrap, initial);
  }

  .timer > * {
    display: var(--ds-card-timer-base-child-display, initial);
    gap: var(--ds-card-timer-base-child-gap, initial);
  }

  .days,
  .hours,
  .minutes,
  .seconds {
    padding-inline: var(
      --ds-card-timer-segment-padding-inline,
      ${e($)}
    );
  }

  .timer-number,
  .timer-separator {
    letter-spacing: var(
      --ds-card-timer-number-letter-spacing,
      ${e(h.letterSpacing)}
    );
    font-size: var(--ds-card-timer-number-font-size, ${e(h.fontSize)});
    font-weight: var(
      --ds-card-timer-number-font-weight,
      ${e(h.fontWeight)}
    );
    line-height: var(
      --ds-card-timer-number-line-height,
      ${e(h.lineHeight)}
    );
    font-variant-numeric: tabular-nums;
  }

  .timer-separator {
    display: var(--ds-card-timer-separator-display, block);
  }

  .timer-label {
    font-size: var(--ds-card-timer-label-font-size, ${e(p.fontSize)});
    font-weight: var(--ds-card-timer-label-font-weight, ${e(p.fontWeight)});
    line-height: var(--ds-card-timer-label-line-height, ${e(p.lineHeight)});
    letter-spacing: var(
      --ds-card-timer-label-letter-spacing,
      ${e(p.letterSpacing)}
    );
  }

  .tag {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block-start: var(--ds-card-timer-tag-gap, ${e(_)});
  }

  :host([expired]) .timer-number,
  :host([expired]) .timer-separator {
    color: var(--ds-card-timer-expired-color, ${e(S)});
  }
`,T={max:"max",min:"min"};var w=Object.defineProperty,V=Object.getOwnPropertyDescriptor,D=Object.getPrototypeOf,C=Reflect.get,E=(e,t,a,i)=>{for(var s,r=i>1?void 0:i?V(t,a):t,n=e.length-1;n>=0;n--)(s=e[n])&&(r=(i?s(t,a,r):s(r))||r);return i&&r&&w(t,a,r),r};const O="reimagine-card-timer";let j=class extends o{constructor(){super(),this._timerRefreshInterval=15e3,this.expired=!1,this._daysValue="00",this._hoursValue="00",this._minutesValue="00",this._secondsValue="00",this._isLessThanOneDay=!1,this._headingSlotEmpty=!0,this._tagSlotEmpty=!0,this._eventDate="",this._eventTime="",this._intervalId=null,this.surface=m.glass}get eventDate(){return this._eventDate}set eventDate(e){const t=this._eventDate;this._eventDate=e,this.requestUpdate("eventDate",t),this._startCountdown()}get eventTime(){return this._eventTime}set eventTime(e){const t=this._eventTime;this._eventTime=e,this.requestUpdate("eventTime",t),this._startCountdown()}_startCountdown(){this._stopCountdown(),this._calculateCountdown();const e=this._hasSecondLabelSlot()&&this.configuration!==T.min;this._intervalId=window.setInterval(()=>{this._calculateCountdown()},e?1e3:this._timerRefreshInterval)}_stopCountdown(){null!==this._intervalId&&(clearInterval(this._intervalId),this._intervalId=null)}_calculateCountdown(){if(!this.eventDate)return void this._resetValues();const e=this._getTimeDifference();e<=0?this._handleExpiredTimer():(this.expired=!1,this._updateCountdownValues(e))}_resetValues(){this._daysValue="00",this._hoursValue="00",this._minutesValue="00",this._secondsValue="00",this._isLessThanOneDay=!0}_getTimeDifference(){if(!this._eventDate)return 0;let e=`${this._eventDate}Z`;if(this._eventTime){const t=this._normalizeTime(this._eventTime);e=`${this._eventDate}T${t}Z`}const t=new Date(e);if(Number.isNaN(t.getTime()))return 0;const a=new Date;return t.getTime()-a.getTime()}_normalizeTime(e){var t,a,i;const s=e.split(":");return`${(null==(t=s[0])?void 0:t.padStart(2,"0"))||"00"}:${(null==(a=s[1])?void 0:a.padStart(2,"0"))||"00"}:${(null==(i=s[2])?void 0:i.padStart(2,"0"))||"00"}`}_handleExpiredTimer(){this._stopCountdown(),this._resetValues(),this.expired=!0,this.dispatchEvent(new CustomEvent("timer-expired",{bubbles:!0,composed:!0,detail:{status:"expired"}}))}_updateCountdownValues(e){const t=this._calculateTimeUnits(e);this._assignValues(t)}_calculateTimeUnits(e){return{days:Math.floor(e/864e5),hours:Math.floor(e%864e5/36e5),minutes:Math.floor(e%36e5/6e4),seconds:Math.floor(e%6e4/1e3)}}_assignValues(e){const{days:t,hours:a,minutes:i,seconds:s}=e;this._isLessThanOneDay=0===t,this._daysValue=t.toString().padStart(2,"0"),this._hoursValue=a.toString().padStart(2,"0"),this._minutesValue=i.toString().padStart(2,"0"),this._secondsValue=s.toString().padStart(2,"0")}_renderSegment(e,t,a){return r`
      <div part="${e}" class="${e}">
        <span part="timer-number" class="timer-number">${t}</span>
        <div part="timer-label" class="timer-label">
          <slot name="${a}"></slot>
        </div>
      </div>
    `}_renderSeparator(){return r` <span part="timer-separator" class="timer-separator">:</span> `}_renderOptionalSlot(e,t){return r`
      <div part=${e} class=${e} style="${t?"display: none;":""}">
        <slot name=${e} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_hasSecondLabelSlot(){return!!this.querySelector('[slot="seconds-label"]')}_handleSlotChange(){const e=0===this._headingSlot.length;this._headingSlotEmpty!==e&&(this._headingSlotEmpty=e);const t=0===this._tagSlot.length;this._tagSlotEmpty!==t&&(this._tagSlotEmpty=t)}disconnectedCallback(){super.disconnectedCallback(),this._stopCountdown()}render(){const e=!(this.configuration===T.min&&this._isLessThanOneDay),t=this._hasSecondLabelSlot()&&this.configuration!==T.min;return r`
      <div part="base" class="base">
        ${this._renderOptionalSlot("heading",this._headingSlotEmpty)}
        <div part="timer" class="timer">
          ${e?r`
                ${this._renderSegment("days",this._daysValue,"days-label")}
                ${this._renderSeparator()}
              `:""}
          ${this._renderSegment("hours",this._hoursValue,"hours-label")}
          ${this._renderSeparator()}
          ${this._renderSegment("minutes",this._minutesValue,"minutes-label")}
          ${t?r`
                ${this._renderSeparator()}
                ${this._renderSegment("seconds",this._secondsValue,"seconds-label")}
              `:n}
        </div>
        ${this._renderOptionalSlot("tag",this._tagSlotEmpty)}
      </div>
    `}};var z,k,I;j.styles=[...(z=j,k=j,I="styles",C(D(z),I,k)||[]),c,x],E([a({reflect:!0,attribute:"event-date"})],j.prototype,"eventDate",1),E([a({reflect:!0,attribute:"event-time"})],j.prototype,"eventTime",1),E([a({type:String})],j.prototype,"configuration",2),E([a({type:Boolean,reflect:!0})],j.prototype,"expired",2),E([i({slot:"heading"})],j.prototype,"_headingSlot",2),E([i({slot:"tag"})],j.prototype,"_tagSlot",2),E([s()],j.prototype,"_daysValue",2),E([s()],j.prototype,"_hoursValue",2),E([s()],j.prototype,"_minutesValue",2),E([s()],j.prototype,"_secondsValue",2),E([s()],j.prototype,"_isLessThanOneDay",2),E([s()],j.prototype,"_headingSlotEmpty",2),E([s()],j.prototype,"_tagSlotEmpty",2),j=E([l(O)],j);export{j as CardTimer,T as CardTimerConfigurationTypes,O as name};
