import{u as i,o as t,c as a,a as s,n as c,b as l}from"./index-aab44838.js";import{_ as n}from"./answerCheckMark-c0801d0d.js";import{_ as r}from"./_plugin-vue_export-helper-c27b6911.js";const h={class:"answer-checkbox"},d={class:"answer-checkbox-container"},b={key:0,src:n,alt:"check mark"},k=["innerHTML"],u={__name:"CheckboxAnswer",props:{isChecked:{type:Boolean,default:!1},isDisable:{type:Boolean,default:!1},answerText:{type:String,default:""},isRight:{type:Boolean,default:!1},isRightAlt:{type:Boolean,default:!1},checkboxColor:{type:String,default:"#2ea809"}},setup(e){return i(o=>({dc6eefb4:e.checkboxColor})),(o,x)=>(t(),a("li",null,[s("div",h,[s("div",d,[s("div",{class:c([{"white-checkbox":!e.isChecked,"purple-checkbox":e.isChecked||e.isDisable&&e.isRight,"cursor-pointer":!e.isDisable,"alt-checkbox":e.isDisable&&e.isRightAlt},"answer-checkbox-rectangle"])},[e.isChecked?(t(),a("img",b)):l("",!0)],2)]),s("div",{innerHTML:e.answerText,class:c([{"cursor-pointer":!e.isDisable},"answer-checkbox-text"])},null,10,k)])]))}},_=r(u,[["__scopeId","data-v-bb84f7a8"]]);export{_ as default};
