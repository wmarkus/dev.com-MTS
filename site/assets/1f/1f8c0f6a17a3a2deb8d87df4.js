import{r as e,i as t,b as r,e as a,f as s,c as i}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{q as o,e as n,o as d,f as l,d as p}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{T as h,R as c}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{d as b,s as u}from"/__mirror/assets/4230c2711e37b2e85105da0e";import{F as m}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{I as v}from"/__mirror/assets/2e9aed9389db597dff461cb3";import{n as _,a as w}from"/__mirror/assets/0645e232e9009c5ca632524f";import{name as g}from"/__mirror/assets/bebb1cc6e0bd3a39bf2b6d85";const y="var(--ds-app-space-micro-s, 0.75rem)",E="var(--ds-app-space-micro-s, 0.75rem)",S="var(--ds-app-space-micro-m, 1rem)",$="var(--ds-app-space-micro-s, 0.75rem)",f="var(--ds-app-space-micro-s, 0.75rem)",C="var(--ds-app-radii-s, 0.5rem)",k="var(--ds-app-radii-m, 1rem)",x="var(--ds-border-xs)",D="solid",A="var(--ds-elevation-level-4, 0px 8px 16px rgba(0, 0, 0, 0.14)0px 0px 2px rgba(0, 0, 0, 0.12))",j="linear-gradient(89.97deg, var(--ds-app-color-base-special-bg-opt2-stop2, #0078d4) 0.03%, var(--ds-app-color-base-special-bg-opt2-stop1, #6dd1c1) 99.97%)",O="1",z=t`
  :host .wrapper {
    background: var(--ds-ai-search-wrapper-background, ${e(b.background)});
    padding: var(--ds-ai-search-wrapper-padding, ${e(y)});
    box-shadow: var(--ds-ai-search-wrapper-box-shadow, ${e(A)});
    border-radius: var(
      --ds-ai-search-wrapper-border-radius,
      ${e(k)}
    );
  }

  :host .base {
    position: relative;
    overflow: hidden;
    background: var(--ds-ai-search-background, ${e(u.background)});
    border-style: var(--ds-ai-search-border-style, ${e(D)});
    border-width: var(--ds-ai-search-border-width, ${e(x)});
    border-radius: var(--ds-ai-search-border-radius, ${e(C)});
    border-color: var(--ds-ai-search-border-color, ${e(u.borderColor)});
    padding-inline-start: var(
      --ds-ai-search-padding-inline-start,
      ${e(S)}
    );
    padding-inline-end: var(
      --ds-ai-search-padding-inline-end,
      ${e(E)}
    );
    padding-block-start: var(
      --ds-ai-search-padding-block-start,
      ${e(f)}
    );
    padding-block-end: var(
      --ds-ai-search-padding-block-end,
      ${e($)}
    );
    opacity: var(--ds-ai-search-opacity, ${e(O)});
  }

  ::slotted([slot='indicator']) {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: var(
      --ds-ai-search-indicator-background,
      ${e(j)}
    );
  }

  :host([disabled]) .base {
    --ds-ai-search-box-shadow: none;

    cursor: not-allowed;
    pointer-events: none;
  }

  :host(:hover:not([disabled])) .wrapper {
    --ds-ai-search-wrapper-background: var(--ds-app-color-surface-glass-bg-hover);
    --ds-ai-search-background: var(--ds-app-color-surface-solid-bg-hover);
  }
`;var B=Object.defineProperty,L=Object.getOwnPropertyDescriptor,I=(e,t,r,a)=>{for(var s,i=a>1?void 0:a?L(t,r):t,o=e.length-1;o>=0;o--)(s=e[o])&&(i=(a?s(t,r,i):s(i))||i);return a&&i&&B(t,r,i),i};const P="reimagine-ai-search";let q=class extends(m(c)){constructor(){super(),this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._aiSearchEvents=[],this.disabled=!1,this.role="search",this.id="ai-search",this._drawer=null,this._initAiDrawer=e=>{switch(e.type){case`${_}-ready`:{const e=o(document,_);e?(this._drawer=e,this._initializeDrawerEvents()):console.warn("Expected reimagine-ai-powered-assistant-drawer, but none found.");break}case`${g}-ready`:{const e=o(document,g);e?(this._drawer=e,this._initializeDrawerEvents()):console.warn("Expected reimagine-ai-powered-assistant-drawer-pricing-hub, but none found.");break}default:console.warn(`Unhandled drawer-ready event type: ${e.type}`)}},this.theme=this.theme??h.light}_handleSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length}_initializeDrawerEvents(){if(this._drawer){const e={el:this._drawer,type:w.ChatDrawerClosed,handler:this._handleChatDrawerClosed.bind(this)};n([e]),this._aiSearchEvents.push(e)}}updated(e){this._inputElement&&e.has("disabled")&&(this.disabled?(this._inputElement.setAttribute("disabled",""),this._inputElement.setAttribute("tabindex","-1")):(this._inputElement.removeAttribute("disabled"),this._inputElement.removeAttribute("tabindex")))}firstUpdated(){this._inputElement=this._baseSlot[0],this.inputControl=this._inputElement.querySelector("input"),this._aiSearchEvents.push({el:this,type:v.submit,handler:this.onSubmit.bind(this)},{el:this.inputControl,type:"input",handler:this._handleInputChange.bind(this)}),this._toggleButtonDisabled(this.inputControl.value===d),n(this._aiSearchEvents)}connectedCallback(){super.connectedCallback();const e=o(document,_);e?(this._drawer=e,this._initializeDrawerEvents()):window.addEventListener(`${_}-ready`,this._initAiDrawer,{once:!0});const t=o(document,g);t?(this._drawer=t,this._initializeDrawerEvents()):window.addEventListener(`${g}-ready`,this._initAiDrawer,{once:!0})}disconnectedCallback(){super.disconnectedCallback(),l(this._aiSearchEvents),window.removeEventListener(`${_}-ready`,this._initAiDrawer),window.removeEventListener(`${g}-ready`,this._initAiDrawer)}onSubmit(){this.inputControl.value!==d&&this._drawer&&this._drawer.handleChatPanelOpen(this.inputControl.value)}_handleChatDrawerClosed(){this.inputControl.focus()}_toggleButtonDisabled(e){const t=o(this,"reimagine-button");e?null==t||t.setAttribute("disabled","true"):null==t||t.removeAttribute("disabled")}_handleInputChange(){this._toggleButtonDisabled(this.inputControl.value===d)}_renderOptionalSlot(e,t,a){return r`
      <div part=${e} class=${e} style="${t?"display: none;":""}">
        <slot name=${e} @slotchange="${this._handleSlotChange}"></slot>
        ${a?r`<slot name="indicator"></slot>`:""}
      </div>
    `}_renderAiSearchSlots(){return r`
      ${this._renderOptionalSlot("first",this._firstSlotEmpty,!1)}
      <div part="wrapper" class="wrapper">
        <slot name="wrapper"> ${this._renderOptionalSlot("base",!1,!0)} </slot>
      </div>
      ${this._renderOptionalSlot("last",this._lastSlotEmpty,!1)}
    `}render(){return r` ${this.renderFormElement(this._renderAiSearchSlots())} `}};q.styles=[z],I([a({slot:"first"})],q.prototype,"_firstSlot",2),I([a({slot:"last"})],q.prototype,"_lastSlot",2),I([a({slot:"base"})],q.prototype,"_baseSlot",2),I([s()],q.prototype,"_firstSlotEmpty",2),I([s()],q.prototype,"_lastSlotEmpty",2),I([s()],q.prototype,"_aiSearchEvents",2),I([i({type:Boolean})],q.prototype,"disabled",2),I([i()],q.prototype,"role",2),I([i()],q.prototype,"id",2),I([s()],q.prototype,"_inputElement",2),I([s()],q.prototype,"inputControl",2),q=I([p(P)],q);export{q as AiSearch,P as name};
