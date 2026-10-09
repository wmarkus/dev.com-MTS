import{i as e,e as r,b as t}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{a,s as o,d as s}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{b as i,c as n,M as c}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{n as l}from"/__mirror/assets/42f825e3dad9c53f1fc34d82";import{name as m}from"/__mirror/assets/ca6674f0d5c9eb5234b953db";const d=e`
  :host {
    --ds-carousel-item-padding: var(--ds-app-space-micro-2xs, 0.25rem);
    --ds-scrollslider-item-default-height: calc(100% - 2 * var(--ds-app-space-micro-2xs, 0.25rem));
  }
`;var p=Object.defineProperty,f=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,g=Reflect.get,h=(e,r,t,a)=>{for(var o,s=a>1?void 0:a?f(r,t):r,i=e.length-1;i>=0;i--)(o=e[i])&&(s=(a?o(r,t,s):o(s))||s);return a&&s&&p(r,t,s),s};const y="reimagine-banner-news";let b=class extends i{_updateConfiguration(){0!==this._defaultSlot.length&&Array.from(a(this,l)).forEach(e=>{o(e,{"layout-configuration":n.card1,"control-position":"bottom-start","control-size":"large"},!0),Array.from(a(e,m)).forEach(e=>{o(e,{configuration:"slim",surface:"solid-border"}),Array.from(a(e,"reimagine-media")).forEach(e=>{o(e,{"aspect-ratio":c.ratio21to9})})})})}_renderBlade(){const e="container",r=t`
      <!-- Main carousel content -->
      <reimagine-layout configuration=${n.col1even}>
        <reimagine-layout-column class="body" part="body">
          <slot @slotchange=${()=>this._updateConfiguration()}></slot>
        </reimagine-layout-column>
      </reimagine-layout>
    `;return this.baseContent?t` <div class=${e} part=${e}>${r}</div> `:t`
      <reimagine-container part=${e} class=${e}>
        ${r}
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var v,j,$;b.styles=[...(v=b,j=b,$="styles",g(u(v),$,j)||[]),d],h([r({slot:""})],b.prototype,"_defaultSlot",2),b=h([s(y)],b);export{b as BannerNews,y as name};
