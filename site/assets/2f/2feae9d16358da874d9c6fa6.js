import{r as t,i,c as e,f as r,g as s,b as o}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{q as a,d}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{v as l}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{n}from"/__mirror/assets/5d2e1bf3d87581457a2b76db";import{name as p}from"/__mirror/assets/ea6784fd34f0ec31a8e3ea36";import{b as u}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";const c="var(--ds-app-radii-m)",g="var(--ds-app-space-micro-xl)",m="var(--ds-app-space-micro-xl)",v="var(--ds-app-space-micro-4xl)",h="var(--ds-app-space-micro-xl)",f="1",b="var(--ds-app-space-micro-2xl)",y="var(--ds-app-space-micro-xl)",_="var(--ds-app-space-micro-xl)",x="var(--ds-app-space-micro-2xl)",$="100%",w=i`
  ::slotted([slot='subtitle-with-divider']) {
    gap: var(
      --ds-story-grid-subtitle-divider-gap,
      ${t("var(--ds-app-space-micro-s)")}
    );
  }

  .title {
    margin-bottom: var(
      --ds-story-grid-title-margin-bottom,
      ${t(g)}
    );
  }

  .media-with-text-block {
    gap: var(--ds-story-grid-media-textblock-gap, ${t(y)});
  }

  .media {
    --ds-media-border-start-start-radius: var(
      --ds-story-grid-featured-media-border-radius,
      ${t(c)}
    );
    --ds-media-border-start-end-radius: var(
      --ds-story-grid-featured-media-border-radius,
      ${t(c)}
    );
    --ds-media-border-end-start-radius: var(
      --ds-story-grid-featured-media-border-radius,
      ${t(c)}
    );
    --ds-media-border-end-end-radius: var(
      --ds-story-grid-featured-media-border-radius,
      ${t(c)}
    );
    --ds-media-overflow: hidden;
  }

  .list-articles,
  .media-with-text-block,
  .list-editorials,
  ::slotted([slot='subtitle-with-divider']),
  :host(:not([configuration='featured-plus-4-stories']))
    ::slotted([slot='editorial-with-divider']) {
    display: flex;
    flex-direction: column;
  }

  :host(:not([configuration='featured-plus-4-stories'])) .list-articles {
    gap: var(--ds-story-grid-sections-gap, ${t(v)});
  }

  :host(:not([configuration='featured-plus-4-stories']))
    ::slotted([slot='editorial-with-divider']) {
    gap: var(
      --ds-story-grid-editorial-divider-gap,
      ${t(h)}
    );
  }

  :host([configuration='featured-plus-4-stories']) ::slotted([slot='editorial-with-divider']) {
    flex: var(
      --ds-story-grid-editorial-divider-flex,
      ${t(f)}
    );
    margin-top: var(
      --ds-story-grid-editorial-divider-margin-top,
      ${t(b)}
    );
  }

  :host(:not([configuration='featured-plus-4-stories'])) ::slotted([slot='subtitle-with-divider']) {
    margin-bottom: var(
      --ds-story-grid-subtitle-editorials-gap,
      ${t(_)}
    );
  }

  :host(:not([configuration='featured-plus-4-stories'])) .list-editorials {
    gap: var(--ds-story-grid-editorials-gap, ${t(m)});
  }

  .footer-button {
    --ds-button-width: var(
      --ds-story-grid-footer-button-width,
      ${t($)}
    );
    padding-block: var(
      --ds-story-grid-footer-button-padding-block,
      ${t(x)}
    );
  }
`,S=i`
  @media (min-width: ${t(l.sm)}) {
    .footer-button {
      --ds-button-width: var(--ds-story-grid-footer-button-width, initial);
    }
  }

  @media (min-width: ${t(l.md)}) {
    .media-with-text-block {
      gap: var(--ds-story-grid-media-textblock-gap, 3.5rem);
    }

    .footer-button {
      display: none;
    }

    :host(:not([configuration='featured-plus-4-stories'])) .editorials-with-subtitle {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    :host(:not([configuration='featured-plus-4-stories']))
      ::slotted([slot='subtitle-with-divider']) {
      margin-bottom: var(--ds-story-grid-subtitle-editorials-gap, var(--ds-app-space-micro-l));
    }

    :host([configuration='featured-plus-4-stories']) .list-editorials {
      gap: var(--ds-story-grid-editorials-gap, calc(var(--ds-app-space-micro-l) / 2));
    }

    :host(:not([configuration='featured-plus-4-stories'])) .list-editorials {
      flex-direction: column;
      gap: var(--ds-story-grid-editorials-gap, var(--ds-app-space-micro-l));
    }

    :host(:not([configuration='featured-plus-4-stories']))
      ::slotted([slot='editorial-with-divider']) {
      gap: var(--ds-story-grid-editorial-divider-gap, var(--ds-app-space-micro-l));
    }

    :host([configuration='featured-plus-4-stories']) ::slotted([slot='editorial-with-divider']) {
      margin-top: var(--ds-story-grid-editorial-divider-margin-top, 0);
    }

    .media-with-text-block,
    .list-editorials,
    :host(:not([configuration='featured-plus-4-stories'])) .list-articles {
      flex-direction: row;
    }

    :host(:not([configuration='featured-plus-4-stories'])) .list-articles {
      gap: var(--ds-story-grid-sections-gap, 3.5rem);
    }

    .list-articles {
      gap: var(--ds-story-grid-sections-gap, var(--ds-app-space-micro-2xl));
    }
  }
`;var k=(t=>(t.FeaturedPlus4Stories="featured-plus-4-stories",t.FeaturedPlus3Stories="featured-plus-3-stories",t.FeaturedPlus2Stories="featured-plus-2-stories",t))(k||{}),P=Object.defineProperty,B=Object.getOwnPropertyDescriptor,j=Object.getPrototypeOf,E=Reflect.get,F=(t,i,e,r)=>{for(var s,o=r>1?void 0:r?B(i,e):i,a=t.length-1;a>=0;a--)(s=t[a])&&(o=(r?s(i,e,o):s(o))||o);return r&&o&&P(i,e,o),o};const O="reimagine-story-grid";let T=class extends u{constructor(){super(...arguments),this.configuration=k.FeaturedPlus4Stories,this._titleSlotEmpty=!0,this._subtitleSlotEmpty=!0}_handleSlotChange(){var t,i,e;if(this._subtitleSlotEmpty=0===(null==(t=this._subtitleSlot)?void 0:t.length)||this.configuration===k.FeaturedPlus4Stories,this._titleSlotEmpty=0===(null==(i=this._titleSlot)?void 0:i.length),null!=(e=this._titleSlot)&&e.length){const t=this._titleSlot[this._titleSlot.length-1];this._headerButton=a(t,p)??a(t,n)??void 0,this._headerButton&&(this._footerButton=this._headerButton.cloneNode(!0))}}_renderOptionalSlot(t,i){return o`
      <div part=${t} class=${t} style="${i?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_renderDefaultTemplate(){return o`
      <div part="media-with-text-block" class="media-with-text-block">
        <div part="media" class="media">
          <slot name="media"></slot>
        </div>
        <div part="text-block" class="text-block">
          <slot name="text-block"></slot>
        </div>
      </div>
    `}_renderFeaturedPlus4Template(){return o`
      <div part="card-editorial" class="card-editorial">
        <slot name="card-editorial"></slot>
      </div>
    `}_renderBlade(){const t="editorial-story-grid",i=o`<div class="story-grid-container">
      ${this._renderOptionalSlot("title",this._titleSlotEmpty)}
      <div class="list-articles" part="list-articles">
        ${this.configuration===k.FeaturedPlus4Stories?this._renderDefaultTemplate():this._renderFeaturedPlus4Template()}
        <div part="editorials-with-subtitle" class="editorials-with-subtitle">
          ${this._renderOptionalSlot("subtitle-with-divider",this._subtitleSlotEmpty)}
          <div part="list-editorials" class="list-editorials">
            <slot name="editorial-with-divider"></slot>
          </div>
        </div>
      </div>
      ${this._footerButton?o`<div class="footer-button">${this._footerButton}</div>`:""}
    </div>`;return this.baseContent?o` <div class=${t} part=${t}>${i}</div> `:o`
      <reimagine-container part=${t} class="${t}">
        ${i}
      </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var C,D,q;T.styles=[...(C=T,D=T,q="styles",E(j(C),q,D)||[]),w,S],F([e({reflect:!0})],T.prototype,"theme",2),F([e({reflect:!0})],T.prototype,"configuration",2),F([r()],T.prototype,"_titleSlotEmpty",2),F([r()],T.prototype,"_subtitleSlotEmpty",2),F([r()],T.prototype,"_headerButton",2),F([r()],T.prototype,"_footerButton",2),F([s({slot:"subtitle-with-divider"})],T.prototype,"_subtitleSlot",2),F([s({slot:"title"})],T.prototype,"_titleSlot",2),T=F([d(O)],T);export{T as StoryGrid,O as name};
