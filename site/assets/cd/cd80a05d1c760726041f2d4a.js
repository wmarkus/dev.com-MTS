import{r as e,i as t,c as r,f as o,b as s}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{R as i}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{n as a,i as n,q as d,e as l,f as c,d as h}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{K as b,N as p,O as v,Q as m,V as u,R as g}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{n as _}from"/__mirror/assets/5d2e1bf3d87581457a2b76db";const k="var(--ds-color-pure-black, #000)",y="#312e2f",f="#454142",x="var(--ds-color-pure-white, #fff)",E="var(--ds-app-space-micro-s, 0.75rem)",O="var(--ds-color-pure-black, #000)",w="var(--ds-color-pure-white, #fff)",T="var(--ds-z-index-override, 9999)",C="40px",S="var(--ds-elevation-level-4, 0 8px 16px rgba(0, 0, 0, 0.14), 0 0 2px rgba(0, 0, 0, 0.12))",B="var(--ds-elevation-level-3, 0 4px 8px rgba(0, 0, 0, 0.14), 0 0 2px rgba(0, 0, 0, 0.12))",$="var(--ds-elevation-level-2, 0 2px 4px rgba(0, 0, 0, 0.14), 0 0 2px rgba(0, 0, 0, 0.12))",A="var(--ds-app-space-micro-s, 0.75rem)",F=t`
  /* 
   * Hidden by default, shown when [visible] attribute is present
   */
  :host {
    --ds-button-gap: var(--ds-back-to-top-button-gap, ${e("var(--ds-app-space-micro-xs, 0.5rem)")});

    display: none;
    position: fixed;
    bottom: var(--ds-back-to-top-bottom, ${e(A)});
    inset-inline-end: var(
      --ds-back-to-top-inset-inline-end,
      ${e(E)}
    );
    z-index: var(--ds-back-to-top-z-index, var(--ds-z-index-1030, ${e(T)}));
    border-radius: var(--ds-app-radii-circle, 12.5rem);
  }

  :host(:not([on-theme-dark])) {
    --ds-app-color-interactive-primary-fg-default: var(
      --ds-back-to-top-light-theme-color,
      ${e(x)}
    ) !important;
    --ds-app-color-interactive-primary-bg-default: var(
      --ds-back-to-top-background-color,
      ${e(k)}
    ) !important;
    --ds-app-color-interactive-primary-bg-hover: var(
      --ds-back-to-top-background-color-hover,
      ${e(y)}
    ) !important;
    --ds-app-color-interactive-primary-bg-active: var(
      --ds-back-to-top-background-color-pressed,
      ${e(f)}
    ) !important;
  }

  /* 
   * Dark theme variant - Inverted colors for dark backgrounds
   */
  :host([on-theme-dark]),
  :host([on-theme-dark][theme='dark']),
  :host([on-theme-dark][theme='light']) {
    --ds-app-color-interactive-primary-fg-default: var(
      --ds-back-to-top-theme-dark-color,
      ${e(O)}
    ) !important;
    --ds-app-color-interactive-primary-bg-default: var(
      --ds-back-to-top-theme-dark-background-color,
      ${e(w)}
    ) !important;
    --ds-app-color-interactive-primary-bg-hover: var(
      --ds-back-to-top-theme-dark-background-color-hover,
      ${e(w)}
    ) !important;
    --ds-app-color-interactive-primary-bg-active: var(
      --ds-back-to-top-theme-dark-background-color-pressed,
      ${e(w)}
    ) !important;
  }

  /* 
   * Visible state - Component becomes visible when [visible] attribute is present
   */
  :host([visible]) {
    display: block;
  }

  /* 
   * Main button styling - Fixed positioned circular button
   */

  ::slotted(reimagine-button) {
    --ds-button-padding-block-start: 0;
    --ds-button-padding-block-end: 0;
    --ds-button-min-height: var(--ds-back-to-top-min-height, ${e(C)});
    --ds-button-min-width: var(--ds-back-to-top-min-width, ${e(C)});

    box-shadow: var(--ds-back-to-top-elevation, ${e(S)});
    border-radius: var(--ds-app-radii-circle, 12.5rem);
  }

  ::slotted(reimagine-button:hover) {
    box-shadow: var(--ds-back-to-top-elevation-hover, ${e(B)});
  }

  ::slotted(reimagine-button:active) {
    box-shadow: var(--ds-back-to-top-elevation-active, ${e($)});
  }

  /* High contrast mode support */
  @media (forced-colors: active) {
    :host {
      border: var(--ds-back-to-top-forced-border, 2px solid ButtonText);
    }
  }

  /* Support for Windows High Contrast themes */
  @media (prefers-contrast: high) {
    ::slotted(reimagine-button) {
      --ds-button-border-width: var(--ds-back-to-top-high-contrast-border-width, 2px);
      --ds-button-border-color: var(--ds-back-to-top-high-contrast-border-color, currentColor);
    }
  }
`;var H=Object.defineProperty,j=Object.getOwnPropertyDescriptor,q=Object.getPrototypeOf,R=Reflect.get,z=(e,t,r,o)=>{for(var s,i=o>1?void 0:o?j(t,r):t,a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o?s(t,r,i):s(i))||i);return o&&i&&H(t,r,i),i};const I="reimagine-back-to-top",D=Object.values(g);let V=class extends i{constructor(){super(...arguments),this.scrollBehavior="smooth",this._backToTopEvents=[]}_resetHeadingTabIndex(){var e;return null==(e=this._headingElement)?void 0:e.removeAttribute("tabindex")}_scrollToTop(){try{window.scrollTo({top:0,behavior:this.scrollBehavior}),setTimeout(()=>{this._headingElement&&!this._headingElement.hasAttribute("tabindex")&&(this._headingElement.setAttribute("tabindex","-1"),this._headingElement.focus())},500)}catch{window.scrollTo(0,0)}}_createHeroObserver(){return new IntersectionObserver(([e])=>{e.isIntersecting?this.removeAttribute("visible"):this.setAttribute("visible","")},{root:null,rootMargin:"0px",threshold:0})}_findHeroBlade(){return a(document,D)}_handleButtonVisibility(){this._heroObserver&&this._heroObserver.disconnect(),this._bladeElements||(this._bladeElements=Array.from(document.querySelectorAll("[is-blade]")));let e=this._findHeroBlade();!e&&this._bladeElements.length>0&&(e=this._bladeElements[0]),e?(this._heroObserver=this._createHeroObserver(),this._heroObserver.observe(e)):this.setAttribute("visible","")}_handleButtonTextVisibility(){var e;this._buttonElement&&(null!=(e=this._viewportResizeObserver)&&e.isMobile()?this._buttonElement.setAttribute("icon-only",""):this._buttonElement.removeAttribute("icon-only"))}_createBladeObserver(){return new IntersectionObserver(e=>{let t;for(let r=e.length-1;r>=0;r--)if(e[r].isIntersecting){t=e[r];break}t&&("dark"===t.target.getAttribute("theme")?this.setAttribute("on-theme-dark",""):this.removeAttribute("on-theme-dark"))},{root:null,rootMargin:"0px",threshold:.08})}_handleButtonTheme(){this._bladeElements||(this._bladeElements=Array.from(document.querySelectorAll("[is-blade]"))),0!==this._bladeElements.length&&(this._bladeObserver&&this._bladeObserver.disconnect(),this._bladeObserver=this._createBladeObserver(),this._bladeElements.forEach(e=>{this._bladeObserver.observe(e)}))}_setSpacing(e){this.style.setProperty("--ds-back-to-top-bottom",`${e}px`)}getDynamicSpacing(){requestAnimationFrame(()=>{var e;let t=12;const r=Date.now();(!this._cachedFlyouts||r-this._cachedFlyouts.lastCheck>1e3)&&(this._cachedFlyouts={defaultFlyout:document.querySelector(p[0]),highlightFlyout:document.querySelector(b),lastCheck:r});const{defaultFlyout:o,highlightFlyout:s}=this._cachedFlyouts,i=o&&!o.classList.contains("is-hidden")?o:s&&!s.classList.contains("is-hidden")?s:null;if(i){const e=i===o?v:m,r=i.querySelector(e);if(r){const e=r.getBoundingClientRect().top;return t=window.innerHeight-e+12,void this._setSpacing(t)}}this._combinedFixedSelectors||(this._combinedFixedSelectors=[...this.fixedElements??[],...p].flat());const d=a(document,this._combinedFixedSelectors);if(!d)return void this._setSpacing(t);const l=d.getBoundingClientRect().height,c=(null==(e=d.firstElementChild)?void 0:e.getBoundingClientRect().height)??0,h=p[0].slice(1),u=d.classList.contains(h);(n(d,p[2])||0===l)&&(t+=c),"div"===d.tagName.toLowerCase()&&(t+=u?l+12:l),this._setSpacing(t)})}_observeSpacingChanges(){this._spacingObserver&&this._spacingObserver.disconnect(),this._spacingObserver=new MutationObserver(()=>{this.getDynamicSpacing()}),this._chatbotContainers||(this._chatbotContainers=document.querySelectorAll(`${p[0]}, ${b}`)),this._chatbotContainers.length>0?this._chatbotContainers.forEach(e=>{this._spacingObserver.observe(e,{attributes:!0,attributeFilter:["class"]})}):this._spacingObserver.observe(document.body,{childList:!0,subtree:!1,attributes:!1})}refreshBladeCache(){this._bladeElements=void 0,this._handleButtonTheme()}firstUpdated(){this._handleButtonVisibility(),this._handleButtonTheme(),this.getDynamicSpacing(),this._observeSpacingChanges()}connectedCallback(){super.connectedCallback(),this._buttonElement=d(this,_),this._headingElement=document.querySelector('h1:not([class*="sb-nopreview"]):not(#error-message)'),this._viewportResizeObserver=new u(this,{callback:this._handleButtonTextVisibility.bind(this)}),this._backToTopEvents.push({el:this._headingElement,type:"blur",handler:this._resetHeadingTabIndex.bind(this)},{el:this._buttonElement,type:"click",handler:this._scrollToTop.bind(this)}),l(this._backToTopEvents)}disconnectedCallback(){var e,t,r;null==(e=this._heroObserver)||e.disconnect(),null==(t=this._bladeObserver)||t.disconnect(),null==(r=this._spacingObserver)||r.disconnect(),c(this._backToTopEvents),this._buttonElement=void 0,this._bladeElements=void 0,this._headingElement=void 0,this._cachedFlyouts=void 0,this._chatbotContainers=void 0,this._combinedFixedSelectors=void 0,super.disconnectedCallback()}render(){return s` <slot></slot> `}};var L,M,P;V.styles=[...(L=V,M=V,P="styles",R(q(L),P,M)||[]),F],z([r({type:String,attribute:"scroll-behavior",reflect:!0})],V.prototype,"scrollBehavior",2),z([o()],V.prototype,"_backToTopEvents",2),z([o()],V.prototype,"_viewportResizeObserver",2),V=z([h(I)],V);export{V as BackToTop,I as name};
