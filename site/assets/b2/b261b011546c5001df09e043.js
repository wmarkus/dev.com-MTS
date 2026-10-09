import{r as e,i as t,e as o,f as i,c as n,b as a,o as l}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{q as r,i as s,s as d,d as h}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{m as g,c,G as p,X as b,n as _,h as m,_ as y,Z as f,t as k,e as x,f as w,v,s as u,r as S}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{v as $}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{R as E,S as z,h as T,M as C}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{name as L}from"/__mirror/assets/9bce10b1f8f8949b4fd224b8";import{n as B}from"/__mirror/assets/bf0b3498e45fc20534cec8b1";import{a as D,B as H}from"/__mirror/assets/4230c2711e37b2e85105da0e";const j="flex",W="column",A="center",O="center",M="var(--ds-app-space-micro-xl, 1.5rem)",R="0",N="0",F="0",P="var(--ds-app-color-base-default-fg-highlight, #0078d4)",X="var(--ds-app-color-base-default-fg-body, #3a4c56)",q="1",G={headingColor:"var(--ds-app-color-base-default-fg-heading, #0e1726)",wordBreak:"initial",contentDisplay:"flex",contentFlexDirection:"column"},I="var(--ds-app-color-base-default-fg-body, #3a4c56)",U="var(--ds-app-space-micro-l, 1rem)",V="var(--ds-app-color-base-default-fg-body, #3a4c56)",Z="var(--ds-app-space-micro-xl, 1.5rem)",J=t`
  :host {
    gap: var(--ds-heading-block-gap, ${e(M)});
    padding-inline-end: var(
      --ds-heading-block-copy-padding,
      ${e(R)}
    );
    padding-block-start: var(
      --ds-heading-padding-block-start,
      ${e(N)}
    );
    padding-block-end: var(
      --ds-heading-padding-block-end,
      ${e(F)}
    );
  }

  :host,
  :host .heading-block__header,
  :host .heading-block__body,
  :host .heading-block__footer {
    display: var(--ds-heading-block-display, ${e(j)});
    flex-direction: var(
      --ds-heading-block-flex-direction,
      ${e(W)}
    );
  }

  :host .heading-block__header {
    gap: var(--ds-heading-block-head-gap, ${e("var(--ds-app-space-micro-m, 0.75rem)")});
  }

  :host .heading-block__body {
    gap: var(--ds-heading-block-body-gap, ${e("var(--ds-app-space-micro-2xl, 2rem)")});
  }

  :host .heading-block__footer {
    gap: var(--ds-heading-block-footer-gap, ${e(Z)});
  }

  /*
   * Two-column layout container (\`left--2-col\` alignment).
   */
  :host .align--2-col,
  :host .col-1 {
    display: flex;
    flex-direction: column;
    gap: var(--ds-heading-block-gap, ${e(M)});
    width: 100%;
  }

  :host([alignment='center']) {
    text-align: var(--ds-heading-block-text-align, ${e(A)});
  }

  /* Add eyebrow group styling for inline layout */
  :host .heading-block__eyebrow-group {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--ds-app-space-micro-2xs, 0.25rem);
  }

  /* Eyebrow button container layout */
  .heading-block__eyebrow-button-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  ::slotted([slot='heading-block__eyebrow-label']) {
    color: var(
      --ds-heading-block-eyebrow-label-color,
      ${e(P)}
    );
    font-size: var(
      --ds-heading-block-eyebrow-label-font-size,
      ${e(g.fontSize)}
    );
    font-weight: var(
      --ds-heading-block-eyebrow-label-font-weight,
      ${e(g.fontWeight)}
    );
    line-height: var(
      --ds-heading-block-eyebrow-label-line-height,
      ${e(g.lineHeight)}
    );
    letter-spacing: var(
      --ds-heading-block-eyebrow-label-letter-spacing,
      ${e(g.letterSpacing)}
    );
  }

  ::slotted([slot='heading-block__eyebrow-date']) {
    font-weight: var(
      --ds-heading-block-eyebrow-date-font-weight,
      ${e(c.fontWeight)}
    );
    font-size: var(
      --ds-heading-block-eyebrow-date-font-size,
      ${e(c.fontSize)}
    );
    line-height: var(
      --ds-heading-block-eyebrow-date-line-height,
      ${e(c.lineHeight)}
    );
    margin-bottom: var(
      --ds-heading-block-eyebrow-date-margin-bottom,
      ${e(c.marginBottom)}
    );
    color: var(
      --ds-heading-block-eyebrow-date-color,
      ${e(X)}
    );
    opacity: var(
      --ds-heading-block-eyebrow-date-opacity,
      ${e(q)}
    );
    margin-top: var(
      --ds-heading-block-eyebrow-date-margin-top,
      ${e(c.marginTop)}
    );
  }

  ::slotted([slot='heading-block__heading-text']) {
    overflow-wrap: break-word;
    color: var(
      --ds-heading-block-heading-text-color,
      ${e(G.headingColor)}
    );
    font-weight: var(
      --ds-heading-block-heading-text-font-weight,
      ${e(p.fontWeight)}
    ) !important;
    font-size: var(
      --ds-heading-block-heading-text-font-size,
      ${e(p.fontSize)}
    ) !important;
    line-height: var(
      --ds-heading-block-heading-text-line-height,
      ${e(p.lineHeight)}
    ) !important;
    word-break: var(
      --ds-heading-block-heading-text-word-break,
      ${e(G.wordBreak)}
    );
    font-family: var(--ds-heading-block-heading-text-font-family, inherit);
  }

  ::slotted([slot='heading-block__content-text']) {
    display: var(--ds-heading-block-content-text-display, flex);
    flex-direction: var(--ds-heading-block-content-text-flex-direction);
    justify-content: var(--ds-heading-block-content-text-justify-content, initial);
    row-gap: var(--ds-heading-block-content-text-row-gap);
    color: var(
      --ds-heading-block-content-text-color,
      ${e(I)}
    );
    font-weight: var(
      --ds-heading-block-content-text-font-weight,
      ${e(b.fontWeight)}
    );
    font-size: var(
      --ds-heading-block-content-text-font-size,
      ${e(b.fontSize)}
    ) !important;
    line-height: var(
      --ds-heading-block-content-text-line-height,
      ${e(b.lineHeight)}
    );
    letter-spacing: var(
      --ds-heading-block-content-text-letter-spacing,
      ${e(b.letterSpacing)}
    );
    padding-inline-end: var(
      --ds-heading-block-content-text-padding-inline-end,
      ${e(U)}
    );
    padding-inline-start: var(--ds-heading-block-content-text-padding-inline-start, 0);
  }

  ::slotted([slot='heading-block__footer-note']) {
    color: var(
      --ds-heading-block-footer-note-color,
      ${e(V)}
    );
    font-weight: var(
      --ds-heading-block-footer-note-font-weight,
      ${e(_.fontWeight)}
    ) !important;
    font-size: var(
      --ds-heading-block-footer-note-font-size,
      ${e(_.fontSize)}
    ) !important;
    line-height: var(
      --ds-heading-block-footer-note-line-height,
      ${e(_.lineHeight)}
    ) !important;
    letter-spacing: var(
      --ds-heading-block-footer-note-letter-spacing,
      ${e(_.letterSpacing)}
    ) !important;
  }

  /* Large label styling - label alignment with heading XS font size */
  ::slotted([slot='heading-block__eyebrow-large-label']) {
    color: var(
      --ds-heading-block-eyebrow-large-label-color,
      ${e(P)}
    );

    /* Use label properties for alignment and spacing */
    font-weight: var(
      --ds-heading-block-eyebrow-large-label-font-weight,
      ${e(m.fontWeight)}
    );
    line-height: var(
      --ds-heading-block-eyebrow-large-label-line-height,
      ${e(m.lineHeight)}
    );
    letter-spacing: var(
      --ds-heading-block-eyebrow-large-label-letter-spacing,
      ${e(g.letterSpacing)}
    );

    /* Use heading XS font size */
    font-size: var(
      --ds-heading-block-eyebrow-large-label-font-size,
      ${e(m.fontSize)}
    );
  }

  :host([size='3xl']) {
    --ds-heading-block-gap: var(--ds-app-space-micro-xl, 1.5rem);
    --ds-heading-block-body-gap: var(--ds-app-space-micro-2xl, 2rem);
  }

  :host([size='3xl']) .heading-block__header,
  :host([size='2xl']) .heading-block__header,
  :host([size='xl']) .heading-block__header {
    --ds-heading-block-head-gap: var(--ds-app-space-micro-m, 0.75rem);
  }

  :host([size='2xl']) {
    --ds-heading-block-heading-text-font-size: ${e(y.fontSize)} !important;
    --ds-heading-block-heading-text-font-weight: ${e(y.fontWeight)} !important;
    --ds-heading-block-heading-text-line-height: ${e(y.lineHeight)} !important;
    --ds-heading-block-gap: var(--ds-app-space-micro-l, 1rem);
  }

  :host([size='xl']) {
    --ds-heading-block-heading-text-font-size: ${e(f.fontSize)} !important;
    --ds-heading-block-heading-text-font-weight: ${e(f.fontWeight)} !important;
    --ds-heading-block-heading-text-line-height: ${e(f.lineHeight)} !important;
    --ds-heading-block-gap: var(--ds-app-space-micro-m, 0.75rem);
  }

  :host([size='l']) {
    --ds-heading-block-heading-text-font-size: ${e(k.fontSize)} !important;
    --ds-heading-block-heading-text-font-weight: ${e(k.fontWeight)} !important;
    --ds-heading-block-heading-text-line-height: ${e(k.lineHeight)} !important;
    --ds-heading-block-gap: var(--ds-app-space-micro-m, 0.75rem);
  }

  :host([size='l']) .heading-block__header,
  :host([size='m']) .heading-block__header,
  :host([size='s']) .heading-block__header {
    --ds-heading-block-head-gap: var(--ds-app-space-micro-xs, 0.5rem);
  }

  :host([size='m']) {
    --ds-heading-block-heading-text-font-size: ${e(x.fontSize)};
    --ds-heading-block-heading-text-font-weight: ${e(x.fontWeight)} !important;
    --ds-heading-block-heading-text-line-height: ${e(x.lineHeight)} !important;
    --ds-heading-block-gap: var(--ds-app-space-micro-m, 0.75rem);
  }

  :host([size='s']) {
    --ds-heading-block-heading-text-font-size: ${e(w.fontSize)} !important;
    --ds-heading-block-heading-text-font-weight: ${e(w.fontWeight)} !important;
    --ds-heading-block-heading-text-line-height: ${e(w.lineHeight)} !important;
    --ds-heading-block-gap: var(--ds-app-space-micro-m, 0.75rem);
  }

  :host([size='xs']) {
    --ds-heading-block-heading-text-font-size: ${e(m.fontSize)} !important;
    --ds-heading-block-heading-text-font-weight: ${e(m.fontWeight)} !important;
    --ds-heading-block-heading-text-line-height: ${e(m.lineHeight)} !important;
  }

  :host([size='2xs']) {
    --ds-heading-block-heading-text-font-size: ${e(v.fontSize)} !important;
    --ds-heading-block-heading-text-font-weight: ${e(v.fontWeight)} !important;
    --ds-heading-block-heading-text-line-height: ${e(v.lineHeight)} !important;
  }

  :host([size='3xs']) {
    --ds-heading-block-heading-text-font-size: ${e(u.fontSize)} !important;
    --ds-heading-block-heading-text-font-weight: ${e(u.fontWeight)} !important;
    --ds-heading-block-heading-text-line-height: ${e(u.lineHeight)} !important;
  }

  .heading-block__rolling-text {
    --ds-rolling-text-font-size: var(--ds-heading-block-heading-text-font-size);
    --ds-rolling-text-font-weight: var(--ds-heading-block-heading-text-font-weight);
    --ds-rolling-text-line-height: var(--ds-heading-block-heading-text-line-height);
  }

  :host([size='xl']) ::slotted([slot='heading-block__content-text']),
  :host([size='l']) ::slotted([slot='heading-block__content-text']),
  :host([size='m']) ::slotted([slot='heading-block__content-text']),
  :host([size='s']) ::slotted([slot='heading-block__content-text']),
  :host([size='xs']) ::slotted([slot='heading-block__content-text']) {
    --ds-heading-block-content-text-font-size: ${e(S.fontSize)} !important;
    --ds-heading-block-content-text-font-weight: ${e(S.fontWeight)} !important;
    --ds-heading-block-content-text-line-height: ${e(S.lineHeight)} !important;
    --ds-heading-block-content-text-letter-spacing: ${e(S.letterSpacing)} !important;
  }

  :host([size='2xl']),
  :host([size='xl']),
  :host([size='l']),
  :host([size='m']),
  :host([size='s']) {
    --ds-heading-block-body-gap: var(--ds-app-space-micro-xl, 1.5rem);
  }

  :host([size='l']) .heading-block__footer,
  :host([size='m']) .heading-block__footer,
  :host([size='s']) .heading-block__footer {
    --ds-heading-block-footer-gap: var(--ds-app-space-micro-l, 1rem);
  }

  /* Center Alignment css */

  :host([alignment='center']) ::slotted([slot='heading-block__footer-link']) {
    justify-content: var(
      --ds-heading-block-justify-content,
      ${e(O)}
    );
  }

  :host([alignment='center']) ::slotted([slot='heading-block__eyebrow-large-label']),
  :host([alignment='center']) ::slotted([slot='heading-block__eyebrow-badge']),
  :host([alignment='center']) ::slotted([slot='heading-block__eyebrow-tag']) {
    margin: 0 auto;
    display: block;
  }

  :host([alignment='center']) .heading-block__eyebrow-group {
    justify-content: center;
  }

  :host([alignment='center']) .heading-block__eyebrow-media-container {
    margin: 0 auto;
    display: block;
  }

  /* Center alignment for eyebrow-button container */
  :host([alignment='center']) .heading-block__eyebrow-button-container {
    position: relative;
  }

  .heading-block__eyebrow-wrapper {
    display: flex;
    align-items: center;
  }

  :host([alignment='center']) .heading-block__eyebrow-wrapper {
    position: absolute;
    left: 50%;
    transform: translateX(-50%) !important;
    text-align: center;
  }

  :host([alignment='center']) .heading-block__rolling-button {
    margin-left: auto;
    text-align: right;
  }

  :host([alignment='center']) ::slotted([slot='heading-block__content-text']) {
    --ds-heading-block-content-text-padding-inline-end: ${e(U)};
    --ds-heading-block-content-text-padding-inline-start: var(
      --ds-heading-block-content-text-padding-inline-end
    );
    --ds-heading-block-content-text-justify-content: center;
  }

  :host([has-rolling-text]) {
    --ds-heading-block-gap: 0;
    .heading-block__rolling-text {
      --ds-rolling-text-padding-block-end: ${e(M)};
    }
  }

  :host .heading-block__eyebrow-media-container {
    width: var(--ds-heading-block-eyebrow-media-width, 11.25rem);
    height: var(--ds-heading-block-eyebrow-media-height, 4.8125rem);
    overflow: hidden;
    border-radius: 0;
  }

  /* Font family options applied to the heading text. */
  :host([font-family='segoe-serif']) {
    --ds-heading-block-heading-text-font-family: 'Segoe Serif';
  }

  :host([font-family='segoe-serif-italic']) {
    --ds-heading-block-heading-text-font-family: 'Segoe Serif Italic';
  }

  /* Gradient text config; spans read these inherited vars. Add colors by appending a rule. */
  :host([configuration='gradient']) {
    --ds-heading-block-gradient-fill: transparent;
  }

  :host([configuration='gradient'][gradient-color='opt1']) {
    --ds-heading-block-gradient: var(--ds-app-color-gradient-opt1-left);
  }

  :host([configuration='gradient'][gradient-color='opt2']) {
    --ds-heading-block-gradient: var(--ds-app-color-gradient-opt2-left);
  }

  :host([configuration='gradient'][gradient-color='opt3']) {
    --ds-heading-block-gradient: var(--ds-app-color-gradient-opt3-left);
  }

  :host([configuration='gradient'][gradient-color='opt4-overlay']) {
    --ds-heading-block-gradient: linear-gradient(
      to bottom,
      var(--ds-app-color-gradient-opt4-stop1) 0%,
      var(--ds-app-color-gradient-opt4-stop9) 25%,
      var(--ds-app-color-gradient-opt4-stop9) 60%,
      transparent 80%
    ),
    linear-gradient(
      90deg,
      var(--ds-app-color-gradient-opt4-stop2) 0%,
      var(--ds-app-color-gradient-opt4-stop3) 16.66%,
      var(--ds-app-color-gradient-opt4-stop4) 33.33%,
      var(--ds-app-color-gradient-opt4-stop5) 50%,
      var(--ds-app-color-gradient-opt4-stop6) 66.66%,
      var(--ds-app-color-gradient-opt4-stop7) 83.33%,
      var(--ds-app-color-gradient-opt4-stop8) 100%
    );
  }

  :host([configuration='gradient'][gradient-color='opt4']) {
    --ds-heading-block-gradient: linear-gradient(
      90deg,
      var(--ds-app-color-gradient-opt4-stop2) 0%,
      var(--ds-app-color-gradient-opt4-stop3) 16.66%,
      var(--ds-app-color-gradient-opt4-stop4) 33.33%,
      var(--ds-app-color-gradient-opt4-stop5) 50%,
      var(--ds-app-color-gradient-opt4-stop6) 66.66%,
      var(--ds-app-color-gradient-opt4-stop7) 83.33%,
      var(--ds-app-color-gradient-opt4-stop8) 100%
    );
  }

  :host([configuration='gradient'][gradient-color='none']) {
    --ds-heading-block-gradient-fill: ${e(G.headingColor)};
  }

  /* High Contrast (forced-colors): fall back to plain readable system text color.
     Placed last so the CanvasText fallback also overrides the gradient-color='none' rule. */
  @media (forced-colors: active) {
    :host([configuration='gradient']) {
      --ds-heading-block-gradient: none;
      --ds-heading-block-gradient-fill: CanvasText;
    }

    :host([configuration='gradient'][gradient-color='none']) {
      --ds-heading-block-gradient-fill: CanvasText;
    }
  }
`,K=t`
  @media (min-width: ${e($.md)}) {
    ::slotted([slot='heading-block__content-text']) {
      --ds-heading-block-content-text-padding-inline-end: var(--ds-app-space-micro-2xl);
    }

    /* Two-column layout: heading/content on the left, footer buttons on the right.
       The DOM is already split into primary/secondary columns by the component's
       dedicated render branch, so only the responsive row layout is applied here. */
    :host([alignment='left--2-col']) .align--2-col {
      --ds-heading-block-2col-gap: var(--ds-app-space-micro-m, 0.75rem);
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
      gap: var(--ds-heading-block-2col-gap);
    }

    :host([alignment='left--2-col']) .col-1,
    :host([alignment='left--2-col']) .col-2 {
      flex-grow: 0;
      flex-shrink: 1;
      flex-basis: calc(50% - var(--ds-heading-block-2col-gap) / 2);
      min-width: 0;
    }

    :host([alignment='left--2-col']) .col-2 .heading-block__footer {
      align-items: flex-end;
    }
  }

  @media (max-width: ${e($.sm)}) {
    /* Eyebrow badge grows to the VP1-2 size (64px). */
    ::slotted([slot='heading-block__eyebrow-badge']) {
      --ds-badge-width: 4rem;
      --ds-badge-height: 4rem;
      --ds-badge-max-width: 4rem;
      --ds-badge-max-height: 4rem;
    }

    /* Eyebrow media grows to the VP1-2 size (140 x 60). */
    :host .heading-block__eyebrow-media-container {
      --ds-heading-block-eyebrow-media-width:  8.75rem;
      --ds-heading-block-eyebrow-media-height: 3.75rem;
    }
  }
`,Q="text",Y="transparent",ee=t`
  reimagine-heading-block[configuration='gradient']
    > [slot='heading-block__heading-text']
    mark {
    background-image: var(--ds-heading-block-gradient, ${e("var(--ds-app-color-gradient-opt1-left)")});
    background-clip: var(--ds-heading-block-gradient-clip, ${e(Q)});
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-background-clip: var(--ds-heading-block-gradient-clip, ${e(Q)});
    color: var(--ds-heading-block-gradient-fill, ${e(Y)});
    -webkit-text-fill-color: var(--ds-heading-block-gradient-fill, ${e(Y)});
    background-color: transparent;
    box-shadow: none;
  }

  reimagine-heading-block[gradient-font='segoe-serif']
    > [slot='heading-block__heading-text']
    mark {
      font-family: var(--ds-heading-block-gradient-font-family, "Segoe Serif");
  }

  reimagine-heading-block[gradient-font='segoe-serif-italic']
    > [slot='heading-block__heading-text']
    mark {
      font-family: var(--ds-heading-block-gradient-font-family, "Segoe Serif Italic");
      padding-inline: 0.1em;
      margin-inline: -0.1em;
      /* stylelint-disable-next-line property-no-vendor-prefix */
      -webkit-box-decoration-break: clone;
      box-decoration-break: clone;
  }
`;class te{constructor(e,t){if(this._buttonClick=this.handleButtonClick.bind(this),this._animationStateChange=this.handleAnimationStateChange.bind(this),this._host=e,this._rollingTextElement=(null==t?void 0:t.rollingTextElement)||r(this._host,"reimagine-rolling-text"),this._buttonTrigger=(null==t?void 0:t.buttonTrigger)||r(this._host,"reimagine-button","[video-control]"),this._rollingTextElement){if(!this._buttonTrigger)return void console.warn("For accessibility support, a play/pause button is required.");(this._host=e).addController(this),this._whenElementReady(this._rollingTextElement).then(()=>this.init()).catch(e=>{console.error("Error during initialization:",e)})}}async _whenElementReady(e){e.matches(":not(:defined)")&&await customElements.whenDefined(e.localName)}hostConnected(){var e,t;null==(e=this._buttonTrigger)||e.addEventListener("click",this._buttonClick),null==(t=this._rollingTextElement)||t.addEventListener("rolling-animation-state-change",this._animationStateChange)}hostDisconnected(){var e,t;null==(e=this._buttonTrigger)||e.removeEventListener("click",this._buttonClick),null==(t=this._rollingTextElement)||t.removeEventListener("rolling-animation-state-change",this._animationStateChange)}init(){var e;const t=null==(e=this._rollingTextElement)?void 0:e.getAnimationState();this._updateButtonState("playing"===t)}_updateButtonState(e){var t;null==(t=this._buttonTrigger)||t.setAttribute("video-control",e?"pause":"play")}handleButtonClick(){if(!this._rollingTextElement)return;this._rollingTextElement.toggleAnimation();const e=this._rollingTextElement.getAnimationState();this._updateButtonState("playing"===e)}handleAnimationStateChange(e){const t="playing"===e.detail.state;this._updateButtonState(t)}}var oe=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,ne=(e,t,o,i)=>{for(var n,a=i>1?void 0:i?ie(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(i?n(t,o,a):n(a))||a);return i&&a&&oe(t,o,a),a};const ae="reimagine-heading-block";let le=class extends E{constructor(){super(...arguments),this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._eyebrowLabelEmpty=!0,this._eyebrowDateEmpty=!0,this._eyebrowLargeLabelEmpty=!0,this._eyebrowMediaEmpty=!0,this._eyebrowBadgeEmpty=!0,this._eyebrowTagEmpty=!0,this._eyebrowEmpty=!0,this._headingTextEmpty=!0,this._contentTextEmpty=!0,this._footerLinkEmpty=!0,this._footerNoteEmpty=!0,this._bodyEmpty=!0,this._rollingTextEmpty=!0,this._rollingButtonEmpty=!0,this.hasRollingText=!1}_handleSlotChange(){if(this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length,this._eyebrowLabelEmpty=0===this._eyebrowLabelSlot.length,this._eyebrowDateEmpty=0===this._eyebrowDateSlot.length,this._eyebrowLargeLabelEmpty=0===this._eyebrowLargeLabelSlot.length,this._eyebrowMediaEmpty=0===this._eyebrowMediaSlot.length,this._eyebrowBadgeEmpty=0===this._eyebrowBadgeSlot.length,this._eyebrowTagEmpty=0===this._eyebrowTagSlot.length,this._headingTextEmpty=0===this._headingTextSlot.length,this._contentTextEmpty=0===this._contentTextSlot.length,this._footerLinkEmpty=0===this._footerLinkSlot.length,this._footerNoteEmpty=0===this._footerNoteSlot.length,this._rollingTextEmpty=0===this._rollingTextSlot.length,this._rollingButtonEmpty=0===this._rollingButtonSlot.length,this._eyebrowEmpty=this._eyebrowLabelEmpty&&this._eyebrowDateEmpty&&this._eyebrowLargeLabelEmpty&&this._eyebrowMediaEmpty&&this._eyebrowBadgeEmpty&&this._eyebrowTagEmpty,this._bodyEmpty=this._contentTextEmpty&&this._footerLinkEmpty&&this._footerNoteEmpty,this._setBadgeAttributes(),this._setMediaAttributes(),this.hasRollingText&&!this._rollingTextEmpty&&!this._rollingTextController){this._rollingButtonEmpty||this._setRollingButtonAttributes();const e=r(this,"reimagine-rolling-text"),t=r(this,"reimagine-button","[video-control]");e&&t&&(this._rollingTextController=new te(this,{rollingTextElement:e,buttonTrigger:t}))}}_renderOptionalSlot(e="heading-block__first",t=this._firstSlotEmpty){return a`
      <div part=${e} class=${e} style="${t?"display: none;":""}">
        <slot name=${e} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_renderEyebrow(){return a`
      <div
        class="heading-block__eyebrow-group"
        style="${this._eyebrowLabelEmpty&&this._eyebrowDateEmpty?"display: none;":""}"
      >
        <slot
          name="heading-block__eyebrow-label"
          @slotchange="${this._handleSlotChange}"
          style="${this._eyebrowLabelEmpty?"display: none;":""}"
        ></slot>
        <slot
          name="heading-block__eyebrow-date"
          @slotchange="${this._handleSlotChange}"
          style="${this._eyebrowDateEmpty?"display: none;":""}"
        ></slot>
      </div>
      ${this._renderOptionalSlot("heading-block__eyebrow-large-label",this._eyebrowLargeLabelEmpty)}
      <div
        class="heading-block__eyebrow-media-container"
        style="${this._eyebrowMediaEmpty?"display: none;":""}"
      >
        <slot name="heading-block__eyebrow-media" @slotchange="${this._handleSlotChange}"></slot>
      </div>
      ${this._renderOptionalSlot("heading-block__eyebrow-badge",this._eyebrowBadgeEmpty)}
      ${this._renderOptionalSlot("heading-block__eyebrow-tag",this._eyebrowTagEmpty)}
    `}_renderEyebrowWithButton(){return a`<div
      class="heading-block__eyebrow-button-container"
      part="heading-block__eyebrow-button-container"
    >
      <div class="heading-block__eyebrow-wrapper" part="heading-block__eyebrow-wrapper">
        ${this._renderEyebrow()}
      </div>
      ${this._renderOptionalSlot("heading-block__rolling-button",this._rollingButtonEmpty)}
    </div> `}_setBadgeAttributes(){this._eyebrowBadgeSlot.filter(e=>s(e,L)).forEach(e=>{const t={size:H.l,surface:D.solidBorder};d(e,t)})}_setMediaAttributes(){this._eyebrowMediaSlot.filter(e=>s(e,B)).forEach(e=>{const t={"aspect-ratio":C.ratio21to9};d(e,t)})}_setRollingButtonAttributes(){const e=r(this,"reimagine-button","[video-control]");e&&d(e,{appearance:"button--primary",shape:"rounded",size:"medium"})}connectedCallback(){super.connectedCallback(),le.instanceCount++,le.lightDomSheet||(le.lightDomSheet=new CSSStyleSheet,le.lightDomSheet.replaceSync(z(ee.cssText)),document.adoptedStyleSheets=[...document.adoptedStyleSheets,le.lightDomSheet])}disconnectedCallback(){super.disconnectedCallback(),le.instanceCount--,0===le.instanceCount&&le.lightDomSheet&&(document.adoptedStyleSheets=document.adoptedStyleSheets.filter(e=>e!==le.lightDomSheet),le.lightDomSheet=null)}_renderHeader(e=!1){return a`
      <div
        class="heading-block__header"
        part="heading-block__header"
        style="${this._eyebrowEmpty&&this._headingTextEmpty?"display: none;":""}"
      >
        ${e?this._renderEyebrowWithButton():this._renderEyebrow()}
        <div class="heading-block__heading-wrapper" part="heading-block__heading-wrapper">
          <slot name="heading-block__heading-text" @slotchange="${this._handleSlotChange}"></slot>
          ${e?this._renderOptionalSlot("heading-block__rolling-text",this._rollingTextEmpty):""}
        </div>
      </div>
    `}_renderFooter(e=!0){let t;return e&&(t=this._footerLinkEmpty&&this._footerNoteEmpty?"display: none;":""),a`
      <div
        class="heading-block__footer"
        part="heading-block__footer"
        style=${l(t)}
      >
        <slot name="heading-block__footer-link" @slotchange="${this._handleSlotChange}"></slot>
        <slot name="heading-block__footer-note" @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_renderDefault(){return a`
      ${this._renderHeader(this.hasRollingText)}
      <div
        class="heading-block__body"
        part="heading-block__body"
        style="${this._bodyEmpty?"display:none;":""}"
      >
        ${this._renderOptionalSlot("heading-block__content-text",this._contentTextEmpty)}
        ${this._renderFooter()}
      </div>
    `}_renderTwoColumnContent(){return a`
      <div class="align--2-col" part="align--2-col">
        <div class="col-1" part="col-1">
          ${this._renderHeader(this.hasRollingText)}
          ${this._renderOptionalSlot("heading-block__content-text",this._contentTextEmpty)}
        </div>
        <div class="col-2" part="col-2"
          style="${this._footerLinkEmpty&&this._footerNoteEmpty?"display: none;":""}"
        >
          ${this._renderFooter(!1)}
        </div>
      </div>
    `}render(){return a`
      ${this._renderOptionalSlot("heading-block__first",this._firstSlotEmpty)}
      ${this.alignment===T.left2Col?this._renderTwoColumnContent():this._renderDefault()}
      ${this._renderOptionalSlot("heading-block__last",this._lastSlotEmpty)}
    `}};le.styles=[J,K],le.lightDomSheet=null,le.instanceCount=0,ne([o({slot:"heading-block__first"})],le.prototype,"_firstSlot",2),ne([o({slot:"heading-block__last"})],le.prototype,"_lastSlot",2),ne([o({slot:"heading-block__eyebrow-label"})],le.prototype,"_eyebrowLabelSlot",2),ne([o({slot:"heading-block__eyebrow-date"})],le.prototype,"_eyebrowDateSlot",2),ne([o({slot:"heading-block__eyebrow-large-label"})],le.prototype,"_eyebrowLargeLabelSlot",2),ne([o({slot:"heading-block__eyebrow-media"})],le.prototype,"_eyebrowMediaSlot",2),ne([o({slot:"heading-block__eyebrow-badge"})],le.prototype,"_eyebrowBadgeSlot",2),ne([o({slot:"heading-block__eyebrow-tag"})],le.prototype,"_eyebrowTagSlot",2),ne([o({slot:"heading-block__heading-text"})],le.prototype,"_headingTextSlot",2),ne([o({slot:"heading-block__content-text"})],le.prototype,"_contentTextSlot",2),ne([o({slot:"heading-block__footer-link"})],le.prototype,"_footerLinkSlot",2),ne([o({slot:"heading-block__footer-note"})],le.prototype,"_footerNoteSlot",2),ne([o({slot:"heading-block__rolling-text"})],le.prototype,"_rollingTextSlot",2),ne([o({slot:"heading-block__rolling-button"})],le.prototype,"_rollingButtonSlot",2),ne([i()],le.prototype,"_firstSlotEmpty",2),ne([i()],le.prototype,"_lastSlotEmpty",2),ne([i()],le.prototype,"_eyebrowLabelEmpty",2),ne([i()],le.prototype,"_eyebrowDateEmpty",2),ne([i()],le.prototype,"_eyebrowLargeLabelEmpty",2),ne([i()],le.prototype,"_eyebrowMediaEmpty",2),ne([i()],le.prototype,"_eyebrowBadgeEmpty",2),ne([i()],le.prototype,"_eyebrowTagEmpty",2),ne([i()],le.prototype,"_eyebrowEmpty",2),ne([i()],le.prototype,"_headingTextEmpty",2),ne([i()],le.prototype,"_contentTextEmpty",2),ne([i()],le.prototype,"_footerLinkEmpty",2),ne([i()],le.prototype,"_footerNoteEmpty",2),ne([i()],le.prototype,"_bodyEmpty",2),ne([i()],le.prototype,"_rollingTextEmpty",2),ne([i()],le.prototype,"_rollingButtonEmpty",2),ne([n({reflect:!0})],le.prototype,"size",2),ne([n({reflect:!0})],le.prototype,"alignment",2),ne([n({type:Boolean,attribute:"has-rolling-text"})],le.prototype,"hasRollingText",2),ne([n({reflect:!0})],le.prototype,"configuration",2),ne([n({reflect:!0,attribute:"gradient-color"})],le.prototype,"gradientColor",2),ne([n({reflect:!0,attribute:"gradient-font"})],le.prototype,"gradientFont",2),ne([n({reflect:!0,attribute:"font-family"})],le.prototype,"fontFamily",2),le=ne([h(ae)],le);export{le as H,G as c,ae as n};
