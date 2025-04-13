import{u as y}from"./adminStore-BPoAEVIm.js";import{_ as w,s as z,u as A,r as k,x as N,c as a,b as s,i as d,F as m,d as p,t as n,o}from"./index-B7xBi81X.js";const S={class:"admin-leaderboard-container"},T={key:0,class:"leaderboard-list-section"},q={key:0,class:"loading-indicator"},x={key:1,class:"empty-state"},B={key:2,class:"leaderboard-grid"},D=["onClick"],Q={class:"quiz-title"},R={class:"card-meta"},$={class:"top-rank-value"},C={key:1,class:"leaderboard-detail-section"},F={class:"section-header"},M={key:0,class:"loading-indicator"},V={key:1,class:"empty-state"},E={key:2,class:"leaderboard-table-container"},j={class:"leaderboard-table"},G={class:"rank-cell"},H={__name:"AdminLeaderboard",setup(J){const i=y(),{leaderboards:r,currentLeaderboard:u}=z(i),_=A(),c=k(null),b=k(""),h=async()=>{const l=await i.listAdminLeaderboards();l.success||_.error(l.message)},f=async l=>{c.value=l;const e=r.value.find(v=>v.quiz_id===l);b.value=e?e.title:"Quiz Leaderboard";const t=await i.showAdminLeaderboard({quiz_id:l});t.success||_.error(t.message)},g=()=>{c.value=null,u.value=[],b.value=""},L=l=>{if(!l)return"0s";const e=Math.floor(l/60),t=l%60;return e>0?`${e}m ${t}s`:`${t}s`};return N(()=>{h()}),(l,e)=>(o(),a("div",S,[e[8]||(e[8]=s("h2",{class:"page-title"},"Quiz Leaderboards",-1)),c.value?(o(),a("div",C,[s("div",F,[s("button",{class:"back-btn",onClick:g}," ← Back to List "),s("h3",null,n(b.value),1)]),d(i).loading?(o(),a("div",M,e[5]||(e[5]=[s("p",null,"Loading leaderboard details...",-1)]))):d(u).length===0?(o(),a("div",V,e[6]||(e[6]=[s("p",null,"No participants in this leaderboard yet.",-1)]))):(o(),a("div",E,[s("table",j,[e[7]||(e[7]=s("thead",null,[s("tr",null,[s("th",null,"Rank"),s("th",null,"Name"),s("th",null,"Score"),s("th",null,"Duration"),s("th",null,"Reward")])],-1)),s("tbody",null,[(o(!0),a(m,null,p(d(u),t=>(o(),a("tr",{key:t.rank},[s("td",G,n(t.rank),1),s("td",null,n(t.name),1),s("td",null,n(t.score),1),s("td",null,n(L(t.duration)),1),s("td",null,n(t.reward||"None"),1)]))),128))])])]))])):(o(),a("div",T,[e[4]||(e[4]=s("div",{class:"section-header"},[s("h3",null,"Available Leaderboards")],-1)),d(i).loading?(o(),a("div",q,e[0]||(e[0]=[s("p",null,"Loading leaderboards...",-1)]))):d(r).length===0?(o(),a("div",x,e[1]||(e[1]=[s("p",null,"No leaderboards available.",-1)]))):(o(),a("div",B,[(o(!0),a(m,null,p(d(r),t=>(o(),a("div",{key:t.quiz_id,class:"leaderboard-card",onClick:v=>f(t.quiz_id)},[s("h4",Q,n(t.title),1),s("div",R,[e[2]||(e[2]=s("span",{class:"top-rank-label"},"Top Rank",-1)),s("span",$,n(t.top_rank),1)]),e[3]||(e[3]=s("button",{class:"view-btn"},"View Details",-1))],8,D))),128))]))]))]))}},P=w(H,[["__scopeId","data-v-a93d657b"]]);export{P as default};
