import{b as t,o as i,e,f as o,c as s}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{e as r,f as n,d as l}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{s as a}from"/__mirror/assets/c0e4f787350a76403ae5c3f1";import{L as h,w as p,B as c}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{W as u}from"/__mirror/assets/597f3dbe3ef56339bfbefa4a";import{d,h as _}from"/__mirror/assets/5d2e1bf3d87581457a2b76db";import"/__mirror/assets/34233ee5ac8acdb3aa831b25";const y={left:"left",right:"right"},g="left",m="right",f="up",b="down",k={default:"default",stacked:"stacked"};var S=Object.defineProperty,M=Object.getOwnPropertyDescriptor,$=(t,i,e,o)=>{for(var s,r=o>1?void 0:o?M(i,e):i,n=t.length-1;n>=0;n--)(s=t[n])&&(r=(o?s(i,e,r):s(r))||r);return o&&r&&S(i,e,r),r};const v="reimagine-link";let w=class extends(h(p(c(u)))){constructor(){super(...arguments),this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._assetSlotEmpty=!0,this._lightDOMEvents=[],this.lightDOM=!1,this.withButton=!1,this.iconPosition=y.left,this.withMedia=!1,this.withBadge=!1,this.mediaPosition=g,this.iconDirection=m,this.asButton=!1,this.configuration=k.default,this.linkLabel=null}_handleSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length,this._assetSlotEmpty=0===this._assetSlot.length}_renderOptionalSlot(i,e){return t`
      <div part=${i} class=${i} style="${e?"display: none;":""}">
        <slot name=${i} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_getIconType(){return this.buttonIcon?this.buttonIcon:this.iconDirection===f||this.iconDirection===b?`chevron-${this.iconDirection}`:`chevron-${"rtl"===this.dir?y.left:y.right}`}_getIconMarkup(e){return this.withButton?t` <reimagine-button
          size="small"
          appearance="button--primary"
          element="div"
          shape="rounded"
          icon-only
          tabindex="-1"
          fill-color=${i(this.textColor)}
        >
          <reimagine-icon icon="${e}" slot="button__icon"></reimagine-icon>
        </reimagine-button>`:""}_getTextMarkup(){return t`
      <div part="link__text" class="link__text">
        <slot name="link__text"></slot>
      </div>
    `}_buildLinkMarkup(){const i=this._getIconType(),e=this._getIconMarkup(i),o=this._getTextMarkup();return t`
      ${this._renderOptionalSlot("link__first",this._firstSlotEmpty)}
      ${this.iconPosition===y.right?t`${o} ${e}`:t`${e} ${o}`}
      ${this._renderOptionalSlot("link__last",this._lastSlotEmpty)}
    `}_renderSlotableMarkup(){const i=this._getTextMarkup();return t` ${this._renderOptionalSlot("link__asset",this._assetSlotEmpty)} ${i}`}firstUpdated(t){if(super.firstUpdated(t),this.lightDOM&&this.withButton){const t=this.querySelector("a");t&&(this._lightDOMEvents.push({el:this,type:"click",handler:i=>{i.target!==t&&!t.contains(i.target)&&t.click()}}),r(this._lightDOMEvents))}}render(){this.ariaLabel=this.linkLabel;const i=this.configuration===k.stacked||this.withMedia||this.withBadge;return d(this)?(this.lightDOM=!0,t`
        ${i?this._renderSlotableMarkup():null} ${this._buildLinkMarkup()}
        <slot @slotchange=${t=>_(t,this)}></slot>
      `):i?this.renderLink(t`${this._renderSlotableMarkup()}`):this.asButton?this.renderButton(t`${this._buildLinkMarkup()}`):this.renderLink(t`${this._buildLinkMarkup()}`)}updated(t){super.updated(t),this.withMedia?(this.removeAttribute("icon-position"),this.removeAttribute("icon-direction")):this.removeAttribute("media-position"),this.withMedia&&0===this._linkTextSlot.length&&!this.lightDOM&&(this.removeAttribute("configuration"),this.removeAttribute("media-position"))}disconnectedCallback(){super.disconnectedCallback(),n(this._lightDOMEvents)}};w.styles=[a],$([e({slot:"link__first"})],w.prototype,"_firstSlot",2),$([e({slot:"link__last"})],w.prototype,"_lastSlot",2),$([e({slot:"link__asset"})],w.prototype,"_assetSlot",2),$([e({slot:"link__text"})],w.prototype,"_linkTextSlot",2),$([o()],w.prototype,"_firstSlotEmpty",2),$([o()],w.prototype,"_lastSlotEmpty",2),$([o()],w.prototype,"_assetSlotEmpty",2),$([s({type:Boolean,reflect:!0,attribute:"light-dom"})],w.prototype,"lightDOM",2),$([s({type:Boolean,reflect:!0,attribute:"with-button"})],w.prototype,"withButton",2),$([s({type:String,reflect:!0,attribute:"icon-position"})],w.prototype,"iconPosition",2),$([s({type:Boolean,reflect:!0,attribute:"with-media"})],w.prototype,"withMedia",2),$([s({type:Boolean,reflect:!0,attribute:"with-badge"})],w.prototype,"withBadge",2),$([s({type:String,reflect:!0,attribute:"media-position"})],w.prototype,"mediaPosition",2),$([s({type:String,reflect:!0,attribute:"icon-direction"})],w.prototype,"iconDirection",2),$([s({type:String,reflect:!0,attribute:"button-icon"})],w.prototype,"buttonIcon",2),$([s({type:Boolean,reflect:!0,attribute:"as-button"})],w.prototype,"asButton",2),$([s({type:String,reflect:!0,attribute:"configuration"})],w.prototype,"configuration",2),$([s({reflect:!0})],w.prototype,"size",2),$([s({reflect:!0,attribute:"link-label"})],w.prototype,"linkLabel",2),$([s({type:String,reflect:!0})],w.prototype,"theme",2),w=$([l(v)],w);export{w as L,y as a,k as b,v as n};
