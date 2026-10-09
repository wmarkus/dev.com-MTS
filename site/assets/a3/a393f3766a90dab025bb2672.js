import{r as t,i,c as e,e as n,g as o,f as a,b as r,A as s,o as l,h as d}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i as c,t as h,q as p,g as u,e as v,f as g,a as m,d as b}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{I as y}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{name as f}from"/__mirror/assets/a037aa793f6deda3081463df";import{b as _}from"/__mirror/assets/5849ec5e150363c91281fb26";import{v as w,b as k}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{R as x,E as S}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{n as E,a as $}from"/__mirror/assets/0e04451227cb181640c3302c";import"/__mirror/assets/5f924eec6274a2d611fc1ea0";import"/__mirror/assets/5d2e1bf3d87581457a2b76db";import"/__mirror/assets/ea6784fd34f0ec31a8e3ea36";import"/__mirror/assets/674e87e1db3168cb538c091d";import"/__mirror/assets/c180aa30a3b15984764facc1";import"/__mirror/assets/c55634b5c47498bb74d55729";import"/__mirror/assets/1db4ee73d7e46e9ea9afc127";import"/__mirror/assets/5567906201e72283a030a68f";const A="dropdown",j="jumplinks",N="quicklinks",D="jumplinks--horizontal",L="navigation",C="flex",T="center",z="var(--ds-elevation-level-2, 0px 2px 4px rgba(0, 0, 0, 0.14) 0px 0px 2px rgba(0, 0, 0, 0.12))",O="var(--ds-app-color-base-default-fg-heading, #0e1726)",R="flex",q="var(--ds-app-space-micro-l, 1.5rem)",W="flex",I="center",G="var(--ds-app-type-label-l-line-height, 1.5rem)",Q="var(--ds-app-type-label-l-font-size, 1rem)",K="var(--ds-app-type-label-l-font-weight, 600)",U="var(--ds-app-space-micro-m, 1rem)",B="var(--ds-app-space-micro-s, 0.75rem)",J="var(--ds-app-space-micro-xl, 0.5rem)",M="0.5rem",P="var(--ds-app-space-micro-3xs, 0.125rem)",V="1px",H="var(--ds-app-type-label-s-font-size)",X=i`
  /** Navigation (variant) */
  :host {
    --ds-secondary-nav-item-badge-display: none;
    flex-direction: row;
    background-color: var(
      --ds-secondary-nav-background-color,
      ${t("var(--ds-app-color-surface-solid-bg-default, #fefefe)")}
    );
    display: var(--ds-secondary-nav-display, ${t(R)});
    box-shadow: var(--ds-secondary-nav-box-shadow, ${t(z)});
  }

  :host ::slotted([slot='secondary-nav__label']) {
    color: var(--ds-secondary-nav-label-color, ${t(O)});
    display: var(--ds-secondary-nav-label-display, ${t(W)});
    place-items: var(
      --ds-secondary-nav-label-align-items,
      ${t(I)}
    );
    line-height: var(
      --ds-secondary-nav-label-line-height,
      ${t(G)}
    );
    font-size: var(--ds-secondary-nav-label-font-size, ${t(Q)});
    font-weight: var(
      --ds-secondary-nav-label-font-weight,
      ${t(K)}
    );
  }

  reimagine-container {
    display: flex;
    width: 100%;
    gap: var(--ds-secondary-nav-gap, ${t(q)});
  }

  reimagine-scroll-spy {
    width: 100%;
  }

  .secondary-nav__label {
    display: flex;
    flex-shrink: 0;
  }

  .secondary-nav__label[hidden],
  .secondary-nav__button-group[hidden] {
    display: none;
  }

  :host ::slotted([slot='secondary-nav__button-group']) {
    display: var(
      --ds-secondary-nav-button-group-display,
      ${t(C)}
    );
    align-items: var(
      --ds-secondary-nav-button-group-align-items,
      ${t(T)}
    );
  }

  reimagine-divider {
    height: auto;
    margin-block: var(--ds-app-space-micro-s, 0.75rem);
  }

  /** Navigation (variant) */
  :host([configuration='navigation']) {
    --ds-secondary-nav-item-badge-display: none;
    --ds-secondary-nav-icon: none;
    --ds-secondary-nav-item-indicator-display: block;
    --ds-scrollslider-item-gap: var(--ds-app-space-micro-2xl, 3rem);
    --ds-secondary-nav-display: flex;
  }

  :host([configuration='navigation']) .secondary-nav__nav {
    flex-grow: 1;
    min-width: 0;
  }

  :host([configuration='navigation']) reimagine-scrollslider {
    --ds-scrollslider-base-padding-inline: var(
      --ds-secondary-nav-scrollslider-padding-inline,
      ${t(M)}
    );
    --ds-scrollslider-base-margin-inline-start: var(--ds-secondary-nav-margin-inline-start, 0);
  }

  :host([configuration='navigation']) reimagine-scrollslider.no-label {
    --ds-secondary-nav-margin-inline-start: ${t(`-${M}`)};
  }

  /** Dropdown (variant) */
  :host([configuration='dropdown']) {
    --ds-dropdown-position: static;
    --ds-dropdown-trigger-box-shadow: none;

    padding-block-end: var(
      --ds-secondary-nav-dropdown-padding-block-end,
      ${t(P)}
    );
    position: relative;
  }

  :host([configuration='dropdown']) .secondary-nav__nav {
    width: 100%;
  }

  :host([configuration='dropdown']) reimagine-dropdown-trigger:hover,
  :host([configuration='dropdown']) reimagine-dropdown-trigger:focus {
    --ds-dropdown-trigger-hover-box-shadow: none;
  }

  :host([configuration='dropdown']) reimagine-indicator {
    width: 100%;
    position: absolute;
    bottom: 0;
  }

  .secondary-nav__container {
    display: flex;
    flex-grow: 1;
    position: relative;
  }

  :host([configuration='dropdown']) reimagine-dropdown {
    --ds-dropdown-trigger-border-radius: 0;
    --ds-flyout-border-radius: var(--ds-app-radii-s, 0.5rem);

    width: 100%;
  }

  :host([configuration='dropdown']) ::slotted(reimagine-secondary-nav-item) {
    margin-inline-start: var(
      --ds-secondary-nav-slotted-item-margin-inline-start,
      ${t(V)}
    );
  }

  :host([configuration='dropdown']) reimagine-dropdown-trigger:focus {
    --ds-dropdown-trigger-vfi-outline-offset: -0.3125rem;
  }

  :host([configuration='dropdown']) reimagine-menu-list {
    --ds-menu-list-border-radius: var(
      --ds-radii-s,
      0.5rem
    ); /* This variable overrides the --ds-radii-m of the host element */

    position: relative;
    box-shadow: var(--ds-elevation-level-2);
    border-radius: var(
      --ds-radii-s,
      0.5rem
    ); /* This border radius applies styles to the menu-list div */
  }

  /** Jumplink (both variants) */
  :host([configuration='jumplinks']),
  :host([configuration='jumplinks--horizontal']) {
    --ds-secondary-nav-item-badge-display: flex;
    --ds-secondary-nav-icon: flex;
    --ds-secondary-nav-background-color: transparent;
    --ds-secondary-nav-box-shadow: none;
    --ds-secondary-nav-item-indicator-display: none;
    --ds-secondary-nav-padding-inline: 0;
  }

  /** Jumplink (variant) */
  :host([configuration='jumplinks']) {
    --ds-secondary-nav-gap: var(
      --ds-secondary-nav-jumplinks-gap,
      ${t(U)}
    );
    --ds-scrollslider-base-padding-inline: 5px;
    --ds-scrollslider-base-padding-block: var(
      --ds-secondary-nav-jumplink-padding-block,
      ${t(J)}
    );

    flex-direction: row;
  }

  :host([configuration='jumplinks']) reimagine-scrollslider {
    width: 100%;

    --ds-scrollslider-base-width: 100%;
    --ds-scrollslider-base-justify-content: center;
  }

  :host([configuration='jumplinks'])
    reimagine-scrollslider:not([hide-controls]) {
    --ds-scrollslider-base-justify-content: start;
  }

  /** Jumplink Horizontal (variant) */
  :host([configuration='jumplinks--horizontal']) {
    gap: var(
      --ds-secondary-nav-jumplinks-gap,
      ${t(B)}
    );
    flex-direction: column;
  }

  :host([configuration='quicklinks']) .secondary-nav__quick-links-list {
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    display: flex;
    padding: 0;
    list-style: none;
    width: 100%;
    gap: var(--ds-secondary-nav-quicklinks-list-gap, 0);
  }

  :host([configuration='quicklinks']) ::slotted(reimagine-secondary-nav-item) {
    --ds-link-font-size: var(
      --ds-secondary-nav-quicklinks-link-font-size,
      ${t(H)}
    );
  }

  :host([configuration='quicklinks']) {
    --ds-secondary-nav-background-color: transparent;
    --ds-secondary-nav-box-shadow: none;
    width: 100%;
    flex-direction: column;
  }
`,F=i`
  @media (min-width: ${t(w.md)}) {
    .secondary-nav__button-group {
      display: flex;
      flex-shrink: 0;
    }
  }

  @media (max-width: ${t(k(w.md))}) {
    :host([configuration='dropdown']) ::slotted([slot='secondary-nav__label']) {
      padding-inline: var(--ds-app-space-micro-s, 0.75rem);
    }
  
`;var Y=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,tt=(t,i,e,n)=>{for(var o,a=n>1?void 0:n?Z(i,e):i,r=t.length-1;r>=0;r--)(o=t[r])&&(a=(n?o(i,e,a):o(a))||a);return n&&a&&Y(i,e,a),a};const it="reimagine-secondary-nav";let et=class extends x{constructor(){super(...arguments),this.hideDivider=!1,this._labelSlotEmpty=!0,this._buttonGroupSlotEmpty=!0,this._secondaryNavEvents=[],this._activeDropdownLink=""}_getAdjacentNavSibling(t,i){let e="next"===i?null==t?void 0:t.nextElementSibling:null==t?void 0:t.previousElementSibling;for(;e&&"script"===e.tagName.toLowerCase();)e="next"===i?e.nextElementSibling:e.previousElementSibling;return e}_getNavChildren(){return Array.from(this.children).filter(t=>"script"!==t.tagName.toLowerCase())}_handleKeyDown(t){var i,e,n,o,a,r,s;const l=t.target,d=this._getNavChildren(),u=d[1];let v=d[d.length-1];if(c(v,"reimagine-button-group")){const t=Array.from(v.children).filter(t=>"script"!==t.tagName.toLowerCase());v=t[t.length-1]}if((t.key===h.TAB&&!t.shiftKey&&l===v||t.key===h.TAB&&t.shiftKey&&l===u)&&setTimeout(()=>{var t,i;null==(t=p(this.shadowRoot,"reimagine-dropdown"))||t.removeAttribute("open"),null==(i=p(this.shadowRoot,"reimagine-dropdown-trigger"))||i.focus()}),t.key===h.ARROW_DOWN){const o=this._getAdjacentNavSibling(l,"next"),a=null==(i=null==o?void 0:o.shadowRoot)?void 0:i.querySelector("a"),r=null==(e=null==u?void 0:u.shadowRoot)?void 0:e.querySelector("a");c(o,"reimagine-menu-list")&&(t.preventDefault(),null==(n=p(this.shadowRoot,"reimagine-dropdown"))||n.setAttribute("open",""),setTimeout(()=>{null==r||r.focus()})),(c(o,"reimagine-secondary-nav-item")||c(o,"reimagine-button"))&&(null==a||a.focus())}if(t.key===h.ARROW_UP){const t=this._getAdjacentNavSibling(l,"previous"),i=null==(o=null==t?void 0:t.shadowRoot)?void 0:o.querySelector("a");c(t,"reimagine-secondary-nav-item")&&(null==i||i.focus())}if(t.key===h.HOME){const t=null==(a=null==u?void 0:u.shadowRoot)?void 0:a.querySelector("a");t&&t.focus()}t.key===h.END&&v&&(c(v,"reimagine-button")?v.focus():null==(s=null==(r=v.shadowRoot)?void 0:r.querySelector("a"))||s.focus())}_renderDivider(){return r`<reimagine-divider orientation="vertical"></reimagine-divider>`}_handleSlotChange(){this._syncLabelSlotEmpty(),this._buttonGroupSlotEmpty=0===this._buttonGroupSlot.length,this.configuration===N&&this._handleQuickLinksSlotChange(),this.configuration===A&&this._setDropdownListItemRoles()}_handleQuickLinksSlotChange(){this.configuration===N&&this._setQuickLinksAttributes(!0)}_setQuickLinksAttributes(t=!0){this._defaultSlot.forEach(i=>{const e=c(i,f);(t||e)&&!i.hasAttribute("role")&&i.setAttribute("role","listitem"),e&&i.setAttribute("configuration",y.quicklink)})}_setDropdownListItemRoles(){this._defaultSlot.forEach(t=>{c(t,f)&&!t.hasAttribute("role")&&t.setAttribute("role","listitem")})}_hasVisibleLabelSlotContent(){return this._labelSlot.some(t=>(t.textContent??"").trim().length>0)}_syncLabelSlotEmpty(){this._labelSlotEmpty=!this._hasVisibleLabelSlotContent(),this._labelTextObserver||(this._labelTextObserver=new MutationObserver(()=>{this._labelSlotEmpty=!this._hasVisibleLabelSlotContent()})),this._labelTextObserver.disconnect(),this._labelSlot.forEach(t=>{t.nodeType===Node.ELEMENT_NODE?this._labelTextObserver.observe(t,{subtree:!0,childList:!0,characterData:!0}):t.nodeType===Node.TEXT_NODE&&this._labelTextObserver.observe(t,{characterData:!0})})}_renderOptionalSlot(t,i,e){return r`
      <div part=${t} class=${t} ?hidden=${i}>
        <slot
          name=${t}
          @slotchange="${this._handleSlotChange}"
          id="${e?t:""}"
        ></slot>
      </div>
    `}dropdownTemplate(){if(this.configuration===A)return r`
        <span class="secondary-nav__container" part="secondary-nav__container">
          ${this._renderOptionalSlot("secondary-nav__label",this._labelSlotEmpty,!0)}
          ${this.hideDivider?"":this._renderDivider()}
          <nav
            aria-label="${this.label&&this._labelSlotEmpty?this.label:s}"
            aria-labelledby="${this._labelSlotEmpty?s:"secondary-nav__label"}"
            class="secondary-nav__nav"
            part="secondary-nav__nav"
          >
            <reimagine-dropdown @keydown="${this._handleKeyDown}">
              <reimagine-dropdown-trigger slot="dropdown__trigger" configuration="input">
                ${this._activeDropdownLink}
              </reimagine-dropdown-trigger>
              <reimagine-menu-list>
                <slot @click=${this._handleNavItemClick} role="presentation"></slot>
                ${l(this._buttonGroupSlotEmpty?s:r`<reimagine-divider orientation="horizontal"></reimagine-divider>`)}
                ${this._renderOptionalSlot("secondary-nav__button-group",this._buttonGroupSlotEmpty)}
              </reimagine-menu-list>
            </reimagine-dropdown>
          </nav>
        </span>
        <reimagine-indicator orientation=${_.horizontal}></reimagine-indicator>
      `}navTemplate(){const t={"no-label":this._labelSlotEmpty};return this.configuration===j?r`<reimagine-scrollslider
        control-position="middle-start"
        control-size="small"
        class="${d(t)}"
      >
        <slot @click=${this._handleNavItemClick} role="presentation"></slot>
      </reimagine-scrollslider>`:this.configuration===D?r`<slot @click=${this._handleNavItemClick} role="presentation"></slot>`:this.configuration===N?r` <div
        aria-label="${this.label&&this._labelSlotEmpty?this.label:s}"
        aria-labelledby="${this._labelSlotEmpty?s:"secondary-nav__label"}"
        class="secondary-nav__quick-links"
        part="secondary-nav__quick-links"
      >
        <ul
          class="secondary-nav__quick-links-list"
          part="secondary-nav__quick-links-list"
          role="list"
        >
          <slot
            @click=${this._handleNavItemClick}
            @slotchange=${this._handleQuickLinksSlotChange}
            role="presentation"
          ></slot>
        </ul>
      </div>`:this.configuration!==L&&this.configuration?void 0:r`
        <reimagine-container>
          ${this._renderOptionalSlot("secondary-nav__label",this._labelSlotEmpty,!0)}
          ${this.hideDivider?s:this._renderDivider()}
          <nav
            aria-label="${this.label&&this._labelSlotEmpty?this.label:s}"
            aria-labelledby="${this._labelSlotEmpty?s:"secondary-nav__label"}"
            class="secondary-nav__nav"
            part="secondary-nav__nav"
          >
            <reimagine-scrollslider
              control-position="middle-justified"
              control-size="small"
              class="${d(t)}"
            >
              <slot @click=${this._handleNavItemClick} role="presentation"></slot>
            </reimagine-scrollslider>
          </nav>
          ${this._renderOptionalSlot("secondary-nav__button-group",this._buttonGroupSlotEmpty)}
        </reimagine-container>
      `}_handleNavItemClick(t){var i;const e=t.target,n="span"===e.tagName.toLowerCase();this._activeDropdownLink=String(e.textContent),Array.from(this.children).forEach(t=>t.removeAttribute("active")),n?null==(i=e.parentElement)||i.setAttribute("active",""):null==e||e.setAttribute("active","")}_handleResize(){const t=this._defaultSlot.map(t=>t.hasAttribute("active")),i=Number(w.md.slice(0,3));t.forEach((t,i)=>{if(t){const t=this._defaultSlot[i];this._activeDropdownLink=t.textContent}}),window.innerWidth>=i&&(this.configuration===A&&(this.setAttribute("configuration",L),this._defaultSlot.forEach(t=>{t.setAttribute("configuration",L)})),this.configuration===D&&(this.setAttribute("configuration",j),this._defaultSlot.forEach(t=>{t.setAttribute("configuration",y.vertical)}))),window.innerWidth<i&&(this.configuration===L&&(this.setAttribute("configuration",A),this._defaultSlot.forEach(t=>{t.setAttribute("configuration",A)})),this.configuration===j&&(this.setAttribute("configuration",D),this._defaultSlot.forEach(t=>{t.setAttribute("configuration",y.horizontal)})))}_handleUpdateDropdownTrigger(){var t,i;const e=Number(w.md.slice(0,3));if(this.configuration===A||window.innerWidth<e&&this.configuration===L){const e=null==(i=null==(t=this._defaultSlot)?void 0:t.find(t=>t.hasAttribute("active")))?void 0:i.textContent;e&&e!==this._activeDropdownLink&&(this._activeDropdownLink=e)}}connectedCallback(){super.connectedCallback(),this._secondaryNavEvents.push({el:window,type:"resize",handler:S(100,this._handleResize.bind(this))});const t=u(this,E);if(t){const i={el:t,type:$.change,handler:this._handleUpdateDropdownTrigger.bind(this)};this._secondaryNavEvents.push(i)}v(this._secondaryNavEvents)}disconnectedCallback(){var t;super.disconnectedCallback(),g(this._secondaryNavEvents),null==(t=this._labelTextObserver)||t.disconnect()}firstUpdated(){const t=Number(w.md.slice(0,3));this._syncLabelSlotEmpty(),window.innerWidth<t&&this.configuration===L&&(this.configuration=A),window.innerWidth<t&&this.configuration===j&&(this.configuration=D),window.innerWidth<t&&this.configuration===D&&this._defaultSlot.forEach(t=>{t.setAttribute("configuration",y.horizontal)}),window.innerWidth<t&&this.configuration===A&&(this._defaultSlot.forEach(t=>{t.setAttribute("configuration",A)}),this._setDropdownListItemRoles()),this.configuration===N&&this._setQuickLinksAttributes(!0),Array.from(this.children).forEach(t=>{t.hasAttribute("active")&&(this._activeDropdownLink=String(t.textContent))})}updated(t){const i=Number(w.md.slice(0,3));this.configuration===L&&(window.innerWidth>i?this._buttonGroupSlotEmpty||this._buttonGroupSlot[0].removeAttribute("style"):window.innerWidth<i&&(this.configuration=A)),this.configuration===N&&this._setQuickLinksAttributes(!1),t.has("configuration")&&this.configuration===A&&this._setDropdownListItemRoles();const e=window.innerWidth<i&&this.configuration===A;m(this,"reimagine-button").forEach(t=>{e?(t.setAttribute("size","large"),t.style.width="100%"):(t.setAttribute("size","small"),t.removeAttribute("style"))})}render(){return r`
      ${this.configuration===A?this.dropdownTemplate():this.navTemplate()}
    `}};et.styles=[X,F],tt([e({reflect:!0})],et.prototype,"configuration",2),tt([e({type:Boolean,attribute:"hide-divider"})],et.prototype,"hideDivider",2),tt([e()],et.prototype,"label",2),tt([e({reflect:!0})],et.prototype,"theme",2),tt([n({slot:"secondary-nav__label"})],et.prototype,"_labelSlot",2),tt([o()],et.prototype,"_defaultSlot",2),tt([o({slot:"secondary-nav__button-group"})],et.prototype,"_buttonGroupSlot",2),tt([a()],et.prototype,"_labelSlotEmpty",2),tt([a()],et.prototype,"_buttonGroupSlotEmpty",2),tt([a()],et.prototype,"_secondaryNavEvents",2),tt([a()],et.prototype,"_activeDropdownLink",2),et=tt([b(it)],et);export{et as SecondaryNav,it as name};
