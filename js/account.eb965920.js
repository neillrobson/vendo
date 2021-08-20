"use strict";(self["webpackChunkvendo"]=self["webpackChunkvendo"]||[]).push([[809],{3709:function(e,r,s){s.r(r),s.d(r,{default:function(){return b}});var t=s(6252),o=s(3577),n=s(9963);const a={class:"container"},l={key:0},d=(0,t._)("strong",null,"Please correct the following error(s):",-1),i=(0,t._)("label",{for:"username"},"Username (Visitor ID)",-1),u=(0,t._)("label",{for:"role"},"Role (Account ID)",-1),w=(0,t._)("label",{for:"new-password"},"New Password",-1),p=(0,t._)("label",{for:"new-password-retype"},"Retype",-1),c=(0,t._)("label",{for:"current-password"},"Current Password",-1),m=(0,t._)("hr",{class:"my-4"},null,-1),f={class:"flex gap-1"};function y(e,r,s,y,h,P){return(0,t.wg)(),(0,t.iD)("div",a,[h.errors.length?((0,t.wg)(),(0,t.iD)("p",l,[d,(0,t._)("ul",null,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(h.errors,((e,r)=>((0,t.wg)(),(0,t.iD)("li",{key:r},(0,o.zw)(e),1)))),128))])])):(0,t.kq)("",!0),i,(0,t.wy)((0,t._)("input",{id:"username",type:"text","onUpdate:modelValue":r[0]||(r[0]=e=>h.formUsername=e)},null,512),[[n.nr,h.formUsername]]),u,(0,t.wy)((0,t._)("input",{id:"role",type:"text","onUpdate:modelValue":r[1]||(r[1]=e=>h.formRole=e)},null,512),[[n.nr,h.formRole]]),w,(0,t.wy)((0,t._)("input",{id:"new-password",type:"password","onUpdate:modelValue":r[2]||(r[2]=e=>h.newPassword=e)},null,512),[[n.nr,h.newPassword]]),p,(0,t.wy)((0,t._)("input",{id:"new-password-retype",type:"password","onUpdate:modelValue":r[3]||(r[3]=e=>h.newPasswordRetype=e)},null,512),[[n.nr,h.newPasswordRetype]]),c,(0,t.wy)((0,t._)("input",{id:"current-password",type:"password","onUpdate:modelValue":r[4]||(r[4]=e=>h.currentPassword=e)},null,512),[[n.nr,h.currentPassword]]),(0,t._)("button",{class:"button primary",type:"submit",onClick:r[5]||(r[5]=(...e)=>P.submit&&P.submit(...e))},"Submit"),m,(0,t._)("div",f,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(h.accounts,(e=>((0,t.wg)(),(0,t.iD)("span",{key:e,class:(0,o.C_)([e,"box link flex-auto border cursor-pointer text-center"])},(0,o.zw)(e),3)))),128))])])}var h=s(4709);const P=["FIG","CYN","FQL","GRN","BLU","RED","ORG","PPL","PNK","BEG","SKY","GRY","BLK","WHT","YLW","DGN","LIM","TEL","MNT","CHR","SCR","PLM","DPB","LAV","TEA","CHC","GLD","FST"];var R={data(){return{errors:[],formUsername:"",formRole:"",newPassword:"",newPasswordRetype:"",currentPassword:"",accounts:P}},computed:(0,h.Se)(["visitorId","accountId"]),mounted(){this.prefillUserData()},methods:{prefillUserData(){this.formUsername=this.visitorId,this.formRole=this.accountId,this.newPassword="",this.newPasswordRetype="",this.currentPassword=""},submit(){this.validate()&&this.prefillUserData()},validate(){return this.errors=[],this.newPassword===this.newPasswordRetype||(this.errors.push("Password fields do not match"),!1)}}};R.render=y;var b=R}}]);
//# sourceMappingURL=account.eb965920.js.map