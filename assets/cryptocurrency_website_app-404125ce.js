import"./modulepreload-polyfill-3cfb730f.js";const c=document.querySelector("#bitcoin"),r=document.querySelector("#ethereum"),s=document.querySelector("#dogecoin");fetch("https://api.coincap.io/v2/assets").then(t=>t.json()).then(t=>{const n=t.data.filter(e=>e.name==="Bitcoin")[0].priceUsd.toString().substring(0,8),o=t.data.filter(e=>e.name==="Ethereum")[0].priceUsd.toString().substring(0,8),i=t.data.filter(e=>e.name==="Dogecoin")[0].priceUsd.toString().substring(0,8);c.textContent=n,r.textContent=o,s.textContent=i});
