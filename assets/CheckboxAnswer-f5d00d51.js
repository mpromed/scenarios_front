import{_ as i,u as l,o as t,c as a,a as s,n as c,b as n}from"./index-077bbd4e.js";import{_ as r}from"./answerCheckMark-c0801d0d.js";const h={class:"answer-checkbox"},d={class:"answer-checkbox-container"},b={key:0,src:r,alt:"check mark"},k=["innerHTML"],u={__name:"CheckboxAnswer",props:{isChecked:{type:Boolean,default:!1},isDisable:{type:Boolean,default:!1},answerText:{type:String,default:""},isRight:{type:Boolean,default:!1},isRightAlt:{type:Boolean,default:!1},checkboxColor:{type:String,default:"#2ea809"}},setup(e){return l(o=>({dc6eefb4:e.checkboxColor})),(o,x)=>(t(),a("li",null,[s("div",h,[s("div",d,[s("div",{class:c([{"white-checkbox":!e.isChecked,"purple-checkbox":e.isChecked||e.isDisable&&e.isRight,"cursor-pointer":!e.isDisable,"alt-checkbox":e.isDisable&&e.isRightAlt},"answer-checkbox-rectangle"])},[e.isChecked?(t(),a("img",b)):n("",!0)],2)]),s("div",{innerHTML:e.answerText,class:c([{"cursor-pointer":!e.isDisable},"answer-checkbox-text"])},null,10,k)])]))}},C=i(u,[["__scopeId","data-v-bb84f7a8"]]);export{C as default};
