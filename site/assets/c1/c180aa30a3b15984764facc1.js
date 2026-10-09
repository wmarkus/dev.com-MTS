import{r,i as o,b as t,o as e,c as i,f as n}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{u as a,B as s}from"/__mirror/assets/6ad137053d5da8fc91d912f1";import{s as p}from"/__mirror/assets/4230c2711e37b2e85105da0e";import{b as l}from"/__mirror/assets/7e3cbd307d93b862d54c4d69";import{l as g,R as c,i as u,j as b,B as m}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{t as h}from"/__mirror/assets/ae4bf4f4ba8e8d905a9a94c2";import"/__mirror/assets/4718d81c8cee21657f50b7b7";import"/__mirror/assets/5d2e1bf3d87581457a2b76db";const v={"level-2":{value:["0px 2px 4px rgba(0, 0, 0, 0.14)","0px 0px 2px rgba(0, 0, 0, 0.12)"]},"level-3":{value:["0px 4px 8px rgba(0, 0, 0, 0.14)","0px 0px 2px rgba(0, 0, 0, 0.12)"]}},f={display:"block",background:p.background,backdropFilter:p.backdropFilter,borderWidth:p.borderWidth,borderStyle:p.borderStyle,borderColor:p.borderColor,borderRadius:"var(--ds-app-radii-m, 0.5rem)",boxShadow:v["level-2"].value.join(", "),color:"var(--ds-app-color-base-default-fg-body, #17253d)",paddingInlineStart:"var(--ds-app-space-micro-m, 1rem)",paddingInlineEnd:"var(--ds-app-space-micro-s, 0.75rem)",paddingBlock:"var(--ds-app-space-micro-s, 0.75rem)",gap:"var(--ds-app-space-micro-xs, 0.5rem)",hoverBoxShadow:v["level-3"].value.join(", "),iconTransform:"rotate(0deg)",iconTransition:"transform 0.6s ease",vfiOutlineOffset:"0"},w=o`
  :host([configuration='${r(a.input)}']) {
    display: var(--ds-dropdown-trigger-display, ${r(f.display)});
  }

  :host([configuration='${r(a.buttonSelect)}']) {
    display: var(--ds-dropdown-trigger-display, inline-block);
    height: var(--ds-dropdown-trigger-button-height, auto);
  }

  button {
    ${l};

    display: flex;
    width: 100%;
    text-align: start;
    background: var(--ds-dropdown-trigger-background, ${r(f.background)});
    backdrop-filter: var(
      --ds-dropdown-trigger-backdrop-filter,
      ${r(f.backdropFilter)}
    );
    border-width: var(
      --ds-dropdown-trigger-border-width,
      ${r(f.borderWidth)}
    );
    border-style: var(
      --ds-dropdown-trigger-border-style,
      ${r(f.borderStyle)}
    );
    border-color: var(
      --ds-dropdown-trigger-border-color,
      ${r(f.borderColor)}
    );
    border-radius: var(
      --ds-dropdown-trigger-border-radius,
      ${r(f.borderRadius)}
    );
    box-shadow: var(--ds-dropdown-trigger-box-shadow, ${r(f.boxShadow)});
    color: var(--ds-dropdown-trigger-color, ${r(f.color)});
    padding-inline-start: var(
      --ds-dropdown-trigger-padding-inline-start,
      ${r(f.paddingInlineStart)}
    );
    padding-inline-end: var(
      --ds-dropdown-trigger-padding-inline-end,
      ${r(f.paddingInlineEnd)}
    );
    padding-block: var(
      --ds-dropdown-trigger-padding-block,
      ${r(f.paddingBlock)}
    );
    gap: var(--ds-dropdown-trigger-gap, ${r(f.gap)});
    outline: 2px solid transparent;
  }

  reimagine-input {
    width: 100%;

    --ds-input-trailing-display: flex;
    --ds-input-trailing-align-self: flex-end;
  }

  :host(:hover) {
    cursor: pointer;
  }

  :host(:hover) button,
  :host(:focus) button {
    box-shadow: var(
      --ds-dropdown-trigger-hover-box-shadow,
      ${r(f.hoverBoxShadow)}
    );
  }

  :host(:focus) button {
    ${g};

    outline-offset: var(
      --ds-dropdown-trigger-vfi-outline-offset,
      ${r(f.vfiOutlineOffset)}
    );
  }

  :host([disabled]) {
    pointer-events: none;
  }

  :host([disabled][configuration='${r(a.input)}']) {
    opacity: 0.2;
  }

  .dropdown-trigger__icon {
    transform: var(
      --ds-dropdown-trigger-icon-transform,
      ${r(f.iconTransform)}
    );

    ${h(`var(--ds-dropdown-trigger-icon-transition, ${r(f.iconTransition)})`)}
  }
`;var x=Object.defineProperty,$=Object.getOwnPropertyDescriptor,_=(r,o,t,e)=>{for(var i,n=e>1?void 0:e?$(o,t):o,d=r.length-1;d>=0;d--)(i=r[d])&&(n=(e?i(o,t,n):i(n))||n);return e&&n&&x(o,t,n),n};const y="reimagine-dropdown-trigger";let k=class extends(s(c)){constructor(){super(...arguments),this.configuration=a.input,this.buttonActive=!1,this.triggerLabel=null,this.buttonAppearance=u.buttonSecondary}_renderInput(){return this.renderButton(t`
      <reimagine-input>
        <slot name="dropdown-trigger__input-label" slot="input__control-label"></slot>
        <slot slot="input__control-input"></slot>
        <reimagine-icon
          slot="input__trailing"
          icon="chevron-down"
          size="${this.iconSize||"medium"}"
          class="dropdown-trigger__icon"
          part="dropdown-trigger__icon"
        ></reimagine-icon>
      </reimagine-input>
    `)}_renderButtonSelect(){return t`
      <reimagine-button
        with-icon-append
        appearance=${this.buttonAppearance}
        ?disabled=${this.disabled}
        ?active=${this.buttonActive}
        shape=${b.rounded}
        size=${m.medium}
        button-label="${e(this.triggerLabel||void 0)}"
      >
        <slot slot="button__text"></slot>
        <reimagine-icon
          slot="button__icon-append"
          icon="chevron-down"
          size="${this.iconSize||"medium"}"
          class="dropdown-trigger__icon"
          part="dropdown-trigger__icon"
        ></reimagine-icon>
      </reimagine-button>
    `}render(){return this.configuration===a.buttonSelect?this._renderButtonSelect():this._renderInput()}};k.shadowRootOptions={...c.shadowRootOptions,delegatesFocus:!0},k.styles=[w],_([i({reflect:!0})],k.prototype,"configuration",2),_([n()],k.prototype,"buttonActive",2),_([i()],k.prototype,"iconSize",2),_([i({reflect:!0,attribute:"trigger-label"})],k.prototype,"triggerLabel",2),_([n()],k.prototype,"buttonAppearance",2),k=_([d(y)],k);export{k as DropdownTrigger,y as name};
