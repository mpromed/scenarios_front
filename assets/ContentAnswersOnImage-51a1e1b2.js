import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import{r as u,h as C,o,c as a,a as $,F as m,g as p,i as _,b as S,j as k}from"./index-8d195ec1.js";const z=["src"],A=["onClick"],I=["onClick"],D={__name:"ContentAnswersOnImage",props:["componentData","testStyle"],emits:["switchAnswer"],setup(g,{emit:w}){const r=g,d=e=>{w("switchAnswer",e)},i=(e,n)=>e/105*n,t=u({width:0,height:0}),y=u(null),l=u(null),f=(e,n)=>({position:"absolute",top:`${e.y}%`,left:`${e.x}%`,transform:"translate(-50%, -50%)",width:`${i(e.size,t.value.width)}px`,height:`${i(e.size,t.value.width)}px`,background:n?"green":e.color}),v=e=>({position:"absolute",top:`${e.y}%`,left:`${e.x}%`,transform:"translate(-50%, -50%)",width:`${i(e.hitboxSize,t.value.width)}px`,height:`${i(e.hitboxSize,t.value.width)}px`,backgroundColor:`${e.color}55`,borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",boxSizing:"border-box",cursor:"pointer"}),h=()=>{k(()=>{if(l.value&&l.value.complete){const{width:e,height:n}=l.value.getBoundingClientRect();t.value.width=e,t.value.height=n}else console.log("Изображение еще не загружено или элемент не найден")})};return C(()=>{h()}),(e,n)=>g.componentData.isAnswersOnImage?(o(),a("div",{key:0,class:"image-container",ref_key:"imageContainer",ref:y},[$("img",{src:r.componentData.imagesData.imagesList[0].imageURL,class:"content-image",ref_key:"imageElement",ref:l,onLoad:h},null,40,z),(o(!0),a(m,null,p(r.componentData.answersList,(c,s)=>(o(),a("div",{class:"marker",key:s,style:_(f(c.style,c.isChecked)),onClick:x=>d(s)},null,12,A))),128)),(o(!0),a(m,null,p(r.componentData.answersList,(c,s)=>(o(),a("div",{class:"hitbox",key:s,style:_(v(c.style)),onClick:x=>d(s)},null,12,I))),128))],512)):S("",!0)}},O=b(D,[["__scopeId","data-v-6a43b802"]]);export{O as default};
