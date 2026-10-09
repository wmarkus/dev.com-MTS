import{b as e}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";
/**
 * Replacement for Lit's @customElement decorator
 *
 * Checks whether a custom element has already been registered
 * before attempting to register it.
 *
 * Source:
 * https://github.com/lit/lit/blob/main/packages/reactive-element/src/decorators/custom-element.ts
 *
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 * BSD 3-Clause License
 *
 * Copyright (c) 2017 Google LLC. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */const t=e=>(t,n)=>{const o=t,r=`${e}-v${"1.51.1".split(".")[0]}`,s=class extends o{};if(customElements.get(e)){const t=window.location.hostname;t&&-1===t.toLowerCase().indexOf("microsoft")&&console.warn(`${e} is already defined.`)}else void 0!==n?n.addInitializer(()=>{customElements.define(e,o)}):customElements.define(e,o);void 0!==n?n.addInitializer(()=>{customElements.get(r)||customElements.define(r,s)}):customElements.get(r)||customElements.define(r,s)},n=e=>{e.forEach(e=>{e.el.addEventListener(e.type,e.handler,e.options)})},o=e=>{e.forEach(e=>{e.el.removeEventListener(e.type,e.handler)})},r="transitionend",s=e=>{if(!e)return 0;let t=getComputedStyle(e).getPropertyValue("transition-duration"),n=getComputedStyle(e).getPropertyValue("transition-delay");const o=parseFloat(t),r=parseFloat(n);return o||r?(t=t.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(t)+parseFloat(n))):0},a=(e,t=0)=>{let n=!1;const o=t+5;e.addEventListener(r,function t(){n=!0,e.removeEventListener(r,t)}),setTimeout(()=>{n||(e=>{e.dispatchEvent(new Event(r))})(e)},o)},i=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches,l=["input:not([disabled])","select:not([disabled])","textarea:not([disabled])","a[href]","button:not([disabled])","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"reimagine-button:not([disabled])","reimagine-input:not([disabled])",'[tabindex]:not([tabindex^="-"]):not([disabled])'];function c(e,t="Assertion Failed!!"){if(!e)throw new Error(t)}const u=(e,t=null)=>{const n=getComputedStyle(e);if(!t)return e.offsetHeight;let o=e.offsetHeight;return t.cssSelectors.forEach(e=>{e.toLowerCase().includes("top")||e.toLowerCase().includes("bottom")?e&&(o+=parseInt(n.margin,10)):o+=parseInt(n.marginTop,10)+parseInt(n.marginBottom,10)}),o},f=(e=document)=>O(e,l),d=e=>{const{shadowRoot:t}=e;return t?O(t,l):[]},m="";e``;const p=/-v\d+$/,h=e=>e?"tagName"in e?e.tagName.toLowerCase().replace(p,""):e.nodeName.toLowerCase().replace(p,""):"",g=(e,t)=>h(e)===t.toLowerCase(),w=(e,t,n)=>h(e)===t&&(!n||e.matches(n));function E(e,t,n){if(!e)return null;const o=t.toLowerCase();for(const t of e.querySelectorAll("*"))if(w(t,o,n))return t;return null}function y(e,t,n){if(!e)return[];const o=t.toLowerCase();return Array.from(e.querySelectorAll("*")).filter(e=>w(e,o,n))}const A=(e,t,n)=>h(e)===t.toLowerCase()&&!0;function b(e,t,n){const o=t.toLowerCase();let r=e instanceof Element?e:null;for(;r;){if(w(r,o,n))return r;r=r.parentElement}return null}const v=(e,t)=>{if(!e)return[];const n=t.toLowerCase();return Array.from(e).filter(e=>h(e)===n)},C=e=>{const t=/^([a-z][\w-]*)/i.exec(e.trim());return t?t[1].toLowerCase():null},L=e=>{const t=[],n=[];for(const o of e){const e=o.trim();if(!e)continue;const r=C(e);null!=r&&r.startsWith("reimagine-")?t.push({base:r,rest:e.slice(r.length)}):n.push(e)}return{reimagine:t,native:n.join(",")}},S=(e,t)=>{if(t.native&&e.matches(t.native))return!0;if(t.reimagine.length>0){const n=h(e);for(const o of t.reimagine)if(o.base===n&&(""===o.rest||e.matches(`*${o.rest}`)))return!0}return!1},R=(e,t)=>S(e,L(t));function q(e,t){if(!e)return null;const n=L(t);if(0===n.reimagine.length)return n.native?e.querySelector(n.native):null;for(const t of e.querySelectorAll("*"))if(S(t,n))return t;return null}function O(e,t){if(!e)return[];const n=L(t);return 0===n.reimagine.length?n.native?Array.from(e.querySelectorAll(n.native)):[]:Array.from(e.querySelectorAll("*")).filter(e=>S(e,n))}const x=(e,t,n=!1)=>{const o=e.getRootNode();return o instanceof ShadowRoot?n?o.querySelectorAll(t):o.querySelector(t):n?document.querySelectorAll(t):document.querySelector(t)},T=e=>e.offsetHeight;function $(e,t){return Object.keys(e).find(n=>e[n]===t)}const N=e=>{const{hostname:t}=new URL(e);return t.includes("localhost")||t.includes("sites-author")||t.includes("chromatic")||t.includes("onecloud-wc")||t.includes("reimagineui")};function F(e,t,n=100){null==t||t.preventDefault();const o=e.getBoundingClientRect();window.scrollBy({top:o.top>0?o.top+n:o.top-n,behavior:"smooth"}),e.focus({preventScroll:!0})}function H(e,t,n){return`${n}-${e}-${t}`}function I(e,t,n=!1){if(e&&t)if(Array.isArray(e)){if(0===e.length)return;e.forEach(e=>{W(e,t,n)})}else W(e,t,n)}function W(e,t,n=!1){if(e&&t)for(const o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n||!e.hasAttribute(o))&&e.setAttribute(o,t[o])}function j(e,t){!e||!t||(Array.isArray(e)?e.forEach(e=>{e&&t.forEach(t=>e.removeAttribute(t))}):t.forEach(t=>e.removeAttribute(t)))}const B={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:" ",TAB:"Tab"};export{a as A,h as B,c as C,N as D,r as T,y as a,v as b,b as c,t as d,n as e,o as f,x as g,T as h,g as i,F as j,$ as k,R as l,A as m,q as n,m as o,H as p,E as q,j as r,I as s,B as t,f as u,d as v,i as w,l as x,u as y,s as z};
