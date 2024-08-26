import{u as x,r as T,d as k,e as A,o as s,c as o,f as l,b as i,g as y,a as h,F as p,h as D,n as g}from"./index-a17d0a25.js";import b from"./ButtonAnswer-f65bcc39.js";import v from"./CheckboxAnswer-ecca4b50.js";import R from"./CheckboxImageAnswer-cd5fa128.js";import _ from"./ContentImages-0478e69a.js";import $ from"./ContentAnswersOnImage-91ec248a.js";import B from"./ContentText-1de2e4df.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./answerCheckMark-d8bb8dc7.js";import"./ModalImage-9a57eb6f.js";const I={key:1,class:"left-side"},M={class:"content-answers"},S={key:0},H=["innerHTML"],U={key:1,class:"answers-checkboxes-list"},V={key:2,class:"answers-image-checkboxes-list"},N={key:3,class:"answers-buttons-list"},O=["innerHTML"],Q={__name:"ContentAnswers",props:["componentData","testStyle"],emits:["action","chooseAction"],setup(a,{emit:w}){const e=a;x(t=>({"7cda68be":u.value}));const u=T("");e.componentData.columns?u.value=`repeat(${e.componentData.columns}, minmax(0, 1fr))`:u.value="repeat(2, minmax(0, 1fr))";const f=k(()=>`<p>${e.componentData.legendText} <span style="color: ${e.componentData.legendTextColor};">${e.componentData.legendColoredText}</span>`),m=t=>{if(!e.componentData.isComplete)if(e.componentData.multiple)e.componentData.answersList[t].isChecked?e.componentData.answersList[t].isChecked=!1:e.componentData.answersList[t].isChecked=!0;else{for(let c=0;c<e.componentData.answersList.length;c++)e.componentData.answersList[c].isChecked=!1;e.componentData.answersList[t].isChecked=!0,e.componentData.answersList[t].action&&e.componentData.answersList[t].action.clickAction?w("action",e.componentData.answersList[t].action):w("chooseAction",e.componentData.answersList[t].action)}},C=()=>{if(e.componentData.answersList)for(let t=e.componentData.answersList.length-1;t>0;t--){const c=Math.floor(Math.random()*(t+1));[e.componentData.answersList[t],e.componentData.answersList[c]]=[e.componentData.answersList[c],e.componentData.answersList[t]]}},L=k(()=>e.componentData.answersList.every(t=>!t.isChecked));return A(()=>{e.componentData.doShuffle&&L.value&&C()}),(t,c)=>(s(),o("div",{class:g({"multi-wrapper":a.componentData.isAnswersWithImage,"image-answers-wrapper":a.componentData.isAnswersOnImage})},[a.componentData.isAnswersOnImage?(s(),l($,{key:0,componentData:e.componentData,onSwitchAnswer:m},null,8,["componentData"])):i("",!0),a.componentData.isAnswersWithImage?(s(),o("div",I,[y(_,{componentData:a.componentData.imagesData},null,8,["componentData"])])):i("",!0),h("div",{class:g({"right-side":a.componentData.isAnswersWithImage})},[a.componentData.textData!=null?(s(),l(B,{key:0,componentData:a.componentData.textData,testStyle:e.testStyle},null,8,["componentData","testStyle"])):i("",!0),h("div",M,[e.componentData.hints?(s(),o("div",S,[h("div",{innerHTML:e.componentData.hintText,class:"answers-hint-text"},null,8,H)])):i("",!0),e.componentData.answersButtonType==="checkboxes"?(s(),o("ul",U,[(s(!0),o(p,null,D(e.componentData.answersList,(n,r)=>(s(),l(v,{key:r,answerText:n.answerText,isChecked:!!n.isChecked,isDisable:!!e.componentData.isComplete,isRight:!!n.isRight,isRightAlt:!!n.isRightAlt,checkboxColor:a.componentData.legendTextColor,onClick:d=>m(r),class:"answers-checkboxes-list-iiem"},null,8,["answerText","isChecked","isDisable","isRight","isRightAlt","checkboxColor","onClick"]))),128))])):i("",!0),e.componentData.answersButtonType==="imageCheckboxes"?(s(),o("ul",V,[(s(!0),o(p,null,D(e.componentData.answersList,(n,r)=>(s(),l(R,{key:r,answerText:n.answerText,isChecked:!!n.isChecked,isDisable:!!e.componentData.isComplete,isRight:!!n.isRight,isRightAlt:!!n.isRightAlt,checkboxColor:a.componentData.legendTextColor,imageURL:n.image.imageURL,onClick:d=>m(r),class:"answers-checkboxeslist-image-iiem"},null,8,["answerText","isChecked","isDisable","isRight","isRightAlt","checkboxColor","imageURL","onClick"]))),128))])):i("",!0),e.componentData.answersButtonType==="buttons"?(s(),o("div",N,[(s(!0),o(p,null,D(e.componentData.answersList,(n,r)=>(s(),l(b,{answerText:n.answerText,isChecked:!!n.isChecked,onClick:d=>m(r),class:"answers-buttons-list-iiem"},null,8,["answerText","isChecked","onClick"]))),256))])):i("",!0),a.componentData.showLegend?(s(),o("div",{key:4,innerHTML:f.value,class:"answers-legend"},null,8,O)):i("",!0)])],2)],2))}};export{Q as default};
