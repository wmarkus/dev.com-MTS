import{r as o,i as t,c as a,e,g as i,f as n,b as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{q as c,i as s,e as d,T as l,a as p,f as m,d as u}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{a as h}from"/__mirror/assets/68715377d2d0e5c736890372";import{b as g,n as _,a as f}from"/__mirror/assets/a6c6f415f3fcc13d76b9625a";import{q as b}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{v,b as y}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import"/__mirror/assets/5d2e1bf3d87581457a2b76db";import"/__mirror/assets/ea6784fd34f0ec31a8e3ea36";import"/__mirror/assets/a6479ea808b36b42c5f26c81";import"/__mirror/assets/5849ec5e150363c91281fb26";import{R as x}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";const S="0",C="var(--ds-app-color-interactive-secondary-bg-default)",E="var(--ds-app-color-surface-solid-bg-default, #fefefe)",w="var(--ds-app-color-interactive-secondary-bg-hover)",A="var(--ds-app-radii-l, 1.5rem)",$="var(--ds-app-color-surface-solid-bg-hover, #fefefe)",k="auto",j="var(--ds-app-color-surface-solid-bg-default, #fefefe)",I="var(--ds-app-color-base-default-bg-opt1, #002948)",L="var(--ds-app-color-surface-solid-bg-pressed, #f6f5f7)",B="var(--ds-app-color-surface-solid-bg-hover,#F8F7F8)",F="var(--ds-app-color-interactive-secondary-fg-default, #2a446f)",O=t`
  :host([appearance='contained--chevron']),
  :host([appearance='subtle--button']),
  :host([appearance='contained--button']),
  :host([appearance='filter--panel']) {
    --ds-accordion-gap: 0;
  }

  :host {
    --ds-collapse-content-padding: var(--ds-app-space-micro-xl, 2rem);
    --ds-accordion-gap: var(--ds-app-space-micro-l, 1.5rem);
  }

  ::slotted(reimagine-link),
  ::slotted(reimagine-button-group) {
    margin-block-start: var(--ds-app-space-micro-2xl, 3rem);
  }

  /* Contained Chevron */
  :host([appearance='contained--chevron']) ::slotted(reimagine-accordion-item) {
    --ds-accordion-item-indicator-display: none;
    --ds-collapse-button-justify-content: space-between;
    --ds-collapse-button-width: 100%;
    --ds-collapse-button-gap: var(--ds-app-space-micro-l, 1.5rem);
    --ds-collapse-button-padding: 1.5rem 2rem;
    --ds-collapse-button-margin: 0;
    --ds-collapse-content-padding: var(--ds-app-space-micro-xl, 2rem);
    --ds-collapse-content-background-color: var(
      --ds-accordion-contained-chevron-content-background-color,
      ${o("var(--ds-app-color-surface-solid-bg-default, #fefefe)")}
    );
    --ds-collapse-content-gap: var(--ds-app-space-micro-xl, 2rem);
  }

  /* Subtle Button */
  :host([appearance='subtle--button']) ::slotted(reimagine-accordion-item) {
    --ds-accordion-item-gap: var(--ds-app-space-micro-m, 1rem);
    --ds-accordion-item-indicator-display: none;
    --ds-accordion-item-margin-inline-end: var(--ds-app-space-micro-m, 1rem);
    --ds-collapse-button-justify-content: space-between;
    --ds-collapse-button-width: 100%;
    --ds-collapse-button-padding: var(
      --ds-accordion-button-padding,
      var(--ds-app-space-micro-l, 1.5rem) var(--ds-app-space-micro-xs, 0.5rem)
    );
    --ds-collapse-button-margin: 0 -0.5rem;
    --ds-collapse-button-gap: var(--ds-app-space-micro-m, 1rem);
    --ds-collapse-first-slot-width: 9.5rem;
    --ds-collapse-first-slot-height: 2.5rem;
    --ds-collapse-first-slot-margin: 1.5rem 0 0 0.1875rem;
    --ds-collapse-first-slot-display: flex;
    --ds-collapse-first-slot-align-items: center;
    --ds-collapse-first-slot-color: var(--ds-app-color-base-default-fg-highlight, #005597);
    --ds-collapse-first-slot-font-weight: var(--ds-app-type-label-l-font-weight, 600);
    --ds-collapse-first-slot-font-size: var(--ds-app-type-label-l-font-size, 1rem);
    --ds-collapse-first-slot-line-height: var(--ds-app-type-label-l-line-height, 1.5rem);
  }

  :host([appearance='contained--button']) ::slotted(reimagine-accordion-item),
  :host([appearance='filter--panel']) ::slotted(reimagine-accordion-item) {
    --ds-accordion-item-divider-display: none;
    --ds-accordion-item-indicator-display: none;
    --ds-collapse-border-radius: var(--ds-app-radii-m, 0.5rem);
    --ds-collapse-button-justify-content: space-between;
    --ds-collapse-button-width: 100%;
    --ds-collapse-button-padding: var(--ds-app-space-micro-m, 1rem);
    --ds-collapse-button-margin: 0;
    --ds-collapse-button-gap: var(--ds-app-space-micro-l, 1.5rem);
    --ds-collapse-content-padding: 1.5rem 1rem 2rem;
    --ds-collapse-content-gap: var(--ds-app-space-micro-xl, 2rem);
    margin-block-end: var(--ds-app-space-micro-2xs, 0.25rem);
  }

  :host([appearance='contained--button']) ::slotted(reimagine-accordion-item) {
    --ds-collapse-button-background-color: var(
      --ds-accordion-contained-button-background-color,
      ${o(C)}
    );
    --ds-collapse-button-hover-background-color: var(
      --accordion-contained-button-hover-background-color,
      ${o(w)}
    );
    --ds-collapse-button-active-background-color: var(
      --ds-accordion-contained-button-active-background-color,
      ${o(E)}
    );
    --ds-collapse-content-background-color: var(
      --ds-accordion-contained-button-active-background-color,
      ${o(E)}
    );
    --ds-collapse-title-font-size: ${o(b.fontSize)};
    --ds-collapse-title-font-weight: ${o(b.fontWeight)};
  }

  :host([appearance='filter--panel']) ::slotted(reimagine-accordion-item) {
    --ds-collapse-button-background-color: var(
      --ds-accordion-contained-button-background-color,
      ${o(j)}
    );
    --ds-collapse-button-hover-background-color: var(
      --accordion-contained-button-hover-background-color,
      ${o(B)}
    );
    --ds-collapse-button-active-background-color: var(
      --ds-accordion-contained-button-active-background-color,
      ${o(L)}
    );
    --ds-collapse-title-color: var(
      --ds-accordion-filter-panel-title-color,
      ${o(F)}
    );
  }

  :host([appearance='filter--panel'][theme='dark']) ::slotted(reimagine-accordion-item) {
    --ds-collapse-button-background-color: var(
      --ds-accordion-contained-button-background-dark-color,
      ${o(I)}
    );
  }

  :host([appearance='contained--button']),
  :host([appearance='filter--panel']) {
    --ds-collapse-button-border-radius: var(--ds-app-radii-m, 0.5rem);
  }

  :host([appearance='contained--button']) ::slotted(reimagine-accordion-item[open]) {
    --ds-collapse-button-border-radius: var(--ds-app-radii-m, 0.5rem) var(--ds-app-radii-m, 0.5rem) 0 0;
    --ds-collapse-content-border-radius: 0 0 var(--ds-app-radii-m, 0.5rem) var(--ds-app-radii-m, 0.5rem);
  }

  :host([appearance='filter--panel']) ::slotted(reimagine-accordion-item[open]) {
    --ds-accordion-filter-panel-title-color: var(--ds-app-color-interactive-secondary-fg-active);
  }

  /* Accordion Child */
  :host([appearance='accordion--child']) ::slotted(reimagine-accordion-item) {
    --ds-accordion-item-indicator-display: none;
    --ds-collapse-button-justify-content: space-between;
    --ds-collapse-button-width: fit-content;
    --ds-collapse-button-padding: 0;
    --ds-collapse-button-margin: 1rem 0.25rem 1rem auto;
    --ds-collapse-content-padding: var(--ds-app-space-micro-l, 1.5rem) var(--ds-app-space-micro-m, 1rem);
  }

  /* Layout above accordion */
  .accordion__top-layout {
    margin-block-end: var(
      --ds-accordion-top-layout-margin-block-end,
      var(--ds-app-space-layout-stack-comfortable, 3rem)
    );
  }

  /* Collapse Controls */
  .accordion__controls {
    display: flex;
    justify-content: flex-start;
    gap: var(--ds-app-space-micro-xs, 0.5rem);
  }

  /* Accordion List */
  .accordion__list {
    display: flex;
    flex-direction: column;
    gap: var(--ds-accordion-gap, ${o(S)});
  }

  /* Accordion Product */
  :host([configuration='product']),
  :host([configuration='product--contained']) {
    display: block;
  }

  /* Accordion Dropdown */
  :host([configuration='dropdown-menu-list']) {
    --ds-menu-list-background: none;
    --ds-menu-list-box-shadow: none;
    --ds-accordion-item-indicator-display: none;
  }

  :host([configuration='dropdown-menu-list']) ::slotted(reimagine-accordion-item) {
    --ds-collapse-content-background-color: transparent;
  }

  :host([configuration='product']) ::slotted(reimagine-accordion-item[open]),
  :host([configuration='product--contained']) ::slotted(reimagine-accordion-item[open]) {
    height: auto;
  }

  :host([configuration='product']) reimagine-media {
    width: 100%;
    height: fit-content;
  }

  :host([configuration='product']) reimagine-media img {
    width: 100%;
    height: 100%;
  }

  :host([configuration='product']) reimagine-media picture,
  :host([configuration='product--contained']) reimagine-media picture {
    max-width: fit-content;
  }

  @media (min-width: ${o(v.md)}) {
    :host([configuration='product'][reverse]) .accordion__container,
    :host([configuration='product--contained'][reverse]) .accordion__container {
      flex-direction: row-reverse;
    }
  }

  :host([configuration='product']) .accordion__container {
    display: flex;
    gap: var(--ds-app-space-micro-4xl, 6rem);
  }

  :host([configuration='product']) .accordion__list,
  :host([configuration='product']) .accordion__list-container {
    flex: 1;
  }

  .accordion__product {
    --ds-media-height: 100%;
  }

  :host([configuration='product']) .accordion__product {
    flex: 2;
    display: flex;
  }

  /* Accordion Product Contained */
  :host([configuration='product--contained']) reimagine-media {
    --ds-media-padding-inline-start: var(--ds-app-space-micro-xs, 0.5rem);
    --ds-media-padding-inline-end: var(--ds-app-space-micro-xs, 0.5rem);
    --ds-media-padding-block-start: var(--ds-app-space-micro-xs, 0.5rem);
    --ds-media-padding-block-end: var(--ds-app-space-micro-xs, 0.5rem);

    width: var(
      --ds-accordion-product-contained-width,
      ${o(k)}
    );
  }

  :host([configuration^='product']) {
    --ds-media-width: 100%;
    --ds-media-height: 100%;
  }

  :host([configuration^='product']) reimagine-media img {
    border-radius: var(
      --ds-accordion-product-contained-image-border-radius,
      ${o(A)}
    );
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
  }

  :host([configuration='product--contained']) .accordion__container {
    display: flex;
    background-color: var(
      --ds-accordion-product-contained-background-color,
      ${o($)}
    );
    border-radius: var(--ds-app-radii-l, 1rem);
  }

  :host([configuration='product--contained']) .accordion__list,
  :host([configuration='product--contained']) .accordion__list-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: var(--ds-app-space-micro-3xl, 4.5rem);
  }

  :host([configuration='product--contained']) .accordion__list {
    padding: 0;
  }

  :host([configuration='product--contained']) .accordion__product {
    --ds-media-box-sizing: border-box;

    flex: 2;
  }

  :host([configuration='product']) ::slotted(reimagine-accordion-item),
  :host([configuration='product--contained']) ::slotted(reimagine-accordion-item) {
    min-width: 250px;
  }

  @media (forced-colors: active) {
    .accordion__container {
      background-color: canvas;
    }
  }
`,M=t`
  @media (max-width: ${o(y(v.md))}) {
    .accordion__container {
      flex-direction: column;
    }

    :host([configuration='product--contained']) .accordion__list,
    :host([configuration='product--contained']) .accordion__list-container {
      order: 2;
    }

    :host([configuration='product--contained']) .accordion__product {
      order: 1;
    }

    :host([configuration='product']) .accordion__container reimagine-media {
      display: none;
    }

    :host([configuration='product--contained']) .accordion__list-container {
      padding: var(--ds-app-space-micro-xl, 2rem);
    }

    :host([configuration='product--contained']) ::slotted([slot='accordion__button']) {
      order: 2;
    }

    :host([configuration^='product']) {
      --ds-media-asset-border-start-start-radius: var(--ds-app-radii-l, 1.5rem);
      --ds-media-asset-border-start-end-radius: var(--ds-app-radii-l, 1.5rem);
      --ds-media-asset-border-end-start-radius: var(--ds-app-radii-l, 1.5rem);
      --ds-media-asset-border-end-end-radius: var(--ds-app-radii-l, 1.5rem);
    }

    .accordion__top-layout:not(.accordion__top-layout-controls-only) {
      --ds-layout-row-gap: var(--ds-app-space-micro-xl, 1.5rem);
    }
  }

  @media (min-width: ${o(y(v.md))}) {
    :host([configuration='product--contained']) .accordion__product {
      margin: auto;
      max-width: 50vw;
    }
  }

  @media (min-width: ${o(v.md)}) {
    .accordion__controls {
      justify-content: flex-end;
    }
  }

  @media (min-width: ${o(v.md)}) {
    :host([configuration='product']) ::slotted(reimagine-accordion-item),
    :host([configuration='product--contained']) ::slotted(reimagine-accordion-item) {
      min-width: 272px;
    }
  }

  @media (min-width: ${o(v.lg)}) {
    :host([configuration='product']) ::slotted(reimagine-accordion-item),
    :host([configuration='product--contained']) ::slotted(reimagine-accordion-item) {
      min-width: 432px;
    }
  }
`;var R=Object.defineProperty,z=Object.getOwnPropertyDescriptor,q=(o,t,a,e)=>{for(var i,n=e>1?void 0:e?z(t,a):t,r=o.length-1;r>=0;r--)(i=o[r])&&(n=(e?i(t,a,n):i(n))||n);return e&&n&&R(t,a,n),n};const P="reimagine-accordion";let D=class extends x{constructor(){super(...arguments),this.groupManagement=!1,this.enableCollapseControls=!1,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._accordionContainerBeforeSlotEmpty=!0,this._accordionContainerAfterSlotEmpty=!0,this._topColFirstEmpty=!0,this._expandAllSlotEmpty=!0,this._collapseAllSlotEmpty=!0,this._topLayoutEmpty=!0,this._allExpanded=!1,this._allCollapsed=!0,this._accordionItemEvents=[],this._handleOnShow=o=>{var t;const a=null==o?void 0:o.target;a&&this.groupManagement&&(null==(t=this._accordionItems)||t.forEach(o=>{o!==a&&o.open&&(o.open=!1)}))},this._handleIconChange=o=>{const t=c(o.shadowRoot,"reimagine-icon");("add"===t.getAttribute("icon")||"subtract"===t.getAttribute("icon"))&&(t.style.transition="none",t.setAttribute("icon",o.open?"subtract":"add"))},this._handleControlState=()=>{const o=this._accordionItems;this._allExpanded=o.every(o=>o.open),this._allCollapsed=o.every(o=>!o.open)}}_handleBaseSlotChange(){var o;this._accordionItemEvents=[],(null==(o=this.parentElement)?void 0:o.getAttribute("configuration"))===g.dropdownMenuList&&(this.configuration=g.dropdownMenuList),this._accordionItems=[...this._defaultSlot].filter(o=>s(o,_)),this._accordionItems.forEach(o=>{this.appearance&&(o.appearance=this.appearance),this.configuration===g.dropdownMenuList&&(o.configuration=this.configuration),null==o||o.setAttribute("role","listitem"),this.groupManagement&&this._accordionItemEvents.push({el:o,type:h.show,handler:this._handleOnShow}),this._accordionItemEvents.push({el:o,type:h.shown,handler:this._handleControlState},{el:o,type:h.hidden,handler:this._handleControlState})}),d(this._accordionItemEvents),this._handleControlState(),this.configuration===g.dropdownMenuList&&!this.appearance&&this.setAttribute("appearance",f.containedChevron)}_handleSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length,this._topColFirstEmpty=0===this._topColFirst.length,this._expandAllSlotEmpty=0===this._expandAllSlot.length,this._collapseAllSlotEmpty=0===this._collapseAllSlot.length,this._topLayoutEmpty=this._topColFirstEmpty&&!this.enableCollapseControls,this._accordionContainerBeforeSlotEmpty=0===this._accordionContainerBeforeSlot.length,this._accordionContainerAfterSlotEmpty=0===this._accordionContainerAfterSlot.length}collapseAll(){this._accordionItems.forEach(o=>{o.open=!1,this._handleIconChange(o),o.addEventListener(l,()=>{var o,t;this._handleControlState(),null==(t=null==(o=this._expandAllSlot[0].shadowRoot)?void 0:o.querySelector("button"))||t.focus()},{once:!0})})}expandAll(){var o;null==(o=this._accordionItems)||o.forEach(o=>{o.open=!0,this._handleIconChange(o),o.addEventListener(l,()=>{var o,t;this._handleControlState(),null==(t=null==(o=this._collapseAllSlot[0].shadowRoot)?void 0:o.querySelector("button"))||t.focus()},{once:!0})})}_renderOptionalSlot(o,t){return r`
      <div part=${o} class=${o} style="${t?"display: none;":""}">
        <slot name=${o} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),this._accordionItemEvents.length>0&&d(this._accordionItemEvents);const o=p(this,"reimagine-media"),t=this.getAttribute("configuration"),a=this.aspectRatio||(t===g.productContained?"1-1":"4-3");o.forEach(o=>{o&&!o.hasAttribute("aspect-ratio")&&(null==o||o.setAttribute("aspect-ratio",a))})}updated(){const o=this._collapseAllSlot[0],t=this._expandAllSlot[0];this._allCollapsed?(null==o||o.setAttribute("disabled",""),null==o||o.setAttribute("aria-expanded","false")):(null==o||o.removeAttribute("disabled"),null==o||o.setAttribute("aria-expanded","true")),this._allExpanded?(null==t||t.setAttribute("disabled",""),null==t||t.setAttribute("aria-expanded","true")):(null==t||t.removeAttribute("disabled"),null==t||t.setAttribute("aria-expanded","false"))}disconnectedCallback(){m(this._accordionItemEvents),super.disconnectedCallback()}render(){const o=this.groupManagement||this._collapseAllSlotEmpty&&this._expandAllSlotEmpty?"display: none;":"";return r`
      ${this._renderOptionalSlot("accordion__first",this._firstSlotEmpty)}
      <reimagine-layout
        class="accordion__top-layout ${this._topColFirstEmpty?"accordion__top-layout-controls-only":""}"
        part="accordion__top-layout"
        configuration="2-col-even"
        style="${this._topLayoutEmpty?"display: none;":""}"
      >
        <reimagine-layout-column>
          <slot
            name="accordion__top-col-first"
            style="${this._topColFirstEmpty?"display: none;":""}"
            @slotchange="${this._handleSlotChange}"
          ></slot>
        </reimagine-layout-column>

        ${this.enableCollapseControls?r`
              <reimagine-layout-column>
                <reimagine-button-group
                  class="accordion__controls"
                  part="accordion__controls"
                  style="${o}"
                >
                  <slot
                    name="expand__all"
                    @click="${this.expandAll}"
                    @slotchange="${this._handleSlotChange}"
                    disabled="${this._allExpanded}"
                  ></slot>
                  <slot
                    name="collapse__all"
                    @click="${this.collapseAll}"
                    @slotchange="${this._handleSlotChange}"
                    disabled="${this._allCollapsed}"
                  ></slot>
                </reimagine-button-group>
              </reimagine-layout-column>
            `:""}
      </reimagine-layout>
      ${this._renderOptionalSlot("accordion__container-before",this._accordionContainerBeforeSlotEmpty)}
      <div class="accordion__container" part="accordion__container">
        <div class="accordion__list-container" part="accordion__list-container">
          <div role="list" class="accordion__list" part="accordion__list">
            <slot @slotchange="${this._handleBaseSlotChange}"></slot>
          </div>
          <slot name="accordion__button"></slot>
        </div>
        <div class="accordion__product" part="accordion__product"></div>
      </div>
      ${this._renderOptionalSlot("accordion__container-after",this._accordionContainerAfterSlotEmpty)}
      ${this._renderOptionalSlot("accordion__last",this._lastSlotEmpty)}
    `}};D.styles=[O,M],q([a({reflect:!0})],D.prototype,"theme",2),q([a({reflect:!0})],D.prototype,"appearance",2),q([a({reflect:!0})],D.prototype,"configuration",2),q([a({type:Boolean,attribute:"group-management"})],D.prototype,"groupManagement",2),q([a({type:Boolean,attribute:"enable-collapse-controls"})],D.prototype,"enableCollapseControls",2),q([a({reflect:!0,attribute:"aspect-ratio"})],D.prototype,"aspectRatio",2),q([e({slot:"accordion__first"})],D.prototype,"_firstSlot",2),q([e({slot:"accordion__last"})],D.prototype,"_lastSlot",2),q([e({slot:"accordion__container-before"})],D.prototype,"_accordionContainerBeforeSlot",2),q([e({slot:"accordion__container-after"})],D.prototype,"_accordionContainerAfterSlot",2),q([i({slot:"accordion__top-col-first"})],D.prototype,"_topColFirst",2),q([i({slot:"collapse__all"})],D.prototype,"_collapseAllSlot",2),q([i({slot:"expand__all"})],D.prototype,"_expandAllSlot",2),q([i()],D.prototype,"_defaultSlot",2),q([n()],D.prototype,"_firstSlotEmpty",2),q([n()],D.prototype,"_lastSlotEmpty",2),q([n()],D.prototype,"_accordionContainerBeforeSlotEmpty",2),q([n()],D.prototype,"_accordionContainerAfterSlotEmpty",2),q([n()],D.prototype,"_topColFirstEmpty",2),q([n()],D.prototype,"_expandAllSlotEmpty",2),q([n()],D.prototype,"_collapseAllSlotEmpty",2),q([n()],D.prototype,"_topLayoutEmpty",2),q([n()],D.prototype,"_accordionItems",2),q([n()],D.prototype,"_allExpanded",2),q([n()],D.prototype,"_allCollapsed",2),q([n()],D.prototype,"_accordionItemEvents",2),D=q([u(P)],D);export{D as Accordion,P as name};
