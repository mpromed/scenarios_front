import{u as i,o as t,c as a,a as s,n as c,b as n}from"./index-864b81ba.js";import{_ as l}from"./answerCheckMark-c0801d0d.js";import{_ as r}from"./_plugin-vue_export-helper-c27b6911.js";const d={class:"answer-checkbox"},h=["src"],m={class:"bottom-caption"},b={class:"answer-checkbox-container"},k={key:0,src:l,alt:"check mark"},u=["innerHTML"],x={__name:"CheckboxImageAnswer",props:{isChecked:{type:Boolean,default:!1},isDisable:{type:Boolean,default:!1},answerText:{type:String,default:""},isRight:{type:Boolean,default:!1},isRightAlt:{type:Boolean,default:!1},checkboxColor:{type:String,default:"#2ea809"},imageURL:{type:String,default:""}},setup(e){return i(o=>({"71760bbc":e.checkboxColor})),(o,f)=>(t(),a("li",null,[s("div",d,[s("img",{src:e.imageURL,class:"answer-checkbox-image"},null,8,h),s("div",m,[s("div",b,[s("div",{class:c([{"white-checkbox":!e.isChecked,"purple-checkbox":e.isChecked||e.isDisable&&e.isRight,"cursor-pointer":!e.isDisable,"alt-checkbox":e.isDisable&&e.isRightAlt},"answer-checkbox-rectangle"])},[e.isChecked?(t(),a("img",k)):n("",!0)],2)]),s("div",{innerHTML:e.answerText,class:c([{"cursor-pointer":!e.isDisable},"answer-checkbox-text"])},null,10,u)])])]))}},w=r(x,[["__scopeId","data-v-3d053e55"]]);export{w as default};
