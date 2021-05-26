const fetch = require("node-fetch");
// fetch("https://randomuser.me/api").then((response)=>response.json()).then((data)=>console.log(data));

fetch('https://randomuser.me/api').then(r=>r.json()).then(d=>console.log(d)).catch((e)=>console.log(e));
// const get= async()=>{
//     const f= await fetch("https://randomuser.me/api");
//     const data=await f.json();
//     console.log(data);
// }
// get();
