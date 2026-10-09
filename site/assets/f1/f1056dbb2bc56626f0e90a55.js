import{r as o,i as a,c as t,f as e,b as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{a as i,d as n}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{R as s,c as l}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{v as d,b as g}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{name as m}from"/__mirror/assets/b53611747e168f8af3c1226d";const c="var(--ds-app-space-micro-m)",u="var(--ds-container-padding-inline-start, 1rem)",p="var(--ds-container-padding-inline-end, 1rem)",b="initial",h="var(--ds-app-color-surface-solid-bg-default, #fefefe)",y="initial",_=a`
  :host {
    display: var(--ds-logobar-display, ${o("block")});
    margin-inline: var(
      --ds-logobar-margin-inline,
      ${o(b)}
    );
  }

  :host .logobar__container {
    padding-block: var(--ds-logobar-padding-block, ${o(c)});
    padding-inline-start: var(
      --ds-logobar-padding-inline-start,
      ${o(u)}
    );
    padding-inline-end: var(
      --ds-logobar-padding-inline-end,
      ${o(p)}
    );
    width: var(--ds-logobar-container-width, ${o(y)});
  }

  :host([enable-background]) {
    background: var(--ds-logobar-background, ${o(h)});
  }
`,f=a`
  @media (min-width: ${o(d.md)}) {
    ::slotted(reimagine-layout-column) {
      --ds-layout-column-flex-basis: 208px;
    }

    .logobar__layout::part(layout__base) {
      --ds-grid-column-gap: 0.5rem;
      --ds-layout-column-gap: 0.5rem;
      --ds-layout-row-gap: 0.5rem;
      --ds-layout-justify-content: center;
    }
  }

  @media (max-width: ${o(g(d.sm))}) {
    ::slotted(reimagine-layout-column) {
      --ds-layout-column-amount: 3;
    }
  }

  @media (max-width: ${o(g(d.md))}) {
    ::slotted(reimagine-layout-column:nth-child(odd)) {
      display: flex;
      justify-content: flex-end;
    }
  }
`;var v=Object.defineProperty,k=Object.getOwnPropertyDescriptor,B=(o,a,t,e)=>{for(var r,i=e>1?void 0:e?k(a,t):a,n=o.length-1;n>=0;n--)(r=o[n])&&(i=(e?r(a,t,i):r(i))||i);return e&&i&&v(a,t,i),i};const $="reimagine-logobar";let j=class extends s{constructor(){super(...arguments),this.enableBackground=!1,this.strokeHidden=!1,this._logoBarItems=[]}_handleLayoutSlotChange(){this._logoBarItems=i(this,m),this._setLogoBarItemAttributes()}_setLogoBarItemAttributes(){this._logoBarItems.length>0&&this._logoBarItems.forEach(o=>{this.strokeHidden?o.strokeHidden=!0:o.strokeHidden=!1})}updated(o){o.has("strokeHidden")&&this._setLogoBarItemAttributes()}render(){return r`
      <reimagine-container part="logobar__container" class="logobar__container">
        <reimagine-layout
          configuration="${l.col6Even}"
          part="logobar__layout"
          class="logobar__layout"
        >
          <slot @slotchange=${this._handleLayoutSlotChange}></slot>
        </reimagine-layout>
      </reimagine-container>
    `}};j.styles=[_,f],B([t({type:Boolean,attribute:"enable-background",reflect:!0})],j.prototype,"enableBackground",2),B([t({type:Boolean,reflect:!0,attribute:"stroke-hidden"})],j.prototype,"strokeHidden",2),B([e()],j.prototype,"_logoBarItems",2),j=B([n($)],j);export{j as LogoBar,$ as name};
