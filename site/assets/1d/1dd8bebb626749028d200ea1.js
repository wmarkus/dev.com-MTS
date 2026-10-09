import{r as t,i as o,c as e,e as r,f as s,b as i}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{R as a}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{d as n}from"/__mirror/assets/8b9fb2358bf27923e12447c9";const p="var(--ds-app-type-body-l-font-size, 1.25rem)",l="var(--ds-app-type-body-l-line-height, 1.75rem)",f="var(--ds-app-type-body-l-letter-spacing, -0.03em)",c="var(--ds-app-color-base-default-fg-heading, #0e1726)",d="var(--ds-app-type-label-m-font-weight, 600)",u="var(--ds-app-type-label-m-font-size, 0.875rem)",h="var(--ds-app-type-label-m-line-height, 1.25rem)",g="var(--ds-app-type-label-s-letter-spacing, 0)",v="var(--ds-app-color-base-default-fg-heading, #0e1726)",m="none",b=o`
  .footer-footnote {
    font-weight: var(
      --ds-footer-footnote-font-weight,
      ${t("var(--ds-app-type-body-l-font-weight, 400)")}
    );
    font-size: var(--ds-footer-footnote-font-size, ${t(p)});
    color: var(--ds-footer-footnote-color, ${t(c)});
    line-height: var(
      --ds-footer-footnote-line-height,
      ${t(l)}
    );
    letter-spacing: var(
      --ds-footer-footnote-letter-spacing,
      ${t(f)}
    );
  }

  .footer-attribution {
    font-weight: var(
      --ds-footer-attribution-font-weight,
      ${t(d)}
    );
    font-size: var(
      --ds-footer-attribution-font-size,
      ${t(u)}
    );
    line-height: var(
      --ds-footer-attribution-line-height,
      ${t(h)}
    );
    color: var(--ds-footer-attribution-color, ${t(v)});
    letter-spacing: var(
      --ds-footer-attribution-letter-spacing,
      ${t(g)}
    );
  }

  .footer-superscript {
    font-size: inherit; /* or 100%, prevents 'smaller' calculation */
  }

  ::slotted(a[slot='footer-superscript']) {
    text-decoration: var(
      --ds-statement-footer-superscript-text-style,
      ${t(m)}
    );
    color: var(
      --ds-statement-footer-superscript-color,
      ${t(v)}
    ) !important;
  }
`,y="footnote",S="attribution";var $=Object.defineProperty,_=Object.getOwnPropertyDescriptor,w=Object.getPrototypeOf,z=Reflect.get,j=(t,o,e,r)=>{for(var s,i=r>1?void 0:r?_(o,e):o,a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r?s(o,e,i):s(i))||i);return r&&i&&$(o,e,i),i};const C="reimagine-statement-footer";let O=class extends a{constructor(){super(...arguments),this.footerConfiguration=y,this._footerSuperscriptSlotEmpty=!0}_handleSlotChange(){this._footerSuperscriptSlotEmpty=0===this._footerSuperscriptSlot.length}_renderFootnote(){return i`
      <div part="footer-footnote" class="footer-footnote">
        <slot></slot>
      </div>
    `}_renderAttribution(){return i`
      <div part="footer-attribution" class="footer-attribution">
        <slot></slot>
        <sup
          part="footer-superscript"
          class="footer-superscript"
          style="${this._footerSuperscriptSlotEmpty?"display: none;":""}"
        >
          <slot name="footer-superscript" @slotchange=${this._handleSlotChange}></slot>
        </sup>
      </div>
    `}render(){return this.footerConfiguration===S?this._renderAttribution():this._renderFootnote()}};var x,E,F;O.styles=[...(x=O,E=O,F="styles",z(w(x),F,E)||[]),b],j([e({reflect:!0,attribute:"footer-configuration"})],O.prototype,"footerConfiguration",2),j([r({slot:"footer-superscript"})],O.prototype,"_footerSuperscriptSlot",2),j([s()],O.prototype,"_footerSuperscriptSlotEmpty",2),O=j([n(C)],O);export{O as StatementFooter,C as name};
