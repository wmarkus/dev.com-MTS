import{i as e,r as i,c as t,g as r,b as s}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{q as n,s as o,r as a,d}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{b as l,h,H as m}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{V as c}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{v as p}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";const u=e`
  :host {
    --ds-button-group-justify-content: flex-start;
    --ds-layout-column-display: flex;
    --ds-layout-column-align-items: center;
    --ds-layout-column-justify-content: center;
    --ds-layout-row-gap: var(--ds-app-space-micro-s, 0.75rem);
    --ds-card-timer-width: 100%;
  }
`,g=e`
  @media (max-width: ${i(p.md)}) {
    :host {
      --ds-button-group-flex-direction: column;
    }
  }
`;var x=Object.defineProperty,b=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,_=Reflect.get,v=(e,i,t,r)=>{for(var s,n=r>1?void 0:r?b(i,t):i,o=e.length-1;o>=0;o--)(s=e[o])&&(n=(r?s(i,t,n):s(n))||n);return r&&n&&x(i,t,n),n};const E="reimagine-banner-timer";let f=class extends l{constructor(){super(),this.hideOnExpire=!1,this._boundTimerExpired=this._onTimerExpired.bind(this),this._boundCheckExpiry=this._checkExpiry.bind(this),this._viewportResizeObserver=new c(this,{callback:()=>this._updateHeadingBlockAlignment()})}_checkExpiry(){var e;if(!this.hideOnExpire)return;const i=null==(e=this._timerSlot)?void 0:e[0];this.hidden=(null==i?void 0:i.hasAttribute("expired"))??!1}_onTimerExpired(){this.hideOnExpire&&(this.hidden=!0)}_addTimerExpiredListener(){this.addEventListener("timer-expired",this._boundTimerExpired)}_removeTimerExpiredListener(){this.removeEventListener("timer-expired",this._boundTimerExpired)}_updateHeadingBlockAlignment(){var e;const i=(null==(e=this._viewportResizeObserver)?void 0:e.isMobile())||!1,t=n(this,"reimagine-heading-block");t&&(i?o(t,{alignment:h.center}):a(t,["alignment"]))}_onSlotChange(){const e=n(this,"reimagine-heading-block");e&&(o(e,{size:m["size-sm"]}),this._updateHeadingBlockAlignment())}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this._viewportResizeObserver)||e.hostDisconnected(),this._removeTimerExpiredListener()}updated(e){super.updated(e),e.has("hideOnExpire")&&(this.hideOnExpire?(this._addTimerExpiredListener(),this.updateComplete.then(()=>this._checkExpiry())):(this._removeTimerExpiredListener(),this.hidden=!1))}_renderBlade(){return s`
      <reimagine-container part="base" class="base">
        <reimagine-layout configuration=${this.headerLayoutConfiguration||"2-col-even"}>
          <reimagine-layout-column class="header" part="header">
            <slot name="header" @slotchange=${this._onSlotChange}></slot>
          </reimagine-layout-column>
          <reimagine-layout-column class="timer" part="timer">
            <slot name="timer" @slotchange=${this._boundCheckExpiry}></slot>
          </reimagine-layout-column>
        </reimagine-layout>
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var k,O,T;f.styles=[...(k=f,O=f,T="styles",_(y(k),T,O)||[]),u,g],v([t({type:Boolean,attribute:"hide-on-expire"})],f.prototype,"hideOnExpire",2),v([r({slot:"timer"})],f.prototype,"_timerSlot",2),f=v([d(E)],f);export{f as BannerTimer,E as name};
