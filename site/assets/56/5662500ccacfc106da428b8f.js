import{r as a,i as s}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{e as o}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";const t="var(--ds-app-space-layout-stack-comfortable, 3rem)",i=0,d=0,r="auto",e="var(--ds-app-color-surface-solid-bg-default, #fefefe)",n="var(--ds-app-color-surface-solid-border-default, #e6f2fb)",l="var(--ds-app-radii-circle, 12.5rem)",b="var(--ds-app-space-micro-xs, 0.5rem)",c="var(--ds-app-space-micro-xs, 0.5rem)",p="var(--ds-app-space-micro-xs, 0.5rem)",m="var(--ds-app-space-micro-xs, 0.5rem)",g="flex-start",u="var(--ds-app-space-micro-m, 1rem)",f="3px",h=s`
  :host {
    display: var(--ds-tabs-display, ${a("block")});
    width: var(--ds-tabs-width, ${a("auto")});

    --ds-media-height: 100%;
  }

  .tabs__first {
    margin-bottom: var(
      --ds-tabs-first-margin-bottom,
      ${a(d)}
    );
  }

  .tabs__base {
    margin-block-end: var(
      --ds-tabs-base-margin-block-end,
      ${a(t)}
    );
    margin-inline: var(
      --ds-tabs-base-margin-inline,
      ${a(i)}
    );
    display: var(--ds-tabs-base-display, inherit);
  }

  :host([configuration='pill']) {
    --ds-scrollslider-gap: 1rem;
    --ds-scrollslider-item-gap: 0.5rem;
    --ds-tab-white-space: nowrap;
  }

  :host([configuration='selector']) {
    --ds-scrollslider-item-gap: var(--ds-app-space-micro-2xs, 0.25rem);
    --ds-pill-background-color: transparent;
    --ds-tab-white-space: nowrap;
  }

  :host([configuration='radio']) {
    --ds-tab-width: fit-content;
    --ds-scrollslider-gap: var(--ds-tabs-radio-gap, ${a(u)});
    --ds-scrollslider-item-gap: var(
      --ds-tabs-radio-gap,
      ${a(u)}
    );
    --ds-tab-white-space: nowrap;
    --ds-scrollslider-base-padding-inline: var(
      --ds-tabs-radio-vfi,
      ${a(f)}
    );
    --ds-scrollslider-base-padding-block: var(
      --ds-tabs-radio-vfi,
      ${a(f)}
    ); // Vfi outline accommodation
  }

  :host([configuration='radio']) .tabs__base {
    display: flex;
    flex-wrap: wrap;
    gap: var(--ds-tabs-radio-gap, ${a(u)});
    justify-content: var(
      --ds-tabs-radio-base-justify-content,
      ${a(g)}
    );
  }

  /* Tab Item */
  :host([configuration='tab-item--vertical']) .tabs__base {
    --ds-tab-display: block;
    display: flex;
    flex-direction: column;
    gap: var(--ds-app-space-micro-m, 1rem);
  }

  :host([configuration='tab-item--horizontal']) .tabs__base {
    --ds-tab-margin-inline: ${a(o)};
    --ds-tab-margin-block: ${a(o)};
    --ds-tab-display: flex;
    --ds-tab-item-content-width: 208px;
  }

  /* Tab Compound - Label */
  :host([configuration^='tab-compound--label']) .tabs__base {
    --ds-tab-base-display: flex;
    --ds-tab-base-height: 100%;
    --ds-scrollslider-item-display: flex;
    --ds-scrollslider-item-height: 100%;
  }

  :host([configuration='tab-compound--label']) .tabs__base,
  :host([configuration='tab-compound--label-logo-21-9']) .tabs__base {
    --ds-scrollslider-item-gap: 0;
  }

  :host([configuration='tab-compound--label']) .tabs__base {
    --ds-tab-compound-width: 208px;
  }

  :host([configuration='tab-compound--label-logo-21-9']) .tabs__base {
    --ds-tab-compound-width: 199px;
  }

  :host([configuration='tab-compound--label-logo-4-3']) .tabs__base {
    --ds-tab-compound-width: 187px;
  }

  :host([configuration^='tab-compound--label']) ::slotted(reimagine-scrollslider-item),
  :host([configuration='tab-compound--badge']) ::slotted(reimagine-scrollslider-item) {
    padding-block-start: var(--ds-tabs-compound-padding-block-start, 0.25rem);
    padding-block-end: var(--ds-tabs-compound-padding-block-end, 0.75rem);
    padding-inline-start: var(--ds-tabs-compound-padding-inline-start, 0.1rem);
  }

  :host([configuration^='tab-compound--label'])
    ::slotted(reimagine-scrollslider-item:first-of-type) {
    padding-inline-start: 0.25rem;
  }

  :host([configuration^='tab-compound--label']) ::slotted(.tabs__base__last) {
    padding-inline-end: 0.25rem;
  }

  :host([configuration='tab-compound--label']) ::slotted(reimagine-scrollslider-item:first-of-type),
  :host([configuration='tab-compound--label-logo-21-9'])
    ::slotted(reimagine-scrollslider-item:first-of-type) {
    --ds-tab-compound-border-start-start-radius: var(--ds-app-radii-m, 0.5rem);
    --ds-tab-compound-border-end-start-radius: var(--ds-app-radii-m, 0.5rem);
  }

  :host([configuration='tab-compound--label']) ::slotted(.tabs__base__last),
  :host([configuration='tab-compound--label-logo-21-9']) ::slotted(.tabs__base__last) {
    --ds-tab-compound-border-start-end-radius: var(--ds-app-radii-m, 0.5rem);
    --ds-tab-compound-border-end-end-radius: var(--ds-app-radii-m, 0.5rem);
  }

  :host([configuration='tab-compound--badge']) .tabs__base {
    --ds-tab-compound-width: 124px;
  }

  :host([configuration='tab-compound--video']) {
    --ds-tab-compound-media-width: 50%;
    --ds-tab-compound-base-max-width: 160px;
    --ds-tab-compound-base-width: 50%;
    --ds-button-group-max-width: 267px;
    --ds-button-group-margin-inline: auto;
  }

  :host([configuration^='tab-compound--video']) ::slotted(reimagine-scrollslider-item) {
    display: none;
  }

  :host([configuration='tab-compound--video']) ::slotted(reimagine-scrollslider-item) {
    padding-block: 0.25rem;
    padding-inline: 0.25rem;
  }

  :host([configuration='tab-compound--video']) .tabs__load-more {
    display: block;
    margin-block-start: var(--ds-app-space-micro-xl);
  }

  :host([configuration='selector']) .tabs__base {
    width: var(--ds-tabs-base-width, ${a(r)});
    max-width: 100%;
    background-color: var(
      --ds-tabs-base-background-color,
      ${a(e)}
    );
    border-color: var(
      --ds-tabs-base-border-color,
      ${a(n)}
    );
    border-radius: var(
      --ds-tabs-base-border-radius,
      ${a(l)}
    );
    padding-inline-start: var(
      --ds-tabs-base-padding-inline-start,
      ${a(b)}
    );
    padding-inline-end: var(
      --ds-tabs-base-padding-inline-end,
      ${a(c)}
    );
    padding-block-start: var(
      --ds-tabs-base-padding-block-start,
      ${a(p)}
    );
    padding-block-end: var(
      --ds-tabs-base-padding-block-end,
      ${a(m)}
    );
  }

  :host([configuration='selector']):has(reimagine-scrollslider[hide-controls]) {
    --ds-tabs-base-width: min-content;
  }

  /* Center alignment for selector configuration */
  :host([configuration='selector'][alignment='center']) .tabs__base {
    margin-inline: auto;
  }

`;export{h as s};
