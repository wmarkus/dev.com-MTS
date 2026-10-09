import{r as t,i as e,b as o,c as s,e as i,k as l,f as a}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{z as n,T as r,A as c,e as d,f as p,d as h}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{N as _,R as g}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{b as v}from"/__mirror/assets/7e3cbd307d93b862d54c4d69";import{t as m,D as u,T as f,c as b}from"/__mirror/assets/ae4bf4f4ba8e8d905a9a94c2";import{v as $,B as y}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import"/__mirror/assets/34233ee5ac8acdb3aa831b25";import"/__mirror/assets/5f924eec6274a2d611fc1ea0";import"/__mirror/assets/5849ec5e150363c91281fb26";const S=3,w="button-below",C="show",H="animate",k={hide:"onHide",hidden:"onHidden",show:"onShow",shown:"onShown"},x={borderRadius:"inherit",color:"var(--ds-app-color-base-default-fg-heading, #0e1726)",padding:"var(--ds-app-space-micro-l, 1.5rem)",transition:`height ${u.d800} ease-in-out, border-radius ease-in-out`,contentBackgroundColor:"transparent",contentBorderRadius:"0",contentFlexDirection:"column",contentGap:"var(--ds-app-space-micro-xl, 2rem)",contentPadding:"var(--ds-app-space-micro-xl, 2rem) var(--ds-app-space-micro-l, 1.5rem) ",firstSlotWidth:"fit-content",firstSlotHeight:"0",firstSlotMargin:"0",firstSlotDisplay:"block",firstSlotAlignItems:"center",firstSlotFontWeight:"400",firstSlotFontSize:"var(--ds-app-type-label-l-font-size, 1rem)",firstSlotLineHeight:"var(--ds-app-type-label-l-line-height, 1.5rem)",iconColor:"var(--ds-app-color-interactive-primary-bg-default, #0078d4)",iconHoverColor:"var(--ds-app-color-interactive-primary-bg-hover, #006dc1)",iconActiveColor:"var(--ds-app-color-interactive-primary-bg-active, #004275)",iconSize:"var(--ds-app-type-heading-2xs-font-size, 1.125rem)",iconTransition:`transform ${u.d600} ${f.custom}`},E="transparent",B="transparent",j="transparent",z="0",L="flex-start",O="var(--ds-app-space-micro-s, 0.75rem)",T="0",D="100%",A="flex",F="var(--ds-app-color-base-default-fg-heading, #0e1726)",I="start",R=e`
  :host {
    display: inline-flex;
    color: var(--ds-collapse-color, ${t(x.color)});
    overflow: hidden;
    width: 100%;
    border-radius: var(--ds-collapse-border-radius, ${t(x.borderRadius)});
  }

  :host(.${t(H)}) {
    ${m(`${t(x.transition)}`)};
  }

  /**
   * First Slot
   */
  .collapse__first {
    width: var(--ds-collapse-first-slot-width, ${t(x.firstSlotWidth)});
    height: var(--ds-collapse-first-slot-height, ${t(x.firstSlotHeight)});
    margin: var(--ds-collapse-first-slot-margin, ${t(x.firstSlotMargin)});
    display: var(--ds-collapse-first-slot-display, ${t(x.firstSlotDisplay)});
    align-items: var(
      --ds-collapse-first-slot-align-items,
      ${t(x.firstSlotAlignItems)}
    );
    color: var(--ds-collapse-first-slot-color);
    font-weight: var(
      --ds-collapse-first-slot-font-weight,
      ${t(x.firstSlotFontWeight)}
    );
    font-size: var(
      --ds-collapse-first-slot-font-size,
      ${t(x.firstSlotFontSize)}
    );
    line-height: var(
      --ds-collapse-first-slot-line-height,
      ${t(x.firstSlotLineHeight)}
    );
  }

  /**
   * Container
   */
  .collapse__container {
    width: 100%;
  }

  /**
   * Button
   */
  button {
    ${v};
    display: var(
      --ds-collapse-button-display,
      ${t(A)}
    );
    margin: var(--ds-collapse-button-margin, ${t(T)});
    width: var(--ds-collapse-button-width, ${t(D)});
    padding: var(--ds-collapse-button-padding, ${t(x.padding)});
    gap: var(--ds-collapse-button-gap, ${t(O)});
    color: var(--ds-collapse-button-color, ${t(x.color)});
    background-color: var(
      --ds-collapse-button-background-color,
      ${t(B)}
    );
    border-radius: var(
      --ds-collapse-button-border-radius,
      ${t(z)}
    );
    justify-content: var(
      --ds-collapse-button-justify-content,
      ${t(L)}
    );
  }
  @media (forced-colors: active) {
    :host button {
      background-color: currentcolor !important;
    }
  }

  button:hover {
    background-color: var(
      --ds-collapse-button-hover-background-color,
      ${t(j)}
    );
  }

  :host([open]) button {
    background-color: var(
      --ds-collapse-button-active-background-color,
      ${t(E)}
    );
  }

  button:focus-visible {
    ${_()};
  }

  /**
   * Icon
   */
  reimagine-icon,
  ::slotted([slot='collapse__icon']) {
    transform: rotate(0deg);
    color: var(--ds-collapse-icon-color, ${t(x.iconColor)});
    font-size: var(--ds-collapse-icon-size, ${t(x.iconSize)});

    ${m(`var(--ds-collapse-icon-transition, ${t(x.iconTransition)})`)};
  }

  :host(:hover) reimagine-icon,
  :host(:hover) ::slotted([slot='collapse__icon']) {
    color: var(--ds-collapse-icon-hover-color, ${t(x.iconHoverColor)});
  }

  :host([open]) reimagine-icon,
  :host([open]) ::slotted([slot='collapse__icon']) {
    transform: rotate(-180deg);
    color: var(--ds-collapse-icon-active-color, ${t(x.iconActiveColor)});
  }

  /**
   * Title
   */
  ::slotted([slot='collapse__title']) {
    color: var(--ds-collapse-title-color, ${t(F)});
    text-align: var(
      --ds-collapse-title-text-align,
      ${t(I)}
    );
    font-size: var(
      --ds-collapse-title-font-size,
      ${t($.fontSize)}
    ) !important;
    font-weight: var(
      --ds-collapse-title-font-weight,
      ${t($.fontWeight)}
    ) !important;
    line-height: var(
      --ds-collapse-title-line-height,
      ${t($.lineHeight)}
    ) !important;
    width: var(--ds-collapse-title-width, auto);
  }

  /**
  * Child Slot
  */
  ::slotted([slot='collapse__child']) {
    position: absolute;
    top: 1.25rem;
    left: 0.25rem;
  }

  /**
   * Content
   */
  .collapse__content {
    display: flex;
    flex-direction: var(
      --ds-collapse-content-flex-direction,
      ${t(x.contentFlexDirection)}
    );
    gap: var(--ds-collapse-content-gap, ${t(x.contentGap)});
    background-color: var(
      --ds-collapse-content-background-color,
      ${t(x.contentBackgroundColor)}
    );
    padding: var(--ds-collapse-content-padding, ${t(x.contentPadding)});
    border-radius: var(
      --ds-collapse-content-border-radius,
      ${t(x.contentBorderRadius)}
    );
    margin-inline-start: var(--ds-collapse-content-margin-inline-start, 0);
    padding-block-start: var(--ds-collapse-content-padding-block-start, 0);
  }

  /**
  Divider
  */
  reimagine-divider {
    display: none;
  }

  /**
  Indicator
  */
  reimagine-indicator {
    display: none;
  }

  .collapse__heading {
    position: relative;
  }

  /**
   * Button Below Variant
   */
  :host([variant='button-below']) .collapse__heading {
    margin-bottom: 0;
  }

  :host([variant='button-below']) .collapse__content {
    margin-bottom: var(--ds-app-space-micro-m, 1rem);
  }

  :host([variant='button-below']) .collapse__button-below {
    display: flex;
    justify-content: flex-start;
    margin-bottom: var(--ds-app-space-micro-m, 1rem);
  }

  ${b(`var(\n    --ds-collapse-transition,\n    ${t(x.transition)}\n  )`)};
`;var W=Object.defineProperty,P=Object.getOwnPropertyDescriptor,U=(t,e,o,s)=>{for(var i,l=s>1?void 0:s?P(e,o):e,a=t.length-1;a>=0;a--)(i=t[a])&&(l=(s?i(e,o,l):i(l))||l);return s&&l&&W(e,o,l),l};const G="reimagine-collapse";let M=class extends(y(g)){constructor(){super(...arguments),this.open=!1,this.headingLevel=S,this.ariaLabel=null,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._events=[]}_handleSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length}_handleClick(){this.toggle()}_renderOptionalSlot(t,e){return o`
      <span part=${t} class=${t} style="${e?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </span>
    `}_getClosedHeight(){return this.variant===w&&this._buttonBelow?this._buttonBelow.offsetHeight+this._divider.offsetHeight:this._heading.offsetHeight+this._divider.offsetHeight}_getOpenHeight(){return this.variant===w&&this._buttonBelow?this._buttonBelow.offsetHeight+this._content.offsetHeight+this._divider.offsetHeight:this._heading.offsetHeight+this._content.offsetHeight+this._divider.offsetHeight}handleDefaultSlotChange(){}toggle(){this.open=!this.open}hide(){const t=new CustomEvent(k.hide,{composed:!0,cancelable:!0});this.dispatchEvent(t),this.style.height=`${this._getOpenHeight()}px`,this.style.height=`${this._getClosedHeight()}px`;const e=n(this);this.addEventListener(r,(()=>{this._content.classList.remove(C),this._content.setAttribute("aria-hidden","true"),this.open=!1,this.style.height="";const t=new CustomEvent(k.hidden,{composed:!0,cancelable:!0});this.dispatchEvent(t)}).bind(this),{once:!0}),c(this,e)}show(){const t=new CustomEvent(k.show,{composed:!0,cancelable:!0});this.dispatchEvent(t),this.style.height=`${this._getClosedHeight()}px`,this._content.classList.add(C),this.style.height=`${this._getOpenHeight()}px`;const e=n(this);this.addEventListener(r,(()=>{this._content.removeAttribute("aria-hidden"),this.open=!0,this.style.height="";const t=new CustomEvent(k.shown,{composed:!0,cancelable:!0});this.dispatchEvent(t)}).bind(this),{once:!0}),c(this,e)}collapseIconTemplate(){return o`<slot name="collapse__icon" @slotchange="${this._handleSlotChange}">
      <reimagine-icon icon="chevron-down" size="medium" filled></reimagine-icon>
    </slot>`}collapseTemplate(){return this.variant===w?o`
        ${this._renderOptionalSlot("collapse__first",this._firstSlotEmpty)}
        <reimagine-indicator
          configuration="rounded"
          class="collapse__indicator"
          part="collapse__indicator"
        ></reimagine-indicator>
        <div class="collapse__container" part="collapse__container">
          <div class="collapse__content collapse" part="collapse__content" id="collapse__content">
            <slot name="collapse__child"></slot>
            <slot name="collapse__subtitle"></slot>
            <slot></slot>
          </div>
          <div class="collapse__button-below" part="collapse__button-below">
            ${this.renderButton(o`<slot name="collapse__title"></slot> ${this.collapseIconTemplate()}`)}
          </div>
          <reimagine-divider class="collapse__divider" part="collapse__divider"></reimagine-divider>
        </div>
        ${this._renderOptionalSlot("collapse__last",this._lastSlotEmpty)}
      `:o`
      ${this._renderOptionalSlot("collapse__first",this._firstSlotEmpty)}
      <reimagine-indicator
        configuration="rounded"
        class="collapse__indicator"
        part="collapse__indicator"
      ></reimagine-indicator>
      <div class="collapse__container" part="collapse__container">
        <div class="collapse__heading" part="collapse__heading">
          <slot name="collapse__child"></slot>
          ${this.renderButton(o`<slot name="collapse__title"></slot> ${this.collapseIconTemplate()}`)}
        </div>
        <div class="collapse__content collapse" part="collapse__content" id="collapse__content">
          <slot name="collapse__subtitle"></slot>
          <slot @slotchange=${this.handleDefaultSlotChange}></slot>
        </div>
        <reimagine-divider class="collapse__divider" part="collapse__divider"></reimagine-divider>
      </div>
      ${this._renderOptionalSlot("collapse__last",this._lastSlotEmpty)}
    `}willUpdate(t){super.willUpdate(t),t.has("open")&&(this.ariaExpanded=this.open?"true":"false")}updated(t){super.updated(t),t.has("open")&&(this.open?this.show():this.hide())}_registerClickHandler(){this._events=[{el:this._button,type:"click",handler:()=>this._handleClick()}],d(this._events)}firstUpdated(){var t;const e=null==(t=this._titleSlot)?void 0:t.map(t=>{var e;return null==(e=t.textContent)?void 0:e.trim()}).filter(Boolean).join(" ");this.ariaLabel=e||"Collapse button",this._registerClickHandler(),setTimeout(()=>{this.classList.add(H)},100)}connectedCallback(){super.connectedCallback(),this.ariaControls="collapse__content",this.hasUpdated&&this._registerClickHandler()}disconnectedCallback(){p(this._events),super.disconnectedCallback()}render(){return o`${this.collapseTemplate()}`}};M.styles=[R],U([s({reflect:!0,type:Boolean})],M.prototype,"open",2),U([s({reflect:!0,attribute:"heading-level",type:Number})],M.prototype,"headingLevel",2),U([s({attribute:"aria-label"})],M.prototype,"ariaLabel",2),U([s({reflect:!0})],M.prototype,"variant",2),U([i({slot:"collapse__first"})],M.prototype,"_firstSlot",2),U([i({slot:"collapse__last"})],M.prototype,"_lastSlot",2),U([i({slot:"collapse__title"})],M.prototype,"_titleSlot",2),U([l(".collapse__heading")],M.prototype,"_heading",2),U([l(".collapse__content")],M.prototype,"_content",2),U([l(".collapse__divider")],M.prototype,"_divider",2),U([l(".collapse__button-below")],M.prototype,"_buttonBelow",2),U([l("button")],M.prototype,"_button",2),U([a()],M.prototype,"_firstSlotEmpty",2),U([a()],M.prototype,"_lastSlotEmpty",2),M=U([h(G)],M);export{M as C,k as a,G as n};
