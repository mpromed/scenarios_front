import{r as _,o as s,c as a,a as c,F as f,g as k,b as d,w as x,v as g}from"./index-a85591d0.js";const u="/scenarios_front/assets/filled_star-95ccb81b.svg",h="/scenarios_front/assets/empty_star-9f8cf3f3.svg";const y={class:"feedback-wrapper"},D={key:0,class:"stars-section"},b=["innerHTML"],T={class:"rating"},M=["onMouseover","onClick"],C={key:0,src:u,class:"star"},H={key:1,src:u,class:"star"},L={key:2,src:h,class:"star"},w={key:1,class:"text-section"},F=["innerHTML"],V={__name:"ContentFeedback",props:["componentData","testStyle"],setup(p){const e=p,n=_(0),l=_(0),o=_(!1);e.componentData.feedbackText="";const m=i=>{o.value=!1,i==n.value?n.value=0:n.value=i,e.componentData.rating=n.value};return(i,r)=>(s(),a("div",y,[e.componentData.showStars?(s(),a("div",D,[c("div",{innerHTML:e.componentData.starsDescription,class:"stars-text"},null,8,b),c("div",T,[(s(),a(f,null,k(5,t=>c("span",{key:t,class:"star-container",onMouseover:v=>(l.value=t,o.value=!0),onMouseleave:r[0]||(r[0]=v=>(l.value=n.value,o.value=!1)),onClick:v=>m(t)},[t<=n.value&&!o.value?(s(),a("img",C)):t<=l.value&&o.value?(s(),a("img",H)):(s(),a("img",L))],40,M)),64))])])):d("",!0),e.componentData.showText?(s(),a("div",w,[c("div",{innerHTML:e.componentData.text,class:"stars-text"},null,8,F),x(c("textarea",{"onUpdate:modelValue":r[1]||(r[1]=t=>e.componentData.feedbackText=t),type:"text",class:"feedback-input"},null,512),[[g,e.componentData.feedbackText]])])):d("",!0)]))}};export{V as default};
