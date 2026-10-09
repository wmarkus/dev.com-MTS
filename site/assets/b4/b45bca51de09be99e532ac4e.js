import{r as e,i as t,c as a,e as s,f as l,b as i}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as r}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{T as d}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{s as o,r as n,S as p}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{b as c,v as h}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{SurfaceElement as g}from"/__mirror/assets/e09cf4eae8f90fbcbeb198a9";const m="flex",f="row",u="var(--ds-app-space-micro-2xl, 2rem)",v="var(--ds-app-space-micro-l, 1.5rem)",y="var(--ds-app-space-micro-l, 1.5rem)",b="var(--ds-app-space-micro-l, 1.5rem)",$="100%",S="space-between",x="var(--ds-app-color-base-default-fg-heading, #0e1726)",_="var(--ds-app-color-base-default-fg-body, #17253d)",k="var(--ds-app-space-micro-2xl, 3rem)",w="column",j=t`
  :host {
    --ds-surface-box-shadow: var(
      --ds-elevation-level-2,
      0px 2px 4px rgba(0, 0, 0, 0.14) 0px 0px 2px rgba(0, 0, 0, 0.12)
    );
    --ds-surface-solid-border-box-shadow: var(
      --ds-elevation-level-2,
      0px 2px 4px rgba(0, 0, 0, 0.14) 0px 0px 2px rgba(0, 0, 0, 0.12)
    );
    --ds-surface-border-radius: var(
      --ds-card-plan-detail-radius,
      ${e("var(--ds-app-radii-l, 1.5rem)")}
    );

    display: var(--ds-card-plan-detail-display, ${e(m)});
    flex-direction: var(
      --ds-card-plan-detail-flex-direction,
      ${e(f)}
    );
    gap: var(--ds-card-plan-detail-gap, ${e(u)});
    padding-inline: var(
      --ds-card-plan-detail-padding-inline,
      ${e(y)}
    );
    padding-block: var(
      --ds-card-plan-detail-padding-block,
      ${e(b)}
    );
    height: var(--ds-card-plan-detail-height, ${e($)});
    justify-content: var(
      --ds-card-plan-detail-justify-content,
      ${e(S)}
    );
  }

  .sku {
    flex: 0 0
      calc(
        35% - var(
            --ds-card-plan-detail-content-column-gap,
            ${e(k)}
          ) /
          2
      );
  }

  .content {
    display: var(--ds-card-plan-detail-content-display, ${e(m)});
    flex-direction: var(
      --ds-card-plan-detail-content-flex-direction,
      ${e(w)}
    );
    row-gap: var(--ds-card-plan-detail-content-row-gap, ${e(v)});
    flex-basis: calc(
      63% - var(
          --ds-card-plan-detail-content-column-gap,
          ${e(k)}
        ) /
        2
    );
  }

  ::slotted([slot='subtitle']) {
    font-weight: var(
      --ds-card-plan-detail-subtitle-font-weight,
      ${e(o.fontWeight)}
    );

    font-size: var(
      --ds-card-plan-detail-subtitle-font-size,
      ${e(o.fontSize)}
    );
    line-height: var(
      --ds-card-plan-detail-subtitle-line-height,
      ${e(o.lineHeight)}
    );
    letter-spacing: var(
      --ds-card-plan-detail-subtitle-letter-spacing,
      ${e(o.letterSpacing)}
    );

    --ds-app-type-heading-s-line-height: var(
      --ds-card-plan-detail-subtitle-line-height,
      ${e(o.lineHeight)}
    );
    --ds-app-type-heading-s-font-size: var(
      --ds-card-plan-detail-subtitle-font-size,
      ${e(o.fontSize)}
    );

    color: var(--ds-card-plan-detail-subtitle-color, ${e(x)});
  }

  .body-copy {
    font-weight: var(
      --ds-card-plan-detail-body-copy-font-weight,
      ${e(n.fontWeight)}
    );
    font-size: var(
      --ds-card-plan-detail-body-copy-font-size,
      ${e(n.fontSize)}
    );
    line-height: var(
      --ds-card-plan-detail-body-copy-line-height,
      ${e(n.lineHeight)}
    );
    color: var(--ds-card-plan-detail-body-copy-color, ${e(_)});
  }

  .collapse {
    --ds-collapse-button-padding: var(
      --ds-card-plan-detail-collapse-heading-button-padding,
      ${e("0 0 var(--ds-app-space-micro-m, 1rem) 0")}
    );
    --ds-collapse-content-padding: var(
      --ds-card-plan-detail-collapse-content-padding,
      ${e("0")}
    );
  }
`,z=t`
  @media (max-width: ${e(c(h.md))}) {
    :host {
      flex-direction: column;
    }
  }
`,C={solidBorder:p.solidBorder,glass:p.glass};var E=Object.defineProperty,D=Object.getOwnPropertyDescriptor,O=(e,t,a,s)=>{for(var l,i=s>1?void 0:s?D(t,a):t,r=e.length-1;r>=0;r--)(l=e[r])&&(i=(s?l(t,a,i):l(i))||i);return s&&i&&E(t,a,i),i};const B="reimagine-card-plan-detail";let H=class extends g{constructor(){super(),this._checklistSlotEmpty=!0,this._collapseSlotEmpty=!0,this.themeLightSurface=C.solidBorder,this.themeDarkSurface=C.glass,this.theme===d.dark?this.surface=C.glass:this.surface=C.solidBorder;const e=this.closest("html"),t=this.closest("body");this.theme!==d.light&&(e&&this.isDarkTheme(e)||t&&this.isDarkTheme(t))&&(this.surface=C.glass)}_handleSlotChange(){this._checklistSlotEmpty=0===this._checklistSlot.length,this._collapseSlotEmpty=0===this._collapseSlot.length}_updateSurface(){this.theme===d.dark?this.surface=this.themeDarkSurface:this.surface=this.themeLightSurface}_renderOptionalSlot(e,t){return i`
      <div part=${e} class=${e} style="${t?"display: none;":""}">
        <slot name=${e} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_renderCollapseSlot(e,t){return i`
      ${t?i``:i`<reimagine-divider></reimagine-divider>`}
      <div part=${e} class=${e} style="${t?"display: none;":""}">
        <slot name=${e} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}render(){return i`
      <slot class="sku" part="sku" name="sku" @slotchange=${this._handleSlotChange}></slot>
      <div class="content" part="content">
        <slot
          class="subtitle"
          part="subtitle"
          name="subtitle"
          @slotchange=${this._handleSlotChange}
        ></slot>
        ${this._renderOptionalSlot("checklist",this._checklistSlotEmpty)}
        <slot
          class="body-copy"
          part="body-copy"
          name="body-copy"
          @slotchange=${this._handleSlotChange}
        ></slot>
        ${this._renderCollapseSlot("collapse",this._collapseSlotEmpty)}
      </div>
    `}updated(e){super.updated(e),e.has("theme")&&this._updateSurface()}};H.styles=[j,z],O([a({reflect:!0})],H.prototype,"theme",2),O([s({slot:"checklist"})],H.prototype,"_checklistSlot",2),O([s({slot:"collapse"})],H.prototype,"_collapseSlot",2),O([l()],H.prototype,"_checklistSlotEmpty",2),O([l()],H.prototype,"_collapseSlotEmpty",2),H=O([r(B)],H);export{H as CardPlanDetail,B as name};
