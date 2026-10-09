import{r as a,i as d}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{v as i}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{o}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{D as t}from"/__mirror/assets/ae4bf4f4ba8e8d905a9a94c2";const r="flex",s="initial",n="initial",e="initial",p="initial",m="hidden",c="var(--ds-app-space-micro-l, 1.5rem)",b="var(--ds-app-space-micro-l, 1.5rem)",u="var(--ds-app-space-micro-m, 1rem)",v="var(--ds-app-space-micro-m, 1rem)",l="relative",g="100%",h="initial",f="initial",$="initial",w="initial",x="var(--ds-app-space-micro-m, 1rem)",k="var(--ds-app-space-micro-m, 1rem)",_="var(--ds-app-space-micro-m, 1rem)",y="var(--ds-app-space-micro-m, 1rem)",j="initial",W="160px",D={width:"initial",maxWidth:"initial",transition:`max-width ${t.d300} ease, opacity ${t.d100} ease`},X="0",q="translateX(15%)",z="hidden",A="0",B=d`
  :host {
    --ds-list-item-inner-padding-block-start: 0;
    --ds-list-item-inner-padding-block-end: 0;
    --ds-surface-cursor: pointer;

    display: var(--ds-tab-compound-display, ${a(r)});
    border-start-start-radius: var(
      --ds-tab-compound-border-start-start-radius,
      ${a(s)}
    ) !important;
    border-start-end-radius: var(
      --ds-tab-compound-border-start-end-radius,
      ${a(n)}
    ) !important;
    border-end-start-radius: var(
      --ds-tab-compound-border-end-start-radius,
      ${a(e)}
    ) !important;
    border-end-end-radius: var(
      --ds-tab-compound-border-end-end-radius,
      ${a(p)}
    ) !important;
    overflow: var(--ds-tab-compound-overflow, ${a(m)});
    padding-block-start: var(
      --ds-tab-compound-padding-block-start,
      ${a(c)}
    );
    padding-block-end: var(
      --ds-tab-compound-padding-block-end,
      ${a(b)}
    );
    padding-inline-start: var(
      --ds-tab-compound-padding-inline-start,
      ${a(u)}
    );
    padding-inline-end: var(
      --ds-tab-compound-padding-inline-end,
      ${a(v)}
    );
    position: var(--ds-tab-compound-position, ${a(l)});
    width: var(--ds-tab-compound-width, ${a(g)});
    align-items: var(--ds-tab-compound-align-items, ${a(h)});
    flex-direction: var(
      --ds-tab-compound-flex-direction,
      ${a(f)}
    );
    gap: var(--ds-tab-compound-gap, ${a($)});
    text-align: var(--ds-tab-compound-text-align, ${a(w)});
  }

  :host(:focus) {
    ${o};
  }

  reimagine-indicator {
    --ds-indicator-width: 100%;

    position: absolute;
    bottom: 0;
    left: 0;
    visibility: var(
      --ds-indicator-visibility,
      ${a("hidden")}
    );
  }

  .tab-compound__media {
    padding-block-start: var(
      --ds-tab-compound-media-padding-block-start,
      ${a(x)}
    );
    padding-block-end: var(
      --ds-tab-compound-media-padding-block-end,
      ${a(k)}
    );
    padding-inline-start: var(
      --ds-tab-compound-media-padding-inline-start,
      ${a(_)}
    );
    padding-inline-end: var(
      --ds-tab-compound-media-padding-inline-end,
      ${a(y)}
    );
  }

  :host([configuration='tab-compound--label-logo-21-9']),
  :host([configuration='tab-compound--label-logo-4-3']) {
    --ds-tab-compound-padding-block-start: var(--ds-app-space-micro-m, 1rem);
    --ds-tab-compound-padding-block-end: var(--ds-app-space-micro-m, 1rem);
  }

  :host([configuration='tab-compound--label-logo-4-3']) {
    --ds-tab-compound-border-start-start-radius: var(--ds-app-radii-m, 0.5rem);
    --ds-tab-compound-border-start-end-radius: var(--ds-app-radii-m, 0.5rem);
    --ds-tab-compound-border-end-start-radius: var(--ds-app-radii-m, 0.5rem);
    --ds-tab-compound-border-end-end-radius: var(--ds-app-radii-m, 0.5rem);
  }

  :host([configuration='tab-compound--badge']) {
    --ds-tab-compound-padding-inline-start: var(--ds-app-space-micro-xs);
    --ds-tab-compound-padding-inline-end: var(--ds-app-space-micro-xs);
    --ds-tab-compound-padding-block-start: var(--ds-app-space-micro-l);
    --ds-tab-compound-padding-block-end: var(--ds-app-space-micro-l);
    --ds-tab-compound-border-start-start-radius: var(--ds-app-radii-s, 0.5rem);
    --ds-tab-compound-border-start-end-radius: var(--ds-app-radii-s, 0.5rem);
    --ds-tab-compound-border-end-start-radius: var(--ds-app-radii-s, 0.5rem);
    --ds-tab-compound-border-end-end-radius: var(--ds-app-radii-s, 0.5rem);
    --ds-tab-compound-align-items: center;
    --ds-tab-compound-flex-direction: column;
    --ds-tab-compound-gap: var(--ds-app-space-micro-m);
    --ds-tab-compound-text-align: center;
  }

  :host([configuration='tab-compound--video']) {
    --ds-tab-compound-align-items: center;
    --ds-tab-compound-gap: var(--ds-app-space-micro-l);
    --ds-tab-compound-border-start-start-radius: var(--ds-app-radii-m, 0.5rem);
    --ds-tab-compound-border-start-end-radius: var(--ds-app-radii-m, 0.5rem);
    --ds-tab-compound-border-end-start-radius: var(--ds-app-radii-m, 0.5rem);
    --ds-tab-compound-border-end-end-radius: var(--ds-app-radii-m, 0.5rem);
    --ds-tab-compound-padding-block-start: var(--ds-app-space-micro-m, 1rem);
    --ds-tab-compound-padding-block-end: var(--ds-app-space-micro-m, 1rem);
    --ds-tab-compound-padding-inline-start: var(--ds-app-space-micro-m, 1rem);
    --ds-tab-compound-padding-inline-end: var(--ds-app-space-micro-m, 1rem);
    --ds-media-asset-border-start-start-radius: var(--ds-app-radii-s);
    --ds-media-asset-border-start-end-radius: var(--ds-app-radii-s);
    --ds-media-asset-border-end-start-radius: var(--ds-app-radii-s);
    --ds-media-asset-border-end-end-radius: var(--ds-app-radii-s);
    --ds-media-asset-overflow: hidden;
    --ds-media-width: initial;
  }

  :host([configuration='tab-compound--video']) .tab-compound__base {
    width: var(--ds-tab-compound-base-width, ${a(D.width)});
    max-width: var(--ds-tab-compound-base-max-width, ${a(D.maxWidth)});
  }

  :host([configuration='tab-compound--video']) .tab-compound__media {
    --ds-tab-compound-media-padding-block-start: 0;
    --ds-tab-compound-media-padding-block-end: 0;
    --ds-tab-compound-media-padding-inline-start: 0;
    --ds-tab-compound-media-padding-inline-end: 0;

    width: var(--ds-tab-compound-media-width, ${a(j)});
    max-width: var(--ds-tab-compound-media-max-width, ${a(W)});
  }

  :host([active]) {
    --ds-indicator-visibility: visible;
  }

  :host([active][surface='glass']) {
    --ds-surface-background: var(--ds-app-color-surface-glass-bg-selected) !important;
  }

  :host([configuration='tab-compound--badge'][active][surface='solid']) {
    --ds-surface-background: var(--ds-app-color-base-default-bg-opt3) !important;
  }
`,C=d`
  @media (min-width: ${a(i.md)}) {
    :host([configuration='tab-compound--video']) {
      --ds-media-width: 160px;
      --ds-list-item-width: 160px;
    }

    :host([configuration='tab-compound--video']) .tab-compound__base {
      transition: var(
        --ds-tab-compound-base-transition,
        ${a(D.transition)}
      );
      visibility: visible;
      pointer-events: auto;
    }

    :host([configuration='tab-compound--video'][active]) {
      --ds-tab-compound-gap: var(
        --ds-tab-compound-active-gap,
        ${a(A)}
      );
    }

    :host([configuration='tab-compound--video'][active]) .tab-compound__base {
      max-width: var(
        --ds-tab-compound-base-active-max-width,
        ${a(X)}
      );
      visibility: var(
        --ds-tab-compound-base-active-visibility,
        ${a(z)}
      );
      pointer-events: auto;
      transform: var(
        --ds-tab-compound-base-active-transform,
        ${a(q)}
      );
    }
  }
`;export{B as s,C as v};
