import{_ as y,o as n,c as r,a as v,u as _,b as m,d as b,e as s,f as i,t as k,g as f,h as g,i as C,F as T,r as h,n as S}from"./main-wXTD6pUA.js";import{T as w}from"./TokenDetails-ym_D9Dzh.js";import{u as N}from"./products-qsqL2rgn.js";const x={},M={class:"loading"};function q(e,a){return n(),r("div",M,a[0]||(a[0]=[v('<svg height="100" stroke="#fff" viewBox="0 0 44 44" width="100" xmlns="http://www.w3.org/2000/svg" data-v-29e603dc><g fill="none" fill-rule="evenodd" stroke-width="2" data-v-29e603dc><circle cx="22" cy="22" r="1" data-v-29e603dc><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20" data-v-29e603dc></animate><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0" data-v-29e603dc></animate></circle><circle cx="22" cy="22" r="1" data-v-29e603dc><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20" data-v-29e603dc></animate><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0" data-v-29e603dc></animate></circle></g></svg>',1)]))}const B=y(x,[["render",q],["__scopeId","data-v-29e603dc"]]);function $(){const e=_(),a=N();e.changed&&e.load(a.active).then();const o=m(()=>e.q.length>0?`Search results for: <strong>${e.q}</strong>`:""),l=m(()=>({"with-q":e.q!==""}));function p(t){return e.setQ(""),t}const c=m(()=>e.items),d=m(()=>e.loading);return{qSummary:o,containerClass:l,items:c,loading:d,onClear:p}}const H={class:"container"},L={key:0,class:"summary"},V=["innerHTML"],P={key:2,class:"empty"},D=b({__name:"HomePage",setup(e){const{loading:a,items:o,qSummary:l,containerClass:p,onClear:c}=$();return(d,t)=>(n(),r("section",H,[s(l)?(n(),r("p",L,[i("span",{innerHTML:s(l)},null,8,V),i("button",{class:"btn-link",type:"button",onClick:t[0]||(t[0]=(...u)=>s(c)&&s(c)(...u))},k(d.$t("clear_filter")),1)])):f("",!0),s(a)?(n(),g(B,{key:1})):s(o)&&s(o).length===0?(n(),r("p",P,[t[1]||(t[1]=i("em",null,"🥹",-1)),t[2]||(t[2]=i("br",null,null,-1)),t[3]||(t[3]=i("br",null,null,-1)),C(" "+k(d.$t("no_result")),1)])):f("",!0),i("div",{class:S([s(p),"tokens"])},[(n(!0),r(T,null,h(s(o),u=>(n(),g(w,{key:u.key,item:u,class:"item"},null,8,["item"]))),128))],2)]))}}),E=y(D,[["__scopeId","data-v-ce50de00"]]);export{E as default};