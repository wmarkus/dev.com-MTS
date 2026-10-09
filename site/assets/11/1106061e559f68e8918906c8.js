import{r as e,i as a,b as t,c as i,e as s,f as o}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{x as r,y as d,z as n,R as l,h as m,H as c,B as g}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{c as p,d as h,S as u,a as f,e as $,B as b}from"/__mirror/assets/4230c2711e37b2e85105da0e";import{a as y,s as v,i as x,d as S}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{i as _,a as w}from"/__mirror/assets/34233ee5ac8acdb3aa831b25";import{a as E,c as j}from"/__mirror/assets/a0679f491075e7b16b00f1b4";import{v as z}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{S as q}from"/__mirror/assets/6ad137053d5da8fc91d912f1";const k="reimagine-card-testimonial",C=r(k),I="image",T="image--logo",B={background:p.background,borderRadius:"50%",outlineWidth:p.borderWidth,outlineColor:p.borderColor,outlineStyle:p.borderStyle,padding:"0rem"},O={width:"6.5rem"},R=t=>{const i=t?-2:2;return a`calc((${n(B,`${C}-quote-icon`,"padding")} * 2 + ${e(_["3xlarge"])}) / ${i});`},W=a`
  [surface='glass'] {
    ${d(h,"ds-surface")};
  }

  :host {
    --ds-surface-border-radius: ${e(E.borderRadius)};
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card-image {
    position: relative;
    z-index: var(--ds-z-index-10, 10);
  }

  .image ::slotted(reimagine-media) {
    --ds-media-border-start-start-radius: 50%;
    --ds-media-border-end-start-radius: 50%;
    --ds-media-border-start-end-radius: 50%;
    --ds-media-border-end-end-radius: 50%;
    overflow: hidden;
  }

  .image ::slotted(reimagine-badge) {
    --ds-badge-max-width: ${n(O,`${C}-image`,"width")};
    --ds-badge-max-height: ${n(O,`${C}-image`,"width")};
    --ds-badge-width: ${n(O,`${C}-image`,"width")};
    --ds-badge-height: ${n(O,`${C}-image`,"width")};
  }

  :host([configuration='${e(I)}']) .image,
  :host([configuration='${e(T)}']) .image {
    ${d(O,`${C}-image`)};
    height: ${n(O,`${C}-image`,"width")};
  }

  .quote-icon {
    ${d(B,`${C}-quote-icon`)};
    outline-offset: calc(
      ${n(B,`${C}-quote-icon`,"outlineWidth")} * -1
    );
    display: inline-flex;
    transform: rotate(180deg);
    position: absolute;
    left: ${R(!0)};
    z-index: var(--ds-z-index-20, 20);
  }

  .quote-icon reimagine-icon {
    --ds-icon-color: var(--ds-app-color-base-default-fg-accent, #0078d4);
  }

  .card-body {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-block-start: ${R()};

    ${d({paddingBlockStart:"var(--ds-app-space-micro-4xl)",paddingBlockEnd:"var(--ds-app-space-micro-2xl)",paddingInlineStart:"var(--ds-app-space-micro-l)",paddingInlineEnd:"var(--ds-app-space-micro-l)"},`${C}-card-body`)};
  }

  :host([configuration='${e(I)}']) .card-body,
  :host([configuration='${e(T)}']) .card-body {
    margin-block-start: calc(
      ${n(O,`${C}-image`,"width")} / -2
    );
  }

  .base {
    display: flex;

    ${d({maxWidth:"55rem"},`${C}-base`)};
  }
`,D=a`
  @media (min-width: ${e(z.lg)}) {
    :host {
      --ds-card-testimonial-quote-icon-padding: var(--ds-app-space-micro-s, 0.75rem);
      --ds-card-testimonial-image-width: 10rem;
    }
  }
`;var P=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,H=Object.getPrototypeOf,A=Reflect.get,F=(e,a,t,i)=>{for(var s,o=i>1?void 0:i?Q(a,t):a,r=e.length-1;r>=0;r--)(s=e[r])&&(o=(i?s(a,t,o):s(o))||o);return i&&o&&P(a,t,o),o};let G=class extends(u(l)){constructor(){super(...arguments),this._imageSlotEmpty=!0,this._defaultSlotEmpty=!0}_handleDefaultSlotChange(){var e;this._defaultSlotEmpty=0===this._defaultSlot.length,!this._defaultSlotEmpty&&(null==(e=y(this,"reimagine-heading-block"))||e.forEach(e=>{var a;const t=e,i={size:c["size-sm"],alignment:m.center};v(t,i),null==(a=y(t,"reimagine-button"))||a.forEach(e=>{const a=e,t={size:g.medium};v(a,t)})}))}_handleImageSlotChange(){var e;this._imageSlotEmpty=0===this._imageSlot.length,this._imageSlotEmpty?this.configuration=void 0:null==(e=this._imageSlot)||e.forEach(e=>{const a=e;if(x(a,"reimagine-badge")){const e={size:b.xl,shape:$.oval,surface:f.solidBorder};v(a,e)}})}_renderQuoteTemplate(){return t`
      <span class="quote-icon" part="quote-icon">
        <reimagine-icon icon="text-quote" size="${w.x3large}" filled></reimagine-icon>
      </span>
    `}_renderImageTemplate(){return t`
      <div class="image" part="image" style="${this._imageSlotEmpty?"display: none;":""}">
        <slot name="image" @slotchange="${this._handleImageSlotChange}"></slot>
      </div>
    `}render(){return t`
      ${this.firstSlotTemplate()}
      <div class="card-image" part="card-image">
        ${this._renderQuoteTemplate()} ${this._renderImageTemplate()}
      </div>
      <div class="card-body" part="card-body" surface="${q.glass}">
        <div class="base" part="base">
          <slot @slotchange="${this._handleDefaultSlotChange}"></slot>
        </div>
      </div>
    `}};var J,K,L;G.styles=[...(J=G,K=G,L="styles",A(H(J),L,K)||[]),W,D,j],F([i({reflect:!0})],G.prototype,"configuration",2),F([s({flatten:!0})],G.prototype,"_defaultSlot",2),F([s({slot:"image"})],G.prototype,"_imageSlot",2),F([o()],G.prototype,"_imageSlotEmpty",2),F([o()],G.prototype,"_defaultSlotEmpty",2),G=F([S(k)],G);export{G as CardTestimonial};
