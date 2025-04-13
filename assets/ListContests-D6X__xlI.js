import{_ as w,u as y,s as k,x as u,y as C,r as L,B as I,c as n,b as t,h as l,i as c,k as _,F as D,d as T,o as a,t as i,m as V}from"./index-B7xBi81X.js";import{F as d}from"./index.es-DbqKriQQ.js";import{u as B}from"./mainStore-DQohqPse.js";import{f as E,a as F}from"./fromUnixTime-BrNBFJ5H.js";import"./differenceInSeconds-DnHR6_Gw.js";const M={class:"flex flex-col min-h-screen bg-gray-100"},N={class:"p-4"},S={class:"flex justify-between items-center mb-4"},$={href:"#",class:"flex items-center text-gray-700"},j={class:"space-y-4"},z=["onClick"],A={class:"w-1/4 flex-shrink-0"},R=["src","alt"],U={class:"w-3/4 pl-4 flex flex-col justify-between"},q={class:"text-center mb-2"},G={class:"bg-purple-50 text-purple-700 px-6 py-1 rounded-full inline-block"},P={class:"mb-2"},Z={class:"text-md font-bold text-gray-700 truncate"},H={class:"mb-2"},J={key:0,class:"text-red-500 font-bold flex items-center"},K={key:1,class:"text-blue-500 font-medium"},O={class:"flex items-center"},Q={class:"text-gray-600"},W={__name:"ListContests",setup(X){const p=V();y();const r=B(),{contests:x}=k(r),v=async s=>{await r.fetchCurrentContest(s),p.push("/quiz/variants")};u(()=>{r.fetchContests(),r.fetchCategories()});const g=C(()=>{const s=Math.floor(Date.now()/1e3);return x.value.filter(e=>e.end_time>s)}),h=s=>{let e="/images/fallbackImage.png";return s&&(e=`http://dreamwin.local:8000/storage/${s}`),e},m=L(new Date);u(()=>{const s=setInterval(()=>{m.value=new Date},6e4);I(()=>{clearInterval(s)})});function f(s){const e=typeof s=="number"?E(s):new Date(s);return m.value>=e?{isLive:!0,text:"LIVE"}:{isLive:!1,text:F(e)+" left"}}return(s,e)=>(a(),n("div",M,[t("div",{onClick:e[0]||(e[0]=o=>s.navigateToBack()),class:"bg-orange-500 text-white p-3 flex items-center"},[l(c(d),{icon:"arrow-left",class:"mr-2"}),e[1]||(e[1]=t("span",{class:"font-medium"},"Fund Management",-1))]),t("div",N,[t("div",S,[e[3]||(e[3]=t("h2",{class:"text-2xl font-bold text-gray-700"},"Upcoming Contest",-1)),t("a",$,[e[2]||(e[2]=_(" View All ")),l(c(d),{icon:"arrow-right",class:"ml-2"})])]),t("div",j,[(a(!0),n(D,null,T(g.value,(o,b)=>(a(),n("div",{key:b,class:"bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200"},[t("div",{onClick:Y=>v(o.node_id),class:"flex p-4"},[t("div",A,[t("img",{src:h(o.banner_image),alt:o.title,class:"w-full h-full object-cover rounded-lg"},null,8,R)]),t("div",U,[t("div",q,[t("span",G,i(o.category.name),1)]),t("div",P,[t("h3",Z,i(o.title),1)]),t("div",H,[f(o.start_time).isLive?(a(),n("p",J,e[4]||(e[4]=[t("span",{class:"inline-block h-2 w-2 rounded-full bg-red-500 mr-2"},null,-1),_(" LIVE ")]))):(a(),n("p",K,i(f(o.start_time).text),1))]),t("div",O,[e[5]||(e[5]=t("span",{class:"text-orange-400 font-bold mr-2"},"MEGA PRIZE",-1)),l(c(d),{icon:"trophy",class:"text-gray-600 mx-2"}),t("span",Q,"Prize ₹ "+i(o.prize_money),1)])])],8,z)]))),128))])])]))}},ae=w(W,[["__scopeId","data-v-493603db"]]);export{ae as default};
