(this["webpackJsonpsoc-net"]=this["webpackJsonpsoc-net"]||[]).push([[3],{291:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__Wk3OV",dialog__items:"Dialogs_dialog__items__3G8Lg",active:"Dialogs_active__3m6x5",dialog:"Dialogs_dialog__lhEc_",img:"Dialogs_img__r2WD5",message:"Dialogs_message__1KsJm",messageInput:"Dialogs_messageInput__3z2vC",textarea:"Dialogs_textarea__32RFc",messageButton:"Dialogs_messageButton__3rgqI"}},292:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),i=t(127),m=t(291),o=t.n(m),g=t(16),c=function(e){var a="/Dialogs/"+e.id;return n.a.createElement("div",{className:o.a.dialog+" "+o.a.active},n.a.createElement("img",{src:e.img,alt:"profileImg",className:o.a.img}),n.a.createElement(g.b,{to:a},e.name))},l=function(e){return n.a.createElement("div",{className:o.a.message,id:e.id},e.message)},r=t(9),d=t(87),u=t(128),_=t(28),f=t(35),b=Object(f.a)(50),E=Object(u.a)({form:"dialogAddMessageForm"})((function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement(d.a,{component:_.b,name:"newMessageBody",validate:[f.b,b]}),n.a.createElement("button",null,"Send"))})),p=function(e){var a=e.dialogsPage,t=a.dialogsData.map((function(e){return n.a.createElement(c,{name:e.name,key:e.id,id:e.id,img:e.img})})),s=a.messagesData.map((function(e){return n.a.createElement(l,{message:e.message,key:e.id,id:e.id})}));if(!e.isAuth)return n.a.createElement(r.a,{to:"/Login"});return n.a.createElement("div",{className:o.a.dialogs},n.a.createElement("div",{className:o.a.dialog__items},t),n.a.createElement("div",{className:o.a.message},s,n.a.createElement(E,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}})))},v=t(11),D=t(126),N=t(8);a.default=Object(N.d)(Object(v.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(a){e(Object(i.b)(a))},updateNewMessageText:function(a){e(Object(i.c)(a))}}})),D.a)(p)}}]);
//# sourceMappingURL=3.43edad8d.chunk.js.map