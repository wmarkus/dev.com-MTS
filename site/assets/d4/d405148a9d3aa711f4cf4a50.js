import{i as t,r as a,c as d,b as s}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{b as r}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{d as e}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{b as l,v as i}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";const o=t`
  ::part(layout__base) {
    --ds-data-tiles-grid-template-columns: 1fr;
    --ds-data-tiles-grid-template-rows: 1fr;
    --ds-layout-column-gap: var(--ds-app-space-micro-m);
  }
`,c=t`
  ::part(layout__base) {
    --ds-data-tiles-grid-template-columns: 1fr 1fr;
  }
  .content {
    --ds-data-tiles-first-card-column-end: 3;
    --ds-data-tiles-first-card-row-end: 2;
    --ds-data-tiles-second-card-column-start: 1;
    --ds-data-tiles-second-card-column-end: 2;
    --ds-data-tiles-last-card-column-end: 3;
  }
`,n=t`
  ${o};

  .content {
    --ds-data-tiles-first-card-column-end: 2;
    --ds-data-tiles-last-card-row-start: 3;
    --ds-data-tiles-last-card-column-start: 1;
    --ds-data-tiles-last-card-column-end: 2;
  }
`,m=t`
  .content {
    --ds-data-tiles-grid-template-rows: 1fr 1fr 1fr;
    --ds-data-tiles-grid-template-columns: 1fr 1fr;
    --ds-data-tiles-first-card-row-end: 2;
    --ds-data-tiles-first-card-column-end: 3;
    --ds-data-tiles-second-card-row-start: 2;
    --ds-data-tiles-second-card-row-end: 4;
    --ds-data-tiles-second-card-column-start: 1;
    --ds-data-tiles-second-card-column-end: 2;
    --ds-data-tiles-third-card-row-start: 2;
    --ds-data-tiles-third-card-row-end: 3;
    --ds-data-tiles-third-card-column-start: 2;
    --ds-data-tiles-third-card-column-end: 3;
    --ds-data-tiles-last-card-row-start: 3;
    --ds-data-tiles-last-card-column-start: 2;
    --ds-data-tiles-last-card-column-end: 3;
  }
`,u=t`
  ${o};

  .content {
    --ds-data-tiles-first-card-column-end: 2;
    --ds-data-tiles-second-card-row-end: 3;
    --ds-data-tiles-third-card-row-start: 3;
    --ds-data-tiles-third-card-row-end: 4;
    --ds-data-tiles-third-card-column-start: 1;
    --ds-data-tiles-third-card-column-end: 2;
    --ds-data-tiles-last-card-row-start: 4;
    --ds-data-tiles-last-card-row-end: 5;
    --ds-data-tiles-last-card-column-start: 1;
    --ds-data-tiles-last-card-column-end: 2;
  }
`,h=t`
  .content {
    --ds-data-tiles-grid-template-rows: 1fr 1fr 1fr;
    --ds-data-tiles-grid-template-columns: 1fr 1fr;
    --ds-data-tiles-first-card-row-end: 2;
    --ds-data-tiles-first-card-column-end: 3;
    --ds-data-tiles-second-card-row-start: 2;
    --ds-data-tiles-second-card-row-end: 3;
    --ds-data-tiles-second-card-column-start: 1;
    --ds-data-tiles-second-card-column-end: 2;
    --ds-data-tiles-third-card-row-start: 2;
    --ds-data-tiles-third-card-row-end: 3;
    --ds-data-tiles-third-card-column-start: 2;
    --ds-data-tiles-third-card-column-end: 3;
    --ds-data-tiles-fourth-card-row-start: 3;
    --ds-data-tiles-fourth-card-row-end: 4;
    --ds-data-tiles-fourth-card-column-start: 1;
    --ds-data-tiles-fourth-card-column-end: 2;
    --ds-data-tiles-last-card-row-start: 3;
    --ds-data-tiles-last-card-row-end: 4;
    --ds-data-tiles-last-card-column-start: 2;
    --ds-data-tiles-last-card-column-end: 3;
  }
`,f=t`
  ${o};

  .content {
    --ds-data-tiles-first-card-column-end: 2;
    --ds-data-tiles-third-card-row-start: 3;
    --ds-data-tiles-third-card-row-end: 4;
    --ds-data-tiles-third-card-column-start: 1;
    --ds-data-tiles-third-card-column-end: 2;
    --ds-data-tiles-fourth-card-row-start: 4;
    --ds-data-tiles-fourth-card-row-end: 5;
    --ds-data-tiles-last-card-column-start: 1;
    --ds-data-tiles-last-card-column-end: 2;
    --ds-data-tiles-last-card-row-start: 5;
    --ds-data-tiles-last-card-row-end: 6;
  }
`,w=t`
  .content {
    --ds-data-tiles-grid-template-rows: 1fr 1fr 1fr;
    --ds-data-tiles-grid-template-columns: 1fr 1fr;
    --ds-data-tiles-first-card-row-end: 2;
    --ds-data-tiles-second-card-row-start: 1;
    --ds-data-tiles-second-card-column-start: 2;
    --ds-data-tiles-third-card-row-start: 2;
    --ds-data-tiles-third-card-column-start: 1;
    --ds-data-tiles-third-card-column-end: 2;
    --ds-data-tiles-fourth-card-row-end: 3;
    --ds-data-tiles-fifth-card-row-start: 4;
    --ds-data-tiles-fifth-card-column-start: 1;
    --ds-data-tiles-fifth-card-column-end: 2;
    --ds-data-tiles-last-card-column-start: 2;
    --ds-data-tiles-last-card-column-end: 3;
  }
`,g=t`
  ${o};
  .content {
    --ds-data-tiles-first-card-column-end: 2;
    --ds-data-tiles-second-card-row-start: 2;
    --ds-data-tiles-second-card-column-start: 1;
    --ds-data-tiles-third-card-row-start: 3;
    --ds-data-tiles-fourth-card-row-start: 4;
    --ds-data-tiles-fourth-card-row-end: 5;
    --ds-data-tiles-fourth-card-column-start: 1;
    --ds-data-tiles-fourth-card-column-end: 2;
    --ds-data-tiles-fifth-card-row-start: 5;
    --ds-data-tiles-fifth-card-row-end: 6;
    --ds-data-tiles-last-card-row-start: 6;
    --ds-data-tiles-last-card-row-end: 7;
    --ds-data-tiles-last-card-column-start: 1;
    --ds-data-tiles-last-card-column-end: 2;
  }
`,p="100%",v=t`
  :host {
    ::slotted(reimagine-card-stat) {
      --ds-card-stat-media-max-height: 318px;
      --ds-media-height: 100%;
    }

    .content {
      --ds-layout-display: var(--ds-data-tiles-display, ${a("grid")});
      --ds-card-stat-max-width: 100%;
    }

    ::part(layout__base) {
      grid-template-columns: var(--ds-data-tiles-grid-template-columns, 41fr 28fr 28fr);
      grid-template-rows: var(--ds-data-tiles-grid-template-rows, 1fr 1fr);
    }

    reimagine-layout-column:first-child {
      grid-row-start: var(--ds-data-tiles-first-card-row-start, 1);
      grid-row-end: var(--ds-data-tiles-first-card-row-end, 3);
      grid-column-start: var(--ds-data-tiles-first-card-column-start, 1);
      grid-column-end: var(--ds-data-tiles-first-card-column-end, auto);
    }

    ::slotted([slot='stat-card-1']),
    ::slotted([slot='stat-card-2']),
    ::slotted([slot='stat-card-3']),
    ::slotted([slot='stat-card-4']),
    ::slotted([slot='stat-card-5']) {
      height: var(--ds-data-tiles-card-height, ${a(p)});
    }

    reimagine-layout-column:nth-child(2) {
      grid-row-start: var(--ds-data-tiles-second-card-row-start, auto);
      grid-row-end: var(--ds-data-tiles-second-card-row-end, auto);
      grid-column-start: var(--ds-data-tiles-second-card-column-start, 2);
      grid-column-end: var(--ds-data-tiles-second-card-column-end, 4);
    }

    reimagine-layout-column:nth-child(3) {
      grid-row-start: var(--ds-data-tiles-third-card-row-start, auto);
      grid-row-end: var(--ds-data-tiles-third-card-row-end, auto);
      grid-column-start: var(--ds-data-tiles-third-card-column-start, 2);
      grid-column-end: var(--ds-data-tiles-third-card-column-end, 3);
    }

    reimagine-layout-column:nth-child(4) {
      grid-row-start: var(--ds-data-tiles-fourth-card-row-start, 2);
      grid-row-end: var(--ds-data-tiles-fourth-card-row-end, 4);
      grid-column-start: var(--ds-data-tiles-fourth-card-column-start, 2);
      grid-column-end: var(--ds-data-tiles-fourth-card-column-end, 3);
    }

    reimagine-layout-column:nth-child(5) {
      grid-row-start: var(--ds-data-tiles-fifth-card-row-start, 2);
      grid-row-end: var(--ds-data-tiles-fifth-card-row-end, 3);
      grid-column-start: var(--ds-data-tiles-fifth-card-column-start, 3);
      grid-column-end: var(--ds-data-tiles-fifth-card-column-end, 4);
    }

    reimagine-layout-column:last-child {
      grid-row-start: var(--ds-data-tiles-last-card-row-start, 2);
      grid-row-end: var(--ds-data-tiles-last-card-row-end, auto);
      grid-column-start: var(--ds-data-tiles-last-card-column-start, 2);
      grid-column-end: var(--ds-data-tiles-last-card-column-end, 4);
    }
  }

  :host([title-placement='left']) {
    --ds-ui-shell-flex-direction: row;
  }

  :host([stats-number='3'][title-placement='left']) {
    ${c};
  }

  :host([stats-number='4']) {
    --ds-data-tiles-third-card-column-start: 2;
    --ds-data-tiles-third-card-column-end: 3;
    --ds-data-tiles-last-card-column-start: 3;
  }

  :host([stats-number='4'][title-placement='left']) {
    ${m};
  }

  :host([stats-number='5']) {
    --ds-data-tiles-grid-template-rows: 1fr 1fr 1fr;
    --ds-data-tiles-second-card-row-start: 3;
    --ds-data-tiles-second-card-row-end: 4;
    --ds-data-tiles-second-card-column-start: 1;
    --ds-data-tiles-second-card-column-end: 2;
    --ds-data-tiles-third-card-row-start: 1;
    --ds-data-tiles-third-card-row-end: 2;
    --ds-data-tiles-third-card-column-start: 2;
    --ds-data-tiles-third-card-column-end: 4;
    --ds-data-tiles-last-card-row-start: 2;
    --ds-data-tiles-last-card-row-end: 4;
    --ds-data-tiles-last-card-column-start: 3;
    --ds-data-tiles-last-card-column-end: 4;
  }

  :host([stats-number='5'][title-placement='left']) {
    ${h};
  }

  :host([stats-number='6']) {
    --ds-data-tiles-second-card-row-start: 3;
    --ds-data-tiles-second-card-column-start: 1;
    --ds-data-tiles-second-card-column-end: 2;
    --ds-data-tiles-third-card-column-end: 4;
    --ds-data-tiles-fourth-card-row-end: 4;
    --ds-data-tiles-fourth-card-column-end: 3;
    --ds-data-tiles-last-card-row-start: 3;
    --ds-data-tiles-last-card-row-end: 4;
    --ds-data-tiles-last-card-column-start: 3;
  }

  :host([stats-number='6'][title-placement='left']) {
    ${w};
  }
`,b=t`
  /* vp3 styles */
  @media (max-width: ${a(l(i.lg))}) {
    :host([stats-number='3']) {
      ${c};
    }

    :host([stats-number='3'][title-placement='left']) {
      ${n};
    }

    :host([stats-number='4']) {
      ${m};
    }

    :host([stats-number='4'][title-placement='left']) {
      ${u};
    }

    :host([stats-number='5']) {
      ${h};
    }

    :host([stats-number='5'][title-placement='left']) {
      ${f};
    }

    :host([stats-number='6']) {
      ${w};
    }

    :host([stats-number='6'][title-placement='left']) {
      ${g};
    }
  }

  /* vp2 styles */
  @media (max-width: ${a(l(i.md))}) {
    :host([title-placement='left']) {
      --ds-ui-shell-flex-direction: column;
    }

    :host([stats-number='3']) {
      ${n};
    }

    :host([stats-number='4']) {
      ::part(layout__base) {
        --ds-data-tiles-grid-template-columns: 1fr;
        --ds-data-tiles-grid-template-rows: 1fr 1fr 1fr 1fr;
      }

      ${u};
    }

    :host([stats-number='5']) {
      ${f};
    }

    :host([stats-number='6']) {
      ${g};
    }
  }
`;var y=Object.defineProperty,$=Object.getOwnPropertyDescriptor,_=Object.getPrototypeOf,x=Reflect.get,j=(t,a,d,s)=>{for(var r,e=s>1?void 0:s?$(a,d):a,l=t.length-1;l>=0;l--)(r=t[l])&&(e=(s?r(a,d,e):r(e))||e);return s&&e&&y(a,d,e),e};const O="reimagine-data-tiles";let D=class extends r{constructor(){super(...arguments),this.statsNumber=3}_displayContent(){const t=Array.from({length:this.statsNumber},(t,a)=>s`<reimagine-layout-column
          ><slot name="stat-card-${a+1}"></slot
        ></reimagine-layout-column>`);return s`${t}`}_renderDefaultTemplate(){return s`
      <reimagine-layout class="content" part="content">
        ${this._displayContent()}
      </reimagine-layout>
    `}_renderBlade(){const t=this._renderDefaultTemplate();return this.baseContent?s` <div>${t}</div> `:s` <reimagine-container> ${t} </reimagine-container> `}render(){return this.renderUiShell(this._renderBlade())}};var N,P,C;D.styles=[...(N=D,P=D,C="styles",x(_(N),C,P)||[]),v,b],j([d({type:String,reflect:!0,attribute:"title-placement"})],D.prototype,"titlePlacement",2),j([d({reflect:!0,type:Number,attribute:"stats-number"})],D.prototype,"statsNumber",2),D=j([e(O)],D);export{D as DataTiles,O as name};
