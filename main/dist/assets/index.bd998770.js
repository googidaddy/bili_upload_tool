import{d as e,r as l,Q as a,p as t,a as o,b as u,o as s,c as n,e as d,F as i,f as p,w as c,g as r,h as m,i as b,C as f,A as _}from"./vendor.00b86c87.js";!function(e=".",l="__import__"){try{self[l]=new Function("u","return import(u)")}catch(a){const t=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[l]=e=>new Promise(((a,u)=>{const s=new URL(e,t);if(self[l].moduleMap[s])return a(self[l].moduleMap[s]);const n=new Blob([`import * as m from '${s}';`,`${l}.moduleMap['${s}']=m;`],{type:"text/javascript"}),d=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(n),onerror(){u(new Error(`Failed to import: ${e}`)),o(d)},onload(){a(self[l].moduleMap[s]),o(d)}});document.head.appendChild(d)})),self[l].moduleMap={}}}("/assets/");const h=e({setup:()=>({input:l(""),input2:l(""),input4:l(""),input5:l(""),sessdata:l(""),bili_jct:l(""),buvid3:l("")}),data:()=>({options:[{value:"27",label:"动画(综合)"},{value:"21",label:"生活(综合)"},{value:"17",label:"游戏(单机)"},{value:"130",label:"音乐(综合)"},{value:"138",label:"搞笑(生活)"},{value:"174",label:"生活(其他)"},{value:"65",label:"游戏(网络)"}],value:""}),methods:{onSubmit(){var e={link:this.input,title:this.input2,id:this.value,tag:this.input4,desc:this.input5,sessdata:this.sessdata,bili_jct:this.bili_jct,buvid3:this.buvid3};this.$axios.post("http://128.199.111.41:9090/upload",e,{headers:{"Content-Type":"application/json","Access-Control-Allow-Headers":"Content-Type","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"OPTIONS,POST,GET"}}).then((e=>{console.log(e.data),a.success({message:"上传成功"+e.data,type:"success"})}))}}}),v=c("data-v-5a9268dc");t("data-v-5a9268dc");const V={class:"grid-content bg-purple-light"},g={class:"grid-content bg-purple"},U={class:"grid-content bg-purple-light"},j=r("仓库地址"),w=r("上传");o();const y=v(((e,l,a,t,o,c)=>{const r=u("el-input"),m=u("el-col"),b=u("el-row"),f=u("el-option"),_=u("el-select"),h=u("el-link"),y=u("el-button");return s(),n(i,null,[d(b,null,{default:v((()=>[d(m,{span:8},{default:v((()=>[d(r,{modelValue:e.sessdata,"onUpdate:modelValue":l[1]||(l[1]=l=>e.sessdata=l),placeholder:"SESSDATA(请勿泄露,盗号风险)"},null,8,["modelValue"])])),_:1}),d(m,{span:8},{default:v((()=>[d(r,{modelValue:e.bili_jct,"onUpdate:modelValue":l[2]||(l[2]=l=>e.bili_jct=l),placeholder:"bili_jct(请勿泄露,盗号风险)"},null,8,["modelValue"])])),_:1}),d(m,{span:8},{default:v((()=>[d(r,{modelValue:e.buvid3,"onUpdate:modelValue":l[3]||(l[3]=l=>e.buvid3=l),placeholder:"buvid3(请勿泄露,盗号风险)"},null,8,["modelValue"])])),_:1})])),_:1}),d(b,null,{default:v((()=>[d(m,{span:10},{default:v((()=>[d(r,{modelValue:e.input,"onUpdate:modelValue":l[4]||(l[4]=l=>e.input=l),placeholder:"Youtube Link"},null,8,["modelValue"])])),_:1}),d(m,{span:10},{default:v((()=>[d("div",V,[d(r,{modelValue:e.input2,"onUpdate:modelValue":l[5]||(l[5]=l=>e.input2=l),placeholder:"标题"},null,8,["modelValue"])])])),_:1}),d(m,{span:4},{default:v((()=>[d("div",g,[d(_,{modelValue:e.value,"onUpdate:modelValue":l[6]||(l[6]=l=>e.value=l),placeholder:"请选择"},{default:v((()=>[(s(!0),n(i,null,p(e.options,(e=>(s(),n(f,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])])),_:1})])),_:1}),d(b,null,{default:v((()=>[d(m,{span:8},{default:v((()=>[d("div",U,[d(r,{modelValue:e.input4,"onUpdate:modelValue":l[7]||(l[7]=l=>e.input4=l),placeholder:"标签(逗号隔开)"},null,8,["modelValue"])])])),_:1}),d(m,{span:16},{default:v((()=>[d(r,{modelValue:e.input5,"onUpdate:modelValue":l[8]||(l[8]=l=>e.input5=l),placeholder:"description(简介)"},null,8,["modelValue"])])),_:1})])),_:1}),d(b,null,{default:v((()=>[d(m,{span:4,offset:2},{default:v((()=>[d(h,{type:"danger",href:"https://github.com/googidaddy/bili_upload_tool"},{default:v((()=>[j])),_:1})])),_:1}),d(m,{span:12},{default:v((()=>[d(y,{type:"primary",onClick:e.onSubmit},{default:v((()=>[w])),_:1},8,["onClick"])])),_:1})])),_:1})],64)}));h.render=y,h.__scopeId="data-v-5a9268dc";const A=d("img",{alt:"logo",src:"/assets/02.345b3f11.jpg"},null,-1),C=b({expose:[],setup:e=>(e,l)=>{const a=u("el-header"),t=u("el-main"),o=u("el-container");return s(),n(o,null,{default:m((()=>[d(a,null,{default:m((()=>[A])),_:1}),d(t,{class:"main"},{default:m((()=>[d(h)])),_:1})])),_:1})}});C.config.globalProperties.$axios=f,C.use(_),C.mount("#app");
