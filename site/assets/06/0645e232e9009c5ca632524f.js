import{r as e,i as t,c as a,f as i,k as r,q as s,n as o,o as n,b as d}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{B as c,d as l}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{R as h,i as u,B as b}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{s as _,v as p,o as m,n as w}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{S as v,a as g}from"/__mirror/assets/34233ee5ac8acdb3aa831b25";import"/__mirror/assets/5d2e1bf3d87581457a2b76db";const f={display:"flex",position:"fixed",insetInlineEnd:"0",top:"56px",width:"432px",height:"calc(100% - 56px)",zIndex:"1040",flexDirection:"column",transform:"translateX(100%)",transition:"transform 0.5s ease-in-out",backgroundColor:"var(--ds-app-color-base-alt1-bg-opt1, #f7f7f7)",boxShadow:"var(--ds-elevation-level-2, 0 0 0.125rem rgba(0, 0, 0, 0.12), 0 0.125rem 0.25rem rgba(0, 0, 0, 0.14))",borderRadius:"0 0 var(--ds-app-radii-l, 1.5rem) var(--ds-app-radii-l, 1.5rem)"},C={padding:"var(--ds-app-space-micro-s, 0.75rem) var(--ds-app-space-micro-m, 1rem)",justifyContent:"space-between",alignItems:"center",gap:"var(--ds-app-space-micro-s, 0.75rem)",color:"var(--ds-app-color-base-default-fg-heading, #0e1726)"},y={borderColor:"var(--ds-app-color-base-default-border-subtle, #cbe6f4)",borderTopWidth:"var(--ds-border-xs, .0625rem)",borderStyle:"solid"},E={padding:"var(--ds-app-space-micro-l, 1.5rem)",overflow:"auto",gap:"var(--ds-app-space-micro-xs, 0.5rem)",alignItems:"flex-end"},k={borderRadius:"var(--ds-app-radii-s)",boxShadow:"0 2px 4px 0 rgba(0, 0, 0, 0.14), 0 0 2px 0 rgba(0, 0, 0, 0.12)",backgroundColor:"var(--ds-app-color-surface-solid-bg-default, #fefefe)",background:"linear-gradient(90deg, #0a86c4 0.65%, #71ede8 100.65%)"},S={textAlign:"end",color:"var(--ds-app-color-base-default-fg-body, #17253d)",marginBottom:"var(--ds-app-space-micro-xs, 0.5rem)"},x=t`
  reimagine-ai-powered-assistant-drawer {
    display: var(--ds-ai-drawer-display, ${e(f.display)});
    position: var(--ds-ai-drawer-position, ${e(f.position)});
    inset-inline-end: var(
      --ds-ai-drawer-inset-inline-end,
      ${e(f.insetInlineEnd)}
    );
    top: var(--ds-ai-drawer-top, ${e(f.top)});
    width: var(--ds-ai-drawer-width, ${e(f.width)});
    height: var(--ds-ai-drawer-height, ${e(f.height)});
    z-index: var(--ds-ai-drawer-z-index, var(--ds-z-index-1040, ${e(f.zIndex)}));
    flex-direction: var(--ds-ai-drawer-flex-direction, ${e(f.flexDirection)});
    transform: var(--ds-ai-drawer-transform, ${e(f.transform)});
    transition: var(--ds-ai-drawer-transition, ${e(f.transition)});
    background-color: var(
      --ds-ai-drawer-background-color,
      ${e(f.backgroundColor)}
    );
    box-shadow: var(--ds-ai-drawer-box-shadow, ${e(f.boxShadow)});
    border-radius: var(--ds-ai-drawer-border-radius, ${e(f.borderRadius)});
  }

  reimagine-ai-powered-assistant-drawer.show {
    --ds-ai-drawer-transform: translateX(0%);
  }

  reimagine-ai-powered-assistant-drawer .ai-assistant-drawer__panel {
    height: 100%;
  }

  reimagine-ai-powered-assistant-drawer .ai-assistant-drawer__header {
    padding: var(--ds-ai-drawer-header-padding, ${e(C.padding)});
    display: var(--ds-ai-drawer-header-display, ${e(f.display)});
    justify-content: var(
      --ds-ai-drawer-header-justify-content,
      ${e(C.justifyContent)}
    );
    align-items: var(
      --ds-ai-drawer-header-align-items,
      ${e(C.alignItems)}
    );
  }

  reimagine-ai-powered-assistant-drawer .ai-assitant-drawer__header-title {
    display: var(--ds-ai-drawer-header-title-display, ${e(f.display)});
    align-items: var(
      --ds-ai-drawer-header-title-align-items,
      ${e(C.alignItems)}
    );
    gap: var(--ds-ai-drawer-header-title-gap, ${e(C.gap)});
  }

  reimagine-ai-powered-assistant-drawer .ai-assistant-drawer__icon {
    display: var(--ds-ai-drawer-header-icon-display, ${e(f.display)});
  }

  reimagine-ai-powered-assistant-drawer .ai-assitant-drawer__header-title h2 {
    font-size: var(
      --ds-ai-drawer-header-title-font-size,
      ${e(_.fontSize)}
    );
    font-weight: var(
      --ds-ai-drawer-header-title-font-weight,
      ${e(_.fontWeight)}
    );
    line-height: var(
      --ds-ai-drawer-header-title-line-height,
      ${e(p.lineHeight)}
    );
    color: var(--ds-ai-drawer-header-title-color, ${e(C.color)});
  }

  reimagine-ai-powered-assistant-drawer .ai-assistant-drawer__divider {
    border: 0;
    margin: 0;
    border-top-width: var(
      --ds-ai-drawer-divider-top-width,
      ${e(y.borderTopWidth)}
    );
    border-style: var(
      --ds-ai-drawer-divider-top-style,
      ${e(y.borderStyle)}
    );
    border-color: var(
      --ds-ai-drawer-divider-top-color,
      ${e(y.borderColor)}
    );
  }

  reimagine-ai-powered-assistant-drawer .ai-assistant-drawer__body {
    padding: var(--ds-ai-drawer-body-padding, ${e(E.padding)});
    height: var(--ds-ai-drawer-body-height, ${e(f.height)});
    overflow: var(--ds-ai-drawer-body-overflow, ${e(E.overflow)});
  }

  reimagine-ai-powered-assistant-drawer .ai-assistant-drawer__body-content {
    height: 100%;
  }

  reimagine-ai-powered-assistant-drawer .ai-assistant-drawer__content-messages {
    height: 100%;
    font-weight: var(
      --ds-ai-drawer-content-messages-font-weight,
      ${e(m.fontWeight)}
    );
    font-size: var(
      --ds-ai-drawer-content-messages-font-size,
      ${e(m.fontSize)}
    );
    line-height: var(
      --ds-ai-drawer-content-messages-line-height,
      ${e(m.lineHeight)}
    );
    letter-spacing: var(
      --ds-ai-drawer-content-messages-letter-spacing,
      ${e(m.letterSpacing)}
    );
  }

  reimagine-ai-powered-assistant-drawer .ai-assistant-drawer__body .webchat__send-box__main {
    position: relative;
    min-height: 64px;
    overflow: hidden;
    border-radius: var(
      --ds-ai-drawer-webchat-input-border-radius,
      ${e(k.borderRadius)}
    );
    box-shadow: var(
      --ds-ai-drawer-webchat-input-box-shadow,
      ${e(k.boxShadow)}
    );
  }

  reimagine-ai-powered-assistant-drawer .ai-assistant-drawer__body .webchat__send-box__main::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(
      --ds-ai-drawer-webchat-input-bottom-gradient,
      ${e(k.background)}
    );
  }

  reimagine-ai-powered-assistant-drawer
    .ai-assistant-drawer__body
    .webchat__send-box__main
    input:disabled,
  reimagine-ai-powered-assistant-drawer
    .ai-assistant-drawer__body
    .webchat__send-box__main
    input[aria-disabled='true'],
  reimagine-ai-powered-assistant-drawer
    .ai-assistant-drawer__body
    .webchat__send-box__main
    textarea:disabled,
  reimagine-ai-powered-assistant-drawer
    .ai-assistant-drawer__body
    .webchat__send-box__main
    textarea[aria-disabled='true'] {
    cursor: auto;
    pointer-events: none;
  }

  reimagine-ai-powered-assistant-drawer
    .ai-assistant-drawer__body
    .webchat__bubble__content
    .webchat__text-content,
  reimagine-ai-powered-assistant-drawer
    .ai-assistant-drawer__body
    .webchat__bubble__content
    .ac-adaptiveCard {
    padding: var(--ds-app-space-micro-m, 1rem) var(--ds-app-space-micro-l, 1.5rem) !important;
  }

  reimagine-ai-powered-assistant-drawer .ai-chat-drawer__disclaimer {
    text-align: var(
      --ds-ai-drawer-disclaimer-text-align,
      ${e(S.textAlign)}
    );
    color: var(--ds-ai-drawer-disclaimer-color, ${e(S.color)});
    margin-bottom: var(
      --ds-ai-drawer-disclaimer-margin-bottom,
      ${e(S.marginBottom)}
    );
    font-weight: var(
      --ds-ai-drawer-disclaimer-font-weight,
      ${e(w.fontWeight)}
    );
    font-size: var(--ds-ai-drawer-disclaimer-font-size, ${e(w.fontSize)});
    line-height: var(
      --ds-ai-drawer-disclaimer-line-height,
      ${e(w.lineHeight)}
    );
    letter-spacing: var(
      --ds-ai-drawer-disclaimer-letter-spacing,
      ${e(w.letterSpacing)}
    );
  }

  reimagine-ai-powered-assistant-drawer
    .ai-assistant-drawer__body
    .webchat__basic-transcript__activity {
    margin: var(--ds-app-space-micro-m, 1rem) 0;
  }

  reimagine-ai-powered-assistant-drawer
    .ai-assistant-drawer__body
    .ac-adaptiveCard
    > .ac-container:first-child
    > .ac-textBlock {
    line-height: inherit !important;
  }

  /* Superscript-style links */
  reimagine-ai-powered-assistant-drawer
    .ai-assistant-drawer__body
    .ac-adaptiveCard
    > .ac-container:first-child
    > .ac-textBlock
    .webchat__render-markdown__pure-identifier {
    vertical-align: super;
    font-size: 75%;
    line-height: 0;
  }

  /* Hide external link icon from bot links */
  reimagine-ai-powered-assistant-drawer
    .ai-assistant-drawer__body
    .webchat__markdown__external-link-icon {
    display: none;
  }

  reimagine-ai-powered-assistant-drawer
    .ai-assistant-drawer__body
    button.action--ai-feedback.ac-pushButton {
    border: 0;
    padding-inline: 0;
  }

  reimagine-ai-powered-assistant-drawer
    .ai-assistant-drawer__body
    button.action--ai-feedback.ac-pushButton:focus {
    border: 1px dotted var(--ds-color-neutral-black, #000);
  }

  reimagine-ai-powered-assistant-drawer
    .ai-assistant-drawer__body
    button.action--ai-feedback.ac-pushButton[aria-pressed='true'] {
    background-color: transparent;
  }

  reimagine-ai-powered-assistant-drawer .ai-assistant-drawer__body .webchat__icon-button {
    width: 64px;
  }
`,T="ocrAIChat",I="ocrAIChatToken",B="ocrAIChatTokenCreated",F="tuid",D="ocrAIChatDrawerState",A="ocrAIChatDrawerSourceSite",$={domain:".microsoft.com",expiryDays:-1,cookieNamespace:"ocrAIChat",secure:!0,sameSite:"Strict",path:"/"},L="ai-chat-drawer__disclaimer",W="action--ai-feedback",O="get-height",M="show",N="stuck",R="data:image/svg+xml,%3Csvg class='image is-down is-filled ___12fm75w f1w7gpdv fez10in fg4l7m0' fill='%230067b8' aria-hidden='true' width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.58 1.05c-.75-.2-1.34.35-1.55.87-.24.6-.45 1.02-.7 1.53-.16.3-.33.65-.53 1.09-.48 1-.95 1.65-1.3 2.04a4.06 4.06 0 0 1-.5.49h-.02L3.11 8.19a2 2 0 0 0-.86 2.43l.52 1.38a2 2 0 0 0 1.28 1.2l5.35 1.69a2.5 2.5 0 0 0 3.15-1.68l1.36-4.65A2 2 0 0 0 12 6h-1.38l.2-.74c.13-.56.24-1.2.23-1.74-.01-.5-.06-1.02-.27-1.46-.22-.48-.6-.83-1.19-1Zm-4.6 6.03Z' %3E%3C/path%3E%3C/svg%3E",U="data:image/svg+xml,%3Csvg class='image is-down is-filled ___12fm75w f1w7gpdv fez10in fg4l7m0' fill='%230067b8' aria-hidden='true' width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.1 4.62a3.5 3.5 0 0 0-4.38-2.73L3.77 3.27a2 2 0 0 0-1.43 1.56l-.23 1.2c-.16.87.46 1.64 1.16 1.93.25.1.55.25.85.46a8.22 8.22 0 0 1 3.02 3.92l.28.7c.14.38.28.73.41 1 .11.23.25.46.42.63.19.19.44.33.75.33.36 0 .67-.12.91-.34.24-.2.4-.48.5-.76.22-.55.29-1.25.3-1.9a14.73 14.73 0 0 0-.13-2h.51a2.5 2.5 0 0 0 2.46-2.96l-.46-2.42Z' %3E%3C/path%3E%3C/svg%3E",z={backgroundColor:"var(--ds-app-color-base-alt1-bg-opt1, #f7f7f7)",fontSizeSmall:"0.75rem",monospaceFont:'SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace',primaryFont:"inherit",transitionDuration:".3s",bubbleBorderRadius:"var(--ds-app-radii-s, 0.5rem)",bubbleBorderWidth:"0",bubbleFromUserBackground:"var(--ds-color-brilliant-blue-100, #b0d5f2)",bubbleFromUserBorderRadius:"var(--ds-app-radii-s, 0.5rem)",bubbleFromUserBorderWidth:"0",bubbleFromUserTextColor:"var(--ds-color-dark-slate-900, #171616)",bubbleTextColor:"var(--ds-app-color-base-default-fg-body, #17253d)",hideUploadButton:"true",sendBoxBackground:"var(--ds-app-color-surface-solid-bg-default, #fefefe);",sendBoxButtonColor:"var(--ds-app-color-interactive-secondary-fg-default, #2a446f);",sendBoxButtonShadeColorOnActive:"transparent",sendBoxButtonKeyboardFocusIndicatorBorderColor:"currentColor",sendBoxButtonKeyboardFocusIndicatorBorderRadius:"0.5rem",sendBoxButtonKeyboardFocusIndicatorBorderStyle:"dotted",sendBoxButtonKeyboardFocusIndicatorBorderWidth:"0.1875rem",sendBoxButtonKeyboardFocusIndicatorInset:"0.375rem",sendBoxDisabledTextColor:"#d2d2d2",sendBoxButtonColorOnDisabled:"#d2d2d2",sendBoxButtonShadeColorOnDisabled:"transparent",sendBoxHeight:"64",sendBoxMaxHeight:"72",sendBoxTextColor:"Black",sendBoxPlaceholderColor:"var(--ds-app-color-base-default-fg-body, #17253d)",sendBoxTextWrap:"true",timestampColor:"var(--ds-root-color-dark-slate-400)"},P="https://webassistant-prod.microsoft.com",H="https://webassistant-ppe.microsoft.com",j="https://webassistant-dev.microsoft.com",q={},V=["sites-author.adobeppe.microsoft.com","golf-author.adobeppe.microsoft.com"],K=["sites-author.adobedev.microsoft.com","golf-author.adobedev.microsoft.com"],G="/directline/v1/ai-assistant/token",Y="/__mirror/assets/6dfebd9e0c2ddae189ffeafd";var Q=(e=>(e[e.WebChatMaximumCharacters=250]="WebChatMaximumCharacters",e[e.UhfHeaderMarginBottomVal=2]="UhfHeaderMarginBottomVal",e[e.InitialChatTextDelay=2e3]="InitialChatTextDelay",e[e.TokenRefreshAfterInterval=3480]="TokenRefreshAfterInterval",e[e.MessageWaitTimeoutDuration=1e5]="MessageWaitTimeoutDuration",e))(Q||{}),J=(e=>(e.Keydown="keydown",e.Scroll="scroll",e.TransitionEnd="transitionend",e.WebchatConnectInitiated="webchatconnectinitiated",e.WebchatConnectFulfilled="webchatconnectfulfilled",e.StartConversationFulfilled="startconversationfulfilled",e.FeedbackSent="feedbackRequestSent",e.ChatDrawerClosed="chatDrawerClosed",e.ChatDrawerOpened="chatDrawerOpened",e))(J||{}),X=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,ee=(e,t,a,i)=>{for(var r,s=i>1?void 0:i?Z(t,a):t,o=e.length-1;o>=0;o--)(r=e[o])&&(s=(i?r(t,a,s):r(s))||s);return i&&s&&X(t,a,s),s};const te="reimagine-ai-powered-assistant-drawer";let ae=class extends h{constructor(){super(),this._isRequestingAnimationFrame=!1,this._chatInitialized=!1,this._webchatTextAreaHadFocus=!1,this._cookieName=T,this._dispatcherEventMap={},this._tokenEndpoint="",this._sourceSite=this._getSourceSite(),this._tuid="",this._webchatInstance=null,this._resolveSourceSiteUpdate=()=>{},this._sourceSiteUpdatePromise=null,this._uhfHeaderIntersectionObserver=null,this._stickyNavMutationObserver=null,this._webchatTranscriptMutationObserver=null,this._messageWaitTimeout=void 0,this._firstFocusableElem=null,this._lastFocusableElem=null,this._uhfHeaderElem=null,this._stickyNavElem=null,this._setupFeedbackButton=(e,t,a,i,r)=>{if(!e)return;e.classList.add(W),e.setAttribute("aria-label",t||"");const s=e.querySelector("div");s&&s.setAttribute("aria-hidden","true"),e.addEventListener("click",()=>{this._handleFeedbackButtonClick(r,i,a,e)});const o=e.querySelector("img");o&&o.setAttribute("alt","")},this._getCookie=e=>{try{const t=this._getAllCookies();if(t&&e in t)return t[e]}catch(e){console.error(`Error getting all cookies: ${e}`)}return null},this._getAllCookies=()=>{const e={};return document.cookie.split("; ").forEach(t=>{const a=t.indexOf("=");if(-1===a)return;const i=t.slice(0,a),r=t.slice(a+1);if(i&&r)try{e[i]=decodeURIComponent(r)}catch(e){console.error(`Error decoding cookie value for key "${i}": ${e}`)}}),Object.keys(e).length>0?e:null},this._setCookie=(e,t,a,i,r=$.secure,s=!1,o=$.sameSite,n=$.path)=>{if("string"!=typeof e||"string"!=typeof t||"number"!=typeof a||i&&"string"!=typeof i)throw new Error("Error setting cookie: Invalid parameters.");let d=null;a>-1&&(d=new Date,d.setTime(d.getTime()+24*a*60*60*1e3));const c=`${e}=${encodeURIComponent(t)}`,l=d?`;expires=${d.toUTCString()}`:"",h=i?`;domain=${i}`:"",u=r?";secure":"",b=s?";httponly":"",_=`;samesite=${o}`,p=`;path=${n}`;document.cookie=c+l+h+u+b+_+p},this.config={panelProperties:{title:"AI-powered assistant",headerIcon:"https://s7d2.scene7.com/is/image/microsoftcorp/mwf-placeholder?wid=200&amp;hei=200&amp;scl=1"},persistence:{enabled:!0},messages:{inputPlaceholder:"Ask a work question or make a request...",disclaimer:"AI-generated content may be incorrect",connectionError:"Please refresh the page",latencyMessage:"Generating a response..."},ariaLabels:{panel:"Chatbot window",closeButton:"Close chatbot window",positiveFeedback:"Positive feedback",negativeFeedback:"Negative feedback"}},$.domain=this._getCookieDomain(),$.secure=!this._isRunningLocally(),this._onKeyDown=this._onKeyDown.bind(this),this._onAIChatDrawerTransitionEnd=this._onAIChatDrawerTransitionEnd.bind(this),this._onWebChatConnectFulfilled=this._onWebChatConnectFulfilled.bind(this),this._onStartConversationFulfilled=this._onStartConversationFulfilled.bind(this),this.addEventListener(J.Keydown,this._onKeyDown),this.addEventListener(J.TransitionEnd,this._onAIChatDrawerTransitionEnd),this._registerEventMapCase(J.FeedbackSent,(e,t)=>this._handleFeedbackRequestFromBot(e,t))}connectedCallback(){super.connectedCallback(),this._uhfHeaderElem=document.querySelector("header"),this._stickyNavElem=document.querySelector("#sticky-nav"),this._generateTuid(),this._loadWebChatScript(),window.addEventListener(J.WebchatConnectFulfilled,this._onWebChatConnectFulfilled),window.addEventListener(J.StartConversationFulfilled,this._onStartConversationFulfilled),this._initUhfIntersectionObserver(),this._initStickyNavMutationObserver()}disconnectedCallback(){var e;this._uhfHeaderElem=null,this._stickyNavElem=null,this.removeEventListener(J.Keydown,this._onKeyDown),this.removeEventListener(J.TransitionEnd,this._onAIChatDrawerTransitionEnd),window.removeEventListener(J.WebchatConnectFulfilled,this._onWebChatConnectFulfilled),window.removeEventListener(J.StartConversationFulfilled,this._onStartConversationFulfilled),e=Y,document.querySelectorAll(`script[src="${e}"]`).forEach(e=>e.remove()),this._removeEventMapCase(J.FeedbackSent),super.disconnectedCallback()}_registerEventMapCase(e,t){this._dispatcherEventMap[e]=t}_removeEventMapCase(e){delete this._dispatcherEventMap[e]}_executeEventMapCase(e,t,a){this._dispatcherEventMap[e]&&this._dispatcherEventMap[e](t,a)}firstUpdated(){this._emit(`${c(this)}-ready`,{bubbles:!1,composed:!1})}_emit(e,t){const a=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,detail:{},...t});return window.dispatchEvent(a),a}async _loadWebChatScript(){try{await(e=Y,new Promise((t,a)=>{const i=document.createElement("script");i.src=e,i.async=!0,i.addEventListener("load",()=>t()),i.addEventListener("error",()=>a(new Error(`Failed to load script: ${e}`))),document.body.append(i)})),this._handlePageOpenState()}catch(e){console.error("Failed to load script:",e)}var e}_initUhfIntersectionObserver(){if(!this._uhfHeaderElem)return;const e={rootMargin:`0px 0px ${Q.UhfHeaderMarginBottomVal}px 0px`};this._uhfHeaderIntersectionObserver=new IntersectionObserver(this._onUhfHeaderIntersect.bind(this),e),this._uhfHeaderIntersectionObserver.observe(this._uhfHeaderElem)}_onUhfHeaderIntersect(e){e.forEach(e=>{e.isIntersecting?(document.addEventListener(J.Scroll,this._onScrollWithUhfVisible,!1),this._onScrollWithUhfVisible()):(document.removeEventListener(J.Scroll,this._onScrollWithUhfVisible,!1),this.style.top="0",this.style.height="100%")})}_onScrollWithUhfVisible(){this._isRequestingAnimationFrame||(this._isRequestingAnimationFrame=!0,window.requestAnimationFrame(()=>{const e=this._uhfHeaderElem?this._uhfHeaderElem.getBoundingClientRect().bottom+Q.UhfHeaderMarginBottomVal:0;this.style.top=`${e}px`,this.style.height=`calc(100% - ${e}px)`,this._isRequestingAnimationFrame=!1}))}_initStickyNavMutationObserver(){if(!this._stickyNavElem)return;const e=this._stickyNavElem.closest(".sticky");e&&(this._stickyNavMutationObserver=new MutationObserver(this._onStickyNavMutation.bind(this)),this._stickyNavMutationObserver.observe(e,{attributeFilter:["class"],attributeOldValue:!0}))}_onStickyNavMutation(e){e.forEach(e=>{var t;const a=e.target;if(!(a.getAttribute("class")===e.oldValue||a.classList.contains(O)||null!=(t=e.oldValue)&&t.includes(O)))if(a.classList.contains(N)){const e=this._stickyNavElem?this._stickyNavElem.getBoundingClientRect().bottom:0;this.style.top=`${e}px`,this.style.height=`calc(100% - ${e}px)`}else this.style.top="0",this.style.height="100%"})}_onKeyDown(e){var t,a;const i="Tab"===e.key;if(!this.contains(document.activeElement)||!i)return;const r=e.shiftKey,{activeElement:s}=document;if((s===this._firstFocusableElem||s===this)&&r)return e.preventDefault(),void(null==(t=this._lastFocusableElem)||t.focus());s===this._lastFocusableElem&&!r&&(e.preventDefault(),null==(a=this._firstFocusableElem)||a.focus())}_onAIChatDrawerTransitionEnd(){this.classList.contains(M)||(this.hidden=!0)}handleChatPanelOpen(e=""){this._chatInitialized?this._chatOpen(e):this._initChat(e)}_handlePageOpenState(){var e,t;try{const a=this._getAIChatDrawerCookieObject(),i=(null==a?void 0:a.ocrAIChatDrawerState)||null;null!=(t=null==(e=this.config)?void 0:e.persistence)&&t.enabled&&"OPEN"===i&&this._hasValidToken()&&(this._chatInitialized?this._chatOpen():this._initChat())}catch(e){console.error("Failed to get chat drawer state from cookies",e)}}async _chatOpen(e=""){var t;this.hidden=!1;const a=new CustomEvent(J.ChatDrawerOpened);this.dispatchEvent(a),this._updateAIChatDrawerCookie({[D]:"OPEN"});const i=this._getAIChatDrawerCookieObject();i&&this._sourceSite!==i.ocrAIChatDrawerSourceSite&&await this._updateSourceSite(this._sourceSite),requestAnimationFrame(()=>{this.classList.add(M)}),e&&this._webchatInstance&&this._store.dispatch({type:"WEB_CHAT/SEND_MESSAGE",payload:{text:e}}),null==(t=this._webchatTextarea)||t.focus()}async _initChat(e=""){var t,a,i,r;try{const s=await this._generateDirectLineToken();if(!s)throw new Error("Failed to generate Direct Line token.");const o=window.WebChat.createStore({},({dispatch:t})=>a=>async i=>{var r;switch(i.type){case"DIRECT_LINE/CONNECT":this._handlePreConnect();break;case"DIRECT_LINE/CONNECT_FULFILLED":this._handleConnectFulfilled();break;case"DIRECT_LINE/POST_ACTIVITY_FULFILLED":this._handlePostActivityFulfilled(i,e);break;case"DIRECT_LINE/INCOMING_ACTIVITY":if("event"===(null==(r=i.payload.activity)?void 0:r.type)){if(!this._dispatcherEventMap[i.payload.activity.name])break;this._executeEventMapCase(i.payload.activity.name,i,t)}break;case"WEB_CHAT/SEND_MESSAGE":{document.activeElement===this._webchatTextarea&&(this._webchatTextAreaHadFocus=!0),this._toggleWebChatDisabled(!0),this._messageWaitTimeout=setTimeout(()=>{this._toggleWebChatDisabled(!1)},Q.MessageWaitTimeoutDuration);const e=this._getAIChatDrawerCookieObject();e&&this._sourceSite!==e.ocrAIChatDrawerSourceSite&&await this._updateSourceSite(this._sourceSite);break}}return a(i)});this._store=o;const n=window.WebChat.createDirectLine({token:s,webSocket:!0});window.WebChat.renderWebChat({locale:this._getLocale(),directLine:n,store:o,styleOptions:z,overrideLocalizedStrings:{TEXT_INPUT_PLACEHOLDER:(null==(a=null==(t=this.config)?void 0:t.messages)?void 0:a.inputPlaceholder)??"Ask a work question or make a request...",CONNECTIVITY_STATUS_ALT_FATAL:(null==(r=null==(i=this.config)?void 0:i.messages)?void 0:r.connectionError)??"Please refresh the page"}},this._webchatContainer)}catch(e){console.error("Error initializing chat:",e)}}_chatClose(){this.classList.remove(M);const e=new CustomEvent(J.ChatDrawerClosed);this.dispatchEvent(e),this._updateAIChatDrawerCookie({[D]:"CLOSED"}),this._toggleWebChatDisabled(!1),clearTimeout(this._messageWaitTimeout)}_handlePreConnect(){const e=new Event(J.WebchatConnectInitiated);window.dispatchEvent(e)}_handleConnectFulfilled(){this._updateSourceSite(this._sourceSite);const e=new Event(J.WebchatConnectFulfilled);window.dispatchEvent(e)}_handlePostActivityFulfilled(e,t){if(!e.payload.activity)return;const{activity:{type:a,name:i}}=e.payload;if("event"===a&&"sourceSiteEvent"===i){const e=new Event(J.StartConversationFulfilled);e.data=t||"",window.dispatchEvent(e),this._resolveSourceSiteUpdate()}}_onWebChatConnectFulfilled(){var e,t;try{if(this._webchatInstance=window.WebChat,this._chatInitialized=!0,!this._webchatSendBox)throw new Error("WebChat send box not found");if(!this._webchatForm)throw new Error("WebChat form not found");if(!this._webchatTextarea)throw new Error("WebChat textarea not found");if(this._webchatTextarea.maxLength=Q.WebChatMaximumCharacters,!this._webchatSendButton)throw new Error("WebChat send button not found");this._firstFocusableElem=this._closeButton,this._lastFocusableElem=this._webchatSendButton;const a=document.createElement("small");a.classList.add(L),a.innerHTML=(null==(t=null==(e=this.config)?void 0:e.messages)?void 0:t.disclaimer)||"",this._webchatSendBox.insertAdjacentElement("beforebegin",a),this._chatOpen()}catch(e){console.error("Error during WebChat connection fulfillment:",e)}}_onStartConversationFulfilled(e){const t=e.data;t&&this._webchatInstance?setTimeout(()=>{this._store.dispatch({type:"WEB_CHAT/SEND_MESSAGE",payload:{text:t}}),this._initWebChatTranscriptObserver()},Q.InitialChatTextDelay):this._initWebChatTranscriptObserver()}_initWebChatTranscriptObserver(){this._webchatTranscriptElem?(this._webchatTranscriptMutationObserver=new MutationObserver(this._onWebChatTranscriptMutation.bind(this)),this._webchatTranscriptMutationObserver.observe(this._webchatTranscriptElem,{subtree:!0,childList:!0})):console.error("Web Chat transcript element not found.")}_onWebChatTranscriptMutation(e){e.forEach(e=>{var t,a,i;for(const r of Array.from(e.addedNodes))if(r.nodeType===Node.ELEMENT_NODE&&this._webchatBotBubble&&(null==(i=this._webchatBotBubble.textContent)||!i.startsWith((null==(a=null==(t=this.config)?void 0:t.messages)?void 0:a.latencyMessage)??"")))return this._toggleWebChatDisabled(!1),clearTimeout(this._messageWaitTimeout),void(this._webchatTextAreaHadFocus&&this._webchatTextarea&&this._webchatTextarea.focus())})}_handleFeedbackRequestFromBot(e,t){var a,i,r,s,o;const n=null==(a=e.payload.activity)?void 0:a.value,d=document.getElementById(`${n}-positive`),c=document.getElementById(`${n}-negative`);if(d){const e=d.querySelector("button");e&&this._setupFeedbackButton(e,null==(r=null==(i=this.config)?void 0:i.ariaLabels)?void 0:r.positiveFeedback,"positive",n,t)}if(c){const e=c.querySelector("button");e&&this._setupFeedbackButton(e,null==(o=null==(s=this.config)?void 0:s.ariaLabels)?void 0:o.negativeFeedback,"negative",n,t)}}_handleFeedbackButtonClick(e,t,a,i){const r=i.querySelector("img");if(r){const e=r.src;e&&"positive"===a?r.setAttribute("src",R):e&&"negative"===a&&r.setAttribute("src",U)}e({type:"DIRECT_LINE/POST_ACTIVITY",meta:{method:"keyboard"},payload:{activity:{channelData:{postBack:!0},name:`feedback${a}Request`,type:"event",text:t,value:{sourceSite:this._sourceSite}}}})}async _generateDirectLineToken(){let e=null;const t=this._getAIChatDrawerCookieObject();"object"==typeof t&&null!==t&&(e=t.ocrAIChatToken);try{if(!this._hasValidToken()){const t=await fetch(this._tokenEndpoint,{method:"GET",redirect:"follow",headers:{"ms-cv":window.mscv}}),{token:a}=await t.json();e=a;const i={[I]:e,[B]:Date.now()/1e3,[F]:this._tuid};this._updateAIChatDrawerCookie(i)}return e}catch(e){throw console.error("Error generating Direct Line token:",e),clearTimeout(this._messageWaitTimeout),this._toggleWebChatDisabled(!1),e}}_hasValidToken(){const e=this._getAIChatDrawerCookieObject();if("object"!=typeof e||null===e)return!1;const t=e.ocrAIChatToken,a=parseFloat(e.ocrAIChatTokenCreated),i=Date.now()/1e3;return!isNaN(a)&&!(!t||"undefined"===t||i-a>Q.TokenRefreshAfterInterval)}_getAIChatDrawerCookieObject(){const e=this._getCookie($.cookieNamespace);if(!e)return null;try{return JSON.parse(e)[this._cookieName]}catch(e){return console.error("Failed to parse AI Chat Drawer storage",e),null}}_updateAIChatDrawerCookie(e){const t=this._getCookie($.cookieNamespace);let a={};"string"==typeof t&&(a=JSON.parse(t));const i={...this._getAIChatDrawerCookieObject()||{},...e};a[this._cookieName]=i;const r=JSON.stringify(a);this._setCookie($.cookieNamespace,r,$.expiryDays,$.domain)}_toggleWebChatDisabled(e){if(this._webchatInstance){if(this._webchatForm&&(this._webchatForm.ariaDisabled=e.toString()),this._webchatSendButton&&(this._webchatSendButton.ariaDisabled=e.toString(),this._webchatSendButton.disabled=e,this._webchatSendButton.tabIndex=e?-1:0),this._webchatContainer){if(!this._actionSetButtons)throw new Error("Action set buttons not found");this._actionSetButtons.forEach(t=>{t.ariaDisabled=e.toString(),t.disabled=e,t.tabIndex=e?-1:0})}if(e){if(!this._allFocusableDrawerElems)throw new Error("Focusable drawer elements not found");this._lastFocusableElem=this._allFocusableDrawerElems[this._allFocusableDrawerElems.length-1]}else this._lastFocusableElem=this._webchatSendButton}}async _updateSourceSite(e){this._store.dispatch({type:"DIRECT_LINE/POST_ACTIVITY",meta:{method:"keyboard"},payload:{activity:{type:"event",name:"sourceSiteEvent",value:{sourceSite:e},channelData:{postBack:!0}}}}),this._updateAIChatDrawerCookie({[A]:e}),await this._sourceSiteUpdatePromise,this._resetSourceSiteUpdatePromise()}async _sendEventActivityToBot(e,t){this._store.dispatch({type:"DIRECT_LINE/POST_ACTIVITY",meta:{method:"keyboard"},payload:{activity:{type:"event",name:e,value:{...t},channelData:{postBack:!0}}}})}_getSourceSite(){try{const e=new URL(window.location.href),t=e.hostname,a=e.pathname.split("/"),i=document.documentElement.lang.toLowerCase(),r={"sr-rs":["sr-rs","sr-latn-rs","sr-cyrl-rs"],default:[i]},s=(r[i]||r.default).map(e=>a.indexOf(e)).find(e=>e>-1)??-1;if("azure.microsoft.com"===t||e.pathname.startsWith("/content/azure/acom"))return"azure";if(s>-1&&a.length>s+1)return a[s+1].replace(".html","")}catch(e){console.error("Failed to get source site:",e)}return"azure"}_resetSourceSiteUpdatePromise(){this._sourceSiteUpdatePromise=new Promise(e=>{this._resolveSourceSiteUpdate=e})}_getCookieDomain(){return this._isRunningLocally()||this._isAzureWebsites()||this._isAemCloud()?window.location.hostname:".microsoft.com"}_getLocale(){return"en-US"}_generateTuid(){if(this._tuid=this._extractTuidFromQueryString(this._tokenEndpoint),this._tuid)return;const e=this._getAIChatDrawerCookieObject();let t=null==e?void 0:e.tuid;t||(t=window.crypto.randomUUID()),this._tuid=t,this._setTokenEndpoint()}_setTokenEndpoint(){const e=`tuid=${this._tuid}`;this._tokenEndpoint=this._getMsocapiurl(G,e)}_getEndpoint(){return this._isEnvLink(K)||this._isRunningLocally()?j:this._isEnvLink(V)||this._isAzureWebsites()||this._isChromaticBuild()?H:P}_getMsocapiurl(e,t){const a=this._getEndpoint(),i=new URL(e,a);return(null==t?void 0:t.length)>0&&new URLSearchParams(t).forEach((e,t)=>{i.searchParams.append(t,e)}),this._addEnvironmentSpecificQueryParams(i.toString())}_addEnvironmentSpecificQueryParams(e){return Object.keys(q).forEach(t=>{-1!==e.indexOf("?")&&(e+="&"),e+=`${t}=${q[t]}`}),e}_extractTuidFromQueryString(e){try{return new URL(e).searchParams.get("tuid")??""}catch{return""}}_isRunningLocally(){return"localhost"===window.location.hostname||window.location.hostname.startsWith("127.")}_isChromaticBuild(){return window.location.hostname.includes("chromatic")}_isEnvLink(e){return e.includes(window.location.hostname)}_isAzureWebsites(){return window.location.hostname.includes(".azurewebsites.net")}_isAemCloud(){return window.location.hostname.includes(".adobeaemcloud.com")}static finalizeStyles(e){let t=super.finalizeStyles(e);const a=document.head;return t.forEach(e=>{if(e instanceof o){const t=document.createElement("style");t.dataset.css=te,t.textContent=e.cssText,a.append(t)}}),t=[],t}_renderHeaderIcon(){var e,t;return d`
      <div part="ai-assistant-drawer__icon" class="ai-assistant-drawer__icon">
        <reimagine-icon size="medium" role="presentation" aria-hidden="true">
          <img src=${n(null==(t=null==(e=this.config)?void 0:e.panelProperties)?void 0:t.headerIcon)} alt="" />
        </reimagine-icon>
      </div>
    `}_renderTitle(){var e,t;return d` <h2>${null==(t=null==(e=this.config)?void 0:e.panelProperties)?void 0:t.title}</h2> `}render(){var e,t,a,i,r,s,o;return d`
      <div
        class="ai-assistant-drawer__panel"
        role="dialog"
        aria-label=${n(null==(t=null==(e=this.config)?void 0:e.ariaLabels)?void 0:t.panel)}
      >
        <div class="ai-assistant-drawer__header">
          <div class="ai-assitant-drawer__header-title">
            ${this._renderHeaderIcon()}
            ${null!=(r=null==(i=null==(a=this.config)?void 0:a.panelProperties)?void 0:i.title)&&r.length?this._renderTitle():""}
          </div>
          <div class="ai-assistant-drawer__header-control">
            <reimagine-button
              icon-only
              appearance=${u.buttonGhost}
              size=${b.small}
              button-label=${n(null==(o=null==(s=this.config)?void 0:s.ariaLabels)?void 0:o.closeButton)}
              @click=${this._chatClose}
            >
              <reimagine-icon
                filled
                icon=${v.dismiss.name}
                size=${g.small}
                role="presentation"
                aria-hidden="true"
                slot="button__icon"
              ></reimagine-icon>
            </reimagine-button>
          </div>
        </div>
        <div class="ai-assistant-drawer__divider"></div>
        <div class="ai-assistant-drawer__body">
          <div class="ai-assistant-drawer__body-content">
            <!-- {{!-- WebChat initializes in this div --}} -->
            <div class="ai-assistant-drawer__content-messages"></div>
          </div>
        </div>
      </div>
    `}createRenderRoot(){return this}};ae.styles=[x],ee([a({type:Object,attribute:"config"})],ae.prototype,"config",2),ee([i()],ae.prototype,"_isRequestingAnimationFrame",2),ee([i()],ae.prototype,"_chatInitialized",2),ee([i()],ae.prototype,"_webchatTextAreaHadFocus",2),ee([r(".ai-assistant-drawer__header-control reimagine-button, .header-control reimagine-button")],ae.prototype,"_closeButton",2),ee([r(".ai-assistant-drawer__content-messages, .content-messages")],ae.prototype,"_webchatContainer",2),ee([r(".webchat__send-box form")],ae.prototype,"_webchatForm",2),ee([r(".webchat__send-box form textarea")],ae.prototype,"_webchatTextarea",2),ee([r(".webchat__send-box")],ae.prototype,"_webchatSendBox",2),ee([r(".webchat__send-box .webchat__send-button")],ae.prototype,"_webchatSendButton",2),ee([r(".webchat__basic-transcript")],ae.prototype,"_webchatTranscriptElem",2),ee([r(".webchat__bubble:not(.webchat__bubble--from-user)")],ae.prototype,"_webchatBotBubble",2),ee([s(".ac-actionSet button")],ae.prototype,"_actionSetButtons",2),ee([s('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]')],ae.prototype,"_allFocusableDrawerElems",2),ae=ee([l(te)],ae);export{ae as A,J as a,C as b,f as c,y as d,E as e,k as f,S as g,te as n};
