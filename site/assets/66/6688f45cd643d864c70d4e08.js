import{r as t,i as e,c as o,e as a,f as n,b as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i as s,d as i}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{d as l,b as p,c}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{n as m}from"/__mirror/assets/b261b011546c5001df09e043";const d=e`
  .container {
    display: var(--ds-ui-shell-content-display, flex);
    flex-direction: var(--ds-ui-shell-content-flex-direction, column);
    row-gap: var(--ds-ui-shell-content-row-gap, ${t({rowGap:l.contentRowGap}.rowGap)});
  }

  :host([alignment='center']) .body {
    --ds-scrollslider-justify-content: center;
  }

  :host {
    --ds-stat-body-gap: var(--ds-app-space-micro-xs, 0.5rem);
  }
`,y="center";var g=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,f=Reflect.get,S=(t,e,o,a)=>{for(var n,r=a>1?void 0:a?u(e,o):e,s=t.length-1;s>=0;s--)(n=t[s])&&(r=(a?n(e,o,r):n(r))||r);return a&&r&&g(e,o,r),r};const b="reimagine-banner-featured";let v=class extends p{constructor(){super(...arguments),this._topSlotEmpty=!0,this.topSlotLayoutConfiguration=c.col1even}handleTopSlotChange(){if(this._topSlotEmpty=0===this._topSlot.length,!this._topSlotEmpty){const t=this._topSlot.filter(t=>s(t,m));this.alignment!==y&&t.length>0&&(this.topSlotLayoutConfiguration=c.col2even)}}_renderBlade(){const t="container",e=r`
      <reimagine-layout
        configuration=${this.topSlotLayoutConfiguration}
        style="${this.toggleDisplay(this._topSlotEmpty)}"
      >
        <reimagine-layout-column class="top-text" part="top-text">
          <slot name="top-text" @slotchange=${this.handleTopSlotChange}></slot>
        </reimagine-layout-column>
      </reimagine-layout>
      <reimagine-layout>
        <reimagine-layout-column class="body" part="body">
          <slot></slot>
        </reimagine-layout-column>
      </reimagine-layout>
    `;return this.baseContent?r` <div class=${t} part=${t}>${e}</div> `:r`
      <reimagine-container part=${t} class=${t}>
        ${e}
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var x,$,_;v.styles=[...(x=v,$=v,_="styles",f(h(x),_,$)||[]),d],S([o({reflect:!0})],v.prototype,"alignment",2),S([a({slot:"top-text"})],v.prototype,"_topSlot",2),S([n()],v.prototype,"_topSlotEmpty",2),v=S([i(b)],v);export{v as BannerFeatured,b as name};
