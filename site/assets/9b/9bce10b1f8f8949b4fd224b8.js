import{r as e,i as t,c as a,e as d,f as s,b as i,o as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i as o,d as l}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{f as g,d as n,a as h,h as b,B as p}from"/__mirror/assets/4230c2711e37b2e85105da0e";import{s as m}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{n as c,a as v}from"/__mirror/assets/34233ee5ac8acdb3aa831b25";import{R as u}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";const f="center",y="0.5rem",x="var(--ds-surface-border-width, 1px)",$="var(--ds-surface-box-shadow, none)",_="inline-flex",w="2rem",S="2rem",k="center",z="2rem",E="2rem",j="var(--ds-app-type-body-m-font-weight, 400)",A="100%",B="inline-flex",C="auto",O="0.25rem",I="var(--ds-app-color-base-default-fg-heading, #0e1726)",L=t`
  :host {
    display: var(--ds-badge-host-display, inline-flex);
  }

  :host([surface]) {
    --ds-surface-border-radius: var(
      --ds-badge-border-radius,
      var(--ds-app-radii-s, ${e(y)})
    );

    background: none !important;
    backdrop-filter: none !important;
    box-shadow: none !important;
    border-radius: 0 !important;
    border-width: 0 !important;
    border-style: none !important;
  }

  .badge {
    --ds-badge-img-width: ${e(A)};
    --ds-badge-img-display: ${e(B)};
    --ds-badge-img-height: ${e(C)};
    --ds-badge-img-radius: var(--ds-app-radii-xs, ${e(O)});

    display: var(--ds-badge-display, ${e(_)});
    justify-content: var(--ds-badge-justify-content, ${e(k)});
    align-items: var(--ds-badge-align-items, ${e(f)});
    box-shadow: var(--ds-badge-box-shadow, ${e($)});
    width: var(--ds-badge-width, ${e(S)});
    height: var(--ds-badge-height, ${e(w)});
    max-width: var(--ds-badge-max-width, ${e(z)});
    max-height: var(--ds-badge-max-height, ${e(E)});
    padding-block: var(
        --ds-badge-padding-block-start,
        calc(var(--ds-badge-max-height, ${e(w)}) / 4)
      )
      var(
        --ds-badge-padding-block-end,
        calc(var(--ds-badge-max-height, ${e(w)}) / 4)
      );
    padding-inline: var(
        --ds-badge-padding-inline-start,
        calc(var(--ds-badge-max-height, ${e(w)}) / 4)
      )
      var(
        --ds-badge-padding-inline-end,
        calc(var(--ds-badge-max-height, ${e(w)}) / 4)
      );

    background: var(
      --ds-badge-background,
      var(--ds-surface-background, ${e(g.background)})
    );
    border-width: var(--ds-badge-border-width, ${e(x)});
    border-style: var(
      --ds-badge-border-style,
      var(--ds-surface-border-style, ${e(g.borderStyle)})
    );
    border-color: var(
      --ds-badge-border-color,
      var(--ds-surface-border-color, ${e(g.borderColor)})
    );
    border-radius: var(
      --ds-surface-border-radius,
      var(--ds-app-radii-s, ${e(y)})
    );
    box-sizing: border-box;
  }

  ::slotted(reimagine-icon) {
    --ds-icon-img-border-radius: var(
      --ds-radii-xs,
      ${e(O)}
    );
  }

  ::slotted(img) {
    width: var(--ds-badge-img-width);
    display: var(--ds-badge-img-display);
    height: var(--ds-badge-img-height);
    border-radius: var(--ds-badge-img-radius);
  }

  :host([size='xs']) ::slotted(img) {
    --ds-badge-img-width: 1.063rem;
    --ds-badge-img-height: 1.063rem;
  }

  :host([size='s']) ::slotted(img) {
    --ds-badge-img-width: 1.625rem;
    --ds-badge-img-height: 1.625rem;
  }

  :host([size='m']) ::slotted(img) {
    --ds-badge-img-width: 2.125rem;
    --ds-badge-img-height: 2.125rem;
  }

  :host([size='l']) ::slotted(img) {
    --ds-badge-img-width: 2.625rem;
    --ds-badge-img-height: 2.625rem;
  }

  :host([size='xl']) ::slotted(img) {
    --ds-badge-img-width: 4.25rem;
    --ds-badge-img-height: 4.25rem;
  }

  ::slotted(reimagine-media) {
    --ds-media-asset-border-start-start-radius: var(--ds-app-radii-xs, 0.25rem);
    --ds-media-asset-border-start-end-radius: var(--ds-app-radii-xs, 0.25rem);
    --ds-media-asset-border-end-start-radius: var(--ds-app-radii-xs, 0.25rem);
    --ds-media-asset-border-end-end-radius: var(--ds-app-radii-xs, 0.25rem);
    --ds-media-asset-overflow: hidden;
  }

  :host([surface='glass']) {
    --ds-badge-background: ${e(n.background)};
    --ds-badge-border-width: ${e(n.borderWidth)};
    --ds-badge-border-style: ${e(n.borderStyle)};
    --ds-badge-border-color: ${e(n.borderColor)};
  }

  :host([shape='oval']) {
    --ds-badge-border-radius: var(--ds-app-radii-circle);
  }

  :host([shape='oval']) ::slotted(reimagine-media) {
    --ds-media-asset-border-start-start-radius: var(--ds-app-radii-circle);
    --ds-media-asset-border-start-end-radius: var(--ds-app-radii-circle);
    --ds-media-asset-border-end-start-radius: var(--ds-app-radii-circle);
    --ds-media-asset-border-end-end-radius: var(--ds-app-radii-circle);
  }

  :host([shape='oval']) ::slotted(img) {
    border-radius: var(--ds-app-radii-circle);
  }

  :host([size='xs']) {
    --ds-badge-bg-color: var(--ds-app-color-surface-solid-bg-default);
  }

  :host([size='s']) {
    --ds-badge-max-width: 3rem;
    --ds-badge-max-height: 3rem;
    --ds-badge-width: 3rem;
    --ds-badge-height: 3rem;
  }

  :host([size='m']) {
    --ds-badge-max-width: 4rem;
    --ds-badge-max-height: 4rem;
    --ds-badge-width: 4rem;
    --ds-badge-height: 4rem;
  }

  :host([size='l']) {
    --ds-badge-max-width: 5rem;
    --ds-badge-max-height: 5rem;
    --ds-badge-width: 5rem;
    --ds-badge-height: 5rem;
  }

  :host([size='xl']) {
    --ds-badge-max-width: 8rem;
    --ds-badge-max-height: 8rem;
    --ds-badge-width: 8rem;
    --ds-badge-height: 8rem;
    --ds-badge-padding-block-start: 0.625rem;
    --ds-badge-padding-block-end: 0.625rem;
    --ds-badge-padding-inline-start: 0.625rem;
    --ds-badge-padding-inline-end: 0.625rem;
  }

  :host([type='media']) {
    --ds-badge-padding-block-start: calc(
      var(--ds-badge-max-height, ${e(w)}) / 8
    );
    --ds-badge-padding-block-end: calc(
      var(--ds-badge-max-height, ${e(w)}) / 8
    );
    --ds-badge-padding-inline-start: calc(
      var(--ds-badge-max-height, ${e(w)}) / 8
    );
    --ds-badge-padding-inline-end: calc(
      var(--ds-badge-max-height, ${e(w)}) / 8
    );
  }

  :host([clickable]) {
    --ds-badge-box-shadow: var(--ds-elevation-level-1);
    cursor: pointer;
  }

  :host([clickable]:hover) {
    --ds-badge-box-shadow: var(--ds-elevation-level-2);
  }

  :host([clickable]:active) {
    --ds-badge-background: var(--ds-app-color-surface-solid-bg-pressed);
    --ds-badge-box-shadow: var(--ds-elevation-level-1);
  }

  :host([type='text']) {
    --ds-badge-max-width: fit-content;
    --ds-badge-width: fit-content;
    color: var(--ds-badge-text-color, ${e(I)});
    font-weight: var(--ds-badge-font-weight, ${e(j)});
  }

  :host([configuration='title']) {
    gap: var(--ds-badge-title-gap, var(--ds-app-space-micro-xs, 0.25rem));
  }

  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .tag {
    display: flex;
    padding-block-start: var(--ds-badge-tag-padding-block-start, var(--ds-app-space-micro-2xs, 0.25rem));
    padding-block-end: var(--ds-badge-tag-padding-block-end, var(--ds-app-space-micro-xs, 0.5rem));
  }

  .title {
    font-weight: ${e(m.fontWeight)};
    font-size: ${e(m.fontSize)};
    line-height: ${e(m.lineHeight)};
    letter-spacing: ${e(m.letterSpacing)};
    margin-bottom: ${e(m.marginBottom)};
  }

  .label {
    font-size: var(--ds-app-type-body-xs-font-size, 0.75rem);
    line-height: var(--ds-app-type-body-xs-line-height, 1rem);
    letter-spacing: var(--ds-app-type-body-xs-letter-spacing, 0.033em);
    font-weight: var(--ds-app-type-body-xs-font-weight, 400);
    margin: 0;
  }

  .title,
  .label {
    color: var(--ds-badge-text-color, ${e(I)});
  }
`;var M=Object.defineProperty,N=Object.getOwnPropertyDescriptor,P=(e,t,a,d)=>{for(var s,i=d>1?void 0:d?N(t,a):t,r=e.length-1;r>=0;r--)(s=e[r])&&(i=(d?s(t,a,i):s(i))||i);return d&&i&&M(t,a,i),i};const T="reimagine-badge",W=new Map([["default",v.medium],[p.xs,v.medium],[p.s,v.large],[p.m,v.xlarge],[p.l,v.x2large],[p.xl,v.x3large]]);let D=class extends u{constructor(){super(...arguments),this._defaultSlotEmpty=!1,this._titleEmpty=!0,this._labelEmpty=!0,this._tagEmpty=!0,this.surface=h.solidBorder}_handleSlotChange(){this._defaultSlotEmpty=0===this._defaultSlot.length,this._titleEmpty=0===this._titleSlot.length,this._labelEmpty=0===this._labelSlot.length,this._tagEmpty=0===this._tagSlot.length,this._defaultSlotEmpty||(this._icon=this._defaultSlot.find(e=>o(e,c)),this._setIconAttributes(),this._setTypeAttribute(),this._setBadgeAttributes())}_setTypeAttribute(){const e=this._defaultSlot.some(e=>e.nodeName.toLowerCase().includes("span")),t=this._defaultSlot.some(e=>e.nodeName.toLowerCase().includes("media"));e?this.type="text":t?this.type="media":this.removeAttribute("type")}_setIconAttributes(){this._icon&&(!this._icon.hasAttribute("size")||this.size)&&this._icon.setAttribute("size",W.get(this.size||"default"))}_setBadgeAttributes(){this.configuration===b.title&&!this.size&&(this.size=p.m)}updated(e){e.has("size")&&this._icon&&this._setIconAttributes()}_renderOptionalSlot(e,t){return i`
      <div part="${e}" class="${e}" style="${t?"display: none;":""}">
        <slot name="${e}" @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}render(){return i`
      <div
        part="badge"
        class="badge"
        surface="${r(this.configuration===b.title?r(this.surface):void 0)}"
      >
        <slot @slotchange=${this._handleSlotChange}></slot>
      </div>
      <div
        part="content"
        class="content"
        style="${this._titleEmpty||this.configuration!==b.title?"display: none;":""}"
      >
        ${this._renderOptionalSlot("title",this._titleEmpty)}
        ${this._renderOptionalSlot("label",this._labelEmpty)}
        ${this._renderOptionalSlot("tag",this._tagEmpty)}
      </div>
    `}};D.styles=[L],P([a({reflect:!0})],D.prototype,"configuration",2),P([d({flatten:!0})],D.prototype,"_defaultSlot",2),P([d({slot:"title"})],D.prototype,"_titleSlot",2),P([d({slot:"label"})],D.prototype,"_labelSlot",2),P([d({slot:"tag"})],D.prototype,"_tagSlot",2),P([a({type:Boolean,reflect:!0})],D.prototype,"_defaultSlotEmpty",2),P([s()],D.prototype,"_titleEmpty",2),P([s()],D.prototype,"_labelEmpty",2),P([s()],D.prototype,"_tagEmpty",2),P([s()],D.prototype,"_icon",2),P([a({reflect:!0})],D.prototype,"type",2),P([a({reflect:!0})],D.prototype,"size",2),P([a({reflect:!0})],D.prototype,"surface",2),P([a({reflect:!0})],D.prototype,"shape",2),P([a({type:Boolean,reflect:!0})],D.prototype,"clickable",2),D=P([l(T)],D);export{D as Badge,W as BadgeIconSizeMap,T as name};
