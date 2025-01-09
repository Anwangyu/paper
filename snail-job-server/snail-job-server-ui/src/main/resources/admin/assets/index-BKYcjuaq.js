import{a as A,N as E,b as G}from"./search-form.vue_vue_type_script_setup_true_lang-CiN8VA7k.js";import{aT as S,d as I,Z as U,a0 as $,o as R,c as q,w as o,f as a,h as e,$ as t,a5 as H,bq as Y,D as Z,ab as J,g,t as y,ad as w,br as z,bo as B,Y as T,ax as Q,aw as X,l as ee,L as ae,r as te,ah as le,bp as oe,B as x,b as re,ai as D,al as ne,F as se}from"./index-Dlhm-fK8.js";import{_ as ue,u as ie,a as pe}from"./table-BumNcT0C.js";import{_ as de}from"./select-group.vue_vue_type_script_setup_true_lang-BowmroEB.js";import{_ as me}from"./select-scene.vue_vue_type_script_setup_true_lang-HvT6rJQz.js";import{_ as ce}from"./datetime-range.vue_vue_type_script_setup_true_lang-Cko6Ku1V.js";import{_ as ge}from"./detail-drawer-CZtUR7gy.js";import{_ as ye}from"./log-drawer-DUe5um4t.js";import{_ as fe,a as _e}from"./DescriptionsItem-g_tZg_fN.js";import{b as be}from"./Grid-3R-51InK.js";import"./group-CP2HSNrU.js";import"./retry-scene-BBNEBLY1.js";import"./CollapseItem-Ca_LaRTD.js";function ve(d){return S({url:"/retry-task-log/list",method:"get",params:d})}function he(d){return S({url:`/retry-task-log/${d}`,method:"get"})}function Ne(d){return S({url:`/retry-task-log/${d}`,method:"delete"})}function ke(d){return S({url:"/retry-task-log/ids",method:"delete",data:d})}const De=I({name:"RetryLogSearch",__name:"retry-log-search",props:{model:{required:!0},modelModifiers:{}},emits:U(["reset","search"],["update:model"]),setup(d,{emit:b}){const p=b,n=$(d,"model");function m(){p("reset")}function v(){p("search")}return(k,i)=>{const c=ue,f=Z,h=J,l=A;return R(),q(l,{"btn-span":"24 xl:3",model:n.value,onSearch:v,onReset:m},{default:o(()=>[a(c,{span:"24 s:12 m:6",label:e(t)("page.retryLog.groupName"),path:"groupName",class:"pr-24px"},{default:o(()=>[a(de,{value:n.value.groupName,"onUpdate:value":i[0]||(i[0]=s=>n.value.groupName=s),clearable:""},null,8,["value"])]),_:1},8,["label"]),a(c,{span:"24 s:12 m:6",label:e(t)("page.retryLog.sceneName"),path:"sceneName",class:"pr-24px"},{default:o(()=>[a(me,{value:n.value.sceneName,"onUpdate:value":i[1]||(i[1]=s=>n.value.sceneName=s),"group-name":n.value.groupName,clearable:""},null,8,["value","group-name"])]),_:1},8,["label"]),a(c,{span:"24 s:12 m:6",label:e(t)("page.retryLog.UniqueId"),path:"UniqueId",class:"pr-24px"},{default:o(()=>[a(f,{value:n.value.uniqueId,"onUpdate:value":i[2]||(i[2]=s=>n.value.uniqueId=s),placeholder:e(t)("page.retryLog.form.UniqueId"),clearable:""},null,8,["value","placeholder"])]),_:1},8,["label"]),a(c,{span:"24 s:12 m:6",label:e(t)("page.retryLog.idempotentId"),path:"idempotentId",class:"pr-24px"},{default:o(()=>[a(f,{value:n.value.idempotentId,"onUpdate:value":i[3]||(i[3]=s=>n.value.idempotentId=s),placeholder:e(t)("page.retryLog.form.idempotentId"),clearable:""},null,8,["value","placeholder"])]),_:1},8,["label"]),a(c,{span:"24 s:12 m:6",label:e(t)("page.retryLog.bizNo"),path:"bizNo",class:"pr-24px"},{default:o(()=>[a(f,{value:n.value.bizNo,"onUpdate:value":i[4]||(i[4]=s=>n.value.bizNo=s),placeholder:e(t)("page.retryLog.form.bizNo"),clearable:""},null,8,["value","placeholder"])]),_:1},8,["label"]),a(c,{span:"24 s:12 m:6",label:e(t)("page.retryLog.retryStatus"),path:"taskBatchStatus",class:"pr-24px"},{default:o(()=>[a(h,{value:n.value.retryStatus,"onUpdate:value":i[5]||(i[5]=s=>n.value.retryStatus=s),placeholder:e(t)("page.retryTask.form.retryStatus"),options:e(H)(e(Y)),clearable:""},null,8,["value","placeholder","options"])]),_:1},8,["label"]),a(c,{span:"24 s:24 m:15 l:12 xl:9",label:e(t)("page.common.createTime"),path:"datetimeRange",class:"pr-24px"},{default:o(()=>[a(ce,{value:n.value.datetimeRange,"onUpdate:value":i[6]||(i[6]=s=>n.value.datetimeRange=s)},null,8,["value"])]),_:1},8,["label"])]),_:1},8,["model"])}}}),we=I({name:"SceneDetailDrawer",__name:"retry-log-detail-drawer",props:U({rowData:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:["update:visible"],setup(d){const b=$(d,"visible");return(p,n)=>{const m=fe,v=T,k=_e,i=Q,c=ye,f=X,h=ge;return R(),q(h,{modelValue:b.value,"onUpdate:modelValue":n[0]||(n[0]=l=>b.value=l),title:e(t)("page.retryLog.detail"),width:["50%","90%"]},{default:o(()=>[a(f,{type:"segment",animated:""},{default:o(()=>[a(i,{name:0,tab:e(t)("page.log.info")},{default:o(()=>[a(k,{"label-placement":"top",bordered:"",column:2},{default:o(()=>[a(m,{label:e(t)("page.retryLog.UniqueId"),span:2},{default:o(()=>{var l;return[g(y((l=p.rowData)==null?void 0:l.uniqueId),1)]}),_:1},8,["label"]),a(m,{label:e(t)("page.retryLog.groupName"),span:2},{default:o(()=>{var l;return[g(y((l=p.rowData)==null?void 0:l.groupName),1)]}),_:1},8,["label"]),a(m,{label:e(t)("page.retryLog.sceneName"),span:2},{default:o(()=>{var l;return[g(y((l=p.rowData)==null?void 0:l.sceneName),1)]}),_:1},8,["label"]),a(m,{label:e(t)("page.retryLog.retryStatus"),span:1},{default:o(()=>{var l;return[a(v,{type:e(w)((l=p.rowData)==null?void 0:l.retryStatus)},{default:o(()=>{var s;return[g(y(e(t)(e(z)[(s=p.rowData)==null?void 0:s.retryStatus])),1)]}),_:1},8,["type"])]}),_:1},8,["label"]),a(m,{label:e(t)("page.retryLog.taskType"),span:1},{default:o(()=>{var l;return[a(v,{type:e(w)((l=p.rowData)==null?void 0:l.taskType)},{default:o(()=>{var s;return[g(y(e(t)(e(B)[(s=p.rowData)==null?void 0:s.taskType])),1)]}),_:1},8,["type"])]}),_:1},8,["label"]),a(m,{label:e(t)("page.retryLog.bizNo"),span:2},{default:o(()=>{var l;return[g(y((l=p.rowData)==null?void 0:l.bizNo),1)]}),_:1},8,["label"]),a(m,{label:e(t)("page.retryLog.idempotentId"),span:2},{default:o(()=>{var l;return[g(y((l=p.rowData)==null?void 0:l.idempotentId),1)]}),_:1},8,["label"]),a(m,{label:e(t)("page.retryTask.executorName"),span:2},{default:o(()=>{var l;return[g(y((l=p.rowData)==null?void 0:l.executorName),1)]}),_:1},8,["label"]),a(m,{label:e(t)("page.retryTask.argsStr"),span:2},{default:o(()=>{var l;return[g(y((l=p.rowData)==null?void 0:l.argsStr),1)]}),_:1},8,["label"]),a(m,{label:e(t)("common.createDt")},{default:o(()=>{var l;return[g(y((l=p.rowData)==null?void 0:l.createDt),1)]}),_:1},8,["label"])]),_:1})]),_:1},8,["tab"]),a(i,{name:1,tab:e(t)("page.log.title"),"display-directive":"if"},{default:o(()=>[a(c,{drawer:!1,type:"retry","task-data":p.rowData},null,8,["task-data"])]),_:1},8,["tab"])]),_:1})]),_:1},8,["modelValue","title"])}}}),Se=ee(we,[["__scopeId","data-v-606d4d2f"]]),Le={class:"min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto"};function L(d){return typeof d=="function"||Object.prototype.toString.call(d)==="[object Object]"&&!ne(d)}const Ve=I({name:"retry_log",__name:"index",setup(d){const b=ae(),p=te(),{bool:n,setTrue:m}=le(!1),v=history.state.retryStatus,{columns:k,columnChecks:i,data:c,getData:f,loading:h,mobilePagination:l,searchParams:s,resetSearchParams:P}=ie({apiFn:ve,apiParams:{page:1,size:10,uniqueId:null,groupName:null,sceneName:null,idempotentId:null,bizNo:null,retryStatus:null,datetimeRange:oe()},searchParams:{retryStatus:v},columns:()=>[{type:"selection",align:"center",width:48,disabled:u=>u.retryStatus===0},{key:"id",title:t("common.index"),align:"center",width:64},{key:"uniqueId",title:t("page.retryLog.UniqueId"),align:"left",minWidth:120,render:u=>{async function r(){await M(u),m()}return a(x,{text:!0,tag:"a",type:"primary",onClick:r,class:"ws-normal"},{default:()=>[u.uniqueId]})}},{key:"groupName",title:t("page.retryLog.groupName"),align:"left",minWidth:120},{key:"sceneName",title:t("page.retryLog.sceneName"),align:"left",minWidth:120},{key:"retryStatus",title:t("page.retryLog.retryStatus"),align:"left",minWidth:120,render:u=>{if(u.retryStatus===null)return null;const r=t(z[u.retryStatus]);return a(T,{type:w(u.retryStatus)},L(r)?r:{default:()=>[r]})}},{key:"taskType",title:t("page.retryLog.taskType"),align:"left",minWidth:120,render:u=>{if(u.taskType===null)return null;const r=t(B[u.taskType]);return a(T,{type:w(u.taskType)},L(r)?r:{default:()=>[r]})}},{key:"idempotentId",title:t("page.retryLog.idempotentId"),align:"left",minWidth:120},{key:"bizNo",title:t("page.retryLog.bizNo"),align:"left",minWidth:120},{key:"createDt",title:t("page.retryLog.createDt"),align:"left",minWidth:120},{key:"operate",title:t("common.operate"),align:"center",width:80,render:u=>a("div",{class:"flex-center gap-8px"},[u.retryStatus===1||u.retryStatus===2?a(E,{onPositiveClick:()=>V(u.id)},{default:()=>t("common.confirmDelete"),trigger:()=>{let r;return a(x,{type:"error",text:!0,ghost:!0,size:"small"},L(r=t("common.delete"))?r:{default:()=>[r]})}}):""])}]}),{checkedRowKeys:N,onDeleted:W,onBatchDeleted:C}=pe(c,f);async function O(){const{error:u}=await ke(N.value);u||C()}async function V(u){const{error:r}=await Ne(u);r||W()}async function M(u){const r=await he(u.id);p.value=r.data||null}return(u,r)=>{const F=G,j=be,K=se;return R(),re("div",Le,[a(De,{model:e(s),"onUpdate:model":r[0]||(r[0]=_=>D(s)?s.value=_:null),onReset:e(P),onSearch:e(f)},null,8,["model","onReset","onSearch"]),a(K,{title:e(t)("page.retryLog.title"),bordered:!1,size:"small",class:"sm:flex-1-hidden card-wrapper","header-class":"view-card-header"},{"header-extra":o(()=>[a(F,{columns:e(i),"onUpdate:columns":r[1]||(r[1]=_=>D(i)?i.value=_:null),"disabled-delete":e(N).length===0,loading:e(h),"show-add":!1,onDelete:O,onRefresh:e(f)},null,8,["columns","disabled-delete","loading","onRefresh"])]),default:o(()=>[a(j,{"checked-row-keys":e(N),"onUpdate:checkedRowKeys":r[2]||(r[2]=_=>D(N)?N.value=_:null),columns:e(k),data:e(c),"flex-height":!e(b).isMobile,"scroll-x":962,loading:e(h),remote:"","row-key":_=>_.id,pagination:e(l),class:"sm:h-full"},null,8,["checked-row-keys","columns","data","flex-height","loading","row-key","pagination"])]),_:1},8,["title"]),a(Se,{visible:e(n),"onUpdate:visible":r[3]||(r[3]=_=>D(n)?n.value=_:null),"row-data":p.value},null,8,["visible","row-data"])])}}});export{Ve as default};
