import{u as b,d as k,r as e,o as n,c as l,a,F as h,i as D,t as L,h as W,b as I}from"./index-7b8f3fad.js";import P from"./ModalImage-ea503d87.js";const C={class:"content-image-wrapper"},M={class:"content-image"},S={class:"content-image-item"},R=["onClick"],U=["src"],x={class:"content-image-label"},w={__name:"ContentImages",props:["componentData"],setup(i){b(o=>({"846eccac":r.value,"4c11cd0c":d.value,"48e8f506":u.value,"468467ad":g.value,e876a228:_.value}));const m=k(),r=e(),d=e(),u=e(),g=e(),_=e(),s=e(!1),v=e(""),t=i;r.value=t.componentData.imagesWidthPercent+"%",d.value=100/t.componentData.imagesList.length+"%",u.value=t.componentData.imagesWidthPercentSmall+"%",g.value=100/t.componentData.imagesList.length+"%",_.value=t.componentData.imagesWidthPercentMobile+"%";const p=o=>{document.documentElement.clientWidth>=480&&t.componentData.clickEnlarge&&(v.value=o,s.value=!0,m.scrollDisabled=!0)},f=()=>{s.value=!1,m.scrollDisabled=!1};return(o,y)=>(n(),l(h,null,[a("div",C,[a("div",M,[(n(!0),l(h,null,D(i.componentData.imagesList,c=>(n(),l("div",S,[a("div",{onClick:B=>p(c.imageURL)},[a("img",{src:c.imageURL,class:"content-image-image"},null,8,U)],8,R),a("div",x,L(c.label),1)]))),256))])]),s.value?(n(),W(P,{key:0,imageURL:v.value,onCloseModal:f},null,8,["imageURL"])):I("",!0)],64))}};export{w as default};
