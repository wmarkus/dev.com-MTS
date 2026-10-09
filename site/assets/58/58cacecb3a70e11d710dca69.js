import{i as t,b as e,A as o,c as i}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{B as s,i as l,j as a}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import"/__mirror/assets/5d2e1bf3d87581457a2b76db";import"/__mirror/assets/34233ee5ac8acdb3aa831b25";var n=Object.defineProperty,r=(t,e,o,i)=>{for(var s,l=void 0,a=t.length-1;a>=0;a--)(s=t[a])&&(l=s(e,o,l)||l);return l&&n(e,o,l),l};const d=t`
  .dialog-slot--empty {
    display: none;
  }
`,p=t=>{class n extends t{constructor(){super(...arguments),this.open=!1,this.closeButtonLabel="Close button",this.dialogRole="dialog",this.dialogCloseButtonSize=s.medium}show(){this.open=!0}hide(){this.open=!1}toggle(){this.open=!this.open}_handleDialogCloseClick(){this.dispatchEvent(new CustomEvent(this.dialogCloseEventName??"close__dialog",{bubbles:!0}))}_handleSlotChange(){this.requestUpdate()}_renderOptionalSlot(t,o){return e`
        <div part=${t} class="${t}${o?" dialog-slot--empty":""}">
          <slot name=${t} @slotchange=${this._handleSlotChange}></slot>
        </div>
      `}renderCloseButton(t){return e`
        <div part=${t} class=${t}>
          <reimagine-button
            icon-only
            appearance=${l.buttonSecondary}
            shape=${a.rounded}
            size=${this.dialogCloseButtonSize}
            @click=${this._handleDialogCloseClick}
          >
            <reimagine-icon icon="dismiss" slot="button__icon" size="medium"></reimagine-icon>
            <span slot="button__text">${this.closeButtonLabel}</span>
          </reimagine-button>
        </div>
      `}renderDialogHeader(t=o){const i=this.dialogSlotPrefix??"dialog";return e`
        <div class="${i}__header" part="${i}__header">
          <div class="${i}__top-left" part="${i}__top-left">${t}</div>
          ${this.renderCloseButton(`${i}__top_right`)}
        </div>
      `}}return r([i({type:Boolean,reflect:!0})],n.prototype,"open"),r([i({type:String,attribute:"close-button-label"})],n.prototype,"closeButtonLabel"),r([i({type:String,attribute:"dialog-slot-prefix"})],n.prototype,"dialogSlotPrefix"),r([i({type:String,attribute:"dialog-role"})],n.prototype,"dialogRole"),r([i({type:String,attribute:"dialog-close-event-name"})],n.prototype,"dialogCloseEventName"),r([i({type:String,attribute:"dialog-close-button-size"})],n.prototype,"dialogCloseButtonSize"),n};export{p as D,d};
