import"./modulepreload-polyfill-3cfb730f.js";function n(t){return document.querySelector(t)}const e=n("#password"),i=n("#copy-password-btn"),l=n("#generate-password-btn"),h=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],g=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],u=["0","1","2","3","4","5","6","7","8","9"],w=["!","@","#","$","%","^","&","*","(",")","_","-","=","+","[","]","{","}","\\","|","<",",",">",".","?","/",'"',"'",";",":"],f=[{length:26,options:h},{length:26,options:g},{length:10,options:u},{length:30,options:w}];l.addEventListener("click",m);function m(){const t=y();e.value=t}function y(){let t="";for(let o=0;o<16;++o){const a=Math.floor(Math.random()*4),s=f[a],r=s.length,c=s.options,p=Math.floor(Math.random()*r),d=c[p];t=t.concat(d)}return t}i.addEventListener("click",C);function C(){navigator.clipboard.writeText(e.value)}