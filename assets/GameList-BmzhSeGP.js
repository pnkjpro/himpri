import{u as x}from"./mainStore-BGAOuCyK.js";import{s as _,c as r,b as s,h as m,i,t as l,F as b,d as v,o as a,m as h,A as y}from"./index-B9NHMJu8.js";import{l as w,F as f}from"./index.es-DK0C9BTO.js";import{b as k,k as z,l as j}from"./index-Dj4gJ788.js";const C={class:"flex flex-col min-h-screen bg-gray-100"},B={class:"p-4 flex justify-between items-center"},F={class:"text-2xl font-bold text-gray-700"},T={class:"px-4 mb-4"},$={class:"relative w-full h-48 overflow-hidden rounded-lg"},S=["src"],A={class:"px-4 space-y-4"},I={class:"bg-white rounded-lg shadow-sm p-4"},L=["onClick"],P={class:"flex items-center"},q={class:"font-bold"},E={class:"text-right"},G={class:"bg-green-500 text-white px-3 py-1 rounded-lg"},N={class:"flex justify-between text-xs"},R={class:"text-gray-500"},V={class:"flex justify-between text-xs mt-1"},U={__name:"GameList",setup(D){const d=h(),c=x(),{contest:n,prizeContents:M}=_(c),p=o=>{let t="/images/fallbackImage.png";return o&&(t=`https://api.himpri.com/storage/${o}`),t};y("config");const u=o=>{console.log("gamelist variantId",o),c.getPrizeContents(o),d.push("/quiz/variant/details")},g=()=>{d.back()};return w.add(k,z,j),(o,t)=>(a(),r("div",C,[s("div",{onClick:t[0]||(t[0]=e=>g()),class:"bg-orange-500 text-white p-3 flex items-center"},[m(i(f),{icon:"arrow-left",class:"mr-2"})]),s("div",B,[s("h1",F,l(i(n).title),1)]),s("div",T,[s("div",$,[s("img",{src:p(i(n).banner_image),alt:"Sports athletes collage",class:"w-full h-full object-cover"},null,8,S)])]),t[6]||(t[6]=s("div",{class:"flex px-4 mb-4 border-b border-gray-200"},[s("div",{class:"pb-2 px-2 font-medium border-b-2 border-gray-800"},"Contest")],-1)),s("div",A,[(a(!0),r(b,null,v(i(n).quiz_variants,e=>(a(),r("div",I,[s("div",{onClick:H=>u(e.id),class:"flex justify-between mb-2"},[s("div",null,[t[1]||(t[1]=s("div",{class:"font-medium"},"Prize Pool",-1)),s("div",P,[m(i(f),{icon:"trophy",class:"mr-2 text-gray-700"}),s("span",q,"Prize ₹ "+l(e.prize),1)])]),s("div",E,[t[2]||(t[2]=s("div",{class:"text-gray-500 text-sm"},"Entry Fee",-1)),s("button",G," ₹ "+l(e.entry_fee),1)])],8,L),t[5]||(t[5]=s("div",{class:"h-1 w-full bg-red-500 mb-1"},null,-1)),s("div",N,[t[3]||(t[3]=s("div",{class:"text-red-500"},"5 spot left",-1)),s("div",R,"Total spot: "+l(e.slot_limit),1)]),s("div",V,[s("div",null,"1 st prize - ₹ "+l((e==null?void 0:e.prize_contents["1"])||"..."),1),t[4]||(t[4]=s("div",{class:"text-gray-500"},"Guaranteed",-1))])]))),256))])]))}};export{U as default};
