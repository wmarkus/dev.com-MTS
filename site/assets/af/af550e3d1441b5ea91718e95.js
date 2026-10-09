import{r as e,i as t,b as o,e as a,c as n}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{c as s,n as i,b as r,M as l,h as c,H as m}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{i as h,s as d,d as p}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{S as g}from"/__mirror/assets/ecadaafe454c3c322d56b64c";import{v as u}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{n as f}from"/__mirror/assets/bf0b3498e45fc20534cec8b1";import{n as y}from"/__mirror/assets/b261b011546c5001df09e043";import{name as w}from"/__mirror/assets/1744c47504083b26d862e98f";import{i as S,T as b}from"/__mirror/assets/6ad137053d5da8fc91d912f1";const _=t`
  .content::part(layout__base) {
    row-gap: var(--ds-banner-heading-row-gap, var(--ds-app-space-layout-inset-vertical-comfortable, 3.5rem));
  }

  .content reimagine-layout-column,
  .media,
  .title {
    display: flex;
    justify-content: center;
  }

  .container {
    display: flex;
    flex-direction: column;
    row-gap: var(--ds-banner-heading-container-row-gap, ${e("var(--ds-app-space-micro-2xl, 3rem)")});
  }
`,v=t`
  @media (min-width: ${e(u.md)}) {
    .content::part(layout__base) {
      row-gap: var(--ds-app-space-micro-2xl, 3rem);
    }
  }
`,$={col3Even:s.col3Even};var x=Object.defineProperty,j=Object.getOwnPropertyDescriptor,C=Object.getPrototypeOf,M=Reflect.get,B=(e,t,o,a)=>{for(var n,s=a>1?void 0:a?j(t,o):t,i=e.length-1;i>=0;i--)(n=e[i])&&(s=(a?n(t,o,s):n(s))||s);return a&&s&&x(t,o,s),s};const O="reimagine-banner-heading";let z=class extends(g(r)){constructor(){super(...arguments),this.configuration=$.col3Even,this.enableShowMoreShowLess=!1}_handleMediaSlotChange(){const e=this._mediaSlot[0];e&&h(e,f)&&d(e,{aspectRatio:l.ratio1to1})}_handleTitleSlotChange(){const e=this._titleSlot[0];e&&h(e,y)&&d(e,{size:m["size-md"],alignment:c.center})}_handleContentSlotChange(){this._contentSlot.forEach(e=>{if(e&&h(e,i)){const t=e.children[0];t&&h(t,w)&&d(t,{size:b["size-xs"],alignment:S.center})}})}_renderBlade(){const e=o`
      <reimagine-layout configuration=${s.col1staged}>
        <reimagine-layout-column class="media" part="media">
          <slot name="media" @slotchange="${this._handleMediaSlotChange}"></slot>
        </reimagine-layout-column>
      </reimagine-layout>

      <reimagine-layout configuration=${s.col1focus}>
        <reimagine-layout-column class="title" part="title">
          <slot name="title" @slotchange="${this._handleTitleSlotChange}"></slot>
        </reimagine-layout-column>
      </reimagine-layout>

      <reimagine-layout
        configuration=${this.configuration}
        density="relaxed"
        class="content"
        part="content"
        ?show-more-show-less-container=${this.enableShowMoreShowLess}
      >
        <slot name="content" @slotchange="${this._handleContentSlotChange}"></slot>
      </reimagine-layout>

      ${this.enableShowMoreShowLess?o`<slot
            name="show-more-button"
            @slotchange=${this.handleShowMoreButtonSlotChange}
          ></slot>`:""}
    `,t="container";return this.baseContent?o` <div class=${t} part=${t}>${e}</div> `:o`
      <reimagine-container class=${t} part=${t}>
        ${e}
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var E,L,P;z.styles=[...(E=z,L=z,P="styles",M(C(E),P,L)||[]),_,v],B([a({slot:"media"})],z.prototype,"_mediaSlot",2),B([a({slot:"title"})],z.prototype,"_titleSlot",2),B([a({slot:"content"})],z.prototype,"_contentSlot",2),B([n({reflect:!0})],z.prototype,"configuration",2),B([n({type:Boolean,reflect:!0,attribute:"enable-show-more-show-less"})],z.prototype,"enableShowMoreShowLess",2),z=B([p(O)],z);export{z as BannerHeading,O as name};
