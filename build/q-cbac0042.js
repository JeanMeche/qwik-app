import{z as l,d as i,w as n,h as u,c as d,j as m,_ as p,l as _}from"./q-fd7999d4.js";import{u as f}from"./q-6c04e373.js";const b=s=>{const e=l(s,["action","spaReset","reloadDocument","onSubmit$"]),a=f();return i("form",{...e,children:u(m,null,3,"BC_0"),onSubmit$:d(()=>p(()=>Promise.resolve().then(()=>h),void 0),"s_p9MSze0ojs4",[a])},{action:"get","data-spa-reset":n(t=>t.spaReset?"true":void 0,[s],'p0.spaReset?"true":undefined'),"preventdefault:submit":n(t=>!t.reloadDocument,[s],"!p0.reloadDocument")},0,"BC_1")},v=async(s,e)=>{const[a]=_(),t=new FormData(e),o=new URLSearchParams;t.forEach((r,c)=>{typeof r=="string"&&o.append(c,r)}),a("?"+o.toString(),{type:"form",forceReload:!0}).then(()=>{e.getAttribute("data-spa-reset")==="true"&&e.reset(),e.dispatchEvent(new CustomEvent("submitcompleted",{bubbles:!1,cancelable:!1,composed:!1,detail:{status:200}}))})},h=Object.freeze(Object.defineProperty({__proto__:null,s_Nk9PlpjQm9Y:b,s_p9MSze0ojs4:v},Symbol.toStringTag,{value:"Module"}));export{b as s_Nk9PlpjQm9Y,v as s_p9MSze0ojs4};
