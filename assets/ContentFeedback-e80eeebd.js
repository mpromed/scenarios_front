import{r as u,o as s,c as a,a as c,F as f,h as k,b as _,w as x,v as h}from"./index-ef123e0f.js";const d=""+new URL("filled_star-95ccb81b.svg",import.meta.url).href,y=""+new URL("empty_star-9f8cf3f3.svg",import.meta.url).href;const D={class:"feedback-wrapper"},b={key:0,class:"stars-section"},g=["innerHTML"],T={class:"rating"},M=["onMouseover","onClick"],L={key:0,src:d,class:"star"},w={key:1,src:d,class:"star"},C={key:2,src:y,class:"star"},H={key:1,class:"text-section"},F=["innerHTML"],U={__name:"ContentFeedback",props:["componentData","testStyle"],setup(p){const e=p,n=u(0),l=u(0),o=u(!1);e.componentData.feedbackText="";const m=i=>{o.value=!1,i==n.value?n.value=0:n.value=i,e.componentData.rating=n.value};return(i,r)=>(s(),a("div",D,[e.componentData.showStars?(s(),a("div",b,[c("div",{innerHTML:e.componentData.starsDescription,class:"stars-text"},null,8,g),c("div",T,[(s(),a(f,null,k(5,t=>c("span",{key:t,class:"star-container",onMouseover:v=>(l.value=t,o.value=!0),onMouseleave:r[0]||(r[0]=v=>(l.value=n.value,o.value=!1)),onClick:v=>m(t)},[t<=n.value&&!o.value?(s(),a("img",L)):t<=l.value&&o.value?(s(),a("img",w)):(s(),a("img",C))],40,M)),64))])])):_("",!0),e.componentData.showText?(s(),a("div",H,[c("div",{innerHTML:e.componentData.text,class:"stars-text"},null,8,F),x(c("textarea",{"onUpdate:modelValue":r[1]||(r[1]=t=>e.componentData.feedbackText=t),type:"text",class:"feedback-input"},null,512),[[h,e.componentData.feedbackText]])])):_("",!0)]))}};export{U as default};
