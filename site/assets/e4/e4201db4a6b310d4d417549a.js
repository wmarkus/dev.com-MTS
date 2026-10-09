import{i as t,c as o,e,f as a,b as i}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{b as s,i as r,B as n,j as c,H as l}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{i as d,q as p,a as m,m as h,d as u}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{a as f}from"/__mirror/assets/a6c6f415f3fcc13d76b9625a";import{n as b}from"/__mirror/assets/b261b011546c5001df09e043";import{n as g}from"/__mirror/assets/5d2e1bf3d87581457a2b76db";import{name as y}from"/__mirror/assets/1376567b2b82d941066974ae";import"/__mirror/assets/24ffb6cd5011ed58be394c8a";import"/__mirror/assets/5f924eec6274a2d611fc1ea0";import{b as _}from"/__mirror/assets/6ad137053d5da8fc91d912f1";const A=t`
  :host {
    --ds-collapse-first-slot-color: var(--ds-app-color-base-default-fg-highlight, #005597);
    --ds-collapse-first-slot-font-weight: 600;
    --ds-collapse-first-slot-font-size: var(--ds-app-type-label-l-font-size, 1rem);
    --ds-collapse-first-slot-line-height: var(--ds-app-type-label-l-line-height, 1.5rem);
    --ds-layout-column-display: flex;
    --ds-layout-column-flex-direction: column;
    --ds-layout-column-row-gap: 3rem;
    --ds-tabs-first-margin-bottom: var(--ds-app-space-layout-stack-cozy, 2rem);
    --ds-accordion-top-layout-margin-block-end: var(--ds-app-space-micro-xl, 2rem);
    --ds-scrollslider-justify-content: center;
  }

  :host ::slotted(reimagine-accordion) {
    --ds-accordion-button-padding: var(--ds-app-space-micro-xl, 2rem) var(--ds-app-space-micro-xs, 0.5rem);
  }

  :host ::slotted(reimagine-footnote) {
    flex-direction: column;
  }
`;var v=Object.defineProperty,S=Object.getOwnPropertyDescriptor,C=Object.getPrototypeOf,j=Reflect.get,x=(t,o,e,a)=>{for(var i,s=a>1?void 0:a?S(o,e):o,r=t.length-1;r>=0;r--)(i=t[r])&&(s=(a?i(o,e,s):i(s))||s);return a&&s&&v(o,e,s),s};const $="reimagine-high-impact-accordion";let k=class extends s{constructor(){super(...arguments),this.accordionAppearance=f.subtleButton,this.enableCollapseControls=!1,this._footnoteSlotEmpty=!0}connectedCallback(){super.connectedCallback(),this.density??(this.density="comfortable"),this.breadth??(this.breadth="comfortable"),this.background??(this.background=_.baseDefaultOpt1)}disconnectedCallback(){super.disconnectedCallback()}_handleSlotChange(){this._footnoteSlotEmpty=0===this._footnoteSlot.length,this._setAccordionAttributes(),this._setAccordionControlsAttributes()}_setAccordionAttributes(){const t=this._accordionSlot.filter(t=>t instanceof HTMLElement).map(t=>d(t,y)?t:p(t,y)).find(Boolean);t&&(this.accordionAppearance&&t.setAttribute("appearance",this.accordionAppearance),t.toggleAttribute("enable-collapse-controls",!!this.enableCollapseControls))}_setAccordionControlsAttributes(){const t=m(this._accordionSlot[0],g);(null==t?void 0:t.length)>0&&(null==t||t.forEach(t=>{t&&!t.hasAttribute("appearance")&&t.setAttribute("appearance",r.buttonSecondary),t&&!t.hasAttribute("size")&&t.setAttribute("size",n.large),t&&!t.hasAttribute("shape")&&t.setAttribute("shape",c.rounded)}))}_setAccordionHeadingAttributes(){const t=p(this._accordionSlot[0],b),o=null==t?void 0:t.getAttribute("size");t&&!o&&!t.hasAttribute("size")&&t.setAttribute("size",l["size-md"])}_renderOptionalSlot(t="high-impact-accordion__slot",o=!0){return i`
      <div part=${t} class=${t} style="${o?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}renderDefaultTemplate(){const t="high-impact-accordion__container",o=i`
      <reimagine-layout
        configuration="1-col-even"
        part="high-impact-accordion__layout"
        class="high-impact-accordion__layout"
      >
        <reimagine-layout-column>
          <slot
            name="high-impact-accordion__accordion"
            @slotchange="${this._handleSlotChange}"
          ></slot>
          ${this._renderOptionalSlot("high-impact-accordion__footnote",this._footnoteSlotEmpty)}
        </reimagine-layout-column>
      </reimagine-layout>
    `;return this.baseContent?i`<div class=${t} part=${t}>${o}</div>`:i`
      <reimagine-container part=${t} class=${t}>
        ${o}
      </reimagine-container>
    `}firstUpdated(){this._setAccordionHeadingAttributes();const t=this._accordionSlot[0];(h(t,y)?[t]:Array.from(m(t,y)??[])).forEach(t=>{const o=p(t,"reimagine-accordion-item");null==o||o.setAttribute("open","")})}render(){return i` ${this.renderUiShell(this.renderDefaultTemplate())} `}};var z,O,E;k.styles=[...(z=k,O=k,E="styles",j(C(z),E,O)||[]),A],x([o({reflect:!0})],k.prototype,"theme",2),x([o({reflect:!0,attribute:"accordion-appearance"})],k.prototype,"accordionAppearance",2),x([o({reflect:!0,type:Boolean,attribute:"enable-collapse-controls"})],k.prototype,"enableCollapseControls",2),x([e({slot:"high-impact-accordion__accordion"})],k.prototype,"_accordionSlot",2),x([e({slot:"high-impact-accordion__footnote"})],k.prototype,"_footnoteSlot",2),x([a()],k.prototype,"_footnoteSlotEmpty",2),k=x([u($)],k);export{k as HighImpactAccordion,$ as name};
