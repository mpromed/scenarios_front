import{k as b,r as e,u as C,o as n,c as i,a,F as p,h as k,t as S,f as D,b as I}from"./index-ef123e0f.js";import L from"./ModalImage-1179a78a.js";const P=b("globalStore",()=>({originalAnswerCollections:e(null)}));const W={class:"content-image-wrapper"},M={class:"content-image"},y={class:"content-image-item"},R=["onClick"],U=["src"],w={class:"content-image-label"},x={__name:"ContentImages",props:["componentData"],setup(o){const t=o;C(l=>({"83cbb71e":m.value,"29c8755a":u.value,"36349f16":g.value,ea438918:d.value,f3826f1a:_.value}));const r=P(),m=e(),u=e(),g=e(),d=e(),_=e(),s=e(!1),v=e("");m.value=t.componentData.imagesWidthPercent+"%",u.value=100/t.componentData.imagesList.length+"%",g.value=t.componentData.imagesWidthPercentSmall+"%",d.value=100/t.componentData.imagesList.length+"%",_.value=t.componentData.imagesWidthPercentMobile+"%";const h=l=>{document.documentElement.clientWidth>=480&&t.componentData.clickEnlarge&&(v.value=l,s.value=!0,r.scrollDisabled=!0)},f=()=>{s.value=!1,r.scrollDisabled=!1};return(l,B)=>(n(),i(p,null,[a("div",W,[a("div",M,[(n(!0),i(p,null,k(o.componentData.imagesList,c=>(n(),i("div",y,[a("div",{onClick:E=>h(c.imageURL)},[a("img",{src:c.imageURL,class:"content-image-image"},null,8,U)],8,R),a("div",w,S(c.label),1)]))),256))])]),s.value?(n(),D(L,{key:0,imageURL:v.value,onCloseModal:f},null,8,["imageURL"])):I("",!0)],64))}},A=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"}));export{A as C,x as _,P as u};
