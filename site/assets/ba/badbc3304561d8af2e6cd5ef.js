import{r as e,i as t,b as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{R as s}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{d as a}from"/__mirror/assets/8b9fb2358bf27923e12447c9";const o=t`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--ds-agenda-gap, ${e("var(--ds-app-space-micro-l, 1.5rem)")});
  }
`;var i=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,n=Reflect.get;const p="reimagine-agenda";let c=class extends s{render(){return r` <slot></slot> `}};var m,d,g;c.styles=[...(m=c,d=c,g="styles",n(l(m),g,d)||[]),o],c=((e,t,r,s)=>{for(var a,o=s>1?void 0:s?i(t,r):t,l=e.length-1;l>=0;l--)(a=e[l])&&(o=a(o)||o);return o})([a(p)],c);export{c as Agenda,p as name};
