import{r as e,i as t,c as i,f as r,k as a,g as l,b as n}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{G as o,S as s,R as d,B as c}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{a as h,d as b}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{s as p}from"/__mirror/assets/579a4c6140e643b41d22eee8";import{v as g,b as u}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{b as m}from"/__mirror/assets/1db4ee73d7e46e9ea9afc127";import"/__mirror/assets/08c2f7191e700d0b495894c6";import{V as f}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import"/__mirror/assets/34233ee5ac8acdb3aa831b25";const y="var(--ds-app-color-base-default-fg-heading)",v="100%",_="1px solid var(--ds-app-color-base-default-border-subtle)",w="table-cell",S="120px",x="var(--ds-app-space-micro-m, 1rem)",k="top",C="start",A="start",$="table-cell",E="table-row",R="table-row-group",T="table-cell",H="table-row",L="table-cell",I="table-row",O="inline-block",z="middle",q="var(--ds-app-space-micro-xs, 0.5rem)",D="block",W="var(--ds-app-space-micro-xs, 0.5rem)",M="var(--ds-app-space-micro-3xs, 0.125rem)",P="var(--ds-app-color-base-default-fg-body)",B="var(--ds-app-type-body-m-font-weight, 400)",N="-0.28px",j="var(--ds-app-type-body-s-font-size, 0.875rem)",F="-0.28px",Y="var(--ds-app-space-micro-3xs, 0.125rem)",V="var(--ds-app-color-base-default-fg-body)",G="inline",K="middle",U="var(--ds-app-space-micro-xs, 0.5rem)",X="var(--ds-app-type-body-m-font-size, 1rem)",J="var(--ds-app-type-body-m-font-size, 1rem)",Q="var(--ds-app-color-surface-solid-bg-default)",Z="none",ee="var(--ds-app-space-micro-2xs, 0.25rem)",te="inherit",ie="start",re="100%",ae="var(--ds-app-color-base-default-fg-accent)",le="0",ne="rotate(0deg)",oe="center",se="rotate(-180deg)",de="flex",ce="2.5rem",he="var(--ds-app-space-micro-m, 1rem)",be="var(--ds-app-space-micro-s, 0.75rem)",pe="var(--ds-app-radii-s, 0.5rem)",ge="var(--ds-comp-color-pricing-banner-bg, #005597)",ue="var(--ds-comp-color-pricing-banner-fg, #f4fafd)",me="var(--ds-app-type-label-s-font-weight, 600)",fe="var(--ds-app-type-label-s-font-size, 0.75rem)",ye="var(--ds-app-type-label-s-line-height, 1rem)",ve="var(--ds-app-type-label-s-letter-spacing, normal)",_e="var(--ds-app-space-micro-m, 1rem)",we="var(--ds-app-space-micro-m, 1rem)",Se="var(--ds-app-space-micro-m, 1rem)",xe="flex",ke="var(--ds-app-space-micro-xl, 2rem)",Ce="var(--ds-app-space-micro-m, 1rem)",Ae="var(--ds-app-color-base-default-fg-heading, #0e1726)",$e="var(--ds-app-type-heading-m-font-size, 2rem)",Ee="var(--ds-app-type-heading-m-line-height, 2.5rem)",Re="var(--ds-app-type-heading-s-font-weight, 500)",Te="var(--ds-app-type-heading-s-letter-spacing, -0.015em)",He="var(--ds-app-space-micro-s, 0.75rem)",Le="var(--ds-app-space-micro-xs, 0.5rem)",Ie="1.5rem",Oe="var(--ds-app-color-base-default-fg-heading, #0e1726)",ze="var(--ds-app-type-label-m-font-size, 0.875rem)",qe="var(--ds-app-type-label-m-line-height, 1.25rem)",De="var(--ds-app-type-label-m-font-weight, 600)",We="var(--ds-app-color-base-default-fg-accent, #0078d4)",Me=i=>{const r=e(i);return t`
    /* First header cell: heading, CTA, legend, divider and toggle stacked. */
    ${r} .table-key {
      display: var(--ds-table-key-display, ${e(xe)});
      flex-direction: column;
      align-items: flex-start;
      min-inline-size: 0;
      max-inline-size: 100%;
      text-align: start;
    }

    ${r} .table-key > * + * {
      margin-block-start: var(
        --ds-table-key-gap,
        ${e(ke)}
      );
    }

    /* CTA button fills the cell width. */
    ${r} .table-key > reimagine-button {
      --ds-button-host-display: flex;
      --ds-button-width: 100%;
      inline-size: 100%;
    }

    /* Toggle hugs its content; wraps the switch below the label when the cell is
       too narrow. */
    ${r} .table-key > reimagine-toggle-switch {
      --ds-toggle-switch-width: fit-content;
      --ds-toggle-switch-flex-wrap: wrap;
      --ds-toggle-switch-content-flex: 1 1 auto;
    }

    /* Tighten the lower legend / divider / toggle cluster. */
    ${r} .table-key > reimagine-divider {
      inline-size: 100%;
      margin-block-start: var(
        --ds-table-key-cluster-gap,
        ${e(Ce)}
      );
    }

    ${r} .table-key > reimagine-divider + * {
      margin-block-start: var(
        --ds-table-key-cluster-gap,
        ${e(Ce)}
      );
    }

    ${r} .table-key .table-key__heading {
      margin: 0;
      max-inline-size: 100%;
      overflow-wrap: break-word;
      color: var(
        --ds-table-key-heading-color,
        ${e(Ae)}
      );
      font-size: var(
        --ds-table-key-heading-font-size,
        ${e($e)}
      );
      line-height: var(
        --ds-table-key-heading-line-height,
        ${e(Ee)}
      );
      font-weight: var(
        --ds-table-key-heading-font-weight,
        ${e(Re)}
      );
      letter-spacing: var(
        --ds-table-key-heading-letter-spacing,
        ${e(Te)}
      );
    }

    ${r} .table-key .table-key__legend {
      display: flex;
      flex-direction: column;
      gap: var(
        --ds-table-key-legend-gap,
        ${e(He)}
      );
    }

    ${r} .table-key .table-key__legend-item {
      display: inline-flex;
      align-items: center;
      gap: var(
        --ds-table-key-legend-item-gap,
        ${e(Le)}
      );
      min-height: var(
        --ds-table-key-legend-item-min-height,
        ${e(Ie)}
      );
      color: var(
        --ds-table-key-legend-color,
        ${e(Oe)}
      );
      font-size: var(
        --ds-table-key-legend-font-size,
        ${e(ze)}
      );
      line-height: var(
        --ds-table-key-legend-line-height,
        ${e(qe)}
      );
      font-weight: var(
        --ds-table-key-legend-font-weight,
        ${e(De)}
      );
    }

    ${r} .table-key .table-key__legend-item reimagine-icon {
      --ds-icon-color: var(
        --ds-table-key-legend-icon-color,
        ${e(We)}
      );
      flex-shrink: 0;
    }
  `},Pe=t`
  /* GENERAL STYLES */
  reimagine-table > table {
    border-collapse: collapse;
    table-layout: fixed;
    display: var(--ds-table-display, ${e("table")});
    flex-direction: var(--ds-table-flex-direction);
    color: var(--ds-table-color, ${e(y)});
    min-width: var(--ds-table-min-width, auto);
    width: var(--ds-table-width, ${e(v)});
  }

  reimagine-table > table > tbody > tr {
    border-block-end: var(
      --ds-table-body-row-border-block-end,
      ${e(_)}
    );
  }

  reimagine-table > table tr {
    min-width: var(--table-row-min-width);
  }

  reimagine-table > table td,
  reimagine-table > table th {
    display: var(--ds-table-cell-display, ${e(w)});
    min-width: var(--ds-table-cell-min-width, ${e(S)});
    padding: var(--ds-table-cell-padding, ${e(x)});
  }

  reimagine-table > table thead th {
    vertical-align: var(
      --ds-table-column-header-vertical-align,
      ${e(k)}
    );
  }

  reimagine-table > table caption {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap;
    border: 0;
  }

  /* Snap points for scrollslider navigation */
  reimagine-table > table thead th[scrollslider-item] {
    scroll-snap-align: start;
  }

  /* TYPOGRAPHY STYLES */

  /* Header cells */
  reimagine-table > table thead tr th {
    font-weight: var(--ds-app-type-heading-3xs-font-weight, 600);
    font-size: var(--ds-app-type-heading-3xs-font-size, 1rem);
    line-height: var(--ds-app-type-heading-3xs-line-height, 1.5rem);
  }

  /* Body subheading cells */
  reimagine-table > table tbody tr.subheading th {
    font-weight: var(--ds-app-type-heading-2xs-font-weight, 600);
    font-size: var(--ds-app-type-heading-2xs-font-size, 1.25rem);
    line-height: var(--ds-app-type-heading-2xs-line-height, 1.75rem);
  }

  /* Body header cells (first column) */
  reimagine-table > table tbody tr:not(.subheading) th,
  reimagine-table > table tbody tr td[role='rowheader'] {
    font-weight: var(--ds-app-type-label-m-font-weight, 600);
    font-size: var(--ds-app-type-label-m-font-size, 0.875rem);
    line-height: var(--ds-app-type-label-m-line-height, 1.25rem);
  }

  /* Body data cells */
  reimagine-table > table tbody tr td {
    font-weight: var(--ds-app-type-body-m-font-weight, 400);
    font-size: var(--ds-app-type-body-m-font-size, 0.75rem);
    line-height: var(--ds-app-type-body-m-line-height, 1.5rem);
    letter-spacing: var(--ds-app-type-action-button-letter-spacing, -0.02em);
  }

  /* ALIGNMENT STYLES */
  reimagine-table > table thead th:not(:first-of-type) {
    text-align: var(
      --ds-table-column-header-text-align,
      ${e(C)}
    );
  }

  /* Data-only structure: the first column header is a real data column, so it
     follows the same alignment as the rest. */
  reimagine-table[structure='data-only'] > table thead th:first-of-type {
    text-align: var(
      --ds-table-column-header-text-align,
      ${e(C)}
    );
  }

  reimagine-table > table thead th:not(:first-of-type) reimagine-tag {
    margin-bottom: var(--ds-app-space-micro-s);
  }
  
  reimagine-table > table thead th:not(:first-of-type) reimagine-sku reimagine-button-group {
    --ds-button-group-width: 100%;
    --ds-button-width: 100%;
  }

  reimagine-table > table tbody td,
  reimagine-table > table tfoot td {
    text-align: var(
      --ds-table-data-cell-text-align,
      ${e(A)}
    );
  }

  /* LAYOUT STYLES */

  /* thead */
  reimagine-table > table thead tr th:first-of-type {
    display: var(
      --ds-table-thead-stub-col-display,
      ${e($)}
    );
  }

  reimagine-table > table thead tr {
    display: var(--ds-table-thead-row-display, ${e(E)});
    flex-direction: var(--ds-table-thead-row-flex-direction);
  }

  /* tbody */
  reimagine-table > table tbody {
    display: var(--ds-table-tbody-display, ${e(R)});
    flex-direction: var(--ds-table-tbody-flex-direction);
  }

  reimagine-table > table tbody tr.subheading td {
    display: var(
      --ds-table-tbody-subheading-data-cell-display,
      ${e(T)}
    );
  }

  reimagine-table > table tbody tr {
    display: var(--ds-table-tbody-row-display, ${e(H)});
    flex-direction: var(--ds-table-tbody-row-flex-direction);
    flex-wrap: var(--ds-table-tbody-row-flex-wrap);
    flex-grow: var(--ds-table-tbody-row-flex-grow);
  }

  reimagine-table > table tbody tr th:first-of-type {
    flex-basis: var(--ds-table-tbody-row-stub-col-flex-basis);
    width: var(--ds-table-tbody-row-stub-col-width);
    flex-shrink: var(--ds-table-tbody-row-stub-col-flex-shrink);
  }

  /* Stub col with 2 children: render inline */
  reimagine-table > table tbody tr th:first-of-type > *:first-child:nth-last-child(2),
  reimagine-table > table tbody tr th:first-of-type > *:first-child:nth-last-child(2) ~ * {
    display: var(--ds-table-stub-col-child-display, ${e(O)});
    vertical-align: var(--ds-table-stub-col-child-vertical-align, ${e(z)});
  }

  /* Stub col with 2 children: between the 1st and 2nd child */
  reimagine-table > table tbody tr th:first-of-type > *:first-child:nth-last-child(2) ~ * {
    margin-inline-start: var(--ds-table-stub-col-child-gap, ${e(q)});
  }

  /* Stub col with 3 children: stack vertically */
  reimagine-table > table tbody tr th:first-of-type > *:first-child:nth-last-child(3),
  reimagine-table > table tbody tr th:first-of-type > *:first-child:nth-last-child(3) ~ * {
    display: var(--ds-table-stub-col-stacked-display, ${e(D)});
    margin-inline-start: 0;
  }

  /* Stub col with 3 children: between the 1st and 2nd child */
  reimagine-table > table tbody tr th:first-of-type > *:first-child:nth-last-child(3) ~ *:nth-child(2) {
    margin-block-start: var(--ds-table-stub-col-label-gap, ${e(W)});
  }

  /* Stub col with 3 children: between the 2nd and 3rd child */
  reimagine-table > table tbody tr th:first-of-type > *:first-child:nth-last-child(3) ~ *:nth-child(3) {
    margin-block-start: var(--ds-table-stub-col-description-gap, ${e(M)});
  }

  /* Stub col with 3 children: 3rd child */
  reimagine-table > table tbody tr th:first-of-type > *:nth-child(3):last-child {
    color: var(--ds-table-stub-col-description-color, ${e(P)});
    font-weight: var(--ds-table-stub-col-description-font-weight, ${e(B)});
    letter-spacing: var(--ds-table-stub-col-description-letter-spacing, ${e(N)});
  }

  /* Data cell with 2+ children */
  reimagine-table > table tbody tr td:has(> :nth-child(2)) {
    font-size: var(--ds-table-data-cell-multi-child-font-size, ${e(j)});
    letter-spacing: var(--ds-table-data-cell-multi-child-letter-spacing, ${e(F)});
  }

  /* Data cell with 2+ children: description p tags */
  reimagine-table > table tbody tr td:has(> :nth-child(2)) > p:not(:first-child) {
    margin-block-start: var(--ds-table-data-cell-description-gap, ${e(Y)});
    color: var(--ds-table-data-cell-description-color, ${e(V)});
  }

  /* Data cell with p+reimagine-icon: render inline */
  reimagine-table > table tbody tr td:has(> p):has(> reimagine-icon) > p {
    display: var(--ds-table-data-cell-inline-display, ${e(G)});
  }

  /* Data cell with 2 inline children */
  reimagine-table > table tbody tr td:not(:has(> p ~ p)):not(:has(> *:not(p) + p)) > *:first-child:nth-last-child(2),
  reimagine-table > table tbody tr td:not(:has(> p ~ p)):not(:has(> *:not(p) + p)) > *:first-child:nth-last-child(2) ~ * {
    vertical-align: var(--ds-table-data-cell-inline-vertical-align, ${e(K)});
  }

  /* Data cell with 2 inline children: between the 1st and 2nd child */
  reimagine-table > table tbody tr td:not(:has(> p ~ p)):not(:has(> *:not(p) + p)) > *:first-child:nth-last-child(2) ~ * {
    margin-inline-start: var(--ds-table-data-cell-inline-gap, ${e(U)});
  }

  /* Data cell with 2 inline children including icon (e.g., p+icon, popover+icon) */
  reimagine-table > table tbody tr td:has(> :nth-child(2)):not(:has(> p ~ p)):not(:has(> *:not(p) + p)):has(> reimagine-icon) {
    font-size: var(--ds-table-data-cell-label-font-size, ${e(X)});
    
    --ds-popover-trigger-label-font-size: var(--ds-table-data-cell-popover-font-size, ${e(J)});
  }

  reimagine-table > table thead tr th,
  reimagine-table > table tbody tr td,
  reimagine-table > table tfoot tr td {
    flex-basis: var(--table-data-cell-flex-basis);
    position: relative;
  }

  /* tfoot */
  reimagine-table > table tfoot tr td:first-of-type {
    display: var(
      --ds-table-tfoot-stub-col-display,
      ${e(L)}
    );
  }

  reimagine-table > table tfoot tr {
    display: var(--ds-table-tfoot-row-display, ${e(I)});
    flex-direction: var(--ds-table-tfoot-row-flex-direction);
  }

  /* STRIPE DIRECTION STYLES */
  reimagine-table[stripe-direction='columns'] > table tr > :nth-child(even) {
    background-color: var(
      --ds-table-stripe-bg-color,
      ${e(Q)}
    );
  }

  /* Column stripe + top banner: non-stub cell inline padding */
  reimagine-table[stripe-direction='columns']:has(thead th .top-banner)
    > table
    tr
    > :not(:first-child) {
    padding-inline: calc(
      var(
          --ds-table-header-banner-gap-inline,
          ${e(we)}
        ) / 2 + var(--ds-app-space-micro-m, 1rem)
    );
  }

  /* Data-only structure: the first column is a real data column, so it needs the
     same banner/stripe inline padding as the other data columns. */
  reimagine-table[structure='data-only'][stripe-direction='columns']:has(thead th .top-banner)
    > table
    tr
    > :first-child {
    padding-inline: calc(
      var(
          --ds-table-header-banner-gap-inline,
          ${e(we)}
        ) / 2 + var(--ds-app-space-micro-m, 1rem)
    );
  }

  /* Inset even-column stripe */
  reimagine-table[stripe-direction='columns']:has(thead th .top-banner)
    > table
    tr
    > :nth-child(even) {
    background-color: transparent;
    background-image: linear-gradient(
      to right,
      transparent
        calc(
          var(
              --ds-table-header-banner-gap-inline,
              ${e(we)}
            ) / 2
        ),
      var(--ds-table-stripe-bg-color, ${e(Q)})
        calc(
          var(
              --ds-table-header-banner-gap-inline,
              ${e(we)}
            ) / 2
        ),
      var(--ds-table-stripe-bg-color, ${e(Q)})
        calc(
          100% -
            var(
              --ds-table-header-banner-gap-inline,
              ${e(we)}
            ) / 2
        ),
      transparent
        calc(
          100% -
            var(
              --ds-table-header-banner-gap-inline,
              ${e(we)}
            ) / 2
        )
    );
  }

  /* Header even-cell: drop gradient, stripe drawn by ::before */
  reimagine-table[stripe-direction='columns']:has(thead th .top-banner)
    > table
    thead
    th:nth-child(even) {
    background-image: none;
    background-color: transparent;
    isolation: isolate;
  }

  reimagine-table[stripe-direction='columns']:has(thead th .top-banner)
    > table
    thead
    th:nth-child(even)::before {
    /* Top-rounded stripe box that tucks flush behind the banner */
    content: '';
    position: absolute;
    z-index: -1;
    inset-block-start: 0;
    inset-block-end: 0;
    inset-inline: calc(
      var(
          --ds-table-header-banner-gap-inline,
          ${e(we)}
        ) / 2
    );
    background-color: var(
      --ds-table-stripe-bg-color,
      ${e(Q)}
    );
    border-start-start-radius: var(--ds-app-radii-s, 0.5rem);
    border-start-end-radius: var(--ds-app-radii-s, 0.5rem);
  }

  reimagine-table[stripe-direction='rows'] > table tr.stripe {
    background-color: var(
      --ds-table-stripe-bg-color,
      ${e(Q)}
    );
  }

  /* ACCORDION ROWS STYLES */
  reimagine-table > table tbody tr[data-collapsed] {
    display: var(
      --ds-table-accordion-rows-collapsed-display,
      ${e(Z)}
    );
  }

  reimagine-table > table tbody tr[data-accordion-header] th .accordion-trigger {
    display: inline-flex;
    align-items: center;
    gap: var(
      --ds-table-accordion-rows-trigger-gap,
      ${e(ee)}
    );
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    color: var(
      --ds-table-accordion-rows-trigger-color,
      ${e(te)}
    );
    font: inherit;
    text-align: var(
      --ds-table-accordion-rows-trigger-text-align,
      ${e(ie)}
    );
    width: var(
      --ds-table-accordion-rows-trigger-width,
      ${e(re)}
    );
  }

  reimagine-table > table tbody tr[data-accordion-header] th .accordion-trigger:focus {
    outline: none;
  }

  reimagine-table > table tbody tr[data-accordion-header] th .accordion-trigger:focus-visible {
    ${o};
  }

  reimagine-table > table tbody tr[data-accordion-header] th .accordion-chevron {
    --ds-icon-color: var(
      --ds-table-accordion-rows-chevron-icon-color,
      ${e(ae)}
    );
    flex-shrink: var(
      --ds-table-accordion-rows-chevron-flex-shrink,
      ${e(le)}
    );
    display: flex;
    align-items: center;
    justify-content: center;
    transform: var(
      --ds-table-accordion-rows-chevron-transform,
      ${e(ne)}
    );
    transform-origin: var(
      --ds-table-accordion-rows-chevron-transform-origin,
      ${e(oe)}
    );
    transition: transform var(--ds-motion-duration-medium2)
      var(--ds-motion-easing-enter);

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }

  reimagine-table > table tbody tr[data-accordion-header] th .accordion-trigger[aria-expanded='true'] .accordion-chevron {
    transform: var(
      --ds-table-accordion-rows-chevron-expanded-transform,
      ${e(se)}
    );
  }

  /* TOP BANNER STYLES */

  /* Relaxed density: larger banner block offset */
  reimagine-table[density='relaxed'] {
    --ds-table-header-banner-offset-block-start: var(--ds-app-space-micro-l, 1.5rem);
  }

  /* Striped mode: banner inline offset */
  reimagine-table[stripe-direction='columns']:has(thead th .top-banner) {
    --ds-table-header-banner-offset-inline: calc(
      var(--ds-table-header-banner-gap-inline, ${e(we)}) /
        2 + var(--ds-app-space-micro-m, 1rem)
    );
  }

  reimagine-table > table thead th .top-banner {
    display: var(
      --ds-table-header-banner-display,
      ${e(de)}
    );
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: var(
      --ds-table-header-banner-min-height,
      ${e(ce)}
    );
    margin-block-start: calc(
      -1 *
        var(
          --ds-table-header-banner-offset-block-start,
          ${e(Se)}
        )
    );
    margin-block-end: var(
      --ds-table-header-banner-gap,
      ${e(he)}
    );
    margin-inline: calc(
      var(
        --ds-table-header-banner-gap-inline,
        ${e(we)}
      ) / 2 -
        var(
          --ds-table-header-banner-offset-inline,
          ${e(_e)}
        )
    );
    padding: var(
      --ds-table-header-banner-padding,
      ${e(be)}
    );
    border-start-start-radius: var(
      --ds-table-header-banner-border-radius,
      ${e(pe)}
    );
    border-start-end-radius: var(
      --ds-table-header-banner-border-radius,
      ${e(pe)}
    );
    background-color: var(
      --ds-table-header-banner-bg,
      ${e(ge)}
    );
    color: var(
      --ds-table-header-banner-fg,
      ${e(ue)}
    );
    font-weight: var(
      --ds-table-header-banner-font-weight,
      ${e(me)}
    );
    font-size: var(
      --ds-table-header-banner-font-size,
      ${e(fe)}
    );
    line-height: var(
      --ds-table-header-banner-line-height,
      ${e(ye)}
    );
    letter-spacing: var(
      --ds-table-header-banner-letter-spacing,
      ${e(ve)}
    );
  }

  .sr-only {
    ${p};
  }

  /* TABLE KEY STYLES */

  ${Me("reimagine-table > table thead th")}

  /* TABLE KEY TOGGLE STYLES */

  /* Hides rows while "only show differences" is on. We need our own rule
     instead of the native hidden attribute because the layout rules above set
     an explicit display on rows, which would override it. */
  reimagine-table > table tbody tr[data-differences-hidden] {
    display: var(
      --ds-table-differences-hidden-display,
      ${e("none")}
    );
  }
`,Be="10",Ne="var(--ds-app-color-surface-solid-bg-default)",je="var(--ds-elevation-level-3, 0px 4px 8px rgba(0, 0, 0, 0.14), 0px 0px 2px rgba(0, 0, 0, 0.12))",Fe="var(--ds-app-color-base-default-fg-heading)",Ye="var(--ds-app-space-micro-s, 0.75rem)",Ve=t`
  :host {
    /* Establishes a positioning context for the sticky-heading sentinel,
      which is appended absolutely positioned to the shadow root. */
    position: relative;
  }

  :host([alignment='center']) {
    --ds-table-column-header-text-align: center;
    --ds-table-data-cell-text-align: center;
  }

  :host([density='relaxed']) {
    --ds-table-cell-padding: var(--ds-app-space-micro-l, 1.5rem) var(--ds-app-space-micro-m, 1rem);
  }

  /* Sticky heading clone wrapper (appended to shadow root by controller) */
  [data-sticky-clone] {
    position: fixed;
    inset-block-start: var(
      --ds-table-sticky-heading-top,
      ${e("0")}
    );
    inset-inline-start: 0;
    inline-size: 100%;
    overflow: hidden;
    padding-block-start: var(
      --ds-table-sticky-heading-padding-block-start,
      ${e(Ye)}
    );
    z-index: var(
      --ds-table-sticky-heading-z-index,
      ${e(Be)}
    );
    background-color: var(
      --ds-table-sticky-heading-background-color,
      ${e(Ne)}
    );
    box-shadow: var(
      --ds-table-sticky-heading-box-shadow,
      ${e(je)}
    );
    color: var(
      --ds-table-sticky-heading-color,
      ${e(Fe)}
    );
  }

  .table__sr-status {
    ${p};
  }

  /* The sticky-heading clone lives in the shadow root, where the light-dom
     '.table-key' rules cannot reach. Re-scope the shared table-key styles to
     the clone so the first header cell renders identically when stuck. */

  ${e(s(Me("[data-sticky-clone] th").cssText))}
`,Ge="120px",Ke="calc(var(--table-column-count, 1) * var(--ds-table-cell-min-width, 120px))",Ue="0.75",Xe="1",Je="0.9",Qe=t`
  /* vp3 and above */
  @media (min-width: ${e(g.md)}) {
    :host {
      --ds-table-min-width: var(--table-min-width);
    }
  }

  /* vp2 and below */
  @media (max-width: ${e(u(g.md))}) {
    :host([layout='2-col']),
    :host([layout='2-col-overflow']) {
      --ds-table-display: flex;
      --ds-table-flex-direction: column;
      --ds-table-thead-stub-col-display: none;
      --ds-table-thead-row-display: flex;
      --ds-table-thead-row-flex-direction: row;
      --ds-table-tbody-display: flex;
      --ds-table-tbody-flex-direction: column;
      --ds-table-tbody-row-display: flex;
      --ds-table-tbody-row-flex-direction: row;
      --ds-table-tbody-row-flex-wrap: wrap;
      --ds-table-tbody-row-flex-grow: 1;
      --ds-table-tbody-row-stub-col-flex-basis: 100%;
      --ds-table-tbody-row-stub-col-width: 100%;
      --ds-table-tbody-row-stub-col-flex-shrink: 0;
      --ds-table-tbody-subheading-data-cell-display: none;
      --ds-table-tfoot-stub-col-display: none;
      --ds-table-tfoot-row-display: flex;
      --ds-table-tfoot-row-flex-direction: row;
      --ds-table-cell-min-width: calc(100% / var(--table-row-column-count));
      --table-data-cell-flex-basis: calc(100% / var(--table-row-column-count));
      --table-row-min-width: calc(
        (var(--table-row-column-count)) / 2 * 100% * var(--table-row-column-scale)
      );
      --table-row-column-scale: ${e(Ue)};
    }

    /* Data-only structure: keep the first header/footer cell visible since
       it's now a real data column. No full-width rule applies (no
       th:first-of-type). */
    :host([structure='data-only'][layout='2-col']),
    :host([structure='data-only'][layout='2-col-overflow']) {
      --ds-table-thead-stub-col-display: table-cell;
      --ds-table-tfoot-stub-col-display: table-cell;
    }

    :host([layout='preserve-columns']) {
      --ds-table-min-width: max(
        100%,
        var(
          --ds-table-preserve-columns-min-width,
          ${e(Ke)}
        )
      );
    }
  }

  /* vp1 */
  @media (max-width: ${e(g.sm)}) {
    :host {
      --ds-table-cell-min-width: ${e(Ge)};
    }

    :host([layout='2-col']) {
      --table-row-column-scale: ${e(Xe)};
    }

    :host([layout='2-col-overflow']) {
      --table-row-column-scale: ${e(Je)};
    }
  }
`,Ze="2-col",et="2-col-overflow",tt="key-value",it="data-only",rt="compact",at="left",lt="none",nt="rows",ot="closed",st=[".title",".sku-item",".description",".note",".footer"],dt=[".tag",".pricing-container",".recurrence",".unavailable"],ct="data-table-section-prefix",ht="table-key-toggle",bt="data-differences-hidden",pt="reimagine-toggle-switch-changed",gt=class e{constructor(e){this._generatedRowIds=new Set,this._host=e,e.addController(this)}hostConnected(){}init(){this.teardown();const e=this._getAllBodyRows();e.forEach(e=>{this._isAutoDetectedHeader(e)&&(e.dataset.accordionHeader="")});let t=0;e.forEach((i,r)=>{if(!this._isAutoDetectedHeader(i))return;t++;const a=!!i.querySelector(".accordion-trigger"),l=this._getChildRows(e,r);a||this._setupGroupHeader(i,this._isGroupExpanded(t),l);const n=i.querySelector(".accordion-trigger");(n?"true"===n.getAttribute("aria-expanded"):this._isGroupExpanded(t))?l.forEach(e=>{delete e.dataset.collapsed,e.removeAttribute("aria-hidden")}):l.forEach(e=>{e.dataset.collapsed="",e.setAttribute("aria-hidden","true")})})}teardown(){this._getAllBodyRows().forEach(e=>{if(e.querySelector(".accordion-trigger")){delete e.dataset.accordionHeader;const t=e.querySelector("th"),i=null==t?void 0:t.querySelector(".accordion-trigger");if(t&&i){const e=i.querySelector(".table-group-label");if(e)for(;e.firstChild;)t.append(e.firstChild);i.remove()}}delete e.dataset.collapsed,e.removeAttribute("aria-hidden");const t=e.id;this._generatedRowIds.has(t)&&(e.removeAttribute("id"),this._generatedRowIds.delete(t))})}_getAllBodyRows(){return(this._host._slot??[]).flatMap(e=>Array.from(e.querySelectorAll("tbody tr")))}_isGroupExpanded(e){const{accordionOpen:t}=this._host;if(!t)return 1===e;if(t===ot)return!1;const i=Number.parseInt(t,10);return!Number.isNaN(i)&&e===i}_isAutoDetectedHeader(e){return this._host.isSubheadingRow(e)}_setupGroupHeader(t,i,r){const a=t.querySelector("th");if(!a)return;const l=r.map(t=>{const i="accordion-row-"+ ++e._idCounter;return t.id=i,this._generatedRowIds.add(i),i}),n=document.createElement("span");for(n.className="table-group-label";a.firstChild;)n.append(a.firstChild);const o=document.createElement("button");o.type="button",o.className="accordion-trigger",o.setAttribute("aria-expanded",String(i)),l.length>0&&o.setAttribute("aria-controls",l.join(" "));const s=document.createElement("reimagine-icon");s.setAttribute("icon","chevron-down"),s.setAttribute("size","medium"),s.setAttribute("filled",""),s.setAttribute("aria-hidden","true"),s.className="accordion-chevron",o.append(n),o.append(s),o.addEventListener("click",()=>this._toggleGroup(t)),a.append(o)}_getChildRows(e,t){const i=[];for(let r=t+1;r<e.length&&void 0===e[r].dataset.accordionHeader;r++)i.push(e[r]);return i}_toggleGroup(e){const t=e.querySelector(".accordion-trigger");if(!t)return;const i="true"!==t.getAttribute("aria-expanded");t.setAttribute("aria-expanded",String(i));const r=this._getAllBodyRows(),a=r.indexOf(e);if(a<0)return;const l=this._getChildRows(r,a);i?l.forEach(e=>{delete e.dataset.collapsed,e.removeAttribute("aria-hidden")}):l.forEach(e=>{e.dataset.collapsed="",e.setAttribute("aria-hidden","true")})}};gt._idCounter=0;let ut=gt;function mt(e){const t=e.localName;if(t.startsWith("reimagine-button")||t.startsWith("reimagine-toggle-switch"))return!0;if("a"===t)return e.hasAttribute("href");if("button"===t||"input"===t||"select"===t||"textarea"===t)return!0;const i=e.getAttribute("tabindex");return null!==i&&"-1"!==i}const ft=["enabled","checked","selected","pressed","aria-checked","aria-pressed","aria-expanded","aria-selected"],yt=["for","headers","aria-labelledby","aria-describedby","aria-controls","aria-owns","aria-flowto","aria-activedescendant","aria-details","aria-errormessage"];class vt{constructor(e){this._stickyControlsWired=!1,this._sentinelAbove=!1,this._tableVisible=!1,this._syncing=!1,this._syncRaf=null,this._lastScrollLeft=-1,this._lastSyncedWidth=-1,this._handleStickyMirror=()=>this._mirrorStickyState(),this._onScroll=()=>{!this._syncing&&this._cloneWrapper&&this._startSmoothSync()},this._host=e,e.addController(this)}hostConnected(){}init(){const e=this._host._slot??[];let t;for(const i of e){const e=i.querySelector("thead");if(e){t=e;break}}if(!t)return;const{shadowRoot:i}=this._host;if(!i)return;this.teardown(),this._thead=t,this._table=t.closest("table")??void 0;const r=document.createElement("div");r.setAttribute("aria-hidden","true"),r.dataset.stickySentinel="",r.style.position="absolute",r.style.insetInlineStart="0",r.style.insetInlineEnd="0",r.style.height="0",r.style.pointerEvents="none",i.append(r),this._sentinel=r,this._updateSentinelPosition(),this._sentinelPositionObserver=new ResizeObserver(()=>{this._updateSentinelPosition()}),this._sentinelPositionObserver.observe(this._host),this._table&&this._sentinelPositionObserver.observe(this._table),this._sentinelObserver=new IntersectionObserver(e=>{for(const t of e)t.isIntersecting?this._sentinelAbove=!1:this._sentinelAbove=t.boundingClientRect.bottom<=0;this._evaluateSticky()},{root:null,threshold:0}),this._sentinelObserver.observe(r),this._tableObserver=new IntersectionObserver(e=>{for(const t of e)this._tableVisible=t.isIntersecting;this._evaluateSticky()},{root:null,threshold:0}),this._tableObserver.observe(this._host)}teardown(){var e,t,i,r,a;null==(e=this._sentinelObserver)||e.disconnect(),this._sentinelObserver=void 0,null==(t=this._tableObserver)||t.disconnect(),this._tableObserver=void 0,null==(i=this._sentinelPositionObserver)||i.disconnect(),this._sentinelPositionObserver=void 0,null==(r=this._sentinel)||r.remove(),this._sentinel=void 0,this._sentinelAbove=!1,this._tableVisible=!1,null==(a=this._scrollableEl)||a.removeEventListener("scroll",this._onScroll),this._scrollableEl=void 0,this._removeStuck(),this._thead=void 0,this._table=void 0}_updateSentinelPosition(){const e=this._sentinel,t=this._thead;if(!e||!t)return;const i=t.getBoundingClientRect().top-this._host.getBoundingClientRect().top;e.style.insetBlockStart=`${i}px`}_evaluateSticky(){const e=this._sentinelAbove&&this._tableVisible;e&&!this._cloneWrapper?this._applyStuck():!e&&this._cloneWrapper&&this._removeStuck()}_applyStuck(){const e=this._thead,t=this._table,i=this._host._scrollsliderEl,{shadowRoot:r,scrollLeft:a}=this._host;if(!e||!t||!i||!r||this._cloneWrapper)return;const l=getComputedStyle(t),n=l.display,o=l.flexDirection,s=e.querySelector("tr"),d=i.scrollableElement,c=(null==s?void 0:s.scrollWidth)??(null==d?void 0:d.scrollWidth)??t.scrollWidth,h=Array.from(e.querySelectorAll("tr")).map(e=>{const t=getComputedStyle(e);return{display:t.display,flexDirection:t.flexDirection}}),b=Array.from(e.querySelectorAll("th")),p=b.map(e=>{const t=getComputedStyle(e);return{display:t.display,width:e.offsetWidth,height:e.offsetHeight,padding:t.padding,fontWeight:t.fontWeight,fontSize:t.fontSize,lineHeight:t.lineHeight,textAlign:t.textAlign,color:t.color}}),g=b.map(e=>{const t=e.querySelector(".top-banner");if(!t)return null;const i=getComputedStyle(t);return{display:i.display,alignItems:i.alignItems,justifyContent:i.justifyContent,textAlign:i.textAlign,minHeight:i.minHeight,marginBlockStart:i.marginBlockStart,marginBlockEnd:i.marginBlockEnd,marginInlineStart:i.marginInlineStart,marginInlineEnd:i.marginInlineEnd,padding:i.padding,borderStartStartRadius:i.borderStartStartRadius,borderStartEndRadius:i.borderStartEndRadius,backgroundColor:i.backgroundColor,backgroundImage:i.backgroundImage,color:i.color,fontWeight:i.fontWeight,fontSize:i.fontSize,lineHeight:i.lineHeight,letterSpacing:i.letterSpacing}});e.style.visibility="hidden",e.setAttribute("aria-hidden","true");const u=e.cloneNode(!0);u.style.visibility="",u.removeAttribute("aria-hidden"),Array.from(u.querySelectorAll("tr")).forEach((e,t)=>{const i=h[t];i&&(e.style.display=i.display,e.style.flexDirection=i.flexDirection)}),Array.from(u.querySelectorAll("th")).forEach((e,t)=>{const i=p[t];e.style.display=i.display,e.style.width=`${i.width}px`,e.style.minWidth=`${i.width}px`,e.style.maxWidth=`${i.width}px`,e.style.height=`${i.height}px`,e.style.padding=i.padding,e.style.fontWeight=i.fontWeight,e.style.fontSize=i.fontSize,e.style.lineHeight=i.lineHeight,e.style.textAlign=i.textAlign,e.style.color=i.color,e.style.verticalAlign="top";const r=g[t],a=e.querySelector(".top-banner");r&&a&&Object.assign(a.style,r)});const m=document.createElement("table");m.style.width=`${c}px`,m.style.display=n,m.style.flexDirection=o,m.append(u),this._cloneTable=m;const f=document.createElement("div");f.dataset.stickyClone="",f.append(m),r.append(f),this._cloneWrapper=f,this._wireStickyControls(e,u,f),this._syncTransform(a),this._startSmoothSync(),this._setupWidthObserver(t),this._windowResizeHandler=()=>{if(!this._cloneWrapper)return;const{scrollLeft:e}=this._host;this._syncTransform(e)},window.addEventListener("resize",this._windowResizeHandler)}_wireStickyControls(e,t,i){this._renamespaceCloneIds(t);const r=Array.from(e.querySelectorAll("*")).filter(e=>mt(e)),a=Array.from(t.querySelectorAll("*")).filter(e=>mt(e)),l=Math.min(r.length,a.length),n=[];for(let e=0;e<l;e++)n.push({real:r[e],clone:a[e]});this._stickyControlPairs=n,0!==n.length&&(i.addEventListener("click",this._handleStickyMirror),i.addEventListener("change",this._handleStickyMirror),this._stickyControlsWired=!0)}_renamespaceCloneIds(e){const t=new Map,i=Array.from(e.querySelectorAll("[id]"));if(e.id&&i.unshift(e),i.forEach((e,i)=>{const r=e.id;if(!r)return;const a=`sticky-clone-${i}-${r}`;t.set(r,a),e.id=a}),0===t.size)return;const r=[e,...Array.from(e.querySelectorAll("*"))];for(const e of r)for(const i of yt){const r=e.getAttribute(i);if(null===r)continue;const a=r.split(/\s+/).map(e=>t.get(e)??e).join(" ");a!==r&&e.setAttribute(i,a)}}_mirrorStickyState(){const e=this._stickyControlPairs;if(e)for(const{real:t,clone:i}of e){for(const e of ft)i.hasAttribute(e)?t.setAttribute(e,i.getAttribute(e)??""):t.removeAttribute(e);"boolean"==typeof i.enabled&&(t.enabled=i.enabled),"boolean"==typeof i.checked&&(t.checked=i.checked),"string"==typeof i.value&&(t.value=i.value)}}_removeStuck(){var e,t,i;null!==this._syncRaf&&(cancelAnimationFrame(this._syncRaf),this._syncRaf=null),this._syncing=!1,this._lastScrollLeft=-1,null==(e=this._scrollableEl)||e.removeEventListener("scroll",this._onScroll),this._scrollableEl=void 0,null==(t=this._widthObserver)||t.disconnect(),this._widthObserver=void 0,this._windowResizeHandler&&(window.removeEventListener("resize",this._windowResizeHandler),this._windowResizeHandler=void 0),this._stickyControlsWired&&this._cloneWrapper&&(this._mirrorStickyState(),this._cloneWrapper.removeEventListener("click",this._handleStickyMirror),this._cloneWrapper.removeEventListener("change",this._handleStickyMirror)),this._stickyControlsWired=!1,this._stickyControlPairs=void 0,null==(i=this._cloneWrapper)||i.remove(),this._cloneWrapper=void 0,this._cloneTable=void 0,this._thead&&(this._thead.style.visibility="",this._thead.removeAttribute("aria-hidden"))}_startSmoothSync(){var e,t;if(this._syncing)return;this._syncing=!0;const i=()=>{if(!this._host.isConnected)return this._syncing=!1,void(this._syncRaf=null);const e=this._host.scrollLeft;if(e!==this._lastScrollLeft)return this._lastScrollLeft=e,this._syncTransform(e),void(this._syncRaf=requestAnimationFrame(i));this._syncing=!1,this._syncRaf=null};this._syncRaf=requestAnimationFrame(i),this._scrollableEl=(null==(e=this._host._scrollsliderEl)?void 0:e.scrollableElement)??void 0,null==(t=this._scrollableEl)||t.addEventListener("scroll",this._onScroll)}_syncTransform(e){if(!this._cloneTable||!this._host||!this._host.isConnected)return;const t="rtl"===getComputedStyle(this._host).direction,i=this._host.getBoundingClientRect(),r=t?i.right-window.innerWidth-e:i.left-e;this._cloneTable.style.transform=`translateX(${r}px)`}_setupWidthObserver(e){const t=e.querySelector("tbody tr");t&&(this._widthObserver=new ResizeObserver(()=>{var t;e.isConnected?this._syncCellWidths(e):null==(t=this._widthObserver)||t.disconnect()}),this._widthObserver.observe(t))}_syncCellWidths(e){var t;if(!this._cloneTable)return;const i=e.querySelector("thead"),r=null==i?void 0:i.querySelector("tr"),a=this._scrollableEl??(null==(t=this._host._scrollsliderEl)?void 0:t.scrollableElement),l=(null==r?void 0:r.scrollWidth)??(null==a?void 0:a.scrollWidth)??e.scrollWidth;if(l===this._lastSyncedWidth){const t=e.querySelectorAll("thead th"),i=this._cloneTable.querySelectorAll("th");return t.forEach((e,t)=>{const r=i[t];r&&(r.style.height=`${e.offsetHeight}px`)}),void this._syncTransform(this._host.scrollLeft)}this._lastSyncedWidth=l,this._cloneTable.style.width=`${l}px`;const n=getComputedStyle(e);if(this._cloneTable.style.display=n.display,this._cloneTable.style.flexDirection=n.flexDirection,i){const e=Array.from(i.querySelectorAll("tr")),t=Array.from(this._cloneTable.querySelectorAll("tr"));e.forEach((e,i)=>{const r=t[i];if(!r)return;const a=getComputedStyle(e);r.style.display=a.display,r.style.flexDirection=a.flexDirection})}const o=Array.from(e.querySelectorAll("thead th")),s=Array.from(this._cloneTable.querySelectorAll("th"));o.forEach((e,t)=>{const i=s[t];if(!i)return;i.style.display=getComputedStyle(e).display;const r=e.offsetWidth;i.style.width=`${r}px`,i.style.minWidth=`${r}px`,i.style.maxWidth=`${r}px`,i.style.height=`${e.offsetHeight}px`});const{scrollLeft:d}=this._host;this._syncTransform(d)}}var _t=Object.defineProperty,wt=Object.getOwnPropertyDescriptor,St=Object.getPrototypeOf,xt=Reflect.get,kt=(e,t,i,r)=>{for(var a,l=r>1?void 0:r?wt(t,i):t,n=e.length-1;n>=0;n--)(a=e[n])&&(l=(r?a(t,i,l):a(l))||l);return r&&l&&_t(t,i,l),l};const Ct="reimagine-table";let At=class extends d{constructor(){super(),this.density=rt,this.alignment=at,this.stripeDirection=lt,this.accordionRows=!1,this.stickyHeading=!1,this.firstColumnAnnouncement="Start of table columns reached",this.lastColumnAnnouncement="End of table columns reached",this.visibleColumnsAnnouncement="Showing columns {start} through {end} of {total}",this.sectionPrefixAnnouncement="Section:",this.prevControlLabel="Show previous columns",this.nextControlLabel="Show next columns",this.differencesOnAnnouncement="Showing differences only, {count} rows hidden",this.differencesOffAnnouncement="Showing all rows",this._liveMessage="",this._handleScrollsliderScroll=()=>{void 0!==this._pendingAnnouncementForward&&(void 0!==this._scrollSettleTimerId&&clearTimeout(this._scrollSettleTimerId),this._scrollSettleTimerId=setTimeout(()=>{if(this._scrollSettleTimerId=void 0,void 0===this._pendingAnnouncementForward)return;const e=this._pendingAnnouncementForward;this._pendingAnnouncementForward=void 0;const t=this._resolveAnnouncement(e);t&&this._announce(t)},At.SCROLL_SETTLE_DELAY_MS))},this._handleToggleKeyChange=e=>{var t;if(!e.composedPath().some(e=>e instanceof HTMLElement&&e.hasAttribute(ht)))return;const i=(null==(t=e.detail)?void 0:t.enabled)??!1,r=this._applyDifferencesHidden(i);this._announceDifferencesChange(i,r)},this._viewportResizeObserver=new f(this,{callback:()=>this._handleViewportChange()})}_attachScrollsliderListener(){var e;null==(e=this._scrollsliderEl)||e.addEventListener(m.scroll,this._handleScrollsliderScroll)}_detachScrollsliderListener(){var e;null==(e=this._scrollsliderEl)||e.removeEventListener(m.scroll,this._handleScrollsliderScroll)}_applyDifferencesHidden(e){if(!this._slot)return 0;let t=0;return this._slot.forEach(i=>{i.querySelectorAll("tbody tr[toggle-collapsible]").forEach(i=>{e?i.setAttribute(bt,""):i.removeAttribute(bt),t++})}),t}_announceDifferencesChange(e,t){const i=e?this.differencesOnAnnouncement:this.differencesOffAnnouncement,r=null==i?void 0:i.trim();r&&this._announce(e?((e,t)=>e.replaceAll("{count}",String(t)))(r,t):r)}_syncDifferencesToggleState(){if(!this._slot)return;const e=this._slot.flatMap(e=>Array.from(e.querySelectorAll(`[${ht}]`))).at(0);this._applyDifferencesHidden(!(null==e||!e.hasAttribute("enabled")))}_handleViewportChange(){const e=this._scrollsliderEl;if(!e)return;const t=this._viewportResizeObserver.isMobile()?c.small:c.large;e.controlSize!==t&&e.setControlSize(t),this._toggleFirstHeaderScrollsliderItem(),this._requestHeaderCellContentHeightSync()}_toggleFirstHeaderScrollsliderItem(){if(!this._slot||!this.layout)return;const e=this._slot.flatMap(e=>Array.from(e.querySelectorAll("thead tr:first-child th:first-child"))).at(0);if(!e)return;const t=!(!this._viewportResizeObserver.isDesktop()&&this.structure!==it&&(this.layout===Ze||this.layout===et)),i=e.hasAttribute("scrollslider-item");t&&!i?(e.setAttribute("scrollslider-item",""),this._syncScrollsliderItems()):!t&&i&&(e.removeAttribute("scrollslider-item"),this._syncScrollsliderItems())}_getScrollsliderItems(){return this._slot?this._slot.flatMap(e=>Array.from(e.querySelectorAll("thead tr:first-child [scrollslider-item]"))):[]}_syncScrollsliderItems(){const e=this._scrollsliderEl;e&&e.setScrollsliderItems(this._getScrollsliderItems())}_handleSlotChange(){var e;this._slot&&(this._requestHeaderCellContentHeightSync(),this._applyRowHeaderRoles(),this._markSubheadings(),this._markStripedRows(),this._detectColumnCount(),this._toggleFirstHeaderScrollsliderItem(),this._syncScrollsliderItems(),this._syncDifferencesToggleState(),this.accordionRows&&this._getOrCreateAccordionController().init(),this.stickyHeading&&(null==(e=this._stickyHeadingController)||e.teardown(),this._getOrCreateStickyHeadingController().init()))}_requestHeaderCellContentHeightSync(){this._headerCellHeightSyncRafId&&window.cancelAnimationFrame(this._headerCellHeightSyncRafId),this._headerCellHeightSyncRafId=window.requestAnimationFrame(()=>{this._headerCellHeightSyncRafId=void 0,this._syncHeaderCellContentHeights()})}_syncHeaderCellContentHeights(){if(!this._slot)return;const e=this._slot.flatMap(e=>Array.from(e.querySelectorAll("thead tr:first-child th:has(> reimagine-sku)")));if(!e.length)return;const t=new Map,i=(e,i)=>{if(!(i instanceof HTMLElement))return;const r=t.get(e);r?r.push(i):t.set(e,[i])},r=[],a=[];e.forEach(e=>{const t=e.querySelector("reimagine-tag");t?(a.push(t),i("cell-tag",t)):r.push(e);const l=h(e,"reimagine-sku").find(t=>t.parentElement===e);if(!l)return;const n=l.shadowRoot;n&&(st.forEach(e=>{i(`sku:${e}`,n.querySelector(e))}),Array.from(h(l,"reimagine-sku-item")).forEach(e=>{const t=e.shadowRoot;t&&dt.forEach(e=>{i(`sku-item:${e}`,t.querySelector(e))})}))}),t.forEach(e=>{e.forEach(e=>e.style.removeProperty("min-height"))}),r.forEach(e=>{const t=h(e,"reimagine-sku").find(t=>t.parentElement===e);t&&t.style.removeProperty("padding-top")});const l=new Map;t.forEach((e,t)=>{if(e.length<2)return;const i=Math.max(...e.map(e=>e.getBoundingClientRect().height));i>0&&l.set(t,i)});let n=0;if(r.length>0&&a.length>0){const e=a[0],t=e.getBoundingClientRect().height,i=getComputedStyle(e);n=t+parseFloat(i.marginBottom||"0")}if(l.forEach((e,i)=>{const r=`${e}px`;t.get(i).forEach(e=>e.style.setProperty("min-height",r))}),n>0){const e=`${n}px`;r.forEach(t=>{const i=h(t,"reimagine-sku").find(e=>e.parentElement===t);i&&i.style.setProperty("padding-top",e)})}}_detectColumnCount(){if(!this._slot)return;const e=this._slot.flatMap(e=>Array.from(e.querySelectorAll("thead tr:first-child"))).at(0);if(!e)return;const t=Array.from(e.querySelectorAll("th, td")).reduce((e,t)=>e+(t.colSpan||1),0);t>0&&this._columnCount!==t&&(this._columnCount=t)}_markSubheadings(){this._slot&&this._slot.forEach(e=>{e.querySelectorAll("tbody tr").forEach(e=>{const t=this.isSubheadingRow(e);e.classList.toggle("subheading",t),this._updateSectionPrefix(e,t)})})}_updateSectionPrefix(e,t){var i;const r=e.firstElementChild;if(!(r instanceof HTMLElement)||"TH"!==r.tagName)return;const a=r.querySelector(`[${ct}]`),l=null==(i=this.sectionPrefixAnnouncement)?void 0:i.trim();if(t&&l){const e=`${l} `;if(a)a.textContent!==e&&(a.textContent=e);else{const t=document.createElement("span");t.className="sr-only",t.setAttribute(ct,""),t.textContent=e,r.prepend(t)}}else null==a||a.remove()}_markStripedRows(){if(this._slot){if(this.stripeDirection!==nt)return void this._slot.forEach(e=>{e.querySelectorAll("tr.stripe").forEach(e=>e.classList.remove("stripe"))});this._slot.forEach(e=>{e.querySelectorAll("thead tr, tbody tr, tfoot tr").forEach((e,t)=>{e.classList.toggle("stripe",t%2==1)})})}}_applyRowHeaderRoles(){if(!this._slot)return;const e=this._slot.flatMap(e=>Array.from(e.querySelectorAll("tbody tr > td:first-child"))),t=this.structure===tt;e.forEach(e=>{t&&this._hasDiscernibleContent(e)?e.setAttribute("role","rowheader"):e.removeAttribute("role")})}_hasDiscernibleContent(e){var t;return!!(null==(t=e.textContent)?void 0:t.trim())||!!e.querySelector('img[alt]:not([alt=""]), [aria-label]:not([aria-label=""]), [aria-labelledby]')}_getOrCreateAccordionController(){return this._accordionController??(this._accordionController=new ut(this)),this._accordionController}_getOrCreateStickyHeadingController(){return this._stickyHeadingController??(this._stickyHeadingController=new vt(this)),this._stickyHeadingController}_announce(e){void 0!==this._announceTimerId&&clearTimeout(this._announceTimerId),this._liveMessage="",this._announceTimerId=setTimeout(()=>{this._announceTimerId=void 0,this._liveMessage=e},At.ANNOUNCE_DELAY_MS)}_handleSlideChanged(e){const{detail:t}=e;this._pendingAnnouncementForward=t.currentIndex>t.previousIndex,void 0!==this._scrollSettleTimerId&&(clearTimeout(this._scrollSettleTimerId),this._scrollSettleTimerId=void 0)}_resolveAnnouncement(e){const t=this._scrollsliderEl;if(!t)return;if(e&&t.atEnd)return this.lastColumnAnnouncement;if(!e&&t.atBeginning)return this.firstColumnAnnouncement;const i=this._computeVisibleColumnRange();return i?this._formatVisibleColumnsMessage(i):void 0}_computeVisibleColumnRange(){var e;const t=this._getScrollsliderItems(),i=null==(e=this._scrollsliderEl)?void 0:e.scrollableElement;if(0===t.length||!i)return;const r=i.getBoundingClientRect();let a,l;return t.forEach((e,t)=>{const i=e.getBoundingClientRect();i.left>=r.left-1&&i.right<=r.right+1&&(a??(a=t+1),l=t+1)}),void 0!==a&&void 0!==l?{start:a,end:l,total:t.length}:void 0}_formatVisibleColumnsMessage(e){const t=this.visibleColumnsAnnouncement;if(t)return((e,t,i,r)=>e.replaceAll("{start}",String(t)).replaceAll("{end}",String(i)).replaceAll("{total}",String(r)))(t,e.start,e.end,e.total)}connectedCallback(){super.connectedCallback(),At.instanceCount++,At.lightDomSheet||(At.lightDomSheet=new CSSStyleSheet,At.lightDomSheet.replaceSync(s(Pe.cssText)),document.adoptedStyleSheets=[...document.adoptedStyleSheets,At.lightDomSheet]),this._attachScrollsliderListener(),this.addEventListener(pt,this._handleToggleKeyChange)}disconnectedCallback(){var e,t,i;super.disconnectedCallback(),null==(e=this._viewportResizeObserver)||e.hostDisconnected(),null==(t=this._accordionController)||t.teardown(),null==(i=this._stickyHeadingController)||i.teardown(),this._detachScrollsliderListener(),this.removeEventListener(pt,this._handleToggleKeyChange),this._headerCellHeightSyncRafId&&(window.cancelAnimationFrame(this._headerCellHeightSyncRafId),this._headerCellHeightSyncRafId=void 0),void 0!==this._announceTimerId&&(clearTimeout(this._announceTimerId),this._announceTimerId=void 0),void 0!==this._scrollSettleTimerId&&(clearTimeout(this._scrollSettleTimerId),this._scrollSettleTimerId=void 0),At.instanceCount--,0===At.instanceCount&&At.lightDomSheet&&(document.adoptedStyleSheets=document.adoptedStyleSheets.filter(e=>e!==At.lightDomSheet),At.lightDomSheet=null)}firstUpdated(){this._handleViewportChange(),this._requestHeaderCellContentHeightSync(),this._attachScrollsliderListener()}_applyColumnCountVars(){const e=this._columnCount;if("number"!=typeof e||!Number.isFinite(e)||e<=0)return;const t=this.structure===it?e:e-1;this.style.setProperty("--table-column-count",`${e}`),this.style.setProperty("--table-row-column-count",`${t}`);const i=e/Math.min(e,5)*100;this.style.setProperty("--table-min-width",`${i}%`)}updated(e){var t,i;if((e.has("_columnCount")||e.has("structure"))&&this._applyColumnCountVars(),(e.has("layout")||e.has("structure"))&&(this._toggleFirstHeaderScrollsliderItem(),this._requestHeaderCellContentHeightSync()),e.has("structure")&&this._applyRowHeaderRoles(),e.has("accordionRows"))this.accordionRows?this._getOrCreateAccordionController().init():null==(t=this._accordionController)||t.teardown();else if(e.has("accordionOpen")&&this.accordionRows){const e=this._getOrCreateAccordionController();e.teardown(),e.init()}e.has("stickyHeading")&&(this.stickyHeading?this._getOrCreateStickyHeadingController().init():null==(i=this._stickyHeadingController)||i.teardown()),this._handleSectionPrefixChange(e)}_handleSectionPrefixChange(e){e.has("sectionPrefixAnnouncement")&&this._markSubheadings()}isSubheadingRow(e){var t;if(e.hasAttribute("data-not-subheading"))return!1;const i=e.lastElementChild;return!(!i||null!=(t=null==i?void 0:i.textContent)&&t.trim()||0!==(null==i?void 0:i.children.length))}get scrollLeft(){var e,t;return(null==(t=null==(e=this._scrollsliderEl)?void 0:e.scrollableElement)?void 0:t.scrollLeft)??0}render(){return n`
      <reimagine-scrollslider
        scrollslider-role=""
        scrollslider-item-role=""
        prev-control-label=${this.prevControlLabel??""}
        next-control-label=${this.nextControlLabel??""}
        @slide-changed=${this._handleSlideChanged}
      >
        <slot @slotchange=${this._handleSlotChange}></slot>
      </reimagine-scrollslider>
      <div class="table__sr-status" role="status" aria-live="polite" aria-atomic="true">
        ${this._liveMessage}
      </div>
    `}};var $t,Et,Rt;At.styles=[...($t=At,Et=At,Rt="styles",xt(St($t),Rt,Et)||[]),Ve,Qe],At.lightDomSheet=null,At.instanceCount=0,At.ANNOUNCE_DELAY_MS=150,At.SCROLL_SETTLE_DELAY_MS=100,kt([i({reflect:!0})],At.prototype,"layout",2),kt([i({reflect:!0})],At.prototype,"structure",2),kt([i({reflect:!0})],At.prototype,"density",2),kt([i({reflect:!0})],At.prototype,"alignment",2),kt([i({reflect:!0,attribute:"stripe-direction"})],At.prototype,"stripeDirection",2),kt([i({reflect:!0,attribute:"accordion-rows",type:Boolean})],At.prototype,"accordionRows",2),kt([i({reflect:!0,attribute:"accordion-open"})],At.prototype,"accordionOpen",2),kt([i({reflect:!0,attribute:"sticky-heading",type:Boolean})],At.prototype,"stickyHeading",2),kt([i({attribute:"first-column-announcement"})],At.prototype,"firstColumnAnnouncement",2),kt([i({attribute:"last-column-announcement"})],At.prototype,"lastColumnAnnouncement",2),kt([i({attribute:"visible-columns-announcement"})],At.prototype,"visibleColumnsAnnouncement",2),kt([i({attribute:"section-prefix-announcement"})],At.prototype,"sectionPrefixAnnouncement",2),kt([i({attribute:"prev-control-label"})],At.prototype,"prevControlLabel",2),kt([i({attribute:"next-control-label"})],At.prototype,"nextControlLabel",2),kt([i({attribute:"differences-on-announcement"})],At.prototype,"differencesOnAnnouncement",2),kt([i({attribute:"differences-off-announcement"})],At.prototype,"differencesOffAnnouncement",2),kt([r()],At.prototype,"_columnCount",2),kt([r()],At.prototype,"_liveMessage",2),kt([a("reimagine-scrollslider")],At.prototype,"_scrollsliderEl",2),kt([l({flatten:!0})],At.prototype,"_slot",2),At=kt([b(Ct)],At);export{At as T,Pe as l,Ct as n};
