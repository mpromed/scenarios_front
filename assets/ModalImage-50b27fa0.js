import{m as c,o as n,c as i,a as o,h as m,l as r,p as _}from"./index-3ad8724a.js";const d={class:"modal-image-container"},p=["src"],v={__name:"ModalImage",props:["imageURL"],emits:["closeModal"],setup(a,{emit:s}){const t=()=>{s("closeModal",!0)};return(u,e)=>{const l=c("el-button");return n(),i("div",{class:"modal-image-wrapper",onClick:e[0]||(e[0]=g=>t())},[o("div",d,[o("img",{src:a.imageURL,class:"modal-image"},null,8,p),m(l,{type:"info",class:"close-btn",icon:r(_),circle:""},null,8,["icon"])])])}}};export{v as default};
