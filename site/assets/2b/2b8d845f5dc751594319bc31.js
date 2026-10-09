import{r as t,i,c as e,e as a,f as s,b as n}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{R as o,i as l,j as r,B as d}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{a as c,e as p,f as h,s as m,d as b}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{s as f,S as v}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{b as u,v as g}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";const y="var(--ds-app-color-base-default-fg-heading, #0E1726)",_="var(--ds-app-space-micro-l, 1.5rem)",C="center",S="row",E="row",k="var(--ds-app-space-micro-xs, .5rem)",w="1328px",x=i`
  :host {
    padding: var(--ds-action-bar-padding, ${t("var(--ds-app-space-micro-l, 1.5rem) var(--ds-app-space-micro-xl, 2rem)")});
    display: block;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .content {
    display: flex;
    gap: var(--ds-action-bar-gap, ${t(_)});
    flex-direction: var(
      --ds-action-bar-flex-direction,
      ${t(S)}
    );
    align-items: var(--ds-action-bar-align-items, ${t(C)});
    width: 100%;
    max-width: var(--ds-action-bar-content-max-width, ${t(w)});
    margin-inline: auto;
  }

  .initial {
    --ds-app-type-body-m-font-size: var(
      --ds-action-bar-initial-font-size,
      ${t(f.fontSize)}
    );
    --ds-app-type-body-m-font-weight: var(
      --ds-action-bar-initial-font-weight,
      ${t(f.fontWeight)}
    );
    --ds-app-type-body-m-line-height: var(
      --ds-action-bar-initial-line-height,
      ${t(f.lineHeight)}
    );
    --ds-app-type-body-m-letter-spacing: var(
      --ds-action-bar-initial-letter-spacing,
      ${t(f.letterSpacing)}
    );
    color: var(--ds-action-bar-color, ${t(y)});
  }

  .middle {
    display: flex;
    gap: var(--ds-action-bar-default-gap, ${t(k)});
    flex-direction: var(
      --ds-action-bar-default-flex-direction,
      ${t(E)}
    );
  }

  .final {
    display: flex;
    margin-inline-start: auto;
  }
`,$="var(--ds-app-space-micro-m, 1rem) var(--ds-app-space-micro-l, 1.5rem) var(--ds-app-space-micro-m, 1rem)",D="var(--ds-app-space-micro-m, 1rem)",B="flex-start",A="column",j="column",z=i`
  @media (max-width: ${t(u(g.md))}) {
    :host {
      --ds-action-bar-flex-direction: ${t(A)};
      --ds-action-bar-padding: ${t($)};
      --ds-action-bar-gap: ${t(D)};
      --ds-action-bar-align-items: ${t(B)};
    }

    .final {
      margin-inline-start: 0;
      display: block;
      width: 100%;
    }

    .middle {
      --ds-action-bar-default-flex-direction: ${t(j)};
    }
  }
`,K="dismiss",L="cancel";var V=Object.defineProperty,O=Object.getOwnPropertyDescriptor,M=(t,i,e,a)=>{for(var s,n=a>1?void 0:a?O(i,e):i,o=t.length-1;o>=0;o--)(s=t[o])&&(n=(a?s(i,e,n):s(n))||n);return a&&n&&V(i,e,n),n};const P="reimagine-action-bar";let q=class extends o{constructor(){super(),this._initialSlotEmpty=!0,this._finalSlotVisible=!0,this._actionBarEvents=[],this._handleCancelClick=()=>{const t=new CustomEvent(L,{bubbles:!0,composed:!0});c(this,"reimagine-button",'[slot="middle"]').forEach(t=>t.remove()),this.hidden=!0,this.dispatchEvent(t)},this._handleCancelKeyDown=t=>{const i=t;("Enter"===i.key||" "===i.key)&&this._handleCancelClick()},this._handleDismissClick=t=>{const i=new CustomEvent(K,{bubbles:!0,composed:!0}),e=t.target,a=this._middleSlot.find(t=>t.contains(e));a&&a.remove(),this.dispatchEvent(i)},this._handleDismissKeyDown=t=>{const i=t;("Enter"===i.key||" "===i.key)&&this._handleDismissClick(t)},this.surface=v.solid}_handleSlotChange(){this._initialSlotEmpty=0===this._initialSlot.length}_handleMiddleSlotChange(){var t;this.hidden=0===this._middleSlot.length,this._finalSlotVisible=this._middleSlot.length>1,null==(t=this._middleSlot)||t.forEach(t=>{const i=t;this._configureButton(i,t.textContent??"")})}connectedCallback(){super.connectedCallback(),this.hidden=0===this._middleSlot.length;const t=this.querySelector("#cancel");this._actionBarEvents.push({el:t,type:"click",handler:this._handleCancelClick},{el:t,type:"keydown",handler:this._handleCancelKeyDown}),p(this._actionBarEvents),this.setAttribute("aria-live","polite"),this.setAttribute("aria-atomic","true")}disconnectedCallback(){super.disconnectedCallback(),h(this._actionBarEvents),this._middleSlot.forEach(t=>{const i=t;i.removeEventListener("click",this._handleDismissClick),i.removeEventListener("keydown",this._handleDismissKeyDown)})}_configureButton(t,i){t.addEventListener("click",this._handleDismissClick,{once:!0}),t.addEventListener("keydown",this._handleDismissKeyDown,{once:!0});const e={size:d.medium,shape:r.rounded,appearance:l.buttonSecondary,"with-icon-append":"true"};m(t,e);const a=document.createElement("span");a.setAttribute("slot","button__text"),a.textContent=i;const s=document.createElement("reimagine-icon");for(s.setAttribute("icon","dismiss"),s.setAttribute("size","small"),s.setAttribute("slot","button__icon-append"),s.setAttribute("filled","");t.firstChild;)t.firstChild.remove();t.append(a,s)}addButton(t){const i=document.createElement("reimagine-button"),e=i;return e.setAttribute("slot","middle"),this._configureButton(e,t),this.append(i),e}showActionBar(){this.hidden=!1}render(){return n`
      <div class="content" part="content">
        <div
          class="initial"
          part="initial"
          style="${this._initialSlotEmpty?"display: none;":""}"
        >
          <slot name="initial" @slotchange="${this._handleSlotChange}"></slot>
        </div>
        <div class="middle" part="middle">
          <slot name="middle" @slotchange="${this._handleMiddleSlotChange}"></slot>
        </div>
        <div class="final" part="final" style="${this._finalSlotVisible?"":"display: none;"}">
          <slot name="final" @slotchange="${this._handleSlotChange}"></slot>
        </div>
      </div>
    `}};q.styles=[x,z],M([e({reflect:!0})],q.prototype,"configuration",2),M([e({reflect:!0})],q.prototype,"surface",2),M([a({slot:"initial"})],q.prototype,"_initialSlot",2),M([a({slot:"middle"})],q.prototype,"_middleSlot",2),M([s()],q.prototype,"_initialSlotEmpty",2),M([s()],q.prototype,"_finalSlotVisible",2),M([s()],q.prototype,"_actionBarEvents",2),q=M([b(P)],q);export{q as ActionBar,P as name};
