import{d as e,r as l,Q as t,p as a,a as o,b as n,o as s,c as u,e as p,F as d,f as i,w as c,g as r,h as m,i as f,C as v,A as b}from"./vendor.00b86c87.js";!function(e=".",l="__import__"){try{self[l]=new Function("u","return import(u)")}catch(t){const a=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[l]=e=>new Promise(((t,n)=>{const s=new URL(e,a);if(self[l].moduleMap[s])return t(self[l].moduleMap[s]);const u=new Blob([`import * as m from '${s}';`,`${l}.moduleMap['${s}']=m;`],{type:"text/javascript"}),p=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(u),onerror(){n(new Error(`Failed to import: ${e}`)),o(p)},onload(){t(self[l].moduleMap[s]),o(p)}});document.head.appendChild(p)})),self[l].moduleMap={}}}("/assets/");const g=e({setup:()=>({input:l(""),input2:l(""),input4:l(""),input5:l("")}),data:()=>({options:[{value:"27",label:"动画(综合)"},{value:"21",label:"生活(综合)"},{value:"17",label:"游戏(单机)"},{value:"130",label:"音乐(综合)"},{value:"138",label:"搞笑(生活)"},{value:"174",label:"生活(其他)"},{value:"65",label:"游戏(网络)"}],value:""}),methods:{onSubmit(){var e={link:this.input,title:this.input2,id:this.value,tag:this.input4,desc:this.input5};this.$axios.post("http://http://128.199.111.41:9090/upload",e,{headers:{"Content-Type":"application/json","Access-Control-Allow-Headers":"Content-Type","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"OPTIONS,POST,GET"}}).then((e=>{console.log(e.data),t.success({message:"上传成功"+e.data,type:"success"})}))}}}),h=c("data-v-4f365c50");a("data-v-4f365c50");const _={class:"grid-content bg-purple"},V={class:"grid-content bg-purple-light"},w={class:"grid-content bg-purple"},U={class:"grid-content bg-purple-light"},y={class:"grid-content bg-purple"},C={class:"grid-content bg-purple"},j=r("上传");o();const A=h(((e,l,t,a,o,c)=>{const r=n("el-input"),m=n("el-col"),f=n("el-row"),v=n("el-option"),b=n("el-select"),g=n("el-button");return s(),u(d,null,[p(f,null,{default:h((()=>[p(m,{span:12},{default:h((()=>[p("div",_,[p(r,{modelValue:e.input,"onUpdate:modelValue":l[1]||(l[1]=l=>e.input=l),placeholder:"Youtube Link"},null,8,["modelValue"])])])),_:1}),p(m,{span:12},{default:h((()=>[p("div",V,[p(r,{modelValue:e.input2,"onUpdate:modelValue":l[2]||(l[2]=l=>e.input2=l),placeholder:"标题"},null,8,["modelValue"])])])),_:1})])),_:1}),p(f,null,{default:h((()=>[p(m,{span:12},{default:h((()=>[p("div",w,[p(b,{modelValue:e.value,"onUpdate:modelValue":l[3]||(l[3]=l=>e.value=l),placeholder:"请选择"},{default:h((()=>[(s(!0),u(d,null,i(e.options,(e=>(s(),u(v,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])])),_:1}),p(m,{span:12},{default:h((()=>[p("div",U,[p(r,{modelValue:e.input4,"onUpdate:modelValue":l[4]||(l[4]=l=>e.input4=l),placeholder:"标签(逗号隔开)"},null,8,["modelValue"])])])),_:1})])),_:1}),p(f,{gutter:20},{default:h((()=>[p(m,{span:12,offset:6},{default:h((()=>[p("div",y,[p(r,{modelValue:e.input5,"onUpdate:modelValue":l[5]||(l[5]=l=>e.input5=l),placeholder:"description"},null,8,["modelValue"])])])),_:1})])),_:1}),p(f,{gutter:20},{default:h((()=>[p(m,{span:12,offset:6},{default:h((()=>[p("div",C,[p(g,{type:"primary",onClick:e.onSubmit},{default:h((()=>[j])),_:1},8,["onClick"])])])),_:1})])),_:1})],64)}));g.render=A,g.__scopeId="data-v-4f365c50";const L=p("img",{alt:"logo",src:"/assets/02.345b3f11.jpg"},null,-1),O=f({expose:[],setup:e=>(e,l)=>{const t=n("el-header"),a=n("el-main"),o=n("el-container");return s(),u(o,null,{default:m((()=>[p(t,null,{default:m((()=>[L])),_:1}),p(a,{class:"main"},{default:m((()=>[p(g)])),_:1})])),_:1})}});O.config.globalProperties.$axios=v,O.use(b),O.mount("#app");
