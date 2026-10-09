import{i as e,b as t}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as o}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{b as r,c as a}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import"/__mirror/assets/7f18a1d05eb820a3155b27d9";const s=e`
  :host {
    --ds-ui-shell-gap: var(--ds-app-space-layout-stack-comfortable, 2rem);
  }

  :host(:not([background])) {
    background: var(--ds-app-color-base-default-bg-opt1, #f4fafd);
  }
`;var n=Object.getOwnPropertyDescriptor,i=Object.getPrototypeOf,l=Reflect.get;const c="reimagine-utility-footnote";let d=class extends r{_renderBlade(){const e="base",o=t`
      <reimagine-layout part="body" class="body" configuration="${a.col1even}">
        <slot></slot>
      </reimagine-layout>
    `;return this.baseContent?t`<div class="${e}" part="${e}">${o}</div>`:t`
      <reimagine-container part=${e} class="${e}">
        ${o}
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var p,m,f;d.styles=[...(p=d,m=d,f="styles",l(i(p),f,m)||[]),s],d=((e,t,o,r)=>{for(var a,s=r>1?void 0:r?n(t,o):t,i=e.length-1;i>=0;i--)(a=e[i])&&(s=a(s)||s);return s})([o(c)],d);export{d as FootnoteBlade,c as name};
