function a(e,r){return t(e,null,null);function t(n,i,l){let o=Object.assign({},r(n,i,l));return"children"in n&&(o.children=n.children.map(function(d,u){return t(d,u,n)})),o}}var g=e=>crypto.getRandomValues(new Uint8Array(e)),y=(e,r,t)=>{let n=(2<<Math.log(e.length-1)/Math.LN2)-1,i=-~(1.6*n*r/e.length);return(l=r)=>{let o="";for(;;){let d=t(i),u=i;for(;u--;)if(o+=e[d[u]&n]||"",o.length===l)return o}}},c=(e,r=21)=>y(e,r,g);function m(e,r){return r?.note&&(e.note=r?.note),r?.url&&(e.url=r?.url),r?.fatal&&(e.fatal=!0),e}function A(e,r,t){return m(e.message(r,t?.node,t?.source),{...t,fatal:!0})}function C(e,r,t){return m(e.message(r,t?.node,t?.source),t)}var s="abcdefghijklmnopqrstuvwxyz",x=s+s.toUpperCase(),N="0123456789",b=c(x,1),w=c(x+N,9);function T(){return b()+w()}function I(e){if(!e)return;let r=e.replace(/[\t\n\r ]+/g," ").trim().toLowerCase(),t=h(r);return{identifier:r,label:e,html_id:t}}function h(e){if(e)return e.toLowerCase().replace(/[^a-z0-9-]/g,"-").replace(/^([0-9-])/,"id-$1").replace(/-[-]+/g,"-").replace(/(?:^[-]+)|(?:[-]+$)/g,"")}function k(e,r){a(e,t=>{var n,i;let l=(i=(n=t.children)===null||n===void 0?void 0:n.map(o=>o.type===r&&o.children?o.children:o))===null||i===void 0?void 0:i.flat();return t&&t.children==null&&delete t.children,l!==void 0&&(t.children=l),t})}function _(e,r){e.children=[{type:"text",value:r}]}function f(e){return e?Array.isArray(e)?e.map(r=>!r||typeof r=="string"?r||"":"value"in r?r.value:"children"in r&&r.children?f(r.children):"").join(""):f([e]):""}function L(e){return JSON.parse(JSON.stringify(e))}var p;(function(e){e.content="notebook-content",e.code="notebook-code"})(p||(p={}));var v;(function(e){e.string="string",e.number="number",e.boolean="boolean",e.parsed="parsed"})(v||(v={}));export{a,A as b,C as c,T as d,I as e,h as f,k as g,_ as h,f as i,L as j,p as k,v as l};