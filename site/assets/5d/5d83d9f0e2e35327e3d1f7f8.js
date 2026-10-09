import{b as e}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";import{R as s}from"/__mirror/assets/7c1f8902a03fa78dbf6a09ef";import{d as o}from"/__mirror/assets/8b9fb2358bf27923e12447c9";import{S as t}from"/__mirror/assets/ecadaafe454c3c322d56b64c";var r=Object.getOwnPropertyDescriptor,n=Object.getPrototypeOf,a=Reflect.get;const i="reimagine-show-more-show-less";let l=class extends(t(s)){render(){return e`
      <div class="container" part="container" show-more-show-less-container>
        <slot @slotchange=${this._showHide}></slot>
      </div>
      <slot name="show-more-button" @slotchange=${this.handleShowMoreButtonSlotChange}></slot>
    `}};var h,m,c;l.styles=[...(h=l,m=l,c="styles",a(n(h),c,m)||[])],l=((e,s,o,t)=>{for(var n,a=t>1?void 0:t?r(s,o):s,i=e.length-1;i>=0;i--)(n=e[i])&&(a=n(a)||a);return a})([o(i)],l);export{l as ShowMoreShowLess,i as name};
