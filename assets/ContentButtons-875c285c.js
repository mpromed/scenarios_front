import{u,o,c as n,F as i,i as b,t as C}from"./index-f7a4f790.js";const d={class:"content-buttons"},m=["onClick"],k={__name:"ContentButtons",props:["componentData","testStyle"],emits:["action"],setup(t,{emit:a}){const c=t;u(e=>({"109d82a4":t.testStyle.buttonColor,"07b4a522":t.testStyle.borderButtonColor,"7526a001":t.testStyle.buttonTextColor,"287b972e":t.testStyle.buttonColorHover,"769a193a":t.testStyle.borderButtonColorHover,"4045dc8a":t.testStyle.buttonTextColorHover}));const l=e=>{a("action",e)};return(e,y)=>(o(),n("div",d,[(o(!0),n(i,null,b(c.componentData.buttonsList,(s,r)=>(o(),n("div",{key:r,onClick:v=>l(s.action),class:"content-buttons-item"},C(s.buttonName),9,m))),128))]))}};export{k as default};
