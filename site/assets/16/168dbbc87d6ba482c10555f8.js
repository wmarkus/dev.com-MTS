import{r as t,i as e,g as s,f as a,b as i}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{R as l}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{i as o,d as n}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{name as r}from"/__mirror/assets/9bce10b1f8f8949b4fd224b8";import{B as d}from"/__mirror/assets/4230c2711e37b2e85105da0e";import{name as g}from"/__mirror/assets/e03438b5798d9e90c6c162a8";import{p}from"/__mirror/assets/6ad137053d5da8fc91d912f1";const h="center",m="var(--ds-app-space-micro-xs, 0.5rem)",f="fit-content",y="var(--ds-app-color-base-default-fg-heading, #0e1726)",c="var(--ds-app-type-heading-3xs-font-family, var(--ds-font-family-text))",v="var(--ds-app-type-heading-3xs-font-size, 1rem)",b="var(--ds-app-type-heading-3xs-line-height, 1.5rem)",$="var(--ds-app-type-heading-3xs-font-weight, 600)",S="var(--ds-app-color-base-default-fg-body, #3a4c56)",_="var(--ds-app-type-body-xs-font-family, var(--ds-font-family-text))",x="var(--ds-app-type-body-xs-font-size, 0.75rem)",A="var(--ds-app-type-body-xs-line-height, 1rem)",u="var(--ds-app-type-body-xs-font-weight, 400)",j="-0.02em",w=e`
  :host {
    display: var(--ds-badge-title-display, ${t("inline-flex")});
    align-items: var(--ds-badge-title-align-items, ${t(h)});
    gap: var(--ds-badge-title-gap, ${t(m)});
    width: var(--ds-badge-title-width, ${t(f)});
  }

  .content {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  ::slotted([slot='heading']) {
    margin: 0;
    color: var(--ds-badge-title-heading-color, ${t(y)});
    font-family: var(
      --ds-badge-title-heading-font-family,
      ${t(c)}
    );
    font-size: var(--ds-badge-title-heading-font-size, ${t(v)});
    line-height: var(
      --ds-badge-title-heading-line-height,
      ${t(b)}
    );
    font-weight: var(
      --ds-badge-title-heading-font-weight,
      ${t($)}
    );
  }

  ::slotted([slot='title-asset']) {
    margin: 0;
    color: var(--ds-badge-title-title-asset-color, ${t(S)});
    font-family: var(
      --ds-badge-title-title-asset-font-family,
      ${t(_)}
    );
    font-size: var(
      --ds-badge-title-title-asset-font-size,
      ${t(x)}
    );
    line-height: var(
      --ds-badge-title-title-asset-line-height,
      ${t(A)}
    );
    font-weight: var(
      --ds-badge-title-title-asset-font-weight,
      ${t(u)}
    );
    letter-spacing: var(
      --ds-badge-title-title-asset-letter-spacing,
      ${t(j)}
    );
  }
`;var z=Object.defineProperty,E=Object.getOwnPropertyDescriptor,O=Object.getPrototypeOf,C=Reflect.get,P=(t,e,s,a)=>{for(var i,l=a>1?void 0:a?E(e,s):e,o=t.length-1;o>=0;o--)(i=t[o])&&(l=(a?i(e,s,l):i(l))||l);return a&&l&&z(e,s,l),l},B=(t,e,s)=>C(O(t),s,e);const L="reimagine-badge-title";let R=class extends l{constructor(){super(...arguments),this._titleAssetSlotEmpty=!0,this._tagSlotEmpty=!0}_handleLeadingAssetSlotChange(){(this._leadingAssetSlot??[]).forEach(t=>{o(t,r)&&!t.hasAttribute("size")&&t.setAttribute("size",d.m)})}_handleSlotChange(){this._titleAssetSlotEmpty=0===(this._titleAssetSlot??[]).length,this._tagSlotEmpty=0===(this._tagSlot??[]).length,(this._tagSlot??[]).forEach(t=>{o(t,g)&&!t.hasAttribute("size")&&t.setAttribute("size",p.medium)})}_renderOptionalSlot(t,e){return i`
      <div part=${t} class=${t} style=${e?"display: none;":""}>
        <slot name=${t} @slotchange=${this._handleSlotChange}></slot>
      </div>
    `}render(){return i`
      <slot
        name="leading-asset"
        part="leading-asset"
        class="leading-asset"
        @slotchange=${this._handleLeadingAssetSlotChange}
      ></slot>
      <div part="content" class="content">
        <slot name="heading" part="heading" class="heading"></slot>
        ${this._renderOptionalSlot("title-asset",this._titleAssetSlotEmpty)}
        ${this._renderOptionalSlot("tag",this._tagSlotEmpty)}
      </div>
    `}};R.styles=[...Array.isArray(B(R,R,"styles"))?B(R,R,"styles"):B(R,R,"styles")?[B(R,R,"styles")]:[],w],P([s({slot:"leading-asset"})],R.prototype,"_leadingAssetSlot",2),P([s({slot:"title-asset"})],R.prototype,"_titleAssetSlot",2),P([s({slot:"tag"})],R.prototype,"_tagSlot",2),P([a()],R.prototype,"_titleAssetSlotEmpty",2),P([a()],R.prototype,"_tagSlotEmpty",2),R=P([n(L)],R);export{R as BadgeTitle,L as name};
