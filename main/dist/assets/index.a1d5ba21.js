import{d as e,r as l,Q as a,p as t,a as u,b as o,o as n,c as s,e as d,F as p,f as i,w as c,g as r,h as m,i as f,C as v,A as b}from"./vendor.00b86c87.js";!function(e=".",l="__import__"){try{self[l]=new Function("u","return import(u)")}catch(a){const t=new URL(e,location),u=e=>{URL.revokeObjectURL(e.src),e.remove()};self[l]=e=>new Promise(((a,o)=>{const n=new URL(e,t);if(self[l].moduleMap[n])return a(self[l].moduleMap[n]);const s=new Blob([`import * as m from '${n}';`,`${l}.moduleMap['${n}']=m;`],{type:"text/javascript"}),d=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){o(new Error(`Failed to import: ${e}`)),u(d)},onload(){a(self[l].moduleMap[n]),u(d)}});document.head.appendChild(d)})),self[l].moduleMap={}}}("/assets/");const g=e({setup:()=>({input:l(""),input2:l(""),input4:l(""),input5:l("")}),data:()=>({options:[{value:"27",label:"动画(综合)"},{value:"21",label:"生活(综合)"},{value:"17",label:"游戏(单机)"},{value:"130",label:"音乐(综合)"},{value:"138",label:"搞笑(生活)"},{value:"174",label:"生活(其他)"},{value:"65",label:"游戏(网络)"}],value:""}),methods:{onSubmit(){var e={link:this.input,title:this.input2,id:this.value,tag:this.input4,desc:this.input5};this.$axios.post("http://128.199.111.41:9090/upload",e).then((e=>{console.log(e.data),a.success({message:"上传成功"+e.data,type:"success"})}))}}}),h=c("data-v-e0750c4c");t("data-v-e0750c4c");const _={class:"grid-content bg-purple"},V={class:"grid-content bg-purple-light"},U={class:"grid-content bg-purple"},w={class:"grid-content bg-purple-light"},y={class:"grid-content bg-purple"},L={class:"grid-content bg-purple"},j=r("上传");u();const k=h(((e,l,a,t,u,c)=>{const r=o("el-input"),m=o("el-col"),f=o("el-row"),v=o("el-option"),b=o("el-select"),g=o("el-button");return n(),s(p,null,[d(f,null,{default:h((()=>[d(m,{span:12},{default:h((()=>[d("div",_,[d(r,{modelValue:e.input,"onUpdate:modelValue":l[1]||(l[1]=l=>e.input=l),placeholder:"Youtube Link"},null,8,["modelValue"])])])),_:1}),d(m,{span:12},{default:h((()=>[d("div",V,[d(r,{modelValue:e.input2,"onUpdate:modelValue":l[2]||(l[2]=l=>e.input2=l),placeholder:"标题"},null,8,["modelValue"])])])),_:1})])),_:1}),d(f,null,{default:h((()=>[d(m,{span:12},{default:h((()=>[d("div",U,[d(b,{modelValue:e.value,"onUpdate:modelValue":l[3]||(l[3]=l=>e.value=l),placeholder:"请选择"},{default:h((()=>[(n(!0),s(p,null,i(e.options,(e=>(n(),s(v,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])])),_:1}),d(m,{span:12},{default:h((()=>[d("div",w,[d(r,{modelValue:e.input4,"onUpdate:modelValue":l[4]||(l[4]=l=>e.input4=l),placeholder:"标签(逗号隔开)"},null,8,["modelValue"])])])),_:1})])),_:1}),d(f,{gutter:20},{default:h((()=>[d(m,{span:12,offset:6},{default:h((()=>[d("div",y,[d(r,{modelValue:e.input5,"onUpdate:modelValue":l[5]||(l[5]=l=>e.input5=l),placeholder:"description"},null,8,["modelValue"])])])),_:1})])),_:1}),d(f,{gutter:20},{default:h((()=>[d(m,{span:12,offset:6},{default:h((()=>[d("div",L,[d(g,{type:"primary",onClick:e.onSubmit},{default:h((()=>[j])),_:1},8,["onClick"])])])),_:1})])),_:1})],64)}));g.render=k,g.__scopeId="data-v-e0750c4c";const R=d("img",{alt:"logo",src:"/assets/02.345b3f11.jpg"},null,-1),$=f({expose:[],setup:e=>(e,l)=>{const a=o("el-header"),t=o("el-main"),u=o("el-container");return n(),s(u,null,{default:m((()=>[d(a,null,{default:m((()=>[R])),_:1}),d(t,{class:"main"},{default:m((()=>[d(g)])),_:1})])),_:1})}});$.config.globalProperties.$axios=v,$.use(b),$.mount("#app");
