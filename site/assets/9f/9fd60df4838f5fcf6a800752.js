import{r as e,i as t,b as s,c as i,e as r,f as a,g as o}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{R as l}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{d as n}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{I as d}from"/__mirror/assets/597f3dbe3ef56339bfbefa4a";import{s as h}from"/__mirror/assets/579a4c6140e643b41d22eee8";import"/__mirror/assets/a6479ea808b36b42c5f26c81";const p="column",m="var(--ds-app-space-micro-m, 1rem)",c="flex",u="column",_="var(--ds-app-space-micro-s, 0.75rem)",y=t`
  :host {
    display: var(--ds-filter-list-display, ${e("flex")});
    flex-direction: var(
      --ds-filter-list-flex-direction,
      ${e(p)}
    );
    gap: var(--ds-filter-list-gap, ${e(m)});

    --ds-filter-list-display: flex;
    --ds-collapse-button-active-background-color: transparent;
    --ds-collapse-button-hover-background-color: transparent;
  }

  .item {
    display: var(--ds-filter-list-item-display, ${e(c)});
    flex-direction: var(
      --ds-filter-list-item-flex-direction,
      ${e(u)}
    );
    gap: var(--ds-filter-list-item-gap, ${e(_)});
  }

  .sr-only {
    ${h};
  }
`;var g=Object.defineProperty,f=Object.getOwnPropertyDescriptor,v=Object.getPrototypeOf,b=Reflect.get,x=(e,t,s,i)=>{for(var r,a=i>1?void 0:i?f(t,s):t,o=e.length-1;o>=0;o--)(r=e[o])&&(a=(i?r(t,s,a):r(a))||a);return i&&a&&g(t,s,a),a};const w="reimagine-filter-list";let I=class extends(d(l)){constructor(){super(...arguments),this.showAllText="Show All",this.showLessText="Show Less",this._eyebrowSlotEmpty=!0,this._expanded=!1,this._filterItemCount=0,this._screenReaderMessage="",this._itemContainerId=`${w}-items-${crypto.randomUUID().split("-")[0]}`}_renderOptionalSlot(e,t){return s`
      <div part=${e} class=${e} style="${t?"display: none;":""}">
        <slot name=${e} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_handleSlotChange(){this._eyebrowSlotEmpty=0===this._eyebrowSlot.length}_handleItemSlotChange(){this._updateFilterItemCount(),this._updateFilterItemsVisibility()}_announceToScreenReader(e){this._screenReaderMessage!==e&&(this._screenReaderMessage="",this._clearMessageTimeout&&clearTimeout(this._clearMessageTimeout),requestAnimationFrame(()=>{this._screenReaderMessage=e,this._clearMessageTimeout=setTimeout(()=>{this._screenReaderMessage="",this._clearMessageTimeout=void 0},3e3)}))}_handleShowHideList(e){e.preventDefault(),this._expanded=!this._expanded,this._updateFilterItemCount(),this._updateFilterItemsVisibility();const t=this._expanded?this._filterItemCount:Math.min(7,this._filterItemCount),s=this._expanded?this.msg("show-all-status",{count:this._filterItemCount}):this.msg("show-less-status",{visible:t,total:this._filterItemCount});this._announceToScreenReader(s)}_updateFilterItemsVisibility(){var e;null==(e=this._filterItems)||e.forEach((e,t)=>{e.style.display=this._expanded||t<7?"":"none"})}_updateFilterItemCount(){var e;this._filterItemCount=(null==(e=this._filterItems)?void 0:e.length)??0}disconnectedCallback(){this._clearMessageTimeout&&(clearTimeout(this._clearMessageTimeout),this._clearMessageTimeout=void 0),super.disconnectedCallback()}firstUpdated(){this._updateFilterItemsVisibility(),this._updateFilterItemCount()}render(){const e=this._expanded?this.showLessText:this.showAllText,t=this._filterItemCount>7;return s`
      ${this.firstSlotTemplate()} ${this._renderOptionalSlot("eyebrow",this._eyebrowSlotEmpty)}
      <div class="item" part="item" id="${this._itemContainerId}">
        <slot name="item" @slotchange="${this._handleItemSlotChange}"></slot>
      </div>
      ${t?s`
            <div class="button" part="button" @click="${this._handleShowHideList}">
              <reimagine-link>
                <button
                  type="button"
                  aria-expanded="${this._expanded}"
                  aria-controls="${this._itemContainerId}"
                >
                  ${e}
                </button>
              </reimagine-link>
            </div>
          `:""}
      <div aria-live="polite" aria-atomic="true" class="sr-only">${this._screenReaderMessage}</div>
      ${this.lastSlotTemplate()}
    `}};var $,S,C;I.styles=[...($=I,S=I,C="styles",b(v($),C,S)||[]),y],I.dict={"show-all-status":"Showing all {count} items","show-less-status":"Showing {visible} of {total} items"},x([i({type:String})],I.prototype,"showAllText",2),x([i({type:String})],I.prototype,"showLessText",2),x([r({slot:"eyebrow"})],I.prototype,"_eyebrowSlot",2),x([a()],I.prototype,"_eyebrowSlotEmpty",2),x([a()],I.prototype,"_expanded",2),x([a()],I.prototype,"_filterItemCount",2),x([a()],I.prototype,"_screenReaderMessage",2),x([o({slot:"item"})],I.prototype,"_filterItems",2),I=x([n(w)],I);export{I as FilterList,w as name};
