import{d as f,u as g,a as q,r as v,v as A,c as b,o,e as n,f as s,i as B,j as F,F as l,p as d,m as r,N as k,s as y,t as a,h as _}from"./vendor.f0b6f500.js";const x={class:"bigBox"},D={class:"box"},N={class:"title"},V=s("p",null,[r("\u793A\u4F8B\u95EE\u5377"),s("span",null,"\u8BC4\u5206\u4FE1\u606F\u5C06\u81EA\u52A8\u4FDD\u5B58")],-1),M={class:"right"},S=r("\u534F\u4F5C\u9605\u5377"),j=r("\u4FDD\u5B58\u5E76\u9000\u51FA"),z={class:"score"},L={class:"scoreList"},R=s("div",{class:"cardTitle"},[s("span",{"data-v-53fde398":"",class:"card"},"\u8BC4\u5206\u540D\u5355")],-1),T={class:"card-content"},$=["onClick"],O={class:"answer-information"},W=s("div",{class:"card-title"},[s("span",{class:"card"},"\u7B54\u5377\u4FE1\u606F")],-1),G={class:"card-content"},H=s("div",{class:"card-wrap"},"\u7B54\u9898\u5E8F\u53F7\uFF1A1",-1),I={class:"middle"},J=s("div",{class:"title-preview"},[s("div",{class:"title"},"\u7B54\u9898\u8BE6\u60C5")],-1),K={class:"question-list"},P={class:"content-preview"},Q={class:"seq"},U={class:"title"},X={class:"question-content"},Y={key:0,class:"option"},Z=s("input",{type:"radio",checked:""},null,-1),ss={class:"option-text"},ts={key:1,class:"option"},es=s("input",{type:"checkBox",checked:""},null,-1),os={class:"option-text"},ns={key:2,class:"option"},as={class:"option-text tian",disabled:"true",contenteditable:"true"},cs={key:3,class:"option"},us={class:"option-text jian",contenteditable:"true"},is={class:"score-set"},ls={class:"score-set-content"},ds={class:"choose-RightOrWrong"},_s=s("span",{class:"text"},"\u5F97\u5206",-1),rs={class:"input-wrapper"},vs=["value"],ps={class:"right"},hs=s("div",{class:"total-score"},[s("span",null,"\u5F53\u524D\u5F97\u5206"),s("div",{class:"red-score"},"2")],-1),ms={class:"marking"},Bs=k('<div class="title"><div class="marking-card"><span class="card"> \u7B54\u9898\u5361 </span><p class="zheng"><span></span>\u6B63\u786E</p><p class="cuo"><span></span>\u9519\u8BEF</p><p class="nows"><span></span>\u6B63\u5728</p></div></div>',1),Fs={class:"content"},ys=["onClick"],ks=k('<div class="content"><div class="only-false"><span>\u53EA\u770B\u9519\u9898</span></div></div><div class="footer"><span class="disable">\u4E0A\u4E00\u9875</span><span class="disable">\u4E0B\u4E00\u9875</span></div>',2),fs=f({setup(Cs){const p=g();q();const h=v(0),u=v(0),c=v([{name:"",time:"",questions:[{topic_nav:"",score:"",questions_answer:"",type:""}]}]);A(()=>{console.log(p.state.student.MarkData),c.value=p.state.student.MarkData,console.log(c)});const C=i=>{h.value=i},E=i=>{u.value=i};return(i,Es)=>{const m=b("el-button");return o(),n("div",x,[s("div",D,[s("div",N,[V,s("div",M,[B(m,null,{default:F(()=>[S]),_:1}),B(m,{type:"primary"},{default:F(()=>[j]),_:1})])])]),s("div",z,[s("div",L,[R,s("div",T,[(o(!0),n(l,null,d(c.value,(t,e)=>(o(),n("span",{key:e,onClick:w=>E(e),class:y(u.value===e?"actives":"")},a(t.name),11,$))),128))]),s("div",O,[W,s("div",G,[(o(!0),n(l,null,d(c.value,(t,e)=>(o(),n("div",{class:"card-wrap",key:e},a(t.time),1))),128)),H])])]),s("div",I,[J,s("div",K,[s("div",null,[(o(!0),n(l,null,d(c.value[u.value].questions,(t,e)=>(o(),n("div",{class:"question",key:e},[s("div",null,[s("div",P,[s("div",Q,"\u7B2C"+a(e+1)+"\u9898",1),s("div",U,[r(a(t.topic_nav)+" ",1),s("span",null,"\uFF08\u6700\u9AD8\u5206\u503C"+a(t.score)+"\u5206\uFF09",1)]),s("div",X,[t.type==="\u5355\u9009\u9898"?(o(),n("div",Y,[Z,s("span",ss,a(t.questions_answer),1)])):_("",!0),t.type==="\u591A\u9009\u9898"?(o(),n("div",ts,[es,s("span",os,a(t.questions_answer),1)])):_("",!0),t.type==="\u586B\u7A7A\u9898"?(o(),n("div",ns,[s("span",as,a(t.questions_answer==="null"?"\u672A\u7B54\u9898":t.questions_answer),1)])):_("",!0),t.type==="\u7B80\u7B54\u9898"?(o(),n("div",cs,[s("div",us,a(t.questions_answer),1)])):_("",!0)])])]),s("div",is,[s("div",ls,[s("div",ds,[_s,s("div",rs,[s("input",{type:"number",max:"5",value:t.score},null,8,vs)])])])])]))),128))])])]),s("div",ps,[hs,s("div",ms,[Bs,s("div",Fs,[(o(!0),n(l,null,d(c.value[u.value].questions,(t,e)=>(o(),n("span",{key:e,onClick:w=>C(e),class:y(h.value===e?"active":"")},a(e+1),11,ys))),128))])]),ks])])])}}});export{fs as default};