import{i as a,r as s,c as n,b as t}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{d as o}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{b as r}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{v as i}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";const e=a`
  .gallery-col {
    min-width: 0;
    height: 100%;
  }
`,p=a`
  @media (min-width: ${s(i.md)}) {
    /* Switch reimagine-layout's inner flex container to a 12-column CSS grid.
       This is the same ::part pattern used by other blades (e.g. media-text-stacked). */
    .gallery::part(layout__base) {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: var(--ds-media-in-page-gallery-gallery-gap, var(--ds-app-space-micro-m, 1rem));
    }

    /* Slotted user columns fill their gallery-col height so standalone media
       stretches to match the tallest sibling. card-feature overrides these
       locally in its own shadow DOM, so nested card media is unaffected. */
    ::slotted([slot^='card-col-']) {
      height: 100%;

      --ds-media-width: 100%;
      --ds-media-height: 100%;
      --ds-media-asset-width: 100%;
      --ds-media-asset-height: 100%;
    }

    /* 2-cards */
    :host([configuration='2-cards'][layout='1']) {
      --span-1: 6;
      --span-2: 6;
    }
    :host([configuration='2-cards'][layout='2']) {
      --span-1: 8;
      --span-2: 4;
    }
    :host([configuration='2-cards'][layout='3']) {
      --span-1: 4;
      --span-2: 8;
    }

    /* 3-cards */
    :host([configuration='3-cards'][layout='1']) {
      --span-1: 4;
      --span-2: 4;
      --span-3: 4;
    }
    :host([configuration='3-cards'][layout='2']) {
      --span-1: 12;
      --span-2: 6;
      --span-3: 6;
    }
    :host([configuration='3-cards'][layout='3']) {
      --span-1: 6;
      --span-2: 6;
      --span-3: 12;
    }
    :host([configuration='3-cards'][layout='4']) {
      --span-1: 12;
      --span-2: 8;
      --span-3: 4;
    }
    :host([configuration='3-cards'][layout='5']) {
      --span-1: 8;
      --span-2: 4;
      --span-3: 12;
    }
    :host([configuration='3-cards'][layout='6']) {
      --span-1: 12;
      --span-2: 4;
      --span-3: 8;
    }
    :host([configuration='3-cards'][layout='7']) {
      --span-1: 4;
      --span-2: 8;
      --span-3: 12;
    }

    /* 4-cards */
    :host([configuration='4-cards'][layout='1']) {
      --span-1: 3;
      --span-2: 3;
      --span-3: 3;
      --span-4: 3;
    }
    :host([configuration='4-cards'][layout='2']) {
      --span-1: 12;
      --span-2: 4;
      --span-3: 4;
      --span-4: 4;
    }
    :host([configuration='4-cards'][layout='3']) {
      --span-1: 4;
      --span-2: 4;
      --span-3: 4;
      --span-4: 12;
    }
    :host([configuration='4-cards'][layout='4']) {
      --span-1: 6;
      --span-2: 6;
      --span-3: 6;
      --span-4: 6;
    }
    :host([configuration='4-cards'][layout='5']) {
      --span-1: 6;
      --span-2: 6;
      --span-3: 8;
      --span-4: 4;
    }
    :host([configuration='4-cards'][layout='6']) {
      --span-1: 8;
      --span-2: 4;
      --span-3: 6;
      --span-4: 6;
    }
    :host([configuration='4-cards'][layout='7']) {
      --span-1: 6;
      --span-2: 6;
      --span-3: 4;
      --span-4: 8;
    }
    :host([configuration='4-cards'][layout='8']) {
      --span-1: 4;
      --span-2: 8;
      --span-3: 6;
      --span-4: 6;
    }
    :host([configuration='4-cards'][layout='9']) {
      --span-1: 4;
      --span-2: 8;
      --span-3: 8;
      --span-4: 4;
    }
    :host([configuration='4-cards'][layout='10']) {
      --span-1: 8;
      --span-2: 4;
      --span-3: 4;
      --span-4: 8;
    }

    /* 5-cards */
    :host([configuration='5-cards'][layout='1']) {
      --span-1: 6;
      --span-2: 6;
      --span-3: 4;
      --span-4: 4;
      --span-5: 4;
    }
    :host([configuration='5-cards'][layout='2']) {
      --span-1: 4;
      --span-2: 4;
      --span-3: 4;
      --span-4: 6;
      --span-5: 6;
    }
    :host([configuration='5-cards'][layout='3']) {
      --span-1: 8;
      --span-2: 4;
      --span-3: 4;
      --span-4: 4;
      --span-5: 4;
    }
    :host([configuration='5-cards'][layout='4']) {
      --span-1: 4;
      --span-2: 4;
      --span-3: 4;
      --span-4: 8;
      --span-5: 4;
    }
    :host([configuration='5-cards'][layout='5']) {
      --span-1: 4;
      --span-2: 8;
      --span-3: 4;
      --span-4: 4;
      --span-5: 4;
    }
    :host([configuration='5-cards'][layout='6']) {
      --span-1: 4;
      --span-2: 4;
      --span-3: 4;
      --span-4: 4;
      --span-5: 8;
    }

    /* 6-cards */
    :host([configuration='6-cards'][layout='1']) {
      --span-1: 4;
      --span-2: 4;
      --span-3: 4;
      --span-4: 4;
      --span-5: 4;
      --span-6: 4;
    }
    :host([configuration='6-cards'][layout='2']) {
      --span-1: 3;
      --span-2: 3;
      --span-3: 3;
      --span-4: 3;
      --span-5: 6;
      --span-6: 6;
    }

    /* Per-column spans in the 12-column CSS grid */
    .gallery-col-1 {
      grid-column: span var(--span-1, 12);
    }
    .gallery-col-2 {
      grid-column: span var(--span-2, 12);
    }
    .gallery-col-3 {
      grid-column: span var(--span-3, 12);
    }
    .gallery-col-4 {
      grid-column: span var(--span-4, 12);
    }
    .gallery-col-5 {
      grid-column: span var(--span-5, 12);
    }
    .gallery-col-6 {
      grid-column: span var(--span-6, 12);
    }
  }
`,l="1-card",c="2-cards",d="3-cards",u="4-cards",g="5-cards",y="6-cards",h="1";var m=Object.defineProperty,f=Object.getOwnPropertyDescriptor,v=Object.getPrototypeOf,b=Reflect.get,w=(a,s,n,t)=>{for(var o,r=t>1?void 0:t?f(s,n):s,i=a.length-1;i>=0;i--)(o=a[i])&&(r=(t?o(s,n,r):o(r))||r);return t&&r&&m(s,n,r),r};const j="reimagine-media-in-page-gallery";let S=class extends r{constructor(){super(...arguments),this.configuration=l,this.layout=h}_displayContent(){const a=S.configMap[this.configuration]||1,s=Array.from({length:a},(a,s)=>t`<reimagine-layout-column
          class="gallery-col gallery-col-${s+1}"
          part="gallery-col-${s+1}"
        >
          <slot name="card-col-${s+1}"></slot>
        </reimagine-layout-column>`);return t`<reimagine-layout part="gallery" class="gallery">${s}</reimagine-layout>`}_renderBlade(){const a=this._displayContent();return this.baseContent?t`<div class="container" part="container">${a}</div>`:t`
      <reimagine-container class="container" part="container"> ${a} </reimagine-container>
    `}render(){return this.renderUiShell(this._renderBlade())}};var $,O,_;S.styles=[...($=S,O=S,_="styles",b(v($),_,O)||[]),e,p],S.configMap={[l]:1,[c]:2,[d]:3,[u]:4,[g]:5,[y]:6},w([n({reflect:!0})],S.prototype,"configuration",2),w([n({reflect:!0})],S.prototype,"layout",2),S=w([o(j)],S);export{S as MediaInPageGallery,j as name};
