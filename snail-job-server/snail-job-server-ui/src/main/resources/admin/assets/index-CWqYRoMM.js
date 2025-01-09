import{a as L,N as O,b as j}from"./search-form.vue_vue_type_script_setup_true_lang-CiN8VA7k.js";import{d as U,Z as T,a0 as F,o as C,c as I,h as l,$ as t,a5 as q,ay as G,ab as K,r as D,q as E,w as h,f as o,b$ as H,L as Y,bp as Z,B as W,az as J,Y as P,aA as Q,a4 as X,ak as ee,b as ae,ai as $,al as te,F as le}from"./index-Dlhm-fK8.js";import{f as oe,a as ne,b as se,c as re,d as ce}from"./workflow-hI8_w2jc.js";import{_ as ue,u as ie,a as me}from"./table-BumNcT0C.js";import{_ as de}from"./select-group.vue_vue_type_script_setup_true_lang-BowmroEB.js";import{_ as pe}from"./datetime-range.vue_vue_type_script_setup_true_lang-Cko6Ku1V.js";import{_ as fe}from"./AutoComplete-BgAynZel.js";import{b as he}from"./Grid-3R-51InK.js";import"./group-CP2HSNrU.js";const ke=U({name:"TaskBatchStatus",__name:"task-batch-status",props:T({disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(c){const k=c,d=F(c,"modelValue");return(_,p)=>{const s=K;return C(),I(s,{value:d.value,"onUpdate:value":p[0]||(p[0]=u=>d.value=u),placeholder:l(t)("common.taskBatchStatus.form"),options:l(q)(l(G)),disabled:k.disabled,clearable:k.clearable},null,8,["value","placeholder","options","disabled","clearable"])}}}),we=U({name:"WorkflowBatchSearch",__name:"workflow-batch-search",props:{model:{required:!0},modelModifiers:{}},emits:T(["reset","search"],["update:model"]),setup(c,{emit:k}){const d=D(!1),_=k,p=D([]),s=F(c,"model"),u=D(s.value.workflowName);function b(){u.value="",_("reset")}function B(){_("search")}async function w(){const r=await oe({keywords:u.value,groupName:s.value.groupName});p.value=r.data}function y(r){s.value.workflowId=r}E(()=>u.value,r=>{r.length!==0?w():d.value=!1});function N(r){return r.map(n=>({value:n.id,label:n.workflowName}))}function v(r){return[r.label,`(${r.value})`]}return(r,n)=>{const g=ue,x=fe,R=L;return C(),I(R,{"btn-span":"12 s:24 m:10 l:12 xl:16",model:s.value,onSearch:B,onReset:b},{default:h(()=>[o(g,{span:"24 s:12 m:8",label:l(t)("page.workflowBatch.groupName"),path:"groupName",class:"pr-24px"},{default:h(()=>[o(de,{value:s.value.groupName,"onUpdate:value":n[0]||(n[0]=i=>s.value.groupName=i),clearable:""},null,8,["value"])]),_:1},8,["label"]),o(g,{span:"24 s:12 m:8",label:l(t)("page.workflowBatch.workflowName"),"label-width":100,path:"workflowName",class:"pr-24px"},{default:h(()=>[o(x,{value:u.value,"onUpdate:value":n[1]||(n[1]=i=>u.value=i),placeholder:l(t)("page.workflowBatch.form.workflowName"),options:N(p.value),"empty-visible":d.value,clearable:"",filterable:"","render-label":v,onSelect:y},null,8,["value","placeholder","options","empty-visible"])]),_:1},8,["label"]),o(g,{span:"24 s:12 m:8",label:l(t)("page.workflowBatch.taskBatchStatus"),path:"taskBatchStatus",class:"pr-24px"},{default:h(()=>[o(ke,{value:s.value.taskBatchStatus,"onUpdate:value":n[2]||(n[2]=i=>s.value.taskBatchStatus=i),clearable:""},null,8,["value"])]),_:1},8,["label"]),o(g,{span:"24 s:24 m:14 l:12 xl:8",label:l(t)("page.common.createTime"),path:"datetimeRange",class:"pr-24px"},{default:h(()=>[o(pe,{value:s.value.datetimeRange,"onUpdate:value":n[3]||(n[3]=i=>s.value.datetimeRange=i)},null,8,["value"])]),_:1},8,["label"])]),_:1},8,["model"])}}}),ge={class:"min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto"};function S(c){return typeof c=="function"||Object.prototype.toString.call(c)==="[object Object]"&&!te(c)}const De=U({name:"workflow_batch",__name:"index",setup(c){const k=H(),d=Y(),_=history.state.workflowId,p=history.state.workflowName,s=history.state.taskBatchStatus,{columns:u,columnChecks:b,data:B,getData:w,loading:y,mobilePagination:N,searchParams:v,resetSearchParams:r}=ie({apiFn:ne,apiParams:{page:1,size:10,workflowId:null,workflowName:null,groupName:null,taskBatchStatus:null,datetimeRange:Z()},searchParams:{workflowId:_,workflowName:p,taskBatchStatus:s},columns:()=>[{type:"selection"},{key:"id",title:t("common.index"),align:"center",width:120,render:e=>{function a(){V(e.id)}return o(W,{text:!0,tag:"a",type:"primary",onClick:a,class:"ws-normal"},{default:()=>[e.id]})}},{key:"workflowName",title:t("page.workflowBatch.workflowName"),align:"left",minWidth:120},{key:"groupName",title:t("page.workflowBatch.groupName"),align:"left",minWidth:120},{key:"executionAt",title:t("page.workflowBatch.executionAt"),align:"left",minWidth:120},{key:"taskBatchStatus",title:t("page.workflowBatch.taskBatchStatus"),align:"left",minWidth:120,render:e=>{if(!e.taskBatchStatus)return null;const a={1:"info",2:"success",3:"success",4:"error",5:"warning",6:"warning"},m=t(J[e.taskBatchStatus]);return o(P,{type:a[e.taskBatchStatus]},S(m)?m:{default:()=>[m]})}},{key:"operationReason",title:t("page.workflowBatch.operationReason"),align:"left",minWidth:120,render:e=>{if(!e.operationReason)return null;const a=t(Q[e.operationReason]);return o(P,{type:"warning"},S(a)?a:{default:()=>[a]})}},{key:"createDt",title:t("page.workflowBatch.createDt"),align:"left",minWidth:120},{key:"operate",title:t("common.operate"),align:"center",width:130,render:e=>o("div",{class:"flex-center gap-8px"},[(e==null?void 0:e.taskBatchStatus)===1||(e==null?void 0:e.taskBatchStatus)===2?o(X,null,[o(O,{onPositiveClick:()=>M(e.id)},{default:()=>t("common.confirmStop"),trigger:()=>{let a;return o(W,{type:"error",text:!0,ghost:!0,size:"small"},S(a=t("common.stop"))?a:{default:()=>[a]})}}),o(ee,{vertical:!0},null)]):"",o(O,{onPositiveClick:()=>R(e.id)},{default:()=>t("common.confirmDelete"),trigger:()=>{let a;return o(W,{type:"error",text:!0,ghost:!0,size:"small"},S(a=t("common.delete"))?a:{default:()=>[a]})}})])}]}),{checkedRowKeys:n,onDeleted:g,onBatchDeleted:x}=me(B,w);async function R(e){const{error:a}=await se(e);a||g()}async function i(){const{error:e}=await ce(n.value);e||x()}async function M(e){var m;const{error:a}=await re(e);a||((m=window.$message)==null||m.success(t("common.executeSuccess")),w())}function V(e){k.push({path:"/workflow/form/batch",query:{id:e}})}return(e,a)=>{const m=j,z=he,A=le;return C(),ae("div",ge,[o(we,{model:l(v),"onUpdate:model":a[0]||(a[0]=f=>$(v)?v.value=f:null),onReset:l(r),onSearch:l(w)},null,8,["model","onReset","onSearch"]),o(A,{title:l(t)("page.workflowBatch.title"),bordered:!1,size:"small",class:"sm:flex-1-hidden card-wrapper","header-class":"view-card-header"},{"header-extra":h(()=>[o(m,{columns:l(b),"onUpdate:columns":a[1]||(a[1]=f=>$(b)?b.value=f:null),"disabled-delete":l(n).length===0,loading:l(y),"show-add":!1,onDelete:i,onRefresh:l(w)},null,8,["columns","disabled-delete","loading","onRefresh"])]),default:h(()=>[o(z,{"checked-row-keys":l(n),"onUpdate:checkedRowKeys":a[2]||(a[2]=f=>$(n)?n.value=f:null),columns:l(u),data:l(B),"flex-height":!l(d).isMobile,"scroll-x":962,loading:l(y),remote:"","row-key":f=>f.id,pagination:l(N),class:"sm:h-full"},null,8,["checked-row-keys","columns","data","flex-height","loading","row-key","pagination"])]),_:1},8,["title"])])}}});export{De as default};
