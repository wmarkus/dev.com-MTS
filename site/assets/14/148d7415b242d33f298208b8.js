import{r as t,i as e,c as i,g as a,e as o,f as s,b as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i as d,d as l}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{a as n}from"/__mirror/assets/daab3f96e18c70a4751d1a7b";import{v as p}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{T as m,k as c,D as g}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{name as h}from"/__mirror/assets/1744c47504083b26d862e98f";import{Divider as f}from"/__mirror/assets/5f924eec6274a2d611fc1ea0";import{R as x}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";const v={gap:n.m.value,dividerGap:n.s.value,largeGap:n["4xl"].value,largeBelowGap:n.l.value,mediaWidth:"240px",textWidth:"432px"},u=e`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--ds-article-gap, var(--ds-app-space-micro-m, ${t(v.gap)}));
  }

  .text-with-divider {
    display: flex;
    flex-direction: column;
    gap: var(
      --ds-article-divider-gap,
      var(--ds-app-space-micro-s, ${t(v.dividerGap)})
    );
  }

  /* Figma: content-to-link gap is a static 24px at all viewports + eyebrow date treatment */
  ::slotted(reimagine-text-block) {
    --ds-text-block-gap: var(--ds-space-l, 1.5rem);
    --ds-text-block-body-gap: var(--ds-space-l, 1.5rem);
    --ds-text-block-eyebrow-date-color: var(--ds-app-color-base-default-fg-body, #3a4c56);
    --ds-text-block-eyebrow-date-opacity: 1;
  }

  /* Large adds body copy: heading-to-body tightens to 4px; content-to-link stays 24px */
  :host([configuration='large']) ::slotted(reimagine-text-block) {
    --ds-text-block-gap: var(--ds-app-space-micro-2xs, 0.25rem);
  }

  ::slotted(reimagine-media) {
    --ds-media-asset-border-start-start-radius: var(--ds-app-radii-m, 1rem);
    --ds-media-asset-border-end-start-radius: var(--ds-app-radii-m, 1rem);
    --ds-media-asset-border-end-end-radius: var(--ds-app-radii-m, 1rem);
    --ds-media-asset-border-start-end-radius: var(--ds-app-radii-m, 1rem);
    --ds-media-display: block;
  }

  /* Divider is only shown at the small size */
  :host(:not([configuration='small'])) ::slotted(reimagine-divider) {
    display: none;
  }

  /* Small applies a small bottom padding per Figma */
  :host([configuration='small']) {
    padding-block-end: var(
      --ds-article-padding-block-end,
      var(--ds-app-space-micro-s, ${t(v.dividerGap)})
    );
  }

  /* Large / Text Below is stacked with a larger container gap */
  :host([configuration='large'][text-position='below']) {
    gap: var(
      --ds-article-large-below-gap,
      var(--ds-app-space-micro-l, ${t(v.largeBelowGap)})
    );
  }

  :host([configuration='small']) .media {
    width: var(--ds-article-media-width, inherit);
  }
`,b=e`
  /* Medium viewport */
  @media (min-width: ${t(p.md)}) {
    :host {
      align-items: flex-start;
    }

    .text-with-divider {
      flex-grow: 1;
    }

    /* Small — Text Below: stacked column, children fill width for a full-width divider */
    :host([configuration='small'][text-position='below']) {
      align-items: stretch;
    }

    /* Small — Text Right (default) & Text Left: media and text side-by-side */
    :host([configuration='small']:not([text-position='below'])) {
      flex-direction: row;
    }

    :host([configuration='small'][text-position='left']) {
      flex-direction: row-reverse;
      justify-content: flex-end;
    }

    :host([configuration='small']:not([text-position='below'])) .media {
      width: var(--ds-article-media-width, ${t(v.mediaWidth)});
      flex-shrink: 0;
    }

    :host([configuration='small']:not([text-position='below'])) .text-with-divider {
      gap: var(--ds-article-divider-gap, var(--ds-app-space-micro-m, ${t(v.gap)}));
    }

    /* Large — Text Right (default): media fills, fixed-width text column, wide gap */
    :host([configuration='large']:not([text-position='below'])) {
      flex-direction: row;
      gap: var(
        --ds-article-large-gap,
        var(--ds-app-space-micro-4xl, ${t(v.largeGap)})
      );
    }

    :host([configuration='large']:not([text-position='below'])) .media {
      flex: 1 0 0;
      min-width: 0;
    }

    :host([configuration='large']:not([text-position='below'])) .text-with-divider {
      flex: 0 0 auto;
      width: var(--ds-article-text-width, ${t(v.textWidth)});
    }
  }
`,y="medium",w="right";var S=Object.defineProperty,_=Object.getOwnPropertyDescriptor,k=(t,e,i,a)=>{for(var o,s=a>1?void 0:a?_(e,i):e,r=t.length-1;r>=0;r--)(o=t[r])&&(s=(a?o(e,i,s):o(s))||s);return a&&s&&S(e,i,s),s};const $="reimagine-article";let E=class extends x{constructor(){super(...arguments),this.configuration=y,this.textPosition=w,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._mediaSlotEmpty=!0}get _divider(){return(this._assignedDivider??[]).filter(t=>t instanceof f)}_handleSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length,this._mediaSlotEmpty=0===this._mediaSlot.length}_textBlockSlotChanged(t){t.target.assignedNodes().filter(t=>t instanceof HTMLElement&&d(t,h)).forEach(t=>{t.hasAttribute("size")||t.setAttribute("size",m["size-2xs"]),t.hasAttribute("configuration")||t.setAttribute("configuration",c.default)})}_dividerSlotChanged(){this._divider.forEach(t=>{t.hasAttribute("size")||t.setAttribute("size",g.s)})}_renderOptionalSlot(t,e){return r`
      <div part=${t} class=${t} style="${e?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}render(){return r`
      ${this._renderOptionalSlot("first",this._firstSlotEmpty)}
      ${this._renderOptionalSlot("media",this._mediaSlotEmpty)}
      <div part="text-with-divider" class="text-with-divider">
        <slot name="divider" @slotchange=${this._dividerSlotChanged}></slot>
        <slot @slotchange=${this._textBlockSlotChanged}></slot>
      </div>
      ${this._renderOptionalSlot("last",this._lastSlotEmpty)}
    `}};E.styles=[u,b],k([i({reflect:!0,type:String})],E.prototype,"configuration",2),k([i({reflect:!0,type:String,attribute:"text-position"})],E.prototype,"textPosition",2),k([a({slot:"divider"})],E.prototype,"_assignedDivider",2),k([o({slot:"first"})],E.prototype,"_firstSlot",2),k([o({slot:"last"})],E.prototype,"_lastSlot",2),k([o({slot:"media"})],E.prototype,"_mediaSlot",2),k([s()],E.prototype,"_firstSlotEmpty",2),k([s()],E.prototype,"_lastSlotEmpty",2),k([s()],E.prototype,"_mediaSlotEmpty",2),E=k([l($)],E);export{E as Article,$ as name};
