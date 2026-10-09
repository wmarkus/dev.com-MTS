import{r as e,i as t,c as s,g as a,k as i,f as r,b as o}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{R as l}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{d as n}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{Pill as d}from"/__mirror/assets/8211e5b454c0493e54031c58";import{SelectorLinksItem as c}from"/__mirror/assets/aa78055202ce721e908a109b";import{b as h,v as f}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";const p="column",u="flex-start",v="var(--ds-app-space-micro-l, 1.5rem)",g="inline-flex",m="center",w="var(--ds-app-space-micro-2xs, 0.25rem)",b="var(--ds-app-space-micro-xs, 0.5rem)",y="var(--ds-app-radii-circle, 9999px)",_="var(--ds-app-color-surface-solid-bg-nonclickable, #fefefe)",k="var(--ds-app-color-base-default-border-subtle, #cbe6f4)",x="solid",S="var(--ds-border-xs, 0.0625rem)",$="none",E="inline-flex",T="center",C="var(--ds-app-space-micro-2xs, 0.25rem)",N="inline-flex",R="var(--ds-app-space-micro-xs, 0.5rem)",L="7.5rem",P="var(--ds-elevation-level-2, 0 0 0.125rem 0 rgba(0, 0, 0, 0.12), 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.14))",z="transparent",F="var(--ds-app-color-surface-solid-bg-default, #fefefe)",I=t`
  :host {
    display: var(--ds-selector-display, ${e("inline-flex")});
    flex-direction: var(
      --ds-selector-flex-direction,
      ${e(p)}
    );
    align-items: var(--ds-selector-align-items, ${e(u)});

    /* Vertical gap between the surface and the outside overflow-nav row
       (only takes effect for layout="selector-links" where the nav renders
       as a host sibling). */
    gap: var(--ds-selector-outer-gap, ${e(v)});
    position: relative;
    box-sizing: border-box;
    max-width: 100%;
  }

  /* Surface — the pill/link bar itself. All visual treatment (bg, border,
     elevation, radius, padding) lives here. For layout="selector" the surface
     also contains the overflow-nav (inside the pill); for layout="selector-links"
     the nav renders as a host sibling below the surface. */
  .surface {
    display: var(
      --ds-selector-surface-display,
      ${e(g)}
    );
    align-items: var(
      --ds-selector-surface-align-items,
      ${e(m)}
    );
    gap: var(--ds-selector-gap, ${e(w)});
    padding: var(--ds-selector-padding, ${e(b)});
    background-color: var(
      --ds-selector-background-color,
      ${e(_)}
    );
    border-color: var(--ds-selector-border-color, ${e(k)});
    border-style: var(--ds-selector-border-style, ${e(x)});
    border-width: var(--ds-selector-border-width, ${e(S)});
    border-radius: var(
      --ds-selector-border-radius,
      ${e(y)}
    );
    box-shadow: var(--ds-selector-box-shadow, ${e($)});
    box-sizing: border-box;
    max-width: 100%;
  }

  /* Selector-links is a carousel — it must fill its parent's inline
     size so the pill has a real "available space" to shrink against.
     The default \`:host { display: inline-flex }\` shrinks to max-content,
     which lets the items row (~4×259px = 1036px) push the pill wider
     than the viewport when the light-tree parent doesn't impose an
     explicit width. Switching to block-level flex forces the pill to
     take the full inline size of its containing block, at which point
     the internal \`overflow-x: auto\` scrollport and the fade masks
     behave against a stable width. */
  :host([layout='selector-links']) {
    display: flex;
    width: 100%;
  }

  :host([layout='selector-links']) .surface {
    --ds-selector-box-shadow: ${e(P)};
    --ds-selector-border-color: ${e(z)};
    --ds-selector-background-color: ${e(F)};

    /* Match the host: fill the available inline size (rather than
       shrinking to items content) so the scrollport has a real width
       and the fade masks blend into the pill's own background. */
    display: flex;
    width: 100%;

    /* Clip children to the surface's rounded shape. When items overflow,
       companion rules below flatten the trailing/leading corners so the
       overflowing items appear cut by a straight edge (Figma spec) —
       overflow: hidden is what makes that flattened boundary do the
       visual clipping. Focus outlines on the slotted selector-links
       items are inset (outline-offset: -0.5rem), so they render inside
       the pill interior and are never clipped. */
    overflow: hidden;
  }

  /* Items wrapper — holds the slotted items row and carries the overflow-fade
     gradient mask. Sits inside the surface, to the inline-start of the
     overflow-nav. Only \`layout="selector"\` clips its own overflow so pills
     fade at its edges (not the surface's), leaving the nav controls unmasked;
     \`layout="selector-links"\` keeps \`overflow: visible\` so link focus
     outlines are not clipped. */
  .items {
    display: var(--ds-selector-items-display, ${e(E)});
    align-items: var(
      --ds-selector-items-align-items,
      ${e(T)}
    );
    gap: var(--ds-selector-items-gap, ${e(C)});
    min-width: 0;
    max-width: 100%;
  }

  /* Pill items scroll horizontally when they can't all fit — the
     component tracks scroll position to reflect \`at-start\` / \`at-end\`
     on the host, which drives the automatic trailing-fade affordance
     and the auto-hide of the overflow-nav wrapper. Native scrollbar is
     suppressed since the visual affordance is the fade + prev/next
     controls. */
  :host([layout='selector']) .items {
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;
  }

  :host([layout='selector']) .items::-webkit-scrollbar {
    display: none;
  }

  /* Slotted pill items must keep their intrinsic size — allowing flex
     shrink collapses short-label pills into circles when the row runs out
     of space (the pill's \`border-radius: 9999px\` renders as a circle at
     \`min-content\` width). \`flex-shrink: 0\` preserves each pill's natural
     width so overflow is clipped by the \`.items\` rule above
     rather than deforming individual pills. */
  :host([layout='selector']) .items ::slotted(*) {
    flex-shrink: 0;
  }

  /* Non-active pills inside the pill layout have no visible background —
     the pill container's own surface reads through — while hover shows
     a light-blue affordance and the active/selected pill shows the
     dark-blue filled state. This matches the Figma \`Selector\` spec
     where only the selected item carries a filled surface.

     Cascade note: outer-tree \`::slotted\` rules override the pill's own
     shadow-tree \`:host:hover\` rules on the shared \`--ds-pill-background-\`
     \`color\` custom property (empirically verified in Chromium — outer
     tree wins ties on custom-property cascade for slotted elements).
     Because of that, both the default and hover treatments have to be
     authored HERE, not left to the pill's inner rules. The hover value
     is the same light-blue token the pill used as its default outside
     the Selector context — moving "pale blue" from the default state to
     the hover state matches the Figma spec.

     The active/selected pill is excluded via \`:not([active])\` so the
     pill's own \`:host([active])\` filled-primary treatment continues to
     apply — that IS an inner-tree rule with higher specificity (attribute
     selector) than the outer rules here and would win anyway, but the
     exclusion makes the intent explicit. */
  :host([layout='selector']) .items ::slotted(reimagine-pill:not([active])) {
    --ds-pill-background-color: transparent;
  }

  :host([layout='selector']) .items ::slotted(reimagine-pill:not([active]):hover) {
    --ds-pill-background-color: var(
      --ds-app-color-interactive-secondary-bg-default,
      #e6f2fb
    );
  }

  /* Overflow-fade gradient masks. Only apply to \`layout="selector"\` per
     Figma — the elevated \`layout="selector-links"\` surface doesn't clip its
     items and therefore doesn't need a fade affordance. Uses a CSS-only
     linear-gradient mask (no Figma asset required); the 120px fade width
     mirrors the Figma gradient asset.

     RTL note: CSS \`linear-gradient()\` doesn't accept logical directions
     (\`to inline-end\` etc. are not part of the gradient grammar), so the
     start/end pair below is authored as physical \`to right\`/\`to left\` for
     LTR and mirrored via \`:dir(rtl)\` selectors below. The \`both\` variant
     is symmetric and needs no RTL flip. */
  :host([layout='selector'][overflow-fade='start']) .items {
    mask-image: linear-gradient(
      to right,
      transparent 0,
      #000
        var(
          --ds-selector-overflow-fade-width,
          ${e(L)}
        )
    );
  }

  :host([layout='selector'][overflow-fade='end']) .items {
    mask-image: linear-gradient(
      to left,
      transparent 0,
      #000
        var(
          --ds-selector-overflow-fade-width,
          ${e(L)}
        )
    );
  }

  /* RTL: swap start/end so the fade tracks the visual inline-start/end
     rather than the physical left/right edge. */
  :host([layout='selector'][overflow-fade='start']:dir(rtl)) .items {
    mask-image: linear-gradient(
      to left,
      transparent 0,
      #000
        var(
          --ds-selector-overflow-fade-width,
          ${e(L)}
        )
    );
  }

  :host([layout='selector'][overflow-fade='end']:dir(rtl)) .items {
    mask-image: linear-gradient(
      to right,
      transparent 0,
      #000
        var(
          --ds-selector-overflow-fade-width,
          ${e(L)}
        )
    );
  }

  :host([layout='selector'][overflow-fade='both']) .items {
    mask-image: linear-gradient(
      to right,
      transparent 0,
      #000
        var(
          --ds-selector-overflow-fade-width,
          ${e(L)}
        ),
      #000
        calc(
          100% -
            var(
              --ds-selector-overflow-fade-width,
              ${e(L)}
            )
        ),
      transparent 100%
    );
  }

  /* Auto trailing-fade for the default pill layout.
     -----------------------------------------------
     When the consumer hasn't set an explicit \`overflow-fade\` (i.e.
     \`overflow-fade='none'\`, the reflected default) and the pills are
     wider than the container, apply a trailing gradient mask so users
     have a visual signal that more content is scrollable past the
     trailing edge. Reacts to viewport / container size and scroll
     position via the internal ResizeObserver + scroll listener in
     index.ts, which toggle the \`at-end\` attribute on the host — the
     fade disappears once the user scrolls to the end (or the row
     shrinks enough to fit).

     Only the trailing edge fades in this default state: consumers who
     want static edge fades regardless of scroll position continue to
     opt in via \`overflow-fade='start'|'end'|'both'\` — the rules above
     cover those and take precedence via their more-specific selectors.

     RTL is handled with a mirrored \`:dir(rtl)\` variant because CSS
     \`linear-gradient()\` grammar only accepts physical directions. */
  :host([layout='selector'][overflow-fade='none']:not([at-end])) .items {
    mask-image: linear-gradient(
      to left,
      transparent 0,
      #000
        var(
          --ds-selector-overflow-fade-width,
          ${e(L)}
        )
    );
  }

  :host([layout='selector'][overflow-fade='none']:not([at-end]):dir(rtl))
    .items {
    mask-image: linear-gradient(
      to right,
      transparent 0,
      #000
        var(
          --ds-selector-overflow-fade-width,
          ${e(L)}
        )
    );
  }

  /* selector-links carousel scroll + auto-fade.
     ------------------------------------------
     Items are wider than the surface whenever the row runs out of inline
     space (each \`<reimagine-selector-links-item>\` is ~259px, so at typical
     mobile widths four items overflow). Turn \`.items\` into a
     scrollport so consumers can page through with the slotted prev/next
     controls (data-selector-nav="prev"/"next"), and hide the native
     scrollbar because the paging affordance is the visible slotted nav.

     Slotted items must not shrink — otherwise flex-shrink squeezes them to
     min-content and \`scrollWidth === clientWidth\`, defeating the scroll
     behavior. Focus outlines on \`<reimagine-selector-links-item>\` are inset
     (\`outline-offset: -0.5rem\`), so \`overflow-x: auto\` does not clip them. */
  :host([layout='selector-links']) .items {
    /* Take exactly the flex-line space (not intrinsic content size) so
       the scrollport width equals the surface's content-box width
       regardless of how wide the items row wants to be. */
    flex: 1 1 0;

    /* Spread items across the surface when they collectively fit —
       otherwise \`flex-start\` leaves the trailing area of the elevated
       card empty (last item hugs the leading edge and the rest of the
       bar reads as an unused gutter). When the items row overflows,
       \`space-between\` has no effect because the extra space is
       negative, so items pack from the leading edge and the carousel
       paging logic still works as expected. */
    justify-content: space-between;
    overflow-x: auto;
    scrollbar-width: none;
  }

  :host([layout='selector-links']) .items::-webkit-scrollbar {
    display: none;
  }

  :host([layout='selector-links']) .items ::slotted(*) {
    flex-shrink: 0;
  }

  /* selector-links overflow-edge affordance.
     -----------------------------------------
     When items overflow past an edge of the surface, that edge of the
     elevated card is flattened (its logical border-radius reduced to 0)
     so the trailing/leading items visually appear cut by a straight
     line rather than clipped by the rounded pill corner. Matches the
     Figma spec: "Any edge of the component should appear like the
     rounding was removed" when the row overflows.

     Uses logical corner properties (border-start-end-radius, etc.) so
     the correct corners flatten in both LTR and RTL without needing a
     mirrored :dir(rtl) variant — the inline-start and inline-end
     corners naturally track the writing mode. The .surface itself
     retains overflow: hidden, so slotted items scrolling past the
     flattened edge are clipped at the new straight boundary. */
  :host([layout='selector-links']:not([at-end])) .surface {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([layout='selector-links']:not([at-start])) .surface {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  .overflow-nav {
    display: var(
      --ds-selector-overflow-nav-display,
      ${e(N)}
    );
    gap: var(--ds-selector-overflow-nav-gap, ${e(R)});
    align-items: center;
    flex-shrink: 0;
  }

  @media (forced-colors: active) {
    .surface {
      border-color: CanvasText;
    }
  }
`,O=t`
  @media (max-width: ${e(h(f.sm))}) {
    :host([layout='selector']) {
      --ds-selector-overflow-fade-width: 2.5rem;
    }
  }
`,A="selector",B="selector-links",W="none";var j=Object.defineProperty,U=Object.getOwnPropertyDescriptor,D=(e,t,s,a)=>{for(var i,r=a>1?void 0:a?U(t,s):t,o=e.length-1;o>=0;o--)(i=e[o])&&(r=(a?i(t,s,r):i(r))||r);return a&&r&&j(t,s,r),r};const M="reimagine-selector";let q=class extends l{constructor(){super(...arguments),this.layout=A,this.overflowFade=W,this.role=null,this.ariaLabel=null,this._overflowNavSlotEmpty=!0,this._atStart=!0,this._atEnd=!0,this._itemsResizeObserver=null,this._handleSelectionClick=e=>{var t,s;const a=e.composedPath();if(this.layout===B){const e=a.find(e=>e instanceof c&&this._defaultSlot.includes(e));if(!e||e.disabled||e.inactive)return;return this._defaultSlot.forEach(t=>{t instanceof c&&(t.selected=t===e)}),void(null==(t=e.focus)||t.call(e,{preventScroll:!0}))}const i=a.find(e=>e instanceof d&&this._defaultSlot.includes(e));!i||i.disabled||(this._defaultSlot.forEach(e=>{e instanceof d&&(e.active=e===i)}),null==(s=i.focus)||s.call(i,{preventScroll:!0}))},this._pendingPageTarget=null,this._pendingPageDirection=null,this._updateNavState=()=>{const e=this._itemsEl;if(!e)return;const t=e.parentElement;if(!t)return;const s=e.scrollWidth>t.clientWidth+1,[a,i]=s?this._computeScrollBoundary(e):[!0,!0];this._atStart=a,this._atEnd=i;for(const e of this._overflowNavSlot){const t=e.dataset.selectorNav;"prev"!==t&&"next"!==t||this._syncNavControlDisabled(e,"prev"===t?this._atStart:this._atEnd)}},this._scheduleNavStateUpdate=()=>{requestAnimationFrame(this._updateNavState)},this._handleItemFocusIn=e=>{const t=this._itemsEl;if(!t)return;const s=this._defaultSlot;if(0===s.length)return;const a=e.composedPath().find(e=>e instanceof HTMLElement&&s.includes(e));if(!a)return;const i=t.getBoundingClientRect(),r=a.getBoundingClientRect();let o=0;r.left<i.left?o=r.left-i.left:r.right>i.right&&(o=r.right-i.right),0!==o&&t.scrollBy({left:o,behavior:"smooth"})}}_handleSlotChange(){this._overflowNavSlotEmpty=0===this._overflowNavSlot.length,this._scheduleNavStateUpdate()}_handleNavClick(e){const t=e.composedPath().find(e=>e instanceof HTMLElement&&void 0!==e.dataset.selectorNav);if(!t)return;const s=t.dataset.selectorNav;if("prev"!==s&&"next"!==s||t.hasAttribute("disabled")||"true"===t.getAttribute("aria-disabled")||!this._itemsEl||0===this._defaultSlot.length)return;const a="prev"===s?-1:1,i=this._resolvePageTarget(a);i?(this._scrollItemIntoView(i,a),this._pendingPageTarget=i,this._pendingPageDirection=a):(this._pendingPageTarget=null,this._pendingPageDirection=null),this._scheduleNavStateUpdate()}_resolvePageTarget(e){const t=this._defaultSlot,s=this._pendingPageTarget;if(s&&this._pendingPageDirection===e&&this._isStillClipped(s,e)){const a=t.indexOf(s),i=a+e;if(-1!==a&&i>=0&&i<t.length)return t[i]}return this._nextPagedItem(e)}_isStillClipped(e,t){const s=this._itemsEl;if(!s)return!1;const a=this._pagingAxis(s),i=e.getBoundingClientRect();return 1===t?a.past(a.itemTrailing(i),a.trailing):a.before(a.itemLeading(i),a.leading)}_nextPagedItem(e){const t=this._itemsEl;if(!t)return null;const s=this._defaultSlot,a=this._pagingAxis(t);if(1===e){for(const e of s){const t=e.getBoundingClientRect();if(a.past(a.itemTrailing(t),a.trailing))return e}return null}for(let e=s.length-1;e>=0;e-=1){const t=s[e].getBoundingClientRect();if(a.before(a.itemLeading(t),a.leading))return s[e]}return null}_scrollItemIntoView(e,t){const s=this._itemsEl;if(!s)return;const a=this._pagingAxis(s),i=e.getBoundingClientRect();let r=0;1===t&&a.past(a.itemTrailing(i),a.trailing)?r=a.itemTrailing(i)-a.trailing:-1===t&&a.before(a.itemLeading(i),a.leading)&&(r=a.itemLeading(i)-a.leading),0!==r&&s.scrollBy({left:r,behavior:"smooth"})}_endScrollTolerance(){const e=this._defaultSlot;if(e.length<2)return 8;const t=e[1].getBoundingClientRect().left-e[0].getBoundingClientRect().right;return Math.max(1,Math.ceil(t)+2)}_pagingAxis(e){const t=e.getBoundingClientRect();return"rtl"===getComputedStyle(e).direction?{leading:t.right,trailing:t.left,itemLeading:e=>e.right,itemTrailing:e=>e.left,past:(e,t)=>e<t-1,before:(e,t)=>e>t+1}:{leading:t.left,trailing:t.right,itemLeading:e=>e.left,itemTrailing:e=>e.right,past:(e,t)=>e>t+1,before:(e,t)=>e<t-1}}_computeScrollBoundary(e){const t=Math.abs(e.scrollLeft),s=e.scrollWidth-e.clientWidth,a=this._endScrollTolerance();return[t<=1,s<=1||t>=s-a]}_syncNavControlDisabled(e,t){var s;if(t){if(e.matches(":focus, :focus-within")){const t=this._overflowNavSlot.find(t=>t!==e&&("prev"===t.dataset.selectorNav||"next"===t.dataset.selectorNav));null==(s=null==t?void 0:t.focus)||s.call(t)}e.setAttribute("disabled","")}else e.removeAttribute("disabled")}firstUpdated(){if(super.firstUpdated(),this._itemsEl){this._itemsEl.addEventListener("scroll",this._updateNavState,{passive:!0}),this._itemsResizeObserver=new ResizeObserver(this._updateNavState),this._itemsResizeObserver.observe(this._itemsEl);const e=this._itemsEl.parentElement;e&&this._itemsResizeObserver.observe(e),this._scheduleNavStateUpdate()}this.addEventListener("focusin",this._handleItemFocusIn)}updated(e){super.updated(e),this.toggleAttribute("at-start",this._atStart),this.toggleAttribute("at-end",this._atEnd)}disconnectedCallback(){var e;super.disconnectedCallback(),this._itemsEl&&this._itemsEl.removeEventListener("scroll",this._updateNavState),null==(e=this._itemsResizeObserver)||e.disconnect(),this._itemsResizeObserver=null,this.removeEventListener("focusin",this._handleItemFocusIn)}render(){const e=this._overflowNavSlotEmpty||this._atStart&&this._atEnd,t=this.layout===B,s=o`
      <span
        part="overflow-nav"
        class="overflow-nav"
        style="${e?"display: none":""}"
        @click="${this._handleNavClick}"
      >
        <slot name="overflow-nav" @slotchange="${this._handleSlotChange}"></slot>
      </span>
    `;return o`
      <span part="surface" class="surface">
        <span class="items" @click="${this._handleSelectionClick}">
          <slot @slotchange="${this._scheduleNavStateUpdate}"></slot>
        </span>
        ${t?"":s}
      </span>
      ${t?s:""}
    `}};q.styles=[I,O],D([s({reflect:!0})],q.prototype,"layout",2),D([s({reflect:!0,attribute:"overflow-fade"})],q.prototype,"overflowFade",2),D([s({reflect:!0})],q.prototype,"role",2),D([s({reflect:!0,attribute:"aria-label"})],q.prototype,"ariaLabel",2),D([a({slot:"overflow-nav"})],q.prototype,"_overflowNavSlot",2),D([a({flatten:!0})],q.prototype,"_defaultSlot",2),D([i(".items")],q.prototype,"_itemsEl",2),D([r()],q.prototype,"_overflowNavSlotEmpty",2),D([r()],q.prototype,"_atStart",2),D([r()],q.prototype,"_atEnd",2),q=D([n(M)],q);export{q as Selector,M as name};
