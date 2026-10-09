import{r as e,i as t,b as i,e as n,c as o}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{R as r}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{i as s,s as a,d as l}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{I as d}from"/__mirror/assets/597f3dbe3ef56339bfbefa4a";import"/__mirror/assets/674e87e1db3168cb538c091d";import"/__mirror/assets/c180aa30a3b15984764facc1";import"/__mirror/assets/c55634b5c47498bb74d55729";import"/__mirror/assets/1744c47504083b26d862e98f";import"/__mirror/assets/5f924eec6274a2d611fc1ea0";import{b as g,v as c}from"/__mirror/assets/6b4c3b56ca48ca51ec875a93";import{T as p}from"/__mirror/assets/6ad137053d5da8fc91d912f1";const m="var(--ds-app-space-micro-xl, 1.25rem)",h=t`
  .filters-container {
    padding-top: var(
      --ds-pricing-metered-filters-container-padding-top,
      ${e(m)}
    );
    padding-bottom: var(
      --ds-pricing-metered-filters-container-padding-bottom,
      ${e(m)}
    );
  }

  .region-dropdown {
    --ds-flyout-width: 100%;
  }
`,b=t`
  @media (max-width: ${e(g(c.sm))}) {
    .region-dropdown {
      --ds-dropdown-trigger-display: grid;
      --ds-button-host-display: grid;
      --ds-button-justify-content: space-between;
    }
  }

  @media (min-width: ${e(c.md)}) {
    .region-dropdown {
      --ds-flyout-width: 50%;
    }
  }

  @media (min-width: ${e(c.lg)}) {
    .region-dropdown {
      --ds-flyout-width: 30%;
    }
  }
`;var u=Object.defineProperty,f=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,w=Reflect.get,v=(e,t,i,n)=>{for(var o,r=n>1?void 0:n?f(t,i):t,s=e.length-1;s>=0;s--)(o=e[s])&&(r=(n?o(t,i,r):o(r))||r);return n&&r&&u(t,i,r),r};const P="reimagine-pricing-metered-filters";let j=class extends(d(r)){constructor(){super(...arguments),this.isRegionFilterEnabled=!0,this.selectedRegion="eastus",this.regionsFilterLabel="East US",this.regionsFilterTitle="Region:",this.connectorAPIRequestData="",this.pricingConnectorAPIEndPoint="",this.regionOptions={regions:[]},this.isHandlingClick=!1}async connectedCallback(){super.connectedCallback(),this.hasAttribute("isRegionFilterEnabled")&&(this.isRegionFilterEnabled="false"!==this.getAttribute("isRegionFilterEnabled")),await this.updateAllTablesData()}async updateAllTablesData(){let e=null;try{if(this.clearSessionStorage(),!this.connectorAPIRequestData&&!this.pricingConnectorAPIEndPoint)return!1;const t=JSON.stringify(this.connectorAPIRequestData),i=await fetch(this.pricingConnectorAPIEndPoint,{method:"POST",headers:{"Content-Type":"application/json"},body:t});if(!i.ok)throw new Error(`HTTP error! : ${i.statusText}`);e=await i.json(),this.dispatchEvent(new CustomEvent("updateDynamicMeteredPricingTableData",{detail:e,bubbles:!0}))}catch(e){console.error("Error: Failed to fetch product data from Pricing Connector API",e)}}clearSessionStorage(){Object.keys(sessionStorage).filter(e=>e.includes("DMPT_")).forEach(e=>sessionStorage.removeItem(e))}handleRegionChange(e){this.isHandlingClick||(this.isHandlingClick=!0,this.selectedRegion=e,this.dispatchEvent(new CustomEvent("region-change",{detail:e,bubbles:!0,composed:!0})),setTimeout(()=>{this.isHandlingClick=!1},100))}_handleFilterHeadingSlotChange(){const e=this._filterHeadingSlot[0];e&&s(e,"reimagine-text-block")&&a(e,{size:p["size-3xs"]})}render(){return this.isRegionFilterEnabled?i`
      <div class="filters-container">
        <slot name="filter-heading" @slotchange="${this._handleFilterHeadingSlotChange}"></slot>
        <reimagine-dropdown selectable class="region-dropdown" part="region-dropdown">
          <reimagine-dropdown-trigger slot="dropdown__trigger" configuration="button-select">
            ${this.regionsFilterLabel}
          </reimagine-dropdown-trigger>
          <reimagine-menu-list configuration="heading" size="small" label="Menu options" selectable>
            ${this.regionOptions.regions.map(e=>i`
                <reimagine-menu-list-item configuration="heading" size="small" role="group">
                  <reimagine-text-block slot="text-block">
                    <span slot="text-block__heading">${e.country}</span>
                  </reimagine-text-block>
                  <reimagine-divider slot="divider"></reimagine-divider>
                </reimagine-menu-list-item>
                ${e.locations.map(e=>i`
                    <reimagine-menu-list-item
                      configuration="option"
                      size="small"
                      role="option"
                      id="${e.backendValue}"
                      @click="${()=>this.handleRegionChange(e.backendValue)}"
                      ?active="${this.selectedRegion===e.backendValue}"
                    >
                      <p slot="list-item__title">${e.displayName}</p>
                    </reimagine-menu-list-item>
                  `)}
              `)}
          </reimagine-menu-list>
        </reimagine-dropdown>
      </div>
    `:i` <div class="filters-container"></div> `}};var k,R,x;j.styles=[...(k=j,R=j,x="styles",w(y(k),x,R)||[]),h,b],v([n({slot:"filter-heading"})],j.prototype,"_filterHeadingSlot",2),v([o({reflect:!0,type:Boolean,attribute:"is-region-filter-enabled"})],j.prototype,"isRegionFilterEnabled",2),v([o({type:String})],j.prototype,"selectedRegion",2),v([o({type:String})],j.prototype,"regionsFilterLabel",2),v([o({type:String})],j.prototype,"regionsFilterTitle",2),v([o({type:Object})],j.prototype,"connectorAPIRequestData",2),v([o({type:String})],j.prototype,"pricingConnectorAPIEndPoint",2),v([o({type:Object})],j.prototype,"regionOptions",2),j=v([l(P)],j);export{j as PricingMeteredFilters,P as name};
