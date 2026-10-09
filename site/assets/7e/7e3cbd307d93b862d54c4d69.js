import{i as t}from"/__mirror/assets/7766dde4a0d29fc379eecc6f";const i=t`
  /**
 * Remove the default button styles
 */
  border-radius: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  display: inline-flex;
  align-items: center;
  border: 0 solid transparent;
  cursor: pointer;
`;function e(t){if(t.length>0){const i=t.map(t=>t.getBoundingClientRect().top),e=Math.max(...i);t.forEach((t,n)=>{const a=e-i[n];if(a>0){const i=parseFloat(t.dataset.originalMargin||window.getComputedStyle(t).marginTop)||0;t.dataset.originalMargin||(t.dataset.originalMargin=i.toString()),t.style.marginTop=`${i+a}px`}})}}export{e as a,i as b};
