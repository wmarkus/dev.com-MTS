import{r as t,i as a,o as i,b as s,n as e,c as n,k as r}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as o}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{v as d,h as l,B as c}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{b as p}from"/__mirror/assets/7e3cbd307d93b862d54c4d69";import{o as m,R as g,i as h,j as b,B as u}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{v as _}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import"/__mirror/assets/5d2e1bf3d87581457a2b76db";import"/__mirror/assets/34233ee5ac8acdb3aa831b25";import"/__mirror/assets/0645e232e9009c5ca632524f";import"/__mirror/assets/bebb1cc6e0bd3a39bf2b6d85";const v="center",w="0",f="var(--ds-elevation-level-2, 0 0 0.125rem rgba(0, 0, 0, 0.12), 0 0.125rem 0.25rem rgba(0, 0, 0, 0.14))",x="var(--ds-border-xs, .0625rem) solid var(--ds-app-color-surface-solid-border-default, #e6f2fb)",$="var(--ds-app-radii-m, 1rem)",C="flex",y="nowrap",A="var(--ds-app-space-micro-l, 1.5rem)",B="var(--ds-app-space-micro-m, 1rem)",j="start",D="1030",k="var(--ds-app-color-surface-glass-bg-selected, rgba(255, 255, 255, 0.9))",P="flex",E="nowrap",I="column",z="center",O="var(--ds-app-space-micro-s, 0.75rem)",T="start",L="var(--ds-app-color-base-default-fg-body, #17253d)",H=a`
  reimagine-ai-powered-assistant .ai-assistant__btn {
    position: var(--ds-ai-assistant-position, ${t("fixed")});
    inset-inline-end: var(
      --ds-ai-assistant-inset-inline-end,
      ${t(A)}
    );
    bottom: var(--ds-ai-assistant-bottom, ${t(w)});
    z-index: var(--ds-ai-assistant-z-index, var(--ds-z-index-1030, ${t(D)}));
  }

  reimagine-ai-powered-assistant[theme='dark'] .ai-assistant__btn {
    --ds-ai-assistant-background-color: var(--ds-app-color-surface-solid-bg-default);
  }

  reimagine-ai-powered-assistant .ai-assistant__btn > button {
    ${p};
    box-shadow: var(--ds-ai-assistant-box-shadow, ${t(f)});
    display: var(--ds-ai-assistant-display, ${t(C)});
    flex-wrap: var(--ds-ai-assistant-flex-wrap, ${t(y)});
    align-items: var(--ds-ai-assistant-align-items, ${t(v)});
    padding: var(--ds-ai-assistant-padding, ${t(B)});
    text-align: var(--ds-ai-assistant-text-align, ${t(j)});
    border: var(--ds-ai-assistant-border, ${t(x)});
    border-radius: var(--ds-ai-assistant-border-radius, ${t($)});
    background-color: var(
      --ds-ai-assistant-background-color,
      ${t(k)}
    );
  }

  reimagine-ai-powered-assistant .ai-assistant__btn > button:hover {
    --ds-ai-assistant-box-shadow: var(
      --ds-elevation-level-3,
      0 0 0.125rem var(--ds-elevation-color-1, rgba(0, 0, 0, 0.12)),
      0 0.25rem 0.5rem var(--ds-elevation-color-2, rgba(0, 0, 0, 0.14))
    );
    cursor: pointer;
  }

  reimagine-ai-powered-assistant .ai-assistant__btn > button:focus {
    outline: none;
  }

  reimagine-ai-powered-assistant .ai-assistant__btn > button:focus-visible {
    ${m};
    --ds-vfi-text-color: var(--ds-app-color-base-alt1-border-strong);
  }

  reimagine-ai-powered-assistant .ai-assistant__btn-text {
    display: var(--ds-ai-assistant-btn-text-display, ${t(P)});
    flex-direction: var(
      --ds-ai-assistant-btn-text-flex-direction,
      ${t(I)}
    );
    justify-content: var(
      --ds-ai-assistant-btn-text-justify-content,
      ${t(z)}
    );
    text-align: var(
      --ds-ai-assistant-btn-text-text-align,
      ${t(T)}
    );
    white-space: var(
      --ds-ai-assistant-btn-text-white-space,
      ${t(E)}
    );
    font-size: var(
      --ds-ai-assistant-btn-text-font-size,
      ${t(d.fontSize)}
    );
    font-weight: var(
      --ds-ai-assistant-btn-text-font-weight,
      ${t(d.fontWeight)}
    );
    line-height: var(
      --ds-ai-assistant-btn-text-line-height,
      ${t(l.lineHeight)}
    );
    color: var(--ds-ai-assistant-btn-text-color, ${t(L)});
  }

  reimagine-ai-powered-assistant .ai-assistant__btn-text:not(:first-child) {
    margin-inline-start: var(
      --ds-ai-assistant-btn-text-margin-inline-start,
      ${t(O)}
    );
  }

  reimagine-ai-powered-assistant .ai-assistant__trailing-icon:not(:first-child) {
    margin-inline-start: var(
      --ds-ai-assistant-trailing-icon-margin-inline-start,
      ${t("var(--ds-app-space-micro-xl, 2rem)")}
    );
  }

  reimagine-ai-powered-assistant .ai-assistant__trailing-icon reimagine-button {
    --ds-button-padding-inline-start: var(--ds-app-space-micro-xs, 0.5rem);
    --ds-button-padding-inline-end: var(--ds-app-space-micro-xs, 0.5rem);
  }

  reimagine-ai-powered-assistant .ai-assistant__leading-icon {
    display: ${t("flex")};
  }
`,R=a`
  @media (max-width: ${t(_.md)}) {
    reimagine-ai-powered-assistant .ai-assistant__btn {
      --ds-ai-assistant-display: none;
    }
    reimagine-ai-powered-assistant .ai-assistant__drawer {
      display: var(--ds-ai-assistant-drawer-display, none);
    }

    reimagine-ai-powered-assistant[drawer-type='pricing-hub'] .ai-assistant__drawer {
      display: var(--ds-ai-assistant-drawer-display, block);
    }
  }
`;var S=Object.defineProperty,U=Object.getOwnPropertyDescriptor,W=(t,a,i,s)=>{for(var e,n=s>1?void 0:s?U(a,i):a,r=t.length-1;r>=0;r--)(e=t[r])&&(n=(s?e(a,i,n):e(n))||n);return s&&n&&S(a,i,n),n};const q="reimagine-ai-powered-assistant";let F=class extends(c(g)){get bottomPositionAdjustment(){return this._bottomPositionAdjustment}set bottomPositionAdjustment(t){this._bottomPositionAdjustment=t,this._aiAssistantBtnContainer.style.setProperty("--ds-ai-assistant-bottom",`${this._bottomPositionAdjustment}px`)}constructor(){super(),this.config={leadingIcon:"https://s7d2.scene7.com/is/image/microsoftcorp/mwf-placeholder?wid=200&amp;hei=200&amp;scl=1",buttonText:"AI-powered assistant",trailingIcon:"add",buttonAriaLabel:"Expand AI-powered assistant chat dialog"},this._bottomPositionAdjustment=0}get drawerElement(){return this._aiAssistantDrawer}disconnectedCallback(){this._aiAssistantBtnElem.removeEventListener("click",this._handleAiButtonClick),super.disconnectedCallback()}firstUpdated(){!this._aiAssistantDrawer||!this._aiAssistantBtnElem||(this._handleAiButtonClick=this._handleAiButtonClick.bind(this),this._aiAssistantBtnElem.addEventListener("click",this._handleAiButtonClick))}_handleAiButtonClick(){this._aiAssistantDrawer.handleChatPanelOpen()}_handleChatDrawerClosed(){this._aiAssistantBtnContainer&&(this._aiAssistantBtnContainer.hidden=!1),this._aiAssistantBtnElem&&this._aiAssistantBtnElem.focus()}_handleChatDrawerOpened(){this._aiAssistantBtnContainer&&(this._aiAssistantBtnContainer.hidden=!0)}_renderLeadingIcon(){var t;return s`
      <div part="ai-assistant__leading-icon" class="ai-assistant__leading-icon">
        <reimagine-icon size="large" role="presentation" aria-hidden="true">
          <img src=${i(null==(t=this.config)?void 0:t.leadingIcon)} alt="" />
        </reimagine-icon>
      </div>
    `}_renderTrailingIcon(){var t;return s`
      <div part="ai-assistant__trailing-icon" class="ai-assistant__trailing-icon">
        <reimagine-button
          icon-only
          appearance=${h.buttonPrimary}
          shape=${b.rounded}
          size=${u.small}
          element="div"
        >
          <reimagine-icon
            filled
            icon=${i(null==(t=this.config)?void 0:t.trailingIcon)}
            size=${u.small}
            role="presentation"
            aria-hidden="true"
            slot="button__icon"
          ></reimagine-icon>
        </reimagine-button>
      </div>
    `}_renderButtonText(){var t;return s`
      <div part="ai-assistant__btn-text" class="ai-assistant__btn-text">
        <span>${null==(t=this.config)?void 0:t.buttonText}</span>
      </div>
    `}_renderDrawerContent(){var t;return s`
      <reimagine-ai-powered-assistant-drawer
        .config=${i(null==(t=this.config)?void 0:t.aiDrawerConfig)}
        hidden
        @chatDrawerClosed=${this._handleChatDrawerClosed}
        @chatDrawerOpened=${this._handleChatDrawerOpened}
      ></reimagine-ai-powered-assistant-drawer>
    `}_renderDrawerPricingHubContent(){var t;return s` <reimagine-ai-powered-assistant-drawer-pricing-hub
      .config=${i(null==(t=this.config)?void 0:t.aiDrawerConfig)}
      hidden
      @chatDrawerClosed=${this._handleChatDrawerClosed}
      @chatDrawerOpened=${this._handleChatDrawerOpened}
    ></reimagine-ai-powered-assistant-drawer-pricing-hub>`}_renderChatButton(){var t,a,i,e,n,r,o;return this.ariaLabel=(null==(t=this.config)?void 0:t.buttonAriaLabel)??null,s`
      ${null!=(i=null==(a=this.config)?void 0:a.leadingIcon)&&i.length?this._renderLeadingIcon():""}
      ${null!=(n=null==(e=this.config)?void 0:e.buttonText)&&n.length?this._renderButtonText():""}
      ${null!=(o=null==(r=this.config)?void 0:r.trailingIcon)&&o.length?this._renderTrailingIcon():""}
    `}static finalizeStyles(t){let a=super.finalizeStyles(t);const i=document.head;return a.forEach(t=>{if(t instanceof e){const a=document.createElement("style");a.dataset.css=q,a.textContent=t.cssText,i.append(a)}}),a=[],a}render(){return s`
      <div part="ai-assistant__btn" class="ai-assistant__btn">
        ${this.renderButton(s`${this._renderChatButton()}`)}
      </div>
      <div part="ai-assistant__drawer" class="ai-assistant__drawer">
        ${"pricing-hub"===this.drawerType?this._renderDrawerPricingHubContent():this._renderDrawerContent()}
      </div>
    `}createRenderRoot(){return this}};F.styles=[H,R],W([n({type:Object,attribute:"config"})],F.prototype,"config",2),W([n({reflect:!0,attribute:"drawer-type"})],F.prototype,"drawerType",2),W([r(".ai-assistant__btn")],F.prototype,"_aiAssistantBtnContainer",2),W([r(".ai-assistant__btn button")],F.prototype,"_aiAssistantBtnElem",2),W([r("reimagine-ai-powered-assistant-drawer, reimagine-ai-powered-assistant-drawer-pricing-hub")],F.prototype,"_aiAssistantDrawer",2),F=W([o(q)],F);export{F as AiPoweredAssistant,q as name};
