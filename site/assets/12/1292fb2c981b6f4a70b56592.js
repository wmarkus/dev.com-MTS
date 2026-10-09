import{r as e,i as t,e as r,k as s,c as i,o as a,b as n}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{R as o,i as d,j as l,B as c}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{s as m,i as b,q as u,d as p}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{o as h}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{v as g}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{n as v,a as k}from"/__mirror/assets/34233ee5ac8acdb3aa831b25";import{n as _}from"/__mirror/assets/5d2e1bf3d87581457a2b76db";import{n as f}from"/__mirror/assets/a6479ea808b36b42c5f26c81";const x={gap:"var(--ds-app-space-micro-2xs, 0.25rem)",textDecoration:"none",fontWeight:h.fontWeight,backgroundColor:"var(--ds-app-color-base-default-bg-opt1, #f4fafd)",paddingInline:"var(--ds-app-space-micro-l, 1rem)",paddingBlock:"var(--ds-app-space-micro-s, 0.75rem)",borderBottom:"1px solid var(--ds-app-color-base-default-border-subtle, #cbe6f4)",paddingBlockCollapse:"var(--ds-app-space-micro-2xs, 0.25rem)",minHeight:"var(--ds-app-space-micro-xl, 2rem)",itemMinHeight:"var(--ds-app-space-micro-xl, 2rem)",itemGap:"var(--ds-app-space-micro-2xs, 0.25rem)",listPaddingBlockEnd:"var(--ds-app-space-micro-3xs, 0.25rem)",iconColor:"var(--ds-app-color-base-default-fg-accent, #0078d4)",iconDisplay:"none",lastLinkColor:"var(--ds-app-color-base-default-fg-body, #3a4c56)"},B=t`
  :host {
    --ds-icon-color: var(--ds-breadcrumbs-icon-color, ${e(x.iconColor)});
    background-color: var(
      --ds-breadcrumbs-background-color,
      ${e(x.backgroundColor)}
    );
    padding-inline: var(
      --ds-breadcrumbs-padding-inline,
      ${e(x.paddingInline)}
    );
    padding-block: var(--ds-breadcrumbs-padding-block, ${e(x.paddingBlock)});
    border-bottom: var(--ds-breadcrumbs-border-bottom, ${e(x.borderBottom)});
    display: flex;
  }

  .breadcrumbs-list {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    min-height: var(--ds-breadcrumbs-height, ${e(x.minHeight)});
    gap: var(--ds-breadcrumbs-gap, ${e(x.gap)});
    padding: 0;
    margin: 0;
    padding-block-end: var(--ds-breadcrumbs-list-padding-block-end, ${e(x.listPaddingBlockEnd)});
  }

  ::slotted(li) {
    display: flex;
    align-items: center;
    gap: var(--ds-breadcrumbs-item-gap, ${e(x.itemGap)});
    min-height: var(--ds-breadcrumbs-item-min-height, ${e(x.itemMinHeight)});
  }

  li.breadcrumbs-hidden,
  ::slotted(li.breadcrumbs-hidden) {
    display: none;
  }

  :host ::slotted(li:last-child) {
    --ds-link-font-weight: var(
      --ds-breadcrumbs-font-weight,
      ${e(x.fontWeight)}
    );
    --ds-link-text-decoration: var(
      --ds-breadcrumbs-text-decoration,
      ${e(x.textDecoration)}
    );
    --ds-icon-display: var(
      --ds-breadcrumbs-icon-display,
      ${e(x.iconDisplay)}
    );
    --ds-link-color: var(
      --ds-breadcrumbs-last-link-color,
      ${e(x.lastLinkColor)}
    );

    /* Current-page item is presentational text (per Figma): disable pointer
       interactions so the last breadcrumb reads as plain text, not a link.
       reimagine-link's inner anchor re-declares pointer-events and cursor
       via --ds-link-pointer-events and --ds-link-cursor, so we must override
       those custom properties (a plain pointer-events: none on the li gets
       reset back to auto inside the link's shadow root). */
    --ds-link-cursor: default;
    --ds-link-pointer-events: none;
    cursor: default;
    pointer-events: none;
  }

  :host([collapsed]) {
    --ds-breadcrumbs-padding-block: var(
      --ds-breadcrumbs-padding-block-collapse,
      ${e(x.paddingBlockCollapse)}
    );
  }
`,L=t`
  @media (min-width: ${e(g.md)}) {
    :host {
      --ds-breadcrumbs-background-color: transparent;
      --ds-breadcrumbs-border-bottom: none;
      --ds-breadcrumbs-padding-inline: 0;
      --ds-breadcrumbs-padding-block: 0;

      height: auto;
      padding-inline: 0;
      padding-block: 0;
    }
    .breadcrumbs-list {
      padding-block-end: 0;
    }
  }
`,C=2,y=2;var $=Object.defineProperty,P=Object.getOwnPropertyDescriptor,E=Object.getPrototypeOf,w=Reflect.get,A=(e,t,r,s)=>{for(var i,a=s>1?void 0:s?P(t,r):t,n=e.length-1;n>=0;n--)(i=e[n])&&(a=(s?i(t,r,a):i(a))||a);return s&&a&&$(t,r,a),a};const I="reimagine-breadcrumbs",j="breadcrumbs-hidden";let S=class extends o{constructor(){super(...arguments),this.breadcrumbsLabel="breadcrumbs",this.showAllBreadcrumbsText="Show All Breadcrumbs",this._breadcrumbItems=[],this._handleShowAllBreadcrumbs=()=>{var e,t,r,s;this._breadcrumbItems.forEach(e=>e.classList.remove(j)),null==(e=this._expandButtonElement)||e.classList.add(j);const i=null==(s=null==(r=null==(t=this._breadcrumbItems[1])?void 0:t.firstElementChild)?void 0:r.shadowRoot)?void 0:s.firstElementChild;null==i||i.focus(),this.removeAttribute("collapsed")},this._setExpandClick=()=>{var e;this._reimagineButton&&(null==(e=this._reimagineButton)||e.removeEventListener("click",this._handleShowAllBreadcrumbs),this._reimagineButton.addEventListener("click",this._handleShowAllBreadcrumbs))}}_onCurrentPageClick(e){e.preventDefault()}_resetCurrentPageLink(e){e&&(e.removeEventListener("click",this._onCurrentPageClick),e.removeAttribute("aria-current"),e.removeAttribute("aria-disabled"),e.removeAttribute("tabindex"))}_setUpCollapsedView(){const{_breadcrumbItems:e,_expandButtonElement:t}=this;e.forEach((t,r)=>{r>0&&r<e.length-2?t.classList.add(j):t.classList.remove(j)}),null==t||t.classList.remove(j),this._setExpandClick(),this.setAttribute("collapsed","")}_updateIconDirection(e){"rtl"===this.dir?m(e,{icon:"chevron-left"}):m(e,{icon:"chevron-right"})}_getBreadcrumbElements(e){const t=[];for(const r of e)if(r instanceof HTMLElement&&"li"===r.tagName.toLowerCase()){t.push(r);for(const e of r.children)b(e,v)&&this._updateIconDirection(e)}return t}_rebuildBreadcrumbItems(){this._breadcrumbItems=[...this._getBreadcrumbElements(this._firstItemSlotNodes),...this._getBreadcrumbElements(this._defaultSlotNodes)]}_updateBreadcrumbsVisibility(){var e;this._rebuildBreadcrumbItems(),this._reimagineButton=u(this._expandButtonElement,_)??void 0;const t=this._breadcrumbItems.length,r=Math.max(0,t-1),s=u(this._breadcrumbItems.at(-1),f)??void 0;this._currentPageLink&&this._currentPageLink!==s&&this._resetCurrentPageLink(this._currentPageLink),this._currentPageLink=s,this._currentPageLink&&(this._currentPageLink.removeEventListener("click",this._onCurrentPageClick),this._currentPageLink.addEventListener("click",this._onCurrentPageClick),this._currentPageLink.setAttribute("aria-current","page"),this._currentPageLink.setAttribute("aria-disabled","true"),this._currentPageLink.setAttribute("tabindex","-1")),this.style.removeProperty("display"),t<C?this.style.display="none":r>y?this._setUpCollapsedView():(this._breadcrumbItems.forEach(e=>e.classList.remove(j)),null==(e=this._expandButtonElement)||e.classList.add(j),this.removeAttribute("collapsed"))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.isConnected&&this._updateBreadcrumbsVisibility()})}disconnectedCallback(){var e;super.disconnectedCallback(),this._resetCurrentPageLink(this._currentPageLink),this._currentPageLink=void 0,null==(e=this._reimagineButton)||e.removeEventListener("click",this._handleShowAllBreadcrumbs),this._reimagineButton=void 0}render(){return n`
      <div class="breadcrumbs" part="breadcrumbs">
        <nav aria-label=${a(this.breadcrumbsLabel)}>
          <ol class="breadcrumbs-list" part="breadcrumbs-list">
            <slot name="first-item" @slotchange=${this._updateBreadcrumbsVisibility}></slot>
            <li class="expand-button">
              <reimagine-button
                icon-only
                appearance="${d.buttonGhost}"
                shape="${l.rounded}"
                size="${c.small}"
              >
                <reimagine-icon
                  icon="more-horizontal"
                  slot="button__icon"
                  size="${k.small}"
                ></reimagine-icon>
                <span slot="button__text">${this.showAllBreadcrumbsText}</span>
              </reimagine-button>
              <reimagine-icon
                icon="chevron-${"rtl"===this.dir?"left":"right"}"
                size="${k.small}"
              ></reimagine-icon>
            </li>
            <slot @slotchange=${this._updateBreadcrumbsVisibility}></slot>
          </ol>
        </nav>
      </div>
    `}};var D,V,H;S.styles=[...(D=S,V=S,H="styles",w(E(D),H,V)||[]),B,L],A([r()],S.prototype,"_defaultSlotNodes",2),A([r({slot:"first-item"})],S.prototype,"_firstItemSlotNodes",2),A([s(".expand-button")],S.prototype,"_expandButtonElement",2),A([i({attribute:"breadcrumbs-label"})],S.prototype,"breadcrumbsLabel",2),A([i({type:String,reflect:!0,attribute:"show-all-breadcrumbs-text"})],S.prototype,"showAllBreadcrumbsText",2),S=A([p(I)],S);export{S as Breadcrumbs,I as name};
