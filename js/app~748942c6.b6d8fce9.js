(function(e){function t(t){for(var r,s,i=t[0],u=t[1],c=t[2],d=0,f=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={"app~748942c6":0},o=[];function s(e){return i.p+"js/"+({"about~21833f8f":"about~21833f8f"}[e]||e)+"."+{"about~21833f8f":"9b8777c9"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(e);var c=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,n[1](c)}a[e]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vendo/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var l=c;o.push([0,"chunk-vendors~253ae210","chunk-vendors~6f8b511b","chunk-vendors~62ab5815","chunk-vendors~38d28a58","chunk-vendors~7e5e8261","chunk-vendors~70205952","chunk-vendors~b5906859","chunk-vendors~db300d2f","chunk-vendors~6216c3af","chunk-vendors~70aabc29","chunk-vendors~b58f7129","chunk-vendors~ec8c427e","chunk-vendors~e1b943a0","chunk-vendors~fdc6512a","chunk-vendors~cf8ca540","chunk-vendors~d2305125"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},"4cfe":function(e,t,n){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r,a,o=n("2b0e"),s=n("bc3a"),i=n.n(s),u=n("2f62"),c=(n("c975"),n("d81d"),n("13d5"),n("a434"),n("ade3")),d=n("a462"),l={state:{todos:[{id:1,title:"Todo A",project:"Project A",done:!1},{id:2,title:"Todo B",project:"Project B",done:!0},{id:3,title:"Todo C",project:"Project C",done:!1},{id:4,title:"Todo D",project:"Project D",done:!1}]},getters:{todoIndex:function(e){return function(t){return e.todos.indexOf(t)}},newTodoId:function(e){return e.todos.map((function(e){return e.id})).reduce((function(e,t){return Math.max(e,t)}),0)+1}},mutations:(r={},Object(c["a"])(r,d["f"],(function(e,t){e.todos.splice(t,1)})),Object(c["a"])(r,d["a"],(function(e,t){e.todos.push(t)})),Object(c["a"])(r,d["c"],(function(e,t){e.todos[t].done=!0})),r),actions:(a={},Object(c["a"])(a,d["e"],(function(e,t){var n=e.getters.todoIndex(t);e.commit(d["f"],n)})),Object(c["a"])(a,d["d"],(function(e,t){t.id=e.getters.newTodoId,e.commit(d["a"],t)})),Object(c["a"])(a,d["b"],(function(e,t){var n=e.getters.todoIndex(t);e.commit(d["c"],n)})),a)},f=(n("d3b7"),n("96cf"),n("1da1")),p=n("14b7"),m=n.n(p),v="Successful authentication",h="Authentication error",g="Authentication loading",b="Unset authentication status",w="token",_="Log in",y="Log out",k="Send user credentials to Pendo",O="Update the currently logged-in user's data",P="success",j="error",x="loading";n("99af"),n("fb6a");(function(e){(function(t,n,r,a,o){var s,i,u,c,d;for(o=t[a]=t[a]||{},o._q=[],s=["initialize","identify","updateOptions","pageLoad"],i=0,u=s.length;i<u;++i)(function(e){o[e]=o[e]||function(){o._q[e===s[0]?"unshift":"push"]([e].concat([].slice.call(arguments,0)))}})(s[i]);c=n.createElement(r),c.async=!0,c.src="https://pendo-wildlings-static.storage.googleapis.com/agent/static/"+e+"/pendo.js",d=n.getElementsByTagName(r)[0],d.parentNode.insertBefore(c,d)})(window,document,"script","pendo")})("697ae132-66e8-47f4-6858-96da721a7d3c");var S,U,C=function(e){var t=window.pendo;"function"===typeof t.isReady&&t.isReady()?t.identify(e):t.initialize(e)},I={status:"",token:localStorage.getItem("token")||null},R={isLoggedIn:function(e){return null!=e.token},userData:function(e,t){return t.isLoggedIn?m.a.decode(e.token):{}},username:function(e,t){return t.userData.username},role:function(e,t){return t.userData.role}},T=(S={},Object(c["a"])(S,_,(function(e,t){var n=e.commit,r=e.dispatch;return new Promise((function(e,a){n(w,null),n(g),i.a.post("login",t).then((function(t){n(w,t.data),n(v),r(k),e(t)})).catch((function(e){n(h),a(e)}))}))})),Object(c["a"])(S,y,(function(e){var t=e.commit;return new Promise((function(e){t(w,null),t(b),e()}))})),Object(c["a"])(S,k,(function(e){var t=e.getters;C({visitor:{id:t.username}})})),Object(c["a"])(S,O,(function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function n(){var r,a,o,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.dispatch,o=e.state,n.next=3,i.a.put("edit",t,{headers:{Authorization:"Bearer ".concat(o.token)}});case 3:s=n.sent,r(w,s.data),a(k);case 6:case"end":return n.stop()}}),n)})))()})),S),A=(U={},Object(c["a"])(U,v,(function(e){e.status=P})),Object(c["a"])(U,h,(function(e){e.status=j})),Object(c["a"])(U,g,(function(e){e.status=x})),Object(c["a"])(U,b,(function(e){e.status=""})),Object(c["a"])(U,w,(function(e,t){e.token=t||null,e.token?localStorage.setItem("token",e.token):localStorage.removeItem("token")})),U),L={state:I,getters:R,actions:T,mutations:A};o["a"].use(u["a"]);var N=new u["a"].Store({modules:{todo:l,auth:L}}),E=N,$=(n("45fc"),n("8c4f")),D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ui text container"},[n("h1",{staticClass:"ui header"},[e._v("Welcome to Vendo")]),e._m(0),e._m(1),e._m(2),n("h2",{staticClass:"ui header"},[e._v("Housekeeping")]),n("div",{staticClass:"ui two column middle aligned grid"},[n("div",{staticClass:"column"},[n("button",{staticClass:"ui button",on:{click:e.resetUsers}},[e._v("Reset Users")])]),e._m(3)])])},J=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" Vendo is a programming sandbox that "),n("a",{attrs:{href:"https://neillrobson.com"}},[e._v("Neill")]),e._v(" is using to learn about "),n("a",{attrs:{href:"https://vuejs.org"}},[e._v("Vue")]),e._v(" and "),n("a",{attrs:{href:"https://pendo.io"}},[e._v("Pendo")]),e._v(". ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" You might notice the fairly rigorous user authentication functionality implemented on this site. Rest assured, it is all "),n("strong",[e._v("completely bogus")]),e._v(': all user data is getting stored quite simply in the browser\'s local storage, and the "backend server" is simply a Javascript file mocking an API. The only true server receiving any data is operated by Pendo itself. ')])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" That said, have fun hacking around with abandon. Please break this site and "),n("a",{attrs:{href:"https://github.com/neillrobson/vendo/issues"}},[e._v("let me know about it")]),e._v(", so that I can learn and grow! ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"column"},[e._v(" Clear current user data and add the user "),n("code",[e._v("nerob")]),e._v(" with password "),n("code",[e._v("letmein")]),e._v(". ")])}],q=(n("2ca0"),n("53ca")),z=n("d4ec"),B=n("bee2"),M=n("94db"),V=n.n(M),H=n("279c"),W=n.n(H),G=new V.a(i.a),Y="users",F="secret",K=10,Q=function(){function e(t){Object(z["a"])(this,e),this.key=t}return Object(B["a"])(e,[{key:"createUser",value:function(e){var t=this.users;if(t[e.username])throw"Username already exists";t[e.username]=e,this.users=t}},{key:"readUser",value:function(e){return this.users[e]}},{key:"updateUser",value:function(e){var t=this.users;if(!t[e.username])throw"User with given username doesn't exist";t[e.username]=e,this.users=t}},{key:"deleteUser",value:function(e){var t=this.users;delete t[e],this.users=t}},{key:"users",get:function(){var e=localStorage.getItem(this.key);return e?JSON.parse(e):{}},set:function(e){localStorage.setItem(this.key,JSON.stringify(e))}}]),e}(),X=new Q(Y);function Z(e){return m.a.sign({username:e.username,role:e.role},F)}function ee(e){var t="Bearer ";if(!e)throw"No authorization header given";if(!e.startsWith(t))throw'Authorization header does not follow "Bearer" scheme';var n,r=e.substring(t.length);try{n=m.a.verify(r,F)}catch(s){throw"Invalid JWT"}var a=n.username,o=X.readUser(a);if(!o)throw"Invalid JWT";return o}G.onPost("/login").reply((function(e){var t,n;try{var r=JSON.parse(e.data);t=r.username,n=r.password}catch(o){return[400]}var a=X.readUser(t);return a?W.a.compare(n,a.password).then((function(e){return e?[200,Z(a)]:[401,"Incorrect password"]})):[401,"Unrecognized username"]})),G.onPost("/register").reply(function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,o=JSON.parse(t.data),n=o.username,r=o.role,a=o.password,n&&r&&a){e.next=7;break}throw"Missing required field";case 7:e.next=12;break;case 9:return e.prev=9,e.t0=e["catch"](0),e.abrupt("return",[400]);case 12:return e.next=14,W.a.hash(a,K);case 14:s=e.sent,e.prev=15,X.createUser({username:n,role:r,password:s}),e.next=22;break;case 19:return e.prev=19,e.t1=e["catch"](15),e.abrupt("return",[422,e.t1]);case 22:return e.abrupt("return",[201]);case 23:case"end":return e.stop()}}),e,null,[[0,9],[15,19]])})));return function(t){return e.apply(this,arguments)}}()),G.onPut("/edit").reply(function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,o,s,i,u,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:e.prev=0,n=ee(t.headers.Authorization),e.next=7;break;case 4:return e.prev=4,e.t0=e["catch"](0),e.abrupt("return",[401,e.t0]);case 7:e.prev=7,r=JSON.parse(t.data),e.next=14;break;case 11:return e.prev=11,e.t1=e["catch"](7),e.abrupt("return",[400,"Could not parse request body as JSON"]);case 14:if(a=r.currentPassword,e.t2=!a,e.t2){e.next=20;break}return e.next=19,W.a.compare(a,n.password);case 19:e.t2=!e.sent;case 20:if(!e.t2){e.next=22;break}return e.abrupt("return",[401,"Incorrect password"]);case 22:if(o=r.userInfo,o&&"object"===Object(q["a"])(o)){e.next=25;break}return e.abrupt("return",[400,"Could not parse user information from request body"]);case 25:if(s=o.username,i=o.role,u=o.password,c=n.username,!s||s===c){e.next=39;break}n.username=s,X.deleteUser(c),e.prev=32,X.createUser(n),e.next=39;break;case 36:return e.prev=36,e.t3=e["catch"](32),e.abrupt("return",[422,e.t3]);case 39:if(!u){e.next=43;break}return e.next=42,W.a.hash(u,K);case 42:n.password=e.sent;case 43:return n.role=i||n.role,X.updateUser(n),e.abrupt("return",[200,Z(n)]);case 46:case"end":return e.stop()}}),e,null,[[0,4],[7,11],[32,36]])})));return function(t){return e.apply(this,arguments)}}());var te={nerob:{username:"nerob",password:W.a.hashSync("letmein",10),role:"user"}},ne={methods:{resetUsers:function(){localStorage.setItem(Y,JSON.stringify(te))}}},re=ne,ae=n("2877"),oe=Object(ae["a"])(re,D,J,!1,null,null,null),se=oe.exports,ie=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ui middle aligned center aligned grid"},[r("div",{staticClass:"column"},[r("img",{attrs:{src:n("cf05"),alt:"Vue logo"}}),r("form",{staticClass:"ui large form",on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[e.authStatus===e.STATUS_LOADING?r("div",{staticClass:"ui message"},[r("p",[e._v("Logging in...")])]):e._e(),e.authStatus===e.STATUS_SUCCESS?r("div",{staticClass:"ui message positive"},[r("p",[e._v("You are authenticated!")])]):e._e(),e.authStatus===e.STATUS_ERROR?r("div",{staticClass:"ui message negative"},[r("p",[e._v("Invalid credentials")])]):e._e(),r("div",{staticClass:"ui stacked segment"},[r("div",{staticClass:"field"},[r("div",{staticClass:"ui left icon input"},[r("i",{staticClass:"icon user"}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",name:"username",placeholder:"Username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})])]),r("div",{staticClass:"field"},[r("div",{staticClass:"ui left icon input"},[r("i",{staticClass:"icon lock"}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]),r("button",{staticClass:"ui fluid large submit button",attrs:{type:"submit"}},[e._v("Log in")])])])])])},ue=[],ce={data:function(){return{username:"",password:"",STATUS_SUCCESS:P,STATUS_LOADING:x,STATUS_ERROR:j}},computed:Object(u["d"])({authStatus:function(e){return e.auth.status}}),methods:{handleSubmit:function(){var e=this,t=this.username,n=this.password;this.$store.dispatch(_,{username:t,password:n}).then((function(){null!=e.$route.params.nextUrl?e.$router.push(e.$route.params.nextUrl):e.$router.push("/")}),(function(){}))}}},de=ce,le=(n("785b"),Object(ae["a"])(de,ie,ue,!1,null,"57596d18",null)),fe=le.exports,pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ui container form"},[e.errors.length?n("p",[n("strong",[e._v("Please correct the following error(s):")]),n("ul",e._l(e.errors,(function(t,r){return n("li",{key:r},[e._v(e._s(t))])})),0)]):e._e(),n("div",{staticClass:"field"},[n("label",{attrs:{for:"username"}},[e._v("Username (Visitor ID)")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.formUsername,expression:"formUsername"}],attrs:{id:"username",type:"text"},domProps:{value:e.formUsername},on:{input:function(t){t.target.composing||(e.formUsername=t.target.value)}}})]),n("div",{staticClass:"field"},[n("label",{attrs:{for:"role"}},[e._v("Role (Account ID)")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.formRole,expression:"formRole"}],attrs:{id:"role",type:"text"},domProps:{value:e.formRole},on:{input:function(t){t.target.composing||(e.formRole=t.target.value)}}})]),n("div",{staticClass:"two fields"},[n("div",{staticClass:"field"},[n("label",{attrs:{for:"new-password"}},[e._v("New Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newPassword,expression:"newPassword"}],attrs:{id:"new-password",type:"password"},domProps:{value:e.newPassword},on:{input:function(t){t.target.composing||(e.newPassword=t.target.value)}}})]),n("div",{staticClass:"field"},[n("label",{attrs:{for:"new-password-retype"}},[e._v("Retype")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newPasswordRetype,expression:"newPasswordRetype"}],attrs:{id:"new-password-retype",type:"password"},domProps:{value:e.newPasswordRetype},on:{input:function(t){t.target.composing||(e.newPasswordRetype=t.target.value)}}})])]),n("div",{staticClass:"field"},[n("label",{attrs:{for:"current-password"}},[e._v("Current Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentPassword,expression:"currentPassword"}],attrs:{id:"current-password",type:"password"},domProps:{value:e.currentPassword},on:{input:function(t){t.target.composing||(e.currentPassword=t.target.value)}}})]),n("button",{staticClass:"ui button",attrs:{type:"submit"},on:{click:e.submit}},[e._v("Submit")])])},me=[],ve=n("5530"),he={data:function(){return{errors:[],formUsername:"",formRole:"",newPassword:"",newPasswordRetype:"",currentPassword:""}},computed:Object(u["c"])(["username","role"]),mounted:function(){this.prefillUserData()},methods:Object(ve["a"])(Object(ve["a"])({},Object(u["b"])({editUser:O})),{},{prefillUserData:function(){this.formUsername=this.username,this.formRole=this.role,this.newPassword="",this.newPasswordRetype="",this.currentPassword=""},submit:function(){var e=this;if(this.validate()){var t={currentPassword:this.currentPassword,userInfo:{username:this.formUsername,role:this.formRole,password:this.newPassword}};this.editUser(t).then((function(){e.prefillUserData()}),(function(t){var n=t.response;n&&e.errors.push("Server returned ".concat(n.status,": ").concat(n.data))}))}},validate:function(){return this.errors=[],this.newPassword===this.newPasswordRetype||(this.errors.push("Password fields do not match"),!1)}})},ge=he,be=Object(ae["a"])(ge,pe,me,!1,null,null,null),we=be.exports;o["a"].use($["a"]);var _e=[{path:"/",name:"Home",component:se},{path:"/login",name:"Login",component:fe},{path:"/todo-app",name:"Todo Application",component:function(){return n.e("about~21833f8f").then(n.bind(null,"d384"))},meta:{requiresAuth:!0}},{path:"/account",name:"Account",component:we,meta:{requiresAuth:!0}}],ye=new $["a"]({mode:"history",base:"/vendo/",routes:_e});ye.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requiresAuth}))&&!E.getters.isLoggedIn?n({name:"Login",params:{nextUrl:e.fullPath}}):n()}));var ke=ye,Oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:{name:"Home"}}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:{name:"Todo Application"}}},[e._v("Todo List")]),e._v(" | "),n("router-link",{attrs:{to:{name:"Account"}}},[e._v("My Account")]),e.isLoggedIn?e._e():n("span",[e._v(" | "),n("router-link",{attrs:{to:{name:"Login"}}},[e._v("Log In")])],1),e.isLoggedIn?n("span",[e._v(" | "),n("a",{on:{click:e.logOut}},[e._v("Log Out")])]):e._e()],1),n("router-view")],1)},Pe=[],je={computed:Object(ve["a"])(Object(ve["a"])({},Object(u["d"])({token:function(e){return e.auth.token}})),Object(u["c"])(["isLoggedIn"])),methods:Object(ve["a"])(Object(ve["a"])({},Object(u["b"])({pendoIdentify:k})),{},{logOut:function(){var e=this;this.$store.dispatch(y).then((function(){e.$route.meta.requiresAuth&&e.$router.push({name:"Login",params:{nextUrl:e.$route.fullPath}})}))}}),mounted:function(){this.isLoggedIn&&this.pendoIdentify()}},xe=je,Se=(n("034f"),Object(ae["a"])(xe,Oe,Pe,!1,null,null,null)),Ue=Se.exports;n("c4ca");i.a.defaults.baseURL="/vendo/",o["a"].config.productionTip=!1,new o["a"]({store:E,router:ke,render:function(e){return e(Ue)}}).$mount("#app")},6:function(e,t){},7:function(e,t){},"785b":function(e,t,n){"use strict";var r=n("4cfe"),a=n.n(r);a.a},8:function(e,t){},"85ec":function(e,t,n){},9:function(e,t){},a462:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"f",(function(){return i})),n.d(t,"c",(function(){return u}));var r="Create todo",a="Delete todo",o="Complete todo",s="Add todo",i="Delete todo at index",u="Complete todo at index"},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});