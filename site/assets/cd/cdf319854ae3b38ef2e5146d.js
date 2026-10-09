import{r as t,i as o,c as a,f as i,e,b as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{b as n,c as s}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{d as l}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{v as g}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{f as d}from"/__mirror/assets/daab3f96e18c70a4751d1a7b";const c="var(--ds-app-space-micro-3xl, 4.5rem)",p="0",u="relative",f="100%",h="10",m="flex",y="column",v="100%",_="0.5rem",S="absolute",$="block",b="100%",w="0",F="0",C="0",E="relative",x="10",L=o`
  :host {
    display: var(--ds-card-grid-staggered-display, ${t("block")});
    position: relative;
  }

  .staggered-card-grid-container {
    position: var(
      --ds-card-grid-staggered-container-position,
      ${t(u)}
    );
    height: var(
      --ds-card-grid-staggered-container-height,
      ${t(f)}
    );
    z-index: var(
      --ds-card-grid-staggered-container-z-index,
      var(--ds-z-index-10, ${t(h)})
    );
    margin-top: var(
      --ds-card-grid-staggered-container-margin-top,
      ${t(c)}
    );
    padding-inline: var(
      --ds-card-grid-staggered-container-padding-inline,
      ${t(p)}
    );
  }

  .floating-slot {
    position: var(
      --ds-card-grid-staggered-floating-slot-position,
      ${t(S)}
    );
  }

  .floating-slot.top-left-floating {
    top: 0;
    left: 0;
  }

  .floating-slot.top-right-floating {
    top: 0;
    right: 0;
  }

  .floating-slot.bottom-left-floating {
    bottom: 0;
    left: 0;
  }

  .floating-slot.bottom-right-floating {
    bottom: 0;
    right: 0;
  }

  :host ::slotted([slot^='column-']) {
    display: var(
      --ds-card-grid-staggered-column-display,
      ${t(m)}
    );
    flex-direction: var(
      --ds-card-grid-staggered-column-flex-direction,
      ${t(y)}
    );
    width: var(--ds-card-grid-staggered-column-width, ${t(v)});
  }

  :host([configuration='3-cards'][layout='1']),
  :host([configuration='3-cards'][layout='3']),
  :host([configuration='3-cards'][layout='5']) {
    --ds-card-grid-staggered-column-2-align-items: center;
    --ds-card-grid-staggered-column-2-flex-direction: initial;
  }

  :host([configuration='3-cards'][layout='2']),
  :host([configuration='3-cards'][layout='4']) {
    /* 2-1 formation: Set CSS variables for column styling */
    --ds-card-grid-staggered-column-2-align-items: center;
    --ds-card-grid-staggered-column-2-flex-direction: initial;
  }

  :host([configuration='3-cards'][layout='2']) reimagine-layout-column.staggered-column-1,
  :host([configuration='3-cards'][layout='4']) reimagine-layout-column.staggered-column-1 {
    align-items: var(--ds-card-grid-staggered-column-1-align-items, center);
    flex-direction: var(--ds-card-grid-staggered-column-1-flex-direction, initial);
  }

  :host([configuration='3-cards'][layout='1']) reimagine-layout-column.staggered-column-2,
  :host([configuration='3-cards'][layout='3']) reimagine-layout-column.staggered-column-2,
  :host([configuration='3-cards'][layout='5']) reimagine-layout-column.staggered-column-2 {
    align-items: var(--ds-card-grid-staggered-column-2-align-items, center);
    flex-direction: var(--ds-card-grid-staggered-column-2-flex-direction, initial);
  }

  reimagine-layout-column.staggered-column {
    display: var(
      --ds-card-grid-staggered-column-display,
      ${t(m)}
    );
    flex-direction: var(
      --ds-card-grid-staggered-column-flex-direction,
      ${t(y)}
    );
    row-gap: var(
      --ds-card-grid-staggered-column-gap,
      var(--ds-layout-column-gap, ${t(_)})
    );
  }

  /* Spacing wrapper styles for div elements */
  :host ::slotted(div.staggered-card-grid-spacing-wrapper) {
    display: var(--spacing-wrapper-display, ${t($)});
    width: var(--spacing-wrapper-width, ${t(b)});
    padding-top: var(
      --spacing-wrapper-padding-top,
      ${t(w)}
    );
    padding-inline-start: var(
      --spacing-wrapper-padding-inline-start,
      ${t(F)}
    );
    padding-inline-end: var(
      --spacing-wrapper-padding-inline-end,
      ${t(C)}
    );
  }

  /* UI Shell header z-index override; makes sure that header is above floating media */
  .ui-shell-header {
    --ds-container-position: var(
      --ds-card-grid-staggered-container-header-position,
      ${t(E)}
    );
    --ds-container-z-index: var(
      --ds-card-grid-staggered-container-header-z-index,
      var(--ds-z-index-10, ${t(x)})
    );
  }
`,R=o`
  /* VP3, VP4: Stagger spacing applies */
  @media (min-width: ${t(g.md)}) {
    /* 1st Column Gets top spacing */
    :host([configuration='2-cards'][layout='2'])
      ::slotted(div.staggered-card-grid-spacing-wrapper[slot='column-1']:first-of-type),
    :host([configuration='2-cards'][layout='4'])
      ::slotted(div.staggered-card-grid-spacing-wrapper[slot='column-1']:first-of-type),
    :host([configuration='3-cards'][layout='7'])
      ::slotted(div.staggered-card-grid-spacing-wrapper[slot='column-1']:first-of-type),
    :host([configuration='4-cards'][layout='2'])
      ::slotted(div.staggered-card-grid-spacing-wrapper[slot='column-1']:first-of-type),
    :host([configuration='4-cards'][layout='4'])
      ::slotted(div.staggered-card-grid-spacing-wrapper[slot='column-1']:first-of-type) {
      --spacing-wrapper-padding-top: ${d};
    }

    /* 2nd Column Gets top spacing */
    :host([configuration='2-cards'][layout='1'])
      ::slotted(div.staggered-card-grid-spacing-wrapper[slot='column-2']:nth-of-type(2)),
    :host([configuration='2-cards'][layout='3'])
      ::slotted(div.staggered-card-grid-spacing-wrapper[slot='column-2']:nth-of-type(2)),
    :host([configuration='3-cards'][layout='6'])
      ::slotted(div.staggered-card-grid-spacing-wrapper[slot='column-2']:nth-of-type(2)),
    :host([configuration='4-cards'][layout='1'])
      ::slotted(div.staggered-card-grid-spacing-wrapper[slot='column-2']:nth-of-type(3)),
    :host([configuration='4-cards'][layout='3'])
      ::slotted(div.staggered-card-grid-spacing-wrapper[slot='column-2']:nth-of-type(3)),
    :host([configuration='4-cards'][layout='5'])
      ::slotted(div.staggered-card-grid-spacing-wrapper[slot='column-2']:nth-of-type(3)) {
      --spacing-wrapper-padding-top: ${d};
    }

    /* 3rd Column Gets top spacing */
    :host([configuration='3-cards'][layout='7'])
      ::slotted(div.staggered-card-grid-spacing-wrapper[slot='column-3']:nth-of-type(3)) {
      --spacing-wrapper-padding-top: ${d};
    }

    /* Extra Spacing for Card 2, column 1, of 3-cards layout-5 */
    :host([configuration='3-cards'][layout='5'])
      ::slotted(div.staggered-card-grid-spacing-wrapper[slot='column-1']:nth-of-type(2)) {
      --spacing-wrapper-padding-inline-start: ${d};
    }

    /* Extra Spacing for Card 2, column 1, of 4-cards layout 5 */
    :host([configuration='4-cards'][layout='5'])
      ::slotted(div.staggered-card-grid-spacing-wrapper[slot='column-1']:nth-of-type(2)) {
      --spacing-wrapper-padding-inline-start: ${d};
    }

    /* Extra Spacing for Card 3, column 2, of 4-cards layout 5 */
    :host([configuration='4-cards'][layout='5'])
      ::slotted(div.staggered-card-grid-spacing-wrapper[slot='column-2']:nth-of-type(3)) {
      --spacing-wrapper-padding-inline-end: calc(${d} * 2);
    }
  }

  /* VP1, VP2, VP3: Hide floating media */
  .floating-slot {
    display: none;
  }

  /* VP4: Show floating media */
  @media (min-width: ${t(g.lg)}) {
    .floating-slot {
      display: block;
    }
  }
`;var P=Object.defineProperty,j=Object.getOwnPropertyDescriptor,z=Object.getPrototypeOf,D=Reflect.get,O=(t,o,a,i)=>{for(var e,r=i>1?void 0:i?j(o,a):o,n=t.length-1;n>=0;n--)(e=t[n])&&(r=(i?e(o,a,r):e(r))||r);return i&&r&&P(o,a,r),r};const V="reimagine-card-grid-staggered";let k=class extends n{constructor(){super(),this.configuration="2-cards",this.layout="1",this._topLeftFloatingSlotEmpty=!0,this._topRightFloatingSlotEmpty=!0,this._bottomLeftFloatingSlotEmpty=!0,this._bottomRightFloatingSlotEmpty=!0,this.headerLayoutConfiguration||(this.headerLayoutConfiguration=s.col1staged)}_getColumnCount(){switch(this.layout){case"1":case"2":case"3":case"4":case"5":default:return 2;case"6":case"7":return 3}}_getLayoutConfiguration(){switch(this.layout){case"1":case"2":default:return s.col2focus;case"3":case"4":case"5":return s.col2even;case"6":case"7":return s.col3Even}}_getCardDistribution(){const t=this.configuration,{layout:o}=this;if("2-cards"===t)return[1,2];if("3-cards"===t)switch(o){case"1":case"3":case"5":default:return[1,1,2];case"2":case"4":return[1,2,2];case"6":case"7":return[1,2,3]}return"4-cards"===t?[1,1,2,2]:[1]}_distributeCards(){const t=this._defaultSlotNodes.filter(t=>t.nodeType===Node.ELEMENT_NODE&&t.classList.contains("staggered-card-grid-spacing-wrapper")),o=this._getCardDistribution();t.forEach((t,a)=>{if(a<o.length){const i=o[a];t.setAttribute("slot",`column-${i}`)}})}_handleDefaultSlotChange(){this._distributeCards()}_handleFloatingSlotChange(){this._topLeftFloatingSlotEmpty=0===this._topLeftFloatingSlot.length,this._topRightFloatingSlotEmpty=0===this._topRightFloatingSlot.length,this._bottomLeftFloatingSlotEmpty=0===this._bottomLeftFloatingSlot.length,this._bottomRightFloatingSlotEmpty=0===this._bottomRightFloatingSlot.length}_renderColumns(){const t=this._getColumnCount(),o=[];for(let a=1;a<=t;a++)o.push(r`
        <reimagine-layout-column part="column-${a}" class="staggered-column staggered-column-${a}">
          <slot name="column-${a}"></slot>
        </reimagine-layout-column>
      `);return o}_renderFloatingSlots(){return r`
      <div
        part="top-left-floating"
        class="floating-slot top-left-floating"
        style=${this._topLeftFloatingSlotEmpty?"display: none;":""}
      >
        <slot name="top-left-floating-content" @slotchange=${this._handleFloatingSlotChange}></slot>
      </div>
      <div
        part="top-right-floating"
        class="floating-slot top-right-floating"
        style=${this._topRightFloatingSlotEmpty?"display: none;":""}
      >
        <slot
          name="top-right-floating-content"
          @slotchange=${this._handleFloatingSlotChange}
        ></slot>
      </div>
      <div
        part="bottom-left-floating"
        class="floating-slot bottom-left-floating"
        style=${this._bottomLeftFloatingSlotEmpty?"display: none;":""}
      >
        <slot
          name="bottom-left-floating-content"
          @slotchange=${this._handleFloatingSlotChange}
        ></slot>
      </div>
      <div
        part="bottom-right-floating"
        class="floating-slot bottom-right-floating"
        style=${this._bottomRightFloatingSlotEmpty?"display: none;":""}
      >
        <slot
          name="bottom-right-floating-content"
          @slotchange=${this._handleFloatingSlotChange}
        ></slot>
      </div>
    `}_renderBlade(){return r`
      <reimagine-container
        class="staggered-card-grid-container"
        part="staggered-card-grid-container"
      >
        <reimagine-layout
          configuration="${this._getLayoutConfiguration()}"
          density="${this.horizontalDensity}"
        >
          ${this._renderColumns()}
        </reimagine-layout>
      </reimagine-container>
      <div style="display: none;">
        <slot @slotchange=${this._handleDefaultSlotChange}></slot>
      </div>
      ${this._renderFloatingSlots()}
    `}updated(t){super.updated(t),(t.has("configuration")||t.has("layout"))&&this._distributeCards()}render(){return this.renderUiShell(this._renderBlade())}};var N,G,B;k.styles=[...(N=k,G=k,B="styles",D(z(N),B,G)||[]),L,R],O([a({reflect:!0})],k.prototype,"configuration",2),O([a({reflect:!0})],k.prototype,"layout",2),O([i()],k.prototype,"_topLeftFloatingSlotEmpty",2),O([i()],k.prototype,"_topRightFloatingSlotEmpty",2),O([i()],k.prototype,"_bottomLeftFloatingSlotEmpty",2),O([i()],k.prototype,"_bottomRightFloatingSlotEmpty",2),O([e({flatten:!0})],k.prototype,"_defaultSlotNodes",2),O([e({slot:"top-left-floating-content"})],k.prototype,"_topLeftFloatingSlot",2),O([e({slot:"top-right-floating-content"})],k.prototype,"_topRightFloatingSlot",2),O([e({slot:"bottom-left-floating-content"})],k.prototype,"_bottomLeftFloatingSlot",2),O([e({slot:"bottom-right-floating-content"})],k.prototype,"_bottomRightFloatingSlot",2),k=O([l(V)],k);export{k as CardGridStaggered,V as name};
