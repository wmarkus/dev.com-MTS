import{r as e,i as o,e as i,k as t,c as a,f as s,b as l,A as n}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{f as r,a as d}from"/__mirror/assets/ae4bf4f4ba8e8d905a9a94c2";import{b as c,v as h}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{q as m,z as p,T as g,A as u,l as b,x as _,g as f,e as v,f as y,d as x}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{i as w,j as E,R as $}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import"/__mirror/assets/34233ee5ac8acdb3aa831b25";import"/__mirror/assets/5d2e1bf3d87581457a2b76db";import"/__mirror/assets/5f924eec6274a2d611fc1ea0";const k="onOpen",C="onOpened",S="onClose",T="onClosed",F="fullscreen",z="carousel",O="dialog",j="roadmap-dialog",L="side-panel",D="filters",M="0.3s",A="ease-out",B="var(--ds-app-color-base-alt1-bg-opt1, #f7f7f7)",H="center",V="center",N="column",P="none",R="0",q="0 0 0 100vmax rgba(0, 0, 0, .6)",K="var(--ds-app-color-base-alt1-fg-heading, #0e1726)",Y="none",G="var(--ds-app-space-micro-xl, 2rem)",I="space-between",J="translateY(-50px)",Q=o`
  :host {
    max-height: var(--ds-modal-max-height, 100vh);
    overflow: var(--ds-modal-overflow, unset);
  }

  :host([open]) {
    --ds-modal-max-height: 80vh; /* igonring the height of the modal trigger button */
    --ds-modal-overflow: hidden;
  }

  dialog {
    background-color: var(
      --ds-modal-background-color,
      ${e(B)}
    );
    border-radius: var(--ds-modal-border-radius, ${e(R)});
    border: var(--ds-modal-border, ${e(P)});
    box-shadow: var(--ds-modal-box-shadow, ${e(q)});
    color: var(--ds-modal-color, ${e(K)});
    display: var(--ds-modal-display, ${e(Y)});
    flex-direction: column;
    padding: 0;

    ${r}
  }

  dialog.show {
    --ds-modal-display: flex;
  }

  dialog::backdrop {
    background-color: transparent; /* Animating the backdrop is not currently possible in some browsers. */
  }

  /* Modal header */
  .modal__header {
    display: flex;
    position: sticky;
    top: 0;
    min-height: 32px;
    background-color: var(
      --ds-modal-background-color,
      ${e(B)}
    );
    z-index: var(--ds-z-index-10, 10);
    justify-content: var(
      --ds-modal-header-justify-content,
      ${e(I)}
    );
    padding-block: var(
      --ds-modal-header-padding-block,
      var(--ds-app-space-micro-xl, ${e(G)})
    );
  }

  ::slotted([slot='modal__header-title']) {
    --ds-app-type-heading-m-font-size: 1.25rem;
    --ds-app-type-body-m-font-size: 0.875rem;
    --ds-app-type-heading-m-line-height: 2rem;
  }

  .modal__body {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: var(
      --ds-modal-body-justify-content,
      ${e(V)}
    );
    align-items: var(--ds-modal-body-align-items, ${e(H)});
  }

  /* Modal divider */
  reimagine-divider {
    --ds-divider-border-color: var(--ds-app-color-base-default-border-subtle);
  }

  /* Modal close button */
  .modal__close-button {
    position: absolute;
    top: var(--ds-modal-close-button-top, 1.5rem);
    inset-inline-end: var(--ds-modal-close-button-right, 1.5rem);
    z-index: var(--ds-z-index-10, 10);
  }

  /* Carousel and Fullscreen */
  :host([configuration='fullscreen']) dialog,
  :host([configuration='carousel']) dialog {
    max-width: 100vw;
    max-height: 100vh;
    width: 100%;
    height: 100%;
  }

  :host([configuration='carousel']) ::slotted(reimagine-carousel) {
    width: 100%;
  }

  :host([configuration='carousel']) .modal__header,
  :host([configuration='fullscreen']) .modal__header {
    padding-inline-start: 8.5rem;
    padding-inline-end: 7.375rem;
  }

  :host([configuration='carousel']) .modal__body,
  :host([configuration='fullscreen']) .modal__body {
    width: auto;
    height: auto;
    padding-block-start: var(--ds-app-space-micro-xl, 2rem);
    padding-block-end: var(--ds-app-space-micro-xl, 2rem);
    padding-inline-start: 8.5rem;
    padding-inline-end: 8.5rem;
    flex-direction: var(
      --ds-modal-body-flex-direction,
      ${e(N)}
    );
  }

  /* Dialog */
  :host([configuration='dialog']) dialog {
    border-radius: 1.5rem;
  }

  /* Filters */
  :host([configuration='filters']) dialog {
    visibility: hidden;
  }

  /* Side panel */
  :host([configuration='side-panel']) dialog,
  :host([configuration='roadmap-dialog']) dialog {
    box-sizing: border-box;
    margin-inline-end: 0;
    max-height: 100vh;
    width: 50vw;
    height: 100vh;
    padding-block-start: var(--ds-app-space-micro-4xl, 6rem);
    padding-block-end: var(--ds-app-space-micro-4xl, 6rem);
  }

  :host([configuration='roadmap-dialog']) dialog {
    padding-block: 0;
  }

  :host([configuration='roadmap-dialog']) dialog > slot::slotted(
    reimagine-roadmap-dialog
  ) {
    block-size: 100%;
    max-block-size: none;
    max-inline-size: none;
    box-shadow: none;
  }

  :host([configuration='side-panel']) .modal__container {
    padding-inline: var(--ds-modal-side-panel-container-padding-inline, 8rem);
  }

  :host([configuration='side-panel']) .modal__body {
    box-sizing: border-box;
    margin-block-start: var(--ds-app-space-micro-xl, 2rem);
    height: auto;
  }

  :host([configuration='side-panel']) .modal__body ::slotted(*) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: var(--ds-app-space-micro-2xl, 3rem);
    width: 100%;
  }

  :host([configuration='side-panel']) .modal__footer {
    box-sizing: border-box;
  }

  :host([configuration='side-panel']) .modal__footer ::slotted(*) {
    display: flex;
    flex-direction: column;
    gap: var(--ds-app-space-micro-l, 1.5rem);
  }

  :host([configuration='side-panel']) reimagine-divider {
    margin-block-start: var(--ds-app-space-micro-3xl, 4.5rem);
    margin-block-end: var(--ds-app-space-micro-2xl, 3rem);
  }

  /* Animation */
  dialog[open] {
    ${d(`var(--ds-modal-animation-duration, ${e(M)}) var(--ds-modal-animation-easing, ${e(A)}) slide-in-down`)}
  }

  dialog[open]:not(.show) {
    ${d(`var(--ds-modal-animation-duration, ${e(M)}) var(--ds-modal-animation-easing, ${e(A)}) slide-out-up`)}
  }

  @keyframes slide-in-down {
    from {
      transform: var(--ds-modal-transform, ${e(J)});
    }
  }

  @keyframes slide-out-up {
    to {
      transform: var(--ds-modal-transform, ${e(J)});
    }
  }
`,U=o`
  @media (max-width: ${e(c(h.md))}) {
    /* Close button */
    .modal__close-button {
      --ds-modal-close-button-top: 1rem;
      --ds-modal-close-button-right: 1rem;
      --ds-button-min-height: auto;
      z-index: var(--ds-z-index-20, 20);
    }

    /* Carousel */
    :host([configuration='carousel']) dialog {
      margin: 0;
      max-width: 100vw;
      max-height: 100vh;
      width: auto;
      height: auto;
    }

    :host([configuration='carousel']) reimagine-container {
      --ds-container-padding-inline-start: 1rem;
      --ds-container-padding-inline-end: 1rem;
    }

    :host([configuration='carousel']) .modal__body,
    :host([configuration='fullscreen']) .modal__body {
      padding-inline-start: 1rem;
      padding-inline-end: 1rem;
    }

    /* Filter */
    :host([configuration='filters']) dialog {
      visibility: visible;
      max-width: 100vw;
      max-height: 100vh;
      width: 100%;
      height: 100%;
      scroll-padding-block-start: 2rem;
      scroll-padding-block-end: 6rem;
    }

    :host([configuration='filters']) .modal__container {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      height: 100%;
      position: relative;
    }

    :host([configuration='filters']) .modal__header {
      --ds-app-type-body-m-font-size: 0.875rem;
      --ds-app-type-body-m-line-height: 1.25rem;

      justify-content: flex-start;
      align-items: center;
      gap: var(--ds-app-space-micro-xs, 0.5rem);
      padding-inline-start: 1rem;
      padding-inline-end: 4rem;
      padding-block-start: 1rem;
      padding-block-end: 1rem;
      background-color: var(
        --ds-modal-background-color,
        ${e(B)}
      );
      position: static;
    }

    :host([configuration='filters']) .modal__body {
      flex: 1;
      margin-bottom: 5rem;
    }

    :host([configuration='filters']) .modal__footer {
      width: 100%;
      background-color: var(
        --ds-modal-background-color,
        ${e(B)}
      );
      position: fixed;
      bottom: 0;
    }

    :host([configuration='filters']) ::slotted(reimagine-button) {
      display: grid;
      margin: 1rem;
    }

    /* Fullscreen */
    :host([configuration='fullscreen']) reimagine-button,
    :host([configuration='carousel']) reimagine-button {
      --ds-button-padding-inline-start: var(--ds-app-space-micro-2xs, 0.25rem);
      --ds-button-padding-inline-end: var(--ds-app-space-micro-2xs, 0.25rem);
      --ds-button-padding-block-start: var(--ds-app-space-micro-2xs, 0.25rem);
      --ds-button-padding-block-end: var(--ds-app-space-micro-2xs, 0.25rem);
      --ds-button-min-width: var(--ds-app-space-micro-xl, 2rem);
    }

    :host([configuration='fullscreen']) .modal__header,
    :host([configuration='carousel']) .modal__header {
      --ds-modal-header-padding-block: 1rem;

      padding-inline-start: 1rem;
    }

    /* Side panel */
    :host([configuration='side-panel']) dialog {
      padding-block: 3.5rem;
      max-width: 100vw;
      width: 100vw;
    }

    :host([configuration='roadmap-dialog']) dialog {
      max-width: 100vw;
      width: 100vw;
    }

    :host([configuration='side-panel']) .modal__container {
      padding-inline: 1rem;
    }

    :host([configuration='side-panel']) .modal__body {
      margin-block-start: var(--ds-app-space-micro-xl, 1.5rem);
    }

    :host([configuration='side-panel']) reimagine-divider {
      margin-block-start: var(--ds-app-space-micro-3xl, 3rem);
      margin-block-end: var(--ds-app-space-micro-2xl, 2rem);
    }

    :host([configuration='side-panel']) .modal__close-button {
      --ds-modal-close-button-top: 0.5rem;
      --ds-modal-close-button-right: 0.5rem;
    }
  }
`;var W,X=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,ee=(e,o,i,t)=>{for(var a,s=t>1?void 0:t?Z(o,i):o,l=e.length-1;l>=0;l--)(a=e[l])&&(s=(t?a(o,i,s):a(s))||s);return t&&s&&X(o,i,s),s};const oe="reimagine-modal",ie=["reimagine-link","reimagine-button","reimagine-checkbox","reimagine-dropdown","reimagine-dropdown-bar","reimagine-dropdown-trigger","reimagine-input","reimagine-pill","reimagine-radiobutton"];let te=class extends(W=$,W){constructor(){super(),this.closeLabel="Close",this.open=!1,this.hideDivider=!1,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._modalEvents=[],this._focusableElements=[],this._visibleFocusableElements=[],this._focusTrapHandler=null,this._focusTrapObserver=null,this.toggle=this.toggle.bind(this),this.close=this.close.bind(this),this.showModal=this.showModal.bind(this)}_handleSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length}_handleOpen(){var e;if(this[k]=new CustomEvent(k,{cancelable:!0}),this.dispatchEvent(this[k]),this[k].defaultPrevented)return;if(this._dialog.showModal(),this._dialog.classList.add("show"),this._closeButton)this._closeButton.focus();else{const o=this._defaultSlot[0],i=null==(e=null==o?void 0:o.shadowRoot)?void 0:e.querySelector('[part="card-dialog__top_right"]'),t=m(i,"reimagine-button");null==t||t.focus()}const o=p(this._dialog);this._dialog.addEventListener(g,(()=>{this[C]=new CustomEvent(C),this.dispatchEvent(this[C]),this._enableFocusTrap()}).bind(this),{once:!0}),u(this._dialog,o)}_handleClose(){if(this[S]=new CustomEvent(S,{cancelable:!0}),this.dispatchEvent(this[S]),this[S].defaultPrevented)return;this._disableFocusTrap(),this._dialog.removeAttribute("class");const e=p(this._dialog);this._dialog.addEventListener(g,(()=>{this._dialog.close(),this[T]=new CustomEvent(T),this.dispatchEvent(this[T])}).bind(this),{once:!0}),u(this._dialog,e)}_handleDialogClick(e){e.target===this._dialog&&this.close()}_handleDialogCancel(e){e.preventDefault(),this.close()}toggle(){this.open=!this.open}showModal(){this.open=!0}close(){this.open=!1}_isElementVisible(e){const o=window.getComputedStyle(e);return"none"!==o.display&&"hidden"!==o.visibility}_isFocusableElement(e){return"true"!==e.getAttribute("aria-hidden")&&!e.hasAttribute("disabled")&&"true"!==e.getAttribute("aria-disabled")&&!(!b(e,ie)&&!b(e,_))}_collectFocusableElements(e){const o=[],i=e=>{if(e.nodeType!==Node.ELEMENT_NODE)return;const t=e;this._isFocusableElement(t)&&o.push(t);const{shadowRoot:a}=t;if(a&&!this._isFocusableElement(t)&&Array.from(a.children).forEach(e=>i(e)),"SLOT"===t.tagName)t.assignedElements({flatten:!0}).forEach(e=>{i(e)});else{if(t instanceof HTMLElement&&null!==t.assignedSlot&&a)return;Array.from(t.children).forEach(e=>i(e))}};return i(e),0===o.length&&(e.hasAttribute("tabindex")||e.setAttribute("tabindex","0"),console.warn("Modal: No focusable elements found. Dialog will receive focus. Recommend adding interactive elements (buttons, inputs, links) to your modal."),o.push(e)),o}_refreshVisibleElements(){this._visibleFocusableElements=this._focusableElements.filter(e=>this._isElementVisible(e))}_enableFocusTrap(){this._focusableElements=this._collectFocusableElements(this._dialog),this._refreshVisibleElements(),this._focusTrapObserver=new MutationObserver(()=>{this._refreshVisibleElements()}),this._focusTrapObserver.observe(this._dialog,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["style","class","hidden","disabled","aria-hidden"]}),this._focusTrapHandler=e=>{if("Tab"!==e.key||(this._focusableElements=this._collectFocusableElements(this._dialog),this._refreshVisibleElements(),0===this._visibleFocusableElements.length))return;const o=this._visibleFocusableElements[0],i=this._visibleFocusableElements[this._visibleFocusableElements.length-1],t=e.composedPath();!e.shiftKey&&t.includes(i)&&(e.preventDefault(),null==o||o.focus()),e.shiftKey&&t.includes(o)&&(e.preventDefault(),null==i||i.focus())},this._dialog.addEventListener("keydown",this._focusTrapHandler)}_disableFocusTrap(){this._focusTrapHandler&&(this._dialog.removeEventListener("keydown",this._focusTrapHandler),this._focusTrapHandler=null),this._focusTrapObserver&&(this._focusTrapObserver.disconnect(),this._focusTrapObserver=null),this._focusableElements=[],this._visibleFocusableElements=[]}_renderCloseButton(e="large",o="medium"){return l`
      <reimagine-button
        class="modal__close-button"
        part="modal__close-button"
        button-label="${this.closeLabel}"
        icon-only
        appearance=${w.buttonSecondary}
        shape=${E.rounded}
        size=${e}
        @click="${this.close}"
      >
        <reimagine-icon icon="dismiss" slot="button__icon" size=${o}></reimagine-icon>
      </reimagine-button>
    `}_renderOptionalSlot(e,o){return l`
      <div part=${e} class=${e} style="${o?"display: none;":""}">
        <slot name=${e} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_contentTemplate(){return l`
      ${this._renderOptionalSlot("modal__first",this._firstSlotEmpty)}
      ${this.configuration===D?this._renderCloseButton("small","small"):n}
      ${this.configuration===L?this._renderCloseButton("medium","small"):n}
      <div class="modal__container" part="modal__container">
        ${this.configuration===L?n:l`
              <div class="modal__header" part="modal__header">
                <slot
                  name="modal__header-title"
                  @slotchange=${this._handleSlotChange}
                  id="modal__header-title"
                ></slot>
                <slot name="modal__header-detail" @slotchange=${this._handleSlotChange}></slot>
                ${this.configuration===z||this.configuration===F?this._renderCloseButton("large","medium"):n}
              </div>
            `}
        ${this.hideDivider||this.configuration===D||this.configuration===L?n:l`<reimagine-divider></reimagine-divider>`}
        <div part="modal__body" class="modal__body">
          <slot @slotchange=${this._handleSlotChange}></slot>
        </div>
        ${this.configuration===L?l`<reimagine-divider></reimagine-divider>`:n}
        <div class="modal__footer" part="modal__footer">
          <slot name="modal__footer" @slotchange=${this._handleSlotChange}></slot>
        </div>
      </div>
      ${this._renderOptionalSlot("modal__last",this._lastSlotEmpty)}
    `}connectedCallback(){if(super.connectedCallback(),this.triggers){const e=f(this,this.triggers,!0);if(null!=e&&e.length)for(let o=0;o<e.length;o++)this._modalEvents.push({el:e[o],type:"click",handler:this.showModal});v(this._modalEvents)}}disconnectedCallback(){super.disconnectedCallback(),y(this._modalEvents),this._disableFocusTrap()}updated(e){e.has("open")&&(this.open?this._handleOpen():this._dialog.classList.contains("show")&&this._handleClose())}render(){const e=this.configuration===O||this.configuration===j,o=this.configuration!==L,i=this.dialogLabel||(e||!o?"Dialog":n);return l`
      <dialog
        part="modal__base"
        @click="${this._handleDialogClick}"
        @cancel="${this._handleDialogCancel}"
        @close__card-dialog=${this.close}
        @close__roadmap-dialog=${this.close}
        aria-label=${i}
        aria-labelledby=${this.dialogLabel||e||!o?n:"modal__header-title"}
      >
        ${e?l`<slot @slotchange=${this._handleSlotChange}></slot>`:this._contentTemplate()}
      </dialog>
    `}};te.styles=[Q,U],ee([i({slot:"modal__first"})],te.prototype,"_firstSlot",2),ee([i({slot:"modal__last"})],te.prototype,"_lastSlot",2),ee([t("reimagine-button.modal__close-button")],te.prototype,"_closeButton",2),ee([a({attribute:"close-label"})],te.prototype,"closeLabel",2),ee([a({attribute:"dialog-label"})],te.prototype,"dialogLabel",2),ee([a({type:Boolean,reflect:!0})],te.prototype,"open",2),ee([a({reflect:!0})],te.prototype,"configuration",2),ee([a()],te.prototype,"triggers",2),ee([a({type:Boolean,attribute:"hide-divider"})],te.prototype,"hideDivider",2),ee([t("dialog",!0)],te.prototype,"_dialog",2),ee([i()],te.prototype,"_defaultSlot",2),ee([s()],te.prototype,"_firstSlotEmpty",2),ee([s()],te.prototype,"_lastSlotEmpty",2),ee([s()],te.prototype,"_modalEvents",2),te=ee([x(oe)],te);export{te as Modal,oe as name};
