"use strict";(self["webpackChunkvendo"]=self["webpackChunkvendo"]||[]).push([[838],{7193:function(t,o,e){e.r(o),e.d(o,{default:function(){return q}});var d=e(6252),i=e(6773);(0,d.dD)("data-v-4a4f32ac");const n={class:"container text-center"},s=(0,d._)("img",{class:"mx-auto",alt:"Vue logo",src:i.Z},null,-1);function l(t,o,e,i,l,r){const c=(0,d.up)("TodoList");return(0,d.wg)(),(0,d.iD)("div",n,[s,(0,d.Wm)(c)])}(0,d.Cn)();var r=e(3577);function c(t,o,e,i,n,s){const l=(0,d.up)("Todo"),c=(0,d.up)("CreateTodo");return(0,d.wg)(),(0,d.iD)("div",null,[(0,d._)("p",null,"Completed Tasks: "+(0,r.zw)(s.completedCount),1),(0,d._)("p",null,"Current Tasks: "+(0,r.zw)(s.currentCount),1),((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(t.todos,(t=>((0,d.wg)(),(0,d.j4)(l,{todo:t,key:t.id},null,8,["todo"])))),128)),(0,d.Wm)(c)])}var a=e(4709),u=e(9963);const p={class:"card"},m={class:"p-4"},h={class:"font-bold text-lg my-1"},w={class:"text-sm text-gray-600"},v=(0,d._)("div",{class:"divider"},null,-1),_={class:"buttons"},b=["id"],I=["id"],g={class:"p-4"},T=["id","for"],f=["id"],C=["id","for"],j=["id"],F=["id"],x=["id"],k=["id"];function y(t,o,e,i,n,s){const l=(0,d.up)("font-awesome-icon");return(0,d.wg)(),(0,d.iD)("div",p,[(0,d.wy)((0,d._)("div",m,[(0,d._)("div",h,(0,r.zw)(s.title),1),(0,d._)("div",w,(0,r.zw)(s.project),1),v,(0,d._)("div",_,[(0,d._)("button",{id:s.makeId("edit-todo"),class:"button icon",onClick:o[0]||(o[0]=(...t)=>s.showForm&&s.showForm(...t))},[(0,d.Wm)(l,{icon:"edit","fixed-width":""})],8,b),(0,d._)("button",{id:s.makeId("delete-todo"),class:"button icon",onClick:o[1]||(o[1]=t=>s.deleteTodo(e.todo.id))},[(0,d.Wm)(l,{icon:"trash","fixed-width":""})],8,I)])],512),[[u.F8,!n.isEditing]]),(0,d.wy)((0,d._)("div",g,[(0,d._)("label",{id:`label-${s.titleInputId}`,for:s.titleInputId},"Title",8,T),(0,d.wy)((0,d._)("input",{id:s.titleInputId,type:"text","onUpdate:modelValue":o[2]||(o[2]=t=>s.title=t)},null,8,f),[[u.nr,s.title]]),(0,d._)("label",{id:`label-${s.projectInputId}`,for:s.projectInputId},"Project",8,C),(0,d.wy)((0,d._)("input",{id:s.projectInputId,type:"text","onUpdate:modelValue":o[3]||(o[3]=t=>s.project=t)},null,8,j),[[u.nr,s.project]]),(0,d._)("button",{id:s.makeId("todo-edit-close"),class:"blue button",onClick:o[4]||(o[4]=(...t)=>s.hideForm&&s.hideForm(...t))}," Close ",8,F)],512),[[u.F8,n.isEditing]]),(0,d.wy)((0,d._)("div",{id:s.makeId("todo-completed"),class:"button attached green"}," Completed ",8,x),[[u.F8,e.todo.done]]),(0,d.wy)((0,d._)("div",{id:s.makeId("todo-complete"),class:"button attached red",onClick:o[5]||(o[5]=t=>s.completeTodo(e.todo.id))}," Complete ",8,k),[[u.F8,!e.todo.done]])])}var $=e(3423),D=e(7810),W=e(8947),E=e(1436);W.vI.add(E.Xcf,E.$aW);var V={components:{FontAwesomeIcon:D.GN},props:["todo"],data(){return{isEditing:!1}},computed:{title:{get(){return this.todo.title},set(t){this.editTodo(Object.assign({},this.todo,{title:t}))}},project:{get(){return this.todo.project},set(t){this.editTodo(Object.assign({},this.todo,{project:t}))}},titleInputId(){return this.makeId("todo-title-input")},projectInputId(){return this.makeId("todo-project-input")}},methods:{makeId(t){return t+"-"+this.todo.id},showForm(){this.isEditing=!0},hideForm(){this.isEditing=!1},editTodo(t){this.$store.dispatch($.eG,t)},deleteTodo(t){this.$store.dispatch($.Iy,t)},completeTodo(t){this.$store.dispatch($.OQ,t)}}};V.render=y;var z=V;const U={class:"card"},G={class:"p-4"},O=(0,d._)("label",{id:"new-todo-title-label",for:"new-todo-title"},"Title",-1),A=(0,d._)("label",{id:"new-todo-project-label",for:"new-todo-project"},"Project",-1),H=(0,d._)("div",{class:"divider m-0"},null,-1),L={class:"p-4"},N={class:"buttons"};function P(t,o,e,i,n,s){const l=(0,d.up)("font-awesome-icon");return(0,d.wg)(),(0,d.iD)("div",null,[(0,d.wy)((0,d._)("button",{id:"open-new-todo-form",class:"button icon",onClick:o[0]||(o[0]=(...t)=>s.openForm&&s.openForm(...t))},[(0,d.Wm)(l,{icon:"plus"})],512),[[u.F8,!n.isCreating]]),(0,d.wy)((0,d._)("div",U,[(0,d._)("div",G,[O,(0,d.wy)((0,d._)("input",{id:"new-todo-title",type:"text","onUpdate:modelValue":o[1]||(o[1]=t=>n.titleText=t)},null,512),[[u.nr,n.titleText]]),A,(0,d.wy)((0,d._)("input",{id:"new-todo-project",type:"text","onUpdate:modelValue":o[2]||(o[2]=t=>n.projectText=t)},null,512),[[u.nr,n.projectText]])]),H,(0,d._)("div",L,[(0,d._)("div",N,[(0,d._)("button",{id:"create-new-todo",class:"blue button",onClick:o[3]||(o[3]=(...t)=>s.sendForm&&s.sendForm(...t))},"Create"),(0,d._)("button",{id:"close-new-todo-form",class:"red button",onClick:o[4]||(o[4]=(...t)=>s.closeForm&&s.closeForm(...t))},"Cancel")])])],512),[[u.F8,n.isCreating]])])}W.vI.add(E.r8p);var K={components:{FontAwesomeIcon:D.GN},data(){return{titleText:"",projectText:"",isCreating:!1}},methods:{openForm(){this.isCreating=!0},closeForm(){this.isCreating=!1},sendForm(){if(this.titleText.length>0&&this.projectText.length>0){const t=this.titleText,o=this.projectText;this.$store.dispatch($.IH,{title:t,project:o,done:!1}),this.titleText="",this.projectText=""}this.closeForm()}}};K.render=P;var Q=K,X={computed:{...(0,a.rn)({todos:t=>t.todo.todos}),completedCount(){return this.todos.filter((t=>t.done)).length},currentCount(){return this.todos.filter((t=>!t.done)).length}},components:{Todo:z,CreateTodo:Q}};X.render=c;var Y=X,Z={components:{TodoList:Y}};Z.render=l,Z.__scopeId="data-v-4a4f32ac";var q=Z}}]);
//# sourceMappingURL=todo-application.8cb4d097.js.map