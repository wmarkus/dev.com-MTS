import{r as t,i as e,c as i,e as a,b as o}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{b as s,c as n,H as r}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{a as l,s as h,q as d,d as c}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{v as u,b as p}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{V as _,H as y}from"/__mirror/assets/6ad137053d5da8fc91d912f1";const m="var(--ds-app-space-micro-2xl, 3rem)",b="var(--ds-app-space-micro-m, 1rem)",g=e`
  :host,
  .base {
    display: flex;
    flex-direction: column;
    gap: var(--ds-media-text-stacked-gap, ${t("var(--ds-app-space-micro-2xl, 3rem)")});
  }

  ::part(layout__base) {
    --ds-layout-row-gap: ${t(m)};
    --ds-layout-column-gap: ${t(b)};
  }

  ::slotted([slot='actions']) {
    width: 100%;
  }

  :host {
    --ds-media-text-stack-media-height: 192px;
  }
`,v=e`
  @media (min-width: ${t(u.sm)}) and (max-width: ${t(p(u.md))}) {
    :host reimagine-layout.content[configuration='2-col-even']::part(layout__base),
    :host reimagine-layout.content[configuration='3-col-even']::part(layout__base) {
      --ds-grid-column-total: 12;
      --ds-layout-column-amount: 6;
      --ds-grid-column-gap: 1rem;
    }
  }
`;var L=Object.defineProperty,B=Object.getOwnPropertyDescriptor,w=Object.getPrototypeOf,f=Reflect.get,C=(t,e,i,a)=>{for(var o,s=a>1?void 0:a?B(e,i):e,n=t.length-1;n>=0;n--)(o=t[n])&&(s=(a?o(e,i,s):o(s))||s);return a&&s&&L(e,i,s),s};const O="reimagine-media-text-stacked";let R=class extends s{constructor(){super(),this._visibleRows=3,this._viewportObserver=new _(this,{callback:()=>this._handleViewportChange()}),this._boundHandleLoadMore=this._handleLoadMore.bind(this),this._boundHandleReset=this._handleReset.bind(this),this.disableHeaderButtonClone=!0}_handleViewportChange(){const t=this._viewportObserver.isSmall()||this._viewportObserver.isMedium(),e=this._viewportObserver.isLarge(),i=this._activeLayout||this.layout;!this._originalLayout&&this.layout&&(this._originalLayout=this.layout),!this._originalOrientation&&this.orientation&&(this._originalOrientation=this.orientation),t&&i!==n.col1boxed?(this._activeLayout=n.col2even,this._activeOrientation=y.vertical,this._updateVisibleContent(),this._updateChildrenOrientation()):e&&(this._activeLayout=this._originalLayout,this._activeOrientation=this._originalOrientation,this._updateVisibleContent(),this._updateChildrenOrientation())}_contentSlotChangeHandler(){this._updateVisibleContent(),this._updateHeadingBlockSize(),this._updateChildrenOrientation()}_updateChildrenOrientation(){const t=this._activeOrientation||this.orientation;t&&l(this,"reimagine-media-text-stack").forEach(e=>{h(e,{orientation:t},!0)})}_actionsSlotChangeHandler(){setTimeout(()=>{this._cacheButtonReferences(),this._attachLoadMoreListener(),this._updateResetButtonVisibility()})}_cacheButtonReferences(){if(!this._actionsSlotElements.length)return;const t=this._actionsSlotElements[0];this._primaryButton=d(t,"reimagine-button",'[appearance*="primary"]'),this._secondaryButton=d(t,"reimagine-button",'[appearance*="secondary"]')}_updateHeadingBlockSize(){const t=d(this,"reimagine-heading-block");t&&h(t,{size:r["size-md"]})}_handleLoadMore(){this._visibleRows+=this.rows||3,this._updateVisibleContent()}_handleReset(){this._visibleRows=this.rows||3,this._updateVisibleContent()}_getColumnsCount(){switch(this._activeLayout||this.layout){case n.col1boxed:return 1;case n.col3Even:return 3;default:return 2}}_updateVisibleContent(){const t=this.querySelectorAll('[slot="content"]'),e=this._getColumnsCount(),i=this._visibleRows*e;t.forEach((t,e)=>{const a=t;a.style.display=e<i?"":"none"}),this._togglePrimaryButtonVisibility(t.length>i),this._updateResetButtonVisibility()}_togglePrimaryButtonVisibility(t){this._primaryButton&&(this._primaryButton.style.display=t?"":"none")}_updateResetButtonVisibility(){if(!this._secondaryButton)return;const t=this.rows||3;this._secondaryButton.style.display=this._visibleRows>t?"":"none"}_attachLoadMoreListener(){this._primaryButton&&(this._primaryButton.removeEventListener("click",this._boundHandleLoadMore),!0===this.enableLoadMore&&this._primaryButton.addEventListener("click",this._boundHandleLoadMore)),this._secondaryButton&&(this._secondaryButton.removeEventListener("click",this._boundHandleReset),!0===this.enableLoadMore&&this._secondaryButton.addEventListener("click",this._boundHandleReset))}disconnectedCallback(){super.disconnectedCallback(),this._primaryButton&&this._primaryButton.removeEventListener("click",this._boundHandleLoadMore),this._secondaryButton&&this._secondaryButton.removeEventListener("click",this._boundHandleReset),this._primaryButton=null,this._secondaryButton=null}updated(t){super.updated(t),(t.has("rows")||t.has("layout"))&&(this._visibleRows=this.rows||3,this._updateVisibleContent()),t.has("enableLoadMore")&&this._attachLoadMoreListener(),t.has("orientation")&&this._updateChildrenOrientation()}_renderBlade(){const t="base",e=this._activeLayout||this.layout||n.col2even,i=o`
      <reimagine-layout configuration=${e} class="content" part="content">
        <slot name="content" @slotchange="${this._contentSlotChangeHandler}"></slot>
      </reimagine-layout>
      <reimagine-layout class="actions" part="actions">
        <slot name="actions" @slotchange="${this._actionsSlotChangeHandler}"></slot>
      </reimagine-layout>
    `;return this.baseContent?o` <div class=${t} part=${t}>${i}</div> `:o`
      <reimagine-container class=${t} part=${t}>
        ${i}
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var k,H,x;R.styles=[...(k=R,H=R,x="styles",f(w(k),x,H)||[]),g,v],C([i({reflect:!0,attribute:"layout"})],R.prototype,"layout",2),C([i({type:Number,reflect:!0,attribute:"rows"})],R.prototype,"rows",2),C([i({type:Boolean,reflect:!0,attribute:"enable-load-more"})],R.prototype,"enableLoadMore",2),C([i({reflect:!0})],R.prototype,"orientation",2),C([i({type:Number,attribute:!1})],R.prototype,"_visibleRows",2),C([i({type:String,attribute:!1})],R.prototype,"_activeLayout",2),C([i({type:String,attribute:!1})],R.prototype,"_activeOrientation",2),C([a({slot:"actions",flatten:!0})],R.prototype,"_actionsSlotElements",2),R=C([c(O)],R);export{R as MediaTextStacked,O as name};
