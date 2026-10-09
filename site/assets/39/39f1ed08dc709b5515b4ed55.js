import{r as t,i as e,c as a,e as i,f as s,b as n,o as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as o}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{o as l}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{a as p,b as c,M as g}from"/__mirror/assets/fbedc03652b4241adb7efb38";import{R as u,B as d,i as m}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import"/__mirror/assets/5d2e1bf3d87581457a2b76db";import"/__mirror/assets/34233ee5ac8acdb3aa831b25";const h="var(--ds-app-space-micro-2xs, 0.25rem)",b="var(--ds-app-space-micro-xs, 0.5rem)",f="var(--ds-app-space-micro-l, 1rem)",v="var(--ds-app-color-base-default-fg-body, #3a4c56)",$=e`
  :host {
    display: var(--ds-pagination-display, ${t("flex")});
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--ds-pagination-wrapper-gap, ${t(f)});
  }

  .status {
    color: var(--ds-pagination-status-color, ${t(v)});
    font-weight: ${t(l.fontWeight)};
    font-size: ${t(l.fontSize)};
    line-height: ${t(l.lineHeight)};
    letter-spacing: ${t(l.letterSpacing)};
    text-align: center;
  }

  .status[hidden] {
    display: none;
  }

  .pagination {
    display: inline-flex;
    align-items: center;
  }

  :host([configuration='dots']) .pagination {
    gap: var(--ds-pagination-dots-gap, ${t(b)});
  }

  :host([configuration='numbers']) .pagination {
    gap: var(--ds-pagination-numbers-gap, ${t(h)});
  }

  .button-ellipsis {
    --ds-button-background-color: transparent;
    --ds-button-cursor: default;
    --ds-button-pointer-events: none;
  }

  /* Flip reimagine-icons across the y-axis in RTL mode */
  :host(:dir(rtl)) reimagine-icon {
    transform: scaleX(-1);
  }
`;var _=Object.defineProperty,y=Object.getOwnPropertyDescriptor,x=(t,e,a,i)=>{for(var s,n=i>1?void 0:i?y(e,a):e,r=t.length-1;r>=0;r--)(s=t[r])&&(n=(i?s(e,a,n):s(n))||n);return i&&n&&_(e,a,n),n};const P="reimagine-pagination",S=-999;let E=class extends u{constructor(){super(...arguments),this.configuration=p.dots,this.current=1,this.totalPages=2,this._statusSlotEmpty=!0,this._range=(t,e)=>{const a=e-t+1;return Array.from({length:a},(e,a)=>a+t)}}_handleStatusSlotChange(){var t;const e=!(null!=(t=this._statusSlot)&&t.some(t=>t.nodeType!==Node.TEXT_NODE||(t.textContent??"").trim().length>0));this._statusSlotEmpty!==e&&(this._statusSlotEmpty=e)}_handlePrevNextClick(t){const e={detail:{activePage:t},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent(c.change,e))}_renderNextPrevButtons(t,e=!0){const a=e?"chevron-left":"chevron-right",i=e?"Previous Page":"Next Page";return n`<reimagine-button
      icon-only
      size=${d.small}
      appearance=${m.buttonGhost}
      ?disabled=${t}
      button-label=${i}
      @click=${t?void 0:this._handlePrevNextClick.bind(this,e?this.current-1:this.current+1)}
    >
      <reimagine-icon icon=${a} slot="button__icon" size="small"></reimagine-icon>
      <span slot="button__text">Button Default</span>
    </reimagine-button>`}_renderEllipsesButton(){return n`<reimagine-button
      icon-only
      size=${d.small}
      appearance=${m.buttonGhost}
      element="span"
      class="button-ellipsis"
      role="img"
      aria-label="More pages"
      button-label="More pages"
    >
      <reimagine-icon icon="more-horizontal" slot="button__icon" size="small"></reimagine-icon>
      <span slot="button__text">Button Default</span>
    </reimagine-button>`}_calculateVisiblePages(){const{totalPages:t,current:e}=this;if(t<=g)return this._range(1,t);const a=e>=t-(g-1);if(e<=g&&(!a||e<=(t+1)/2)){const a=Math.min(Math.max(g-1,e+1),t-1);return[...this._range(1,a),S,t]}if(a){const a=Math.max(2,Math.min(e-1,t-(g-2)));return[1,S,...this._range(a,t)]}return[1,S,e-1,e,e+1,S,t]}_generateItemAriaLabel(t){return t===this.current?void 0:`${1===t?"First page, ":t===this.totalPages?"Last page, ":""}Page ${t}`}render(){const t=this.configuration===p.dots,e=!t&&this.totalPages>1,a=this._calculateVisiblePages();return n`
      <div class="wrapper" part="wrapper">
        <div
          class="status"
          part="status"
          role="status"
          aria-live="polite"
          ?hidden=${this._statusSlotEmpty}
        >
          <slot name="status" @slotchange=${this._handleStatusSlotChange}></slot>
        </div>
        <nav
          class=${`pagination ${this.configuration}`}
          part="base"
          aria-label=${r(this.ariaLabel??void 0)}
        >
          ${e?this._renderNextPrevButtons(1===this.current):void 0}
          ${t?Array.from({length:this.totalPages},(t,e)=>n`<reimagine-pagination-item
                    ?active=${e+1===this.current}
                    ?disabled=${e+1===this.disabledPage}
                    index=${e+1}
                    label=${r(this._generateItemAriaLabel(e+1))}
                    >${e+1}</reimagine-pagination-item
                  >`):a.map(t=>t===S?this._renderEllipsesButton():n`<reimagine-pagination-item
                      ?active=${t===this.current}
                      ?disabled=${t===this.disabledPage}
                      label=${r(this._generateItemAriaLabel(t))}
                      index=${t}
                      configuration=${p.numbers}
                      >${t}</reimagine-pagination-item
                    >`)}
          ${e?this._renderNextPrevButtons(this.current===this.totalPages,!1):void 0}
        </nav>
      </div>
    `}};E.styles=[$],x([a({reflect:!0})],E.prototype,"configuration",2),x([a({type:Number,reflect:!0})],E.prototype,"current",2),x([a({type:Number,attribute:"total-pages",reflect:!0})],E.prototype,"totalPages",2),x([a({type:Number,attribute:"disabled-page",reflect:!0})],E.prototype,"disabledPage",2),x([i({slot:"status",flatten:!0})],E.prototype,"_statusSlot",2),x([s()],E.prototype,"_statusSlotEmpty",2),E=x([o(P)],E);export{S as ELLIPSIS,E as Pagination,P as name};
