import{u as i,o as t,c,a as s,n as a,b as l}from"./index-29e542d3.js";import{_ as n}from"./answerCheckMark-d8bb8dc7.js";import{_ as r}from"./_plugin-vue_export-helper-c27b6911.js";const d={class:"answer-checkbox"},h={class:"answer-checkbox-container"},k={key:0,src:n,alt:"check mark"},u=["innerHTML"],x={__name:"CheckboxAnswer",props:{isChecked:{type:Boolean,default:!1},isDisable:{type:Boolean,default:!1},answerText:{type:String,default:""},isRight:{type:Boolean,default:!1},isRightAlt:{type:Boolean,default:!1},checkboxColor:{type:String,default:"#2ea809"}},setup(e){return i(o=>({"4c7e3c81":e.checkboxColor})),(o,b)=>(t(),c("li",null,[s("div",d,[s("div",h,[s("div",{class:a([{"white-checkbox":!e.isChecked,"purple-checkbox":e.isChecked||e.isDisable&&e.isRight,"cursor-pointer":!e.isDisable,"alt-checkbox":e.isDisable&&e.isRightAlt},"answer-checkbox-rectangle"])},[e.isChecked?(t(),c("img",k)):l("",!0)],2)]),s("div",{innerHTML:e.answerText,class:a([{"cursor-pointer":!e.isDisable},"answer-checkbox-text"])},null,10,u)])]))}},_=r(x,[["__scopeId","data-v-d6d93e3c"]]);export{_ as default};
