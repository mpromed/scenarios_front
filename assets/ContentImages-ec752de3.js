import{u as f,d as k,r as e,o as n,c,a,F as p,i as D,t as L,g as W,b as I}from"./index-ee1e3418.js";import P from"./ModalImage-d280a3c4.js";const C={class:"content-image-wrapper"},M={class:"content-image"},S={class:"content-image-item"},R=["onClick"],U=["src"],x={class:"content-image-label"},w={__name:"ContentImages",props:["componentData"],setup(i){const t=i;f(o=>({"60651e04":r.value,"8955dcb4":d.value,"4567baae":u.value,"3436ab01":g.value,"7bd09180":_.value}));const m=k(),r=e(),d=e(),u=e(),g=e(),_=e(),s=e(!1),v=e("");r.value=t.componentData.imagesWidthPercent+"%",d.value=100/t.componentData.imagesList.length+"%",u.value=t.componentData.imagesWidthPercentSmall+"%",g.value=100/t.componentData.imagesList.length+"%",_.value=t.componentData.imagesWidthPercentMobile+"%";const h=o=>{document.documentElement.clientWidth>=480&&t.componentData.clickEnlarge&&(v.value=o,s.value=!0,m.scrollDisabled=!0)},b=()=>{s.value=!1,m.scrollDisabled=!1};return(o,y)=>(n(),c(p,null,[a("div",C,[a("div",M,[(n(!0),c(p,null,D(i.componentData.imagesList,l=>(n(),c("div",S,[a("div",{onClick:B=>h(l.imageURL)},[a("img",{src:l.imageURL,class:"content-image-image"},null,8,U)],8,R),a("div",x,L(l.label),1)]))),256))])]),s.value?(n(),W(P,{key:0,imageURL:v.value,onCloseModal:b},null,8,["imageURL"])):I("",!0)],64))}};export{w as default};
