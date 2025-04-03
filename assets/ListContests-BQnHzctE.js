import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{c as i,b as e,F as n,d as c,o,z as p,t as a}from"./index-Bx--kkJH.js";const m={data(){return{selectedCategory:"all",categories:[{id:"all",name:"All Categories"},{id:"sports",name:"Sports & Games"},{id:"politics",name:"Politics"},{id:"current",name:"Current Affairs"},{id:"science",name:"Science"},{id:"history",name:"History & Culture"},{id:"food",name:"Food & Beverage"},{id:"art",name:"Art & Creativity"},{id:"geography",name:"World Geography"}],contests:[{id:1,title:"SPORT QUIZ",category:"Sports & Games",date:"Mon 11:00 Am",prize:"10 Lakh",image:"/api/placeholder/400/320"},{id:2,title:"INT. POLITICS",category:"Politics",date:"Sun 11:00 Am",prize:"5 Lakh",image:"/api/placeholder/400/320"},{id:3,title:"CURRENT AFFAIR",category:"Current Affairs",date:"Mon 11:00 Am",prize:"10 Lakh",image:"/api/placeholder/400/320"},{id:4,title:"HOME SCIENCE",category:"Science",date:"Mon 11:00 Am",prize:"10 Lakh",image:"/api/placeholder/400/320"},{id:5,title:"WORLD TRIVIA",category:"World Geography",date:"Tue 3:00 Pm",prize:"7 Lakh",image:"/api/placeholder/400/320"},{id:6,title:"ANCIENT HISTORY",category:"History & Culture",date:"Wed 12:00 Pm",prize:"8 Lakh",image:"/api/placeholder/400/320"}]}},computed:{filteredContests(){return this.selectedCategory==="all"?this.contests:this.contests.filter(r=>r.category.toLowerCase().includes(this.selectedCategory.toLowerCase()))}},methods:{selectCategory(r){this.selectedCategory=r},goBack(){console.log("Going back to home page")}}},u={class:"bg-gray-100 min-h-screen"},h={class:"bg-white sticky top-0 z-50 border-b border-gray-200"},y={class:"flex justify-between items-center p-4"},f={class:"bg-white border-b border-gray-200"},x={class:"p-4 overflow-x-auto"},C={class:"flex gap-3"},_=["onClick"],b={class:"p-4"},k={class:"p-4"},v={class:"mb-2"},w={class:"bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full"},A={class:"flex"},L=["src"],z={class:"flex-1"},I={class:"text-lg font-bold text-gray-800"},S={class:"flex items-center text-red-500 mt-1"},R={class:"flex items-center text-gray-600 mt-1"};function T(r,t,B,N,d,l){return o(),i("div",u,[e("header",h,[e("div",y,[e("button",{class:"text-2xl",onClick:t[0]||(t[0]=(...s)=>l.goBack&&l.goBack(...s))},t[1]||(t[1]=[e("span",{class:"inline-block transform rotate-180"},"→",-1)])),t[2]||(t[2]=e("h1",{class:"text-xl font-semibold"},"All Upcoming Contests",-1)),t[3]||(t[3]=e("button",{class:"text-xl"},[e("span",{class:"inline-block"},"⚙️")],-1))])]),e("div",f,[e("div",x,[e("div",C,[(o(!0),i(n,null,c(d.categories,s=>(o(),i("button",{key:s.id,class:p(["px-4 py-2 rounded-full text-sm whitespace-nowrap",d.selectedCategory===s.id?"bg-indigo-600 text-white":"bg-gray-100 text-gray-700"]),onClick:P=>l.selectCategory(s.id)},a(s.name),11,_))),128))])])]),e("div",b,[(o(!0),i(n,null,c(l.filteredContests,s=>(o(),i("div",{key:s.id,class:"bg-white rounded-xl shadow mb-4 overflow-hidden"},[e("div",k,[e("div",v,[e("span",w,a(s.category),1)]),e("div",A,[e("img",{src:s.image,alt:"Contest image",class:"w-20 h-20 rounded-lg object-cover mr-3"},null,8,L),e("div",z,[e("h3",I,a(s.title),1),e("div",S,[t[4]||(t[4]=e("span",{class:"mr-1"},"📅",-1)),e("span",null,a(s.date),1)]),e("div",R,[t[5]||(t[5]=e("span",{class:"mr-1"},"🏆",-1)),e("span",null,"Prize ₹ "+a(s.prize),1)])])])]),t[6]||(t[6]=e("div",{class:"bg-orange-500 p-3 text-center text-white font-medium"}," Register Now ",-1))]))),128))])])}const G=g(m,[["render",T]]);export{G as default};
