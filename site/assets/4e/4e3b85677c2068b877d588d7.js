import{r as t,i as s,e,f as a,b as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as l}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{R as o}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{v as i}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";const n="column",p="var(--ds-app-space-micro-s, 0.75rem)",h="var(--ds-app-type-label-s-font-size, 0.75rem)",d="var(--ds-app-type-label-s-font-weight, 600)",m="var(--ds-app-type-label-s-line-height, 1rem)",_="var(--ds-app-color-base-default-fg-highlight, #005597)",c="flex",f="column",g="var(--ds-app-space-micro-s, 0.75rem)",y=s`
  :host {
    display: var(--ds-share-display, ${t("flex")});
    flex-direction: var(--ds-share-flex-direction, ${t(n)});
    gap: var(--ds-share-gap, ${t(p)});
  }

  ol {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: var(--ds-share-links-display, ${t(c)});
    flex-direction: var(
      --ds-share-links-flex-direction,
      ${t(f)}
    );
    gap: var(--ds-share-links-gap, ${t(g)});
  }

  ::slotted([slot='share__label']) {
    font-size: var(--ds-share-label-font-size, ${t(h)});
    font-weight: var(--ds-share-label-font-weight, ${t(d)});
    line-height: var(--ds-share-label-line-height, ${t(m)});
    color: var(--ds-share-label-color, ${t(_)});
  }
`,v=s`
  @media (min-width: ${t(i.md)}) {
    :host {
      --ds-share-gap: var(--ds-app-space-micro-m);
    }

    ol {
      --ds-share-links-flex-direction: row;
      --ds-share-links-gap: var(--ds-app-space-micro-xl);
    }
  }
`;var S=Object.defineProperty,$=Object.getOwnPropertyDescriptor,b=(t,s,e,a)=>{for(var r,l=a>1?void 0:a?$(s,e):s,o=t.length-1;o>=0;o--)(r=t[o])&&(l=(a?r(s,e,l):r(l))||l);return a&&l&&S(s,e,l),l};const u="reimagine-share";let x=class extends o{constructor(){super(...arguments),this._firstSlotEmpty=!0,this._lastSlotEmpty=!0}_handleSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length,this.requestUpdate()}_renderOptionalSlot(t,s){return r`
      <div part=${t} class=${t} style="${s?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}firstUpdated(){this._handleSlotChange()}updated(){const t=this.renderRoot.querySelector('slot[name="share__link"]');t&&t.assignedNodes({flatten:!0}).forEach(t=>{t.setAttribute("role","listitem")})}render(){return r`
      ${this._renderOptionalSlot("share__first",this._firstSlotEmpty)}
      <slot name="share__label"></slot>
      <ol>
        <slot @slotchange=${this._handleSlotChange} name="share__link"></slot>
      </ol>
      ${this._renderOptionalSlot("share__last",this._lastSlotEmpty)}
    `}};x.styles=[y,v],b([e({slot:"share__first"})],x.prototype,"_firstSlot",2),b([e({slot:"share__last"})],x.prototype,"_lastSlot",2),b([a()],x.prototype,"_firstSlotEmpty",2),b([a()],x.prototype,"_lastSlotEmpty",2),x=b([l(u)],x);export{x as Share,u as name};
