import{r as e,i as t,b as r,c as a,f as s}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{a as i,i as o,d}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{o as l,M as n}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{SurfaceElement as c}from"/__mirror/assets/e09cf4eae8f90fbcbeb198a9";import{L as m,S as h}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import"/__mirror/assets/a6479ea808b36b42c5f26c81";import{n as p}from"/__mirror/assets/bf0b3498e45fc20534cec8b1";const b="var(--ds-app-radii-l, 1.5rem)",u="var(--ds-border-xs, 1px)",g="center",f="center",v="208px",k="164px",x="100%",$="auto",y="var(--ds-app-space-micro-m, 1rem)",_=t`
  :host {
    --ds-media-asset-border-start-start-radius: var(--ds-app-radii-s);
    --ds-media-asset-border-start-end-radius: var(--ds-app-radii-s);
    --ds-media-asset-border-end-end-radius: var(--ds-app-radii-s);
    --ds-media-asset-border-end-start-radius: var(--ds-app-radii-s);
    display: var(--ds-logobar-item-display, ${e("inline-flex")});
    align-items: var(--ds-logobar-item-aligment, ${e(g)});
    justify-content: var(
      --ds-logobar-item-justify-content,
      ${e(f)}
    );
    max-width: var(--ds-logobar-item-max-width, ${e(v)});
    max-height: var(--ds-logobar-item-max-height, ${e(k)});
    padding-block: var(--ds-logobar-item-padding, ${e(y)});
    padding-inline: var(--ds-logobar-item-padding, ${e(y)});
    width: var(--ds-logobar-item-width, ${e(x)});
    height: var(--ds-logobar-item-height, ${e($)});
    position: relative;
  }

  :host([surface]) {
    --ds-surface-border-radius: var(
      --ds-logobar-item-border-radius,
      ${e(b)}
    );
  }

  :host([clickable][surface='media']:active) {
    --ds-app-color-surface-solid-bg-default: var(--ds-app-color-surface-solid-bg-pressed);
  }

  :host([clickable]) {
    border-radius: var(--ds-logobar-item-border-radius, ${e(b)});
    overflow: hidden;
  }

  :host .logobar-item {
    display: flex;
    align-items: center;
  }

  :host([clickable]:focus-within) {
    ${l};
    --ds-vfi-text-color: var(--ds-app-color-interactive-secondary-border-default);
    border-radius: var(--ds-logobar-item-border-radius, ${e(b)});
  }

  :host([clickable]) a:focus,
  :host([clickable]) a:focus-visible {
    outline: none;
  }

  :host(:not([stroke-hidden])) {
    --ds-surface-border-width: var(
      --ds-logobar-item-border-width,
      ${e(u)}
    );
    --ds-surface-border-style: solid;
  }

  :host(:not([clickable]):not([stroke-hidden])) {
    --ds-elevation-level-2: none;
  }

  :host([stroke-hidden]) {
    --ds-app-color-surface-solid-bg-default: none;
  }
`;var j=Object.defineProperty,w=Object.getOwnPropertyDescriptor,M=(e,t,r,a)=>{for(var s,i=a>1?void 0:a?w(t,r):t,o=e.length-1;o>=0;o--)(s=e[o])&&(i=(a?s(t,r,i):s(i))||i);return a&&i&&j(t,r,i),i};const S="reimagine-logobar-item";let C=class extends(m(c)){constructor(){super(),this.strokeHidden=!1,this._itemMedia=[],this.surface=h.media,this.themeLightSurface=h.media,this.themeDarkSurface=h.glass}_handleMediaSlotChange(){this._itemMedia=i(this,p),this._itemMedia.forEach(e=>{o(e,p)&&(!e.hasAttribute("aspect-ratio")||e.getAttribute("aspect-ratio")!==n.ratio4to3)&&e.setAttribute("aspect-ratio",n.ratio4to3)})}updated(e){var t;const r=null==(t=this.href)?void 0:t.trim();this.clickable=!!r,e.has("strokeHidden")&&(this.strokeHidden&&!r&&(this.surface=h.transparent),this.strokeHidden||(this.surface=h.media))}_renderContent(){return r`<div class="logobar-item" part="logobar-item">
      <div part="logobar-item__media" class="logobar-item__media">
        <slot @slotchange="${this._handleMediaSlotChange}"></slot>
      </div>
    </div>`}render(){return this.href?this.renderLink(this._renderContent()):this._renderContent()}};C.styles=[_],M([a({type:Boolean,reflect:!0,attribute:"stroke-hidden"})],C.prototype,"strokeHidden",2),M([a({reflect:!0})],C.prototype,"theme",2),M([s()],C.prototype,"_itemMedia",2),C=M([d(S)],C);export{C as LogoBarItem,S as name};
