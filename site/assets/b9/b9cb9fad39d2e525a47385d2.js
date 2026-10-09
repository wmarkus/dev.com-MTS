import{i as o,r as t,e,f as a,c as l,h as i,b as n}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i as r,s,d as c}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{b as p,c as d,H as g,h as m}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{b as h,v as y}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{name as b}from"/__mirror/assets/9bce10b1f8f8949b4fd224b8";import{n as u}from"/__mirror/assets/b261b011546c5001df09e043";import{name as k}from"/__mirror/assets/a5942143ce4ae137089d14d5";import{B as _,e as f}from"/__mirror/assets/4230c2711e37b2e85105da0e";const S=o`
  :host {
    --ds-heading-block-heading-text-word-break: break-word;
  }

  :host([configuration='hero']) {
    --ds-ui-shell-padding-block-start: var(--ds-app-space-layout-inset-vertical-cozy, 4.5rem);
    --ds-ui-shell-padding-block-end: var(--ds-app-space-layout-inset-vertical-cozy, 4.5rem);
  }

  .eyebrow,
  .primary-body,
  .optional-body,
  .footer {
    --ds-layout-column-display: flex;
    --ds-layout-column-flex-direction: column;
    --ds-layout-column-align-items: center;
  }

  .eyebrow {
    margin-block-end: var(--ds-app-space-micro-l, 1.5rem);
  }

  .primary-body {
    margin-block-end: var(--ds-app-space-layout-stack-comfortable, 3rem);
  }

  :host([configuration='hero']) .optional-body {
    margin-block-end: var(--ds-app-space-layout-stack-comfortable, 3rem);
  }

  .base.supportive-fade,
  .base.neutral-fade,
  .base.neutral-color {
    --ds-heading-block-content-text-color: var(--ds-app-color-base-alt1-fg-body, #17253d);
  }

  .base.supportive-color {
    --ds-heading-block-content-text-color: var(--ds-app-color-base-alt2-fg-body, #3e143f);
  }

  .base.special-color {
    --ds-heading-block-content-text-color: var(--ds-app-color-base-special-fg-body, #3e143f);
  }
`,B=o`
  @media (max-width: ${t(h(y.md))}) {
    ::slotted([slot='link_bar']) {
      width: 100%;
    }
  }
`,v="default",E="hero";var x=Object.defineProperty,$=Object.getOwnPropertyDescriptor,j=Object.getPrototypeOf,H=Reflect.get,w=(o,t,e,a)=>{for(var l,i=a>1?void 0:a?$(t,e):t,n=o.length-1;n>=0;n--)(l=o[n])&&(i=(a?l(t,e,i):l(i))||i);return a&&i&&x(t,e,i),i};const C="reimagine-statement-banner";let z=class extends p{constructor(){super(),this._headingBlockSlotEmpty=!0,this._badgeSlotEmpty=!0,this._optionalHeadingBlockSlotEmpty=!0,this._linkBarSlotSlotEmpty=!0,this.configuration=v,this.headerLayoutConfiguration||(this.headerLayoutConfiguration=d.col1boxed)}_badgeSlotChange(){if(this._badgeSlotEmpty=0===this._badgeSlot.length,this._badgeSlotEmpty)return;const o=this._badgeSlot.find(o=>r(o,b)),t={shape:f.oval,size:_.l};o&&s(o,t)}_headingBlockSlotChange(){if(this._headingBlockSlotEmpty=0===this._headingBlockSlot.length,this._headingBlockSlotEmpty)return;const o=this._headingBlockSlot.find(o=>r(o,u)),t={alignment:m.center,size:g["size-3xl"]};o&&s(o,t)}_optionalHeadingBlockSlotChange(){if(this._optionalHeadingBlockSlotEmpty=0===this._optionalHeadingBlockSlot.length,this._optionalHeadingBlockSlotEmpty)return;const o=this._optionalHeadingBlockSlot.find(o=>r(o,u)),t={alignment:m.center};o&&s(o,t)}_linkBarSlotChange(){this._linkBarSlotSlotEmpty=0===this._linkBarSlot.length,!this._linkBarSlotSlotEmpty&&this._linkBarSlot.find(o=>r(o,k))}_renderBlade(){const o={base:!0,[this.background||"_"]:!!this.background},t=this.configuration===E,e=t?d.col1staged:d.col1boxed,a=t?d.col1staged:d.col1focus;return n`
      <reimagine-container part=${"base"} class="${i(o)}">
        <reimagine-layout
          configuration=${d.col1focus}
          part="eyebrow"
          class="eyebrow"
          style="${this.toggleDisplay(this._badgeSlotEmpty)}"
        >
          <reimagine-layout-column>
            <slot name="badge" @slotchange=${this._badgeSlotChange}></slot>
          </reimagine-layout-column>
        </reimagine-layout>

        <reimagine-layout
          configuration=${e}
          part="primary-body"
          class="primary-body"
        >
          <reimagine-layout-column>
            <slot
              name="primary_heading_block"
              @slotchange=${this._headingBlockSlotChange}
              style="${this.toggleDisplay(this._headingBlockSlotEmpty)}"
            ></slot>
          </reimagine-layout-column>
        </reimagine-layout>

        <reimagine-layout
          configuration=${a}
          part="optional-body"
          class="optional-body"
        >
          <reimagine-layout-column>
            <slot
              name="optional_heading_block"
              @slotchange=${this._optionalHeadingBlockSlotChange}
              style="${this.toggleDisplay(this._optionalHeadingBlockSlotEmpty)}"
            ></slot>
          </reimagine-layout-column>
        </reimagine-layout>

        <reimagine-layout
          configuration=${d.col1even}
          part="footer"
          class="footer"
        >
          <reimagine-layout-column>
            <slot
              name="link_bar"
              @slotchange=${this._linkBarSlotChange}
              style="${this.configuration===E?this.toggleDisplay(this._linkBarSlotSlotEmpty):"display: none;"}"
            ></slot>
          </reimagine-layout-column>
        </reimagine-layout>
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var D,O,P;z.styles=[(D=z,O=z,P="styles",H(j(D),P,O)||[]),S,B].flat(),w([e({slot:"badge"})],z.prototype,"_badgeSlot",2),w([e({slot:"primary_heading_block"})],z.prototype,"_headingBlockSlot",2),w([e({slot:"optional_heading_block"})],z.prototype,"_optionalHeadingBlockSlot",2),w([e({slot:"link_bar"})],z.prototype,"_linkBarSlot",2),w([a()],z.prototype,"_headingBlockSlotEmpty",2),w([a()],z.prototype,"_badgeSlotEmpty",2),w([a()],z.prototype,"_optionalHeadingBlockSlotEmpty",2),w([a()],z.prototype,"_linkBarSlotSlotEmpty",2),w([l({reflect:!0})],z.prototype,"configuration",2),z=w([c(C)],z);export{z as StatementBanner,C as name};
