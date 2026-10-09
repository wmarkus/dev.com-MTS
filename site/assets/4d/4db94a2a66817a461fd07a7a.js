import{i as t,r as e,e as o,f as a,c as r,b as i}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{q as s,s as l,d as n}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{v as d,b as c}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{b as p,c as u}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{name as m}from"/__mirror/assets/6e81f223b6d814035f9d055a";import{name as h}from"/__mirror/assets/ca6674f0d5c9eb5234b953db";const f=t`
  :host {
    --ds-card-feature-top-flex: 0;
  }

  :host ::slotted([slot='top-text']) {
    display: block;
    margin-block-end: var(--ds-app-space-micro-3xl, 3rem);
  }

  :host ::slotted([slot='full-width-card']) {
    margin-block-end: var(--ds-app-space-micro-xl, 2rem);
  }

  :host ::slotted(reimagine-tabs) {
    --ds-app-space-layout-stack-comfortable: var(--ds-app-space-micro-xl, 2rem);
  }
`,g=t`
  @media (min-width: ${e(d.md)}) and (max-width: ${e(c(d.lg))}) {
    :host([configuration='5-featured']) {
      --ds-text-block-heading-word-break: break-word;
    }
  }

  @media (min-width: ${e(d.md)}) {
    :host([configuration='3-featured']) {
      --ds-card-feature-horizontal-top-flex: 1;
    }
  }
`,y="3-featured",b={"3-featured":"2-col-even","4-featured":"3-col-even","5-featured":"4-col-even-1"};var _=Object.defineProperty,v=Object.getOwnPropertyDescriptor,C=Object.getPrototypeOf,S=Reflect.get,x=(t,e,o,a)=>{for(var r,i=a>1?void 0:a?v(e,o):e,s=t.length-1;s>=0;s--)(r=t[s])&&(i=(a?r(e,o,i):r(i))||i);return a&&i&&_(e,o,i),i};const $="reimagine-featured-stack";let w=class extends p{constructor(){super(...arguments),this._fullWidthCardSlotEmpty=!0,this._topSlotEmpty=!0,this.bottomLayoutConfiguration=u.col2even,this.configuration=y,this._cardCache={}}_handleSlotChange(t){this._fullWidthCardSlotEmpty=0===this._fullWidthCardSlot.length,this._topSlotEmpty=0===this._topSlot.length,"full-width-card"===t.target.name&&!this._fullWidthCardSlotEmpty&&(this._updateCardAttributes(m,{surface:"media",configuration:"vertical"}),this._updateCardAttributes(h,{surface:"solid-border"}))}_updateCardAttributes(t,e){const o=this._fullWidthCardSlot[0];if(!o)return;this._cardCache[t]||(this._cardCache[t]=s(o,t));const a=this._cardCache[t];a&&l(a,e)}_renderOptionalSlot(t,e){return i`
      <div part=${t} class=${t} style="${e?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}updated(t){super.updated(t),t.has("configuration")&&(this.bottomLayoutConfiguration=b[this.configuration])}_renderBlade(){const t="container",e=i`
      <reimagine-layout configuration="2-col-even" class="top-text" part="top-text">
        ${this._renderOptionalSlot("top-text",this._topSlotEmpty)}
      </reimagine-layout>
      <reimagine-layout configuration="1-col-even" class="full-width-card" part="full-width-card">
        <slot name="full-width-card" @slotchange="${this._handleSlotChange}"></slot>
      </reimagine-layout>

      <reimagine-layout
        configuration=${this.bottomLayoutConfiguration}
        class="bottom-cards"
        part="bottom-cards"
      >
        <slot name="bottom-card"></slot>
      </reimagine-layout>

      <!-- Default slot used exclusively for the pill bar variant -->
      <reimagine-layout configuration="1-col-even">
        <reimagine-layout-column>
          <slot></slot>
        </reimagine-layout-column>
      </reimagine-layout>
    `;return this.baseContent?i` <div class=${t} part=${t}>${e}</div> `:i`
      <reimagine-container class=${t} part=${t}>
        ${e}
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var j,k,E;w.styles=[...(j=w,k=w,E="styles",S(C(j),E,k)||[]),f,g],x([o({slot:"full-width-card"})],w.prototype,"_fullWidthCardSlot",2),x([o({slot:"top-text"})],w.prototype,"_topSlot",2),x([a()],w.prototype,"_fullWidthCardSlotEmpty",2),x([a()],w.prototype,"_topSlotEmpty",2),x([a()],w.prototype,"bottomLayoutConfiguration",2),x([r({type:String,reflect:!0,attribute:"configuration"})],w.prototype,"configuration",2),w=x([n($)],w);export{w as FeaturedStack,$ as name};
