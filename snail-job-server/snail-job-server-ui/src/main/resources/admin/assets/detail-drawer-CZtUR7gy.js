import{d as V,Z as h,a0 as L,cT as M,L as W,p as $,r as C,a as D,aq as N,n as B,o as d,c as u,w as i,f as E,cU as U,cu as f,g as T,t as q,h as z,b as A,aj as j,db as F,dc as I,cP as P,cQ as Q,l as Z}from"./index-Dlhm-fK8.js";const G=V({name:"DetailDrawer",__name:"detail-drawer",props:h({title:{},width:{}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:h(["update:modelValue","update:show","afterLeave"],["update:modelValue"]),setup(p,{emit:v}){const t=p,r=v,m=L(p,"modelValue"),x=M(),_=W(),a=$({width:0}),n=C(!1),y=D(()=>{if(t.width)return n.value?t.width[1]:t.width[0];const e=360,o=600;if(_.isMobile)return a.width*.9>=e?`${e}px`:"90%";let s=a.width*.3>=e?`${e}px`:"30%";s=a.width<=420?"90%":s;let l=a.width*.5>=o?`${o}px`:"50%";return l=a.width<=420?"90%":l,n.value?l:s}),c=()=>{a.width=document.documentElement.clientWidth};N(()=>{c(),window.addEventListener("resize",c)}),B(()=>{window.removeEventListener("resize",c)});const g=e=>{r("update:modelValue",e),r("update:show",e)},k=()=>{r("afterLeave")};return(e,o)=>{const s=F,l=I,b=P,S=Q;return d(),u(S,{show:m.value,"onUpdate:show":[o[1]||(o[1]=w=>m.value=w),g],"display-directive":"if",width:y.value,onAfterLeave:k},{default:i(()=>[E(b,{title:t.title,"native-scrollbar":!1,closable:"","header-class":"operate-dawer-header"},U({header:i(()=>[T(q(t.title)+" ",1),!z(_).isMobile&&(!t.width||t.width&&t.width[0]!==t.width[1])?(d(),A("div",{key:0,quaternary:"",class:"fullscreen text-18px color-#6a6a6a",onClick:o[0]||(o[0]=w=>n.value=!n.value)},[n.value?(d(),u(s,{key:0})):(d(),u(l,{key:1}))])):j("",!0)]),default:i(()=>[f(e.$slots,"default",{},void 0,!0)]),_:2},[x.footer?{name:"footer",fn:i(()=>[f(e.$slots,"footer",{},void 0,!0)]),key:"0"}:void 0]),1032,["title"])]),_:3},8,["show","width"])}}}),J=Z(G,[["__scopeId","data-v-ef3922d0"]]);export{J as _};