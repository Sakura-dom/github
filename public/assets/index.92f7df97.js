var v=Object.defineProperty;var i=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var u=(n,t,s)=>t in n?v(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,d=(n,t)=>{for(var s in t||(t={}))w.call(t,s)&&u(n,s,t[s]);if(i)for(var s of i(t))x.call(t,s)&&u(n,s,t[s]);return n};import{d as y,u as I,r as U,v as B,c as g,o as S,q as C,j as p,i as L,f as _}from"./vendor.f0b6f500.js";const R=_("span",{class:"iconfont icon-tupian"},null,-1),j=_("div",{class:"el-upload__tip"},null,-1),E=y({setup(n){I();let t=localStorage.getItem("user");const s=U(JSON.parse(t)),m=e=>new Promise((a,o)=>{console.log(e.size),e.size/1024/1024<2||(console.log("\u5927\u4E8E2MB"),o());let l=new Image,r="";l.src=URL.createObjectURL(e),l.onload=()=>{r=h(l,e),a(r)},l.onerror=()=>{o()}}),h=(e,a)=>{let o=document.createElement("canvas"),c=o.getContext("2d");e.src.length;let{width:l}=e,{height:r}=e;o.width=l,o.height=r,c.fillRect(0,0,o.width,o.height),c.drawImage(e,0,0,l,r);let f=o.toDataURL(a.type||"image/jpeg",.1);return b(f)},b=e=>{let a;e.split(",")[0].indexOf("base64")>=0?a=atob(e.split(",")[1]):a=unescape(e.split(",")[1]);let o=e.split(",")[0].split(":")[1].split(";")[0],c=new Uint8Array(a.length);for(let l=0;l<a.length;l+=1)c[l]=a.charCodeAt(l);return new Blob([c],{type:o})};return B(()=>{console.log(JSON.parse(t))}),(e,a)=>{const o=g("el-button"),c=g("el-upload");return S(),C(c,{class:"upload-demo",action:"http://localhost:7777/uploadHeadImg",accept:".jpg,.png,.webp,.tif,.gif,.jpeg,.tga,.fpx,.svg","before-upload":m,data:d({},s.value)},{tip:p(()=>[j]),default:p(()=>[L(o,{type:"primary"},{default:p(()=>[R]),_:1})]),_:1},8,["accept","data"])}}});export{E as default};