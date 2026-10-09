import{r as t,i as e,c as a,g as o,e as i,f as s,b as l}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{R as r}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{i as n,s as c,r as g,d}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{q as h,p}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{n as b,a as m}from"/__mirror/assets/34233ee5ac8acdb3aa831b25";import{name as f}from"/__mirror/assets/e03438b5798d9e90c6c162a8";const k={display:"inline-flex",width:"12.5rem",minHeight:"2rem",flexWrap:"nowrap",gap:"var(--ds-app-space-micro-l, 1rem)",contentFlex:"1 0 0",contentGap:"var(--ds-app-space-micro-s, 0.75rem)",textGap:"var(--ds-app-space-micro-xs, 0.5rem)",labelColor:"var(--ds-app-color-base-default-fg-body)",labelFontFamily:h.fontFamily,labelFontWeight:h.fontWeight,labelFontSize:h.fontSize,labelLineHeight:h.lineHeight,labelLetterSpacing:h.letterSpacing,trackWidth:"2.5rem",trackHeight:"1.5rem",trackPadding:"var(--ds-app-space-micro-3xs, 0.125rem)",trackRadius:"var(--ds-app-radii-circle, 12.5rem)",trackColorOff:"var(--ds-app-color-interactive-primary-bg-inactive)",trackColorOn:"var(--ds-app-color-interactive-primary-bg-default)",dotSize:"1.25rem",dotColor:"var(--ds-app-color-interactive-primary-fg-default)"},v=e`
  :host {
    display: var(--ds-toggle-switch-display, ${t(k.display)});
  }

  .base {
    display: flex;
    align-items: center;
    flex-wrap: var(--ds-toggle-switch-flex-wrap, ${t(k.flexWrap)});
    width: var(--ds-toggle-switch-width, ${t(k.width)});
    min-height: var(--ds-toggle-switch-min-height, ${t(k.minHeight)});
    gap: var(--ds-toggle-switch-gap, ${t(k.gap)});
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    font: inherit;
    color: inherit;
    text-align: start;
    cursor: pointer;
  }

  .content {
    display: flex;
    flex: var(--ds-toggle-switch-content-flex, ${t(k.contentFlex)});
    align-items: center;
    min-width: 0;
    gap: var(--ds-toggle-switch-content-gap, ${t(k.contentGap)});
  }

  .icon {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
  }

  .text {
    display: flex;
    flex: 1 0 0;
    align-items: center;
    min-width: 0;
    gap: var(--ds-toggle-switch-text-gap, ${t(k.textGap)});
  }

  .label {
    display: block;
    flex-shrink: 0;
    min-width: 0;
    white-space: nowrap;
    color: var(--ds-toggle-switch-label-color, ${t(k.labelColor)});
    font-family: var(
      --ds-toggle-switch-label-font-family,
      ${t(k.labelFontFamily)}
    );
    font-size: var(--ds-toggle-switch-label-font-size, ${t(k.labelFontSize)});
    font-weight: var(
      --ds-toggle-switch-label-font-weight,
      ${t(k.labelFontWeight)}
    );
    line-height: var(
      --ds-toggle-switch-label-line-height,
      ${t(k.labelLineHeight)}
    );
    letter-spacing: var(
      --ds-toggle-switch-label-letter-spacing,
      ${t(k.labelLetterSpacing)}
    );
  }

  .tag {
    display: flex;
    flex-shrink: 0;
    align-items: center;
  }

  .track {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    box-sizing: border-box;
    width: var(--ds-toggle-switch-track-width, ${t(k.trackWidth)});
    height: var(--ds-toggle-switch-track-height, ${t(k.trackHeight)});
    padding-inline: var(
      --ds-toggle-switch-track-padding,
      ${t(k.trackPadding)}
    );
    border-radius: var(--ds-toggle-switch-track-radius, ${t(k.trackRadius)});
    background-color: var(
      --ds-toggle-switch-track-color-off,
      ${t(k.trackColorOff)}
    );
    transition: background-color 0.2s ease-in-out;
    justify-content: flex-start;
  }

  .dot {
    display: block;
    flex-shrink: 0;
    width: var(--ds-toggle-switch-dot-size, ${t(k.dotSize)});
    height: var(--ds-toggle-switch-dot-size, ${t(k.dotSize)});
    border-radius: var(--ds-toggle-switch-track-radius, ${t(k.trackRadius)});
    background-color: var(--ds-toggle-switch-dot-color, ${t(k.dotColor)});
    transform: translateX(0);
    transition: transform 0.2s ease-in-out;
  }

  :host([enabled]) .track {
    background-color: var(
      --ds-toggle-switch-track-color-on,
      ${t(k.trackColorOn)}
    );
  }

  :host([enabled]) .dot {
    transform: translateX(
      calc(
        var(--ds-toggle-switch-track-width, ${t(k.trackWidth)}) -
          (2 * var(--ds-toggle-switch-track-padding, ${t(k.trackPadding)})) -
          var(--ds-toggle-switch-dot-size, ${t(k.dotSize)})
      )
    );
  }

  :host([enabled]:dir(rtl)) .dot {
    transform: translateX(
      calc(
        -1 *
          (
            var(--ds-toggle-switch-track-width, ${t(k.trackWidth)}) -
              (2 *
                var(--ds-toggle-switch-track-padding, ${t(k.trackPadding)})) -
              var(--ds-toggle-switch-dot-size, ${t(k.dotSize)})
          )
      )
    );
  }

  @media (prefers-reduced-motion: reduce) {
    .track,
    .dot {
      transition: none;
    }
  }

  .base:focus-visible .track {
    outline: 2px solid
      var(--ds-toggle-switch-focus-outline-color, var(--ds-app-color-interactive-primary-bg-default));
    outline-offset: 2px;
  }

  /* High contrast mode */
  @media (forced-colors: active) {
    .track {
      border: 1px solid ButtonText;
      background-color: Canvas;
    }

    .dot {
      background-color: ButtonText;
    }

    :host([enabled]) .track {
      background-color: Highlight;
      border-color: Highlight;
    }

    :host([enabled]) .dot {
      background-color: HighlightText;
    }

    .base:focus-visible .track {
      outline-color: Highlight;
    }
  }
`;var w=Object.defineProperty,u=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,x=Reflect.get,$=(t,e,a,o)=>{for(var i,s=o>1?void 0:o?u(e,a):e,l=t.length-1;l>=0;l--)(i=t[l])&&(s=(o?i(e,a,s):i(s))||s);return o&&s&&w(e,a,s),s};const S="reimagine-toggle-switch";let _=class extends r{constructor(){super(...arguments),this.enabled=!1,this._iconSlotEmpty=!0,this._tagSlotEmpty=!0}_setIconAttributes(){const t=(this._iconSlotEls??[]).filter(t=>n(t,b));c(t,{size:m.large,"aria-hidden":"true",role:"presentation"})}_setTagAttributes(){const t=(this._tagSlotEls??[]).filter(t=>n(t,f));c(t,{size:p.small}),g(t,["clickable"])}_handleIconSlotChange(){this._iconSlotEmpty=0===this._iconSlot.length,this._setIconAttributes()}_handleTagSlotChange(){this._tagSlotEmpty=0===this._tagSlot.length,this._setTagAttributes()}_handleToggle(){this.enabled=!this.enabled,this.dispatchEvent(new CustomEvent("reimagine-toggle-switch-changed",{detail:{enabled:this.enabled},bubbles:!0,composed:!0}))}render(){return l`
      <button
        type="button"
        class="base"
        role="switch"
        aria-checked="${this.enabled?"true":"false"}"
        @click="${this._handleToggle}"
      >
        <span class="content">
          <span part="icon" class="icon" style="${this._iconSlotEmpty?"display: none;":""}">
            <slot name="icon" @slotchange="${this._handleIconSlotChange}"></slot>
          </span>
          <span class="text">
            <span part="label" class="label"><slot></slot></span>
            <span part="tag" class="tag" style="${this._tagSlotEmpty?"display: none;":""}">
              <slot name="tag" @slotchange="${this._handleTagSlotChange}"></slot>
            </span>
          </span>
        </span>
        <span class="track" aria-hidden="true">
          <span class="dot"></span>
        </span>
      </button>
    `}};var z,C,E;_.styles=[...(z=_,C=_,E="styles",x(y(z),E,C)||[]),v],$([a({type:Boolean,reflect:!0})],_.prototype,"enabled",2),$([o({slot:"icon"})],_.prototype,"_iconSlotEls",2),$([o({slot:"tag"})],_.prototype,"_tagSlotEls",2),$([i({slot:"icon"})],_.prototype,"_iconSlot",2),$([s()],_.prototype,"_iconSlotEmpty",2),$([i({slot:"tag"})],_.prototype,"_tagSlot",2),$([s()],_.prototype,"_tagSlotEmpty",2),_=$([d(S)],_);export{_ as ToggleSwitch,S as name};
