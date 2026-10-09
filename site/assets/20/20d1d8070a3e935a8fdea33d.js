import{i as e,r as a,g as t,b as i}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{s,m as o,q as r,d as n}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{b as d,c as m,M as l,g as c,k as h,h as p,H as g}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{b as u,v as f}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{n as y}from"/__mirror/assets/bf0b3498e45fc20534cec8b1";const b=e`
  :host {
    --ds-ui-shell-gap: var(--ds-app-space-micro-xl, 2rem);
    --ds-ui-shell-announcement-margin-block-start: calc(-1 * var(--ds-app-space-micro-2xs, 0.25rem));
    --ds-ui-shell-announcement-margin-block-end: var(--ds-app-space-micro-xs, 0.5rem);
  }

  .media-highlight reimagine-layout-column {
    --ds-layout-column-display: flex;
    --ds-layout-column-justify-content: center;
  }

  ::slotted([slot='media'][video]) {
    --ds-media-ump-min-width: auto;
    --ds-media-ump-min-height: auto;
  }
`,v=e`
  @media (max-width: ${a(u(f.sm))}) {
    ::slotted([slot='media']) {
      --ds-media-padding-inline-start: var(--ds-app-space-micro-s, 0.75rem);
      --ds-media-padding-inline-end: var(--ds-app-space-micro-s, 0.75rem);
      --ds-media-padding-block-start: var(--ds-app-space-micro-s, 0.75rem);
      --ds-media-padding-block-end: var(--ds-app-space-micro-s, 0.75rem);
    }
  }

  @media (min-width: ${a(f.md)}) and (max-width: ${a(u(f.lg))}) {
    .media-highlight {
      --ds-layout-justify-content: center;
    }

    .media-highlight reimagine-layout-column {
      --ds-layout-column-amount: 10;
    }
  }

  @media (min-width: ${a(f.md)}) {
    :host {
      --ds-ui-shell-announcement-margin-block-start: 0;
      --ds-ui-shell-announcement-margin-block-end: var(--ds-app-space-micro-m, 1rem);
    }
  }
  
`;var $=Object.defineProperty,x=Object.getOwnPropertyDescriptor,j=Object.getPrototypeOf,_=Reflect.get,k=(e,a,t,i)=>{for(var s,o=i>1?void 0:i?x(a,t):a,r=e.length-1;r>=0;r--)(s=e[r])&&(o=(i?s(a,t,o):s(o))||o);return i&&o&&$(a,t,o),o};const w="reimagine-hero-impact";let S=class extends d{_setMediaDefaultAttributes(e){s(e,{type:c.highlightGlass,"aspect-ratio":l.ratio16to9}),e.hasAttribute("video")&&s(e,{"video-fit":h.cover})}_handleMediaSlotChange(){!this._mediaSlot||0===this._mediaSlot.length||this._mediaSlot.forEach(e=>{const a=o(e,y)?e:r(e,y);a&&this._setMediaDefaultAttributes(a)})}setHeaderHeadingBlockDefaults(e){s(e,{size:g["size-2xl"],alignment:p.center})}firstUpdated(){super.firstUpdated(),s(this,{"media-orientation":"mobile-stack"}),s(this,{"header-layout-configuration":m.col1staged})}_renderBlade(){const e="container",a=i`
      <reimagine-layout
        configuration=${m.col1boxed}
        part="media-highlight"
        class="media-highlight"
      >
        <reimagine-layout-column>
          <slot name="media" @slotchange=${this._handleMediaSlotChange.bind(this)}></slot>
        </reimagine-layout-column>
      </reimagine-layout>
    `;return this.baseContent?i` <div class=${e} part=${e}>${a}</div> `:i`
      <reimagine-container class=${e} part=${e}>
        ${a}
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var M,O,D;S.styles=[...(M=S,O=S,D="styles",_(j(M),D,O)),b,v],k([t({slot:"media"})],S.prototype,"_mediaSlot",2),S=k([n(w)],S);export{S as HeroImpact,w as name};
