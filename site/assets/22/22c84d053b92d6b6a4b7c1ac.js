import{r as t,i as o,c as a,e,o as i,b as n}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{c as r,b as s,n as d,H as c,h as l,T as p}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{i as m,q as b,k as h,d as u}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{v as g}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{b as _,z as y}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{name as f}from"/__mirror/assets/dfe9bfdeca64f5cc0a14aa70";import{n as k}from"/__mirror/assets/b261b011546c5001df09e043";const w="var(--ds-app-space-micro-2xl, 4.5rem)",B="var(--ds-app-space-micro-3xl, 4.5rem)",v="var(--ds-app-radii-l, 1.5rem)",$=o`
  .data-with-caption__container {
    --ds-container-display: flex;
    --ds-container-flex-direction: column;
    --ds-container-gap: var(--ds-ui-shell-content-row-gap, 3rem);
  }

  .data-with-caption__bottom-container {
    background: var(
      --ds-data-with-caption-bottom-background,
      ${t("var(--ds-app-color-base-special-bg-opt2-left)")}
    );
    padding-inline: var(
      --ds-data-with-caption-bottom-padding-inline,
      ${t(w)}
    );
    padding-block: var(
      --ds-data-with-caption-bottom-padding-block,
      ${t(B)}
    );
    border-radius: var(
      --ds-data-with-caption-bottom-border-radius,
      ${t(v)}
    );

    --ds-stat-body-gap: var(--ds-app-space-micro-xs, 0.5rem);
  }

  :host::part(layout__base) {
    --ds-layout-row-gap: 3.5rem;
  }

  :host([disable-bottom-background]) .data-with-caption__bottom-container {
    --ds-data-with-caption-bottom-background: none;
    --ds-data-with-caption-bottom-padding-block: 0;
    --ds-data-with-caption-bottom-padding-inline: 0;
  }

  :host([theme='dark'][disable-bottom-background]) .data-with-caption__bottom-container {
    --ds-data-with-caption-bottom-border-radius: 0;
  }
`,x=o`
  @media (max-width: ${t(g.md)}) {
    .data-with-caption__bottom-container {
      --ds-data-with-caption-bottom-padding-block: var(--ds-app-space-micro-3xl, 3rem);
    }
  }
`,L={col4even1:r.col4even1};var S=Object.defineProperty,C=Object.getOwnPropertyDescriptor,j=Object.getPrototypeOf,O=Reflect.get,A=(t,o,a,e)=>{for(var i,n=e>1?void 0:e?C(o,a):o,r=t.length-1;r>=0;r--)(i=t[r])&&(n=(e?i(o,a,n):i(n))||n);return e&&n&&S(o,a,n),n};const z="reimagine-data-with-caption";let D=class extends s{constructor(){super(...arguments),this.bottomLayoutConfiguration=L.col4even1,this.disableBottomBackground=!1}updated(t){(t.has("bottomBackground")||t.has("disableBottomBackground"))&&this._handleBottomBackground()}_handleTopLayoutSlotChange(){if(this._topLayoutSlot.length>0){const t=this._topLayoutSlot.filter(t=>m(t,d));t.length>0&&t.forEach(t=>{const o=b(t,k);o&&(o.hasAttribute("size")||o.setAttribute("size",c["size-md"]),o.hasAttribute("alignment")||o.setAttribute("alignment",l.center))})}}_handleBottomLayoutSlotChange(){if(this._bottomLayoutSlot.length>0){const t=this._bottomLayoutSlot.filter(t=>m(t,d));t.length>0&&t.forEach(t=>{const o=b(t,f);o&&!this.disableBottomBackground&&o.setAttribute("theme",p.light)})}}_handleBottomBackground(){if(this.disableBottomBackground)return this.bottomBackground=void 0,"";let t;this.bottomBackground||(this.bottomBackground=_.baseSpecialOpt2);const o=h(_,this.bottomBackground),a=o?y[o]:void 0;return t=a||y.baseSpecialOpt2,`background: ${t};`}renderBlade(){const t="data-with-caption__container",o=n`
      <reimagine-layout
        configuration="${r.col1focus}"
        part="data-with-caption__top-layout"
        class="data-with-caption__top-layout"
      >
        <slot
          name="data-with-caption__top-layout"
          @slotchange=${this._handleTopLayoutSlotChange}
        ></slot>
      </reimagine-layout>

      <div
        part="data-with-caption__bottom-container"
        class="data-with-caption__bottom-container"
        style="${this._handleBottomBackground()}"
      >
        <reimagine-layout
          configuration="${i(this.bottomLayoutConfiguration)}"
          density="relaxed"
          part="data-with-caption__bottom-layout"
          class="data-with-caption__bottom-layout"
        >
          <slot
            name="data-with-caption__bottom-layout"
            @slotchange=${this._handleBottomLayoutSlotChange}
          ></slot>
        </reimagine-layout>
      </div>
    `;return this.baseContent?n` <div class=${t} part=${t}>${o}</div> `:n`
      <reimagine-container part=${t} class="${t}">
        ${o}
      </reimagine-container>
    `}render(){return this.renderUiShell(this.renderBlade())}connectedCallback(){super.connectedCallback(),this.density="comfortable",this.background=_.baseDefaultOpt1}};var P,T,E;D.styles=[...(P=D,T=D,E="styles",O(j(P),E,T)||[]),$,x],A([a({reflect:!0})],D.prototype,"theme",2),A([a({attribute:"bottom-layout-configuration",reflect:!0})],D.prototype,"bottomLayoutConfiguration",2),A([a({attribute:"bottom-background",reflect:!0})],D.prototype,"bottomBackground",2),A([a({type:Boolean,attribute:"disable-bottom-background",reflect:!0})],D.prototype,"disableBottomBackground",2),A([e({slot:"data-with-caption__top-layout"})],D.prototype,"_topLayoutSlot",2),A([e({slot:"data-with-caption__bottom-layout"})],D.prototype,"_bottomLayoutSlot",2),D=A([u(z)],D);export{D as DataWithCaption,z as name};
