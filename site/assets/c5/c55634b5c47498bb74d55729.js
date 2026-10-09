import{i as t,r as e,c as s,e as i,g as o,k as n,f as r,b as a,h as l,o as c}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{t as d,i as u,c as h,q as m,s as b,e as _,f,d as p}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{l as v,R as g}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{s as y}from"/__mirror/assets/4230c2711e37b2e85105da0e";import{a as I,b as k,n as S}from"/__mirror/assets/ac1415d701004f2dd9f24260";import"/__mirror/assets/5f924eec6274a2d611fc1ea0";const $=t`
  scrollbar-width: ${t`thin`};
  scrollbar-color: ${t`var(--ds-app-color-interactive-secondary-bg-default)`} ${t`rgba(0, 0, 0, 0)`};

  &::-webkit-scrollbar-thumb {
    border-radius: ${t`var(--ds-app-radii-circle)`};
  }
`,E={display:"block",background:"var(--ds-app-color-surface-solid-bg-default, #fefefe)",backdropFilter:y.backdropFilter,borderWidth:y.borderWidth,borderStyle:y.borderStyle,borderColor:y.borderColor,borderRadius:"var(--ds-app-radii-s, 0.5rem)",boxShadow:"var(--ds-elevation-level-2)",padding:"var(--ds-app-space-micro-xs, 0.5rem)",gap:"var(--ds-app-space-micro-s, 0.75rem)",contentMaxHeight:"22rem",contentOverflow:"auto",color:"var(--ds-app-color-base-default-fg-heading, #0e1726)",minWidth:"max-content"},w=t`
  :host {
    display: var(--ds-menu-list-display, ${e(E.display)});
  }

  .menu-list {
    display: flex;
    flex-direction: column;
    background: var(--ds-menu-list-background, ${e(E.background)});
    backdrop-filter: var(
      --ds-menu-list-backdrop-filter,
      ${e(E.backdropFilter)}
    );
    border-width: var(--ds-menu-list-border-width, ${e(E.borderWidth)});
    border-style: var(--ds-menu-list-border-style, ${e(E.borderStyle)});
    border-color: var(--ds-menu-list-border-color, ${e(E.borderColor)});
    border-radius: var(--ds-menu-list-border-radius, ${e(E.borderRadius)});
    box-shadow: var(--ds-menu-list-box-shadow, ${e(E.boxShadow)});
    padding: var(--ds-menu-list-padding, ${e(E.padding)});
    gap: var(--ds-menu-list-gap, ${e(E.gap)});
    outline: 2px solid transparent;
    min-width: var(--ds-menu-list-min-width, ${e(E.minWidth)});
  }

  .menu-list__content {
    max-height: var(
      --ds-menu-list-content-max-height,
      ${e(E.contentMaxHeight)}
    );
    overflow: var(--ds-menu-list-content-overflow, ${e(E.contentOverflow)});
  }

  :host(:focus) .menu-list__content {
    ${v};
  }

  .menu-list__content-scrolling {
    overflow: var(--ds-menu-list-content-overflow, ${e(E.contentOverflow)});
    padding-block: var(--ds-vfi-outline-width, 0.1875rem);
    padding-inline-start: var(--ds-vfi-outline-width, 0.1875rem);
    padding-inline-end: var(--ds-app-space-micro-xs, 0.5rem);

    ${$};
  }

  .menu-list__content-margin {
    margin-bottom: var(--ds-app-space-micro-xs, 0.5rem);
  }

  .menu-list__first {
    color: var(--ds-menu-list-first-slot-color, ${e(E.color)});
  }

  .menu-list__last {
    color: var(--ds-menu-list-last-slot-color, ${e(E.color)});
  }
`;let L="unknown",x=!1,A=0;function C(){L="mouse"}function D(){L="keyboard"}function M(){L="touch"}class O{constructor(t){(this.host=t).addController(this)}hostConnected(){A++,x||(x=!0,document.addEventListener("mousedown",C,!0),document.addEventListener("keydown",D,!0),document.addEventListener("touchstart",M,!0))}hostDisconnected(){A--,A<=0&&(A=0,x&&(document.removeEventListener("mousedown",C,!0),document.removeEventListener("keydown",D,!0),document.removeEventListener("touchstart",M,!0),x=!1))}isInitialized(){return"unknown"!==L}isKeyboard(){return"keyboard"===L}getLastInteraction(){return L}}var R=Object.defineProperty,j=Object.getOwnPropertyDescriptor,F=(t,e,s,i)=>{for(var o,n=i>1?void 0:i?j(e,s):e,r=t.length-1;r>=0;r--)(o=t[r])&&(n=(i?o(e,s,n):o(n))||n);return i&&n&&R(e,s,n),n};const W="reimagine-menu-list";let z=class extends g{constructor(){super(...arguments),this.configuration=I.default,this.size=k.small,this.selectable=!1,this.label="Menu options",this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._buttonSlotEmpty=!0,this._scrollbarVisible=!1,this._menuListEvents=[],this._activeDescendant=null,this._focusableItems=[],this.inputMethodController=new O(this),this._handleKeyDown=t=>{const e=t;switch(e.key){case d.SPACE:e.preventDefault(),this._handleClick(e,!0);break;case d.ENTER:this._handleClick(e,!0);break;case d.ARROW_DOWN:this._focusNextItem();break;case d.ARROW_UP:this._focusPreviousItem();break;case d.HOME:this._focusFirstItem();break;case d.END:this._focusLastItem()}},this._handleFocusInKeyboard=t=>{if(!this.inputMethodController.isKeyboard())return;const e=t.relatedTarget;let s=e;if((u(e,"reimagine-tab")||u(e,"reimagine-pill"))&&(s=h(e,"reimagine-menu-list-item")),!e||s&&!this._listItems.includes(s)){const t=this._focusableItems.find(t=>t.hasAttribute("active")||"true"===t.getAttribute("aria-selected"));t?(t.focus(),this._activeDescendant=t.id):this._focusableItems.length>0&&this._focusFirstItem()}}}get _listItems(){let t=this._defaultSlot;return 1===t.length&&t[0]instanceof HTMLSlotElement&&(t=t[0].assignedElements().map(t=>{if(!u(t,S)){return m(t,S)||t}return t})),t}_handleClick(t,e=!1){var s;const i=t.target,o=this._listItems.find(t=>t.contains(i));if((null==o?void 0:o.getAttribute("configuration"))===I.heading)return;if(o&&(this.configuration===I.default||this.configuration===I.tab)&&"listbox"===this._setMenuListRole()&&(this._listItems.forEach(t=>{t!==o&&(t.removeAttribute("active"),t.removeAttribute("aria-selected"))}),this.configuration===I.default&&o.hasAttribute("active")?(o.removeAttribute("active"),o.removeAttribute("aria-selected"),this._activeDescendant=null):(o.setAttribute("active",""),o.setAttribute("aria-selected","true"),this._activeDescendant=o.id)),o&&(null==o?void 0:o.getAttribute("configuration"))===I.checkmark){const t=null==(s=o.shadowRoot)?void 0:s.querySelector('input[type="checkbox"]');t&&this.configuration===I.checkmark&&(e&&t.click(),t.checked?o.setAttribute("checked",""):o.removeAttribute("checked"))}const n=this._focusableItems.find(t=>t.id===this._activeDescendant);n&&((null==n?void 0:n.getAttribute("configuration"))===I.option||(null==n?void 0:n.getAttribute("configuration"))===I.tab)&&(null==n||n.click())}_focusNextItem(){if(0===this._focusableItems.length)return;const t=(this._focusableItems.findIndex(t=>t.id===this._activeDescendant)+1)%this._focusableItems.length;this._focusItemInList(this._focusableItems,t)}_focusPreviousItem(){if(0===this._focusableItems.length)return;const t=this._focusableItems.findIndex(t=>t.id===this._activeDescendant),e=Math.max(t-1,0);this._focusItemInList(this._focusableItems,e)}_focusFirstItem(){0!==this._focusableItems.length&&this._focusItemInList(this._focusableItems,0)}_focusLastItem(){0!==this._focusableItems.length&&this._focusItemInList(this._focusableItems,this._focusableItems.length-1)}_focusItemInList(t,e){const s=t[e];s&&(this._activeDescendant=s.id,s.focus())}_setMenuListRole(){return!this.selectable||this.configuration!==I.default&&this.configuration!==I.link&&this.configuration!==I.heading&&this.configuration!==I.checkmark?"list":"listbox"}_handleSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length,this._buttonSlotEmpty=0===this._buttonSlot.length;let t=0;this._listItems.forEach(e=>{!e.id&&e.getAttribute("configuration")!==I.heading&&(e.id=`menu-item-${t}`,t++)}),this._focusableItems=this._listItems.filter(t=>t.getAttribute("configuration")!==I.heading),this.selectable&&this._focusableItems.forEach(t=>{t.hasAttribute("selectable")||t.setAttribute("selectable","")}),this.updateScrollbarVisible()}_renderOptionalSlot(t,e){return a`
      <div part=${t} class=${t} style="${e?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}updated(t){if(t.has("configuration")&&this.configuration!==I.heading&&b(this._listItems,{configuration:this.configuration}),t.has("size")&&b(this._listItems,{size:this.size}),t.has("label")&&this._menuListContent&&this._menuListContent.setAttribute("aria-label",this.label||""),t.has("selectable")){const t=this._setMenuListRole();this._listItems.forEach(e=>{let s;s=e.getAttribute("configuration")===I.heading?"group":"listbox"===t?"option":"listitem",e.setAttribute("role",s)})}}updateScrollbarVisible(){this._scrollbarVisible=this._menuListContent.scrollHeight>this._menuListContent.clientHeight}connectedCallback(){super.connectedCallback(),this._menuListEvents.push({el:this,type:"click",handler:this._handleClick},{el:this,type:"keydown",handler:this._handleKeyDown},{el:this,type:"focusin",handler:this._handleFocusInKeyboard}),_(this._menuListEvents)}disconnectedCallback(){f(this._menuListEvents),super.disconnectedCallback()}render(){const t={"menu-list__content-scrolling":this._scrollbarVisible,"menu-list__content-margin":!this._buttonSlotEmpty};return a`
      <div class="menu-list" part="menu-list">
        ${this._renderOptionalSlot("menu-list__first",this._firstSlotEmpty)}
        <div
          class="menu-list__content ${l(t)}"
          part="menu-list__content"
          aria-label=${c(this.label||void 0)}
          role=${this._setMenuListRole()}
          aria-activedescendant=${c("listbox"===this._setMenuListRole()&&this._activeDescendant?this._activeDescendant:void 0)}
        >
          <slot @slotchange="${this._handleSlotChange}"></slot>
        </div>
        ${this._lastSlotEmpty?"":a`<reimagine-divider></reimagine-divider>`}
        ${this._renderOptionalSlot("menu-list__last",this._lastSlotEmpty)}
        ${this._buttonSlotEmpty?"":a`<reimagine-divider></reimagine-divider>`}
        ${this._renderOptionalSlot("menu-list__buttons",this._buttonSlotEmpty)}
      </div>
    `}};z.styles=[w],F([s({reflect:!0})],z.prototype,"configuration",2),F([s({reflect:!0,attribute:"size"})],z.prototype,"size",2),F([s({type:Boolean,reflect:!0})],z.prototype,"selectable",2),F([s({type:String,reflect:!0})],z.prototype,"label",2),F([i({slot:"menu-list__first"})],z.prototype,"_firstSlot",2),F([i({slot:"menu-list__last"})],z.prototype,"_lastSlot",2),F([i({slot:"menu-list__buttons"})],z.prototype,"_buttonSlot",2),F([o()],z.prototype,"_defaultSlot",2),F([n(".menu-list__content")],z.prototype,"_menuListContent",2),F([r()],z.prototype,"_firstSlotEmpty",2),F([r()],z.prototype,"_lastSlotEmpty",2),F([r()],z.prototype,"_buttonSlotEmpty",2),F([r()],z.prototype,"_scrollbarVisible",2),F([r()],z.prototype,"_menuListEvents",2),F([r()],z.prototype,"_activeDescendant",2),z=F([p(W)],z);export{z as MenuList,W as name};
