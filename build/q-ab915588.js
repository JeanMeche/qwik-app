import{e as j,S as N,g as R,G as Q,m as I,h as l,t as z,W as J,i as q,I as k,_ as u,k as H,u as M,K as $,Q as G,j as K}from"./q-69e09571.js";import{u as X,t as L,c as F,a as Y,C as B,D as Z,R as tt,b as et,d as ot,e as nt,l as U,f as S,r as at,i as st,g as rt,h as it}from"./q-a4a73296.js";const ct=a=>{j(k(()=>u(()=>Promise.resolve().then(()=>O),void 0),"s_RPDJAz33WLA"));const t=X();if(!(t!=null&&t.params))throw new Error("Missing Qwik City Env Data");const s=N("url");if(!s)throw new Error("Missing Qwik URL Env Data");const n=new URL(s),o=R({url:n,params:t.params,isNavigating:!1},{deep:!1}),r=Q(R(t.response.loaders,{deep:!1})),p=I(L(n)),i=R(F),E=R({headings:void 0,menu:void 0}),c=I(),d=t.response.action,h=d?t.response.loaders[d]:void 0,m=I(h?{id:d,data:t.response.formData,output:{result:h,status:t.response.status}}:void 0),D=k(()=>u(()=>Promise.resolve().then(()=>O),void 0),"s_fX0bDjeJa0E",[m,p,o]);return l(Y,E),l(B,c),l(Z,i),l(tt,o),l(et,D),l(ot,r),l(nt,m),z(k(()=>u(()=>Promise.resolve().then(()=>O),void 0),"s_02wMImzEAbk",[m,E,c,i,t,r,p,a,o,n])),J(q,null,3,"qY_0")},lt=":root{view-transition-name: none}";const y=()=>u(()=>import("./q-83a4d131.js"),["build/q-83a4d131.js","build/q-69e09571.js","build/q-a4a73296.js"]),T=[[/^\/$/,[y,()=>u(()=>import("./q-ba5b5b3d.js"),["build/q-ba5b5b3d.js","build/q-69e09571.js"])]],[/^\/demo\/flower\/?$/,[y,()=>u(()=>import("./q-f618e971.js"),["build/q-f618e971.js","build/q-69e09571.js"])]],[/^\/demo\/todolist\/?$/,[y,()=>u(()=>import("./q-a5aa677f.js"),["build/q-a5aa677f.js","build/q-69e09571.js","build/q-a4a73296.js"])]]],b=[];const V=!0;const ut=async(a,t)=>{const[s,n,o]=H();a===void 0?(a=n.value,n.value=""):t&&(n.value="");const r=new URL(a,o.url);a=L(r),!(!t&&n.value===a)&&(n.value=a,U(r,M()),S(T,b,V,r.pathname),s.value=void 0,o.isNavigating=!0)},_t=({track:a})=>{const[t,s,n,o,r,p,i,E,c,d]=H();async function h(){const[m,D]=a(()=>[i.value,t.value]),W=$("");let e,v,A=null;{e=new URL(m,location),e.pathname.endsWith("/")||(e.pathname+="/");let w=S(T,b,V,e.pathname);const C=M(),g=v=await U(e,C,!0,D);if(!g){i.untrackedValue=L(e);return}const _=g.href,P=new URL(_,e.href);P.pathname!==e.pathname&&(e=P,w=S(T,b,V,e.pathname)),A=await w}if(A){const[w,C,g]=A,_=C,P=_[_.length-1];c.url=e,c.params={...w},i.untrackedValue=L(e);const f=at(v,c,_,W);s.headings=P.headings,s.menu=g,n.value=G(_),o.links=f.links,o.meta=f.meta,o.styles=f.styles,o.title=f.title,o.frontmatter=f.frontmatter;{(E.viewTransition??!0)&&st(window.location,d)&&(document.__q_view_transition__=!0);const x=v==null?void 0:v.loaders;x&&Object.assign(p,x),rt.clear(),it(window,e,i),c.isNavigating=!1}}}h()},O=Object.freeze(Object.defineProperty({__proto__:null,_hW:K,s_02wMImzEAbk:_t,s_RPDJAz33WLA:lt,s_TxCFOy819ag:ct,s_fX0bDjeJa0E:ut},Symbol.toStringTag,{value:"Module"}));export{K as _hW,_t as s_02wMImzEAbk,lt as s_RPDJAz33WLA,ct as s_TxCFOy819ag,ut as s_fX0bDjeJa0E};
