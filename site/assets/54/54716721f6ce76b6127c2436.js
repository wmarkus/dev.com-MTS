import{r as t,i as e,e as i,f as n,c as o,b as a}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as r}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{W as c}from"/__mirror/assets/597f3dbe3ef56339bfbefa4a";import{v as s,l as d}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{c as l,a as m}from"/__mirror/assets/5849ec5e150363c91281fb26";import{a as p}from"/__mirror/assets/34233ee5ac8acdb3aa831b25";import"/__mirror/assets/5f924eec6274a2d611fc1ea0";const b={tabItemHorizontal:"tab-item--horizontal",tabItemVertical:"tab-item--vertical"},h="inline-flex",_="flex",v="column",g="var(--ds-app-space-micro-m, 1rem)",f="auto",y={contentDisplay:"flex",contentFlexDirection:"row",contentGap:"var(--ds-app-space-micro-2xl, 2rem)",contentAlignItems:"center",contentMaxWidth:"100%",contentFontSize:s.fontSize,contentFontWeight:s.fontWeight,contentLineHeight:s.lineHeight,contentLetterSpacing:s.letterSpacing,contentColor:"var(--ds-app-color-interactive-secondary-fg-default, #2a446f)",contentWidth:"100%",contentLeadingTransition:"opacity 0.2s ease"},$=e`
  :host {
    display: var(--ds-tab-item-display, ${t(h)});
  }

  .tab-item__base {
    display: var(--ds-tab-item-base-display, ${t(_)});
    flex-direction: var(
      --ds-tab-item-base-flex-direction,
      ${t(v)}
    );
    row-gap: var(--ds-tab-item-base-row-gap, ${t(g)});
    width: var(--ds-tab-item-base-width, ${t(f)});
  }

  .tab-item__content {
    display: var(
      --ds-tab-item-content-display,
      ${t(y.contentDisplay)}
    );
    flex-direction: var(
      --ds-tab-item-content-flex-direction,
      ${t(y.contentFlexDirection)}
    );
    gap: var(--ds-tab-item-content-gap, ${t(y.contentGap)});
    align-items: var(
      --ds-tab-item-content-align-items,
      ${t(y.contentAlignItems)}
    );
    width: var(--ds-tab-item-content-width, ${t(y.contentWidth)});
    max-width: var(
      --ds-tab-item-content-max-width,
      ${t(y.contentMaxWidth)}
    );
    font-size: var(
      --ds-tab-item-content-font-size,
      ${t(y.contentFontSize)}
    );
    font-weight: var(
      --ds-tab-item-content-font-weight,
      ${t(y.contentFontWeight)}
    );
    line-height: var(
      --ds-tab-item-content-line-height,
      ${t(y.contentLineHeight)}
    );
    letter-spacing: var(
      --ds-tab-item-content-letter-spacing,
      ${t(y.contentLetterSpacing)}
    );
    color: var(--ds-tab-item-content-color, ${t(y.contentColor)});
    transition: var(
      --ds-tab-item-content-transition,
      ${t(y.contentLeadingTransition)}
    );
  }

  .tab-item__content-indicator {
    visibility: none;
    opacity: 0;
    transition: var(
      --ds-tab-item-indicator-transition,
      ${t(y.contentLeadingTransition)}
    );
  }

  .tab-item__content-icon {
    margin-inline-start: calc(
      var(--ds-app-space-micro-xs) - ${t(y.contentGap)}
    );
    display: none;
  }

  :host([active]) .tab-item__content-icon {
    display: var(--ds-tab-item-content-icon-display, block);
  }

  @media (forced-colors: active) {
    :host([active]) .tab-item__content-indicator {
      --ds-indicator-border: var(--ds-border-m) solid;
    }
  }

  .tab-item__content-divider {
    margin-inline-start: calc(
      ${t(y.contentGap)} + ${t(l.width)}
    );
  }

  :host(:hover) .tab-item__content-indicator,
  :host([active]) .tab-item__content-indicator {
    visibility: visible;
    opacity: 1;
  }

  :host(:hover) .tab-item__content-indicator {
    --ds-indicator-background-color: var(--ds-app-color-interactive-secondary-bg-hover);
  }

  :host(:active) .tab-item__content-indicator {
    --ds-indicator-background-color: var(--ds-app-color-interactive-secondary-bg-active);
  }

  :host([active]) .tab-item__content-indicator {
    --ds-indicator-background-color: var(--ds-app-color-interactive-secondary-bg-selected);
  }

  :host(:hover) .tab-item__content {
    --ds-tab-item-content-color: var(--ds-app-color-interactive-secondary-fg-hover);
  }

  :host(:active) .tab-item__content,
  :host([active]) .tab-item__content {
    --ds-tab-item-content-color: var(--ds-app-color-interactive-secondary-fg-active);
  }

  :host([configuration='tab-item--horizontal']) .tab-item__content {
    --ds-tab-item-content-flex-direction: column;
    --ds-tab-item-content-align-items: flex-start;
    --ds-tab-item-content-gap: var(--ds-app-space-micro-m, 1rem);
    --ds-tab-item-content-font-size: ${t(d.fontSize)};
    --ds-tab-item-content-font-weight: ${t(d.fontWeight)};
    --ds-tab-item-content-line-height: ${t(d.lineHeight)};
  }

  :host([configuration='tab-item--horizontal']) .tab-item__content-indicator {
    --ds-indicator-width: 100%;
    opacity: 1;
  }
`;var S=Object.defineProperty,u=Object.getOwnPropertyDescriptor,x=(t,e,i,n)=>{for(var o,a=n>1?void 0:n?u(e,i):e,r=t.length-1;r>=0;r--)(o=t[r])&&(a=(n?o(e,i,a):o(a))||a);return n&&a&&S(e,i,a),a};const w="reimagine-tab-item";let z=class extends c{constructor(){super(...arguments),this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this.active=!1,this.configuration=b.tabItemVertical}_handleSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length}_renderOptionalSlot(t="tab-item__first",e=this._firstSlotEmpty){return a`
      <div part=${t} class=${t} style="${e?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_renderTemplate(){const t=this.configuration===b.tabItemVertical;return a`
      <div part="tab-item__base" class="tab-item__base">
        <div part="tab-item__content" class="tab-item__content">
          <reimagine-indicator
            class="tab-item__content-indicator"
            orientation="${t?"vertical":"horizontal"}"
            configuration="${m.rounded}"
            clickable
          >
          </reimagine-indicator>
          <slot></slot>
          ${t?a` <reimagine-icon
                class="tab-item__content-icon"
                icon="chevron-${"rtl"===this.dir?"left":"right"}"
                size="${p.medium}"
              >
              </reimagine-icon>`:""}
        </div>
        ${t?a`<reimagine-divider class="tab-item__content-divider"></reimagine-divider>`:""}
      </div>
    `}render(){return a`
      ${this._renderOptionalSlot("tab-item__first",this._firstSlotEmpty)} ${this._renderTemplate()}
      ${this._renderOptionalSlot("tab-item__last",this._lastSlotEmpty)}
    `}};z.styles=[$],x([i({slot:"tab-item__first"})],z.prototype,"_firstSlot",2),x([i({slot:"tab-item__last"})],z.prototype,"_lastSlot",2),x([n()],z.prototype,"_firstSlotEmpty",2),x([n()],z.prototype,"_lastSlotEmpty",2),x([o({type:Boolean,reflect:!0})],z.prototype,"active",2),x([o({reflect:!0})],z.prototype,"theme",2),x([o({type:String,reflect:!0})],z.prototype,"configuration",2),z=x([r(w)],z);export{z as T,b as a,w as n};
