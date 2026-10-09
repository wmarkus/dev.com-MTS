import{r as e,i as t,A as i,b as a,c as o,e as s,f as n}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{SurfaceElement as r}from"/__mirror/assets/e09cf4eae8f90fbcbeb198a9";import{h as l,S as d}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{D as g,d as p}from"/__mirror/assets/58cacecb3a70e11d710dca69";import{s as h,d as c}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{b as m}from"/__mirror/assets/4230c2711e37b2e85105da0e";const f="flex",y="column",v="auto",b="var(--ds-app-radii-l, 1rem)",_="var(--ds-app-space-surface-comfortable, 1.5rem)",S="var(--ds-app-space-micro-l, 1rem)",$="var(--ds-app-space-micro-s, 0.75rem)",u={headingColor:"var(--ds-app-color-base-default-fg-heading, #0e1726)",headingFontFamily:l.fontFamily,headingFontWeight:l.fontWeight,headingFontSize:l.fontSize,headingLineHeight:l.lineHeight,headingLetterSpacing:l.letterSpacing},x=t`
  :host {
    --ds-surface-border-radius: var(
      --ds-dialog-border-radius,
      ${e(b)}
    );
    display: var(--ds-dialog-display, ${e(f)});
    flex-direction: var(--ds-dialog-flex-direction, ${e(y)});
    overflow: var(--ds-dialog-overflow, ${e(v)});
  }

  .base {
    display: var(--ds-dialog-display, ${e(f)});
    flex-direction: var(--ds-dialog-flex-direction, ${e(y)});
    overflow: hidden;
  }

  .top-bar {
    display: flex;
    align-items: center;
    gap: var(--ds-dialog-top-bar-gap, ${e(S)});
    padding-block-start: var(--ds-dialog-inset, ${e(_)});
    padding-inline: var(--ds-dialog-inset, ${e(_)});
  }

  .top-bar-content {
    display: flex;
    flex: 1 1 0;
    align-items: center;
    min-inline-size: 0;
    gap: var(--ds-dialog-top-bar-content-gap, ${e($)});
  }

  .leading-asset {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
  }

  .heading {
    flex: 1 1 0;
    min-inline-size: 0;
    color: var(--ds-dialog-heading-color, ${e(u.headingColor)});
    font-family: var(
      --ds-dialog-heading-font-family,
      ${e(u.headingFontFamily)}
    );
    font-weight: var(
      --ds-dialog-heading-font-weight,
      ${e(u.headingFontWeight)}
    );
    font-size: var(
      --ds-dialog-heading-font-size,
      ${e(u.headingFontSize)}
    );
    line-height: var(
      --ds-dialog-heading-line-height,
      ${e(u.headingLineHeight)}
    );
    letter-spacing: var(
      --ds-dialog-heading-letter-spacing,
      ${e(u.headingLetterSpacing)}
    );
  }

  .close {
    display: flex;
    flex-shrink: 0;
    align-items: center;
  }

  .body {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    gap: var(--ds-dialog-body-gap, ${e("var(--ds-app-space-micro-l, 1rem)")});
    padding-block: var(--ds-dialog-inset, ${e(_)});
    padding-inline: var(--ds-dialog-inset, ${e(_)});
    overflow: auto;
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: var(--ds-dialog-bottom-bar-justify-content, flex-end);
    padding-block-end: var(--ds-dialog-inset, ${e(_)});
    padding-inline: var(--ds-dialog-inset, ${e(_)});
  }

  :host([bottom-bar-alignment='center']) .footer {
    --ds-dialog-bottom-bar-justify-content: center;
  }
`;var E=Object.defineProperty,j=Object.getOwnPropertyDescriptor,B=Object.getPrototypeOf,A=Reflect.get,F=(e,t,i,a)=>{for(var o,s=a>1?void 0:a?j(t,i):t,n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a?o(t,i,s):o(s))||s);return a&&s&&E(t,i,s),s};const C="reimagine-dialog";let w=class extends(g(r)){constructor(){super(),this._leadingAssetSlotEmpty=!0,this._headingSlotEmpty=!0,this._footerSlotEmpty=!0,h(this,{surface:d.solid}),this.dialogSlotPrefix="dialog",this.dialogCloseEventName="close__dialog"}_handleSlotChange(){const e=0===this._leadingAssetSlot.length;this._leadingAssetSlotEmpty!==e&&(this._leadingAssetSlotEmpty=e);const t=0===this._headingSlot.length;this._headingSlotEmpty!==t&&(this._headingSlotEmpty=t);const i=0===this._footerSlot.length;this._footerSlotEmpty!==i&&(this._footerSlotEmpty=i)}get _headingEmpty(){return this._headingSlotEmpty&&!this.heading}_renderHeading(){return a`
      <div part="heading" class="heading" style="${this._headingEmpty?"display: none;":""}">
        <slot name="heading" @slotchange=${this._handleSlotChange}>${this.heading??i}</slot>
      </div>
    `}_renderTopBar(){return a`
      <div part="top-bar" class="top-bar">
        <div part="top-bar-content" class="top-bar-content">
          ${this._renderOptionalSlot("leading-asset",this._leadingAssetSlotEmpty)}
          ${this._renderHeading()}
        </div>
        ${this.renderCloseButton("close")}
      </div>
    `}_renderBody(){return a`
      <div part="body" class="body">
        <slot @slotchange=${this._handleSlotChange}></slot>
      </div>
    `}_renderBottomBar(){return a`
      <div part="footer" class="footer" style="${this._footerSlotEmpty?"display: none;":""}">
        <slot name="footer" @slotchange=${this._handleSlotChange}></slot>
      </div>
    `}render(){return a`
      <div class="base" part="base">
        ${this._renderTopBar()} ${this._renderBody()} ${this._renderBottomBar()}
      </div>
    `}};var z,k,O;w.styles=[...(z=w,k=w,O="styles",A(B(z),O,k)||[]),x,p,m],F([o({reflect:!0})],w.prototype,"heading",2),F([o({attribute:"bottom-bar-alignment",reflect:!0})],w.prototype,"bottomBarAlignment",2),F([s({slot:"leading-asset"})],w.prototype,"_leadingAssetSlot",2),F([s({slot:"heading"})],w.prototype,"_headingSlot",2),F([s({slot:"footer"})],w.prototype,"_footerSlot",2),F([n()],w.prototype,"_leadingAssetSlotEmpty",2),F([n()],w.prototype,"_headingSlotEmpty",2),F([n()],w.prototype,"_footerSlotEmpty",2),w=F([c(C)],w);export{w as Dialog,C as name};
