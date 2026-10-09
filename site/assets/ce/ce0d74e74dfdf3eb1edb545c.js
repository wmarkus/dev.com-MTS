import{r as t,i as e,g as a,b as o}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i as r,d as s}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{v as d}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{name as i}from"/__mirror/assets/91b34a12fefef04357a5153b";import{name as n}from"/__mirror/assets/87618cfe62512b01ff651d21";import{c as l,b as c}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";const m=e`
  .container {
    display: flex;
    flex-direction: column;
    gap: var(--ds-card-grid-container-gap, ${t("var(--ds-app-space-micro-m, 1rem)")});
  }

  :host {
    --ds-card-editorial-max-width: 100%;
    --ds-card-stat-media-max-height: auto;
    --ds-card-stat-media-flex: 0;
    --ds-card-stat-max-width: 100%;
    --ds-card-stat-min-height: 100%;
  }
`,h=e`
  @media (min-width: ${t(d.md)}) {
    :host {
      --ds-card-case-study-height: 100%;
    }
  }
`,p=l.col3OffsetStack;var g=Object.defineProperty,y=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,f=Reflect.get,S=(t,e,a,o)=>{for(var r,s=o>1?void 0:o?y(e,a):e,d=t.length-1;d>=0;d--)(r=t[d])&&(s=(o?r(e,a,s):r(s))||s);return o&&s&&g(e,a,s),s};const _="reimagine-mixed-stack";let b=class extends c{_handleBodySlotChange(){this._updateBodySlot()}_handleModalSlotChange(){this._updateModalSlot()}_renderBodySlot(){return o` <slot name=${"body"} @slotchange=${this._handleBodySlotChange}></slot> `}_renderModalSlot(){return o` <slot name=${"modal"} @slotchange=${this._handleModalSlotChange}></slot> `}_updateBodySlot(){var t;null!=(t=this._bodySlot)&&t.length&&this._bodySlot.forEach(t=>{t&&t.children&&Array.from(t.children).forEach(t=>{r(t,i)?(t.setAttribute("configuration","media"),t.setAttribute("aspect-ratio","16-9")):r(t,n)&&t.setAttribute("configuration","vertical")})})}_updateModalSlot(){var t;null!=(t=this._modalSlot)&&t.length&&this._modalSlot.forEach(t=>{t&&t.children&&Array.from(t.children).forEach(t=>{r(t,"reimagine-modal")&&t.setAttribute("configuration","side-panel")})})}_renderBlade(){const t="container",e=o`
      <reimagine-layout
        part="body"
        class="body"
        configuration=${p}
      >
        ${this._renderBodySlot()}
      </reimagine-layout>
    `;return this.baseContent?o` <div class=${t} part=${t}>${e}</div> `:o`
      <reimagine-container class=${t} part=${t}>
        ${e} ${this._renderModalSlot()}
      </reimagine-container>
    `}render(){return o`${this.renderUiShell(this._renderBlade())}`}};var $,v,x;b.styles=[...($=b,v=b,x="styles",f(u($),x,v)||[]),m,h],S([a({slot:"body"})],b.prototype,"_bodySlot",2),S([a({slot:"modal"})],b.prototype,"_modalSlot",2),b=S([s(_)],b);export{b as MixedStack,_ as name};
