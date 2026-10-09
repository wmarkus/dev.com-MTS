import{i as s,r as a}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";const e={d100:"100ms",d300:"300ms",d600:"600ms",d800:"800ms"},o={custom:"cubic-bezier(0.19, 1, 0.22, 1)"},i=e=>s`
    ${a(`transition: ${e};`)};

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `,n=e=>s`
    ${a(`animation: ${e};`)}

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `,r=a=>s`
  .collapse {
    ${i(`var(--ds-transition-collapse, ${a})`)};
  }

  .collapse:not(.show) {
    display: none;
  }
`,t=s`
  ${i("var(--ds-transition-fade, opacity 0.15s linear)")};
`;export{e as D,o as T,n as a,r as c,t as f,i as t};
