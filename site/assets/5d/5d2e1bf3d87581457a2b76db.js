import{r as t,i as o,b as e,c as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as a}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{a1 as n,w as i,B as d,L as s}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{b as l}from"/__mirror/assets/7e3cbd307d93b862d54c4d69";import{l as b}from"/__mirror/assets/2e9aed9389db597dff461cb3";import{d as c,s as u,h as p,j as h,k as g}from"/__mirror/assets/daab3f96e18c70a4751d1a7b";import{F as v,Q as m,R as f}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import"/__mirror/assets/34233ee5ac8acdb3aa831b25";const y={display:"inline-flex",justifyContent:"center",alignItems:"center",backgroundColor:"var(--ds-app-color-interactive-primary-bg-default, #0067b8)",minWidth:"3rem",minHeight:"3rem",maxHeight:"none",borderColor:"var(--ds-color-transparent, transparent)",borderStyle:"solid",color:"var(--ds-app-color-interactive-primary-fg-default, #fff)",textDecoration:"none",borderWidth:"0",gap:"0.75rem",boxShadow:"var(--ds-depth-none, 0 0 0 0 rgba(0, 0, 0, 0.12), 0 0 0 0 rgba(0, 0, 0, 0.12))",borderRadius:"var(--ds-app-radii-xs, 0.25rem)",outline:"0.1875rem dotted currentcolor",outlineOffset:"-0.375rem",opacity:"1",cursor:"pointer",pointerEvents:"auto",paddingInlineEnd:`${t(u)}`,paddingInlineStart:`${t(u)}`,paddingBlockEnd:`${t(c)}`,paddingBlockStart:`${t(c)}`,boxSizing:"border-box",width:"auto",wordBreak:"initial",overflow:"initial",overflowClipMargin:"initial",textOverflow:"initial",whiteSpace:"initial",textAlign:"center"},$=o`
  button,
  ::slotted(button) {
    ${l};
  }

  a,
  ::slotted(a) {
    ${b};
  }

  :host,
  ::slotted(button),
  ::slotted(a) {
    display: var(--ds-button-host-display, initial);
    width: var(--ds-button-width, ${t(y.width)});
  }

  :host button,
  :host a,
  :host span,
  :host div,
  ::slotted(button),
  ::slotted(a) {
    height: var(--ds-button-height, auto);
    justify-content: var(--ds-button-justify-content, ${t(y.justifyContent)});
    align-items: var(--ds-button-align-items, ${t(y.alignItems)});
    display: var(--ds-button-display, ${t(y.display)});
    border-style: var(--ds-button-border-style-solid, ${t(y.borderStyle)});
    text-decoration: var(--ds-button-text-decoration, ${t(y.textDecoration)});
    border-width: var(--ds-button-border-width, ${t(y.borderWidth)});
    box-sizing: var(--ds-button-box-sizing, ${t(y.boxSizing)});
    min-width: var(--ds-button-min-width, ${t(y.minWidth)});
    min-height: var(--ds-button-min-height, ${t(y.minHeight)});
    max-height: var(--ds-button-max-height, ${t(y.maxHeight)});
    gap: var(--ds-button-gap, ${t(y.gap)});
    box-shadow: var(--ds-button-box-shadow, ${t(y.boxShadow)});
    font-weight: var(--ds-button-font-weight, ${t(n.fontWeight)});
    font-size: var(--ds-button-font-size, ${t(n.fontSize)});
    line-height: var(--ds-button-line-height, ${t(n.lineHeight)});
    letter-spacing: var(
      --ds-button-letter-spacing,
      ${t(n.letterSpacing)}
    );
    word-break: var(--ds-button-word-break, ${t(y.wordBreak)});
    padding-inline-start: var(
      --ds-button-padding-inline-start,
      calc(${t(y.paddingInlineStart)} + 1px)
    );
    padding-inline-end: var(
      --ds-button-padding-inline-end,
      calc(${t(y.paddingInlineEnd)} + 1px)
    );
    padding-block-start: var(
      --ds-button-padding-block-start,
      ${t(y.paddingBlockStart)}
    );
    padding-block-end: var(
      --ds-button-padding-block-end,
      ${t(y.paddingBlockEnd)}
    );
    background-color: var(
      --ds-button-background-color,
      ${t(y.backgroundColor)}
    );
    color: var(
      --ds-text-color-override,
      var(--ds-button-color, ${t(y.color)})
    ) !important;
    border-color: var(--ds-button-border-color, ${t(y.borderColor)});
    border-radius: var(--ds-button-border-radius, ${t(y.borderRadius)});
    cursor: var(--ds-button-cursor, ${t(y.cursor)});
    pointer-events: var(--ds-button-pointer-events, ${t(y.pointerEvents)});
    opacity: var(--ds-button-opacity, ${t(y.opacity)});
    width: var(--ds-button-width, ${t(y.width)});
    overflow: var(--ds-button-overflow, ${t(y.overflow)});
    overflow-clip-margin: var(
      --ds-button-overflow-clip-margin,
      ${t(y.overflowClipMargin)}
    );
    text-overflow: var(--ds-button-text-overflow, ${t(y.textOverflow)});
    white-space: var(--ds-button-white-space, ${t(y.whiteSpace)});
    text-align: var(--ds-button-text-align, ${t(y.textAlign)});

    --ds-icon-color: var(--ds-button-icon-color, var(--ds-button-color));
  }

  :host(:focus) button,
  :host(:focus) a,
  ::slotted(button:focus),
  ::slotted(a:focus) {
    outline: var(--ds-button-outline, ${t(y.outline)});
    outline-offset: var(--ds-button-outline-offset, ${t(y.outlineOffset)});
  }

  :host([appearance='button--primary']) {
    --ds-button-color: var(--ds-app-color-interactive-primary-fg-default, #fff) !important;
    --ds-button-background-color: var(--ds-app-color-interactive-primary-bg-default, #0067b8);
    --ds-button-border-color: var(--ds-color-transparent, transparent);
  }

  :host([appearance='button--primary']:hover:not([disabled])) {
    --ds-button-background-color: var(--ds-app-color-interactive-primary-bg-hover, #006dc1);
  }

  :host([appearance='button--primary']:active:not([disabled])),
  :host([appearance='button--primary'][active]:not([disabled])) {
    --ds-button-background-color: var(--ds-app-color-interactive-primary-bg-active, #004275);
  }

  :host([appearance='button--secondary']) {
    --ds-button-border-width: 0.125rem;
    --ds-button-background-color: var(--ds-color-transparent, transparent);
    --ds-button-color: var(--ds-app-color-interactive-secondary-fg-default, #2a446f) !important;
    --ds-button-border-color: var(--ds-app-color-interactive-secondary-border-default, #2a446f);
    --ds-button-padding-inline-start: calc(
      ${t(y.paddingInlineStart)} - calc(var(--ds-button-border-width) / 2)
    );
    --ds-button-padding-inline-end: calc(
      ${t(y.paddingInlineEnd)} - calc(var(--ds-button-border-width) / 2)
    );
    --ds-button-padding-block-start: calc(
      ${t(y.paddingBlockStart)} - calc(var(--ds-button-border-width) / 2)
    );
    --ds-button-padding-block-end: calc(
      ${t(y.paddingBlockStart)} - calc(var(--ds-button-border-width) / 2)
    );
  }

  :host([appearance='button--secondary']:active),
  :host([appearance='button--secondary'][active]) {
    --ds-button-color: var(--ds-app-color-interactive-secondary-fg-active, #17253d) !important;
    --ds-button-border-color: var(--ds-app-color-interactive-secondary-border-active, #17253d);
  }

  :host([appearance='button--tertiary']) {
    --ds-button-background-color: var(--ds-color-neutral-bright-lime, #89c402);
    --ds-button-color: var(--ds-color-neutral-black, #000) !important;
    --ds-button-border-color: transparent;
  }

  :host([appearance='button--tertiary']:hover) {
    --ds-button-background-color: rgba(137, 196, 2, 0.8);
  }

  :host([appearance='button--tertiary']:active),
  :host([appearance='button--tertiary'][active]) {
    --ds-button-background-color: rgba(137, 196, 2, 0.5);
  }

  :host([appearance='button--ghost']) {
    --ds-button-background-color: transparent;
    --ds-button-color: var(
      --ds-button-ghost-color,
      var(--ds-app-color-interactive-secondary-fg-default, #2a446f)
    ) !important;
    --ds-button-border-color: transparent;
  }

  :host([appearance='button--ghost']:hover) {
    --ds-button-background-color: var(
      --ds-button-ghost-hover-background-color,
      var(--ds-app-color-interactive-secondary-bg-default, rgba(0, 85, 151, 0.15))
    );
    --ds-button-color: var(
      --ds-button-ghost-hover-color,
      var(--ds-app-color-interactive-secondary-fg-hover, #263e65)
    ) !important;
  }

  :host([appearance='button--ghost']:active),
  :host([appearance='button--ghost'][active]) {
    --ds-button-color: var(
      --ds-button-ghost-pressed-color,
      var(--ds-app-color-interactive-secondary-fg-active, #17253d)
    ) !important;
  }

  :host([disabled]) {
    --ds-button-opacity: 0.2;
    --ds-button-pointer-events: none;
    --ds-button-cursor: pointer;
  }

  :host([size='medium']) {
    --ds-button-min-height: 2.5rem;
    --ds-button-gap: var(--ds-button-medium-gap, ${t(p)});
    --ds-button-padding-inline-start: var(
      --ds-button-medium-padding-inline-start,
      ${t(u)}
    );
    --ds-button-padding-inline-end: var(
      --ds-button-medium-padding-inline-end,
      ${t(u)}
    );
    --ds-button-padding-block-start: var(
      --ds-button-medium-padding-block-start,
      ${t(p)}
    );
    --ds-button-padding-block-end: var(
      --ds-button-medium-padding-block-end,
      ${t(p)}
    );
  }

  :host([appearance='button--secondary'][size='medium']) {
    --ds-button-padding-inline-start: calc(
      ${t(u)} - calc(var(--ds-button-border-width) / 2)
    );
    --ds-button-padding-inline-end: calc(
      ${t(u)} - calc(var(--ds-button-border-width) / 2)
    );
    --ds-button-padding-block-start: calc(
      ${t(p)} - calc(var(--ds-button-border-width) / 2)
    );
    --ds-button-padding-block-end: calc(
      ${t(p)} - calc(var(--ds-button-border-width) / 2)
    );
  }

  :host([size='medium']) button,
  :host([size='medium']) a,
  :host([size='medium']) span,
  :host([size='medium']) div,
  :host([size='medium']) ::slotted(button),
  :host([size='medium']) ::slotted(a) {
    --ds-button-min-width: 2.5rem;
  }

  :host([size='small']) {
    --ds-button-min-height: 2rem;
    --ds-button-gap: ${t(h)};
    --ds-button-padding-inline-start: ${t(c)};
    --ds-button-padding-inline-end: ${t(c)};
    --ds-button-padding-block-start: ${t(h)};
    --ds-button-padding-block-end: ${t(h)};
  }

  :host([appearance='button--secondary'][size='small']) {
    --ds-button-padding-inline-start: calc(
      ${t(c)} - calc(var(--ds-button-border-width) / 2)
    );
    --ds-button-padding-inline-end: calc(
      ${t(c)} - calc(var(--ds-button-border-width) / 2)
    );
    --ds-button-padding-block-start: calc(
      ${t(h)} - calc(var(--ds-button-border-width) / 2)
    );
    --ds-button-padding-block-end: calc(
      ${t(h)} - calc(var(--ds-button-border-width) / 2)
    );
  }

  :host([size='small']) button,
  :host([size='small']) a,
  :host([size='small']) span,
  :host([size='small']) div,
  :host([size='small']) ::slotted(button),
  :host([size='small']) ::slotted(a) {
    --ds-button-min-width: 2rem;
  }

  :host([shape='rounded']) {
    --ds-button-border-radius: var(--ds-app-radii-s, 0.5rem) !important;
  }

  :host([shape='circle']) {
    --ds-button-border-radius: var(--ds-app-radii-circle, 12.5rem) !important;
  }

  :host([appearance='button--tag']) {
    --ds-button-min-height: 1.875rem;
    --ds-button-background-color: var(
      --ds-app-color-interactive-secondary-bg-default,
      rgba(0, 85, 151, 0.15)
    );
    --ds-button-color: var(--ds-app-color-interactive-secondary-fg-default, #2a446f) !important;
    --ds-button-border-color: transparent;
    --ds-button-border-radius: var(--ds-app-radii-xs);
    --ds-button-padding-inline-start: ${t(u)};
    --ds-button-padding-inline-end: ${t(u)};
    --ds-button-padding-block-start: ${t(h)};
    --ds-button-padding-block-end: ${t(h)};
    --ds-button-font-size: var(--ds-app-type-label-m-font-size, 0.875rem);
    --ds-button-font-weight: var(--ds-app-type-label-m-font-weight, 600);
    --ds-button-line-height: var(--ds-app-type-label-m-line-height, 1.25rem);
  }

  :host([appearance='button--tag'][size='small']) {
    --ds-button-min-height: 1.25rem;
    --ds-button-padding-inline-start: ${t(h)};
    --ds-button-padding-inline-end: ${t(h)};
    --ds-button-padding-block-start: ${t(g)};
    --ds-button-padding-block-end: ${t(g)};
    --ds-button-font-size: var(--ds-app-type-label-s-font-size, 0.75rem);
    --ds-button-font-weight: var(--ds-app-type-label-s-font-weight, 600);
    --ds-button-line-height: var(--ds-app-type-label-s-line-height, 1rem);
  }

  :host([appearance='button--tag']:hover) {
    --ds-button-background-color: var(
      --ds-app-color-interactive-secondary-bg-hover,
      rgba(0, 85, 151, 0.4)
    );
    --ds-button-color: var(--ds-app-color-interactive-secondary-fg-hover, #263e65) !important;
    --ds-button-text-decoration: underline;
  }

  :host([appearance='button--tag']:active),
  :host([appearance='button--tag'][active]) {
    --ds-button-background-color: var(--ds-app-color-interactive-primary-bg-active, #004275);
    --ds-button-color: var(--ds-app-color-interactive-primary-fg-active, #fff) !important;
  }

  :host([icon-only]),
  :host([shape='circle']) {
    --ds-button-padding-inline-start: 0.75rem;
    --ds-button-padding-inline-end: 0.75rem;
    --ds-button-padding-block-start: 0.875rem;
    --ds-button-padding-block-end: 0.875rem;
  }

  :host([icon-only]) {
    --ds-button-max-height: 3rem;
  }

  :host([icon-only][size='medium']) {
    --ds-button-max-height: 2.5rem;
    --ds-button-padding-inline-start: 0.5rem;
    --ds-button-padding-inline-end: 0.5rem;
    --ds-button-padding-block-start: 0.75rem;
    --ds-button-padding-block-end: 0.75rem;
  }

  :host([icon-only][size='small']) {
    --ds-button-max-height: 2rem;
    --ds-button-padding-inline-start: 0.25rem;
    --ds-button-padding-inline-end: 0.25rem;
    --ds-button-padding-block-start: 0.5rem;
    --ds-button-padding-block-end: 0.5rem;
  }

  :host([icon-only]) ::slotted([slot='button__text']) {
    position: absolute;
    overflow: hidden;
    width: 1rem;
    height: 1rem;
    clip: rect(1px, 1px, 1px, 1px);
  }

  :host([fill-color]) {
    --ds-button-background-color: var(
      --ds-fill-color-override,
      ${t(y.backgroundColor)}
    );
    border-radius: var(--ds-button-border-radius, ${t(y.borderRadius)});
  }

  :host([fill-color]:hover),
  :host([appearance][fill-color]:hover) {
    --ds-button-background-color: hsl(from var(--ds-fill-color-override) h 80% l / 100%);
  }

  :host([fill-color]:active),
  :host([appearance][fill-color]:active) {
    --ds-button-background-color: hsl(from var(--ds-fill-color-override) h s 30% / 100%);
  }

  /* High contrast mode */
  @media (forced-colors: active) {
    /* All buttons get borders by default */
    :host button,
    :host a,
    :host([light-dom]) ::slotted(a),
    :host([light-dom]) ::slotted(button),
    :host span,
    :host div {
      border: var(--ds-border-s, 0.125rem) solid;
    }

    /* Secondary buttons get dotted borders */
    :host([appearance='button--secondary']) button,
    :host([appearance='button--secondary']) a,
    :host([appearance='button--secondary']) span,
    :host([appearance='button--secondary']) div,
    :host([appearance='button--secondary']) ::slotted(button),
    :host([appearance='button--secondary']) ::slotted(a) {
      border: var(--ds-border-s, 0.125rem) dotted;
    }

    :host([appearance='button--ghost']:hover) button,
    :host([appearance='button--ghost']:hover) a,
    :host([appearance='button--ghost']:hover) ::slotted(button),
    :host([appearance='button--ghost']:hover) ::slotted(a) {
      background-color: Highlight;
      color: HighlightText !important;
      forced-color-adjust: none;
    }

    :host([aria-current='page']:not([disabled])) button,
    :host([aria-current='page']:not([disabled])) a,
    :host([aria-current='page']:not([disabled])) ::slotted(button),
    :host([aria-current='page']:not([disabled])) ::slotted(a) {
      background-color: Highlight;
      border-color: ButtonBorder;
      color: HighlightText !important;
      forced-color-adjust: none;
    }
  }

  :host([light-dom]) ::slotted(a),
  :host([light-dom]) ::slotted(button) {
    color: var(--ds-button-color, ${t(y.color)}) !important;
    border-radius: var(
      --ds-button-border-radius,
      ${t(y.borderRadius)}
    ) !important;
  }
`;function w(t){return Array.from(t.children).find(t=>{var o;const e=null==(o=t.tagName)?void 0:o.toLowerCase();return"button"===e||"a"===e})}function k(t,o){const e=t.target instanceof HTMLSlotElement?t.target:null;if(!e)return;const r=e.assignedElements({flatten:!0})[0];r&&(o.hasAttribute("aria-disabled")&&r.setAttribute("aria-disabled",""),o.hasAttribute("aria-expanded")&&r.setAttribute("aria-expanded",""),o.ariaLabel&&r.setAttribute("aria-label",o.ariaLabel),o.title&&r.setAttribute("title",o.title),o.disabled&&r.setAttribute("disabled",""),"button"===r.tagName.toLowerCase()&&(o.ariaControls&&r.setAttribute("aria-controls",o.ariaControls),o.ariaHasPopup&&r.setAttribute("aria-haspopup",o.ariaHasPopup),void 0!==o.ariaPressed&&null!==o.ariaPressed&&r.setAttribute("aria-pressed",o.ariaPressed),o.autoFocus?r.setAttribute("autofocus",""):r.removeAttribute("autofocus"),o.form&&r.setAttribute("form",o.form),o.formAction&&r.setAttribute("formaction",o.formAction),o.formEncType&&r.setAttribute("formenctype",o.formEncType),o.formMethod&&r.setAttribute("formmethod",o.formMethod),o.formNoValidate?r.setAttribute("formnovalidate",""):r.removeAttribute("formnovalidate"),o.formTarget&&r.setAttribute("formtarget",o.formTarget),o.name&&r.setAttribute("name",o.name),o.popovertarget&&r.setAttribute("popovertarget",o.popovertarget),o.popovertargetaction&&r.setAttribute("popovertargetaction",o.popovertargetaction),o.value&&r.setAttribute("value",o.value),o.type&&r.setAttribute("type",o.type)),"a"===r.tagName.toLowerCase()&&(o.download&&r.setAttribute("download",o.download),o.href&&r.setAttribute("href",o.href),o.hreflang&&r.setAttribute("hreflang",o.hreflang),o.lang?r.setAttribute("lang",o.lang):r.removeAttribute("lang"),o.ping&&r.setAttribute("ping",o.ping),o.referrerpolicy&&r.setAttribute("referrerpolicy",o.referrerpolicy),o.rel&&r.setAttribute("rel",o.rel),o.target&&r.setAttribute("target",o.target),o.type&&"button"!==o.type&&r.setAttribute("type",o.type)))}var x=Object.defineProperty,A=Object.getOwnPropertyDescriptor,z=(t,o,e,r)=>{for(var a,n=r>1?void 0:r?A(o,e):o,i=t.length-1;i>=0;i--)(a=t[i])&&(n=(r?a(o,e,n):a(n))||n);return r&&n&&x(o,e,n),n};const B="reimagine-button";let C=class extends(v(i(d(s(f))))){constructor(){super(...arguments),this.lightDOM=!1,this.active=!1,this.disabled=!1,this.buttonLabel=null}_buildButtonMarkup(){const t=this.iconOnly?e`<slot name="button__icon"></slot>`:"",o=this.withIconPrepend?e`<slot name="button__icon-prepend"></slot>`:"",r=this.withIconAppend?e`<slot name="button__icon-append"></slot>`:"",a=e`<slot name="button__text"></slot>`,n=this.videoControl===m.play?e`<reimagine-icon icon="play"></reimagine-icon>`:"",i=this.videoControl===m.pause?e`<reimagine-icon icon="pause"></reimagine-icon>`:"";let d;return d=this.withIconPrepend&&this.withIconAppend?e`${o}${a}${r}`:this.withIconPrepend?e`${o}${a}`:this.withIconAppend?e`${a}${r}`:this.videoControl===m.play?e`${n}${a}`:this.videoControl===m.pause?e`${i}${a}`:this.iconOnly?e`${t}${a}`:a,d}_renderCustomElement(){return"div"===this.element?e`<div>${this._buildButtonMarkup()}</div>`:e`<span>${this._buildButtonMarkup()}</span>`}render(){if(this.videoControl&&(this.iconOnly=!0,this.videoControl===m.play&&(this.buttonLabel=this.playButtonLabel||"Play video"),this.videoControl===m.pause&&(this.buttonLabel=this.pauseButtonLabel||"Pause video")),this.ariaLabel=this.buttonLabel,this.title=this.buttonTitle??"",w(this))return this.lightDOM=!0,e`<slot @slotchange=${t=>k(t,this)}></slot>`;const t=this._buildButtonMarkup();let o;return o=this.element&&""!==this.element?e`${this._renderCustomElement()}`:this.href?this.renderLink(t):this.renderButton(t),o}};C.shadowRootOptions={...f.shadowRootOptions,delegatesFocus:!0},C.styles=[$],z([r({type:Boolean,reflect:!0,attribute:"light-dom"})],C.prototype,"lightDOM",2),z([r({type:Boolean,reflect:!0})],C.prototype,"active",2),z([r({reflect:!0})],C.prototype,"appearance",2),z([r({reflect:!0})],C.prototype,"size",2),z([r({reflect:!0})],C.prototype,"shape",2),z([r({type:Boolean,reflect:!0,attribute:"icon-only"})],C.prototype,"iconOnly",2),z([r({type:Boolean,reflect:!0,attribute:"with-icon-prepend"})],C.prototype,"withIconPrepend",2),z([r({type:Boolean,reflect:!0,attribute:"with-icon-append"})],C.prototype,"withIconAppend",2),z([r({type:Boolean,reflect:!0})],C.prototype,"disabled",2),z([r({reflect:!0})],C.prototype,"element",2),z([r({reflect:!0,attribute:"button-label"})],C.prototype,"buttonLabel",2),z([r({reflect:!0,attribute:"video-control"})],C.prototype,"videoControl",2),z([r({reflect:!0,attribute:"play-button-label"})],C.prototype,"playButtonLabel",2),z([r({reflect:!0,attribute:"pause-button-label"})],C.prototype,"pauseButtonLabel",2),z([r({reflect:!0,attribute:"button-title"})],C.prototype,"buttonTitle",2),C=z([a(B)],C);export{C as B,w as d,k as h,B as n};
