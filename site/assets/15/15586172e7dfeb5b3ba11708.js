import{r as t,i as e,c as a,e as i,f as r,b as s}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i as d,d as o}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{S as n,V as p,k as l,T as c}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{c as m,a as y}from"/__mirror/assets/837e94fcdaabee469909dbdc";import{v as h}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{SurfaceElement as b}from"/__mirror/assets/e09cf4eae8f90fbcbeb198a9";import{n as v}from"/__mirror/assets/bf0b3498e45fc20534cec8b1";import{M as g}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{name as u}from"/__mirror/assets/1744c47504083b26d862e98f";const S="flex",f="column",_="1",x="initial",$="initial",w="initial",k="var(--ds-app-space-micro-2xl, 3rem)",E="initial",j="initial",P="initial",A="initial",B="var(--ds-app-space-micro-xs, 0.5rem)",z="var(--ds-app-space-micro-xs, 0.5rem)",C="var(--ds-app-space-micro-xs, 0.5rem)",O="var(--ds-app-space-micro-xs, 0.5rem)",W="initial",D="initial",T=e`
  :host {
    /* Set :host property:values with default css variables names and values */
    display: var(--ds-card-split-display, ${t(S)});
    flex-direction: var(
      --ds-card-split-flex-direction,
      ${t(f)}
    );
    justify-content: var(
      --ds-card-split-justify-content,
      ${t($)}
    );
    position: var(--ds-card-split-position, ${t(x)});
    min-height: var(--ds-card-split-min-height, ${t(w)});
    margin-block-start: var(
      --ds-card-split-margin-block-start,
      ${t(E)}
    );
    margin-block-end: var(
      --ds-card-split-margin-block-end,
      ${t(j)}
    );
    margin-inline-start: var(
      --ds-card-split-margin-inline-start,
      ${t(P)}
    );
    margin-inline-end: var(
      --ds-card-split-margin-inline-end,
      ${t(A)}
    );

    --ds-surface-border-radius: var(--ds-app-radii-l, 1.5rem) !important;
    --ds-surface-box-shadow: var(
      --ds-elevation-level-2,
      0px 2px 4px rgba(0, 0, 0, 0.14) 0px 0px 2px rgba(0, 0, 0, 0.12)
    );
    --ds-surface-solid-border-box-shadow: var(
      --ds-elevation-level-2,
      0px 2px 4px rgba(0, 0, 0, 0.14) 0px 0px 2px rgba(0, 0, 0, 0.12)
    );
    --ds-badge-box-shadow: none;
  }

  ::slotted(reimagine-checklist) {
    --ds-surface-box-shadow: none;
  }

  :host([surface='transparent']) {
    --ds-surface-box-shadow: none;
  }

  .mediaWrapper {
    /* Styles for media and media section */
    display: var(--ds-card-split-media-display, ${t(S)});
    padding-inline-start: var(
      --ds-card-split-padding-inline-start,
      ${t(B)}
    );
    padding-inline-end: var(
      --ds-card-split-padding-inline-end,
      ${t(z)}
    );
    padding-block-start: var(
      --ds-card-split-padding-block-start,
      ${t(C)}
    );
    padding-block-end: var(
      --ds-card-split-padding-block-end,
      ${t(O)}
    );
    flex: var(--ds-card-split-flex, ${t(W)});
    align-items: center;
    width: var(--ds-card-split-width, ${t(D)});

    --ds-media-display: initial;
    --ds-media-width: 100%;
    --ds-media-height: 100%;
    --ds-media-asset-border-start-start-radius: var(--ds-app-radii-m, 1rem);
    --ds-media-asset-border-start-end-radius: var(--ds-app-radii-m, 1rem);
    --ds-media-asset-border-end-end-radius: var(--ds-app-radii-m, 1rem);
    --ds-media-asset-border-end-start-radius: var(--ds-app-radii-m, 1rem);
    --ds-media-asset-overflow: auto;
    --ds-media-object-fit: cover;
  }

  .media {
    flex: var(--ds-card-split-flex, ${t(_)});
    width: 100%;
    height: 100%;
  }

  .body {
    display: var(
      --ds-card-split-content-display,
      ${t(m.contentDisplay)}
    );
    position: var(
      --ds-card-split-content-position,
      ${t(m.contentPosition)}
    );
    bottom: var(--ds-card-split-content-bottom, ${t(m.contentBottom)});
    top: var(--ds-card-split-content-top, ${t(m.contentTop)});
    left: var(--ds-card-split-content-left, ${t(m.contentLeft)});
    flex: var(--ds-card-split-content-flex, ${t(_)});
    width: var(--ds-card-split-content-width, ${t(m.contentWidth)});
    z-index: var(
      --ds-card-split-content-z-index,
      var(--ds-z-index-auto, ${t(m.contentZIndex)})
    );
    padding-inline-start: var(
      --ds-card-split-content-padding-inline-start,
      ${t(m.contentPaddingInlineStart)}
    );
    padding-inline-end: var(
      --ds-card-split-content-padding-inline-end,
      ${t(m.contentPaddingInlineEnd)}
    );
    padding-block-start: var(
      --ds-card-split-content-padding-block-start,
      ${t(m.contentPaddingBlockStart)}
    );
    padding-block-end: var(
      --ds-card-split-content-padding-block-end,
      ${t(m.contentPaddingBlockEnd)}
    );
    box-sizing: var(
      --ds-card-split-content-box-sizing,
      ${t(m.contentBoxSizing)}
    );
  }

  .content {
    display: var(
      --ds-card-split-content-wrapper-display,
      ${t(y.contentWrapperDisplay)}
    );
    flex-direction: var(
      --ds-card-split-content-wrapper-flex-direction,
      ${t(y.contentWrapperFlexDirection)}
    );
    justify-content: var(
      --ds-card-split-content-wrapper-justify-content,
      ${t(y.contentWrapperJustifyContent)}
    );
    padding-inline-start: var(
      --ds-card-split-content-wrapper-padding-inline-start,
      var(--ds-app-space-surface-relaxed)
    );
    padding-inline-end: var(
      --ds-card-split-content-wrapper-padding-inline-end,
      var(--ds-app-space-surface-relaxed)
    );
    padding-block-start: var(
      --ds-card-split-content-wrapper-padding-block-start,
      var(--ds-app-space-surface-relaxed)
    );
    padding-block-end: var(
      --ds-card-split-content-wrapper-padding-block-end,
      var(--ds-app-space-surface-relaxed)
    );
  }

  .header,
  .body-primary,
  .body-secondary {
    margin-block-end: var(
      --ds-card-split-content-margin,
      ${t(k)}
    );
  }
`,L=e`
  @media (min-width: ${t(h.md)}) {
    :host {
      --ds-card-split-flex-direction: row;
      --ds-card-split-justify-content: space-between;
    }

    .mediaWrapper {
      --ds-card-split-padding-block-end: var(--ds-app-space-micro-xs, 0.5rem);
      --ds-card-split-flex: 1;
    }

    .body {
      --ds-card-split-content-display: flex;
    }

    .content {
      --ds-card-split-content-wrapper-justify-content: space-between;
    }
  }
`;var M=Object.defineProperty,I=Object.getOwnPropertyDescriptor,R=(t,e,a,i)=>{for(var r,s=i>1?void 0:i?I(e,a):e,d=t.length-1;d>=0;d--)(r=t[d])&&(s=(i?r(e,a,s):r(s))||s);return i&&s&&M(e,a,s),s};const F="reimagine-card-split",J="media",V="header",Z="body-primary",q="body-secondary",G="content-bottom";let H=class extends b{constructor(){super(),this.mediaLast=!1,this._mediaSlotEmpty=!0,this._headerSlotEmpty=!0,this._bodyPrimarySlotEmpty=!0,this._bodySecondarySlotEmpty=!0,this._bottomSlotEmpty=!0,this.surface=n.solidBorder,this._viewportResizeObserver=new p(this,{})}_handleSlotChange(t){this._mediaSlotEmpty=0===this._mediaSlot.length,this._headerSlotEmpty=0===this._headerSlot.length,this._bodyPrimarySlotEmpty=0===this._bodyPrimarySlot.length,this._bodySecondarySlotEmpty=0===this._bodySecondarySlot.length,this._bottomSlotEmpty=0===this._bottomSlot.length,this._updateSlotDefaultAttributes(t)}_updateSlotDefaultAttributes(t){const e=t.target.name;e===J&&!this._mediaSlotEmpty&&this._updateContentMediaAttributes(),e===V&&!this._headerSlotEmpty&&this._updateTextBlockAttributes(this._headerSlot),e===Z&&!this._bodyPrimarySlotEmpty&&this._updateTextBlockAttributes(this._bodyPrimarySlot),e===q&&!this._bodySecondarySlotEmpty&&this._updateTextBlockAttributes(this._bodySecondarySlot)}_updateContentMediaAttributes(){const t=this._mediaSlot.filter(t=>d(t,v));t.length>0&&t.forEach(t=>{t.hasAttribute("aspect-ratio")||t.setAttribute("aspect-ratio",g.ratio1to1)})}_updateTextBlockAttributes(t){const e=t.filter(t=>d(t,u));e.length>0&&e.forEach(t=>{d(t,u)&&(t.hasAttribute("configuration")||t.setAttribute("configuration",l.default),t.hasAttribute("size")||t.setAttribute("size",c["size-s"]))})}_renderOptionalSlot(t,e){return s`
      <div part=${t} class=${t} style="${e?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_renderSlot(t){return s`
      <div part=${t} class=${t}>
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_renderBodyContent(){return s`
      <div part="body" class="body">
        <div part="content" class="content">
          <div part="content-top" class="content-top">
            ${this._renderSlot(V)}
            ${this._renderOptionalSlot(Z,this._bodyPrimarySlotEmpty)}
            ${this._renderOptionalSlot(q,this._bodySecondarySlotEmpty)}
          </div>
          ${this._renderOptionalSlot(G,this._bottomSlotEmpty)}
        </div>
      </div>
    `}render(){var t;return null!=(t=this._viewportResizeObserver)&&t.isMobile()||!this.mediaLast?s`
      <div part="mediaWrapper" class="mediaWrapper">${this._renderSlot(J)}</div>
      ${this._renderBodyContent()}
    `:s`
        ${this._renderBodyContent()}
        <div part="mediaWrapper" class="mediaWrapper">${this._renderSlot(J)}</div>
      `}};H.styles=[T,L],R([a({reflect:!0})],H.prototype,"theme",2),R([a({type:Boolean,attribute:"media-last"})],H.prototype,"mediaLast",2),R([i({slot:J})],H.prototype,"_mediaSlot",2),R([i({slot:V})],H.prototype,"_headerSlot",2),R([i({slot:Z})],H.prototype,"_bodyPrimarySlot",2),R([i({slot:q})],H.prototype,"_bodySecondarySlot",2),R([i({slot:G})],H.prototype,"_bottomSlot",2),R([r()],H.prototype,"_mediaSlotEmpty",2),R([r()],H.prototype,"_headerSlotEmpty",2),R([r()],H.prototype,"_bodyPrimarySlotEmpty",2),R([r()],H.prototype,"_bodySecondarySlotEmpty",2),R([r()],H.prototype,"_bottomSlotEmpty",2),R([r()],H.prototype,"_viewportResizeObserver",2),H=R([o(F)],H);export{H as CardSplit,F as name};
