import{U as c,F as u,q as r,W as l,i as m,I as d,_ as p,k as _}from"./q-69e09571.js";import{j as b}from"./q-a4a73296.js";const f=a=>{const e=c(a,["action","spaReset","reloadDocument","onSubmit$"]),s=b();return u("form",{...e,children:l(m,null,3,"BC_0"),onSubmit$:d(()=>p(()=>Promise.resolve().then(()=>S),void 0),"s_p9MSze0ojs4",[s])},{action:"get","preventdefault:submit":r(t=>!t.reloadDocument,[a],"!p0.reloadDocument"),"data-spa-reset":r(t=>t.spaReset?"true":void 0,[a],'p0.spaReset?"true":undefined')},0,"BC_1")},v=async(a,e)=>{const[s]=_(),t=new FormData(e),o=new URLSearchParams;t.forEach((n,i)=>{typeof n=="string"&&o.append(i,n)}),s("?"+o.toString(),!0).then(()=>{e.getAttribute("data-spa-reset")==="true"&&e.reset(),e.dispatchEvent(new CustomEvent("submitcompleted",{bubbles:!1,cancelable:!1,composed:!1,detail:{status:200}}))})},S=Object.freeze(Object.defineProperty({__proto__:null,s_Nk9PlpjQm9Y:f,s_p9MSze0ojs4:v},Symbol.toStringTag,{value:"Module"}));export{f as s_Nk9PlpjQm9Y,v as s_p9MSze0ojs4};
