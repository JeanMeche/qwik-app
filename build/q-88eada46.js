import{m as L,v as i,C as c,a as O,P as b,_,U as I,z as k,l as H,b as M,$ as U,h as j}from"./q-24242a08.js";import{h as ot}from"./q-24242a08.js";import{u as q,t as N,c as Q,a as T,C as W,D as z,R as S,b as A,l as V,d as $,r as B,e as F}from"./q-859a1ec6.js";const G=!1,J=!0,K=()=>{const a=q();if(!(a!=null&&a.params))throw new Error("Missing Qwik City Env Data");const n=L("url");if(!n)throw new Error("Missing Qwik URL Env Data");const o=new URL(n),e=i({href:o.href,pathname:o.pathname,query:Object.fromEntries(o.searchParams.entries()),params:a.params}),l=i({path:N(o)}),t=i(Q),s=i({headings:void 0,menu:void 0}),m=i({contents:void 0});return c(T,s),c(W,m),c(z,t),c(S,e),c(A,l),O(b(()=>_(()=>Promise.resolve().then(()=>Y),void 0),"s_2Eo7WCpaqI8",[s,m,t,a,e,l])),I(k,{})},X=async({track:a})=>{const[n,o,e,l,t,s]=H(),m=M(""),{routes:v,menus:f,cacheModules:C}=await _(()=>import("./q-db2b8b5b.js"),["build/q-db2b8b5b.js","build/q-24242a08.js"]),w=a(()=>s.path),u=new URL(w,t.href),h=u.pathname,g=V(v,f,C,h),E=G?l.response:$(u.href),p=await g;if(p){const[y,P,R]=p,d=P,D=d[d.length-1];t.href=u.href,t.pathname=h,t.params={...y},t.query=Object.fromEntries(u.searchParams.entries()),n.headings=D.headings,n.menu=R,o.contents=U(d);const x=await E,r=B(x,t,d,m);e.links=r.links,e.meta=r.meta,e.styles=r.styles,e.title=r.title,e.frontmatter=r.frontmatter,J&&F(window,s)}},Y=Object.freeze(Object.defineProperty({__proto__:null,s_TxCFOy819ag:K,s_2Eo7WCpaqI8:X,_hW:j},Symbol.toStringTag,{value:"Module"}));export{ot as _hW,X as s_2Eo7WCpaqI8,K as s_TxCFOy819ag};
