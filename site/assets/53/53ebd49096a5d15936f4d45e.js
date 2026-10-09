import{r as e,i as t,c as o,b as i,o as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as n}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{l as s,c as a,o as l,r as p,v as g}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{L as c,a as d}from"/__mirror/assets/a6479ea808b36b42c5f26c81";import"/__mirror/assets/9bce10b1f8f8949b4fd224b8";const h={labelSmall:"label-small",labelMedium:"label-medium"},v="top",b="middle",f="info",m={marginInline:"var(--ds-app-space-micro-2xs, 0.25rem)",labelFontSize:`${e(s.fontSize)}`,labelFontWeight:`${e(s.fontWeight)}`,buttonPadding:"var(--ds-app-space-micro-3xs, 0.125rem)",hoverColor:"var(--ds-app-color-interactive-secondary-fg-hover)",iconHoverColor:"var(--ds-app-color-interactive-primary-bg-hover)",iconTooltipColor:"var(--ds-app-color-interactive-secondary-fg-default)",iconTooltipHoverColor:"var(--ds-app-color-interactive-secondary-fg-hover)"},u=t`
  :host button {
    display: inline-block;
    padding: var(--ds-popover-trigger-button-padding, ${e(m.buttonPadding)});
  }

  :host .popover-trigger__icon {
    vertical-align: top;
  }

  /* Keep support for icon-position="left-middle" until the next major version */
  :host([icon-position*='middle']) .popover-trigger__icon,
  :host([icon-vertical-position='${e(b)}'])
    .popover-trigger__icon {
    vertical-align: middle;
  }

  :host([icon-position^='left']) .popover-trigger__icon {
    margin-inline-end: var(
      --ds-popover-trigger-margin-inline,
      ${e(m.marginInline)}
    );
  }

  :host([icon-position^='right']) .popover-trigger__icon {
    margin-inline-start: var(
      --ds-popover-trigger-margin-inline,
      ${e(m.marginInline)}
    );
  }

  :host([text-size]) ::slotted([slot='link__text']) {
    font-size: var(
      --ds-popover-trigger-label-font-size,
      ${e(m.labelFontSize)}
    );
    font-weight: var(
      --ds-popover-trigger-label-font-weight,
      ${e(m.labelFontWeight)}
    );
  }

  :host([text-size='label-small']) ::slotted([slot='link__text']) {
    --ds-popover-trigger-label-font-size: ${e(a.fontSize)};
    --ds-popover-trigger-label-font-weight: ${e(a.fontWeight)};
  }

  :host([text-size='body-small']) ::slotted([slot='link__text']) {
    --ds-popover-trigger-label-font-size: ${e(l.fontSize)};
    --ds-popover-trigger-label-font-weight: ${e(l.fontWeight)};
  }

  :host([text-size='body-medium']) ::slotted([slot='link__text']) {
    --ds-popover-trigger-label-font-size: ${e(p.fontSize)};
    --ds-popover-trigger-label-font-weight: ${e(p.fontWeight)};
  }

  :host([text-size='heading-2xs']) ::slotted([slot='link__text']) {
    --ds-popover-trigger-label-font-size: ${e(g.fontSize)};
    --ds-popover-trigger-label-font-weight: ${e(g.fontWeight)};
  }

  :host([text-size='heading-2xs']) button {
    --ds-button-text-decoration: ${e(g.textDecoration)};
  }

  :host(:hover) button {
    --ds-link-color: var(--ds-popover-trigger-hover-color, ${e(m.hoverColor)});
  }

  :host(:hover) .popover-trigger__icon {
    --ds-icon-color: var(
      --ds-popover-trigger-icon-hover-color,
      ${e(m.iconHoverColor)}
    );
  }

  :host([icon='tooltip']) .popover-trigger__icon {
    --ds-icon-color: var(
      --ds-popover-trigger-icon-tooltip-color,
      ${e(m.iconTooltipColor)}
    );
  }

  :host([icon='tooltip']:hover) .popover-trigger__icon {
    --ds-icon-color: var(
      --ds-popover-trigger-icon-tooltip-hover-color,
      ${e(m.iconTooltipHoverColor)}
    );
  }
`;var $=Object.defineProperty,_=Object.getOwnPropertyDescriptor,x=Object.getPrototypeOf,z=Reflect.get,y=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?_(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&$(t,o,n),n};const S="reimagine-popover-trigger";let k=class extends c{constructor(){super(...arguments),this.badge=!1}connectedCallback(){super.connectedCallback(),this.hasAttribute("icon-position")||(this.iconPosition=d.right)}willUpdate(e){super.willUpdate(e),this.icon=this.icon??f,this.textSize=this.textSize??h.labelMedium,this.iconVerticalPosition=this.iconVerticalPosition??v}render(){const e=i`<slot name="link__text"></slot>`;this.ariaLabel||(this.ariaLabel="Popover trigger");const t=i`<reimagine-icon
      icon="${this.icon}"
      ?filled="${this.icon===f}"
      size="${this.icon===f?"xsmall":"small"}"
      class="popover-trigger__icon"
    ></reimagine-icon>`,o=i`<button>
      <reimagine-badge
        clickable
        theme=${r(this.theme)}
        size=${r(this.badgeSize)}
        shape=${r(this.badgeShape)}
        surface=${r(this.badgeSurface)}
      >
        <slot name="popover-trigger__badge-asset"></slot>
      </reimagine-badge>
    </button> `,n=this.iconPosition.includes("right")?super.renderButton(i`${e}${t}`):super.renderButton(i`${t}${e}`);return this.badge?i`${o}`:i`${n}`}};var P,C,j;k.styles=[...(P=k,C=k,j="styles",z(x(P),j,C)),u],y([o({type:String,reflect:!0,attribute:"text-size"})],k.prototype,"textSize",2),y([o({type:String,reflect:!0,attribute:"icon-vertical-position"})],k.prototype,"iconVerticalPosition",2),y([o({type:String,reflect:!0})],k.prototype,"icon",2),y([o({type:Boolean,reflect:!0})],k.prototype,"badge",2),y([o({type:String,reflect:!0,attribute:"badge-size"})],k.prototype,"badgeSize",2),y([o({type:String,reflect:!0,attribute:"badge-shape"})],k.prototype,"badgeShape",2),y([o({type:String,reflect:!0,attribute:"badge-surface"})],k.prototype,"badgeSurface",2),k=y([n(S)],k);export{k as P,h as a,S as n};
