import{H as v,r as u,I as c}from"./index-eDpET8fp.js";const M=v("admin",()=>{const n=u(!1);u(null);const t=u([]);async function d(r){var a,e;try{n.value=!0;const s=await c.post("/admin/category/create",r);return{success:s.data.success,message:s.data.message}}catch(s){return console.error("Error using Lifeline:",s),{success:!1,message:((e=(a=s.response)==null?void 0:a.data)==null?void 0:e.message)||"An unexpected error occurred"}}finally{n.value=!1}}async function g(r){var a,e;try{n.value=!0;const s=await c.post("/admin/quiz/create",r);return n.value=!0,{success:s.data.success,message:s.data.message}}catch(s){return n.value=!0,console.error("Error using Lifeline:",s),{success:!1,message:((e=(a=s.response)==null?void 0:a.data)==null?void 0:e.message)||"An unexpected error occurred"}}}async function p(){var r,a;try{n.value=!0;const e=await c.get("/admin/transaction/list/all");return t.value=[...e.data.data],console.log(t.value),{success:e.data.success,message:e.data.message}}catch(e){return console.error("Error using Lifeline:",e),{success:!1,message:((a=(r=e.response)==null?void 0:r.data)==null?void 0:a.message)||"An unexpected error occurred"}}finally{n.value=!1}}async function f(r,a){var e,s;try{console.log(r),n.value=!0;const o=await c.post("/admin/transaction/approval",{uid:r.user_id,approval_id:r.id,change_approval:a});if(o.data.success){const i={...r,approved_status:a},l=t.value.findIndex(m=>m.id===r.id);l!==-1&&(t.value[l]=i)}return{success:o.data.success,message:o.data.message}}catch(o){return console.error("Error using Lifeline:",o),{success:!1,message:((s=(e=o.response)==null?void 0:e.data)==null?void 0:s.message)||"An unexpected error occurred"}}finally{n.value=!1}}return{createCategory:d,createQuiz:g,fetchTransactions:p,statusApproval:f,allTransactions:t,loading:n}});export{M as u};
