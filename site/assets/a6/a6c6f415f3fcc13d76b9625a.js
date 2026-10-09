import{r as e,i as t,c as i,g as n,f as o,b as a,o as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i as s,q as c,z as l,T as d,A as p,a as u,d as m}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{b as h,v as g}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{C as v}from"/__mirror/assets/68715377d2d0e5c736890372";import{V as b}from"/__mirror/assets/6ad137053d5da8fc91d912f1";const _={product:"product",productContained:"product--contained",dropdownMenuList:"dropdown-menu-list"},f="block",k="block",y="0",w="var(--ds-app-color-surface-solid-bg-default, #fefefe)",C=t`
  :host {
    gap: var(--ds-accordion-item-gap, ${e("var(--ds-app-space-micro-2xl, 3rem)")});

    --ds-collapse-button-padding: 0.25rem 0.5rem 0.5rem;
    --ds-collapse-button-margin: -0.1875rem 0 0.5rem -0.5rem;
    --ds-collapse-button-width: fit-content;
    --ds-collapse-content-padding: 0 0 1.5rem;
    --ds-collapse-content-gap: var(--ds-app-space-micro-m, 1rem);
  }

  :host(:hover) reimagine-indicator,
  :host([open]) reimagine-indicator {
    visibility: visible;
  }

  reimagine-indicator {
    visibility: hidden;
    display: var(
      --ds-accordion-item-indicator-display,
      ${e(k)}
    );
  }

  reimagine-divider {
    display: var(--ds-accordion-item-divider-display, ${e(f)});
  }

  ::slotted(reimagine-link) {
    width: fit-content;
  }

  ::slotted(reimagine-checkbox) {
    margin-right: 1.5rem;
  }

  ::slotted(reimagine-media),
  :host([configuration='product--contained']) ::slotted(reimagine-media) {
    --ds-media-display: none;
  }

  :host([configuration='dropdown-menu-list']) {
    --ds-menu-list-background: none;
    --ds-menu-list-box-shadow: none;
  }

  .icon__container reimagine-icon {
    color: var(--ds-app-color-interactive-primary-fg-selected) !important;
  }

  .icon__container {
    display: grid;
    place-items: center;
    border-radius: 0.5rem;
    min-width: var(--ds-accordion-item-icon-container-width, 2.5rem);
    width: var(--ds-accordion-item-icon-container-width, 2.5rem);
    height: var(--ds-accordion-item-icon-container-height, 2.5rem);
    margin-inline-start: auto;
    background-color: var(--ds-app-color-interactive-primary-bg-default, #0078d4);
  }

  .icon__container-child reimagine-icon {
    color: var(--ds-app-color-interactive-secondary-fg-default, #2a446f) !important;
  }

  .icon__container-child {
    display: grid;
    place-items: center;
    border-radius: 0.5rem;
    width: 2.5rem;
    height: 2.5rem;
    margin-inline-start: auto;
    background-color: transparent;
    border: 0.125rem solid var(--ds-app-color-base-alt1-border-strong, #0e1726);
  }

  :host(:hover) .icon__container {
    background-color: var(--ds-app-color-interactive-primary-bg-hover, #006dc1);
  }

  :host([open]) .collapse__heading button .icon__container {
    background-color: var(--ds-app-color-interactive-primary-bg-active, #004275);
  }

  :host([appearance$='button']) reimagine-icon,
  :host([appearance$='button']) ::slotted([slot='collapse__icon']) {
    --ds-collapse-icon-transition: none;
  }

  .collapse__container {
    display: flex;
    flex-direction: var(--ds-accordion-item-collapse-container-flex-direction, column);
  }

  :host([appearance='subtle--button']) .collapse__container {
    padding-inline-start: var(--ds-app-space-micro-xs, 0.5rem);
  }

  .collapse__content {
    position: relative;
    margin-inline-end: var(
      --ds-accordion-item-margin-inline-end,
      ${e(y)}
    );
  }

  .contained__button {
    --ds-collapse-button-background-color: var(
      --ds-accordion-item-contained-button-background-color,
      ${e(w)}
    );
    --ds-collapse-button-hover-background-color: var(
      --ds-accordion-item-contained-button-background-color,
      ${e(w)}
    );

    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  /* Subtle Link */
  :host([appearance='subtle--link']) {
    display: flex;
    flex-direction: column;
  }

  :host([appearance='subtle--link']) reimagine-indicator {
    display: none;
  }

  :host([appearance='subtle--link']) reimagine-divider {
    display: none;
  }

  :host([appearance='subtle--link']) .icon__container-link reimagine-link reimagine-button:focus {
    outline: 2px solid var(--ds-app-color-interactive-secondary-fg-hover, #003a75);
  }
  :host([appearance='subtle--link']) .icon__container-link reimagine-link reimagine-button:active {
    background-color: var(--ds-app-color-interactive-primary-bg-active, #004275);
  }

  :host([appearance='subtle--link']) .icon__container-link {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 0.5rem;
    text-decoration: underline;
    cursor: pointer;

    --ds-accordion-item-gap: var(--ds-app-space-micro-l, 1rem);
    --ds-accordion-item-indicator-display: none;
    --ds-accordion-item-margin-inline-end: var(--ds-app-space-micro-m, 1rem);
  }

  :host([appearance='subtle--link']) .icon__container-link:hover {
    color: var(--ds-app-color-interactive-secondary-fg-hover, #003a75);
    text-decoration: none;
  }
`,x=t`
  @media (max-width: ${e(h(g.sm))}) {
    :host {
      --ds-collapse-button-justify-content: space-between;
      --ds-collapse-button-width: 100%;
    }

    reimagine-indicator {
      --ds-accordion-item-indicator-display: none;
    }

    .collapse__first {
      --ds-collapse-first-slot-display: none;
    }

    /* Subtle Link responsive adjustments */
    :host([appearance='subtle--link']) {
      gap: var(--ds-app-space-micro-s, 0.75rem);
    }

    :host([appearance='subtle--link']) .icon__container-link {
      justify-content: flex-start;
      margin-top: var(--ds-app-space-micro-xs, 0.5rem);
      flex-wrap: wrap;
    }

    :host([appearance='subtle--link']) reimagine-link {
      flex-shrink: 0;
    }
  }

  @media (max-width: ${e(h(g.md))}) {
    ::slotted(reimagine-media) {
      --ds-media-display: block;
      --ds-media-picture-width: 100%;

      width: auto;
    }

    reimagine-indicator {
      --ds-accordion-item-indicator-display: none;
    }
  }
`,E={containedButton:"contained--button",containedChevron:"contained--chevron",subtleButton:"subtle--button",subtleChevron:"subtle--chevron",accordionChild:"accordion--child",subtleLink:"subtle--link",filterPanel:"filter--panel"},S="dropdown-menu-list";var A=Object.defineProperty,M=Object.getOwnPropertyDescriptor,L=Object.getPrototypeOf,R=Reflect.get,$=(e,t,i,n)=>{for(var o,a=n>1?void 0:n?M(t,i):t,r=e.length-1;r>=0;r--)(o=e[r])&&(a=(n?o(t,i,a):o(a))||a);return n&&a&&A(t,i,a),a};const P="reimagine-accordion-item";let j=class extends v{constructor(){super(...arguments),this.iconSize="medium",this._boundParentReadyHandler=this._handleParentReady.bind(this),this._currentMediaState=null,this._isCompleted=!1}connectedCallback(){var e,t,i;super.connectedCallback(),null==(e=this.parentElement)||e.addEventListener("ready",this._boundParentReadyHandler,{once:!0}),((null==(t=this.parentElement)?void 0:t.getAttribute("configuration"))===_.product||(null==(i=this.parentElement)?void 0:i.getAttribute("configuration"))===_.productContained)&&(this._viewportResizeObserver=new b(this,{callback:()=>this._handleViewportChange()}))}disconnectedCallback(){var e;super.disconnectedCallback(),this._restoreCurrentMedia(),null==(e=this.parentElement)||e.removeEventListener("ready",this._boundParentReadyHandler),this._viewportResizeObserver=void 0}_handleViewportChange(){var e,t,i,n,o;if(!this.isConnected||null==(e=this.parentElement)||!e.isConnected||(null==(t=this.parentElement)?void 0:t.getAttribute("configuration"))!==_.product&&(null==(i=this.parentElement)?void 0:i.getAttribute("configuration"))!==_.productContained)return;const a=(null==(n=this.parentElement)?void 0:n.getAttribute("configuration"))===_.productContained,r=null==(o=this._viewportResizeObserver)?void 0:o.isDesktop();this._viewportResizeObserver&&void 0===r||(a||r?this.open&&this._handleMedia(!1):this._restoreCurrentMedia())}_handleParentReady(){var e,t;((null==(e=this.parentElement)?void 0:e.getAttribute("configuration"))===_.product||(null==(t=this.parentElement)?void 0:t.getAttribute("configuration"))===_.productContained)&&this._handleMedia(!0)}_restoreCurrentMedia(){var e,t;null!=(e=this._currentMediaState)&&e.element&&null!=(t=this._currentMediaState)&&t.originalParent&&document.contains(this._currentMediaState.originalParent)&&this._currentMediaState.originalParent.insertBefore(this._currentMediaState.element,this._currentMediaState.nextSibling),this._currentMediaState=null}_updateAccordionLinkIconDirection(){this._accordionItemLinkSlot&&this._accordionItemLinkSlot.length>0&&this._accordionItemLinkSlot.forEach(e=>{if(s(e,"reimagine-link")){const t=this.open?"up":"down";e.setAttribute("icon-direction",t)}})}async handleDefaultSlotChange(e){var t,i,n;if(super.handleDefaultSlotChange(),!this._isCompleted&&this.configuration===S||(null==(t=this.parentElement)?void 0:t.getAttribute("configuration"))===_.dropdownMenuList){const t=null==e?void 0:e.target,o=null==t?void 0:t.assignedElements().find(e=>s(e,"reimagine-dropdown"));o&&"updateComplete"in o&&await o.updateComplete;const a=c(o,"reimagine-dropdown-trigger"),r=null==(i=c(o,"reimagine-menu-list"))?void 0:i.cloneNode(!0),l=(null==(n=null==a?void 0:a.textContent)?void 0:n.trim())||"",d=document.createElement("span");d.setAttribute("slot","collapse__title"),d.textContent=l,this.append(d),r&&this.append(r),null==o||o.remove(),this._isCompleted=!0}}_handleDelayedStyles(){if(this.getAttribute("appearance")===E.containedButton){this._button.classList.add("contained__button");const e=()=>{const e=u(this.parentElement,"reimagine-accordion-item");null==e||e.forEach(e=>{var t,i;e.hasAttribute("open")||null==(i=null==(t=e.shadowRoot)?void 0:t.querySelector("button"))||i.removeAttribute("class")})},t=l(this);this.addEventListener(d,e.bind(this),{once:!0}),p(this,t)}}_shouldMoveMedia(){var e,t;const i=(null==(e=this.parentElement)?void 0:e.getAttribute("configuration"))===_.productContained,n=(null==(t=this._viewportResizeObserver)?void 0:t.isDesktop())??!0;return i||n}async _handleMedia(e){var t,i,n,o,a;if(!this._shouldMoveMedia())return void this._restoreCurrentMedia();let r;if(this._restoreCurrentMedia(),e){const e=c(this.parentElement,"reimagine-accordion-item");e&&(await e.updateComplete,r=null==(t=e.shadowRoot)?void 0:t.querySelector('slot[name="product"]'));const n=null==(i=this.parentElement)?void 0:i.getAttribute("configuration");n===_.productContained&&this.setAttribute("configuration",n)}else r=null==(n=this.shadowRoot)?void 0:n.querySelector('slot[name="product"]');if(!r)return;const s=null==r?void 0:r.assignedElements()[0];if(s&&s.parentElement){this._currentMediaState={element:s,originalParent:s.parentElement,nextSibling:s.nextElementSibling};const e=null==(a=null==(o=this.parentElement)?void 0:o.shadowRoot)?void 0:a.querySelector(".accordion__product");e&&(e.innerHTML="",e.append(s))}}_handleClick(){var e,t;const i=(null==(e=this.parentElement)?void 0:e.getAttribute("configuration"))===_.product||(null==(t=this.parentElement)?void 0:t.getAttribute("configuration"))===_.productContained;this.open&&i||(super._handleClick(),this._handleDelayedStyles(),this._updateAccordionLinkIconDirection(),i&&this._handleMedia(!1))}collapseIconTemplate(){if(this.appearance){if(this.appearance===E.accordionChild)return a`<div slot="collapse__icon" class="icon__container-child">
          <reimagine-icon icon="chevron-down" size="medium" filled></reimagine-icon>
        </div>`;if(this.appearance===E.subtleButton||this.appearance===E.containedButton||this.appearance===E.filterPanel)return a`<div slot="collapse__icon" class="icon__container">
          <reimagine-icon
            icon="${this.open?"subtract":"add"}"
            size="${r(this.iconSize)}"
            filled
          ></reimagine-icon>
        </div>`;if(this.appearance===E.subtleLink)return a`
          <div slot="collapse__icon" class="icon__container-link">
            <slot name="accordion-item__link">
              <reimagine-link
                tabindex="0"
                with-button
                icon-position="left"
                icon-direction="${this.open?"up":"down"}"
                as-button
              >
                <span slot="link__text"><slot name="accordion-item__link-text"></slot></span>
              </reimagine-link>
            </slot>
          </div>
        `}return super.collapseIconTemplate()}render(){return this.appearance===E.subtleLink?(this.variant="button-below",a`
        <slot name="accordion-item__content"></slot>

        ${this.collapseTemplate()}
      `):a`${this.collapseTemplate()}`}firstUpdated(){var e,t,i;if(super.firstUpdated(),this._updateAccordionLinkIconDirection(),(null==(e=this.parentElement)?void 0:e.getAttribute("configuration"))===_.product||(null==(t=this.parentElement)?void 0:t.getAttribute("configuration"))===_.productContained){const e=null==(i=this.shadowRoot)?void 0:i.querySelector("#collapse__content"),t=document.createElement("slot");t.setAttribute("name","product"),t.classList.add("product__slot"),null==e||e.append(t)}}};var z,D,O;j.styles=[...(z=j,D=j,O="styles",R(L(z),O,D)),C,x],$([i({reflect:!0})],j.prototype,"appearance",2),$([i({reflect:!0})],j.prototype,"configuration",2),$([i({attribute:"size",reflect:!0})],j.prototype,"iconSize",2),$([n({slot:"accordion-item__link"})],j.prototype,"_accordionItemLinkSlot",2),$([o()],j.prototype,"_isCompleted",2),j=$([m(P)],j);export{j as A,E as a,_ as b,P as n};
