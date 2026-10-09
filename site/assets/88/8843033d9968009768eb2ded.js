import{i as e,r,e as a,c as i,g as s,b as t}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{R as d,g as o}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{q as n,b as l,s as c,a as p,d as h}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{b as g,v as u}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";const m=e`
  :host {
    display: grid;
    position: relative;
  }

  .card-group__media-bg {
    grid-area: 1 / 1;
    z-index: var(--ds-z-index-0, 0);
    width: 100%;
    height: 100%;
    position: relative;
    display: grid;
  }

  .card-group__media {
    display: grid;
    grid-area: var(--ds-card-group-media-grid-area, 1 / 1);

    --ds-media-box-sizing: border-box;
    --ds-media-display: grid;
    --ds-media-width: 100%;
  }

  .card-group__default-media {
    display: grid;
    grid-area: var(--ds-card-group-media-grid-area, 1 / 1);

    --ds-media-display: grid;
    --ds-media-width: 100%;
    --ds-media-box-sizing: border-box;
  }

  .card-group__row {
    grid-area: 1 / 1;
    z-index: var(--ds-z-index-10, 10);
    display: grid;
    justify-content: center;
    align-items: end;
    grid-auto-columns: 1fr; /* Each child takes equal width */
    gap: var(--ds-app-space-grid-default, 0.75rem);
    padding: var(--ds-app-space-micro-xl, 3rem);
    grid-auto-flow: column;
  }

  ::slotted([slot='card-group__card']) {
    height: auto;
  }
  ::slotted([slot='card-group__media']) {
    display: none;
  }
`,_=e`
  @media (max-width: ${r(g(u.md))}) {
    .card-group__media-bg {
      grid-area: auto;
      display: block;
      height: auto;
    }

    .card-group__media {
      grid-area: auto;
      display: block;
    }

    .card-group__row {
      grid-area: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--ds-app-space-grid-default, 0.75rem);
      padding: var(--ds-app-space-micro-s, 0.25rem);
      width: 100%;
    }

    ::slotted([slot='card-group__card']) {
      width: 100%;
    }
    :host {
      background: var(--ds-app-color-surface-solid-bg-default, --ds-color-off-white-50);
      border-radius: var(--ds-app-radii-l, 1.5rem);
    }
  }
`;var f=Object.defineProperty,b=Object.getOwnPropertyDescriptor,v=Object.getPrototypeOf,y=Reflect.get,w=(e,r,a,i)=>{for(var s,t=i>1?void 0:i?b(r,a):r,d=e.length-1;d>=0;d--)(s=e[d])&&(t=(i?s(r,a,t):s(t))||t);return i&&t&&f(r,a,t),t};const C="reimagine-card-group";let O=class extends d{constructor(){super(...arguments),this.hideImages=!1,this._cardResizeObserver=null,this._cardGroupResizeObserver=null,this._onCardOpen=e=>{const r=(this.cardSlotNodes||[]).filter(e=>e instanceof HTMLElement),a=e.target,i=a.getAttribute("for");r.forEach(e=>{if(e!==a){const r=n(e.shadowRoot,"reimagine-accordion-item");null==r||r.removeAttribute("open")}}),this._updateMediaVisibility(i)},this._allcardsClosed=()=>(this.cardSlotNodes||[]).filter(e=>e instanceof HTMLElement).every(e=>{const r=n(e.shadowRoot,"reimagine-accordion-item");return!(null!=r&&r.hasAttribute("open"))}),this._onCardClose=()=>{this._allcardsClosed()&&this._updateMediaVisibility(null)}}get cardMediaElements(){return l(this._assignedCardMedia,"reimagine-media")}get cardDefaultMediaElements(){return l(this._assignedCardDefaultMedia,"reimagine-media")}_setMediaAttributes(e){const r={type:o.highlightSolid};e.forEach(e=>{c(e,r)})}_updateMediaVisibility(e){const r=this.cardMediaElements||[],a=(this.cardDefaultMediaElements||[])[0];if(a)if(e){let i=!1;r.forEach(r=>{r.getAttribute("id")===e?(r.style.display="grid",i=!0):r.style.display="none"}),a.style.display=i?"none":"grid"}else a.style.display="grid",r.forEach(e=>{e.style.display="none"})}render(){return t`
      <div class="card-group__media-bg" style="${this.hideImages?"display:none;":""}">
        <slot
          name="card-group__media"
          class="card-group__media"
          part="card-group__media"
          @slotchange=${()=>this._setMediaAttributes(this.cardMediaElements)}
        ></slot>
        <slot
          name="card-group__default-media"
          class="card-group__default-media"
          part="card-group__default-media"
          @slotchange=${()=>this._setMediaAttributes(this.cardDefaultMediaElements)}
        ></slot>
        <div class="card-group__row">
          <slot name="card-group__card" part="card-group__card"></slot>
        </div>
      </div>
    `}_setupCardGroupResizeObserver(){this._cardGroupResizeObserver&&this._cardGroupResizeObserver.disconnect(),this._cardGroupResizeObserver=new ResizeObserver(()=>{this._updateCardGroupAfterResize(),this._removeOpenCloseListeners(),this._addOpenCloseListeners()}),this._cardGroupResizeObserver.observe(this)}_removeOpenCloseListeners(){const e=parseInt(u.md,10);window.innerWidth>e||(this.removeEventListener("card-badge-opened",this._onCardOpen),this.removeEventListener("card-badge-closed",this._onCardClose))}_addOpenCloseListeners(){const e=parseInt(u.md,10);window.innerWidth>e&&(this.addEventListener("card-badge-opened",this._onCardOpen),this.addEventListener("card-badge-closed",this._onCardClose))}async _updateCardGroupAfterResize(){const e=parseInt(u.md,10);if(window.innerWidth<e){const e=(this.cardSlotNodes||[]).filter(e=>e instanceof HTMLElement);await Promise.all(e.map(e=>e.updateComplete||Promise.resolve())),e.forEach(e=>{(p(e.shadowRoot,"reimagine-accordion-item")||[]).forEach(e=>{e.setAttribute("open","");const r=[];e.shadowRoot&&r.push(...Array.from(e.shadowRoot.querySelectorAll(".collapse__heading"))),r.forEach(e=>{e.style.display="none"})})})}window.innerWidth>=e&&this._allcardsClosed()&&this._updateMediaVisibility(null)}_observeCardHeights(e){this._cardResizeObserver&&this._cardResizeObserver.disconnect(),this._cardResizeObserver=new ResizeObserver(()=>{this._updateCardsMinHeight(e)}),e.forEach(e=>this._cardResizeObserver.observe(e)),this._updateCardsMinHeight(e)}_updateCardsMinHeight(e){const r=e.some(e=>e.hasAttribute("collapsible-content-open")),a=parseInt(u.md,10);if(r||window.innerWidth<=a)return;const i=e.map(e=>e.offsetHeight),s=Math.max(...i);e.forEach(e=>{e.style.minHeight=`${s}px`})}async firstUpdated(){const e=(this.cardSlotNodes||[]).filter(e=>e instanceof HTMLElement);this._observeCardHeights(e),this._setupCardGroupResizeObserver(),this._addOpenCloseListeners()}};var M,E,R;O.styles=[...(M=O,E=O,R="styles",y(v(M),R,E)||[]),m,_],w([a({slot:"card-group__card"})],O.prototype,"cardSlotNodes",2),w([i({type:Boolean,reflect:!0,attribute:"hide-images"})],O.prototype,"hideImages",2),w([s({slot:"card-group__media"})],O.prototype,"_assignedCardMedia",2),w([s({slot:"card-group__default-media"})],O.prototype,"_assignedCardDefaultMedia",2),O=w([h(C)],O);export{O as CardGroup,C as name};
