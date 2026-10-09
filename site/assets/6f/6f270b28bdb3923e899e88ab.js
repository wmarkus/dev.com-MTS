import{r as a,i as e,b as i,c as t}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{R as o,j as r,i as n,B as s}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{d}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{D as l,d as g}from"/__mirror/assets/58cacecb3a70e11d710dca69";import{s as p}from"/__mirror/assets/579a4c6140e643b41d22eee8";import{b as c,v as m}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{a as u}from"/__mirror/assets/fbedc03652b4241adb7efb38";import"/__mirror/assets/5d2e1bf3d87581457a2b76db";import"/__mirror/assets/34233ee5ac8acdb3aa831b25";import"/__mirror/assets/39f1ed08dc709b5515b4ed55";const h="var(--ds-app-color-surface-solid-bg-default, #fefefe)",v="var(--ds-app-color-base-default-fg-heading, #0e1726)",b="0",x="var(--ds-elevation-level-2, 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.14))",f="80vh",P="var(--ds-app-space-micro-l, 1.5rem)",$="var(--ds-app-space-micro-s, 0.75rem)",_="var(--ds-app-space-micro-l, 1.5rem)",y="var(--ds-app-space-micro-xs, 0.5rem)",j="var(--ds-app-space-micro-l, 1.5rem)",w=e`
  :host {
    display: flex;
    flex-direction: column;
    inline-size: 100%;
    max-inline-size: var(
      --ds-roadmap-dialog-max-inline-size,
      ${a("56.5rem")}
    );
    max-block-size: var(
      --ds-roadmap-dialog-max-block-size,
      ${a(f)}
    );
    background-color: var(
      --ds-roadmap-dialog-background-color,
      ${a(h)}
    );
    border-radius: var(
      --ds-roadmap-dialog-border-radius,
      ${a(b)}
    );
    box-shadow: var(--ds-roadmap-dialog-box-shadow, ${a(x)});
    color: var(--ds-roadmap-dialog-color, ${a(v)});
    overflow: hidden;
  }

  .header {
    display: flex;
    align-items: center;
    padding-block-start: var(--ds-roadmap-dialog-padding, ${a(P)});
    padding-inline: var(--ds-roadmap-dialog-padding, ${a(P)});
  }

  .navigation {
    display: flex;
    align-items: center;
    gap: var(--ds-roadmap-dialog-navigation-gap, ${a(y)});
    margin-inline-end: var(--ds-roadmap-dialog-header-gap, ${a($)});
  }

  .header-content {
    display: flex;
    flex: 1 1 0;
    align-items: center;
    min-inline-size: 0;
  }

  .close {
    flex: 0 0 auto;
    margin-inline-start: var(--ds-roadmap-dialog-close-gap, ${a(_)});
  }

  .body {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    gap: var(--ds-roadmap-dialog-body-gap, ${a(j)});
    min-block-size: 0;
    overflow: auto;
    padding: var(--ds-roadmap-dialog-padding, ${a(P)});
  }

  .footer {
    display: flex;
    justify-content: center;
    padding-block-end: var(--ds-roadmap-dialog-padding, ${a(P)});
    padding-inline: var(--ds-roadmap-dialog-padding, ${a(P)});
  }

  .page-status {
    ${p}
  }
`,N=e`
  @media (max-width: ${a(c(m.md))}) {
    .header,
    .body,
    .footer {
      padding-inline: var(--ds-roadmap-dialog-padding-inline-mobile, 2rem);
    }
  }
`,z="onPageChange";var k=Object.defineProperty,C=Object.getOwnPropertyDescriptor,L=Object.getPrototypeOf,M=Reflect.get,R=(a,e,i,t)=>{for(var o,r=t>1?void 0:t?C(e,i):e,n=a.length-1;n>=0;n--)(o=a[n])&&(r=(t?o(e,i,r):o(r))||r);return t&&r&&k(e,i,r),r};const S="reimagine-roadmap-dialog";let B=class extends(l(o)){constructor(){super(...arguments),this.currentPage=1,this.totalPages=1,this.previousLabel="Previous",this.nextLabel="Next",this.paginationLabel="Roadmap pages"}get _maxPage(){const a=Number.isFinite(this.totalPages)?Math.floor(this.totalPages):1;return a>0?a:1}willUpdate(a){if(super.willUpdate(a),this.dialogSlotPrefix=this.dialogSlotPrefix??"roadmap-dialog",this.dialogCloseEventName=this.dialogCloseEventName??"close__roadmap-dialog",a.has("totalPages")||a.has("currentPage")){const a=Number.isFinite(this.currentPage)?Math.trunc(this.currentPage):1,e=Math.min(Math.max(a,1),this._maxPage);e!==this.currentPage&&(this.currentPage=e)}}_goToPage(a){const e=Math.min(Math.max(a,1),this._maxPage);e!==this.currentPage&&(this.currentPage=e,this.dispatchEvent(new CustomEvent(z,{detail:{page:e}})))}_focusNavigationButton(a){requestAnimationFrame(async()=>{var e,i,t;const o=null==(e=this.shadowRoot)?void 0:e.querySelector(a);await(null==o?void 0:o.updateComplete),null==(t=null==(i=null==o?void 0:o.shadowRoot)?void 0:i.querySelector("button"))||t.focus()})}_handlePrevious(){const a=2===this.currentPage;this._goToPage(this.currentPage-1),a&&this._focusNavigationButton(".navigation__next")}_handleNext(){const a=this.currentPage===this._maxPage-1;this._goToPage(this.currentPage+1),a&&this._focusNavigationButton(".navigation__previous")}_handlePaginationChange(a){a.stopPropagation(),this._goToPage(a.detail.activePage)}_renderNavigation(){return i`
      <div part="navigation" class="navigation">
        <reimagine-button
          class="navigation__previous"
          part="navigation-previous"
          icon-only
          shape=${r.circle}
          appearance=${n.buttonSecondary}
          size=${s.medium}
          button-label=${this.previousLabel}
          ?disabled=${this.currentPage<=1}
          @click=${this._handlePrevious}
        >
          <reimagine-icon icon="arrow-left" slot="button__icon" size="medium"></reimagine-icon>
        </reimagine-button>
        <reimagine-button
          class="navigation__next"
          part="navigation-next"
          icon-only
          shape=${r.circle}
          appearance=${n.buttonSecondary}
          size=${s.medium}
          button-label=${this.nextLabel}
          ?disabled=${this.currentPage>=this._maxPage}
          @click=${this._handleNext}
        >
          <reimagine-icon icon="arrow-right" slot="button__icon" size="medium"></reimagine-icon>
        </reimagine-button>
      </div>
    `}render(){return i`
      <div part="header" class="header">
        ${this._renderNavigation()}
        <div part="header-content" class="header-content">
          <slot name="header"></slot>
        </div>
        ${this.renderCloseButton("close")}
      </div>
      <div part="body" class="body">
        <slot></slot>
      </div>
      <div part="footer" class="footer">
        <div class="page-status" role="status" aria-live="polite" aria-atomic="true">
          Page ${this.currentPage} of ${this._maxPage}
        </div>
        <reimagine-pagination
          aria-label=${this.paginationLabel}
          configuration=${u.numbers}
          current=${this.currentPage}
          total-pages=${this._maxPage}
          @onChange=${this._handlePaginationChange}
        ></reimagine-pagination>
      </div>
    `}};var O,E,T;B.styles=[...(O=B,E=B,T="styles",M(L(O),T,E)||[]),w,N,g],R([t({type:Number,attribute:"current-page",reflect:!0})],B.prototype,"currentPage",2),R([t({type:Number,attribute:"total-pages",reflect:!0})],B.prototype,"totalPages",2),R([t({attribute:"previous-label"})],B.prototype,"previousLabel",2),R([t({attribute:"next-label"})],B.prototype,"nextLabel",2),R([t({attribute:"pagination-label"})],B.prototype,"paginationLabel",2),B=R([d(S)],B);export{B as RoadmapDialog,S as name};
