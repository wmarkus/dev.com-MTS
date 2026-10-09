import{r as t,i as o,f as a,e as r,b as e}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i as d,q as i,s,d as l}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{v as c}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{b as n,c as m}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{k as p}from"/__mirror/assets/6ad137053d5da8fc91d912f1";const g="column",u="flex",h="wrap",f="var(--ds-layout-column-gap, 1rem)",y="flex",v="75%",b="wrap",_="calc(25% - var(--ds-layout-column-gap))",$="100%",S="100%",x="cover",C="50vh",w="hidden",E="var(--ds-app-space-layout-stack-cozy, 3rem)",P="var(--ds-app-space-micro-2xl, 3rem)",j=o`
  :host {
    display: var(--ds-card-grid-product-display, ${t("flex")});
    flex-direction: var(
      --ds-card-grid-product-flex-direction,
      ${t(g)}
    );
    gap: var(--ds-card-grid-product-density-gap, ${t(E)});

    --ds-media-height: 100%;
  }

  .container {
    display: var(
      --ds-card-grid-product-container-display,
      ${t(u)}
    );
    flex-wrap: var(
      --ds-card-grid-product-container-flex-wrap,
      ${t(h)}
    );
    gap: var(--ds-card-grid-product-container-gap, ${t(f)});
  }

  .card-promo {
    width: var(
      --ds-card-grid-product-card-promo-width,
      ${t(S)}
    );

    --ds-media-object-fit: var(
      --ds-card-grid-product-card-promo-object-fit,
      ${t(x)}
    );
  }

  .bottom-cta {
    margin-block-start: var(
      --ds-card-grid-product-bottom-cta-margin-start,
      ${t(P)}
    );
  }

  .base.base-flex-basis {
    flex-basis: var(--ds-card-grid-product-base-flex-basis, 100%);
  }
`,k=o`
  @media (min-width: ${t(c.lg)}) {
    .base {
      display: var(--ds-card-grid-product-base-display, ${t(y)});
      flex-basis: var(
        --ds-card-grid-product-base-flex-basis,
        ${t(v)}
      );
      flex-wrap: var(
        --ds-card-grid-product-base-flex-wrap,
        ${t(b)}
      );
    }
    .card-promo {
      flex-basis: var(
        --ds-card-grid-product-card-promo-flex-basis,
        ${t(_)}
      );

      --ds-card-promo-safe-area-height: 0;
    }

    ::slotted([slot='card-promo']) {
      height: var(
        --ds-card-grid-product-card-promo-height,
        ${t($)}
      );

      --ds-media-overflow: var(
        --ds-card-grid-product-card-promo-media-overflow,
        ${t(w)}
      );
    }
  }

  @media (max-width: ${t(c.lg)}) {
    .card-promo {
      --ds-media-max-height: var(
        --ds-card-grid-product-card-promo-media-height,
        ${t(C)}
      );
    }
  }

  @media (max-width: ${t(c.md)}) {
    .container {
      --ds-card-grid-product-container-gap: var(--ds-app-space-micro-s);
    }
  }
`;var D=Object.defineProperty,L=Object.getOwnPropertyDescriptor,O=Object.getPrototypeOf,B=Reflect.get,F=(t,o,a,r)=>{for(var e,d=r>1?void 0:r?L(o,a):o,i=t.length-1;i>=0;i--)(e=t[i])&&(d=(r?e(o,a,d):e(d))||d);return r&&d&&D(o,a,d),d};const T="reimagine-card-grid-product";let q=class extends n{constructor(){super(...arguments),this._bottomLayoutConfiguration=m.col4even1,this._defaultSlotEmpty=!0,this._cardPromoSlotEmpty=!0,this._footerCtaSlotEmpty=!0}_handleDefaultSlotChange(){this._defaultSlotEmpty=0===this._defaultSlot.length;const t=this._defaultSlot.filter(t=>d(t,"reimagine-layout-column"))||[];if(this._defaultSlotEmpty||0===t.length)return;const o=t.map(t=>i(t,"reimagine-card-badge"));s(o,{"text-block-configuration":p.stacked})}_handleCardPromoSlotChange(){var t;this._cardPromoSlotEmpty=0===(null==(t=this._cardPromoSlot)?void 0:t.length),this._cardPromoSlotEmpty?this._bottomLayoutConfiguration=m.col4even1:this._bottomLayoutConfiguration=m.col3Even}_handleFooterCtaSlotChange(){var t;this._footerCtaSlotEmpty=0===(null==(t=this._footerCtaSlot)?void 0:t.length)}_renderDefaultTemplate(){return e`
      <reimagine-layout>
        <reimagine-layout-column class="container">
          <div
            part="card-promo"
            class="card-promo"
            style="${this._cardPromoSlotEmpty?"display: none;":""}"
          >
            <slot name="card-promo" @slotchange="${this._handleCardPromoSlotChange}"></slot>
          </div>
          <reimagine-layout
            configuration=${this._bottomLayoutConfiguration}
            class="base ${this._cardPromoSlotEmpty?"base-flex-basis":""}"
          >
            <slot @slotchange="${this._handleDefaultSlotChange}"></slot>
          </reimagine-layout>
        </reimagine-layout-column>
      </reimagine-layout>
      <reimagine-layout configuration=${m.col1even}>
        <reimagine-layout-column>
          <div
            part="bottom-cta"
            class="bottom-cta"
            style="${this._footerCtaSlotEmpty?"display: none;":""}"
          >
            <slot name="bottom-cta" @slotchange="${this._handleFooterCtaSlotChange}"></slot>
          </div>
        </reimagine-layout-column>
      </reimagine-layout>
    `}_renderBlade(){const t=this._renderDefaultTemplate();return this.baseContent?e` <div>${t}</div> `:e` <reimagine-container> ${t} </reimagine-container> `}render(){return this.renderUiShell(this._renderBlade())}};var z,G,R;q.styles=[...(z=q,G=q,R="styles",B(O(z),R,G)||[]),j,k],F([a()],q.prototype,"_bottomLayoutConfiguration",2),F([a()],q.prototype,"_defaultSlotEmpty",2),F([a()],q.prototype,"_cardPromoSlotEmpty",2),F([a()],q.prototype,"_footerCtaSlotEmpty",2),F([r({slot:"card-promo"})],q.prototype,"_cardPromoSlot",2),F([r()],q.prototype,"_defaultSlot",2),F([r({slot:"bottom-cta"})],q.prototype,"_footerCtaSlot",2),q=F([l(T)],q);export{q as CardGridProduct,T as name};
