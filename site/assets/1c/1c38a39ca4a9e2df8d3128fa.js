import{r as a,i as e,e as t,f as o,b as s}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{b as r,H as i,c as l}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{i as d,a as n,d as c}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{n as y}from"/__mirror/assets/b261b011546c5001df09e043";const p="flex",b="column",m="var(--ds-app-space-micro-3xl, 4.5rem)",g="var(--ds-app-type-heading-2xs-font-size, 1.25rem)",h="var(--ds-app-color-base-default-fg-heading, #0E1726)",f=e`
  :host {
    color: var(--ds-takeaway-body-color, ${a("var(--ds-app-color-base-default-fg-heading, #0E1726)")});

    --ds-layout-row-gap: var(--ds-app-space-micro-xl);
  }

  .body {
    --ds-takeaway-body-p-color: var(--ds-app-color-base-default-fg-heading, #0e1726);

    display: var(--ds-takeaway-body-display, ${a(p)});
    flex-direction: var(
      --ds-takeaway-body-flex-direction,
      ${a(b)}
    );
    gap: var(--ds-takeaway-body-gap, ${a(m)});
  }

  ::slotted([slot='body']) {
    display: var(--ds-takeaway-body-display, flex);
    flex-direction: var(--ds-takeaway-body-flex-direction, column);
    gap: var(--ds-takeaway-body-gap, var(--ds-app-space-micro-l));
  }

  :host ::slotted([slot='sidebar']) {
    font-size: var(
      --ds-takeaway-sidebar-font-size,
      ${a(g)}
    );
    color: var(--ds-takeaway-sidebar-color, ${a(h)});
  }
`,u=e`
  ::slotted([slot='body']) {
    --ds-takeaway-body-gap: var(--ds-app-space-micro-xl, 2rem);
  }
`;var v=Object.defineProperty,w=Object.getOwnPropertyDescriptor,$=Object.getPrototypeOf,S=Reflect.get,k=(a,e,t,o)=>{for(var s,r=o>1?void 0:o?w(e,t):e,i=a.length-1;i>=0;i--)(s=a[i])&&(r=(o?s(e,t,r):s(r))||r);return o&&r&&v(e,t,r),r};const x="reimagine-editorial-article-takeaway";let _=class extends r{constructor(){super(...arguments),this._sidebarSlotEmpty=!0}_handleSlotChange(){this._sidebarSlotEmpty=0===this._sidebarSlot.length}_renderOptionalSlot(a,e){return s`
      <div part=${a} class=${a} style="${e?"display: none;":""}">
        <slot name=${a} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_bodySlotChange(){if(!this.shadowRoot)return;const a=this.shadowRoot.querySelector('slot[name="body"]');a&&a.assignedElements({flatten:!0}).forEach(a=>{if(d(a,y)){const e=a;e.hasAttribute("size")||e.setAttribute("size",i["size-sm"])}a instanceof HTMLElement&&(a instanceof HTMLDivElement&&a.querySelectorAll("p").forEach(a=>{a.style.color="var(--ds-takeaway-body-p-color)"}),n(a,y).forEach(a=>{const e=a;e.hasAttribute("size")||e.setAttribute("size",i["size-sm"])}))})}_renderBlade(){const a="container",e=s`
      <reimagine-layout configuration="${l.col2editorial}" density="relaxed">
        <reimagine-layout-column part="sidebar" class="sidebar">
          ${this._renderOptionalSlot("sidebar",this._sidebarSlotEmpty)}
        </reimagine-layout-column>
        <reimagine-layout-column part="body" class="body">
          <slot name="body" @slotchange="${this._bodySlotChange}"></slot>
        </reimagine-layout-column>
      </reimagine-layout>
    `;return s`
      <reimagine-container class=${a} part=${a}>
        ${e}
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var E,z,j;_.styles=[...(E=_,z=_,j="styles",S($(E),j,z)||[]),f,u],k([t({slot:"sidebar"})],_.prototype,"_sidebarSlot",2),k([o()],_.prototype,"_sidebarSlotEmpty",2),_=k([c(x)],_);export{_ as EditorialArticleTakeaway,x as name};
