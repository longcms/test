import{d as x,u as y,v as V,r as k,n as c,c as C,a as o,b as r,g as s,o as R,h as a,j as p,t as _}from"./index-BRMU4BMD.js";import{_ as h}from"./plugin-vue_export-helper-DlAUqK2U.js";const q=x({__name:"ForgotPasswordView",setup(B){const{t:l}=y(),f=V(),n=k(),u=c({email:"",code:""}),g=c({email:[{type:"email",required:!0,trigger:"blur"}],code:[{type:"string",required:!0,trigger:"blur"}]}),b=t=>{t&&t.validate(e=>{if(e)console.log("submit!"),f.push({name:"Reset"});else return console.log("error submit!"),!1})},v=t=>{t&&t.resetFields()};return(t,e)=>{const F=s("el-input"),i=s("el-form-item"),d=s("el-button"),w=s("el-form");return R(),C("section",null,[o(w,{ref_key:"ruleFormRef",ref:n,style:{"max-width":"600px",margin:"0 auto"},model:u,"status-icon":"",rules:g,"label-width":"auto",class:"demo-ruleForm"},{default:r(()=>[o(i,{label:a(l)("forgot.email"),prop:"email"},{default:r(()=>[o(F,{modelValue:u.email,"onUpdate:modelValue":e[0]||(e[0]=m=>u.email=m),placeholder:a(l)("forgot.email.placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(i,{label:" "},{default:r(()=>[o(d,{type:"primary",onClick:e[1]||(e[1]=m=>b(n.value))},{default:r(()=>[p(_(a(l)("Submit")),1)]),_:1}),o(d,{onClick:e[2]||(e[2]=m=>v(n.value))},{default:r(()=>[p(_(a(l)("Reset")),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])])}}}),P=h(q,[["__scopeId","data-v-79275ace"]]);export{P as default};
