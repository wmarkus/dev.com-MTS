import{r as t,i as e,c as a,e as n,f as s,b as d}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{s as o,i as r,d as i}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{v as c}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{n as l,a as p}from"/__mirror/assets/34233ee5ac8acdb3aa831b25";import{n as m}from"/__mirror/assets/5d2e1bf3d87581457a2b76db";import{name as h}from"/__mirror/assets/dfe9bfdeca64f5cc0a14aa70";import{M as b,j as u,i as g}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{S as v}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{c as f}from"/__mirror/assets/a0679f491075e7b16b00f1b4";import{SurfaceElement as y}from"/__mirror/assets/e09cf4eae8f90fbcbeb198a9";const w="column",x="initial",S="320px",_="320px",k="var(--ds-app-space-micro-xs, 0.5rem)",$="var(--ds-app-space-micro-xs, 0.5rem)",j="var(--ds-app-space-micro-xs, 0.5rem)",C="1",D="flex",A="column",E="space-between",H="var(--ds-app-space-micro-2xl, 2rem)",M="var(--ds-app-space-surface-comfortable, 1.5rem)",O="var(--ds-app-space-surface-comfortable, 1.5rem)",z="1",P="flex",B="column",T="flex-start",U="flex",L="column",R="var(--ds-app-space-micro-s, 0.75rem)",q=e`
  :host {
    display: var(--ds-card-stat-banner-display, ${t("flex")});
    flex-direction: var(
      --ds-card-stat-banner-flex-direction,
      ${t(w)}
    );
    justify-content: var(
      --ds-card-stat-banner-justify-content,
      ${t(x)}
    );
    min-height: var(--ds-card-stat-banner-min-height, ${t(_)});

    --ds-card-base-overflow: hidden;
    --ds-media-asset-border-start-start-radius: var(--ds-app-radii-m);
    --ds-media-asset-border-start-end-radius: var(--ds-app-radii-m);
    --ds-media-asset-border-end-end-radius: var(--ds-app-radii-m);
    --ds-media-asset-border-end-start-radius: var(--ds-app-radii-m);
    --ds-surface-border-radius: var(--ds-app-radii-l) !important;
    --ds-media-width: 100%;
    --ds-media-display: block;
  }

  :host(:not([layout='stacked'])) {
    --ds-media-asset-width: 100%;
    --ds-media-asset-height: 100%;
  }

  :host([layout='stacked']) {
    max-width: var(--ds-card-stat-banner-max-width, ${t(S)});
  }

  .media {
    padding-inline-start: var(
      --ds-card-stat-banner-media-padding-inline-start,
      ${t(k)}
    );
    padding-inline-end: var(
      --ds-card-stat-banner-media-padding-inline-end,
      ${t($)}
    );
    padding-block-start: var(
      --ds-card-stat-banner-media-padding-block-start,
      ${t(j)}
    );
    padding-block-end: var(--ds-card-stat-banner-media-padding-block-end, 0);
    flex: var(--ds-card-stat-banner-media-flex, ${t(C)});
  }

  .content {
    display: var(
      --ds-card-stat-banner-content-display,
      ${t(D)}
    );
    flex-direction: var(
      --ds-card-stat-banner-content-flex-direction,
      ${t(A)}
    );
    justify-content: var(
      --ds-card-stat-banner-content-justify-content,
      ${t(E)}
    );
    gap: var(--ds-card-stat-banner-content-gap, ${t(H)});
    padding-inline: var(
      --ds-card-stat-banner-content-padding-inline,
      ${t(M)}
    );
    padding-block: var(
      --ds-card-stat-banner-content-padding-block,
      ${t(O)}
    );
    flex: var(--ds-card-stat-banner-content-flex, ${t(z)});
  }

  .content-header {
    display: var(
      --ds-card-stat-banner-content-header-display,
      ${t(P)}
    );
    flex-direction: var(
      --ds-card-stat-banner-content-header-flex-direction,
      ${t(B)}
    );
    align-items: var(
      --ds-card-stat-banner-content-header-align-items,
      ${t(T)}
    );
  }

  .content-stat {
    display: var(
      --ds-card-stat-banner-content-stat-display,
      ${t(U)}
    );
    flex-direction: var(
      --ds-card-stat-banner-content-stat-flex-direction,
      ${t(L)}
    );
    gap: var(
      --ds-card-stat-banner-content-stat-gap,
      ${t(R)}
    );
  }

  ::slotted([slot='content-dropdown']) {
    width: 100%;

    --ds-dropdown-trigger-display: block;
    --ds-button-width: 100%;
  }

  /* Stacked layout uses a larger header/stat gap; horizontal keeps the 2xl default (vp1/vp2)
     and collapses to 0 at md+ (see viewport styles). */
  :host([layout='stacked']) .content {
    --ds-card-stat-banner-content-gap: var(--ds-app-space-micro-3xl, 4.5rem);
  }

  /* Stacked layout: media sits above the content with padding on all sides */
  :host([layout='stacked']) .media {
    --ds-card-stat-banner-media-padding-block-end: var(--ds-app-space-micro-xs, 0.5rem);
  }

  :host([layout='stacked']) .content-stat {
    word-break: break-word;
  }
`,F=e`
  @media (min-width: ${t(c.md)}) {
    /* Horizontal layout switches to a side-by-side arrangement on wider viewports.
       The media is rendered first in the DOM; row-reverse places it on the trailing edge. */
    :host(:not([layout='stacked'])) {
      --ds-card-stat-banner-flex-direction: row-reverse;
      --ds-card-stat-banner-justify-content: space-between;
      --ds-card-stat-banner-min-height: auto;
    }

    /* Side-by-side layout relies on space-between, so the header/stat gap collapses to 0 */
    :host(:not([layout='stacked'])) .content {
      --ds-card-stat-banner-content-gap: 0;
    }

    :host(:not([layout='stacked'])) ::slotted([slot='content-dropdown']) {
      --ds-button-width: fit-content;
    }

    :host(:not([layout='stacked'])) .media {
      --ds-card-stat-banner-media-padding-block-end: var(--ds-app-space-micro-xs, 0.5rem);
      --ds-card-stat-banner-media-padding-inline-start: 0;

      /* Media becomes fluid to fill the card height when the content column is taller */
      --ds-media-height: 100%;
      --ds-media-picture-height: 100%;
      --ds-media-object-fit: cover;
      --ds-media-asset-display: block;
    }

    /* Stretch the slotted media element so its image can fill the available height */
    :host(:not([layout='stacked'])) .media ::slotted([slot='media']) {
      height: 100%;
    }
  }
`,G="stacked",I="stacked";var J=Object.defineProperty,K=Object.getOwnPropertyDescriptor,N=Object.getPrototypeOf,Q=Reflect.get,V=(t,e,a,n)=>{for(var s,d=n>1?void 0:n?K(e,a):e,o=t.length-1;o>=0;o--)(s=t[o])&&(d=(n?s(e,a,d):s(d))||d);return n&&d&&J(e,a,d),d};const W="reimagine-card-stat-banner";let X=class extends y{constructor(){super(...arguments),this._contentDropdownSlotEmpty=!0}_updateMediaAttributes(){const t=this._mediaSlot.find(t=>t instanceof HTMLElement);o(t,{"aspect-ratio":b.ratio4to3})}_updateContentHeaderAttributes(){this._contentHeaderSlot.forEach(t=>{const e=t;r(e,l)&&o(e,{size:p.x3large})})}_updateContentDropdownAttributes(){this._contentDropdownSlot.forEach(t=>{const e=t;r(e,m)&&o(e,{appearance:g.buttonSecondary,shape:u.rounded})})}_updateContentStatAttributes(){this._contentStatSlot.forEach(t=>{const e=t;r(e,h)&&(this.layout===I?o(e,{configuration:G},!0):e.removeAttribute("configuration"))})}_handleSlotChange(t){this._contentDropdownSlotEmpty=0===this._contentDropdownSlot.length;const e=t.target.getAttribute("name");"media"===e&&this._mediaSlot.length>0&&this._updateMediaAttributes(),"content-header"===e&&this._contentHeaderSlot.length>0&&this._updateContentHeaderAttributes(),"content-stat"===e&&this._contentStatSlot.length>0&&this._updateContentStatAttributes(),"content-dropdown"===e&&!this._contentDropdownSlotEmpty&&this._updateContentDropdownAttributes()}willUpdate(t){super.willUpdate(t),this.surface??(this.surface=v.solidBorder)}updated(t){super.updated(t),t.has("layout")&&this._updateContentStatAttributes()}render(){return d`
      <div part="media" class="media">
        <slot name="media" @slotchange=${this._handleSlotChange}></slot>
      </div>
      <div part="content" class="content">
        <div part="content-header" class="content-header">
          <slot name="content-header" @slotchange=${this._handleSlotChange}></slot>
        </div>
        <div part="content-stat" class="content-stat">
          <slot name="content-stat" @slotchange=${this._handleSlotChange}></slot>
          <div
            part="content-dropdown"
            class="content-dropdown"
            style="${this._contentDropdownSlotEmpty?"display: none;":""}"
          >
            <slot name="content-dropdown" @slotchange=${this._handleSlotChange}></slot>
          </div>
        </div>
      </div>
    `}};var Y,Z,tt;X.styles=[...(Y=X,Z=X,tt="styles",Q(N(Y),tt,Z)||[]),f,q,F],V([a({reflect:!0})],X.prototype,"layout",2),V([n({slot:"media"})],X.prototype,"_mediaSlot",2),V([n({slot:"content-header"})],X.prototype,"_contentHeaderSlot",2),V([n({slot:"content-stat"})],X.prototype,"_contentStatSlot",2),V([n({slot:"content-dropdown"})],X.prototype,"_contentDropdownSlot",2),V([s()],X.prototype,"_contentDropdownSlotEmpty",2),X=V([i(W)],X);export{X as CardStatBanner,W as name};
