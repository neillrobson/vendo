(function(t){function e(e){for(var o,i,u=e[0],s=e[1],c=e[2],d=0,f=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(o=!1)}o&&(r.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},a={"app~d0ae3f07":0},r=[];function i(t){return u.p+"js/"+({"about~21833f8f":"about~21833f8f"}[t]||t)+"."+{"about~21833f8f":"d0747861"}[t]+".js"}function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=a[t]=[e,o]}));e.push(n[2]=o);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(t);var c=new Error;r=function(e){s.onerror=s.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",c.name="ChunkLoadError",c.type=o,c.request=r,n[1](c)}a[t]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:s})}),12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(e)},u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/vendo/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var l=c;r.push([0,"chunk-vendors~253ae210","chunk-vendors~f9ca8911","chunk-vendors~e1b943a0","chunk-vendors~fdc6512a","chunk-vendors~d2305125"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),a=n.n(o);a.a},"4cfe":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o,a,r=n("2b0e"),i=n("bc3a"),u=n.n(i),s=n("2f62"),c=(n("c975"),n("d81d"),n("13d5"),n("a434"),n("ade3")),d=n("a462"),l={state:{todos:[{id:1,title:"Todo A",project:"Project A",done:!1},{id:2,title:"Todo B",project:"Project B",done:!0},{id:3,title:"Todo C",project:"Project C",done:!1},{id:4,title:"Todo D",project:"Project D",done:!1}]},getters:{todoIndex:function(t){return function(e){return t.todos.indexOf(e)}},newTodoId:function(t){return t.todos.map((function(t){return t.id})).reduce((function(t,e){return Math.max(t,e)}),0)+1}},mutations:(o={},Object(c["a"])(o,d["f"],(function(t,e){t.todos.splice(e,1)})),Object(c["a"])(o,d["a"],(function(t,e){t.todos.push(e)})),Object(c["a"])(o,d["c"],(function(t,e){t.todos[e].done=!0})),o),actions:(a={},Object(c["a"])(a,d["e"],(function(t,e){var n=t.getters.todoIndex(e);t.commit(d["f"],n)})),Object(c["a"])(a,d["d"],(function(t,e){e.id=t.getters.newTodoId,t.commit(d["a"],e)})),Object(c["a"])(a,d["b"],(function(t,e){var n=t.getters.todoIndex(e);t.commit(d["c"],n)})),a)},f=(n("d3b7"),"Successful authentication"),p="Authentication error",m="Authentication loading",v="Unset authentication status",h="token",g="Log in",b="Log out",_="success",O="error",j="loading";n("99af"),n("fb6a");(function(t){(function(e,n,o,a,r){var i,u,s,c,d;for(r=e[a]=e[a]||{},r._q=[],i=["initialize","identify","updateOptions","pageLoad"],u=0,s=i.length;u<s;++u)(function(t){r[t]=r[t]||function(){r._q[t===i[0]?"unshift":"push"]([t].concat([].slice.call(arguments,0)))}})(i[u]);c=n.createElement(o),c.async=!0,c.src="https://pendo-wildlings-static.storage.googleapis.com/agent/static/"+t+"/pendo.js",d=n.getElementsByTagName(o)[0],d.parentNode.insertBefore(c,d)})(window,document,"script","pendo")})("697ae132-66e8-47f4-6858-96da721a7d3c");var w,y,k=window.pendo,S={status:"",token:localStorage.getItem("token")||null},T={isLoggedIn:function(t){return null!=t.token}},x=(w={},Object(c["a"])(w,g,(function(t,e){var n=t.commit;return new Promise((function(t,o){n(h,null),n(m),u.a.post("login",e).then((function(e){n(h,e.data.token),n(f),t(e),k.isReady()?k.identify({visitor:{id:e.data.token}}):k.initialize({visitor:{id:e.data.token}})})).catch((function(t){n(p),o(t)}))}))})),Object(c["a"])(w,b,(function(t){var e=t.commit;return new Promise((function(t){e(h,null),e(v),t()}))})),w),C=(y={},Object(c["a"])(y,f,(function(t){t.status=_})),Object(c["a"])(y,p,(function(t){t.status=O})),Object(c["a"])(y,m,(function(t){t.status=j})),Object(c["a"])(y,v,(function(t){t.status=""})),Object(c["a"])(y,h,(function(t,e){t.token=e||null,t.token?localStorage.setItem("token",t.token):localStorage.removeItem("token")})),y),A={state:S,getters:T,actions:x,mutations:C};r["a"].use(s["a"]);var P=new s["a"].Store({modules:{todo:l,auth:A}}),L=(n("45fc"),n("8c4f")),I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")])])}],E=n("2877"),U={},R=Object(E["a"])(U,I,$,!1,null,null,null),z=R.exports,M=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ui middle aligned center aligned grid"},[o("div",{staticClass:"column"},[o("img",{attrs:{src:n("cf05"),alt:"Vue logo"}}),o("form",{staticClass:"ui large form",on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[t.authStatus===t.STATUS_LOADING?o("div",{staticClass:"ui message"},[o("p",[t._v("Logging in...")])]):t._e(),t.authStatus===t.STATUS_SUCCESS?o("div",{staticClass:"ui message positive"},[o("p",[t._v("You are authenticated!")])]):t._e(),t.authStatus===t.STATUS_ERROR?o("div",{staticClass:"ui message negative"},[o("p",[t._v("Invalid credentials")])]):t._e(),o("div",{staticClass:"ui stacked segment"},[o("div",{staticClass:"field"},[o("div",{staticClass:"ui left icon input"},[o("i",{staticClass:"icon user"}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",name:"username",placeholder:"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})])]),o("div",{staticClass:"field"},[o("div",{staticClass:"ui left icon input"},[o("i",{staticClass:"icon lock"}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),o("button",{staticClass:"ui fluid large submit button",attrs:{type:"submit"}},[t._v("Log in")])])])])])},q=[],D={data:function(){return{username:"",password:"",STATUS_SUCCESS:_,STATUS_LOADING:j,STATUS_ERROR:O}},computed:Object(s["c"])({authStatus:function(t){return t.auth.status}}),methods:{handleSubmit:function(){var t=this,e=this.username,n=this.password;this.$store.dispatch(g,{username:e,password:n}).then((function(){null!=t.$route.params.nextUrl?t.$router.push(t.$route.params.nextUrl):t.$router.push("/")}),(function(){}))}}},N=D,B=(n("785b"),Object(E["a"])(N,M,q,!1,null,"57596d18",null)),H=B.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("Here is some info about you.")])},G=[],V={},W=Object(E["a"])(V,J,G,!1,null,null,null),F=W.exports;r["a"].use(L["a"]);var Y=[{path:"/",name:"Home",component:z},{path:"/login",name:"Login",component:H},{path:"/todo-app",name:"Todo Application",component:function(){return n.e("about~21833f8f").then(n.bind(null,"d384"))},meta:{requiresAuth:!0}},{path:"/account",name:"Account",component:F,meta:{requiresAuth:!0}}],K=new L["a"]({mode:"history",base:"/vendo/",routes:Y});K.beforeEach((function(t,e,n){t.matched.some((function(t){return t.meta.requiresAuth}))&&!P.getters.isLoggedIn?n({name:"Login",params:{nextUrl:t.fullPath}}):n()}));var Q=K,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:{name:"Home"}}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:{name:"Todo Application"}}},[t._v("Todo List")]),t._v(" | "),n("router-link",{attrs:{to:{name:"Account"}}},[t._v("My Account")]),t.isLoggedIn?t._e():n("span",[t._v(" | "),n("router-link",{attrs:{to:{name:"Login"}}},[t._v("Log In")])],1),t.isLoggedIn?n("span",[t._v(" | "),n("a",{on:{click:t.logOut}},[t._v("Log Out")])]):t._e()],1),n("router-view")],1)},Z=[],tt=n("5530"),et={computed:Object(tt["a"])(Object(tt["a"])({},Object(s["c"])({token:function(t){return t.auth.token}})),Object(s["b"])(["isLoggedIn"])),methods:{logOut:function(){var t=this;this.$store.dispatch(b).then((function(){t.$route.meta.requiresAuth&&t.$router.push({name:"Login",params:{nextUrl:t.$route.fullPath}})}))}},mounted:function(){this.isLoggedIn&&(k.isReady()?k.identify({visitor:{id:this.token}}):k.initialize({visitor:{id:this.token}}))}},nt=et,ot=(n("034f"),Object(E["a"])(nt,X,Z,!1,null,null,null)),at=ot.exports,rt=n("5f35"),it=(n("c4ca"),n("94db")),ut=n.n(it),st=new ut.a(u.a),ct="letmein";st.onPost("/login").reply((function(t){return new Promise((function(e){setTimeout((function(){var n=null;try{n=JSON.parse(t.data)}catch(o){e([400])}ct===n.password?e([200,{token:n.username}]):e([401])}),1e3)}))})),u.a.defaults.baseURL=rt["publicPath"],r["a"].config.productionTip=!1,new r["a"]({store:P,router:Q,render:function(t){return t(at)}}).$mount("#app")},"5f35":function(t,e){t.exports={publicPath:"/vendo/",productionSourceMap:!1,pluginOptions:{webpackBundleAnalyzer:{openAnalyzer:!1,analyzerMode:"server"}},chainWebpack:function(t){t.plugin("html").tap((function(t){return t[0].title="Vendo",t}))},configureWebpack:{devtool:"source-map",optimization:{splitChunks:{maxSize:244e3}},performance:{assetFilter:function(t){return!/\.(map|svg|css)$/.test(t)}}}}},"785b":function(t,e,n){"use strict";var o=n("4cfe"),a=n.n(o);a.a},"85ec":function(t,e,n){},a462:function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"e",(function(){return a})),n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return i})),n.d(e,"f",(function(){return u})),n.d(e,"c",(function(){return s}));var o="Create todo",a="Delete todo",r="Complete todo",i="Add todo",u="Delete todo at index",s="Complete todo at index"},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});