import{u as x,d as T,r as A,e as k,f as b,o as s,c as o,g as l,b as i,h as y,a as h,F as p,i as D,n as g}from"./index-6f3f07d0.js";import v from"./ButtonAnswer-fa2450cb.js";import R from"./CheckboxAnswer-67971b38.js";import _ from"./CheckboxImageAnswer-f28053c9.js";import $ from"./ContentImages-ad9ed55e.js";import B from"./ContentAnswersOnImage-d488b25f.js";import S from"./ContentText-bac9f012.js";import"./answerCheckMark-c0801d0d.js";import"./ModalImage-49cf1d89.js";const I={key:1,class:"left-side"},M={class:"content-answers"},H={key:0},U=["innerHTML"],V={key:1,class:"answers-checkboxes-list"},N={key:2,class:"answers-image-checkboxes-list"},O={key:3,class:"answers-buttons-list"},W=["innerHTML"],Q={__name:"ContentAnswers",props:["componentData","testStyle"],emits:["action","chooseAction"],setup(a,{emit:w}){const e=a;x(t=>({b49900ea:u.value})),T();const u=A("");e.componentData.columns?u.value=`repeat(${e.componentData.columns}, minmax(0, 1fr))`:u.value="repeat(2, minmax(0, 1fr))";const f=k(()=>`<p>${e.componentData.legendText} <span style="color: ${e.componentData.legendTextColor};">${e.componentData.legendColoredText}</span>`),m=t=>{if(!e.componentData.isComplete)if(e.componentData.multiple)e.componentData.answersList[t].isChecked?e.componentData.answersList[t].isChecked=!1:e.componentData.answersList[t].isChecked=!0;else{for(let c=0;c<e.componentData.answersList.length;c++)e.componentData.answersList[c].isChecked=!1;e.componentData.answersList[t].isChecked=!0,e.componentData.answersList[t].action&&e.componentData.answersList[t].action.clickAction?w("action",e.componentData.answersList[t].action):w("chooseAction",e.componentData.answersList[t].action)}},C=()=>{if(e.componentData.answersList)for(let t=e.componentData.answersList.length-1;t>0;t--){const c=Math.floor(Math.random()*(t+1));[e.componentData.answersList[t],e.componentData.answersList[c]]=[e.componentData.answersList[c],e.componentData.answersList[t]]}},L=k(()=>e.componentData.answersList.every(t=>!t.isChecked));return b(()=>{e.componentData.doShuffle&&L.value&&C()}),(t,c)=>(s(),o("div",{class:g({"multi-wrapper":a.componentData.isAnswersWithImage,"image-answers-wrapper":a.componentData.isAnswersOnImage})},[a.componentData.isAnswersOnImage?(s(),l(B,{key:0,componentData:e.componentData,onSwitchAnswer:m},null,8,["componentData"])):i("",!0),a.componentData.isAnswersWithImage?(s(),o("div",I,[y($,{componentData:a.componentData.imagesData},null,8,["componentData"])])):i("",!0),h("div",{class:g({"right-side":a.componentData.isAnswersWithImage})},[a.componentData.textData!=null?(s(),l(S,{key:0,componentData:a.componentData.textData,testStyle:e.testStyle},null,8,["componentData","testStyle"])):i("",!0),h("div",M,[e.componentData.hints?(s(),o("div",H,[h("div",{innerHTML:e.componentData.hintText,class:"answers-hint-text"},null,8,U)])):i("",!0),e.componentData.answersButtonType==="checkboxes"?(s(),o("ul",V,[(s(!0),o(p,null,D(e.componentData.answersList,(n,r)=>(s(),l(R,{key:r,answerText:n.answerText,isChecked:!!n.isChecked,isDisable:!!e.componentData.isComplete,isRight:!!n.isRight,isRightAlt:!!n.isRightAlt,checkboxColor:a.componentData.legendTextColor,onClick:d=>m(r),class:"answers-checkboxes-list-iiem"},null,8,["answerText","isChecked","isDisable","isRight","isRightAlt","checkboxColor","onClick"]))),128))])):i("",!0),e.componentData.answersButtonType==="imageCheckboxes"?(s(),o("ul",N,[(s(!0),o(p,null,D(e.componentData.answersList,(n,r)=>(s(),l(_,{key:r,answerText:n.answerText,isChecked:!!n.isChecked,isDisable:!!e.componentData.isComplete,isRight:!!n.isRight,isRightAlt:!!n.isRightAlt,checkboxColor:a.componentData.legendTextColor,imageURL:n.image.imageURL,onClick:d=>m(r),class:"answers-checkboxeslist-image-iiem"},null,8,["answerText","isChecked","isDisable","isRight","isRightAlt","checkboxColor","imageURL","onClick"]))),128))])):i("",!0),e.componentData.answersButtonType==="buttons"?(s(),o("div",O,[(s(!0),o(p,null,D(e.componentData.answersList,(n,r)=>(s(),l(v,{answerText:n.answerText,isChecked:!!n.isChecked,onClick:d=>m(r),class:"answers-buttons-list-iiem"},null,8,["answerText","isChecked","onClick"]))),256))])):i("",!0),a.componentData.showLegend?(s(),o("div",{key:4,innerHTML:f.value,class:"answers-legend"},null,8,W)):i("",!0)])],2)],2))}};export{Q as default};
