import{i as t,r as e,a as o,n as a,c as i,d as l,u as n,b as s,e as r,f as u,o as d}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as c,i as h,s as m,q as f,a as y}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{v as g,m as b,a as p,p as v,b as _}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";const S=t`var(--ds-vfi-outline-width, 0.1875rem)`,x=t`var(--ds-vfi-outline-style, dotted)`,$=t`var(--ds-vfi-outline-offset, 0.25rem)`,w=t`calc(calc(${S} + 0.1875rem) * -1)`,k=t`calc(calc(${S}) * -1)`,O=t`0.1875rem`,E=e=>t`
  /* https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible#selectively_showing_the_focus_indicator */

  /* Provide basic, default focus styles. */
  &:focus {
    ${e}
  }

  /* Remove default focus styles for mouse users ONLY if :focus-visible is supported. */
  &:focus:not(:focus-visible) {
    outline: 0;
  }

  /* If :focus-visible is supported, provide enhanced focus styles for keyboard focus. */
  &:focus-visible {
    ${e}
  }
`,C=t`var(--ds-vfi-text-color, currentcolor) ${x} ${S}`,z=t`
  outline: ${C};
`,B=t`
  outline: ${C} !important;
`,A=t`
  ${z}
  outline-offset: ${w};
`,P=t`
  ${z}
  outline-offset: ${$};
`,j=()=>t`
  ${E(z)}
`,H=()=>t`
  ${E(A)}
`,R=t`
  text-decoration: underline;
  text-decoration-thickness: 3px;
  text-underline-offset: 3px;
  text-decoration-color: Highlight;
`,I=t`
  border-color: CanvasText;
  border-style: solid;
  --ds-vfi-text-color: Highlight !important;
  --ds-vfi-outline-width: 5px;
`;var L,U,T,D,M,F,N,W,G,Z,V,Y,q,J,K,Q,X,tt,et,ot,at,it,lt,nt,st,rt,ut,dt,ct,ht,mt,ft,yt,gt,bt,pt,vt,_t,St,xt,$t,wt,kt,Ot,Et=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ct(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function zt(){if(F)return M;F=1;var t=D?T:(D=1,T=function(t){return function(e){return null==t?void 0:t[e]}}),e=t({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});return M=e}function Bt(){if(Z)return G;Z=1;var t=function(){if(W)return N;W=1;var t="object"==typeof Et&&Et&&Et.Object===Object&&Et;return N=t}(),e="object"==typeof self&&self&&self.Object===Object&&self,o=t||e||Function("return this")();return G=o}function At(){if(Y)return V;Y=1;var t=Bt().Symbol;return V=t}function Pt(){if(it)return at;it=1;var t=At(),e=function(){if(tt)return X;tt=1;var t=At(),e=Object.prototype,o=e.hasOwnProperty,a=e.toString,i=t?t.toStringTag:void 0;return X=function(t){var e=o.call(t,i),l=t[i];try{t[i]=void 0;var n=!0}catch{}var s=a.call(t);return n&&(e?t[i]=l:delete t[i]),s}}(),o=function(){if(ot)return et;ot=1;var t=Object.prototype.toString;return et=function(e){return t.call(e)}}(),a=t?t.toStringTag:void 0;return at=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?e(t):o(t)}}function jt(){if(rt)return st;rt=1;var t=Pt(),e=nt?lt:(nt=1,lt=function(t){return null!=t&&"object"==typeof t});return st=function(o){return"symbol"==typeof o||e(o)&&"[object Symbol]"==t(o)}}function Ht(){if(dt)return ut;dt=1;var t=At(),e=J?q:(J=1,q=function(t,e){for(var o=-1,a=null==t?0:t.length,i=Array(a);++o<a;)i[o]=e(t[o],o,t);return i}),o=function(){if(Q)return K;Q=1;var t=Array.isArray;return K=t}(),a=jt(),i=t?t.prototype:void 0,l=i?i.toString:void 0;return ut=function t(i){if("string"==typeof i)return i;if(o(i))return e(i,t)+"";if(a(i))return l?l.call(i):"";var n=i+"";return"0"==n&&1/i==-1/0?"-0":n},ut}function Rt(){if(ht)return ct;ht=1;var t=Ht();return ct=function(e){return null==e?"":t(e)}}function It(){if(xt)return St;xt=1;var t=function(){if(gt)return yt;gt=1;var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;return yt=function(e){return e.match(t)||[]}}(),e=function(){if(pt)return bt;pt=1;var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;return bt=function(e){return t.test(e)}}(),o=Rt(),a=function(){if(_t)return vt;_t=1;var t="\\ud800-\\udfff",e="\\u2700-\\u27bf",o="a-z\\xdf-\\xf6\\xf8-\\xff",a="A-Z\\xc0-\\xd6\\xd8-\\xde",i="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",l="["+i+"]",n="\\d+",s="["+e+"]",r="["+o+"]",u="[^"+t+i+n+e+o+a+"]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",c="[\\ud800-\\udbff][\\udc00-\\udfff]",h="["+a+"]",m="(?:"+r+"|"+u+")",f="(?:"+h+"|"+u+")",y="(?:['’](?:d|ll|m|re|s|t|ve))?",g="(?:['’](?:D|LL|M|RE|S|T|VE))?",b="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",p="[\\ufe0e\\ufe0f]?",v=p+b+"(?:\\u200d(?:"+["[^"+t+"]",d,c].join("|")+")"+p+b+")*",_="(?:"+[s,d,c].join("|")+")"+v,S=RegExp([h+"?"+r+"+"+y+"(?="+[l,h,"$"].join("|")+")",f+"+"+g+"(?="+[l,h+m,"$"].join("|")+")",h+"?"+m+"+"+y,h+"+"+g,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",n,_].join("|"),"g");return vt=function(t){return t.match(S)||[]}}();return St=function(i,l,n){return i=o(i),void 0===(l=n?void 0:l)?e(i)?a(i):t(i):i.match(l)||[]}}function Lt(){if(wt)return $t;wt=1;var t=U?L:(U=1,L=function(t,e,o,a){var i=-1,l=null==t?0:t.length;for(a&&l&&(o=t[++i]);++i<l;)o=e(o,t[i],i,t);return o}),e=function(){if(ft)return mt;ft=1;var t=zt(),e=Rt(),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");return mt=function(i){return(i=e(i))&&i.replace(o,t).replace(a,"")}}(),o=It(),a=RegExp("['’]","g");return $t=function(i){return function(l){return t(o(e(l).replace(a,"")),i,"")}}}const Ut=Ct(function(){if(Ot)return kt;Ot=1;var t=Lt()(function(t,e,o){return t+(o?"-":"")+e.toLowerCase()});return kt=t}()),Tt="1.51.1".split(".")[0],Dt=(t,o)=>{const a=Object.entries(t).map(([t,e])=>`${Ut(t)}: var(--${o}-${Ut(t)}, ${e});`).join("\n");return e(a)},Mt=(t,o,a)=>{const i=t[a];if(i)return e(`var(--${o}-${Ut(a)}, ${i})`);throw new Error(`Key "${a}" not found in prop object`)},Ft=t=>t.replace("reimagine-","ds-"),Nt=/(^|[^-])(reimagine-[a-z][\da-z]*(?:-[\da-z]+)*)\b(?!-v\d)/g,Wt=t=>t.replaceAll(Nt,(t,e,o)=>`${e}:is(${o}, ${o}-v${Tt})`),Gt=t`
  :host,
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  [hidden] {
    display: none !important;
  }

  :host([hidden]) {
    display: none !important;
  }

  input,
  button,
  select,
  textarea {
    margin: 0;
    padding: 0;
    letter-spacing: inherit;
    font-size: inherit;
    font-family: inherit;
  }
`;var Zt=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,Yt=(t,e,o,a)=>{for(var i,l=a>1?void 0:a?Vt(e,o):e,n=t.length-1;n>=0;n--)(i=t[n])&&(l=(a?i(e,o,l):i(l))||l);return a&&l&&Zt(e,o,l),l};const qt=class extends o{static finalizeStyles(t){return super.finalizeStyles(t).map(t=>{if(!(t instanceof a))return t;const o=Wt(t.cssText);return o===t.cssText?t:e(o)})}get dir(){return this._dir&&"auto"!==this._dir?this._dir:getComputedStyle(this).direction}set dir(t){this._dir=t,this.requestUpdate("dir")}firstUpdated(){this.dispatchEvent(new CustomEvent("ready",{bubbles:!0,composed:!0}))}};qt.styles=[Gt];let Jt=qt;Yt([i({reflect:!0})],Jt.prototype,"theme",2),Yt([i()],Jt.prototype,"dir",1);const Kt=t`
  .first,
  .last {
    display: contents;
  }
`,Qt=t=>{const e=class extends t{defaultSlotTemplate({name:t,inline:e}){const o=e?l`span`:l`div`;return n`
        <${o} part="${t}" class="${t}">
          <slot name="${t}"></slot>
        </${o}>
      `}firstSlotTemplate({inline:t}={}){return n` ${this.defaultSlotTemplate({name:"first",inline:t})} `}lastSlotTemplate({inline:t}={}){return n` ${this.defaultSlotTemplate({name:"last",inline:t})} `}};return e.styles=[t.styles??[],Kt],e},Xt={slideInRight:"slide-in-right",effect1:"effect-1",effect2:"effect-2"},te="scroll",ee="waiting",oe="entered";function ae(t,e,o){var a,i=o||{},l=i.noTrailing,n=void 0!==l&&l,s=i.noLeading,r=void 0!==s&&s,u=i.debounceMode,d=void 0===u?void 0:u,c=!1,h=0;function m(){a&&clearTimeout(a)}function f(){for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];var s=this,u=Date.now()-h;function f(){h=Date.now(),e.apply(s,i)}function y(){a=void 0}c||(!r&&d&&!a&&f(),m(),void 0===d&&u>t?r?(h=Date.now(),n||(a=setTimeout(d?y:f,t))):f():!0!==n&&(a=setTimeout(d?y:f,void 0===d?t-u:t)))}return f.cancel=function(t){var e=(t||{}).upcomingOnly,o=void 0!==e&&e;m(),c=!o},f}function ie(t,e,o){var a=(o||{}).atBegin;return ae(t,e,{debounceMode:!1!==(void 0!==a&&a)})}class le{constructor(t,e){this._observerCallback=t=>{t.forEach(t=>{if(t.isIntersecting){const{target:e}=t;e.getAttribute("animation-intersection")!==oe&&(setTimeout(()=>{e.setAttribute("animation-intersection",oe)},30),e.dispatchEvent(new CustomEvent("animationIntersection",{detail:oe})))}})},this._resizeObserverCallback=()=>{this._intersectionObserver&&this._intersectionObserver.disconnect(),this._setIntersectionObserver()},this._host=t,this._intersectionObserverOptions=(null==e?void 0:e.intersectionObserverOptions)||{root:null,rootMargin:"0px",threshold:this._calculateThreshold()||.4},this._host.addController(this)}_calculateThreshold(){return window.innerWidth<Number.parseInt(g.lg,10)?.1:.3}_setIntersectionObserver(){var t;this._intersectionObserverOptions={...this._intersectionObserverOptions,threshold:this._calculateThreshold()||.4},this._intersectionObserver=new IntersectionObserver(this._observerCallback,this._intersectionObserverOptions),null==(t=this._intersectionObserver)||t.observe(this._host),document.dispatchEvent(new CustomEvent("animationObserverReady"))}hostConnected(){customElements.whenDefined(this._host.localName).then(()=>{this._host.isConnected&&this._initObserver()})}_initObserver(){!this._host.hasAttribute("animation-enter")&&!this._host.hasAttribute("animation-exit")||((this._host.hasAttribute("animation-enter")||this._host.hasAttribute("animation-exit"))&&!this._host.hasAttribute("animation-view")&&this._host.setAttribute("animation-view",te),this._host.getAttribute("animation-view")===te&&(this._host.setAttribute("animation-intersection",ee),this._intersectionObserver&&this._intersectionObserver.disconnect(),this._debouncedResizeObserverCallback&&window.removeEventListener("resize",this._debouncedResizeObserverCallback),this._setIntersectionObserver(),this._debouncedResizeObserverCallback=ie(200,this._resizeObserverCallback),window.addEventListener("resize",this._debouncedResizeObserverCallback)))}hostDisconnected(){this._intersectionObserver&&this._intersectionObserver.disconnect(),this._debouncedResizeObserverCallback&&window.removeEventListener("resize",this._debouncedResizeObserverCallback)}updateObserver(){this.hostConnected()}getObserver(){return this._intersectionObserver}}var ne=Object.defineProperty,se=(t,e,o,a)=>{for(var i,l=void 0,n=t.length-1;n>=0;n--)(i=t[n])&&(l=i(e,o,l)||l);return l&&ne(e,o,l),l};const re=t=>{const e=class extends t{constructor(){super(...arguments),this.animationObserverController=new le(this)}updated(t){var e,o;super.updated(t),(t.has("animationEnter")||t.has("animationExit"))&&(null==(e=this.animationObserverController)||!e.getObserver())&&(null==(o=this.animationObserverController)||o.updateObserver())}};e.styles=t.styles??[];let o=e;return se([i({reflect:!0,attribute:"animation-enter"})],o.prototype,"animationEnter"),se([i({reflect:!0,attribute:"animation-exit"})],o.prototype,"animationExit"),se([i({reflect:!0,attribute:"animation-delay"})],o.prototype,"animationDelay"),se([i({reflect:!0,attribute:"animation-duration"})],o.prototype,"animationDuration"),se([i({reflect:!0,attribute:"animation-iteration"})],o.prototype,"animationIteration"),se([i({reflect:!0,attribute:"animation-view"})],o.prototype,"animationView"),se([i({reflect:!0,attribute:"animation-intersection"})],o.prototype,"animationIntersection"),o};class ue extends(re(Qt(Jt))){}const de={var:"var",hex:"hex",rgb:"rgb",rgba:"rgba",hsl:"hsl",hsla:"hsla",linearGradient:"linear-gradient",invalid:"invalid"},ce=t=>(t=>((null==t?void 0:t.startsWith("var("))&&(null==t?void 0:t.endsWith(")")))??!1)(t)?de.var:(t=>!!t&&/^#([\dA-Fa-f]{3}|[\dA-Fa-f]{6})$/.test(t))(t)?de.hex:(t=>((null==t?void 0:t.startsWith("rgb("))&&(null==t?void 0:t.endsWith(")")))??!1)(t)?de.rgb:(t=>((null==t?void 0:t.startsWith("rgba("))&&(null==t?void 0:t.endsWith(")")))??!1)(t)?de.rgba:(t=>((null==t?void 0:t.startsWith("hsl("))&&(null==t?void 0:t.endsWith(")")))??!1)(t)?de.hsl:(t=>((null==t?void 0:t.startsWith("hsla("))&&(null==t?void 0:t.endsWith(")")))??!1)(t)?de.hsla:(t=>((null==t?void 0:t.startsWith("linear-gradient("))&&(null==t?void 0:t.endsWith(")")))??!1)(t)?de.linearGradient:de.invalid,he=t=>{if(!t)return!1;if(/^(100|[1-9]?\d)%$/.test(t)||/^(0(\.\d+)?|1(\.0+)?)$/.test(t))return!0;const e=Number(t);return!isNaN(e)&&e>=0&&e<=1};var me=Object.defineProperty,fe=Object.getOwnPropertyDescriptor,ye=(t,e,o,a)=>{for(var i,l=fe(e,o),n=t.length-1;n>=0;n--)(i=t[n])&&(l=i(e,o,l)||l);return l&&me(e,o,l),l};const ge=t=>{const e=class extends t{constructor(){super(...arguments),this.FILL_COLOR_PROPERTY="--ds-fill-color-override"}get fillColor(){return this._fillColor}set fillColor(t){const e=this._fillColor;this._fillColor=t,this.requestUpdate("fillColor",e),this._setFillColor()}get fillAlpha(){return this._fillAlpha}set fillAlpha(t){const e=this._fillAlpha;this._fillAlpha=t,this.requestUpdate("fillAlpha",e),this._setFillColor()}_setFillColor(){if(this._fillColor){if(ce(this._fillColor)===de.invalid)return void this._removeColorProperties();if(this._fillAlpha&&he(this._fillAlpha)){const t=((t,e)=>{if(!t||!e||!he(e))return;const o=ce(t);if(o!==de.invalid&&o!==de.var&&o!==de.rgba&&o!==de.hsla&&o!==de.linearGradient){if(o===de.hex)return`hsl(from ${t} h s l / ${e})`;if(o===de.rgb)return t.replace("rgb(","rgb(").replace(")",` / ${e})`);if(o===de.hsl)return t.replace("hsl(","hsl(").replace(")",` / ${e})`)}})(this._fillColor,this._fillAlpha);if(t)return this.style.setProperty(this.FILL_COLOR_PROPERTY,t),void this.style.setProperty("background",`var(${this.FILL_COLOR_PROPERTY})`)}return this.style.setProperty(this.FILL_COLOR_PROPERTY,this.fillColor??""),void this.style.setProperty("background",this.fillColor?`var(${this.FILL_COLOR_PROPERTY})`:"")}this._removeColorProperties()}_removeColorProperties(){this.style.removeProperty(this.FILL_COLOR_PROPERTY),this.style.removeProperty("background")}};e.styles=t.styles??[];let o=e;return ye([i({reflect:!0,attribute:"fill-color"})],o.prototype,"fillColor"),ye([i({reflect:!0,attribute:"fill-alpha"})],o.prototype,"fillAlpha"),o},be={buttonPrimary:"button--primary",buttonSecondary:"button--secondary",buttonGhost:"button--ghost"},pe={small:"small",medium:"medium",large:"large"},ve={circle:"circle",rounded:"rounded"},_e={play:"play",pause:"pause"},Se={containerBoxSizing:"border-box",containerDisplay:"block",containerMarginInlineStart:b.xs.marginInlineStart,containerMarginInlineEnd:b.xs.marginInlineStart,containerMarginBlockStart:"initial",containerMarginBlockEnd:"initial",containerMaxWidth:p.xs,containerPaddingInlineStart:v.xs.paddingInlineStart,containerPaddingInlineEnd:v.xs.paddingInlineEnd,containerPosition:"static",containerWidth:"100%",containerGap:"initial",containerFlexDirection:"initial",containerZIndex:0},xe=t`
  :host {
    box-sizing: var(
      --ds-container-box-size,
      ${e(Se.containerBoxSizing)}
    ) !important;
    display: var(--ds-container-display, ${e(Se.containerDisplay)});
    margin-inline-start: var(
      --ds-container-margin-inline-start,
      ${e(Se.containerMarginInlineStart)}
    );
    margin-inline-end: var(
      --ds-container-margin-inline-end,
      ${e(Se.containerMarginInlineEnd)}
    );
    margin-block-start: var(
      --ds-container-margin-block-start,
      ${e(Se.containerMarginBlockStart)}
    );
    margin-block-end: var(
      --ds-container-margin-block-end,
      ${e(Se.containerMarginBlockEnd)}
    );
    max-width: var(--ds-container-max-width, ${e(Se.containerMaxWidth)});
    padding-inline-start: var(
      --ds-container-padding-inline-start,
      ${e(Se.containerPaddingInlineStart)}
    );
    padding-inline-end: var(
      --ds-container-padding-inline-end,
      ${e(Se.containerPaddingInlineEnd)}
    );
    position: var(--ds-container-position, ${e(Se.containerPosition)});
    width: var(--ds-container-width, ${e(Se.containerWidth)});
    gap: var(--ds-container-gap, ${e(Se.containerGap)});
    flex-direction: var(
      --ds-container-flex-direction,
      ${e(Se.containerFlexDirection)}
    );
    z-index: var(--ds-container-z-index, var(--ds-z-index-0, ${e(Se.containerZIndex)}));
  }

  :host([full-width]) {
    --ds-container-width: 100%;
    --ds-container-max-width: none;
    --ds-container-padding-inline-start: 0;
    --ds-container-padding-inline-end: 0;
  }
`,$e=t`
  @media (min-width: ${e(g.sm)}) {
    :host {
      --ds-container-padding-inline-start: ${e(v.sm.paddingInlineStart)};
      --ds-container-padding-inline-end: ${e(v.sm.paddingInlineEnd)};
    }
  }
  @media (min-width: ${e(g.md)}) {
    :host {
      --ds-container-max-width: 100vw;
      --ds-container-padding-inline-start: ${e(v.md.paddingInlineStart)};
      --ds-container-padding-inline-end: ${e(v.md.paddingInlineEnd)};
    }
  }
  @media (min-width: ${e(g.lg)}) {
    :host {
      --ds-container-width: 90%;
      --ds-container-box-size: content-box;
      --ds-container-padding-inline-start: ${e(v.lg.paddingInlineStart)};
      --ds-container-padding-inline-end: ${e(v.lg.paddingInlineEnd)};
      --ds-container-max-width: 1328px;
    }
  }
`;var we=Object.defineProperty,ke=Object.getOwnPropertyDescriptor,Oe=(t,e,o,a)=>{for(var i,l=a>1?void 0:a?ke(e,o):e,n=t.length-1;n>=0;n--)(i=t[n])&&(l=(a?i(e,o,l):i(l))||l);return a&&l&&we(e,o,l),l};const Ee="reimagine-container";let Ce=class extends ue{constructor(){super(...arguments),this.fullWidth=!1}render(){return s`<slot></slot>`}};Ce.styles=[xe,$e],Oe([i({type:Boolean,reflect:!0,attribute:"full-width"})],Ce.prototype,"fullWidth",2),Ce=Oe([c(Ee)],Ce);const ze={col1even:"1-col-even",col1boxed:"1-col-boxed",col1staged:"1-col-staged",col1focus:"1-col-focus",col2even:"2-col-even",col2focus:"2-col-focus",col2offsetRight:"2-col-offset-right",col2offsetLeft:"2-col-offset-left",col2editorial:"2-col-editorial",col2sidebar:"2-col-sidebar",col3Even:"3-col-even",col3OffsetStack:"3-col-offset-stack",col4even1:"4-col-even-1",col5Even:"5-col-even",col6Even:"6-col-even",card1:"1-card",card2Alt:"2-card-alt",card3:"3-card",card4:"4-card",card5:"5-card"},Be={relaxed:"relaxed"},Ae="onScroll",Pe="onMount",je="flex",He="0.5rem",Re="0.5rem",Ie="row",Le="wrap",Ue="flex-start",Te="100%",De="initial",Me="initial",Fe="initial",Ne="block",We="initial",Ge="0",Ze="0",Ve="initial",Ye="initial",qe="initial",Je="initial",Ke="100%",Qe="initial",Xe=t`
  :host {
    display: block;
  }

  .layout__base {
    --ds-grid-column-total: ${e("6")};
    --ds-grid-column-gap: ${e(He)};
    --ds-grid-column-gap-total: calc((var(--ds-grid-column-total) - 1) * var(--ds-grid-column-gap));
    --ds-grid-available-width: calc(100% - var(--ds-grid-column-gap-total));
    --ds-grid-column-width: calc(var(--ds-grid-available-width) / var(--ds-grid-column-total));
    --ds-layout-column-amount: var(--ds-grid-column-total);

    display: var(--ds-layout-display, ${e(je)});
    flex-wrap: var(--ds-layout-flex-wrap, ${e(Le)});
    flex-direction: var(--ds-layout-flex-direction, ${e(Ie)});
    column-gap: var(--ds-layout-column-gap, ${e(He)});
    row-gap: var(--ds-layout-row-gap, ${e(Re)});
    justify-content: var(--ds-layout-justify-content, ${e(Ue)});
    width: var(--ds-layout-width, ${e(Te)});
    padding-inline-start: var(
      --ds-layout-padding-inline-start,
      ${e(De)}
    );
    overflow: var(--ds-layout-overflow, ${e(Me)});
    margin-inline: var(--ds-layout-margin-inline, ${e(Fe)});
  }

  .layout__base:focus {
    ${B};
  }

  .layout__base ::slotted(reimagine-layout-column) {
    --ds-layout-column-flex-basis: var(
      --ds-layout-column-flex-basis-override,
      calc(
        var(--ds-grid-column-width) * var(--ds-layout-column-amount) +
          (var(--ds-grid-column-gap) * (var(--ds-layout-column-amount) - 1))
      )
    );

    display: var(--ds-layout-column-display, ${e(Ne)});
    flex-direction: var(
      --ds-layout-column-flex-direction,
      ${e(We)}
    );
    flex-grow: var(
      --ds-layout-column-flex-grow,
      ${e(Ge)}
    );
    flex-shrink: var(
      --ds-layout-column-flex-shrink,
      ${e(Ze)}
    );
    flex-basis: var(--ds-layout-column-flex-basis);
    min-width: var(--ds-layout-column-min-width, auto);
    row-gap: var(--ds-layout-column-row-gap, ${e(Ve)});
    column-gap: var(
      --ds-layout-column-column-gap,
      ${e(Ye)}
    );
    align-items: var(
      --ds-layout-column-align-items,
      ${e(qe)}
    );
    justify-content: var(
      --ds-layout-column-justify-content,
      ${e(Je)}
    );
    margin-block-end: var(
      --ds-layout-column-margin-block-end,
      ${e(Qe)}
    );
    width: var(--ds-layout-column-width, ${e(Ke)});
  }

  :host([configuration$='overflow']) .layout__base,
  :host([configuration$='full-overflow']) .layout__base,
  :host([configuration$='-card']) .layout__base,
  :host([configuration$='-card-alt']) .layout__base {
    --ds-layout-overflow: scroll;
    --ds-layout-flex-wrap: nowrap;
  }

  :host([configuration$='overflow']) .layout__base {
    --ds-layout-column-amount: 5;
  }

  :host([configuration$='full-overflow']) .layout__base {
    --ds-layout-column-amount: 6;
  }

  /* Card overflow layouts - default column amounts (VP1/xs)
     VP1: 6 columns, 8px gap - cards span 5 columns with 1 column peek */
  :host([configuration='1-card']) .layout__base,
  :host([configuration='1-card-alt']) .layout__base,
  :host([configuration='2-card']) .layout__base,
  :host([configuration='2-card-alt']) .layout__base,
  :host([configuration='3-card']) .layout__base,
  :host([configuration='4-card']) .layout__base,
  :host([configuration='5-card']) .layout__base {
    --ds-layout-column-amount: 5;
  }
`,to=t`
  @media (min-width: ${e(g.sm)}) {
    :host([configuration='4-col-even-2']) .layout__base,
    :host([configuration='6-col-even']) .layout__base {
      --ds-layout-column-amount: 3;
    }

    :host([configuration$='overflow']) .layout__base {
      --ds-layout-column-amount: 6;
    }

    :host([configuration='multi-card-overflow']) .layout__base {
      --ds-layout-column-amount: 3;
    }

    /* Card overflow layouts - VP2 (sm, 540-859px)
       VP2: 6 columns, 8px gap
       Cards span 6 columns (full width) for overflow scroll */
    :host([configuration='1-card']) .layout__base,
    :host([configuration='1-card-alt']) .layout__base,
    :host([configuration='2-card']) .layout__base,
    :host([configuration='2-card-alt']) .layout__base,
    :host([configuration='3-card']) .layout__base,
    :host([configuration='4-card']) .layout__base {
      --ds-layout-column-amount: 6;
    }

    /* 5-card: 3 columns (~50% width) to show 2 cards in view */
    :host([configuration='5-card']) .layout__base {
      --ds-layout-column-amount: 3;
    }
  }

  @media (min-width: ${e(g.md)}) {
    .layout__base {
      --ds-grid-column-total: 12;
      --ds-grid-column-gap: 1rem;
      --ds-layout-column-gap: 1rem;
      --ds-layout-row-gap: 1rem;
    }

    :host([configuration='1-col-even']) .layout__base,
    :host([configuration='1-col-boxed']) .layout__base,
    :host([configuration='1-col-staged']) .layout__base {
      --ds-layout-column-amount: 12;
    }

    :host([configuration='1-col-focus']) .layout__base {
      --ds-layout-justify-content: center;
      --ds-layout-column-amount: 10;
    }

    :host([configuration='2-col-even']) .layout__base ::slotted(reimagine-layout-column) {
      --ds-layout-column-amount: 6;
    }

    :host([configuration='2-col-focus']) .layout__base {
      --ds-layout-justify-content: center;
    }

    :host([configuration='2-col-focus']) .layout__base ::slotted(reimagine-layout-column) {
      --ds-layout-column-amount: 5;
    }

    :host([configuration='2-col-gapped']) .layout__base {
      --ds-layout-justify-content: space-between;
    }

    :host([configuration='2-col-gapped']) .layout__base ::slotted(reimagine-layout-column) {
      --ds-layout-column-amount: 5;
    }

    :host([configuration='2-col-offset-right'])
      .layout__base
      ::slotted(reimagine-layout-column:first-child),
    :host([configuration='2-col-offset-left'])
      .layout__base
      ::slotted(reimagine-layout-column:last-child) {
      --ds-layout-column-amount: 4;
    }

    :host([configuration='2-col-offset-right'])
      .layout__base
      ::slotted(reimagine-layout-column:last-child),
    :host([configuration='2-col-offset-left'])
      .layout__base
      ::slotted(reimagine-layout-column:first-child) {
      --ds-layout-column-amount: 8;
    }

    :host([configuration='2-col-editorial']) .layout__base {
      --ds-layout-column-gap: calc(var(--ds-grid-column-width) + (var(--ds-grid-column-gap) * 2));
    }

    :host([configuration='2-col-editorial'])
      .layout__base
      ::slotted(reimagine-layout-column:first-child) {
      --ds-layout-column-amount: 4;
    }

    :host([configuration='2-col-editorial'])
      .layout__base
      ::slotted(reimagine-layout-column:last-child) {
      --ds-layout-column-amount: 6;
    }

    :host([configuration='2-col-sidebar'])
      .layout__base
      ::slotted(reimagine-layout-column:first-child) {
      --ds-layout-column-amount: 4;
    }

    :host([configuration='2-col-sidebar'])
      .layout__base
      ::slotted(reimagine-layout-column:last-child) {
      --ds-layout-column-amount: 8;
    }

    :host([configuration='3-col-even']) .layout__base {
      --ds-layout-column-amount: 4;
    }

    :host([configuration='3-col-even'])
      .layout__base
      ::slotted(reimagine-layout-column.column-span-2) {
      --ds-layout-column-amount: 8;
    }

    :host([configuration='3-col-offset-stack'])
      .layout__base
      ::slotted(reimagine-layout-column:nth-child(2)),
    :host([configuration='3-col-offset-stack'])
      .layout__base
      ::slotted(reimagine-layout-column:nth-child(7)) {
      --ds-layout-column-amount: 8;
    }

    :host([configuration='3-col-offset-stack'])
      .layout__base
      ::slotted(reimagine-layout-column:nth-child(3)),
    :host([configuration='3-col-offset-stack'])
      .layout__base
      ::slotted(reimagine-layout-column:nth-child(6)) {
      --ds-layout-column-amount: 4;
    }

    :host([configuration='3-col-offset-stack'])
      .layout__base
      ::slotted(reimagine-layout-column:nth-child(4)),
    :host([configuration='3-col-offset-stack'])
      .layout__base
      ::slotted(reimagine-layout-column:nth-child(5)) {
      --ds-layout-column-amount: 6;
    }

    :host([configuration='3-col-offset-right']) .layout__base {
      --ds-layout-column-amount: 3;
    }

    :host([configuration='3-col-offset-right'])
      .layout__base
      ::slotted(reimagine-layout-column:last-child) {
      --ds-layout-column-amount: 6;
    }

    :host([configuration='4-col-even-1']) .layout__base {
      --ds-layout-column-amount: 3;
    }

    :host([configuration='4-col-even-1'])
      .layout__base
      ::slotted(reimagine-layout-column.column-span-2),
    :host([configuration='4-col-even-2'])
      .layout__base
      ::slotted(reimagine-layout-column.column-span-2) {
      --ds-layout-column-amount: 6;
    }

    :host([configuration='4-col-even-2']) .layout__base,
    :host([configuration='4-col-even-3']) .layout__base,
    :host([configuration='5-col-even']) .layout__base {
      --ds-layout-column-amount: 6;
    }

    :host([configuration='6-col-even']) .layout__base {
      --ds-layout-column-amount: 4;
    }

    :host([configuration='1-col-even-overflow']) .layout__base,
    :host([configuration='1-col-boxed-overflow']) .layout__base,
    :host([configuration='1-col-even-full-overflow']) .layout__base {
      --ds-layout-column-amount: 12;
    }

    :host([configuration='2-col-even-overflow']) .layout__base {
      --ds-layout-column-amount: 6;
    }

    :host([configuration='3-col-even-overflow']) .layout__base,
    :host([configuration='4-col-even-overflow']) .layout__base,
    :host([configuration='multi-card-overflow']) .layout__base {
      --ds-layout-column-amount: 4;
    }

    /* Card overflow layouts - VP3 (md, 860-1439px)
       VP3: 12 columns, 16px gap
       1-card/1-card-alt: 12 columns (full width) */
    :host([configuration='1-card']) .layout__base,
    :host([configuration='1-card-alt']) .layout__base {
      --ds-layout-column-amount: 12;
    }

    /* 2-card/2-card-alt: 6 columns each (2 cards visible) */
    :host([configuration='2-card']) .layout__base,
    :host([configuration='2-card-alt']) .layout__base {
      --ds-layout-column-amount: 6;
    }

    /* 3-card/4-card/5-card: 4 columns each (3 cards visible) */
    :host([configuration='3-card']) .layout__base,
    :host([configuration='4-card']) .layout__base,
    :host([configuration='5-card']) .layout__base {
      --ds-layout-column-amount: 4;
    }
  }

  @media (min-width: ${e(g.lg)}) {
    .layout__base {
      --ds-grid-column-total: 24;
    }

    :host([configuration='1-col-even']) .layout__base {
      --ds-layout-column-amount: var(--ds-grid-column-total);
    }

    :host([configuration='1-col-boxed']) .layout__base,
    :host([configuration='1-col-staged']) .layout__base,
    :host([configuration='1-col-focus']) .layout__base {
      --ds-layout-justify-content: center;
    }

    :host([configuration='1-col-boxed']) .layout__base {
      --ds-layout-column-amount: 20;
    }

    :host([configuration='1-col-staged']) .layout__base {
      --ds-layout-column-amount: 16;
    }

    :host([configuration='1-col-focus']) .layout__base {
      --ds-layout-column-amount: 14;
    }

    :host([configuration='2-col-even']) .layout__base ::slotted(reimagine-layout-column) {
      --ds-layout-column-amount: 12;
    }

    :host([configuration='2-col-focus']) .layout__base ::slotted(reimagine-layout-column) {
      --ds-layout-column-amount: 7;
    }

    :host([configuration='2-col-gapped']) .layout__base ::slotted(reimagine-layout-column) {
      --ds-layout-column-amount: 10;
    }

    :host([configuration='2-col-offset-right'])
      .layout__base
      ::slotted(reimagine-layout-column:first-child),
    :host([configuration='2-col-offset-left'])
      .layout__base
      ::slotted(reimagine-layout-column:last-child) {
      --ds-layout-column-amount: 8;
    }

    :host([configuration='2-col-offset-right'])
      .layout__base
      ::slotted(reimagine-layout-column:last-child),
    :host([configuration='2-col-offset-left'])
      .layout__base
      ::slotted(reimagine-layout-column:first-child) {
      --ds-layout-column-amount: 16;
    }

    :host([configuration='2-col-editorial'])
      .layout__base
      ::slotted(reimagine-layout-column:first-child) {
      --ds-layout-column-amount: 5;
    }

    :host([configuration='2-col-editorial'])
      .layout__base
      ::slotted(reimagine-layout-column:last-child) {
      --ds-layout-column-amount: 12;
    }

    :host([configuration='2-col-sidebar'])
      .layout__base
      ::slotted(reimagine-layout-column:first-child) {
      --ds-layout-column-amount: 6;
    }

    :host([configuration='2-col-sidebar'])
      .layout__base
      ::slotted(reimagine-layout-column:last-child) {
      --ds-layout-column-amount: 18;
    }

    :host([configuration='3-col-even']) .layout__base {
      --ds-layout-column-amount: 8;
    }

    :host([configuration='3-col-even'])
      .layout__base
      ::slotted(reimagine-layout-column.column-span-2) {
      --ds-layout-column-amount: 16;
    }

    :host([configuration='3-col-offset-stack'])
      .layout__base
      ::slotted(reimagine-layout-column:nth-child(n)) {
      --ds-layout-column-amount: 6;
    }

    :host([configuration='3-col-offset-stack'])
      .layout__base
      ::slotted(reimagine-layout-column:nth-child(2)) {
      --ds-layout-column-amount: 12;
    }

    :host([configuration='3-col-offset-stack'])
      .layout__base
      ::slotted(reimagine-layout-column:first-child) {
      --ds-layout-column-amount: 12;
    }

    :host([configuration='3-col-offset-stack'])
      .layout__base
      ::slotted(reimagine-layout-column:nth-child(7)) {
      --ds-layout-column-amount: 12;
    }

    :host([configuration='3-col-offset-right']) .layout__base ::slotted(reimagine-layout-column) {
      --ds-layout-column-amount: 6;
    }

    :host([configuration='3-col-offset-right'])
      .layout__base
      ::slotted(reimagine-layout-column:last-child) {
      --ds-layout-column-amount: 12;
    }

    :host([configuration='4-col-even-1']) .layout__base,
    :host([configuration='4-col-even-2']) .layout__base,
    :host([configuration='4-col-even-3']) .layout__base {
      --ds-layout-column-amount: 6;
    }

    :host([configuration='4-col-even-1'])
      .layout__base
      ::slotted(reimagine-layout-column.column-span-2),
    :host([configuration='4-col-even-2'])
      .layout__base
      ::slotted(reimagine-layout-column.column-span-2) {
      --ds-layout-column-amount: 12;
    }

    :host([configuration='5-col-even']) .layout__base {
      --ds-layout-column-amount: calc(var(--ds-grid-column-total) / 5);
    }

    :host([configuration='6-col-even']) .layout__base {
      --ds-layout-column-amount: 4;
    }

    :host([configuration='1-col-boxed-overflow']) .layout__base {
      --ds-layout-column-amount: 20;
    }

    :host([configuration='1-col-even-overflow']) .layout__base,
    :host([configuration='1-col-even-full-overflow']) .layout__base {
      --ds-layout-column-amount: 24;
    }

    :host([configuration='2-col-boxed-overflow']) .layout__base {
      --ds-layout-column-amount: 10;
    }

    :host([configuration='2-col-even-overflow']) .layout__base {
      --ds-layout-column-amount: 12;
    }

    :host([configuration='3-col-even-overflow']) .layout__base {
      --ds-layout-column-amount: 8;
    }

    :host([configuration='4-col-even-overflow']) .layout__base {
      --ds-layout-column-amount: 6;
    }

    :host([configuration='multi-card-overflow']) .layout__base {
      --ds-layout-column-amount: calc(var(--ds-grid-column-total) / 5);
    }

    /* Card overflow layouts - VP4 (lg, >=1440px)
       VP4: 24 columns, 16px gap
       1-card: 24 columns (full width) */
    :host([configuration='1-card']) .layout__base {
      --ds-layout-column-amount: 24;
    }

    /* 1-card-alt: 20 columns (~83% width) */
    :host([configuration='1-card-alt']) .layout__base {
      --ds-layout-column-amount: 20;
    }

    /* 2-card: 12 columns each (2 cards visible) */
    :host([configuration='2-card']) .layout__base {
      --ds-layout-column-amount: 12;
    }

    /* 2-card-alt: 10 columns each */
    :host([configuration='2-card-alt']) .layout__base {
      --ds-layout-column-amount: 10;
    }

    /* 3-card: 8 columns each (3 cards visible) */
    :host([configuration='3-card']) .layout__base {
      --ds-layout-column-amount: 8;
    }

    /* 4-card: 6 columns each (4 cards visible) */
    :host([configuration='4-card']) .layout__base {
      --ds-layout-column-amount: 6;
    }

    /* 5-card: ~4.8 columns each (5 cards visible) */
    :host([configuration='5-card']) .layout__base {
      --ds-layout-column-amount: calc(var(--ds-grid-column-total) / 5);
    }

    :host([density='comfortable']) .layout__base {
      --ds-layout-column-gap: var(--ds-app-space-micro-2xl);
      --ds-layout-columns-in-row: calc(
        var(--ds-grid-column-total) / var(--ds-layout-column-amount) - 1
      );
      --ds-grid-available-width: calc(
        100% - var(--ds-grid-column-gap-total) -
          (var(--ds-layout-column-gap) * (var(--ds-layout-columns-in-row))) +
          (var(--ds-grid-column-gap) * (var(--ds-layout-columns-in-row)))
      );
    }

    :host([density='comfortable'][configuration='2-col-even']) .layout__base,
    :host([density='comfortable'][configuration='2-col-offset-right']) .layout__base,
    :host([density='comfortable'][configuration='2-col-offset-left']) .layout__base,
    :host([density='comfortable'][configuration='2-col-sidebar']) .layout__base {
      --ds-layout-columns-in-row: calc(
        var(--ds-grid-column-total) / var(--ds-layout-column-amount)
      );
    }

    :host([density='relaxed']) .layout__base {
      --ds-layout-column-gap: var(--ds-app-space-layout-inset-vertical-comfortable, var(--ds-app-space-micro-4xl));
      --ds-layout-columns-in-row: calc(
        var(--ds-grid-column-total) / var(--ds-layout-column-amount) - 1
      );
      --ds-grid-available-width: calc(
        100% - var(--ds-grid-column-gap-total) -
          (var(--ds-layout-column-gap) * (var(--ds-layout-columns-in-row))) +
          (var(--ds-grid-column-gap) * (var(--ds-layout-columns-in-row)))
      );
    }

    :host([density='relaxed'][configuration='2-col-even']) .layout__base,
    :host([density='relaxed'][configuration='2-col-offset-right']) .layout__base,
    :host([density='relaxed'][configuration='2-col-offset-left']) .layout__base,
    :host([density='relaxed'][configuration='2-col-sidebar']) .layout__base {
      --ds-layout-columns-in-row: calc(
        var(--ds-grid-column-total) / var(--ds-layout-column-amount)
      );
    }
  }
`;var eo=Object.defineProperty,oo=Object.getOwnPropertyDescriptor,ao=(t,e,o,a)=>{for(var i,l=a>1?void 0:a?oo(e,o):e,n=t.length-1;n>=0;n--)(i=t[n])&&(l=(a?i(e,o,l):i(l))||l);return a&&l&&eo(e,o,l),l};const io="reimagine-layout";let lo=class extends ue{constructor(){super(...arguments),this.configuration=ze.col1even,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0}_renderOptionalSlot(t,e){return s`
      <div part=${t} class=${t} style="${e?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_handleSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length}_onScroll(){(this.configuration.includes("overflow")||this.configuration.includes("card"))&&this.dispatchEvent(new CustomEvent(Ae,{bubbles:!0,composed:!0}))}firstUpdated(){this.dispatchEvent(new CustomEvent(Pe,{bubbles:!0,composed:!0}))}render(){return s`
      ${this._renderOptionalSlot("layout__first",this._firstSlotEmpty)}
      <div
        class="layout__base"
        part="layout__base"
        tabindex="${d(this.overflowTabIndex)}"
        @scroll="${this._onScroll}"
      >
        <slot></slot>
      </div>
      ${this._renderOptionalSlot("layout__first",this._lastSlotEmpty)}
    `}};lo.styles=[Xe,to],ao([i({reflect:!0})],lo.prototype,"configuration",2),ao([i({reflect:!0})],lo.prototype,"density",2),ao([i({type:Number,reflect:!0,attribute:"overflow-tab-index"})],lo.prototype,"overflowTabIndex",2),ao([r({slot:"layout__first"})],lo.prototype,"_firstSlot",2),ao([r({slot:"layout__last"})],lo.prototype,"_lastSlot",2),ao([u()],lo.prototype,"_firstSlotEmpty",2),ao([u()],lo.prototype,"_lastSlotEmpty",2),lo=ao([c(io)],lo);var no=Object.defineProperty,so=Object.getOwnPropertyDescriptor,ro=(t,e,o,a)=>{for(var i,l=a>1?void 0:a?so(e,o):e,n=t.length-1;n>=0;n--)(i=t[n])&&(l=(a?i(e,o,l):i(l))||l);return a&&l&&no(e,o,l),l};const uo="reimagine-layout-column";let co=class extends ue{constructor(){super(...arguments),this._firstSlotEmpty=!0,this._lastSlotEmpty=!0}_handleSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length}_renderOptionalSlot(t,e){return s`
      <div part=${t} class=${t} style="${e?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}render(){return s`
      ${this._renderOptionalSlot("layout-column__first",this._firstSlotEmpty)}
      <slot></slot>
      ${this._renderOptionalSlot("layout-column__last",this._lastSlotEmpty)}
    `}};ro([i({type:String,reflect:!0,attribute:"column-span"})],co.prototype,"columnSpan",2),ro([r({slot:"layout-column__first"})],co.prototype,"_firstSlot",2),ro([r({slot:"layout-column__last"})],co.prototype,"_lastSlot",2),ro([u()],co.prototype,"_firstSlotEmpty",2),ro([u()],co.prototype,"_lastSlotEmpty",2),co=ro([c(uo)],co);const ho={light:"light",dark:"dark"},mo={inHeroHorizontal:"in-hero--horizontal",inHeroStacked:"in-hero--stacked"},fo="flex",yo="column",go="initial",bo="initial",po="initial",vo="initial",_o="none",So="relative",xo="0",$o="var(--ds-app-space-layout-inset-vertical-comfortable, 6rem)",wo="var(--ds-app-space-layout-inset-vertical-comfortable, 6rem)",ko={contentRowGap:"var(--ds-app-space-layout-stack-comfortable, 3rem)"},Oo="absolute",Eo="0",Co="0",zo="0",Bo="0",Ao="unset",Po="hidden",jo="-1",Ho="100%",Ro="inherit",Io="100%",Lo="inherit",Uo="0",To="0",Do="flex",Mo="0.5rem",Fo="nowrap",No="0",Wo="wrap",Go="center",Zo="var(--ds-app-space-micro-s, 0.75rem)",Vo="var(--ds-app-space-micro-s, 0.75rem)",Yo="var(--ds-app-space-micro-l, 1rem)",qo="var(--ds-app-space-micro-l, 1rem)",Jo="transparent",Ko="var(--ds-app-color-base-default-fg-body, var(--ds-color-brilliant-blue-800, #17253d))",Qo=t`
  :host {
    display: var(--ds-ui-shell-display, ${e(fo)});
    flex-direction: var(--ds-ui-shell-flex-direction, ${e(yo)});
    gap: var(--ds-ui-shell-gap, ${e(ko.contentRowGap)});
    padding-block-start: var(
      --ds-ui-shell-padding-block-start,
      ${e($o)}
    );
    padding-block-end: var(
      --ds-ui-shell-padding-block-end,
      ${e(wo)}
    );
    z-index: var(--ds-ui-shell-z-index, var(--ds-z-index-0, 0));
    position: var(--ds-ui-shell-position, ${e(So)});

    height: var(--ds-ui-shell-height, ${e(go)});
    min-height: var(--ds-ui-shell-min-height, ${e(vo)});
    max-height: var(--ds-ui-shell-max-height, ${e(_o)});
    justify-content: var(
      --ds-ui-shell-justify-content,
      ${e(bo)}
    );
    align-items: var(--ds-ui-shell-align-items, ${e(po)});
    padding-inline: var(--ds-ui-shell-padding-inline, ${e(xo)});
  }

  :host ::slotted([slot='ui-shell-breadcrumbs']) {
    align-items: var(
      --ds-ui-shell-breadcrumbs-align-items,
      ${e(Go)}
    );
    gap: var(--ds-ui-shell-breadcrumbs-gap, ${e(Mo)});
    white-space: var(
      --ds-ui-shell-breadcrumbs-white-space,
      ${e(Fo)}
    );
    margin-block-start: var(
      --ds-ui-shell-breadcrumbs-margin-block-start,
      ${e(No)}
    );
    display: var(
      --ds-ui-shell-breadcrumbs-display,
      ${e(Do)}
    );
    flex-wrap: var(
      --ds-ui-shell-breadcrumbs-flex-wrap,
      ${e(Wo)}
    );
    padding-block-start: var(
      --ds-ui-shell-breadcrumbs-padding-block-start,
      ${e(Zo)}
    );
    padding-block-end: var(
      --ds-ui-shell-breadcrumbs-padding-block-end,
      ${e(Vo)}
    );
    padding-inline-end: var(
      --ds-ui-shell-breadcrumbs-padding-inline-end,
      ${e(Yo)}
    );
    padding-inline-start: var(
      --ds-ui-shell-breadcrumbs-padding-inline-start,
      ${e(qo)}
    );
    background-color: var(
      --ds-ui-shell-breadcrumbs-background-color,
      ${e(Jo)}
    );
    color: var(--ds-ui-shell-breadcrumbs-color, ${e(Ko)});
  }

  .ui-shell-base {
    display: var(--ds-ui-shell-base-display, ${e(fo)});
    flex-direction: var(--ds-ui-shell-base-flex-direction, column);
    row-gap: var(--ds-ui-shell-content-row-gap, ${e(ko.contentRowGap)});
    width: 100%;
  }

  .ui-shell-media {
    --ds-media-display: var(--ds-ui-shell-media-display, block);
    --ds-media-width: var(--ds-ui-shell-media-width, 100%);
    --ds-media-height: var(--ds-ui-shell-media-height, 100%);
    --ds-media-object-fit: var(--ds-ui-shell-media-object-fit, cover);
    --ds-media-picture-height: var(--ds-media-height, 100%);
    --ds-media-asset-display: var(--ds-media-display, block);
    --ds-media-asset-width: var(--ds-media-width, 100%);
    --ds-media-asset-height: var(--ds-media-height, 100%);
    --ds-media-ump-height: 100%;

    position: var(
      --ds-ui-shell-background-position,
      ${e(Oo)}
    );
    top: var(--ds-ui-shell-background-top, ${e(Eo)});
    right: var(--ds-ui-shell-background-right, ${e(Co)});
    bottom: var(--ds-ui-shell-background-bottom, ${e(zo)});
    left: var(--ds-ui-shell-background-left, ${e(Bo)});
    z-index: var(--ds-ui-shell-background-z-index, var(--ds-z-index-n1, ${e(jo)}));
    height: var(--ds-ui-shell-background-height, ${e(Io)});

    padding-block-start: var(
      --ds-ui-shell-background-padding-block-start,
      ${e(Uo)}
    );
    padding-block-end: var(
      --ds-ui-shell-background-padding-block-end,
      ${e(To)}
    );
    overflow: var(
      --ds-ui-shell-background-overflow,
      ${e(Po)}
    );
    transform: var(
      --ds-ui-shell-background-transform,
      ${e(Ao)}
    );
    width: var(--ds-ui-shell-background-width, ${e(Ho)});
    max-width: var(
      --ds-ui-shell-background-max-width,
      ${e(Ro)}
    );
    max-height: var(
      --ds-ui-shell-background-max-height,
      ${e(Lo)}
    );
  }

  .ui-shell-footer {
    display: none;
  }

  .ui-shell-breadcrumbs-container:not([style*='display: none'])
    + .ui-shell-announcement-container {
    margin-block-start: var(--ds-ui-shell-announcement-margin-block-start, 0);
  }

  .ui-shell-announcement-container {
    margin-block-end: var(--ds-ui-shell-announcement-margin-block-end, 0);
  }

  ::slotted(reimagine-layout-column.ui-shell-header-button-column) {
    display: flex;
    justify-content: var(--ds-ui-shell-header-button-justify-content, flex-end);
  }

  :host([breadth='cozy']) {
    --ds-ui-shell-padding-block-start: var(--ds-app-space-layout-inset-vertical-cozy, 4.5rem);
    --ds-ui-shell-padding-block-end: var(--ds-app-space-layout-inset-vertical-cozy, 4.5rem);
  }

  :host([breadth='relaxed']) {
    --ds-ui-shell-padding-block-start: ${e($o)};
    --ds-ui-shell-padding-block-end: ${e(wo)};
  }

  :host([breadth='comfortable']) {
    --ds-ui-shell-padding-block-start: var(--ds-app-space-layout-inset-vertical-comfortable, 6rem);
    --ds-ui-shell-padding-block-end: var(--ds-app-space-layout-inset-vertical-comfortable, 6rem);
  }

  :host([breadth='compact']) {
    --ds-ui-shell-padding-block-start: var(--ds-app-space-layout-inset-vertical-compact, 3rem);
    --ds-ui-shell-padding-block-end: var(--ds-app-space-layout-inset-vertical-compact, 3rem);
  }

  :host([breadth='none']),
  :host([base-content]) {
    --ds-ui-shell-padding-block-start: 0;
    --ds-ui-shell-padding-block-end: 0;
  }

  :host([top-breadth='cozy']) {
    --ds-ui-shell-padding-block-start: var(--ds-app-space-layout-inset-vertical-cozy, 4.5rem);
  }

  :host([top-breadth='relaxed']) {
    --ds-ui-shell-padding-block-start: ${e($o)};
  }

  :host([top-breadth='comfortable']) {
    --ds-ui-shell-padding-block-start: var(
      --ds-top-breadth-vertical-comfortable,
      var(--ds-app-space-layout-inset-vertical-comfortable, 6rem)
    );
  }

  :host([top-breadth='compact']) {
    --ds-ui-shell-padding-block-start: var(
      --ds-top-breadth-vertical-compact,
      var(--ds-app-space-layout-inset-vertical-compact, 3rem)
    );
  }

  :host([top-breadth='none']) {
    --ds-ui-shell-padding-block-start: 0;
  }

  :host([bottom-breadth='cozy']) {
    --ds-ui-shell-padding-block-end: var(--ds-app-space-layout-inset-vertical-cozy, 4.5rem);
  }

  :host([bottom-breadth='relaxed']) {
    --ds-ui-shell-padding-block-end: ${e(wo)};
  }

  :host([bottom-breadth='comfortable']) {
    --ds-ui-shell-padding-block-end: var(
      --ds-bottom-breadth-vertical-comfortable,
      var(--ds-app-space-layout-inset-vertical-comfortable, 6rem)
    );
  }

  :host([bottom-breadth='compact']) {
    --ds-ui-shell-padding-block-end: var(
      --ds-bottom-breadth-vertical-compact,
      var(--ds-app-space-layout-inset-vertical-compact, 3rem)
    );
  }

  :host([bottom-breadth='none']) {
    --ds-ui-shell-padding-block-end: 0;
  }

  :host([density='roomy']) {
    --ds-ui-shell-content-row-gap: var(--ds-app-space-layout-stack-roomy, 4.5rem);
  }

  :host([density='comfortable']) {
    --ds-ui-shell-content-row-gap: var(--ds-app-space-layout-stack-comfortable, 3rem);
  }

  :host([density='cozy']),
  :host([density='compact']) {
    --ds-ui-shell-content-row-gap: var(--ds-app-space-layout-stack-cozy, 2rem);
  }

  :host([density='none']) {
    --ds-ui-shell-content-row-gap: 0;
  }
`,Xo=t`
  @media (max-width: ${e(_(g.md))}) {
    :host([media-orientation='mobile-hide']) .ui-shell-media {
      display: none;
    }
  }

  @media (min-width: ${e(g.md)}) {
    :host ::slotted([slot='ui-shell-breadcrumbs']) {
      --ds-ui-shell-breadcrumbs-padding-block-start: 0;
      --ds-ui-shell-breadcrumbs-padding-block-end: 0;
      --ds-ui-shell-breadcrumbs-padding-inline-start: 0;
      --ds-ui-shell-breadcrumbs-padding-inline-end: 0;
    }
  }

  @media (max-width: ${e(_(g.sm))}) {
    :host([media-orientation='mobile-stack']) .ui-shell-media ::slotted(reimagine-media) {
      --ds-media-asset-height: auto;

      min-height: var(--ds-ui-shell-media-min-height, 203px);
    }

    .ui-shell-footer {
      --ds-container-width: 100%;
      --ds-button-min-width: 100%;
    }

    :host([disable-header-button-clone]) .ui-shell-header {
      --ds-button-host-display: grid;
      --ds-button-width: 100%;
    }
  }

  @media (max-width: ${e(_(g.md))}) {
    :host([media-orientation='mobile-stack']) {
      --ds-ui-shell-background-position: relative;
      --ds-ui-shell-background-z-index: var(--ds-z-index-0, 0);
      --ds-ui-shell-flex-direction: column;
      --ds-ui-shell-padding-block-start: 0;
    }

    ::slotted(reimagine-layout-column.ui-shell-header-button-column) {
      --ds-ui-shell-header-button-justify-content: flex-start;
    }

    :host([media-orientation='mobile-stack']) .ui-shell-media ::slotted(reimagine-media) {
      --ds-media-display: flex;
      --ds-media-overlay-background: none;
    }

    :host(:not([disable-header-button-clone]))
      ::slotted(reimagine-layout-column.ui-shell-header-button-column) {
      display: none;
    }

    .ui-shell-footer {
      display: block;
    }
  }
`,ta={comfortable:"comfortable",cozy:"cozy",none:"none"},ea={cozy:"cozy"},oa={col1even:ze.col1even,col1boxed:ze.col1boxed,col1staged:ze.col1staged,col1focus:ze.col1focus,col2even:ze.col2even},aa={mobileStack:"mobile-stack"},ia={"size-3xl":"3xl","size-2xl":"2xl","size-xl":"xl","size-lg":"l","size-md":"m","size-sm":"s","size-xs":"xs"},la={center:"center",left:"left",left2Col:"left--2-col"},na={highlight:"highlight",highlightDoubleImage:"highlight--double-image",highlightGlass:"highlight--glass",highlightSolid:"highlight--solid"},sa={overlayAssetBottom1:"asset--bottom-1",overlayAssetBottom3:"asset--bottom-3",overlayBgFill:"bg--fill"},ra={ratio21to9:"21-9",ratio16to9:"16-9",ratio3to4:"3-4",ratio4to3:"4-3",ratio1to1:"1-1",ratio2to3:"2-3",ratioFluid:"fluid"},ua={s:"s",m:"m",l:"l"},da={cover:"cover"},ca={cover:"cover"},ha={inline:"inline"};var ma=Object.defineProperty,fa=(t,e,o,a)=>{for(var i,l=void 0,n=t.length-1;n>=0;n--)(i=t[n])&&(l=i(e,o,l)||l);return l&&ma(e,o,l),l};const ya="reimagine-button-group",ga="reimagine-button",ba=t=>{const e=class extends t{constructor(){super(...arguments),this.isBlade=!0,this.uiShellMediaSlotEmpty=!0,this.baseContent=!1,this.disableHeaderButtonClone=!1,this._uiShellBreadcrumbsSlotEmpty=!0,this._uiShellBaseSlotEmpty=!0,this._uiShellHeaderSlotEmpty=!0,this._uiShellAnnouncementSlotEmpty=!0}toggleDisplay(t){return t?"display: none;":""}handleUiShellBreadcrumbsSlotChange(){const t=this._uiShellBreadcrumbsSlot.filter(t=>t.nodeType===Node.ELEMENT_NODE);this._uiShellBreadcrumbsSlotEmpty=0===t.length,this._observeBreadcrumbsHeight()}handleUiShellAnnouncementSlotChange(){const t=this._uiShellAnnouncementSlot.filter(t=>t.nodeType===Node.ELEMENT_NODE);this._uiShellAnnouncementSlotEmpty=0===t.length,this._observeAnnouncementHeight(),!this._uiShellAnnouncementSlotEmpty&&t.forEach(t=>{const e=t;h(e,"reimagine-announcement")&&m(e,{configuration:mo.inHeroHorizontal})})}handleUiShellMediaSlotChange(){this.uiShellMediaSlotEmpty=0===this.uiShellMediaSlot.length,!this.uiShellMediaSlotEmpty&&(this.uiShellMedia=this.uiShellMediaSlot.find(t=>h(t,"reimagine-media")),this.uiShellMedia&&(this.mediaOverlay&&m(this.uiShellMedia,{overlay:this.mediaOverlay}),this.uiShellMedia.hasAttribute("video")&&m(this.uiShellMedia,{"video-fit":da.cover})))}handleUiShellBaseSlotChange(){if(this._uiShellBaseSlotEmpty=0===this._uiShellBaseSlot.length,this._uiShellBaseSlotEmpty)return;const t=this._uiShellBaseSlot.find(t=>h(t,"reimagine-tabs"));m(t,{"enable-base-container":""})}handleUiShellHeaderSlotChange(t){var e,o;if(this._uiShellHeaderSlotEmpty=0===this._uiShellHeaderSlot.length,this._uiShellHeaderSlotEmpty)return;const a=(null==(e=t.target)?void 0:e.assignedElements())||[];if(!this._uiShellHeaderSlotEmpty){const[t,...e]=a;if(this._uiShellHeaderHeadingBlock=f(t,"reimagine-heading-block"),this._uiShellHeaderHeadingBlock&&this.setHeaderHeadingBlockDefaults(this._uiShellHeaderHeadingBlock),e.length>0){const t=e[e.length-1];null==(o=null==t?void 0:t.classList)||o.add("ui-shell-header-button-column"),this._uiShellHeaderButton=f(t,ya)||f(t,ga)||void 0,this._uiShellHeaderButton&&(this.setHeaderButtonDefaults(this._uiShellHeaderButton),this.disableHeaderButtonClone||(this._uiShellFooterButton=this._uiShellHeaderButton.cloneNode(!0)))}2===a.length&&(this.headerLayoutConfiguration=this.headerLayoutConfiguration??oa.col2even)}}setHeaderHeadingBlockDefaults(t){m(t,{size:ia["size-md"]}),(this.headerLayoutConfiguration===oa.col1focus||this.headerLayoutConfiguration===oa.col1boxed||this.headerLayoutConfiguration===oa.col1staged)&&m(t,{alignment:la.center})}setHeaderButtonDefaults(t){h(t,ga)&&m(t,{shape:ve.rounded}),h(t,ya)&&m(Array.from(y(t,ga)),{shape:ve.rounded})}renderUiShellBreadcrumbs(){return s`
        <reimagine-container
          class="ui-shell-breadcrumbs-container"
          part="ui-shell-breadcrumbs-container"
          style="${this.toggleDisplay(this._uiShellBreadcrumbsSlotEmpty)}"
        >
          <reimagine-layout
            part="ui-shell-breadcrumbs"
            class="ui-shell-breadcrumbs"
            configuration="${ze.col1even}"
          >
            <reimagine-layout-column>
              <slot
                name="ui-shell-breadcrumbs"
                @slotchange="${this.handleUiShellBreadcrumbsSlotChange}"
              ></slot>
            </reimagine-layout-column>
          </reimagine-layout>
        </reimagine-container>
      `}renderUiShellAnnouncement(){return s`
        <reimagine-container
          class="ui-shell-announcement-container"
          part="ui-shell-announcement-container"
          style="${this.toggleDisplay(this._uiShellAnnouncementSlotEmpty)}"
        >
          <reimagine-layout
            part="ui-shell-announcement"
            class="ui-shell-announcement"
            configuration="${ze.col1even}"
          >
            <reimagine-layout-column>
              <slot
                name="ui-shell-announcement"
                @slotchange="${this.handleUiShellAnnouncementSlotChange}"
              ></slot>
            </reimagine-layout-column>
          </reimagine-layout>
        </reimagine-container>
      `}renderUiShellMediaSlot(){return s`
        <div
          part="ui-shell-media"
          class="ui-shell-media"
          style="${this.toggleDisplay(this.uiShellMediaSlotEmpty)}"
        >
          <slot name="ui-shell-media" @slotchange="${this.handleUiShellMediaSlotChange}"></slot>
        </div>
      `}renderUiShellHeader(){return s`
        <reimagine-container
          part="ui-shell-header"
          class="ui-shell-header"
          style="${this.toggleDisplay(this._uiShellHeaderSlotEmpty)}"
          ?full-width=${this.baseContent}
        >
          <reimagine-layout
            part="ui-shell-header-layout"
            class="ui-shell-header-layout"
            configuration="${d(this.headerLayoutConfiguration)}"
          >
            <slot name="ui-shell-header" @slotchange=${this.handleUiShellHeaderSlotChange}></slot>
          </reimagine-layout>
        </reimagine-container>
      `}renderUiShellBase(t,e=!1){return s`
        <div
          part="ui-shell-base"
          class="ui-shell-base"
          style="${e?this.toggleDisplay(this._uiShellBaseSlotEmpty):""}"
        >
          ${e?s`<slot @slotchange="${this.handleUiShellBaseSlotChange}"></slot>`:t}
        </div>
      `}renderUiShellFooter(){if(this._uiShellFooterButton)return s`
        <reimagine-container
          class="ui-shell-footer"
          part="ui-shell-footer"
          ?full-width=${this.baseContent}
        >
          <reimagine-layout class="ui-shell-footer-layout" part="ui-shell-footer-layout">
            <reimagine-layout-column>${this._uiShellFooterButton}</reimagine-layout-column>
          </reimagine-layout>
        </reimagine-container>
      `}renderUiShell(t){const e=s`
        ${this.renderUiShellBreadcrumbs()} ${this.renderUiShellAnnouncement()}
        ${this.renderUiShellMediaSlot()}
      `;return s`
        ${this.baseContent?"":e} ${this.renderUiShellHeader()}
        ${this.renderUiShellBase(t)} ${this.renderUiShellFooter()}
      `}updated(t){t.has("mediaOverlay")&&this.mediaOverlay&&m(this.uiShellMedia,{overlay:this.mediaOverlay}),t.has("headerLayoutConfiguration")&&this.headerLayoutConfiguration&&this._uiShellHeaderHeadingBlock&&this.setHeaderHeadingBlockDefaults(this._uiShellHeaderHeadingBlock)}disconnectedCallback(){var t,e;super.disconnectedCallback(),null==(t=this._breadcrumbsResizeObserver)||t.disconnect(),null==(e=this._announcementResizeObserver)||e.disconnect()}_observeBreadcrumbsHeight(){var t,e;if(null==(t=this._breadcrumbsResizeObserver)||t.disconnect(),this._uiShellBreadcrumbsSlotEmpty)return void this.style.setProperty("--ds-ui-shell-breadcrumbs-height","0px");const o=null==(e=this.shadowRoot)?void 0:e.querySelector(".ui-shell-breadcrumbs-container");o&&(this._breadcrumbsResizeObserver=new ResizeObserver(t=>{var e,o;for(const a of t){const t=(null==(o=null==(e=a.borderBoxSize)?void 0:e[0])?void 0:o.blockSize)??a.target.getBoundingClientRect().height;this.style.setProperty("--ds-ui-shell-breadcrumbs-height",`${t}px`)}}),this._breadcrumbsResizeObserver.observe(o))}_observeAnnouncementHeight(){var t,e;if(null==(t=this._announcementResizeObserver)||t.disconnect(),this._uiShellAnnouncementSlotEmpty)return void this.style.setProperty("--ds-ui-shell-announcement-height","0px");const o=null==(e=this.shadowRoot)?void 0:e.querySelector(".ui-shell-announcement-container");o&&(this._announcementResizeObserver=new ResizeObserver(t=>{var e,o;for(const a of t){const t=(null==(o=null==(e=a.borderBoxSize)?void 0:e[0])?void 0:o.blockSize)??a.target.getBoundingClientRect().height;this.style.setProperty("--ds-ui-shell-announcement-height",`${t}px`)}}),this._announcementResizeObserver.observe(o))}};e.styles=[t.styles??[],Qo,Xo];let o=e;return fa([i({reflect:!0,attribute:"background"})],o.prototype,"background"),fa([i({reflect:!0,attribute:"media-overlay"})],o.prototype,"mediaOverlay"),fa([i({reflect:!0})],o.prototype,"breadth"),fa([i({reflect:!0,attribute:"top-breadth"})],o.prototype,"topBreadth"),fa([i({reflect:!0,attribute:"bottom-breadth"})],o.prototype,"bottomBreadth"),fa([i({reflect:!0})],o.prototype,"density"),fa([i({reflect:!0,attribute:"horizontal-density"})],o.prototype,"horizontalDensity"),fa([i({reflect:!0,attribute:"header-layout-configuration"})],o.prototype,"headerLayoutConfiguration"),fa([i({reflect:!0,attribute:"media-orientation"})],o.prototype,"mediaOrientation"),fa([i({reflect:!0,type:Boolean,attribute:"is-blade"})],o.prototype,"isBlade"),fa([u()],o.prototype,"uiShellMedia"),fa([u()],o.prototype,"uiShellMediaSlotEmpty"),fa([r({slot:"ui-shell-media"})],o.prototype,"uiShellMediaSlot"),fa([i({type:Boolean,reflect:!0,attribute:"base-content"})],o.prototype,"baseContent"),fa([i({type:Boolean,reflect:!0,attribute:"disable-header-button-clone"})],o.prototype,"disableHeaderButtonClone"),fa([u()],o.prototype,"_uiShellHeaderButton"),fa([u()],o.prototype,"_uiShellHeaderHeadingBlock"),fa([u()],o.prototype,"_uiShellFooterButton"),fa([r({slot:"ui-shell-breadcrumbs"})],o.prototype,"_uiShellBreadcrumbsSlot"),fa([r({slot:"ui-shell-header"})],o.prototype,"_uiShellHeaderSlot"),fa([r({slot:"ui-shell-announcement"})],o.prototype,"_uiShellAnnouncementSlot"),fa([r()],o.prototype,"_uiShellBaseSlot"),fa([u()],o.prototype,"_uiShellBreadcrumbsSlotEmpty"),fa([u()],o.prototype,"_uiShellBaseSlotEmpty"),fa([u()],o.prototype,"_uiShellHeaderSlotEmpty"),fa([u()],o.prototype,"_uiShellAnnouncementSlotEmpty"),o};class pa extends(re(ge(ba(Jt)))){}export{Ee as $,Xt as A,pe as B,Ce as C,ea as D,ae as E,ge as F,P as G,ia as H,R as I,I as J,ca as K,lo as L,ra as M,H as N,j as O,mo as P,_e as Q,ue as R,Wt as S,ho as T,ta as U,ha as V,Se as W,Ct as X,ce as Y,de as Z,Jt as _,co as a,io as a0,pa as b,ze as c,ko as d,O as e,ua as f,na as g,la as h,be as i,ve as j,da as k,z as l,oa as m,uo as n,A as o,C as p,k as q,ie as r,Be as s,aa as t,sa as u,w as v,B as w,Ft as x,Dt as y,Mt as z};
