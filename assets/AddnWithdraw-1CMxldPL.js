import{r,u as M,a as Q,s as A,x as q,y as E,c as l,b as e,h as I,i as n,n as P,f as b,v as x,k as y,p as h,t as W,o as a,m as $}from"./index-eDpET8fp.js";import{u as H}from"./transactionStore-DhAyZg49.js";import{l as N,F as U}from"./index.es-v14MyhAr.js";import{b as Y,c as L,d as G,e as J}from"./index-Dj4gJ788.js";import"./mainStore-DS-nKbPa.js";const K="/images/QRcode.jpeg",O={class:"flex flex-col min-h-screen bg-gray-100"},X={class:"flex border-b border-gray-200 bg-white"},Z={key:0,class:"p-4 flex flex-col gap-6"},ee={class:"bg-white rounded-lg p-4 shadow-sm"},te={class:"mb-4"},se={class:"bg-white rounded-lg p-4 shadow-sm flex flex-col items-center"},oe={class:"bg-gray-100 p-3 rounded-lg w-84 h-84 mb-3 flex items-center justify-center relative"},le={class:"w-full mb-4"},ae={class:"flex w-full"},ne=["disabled"],de={key:0,class:"flex items-center justify-center"},ie={key:1},re={key:1,class:"p-4 flex flex-col gap-4"},ue={class:"bg-white rounded-lg p-4 shadow-sm"},ce={class:"text-center mb-2"},me={class:"text-2xl font-bold text-green-600"},pe={key:0,class:"bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4"},fe={class:"flex items-center"},ge={class:"ml-3"},ve={class:"mt-2"},we={class:"mb-4"},be=["disabled"],xe={key:0,class:"flex items-center justify-center"},ye={key:1},he={key:1,class:"bg-white rounded-lg p-4 shadow-sm"},ke={class:"mb-4"},Ce=["max"],_e={class:"mb-4"},Ie={class:"flex items-center gap-2"},Ue=["disabled"],Ae={key:0,class:"flex items-center justify-center"},Pe={key:1},De=["disabled"],Fe={key:0,class:"flex items-center justify-center"},Re={key:1},Me={__name:"AddnWithdraw",setup(Ve){N.add(Y,L,G,J);const u=r("deposit"),D=$(),o=M(),k=r(null),C=r(!1),c=H(),m=Q(),{user:w}=A(m),{fundAction:F}=A(c);q(()=>{F.value==="withdraw"&&(u.value="withdraw")});const g=r(""),i=r(""),p=r(w.value.upi_id||""),f=r(""),v=r(!1),_=E(()=>w.value.funds||0),R=async()=>{if(g.value>0){const s=await c.addFunds(g.value);s.success?o.success(s.message):o.error(s.message),g.value=""}else o.error("Please enter an amount")},V=async()=>{if(i.value>50&&i.value<=_.value){const s=await c.withdrawFunds(i.value);s.success?o.success(s.message):o.error(s.message),i.value=""}else o.error("Please enter a valid amount")},B=async()=>{if(f.value.trim()){const s=await m.updateUpiId(f.value);s.success?(o.success(s.message),p.value=f.value):o.error(s.message),f.value=""}else o.error("Please enter a valid UPI ID")},z=async()=>{if(p.value.trim()){const s=await m.updateUpiId(p.value);s.success?o.success(s.message):o.error(s.message),v.value=!1}else o.error("Please enter a valid UPI ID")},S=()=>{D.back()},T=()=>{if(k.value){const s=document.createElement("a");s.download="payment_qr_code.jpeg",s.href=k.value.src,document.body.appendChild(s),s.click(),document.body.removeChild(s),o.success("QR Code downloaded successfully")}else o.error("Could not download QR Code")},j=()=>{navigator.clipboard.writeText("dprasadpandey0@okhdfcbank").then(()=>{C.value=!0,o.success("UPI ID copied to clipboard"),setTimeout(()=>{C.value=!1},2e3)}).catch(()=>{o.error("Failed to copy UPI ID")})};return(s,t)=>(a(),l("div",O,[e("div",{onClick:t[0]||(t[0]=d=>S()),class:"bg-orange-500 text-white p-3 flex items-center"},[I(n(U),{icon:"arrow-left",class:"mr-2"}),t[8]||(t[8]=e("span",{class:"font-medium"},"Fund Management",-1))]),e("div",X,[e("button",{onClick:t[1]||(t[1]=d=>u.value="deposit"),class:P(["flex-1 py-3 text-center font-medium",u.value==="deposit"?"text-orange-500 border-b-2 border-orange-500":"text-gray-500"])}," Add Fund ",2),e("button",{onClick:t[2]||(t[2]=d=>u.value="withdraw"),class:P(["flex-1 py-3 text-center font-medium",u.value==="withdraw"?"text-orange-500 border-b-2 border-orange-500":"text-gray-500"])}," Withdraw Fund ",2)]),u.value==="deposit"?(a(),l("div",Z,[e("div",ee,[t[10]||(t[10]=e("div",{class:"text-lg font-medium mb-2"},"Add Funds to Your Account",-1)),e("div",te,[t[9]||(t[9]=e("label",{class:"block text-gray-700 text-sm font-medium mb-2",for:"payment-amount"}," Payment Amount (₹) ",-1)),b(e("input",{type:"number",id:"payment-amount","onUpdate:modelValue":t[3]||(t[3]=d=>g.value=d),class:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500",placeholder:"Enter amount"},null,512),[[x,g.value]])])]),e("div",se,[t[14]||(t[14]=e("div",{class:"font-medium text-center mb-3"},"Scan QR Code to Make Payment",-1)),e("div",oe,[e("img",{ref_key:"qrCodeImg",ref:k,class:"w-3/4",src:K,alt:"QR code"},null,512),e("button",{onClick:T,class:"absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-md",title:"Download QR Code"},[I(n(U),{icon:"download",class:"text-gray-700"})])]),e("div",le,[t[12]||(t[12]=e("div",{class:"text-sm font-medium text-gray-700 mb-1"},"UPI ID:",-1)),e("div",ae,[t[11]||(t[11]=e("div",{class:"flex-1 bg-gray-100 p-2 rounded-l-md truncate"}," dprasadpandey0@okhdfcbank ",-1)),e("button",{onClick:j,class:"bg-blue-500 text-white px-3 rounded-r-md flex items-center justify-center"},[I(n(U),{icon:C.value?"check":"copy",class:"text-white"},null,8,["icon"])])])]),t[15]||(t[15]=e("p",{class:"text-center text-gray-700 text-sm mb-4"}," Scan this QR to make payment and submit done button and your fund will be reflected in your account within 3 hours ",-1)),e("button",{class:"bg-green-500 text-white py-2 px-6 rounded-lg font-medium w-full",onClick:R,disabled:n(c).loading},[n(c).loading?(a(),l("div",de,t[13]||(t[13]=[e("svg",{class:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),y(" Requesting Add Funds ")]))):(a(),l("span",ie,"Done"))],8,ne)])])):h("",!0),u.value==="withdraw"?(a(),l("div",re,[e("div",ue,[e("div",ce,[t[16]||(t[16]=e("div",{class:"text-gray-600 text-sm"},"Your Available Balance",-1)),e("div",me,"₹ "+W(n(w).funds),1)])]),n(w).upi_id?(a(),l("div",he,[t[24]||(t[24]=e("div",{class:"text-lg font-medium mb-4"},"Withdraw Funds",-1)),e("div",ke,[t[20]||(t[20]=e("label",{class:"block text-gray-700 text-sm font-medium mb-2",for:"withdraw-amount"}," Withdrawal Amount (₹) ",-1)),b(e("input",{type:"number",id:"withdraw-amount","onUpdate:modelValue":t[5]||(t[5]=d=>i.value=d),class:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500",placeholder:"Enter amount to withdraw",max:_.value},null,8,Ce),[[x,i.value]])]),e("div",_e,[t[22]||(t[22]=e("label",{class:"block text-gray-700 text-sm font-medium mb-2",for:"account-number"}," Account ID: ",-1)),e("div",Ie,[b(e("input",{type:"text",id:"account-number","onUpdate:modelValue":t[6]||(t[6]=d=>p.value=d),class:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500",disabled:!v.value},null,8,Ue),[[x,p.value]]),v.value?h("",!0):(a(),l("button",{key:0,class:"text-blue-500 underline",onClick:t[7]||(t[7]=d=>v.value=!0)}," Edit ")),v.value?(a(),l("button",{key:1,class:"bg-green-500 text-white px-4 py-1 rounded",onClick:z},[n(m).loading?(a(),l("div",Ae,t[21]||(t[21]=[e("svg",{class:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),y(" Saving... ")]))):(a(),l("span",Pe,"Save"))])):h("",!0)])]),e("button",{class:"bg-orange-500 text-white py-2 px-6 rounded-lg font-medium w-full disabled:bg-gray-400 disabled:cursor-not-allowed",onClick:V,disabled:i.value<50||i.value>_.value||!p.value||n(c).loading},[n(c).loading?(a(),l("div",Fe,t[23]||(t[23]=[e("svg",{class:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),y(" Requesting Withdrawal... ")]))):(a(),l("span",Re,"Request Withdrawal"))],8,De)])):(a(),l("div",pe,[e("div",fe,[e("div",ge,[t[19]||(t[19]=e("p",{class:"text-yellow-700 font-medium"}," Please add your UPI ID to enable withdrawals ",-1)),e("div",ve,[e("div",we,[t[17]||(t[17]=e("label",{class:"block text-gray-700 text-sm font-medium mb-2",for:"upi-id"}," UPI ID ",-1)),b(e("input",{type:"text",id:"upi-id","onUpdate:modelValue":t[4]||(t[4]=d=>f.value=d),class:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500",placeholder:"Enter your UPI ID"},null,512),[[x,f.value]])]),e("button",{class:"bg-orange-500 text-white py-2 px-6 rounded-lg font-medium w-full",onClick:B,disabled:n(m).loading},[n(m).loading?(a(),l("div",xe,t[18]||(t[18]=[e("svg",{class:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),y(" Updating UPI ID... ")]))):(a(),l("span",ye,"Update UPI ID"))],8,be)])])])]))])):h("",!0)]))}};export{Me as default};
