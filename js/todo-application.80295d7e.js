"use strict";(self["webpackChunkvendo"]=self["webpackChunkvendo"]||[]).push([[838],{4110:function(t,o,e){e.r(o),e.d(o,{default:function(){return tt}});var d=e(6252),i=e(6949);const n=t=>((0,d.dD)("data-v-e3a3ff54"),t=t(),(0,d.Cn)(),t),s={class:"container text-center"},l=n((()=>(0,d._)("img",{class:"mx-auto",alt:"Vue logo",src:i},null,-1)));function r(t,o,e,i,n,r){const c=(0,d.up)("TodoList");return(0,d.wg)(),(0,d.iD)("div",s,[l,(0,d.Wm)(c)])}var c=e(3577);function a(t,o,e,i,n,s){const l=(0,d.up)("Todo"),r=(0,d.up)("CreateTodo");return(0,d.wg)(),(0,d.iD)("div",null,[(0,d._)("p",null,"Completed Tasks: "+(0,c.zw)(s.completedCount),1),(0,d._)("p",null,"Current Tasks: "+(0,c.zw)(s.currentCount),1),((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(t.todos,(t=>((0,d.wg)(),(0,d.j4)(l,{key:t.id,todo:t},null,8,["todo"])))),128)),(0,d.Wm)(r)])}var u=e(894),p=e(9963);const m={class:"card"},h={class:"p-4"},w={class:"font-bold text-lg my-1"},v={class:"text-sm text-gray-600"},b=(0,d._)("div",{class:"divider"},null,-1),_={class:"buttons"},I=["id"],f=["id"],g={class:"p-4"},T=["id","for"],C=["id"],j=["id","for"],F=["id"],x=["id"],k=["id"],y=["id"];function $(t,o,e,i,n,s){const l=(0,d.up)("font-awesome-icon");return(0,d.wg)(),(0,d.iD)("div",m,[(0,d.wy)((0,d._)("div",h,[(0,d._)("div",w,(0,c.zw)(s.title),1),(0,d._)("div",v,(0,c.zw)(s.project),1),b,(0,d._)("div",_,[(0,d._)("button",{id:s.makeId("edit-todo"),class:"button icon",onClick:o[0]||(o[0]=(...t)=>s.showForm&&s.showForm(...t))},[(0,d.Wm)(l,{icon:"edit","fixed-width":""})],8,I),(0,d._)("button",{id:s.makeId("delete-todo"),class:"button icon",onClick:o[1]||(o[1]=t=>s.deleteTodo(e.todo.id))},[(0,d.Wm)(l,{icon:"trash","fixed-width":""})],8,f)])],512),[[p.F8,!n.isEditing]]),(0,d.wy)((0,d._)("div",g,[(0,d._)("label",{id:`label-${s.titleInputId}`,for:s.titleInputId},"Title",8,T),(0,d.wy)((0,d._)("input",{id:s.titleInputId,"onUpdate:modelValue":o[2]||(o[2]=t=>s.title=t),type:"text"},null,8,C),[[p.nr,s.title]]),(0,d._)("label",{id:`label-${s.projectInputId}`,for:s.projectInputId},"Project",8,j),(0,d.wy)((0,d._)("input",{id:s.projectInputId,"onUpdate:modelValue":o[3]||(o[3]=t=>s.project=t),type:"text"},null,8,F),[[p.nr,s.project]]),(0,d._)("button",{id:s.makeId("todo-edit-close"),class:"blue button",onClick:o[4]||(o[4]=(...t)=>s.hideForm&&s.hideForm(...t))}," Close ",8,x)],512),[[p.F8,n.isEditing]]),(0,d.wy)((0,d._)("div",{id:s.makeId("todo-completed"),class:"button attached green"}," Completed ",8,k),[[p.F8,e.todo.done]]),(0,d.wy)((0,d._)("div",{id:s.makeId("todo-complete"),class:"button attached red",onClick:o[5]||(o[5]=t=>s.completeTodo(e.todo.id))}," Complete ",8,y),[[p.F8,!e.todo.done]])])}var D=e(3423),W=e(7810),E=e(8947),V=e(1436);E.vI.add(V.Xcf,V.$aW);var z={components:{FontAwesomeIcon:W.GN},props:{todo:{type:Object,required:!0}},data(){return{isEditing:!1}},computed:{title:{get(){return this.todo.title},set(t){this.editTodo(Object.assign({},this.todo,{title:t}))}},project:{get(){return this.todo.project},set(t){this.editTodo(Object.assign({},this.todo,{project:t}))}},titleInputId(){return this.makeId("todo-title-input")},projectInputId(){return this.makeId("todo-project-input")}},methods:{makeId(t){return t+"-"+this.todo.id},showForm(){this.isEditing=!0},hideForm(){this.isEditing=!1},editTodo(t){this.$store.dispatch(D.eG,t)},deleteTodo(t){this.$store.dispatch(D.Iy,t)},completeTodo(t){this.$store.dispatch(D.OQ,t)}}},O=e(3744);const U=(0,O.Z)(z,[["render",$]]);var Z=U;const G={class:"card"},A={class:"p-4"},H=(0,d._)("label",{id:"new-todo-title-label",for:"new-todo-title"},"Title",-1),L=(0,d._)("label",{id:"new-todo-project-label",for:"new-todo-project"},"Project",-1),N=(0,d._)("div",{class:"divider m-0"},null,-1),P={class:"p-4"},q={class:"buttons"};function K(t,o,e,i,n,s){const l=(0,d.up)("font-awesome-icon");return(0,d.wg)(),(0,d.iD)("div",null,[(0,d.wy)((0,d._)("button",{id:"open-new-todo-form",class:"button icon",onClick:o[0]||(o[0]=(...t)=>s.openForm&&s.openForm(...t))},[(0,d.Wm)(l,{icon:"plus"})],512),[[p.F8,!n.isCreating]]),(0,d.wy)((0,d._)("div",G,[(0,d._)("div",A,[H,(0,d.wy)((0,d._)("input",{id:"new-todo-title","onUpdate:modelValue":o[1]||(o[1]=t=>n.titleText=t),type:"text"},null,512),[[p.nr,n.titleText]]),L,(0,d.wy)((0,d._)("input",{id:"new-todo-project","onUpdate:modelValue":o[2]||(o[2]=t=>n.projectText=t),type:"text"},null,512),[[p.nr,n.projectText]])]),N,(0,d._)("div",P,[(0,d._)("div",q,[(0,d._)("button",{id:"create-new-todo",class:"blue button",onClick:o[3]||(o[3]=(...t)=>s.sendForm&&s.sendForm(...t))}," Create "),(0,d._)("button",{id:"close-new-todo-form",class:"red button",onClick:o[4]||(o[4]=(...t)=>s.closeForm&&s.closeForm(...t))}," Cancel ")])])],512),[[p.F8,n.isCreating]])])}E.vI.add(V.r8p);var Q={components:{FontAwesomeIcon:W.GN},data(){return{titleText:"",projectText:"",isCreating:!1}},methods:{openForm(){this.isCreating=!0},closeForm(){this.isCreating=!1},sendForm(){if(this.titleText.length>0&&this.projectText.length>0){const t=this.titleText,o=this.projectText;this.$store.dispatch(D.IH,{title:t,project:o,done:!1}),this.titleText="",this.projectText=""}this.closeForm()}}};const X=(0,O.Z)(Q,[["render",K]]);var Y=X,B={components:{Todo:Z,CreateTodo:Y},computed:{...(0,u.rn)({todos:t=>t.todo.todos}),completedCount(){return this.todos.filter((t=>t.done)).length},currentCount(){return this.todos.filter((t=>!t.done)).length}}};const J=(0,O.Z)(B,[["render",a]]);var M=J,R={components:{TodoList:M}};const S=(0,O.Z)(R,[["render",r],["__scopeId","data-v-e3a3ff54"]]);var tt=S}}]);
//# sourceMappingURL=todo-application.80295d7e.js.map