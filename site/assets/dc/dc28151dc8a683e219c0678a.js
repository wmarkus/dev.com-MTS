import{i as t,r as e,g as o,f as s,h as a,b as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{b as i,M as l}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{q as n,s as u,d as m}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{n as c}from"/__mirror/assets/bf0b3498e45fc20534cec8b1";import{b as p,v as h}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";const g=t`
  :host {
    --ds-layout-column-display: flex;
    --ds-layout-column-align-items: center;
  }
`,d=t`
  @media (max-width: ${e(p(h.md))}) {
    :host {
      --ds-layout-row-gap: 3.5rem;
    }
  }
`;var y=Object.defineProperty,q=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,_=Reflect.get,S=(t,e,o,s)=>{for(var a,r=s>1?void 0:s?q(e,o):e,i=t.length-1;i>=0;i--)(a=t[i])&&(r=(s?a(e,o,r):a(r))||r);return s&&r&&y(e,o,r),r};const b="reimagine-section-with-quote";let j=class extends i{constructor(){super(...arguments),this._quoteSlotEmpty=!0}_quoteSlotChange(){var t;this._quoteSlotEmpty=0===(null==(t=this._quoteSlot)?void 0:t.length),this._quoteSlot&&this._quoteSlot.forEach(t=>{const e=n(t,c);u(e,{"aspect-ratio":l.ratio16to9})})}_renderBlade(){const t={base:!0,[this.background??"_"]:!!this.background};return r`
      <reimagine-container part=${"base"} class="${a(t)}">
        <reimagine-layout configuration="2-col-gapped">
          <reimagine-layout-column
            part="header"
            class="header"
            style="${this.toggleDisplay(this._quoteSlotEmpty)}"
          >
            <slot name="header"></slot>
          </reimagine-layout-column>
          <reimagine-layout-column part="quote" class="quote">
            <slot name="quote" @slotchange=${this._quoteSlotChange}></slot>
          </reimagine-layout-column>
        </reimagine-layout>
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var v,w,x;j.styles=[...(v=j,w=j,x="styles",_(f(v),x,w)||[]),g,d],S([o({slot:"quote"})],j.prototype,"_quoteSlot",2),S([s()],j.prototype,"_quoteSlotEmpty",2),j=S([m(b)],j);export{j as SectionWithQuote,b as name};
