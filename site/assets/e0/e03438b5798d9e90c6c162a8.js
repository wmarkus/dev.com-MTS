import{r as a,i as e,b as t,c as s}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as r}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{s as o}from"/__mirror/assets/c0e4f787350a76403ae5c3f1";import{l as d}from"/__mirror/assets/2e9aed9389db597dff461cb3";import{l as i,m as c,c as n,w as l,L as p}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{p as g,v,F as b,R as f}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{I as m}from"/__mirror/assets/597f3dbe3ef56339bfbefa4a";const h="inline-flex",k="center",u="var(--ds-app-color-base-special-bg-opt2-top-left, linear-gradient(135deg, var(--ds-app-color-base-special-bg-opt2-stop1, #cbe6f4) 0%, var(--ds-app-color-base-special-bg-opt2-stop2, #8dc8e8) 50%, var(--ds-app-color-base-special-bg-opt2-stop3, #c5b4e3) 100%))",x="var(--ds-app-color-base-default-fg-heading)",y="var(--ds-app-space-micro-m, 1rem)",$="var(--ds-app-space-micro-m, 1rem)",z="var(--ds-app-space-micro-2xs, 0.75rem)",w="var(--ds-app-space-micro-2xs, 0.75rem)",j="border-box",S="var(--ds-app-radii-xs)",L="var(--ds-tag-forced-border, 1px solid ButtonText)",O=e`
  a {
    ${d};
  }
  :host {
    --ds-link-cursor: default;
    --ds-link-text-decoration: none;

    justify-content: var(--ds-tag-justify-content, ${a("center")});
    align-items: var(--ds-tag-align-items, ${a(k)});
    display: var(--ds-tag-display, ${a(h)});
    box-sizing: var(--ds-tag-box-sizing, ${a(j)});
    background: var(--ds-tag-background, ${a(u)});
    color: var(--ds-tag-color, ${a(x)});
    border-color: transparent;
    border-radius: var(--ds-tag-border-radius, ${a(S)});
    padding-inline-start: var(
      --ds-tag-padding-inline-start,
      ${a($)}
    );
    padding-inline-end: var(
      --ds-tag-padding-inline-end,
      ${a(y)}
    );
    padding-block-start: var(
      --ds-tag-padding-block-start,
      ${a(w)}
    );
    padding-block-end: var(
      --ds-tag-padding-block-end,
      ${a(z)}
    );
    font-weight: var(--ds-tag-font-weight, ${a(i.fontWeight)});
    font-size: var(--ds-tag-font-size, ${a(i.fontSize)});
    line-height: var(--ds-tag-line-height, ${a(i.lineHeight)}) !important;
    letter-spacing: var(
      --ds-tag-letter-spacing,
      ${a(i.letterSpacing)}
    ) !important;
    text-transform: var(--ds-tag-text-transform, none);

    ::slotted(span) {
      padding-block-end: var(--ds-app-space-micro-3xs, 0.125rem);
    }

    @media (forced-colors: active) {
      border: var(--ds-tag-forced-border, ${a(L)});
    }
  }

  /* Medium: Label/Eyebrow, uppercase */
  :host([size='medium']) {
    --ds-tag-font-weight: ${a(c.fontWeight)};
    --ds-tag-font-size: ${a(c.fontSize)};
    --ds-tag-line-height: ${a(c.lineHeight)};
    --ds-tag-letter-spacing: ${a(c.letterSpacing)};
    --ds-tag-text-transform: uppercase;
    --ds-tag-padding-inline-start: var(--ds-app-space-micro-2xs);
    --ds-tag-padding-inline-end: var(--ds-app-space-micro-2xs);
    --ds-tag-padding-block-start: var(--ds-app-space-micro-3xs);
    --ds-tag-padding-block-end: var(--ds-app-space-micro-3xs);
  }

  /* Small: Label/S */
  :host([size='small']) {
    --ds-tag-font-weight: ${a(n.fontWeight)};
    --ds-tag-font-size: ${a(n.fontSize)};
    --ds-tag-line-height: ${a(n.lineHeight)};
    --ds-tag-letter-spacing: ${a(n.letterSpacing)};
    --ds-tag-padding-inline-start: var(--ds-app-space-micro-2xs);
    --ds-tag-padding-inline-end: var(--ds-app-space-micro-2xs);
    --ds-tag-padding-block-start: var(--ds-app-space-micro-3xs);
    --ds-tag-padding-block-end: var(--ds-app-space-micro-3xs);
  }

  :host([size='medium']) ::slotted(span),
  :host([size='small']) ::slotted(span) {
    padding-block-end: 0.0625rem;
  }

  /* ----- Non-clickable "New" badge ----- */
  :host([appearance='new']) {
    --ds-tag-background: var(--ds-comp-color-tag-new-bg, var(--ds-color-info-200, #8ab4f4));
    --ds-tag-color: var(--ds-app-color-base-default-fg-heading, #0e1726);
  }

  :host([appearance='new'][theme='dark']) {
    --ds-tag-background: var(--ds-comp-color-tag-new-bg, var(--ds-color-info-500, #005ce8));
    --ds-tag-color: var(--ds-color-alpha-white-900, #fff);
  }

  /* ----- Clickable states -----
     Colors are locked: the fill-color / text-color override is disabled for clickable tags (see
     isColorOverrideEnabled in index.ts), so setting background / color directly is enough. */
  :host([clickable]) {
    --ds-link-cursor: pointer;
    --ds-tag-background: var(--ds-app-color-interactive-secondary-bg-default);
  }
  :host([clickable]) a {
    --ds-tag-color: var(--ds-app-color-interactive-secondary-fg-default);
  }

  :host([clickable]:hover) {
    --ds-tag-background: var(--ds-app-color-interactive-secondary-bg-hover);
  }
  :host([clickable]:hover) a {
    --ds-tag-color: var(--ds-app-color-interactive-secondary-fg-hover);
  }

  :host([clickable]:active) {
    --ds-tag-background: var(--ds-app-color-interactive-secondary-bg-active);
  }
  :host([clickable]:active) a {
    --ds-tag-color: var(--ds-app-color-interactive-secondary-fg-active);
  }

  :host([selected]),
  :host([clickable][selected]) {
    --ds-tag-background: var(--ds-app-color-interactive-secondary-bg-selected);
    --ds-tag-color: var(--ds-app-color-interactive-secondary-fg-selected);
  }

  :host([selected]) a,
  :host([clickable][selected]) a {
    --ds-link-color: var(--ds-app-color-interactive-secondary-fg-selected);
    --ds-tag-color: var(--ds-app-color-interactive-secondary-fg-selected);
  }

  :host([clickable]:focus) {
    outline: var(--ds-tag-outline, ${a(g)});
    outline-offset: var(--ds-tag-outline-offset, ${a(v)});
  }
`;var B=Object.defineProperty,C=Object.getOwnPropertyDescriptor,H=(a,e,t,s)=>{for(var r,o=s>1?void 0:s?C(e,t):e,d=a.length-1;d>=0;d--)(r=a[d])&&(o=(s?r(e,t,o):r(o))||o);return s&&o&&B(e,t,o),o};const W="reimagine-tag";let E=class extends(b(l(p(m(f))))){constructor(){super(...arguments),this.clickable=!1,this.selected=!1}render(){return this.clickable?this.renderLink(t`<slot></slot>`):t`<slot></slot>`}};E.styles=[o,O],H([s({type:Boolean,reflect:!0})],E.prototype,"clickable",2),H([s({type:Boolean,reflect:!0})],E.prototype,"selected",2),H([s({reflect:!0,attribute:"size"})],E.prototype,"size",2),H([s({type:String,reflect:!0})],E.prototype,"appearance",2),E=H([r(W)],E);export{E as Tag,W as name};
