(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["todo-application~21833f8f"],{"57f2":function(t,e,o){},ccb5:function(t,e,o){"use strict";o("57f2")},d384:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container mx-auto px-6 text-center"},[i("img",{staticClass:"mx-auto",attrs:{alt:"Vue logo",src:o("cf05")}}),i("TodoList")],1)},n=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("p",[t._v("Completed Tasks: "+t._s(t.completedCount))]),o("p",[t._v("Current Tasks: "+t._s(t.currentCount))]),t._l(t.todos,(function(t){return o("Todo",{key:t.id,attrs:{todo:t}})})),o("CreateTodo")],2)},a=[],d=o("5530"),r=(o("4de4"),o("2f62")),c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"card"},[o("div",{directives:[{name:"show",rawName:"v-show",value:!t.isEditing,expression:"!isEditing"}],staticClass:"p-4"},[o("div",{staticClass:"font-bold text-lg my-1"},[t._v(t._s(t.todo.title))]),o("div",{staticClass:"text-sm text-gray-600"},[t._v(t._s(t.todo.project))]),o("div",{staticClass:"divider"}),o("div",{staticClass:"buttons"},[o("button",{staticClass:"button icon",attrs:{id:t.makeId("edit-todo")},on:{click:t.showForm}},[o("font-awesome-icon",{attrs:{icon:"edit","fixed-width":""}})],1),o("button",{staticClass:"button icon",attrs:{id:t.makeId("delete-todo")},on:{click:function(e){return t.deleteTodo(t.todo)}}},[o("font-awesome-icon",{attrs:{icon:"trash","fixed-width":""}})],1)])]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.isEditing,expression:"isEditing"}],staticClass:"p-4"},[o("label",{attrs:{id:"label-"+t.titleInputId,for:t.titleInputId}},[t._v("Title")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.title,expression:"todo.title"}],attrs:{id:t.titleInputId,type:"text"},domProps:{value:t.todo.title},on:{input:function(e){e.target.composing||t.$set(t.todo,"title",e.target.value)}}}),o("label",{attrs:{id:"label-"+t.projectInputId,for:t.projectInputId}},[t._v("Project")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.project,expression:"todo.project"}],attrs:{id:t.projectInputId,type:"text"},domProps:{value:t.todo.project},on:{input:function(e){e.target.composing||t.$set(t.todo,"project",e.target.value)}}}),o("button",{staticClass:"blue button",attrs:{id:t.makeId("todo-edit-close")},on:{click:t.hideForm}},[t._v(" Close ")])]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.todo.done,expression:"todo.done"}],staticClass:"button attached green",attrs:{id:t.makeId("todo-completed")}},[t._v(" Completed ")]),o("div",{directives:[{name:"show",rawName:"v-show",value:!t.todo.done,expression:"!todo.done"}],staticClass:"button attached red",attrs:{id:t.makeId("todo-complete")},on:{click:function(e){return t.completeTodo(t.todo)}}},[t._v(" Complete ")])])},l=[],u=o("a462"),p=o("ad3d"),m=o("ecee"),v=o("c074");m["c"].add(v["a"],v["d"]);var f={components:{FontAwesomeIcon:p["a"]},props:["todo"],data:function(){return{isEditing:!1}},computed:{titleInputId:function(){return this.makeId("todo-title-input")},projectInputId:function(){return this.makeId("todo-project-input")}},methods:{makeId:function(t){return t+"-"+this.todo.id},showForm:function(){this.isEditing=!0},hideForm:function(){this.isEditing=!1},deleteTodo:function(t){this.$store.dispatch(u["e"],t)},completeTodo:function(t){this.$store.dispatch(u["b"],t)}}},h=f,w=o("2877"),x=Object(w["a"])(h,c,l,!1,null,null,null),C=x.exports,b=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("button",{directives:[{name:"show",rawName:"v-show",value:!t.isCreating,expression:"!isCreating"}],staticClass:"button icon",attrs:{id:"open-new-todo-form"},on:{click:t.openForm}},[o("font-awesome-icon",{attrs:{icon:"plus"}})],1),o("div",{directives:[{name:"show",rawName:"v-show",value:t.isCreating,expression:"isCreating"}],staticClass:"card"},[o("div",{staticClass:"p-4"},[o("label",{attrs:{id:"new-todo-title-label",for:"new-todo-title"}},[t._v("Title")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.titleText,expression:"titleText"}],attrs:{id:"new-todo-title",type:"text"},domProps:{value:t.titleText},on:{input:function(e){e.target.composing||(t.titleText=e.target.value)}}}),o("label",{attrs:{id:"new-todo-project-label",for:"new-todo-project"}},[t._v("Project")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.projectText,expression:"projectText"}],attrs:{id:"new-todo-project",type:"text"},domProps:{value:t.projectText},on:{input:function(e){e.target.composing||(t.projectText=e.target.value)}}})]),o("div",{staticClass:"divider m-0"}),o("div",{staticClass:"p-4"},[o("div",{staticClass:"buttons"},[o("button",{staticClass:"blue button",attrs:{id:"create-new-todo"},on:{click:t.sendForm}},[t._v("Create")]),o("button",{staticClass:"red button",attrs:{id:"close-new-todo-form"},on:{click:t.closeForm}},[t._v("Cancel")])])])])])},g=[];m["c"].add(v["c"]);var j={components:{FontAwesomeIcon:p["a"]},data:function(){return{titleText:"",projectText:"",isCreating:!1}},methods:{openForm:function(){this.isCreating=!0},closeForm:function(){this.isCreating=!1},sendForm:function(){if(this.titleText.length>0&&this.projectText.length>0){var t=this.titleText,e=this.projectText;this.$store.dispatch(u["d"],{title:t,project:e,done:!1}),this.titleText="",this.projectText=""}this.closeForm()}}},T=j,I=Object(w["a"])(T,b,g,!1,null,null,null),_=I.exports,k={computed:Object(d["a"])(Object(d["a"])({},Object(r["d"])({todos:function(t){return t.todo.todos}})),{},{completedCount:function(){return this.todos.filter((function(t){return t.done})).length},currentCount:function(){return this.todos.filter((function(t){return!t.done})).length}}),components:{Todo:C,CreateTodo:_}},F=k,E=Object(w["a"])(F,s,a,!1,null,null,null),N=E.exports,$={components:{TodoList:N}},y=$,O=(o("ccb5"),Object(w["a"])(y,i,n,!1,null,"37eaefc4",null));e["default"]=O.exports}}]);