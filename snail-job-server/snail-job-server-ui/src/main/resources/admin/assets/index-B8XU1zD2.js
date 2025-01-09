import{a as Z,N as J,b as Q}from"./search-form.vue_vue_type_script_setup_true_lang-CiN8VA7k.js";import{aT as T,aV as X,o as L,b as I,e as ee,d as x,Z as B,a0 as z,c as C,w as o,f as l,h as a,$ as t,g as c,t as g,ad as V,bo as U,Y as q,ac as ae,L as te,r as le,ah as re,bp as ne,B as v,ak as oe,i as se,ai as w,al as ie,F as de}from"./index-Dlhm-fK8.js";import{g as ue}from"./group-CP2HSNrU.js";import{_ as me,u as pe,a as ce}from"./table-BumNcT0C.js";import{_ as ge}from"./select-group.vue_vue_type_script_setup_true_lang-BowmroEB.js";import{_ as fe}from"./select-scene.vue_vue_type_script_setup_true_lang-HvT6rJQz.js";import{_ as _e}from"./datetime-range.vue_vue_type_script_setup_true_lang-Cko6Ku1V.js";import{_ as ye,a as be}from"./DescriptionsItem-g_tZg_fN.js";import{b as he}from"./Grid-3R-51InK.js";import"./retry-scene-BBNEBLY1.js";function ke(s){return T({url:"/retry-dead-letter/list",method:"get",params:s})}function Ne(s,m){return T({url:`/retry-dead-letter/${s}?groupName=${m}`,method:"get"})}function $(s){return T({url:"/retry-dead-letter/batch/rollback",method:"post",data:s})}function S(s){return T({url:"/retry-dead-letter/batch",method:"delete",data:s})}const De={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"};function ve(s,m){return L(),I("svg",De,m[0]||(m[0]=[ee("path",{fill:"currentColor",d:"M20.93 14A7 7 0 0 1 14 20H5.5v-2H14a5 5 0 1 0 0-10H6.914l2.5 2.5L8 11.914L3.086 7L8 2.086L9.414 3.5L6.914 6H14a7 7 0 0 1 7 7v1z"},null,-1)]))}const we=X({name:"tdesign-rollback",render:ve}),Te=x({name:"RetryDeadLetterSearch",__name:"dead-letter-search",props:{model:{required:!0},modelModifiers:{}},emits:B(["reset","search"],["update:model"]),setup(s,{emit:m}){const i=m,d=z(s,"model");function u(){i("reset")}function D(){i("search")}return(h,p)=>{const e=me,y=Z;return L(),C(y,{"btn-span":"24 m:9 xl:3",model:d.value,onSearch:D,onReset:u},{default:o(()=>[l(e,{span:"24 s:12 m:6",label:a(t)("page.retryLog.groupName"),path:"groupName",class:"pr-24px"},{default:o(()=>[l(ge,{value:d.value.groupName,"onUpdate:value":p[0]||(p[0]=b=>d.value.groupName=b),clearable:""},null,8,["value"])]),_:1},8,["label"]),l(e,{span:"24 s:12 m:6",label:a(t)("page.retryLog.sceneName"),path:"sceneName",class:"pr-24px"},{default:o(()=>[l(fe,{value:d.value.sceneName,"onUpdate:value":p[1]||(p[1]=b=>d.value.sceneName=b),"group-name":d.value.groupName,clearable:""},null,8,["value","group-name"])]),_:1},8,["label"]),l(e,{span:"24 s:12 m:15 l:12 xl:9",label:a(t)("page.common.createTime"),path:"datetimeRange"},{default:o(()=>[l(_e,{value:d.value.datetimeRange,"onUpdate:value":p[2]||(p[2]=b=>d.value.datetimeRange=b)},null,8,["value"])]),_:1},8,["label"])]),_:1},8,["model"])}}}),Le=x({name:"RetryDeadLetterDetailDrawer",__name:"retry-letter-detail-drawer",props:B({rowData:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:["update:visible"],setup(s){const m=z(s,"visible");return(i,d)=>{const u=ye,D=q,h=be,p=ae;return L(),C(p,{modelValue:m.value,"onUpdate:modelValue":d[0]||(d[0]=e=>m.value=e),title:a(t)("page.retryDeadLetter.detail")},{default:o(()=>[l(h,{"label-placement":"top",bordered:"",column:3},{default:o(()=>[l(u,{label:a(t)("page.retryTask.uniqueId"),span:3},{default:o(()=>{var e;return[c(g((e=i.rowData)==null?void 0:e.uniqueId),1)]}),_:1},8,["label"]),l(u,{label:a(t)("page.retryTask.groupName"),span:3},{default:o(()=>{var e;return[c(g((e=i.rowData)==null?void 0:e.groupName),1)]}),_:1},8,["label"]),l(u,{label:a(t)("page.retryTask.sceneName"),span:3},{default:o(()=>{var e;return[c(g((e=i.rowData)==null?void 0:e.sceneName),1)]}),_:1},8,["label"]),l(u,{label:a(t)("page.retryTask.taskType"),span:1},{default:o(()=>{var e;return[l(D,{type:a(V)((e=i.rowData)==null?void 0:e.taskType)},{default:o(()=>{var y;return[c(g(a(t)(a(U)[(y=i.rowData)==null?void 0:y.taskType])),1)]}),_:1},8,["type"])]}),_:1},8,["label"]),l(u,{label:a(t)("page.retryTask.bizNo"),span:2},{default:o(()=>{var e;return[c(g((e=i.rowData)==null?void 0:e.bizNo),1)]}),_:1},8,["label"]),l(u,{label:a(t)("page.retryTask.idempotentId"),span:3},{default:o(()=>{var e;return[c(g((e=i.rowData)==null?void 0:e.idempotentId),1)]}),_:1},8,["label"]),l(u,{label:a(t)("page.retryTask.executorName"),span:3},{default:o(()=>{var e;return[c(g((e=i.rowData)==null?void 0:e.executorName),1)]}),_:1},8,["label"]),l(u,{label:a(t)("page.retryTask.argsStr"),span:3},{default:o(()=>{var e;return[c(g((e=i.rowData)==null?void 0:e.argsStr),1)]}),_:1},8,["label"]),l(u,{label:a(t)("common.createDt"),span:3},{default:o(()=>{var e;return[c(g((e=i.rowData)==null?void 0:e.createDt),1)]}),_:1},8,["label"])]),_:1})]),_:1},8,["modelValue","title"])}}}),Re={class:"min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto"};function R(s){return typeof s=="function"||Object.prototype.toString.call(s)==="[object Object]"&&!ie(s)}const Ae=x({name:"retry_dead-letter",__name:"index",setup(s){const m=te(),i=le(),{bool:d,setTrue:u}=re(!1),{columns:D,columnChecks:h,data:p,getData:e,loading:y,mobilePagination:b,searchParams:k,resetSearchParams:A}=pe({apiFn:ke,apiParams:{page:1,size:10,groupName:null,sceneName:null,datetimeRange:ne()},columns:()=>[{type:"selection",align:"center",width:48},{key:"id",title:t("common.index"),align:"center",width:64},{key:"uniqueId",title:t("page.retryDeadLetter.uniqueId"),align:"left",minWidth:120,render:n=>{async function r(){await F(n),u()}return l(v,{text:!0,tag:"a",type:"primary",onClick:r,class:"ws-normal"},{default:()=>[n.uniqueId]})}},{key:"groupName",title:t("page.retryDeadLetter.groupName"),align:"left",minWidth:120},{key:"sceneName",title:t("page.retryDeadLetter.sceneName"),align:"left",minWidth:120},{key:"idempotentId",title:t("page.retryDeadLetter.idempotentId"),align:"left",minWidth:120},{key:"bizNo",title:t("page.retryDeadLetter.bizNo"),align:"left",minWidth:120},{key:"taskType",title:t("page.retryDeadLetter.taskType"),align:"left",minWidth:120,render:n=>{if(n.taskType===null)return null;const r=t(U[n.taskType]);return l(q,{type:V(n.taskType)},R(r)?r:{default:()=>[r]})}},{key:"createDt",title:t("page.retryDeadLetter.createDt"),align:"left",minWidth:120},{key:"operate",title:t("common.operate"),align:"center",width:130,render:n=>{let r;return l("div",{class:"flex-center gap-8px"},[l(v,{type:"primary",text:!0,ghost:!0,size:"small",onClick:()=>j(n)},R(r=t("common.rollback"))?r:{default:()=>[r]}),l(oe,{vertical:!0},null),l(J,{onPositiveClick:()=>H(n)},{default:()=>t("common.confirmDelete"),trigger:()=>{let _;return l(v,{type:"error",text:!0,ghost:!0,size:"small"},R(_=t("common.delete"))?_:{default:()=>[_]})}})])}}]}),{handleAdd:M,checkedRowKeys:N,onDeleted:P,onBatchDeleted:W}=ce(p,e);async function O(){const{error:n}=await S({ids:N.value,groupName:k.groupName});n||n||W()}async function G(){var r;const{error:n}=await $({ids:N.value,groupName:k.groupName});n||((r=window.$message)==null||r.success(t("common.rollbackSuccess")),e())}async function H(n){const{error:r}=await S({ids:[n.id],groupName:n.groupName});r||P()}async function F(n){const r=await Ne(n.id,n.groupName);i.value=r.data||null}async function j(n){var _;const{error:r}=await $({ids:[n.id],groupName:n.groupName});r||((_=window.$message)==null||_.success(t("common.rollbackSuccess")),e())}return se(async()=>{const{error:n,data:r}=await ue();!n&&r.length>0&&(k.groupName=r[0],e())}),(n,r)=>{const _=we,K=Q,E=he,Y=de;return L(),I("div",Re,[l(Te,{model:a(k),"onUpdate:model":r[0]||(r[0]=f=>w(k)?k.value=f:null),onReset:a(A),onSearch:a(e)},null,8,["model","onReset","onSearch"]),l(Y,{title:a(t)("page.retryDeadLetter.title"),bordered:!1,size:"small",class:"sm:flex-1-hidden card-wrapper","header-class":"view-card-header"},{"header-extra":o(()=>[l(K,{columns:a(h),"onUpdate:columns":r[1]||(r[1]=f=>w(h)?h.value=f:null),"disabled-delete":a(N).length===0,loading:a(y),"show-add":!1,onAdd:a(M),onDelete:O,onRefresh:a(e)},{addAfter:o(()=>[l(a(v),{size:"small",ghost:"",type:"primary",onClick:G},{icon:o(()=>[l(_,{class:"text-icon"})]),default:o(()=>[c(" "+g(a(t)("common.batchRollback")),1)]),_:1})]),_:1},8,["columns","disabled-delete","loading","onAdd","onRefresh"])]),default:o(()=>[l(E,{"checked-row-keys":a(N),"onUpdate:checkedRowKeys":r[2]||(r[2]=f=>w(N)?N.value=f:null),columns:a(D),data:a(p),"flex-height":!a(m).isMobile,"scroll-x":962,loading:a(y),remote:"","row-key":f=>f.id,pagination:a(b),class:"sm:h-full"},null,8,["checked-row-keys","columns","data","flex-height","loading","row-key","pagination"]),l(Le,{visible:a(d),"onUpdate:visible":r[3]||(r[3]=f=>w(d)?d.value=f:null),"row-data":i.value},null,8,["visible","row-data"])]),_:1},8,["title"])])}}});export{Ae as default};
