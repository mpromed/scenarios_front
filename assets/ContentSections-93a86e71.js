import{o as s,c as n,F as _,g as p,n as u,a as o,l as d,b as k,t as g}from"./index-8d195ec1.js";const C="/scenarios_front/assets/check-green-fa2e30dc.svg";const h={class:"content-sections"},f=["onClick"],v={class:"section-image-container"},b=["src"],D=["src"],S={class:"section-text-container"},L={__name:"ContentSections",props:["componentData"],emits:["action"],setup(i,{emit:r}){const e=i,l=(c,a)=>{e.componentData.sectionsList[a].isComplete=!0,r("action",c)};return(c,a)=>(s(),n("div",h,[(s(!0),n(_,null,p(e.componentData.sectionsList,(t,m)=>(s(),n("div",{class:u(["section-button",{"section-button-complete":t.isComplete&&e.componentData.markCompletedSections!==!1}]),onClick:x=>l(t.action,m)},[o("div",v,[t.isComplete&&e.componentData.markCompletedSections!==!1?(s(),n("img",{key:0,src:d(C),alt:"section",class:"check-mark"},null,8,b)):k("",!0),o("img",{src:t.image.imageURL,alt:"section",class:"section-button-image"},null,8,D)]),o("div",S,g(t.buttonName),1)],10,f))),256))]))}};export{L as default};
