import{S as a}from"./vue-schart.49aa291e.js";import{_ as e,a as t}from"./index.21f781e5.js";import{E as l,r as s,o as d,e as o,g as n,w as i,f as r,t as u,n as c,p,j as g,i as v}from"./vendor.0b88a8e3.js";const f={name:"dashboard",components:{Schart:a},setup(){const a=localStorage.getItem("ms_username"),e="admin"===a?"超级管理员":"普通用户";return{name:a,data:l([{name:"2018/09/04",value:1083},{name:"2018/09/05",value:941},{name:"2018/09/06",value:1139},{name:"2018/09/07",value:816},{name:"2018/09/08",value:327},{name:"2018/09/09",value:228},{name:"2018/09/10",value:1065}]),options:{type:"bar",title:{text:"最近一周各品类销售图"},xRorate:25,labels:["周一","周二","周三","周四","周五"],datasets:[{label:"家电",data:[234,278,270,190,230]},{label:"百货",data:[164,178,190,135,160]},{label:"食品",data:[144,198,150,235,120]}]},options2:{type:"line",title:{text:"最近几个月各品类销售趋势图"},labels:["6月","7月","8月","9月","10月"],datasets:[{label:"家电",data:[234,278,270,190,230]},{label:"百货",data:[164,178,150,135,160]},{label:"食品",data:[74,118,200,235,90]}]},todoList:l([{title:"今天要修复100个bug",status:!1},{title:"今天要修复100个bug",status:!1},{title:"今天要写100行代码加几个bug吧",status:!1},{title:"今天要修复100个bug",status:!1},{title:"今天要修复100个bug",status:!0},{title:"今天要写100行代码加几个bug吧",status:!0}]),role:e}}},h=a=>(p("data-v-160ae4a6"),a=a(),g(),a),m={class:"user-info"},b=h((()=>r("img",{src:t,class:"user-avator",alt:""},null,-1))),_={class:"user-info-cont"},w={class:"user-info-name"},x=h((()=>r("div",{class:"user-info-list"},[v(" 上次登录时间： "),r("span",null,"2019-11-01")],-1))),y=h((()=>r("div",{class:"user-info-list"},[v(" 上次登录地点： "),r("span",null,"东莞")],-1))),S=h((()=>r("div",{class:"clearfix"},[r("span",null,"语言详情")],-1))),V=v(" Vue "),j=v("JavaScript "),I=v("CSS "),L=v("HTML "),U=h((()=>r("div",{class:"grid-content grid-con-1"},[r("i",{class:"el-icon-user-solid grid-con-icon"}),r("div",{class:"grid-cont-right"},[r("div",{class:"grid-num"},"1234"),r("div",null,"用户访问量")])],-1))),k=h((()=>r("div",{class:"grid-content grid-con-2"},[r("i",{class:"el-icon-message-solid grid-con-icon"}),r("div",{class:"grid-cont-right"},[r("div",{class:"grid-num"},"321"),r("div",null,"系统消息")])],-1))),C=h((()=>r("div",{class:"grid-content grid-con-3"},[r("i",{class:"el-icon-s-goods grid-con-icon"}),r("div",{class:"grid-cont-right"},[r("div",{class:"grid-num"},"5000"),r("div",null,"数量")])],-1))),E={class:"clearfix"},H=h((()=>r("span",null,"待办事项",-1))),J=v("添加"),M=h((()=>r("template",null,[r("i",{class:"el-icon-edit"}),r("i",{class:"el-icon-delete"})],-1)));var R=e(f,[["render",function(a,e,t,l,p,g){const v=s("el-card"),f=s("el-progress"),h=s("el-col"),R=s("el-row"),T=s("el-button"),q=s("el-checkbox"),z=s("el-table-column"),A=s("el-table"),B=s("schart");return d(),o("div",null,[n(R,{gutter:20},{default:i((()=>[n(h,{span:8},{default:i((()=>[n(v,{shadow:"hover",class:"mgb20",style:{height:"252px"}},{default:i((()=>[r("div",m,[b,r("div",_,[r("div",w,u(l.name),1),r("div",null,u(l.role),1)])]),x,y])),_:1}),n(v,{shadow:"hover",style:{height:"252px"}},{header:i((()=>[S])),default:i((()=>[V,n(f,{percentage:71.3,color:"#42b983"},null,8,["percentage"]),j,n(f,{percentage:24.1,color:"#f1e05a"},null,8,["percentage"]),I,n(f,{percentage:13.7},null,8,["percentage"]),L,n(f,{percentage:5.9,color:"#f56c6c"},null,8,["percentage"])])),_:1})])),_:1}),n(h,{span:16},{default:i((()=>[n(R,{gutter:20,class:"mgb20"},{default:i((()=>[n(h,{span:8},{default:i((()=>[n(v,{shadow:"hover","body-style":{padding:"0px"}},{default:i((()=>[U])),_:1})])),_:1}),n(h,{span:8},{default:i((()=>[n(v,{shadow:"hover","body-style":{padding:"0px"}},{default:i((()=>[k])),_:1})])),_:1}),n(h,{span:8},{default:i((()=>[n(v,{shadow:"hover","body-style":{padding:"0px"}},{default:i((()=>[C])),_:1})])),_:1})])),_:1}),n(v,{shadow:"hover",style:{height:"403px"}},{header:i((()=>[r("div",E,[H,n(T,{style:{float:"right",padding:"3px 0"},type:"text"},{default:i((()=>[J])),_:1})])])),default:i((()=>[n(A,{"show-header":!1,data:l.todoList,style:{width:"100%"}},{default:i((()=>[n(z,{width:"40"},{default:i((a=>[n(q,{modelValue:a.row.status,"onUpdate:modelValue":e=>a.row.status=e},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),n(z,null,{default:i((a=>[r("div",{class:c(["todo-item",{"todo-item-del":a.row.status}])},u(a.row.title),3)])),_:1}),n(z,{width:"60"},{default:i((()=>[M])),_:1})])),_:1},8,["data"])])),_:1})])),_:1})])),_:1}),n(R,{gutter:20},{default:i((()=>[n(h,{span:12},{default:i((()=>[n(v,{shadow:"hover"},{default:i((()=>[n(B,{ref:"bar",class:"schart",canvasId:"bar",options:l.options},null,8,["options"])])),_:1})])),_:1}),n(h,{span:12},{default:i((()=>[n(v,{shadow:"hover"},{default:i((()=>[n(B,{ref:"line",class:"schart",canvasId:"line",options:l.options2},null,8,["options"])])),_:1})])),_:1})])),_:1})])}],["__scopeId","data-v-160ae4a6"]]);export{R as default};
