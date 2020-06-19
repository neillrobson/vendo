(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about~21833f8f"],{d384:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home ui center aligned container"},[i("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),i("TodoList")],1)},s=[],n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("p",[t._v("Completed Tasks: "+t._s(t.completedCount))]),o("p",[t._v("Current Tasks: "+t._s(t.currentCount))]),t._l(t.todos,(function(t){return o("Todo",{key:t.id,attrs:{todo:t}})})),o("CreateTodo")],2)},a=[],r=(o("4de4"),o("5530")),d=o("2f62"),c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ui centered card"},[o("div",{directives:[{name:"show",rawName:"v-show",value:!t.isEditing,expression:"!isEditing"}],staticClass:"content"},[o("div",{staticClass:"header"},[t._v(t._s(t.todo.title))]),o("div",{staticClass:"meta"},[t._v(t._s(t.todo.project))]),o("div",{staticClass:"ui divider"}),o("div",{staticClass:"ui buttons basic icon"},[o("button",{staticClass:"ui button",attrs:{id:t.makeId("edit-todo")},on:{click:t.showForm}},[o("i",{staticClass:"edit icon"})]),o("button",{staticClass:"ui button",attrs:{id:t.makeId("delete-todo")},on:{click:function(e){return t.deleteTodo(t.todo)}}},[o("i",{staticClass:"trash icon"})])])]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.isEditing,expression:"isEditing"}],staticClass:"content"},[o("div",{staticClass:"ui form"},[o("div",{staticClass:"field"},[o("label",{attrs:{for:t.titleInputId}},[t._v("Title")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.title,expression:"todo.title"}],attrs:{id:t.titleInputId,type:"text"},domProps:{value:t.todo.title},on:{input:function(e){e.target.composing||t.$set(t.todo,"title",e.target.value)}}})]),o("div",{staticClass:"field"},[o("label",{attrs:{for:t.projectInputId}},[t._v("Project")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.project,expression:"todo.project"}],attrs:{id:t.projectInputId,type:"text"},domProps:{value:t.todo.project},on:{input:function(e){e.target.composing||t.$set(t.todo,"project",e.target.value)}}})]),o("button",{staticClass:"ui basic blue button",attrs:{id:t.makeId("todo-edit-close")},on:{click:t.hideForm}},[t._v(" Close ")])])]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.todo.done,expression:"todo.done"}],staticClass:"ui bottom attached basic button green",attrs:{id:t.makeId("todo-completed")}},[t._v(" Completed ")]),o("div",{directives:[{name:"show",rawName:"v-show",value:!t.todo.done,expression:"!todo.done"}],staticClass:"ui bottom attached basic button red",attrs:{id:t.makeId("todo-complete")},on:{click:function(e){return t.completeTodo(t.todo)}}},[t._v(" Complete ")])])},l=[],u=o("a462"),p={props:["todo"],data:function(){return{isEditing:!1}},computed:{titleInputId:function(){return this.makeId("todo-title-input")},projectInputId:function(){return this.makeId("todo-project-input")}},methods:{makeId:function(t){return t+"-"+this.todo.id},showForm:function(){this.isEditing=!0},hideForm:function(){this.isEditing=!1},deleteTodo:function(t){this.$store.dispatch(u["e"],t)},completeTodo:function(t){this.$store.dispatch(u["b"],t)}}},m=p,v=o("2877"),h=Object(v["a"])(m,c,l,!1,null,null,null),f=h.exports,C=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("button",{directives:[{name:"show",rawName:"v-show",value:!t.isCreating,expression:"!isCreating"}],staticClass:"ui basic button icon",attrs:{id:"open-new-todo-form"},on:{click:t.openForm}},[o("i",{staticClass:"plus icon"})]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.isCreating,expression:"isCreating"}],staticClass:"ui centered card"},[o("div",{staticClass:"content"},[o("div",{staticClass:"ui form"},[o("div",{staticClass:"field"},[o("label",{attrs:{for:"new-todo-title"}},[t._v("Title")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.titleText,expression:"titleText"}],attrs:{id:"new-todo-title",type:"text"},domProps:{value:t.titleText},on:{input:function(e){e.target.composing||(t.titleText=e.target.value)}}})]),o("div",{staticClass:"field"},[o("label",{attrs:{for:"new-todo-project"}},[t._v("Project")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.projectText,expression:"projectText"}],attrs:{id:"new-todo-project",type:"text"},domProps:{value:t.projectText},on:{input:function(e){e.target.composing||(t.projectText=e.target.value)}}})])])]),o("div",{staticClass:"extra content"},[o("div",{staticClass:"ui two buttons"},[o("button",{staticClass:"ui basic blue button",attrs:{id:"create-new-todo"},on:{click:t.sendForm}},[t._v("Create")]),o("button",{staticClass:"ui basic red button",attrs:{id:"close-new-todo-form"},on:{click:t.closeForm}},[t._v("Cancel")])])])])])},b=[],w={data:function(){return{titleText:"",projectText:"",isCreating:!1}},methods:{openForm:function(){this.isCreating=!0},closeForm:function(){this.isCreating=!1},sendForm:function(){if(this.titleText.length>0&&this.projectText.length>0){var t=this.titleText,e=this.projectText;this.$store.dispatch(u["d"],{title:t,project:e,done:!1}),this.titleText="",this.projectText=""}this.closeForm()}}},x=w,g=Object(v["a"])(x,C,b,!1,null,null,null),T=g.exports,j={computed:Object(r["a"])(Object(r["a"])({},Object(d["c"])({todos:function(t){return t.todo.todos}})),{},{completedCount:function(){return this.todos.filter((function(t){return t.done})).length},currentCount:function(){return this.todos.filter((function(t){return!t.done})).length}}),components:{Todo:f,CreateTodo:T}},_=j,k=Object(v["a"])(_,n,a,!1,null,null,null),I=k.exports,E={components:{TodoList:I}},F=E,N=Object(v["a"])(F,i,s,!1,null,null,null);e["default"]=N.exports}}]);