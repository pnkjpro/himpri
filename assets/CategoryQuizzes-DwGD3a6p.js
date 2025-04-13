import{_ as y,u as h,s as k,y as w,r as C,x as I,E as L,c as n,b as t,h as c,i as r,p as z,F as T,d as D,o as a,t as i,k as E,m as N}from"./index-Bjie691a.js";import{F as d}from"./index.es-BWiw-wQ-.js";import{u as V}from"./mainStore-Bf8H3LFE.js";import{f as j,a as B}from"./fromUnixTime-BXOQ5KsG.js";const F={class:"flex flex-col min-h-screen bg-gray-100"},M={class:"p-4"},S={key:0,class:"flex flex-col items-center justify-center py-8"},$={key:1,class:"flex flex-col items-center justify-center py-12"},A={class:"space-y-4"},R=["onClick"],U={class:"w-1/4 flex-shrink-0"},P=["src","alt"],Q={class:"w-3/4 pl-4 flex flex-col justify-between"},q={class:"text-center mb-2"},G={class:"bg-purple-50 text-purple-700 px-6 py-1 rounded-full inline-block"},Z={class:"mb-2"},H={class:"text-md font-bold text-gray-700 truncate"},J={class:"mb-2"},K={key:0,class:"text-red-500 font-bold flex items-center"},O={key:1,class:"text-blue-500 font-medium"},W={class:"flex items-center"},X={class:"text-gray-600"},Y={__name:"CategoryQuizzes",setup(ee){const m=N();h();const l=V(),{catContests:_}=k(l),x=async s=>{await l.fetchCurrentContest(s),m.push("/quiz/variants")},g=()=>{m.back()},u=w(()=>{const s=Math.floor(Date.now()/1e3);return _.value.filter(e=>e.end_time>s)}),v=s=>{let e="/images/fallbackImage.png";return s&&(e=`https://api.himpri.com/storage/${s}`),e},f=C(new Date);I(()=>{const s=setInterval(()=>{f.value=new Date},6e4);L(()=>{clearInterval(s)})});function p(s){const e=typeof s=="number"?j(s):new Date(s);return f.value>=e?{isLive:!0,text:"LIVE"}:{isLive:!1,text:B(e)+" left"}}return(s,e)=>(a(),n("div",F,[t("div",{onClick:e[0]||(e[0]=o=>g()),class:"bg-orange-500 text-white p-3 flex items-center"},[c(r(d),{icon:"arrow-left",class:"mr-2"}),e[1]||(e[1]=t("span",{class:"font-medium"},"Upcoming Contests",-1))]),t("div",M,[r(l).loading?(a(),n("div",S,e[2]||(e[2]=[t("div",{class:"w-12 h-12 border-4 border-orange-300 border-t-orange-500 rounded-full animate-spin mb-4"},null,-1),t("p",{class:"text-gray-600"},"Loading contests...",-1)]))):u.value.length===0?(a(),n("div",$,[c(r(d),{icon:"calendar-times",class:"text-gray-400 text-5xl mb-4"}),e[3]||(e[3]=t("h3",{class:"text-lg font-medium text-gray-600 mb-2"},"No Active Contests",-1)),e[4]||(e[4]=t("p",{class:"text-gray-500 text-center"},"There are no upcoming contests at this time. Please check back later!",-1))])):z("",!0),t("div",A,[(a(!0),n(T,null,D(u.value,(o,b)=>(a(),n("div",{key:b,class:"bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200"},[t("div",{onClick:te=>x(o.node_id),class:"flex p-4"},[t("div",U,[t("img",{src:v(o.banner_image),alt:o.title,class:"w-full h-full object-cover rounded-lg"},null,8,P)]),t("div",Q,[t("div",q,[t("span",G,i(o.category.name),1)]),t("div",Z,[t("h3",H,i(o.title),1)]),t("div",J,[p(o.start_time).isLive?(a(),n("p",K,e[5]||(e[5]=[t("span",{class:"inline-block h-2 w-2 rounded-full bg-red-500 mr-2"},null,-1),E(" LIVE ")]))):(a(),n("p",O,i(p(o.start_time).text),1))]),t("div",W,[e[6]||(e[6]=t("span",{class:"text-orange-400 font-bold mr-2"},"MEGA PRIZE",-1)),c(r(d),{icon:"trophy",class:"text-gray-600 mx-2"}),t("span",X,"Prize ₹ "+i(o.prize_money),1)])])],8,R)]))),128))])])]))}},re=y(Y,[["__scopeId","data-v-59b9b5da"]]);export{re as default};
