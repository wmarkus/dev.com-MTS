import{r as a,i as t}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d}from"/__mirror/assets/4230c2711e37b2e85105da0e";import{l as r}from"/__mirror/assets/6ad137053d5da8fc91d912f1";const s="initial",e="auto",n="column",i="initial",o="initial",c="initial",p="initial",l="initial",u="initial",g="initial",y="initial",b="initial",v="var(--ds-app-space-micro-xs)",m="var(--ds-app-space-micro-xs)",f="var(--ds-app-space-micro-xs)",h="0",x="initial",$="initial",w={contentDisplay:"initial",contentPosition:"initial",contentMarginBlockStart:"initial",contentBottom:"initial",contentTop:"initial",contentLeft:"initial",contentFlex:"initial",contentWidth:"initial",contentZIndex:"auto",contentPaddingInlineStart:"initial",contentPaddingInlineEnd:"initial",contentPaddingBlockStart:"initial",contentPaddingBlockEnd:"initial",contentBoxSizing:"initial"},k={contentWrapperBorderStartStartRadius:"var(--ds-app-radii-m)",contentWrapperBorderStartEndRadius:"var(--ds-app-radii-m)",contentWrapperBorderEndEndRadius:"var(--ds-app-radii-m)",contentWrapperBorderEndStartRadius:"var(--ds-app-radii-m)",contentWrapperPaddingInlineStart:"initial",contentWrapperPaddingInlineEnd:"initial",contentWrapperPaddingBlockStart:"initial",contentWrapperPaddingBlockEnd:"initial",contentWrapperWidth:"initial",contentWrapperBoxSizing:"initial",contentWrapperDisplay:"flex",contentWrapperFlexDirection:"column",contentWrapperJustifyContent:"initial"},_="flex",W="column",B="var(--ds-app-space-micro-xl)",S="var(--ds-app-space-micro-xl)",P="var(--ds-app-space-micro-m)",z="initial",E="0.063rem",I="solid",j="var(--ds-app-color-base-default-border-subtle)",R="initial",D="initial",F="initial",C="initial",J="hidden",L="var(--ds-app-color-base-default-fg-heading)",M="initial",T="initial",Z="initial",H="var(--ds-app-space-micro-l)",q=t`
  :host {
    display: var(--ds-card-case-study-display, ${a("flex")});
    position: var(--ds-card-case-study-position, ${a(s)});
    height: var(--ds-card-case-study-height, ${a(e)});
    min-height: var(--ds-card-case-study-min-height, ${a(p)});
    margin-block-start: var(
      --ds-card-case-study-margin-block-start,
      ${a(l)}
    );
    margin-block-end: var(
      --ds-card-case-study-margin-block-end,
      ${a(u)}
    );
    margin-inline-start: var(
      --ds-card-case-study-margin-inline-start,
      ${a(g)}
    );
    margin-inline-end: var(
      --ds-card-case-study-margin-inline-end,
      ${a(y)}
    );

    --ds-surface-border-radius: var(--ds-app-radii-l) !important;
    --ds-media-width: 100%;
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
    --ds-badge-box-shadow: none;
  }

  :host([surface='transparent']) {
    --ds-surface-box-shadow: none;
  }

  :host([configuration='default']) {
    flex-direction: var(
      --ds-card-case-study-flex-direction,
      ${a(n)}
    );
    justify-content: var(
      --ds-card-case-study-justify-content,
      ${a(i)}
    );
  }

  :host([configuration='media']) {
    max-width: var(--ds-card-case-study-max-width, ${a(o)});
    max-height: var(--ds-card-case-study-max-height, ${a(c)});

    --ds-card-case-study-min-height: var(--card-case-study-height, 438px);
    --ds-card-case-study-position: relative;
  }

  :host([configuration='default']) .card-case-study__media {
    --ds-media-asset-border-start-start-radius: var(--ds-app-radii-m);
    --ds-media-asset-border-start-end-radius: var(--ds-app-radii-m);
    --ds-media-asset-border-end-end-radius: var(--ds-app-radii-m);
    --ds-media-asset-border-end-start-radius: var(--ds-app-radii-m);
  }

  .card-case-study__media {
    /* Padding for the top media section */
    position: var(
      --ds-card-case-study-media-position,
      ${a(b)}
    );
    padding-inline-start: var(
      --ds-card-case-study-padding-inline-start,
      ${a(v)}
    );
    padding-inline-end: var(
      --ds-card-case-study-padding-inline-end,
      ${a(m)}
    );
    padding-block-start: var(
      --ds-card-case-study-padding-block-start,
      ${a(f)}
    );
    padding-block-end: var(
      --ds-card-case-study-padding-block-end,
      ${a(h)}
    );
    flex: var(--ds-card-case-study-flex, ${a(x)});
    width: var(--ds-card-case-study-width, ${a($)});

    --ds-media-display: initial;
    --ds-media-width: 100%;
    --ds-media-height: 100%;
    --ds-media-border-start-start-radius: var(--ds-app-radii-l);
    --ds-media-border-start-end-radius: var(--ds-app-radii-l);
    --ds-media-border-end-end-radius: var(--ds-app-radii-l);
    --ds-media-border-end-start-radius: var(--ds-app-radii-l);
    --ds-media-asset-overflow: auto;
    --ds-media-object-fit: cover;
  }

  :host([configuration='media']) ::slotted([slot='card-case-study__media']) {
    overflow: hidden;

    --ds-media-display: block;
  }

  .card-case-study__content-tag {
    margin-bottom: var(--ds-app-space-micro-s);
    line-height: 0;
  }

  .card-case-study__content-label {
    font-weight: var(--ds-app-type-label-m-font-weight, ${a(r.fontWeight)});
    font-size: var(--ds-app-type-label-m-font-size, ${a(r.fontSize)});
    line-height: var(--ds-app-type-label-m-line-height, ${a(r.lineHeight)});
    margin-bottom: var(--ds-label-m-margin-bottom, ${a(r.marginBottom)});
    color: var(
      --ds-card-case-study-content-label-color,
      ${a(L)}
    );
    padding-block-end: var(
      --ds-card-case-study-content-label-padding-block-end,
      ${a(M)}
    );
  }

  .card-case-study__content {
    display: var(
      --ds-card-case-study-content-display,
      ${a(w.contentDisplay)}
    );
    position: var(
      --ds-card-case-study-content-position,
      ${a(w.contentPosition)}
    );
    margin-block-start: var(
      --ds-card-case-study-content-margin-block-start,
      ${a(w.contentMarginBlockStart)}
    );
    bottom: var(
      --ds-card-case-study-content-bottom,
      ${a(w.contentBottom)}
    );
    top: var(--ds-card-case-study-content-top, ${a(w.contentTop)});
    left: var(--ds-card-case-study-content-left, ${a(w.contentLeft)});
    flex: var(--ds-card-case-study-content-flex, ${a(w.contentFlex)});
    width: var(
      --ds-card-case-study-content-width,
      ${a(w.contentWidth)}
    );
    z-index: var(
      --ds-card-case-study-content-z-index,
      var(--ds-z-index-auto, ${a(w.contentZIndex)})
    );
    padding-inline-start: var(
      --ds-card-case-study-content-padding-inline-start,
      ${a(w.contentPaddingInlineStart)}
    );
    padding-inline-end: var(
      --ds-card-case-study-content-padding-inline-end,
      ${a(w.contentPaddingInlineEnd)}
    );
    padding-block-start: var(
      --ds-card-case-study-content-padding-block-start,
      ${a(w.contentPaddingBlockStart)}
    );
    padding-block-end: var(
      --ds-card-case-study-content-padding-block-end,
      ${a(w.contentPaddingBlockEnd)}
    );
    box-sizing: var(
      --ds-card-case-study-content-box-sizing,
      ${a(w.contentBoxSizing)}
    );
  }

  :host([configuration='default']) .card-case-study__content {
    --ds-card-case-study-content-flex: 1;
  }

  .card-case-study__content-wrapper {
    padding-inline-start: var(
      --ds-card-case-study-content-wrapper-padding-inline-start,
      ${a(k.contentWrapperPaddingInlineStart)}
    );
    padding-inline-end: var(
      --ds-card-case-study-content-wrapper-padding-inline-end,
      ${a(k.contentWrapperPaddingInlineEnd)}
    );
    padding-block-start: var(
      --ds-card-case-study-content-wrapper-padding-block-start,
      ${a(k.contentWrapperPaddingBlockStart)}
    );
    padding-block-end: var(
      --ds-card-case-study-content-wrapper-padding-block-end,
      ${a(k.contentWrapperPaddingBlockEnd)}
    );
  }

  :host([configuration='default']) .card-case-study__content-wrapper {
    display: var(
      --ds-card-case-study-content-wrapper-display,
      ${a(k.contentWrapperDisplay)}
    );
    flex-direction: var(
      --ds-card-case-study-content-wrapper-flex-direction,
      ${a(k.contentWrapperFlexDirection)}
    );
    justify-content: var(
      --ds-card-case-study-content-wrapper-justify-content,
      ${a(k.contentWrapperJustifyContent)}
    );

    --ds-card-case-study-content-wrapper-padding-inline-start: var(--ds-app-space-surface-comfortable);
    --ds-card-case-study-content-wrapper-padding-inline-end: var(--ds-app-space-surface-comfortable);
    --ds-card-case-study-content-wrapper-padding-block-start: var(--ds-app-space-surface-comfortable);
    --ds-card-case-study-content-wrapper-padding-block-end: var(--ds-app-space-surface-comfortable);
  }

  :host([configuration='media']) .card-case-study__content-wrapper {
    background: var(
      --ds-card-case-study-content-wrapper-background,
      ${a(d.background)}
    );
    border-width: var(
      --ds-card-case-study-content-wrapper-border-width,
      ${a(d.borderWidth)}
    );
    border-style: var(
      --ds-card-case-study-content-wrapper-border-style,
      ${a(d.borderStyle)}
    );
    border-color: var(
      --ds-card-case-study-content-wrapper-border-color,
      ${a(d.borderColor)}
    );
    backdrop-filter: var(
      --ds-card-case-study-content-wrapper-backdrop-filter,
      ${a(d.backdropFilter)}
    );
    border-start-start-radius: var(
      --ds-card-case-study-content-wrapper-border-start-start-radius,
      ${a(k.contentWrapperBorderStartStartRadius)}
    );
    border-start-end-radius: var(
      --ds-card-case-study-content-wrapper-border-start-end-radius,
      ${a(k.contentWrapperBorderStartEndRadius)}
    );
    border-end-end-radius: var(
      --ds-card-case-study-content-wrapper-border-end-end-radius,
      ${a(k.contentWrapperBorderEndEndRadius)}
    );
    border-end-start-radius: var(
      --ds-card-case-study-content-wrapper-border-end-start-radius,
      ${a(k.contentWrapperBorderEndStartRadius)}
    );
    width: var(
      --ds-card-case-study-content-wrapper-width,
      ${a(k.contentWrapperWidth)}
    );
    box-sizing: var(
      --ds-card-case-study-content-wrapper-box-sizing,
      ${a(k.contentWrapperBoxSizing)}
    );

    --ds-card-case-study-content-wrapper-padding-inline-start: var(--ds-app-space-micro-l);
    --ds-card-case-study-content-wrapper-padding-inline-end: var(--ds-app-space-micro-l);
    --ds-card-case-study-content-wrapper-padding-block-start: var(--ds-app-space-micro-l);
    --ds-card-case-study-content-wrapper-padding-block-end: var(--ds-app-space-micro-l);
  }

  :host ::slotted([slot='card-case-study__content-logo']) {
    border-width: var(
      --ds-card-case-study-content-logo-slot-border-width,
      ${a(E)}
    );
    border-style: var(
      --ds-card-case-study-content-logo-slot-border-style,
      ${a(I)}
    );
    border-color: var(
      --ds-card-case-study-content-logo-slot-border-color,
      ${a(j)}
    );
    border-start-start-radius: var(
      --ds-card-case-study-content-logo-slot-border-start-start-radius,
      ${a(R)}
    );
    border-start-end-radius: var(
      --ds-card-case-study-content-logo-slot-border-start-end-radius,
      ${a(D)}
    );
    border-end-end-radius: var(
      --ds-card-case-study-content-logo-slot-border-end-end-radius,
      ${a(F)}
    );
    border-end-start-radius: var(
      --ds-card-case-study-content-logo-slot-border-end-start-radius,
      ${a(C)}
    );
    overflow: var(
      --ds-card-case-study-content-logo-slot-overflow,
      ${a(J)}
    );

    --ds-media-object-fit: cover;
  }

  :host([configuration='default']) ::slotted([slot='card-case-study__content-logo']) {
    --ds-card-case-study-content-logo-slot-border-start-start-radius: var(--ds-app-radii-m);
    --ds-card-case-study-content-logo-slot-border-start-end-radius: var(--ds-app-radii-m);
    --ds-card-case-study-content-logo-slot-border-end-end-radius: var(--ds-app-radii-m);
    --ds-card-case-study-content-logo-slot-border-end-start-radius: var(--ds-app-radii-m);
  }

  :host([configuration='media']) ::slotted([slot='card-case-study__content-logo']) {
    --ds-card-case-study-content-logo-slot-border-start-start-radius: var(--ds-app-radii-s);
    --ds-card-case-study-content-logo-slot-border-start-end-radius: var(--ds-app-radii-s);
    --ds-card-case-study-content-logo-slot-border-end-end-radius: var(--ds-app-radii-s);
    --ds-card-case-study-content-logo-slot-border-end-start-radius: var(--ds-app-radii-s);
  }

  :host([configuration='default']) .card-case-study__content-body {
    padding-block-end: var(
      --ds-card-case-study-content-body-padding-block-end,
      ${a("var(--ds-app-space-micro-xl)")}
    );
  }

  :host([configuration='default']) ::slotted([slot='card-case-study__content-body']) {
    --ds-text-block-gap: var(--ds-app-space-micro-2xs, 0.25rem);
  }

  :host([configuration='default']) ::slotted([slot='card-case-study__content-stat']) {
    --ds-stat-body-gap: var(--ds-app-space-micro-2xs, 0.25rem);
  }

  :host([configuration='default']) .card-case-study__content-stat {
    display: var(
      --ds-card-case-study-content-stat-display,
      ${a(_)}
    );
    flex-direction: var(
      --ds-card-case-study-content-stat-flex-direction,
      ${a(W)}
    );
    gap: var(
      --ds-card-case-study-content-stat-gap,
      ${a(B)}
    );
    padding-bottom: var(
      --ds-card-case-study-content-stat-padding-bottom,
      ${a(S)}
    );
  }

  :host([configuration='default']) .card-case-study__content-related-products {
    padding-block-end: var(
      --ds-card-case-study-content-related-products-padding-block-end,
      ${a("var(--ds-app-space-micro-xl)")}
    );
  }

  :host([configuration='default'])
    ::slotted([slot='card-case-study__content-related-products']) {
    --ds-product-gap: var(--ds-app-space-micro-xl, 1.5rem);
  }

  .card-case-study__content-logo {
    --ds-media-max-width: 158px;
    padding-block-end: var(
      --ds-card-case-study-content-logo-padding-block-end,
      ${a(P)}
    );
    border: var(
      --ds-card-case-study-content-logo-border,
      ${a(z)}
    );
  }
  :host([configuration='media']) .card-case-study__content-logo {
    --ds-media-max-width: 86px;
  }

  .card-case-study__content-button {
    --ds-button-border-radius: var(--ds-app-radii-s);
    position: var(
      --ds-card-case-study-content-button-position,
      ${a(T)}
    );
    bottom: var(
      --ds-card-case-study-content-button-bottom,
      ${a(Z)}
    );
    padding-block-start: var(
      --ds-card-case-study-content-button-padding-inline-start,
      ${a(H)}
    );
  }

  :host([configuration='media']) .card-case-study__media {
    inset-block: 0;
    inset-inline: 0;

    --ds-card-case-study-media-position: absolute;
    --ds-card-case-study-padding-inline-start: 0;
    --ds-card-case-study-padding-inline-end: 0;
    --ds-card-case-study-padding-block-start: 0;
    --ds-card-case-study-padding-block-end: 0;
    --ds-card-case-study-width: 100%;
  }

  :host([configuration='media']) .card-case-study__content {
    --ds-card-case-study-content-position: relative;
    --ds-card-case-study-content-bottom: initial;
    --ds-card-case-study-content-top: initial;
    --ds-card-case-study-content-padding-inline-start: var(--ds-app-space-micro-xs);
    --ds-card-case-study-content-padding-inline-end: var(--ds-app-space-micro-xs);
    --ds-card-case-study-content-padding-block-start: var(--ds-app-space-micro-xs);
    --ds-card-case-study-content-padding-block-end: var(--ds-app-space-micro-xs);
    --ds-card-case-study-content-width: 100%;
    --ds-card-case-study-content-z-index: var(--ds-z-index-20, 20);
    --ds-card-case-study-content-box-sizing: border-box;
  }

  :host([configuration='media'])::part(card-case-study__content-container) reimagine-media {
    --ds-media-max-width: 160px;
  }

  :host([configuration='media']) .card-case-study__content-body {
    --ds-card-case-study-content-body-padding-block-end: var(--ds-app-space-micro-l);
  }

  :host([configuration='default']) .card-case-study__content-label {
    --ds-card-case-study-content-label-padding-block-end: var(--ds-app-space-micro-xs);
  }
`;export{k as a,w as c,q as s};
