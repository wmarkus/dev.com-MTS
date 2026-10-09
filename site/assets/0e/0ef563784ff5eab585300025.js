import{r as t,i as e,c as a,e as i,g as o,f as r,b as s}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i as n,d}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{T as l}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{o as c,h as p,S as h,T as v,k as g}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{b as m,v as f}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{SurfaceElement as y}from"/__mirror/assets/e09cf4eae8f90fbcbeb198a9";import{c as u}from"/__mirror/assets/a0679f491075e7b16b00f1b4";import{name as S}from"/__mirror/assets/1744c47504083b26d862e98f";const _="flex",$="column",x="relative",b="100%",E="400px",k="flex",w="column",D="space-between",j="var(--ds-app-space-micro-xl, 2rem)",z="var(--ds-app-space-surface-inset-comfortable, 1.5rem)",C="var(--ds-app-space-surface-inset-comfortable, 1.5rem)",F="1 0 0",L="flex",O="column",A="var(--ds-app-space-micro-xl, 2rem)",H="flex",B="column",T="var(--ds-app-space-micro-l, 1.5rem)",M="flex",W="space-between",G="flex-start",P="var(--ds-app-space-micro-xs, 0.5rem)",q="flex",I="column",J="var(--ds-app-space-micro-l, 1.5rem)",K="flex",N="column",Q="var(--ds-app-space-micro-l, 1.5rem)",R="var(--ds-app-space-micro-2xs, 0.25rem)",U="var(--ds-app-color-base-default-fg-body, #3a4c56)",V={headingMargin:"0",headingColor:"var(--ds-app-color-base-default-fg-heading, #0e1726)",headingFontFamily:p.fontFamily,headingFontWeight:p.fontWeight,headingFontSize:p.fontSize,headingLineHeight:p.lineHeight,headingLetterSpacing:p.letterSpacing},X="flex",Y="column",Z="var(--ds-app-space-micro-m, 1rem)",tt=e`
  :host {
    display: var(--ds-card-event-display, ${t(_)});
    flex-direction: var(--ds-card-event-flex-direction, ${t($)});
    position: var(--ds-card-event-position, ${t(x)});
    width: var(--ds-card-event-width, ${t(b)});

    --ds-card-base-overflow: hidden;
    --ds-surface-border-radius: var(--ds-app-radii-l, 1.5rem);
  }

  :host(:not([configuration='details'])) {
    min-height: var(--ds-card-event-min-height, ${t(E)});
  }

  :host([configuration='details']) {
    min-height: var(--ds-card-event-details-min-height, auto);
  }

  .content {
    display: var(
      --ds-card-event-content-display,
      ${t(k)}
    );
    flex-direction: var(
      --ds-card-event-content-flex-direction,
      ${t(w)}
    );
    justify-content: var(
      --ds-card-event-content-justify-content,
      ${t(D)}
    );
    gap: var(--ds-card-event-content-gap, ${t(j)});
    padding-block: var(
      --ds-card-event-content-padding-block,
      ${t(z)}
    );
    padding-inline: var(
      --ds-card-event-content-padding-inline,
      ${t(C)}
    );
  }

  :host([with-gradient]) .content {
    background-image: var(
      --ds-card-event-overlay-gradient,
      ${t("linear-gradient(166deg, var(--ds-card-event-overlay-stop1, var(--ds-comp-color-card-patterns-event-card-overlay-stop1, rgba(255, 255, 255, 0))) 79%, var(--ds-card-event-overlay-stop2, var(--ds-comp-color-card-patterns-event-card-overlay-stop2, var(--ds-color-brilliant-blue-600, #006dc1))) 96%)")}
    );
  }

  .top {
    display: var(--ds-card-event-top-display, ${t(L)});
    flex-direction: var(
      --ds-card-event-top-flex-direction,
      ${t(O)}
    );
    gap: var(--ds-card-event-top-gap, ${t(A)});
  }

  .content-group {
    display: var(
      --ds-card-event-content-group-display,
      ${t(H)}
    );
    flex-direction: var(
      --ds-card-event-content-group-flex-direction,
      ${t(B)}
    );
    gap: var(
      --ds-card-event-content-group-gap,
      ${t(T)}
    );
  }

  :host(:not([configuration='details'])) .content-group {
    --ds-card-event-content-group-gap: var(--ds-app-space-micro-xs, 0.5rem);
  }

  :host(:not([configuration='details'])) .content {
    --ds-card-event-content-gap: 0;
    flex: var(--ds-card-event-content-flex, ${t(F)});
    min-block-size: 0;
  }

  .header {
    display: var(--ds-card-event-header-display, ${t(M)});
    justify-content: var(
      --ds-card-event-header-justify-content,
      ${t(W)}
    );
    align-items: var(
      --ds-card-event-header-align-items,
      ${t(G)}
    );
    gap: var(--ds-card-event-header-gap, ${t(P)});
    width: 100%;
  }

  .share {
    --ds-icon-color: var(--ds-app-color-interactive-secondary-fg-default);

    display: flex;
    flex-shrink: 0;
  }

  .body {
    display: var(--ds-card-event-body-display, ${t(q)});
    flex-direction: var(
      --ds-card-event-body-flex-direction,
      ${t(I)}
    );
    gap: var(--ds-card-event-body-gap, ${t(J)});

    --ds-text-block-content-font-size: ${t(c.fontSize)};
    --ds-text-block-content-line-height: ${t(c.lineHeight)};
  }

  .additional-details {
    display: var(
      --ds-card-event-additional-details-display,
      ${t(X)}
    );
    flex-direction: var(
      --ds-card-event-additional-details-flex-direction,
      ${t(Y)}
    );
    gap: var(
      --ds-card-event-additional-details-gap,
      ${t(Z)}
    );

    --ds-text-block-content-font-size: ${t(c.fontSize)};
    --ds-text-block-content-line-height: ${t(c.lineHeight)};
  }

  .bottom {
    display: var(--ds-card-event-bottom-display, ${t(K)});
    flex-direction: var(
      --ds-card-event-bottom-flex-direction,
      ${t(N)}
    );
    gap: var(--ds-card-event-bottom-gap, ${t(Q)});
  }

  .event-details {
    display: flex;
    flex-direction: column;
    row-gap: var(
      --ds-card-event-event-details-row-gap,
      ${t(R)}
    );
    color: var(
      --ds-card-event-event-details-color,
      ${t(U)}
    );
  }

  :host ::slotted([slot='heading']) {
    margin: var(--ds-card-event-heading-margin, ${t(V.headingMargin)});
    color: var(--ds-card-event-heading-color, ${t(V.headingColor)});
    font-family: var(
      --ds-card-event-heading-font-family,
      ${t(V.headingFontFamily)}
    );
    font-weight: var(
      --ds-card-event-heading-font-weight,
      ${t(V.headingFontWeight)}
    );
    font-size: var(
      --ds-card-event-heading-font-size,
      ${t(V.headingFontSize)}
    );
    line-height: var(
      --ds-card-event-heading-line-height,
      ${t(V.headingLineHeight)}
    );
    letter-spacing: var(
      --ds-card-event-heading-letter-spacing,
      ${t(V.headingLetterSpacing)}
    );
  }

  .footer {
    display: flex;
    flex-direction: column;
  }
`,et=e`
  @media (max-width: ${t(m(f.md))}) {
    :host ::slotted(reimagine-button[slot='footer']) {
      display: grid;
      width: 100%;
    }

    :host ::slotted(reimagine-button-group[slot='footer']) {
      --ds-button-group-flex-direction: column;
      --ds-button-group-width: 100%;
    }
  }
`;var at=Object.defineProperty,it=Object.getOwnPropertyDescriptor,ot=(t,e,a,i)=>{for(var o,r=i>1?void 0:i?it(e,a):e,s=t.length-1;s>=0;s--)(o=t[s])&&(r=(i?o(e,a,r):o(r))||r);return i&&r&&at(e,a,r),r};const rt="reimagine-card-event";let st=class extends y{constructor(){super(),this.withGradient=!1,this._tagSlotEmpty=!0,this._shareSlotEmpty=!0,this._headingSlotEmpty=!0,this._eventDetailsSlotEmpty=!0,this._footerSlotEmpty=!0,this._additionalDetailsSlotEmpty=!0,this._headerEmpty=!0,this._hasExplicitSurface=!1,this.surface=h.solidBorder,this.themeLightSurface=h.solidBorder,this.themeDarkSurface=h.glass}_updateSurface(){this._hasExplicitSurface||(this.theme===l.light&&this.themeLightSurface?this.surface=this.themeLightSurface:this.theme===l.dark&&this.themeDarkSurface&&(this.surface=this.themeDarkSurface))}_setTextBlockAttributes(){[...this._contentSlot,...this._additionalDetailsElements].filter(t=>t instanceof HTMLElement&&n(t,S)).forEach(t=>{t.hasAttribute("size")||t.setAttribute("size",v["size-3xs"]),t.hasAttribute("configuration")||t.setAttribute("configuration",g.default)})}_handleSlotChange(){this._tagSlotEmpty=0===this._tagSlot.length,this._shareSlotEmpty=0===this._shareSlot.length,this._headingSlotEmpty=0===this._headingSlot.length,this._eventDetailsSlotEmpty=0===this._eventDetailsSlot.length,this._footerSlotEmpty=0===this._footerSlot.length,this._additionalDetailsSlotEmpty=0===this._additionalDetailsSlot.length,this._headerEmpty=this._tagSlotEmpty&&this._shareSlotEmpty,this._setTextBlockAttributes()}_renderOptionalSlot(t,e){return s`
      <div part=${t} class="${t}" style="${e?"display: none;":""}">
        <slot name=${t} @slotchange=${this._handleSlotChange}></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),this._hasExplicitSurface=this.hasAttribute("surface")}updated(t){super.updated(t),t.has("theme")&&this._updateSurface()}render(){return s`
      <div part="content" class="content">
        <div part="top" class="top">
          <div part="content-group" class="content-group">
            <div
              part="header"
              class="header"
              style="${this._headerEmpty?"display: none;":""}"
            >
              <slot name="tag" @slotchange=${this._handleSlotChange}></slot>
              <div
                part="share"
                class="share"
                style="${this._shareSlotEmpty?"display: none;":""}"
              >
                <slot name="share" @slotchange=${this._handleSlotChange}></slot>
              </div>
            </div>
            ${this._renderOptionalSlot("heading",this._headingSlotEmpty)}
            <div part="body" class="body">
              <slot @slotchange=${this._handleSlotChange}></slot>
            </div>
          </div>
          ${this._renderOptionalSlot("additional-details",this._additionalDetailsSlotEmpty)}
        </div>
        <div part="bottom" class="bottom">
          ${this._renderOptionalSlot("event-details",this._eventDetailsSlotEmpty)}
          ${this._renderOptionalSlot("footer",this._footerSlotEmpty)}
        </div>
      </div>
    `}};st.styles=[u,tt,et],ot([a({reflect:!0})],st.prototype,"configuration",2),ot([a({type:Boolean,reflect:!0,attribute:"with-gradient"})],st.prototype,"withGradient",2),ot([i({slot:"tag"})],st.prototype,"_tagSlot",2),ot([i({slot:"share"})],st.prototype,"_shareSlot",2),ot([i({slot:"heading"})],st.prototype,"_headingSlot",2),ot([i({slot:"event-details"})],st.prototype,"_eventDetailsSlot",2),ot([i({slot:"footer"})],st.prototype,"_footerSlot",2),ot([i({slot:"additional-details"})],st.prototype,"_additionalDetailsSlot",2),ot([o({slot:"additional-details"})],st.prototype,"_additionalDetailsElements",2),ot([o()],st.prototype,"_contentSlot",2),ot([r()],st.prototype,"_tagSlotEmpty",2),ot([r()],st.prototype,"_shareSlotEmpty",2),ot([r()],st.prototype,"_headingSlotEmpty",2),ot([r()],st.prototype,"_eventDetailsSlotEmpty",2),ot([r()],st.prototype,"_footerSlotEmpty",2),ot([r()],st.prototype,"_additionalDetailsSlotEmpty",2),ot([r()],st.prototype,"_headerEmpty",2),st=ot([d(rt)],st);export{st as CardEvent,rt as name};
