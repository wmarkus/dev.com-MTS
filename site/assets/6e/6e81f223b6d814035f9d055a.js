import{r as o,i as t,c as r,e as a,f as e,b as n}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i,a as s,d}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{SurfaceElement as c}from"/__mirror/assets/e09cf4eae8f90fbcbeb198a9";import{c as p}from"/__mirror/assets/a0679f491075e7b16b00f1b4";import{h as l,s as m,W as _,n as h,S as f,k as g,T as y,i as u}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{b,v}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{name as x}from"/__mirror/assets/1744c47504083b26d862e98f";import{name as S}from"/__mirror/assets/ea6784fd34f0ec31a8e3ea36";import{n as z}from"/__mirror/assets/5d2e1bf3d87581457a2b76db";import{B as $,j as E}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{n as j,a as k}from"/__mirror/assets/34233ee5ac8acdb3aa831b25";const w="0",A="grid",P="1 / 1",C="flex",L="column",T="flex-end",H="var(--ds-app-space-surface-comfortable, 2rem)",O="var(--ds-app-space-surface-comfortable, 2rem)",B="var(--ds-app-space-surface-comfortable, 2rem)",W="var(--ds-app-space-surface-comfortable, 2rem)",D="10",I=t`
  :host {
    display: var(--ds-card-promo-display, ${o("grid")});
    min-height: var(--ds-card-promo-min-height, ${o(w)});
    overflow: hidden;

    --ds-media-zindex: var(--ds-z-index-0, 0);
  }

  .card-promo__media,
  .card-promo__body {
    display: var(--ds-card-promo-media-display, ${o(A)});
    grid-area: var(
      --ds-card-promo-media-grid-area,
      ${o(P)}
    );
  }

  .card-promo__media {
    --ds-media-display: grid;
    --ds-media-width: 100%;
  }

  .card-promo__safe-area {
    height: var(--ds-card-promo-safe-area-height, 220px);
    display: var(--ds-card-promo-safe-area-display, block);
    padding: var(--ds-card-promo-safe-area-padding, var(--ds-app-space-micro-l));
    box-sizing: border-box;
  }

  .card-promo__body {
    display: var(--ds-card-promo-body-display, ${o(C)});
    flex-direction: var(
      --ds-card-promo-body-flex-direction,
      ${o(L)}
    );
    justify-content: var(
      --ds-card-promo-body-justify-content,
      ${o(T)}
    );
    padding-inline-start: var(
      --ds-card-promo-body-padding-inline-start,
      ${o(H)}
    );
    padding-inline-end: var(
      --ds-card-promo-body-padding-inline-end,
      ${o(O)}
    );
    padding-block-start: var(
      --ds-card-promo-body-padding-block-start,
      ${o(B)}
    );
    padding-block-end: var(
      --ds-card-promo-body-padding-block-end,
      ${o(W)}
    );
    z-index: var(--ds-card-promo-body-zindex, var(--ds-z-index-10, ${o(D)}));
  }

  .card-promo__content-secondary {
    margin-block-start: var(
      --ds-card-promo-content-secondary-margin-block-start,
      var(--ds-app-space-micro-xl, 2rem)
    );
  }

  :host(:not([configuration='vertical'])) ::slotted([slot='card-promo__content-secondary']) {
    justify-content: center;
  }

  :host([configuration^='horizontal']) .card-promo__body {
    justify-content: center;
  }

  :host([configuration='horizontal']) {
    --ds-card-promo-min-height: 330px;
  }

  :host([configuration='horizontal']) .card-promo__body {
    --ds-card-promo-body-padding-inline-start: var(--ds-app-space-surface-relaxed, 4.5rem);
    --ds-card-promo-body-padding-inline-end: var(--ds-app-space-surface-relaxed, 4.5rem);
    --ds-card-promo-body-padding-block-start: var(--ds-app-space-surface-relaxed, 4.5rem);
    --ds-card-promo-body-padding-block-end: var(--ds-app-space-surface-relaxed, 4.5rem);
  }

  :host([configuration='horizontal']) .card-promo__content-container,
  :host([configuration='horizontal']) .card-promo__content,
  :host([configuration='horizontal']) .card-promo__content-primary,
  :host([configuration='horizontal']) .card-promo__content-secondary {
    margin-inline-start: var(--ds-app-space-micro-4xl, 6rem);
    margin-inline-end: var(--ds-app-space-micro-4xl, 6rem);
  }

  :host([configuration='horizontal--slim']) .card-promo__content-container,
  :host([configuration='horizontal--slim']) .card-promo__content,
  :host([configuration='horizontal--slim']) .card-promo__content-primary {
    display: flex;
    flex-direction: column;
  }

  :host([configuration='horizontal--slim']) .card-promo__content-container,
  :host([configuration='horizontal--slim']) .card-promo__content {
    justify-content: flex-start;
    align-items: flex-start;
  }

  :host([configuration='horizontal--slim']) .card-promo__content {
    gap: var(--ds-app-space-micro-s, 0.75rem);
  }

  :host([configuration='horizontal--slim']) .card-promo__content-leading {
    display: flex;
    align-self: flex-start;
  }

  :host([configuration='horizontal--slim']) .card-promo__content-primary {
    gap: var(--ds-app-space-micro-2xs, 0.25rem);
  }

  :host([configuration='horizontal--slim']) .card-promo__content-secondary {
    display: block;
    width: 100%;
  }

  :host([configuration='horizontal--slim']) ::slotted([slot='card-promo__content-secondary']) {
    justify-content: flex-start;
  }

  .card-promo__content-primary {
    --ds-text-block-content-color: var(--ds-app-color-base-default-fg-heading, #0e1726);

    color: var(--ds-app-color-base-default-fg-heading, #0e1726);
  }

  ::slotted([slot='card-promo__content-primary-text']) {
    font-size: var(
      --ds-card-promo-content-primary-text-font-size,
      ${o(l.fontSize)}
    );
    font-weight: var(--ds-card-promo-primary-text-font-weight, 500);
    line-height: var(
      --ds-card-promo-content-primary-text-line-height,
      ${o(l.lineHeight)}
    );
  }

  ::slotted([slot='card-promo__content-secondary-text']) {
    font-size: var(
      --ds-card-promo-content-secondary-text-font-size,
      ${o(m.fontSize)}
    );
    font-weight: var(
      --ds-card-promo-content-secondary-text-font-weight,
      ${o(m.fontWeight)}
    );
    line-height: var(
      --ds-card-promo-content-secondary-text-line-height,
      ${o(m.lineHeight)}
    );
    color: var(--ds-app-color-base-default-fg-body, #17253d);
  }

  ::slotted([slot='card-promo__content-footnote']) {
    font-size: var(
      --ds-card-promo-content-footnote-text-font-size,
      ${o(_.fontSize)}
    );
    font-weight: var(
      --ds-card-promo-content-footnote-text-font-weight,
      ${o(_.fontWeight)}
    );
    line-height: var(
      --ds-card-promo-content-footnote-text-line-height,
      ${o(_.lineHeight)}
    );
    color: var(--ds-app-color-base-default-fg-body, #17253d);
  }

  ::slotted([slot='card-promo__content-bottom']) {
    font-size: var(
      --ds-card-promo-content-bottom-text-font-size,
      ${o(h.fontSize)}
    );
    font-weight: var(
      --ds-card-promo-content-bottom-text-font-weight,
      ${o(h.fontWeight)}
    );
    line-height: var(
      --ds-card-promo-content-bottom-text-line-height,
      ${o(h.lineHeight)}
    );
    color: var(--ds-app-color-base-default-fg-body, #17253d);
  }

  :host(:not([configuration='horizontal--slim'])) .card-promo__media {
    --ds-card-promo-media-grid-area: 1 / 1 / -1 / auto;
  }

  :host(:not([configuration='horizontal--slim'])) .card-promo__first {
    grid-area: card-promo__first;
  }

  :host(:not([configuration='horizontal--slim'])) .card-promo__last {
    grid-area: card-promo__last;
  }

  :host(:not([configuration='horizontal--slim'])) .card-promo__safe-area {
    grid-area: card-promo__safe-area;
  }

  :host(:not([configuration='horizontal--slim'])) .card-promo__body {
    grid-area: card-promo__body;
  }

  :host(:not([configuration='horizontal--slim'])) {
    grid-template-areas:
      'card-promo__first'
      'card-promo__safe-area'
      'card-promo__body'
      'card-promo__last';
  }

  :host([configuration='vertical']):has(.card-promo__last[style*='display: none']) .card-promo__body {
    grid-row: 3/-1;
  }
`,q=t`
  @media (max-width: ${o(b(v.md))}) {
    :host([configuration='horizontal']) .card-promo__body {
      --ds-card-promo-body-padding-inline-start: var(--ds-app-space-surface-relaxed, 2rem);
      --ds-card-promo-body-padding-inline-end: var(--ds-app-space-surface-relaxed, 2rem);
      --ds-card-promo-body-padding-block-start: var(--ds-app-space-surface-comfortable, 1rem);
      --ds-card-promo-body-padding-block-end: var(--ds-app-space-micro-3xl, 3rem);
    }
  }

  @media (min-width: ${o(v.md)}) {
    :host([configuration='horizontal']) .card-promo__safe-area {
      --ds-card-promo-safe-area-display: none;
    }

    :host([configuration='horizontal']) .card-promo__body {
      --ds-card-promo-body-padding-block-start: var(--ds-app-space-layout-stack-roomy, 4.5rem);
    }

    :host([configuration='horizontal--slim']) .card-promo__content-container {
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
    }

    :host([configuration='horizontal--slim']) .card-promo__content {
      flex-direction: row;
    }

    :host([configuration='horizontal--slim']) .card-promo__content-leading {
      align-self: center;
    }

    :host([configuration='horizontal--slim']) .card-promo__content-secondary {
      width: auto;

      --ds-card-promo-content-secondary-margin-block-start: 0;
    }
  }
`,F="vertical",G="horizontal--slim";var J=Object.defineProperty,K=Object.getOwnPropertyDescriptor,M=(o,t,r,a)=>{for(var e,n=a>1?void 0:a?K(t,r):t,i=o.length-1;i>=0;i--)(e=o[i])&&(n=(a?e(t,r,n):e(n))||n);return a&&n&&J(t,r,n),n};const N="reimagine-card-promo";let Q=class extends c{constructor(){super(),this.configuration=F,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._contentPrimarySlotEmpty=!0,this._contentSecondarySlotEmpty=!0,this._contentLeadingSlotEmpty=!0,this.surface=f.media}_handleSlotChange(o){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length,this._contentPrimarySlotEmpty=0===this._contentPrimarySlot.length,this._contentSecondarySlotEmpty=0===this._contentSecondarySlot.length,this._contentLeadingSlotEmpty=0===this._contentLeadingSlot.length;const t=o.target.getAttribute("name");"card-promo__content-primary"===t&&!this._contentPrimarySlotEmpty&&this._updateTextBlockAttributes(),"card-promo__content-secondary"===t&&!this._contentSecondarySlotEmpty&&this._updateButtonAttributes(),"card-promo__content-leading"===t&&!this._contentLeadingSlotEmpty&&this.configuration===G&&this._updateIconAttributes()}_renderOptionalSlot(o,t){return n`
      <div part=${o} class=${o} style="${t?"display: none;":""}">
        <slot name=${o} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_updateButtonAttributes(){const o=o=>{o.hasAttribute("size")||o.setAttribute("size",$.medium),o.hasAttribute("shape")||o.setAttribute("shape",E.rounded)};this._contentSecondarySlot.forEach(t=>{const r=t;let a=[];i(r,S)&&(a=Array.from(s(r,z)),(t=>{t.forEach(t=>{o(t)})})(a)),i(r,z)&&o(r)})}_updateTextBlockAttributes(){this._contentPrimarySlot.forEach(o=>{const t=o;i(t,x)&&(t.hasAttribute("configuration")||t.setAttribute("configuration",g.default),t.hasAttribute("size")||t.setAttribute("size",y["size-s"]),!t.hasAttribute("alignment")&&this.configuration!==F&&t.setAttribute("alignment",u.center))})}_updateIconAttributes(){this._contentLeadingSlot.forEach(o=>{const t=o;i(t,j)&&!t.hasAttribute("size")&&t.setAttribute("size",k.xlarge)})}renderHorizontalSlimTemplate(){return n`
      <div part="card-promo__media" class="card-promo__media">
        <slot name="card-promo__media" @slotchange=${this._handleSlotChange}></slot>
      </div>
      <div part="card-promo__body" class="card-promo__body">
        <div part="card-promo__content-container" class="card-promo__content-container">
          <div part="card-promo__content" class="card-promo__content">
            <div part="card-promo__content-leading" class="card-promo__content-leading">
              <slot name="card-promo__content-leading" @slotchange=${this._handleSlotChange}></slot>
            </div>

            <div part="card-promo__content-primary" class="card-promo__content-primary">
              <div part="card-promo__content-top" class="card-promo__content-top">
                <slot name="card-promo__content-primary-text"></slot>
                <slot name="card-promo__content-secondary-text"></slot>
                <sup>
                  <slot name="card-promo__content-footnote"></slot>
                </sup>
              </div>

              <div part="card-promo__content-bottom" class="card-promo__content-bottom">
                <slot name="card-promo__content-bottom"></slot>
              </div>
            </div>
          </div>

          <div part="card-promo__content-secondary" class="card-promo__content-secondary">
            <slot name="card-promo__content-secondary" @slotchange=${this._handleSlotChange}></slot>
          </div>
        </div>
      </div>
    `}renderDefaultTemplate(){return n`
      <div part="card-promo__media" class="card-promo__media">
        <slot name="card-promo__media" @slotchange=${this._handleSlotChange}></slot>
      </div>
      <div part="card-promo__safe-area" class="card-promo__safe-area"></div>
      <div part="card-promo__body" class="card-promo__body">
        <div part="card-promo__content-primary" class="card-promo__content-primary">
          <slot name="card-promo__content-primary" @slotchange=${this._handleSlotChange}></slot>
        </div>
        <div
          part="card-promo__content-secondary"
          class="card-promo__content-secondary"
          style="${this._contentSecondarySlotEmpty?"display: none;":""}"
        >
          <slot name="card-promo__content-secondary" @slotchange=${this._handleSlotChange}></slot>
        </div>
      </div>
    `}render(){return n`
      ${this._renderOptionalSlot("card-promo__first",this._firstSlotEmpty)}
      ${this.configuration===G?this.renderHorizontalSlimTemplate():this.renderDefaultTemplate()}
      ${this._renderOptionalSlot("card-promo__last",this._lastSlotEmpty)}
    `}};Q.styles=[p,I,q],M([r({reflect:!0})],Q.prototype,"theme",2),M([r({reflect:!0})],Q.prototype,"configuration",2),M([r({type:String,reflect:!0,attribute:"column-span"})],Q.prototype,"columnSpan",2),M([a({slot:"card-promo__first"})],Q.prototype,"_firstSlot",2),M([a({slot:"card-promo__last"})],Q.prototype,"_lastSlot",2),M([a({slot:"card-promo__content-primary"})],Q.prototype,"_contentPrimarySlot",2),M([a({slot:"card-promo__content-secondary"})],Q.prototype,"_contentSecondarySlot",2),M([a({slot:"card-promo__content-leading"})],Q.prototype,"_contentLeadingSlot",2),M([e()],Q.prototype,"_firstSlotEmpty",2),M([e()],Q.prototype,"_lastSlotEmpty",2),M([e()],Q.prototype,"_contentPrimarySlotEmpty",2),M([e()],Q.prototype,"_contentSecondarySlotEmpty",2),M([e()],Q.prototype,"_contentLeadingSlotEmpty",2),Q=M([d(N)],Q);export{Q as CardPromo,N as name};
