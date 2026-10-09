import{r as t,i as n,c as o,b as e}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{i,d as r}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{v as s,b as a}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{R as l}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";const u="flex-start",g="column",d="var(--ds-app-space-micro-xs, 0.5rem)",p="var(--ds-app-space-micro-xs, 0.5rem)",m="initial",c="initial",f="center",h="wrap",b="initial",v=n`
  :host {
    display: var(--ds-button-group-display, ${t("flex")});
    row-gap: var(--ds-button-group-row-gap, ${t(d)});
    column-gap: var(--ds-button-group-column-gap, ${t(p)});
    flex-direction: var(
      --ds-button-group-flex-direction,
      ${t(g)}
    );
    width: var(--ds-button-group-width, ${t(c)});
    max-width: var(--ds-button-group-max-width, ${t(m)});
    margin-inline: var(--ds-button-group-margin-inline, initial);
    justify-content: var(
      --ds-button-group-justify-content,
      ${t(u)}
    );
    flex-wrap: var(--ds-button-group-flex-wrap, ${t(h)});
    align-items: var(--ds-button-group-align-items, ${t(b)});
  }

  :host ::slotted(reimagine-button) {
    display: grid;
  }

  :host ::slotted(reimagine-link) {
    justify-content: var(
      --ds-button-group-link-justify-content,
      ${t(f)}
    );
  }

  :host([with-link]) {
    --ds-button-group-row-gap: var(--ds-app-space-micro-m, 1rem);
    --ds-button-group-column-gap: var(--ds-app-space-micro-m, 1rem);
  }

  :host([alignment='left']) {
    --ds-button-group-justify-content: flex-start;
  }

  :host([alignment='center']) {
    --ds-button-group-justify-content: center;
  }

  :host([alignment='right']) {
    --ds-button-group-justify-content: flex-end;
  }

  :host([configuration='stacked']) {
    --ds-button-group-flex-direction: column;
    --ds-button-group-align-items: flex-start;
  }

  :host([configuration='stacked'][alignment='left']) {
    --ds-button-group-align-items: flex-start;
  }

  :host([configuration='stacked'][alignment='center']) {
    --ds-button-group-align-items: center;
  }

  :host([configuration='stacked'][alignment='right']) {
    --ds-button-group-align-items: flex-end;
  }
`,x=n`
  @media (min-width: ${t(s.sm)}) {
    :host {
      flex-direction: var(
        --ds-button-group-flex-direction,
        ${t("row")}
      );
    }
  }

  @media (max-width: ${t(a(s.sm))}) {
    :host {
      --ds-button-group-flex-direction: column;
    }

    :host ::slotted(reimagine-button),
    :host ::slotted(reimagine-link) {
      width: 100%;
    }

    :host([alignment='left']) ::slotted(reimagine-link) {
      --ds-button-group-link-justify-content: flex-start;
    }

    :host([alignment='center']) {
      --ds-button-group-link-justify-content: center;
    }

    :host([alignment='right']) {
      --ds-button-group-link-justify-content: flex-end;
    }
  }
`;var w=Object.defineProperty,y=Object.getOwnPropertyDescriptor,j=(t,n,o,e)=>{for(var i,r=e>1?void 0:e?y(n,o):n,s=t.length-1;s>=0;s--)(i=t[s])&&(r=(e?i(n,o,r):i(r))||r);return e&&r&&w(n,o,r),r};const k="reimagine-button-group";let $=class extends l{_handleSlotChange(){var t;const n=null==(t=this.shadowRoot)?void 0:t.querySelector("slot");((null==n?void 0:n.assignedElements({flatten:!0}))||[]).some(t=>i(t,"reimagine-link"))?this.setAttribute("with-link",""):this.removeAttribute("with-link")}render(){return e` <slot @slotchange=${this._handleSlotChange}></slot> `}};$.styles=[v,x],j([o({reflect:!0})],$.prototype,"configuration",2),j([o({reflect:!0})],$.prototype,"alignment",2),$=j([r(k)],$);export{$ as ButtonGroup,k as name};
