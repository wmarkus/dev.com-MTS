import{r as e,i as t,f as i,q as r,c as s,b as a,A as n,p as o,o as l}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{b as c,c as d,M as h}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{a as p,q as u,i as g,d as m}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{q as b,o as f,V as v}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{s as _}from"/__mirror/assets/579a4c6140e643b41d22eee8";import{b as y,v as x}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{b as k,i as w,j as $}from"/__mirror/assets/4230c2711e37b2e85105da0e";import"/__mirror/assets/674e87e1db3168cb538c091d";import"/__mirror/assets/c180aa30a3b15984764facc1";import"/__mirror/assets/c55634b5c47498bb74d55729";import"/__mirror/assets/678beb0b3a257198c3c5e545";import"/__mirror/assets/1744c47504083b26d862e98f";import"/__mirror/assets/6bb79ec1ff52647184ef326a";import"/__mirror/assets/39f1ed08dc709b5515b4ed55";import"/__mirror/assets/fbedc03652b4241adb7efb38";import"/__mirror/assets/a58177e8a2d05ab042fe96d3";import"/__mirror/assets/763f046c6b4a1cf58ece6dcc";import"/__mirror/assets/9fd60df4838f5fcf6a800752";import"/__mirror/assets/1376567b2b82d941066974ae";import"/__mirror/assets/a6c6f415f3fcc13d76b9625a";import"/__mirror/assets/cccbf194968ca6234f09b1b8";import"/__mirror/assets/b261b011546c5001df09e043";import"/__mirror/assets/bf0b3498e45fc20534cec8b1";import"/__mirror/assets/8211e5b454c0493e54031c58";const S={newestOldest:{key:"newest-oldest",label:"Newest to Oldest",order:"desc"},oldestNewest:{key:"oldest-newest",label:"Oldest to Newest",order:"asc"}},C={cardImgHeight:443,cardImgWidth:786,cardImgQuality:75,cardImgFit:"constrain"},P=[S.newestOldest,S.oldestNewest];var E=(e=>(e.default="default",e.dynamic="dynamic",e))(E||{});const L={sortByText:"Sort by",filterLabel:"Filter",filteredByLabel:"Filtered by",filteredResultsLabel:"Filtered results",clearAll:"Clear All",clearAllStatus:"All filters cleared",filterSelectedStatus:"{filter} selected",filterRemovedStatus:"{filter} removed",resultsStatus:"Showing {count} results",searchHeading:"Search",searchInputLabel:"Search Product",searchInputPlaceholder:"Search for keyword or product name...",eyebrow:"Eyebrow",paginationAriaLabel:"Pagination Customers",noResults:"No results found.",stories:"stories",allResults:"All Results",cardActionText:"Learn More",removePillAriaLabel:", press Enter to remove this filter",filtersModalTitle:"Filters",applyFiltersButton:"Apply filters",filtersButtonText:"Filters",defaultSortDirection:"desc",defaultActionLinkText:"Learn More",defaultImageAltText:"placeholder text",defaultLinkFallback:"#"},j="input-search",A="filter-checkbox-",R={month:"short",day:"numeric"},O={month:"short",day:"numeric",year:"numeric"},T="filters",F="page",B="sortBy",D="q",M={activePills:"_activePills",currentPage:"_currentPage",selectedSortBy:"_selectedSortOption",dataObj:"dataObj"},H={searchResultHeaderFontWeight:b.fontWeight,searchResultHeaderFontSize:b.fontSize,searchResultHeaderLineHeight:b.lineHeight},q={FontSize:f.fontSize,LineHeight:f.lineHeight,FontWeight:f.fontWeight,LetterSpacing:f.letterSpacing},z="flex",I="column",K="var(--ds-app-space-micro-xs, 0.5rem)",V="var(--ds-app-color-base-default-bg-opt3, #fefefe)",W="var(--ds-app-radii-m, 0.5rem)",U="var(--ds-app-space-micro-xs, 0.5rem)",N="var(--ds-elevation-level-2)",Y="flex",Q="space-between",G="flex-start",J="63px",X="relative",Z="flex",ee="row",te="var(--ds-app-space-micro-xl, 2rem)",ie="328px",re="flex-end",se="absolute",ae="0",ne="var(--ds-app-space-layout-inset-vertical-comfortable)",oe="var(--ds-app-space-micro-xl, 2rem)",le="var(--ds-app-color-base-special-bg-opt2-left)",ce="center",de="var(--ds-search-results-pagination-margin, 1.5rem)",he="var(--ds-app-space-micro-xs, 0.5rem)",pe="var(--ds-app-space-micro-xs, 0.5rem)",ue=t`
  :host {
    --ds-surface-box-shadow: var(--ds-elevation-level-2);
    --ds-modal-body-align-items: baseline;
    --ds-modal-background-color: white;
    --ds-text-block-eyebrow-date-margin-bottom: 0 !important;
    --ds-card-feature-top-flex: 0;
    --ds-button-width: 100%;
  }

  .search-result-header {
    display: flex;
    align-items: center;
    gap: var(--ds-app-space-micro-xs, 0.5rem);
    height: var(--ds-search-results-header-height, 28px);
    margin-bottom: var(--ds-search-results-header-padding-bottom, 1.75rem);
    margin-top: 8px;
  }

  .search-result-header h2 {
    font-weight: var(
      --search-result-header-font-weight,
      ${e(H.searchResultHeaderFontWeight)}
    );
    font-size: var(
      --search-result-header-font-size,
      ${e(H.searchResultHeaderFontSize)}
    );
    line-height: var(
      --search-result-header-line-height,
      ${e(H.searchResultHeaderLineHeight)}
    );
    color: var(--ds-app-color-base-default-fg-heading, #0e1726);
    margin: 0;
  }

  .search-result-header p,
  .filter-label,
  .sort-label {
    font-size: var(--ds-search-results-font-size, ${e(q.FontSize)});
    line-height: var(
      --ds-search-results-line-height,
      ${e(q.LineHeight)}
    );
    font-weight: var(
      --ds-search-results-font-weight,
      ${e(q.FontWeight)}
    );
    letter-spacing: var(
      --ds-search-results-letter-spacing,
      ${e(q.LetterSpacing)}
    );
    color: var(--ds-app-color-base-default-fg-body, #17253d);
  }

  .filter-label {
    white-space: nowrap;
  }

  .search-result-header p {
    margin: 0;
  }

  .sort-by {
    margin-block-end: var(--ds-app-space-micro-l, 1.5rem);
  }

  /* Hide sort-by dropdown when hide-sort-by-dropdown attribute is present */
  :host([hide-sort-by-dropdown]) .sort-by,
  :host([hide-sort-by-dropdown]) .mobile-sort-dropdown {
    display: none !important;
  }

  /* Hide eyebrow date when hide-card-eyebrow-date attribute is present */
  :host([hide-card-eyebrow-date]) span[slot='text-block__eyebrow-date'] {
    display: none !important;
  }

  /* Hide paragraph when hide-card-paragraph attribute is present */
  :host([hide-card-paragraph]) p[slot='text-block__content'] {
    display: none !important;
  }

  /* Remove margin from eyebrow label when render-card-eyebrow-without-link attribute is present */
  :host([render-card-eyebrow-without-link]) span[slot='text-block__eyebrow-label'] {
    margin: 0;
  }

  .filter-section {
    position: var(
      --ds-search-results-filter-section-position,
      ${e(X)}
    );

    display: var(
      --ds-search-results-filter-section-display,
      ${e(Y)}
    );
    justify-content: var(
      --ds-search-results-filter-section-justify-content,
      ${e(Q)}
    );
    align-items: var(
      --ds-search-results-filter-section-align-items,
      ${e(G)}
    );
    min-height: var(
      --ds-search-results-filter-section-min-height,
      ${e(J)}
    );
  }

  .filter-section-right {
    display: var(
      --ds-search-results-filter-section-right-display,
      ${e(Z)}
    );
    flex-direction: var(
      --ds-search-results-filter-section-right-flex-direction,
      ${e(ee)}
    );
    gap: var(
      --ds-search-results-filter-section-right-gap,
      ${e(te)}
    );
    min-width: var(
      --ds-search-results-filter-section-right-min-width,
      ${e(ie)}
    );
    justify-content: var(
      --ds-search-results-filter-section-right-justify-content,
      ${e(re)}
    );

    position: var(
      --ds-search-results-filter-section-right-position,
      ${e(se)}
    );
    right: var(
      --ds-search-results-filter-section-right-right,
      ${e(ae)}
    );
  }

  .filter-section-left,
  .filter-pills-bar,
  .sort-by {
    display: flex;
    align-items: center;
    gap: var(--ds-app-space-micro-s, 0.75rem);
  }

  .all-results-heading {
    margin: 0;
    text-align: start;
    font-size: var(--ds-app-type-heading-xs-font-size, 1.5rem);
    font-weight: var(--ds-app-type-heading-xs-font-weight, 500);
    line-height: var(--ds-app-type-heading-xs-line-height, 1.3);
    color: var(--ds-app-color-base-default-fg-heading, #0e1726);
    margin-block-end: var(--ds-app-space-micro-xl, 1.75rem);
  }

  .filter-pills-bar {
    align-items: baseline;
  }

  .search-section {
    padding-block: var(
      --ds-search-section-padding-block,
      ${e(ne)}
    );
    padding-inline: var(
      --ds-search-section-padding-inline,
      ${e(oe)}
    );
    background: var(
      --ds-search-section-background,
      ${e(le)}
    );
  }

  reimagine-search {
    max-width: 616px;
    display: block;
  }

  reimagine-pagination {
    justify-content: var(
      --ds-search-reimagine-pagination-justify-content,
      ${e(ce)}
    );
    margin-block-start: var(
      --ds-search-reimagine-pagination-margin-block-start,
      ${e(de)}
    );
  }

  reimagine-pill {
    margin-inline-end: var(
      --ds-search-reimagine-pill-margin-inline-end,
      ${e(he)}
    );
    margin-block-end: var(
      --ds-search-reimagine-pill-margin-block-end,
      ${e(pe)}
    );
  }

  .base {
    display: flex;
    flex-direction: column;
    gap: var(--ds-app-space-micro-4xl, 6rem);
  }

  .left-filter {
    display: var(
      --ds-search-results-left-filter-display,
      ${e(z)}
    );
    flex-direction: var(
      --ds-search-results-left-filter-flex-direction,
      ${e(I)}
    );
    gap: var(--ds-search-results-left-filter-gap, ${e(K)});
    background-color: var(
      --ds-search-results-left-filter-background-color,
      ${e(V)}
    );
    border-radius: var(
      --ds-search-results-left-filter-border-radius,
      ${e(W)}
    );
    padding: var(
      --ds-search-results-left-filter-padding,
      ${e(U)}
    );
    box-shadow: var(
      --ds-search-results-left-filter-box-shadow,
      ${e(N)}
    );
  }

  /* Reset default heading styles so the h3 → a11y change is purely semantic */
  reimagine-accordion-item h3[slot='collapse__title'] {
    margin: 0;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }

  reimagine-filter-list {
    margin-block-start: var(--ds-app-space-micro-xl, 2rem);
  }
  reimagine-accordion {
    width: 100%;
  }

  .clear-all-button {
    margin-block-start: var(--ds-app-space-micro-xs, 0.5rem);
  }

  .clear-all-button reimagine-link {
    margin-block-start: 0;
  }

  :host([theme='dark']) reimagine-accordion-item {
    --ds-collapse-button-background-color: var(--ds-app-color-base-default-bg-opt1);
  }

  reimagine-dropdown-trigger {
    width: 100%;
  }

  reimagine-modal,
  reimagine-link {
    --ds-button-width: auto;
  }

  /* For dynamic configuration, make filter-pills scrollable */
  :host([configuration='dynamic']) .filter-pills {
    max-height: 14.5rem;
    overflow-y: auto;
  }

  .sr-only {
    ${_};
  }
`,ge=t`
  @media (max-width: ${e(y(x.md))}) {
    .sort-label {
      display: none;
    }

    .left-filter {
      --ds-search-results-left-filter-background-color: transparent;
    }

    .all-results-heading {
      margin-block-start: var(--ds-app-space-micro-s, 0.75rem);
    }

    /* Ensure all scrollable content in modal view is accessible */
    reimagine-accordion {
      padding-bottom: 80px;
    }
  }

  @media (min-width: ${e(y(x.md))}) {
    .filter-section-right {
      position: initial;
    }

    .filter-section {
      position: initial;
      min-height: 0;
    }
  }

  @media (max-width: ${e(y(x.lg))}) {
    .filter-pills-bar {
      display: block;
    }

    .filter-section-right {
      display: block;
      min-width: 235px;
    }

    .clear-all-button {
      text-align: right;
      margin-block-end: 1.25rem;
      margin-block-start: 0;
    }

    .sort-by {
      justify-content: flex-end;
      margin-block-end: 0.313rem;
    }
    .filter-label {
      margin-block-end: 1.25rem;
      margin-block-start: 0.313rem;
      display: block;
    }

    :host(:not([configuration='dynamic'])) .search-result-header {
      margin-block-end: var(--ds-app-space-micro-m, 1rem);
      margin-block-start: 0;
    }
  }

  @media (min-width: ${e(x.lg)}) {
    .all-results-heading {
      margin-block-end: var(--ds-app-space-micro-xl, 2rem);
    }
  }
`;var me=Object.defineProperty,be=Object.getOwnPropertyDescriptor,fe=Object.getPrototypeOf,ve=Reflect.get,_e=(e,t,i,r)=>{for(var s,a=r>1?void 0:r?be(t,i):t,n=e.length-1;n>=0;n--)(s=e[n])&&(a=(r?s(t,i,a):s(a))||a);return r&&a&&me(t,i,a),a};const ye="reimagine-search-results";let xe=class extends c{constructor(){super(),this._cardResponses={cards:[],sortBy:[]},this._allCards=[],this._filteredCards=[],this._activePills=[],this._currentPage=1,this._totalPages=1,this._srAnnouncement="",this.itemsPerPage=9,this.hideSearchSection=!1,this.searchValue="",this.configuration=E.default,this.renderEyebrowWithoutLink=!1,this.mediaAspectRatio="ratio16to9",this._handleSearchSubmit=e=>{const t=e.target.querySelector('input[type="search"]');this.searchValue=(null==t?void 0:t.value)??"",this.dispatchEvent(new CustomEvent("search-value-changed",{detail:{value:this.searchValue},bubbles:!0,composed:!0}))},this._paginationChangeHandler=e=>{const t=e;this._currentPage=t.detail.activePage,this._updatePagination(),this.updateComplete.then(()=>{this._focusFirstCard()})},this._onClearAll=()=>{this._activePills=[],this.updateComplete.then(()=>{var e,t;p(null==(e=this.shadowRoot)?void 0:e.querySelector(".left-filter"),"reimagine-checkbox").forEach(e=>{const t=e;t.checked=!1;const i=this._getCheckboxInput(e);i&&(i.checked=!1);const r=new Event("change",{bubbles:!0});t.dispatchEvent(r)}),this._applyFilters(),this._setFilterTriggerButtonText(0),this._announceStatusWithResults((null==(t=this.messages)?void 0:t.clearAllStatus)||L.clearAllStatus)})},this._handleModalCloseButton=()=>{this._setFilterTriggerButtonText(this._activePills.length)},this.setMessagesObj(),this.topBreadth="none",this._viewportResizeObserver=new v(this,{callback:()=>this._handleViewportChange()})}get dataObj(){return this._dataObj}set dataObj(e){const t=this._dataObj;this._dataObj=e,this.requestUpdate("dataObj",t),this.hasUpdated&&this._loadData()}firstUpdated(){super.firstUpdated(),this.sortBy=this.sortBy??this._getDefaultSortKey(),this._selectedSortOption=this.sortBy,this._loadData(),this._initEventHandlers(),this._applyFilters()}_getDefaultSortKey(){return S.newestOldest.key}_loadData(){const e=this.dataObj&&Array.isArray(this.dataObj.cards)&&this.dataObj.cards.length>0?{cards:this.dataObj.cards,sortBy:this.dataObj.sortBy??[]}:{cards:[],sortBy:[]};this._cardResponses=e,this._allCards=(e.cards??[]).map(e=>{var t;const i=null!=(t=e.actions)&&t.attributes&&"object"==typeof e.actions.attributes?{...e.actions,attributes:Object.fromEntries(Object.entries(e.actions.attributes).map(([e,t])=>[e,Array.isArray(t)?t.join(","):String(t)]))}:e.actions;return{...e,actions:i}}),this._filteredCards=[...this._allCards],this._updatePagination(),this.updateComplete.then(()=>{this._generateLeftFilter()})}_initEventHandlers(){this.updateComplete.then(()=>{this._attachPaginationListener();const e=u(this.shadowRoot,"reimagine-search");e&&(e.removeEventListener("submit",this._handleSearchSubmit),e.addEventListener("submit",this._handleSearchSubmit))})}_applyFilters(){var e;let t=[...this._allCards];if(this.searchValue&&""!==this.searchValue.trim()){const e=this.searchValue.trim().toLowerCase();t=t.filter(t=>{const i="string"==typeof t.heading?t.heading:"",r="string"==typeof t.paragraph?t.paragraph:"",{eyebrow:s}=t;let a="";return"string"==typeof s?a=s:"object"==typeof s&&"string"==typeof s.text&&(a=s.text),i.toLowerCase().includes(e)||r.toLowerCase().includes(e)||a.toLowerCase().includes(e)})}if(this._activePills.length>0&&(t=t.filter(e=>this._cardMatchesActivePills(e))),this._shouldSortLocally()){const i=this._getEffectiveSortOptions().find(e=>e.label===this._selectedSortOption||e.key===this._selectedSortOption),r=(null==i?void 0:i.order)||(null==(e=this.messages)?void 0:e.defaultSortDirection)||"desc";t=t.slice().sort((e,t)=>{const i=new Date(e.publishedDate).getTime(),s=new Date(t.publishedDate).getTime();return"desc"===r?s-i:i-s})}this._filteredCards=t,this._currentPage=1,this._updatePagination()}_shouldSortLocally(){return!0}_attachPaginationListener(){const e=u(this.shadowRoot,"reimagine-pagination");e&&(e.removeEventListener("onChange",this._paginationChangeHandler),e.addEventListener("onChange",this._paginationChangeHandler))}_focusFirstCard(){var e,t;const i=u(null==(e=this.shadowRoot)?void 0:e.querySelector(".card-section"),"reimagine-card-feature","[clickable]");if(i){i.scrollIntoView({behavior:"smooth",block:"start"});const e=u(i,"reimagine-link","[with-button]"),r=null==(t=null==e?void 0:e.shadowRoot)?void 0:t.querySelector("a");r&&r.focus({preventScroll:!0})}}_onSortChange(e){null!=e&&e.trim()&&(this._selectedSortOption=e,this._applyFilters(),this.requestUpdate())}_closeDropdown(e){const t=e.closest("reimagine-dropdown");t&&t.removeAttribute("open")}_handleDesktopSortChange(e,t){e.preventDefault(),e.stopPropagation(),null!=t&&t.trim()&&(this._onSortChange(t),this._closeDropdown(e.target))}_getFilterLabel(e){var t;for(const i of this._allCards){const r=null==(t=i.filterTags)?void 0:t[e];if(r)return r.label}return e}_getParentCategoryKey(e,t){return e??(e=this._queryCheckboxByKey(t)),((null==e?void 0:e.getAttribute("checkbox-id"))||"").replace("filter-checkbox-","").replace(`-${t}`,"")}_queryCheckboxByKey(e){return u(this.shadowRoot,"reimagine-checkbox",`[checkbox-id$="-${e}"]`)}_queryCheckboxById(e){return u(this.shadowRoot,"reimagine-checkbox",`[checkbox-id="${CSS.escape(e)}"]`)}_queryCheckboxesByKey(e){const t=CSS.escape(e);return p(this.shadowRoot,"reimagine-checkbox",`[checkbox-id$="-${t}"], [checkbox-id$=":${t}"]`)}_getCheckboxInput(e){var t;return(null==(t=null==e?void 0:e.shadowRoot)?void 0:t.querySelector('input[type="checkbox"]'))??null}_updatePagination(){this._totalPages=Math.max(1,Math.ceil(this._filteredCards.length/this.itemsPerPage)),this._currentPage>this._totalPages&&(this._currentPage=1),this.requestUpdate(),this.updateComplete.then(()=>{const e=u(this.shadowRoot,"reimagine-pagination");e&&(e.totalPages=this._totalPages,e.current=this._currentPage,this._attachPaginationListener())})}_cardMatchesActivePills(e){var t;for(const i of this._activePills)for(const r of Object.values(e.filterTags||{}))if(((null==(t=r.category)?void 0:t.value)||[]).some(e=>e.key===i.categoryKey))return!0;return!1}_onFilterCheckboxChange(e){var t,i;const{categoryKey:r,checked:s,checkbox:a}=e,n=this._getParentCategoryKey(a,r);let o="";if(a){const e=a.querySelector('span[slot="checkbox__label-text"]');e&&(o=e.textContent??"")}o||(o=this._getFilterLabel(r));let l=!1;const c=this._activePills.findIndex(e=>e.categoryKey===r);if(s?-1===c&&(this._activePills=[...this._activePills,{parentCategoryKey:n,categoryKey:r,label:o}],l=!0):-1!==c&&(this._activePills=this._activePills.filter(e=>e.categoryKey!==r),l=!0),this._applyFilters(),l){const e=s?(null==(t=this.messages)?void 0:t.filterSelectedStatus)||L.filterSelectedStatus:(null==(i=this.messages)?void 0:i.filterRemovedStatus)||L.filterRemovedStatus;this._announceStatusWithResults(this._formatMessage(e,{filter:o}))}}_onPillRemove(e){var t;const i=this._activePills.findIndex(t=>t.categoryKey===e);if(-1===i)return;const r=(null==(t=this._activePills[i])?void 0:t.label)||this._getFilterLabel(e);this._activePills=this._activePills.filter(t=>t.categoryKey!==e),this.updateComplete.then(()=>{var t;const s=this._queryCheckboxesByKey(e);null==s||s.forEach(e=>{e.checked=!1;const t=this._getCheckboxInput(e);t&&(t.checked=!1)}),this._applyFilters(),this._setFilterTriggerButtonText(this._activePills.length);const a=(null==(t=this.messages)?void 0:t.filterRemovedStatus)||L.filterRemovedStatus;this._announceStatusWithResults(this._formatMessage(a,{filter:r})),this._focusAdjacentPill(i)})}_focusAdjacentPill(e){var t,i,r;if(0===this._activePills.length)return;const s=Math.min(e,this._activePills.length-1),a=null==(r=null==(i=null==(t=this._pillElements)?void 0:t[s])?void 0:i.shadowRoot)?void 0:r.querySelector("button");null==a||a.focus()}_formatMessage(e,t){return e.replaceAll(/{(\w+)}/g,(e,i)=>String(t[i]??""))}_announceStatusWithResults(e){var t;const i=(null==(t=this.messages)?void 0:t.resultsStatus)||L.resultsStatus,r=this._formatMessage(i,{count:this._filteredCards.length});this._announceToScreenReader(`${e}. ${r}`)}_renderCards(){var e,t,i;const r=(this._currentPage-1)*this.itemsPerPage,s=r+this.itemsPerPage,n=this._filteredCards.slice(r,s);if(!n.length)return a`<div part="no-results">
        ${(null==(e=this.messages)?void 0:e.noResults)||L.noResults}
      </div>`;const o=(null==(i=null==(t=this._viewportResizeObserver)?void 0:t.isMedium)?void 0:i.call(t))?d.col2even:d.col3Even;return a`
      <reimagine-layout configuration="${o}">
        ${n.map(e=>a`<reimagine-layout-column>${this._renderCard(e)}</reimagine-layout-column>`)}
      </reimagine-layout>
    `}_extractTelemetryAttrs(e){return e?Object.fromEntries(Object.entries(e).map(([e,t])=>[e,Array.isArray(t)?t.join(","):String(t)])):{}}_getFormattedPublishedDate(e){if(!e)return"";const t=new Date(e),i=new Date;i.setFullYear(i.getFullYear()-1);const r=t>=i?R:O;return t.toLocaleDateString("default",r)}_renderCard(e){var t,i,r,s,c,d,p,u;const m=this._extractTelemetryAttrs(null==(t=e.actions)?void 0:t.attributes),b="object"==typeof e.eyebrow&&e.eyebrow.attributes?this._extractTelemetryAttrs(e.eyebrow.attributes):{},f=e=>{if(e){const t=g(e,"reimagine-link");Object.entries(b).forEach(([i,r])=>{const s="aria-label"===i&&t?"link-label":i;e.setAttribute(s,r)})}},v="object"==typeof e.eyebrow?e.eyebrow.link:void 0,_="string"==typeof e.eyebrow?e.eyebrow:null==(i=e.eyebrow)?void 0:i.text,y="object"==typeof e.eyebrow?e.eyebrow.title:void 0,x=this._getFormattedPublishedDate(e.publishedDate),k=(null==(r=e.actions)?void 0:r.link)??((null==(s=this.messages)?void 0:s.defaultLinkFallback)||L.defaultLinkFallback),w=(null==(c=e.actions)?void 0:c.linkText)??((null==(d=this.messages)?void 0:d.defaultActionLinkText)||L.defaultActionLinkText),$=null==(p=e.actions)?void 0:p.title,S=e.heading&&w?`${w} – ${e.heading}`:w||void 0,C=(null==(u=e.imageAltText)?void 0:u.trim())??"";return a`
      <reimagine-card-feature clickable configuration="vertical" surface="solid-border">
        ${e.image?a`<reimagine-media
              slot="card-feature__media"
              aspect-ratio="${h[this.mediaAspectRatio]}"
            >
              <img
                slot="media__asset"
                src="${e.image}"
                alt="${C}"
              />
            </reimagine-media>`:n}
        <reimagine-text-block configuration="default" slot="card-feature__content-body" size="2xs">
          ${this.renderEyebrowWithoutLink?a`<span slot="text-block__eyebrow-label" ${o(f)}>${_}</span>`:a`<reimagine-link
                icon-position="left"
                href="${l(v)}"
                title="${l(y)}"
                slot="text-block__eyebrow-label"
                ${o(f)}
              >
                <span slot="link__text">${_}</span>
              </reimagine-link>`}
          ${x?a`<span slot="text-block__eyebrow-date">• ${x}</span>`:n}
          ${e.heading?a`<h3 slot="text-block__heading">${e.heading}</h3>`:n}
          ${e.paragraph?a`<p slot="text-block__content">${e.paragraph}</p>`:n}
        </reimagine-text-block>
        <reimagine-link
          with-button
          href="${k}"
          link-label="${l(S)}"
          title="${l($)}"
          ${o(e=>{e&&Object.entries(m).forEach(([t,i])=>{"aria-label"!==t&&e.setAttribute(t,i)})})}
          slot="card-feature__content-footer-bottom"
        >
          <span slot="link__text">${w}</span>
        </reimagine-link>
      </reimagine-card-feature>
    `}_createElementExtension(e,t={},i="",r=[]){const s=document.createElement(e);return Object.entries(t).forEach(([e,t])=>{s.setAttribute(e,t)}),i&&(s.textContent=i),r.length>0&&r.forEach(e=>{var t;null==(t=s.classList)||t.add(e)}),s}_generateLeftFilter(){var e,t;const i=null==(e=this.shadowRoot)?void 0:e.querySelector(".left-filter");if(!i||(i.innerHTML="",!this._allCards.length))return;const r={};((null==(t=this._cardResponses)?void 0:t.cards)??[]).forEach(e=>{e.filterTags&&Object.entries(e.filterTags).forEach(([e,t])=>{const i=t.label??e;r[e]||(r[e]={label:i,values:[]}),(t.category.value??[]).forEach(t=>{((e,t,i)=>{e[t].values.some(e=>e.key===i.key&&e.label===i.label)||e[t].values.push({key:i.key,label:i.label})})(r,e,t)})})});const s=this._createElementExtension("reimagine-accordion",{appearance:"filter--panel"},"",[]);Object.entries(r).forEach(([e,{label:t,values:i}])=>{const r=this._createElementExtension("reimagine-accordion-item",{},"",[]),a=this._createElementExtension("div",{slot:"collapse__title"},t,[]);r.append(a);const n=this._createElementExtension("reimagine-filter-list",{},"",[]);i.forEach(t=>{const i=this._createElementExtension("div",{slot:"item"},"",[]),r=this._createElementExtension("reimagine-checkbox",{"checkbox-id":`${A}${e}-${t.key}`,size:"small"},"",[]),s=this._createElementExtension("span",{slot:"checkbox__label-text"},t.label,[]);r.append(s),r.addEventListener("click",e=>{this._onFilterCheckboxChange({categoryKey:t.key,checked:e.currentTarget.checked??!1,checkbox:e.currentTarget})}),i.append(r),n.append(i)}),r.append(n),s.append(r)}),i.append(s)}_renderFilterPills(){var e,t;return this._activePills.length?a`<div class="filter-pills-bar" part="filter-pills">
      <h2 class="sr-only">${(null==(e=this.messages)?void 0:e.filteredResultsLabel)||L.filteredResultsLabel}</h2>
      <span class="filter-label" part="filter-label"
        >${(null==(t=this.messages)?void 0:t.filteredByLabel)||L.filteredByLabel}</span
      >
      <div class="filter-pills" part="filter-pills" aria-label="Active filters">
        ${this._activePills.map(e=>{var t;return a`
            <reimagine-pill
              as-button
              delegate-outline
              active
              multi-select
              data-category-key="${e.categoryKey}"
              aria-label="${e.label}${(null==(t=this.messages)?void 0:t.removePillAriaLabel)||L.removePillAriaLabel}"
              @click=${()=>this._onPillRemove(e.categoryKey)}
            >
              ${e.label}
            </reimagine-pill>
          `})}
      </div>
    </div>`:n}_renderSortByDropdown(){var e,t;const i=this._getEffectiveSortOptions(),r=null==(e=this._getSelectedSortOption())?void 0:e.label;return a`
      <div class="sort-by" part="sort-by">
        <span class="sort-label" part="sort-label"
          >${(null==(t=this.messages)?void 0:t.sortByText)||L.sortByText}</span
        >
        <reimagine-dropdown selectable>
          <reimagine-dropdown-trigger slot="dropdown__trigger" configuration="button-select">
            ${r}
          </reimagine-dropdown-trigger>
          <reimagine-menu-list configuration="heading" selectable>
            ${i.map(e=>a`
                <reimagine-menu-list-item
                  configuration="option"
                  @click=${t=>this._handleDesktopSortChange(t,e.key)}
                >
                  <p slot="list-item__title">${e.label}</p>
                </reimagine-menu-list-item>
              `)}
          </reimagine-menu-list>
        </reimagine-dropdown>
      </div>
    `}_renderClearAllButton(){var e;return this._activePills.length?a`
      <div class="clear-all-button" part="clear-all-button">
        <reimagine-link
          as-button
          configuration="default"
          slot="clear-all"
          @click=${this._onClearAll}
        >
          <span slot="link__text"
            >${(null==(e=this.messages)?void 0:e.clearAll)||L.clearAll}</span
          >
        </reimagine-link>
      </div>
    `:n}_renderFilterSection(){var e,t;if(!this._hasCards)return n;const i=(null==(t=null==(e=this._viewportResizeObserver)?void 0:e.isMobile)?void 0:t.call(e))??!1;return a`
      <div class="filter-section" part="filter-section">
        <div class="filter-section-left" part="filter-section-left">
          ${this._renderFilterPills()}
        </div>
        <div class="filter-section-right" part="filter-section-right">
          ${this._renderClearAllButton()}${i?n:this._renderSortByDropdown()}
        </div>
      </div>
    `}_renderSearchSection(){var e,t,i,r;return a`
      <reimagine-container part="container" class="container">
        <reimagine-heading-block size="m">
          <h2 slot="heading-block__heading-text">
            ${(null==(e=this.messages)?void 0:e.searchHeading)||L.searchHeading}
          </h2>
        </reimagine-heading-block>
        <reimagine-search label-hidden size="small">
          <reimagine-input
            slot="search__base"
            input-button-label="${(null==(t=this.messages)?void 0:t.searchInputLabel)||L.searchInputLabel}"
          >
            <label slot="input__control-label" for="${j}"
              >${(null==(i=this.messages)?void 0:i.searchInputLabel)||L.searchInputLabel}</label
            >
            <input
              slot="input__control-input"
              id="${j}"
              type="search"
              placeholder="${(null==(r=this.messages)?void 0:r.searchInputPlaceholder)||L.searchInputPlaceholder}"
            />
          </reimagine-input>
        </reimagine-search>
      </reimagine-container>
    `}_renderPagination(){var e;return this._totalPages<=1?n:a`
      <reimagine-pagination
        key="pagination-${this._totalPages}-${this._currentPage}"
        configuration="numbers"
        .total-pages=${this._totalPages}
        .current=${this._currentPage}
        aria-label="${(null==(e=this.messages)?void 0:e.paginationAriaLabel)||L.paginationAriaLabel}"
      ></reimagine-pagination>
    `}_renderBlade(){var e,t;const i=this._hasCards,r=i?d.col2sidebar:d.col1even;return a`
      <div part="base" class="base">
        ${this.hideSearchSection?n:a`
              <reimagine-layout configuration="${d.col1even}">
                <reimagine-layout-column>
                  <div class="search-section" part="search-section">
                    ${this._renderSearchSection()}
                  </div>
                </reimagine-layout-column>
              </reimagine-layout>
            `}
        <reimagine-container part="container" class="container">
          <reimagine-layout configuration="${r}">
            ${i?a`
                  <reimagine-layout-column>
                    <div class="search-result-header" part="search-result-header">
                      <h2>
                        ${(null==(e=this.messages)?void 0:e.filterLabel)||L.filterLabel}
                      </h2>
                      <p>
                        (${this._filteredCards.length}
                        ${(null==(t=this.messages)?void 0:t.stories)||L.stories})
                      </p>
                    </div>
                    <div class="left-filter" part="left-filter"></div>
                  </reimagine-layout-column>
                `:n}
            <reimagine-layout-column>
              ${this._renderFilterSection()}
              <div class="card-section" part="card-section">${this._renderCards()}</div>
              ${this._renderPagination()}
            </reimagine-layout-column>
          </reimagine-layout>
        </reimagine-container>
      </div>
    `}_createMobileDropdown(){var e;const t=this._getEffectiveSortOptions(),i=null==(e=this._getSelectedSortOption())?void 0:e.label,r=this._createElementExtension("reimagine-dropdown",{selectable:"",class:"mobile-sort-dropdown"}),s=this._createElementExtension("reimagine-dropdown-trigger",{slot:"dropdown__trigger",configuration:"button-select"},i),a=this._createElementExtension("reimagine-menu-list",{configuration:"heading",selectable:""});return t.forEach(e=>{const t=this._createElementExtension("reimagine-menu-list-item",{configuration:"option"}),i=this._createElementExtension("p",{slot:"list-item__title"},e.label);t.append(i),t.addEventListener("click",t=>{t.preventDefault(),t.stopPropagation(),this._onSortChange(e.key),s.textContent=e.label,this._closeDropdown(t.target)}),a.append(t)}),r.append(s,a),r}_updateMobileViewportLeftFilter(){var e,t,i,r;const s=null==(e=this.shadowRoot)?void 0:e.querySelector(".left-filter"),a=u(s,"reimagine-accordion");if(u(s,"reimagine-dropdown"))return;const n=this._createElementExtension("reimagine-button",{appearance:"button--primary",shape:"rounded",id:"button-filters",size:"medium"});n.innerHTML=`\n      <span slot="button__text">${(null==(t=this.messages)?void 0:t.filtersButtonText)||L.filtersButtonText} (${this._activePills.length})</span>\n    `;const o=this._createElementExtension("reimagine-modal",{configuration:"filters",triggers:"#button-filters"}),l=this._createElementExtension("h2",{slot:"modal__header-title"},(null==(i=this.messages)?void 0:i.filtersModalTitle)||L.filtersModalTitle),c=this._createElementExtension("p",{slot:"modal__header-detail"},`(${this._filteredCards.length})`),d=this._createElementExtension("reimagine-button",{appearance:"button--primary",shape:"rounded",size:"large"});d.slot="modal__footer",d.innerHTML=`<span slot="button__text">${(null==(r=this.messages)?void 0:r.applyFiltersButton)||L.applyFiltersButton}</span>`,d.addEventListener("click",()=>{var e;this._setFilterTriggerButtonText(this._activePills.length),c.textContent=`(${this._filteredCards.length} ${(null==(e=this.messages)?void 0:e.stories)||L.stories})`,o.removeAttribute("open")});const h=this._createMobileDropdown();s&&a&&(o.append(d,l,c,a),s.innerHTML="",null==s||s.append(n,o,h)),this.requestUpdate()}_updateDesktopViewportLeftFilter(){var e;const t=null==(e=this.shadowRoot)?void 0:e.querySelector(".left-filter");if(!t||!u(t,"reimagine-modal"))return;const i=u(t,"reimagine-accordion");i&&(t.innerHTML="",t.append(i)),this.requestUpdate()}_setFilterTriggerButtonText(e){var t;const i=u(this.shadowRoot,"reimagine-button");i&&(i.innerHTML=`\n        <span slot="button__text">${(null==(t=this.messages)?void 0:t.filtersButtonText)||L.filtersButtonText} (${e})</span>\n      `)}_handleViewportChange(){this.updateComplete.then(()=>{var e,t,i;if(null!=(e=this._viewportResizeObserver)&&e.isMobile()){this._updateMobileViewportLeftFilter();const e=u(this.shadowRoot,"reimagine-modal"),i=null==(t=null==e?void 0:e.shadowRoot)?void 0:t.querySelector("dialog .modal__close-button");i&&(i.removeEventListener("click",this._handleModalCloseButton),i.addEventListener("click",this._handleModalCloseButton))}else null!=(i=this._viewportResizeObserver)&&i.isDesktop()&&this._updateDesktopViewportLeftFilter()})}setMessagesObj(){this.messages?this.messages={...L,...this.messages}:this.messages=L}disconnectedCallback(){const e=u(this.shadowRoot,"reimagine-pagination"),t=u(this.shadowRoot,"reimagine-search");e&&e.removeEventListener("onChange",this._paginationChangeHandler),t&&t.removeEventListener("submit",this._handleSearchSubmit),this._srAnnouncementClearTimer&&(clearTimeout(this._srAnnouncementClearTimer),this._srAnnouncementClearTimer=void 0),super.disconnectedCallback()}get _hasCards(){return this._allCards.length>0}_announceToScreenReader(e){this._srAnnouncementClearTimer&&(clearTimeout(this._srAnnouncementClearTimer),this._srAnnouncementClearTimer=void 0),this._srAnnouncement="",requestAnimationFrame(()=>{this._srAnnouncement=e,this._srAnnouncementClearTimer=setTimeout(()=>{this._srAnnouncement="",this._srAnnouncementClearTimer=void 0},3e3)})}render(){return a`
      ${this.renderUiShell(this._renderBlade())}
      <div class="sr-only" aria-live="polite" aria-atomic="true">${this._srAnnouncement}</div>
    `}_getEffectiveSortOptions(){var e,t;return null!=(t=null==(e=this._cardResponses)?void 0:e.sortBy)&&t.length?this._cardResponses.sortBy:P}_getSelectedSortOption(){const e=this._getEffectiveSortOptions();return e.find(e=>e.key===this._selectedSortOption||e.label===this._selectedSortOption)||e[0]}};var ke,we,$e;xe.styles=[...(ke=xe,we=xe,$e="styles",ve(fe(ke),$e,we)||[]),ue,ge,k,w,$],_e([i()],xe.prototype,"_viewportResizeObserver",2),_e([i()],xe.prototype,"_cardResponses",2),_e([i()],xe.prototype,"_allCards",2),_e([i()],xe.prototype,"_filteredCards",2),_e([i()],xe.prototype,"_activePills",2),_e([r(".filter-pills reimagine-pill")],xe.prototype,"_pillElements",2),_e([i()],xe.prototype,"_currentPage",2),_e([i()],xe.prototype,"_totalPages",2),_e([i()],xe.prototype,"_selectedSortOption",2),_e([i()],xe.prototype,"_srAnnouncement",2),_e([s({type:Number,attribute:"items-per-page"})],xe.prototype,"itemsPerPage",2),_e([s({type:String,attribute:"sort-by"})],xe.prototype,"sortBy",2),_e([s({type:Boolean,attribute:"hide-search-section"})],xe.prototype,"hideSearchSection",2),_e([s({type:String,attribute:"search-value"})],xe.prototype,"searchValue",2),_e([s({type:Object})],xe.prototype,"messages",2),_e([s({type:String})],xe.prototype,"configuration",2),_e([s({type:Boolean,attribute:"render-card-eyebrow-without-link"})],xe.prototype,"renderEyebrowWithoutLink",2),_e([s({type:String,attribute:"card-media-aspect-ratio"})],xe.prototype,"mediaAspectRatio",2),_e([s({type:Object,attribute:"data-obj"})],xe.prototype,"dataObj",1),xe=_e([m(ye)],xe);export{A as C,C as D,T as F,F as P,xe as S,D as T,E as a,L as b,M as c,B as d,ye as n};
