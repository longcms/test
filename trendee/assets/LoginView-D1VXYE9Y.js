import{d as C,u as L,m as P,v as R,r as U,n as f,c as h,a as o,b as s,g as r,o as B,h as i,j as d,t as _}from"./index-BRMU4BMD.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";const E="Demo 输入任何值都可以登录成功，但是只有用户名：longcms 才具有更多的权限",I=C({__name:"LoginView",setup(N){const{t:a}=L(),c=P(),g=R(),p=U(),v=(n,e,t)=>{e===""?t(new Error("Please input the user")):t()},b=(n,e,t)=>{e===""?t(new Error("Please input the password")):t()},l=f({user:"",pass:""}),V=f({user:[{validator:v,trigger:"blur"}],pass:[{validator:b,trigger:"blur"}]}),w=n=>{n&&n.validate(e=>{if(e)c.login(l.user,""),g.replace({name:"Monitoring"});else return!1})};return(n,e)=>{const t=r("el-input"),m=r("el-form-item"),x=r("el-button"),y=r("el-link"),F=r("el-alert"),k=r("el-form");return B(),h("section",null,[o(k,{ref_key:"ruleFormRef",ref:p,style:{"max-width":"600px",margin:"0 auto"},model:l,"status-icon":"",rules:V,"label-width":"auto",class:"demo-ruleForm"},{default:s(()=>[o(m,{label:i(a)("login.user"),prop:"user"},{default:s(()=>[o(t,{modelValue:l.user,"onUpdate:modelValue":e[0]||(e[0]=u=>l.user=u)},null,8,["modelValue"])]),_:1},8,["label"]),o(m,{label:i(a)("login.pass"),prop:"pass"},{default:s(()=>[o(t,{modelValue:l.pass,"onUpdate:modelValue":e[1]||(e[1]=u=>l.pass=u),type:"password",autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label"]),o(m,{label:" "},{default:s(()=>[o(x,{type:"primary",onClick:e[2]||(e[2]=u=>w(p.value))},{default:s(()=>[d(_(i(a)("login.login")),1)]),_:1}),o(y,{underline:!1,href:"#/Forgot"},{default:s(()=>[d(_(i(a)("login.forgot")),1)]),_:1})]),_:1}),o(F,{title:E,type:"info"})]),_:1},8,["model","rules"])])}}}),j=D(I,[["__scopeId","data-v-86cfcf69"]]);export{j as default};
