import{r as e,i,c as r,b as t}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as a}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{v as o,R as n}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{m as d}from"/__mirror/assets/6ad137053d5da8fc91d912f1";const s="0",c="var(--ds-app-color-base-default-fg-body, #17253D)",l="21px",p="#0078D4",b="var(--ds-app-color-base-default-fg-body, #17253D)",v="14px",m="1px",g=i`
  :host {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }

  .indicator {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(
      --ds-timeline-bar-indicator-background-color,
      ${e("transparent")}
    );
    border: none;
    cursor: var(--timeline-bar-indicator-cursor, default);
    padding: var(--ds-timeline-bar-indicator-padding, ${e(s)});
    font-family: inherit;
    transition: opacity 0.2s ease;
  }

  .indicator:focus-visible {
    ${o};
  }

  .node-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: var(--ds-timeline-bar-indicator-node-size, 6px);
    height: var(--ds-timeline-bar-indicator-node-size, 6px);
    background-color: var(--timeline-bar-indicator-node-wrapper-background, transparent);
    border-radius: 50%;
    padding: 4px;
  }

  :host([active]) .node-wrapper {
    width: var(
      --ds-timeline-bar-indicator-active-node-border-size,
      ${e(v)}
    );
    height: var(
      --ds-timeline-bar-indicator-active-node-border-size,
      ${e(v)}
    );
  }

  .node {
    display: block;
    width: var(--ds-timeline-bar-indicator-node-size, 6px);
    height: var(--ds-timeline-bar-indicator-node-size, 6px);
    border-radius: 50%;
    background-color: var(
      --ds-timeline-bar-indicator-node-background-color,
      var(--ds-app-color-base-default-fg-body, #17253d)
    );
    transition: background-color 0.2s ease;
    flex-shrink: 0;
  }

  .node-outer {
    position: absolute;
    display: none;
    width: var(
      --ds-timeline-bar-indicator-active-node-border-size,
      ${e(v)}
    );
    height: var(
      --ds-timeline-bar-indicator-active-node-border-size,
      ${e(v)}
    );
    border-radius: 50%;
    border: var(
        --ds-timeline-bar-indicator-active-node-border-width,
        ${e(m)}
      )
      solid
      var(
        --ds-timeline-bar-indicator-active-node-border-color,
        ${e(b)}
      );
    box-sizing: border-box;
  }

  :host([active]) .node-outer {
    display: block;
  }

  :host([active]) .node {
    background-color: var(
      --ds-timeline-bar-indicator-active-node-background-color,
      ${e(p)}
    );
  }

  .date {
    position: var(--timeline-bar-date-position, static);
    top: var(--timeline-bar-date-top, auto);
    left: var(--timeline-bar-date-left, auto);
    transform: var(--timeline-bar-date-transform, none);
    margin-top: var(
      --timeline-bar-date-margin-top,
      var(--ds-timeline-bar-indicator-node-date-gap, ${e(l)})
    );
    display: block;
    font-weight: var(
      --ds-timeline-bar-indicator-font-weight,
      ${e(d.fontWeight)}
    );
    font-size: var(
      --ds-timeline-bar-indicator-font-size,
      ${e(d.fontSize)}
    );
    line-height: var(
      --ds-timeline-bar-indicator-line-height,
      ${e(d.lineHeight)}
    );
    letter-spacing: var(
      --ds-timeline-bar-indicator-letter-spacing,
      ${e(d.letterSpacing)}
    );
    color: var(--ds-timeline-bar-indicator-color, ${e(c)});
    text-align: center;
    white-space: nowrap;
  }

  :host([active]) .date {
    font-weight: var(
      --ds-timeline-bar-indicator-active-font-weight,
      ${e(d.fontWeight)}
    );
  }

  /* High contrast mode - overrides only when active */
  @media (forced-colors: active) {
    .node {
      background-color: CanvasText;
      border: 0.125rem solid CanvasText;
    }

    :host([active]) .node {
      background-color: Highlight;
    }
  }
`;var h=Object.defineProperty,u=Object.getOwnPropertyDescriptor,f=(e,i,r,t)=>{for(var a,o=t>1?void 0:t?u(i,r):i,n=e.length-1;n>=0;n--)(a=e[n])&&(o=(t?a(i,r,o):a(o))||o);return t&&o&&h(i,r,o),o};const x="reimagine-timeline-bar-indicator";let y=class extends n{constructor(){super(...arguments),this.active=!1}render(){return t`
      <button class="indicator" part="indicator" aria-pressed="${this.active}" role="button">
        <span class="node-wrapper" part="node-wrapper">
          <span class="node-outer" part="node-outer"></span>
          <span class="node" part="node"></span>
        </span>
        <span class="date" part="date">
          <slot></slot>
        </span>
      </button>
    `}};y.styles=[g],f([r({type:Boolean,reflect:!0})],y.prototype,"active",2),f([r({type:Number})],y.prototype,"index",2),y=f([a(x)],y);export{y as TimelineBarIndicator,x as name};
