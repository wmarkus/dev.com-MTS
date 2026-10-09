import{r as e,i as t,u as i,s as r,o as s,c as a,e as o,f as n}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{R as d}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{d as p}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{I as l}from"/__mirror/assets/597f3dbe3ef56339bfbefa4a";import{l as c}from"/__mirror/assets/91a753f241346b8f1c211d90";import{g as u}from"/__mirror/assets/4230c2711e37b2e85105da0e";const h="#eaebec",g="#4c4c51",m="200px",b="auto",y=t`
  .table-container {
    padding-bottom: ${e("35px")};
    overflow-x: ${e(b)};
  }

  .pricing-unavailable-message {
    align-items: center;
    background-color: ${e(h)};
    color: ${e(g)};
    display: flex;
    justify-content: center;
    min-height: ${e(m)};
  }

  .text-heading3 {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.3;
    margin: 0 0 9px;
    position: relative;
  }

  .product-description {
    margin: 0 0 9px;
  }

  .pricing-table {
    --ds-table-cell-heading-font-weight: 600;
  }

  [surface] {
    background: var(--ds-surface-background, ${e(u.background)});
    backdrop-filter: var(
      --ds-surface-backdrop-filter,
      ${e(u.backdropFilter)}
    );
    border-width: var(--ds-surface-border-width, ${e(u.borderWidth)});
    border-style: var(--ds-surface-border-style, ${e(u.borderStyle)});
    border-color: var(--ds-surface-border-color, ${e(u.borderColor)});
    border-radius: var(
      --ds-surface-border-radius,
      ${e(u.borderRadius)}
    );
    box-shadow: var(--ds-surface-box-shadow, ${e(u.boxShadow)});
    cursor: var(--ds-surface-cursor, ${e(u.cursor)});
  }
`;var v=Object.defineProperty,P=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,I=Reflect.get,$=(e,t,i,r)=>{for(var s,a=r>1?void 0:r?P(t,i):t,o=e.length-1;o>=0;o--)(s=e[o])&&(a=(r?s(t,i,a):s(a))||a);return r&&a&&v(t,i,a),a};const k="reimagine-pricing-metered-table";let D=class extends(l(d)){constructor(){super(),this.columnHeaders="Model (Sku name),Meter type,Price",this.productId="",this.rows=[],this.selectedRegion="eastus",this.apiFields="SkuDisplayName,MeterType,ListPrice",this.skuGroupIds=[],this.productDisplayName="",this.headingTag="h3",this.allProductApiResponse=[],this.skuGroupConfigs=[],this.productNameByAuthor="",this.isOverrideProductName=!1,this.isInvalidProductId=!1,this.isInvalidSkuGroupId=!1,this.invalidProductMessage="Invalid Product ID. Please check the input",this.invalidSkuGroupMessage="One or more SkuGroupIDs are Invalid. Please check the input",this.unavailableMessage="Pricing is not available in the selected region",this.tableAriaLabel="pricing table",this._productDescriptionSlotEmpty=!0,this.handleRegionChange=this.handleRegionChange.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("region-change",this.handleRegionChange),document.addEventListener("updateDynamicMeteredPricingTableData",this.updateDynamicMeteredPricingTableData.bind(this)),this.skuGroupIds=(this.skuGroupConfigs??[]).map(e=>e.skuGroupId),this.hasAttribute("isOverrideProductName")&&(this.isOverrideProductName="false"!==this.getAttribute("isOverrideProductName"))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("region-change",this.handleRegionChange),document.removeEventListener("updateDynamicMeteredPricingTableData",this.updateDynamicMeteredPricingTableData)}updateDynamicMeteredPricingTableData(e){this.allProductApiResponse=e.detail;const t=`DMPT_${this.productId}_${this.skuGroupIds.join(",")}`;sessionStorage.getItem(t)&&sessionStorage.removeItem(t),this.handleAPIResponse(t)}handleRegionChange(e){this.selectedRegion=e.detail,this.updateTableDataBasedOnRegionChange()}updateTableDataBasedOnRegionChange(){let e=null;const t=`DMPT_${this.productId}_${this.skuGroupIds.join(",")}`,i=sessionStorage.getItem(t);if(i)return e=JSON.parse(i),this.rows=this.getPricingRows(e),e;this.handleAPIResponse(t)}bindProductDisplayName(e){this.isOverrideProductName&&this.productNameByAuthor?this.productDisplayName=this.productNameByAuthor:this.productDisplayName=e}getPricingRows(e){const t=[];return!e||"object"==typeof e&&null!==e&&0===Object.keys(e).length?t:(this.bindProductDisplayName(e.displayName),0===e.plans.length?(this.isInvalidSkuGroupId=!0,t):(e.plans.forEach(e=>{(e.armRegionName===this.selectedRegion||"Global"===e.location)&&e.availabilities.forEach(i=>{const r=[];this.apiFields.split(",").forEach(t=>{var s;if("listprice"===t.trim().toLowerCase())r.push(`$${i.meter.price.listPrice} ${i.meter.price.currencyCode}`);else if("metertype"===t.trim().toLowerCase())r.push(i.meter.type);else if("displayname"===t.trim().toLowerCase())r.push(this.productDisplayName);else{const i=null==(s=e.skuAttributes.find(e=>e.key.toLowerCase()===t.trim().toLowerCase()))?void 0:s.value;r.push(i)}}),t.push(r)})}),t))}handleAPIResponse(e){this.allProductApiResponse.some(t=>t.productId.trim()===this.productId.trim()&&t.skuGroupIds.map(e=>e.trim()).join(",")===this.skuGroupIds.map(e=>e.trim()).join(",")&&(sessionStorage.setItem(e,JSON.stringify(t)),this.rows=this.getPricingRows(t),!0))||(this.rows=[],this.isInvalidProductId=!0,this.bindProductDisplayName(""))}get displayHeaders(){return this.columnHeaders.split(",")}_renderHeading(){if(!this.productDisplayName)return i``;const e=r(this.headingTag);return i`<${e} class="text-heading3">${this.productDisplayName}</${e}>`}_handleProductDescriptionSlotChange(){this._productDescriptionSlotEmpty=0===this._productDescriptionSlot.length}_renderProductDescription(){return i`
      <div
        class="product-description"
        part="product-description"
        style="${this._productDescriptionSlotEmpty?"display: none;":""}"
      >
        <slot
          name="product-description"
          @slotchange="${this._handleProductDescriptionSlotChange}"
        ></slot>
      </div>
    `}_renderUnavailableMessage(e){return i`
      <div class="ocr-table ocr-table--multi-comparison ocr-table--zebra-striping-vertical">
        ${this._renderHeading()} ${this._renderProductDescription()}
        <div class="pricing-unavailable-message">${e}</div>
      </div>
    `}renderTemplate(){return this.displayHeaders.length!==this.apiFields.split(",").length?i`Please provide the same number of headers as rows`:this.rows&&this.rows.length>0?i`
        <div class="table-container">
          ${this._renderHeading()} ${this._renderProductDescription()}

          <reimagine-table
            class="pricing-table"
            part="pricing-table"
            column-appearance="striped"
            structure="key-value"
            aria-label=${s(this.tableAriaLabel)}
          >
            <table>
              ${this.displayHeaders.length>0?i`
                    <thead>
                      <tr>
                        ${this.displayHeaders.map(e=>i`<th scope="col" scrollslider-item>${e}</th>`)}
                      </tr>
                    </thead>
                  `:null}
              <tbody>
                ${this.rows.map(e=>i`
                    <tr>
                      ${e.map(e=>i`<td>${e}</td>`)}
                    </tr>
                  `)}
              </tbody>
            </table>
          </reimagine-table>
        </div>
      `:this.isInvalidProductId?this._renderUnavailableMessage(this.invalidProductMessage):this.isInvalidSkuGroupId?this._renderUnavailableMessage(this.invalidSkuGroupMessage):this._renderUnavailableMessage(this.unavailableMessage)}render(){return i` ${this.firstSlotTemplate()} ${this.renderTemplate()} ${this.lastSlotTemplate()} `}};var S,w,N;D.styles=[...(S=D,w=D,N="styles",I(f(S),N,w)||[]),y,c],$([a({type:String})],D.prototype,"columnHeaders",2),$([a({type:String})],D.prototype,"productId",2),$([a({type:Array})],D.prototype,"rows",2),$([a({type:String})],D.prototype,"selectedRegion",2),$([a({type:String})],D.prototype,"apiFields",2),$([a({type:Array})],D.prototype,"skuGroupIds",2),$([a({type:String})],D.prototype,"productDisplayName",2),$([a({type:String,attribute:"heading-tag"})],D.prototype,"headingTag",2),$([a({type:Object})],D.prototype,"allProductApiResponse",2),$([a({type:Array})],D.prototype,"skuGroupConfigs",2),$([a({type:String})],D.prototype,"productNameByAuthor",2),$([a({reflect:!0,type:Boolean})],D.prototype,"isOverrideProductName",2),$([a({type:Boolean})],D.prototype,"isInvalidProductId",2),$([a({type:Boolean})],D.prototype,"isInvalidSkuGroupId",2),$([a({type:String,attribute:"invalid-product-message"})],D.prototype,"invalidProductMessage",2),$([a({type:String,attribute:"invalid-sku-group-message"})],D.prototype,"invalidSkuGroupMessage",2),$([a({type:String,attribute:"unavailable-message"})],D.prototype,"unavailableMessage",2),$([a({type:String,attribute:"table-aria-label"})],D.prototype,"tableAriaLabel",2),$([o({slot:"product-description"})],D.prototype,"_productDescriptionSlot",2),$([n()],D.prototype,"_productDescriptionSlotEmpty",2),D=$([p(k)],D);export{D as PricingMeteredTable,k as name};
