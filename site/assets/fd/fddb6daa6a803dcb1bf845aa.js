import{r as t,i as e,e as a,f as o,b as s}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as i}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{R as l}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{c as r}from"/__mirror/assets/6ad137053d5da8fc91d912f1";const d="column",n="var(--ds-app-space-micro-2xs, 0.25rem)",c="flex",m="center",p="var(--ds-app-space-micro-xs, 0.5rem)",h="var(--ds-app-color-base-default-fg-body, #3a4c56)",v=e`
  :host {
    display: var(--ds-card-event-details-display, ${t("flex")});
    flex-direction: var(
      --ds-card-event-details-flex-direction,
      ${t(d)}
    );
    row-gap: var(--ds-card-event-details-row-gap, ${t(n)});
  }

  :host ::slotted([slot='location']),
  :host ::slotted([slot='date']),
  :host ::slotted([slot='time']) {
    margin: 0;
    font-family: var(
      --ds-card-event-details-font-family,
      ${t(r.fontFamily)}
    );
    font-weight: var(
      --ds-card-event-details-font-weight,
      ${t(r.fontWeight)}
    );
    font-size: var(--ds-card-event-details-font-size, ${t(r.fontSize)});
    line-height: var(
      --ds-card-event-details-line-height,
      ${t(r.lineHeight)}
    );
    letter-spacing: var(
      --ds-card-event-details-letter-spacing,
      ${t(r.letterSpacing)}
    );
  }

  :host ::slotted([slot='location']) {
    color: var(--ds-card-event-details-location-color, ${t("var(--ds-app-color-base-default-fg-heading, #0e1726)")});
  }

  .datetime {
    display: var(
      --ds-card-event-details-datetime-display,
      ${t(c)}
    );
    align-items: var(
      --ds-card-event-details-datetime-align-items,
      ${t(m)}
    );
    column-gap: var(
      --ds-card-event-details-datetime-column-gap,
      ${t(p)}
    );
  }

  :host ::slotted([slot='date']) {
    white-space: nowrap;
    color: var(--ds-card-event-details-date-color, ${t("var(--ds-app-color-base-default-fg-highlight, #005597)")});
  }

  /*
   * Bullet uses a \`::before\` on the slot instead of \`display: list-item\`,
   * since marker rendering on blockified flex items is unreliable (Safari/Firefox).
   */
  slot[name='time'] {
    display: inline-flex;
    align-items: center;
  }

  slot[name='time']::before {
    content: '•';
    margin-inline-end: var(--ds-app-space-micro-xs, 0.5rem);
    color: var(--ds-card-event-details-time-color, ${t(h)});
  }

  :host ::slotted([slot='time']) {
    color: var(--ds-card-event-details-time-color, ${t(h)});
  }
`;var g=Object.defineProperty,f=Object.getOwnPropertyDescriptor,y=(t,e,a,o)=>{for(var s,i=o>1?void 0:o?f(e,a):e,l=t.length-1;l>=0;l--)(s=t[l])&&(i=(o?s(e,a,i):s(i))||i);return o&&i&&g(e,a,i),i};const $="reimagine-card-event-details";let _=class extends l{constructor(){super(...arguments),this._locationSlotEmpty=!0,this._dateTimeEmpty=!0}_handleSlotChange(){this._locationSlotEmpty=0===this._locationSlot.length,this._dateTimeEmpty=0===this._dateSlot.length&&0===this._timeSlot.length}render(){return s`
      <div
        part="location"
        class="location"
        style="${this._locationSlotEmpty?"display: none;":""}"
      >
        <slot name="location" @slotchange=${this._handleSlotChange}></slot>
      </div>
      <div
        part="datetime"
        class="datetime"
        style="${this._dateTimeEmpty?"display: none;":""}"
      >
        <slot name="date" @slotchange=${this._handleSlotChange}></slot>
        <slot name="time" @slotchange=${this._handleSlotChange}></slot>
      </div>
    `}};_.styles=[v],y([a({slot:"location"})],_.prototype,"_locationSlot",2),y([a({slot:"date"})],_.prototype,"_dateSlot",2),y([a({slot:"time"})],_.prototype,"_timeSlot",2),y([o()],_.prototype,"_locationSlotEmpty",2),y([o()],_.prototype,"_dateTimeEmpty",2),_=y([i($)],_);export{_ as CardEventDetails,$ as name};
