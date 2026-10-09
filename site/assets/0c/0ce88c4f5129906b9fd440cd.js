import{r as e,i as t,b as a}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{SurfaceElement as s}from"/__mirror/assets/e09cf4eae8f90fbcbeb198a9";import{c as r}from"/__mirror/assets/a0679f491075e7b16b00f1b4";import{d as o}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{m as i,o as l}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{b as n,v as p}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";const c=t`
  :host {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--ds-app-space-micro-xl, 2rem);

    --ds-button-border-radius: var(--ds-app-radii-s, 0.5rem);
    --ds-badge-box-shadow: none;
  }

  .top {
    display: flex;
    padding: var(--ds-app-space-micro-l, 1.5rem);
    flex-direction: column;
    align-items: flex-start;
    gap: var(--ds-app-space-micro-l, 1.5rem);
    align-self: stretch;
  }

  .heading {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--ds-app-space-micro-m, 1rem);
    align-self: stretch;
  }

  ::slotted([slot='heading-label']),
  ::slotted([slot='footer-label']) {
    color: var(--ds-app-color-base-default-fg-highlight, #005597) !important;
    font-size: ${e(i.fontSize)} !important;
    font-weight: ${e(i.fontWeight)} !important;
    line-height: ${e(i.lineHeight)} !important;
    letter-spacing: ${e(i.letterSpacing)} !important;
  }

  .title-container {
    display: flex;
    align-items: center;
    gap: var(--ds-app-space-micro-m, 1rem);
    align-self: stretch;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .actions-container {
    display: flex;
  }

  slot[name='button-group'] {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1 0 0;
    align-self: stretch;
  }

  slot[name='divider'] {
    display: block;
    width: 100%;
  }

  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--ds-app-space-micro-m, 1rem);
    align-self: stretch;
  }

  slot[name='content-text'] {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex: 1 0 0;
    padding-right: var(--ds-app-space-micro-2xl, 3rem);
  }

  ::slotted([slot='content-text']) {
    color: var(--ds-app-color-base-default-fg-heading, #0e1726);
  }

  slot[name='content-text-block'] {
    --ds-text-block-heading-font-weight: ${e(l.fontWeight)};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--ds-app-space-micro-xl, 1.5rem) var(--ds-app-space-micro-2xl, 3rem);
    flex: 1 0 0;
  }

  .bottom {
    padding-left: var(--ds-app-space-micro-xs, 0.03125rem);
    padding-right: var(--ds-app-space-micro-xs, 0.03125rem);
    padding-bottom: var(--ds-app-space-micro-xs, 0.03125rem);
    align-self: stretch;
  }

  .footer {
    display: flex;
    padding: var(--ds-app-space-micro-m, 1rem);
    flex-direction: column;
    align-items: flex-start;
    gap: var(--ds-app-space-micro-l, 1.5rem);
    align-self: stretch;
    border-radius: var(--ds-app-radii-m, 1rem);
    background-color: var(--ds-app-color-base-default-bg-opt2, #dceef8);
  }

  ::slotted([slot='footer-label']) {
    color: var(--ds-app-color-base-default-fg-heading, #0e1726);
  }

  .footer-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--ds-app-space-micro-m, 1rem);
    align-self: stretch;
  }
`,d=t`
  @media (max-width: ${e(n(p.sm))}) {
    :host {
      gap: var(--ds-app-space-micro-xl, 1.5rem);
    }

    .top {
      padding: var(--ds-app-space-micro-m, 1rem);
      flex-direction: column;
      gap: var(--ds-app-space-micro-l, 1rem);
    }

    .title-container {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: var(--ds-app-space-micro-s, 0.75rem);
    }

    .actions-container {
      --ds-link-group-padding-inline-start: 5px;
      --ds-link-group-padding-inline-end: 5px;
      grid-row-gap: var(--ds-app-space-micro-xl, 1.5rem);
      flex-direction: column;
      width: 100%;
    }

    slot[name='button-group'] {
      justify-content: stretch;
      align-items: center;
      align-self: stretch;
    }

    ::slotted([slot='button-group']) {
      width: 100%;
    }

    .content {
      grid-template-columns: 1fr;
      gap: var(--ds-app-space-micro-3xl, 4.5rem);
    }

    slot[name='content-text-block'] {
      gap: var(--ds-app-space-micro-xl, 1.5rem);
      grid-template-columns: 1fr;
    }

    .footer {
      gap: var(--ds-app-space-micro-m, 1rem);
      align-self: stretch;
    }

    .footer-content {
      grid-template-columns: 1fr;
      gap: var(--ds-app-space-micro-s, 0.75rem);
    }
  }

  @media (min-width: ${e(p.sm)}) {
    .actions-container {
      column-gap: var(--ds-app-space-micro-xl);
      align-items: center;
      flex-shrink: 0;
    }
  }
`;var m=Object.getOwnPropertyDescriptor;const g="reimagine-card-data-sheet";let f=class extends s{render(){return a`
      <slot name="first"></slot>

      <div class="top">
        <div class="heading">
          <slot name="heading-label"></slot>
          <div class="title-container">
            <slot name="title"></slot>
            <div class="actions-container">
              <slot name="button-group"></slot>
              <slot name="link-group"></slot>
            </div>
          </div>
        </div>

        <slot name="divider"></slot>

        <div class="content">
          <slot name="content-text"></slot>
          <slot name="content-text-block"></slot>
        </div>
      </div>

      <div class="bottom">
        <div class="footer">
          <slot name="footer-label"></slot>

          <div class="footer-content">
            <slot name="footer-editorial"></slot>
          </div>
        </div>
      </div>

      <slot name="last"></slot>
    `}};f.styles=[c,d,r],f=((e,t,a,s)=>{for(var r,o=s>1?void 0:s?m(t,a):t,i=e.length-1;i>=0;i--)(r=e[i])&&(o=r(o)||o);return o})([o(g)],f);export{f as CardDataSheet,g as name};
