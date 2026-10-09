import{r as t,i as e,c as o,f as i,e as s,b as a}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{s as r,i as n,q as d,k as c,d as l}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{b,n as p,c as h,T as m}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{v as g}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{b as u,z as y,k as w,i as k,T as _}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{name as v}from"/__mirror/assets/1744c47504083b26d862e98f";import{n as f,a as B}from"/__mirror/assets/34233ee5ac8acdb3aa831b25";const x="var(--ds-app-color-base-special-bg-opt2-left)",D="var(--ds-app-space-micro-3xl, 4.5rem)",V="var(--ds-app-radii-l, 1.5rem)",$=e`
  .container {
    display: var(--ds-container-display, flex);
    flex-direction: var(--ds-container-flex-direction, column);
    gap: var(--ds-container-gap, var(--ds-ui-shell-content-row-gap, 3rem));
  }

  .body {
    padding-inline: var(
      --ds-data-with-icon-body-padding-inline,
      ${t("var(--ds-app-space-micro-3xl, 4.5rem)")}
    );
    padding-block: var(
      --ds-data-with-icon-body-padding-block,
      ${t(D)}
    );
    border-radius: var(
      --ds-data-with-icon-body-border-radius,
      ${t(V)}
    );
  }

  :host([body-background]) .body {
    --ds-layout-row-gap: var(--ds-app-space-layout-inset-vertical-comfortable, 6rem);

    background: var(
      --ds-data-with-icon-body-background,
      ${t(x)}
    );
  }

  :host([body-disable-background]) .body {
    --ds-data-with-icon-body-background: none;
    --ds-data-with-icon-body-padding-block: 0;
    --ds-data-with-icon-body-padding-inline: 0;
  }
`,O=e`
  @media (min-width: ${t(g.md)}) {
    .body {
      --ds-data-with-icon-body-padding-block: var(--ds-app-space-micro-2xl, 3rem);
    }
  }
`;var z=Object.defineProperty,j=Object.getOwnPropertyDescriptor,W=Object.getPrototypeOf,C=Reflect.get,M=(t,e,o,i)=>{for(var s,a=i>1?void 0:i?j(e,o):e,r=t.length-1;r>=0;r--)(s=t[r])&&(a=(i?s(e,o,a):s(a))||a);return i&&a&&z(e,o,a),a};const S="reimagine-data-with-icon";let A=class extends b{constructor(){super(),this.bottomDisableBackground=!1,this._bodyTextBlocks=[],this._isMobileViewport=!1,this._isDesktopViewport=!1,this._observedWindowDimensions={width:window.innerWidth,height:window.innerHeight},this._isMobileViewport=this._observedWindowDimensions.width<parseInt(g.md,10),this._isDesktopViewport=this._observedWindowDimensions.width>=parseInt(g.md,10),this._resizeObserver=new ResizeObserver(()=>{this._observedWindowDimensions={width:window.innerWidth,height:window.innerHeight},requestAnimationFrame(()=>{this._handleViewportChange()})})}connectedCallback(){super.connectedCallback(),this._resizeObserver.observe(document.body)}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver.disconnect()}_handleViewportChange(){const t=this._observedWindowDimensions.width<parseInt(g.md,10),e=this._observedWindowDimensions.width>=parseInt(g.md,10);this._isDesktopViewport&&t?(this._isDesktopViewport=!1,this._isMobileViewport=!0,this._bodyTextBlocks.forEach(t=>(r(t,{configuration:w.stacked}),r(t,{alignment:k.center}),t))):this._isMobileViewport&&e&&(this._isDesktopViewport=!0,this._isMobileViewport=!1,this._bodyTextBlocks.forEach(t=>(r(t,{configuration:w.list}),t.removeAttribute("alignment"),t)))}_handleBodySlotChange(){if(this._bodySlot.length>0){const t=this._bodySlot.filter(t=>n(t,p));t.length>0&&t.forEach(t=>{const e=d(t,v);if(e){e.hasAttribute("configuration")||(this._isMobileViewport?r(e,{configuration:w.stacked}):r(e,{configuration:w.list})),!e.hasAttribute("alignment")&&this._isMobileViewport&&r(e,{alignment:k.center}),e.hasAttribute("size")||r(e,{size:_["size-xs"]});const t=d(e,f);t&&!t.hasAttribute("size")&&r(t,{size:B.x3large}),!e.hasAttribute("theme")&&!this.bottomDisableBackground&&r(e,{theme:m.light}),this._bodyTextBlocks.push(e)}})}}_handleBodyBackground(){if(this.bottomDisableBackground)return this.bottomBackground=void 0,"";let t;this.bottomBackground||(this.bottomBackground=u.baseSpecialOpt2);const e=c(u,this.bottomBackground),o=e?y[e]:void 0;return t=o||y.baseSpecialOpt2,`background: ${t};`}_renderBlade(){const t="container",e=a`
      <reimagine-layout
        configuration="${h.col3Even}"
        part="body"
        class="body"
        density="relaxed"
        style="${this._handleBodyBackground()}"
      >
        <slot name="body" @slotchange=${this._handleBodySlotChange}></slot>
      </reimagine-layout>
    `;return this.baseContent?a` <div class=${t} part=${t}>${e}</div> `:a`
      <reimagine-container part=${t} class="${t}">
        ${e}
      </reimagine-container>
    `}updated(t){(t.has("bodyBackground")||t.has("bodyDisableBackground"))&&this._handleBodyBackground()}render(){return this.renderUiShell(this._renderBlade())}};var T,I,E;A.styles=[...(T=A,I=A,E="styles",C(W(T),E,I)||[]),$,O],M([o({attribute:"body-background",reflect:!0})],A.prototype,"bottomBackground",2),M([o({type:Boolean,attribute:"body-disable-background",reflect:!0})],A.prototype,"bottomDisableBackground",2),M([i()],A.prototype,"_bodyTextBlocks",2),M([s({slot:"body"})],A.prototype,"_bodySlot",2),M([i()],A.prototype,"_isMobileViewport",2),M([i()],A.prototype,"_isDesktopViewport",2),M([i()],A.prototype,"_resizeObserver",2),M([i()],A.prototype,"_observedWindowDimensions",2),A=M([l(S)],A);export{A as DataWithIcon,S as name};
