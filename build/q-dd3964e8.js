import{e as l,U as o,_ as s,o as d,z as u,I as t,a as _,K as b,Q as f,d as c}from"./q-7ca7a1c0.js";import{k as p}from"./q-90747947.js";const h=()=>{l(o(()=>s(()=>Promise.resolve().then(()=>a),void 0),"s_p4UiTwsJc7c"));const r=p(),e=d({count:0,number:20});return u(o(()=>s(()=>Promise.resolve().then(()=>a),void 0),"s_V0Y6u0VD1eY",[e])),t(f,{children:[t("input",{type:"range",get value(){return e.number},max:50,onInput$:o(()=>s(()=>Promise.resolve().then(()=>a),void 0),"s_dznIGAlrcag",[e]),[_]:{value:b(e,"number")}}),t("div",{style:{"--state":`${e.count*.1}`},class:{host:!0,pride:r.query.pride==="true"},children:Array.from({length:e.number},(i,n)=>t("div",{class:{square:!0,odd:n%2===0},style:{"--index":`${n+1}`}},n)).reverse()}),t("div",{class:"flex flex-col items-center justify-center gap-6 ",children:[t("div",{class:"button w-40 h-16 bg-blue-500 rounded-lg cursor-pointer select-none active:translate-y-2 active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] active:border-b-[0px] transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841] border-b-[1px] border-blue-400 ",children:t("span",{class:"flex flex-col justify-center items-center h-full text-white font-bold text-lg ",children:"Active"})}),t("div",{class:"button w-40 h-16 bg-blue-500 cursor-pointer select-none active:translate-y-2 active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] active:border-b-[0px] transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841] rounded-full border-[1px] border-blue-400 ",children:t("span",{class:"flex flex-col justify-center items-center h-full text-white font-bold text-lg ",children:"Test Me"})}),t("div",{class:"button w-16 h-16 bg-blue-500 rounded-full cursor-pointer select-none active:translate-y-2 active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] active:border-b-[0px] transition-all duration-150 [box-shadow:0_8px_0_0_#1b6ff8,0_13px_0_0_#1b70f841] border-[1px] border-blue-400 ",children:t("span",{class:"flex flex-col justify-center items-center h-full text-white font-bold text-lg ",children:"?"})})]})]},"zc_0")},x=r=>{const[e]=c();e.number=r.target.valueAsNumber},v=`.host{display:grid;align-items:center;justify-content:center;justify-items:center;--rotation: 225deg;--size-step: 10px;--odd-color-step: 5;--even-color-step: 5;--center: 12;width:100%;height:500px;contain:strict}input{width:100%}.square{--size: calc(40px + var(--index) * var(--size-step));display:block;width:var(--size);height:var(--size);transform:rotate(calc(var(--rotation) * var(--state) * (var(--center) - var(--index))));transition-property:transform,border-color;transition-duration:5s;transition-timing-function:ease-in-out;grid-area:1 / 1;background:white;border-width:2px;border-style:solid;border-color:#000;box-sizing:border-box;will-change:transform,border-color;contain:strict}.square.odd{--luminance: calc(1 - calc(calc(var(--index) * var(--odd-color-step)) / 256));background:rgb(calc(172 * var(--luminance)),calc(127 * var(--luminance)),calc(244 * var(--luminance)))}.pride .square:nth-child(12n + 1){background:#e70000}.pride .square:nth-child(12n + 3){background:#ff8c00}.pride .square:nth-child(12n + 5){background:#ffef00}.pride .square:nth-child(12n + 7){background:#00811f}.pride .square:nth-child(12n + 9){background:#0044ff}.pride .square:nth-child(12n + 11){background:#760089}
`,g=v,m=({cleanup:r})=>{const[e]=c(),i=setTimeout(()=>e.count=1,500);r(()=>clearTimeout(i));const n=setInterval(()=>e.count++,7e3);r(()=>clearInterval(n))},a=Object.freeze(Object.defineProperty({__proto__:null,s_OW4nu0I1yZ8:h,s_V0Y6u0VD1eY:m,s_dznIGAlrcag:x,s_p4UiTwsJc7c:g},Symbol.toStringTag,{value:"Module"}));export{h as s_OW4nu0I1yZ8,m as s_V0Y6u0VD1eY,x as s_dznIGAlrcag,g as s_p4UiTwsJc7c};