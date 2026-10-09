import{r as e,i as t,c as i,e as a,b as l}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{q as s,s as r,d as n}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{b as o,c as d}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";const c="124px",m=t`
  :host {
    --ds-link-media-width: 3rem;
    --ds-link-font-size: var(--ds-app-type-label-l-font-size, 1rem);
    --ds-link-text-align: center;
    --ds-link-text-display: block;
  }

  .utility-link-media-list {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    gap: var(--ds-link-media-gap, ${e("var(--ds-app-space-micro-xs, 0.5rem)")});
  }

  ::slotted(li),
  ::slotted([role='listitem']) {
    display: flex;
    justify-content: center;
    list-style: none;
    width: 100%;
    max-width: var(--ds-link-media-item-width, ${e(c)});
  }
`;var p=Object.defineProperty,g=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,h=Reflect.get,u=(e,t,i,a)=>{for(var l,s=a>1?void 0:a?g(t,i):t,r=e.length-1;r>=0;r--)(l=e[r])&&(s=(a?l(t,i,s):l(s))||s);return a&&s&&p(t,i,s),s};const y="reimagine-link-media";let b=class extends o{constructor(){super(...arguments),this.ariaLabel="Related links"}_handleSlotChange(){const e=this._defaultSlot.filter(e=>e.nodeType===Node.ELEMENT_NODE),t={configuration:"stacked","with-media":""};e.forEach(e=>{if("li"===e.tagName.toLowerCase()){const i=s(e,"reimagine-link");i&&r(i,t)}else e.setAttribute("role","listitem"),r(e,t)})}_renderBlade(){const e="base",t=l`
      <reimagine-layout configuration=${d.col1even}>
        <reimagine-layout-column>
          <nav aria-label=${this.ariaLabel}>
            <ul class="utility-link-media-list" part="utility-link-media-list">
              <slot @slotchange=${this._handleSlotChange}></slot>
            </ul>
          </nav>
        </reimagine-layout-column>
      </reimagine-layout>
    `;return this.baseContent?l`<div class=${e} part=${e}>${t}</div>`:l`
          <reimagine-container part=${e} class="${e}">
            ${t}
          </reimagine-container>
        `}render(){return this.renderUiShell(this._renderBlade())}firstUpdated(){this._handleSlotChange()}};var k,v,x;b.styles=[...(k=b,v=b,x="styles",h(f(k),x,v)||[]),m],u([i()],b.prototype,"ariaLabel",2),u([a({slot:"",flatten:!1})],b.prototype,"_defaultSlot",2),b=u([n(y)],b);export{b as LinkMedia,y as name};
