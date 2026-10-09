import{r as i,i as n,e as o,f as t,c as e,o as a,b as s}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{R as r,i as l,j as c,B as d}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{d as p}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{l as f,o as m}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{s as b}from"/__mirror/assets/579a4c6140e643b41d22eee8";import{D as g,a as h,b as v}from"/__mirror/assets/34233ee5ac8acdb3aa831b25";import"/__mirror/assets/5d2e1bf3d87581457a2b76db";const u="var(--ds-color-info-50, #e6effd)",$="var(--ds-app-color-base-default-fg-heading, #0e1726)",k="var(--ds-app-color-base-default-fg-body, #3a4c56)",y="var(--ds-app-color-interactive-secondary-fg-default, #2a446f)",x="var(--ds-app-space-micro-2xs, 0.25rem)",_="var(--ds-app-space-micro-xs, 0.5rem)",w="var(--ds-app-space-micro-m, 1rem)",S="var(--ds-app-radii-m, 1rem)",j="var(--ds-app-space-micro-3xs, 0.125rem)",z="var(--ds-app-space-micro-l, 1.5rem)",E="1.5rem",C="var(--ds-app-space-micro-2xs, 0.25rem)",B=n`
  :host {
    display: var(--ds-notification-banner-display, ${i("block")});
  }

  .base {
    display: flex;
    flex-direction: column;
    gap: var(--ds-notification-banner-gap, ${i(x)});
    padding: var(--ds-notification-banner-padding, ${i(w)});
    border-radius: var(--ds-notification-banner-radius, ${i(S)});
    background: var(--ds-notification-banner-background, ${i(u)});
    color: var(--ds-notification-banner-color, ${i($)});
  }

  .wrapper {
    display: flex;
    align-items: flex-start;
    gap: var(--ds-notification-banner-wrapper-gap, ${i(_)});
  }

  .icon {
    --ds-icon-color: var(
      --ds-notification-banner-icon-color,
      var(--ds-notification-banner-color, ${i($)})
    );
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .content {
    display: flex;
    flex-direction: column;
    flex: 1 0 0;
    gap: var(--ds-notification-banner-gap, ${i(x)});
    min-width: 0;
    padding-block-start: var(
      --ds-notification-banner-content-padding-block-start,
      ${i(j)}
    );
    color: var(--ds-notification-banner-color, ${i($)});
    font-family: var(
      --ds-notification-banner-font-family,
      ${i(f.fontFamily)}
    );
    font-weight: ${i(f.fontWeight)};
    font-size: ${i(f.fontSize)};
    line-height: ${i(f.lineHeight)};
    letter-spacing: ${i(f.letterSpacing)};
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: var(--ds-notification-banner-gap, ${i(x)});
    color: var(--ds-notification-banner-link-color, ${i(y)});
  }

  .dismiss {
    position: relative;
    flex-shrink: 0;
    inline-size: var(
      --ds-notification-banner-dismiss-size,
      ${i(E)}
    );
    block-size: var(
      --ds-notification-banner-dismiss-size,
      ${i(E)}
    );
    margin-inline-start: auto;
  }

  .dismiss reimagine-button {
    position: absolute;
    inset: calc(
      -1 *
        var(
          --ds-notification-banner-dismiss-offset,
          ${i(C)}
        )
    );
  }

  /* Reset margins on slotted elements; text nodes inherit typography from content. */
  ::slotted(*) {
    margin: 0;
  }

  /* Link list (links slot) */
  ::slotted([slot='links']) {
    --ds-link-underline-offset: auto;
    color: var(--ds-notification-banner-link-color, ${i(y)});
    font-family: var(
      --ds-notification-banner-link-font-family,
      ${i(m.fontFamily)}
    );
    font-weight: ${i(m.fontWeight)};
    font-size: ${i(m.fontSize)};
    line-height: ${i(m.lineHeight)};
    letter-spacing: ${i(m.letterSpacing)};
    padding-inline-start: var(
      --ds-notification-banner-links-padding-inline-start,
      ${i(z)}
    );
  }

  /* Error configuration */
  :host([configuration='error']) .base {
    --ds-notification-banner-background: var(--ds-color-error-50, #fceaec);
    --ds-notification-banner-color: var(--ds-color-error-600, #ca2d3f);
    --ds-notification-banner-link-color: var(--ds-color-error-600, #ca2d3f);
  }

  :host([configuration='error']) ::slotted([slot='links']) {
    --ds-link-color: var(--ds-color-error-600, #ca2d3f);
  }

  /* Informational configuration */
  :host([configuration='informational']) .base {
    --ds-notification-banner-background: var(--ds-color-info-50, #e6effd);
    --ds-notification-banner-color: var(--ds-app-color-base-default-fg-heading, #0e1726);
    --ds-notification-banner-link-color: ${i(k)};
  }

  :host([configuration='informational']) ::slotted([slot='links']) {
    --ds-link-color: ${i(k)};
  }

  /* Warning configuration */
  :host([configuration='warning']) .base {
    --ds-notification-banner-background: var(--ds-color-warning-100, #fdf4bb);
    --ds-notification-banner-color: var(--ds-app-color-base-default-fg-heading, #0e1726);
    --ds-notification-banner-link-color: ${i(k)};
  }

  :host([configuration='warning']) ::slotted([slot='links']) {
    --ds-link-color: ${i(k)};
  }

  .close-sr {
    ${b};
  }
`,D="error",O="informational";var P=Object.defineProperty,T=Object.getOwnPropertyDescriptor,L=Object.getPrototypeOf,R=Reflect.get,W=(i,n,o,t)=>{for(var e,a=t>1?void 0:t?T(n,o):n,s=i.length-1;s>=0;s--)(e=i[s])&&(a=(t?e(n,o,a):e(a))||a);return t&&a&&P(n,o,a),a};const A="reimagine-notification-banner";let F=class extends r{constructor(){super(...arguments),this._linksSlotEmpty=!0,this._closed=!1,this.configuration=O,this.dismissible=!1}_handleSlotChange(){const i=0===this._linksSlot.length;this._linksSlotEmpty!==i&&(this._linksSlotEmpty=i)}close(i){i&&i.stopPropagation(),!this._closed&&(this._closed=!0,this._dispatchCloseEventAfterUpdate())}async _dispatchCloseEventAfterUpdate(){await this.updateComplete,this.dispatchEvent(new CustomEvent("notification-banner-close",{bubbles:!0,composed:!0}))}_renderDismissButton(){return s`
      <div part="dismiss" class="dismiss">
        <reimagine-button
          @click=${i=>this.close(i)}
          icon-only
          appearance=${l.buttonGhost}
          shape=${c.rounded}
          size=${d.small}
          button-label=${this.closeLabel??"Dismiss notification"}
          button-title=${a(this.closeTitle)}
        >
          <reimagine-icon
            icon=${g.name}
            size=${h.medium}
            role="presentation"
            aria-hidden="true"
            slot="button__icon"
          ></reimagine-icon>
        </reimagine-button>
      </div>
    `}render(){return s`
      <span class="close-sr" part="close-sr" aria-live="polite" aria-atomic="true"
        >${this._closed?this.srCloseText??"Notification dismissed":""}</span
      >
      ${this._closed?"":this._renderBanner()}
    `}_renderBanner(){return s`
      <div part="base" class="base">
        <div part="wrapper" class="wrapper">
          <span part="icon" class="icon">
            <reimagine-icon
              icon=${v.name}
              size=${h.large}
              role="presentation"
              aria-hidden="true"
            ></reimagine-icon>
          </span>
          <div part="content" class="content">
            <slot></slot>
            <div
              part="links"
              class="links"
              style="${this._linksSlotEmpty?"display: none;":""}"
            >
              <slot name="links" @slotchange=${this._handleSlotChange}></slot>
            </div>
          </div>
          ${this.dismissible&&this.configuration!==D?this._renderDismissButton():""}
        </div>
      </div>
    `}};var H,N,U;F.styles=[...(H=F,N=F,U="styles",R(L(H),U,N)||[]),B],W([o({slot:"links"})],F.prototype,"_linksSlot",2),W([t()],F.prototype,"_linksSlotEmpty",2),W([t()],F.prototype,"_closed",2),W([e({reflect:!0})],F.prototype,"configuration",2),W([e({type:Boolean,reflect:!0})],F.prototype,"dismissible",2),W([e({attribute:"close-label"})],F.prototype,"closeLabel",2),W([e({attribute:"close-title"})],F.prototype,"closeTitle",2),W([e({attribute:"sr-close-text"})],F.prototype,"srCloseText",2),F=W([p(A)],F);export{F as NotificationBanner,A as name};
