import{_ as l}from"./index.875d82f2.js";import{H as e,a as i,r as a,o,e as c,f as t,g as s,w as n,t as r,F as d,l as f,n as p,p as u,j as m,i as v,M as h}from"./vendor.d773a9c0.js";const g={name:"icon",setup(){const l=["attentionforbid","attentionforbidfill","attention","attentionfill","tag","tagfill","people","peoplefill","notice","noticefill","mobile","mobilefill","voice","voicefill","unlock","lock","home","homefill","delete","deletefill","notification","notificationfill","notificationforbidfill","like","likefill","comment","commentfill","camera","camerafill","warn","warnfill","time","timefill","location","locationfill","favor","favorfill","skin","skinfill","news","newsfill","record","recordfill","emoji","emojifill","message","messagefill","goods","goodsfill","crown","crownfill","move","add","hot","hotfill","service","servicefill","present","presentfill","pic","picfill","rank","rankfill","male","female","down","top","recharge","rechargefill","forward","forwardfill","info","infofill","redpacket","redpacket_fill","roundadd","roundaddfill","friendadd","friendaddfill","cart","cartfill","more","moreandroid","back","right","shop","shopfill","question","questionfill","roundclose","roundclosefill","roundcheck","roundcheckfill","global","mail","punch","exit","upload","read","file","link","full","group","friend","profile","addressbook","calendar","text","copy","share","wifi","vipcard","weibo","remind","refresh","filter","settings","scan","qrcode","cascades","apps","sort","searchlist","search","edit"],a=e(""),o=i((()=>l.filter((l=>-1!==l.indexOf(a.value)))));return{iconList:l,keyword:a,list:o}}},x=l=>(u("data-v-0a06c79c"),l=l(),m(),l),k={class:"crumbs"},b=x((()=>t("i",{class:"el-icon-lx-emoji"},null,-1))),w=v(" 自定义图标 "),q={class:"container"},y=x((()=>t("h2",null,"使用方法",-1))),j={style:{"line-height":"50px"}},_=h('<p class="example-p" data-v-0a06c79c><i class="el-icon-lx-redpacket_fill" style="font-size:30px;color:#ff5900;" data-v-0a06c79c></i><span data-v-0a06c79c>&lt;i class=&quot;el-icon-lx-redpacket_fill&quot;&gt;&lt;/i&gt;</span></p><p class="example-p" data-v-0a06c79c><i class="el-icon-lx-weibo" style="font-size:30px;color:#fd5656;" data-v-0a06c79c></i><span data-v-0a06c79c>&lt;i class=&quot;el-icon-lx-weibo&quot;&gt;&lt;/i&gt;</span></p><p class="example-p" data-v-0a06c79c><i class="el-icon-lx-emojifill" style="font-size:30px;color:#ffc300;" data-v-0a06c79c></i><span data-v-0a06c79c>&lt;i class=&quot;el-icon-lx-emojifill&quot;&gt;&lt;/i&gt;</span></p><br data-v-0a06c79c><h2 data-v-0a06c79c>图标</h2>',5),z={class:"search-box"},V={class:"icon-li-content"};var L=l(g,[["render",function(l,e,i,u,m,v){const h=a("el-breadcrumb-item"),g=a("el-breadcrumb"),x=a("el-input");return o(),c("div",null,[t("div",k,[s(g,{separator:"/"},{default:n((()=>[s(h,null,{default:n((()=>[b,w])),_:1})])),_:1})]),t("div",q,[y,t("p",j,"直接通过设置类名为 el-icon-lx-iconName 来使用即可。例如：（共"+r(u.iconList.length)+"个图标）",1),_,t("div",z,[s(x,{class:"search",size:"large",modelValue:u.keyword,"onUpdate:modelValue":e[0]||(e[0]=l=>u.keyword=l),clearable:"",placeholder:"请输入图标名称"},null,8,["modelValue"])]),t("ul",null,[(o(!0),c(d,null,f(u.list,((l,e)=>(o(),c("li",{class:"icon-li",key:e},[t("div",V,[t("i",{class:p(`el-icon-lx-${l}`)},null,2),t("span",null,r(l),1)])])))),128))])])])}],["__scopeId","data-v-0a06c79c"]]);export{L as default};
