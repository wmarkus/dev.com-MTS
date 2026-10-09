import{r as t,i as e,e as s,f as o,c as a,b as i}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i as r,q as n,s as l,d}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{R as p}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{l as c,f as g,r as f,o as h,Z as y,e as _,_ as m,$,v,s as b,t as z,h as S,a0 as u}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{a as x}from"/__mirror/assets/5849ec5e150363c91281fb26";import{name as w}from"/__mirror/assets/d85c69aad3852816cbccc749";import{n as E,a as W}from"/__mirror/assets/53ebd49096a5d15936f4d45e";import{v as H,b as k}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";const j="var(--ds-app-space-micro-m, 1rem)",O="row",T="block",P="var(--ds-app-space-micro-3xs, 0.125rem)",D="none",C="relative",L="absolute",U="var(--ds-app-color-base-default-fg-body, #17253D)",R="var(--ds-app-color-base-default-fg-heading, #0E1726)",q="0.25rem",N="0.5rem",V="0.25rem",Z="flex",A="column",B="var(--ds-app-space-micro-2xs, 0.25rem)",F="baseline",G="var(--ds-app-color-base-default-fg-heading, #0E1726)",I="var(--ds-app-color-base-default-fg-body, #17253D)",J="48px",K="0",M="0.375rem",Q=e`
  :host {
    --ds-popover-trigger-button-padding: 0;
    --ds-indicator-height: 1.5rem;
    --ds-indicator-align-self: center;

    display: var(--ds-stat-display, ${t("flex")});
    flex-direction: var(--ds-stat-flex-direction, ${t(O)});
    gap: var(--ds-stat-gap, ${t(j)});
  }

  .stat__label {
    display: var(
      --ds-stat-footnote-parent-display,
      ${t(T)}
    );
    gap: var(--ds-stat-footnote-gap, ${t(P)});
    font-size: var(--ds-stat-label-font-size, ${t(c.fontSize)});
    font-weight: var(--ds-stat-label-font-weight, ${t(c.fontWeight)});
    line-height: var(--ds-stat-label-line-height, ${t(c.lineHeight)});
    color: var(
      --ds-stat-label-color,
      ${t(I)}
    );
  }

  .stat__label-footnote {
    font-size: inherit;
  }
  
  .stat__title-footnote {
    font-size: var(--ds-stat-title-footnote-font-size, inherit);
    font-weight: var(--ds-stat-title-footnote-font-weight, inherit);
    line-height: var(--ds-stat-title-footnote-line-height, inherit);
  }

  ::slotted(a[slot='stat__label-footnote']),
  ::slotted(a[slot='stat__title-footnote']) {
    text-decoration: var(
      --ds-stat-footnote-text-decoration,
      ${t(D)}
    );
  }

  ::slotted(a[slot='stat__label-footnote']) {
    color: var(
      --ds-stat-label-footnote-color,
      ${t(U)}
    ) !important;
  }

  ::slotted(a[slot='stat__title-footnote']) {
    color: var(
      --ds-stat-title-footnote-color,
      ${t(R)}
    ) !important;
  }

   /**
   * @deprecated Planned for deprecation in version 2.0.
   * The 'type' attribute styles below are retained for backward compatibility.
   * Use the 'configuration' attribute instead.
   */
  :host([type='large']) .stat__title-footnote {
    font-size: 40px;
  }

  .stat__body {
    display: var(--ds-stat-body-display, ${t(Z)});
    flex-direction: var(
      --ds-stat-body-flex-direction,
      ${t(A)}
    );
    gap: var(--ds-stat-body-gap, ${t(B)});
  }

  .stat__title-primary {
    display: flex;
    align-items: center;
    gap: var(--ds-app-space-micro-m, 1rem);
    color: var(
      --ds-stat-title-primary-color,
      ${t(G)}
    );
  }

  ::slotted(:is(h1, h2, h3, h4, h5, h6)[slot='stat__title-primary']) {
    font-size: var(
      --ds-stat-title-primary-font-size,
      ${t(g.fontSize)}
    ) !important;
    font-weight: var(
      --ds-stat-title-primary-font-weight,
      ${t(f.fontWeight)}
    ) !important;
    line-height: var(
      --ds-stat-title-primary-line-height,
      ${t(g.lineHeight)}
    ) !important;
  }

  .stat__title-secondary {
    display: var(
      --ds-stat-footnote-parent-display,
      ${t(T)}
    );
    gap: var(--ds-stat-footnote-gap, ${t(P)});
    font-size: var(--ds-stat-title-secondary-font-size, ${t(h.fontSize)});
    font-weight: var(
      --ds-stat-title-secondary-font-weight,
      ${t(f.fontWeight)}
    );
    line-height: var(
      --ds-stat-title-secondary-line-height,
      ${t(h.lineHeight)}
    );
    color: var(
      --ds-stat-title-secondary-color,
      ${t(G)}
    );
  }

  :host(:not([type^='large'])) .stat__title-secondary,
  :host(:not([type^='large'])) .stat__popover {
    margin-inline-start: calc(0.25rem + var(--ds-app-space-micro-m, 1rem));
  }

  /**
   * @deprecated Planned for deprecation in version 2.0.
   * The 'type' attribute styles below are retained for backward compatibility.
   * Use the 'configuration' attribute instead.
   */
  :host([type^='large']) {
    --ds-stat-flex-direction: column;
    --ds-stat-gap: var(--ds-app-space-micro-xs, 0.5rem);
  }

  :host([type^='large']) .stat__title-primary {
    --ds-stat-title-primary-font-size: ${t(y.fontSize)};
    --ds-stat-title-primary-font-weight: ${t(f.fontWeight)};
    --ds-stat-title-primary-line-height: ${t(y.lineHeight)};
    --ds-stat-title-primary-letter-spacing: ${t(y.letterSpacing)};
  }

  :host([type='large']) .stat__body {
    --ds-stat-body-flex-direction: row;
    --ds-stat-body-gap: var(--ds-app-space-micro-xs, 0.5rem);
    align-items: var(--ds-stat-body-align-items, ${t(F)});
  }

  :host([type='large']) .stat__title-secondary {
    --ds-stat-title-secondary-font-size: ${t(J)};
    --ds-stat-title-secondary-font-weight: ${t(f.fontWeight)};
    --ds-stat-title-secondary-line-height: ${t(_.lineHeight)};
    --ds-stat-title-secondary-letter-spacing: ${t(_.letterSpacing)};
    --ds-stat-title-secondary-color: ${t(G)};
  }

  :host([type='large--stacked']) .stat__title-secondary {
    --ds-stat-title-secondary-font-weight: ${t(c.fontWeight)};
    --ds-stat-title-secondary-color: ${t(G)};
  }

  /* common styles */
  :host([size]) {
    --ds-stat-gap: var(--ds-app-space-micro-xs, 0.5rem);
    --ds-stat-flex-direction: column;

    .stat__label {
      letter-spacing: var(
        --ds-stat-label-letter-spacing,
        ${t(c.letterSpacing)}
      );
    }

    .stat__title-primary {
      letter-spacing: var(
        --ds-stat-title-primary-letter-spacing,
        ${t(y.letterSpacing)}
      );
    }

    .stat__title-secondary {
      margin-inline-start: var(
        --ds-stat-title-secondary-margin-inline-start,
        ${t(K)}
      );
      padding-bottom: var(
        --ds-stat-title-secondary-padding-bottom,
        ${t(M)}
      );
      letter-spacing: var(
        --ds-stat-title-secondary-letter-spacing,
        ${t(_.letterSpacing)}
      );
    }

    .stat__label,
    .stat__title-secondary {
      --ds-stat-footnote-parent-display: flex;
      --ds-stat-footnote-gap: var(--ds-app-space-micro-3xs, 0.125rem);

      .stat__label-footnote,
      .stat__title-footnote {
        position: var(
          --ds-stat-footnote-parent-position,
          ${t(C)}
        );

        ::slotted([slot='stat__label-footnote']),
        ::slotted([slot='stat__title-footnote']) {
          position: var(
            --ds-stat-footnote-position,
            ${t(L)}
          );
        }

        ::slotted([slot='stat__label-footnote']) {
          bottom: var(
            --ds-stat-label-footnote-bottom,
            ${t(q)}
          );
        }
      }
    }
  }

  :host([size]:not([configuration])) {
    .stat__body {
      --ds-stat-body-flex-direction: row;

      align-items: var(
        --ds-stat-body-align-items,
        ${t(F)}
      );
    }

    ::slotted([slot='stat__title-footnote']) {
      bottom: var(
        --ds-stat-title-footnote-bottom,
        ${t(N)}
      );
    }
  }

  :host([configuration='stacked']) ::slotted([slot='stat__title-footnote']) {
    bottom: var(
      --ds-stat-title-footnote-bottom,
      ${t(V)}
    );
  }

  /* x-large size styles */
  :host([size='x-large']) {
    --ds-stat-title-primary-font-size: ${t(m.fontSize)};
    --ds-stat-title-primary-line-height: ${t(m.lineHeight)};
  }

  :host([size='x-large']:not([configuration='stacked'])) {
    --ds-stat-title-footnote-bottom: 1rem;

    .stat__body {
      --ds-stat-body-gap: var(--ds-app-space-micro-s, 0.75rem);
    }

    .stat__title-secondary {
      --ds-stat-title-secondary-font-size: ${t(_.fontSize)};
      --ds-stat-title-secondary-line-height: ${t(_.lineHeight)};
      --ds-stat-title-secondary-font-weight: ${t(_.fontWeight)};

      .stat__title-footnote {
        --ds-stat-title-footnote-font-size: ${t($.fontSize)};
        --ds-stat-title-footnote-font-weight: var(
          --ds-stat-title-secondary-footnote-font-weight,
          ${t($.fontWeight)}
        );
        --ds-stat-title-footnote-line-height: ${t($.lineHeight)};
      }
    }
  }

  :host([size='x-large'][configuration='stacked']) {
    --ds-stat-gap: var(--ds-app-space-micro-2xs, 0.25rem);

    .stat__body {
      --ds-stat-body-gap: var(--ds-app-space-micro-3xs, 0.125rem);
    }

    .stat__title-secondary {
      --ds-stat-title-secondary-font-size: ${t(v.fontSize)};
      --ds-stat-title-secondary-line-height: ${t(v.lineHeight)};
      --ds-stat-title-secondary-font-weight: ${t(v.fontWeight)};
      --ds-stat-title-secondary-letter-spacing: ${t(v.letterSpacing)};
    }
  }

  /* large size styles */
  :host([size='large']) {
    .stat__title-primary {
      --ds-stat-title-primary-font-weight: ${t(y.fontWeight)};
      --ds-stat-title-primary-font-size: ${t(y.fontSize)};
      --ds-stat-title-primary-line-height: ${t(y.lineHeight)};
    }
  }

  :host([size='large']:not([configuration])) {
    --ds-stat-body-gap: var(--ds-app-space-micro-xs, 0.5rem);
    --ds-stat-title-secondary-padding-bottom: 0.4375rem;

    .stat__title-secondary {
      --ds-stat-title-secondary-font-weight: ${t(g.fontWeight)};
      --ds-stat-title-secondary-font-size: ${t(g.fontSize)};
      --ds-stat-title-secondary-line-height: ${t(g.lineHeight)};
      --ds-stat-title-secondary-letter-spacing: ${t(g.letterSpacing)};

      .stat__title-footnote {
        --ds-stat-title-footnote-font-size: ${t($.fontSize)};
        --ds-stat-title-footnote-font-weight: var(
          --ds-stat-title-secondary-footnote-font-weight,
          ${t($.fontWeight)}
        );
        --ds-stat-title-footnote-line-height: ${t($.lineHeight)};
      }
    }
  }

  :host([size='large'][configuration='stacked']) {
    --ds-stat-body-gap: var(--ds-app-space-micro-3xs, 0.125rem);
  }

  :host([size='large'][configuration='stacked']),
  :host([size='medium'][configuration='stacked']) {
    .stat__title-secondary {
      --ds-stat-title-secondary-font-weight: ${t(b.fontWeight)};
      --ds-stat-title-secondary-font-size: ${t(b.fontSize)};
      --ds-stat-title-secondary-line-height: ${t(b.lineHeight)};
      --ds-stat-title-secondary-letter-spacing: ${t(b.letterSpacing)};
    }
  }

  /* medium size styles */
  :host([size='medium']) {
    .stat__title-primary {
      --ds-stat-title-primary-font-weight: ${t(z.fontWeight)};
      --ds-stat-title-primary-font-size: ${t(z.fontSize)};
      --ds-stat-title-primary-line-height: ${t(z.lineHeight)};
    }
  }

  :host([size='medium']:not([configuration])) {
    --ds-stat-body-gap: var(--ds-app-space-micro-xs, 0.5rem);

    .stat__title-secondary {
      --ds-stat-title-secondary-font-weight: ${t(S.fontWeight)};
      --ds-stat-title-secondary-font-size: ${t(S.fontSize)};
      --ds-stat-title-secondary-line-height: ${t(S.lineHeight)};
      --ds-stat-title-secondary-letter-spacing: ${t(S.letterSpacing)};

      .stat__title-footnote {
        --ds-stat-title-footnote-font-size: ${t(u.fontSize)};
        --ds-stat-title-footnote-font-weight: var(
          --ds-stat-title-secondary-footnote-font-weight,
          ${t(u.fontWeight)}
        );
        --ds-stat-title-footnote-line-height: ${t(u.lineHeight)};
      }
    }
  }

  /* small size styles */
  :host([size='small']) {
    --ds-stat-title-primary-font-weight: ${t(g.fontWeight)};
    --ds-stat-title-primary-font-size: ${t(g.fontSize)};
    --ds-stat-title-primary-line-height: ${t(g.lineHeight)};
    --ds-stat-title-primary-letter-spacing: ${t(g.letterSpacing)};
  }

  :host([size='small']:not([configuration])) {
    --ds-stat-title-secondary-padding-bottom: var(--ds-app-space-micro-3xs, 0.125rem);
    --ds-stat-title-secondary-font-weight: ${t(v.fontWeight)};
    --ds-stat-title-secondary-font-size: ${t(v.fontSize)};
    --ds-stat-title-secondary-line-height: ${t(v.lineHeight)};
    --ds-stat-title-secondary-letter-spacing: ${t(v.letterSpacing)};

    .stat__title-footnote {
      --ds-stat-title-footnote-font-size: ${t(u.fontSize)};
      --ds-stat-title-footnote-font-weight: var(
        --ds-stat-title-secondary-footnote-font-weight,
        ${t(u.fontWeight)}
      );
      --ds-stat-title-footnote-line-height: ${t(u.lineHeight)};
    }
  }

  :host([size='small'][configuration='stacked']) {
    --ds-stat-title-secondary-padding-bottom: 0.1875rem;
    --ds-stat-title-secondary-font-weight: ${t(c.fontWeight)};
    --ds-stat-title-secondary-font-size: ${t(c.fontSize)};
    --ds-stat-title-secondary-line-height: ${t(c.lineHeight)};
    --ds-stat-title-secondary-letter-spacing: 0;
  }
`,X=e`
  /**
   * @deprecated Planned for deprecation in version 2.0.
   * The 'type' attribute styles below are retained for backward compatibility.
   * Use the 'configuration' attribute instead.
   */
  @media (max-width: ${t(H.md)}) {
    :host([type='large']) .stat__title-footnote {
      font-size: 26px;
    }

    :host([type='large']) .stat__title-secondary {
      --ds-stat-title-secondary-font-size: 2rem;
    }
  }

  @media (min-width: ${t(H.md)}) and (max-width: ${t(k(H.lg))}) {
    :host([type='large']) .stat__title-footnote {
      font-size: 33px;
    }

    :host([type='large']) .stat__title-secondary {
      --ds-stat-title-secondary-font-size: 2.5rem;
    }
  }

  @media (max-width: ${t(H.sm)}) {
    :host([size]) {
      .stat__title-secondary {
        --ds-stat-title-secondary-padding-bottom: 0.1875rem;
      }
    }

    :host([size='x-large']:not([configuration])) {
      .stat__title-secondary {
        --ds-stat-title-secondary-padding-bottom: 0.125rem;
      }
    }

    :host([size='x-large'][configuration='stacked']),
    :host([size='large'][configuration='stacked']) {
      .stat__body {
        --ds-stat-body-gap: var(--ds-app-space-micro-2xs, 0.25rem);
      }
    }

    :host([size='large']:not([configuration])),
    :host([size='medium']:not([configuration])) {
      .stat__title-secondary .stat__title-footnote {
        font-weight: var(
          --ds-stat-title-secondary-footnote-font-weight,
          ${t(v.fontWeight)}
        );
      }
    }

    :host([size='small']:not([configuration])) {
      .stat__title-secondary {
        --ds-stat-title-secondary-padding-bottom: 0rem;
      }
    }
  }

  /* VP4 only: keep the label above the forced-colors text backplate without changing spacing. */
  @media (min-width: ${t(H.lg)}) and (forced-colors: active) {
    :host([size='x-large']) .stat__label {
      z-index: var(--ds-z-index-10, 10);
    }
  }
`;var Y=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,et=(t,e,s,o)=>{for(var a,i=o>1?void 0:o?tt(e,s):e,r=t.length-1;r>=0;r--)(a=t[r])&&(i=(o?a(e,s,i):a(i))||i);return o&&i&&Y(e,s,i),i};const st="reimagine-stat";let ot=class extends p{constructor(){super(...arguments),this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._labelSlotEmpty=!0,this._titleSecondarySlotEmpty=!0,this._popoverSlotEmpty=!0,this.headingLevel=3}_handleSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length,this._labelSlotEmpty=0===this._labelSlot.length,this._titleSecondarySlotEmpty=0===this._titleSecondarySlot.length,this._popoverSlotEmpty=0===this._popoverSlot.length}_renderOptionalSlot(t,e){return i`
      <div part=${t} class=${t} style="${e?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_renderDefaultTemplate(){return i`
      <div part="stat__body" class="stat__body">
        <div part="stat__title-primary" class="stat__title-primary">
          <reimagine-indicator
            configuration="${x.rounded}"
          ></reimagine-indicator>
          <slot name="stat__title-primary"></slot>
        </div>
        ${this._renderOptionalSlot("stat__title-secondary",this._titleSecondarySlotEmpty)}
        ${this._renderOptionalSlot("stat__popover",this._popoverSlotEmpty)}
      </div>
    `}_renderLargeTemplate(){return i`
      <div
        part="stat__label"
        class="stat__label"
        style="${this._labelSlotEmpty?"display: none;":""}"
      >
        <slot name="stat__label" @slotchange="${this._handleSlotChange}"></slot>
        <sup part="stat__label-footnote" class="stat__label-footnote">
          <slot name="stat__label-footnote"></slot>
        </sup>
      </div>
      <div part="stat__body" class="stat__body">
        <div part="stat__title-primary" class="stat__title-primary">
          <slot name="stat__title-primary"></slot>
        </div>
        <div
          part="stat__title-secondary"
          class="stat__title-secondary"
          style="${this._titleSecondarySlotEmpty?"display: none;":""}"
        >
          <slot name="stat__title-secondary" @slotchange="${this._handleSlotChange}"></slot>
          <sup part="stat__title-footnote" class="stat__title-footnote">
            <slot name="stat__title-footnote"></slot>
          </sup>
        </div>
      </div>
    `}_configurationRender(){return this.type||this.configuration||this.size?this._renderLargeTemplate():this._renderDefaultTemplate()}firstUpdated(){this._popoverSlot.length>0&&this._popoverSlot.forEach(t=>{if(r(t,w)){const e=n(t,E);e&&l(e,{"text-size":W.labelSmall},!0)}})}render(){return i`
      ${this._renderOptionalSlot("stat__first",this._firstSlotEmpty)}
      ${this._configurationRender()} ${this._renderOptionalSlot("stat__last",this._lastSlotEmpty)}
    `}};ot.styles=[Q,X],et([s({slot:"stat__first"})],ot.prototype,"_firstSlot",2),et([s({slot:"stat__last"})],ot.prototype,"_lastSlot",2),et([s({slot:"stat__label"})],ot.prototype,"_labelSlot",2),et([s({slot:"stat__title-secondary"})],ot.prototype,"_titleSecondarySlot",2),et([s({slot:"stat__popover"})],ot.prototype,"_popoverSlot",2),et([o()],ot.prototype,"_firstSlotEmpty",2),et([o()],ot.prototype,"_lastSlotEmpty",2),et([o()],ot.prototype,"_labelSlotEmpty",2),et([o()],ot.prototype,"_titleSecondarySlotEmpty",2),et([o()],ot.prototype,"_popoverSlotEmpty",2),et([a({reflect:!0})],ot.prototype,"type",2),et([a({type:Number,attribute:"heading-level",reflect:!0})],ot.prototype,"headingLevel",2),et([a({attribute:"size",reflect:!0})],ot.prototype,"size",2),et([a({attribute:"configuration",reflect:!0})],ot.prototype,"configuration",2),ot=et([d(st)],ot);export{ot as Stat,st as name};
