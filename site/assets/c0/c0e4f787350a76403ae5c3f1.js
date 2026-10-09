import{r as t,i}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{l as o,c as e,r as n,o as s,n as a}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{l as d}from"/__mirror/assets/2e9aed9389db597dff461cb3";import{b as l}from"/__mirror/assets/7e3cbd307d93b862d54c4d69";const r="var(--ds-app-color-interactive-secondary-fg-default, #2a446f)",h="0.3rem",c="var(--ds-app-space-micro-xs)",g="inline-flex",p="center",u="1",v="pointer",b="auto",m="0.1875rem dotted var(--ds-app-color-interactive-secondary-fg-default, #2a446f)",f="initial",k="underline",x="var(--ds-app-space-micro-2xl, 3rem)",$="60px",w="var(--ds-app-space-micro-m, 1rem)",y="0.25rem",z="var(--ds-app-radii-s, 0.5rem)",H="7px",S="7px",W="7px",j="7px",_="var(--ds-app-space-micro-xs, 0.5rem)",q="var(--ds-app-space-micro-m, 1rem)",A="var(--ds-app-space-micro-xs, 0.5rem)",B=i`
  :host,
  :host button,
  ::slotted(button) {
    align-items: var(--ds-link-align-items, ${t(p)});
    gap: var(--ds-link-gap, ${t(c)});
    font-size: var(--ds-link-font-size, ${t(o.fontSize)});
    font-weight: var(--ds-link-font-weight, ${t(o.fontWeight)});
    line-height: var(--ds-link-line-height, ${t(o.lineHeight)});
    opacity: var(--ds-link-opacity, ${t(u)});
    cursor: var(--ds-link-cursor, ${t(v)});
    pointer-events: var(--ds-link-pointer-events, ${t(b)});
    text-underline-offset: var(
      --ds-link-underline-offset,
      ${t(h)}
    );
    position: var(--ds-link-position, ${t(f)});
  }

  :host a,
  :host,
  ::slotted(a) {
    display: var(--ds-link-display, ${t(g)});
  }

  :host a,
  ::slotted(a) {
    align-items: var(--ds-link-align-items, ${t(p)});
    gap: var(--ds-link-gap, ${t(c)});
    color: var(--ds-link-color, ${t(r)});
    outline: none;
    text-decoration: var(--ds-link-text-decoration, ${t(k)});
  }

  :host([text-color]) {
    --ds-link-color: var(--ds-text-color-override, ${t(r)});
  }

  :host([text-color]:focus) {
    outline-color: inherit;
  }

  :host([text-color]:hover) a {
    --ds-link-color: hsl(from var(--ds-text-color-override) h 80% l / 100%);
  }

  :host(:focus),
  ::slotted(a:focus),
  ::slotted(button:focus),
  :host([light-dom][with-button]:focus-within) {
    outline: var(--ds-link-outline, ${t(m)});
    outline-offset: var(--ds-link-outline-offset, ${t(y)});
  }

  :host(:hover) a,
  ::slotted(a:hover) {
    --ds-link-color: var(--ds-app-color-interactive-secondary-fg-hover, #dceef8);
  }

  :host(:active) a,
  :host(:active) button,
  ::slotted(a:active),
  ::slotted(button:active) {
    --ds-link-color: var(--ds-app-color-interactive-secondary-fg-active);
  }

  :host([size='label-small']) {
    --ds-link-font-size: ${t(e.fontSize)};
    --ds-link-font-weight: ${t(e.fontWeight)};
    --ds-link-line-height: ${t(e.lineHeight)};
  }

  :host([size='body-medium']) {
    --ds-link-font-size: ${t(n.fontSize)};
    --ds-link-font-weight: ${t(n.fontWeight)};
    --ds-link-line-height: ${t(n.lineHeight)};
  }

  :host([size='body-small']) {
    --ds-link-font-size: ${t(s.fontSize)};
    --ds-link-font-weight: ${t(s.fontWeight)};
    --ds-link-line-height: ${t(s.lineHeight)};
  }

  :host([size='body-xsmall']) {
    --ds-link-font-size: ${t(a.fontSize)};
    --ds-link-font-weight: ${t(a.fontWeight)};
    --ds-link-line-height: ${t(a.lineHeight)};
  }

  :host([with-button]) {
    --ds-link-position: relative;
  }

  :host([with-button]) a,
  :host([with-button]) ::slotted(a) {
    ${d};
  }

  :host([configuration='stacked']) a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: var(--ds-link-text-decoration, underline);

    --ds-surface-cursor: var(--ds-link-cursor, ${t(v)});
  }

  :host(:hover) ::slotted(reimagine-button),
  ::slotted(button:hover) {
    --ds-button-background-color: var(--ds-app-color-interactive-primary-bg-hover, #006dc1);
  }

  :host(:active) ::slotted(reimagine-button),
  ::slotted(button:active) {
    --ds-button-background-color: var(--ds-app-color-interactive-primary-bg-active, #004275);
    --ds-button-color: var(--ds-app-color-interactive-primary-fg-active, #004275);
  }

  :host([disabled]) {
    --ds-link-opacity: 0.2;
    --ds-link-cursor: not-allowed;
    --ds-link-pointer-events: none;
  }

  :host([disabled]) ::slotted(reimagine-button),
  :host([disabled]) ::slotted(button) {
    --ds-button-opacity: 1;
  }

  :host button,
  ::slotted(button) {
    letter-spacing: inherit;
    color: var(--ds-link-color, ${t(r)});
    outline: none;
    background: transparent;
    text-decoration: var(--ds-button-text-decoration, underline);
    box-shadow: none;

    ${l};
  }

  :host([with-button][as-button]) button,
  :host([with-button][as-button]) ::slotted(button) {
    display: inline-flex;
    align-items: center;
    padding-inline: 1px;
    text-decoration: none;
  }

  :host([disabled][as-button]) button,
  :host([disabled][as-button]) ::slotted(button) {
    opacity: var(--ds-button-opacity, ${t(u)});
  }

  @media (forced-colors: active) {
    :host button,
    ::slotted(button) {
      background-color: currentcolor;
    }
  }

  :host([with-badge]) {
    --ds-link-gap: 0;
    --ds-surface-cursor: pointer;

    border-radius: var(
      --ds-link-badge-border-radius,
      ${t(z)}
    );

    box-shadow: var(
      --ds-elevation-level-2,
      0 2px 4px rgba(0, 0, 0, 0.14),
      0 0 2px rgba(0, 0, 0, 0.12)
    );
  }

  :host([with-badge]:hover) {
    box-shadow: var(
      --ds-elevation-level-3,
      0 4px 8px rgba(0, 0, 0, 0.14),
      0 0 2px rgba(0, 0, 0, 0.12)
    );
  }

  :host([with-badge]) ::slotted(reimagine-badge) {
    --ds-badge-padding-block-start: var(
      --ds-link-badge-padding-block-start,
      ${t(H)}
    );
    --ds-badge-padding-block-end: var(
      --ds-link-badge-padding-block-end,
      ${t(S)}
    );
    --ds-badge-padding-inline-start: var(
      --ds-link-badge-padding-inline-start,
      ${t(W)}
    );
    --ds-badge-padding-inline-end: var(
      --ds-link-badge-padding-inline-end,
      ${t(j)}
    );
  }

  :host([with-media]) {
    --ds-media-width: var(--ds-link-media-width, ${t(x)});
    --ds-link-gap: var(--ds-link-media-gap, ${t(w)});
  }

  :host([with-media]:not([configuration])),
  :host([light-dom][media-only]) {
    --ds-media-width: var(--ds-link-media-only-width, ${t($)});
    --ds-link-gap: 0;
  }

  :host([light-dom]) {
    --ds-surface-cursor: pointer;
  }

  :host([configuration='default'][media-position='right']) a,
  :host([light-dom][with-button][icon-position='right']),
  :host([light-dom][with-button][icon-position='right']) ::slotted(a),
  :host([light-dom][with-media][media-position='right']) ::slotted(a) {
    flex-direction: row-reverse;
  }

  :host([configuration='default'][media-position='top']) a {
    flex-direction: column;
  }

  :host([light-dom]),
  :host([light-dom][configuration='default']) {
    --ds-link-gap: 0;
  }

  :host([light-dom][configuration='stacked']),
  :host([light-dom][configuration='stacked']) ::slotted(a) {
    --ds-link-display: flex;

    width: fit-content;
    flex-direction: column;
  }

  :host([light-dom][with-button][icon-position='left']) ::slotted(a) {
    padding-inline-start: var(
      --ds-link-light-dom-with-button-padding-inline,
      ${t(A)}
    );
  }

  :host([light-dom][with-button][icon-position='right']) ::slotted(a) {
    padding-inline-end: var(
      --ds-link-light-dom-with-button-padding-inline,
      ${t(A)}
    );
  }

  :host([light-dom][with-button][configuration='default']) ::slotted(a),
  :host([light-dom][configuration='stacked']) ::slotted(a) {
    --ds-link-gap: var(
      --ds-link-light-dom-with-button-gap,
      ${t(_)}
    );
  }

  :host([light-dom][with-media]) ::slotted(a) {
    --ds-link-gap: var(
      --ds-link-light-dom-with-media-gap,
      ${t(q)}
    );
  }

  :host([light-dom]) ::slotted(a) {
    color: var(--ds-link-color, ${t(r)}) !important;
    text-align: var(--ds-link-text-align, inherit);
  }

  :host([light-dom][with-button]:focus-within) ::slotted(a) {
    outline: none !important;
  }

  ::slotted([slot='link__text']) {
    display: var(--ds-link-text-display, initial);
    text-align: var(--ds-link-text-align, inherit);
  }
`;export{B as s};
