import{b as e}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{b as t}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{d as r}from"/__mirror/assets/8b9fb2358bf27923e12447c9";var a=Object.getOwnPropertyDescriptor,i=Object.getPrototypeOf,n=Reflect.get;const o="reimagine-editorial-agenda";let s=class extends t{_renderBlade(){const t="container",r=e`
      <reimagine-layout>
        <reimagine-layout-column>
          <div class="body" part="body">
            <slot></slot>
          </div>
        </reimagine-layout-column>
      </reimagine-layout>
    `;return this.baseContent?e` <div class=${t} part=${t}>${r}</div> `:e`
      <reimagine-container class=${t} part=${t}>
        ${r}
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var l,d,m;s.styles=[...(l=s,d=s,m="styles",n(i(l),m,d)||[])],s=((e,t,r,i)=>{for(var n,o=i>1?void 0:i?a(t,r):t,s=e.length-1;s>=0;s--)(n=e[s])&&(o=n(o)||o);return o})([r(o)],s);export{s as EditorialAgenda,o as name};
