import{d as z,b as j,u as K,r as l,c as L,o as A,e as m,f as e,O as D,s as C,J as x,K as b,h,i as Q,j as q,t as y,E as G}from"./vendor.f0b6f500.js";import{Q as H,R as P}from"./index.3018f853.js";import{b as W}from"./alert.76c4b810.js";const X={class:"login"},Y={class:"content"},Z=e("img",{class:"logo",src:"https://s2.kaoshixing.com/static/account/images/login_reg/admin-login-bg.png?v=55e538df9f",alt:""},null,-1),ee=e("div",{class:"text"},[e("p",null,"\u6B22\u8FCE\u767B\u5F55"),e("p",null,"\u5728\u7EBF\u8003\u8BD5\u7CFB\u7EDF")],-1),ue=e("img",{class:"img",src:"https://s4.kaoshixing.com/static/base/images/ksx-logo-white-double.png?v=b6ada1e32e",alt:""},null,-1),se={class:"box"},le=e("h2",null,"\u4F01\u4E1A\u7BA1\u7406\u5458\u767B\u5F55",-1),ae={action:""},te={key:0,class:"iconfont icon-duihao4"},oe={key:0,class:"red"},ne=e("div",null,[e("span",{class:"iconfont icon-weixin2"}),e("span",null,"\u5FAE\u4FE1\u5FEB\u901F\u767B\u5F55")],-1),ie=e("span",{class:"iconfont icon-touxiang1"},null,-1),ve=e("span",null,"\u8D26\u53F7\u5BC6\u7801\u767B\u5F55",-1),ce=[ie,ve],Be=z({setup(de){const k=j(),w=K(),p=l(!1),v=l(!1),f=l(!1),c=l(!1),E=l("\u83B7\u53D6\u9A8C\u8BC1\u7801"),B=l(10),t=l(""),n=l(""),i=l(""),d=l(""),s=l(""),o=l(!1),g=l(!1),_=l(!1),F=()=>{G.alert(d.value,"\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",type:"warning"})},S=()=>{p.value=!0},V=()=>{t.value===""?(s.value="\u624B\u673A\u53F7\u4E0D\u80FD\u4E3A\u7A7A",o.value=!0,p.value=!1):/^1[3-8]\d{9}$/.test(t.value)?(o.value=!1,s.value=""):(s.value="\u8BF7\u586B\u5199\u6B63\u786E\u624B\u673A\u53F7",o.value=!0)},R=()=>{let u=/^1[3-8]\d{9}$/;c.value=u.test(t.value),_.value=u.test(t.value)},I=()=>{i.value===""?(f.value=!1,o.value=!0,s.value="\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"):/\w{5,12}$/.test(i.value)?(o.value=!1,s.value=""):(o.value=!0,s.value="\u5BC6\u7801\u4E3A5-12\u4F4D\u7684\u6570\u5B57\u5B57\u6BCD")},$=()=>{f.value=!0},N=()=>{v.value=!0},T=u=>{if(n.value===""&&(v.value=!1),n.value==="")v.value=!1,o.value=!0,s.value="\u9A8C\u8BC1\u7801\u4E0D\u80FD\u4E3A\u7A7A";else{let a=/^[0-9]{4}$/;console.log(a.test(n.value)),a.test(n.value)?(o.value=!1,s.value=""):(o.value=!0,s.value="\u9A8C\u8BC1\u7801\u4E3A4\u4F4D\u6570\u5B57")}},M=()=>{g.value=!g.value,s.value="",o.value=!1,t.value="",i.value="",n.value="",f.value=!1,v.value=!1,p.value=!1,_.value=!1,c.value=!1},U=async()=>{let u=await H({iphone:t.value});if(u.code!=="200")d.value=u.msg,F();else{let a=setInterval(()=>{B.value=--B.value,B.value>0?(E.value=`${B.value}s\u540E\u83B7\u53D6`,c.value=!1):(E.value="\u83B7\u53D6\u9A8C\u8BC1\u7801",B.value=10,c.value=!0,clearInterval(a))},1e3)}},J=async()=>{if(t.value===""||_.value===!1)d.value=t.value===""?"\u624B\u673A\u53F7\u4E0D\u80FD\u4E3A\u7A7A":"\u8BF7\u586B\u5199\u6B63\u786E\u624B\u673A\u53F7",F();else if(i.value===""&&n.value==="")d.value=g.value?"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A":"\u9A8C\u8BC1\u7801\u4E0D\u80FD\u4E3A\u7A7A",F();else if(s.value==="\u5BC6\u7801\u4E3A5-12\u4F4D\u7684\u6570\u5B57\u5B57\u6BCD"||s.value==="\u9A8C\u8BC1\u7801\u4E3A4\u4F4D\u6570\u5B57")d.value=s.value,F();else{let u=await P({iphone:t.value,code:n.value,password:i.value});u.code==="200"?(W("\u767B\u5F55\u6210\u529F","success"),w.commit("login/setUser",u.res),localStorage.setItem("token",JSON.stringify(u.token)),localStorage.setItem("user",JSON.stringify(u.res)),k.push({name:"home"})):(d.value=u.msg,F())}};return(u,a)=>{const O=L("el-button");return A(),m("div",X,[e("div",Y,[Z,ee,ue,e("div",se,[le,e("form",ae,[e("div",{class:"div",style:D(p.value?"padding-left:0px":"padding-left:50px")},[e("span",{class:C(p.value?"iphonecus ":"iphoneblur")},"\u624B\u673A\u53F7",2),x(e("input",{type:"text",onFocus:S,onBlur:V,onInput:R,"onUpdate:modelValue":a[0]||(a[0]=r=>t.value=r)},null,544),[[b,t.value]]),_.value?(A(),m("span",te)):h("",!0)],4),g.value?h("",!0):(A(),m("div",{key:0,class:"div",style:D(v.value?"padding-left:0px":"padding-left:50px")},[x(e("input",{type:"text",onFocus:N,onBlur:a[1]||(a[1]=r=>T()),"onUpdate:modelValue":a[2]||(a[2]=r=>n.value=r)},null,544),[[b,n.value]]),e("span",{class:C(v.value?"codecus codeSpan":"codeblur codeSpan")},"\u9A8C\u8BC1\u7801",2),Q(O,{disabled:!c.value,onClick:U},{default:q(()=>[e("span",{class:C(c.value?"ma":"")},y(E.value),3)]),_:1},8,["disabled"])],4)),g.value?(A(),m("div",{key:1,class:"div",style:D(f.value?"padding-left:0px":"padding-left:50px")},[e("span",{class:C(f.value?"passcus ":"passblur")},"\u5BC6\u7801",2),x(e("input",{type:"password",onFocus:$,onBlur:I,"onUpdate:modelValue":a[3]||(a[3]=r=>i.value=r)},null,544),[[b,i.value]])],4)):h("",!0)]),o.value?(A(),m("p",oe,y(s.value),1)):h("",!0),e("button",{class:"button",onClick:J},"\u767B\u5F55"),e("div",{class:"else"},[ne,e("div",{onClick:M,style:{cursor:"pointer"}},ce)])])])])}}});export{Be as default};
