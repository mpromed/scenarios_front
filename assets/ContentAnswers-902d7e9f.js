import{u as C,r as x,d as L,e as T,o as s,c as o,f as l,b as i,g as A,a as p,F as h,h as D,n as k}from"./index-29e542d3.js";import b from"./ButtonAnswer-8f463bb0.js";import y from"./CheckboxAnswer-80a09a83.js";import v from"./CheckboxImageAnswer-f82387d7.js";import R from"./ContentImages-199702d0.js";import _ from"./ContentAnswersOnImage-b777487b.js";import $ from"./ContentText-09ad37bb.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./answerCheckMark-d8bb8dc7.js";import"./ModalImage-4530ce6b.js";const B={key:1,class:"left-side"},I={class:"content-answers"},M={key:0},S=["innerHTML"],H={key:1,class:"answers-checkboxes-list"},V={key:2,class:"answers-image-checkboxes-list"},N={key:3,class:"answers-buttons-list"},O=["innerHTML"],P={__name:"ContentAnswers",props:["componentData","testStyle"],emits:["action","chooseAction"],setup(a,{emit:w}){const e=a;C(t=>({ab7a816e:u.value}));const u=x("");e.componentData.columns?u.value=`repeat(${e.componentData.columns}, minmax(0, 1fr))`:u.value="repeat(2, minmax(0, 1fr))";const g=L(()=>`<p>${e.componentData.legendText} <span style="color: ${e.componentData.legendTextColor};">${e.componentData.legendColoredText}</span>`),m=t=>{if(!e.componentData.isComplete)if(e.componentData.multiple)e.componentData.answersList[t].isChecked?e.componentData.answersList[t].isChecked=!1:e.componentData.answersList[t].isChecked=!0;else{for(let c=0;c<e.componentData.answersList.length;c++)e.componentData.answersList[c].isChecked=!1;e.componentData.answersList[t].isChecked=!0,e.componentData.answersList[t].action&&e.componentData.answersList[t].action.clickAction?w("action",e.componentData.answersList[t].action):w("chooseAction",e.componentData.answersList[t].action)}},f=()=>{if(e.componentData.answersList)for(let t=e.componentData.answersList.length-1;t>0;t--){const c=Math.floor(Math.random()*(t+1));[e.componentData.answersList[t],e.componentData.answersList[c]]=[e.componentData.answersList[c],e.componentData.answersList[t]]}};return T(()=>{e.componentData.doShuffle&&f()}),(t,c)=>(s(),o("div",{class:k({"multi-wrapper":a.componentData.isAnswersWithImage,"image-answers-wrapper":a.componentData.isAnswersOnImage})},[a.componentData.isAnswersOnImage?(s(),l(_,{key:0,componentData:e.componentData,onSwitchAnswer:m},null,8,["componentData"])):i("",!0),a.componentData.isAnswersWithImage?(s(),o("div",B,[A(R,{componentData:a.componentData.imagesData},null,8,["componentData"])])):i("",!0),p("div",{class:k({"right-side":a.componentData.isAnswersWithImage})},[a.componentData.textData!=null?(s(),l($,{key:0,componentData:a.componentData.textData,testStyle:e.testStyle},null,8,["componentData","testStyle"])):i("",!0),p("div",I,[e.componentData.hints?(s(),o("div",M,[p("div",{innerHTML:e.componentData.hintText,class:"answers-hint-text"},null,8,S)])):i("",!0),e.componentData.answersButtonType==="checkboxes"?(s(),o("ul",H,[(s(!0),o(h,null,D(e.componentData.answersList,(n,r)=>(s(),l(y,{key:r,answerText:n.answerText,isChecked:!!n.isChecked,isDisable:!!e.componentData.isComplete,isRight:!!n.isRight,isRightAlt:!!n.isRightAlt,checkboxColor:a.componentData.legendTextColor,onClick:d=>m(r),class:"answers-checkboxes-list-iiem"},null,8,["answerText","isChecked","isDisable","isRight","isRightAlt","checkboxColor","onClick"]))),128))])):i("",!0),e.componentData.answersButtonType==="imageCheckboxes"?(s(),o("ul",V,[(s(!0),o(h,null,D(e.componentData.answersList,(n,r)=>(s(),l(v,{key:r,answerText:n.answerText,isChecked:!!n.isChecked,isDisable:!!e.componentData.isComplete,isRight:!!n.isRight,isRightAlt:!!n.isRightAlt,checkboxColor:a.componentData.legendTextColor,imageURL:n.image.imageURL,onClick:d=>m(r),class:"answers-checkboxeslist-image-iiem"},null,8,["answerText","isChecked","isDisable","isRight","isRightAlt","checkboxColor","imageURL","onClick"]))),128))])):i("",!0),e.componentData.answersButtonType==="buttons"?(s(),o("div",N,[(s(!0),o(h,null,D(e.componentData.answersList,(n,r)=>(s(),l(b,{answerText:n.answerText,isChecked:!!n.isChecked,onClick:d=>m(r),class:"answers-buttons-list-iiem"},null,8,["answerText","isChecked","onClick"]))),256))])):i("",!0),a.componentData.showLegend?(s(),o("div",{key:4,innerHTML:g.value,class:"answers-legend"},null,8,O)):i("",!0)])],2)],2))}};export{P as default};