import{r as t,i,c as e,e as a,f as o,o as s,b as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i as n,s as l,d as h}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{b as d,U as c,D as p,c as u,u as m,f as g,M as f}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{n as y}from"/__mirror/assets/bf0b3498e45fc20534cec8b1";const b="full-width",_="centered",v="interactive",$="var(--ds-app-color-base-default-fg-body, #17253d)",C="var(--ds-app-space-layout-stack-comfortable, 3rem)",S="0",w="0",B=i`
  :host {
    --ds-media-width: var(
      --ds-media-with-caption-media-width,
      ${t("100%")}
    );
    --ds-media-height: 100%;
  }

  .caption {
    color: var(
      --ds-media-with-caption-figcaption-color,
      ${t($)}
    );
    margin-top: var(
      --ds-media-with-caption-figcaption-margin-top,
      ${t(C)}
    );
  }

  figure {
    margin: var(--ds-media-with-caption-figure-margin, ${t(S)});
  }

  :host div.disable-figure {
    margin: var(
      --ds-media-with-caption-disable-figure-margin,
      ${t(w)}
    );
  }
`;var E=Object.defineProperty,A=Object.getOwnPropertyDescriptor,j=Object.getPrototypeOf,z=Reflect.get,F=(t,i,e,a)=>{for(var o,s=a>1?void 0:a?A(i,e):i,r=t.length-1;r>=0;r--)(o=t[r])&&(s=(a?o(i,e,s):o(s))||s);return a&&s&&E(i,e,s),s};const M="reimagine-media-with-caption";let D=class extends d{constructor(){super(...arguments),this.disableFigure=!1,this._defaultSlotEmpty=!0,this._captionEmpty=!0}_setCenteredAttributes(){this.configuration===_&&(this._captionEmpty?(this.breadth=c.comfortable,this.density=void 0):(this.breadth=c.cozy,this.density=p.cozy))}_setInteractiveAttributes(){this.configuration===v&&(this._captionEmpty?(this.breadth=c.comfortable,this.topBreadth=void 0,this.bottomBreadth=void 0,this.density=void 0):(this.breadth=void 0,this.topBreadth=c.cozy,this.bottomBreadth=c.cozy,this.density=p.cozy))}_setFullWidthAttributes(){this.configuration===b&&(this._captionEmpty?(this.breadth=c.none,this.bottomBreadth=void 0,this.topBreadth=void 0):(this.breadth=void 0,this.topBreadth=c.none,this.bottomBreadth=c.cozy))}_setAttributes(){this._setCenteredAttributes(),this._setInteractiveAttributes(),this._setFullWidthAttributes()}_setCaptionLayout(){return this.configuration===_?u.col1focus:u.col1even}_setMediaLayout(){return this.configuration===_?u.col1focus:u.col1even}_handleDefaultSlotChange(){if(this._defaultSlotEmpty=0===this._defaultSlot.length,this._defaultSlotEmpty)return;this._setAttributes();const t=this._defaultSlot.filter(t=>n(t,y))||[],i={"full-width":{"aspect-ratio":f.ratio21to9},centered:{"aspect-ratio":f.ratio1to1,"border-width":g.m},interactive:{"aspect-ratio":f.ratio16to9,"border-width":g.m,overlay:m.overlayAssetBottom1}};this.configuration&&i[this.configuration]&&l(t,i[this.configuration])}_handleCaptionSlotChange(){this._captionEmpty=0===this._captionSlot.length,this._setAttributes()}_renderMediaTemplate(){return this.configuration===_||this.configuration===v?r`
        <reimagine-container>
          <reimagine-layout configuration=${s(this._setMediaLayout())}>
            <reimagine-layout-column>
              <slot @slotchange=${this._handleDefaultSlotChange}></slot>
            </reimagine-layout-column>
          </reimagine-layout>
        </reimagine-container>
      `:r`<slot @slotchange=${this._handleDefaultSlotChange}></slot>`}_renderCaptionTemplate(){return r`
      <reimagine-container style="${this._captionEmpty?"display: none":""}">
        <reimagine-layout configuration="${s(this._setCaptionLayout())}">
          <reimagine-layout-column>
            ${this.disableFigure?r`<div class="caption" part="caption">
                  <slot name="caption" @slotchange=${this._handleCaptionSlotChange}></slot>
                </div>`:r`<figcaption class="caption" part="caption">
                  <slot name="caption" @slotchange=${this._handleCaptionSlotChange}></slot>
                </figcaption>`}
          </reimagine-layout-column>
        </reimagine-layout>
      </reimagine-container>
    `}_renderBlade(){const t=r` ${this._renderMediaTemplate()} ${this._renderCaptionTemplate()} `;return this.disableFigure?r`<div class="disable-figure" part="disable-figure">${t}</div>`:r`<figure>${t}</figure>`}render(){return this.renderUiShell(this._renderBlade())}};var O,L,T;D.styles=[...(O=D,L=D,T="styles",z(j(O),T,L)||[]),B],F([e({type:Boolean,reflect:!0,attribute:"disable-figure"})],D.prototype,"disableFigure",2),F([e({reflect:!0})],D.prototype,"configuration",2),F([a()],D.prototype,"_defaultSlot",2),F([a({slot:"caption"})],D.prototype,"_captionSlot",2),F([o()],D.prototype,"_defaultSlotEmpty",2),F([o()],D.prototype,"_captionEmpty",2),D=F([h(M)],D);export{D as MediaWithCaption,M as name};
