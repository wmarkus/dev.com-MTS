import{r,i as o}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";const a={borderRadius:"var(--ds-app-radii-l, 1.5rem)",overflow:"auto",borderColor:"var(--ds-app-color-surface-solid-border-default, #e0e0e0)"},e=o`
  /* Base styles for all card base variants */
  :host([surface]) {
    --ds-surface-border-radius: ${r(a.borderRadius)};
    --ds-media-asset-overflow: auto;
    --ds-surface-box-shadow: var(
      --ds-elevation-level-2,
      0px 2px 4px rgba(0, 0, 0, 0.14),
      0px 0px 2px rgba(0, 0, 0, 0.12)
    );
    --ds-surface-solid-border-box-shadow: var(
      --ds-elevation-level-2,
      0px 2px 4px rgba(0, 0, 0, 0.14),
      0px 0px 2px rgba(0, 0, 0, 0.12)
    );

    overflow: var(--ds-card-base-overflow, ${r(a.overflow)});
    border-color: var(--ds-card-base-border-color, ${r(a.borderColor)});
  }

  :host([surface='transparent']) {
    --ds-surface-box-shadow: none;
  }

  :host([surface='special']) {
    --ds-card-base-border-color: var(--ds-app-color-surface-contrast-border-default, #cbe6f4);
  }
`;export{a,e as c};
