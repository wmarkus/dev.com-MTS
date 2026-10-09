import{i as t,r as e,c as o,f as a,e as i,b as n}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i as s,s as l,d as r}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{b as c,c as m,s as f,H as u,f as p,M as d}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{b as y,v as g}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{n as h}from"/__mirror/assets/b261b011546c5001df09e043";import{n as x}from"/__mirror/assets/bf0b3498e45fc20534cec8b1";import{T as _}from"/__mirror/assets/6ad137053d5da8fc91d912f1";const S="text-first",v="text-only",b=t`
  :host {
    --ds-text-block-gap: var(--ds-app-space-layout-stack-cozy, 2rem);
  }

  :host([configuration='text-only']) {
    --ds-text-block-gap: 0;
  }

  :host([configuration='text-only']) .text-only {
    display: flex;
    flex-direction: column;
    gap: var(--ds-app-space-micro-2xl, 3rem);
  }

  .container reimagine-layout[configuration='2-col-offset-left'] .second-column {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .container reimagine-layout[configuration='2-col-offset-right'] .first-column {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
  }

  .container reimagine-layout[configuration^='2-col-offset']::part(layout__base) {
    --ds-grid-column-gap: var(--ds-app-space-layout-inset-vertical-comfortable, 6rem);
    --ds-layout-column-gap: var(--ds-app-space-layout-inset-vertical-comfortable, 6rem);
  }
`,j=t`
  @media (max-width: ${e(y(g.md))}) {
    .container reimagine-layout[configuration^='2-col-offset']::part(layout__base) {
      --ds-layout-row-gap: var(--ds-app-space-layout-inset-vertical-comfortable, 3.5rem);
    }

    .container
      reimagine-layout[configuration='2-col-offset-right']
      reimagine-layout-column:first-of-type,
    .container
      reimagine-layout[configuration='2-col-offset-left']
      reimagine-layout-column:last-of-type {
      --ds-layout-column-display: flex;
      --ds-layout-column-justify-content: center;
    }
  }
`;var $=Object.defineProperty,E=Object.getOwnPropertyDescriptor,k=Object.getPrototypeOf,w=Reflect.get,z=(t,e,o,a)=>{for(var i,n=a>1?void 0:a?E(e,o):e,s=t.length-1;s>=0;s--)(i=t[s])&&(n=(a?i(e,o,n):i(n))||n);return a&&n&&$(e,o,n),n};const O="reimagine-long-form-seo";let C=class extends c{constructor(){super(...arguments),this._contentSlotEmpty=!1,this._mediaSlotEmpty=!1}_handleSlotChange(){if(this._contentSlotEmpty=0===this._contentSlot.length,this._mediaSlotEmpty=0===this._mediaSlot.length,this._contentSlotEmpty&&this._mediaSlotEmpty)return;const t=this._contentSlot.filter(t=>s(t,h)),e=this._contentSlot.filter(t=>s(t,"reimagine-text-block")),o=this._mediaSlot.filter(t=>s(t,x)),a={size:u["size-md"]},i={"aspect-ratio":d.ratio3to4,"border-width":p.l};l(t,a),l(e,{size:_["size-s"]}),l(o,i)}_renderBlade(){const t=this.configuration===S,e=this.configuration===v,o=n`
      <reimagine-layout
        configuration="${t?m.col2offsetLeft:m.col2offsetRight}"
        density="${f.relaxed}"
      >
        <reimagine-layout-column>
          <div class="first-column" part="first-column">
            <slot
              name="${t?"content":"media"}"
              @slotchange=${this._handleSlotChange}
            ></slot>
          </div>
        </reimagine-layout-column>
        <reimagine-layout-column>
          <div class="second-column" part="second-column">
            <slot
              name="${t?"media":"content"}"
              @slotchange=${this._handleSlotChange}
            ></slot>
          </div>
        </reimagine-layout-column>
      </reimagine-layout>
    `,a=n`
      <reimagine-layout configuration="${m.col1focus}">
        <reimagine-layout-column>
          <div class="text-only" part="text-only">
            <slot name="content" @slotchange=${this._handleSlotChange}></slot>
          </div>
        </reimagine-layout-column>
      </reimagine-layout>
    `;return n`
      <reimagine-container part="container" class="container">
        ${e?a:o}
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var P,B,L;C.styles=[...(P=C,B=C,L="styles",w(k(P),L,B)||[]),b,j],z([o({reflect:!0})],C.prototype,"configuration",2),z([a()],C.prototype,"_contentSlotEmpty",2),z([a()],C.prototype,"_mediaSlotEmpty",2),z([i({slot:"content"})],C.prototype,"_contentSlot",2),z([i({slot:"media"})],C.prototype,"_mediaSlot",2),C=z([r(O)],C);export{C as LongFormSeo,O as name};
