import{r as e,i as t,g as i,b as a}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{q as s,s as n,d as r}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{n as o}from"/__mirror/assets/bf0b3498e45fc20534cec8b1";import{v as l}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{b as d,c as h,M as c,g}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{r as p,s as m,t as u}from"/__mirror/assets/6ad137053d5da8fc91d912f1";const f=t`
  :host {
    --ds-ui-shell-breadcrumbs-padding-inline-start: 0;
    --ds-ui-shell-breadcrumbs-padding-inline-end: 0;
  }

  @media (min-width: ${e(l.sm)}) {
    :host {
      --ds-hero-author-fg-media-padding-left: 0;
      --ds-ui-shell-breadcrumbs-padding-inline-start: 0;
      --ds-ui-shell-breadcrumbs-padding-inline-end: 0;
    }
  }

  @media (min-width: ${e(l.md)}) {
    :host {
      --ds-layout-flex-direction: row;
      --ds-ui-shell-gap: 1.125rem;
      --ds-hero-author-fg-media-padding-left: 0;
      --ds-ui-shell-breadcrumbs-padding-inline-start: 0;
      --ds-ui-shell-breadcrumbs-padding-inline-end: 0;
      --ds-hero-author-left-justify-content: center;
      --ds-hero-author-fg-media-justify-content: flex-end;
    }
  }

  @media (min-width: ${e(l.lg)}) {
    :host {
      --ds-ui-shell-gap: initial;
      --ds-hero-author-fg-media-padding-left: 10.5rem;
      --ds-ui-shell-breadcrumbs-padding-inline-start: 0;
      --ds-ui-shell-breadcrumbs-padding-inline-end: 0;
      --ds-hero-author-left-justify-content: center;
    }
  }
`,b="flex",v="column",y="var(--ds-app-space-micro-m, 1rem)",$="flex",j="column",x="flex",S="center",w=t`
  :host {
    --ds-ui-shell-padding-block-start: 0;
    --ds-ui-shell-padding-block-end: 0;
    --ds-ui-shell-gap: 1rem;
    --ds-layout-flex-direction: column-reverse;
    --ds-layout-row-gap: 2rem;
    color: var(--ds-hero-author-color, ${e("var(--ds-app-color-base-default-fg-heading, var(--ds-color-brilliant-blue-900, #002948))")});
  }

  :host ::slotted([slot='content']) {
    font-size: ${e(p.fontSize)};
    font-weight: ${e(p.fontWeight)};
    line-height: ${e(p.lineHeight)};
    letter-spacing: ${e(p.letterSpacing)};
  }

  :host ::slotted([slot='sub-headline']) {
    font-size: ${e(m.fontSize)};
    letter-spacing: ${e(m.letterSpacing)};
    font-weight: ${e(m.fontWeight)};
    line-height: ${e(m.lineHeight)};
  }

  :host ::slotted([slot='head-line']) {
    font-size: ${e(u.fontSize)} !important;
    font-weight: ${e(u.fontWeight)} !important;
    line-height: ${e(u.lineHeight)} !important;
    letter-spacing: ${e(u.letterSpacing)} !important;
  }

  :host ::slotted([slot='fg-media']) {
    display: var(--ds-hero-author-fg-media-display, ${e(x)});
    justify-content: var(
      --ds-hero-author-fg-media-justify-content,
      ${e(S)}
    );
  }

  :host ::slotted([slot='social-links']) {
    --ds-link-group-column-gap: var(--ds-app-space-micro-m, 1rem);
  }

  .body {
    display: var(--ds-hero-author-body-display, ${e(b)});
    flex-direction: var(
      --ds-hero-author-body-flex-direction,
      ${e(v)}
    );
    gap: var(--ds-hero-author-body-gap, ${e(y)});
  }

  .left {
    display: var(--ds-hero-author-left-display, ${e($)});
    flex-direction: var(
      --ds-hero-author-left-flex-direction,
      ${e(j)}
    );
    gap: var(--ds-app-space-micro-l, 1.5rem);
    justify-content: var(--ds-hero-author-left-justify-content, initial);
    padding-inline-end: var(--ds-hero-author-padding-inline-end, 0);
    padding-inline-start: var(--ds-hero-author-padding-inline-start, 0);
  }
`;var k=Object.defineProperty,_=Object.getOwnPropertyDescriptor,M=Object.getPrototypeOf,z=Reflect.get,C=(e,t,i,a)=>{for(var s,n=a>1?void 0:a?_(t,i):t,r=e.length-1;r>=0;r--)(s=e[r])&&(n=(a?s(t,i,n):s(n))||n);return a&&n&&k(t,i,n),n};const O="reimagine-hero-author";let F=class extends d{_handleFgMediaSlotChange(){this._fgMediaSlot.forEach(e=>{const t=s(e,o);t&&n(t,{type:g.highlightGlass,"aspect-ratio":c.ratio1to1})})}renderLeftContent(){return a` <reimagine-layout-column part="left" class="left">
      <div class="body" part="body">
        <div class="head-line" part="head-line">
          <slot name="head-line"></slot>
        </div>
        <div class="sub-headline" part="sub-head-line">
          <slot name="sub-headline"></slot>
        </div>
        <div class="content" part="content">
          <slot name="content"></slot>
        </div>
      </div>
      <div class="social-links" part="social-links">
        <slot name="social-links"></slot>
      </div>
    </reimagine-layout-column>`}_renderFgMedia(){return a`<reimagine-layout-column>
      <slot @slotchange=${this._handleFgMediaSlotChange} name="fg-media"></slot>
    </reimagine-layout-column>`}_renderBlade(){const e="container",t=a`
      <reimagine-layout
        configuration=${h.col2even}
        density="relaxed"
        part="top"
        class="top"
      >
        ${this.renderLeftContent()} ${this._renderFgMedia()}
      </reimagine-layout>
    `;return this.baseContent?a` <div class=${e} part=${e}>${t}</div> `:a`
      <reimagine-container part=${e} class="${e}">
        ${t}
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var H,P,W;F.styles=[...(H=F,P=F,W="styles",z(M(H),W,P)||[]),w,f],C([i({slot:"fg-media"})],F.prototype,"_fgMediaSlot",2),F=C([r(O)],F);export{F as HeroAuthor,O as name};
