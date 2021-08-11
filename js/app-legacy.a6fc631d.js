(function(){"use strict";var t={8383:function(t,n,e){e(6992),e(8674),e(9601),e(7727);var o,r,i=e(9963),u=e(4709),a=e(2482),c=(e(1249),e(561),e(3423)),d={state:{todos:[{id:1,title:"Todo A",project:"Project A",done:!1},{id:2,title:"Todo B",project:"Project B",done:!0},{id:3,title:"Todo C",project:"Project C",done:!1},{id:4,title:"Todo D",project:"Project D",done:!1}]},getters:{todoIndex:function(t){return function(n){return t.todos.map((function(t){return t.id})).indexOf(n)}},newTodoId:function(t){return t.todos.map((function(t){return t.id})).reduce((function(t,n){return Math.max(t,n)}),0)+1}},mutations:(o={},(0,a.Z)(o,c.OG,(function(t,n){t.todos.splice(n,1)})),(0,a.Z)(o,c.Tl,(function(t,n){t.todos.push(n)})),(0,a.Z)(o,c.nR,(function(t,n){t.todos[n].done=!0})),(0,a.Z)(o,c.UO,(function(t,n){var e=n.index,o=n.todo;t.todos[e].title=o.title,t.todos[e].project=o.project})),o),actions:(r={},(0,a.Z)(r,c.Iy,(function(t,n){var e=t.getters.todoIndex(n);t.commit(c.OG,e)})),(0,a.Z)(r,c.IH,(function(t,n){n.id=t.getters.newTodoId,t.commit(c.Tl,n)})),(0,a.Z)(r,c.OQ,(function(t,n){var e=t.getters.todoIndex(n);t.commit(c.nR,e)})),(0,a.Z)(r,c.eG,(function(t,n){var e=t.getters.todoIndex(n.id);t.commit(c.UO,{index:e,todo:n})})),r)},s=e(8534),f=(e(5666),e(8309),e(9669)),l=e.n(f),m=e(6013);e(2222),e(7042);function p(t){var n=window.pendo;"function"===typeof n.isReady&&n.isReady()?n.identify(t):n.initialize(t)}(function(t){(function(n,e,o,r,i){var u,a,c,d,s;for(i=n[r]=n[r]||{},i._q=i._q||[],u=["initialize","identify","updateOptions","pageLoad","track"],a=0,c=u.length;a<c;++a)(function(t){i[t]=i[t]||function(){i._q[t===u[0]?"unshift":"push"]([t].concat([].slice.call(arguments,0)))}})(u[a]);d=e.createElement(o),d.async=!0,d.src="https://pendo-perfserf-static.storage.googleapis.com/agent/static/"+t+"/pendo.js",s=e.getElementsByTagName(o)[0],s.parentNode.insertBefore(d,s)})(window,document,"script","pendo")})("b82bbc53-7f8e-450e-6f8e-80b9e550da97");var v=function(){return Math.sqrt(-2*Math.log(1-Math.random()))*Math.cos(2*Math.PI*Math.random())};function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=-1;while(e<0||e>=1)e=v()/10+.5;return e*=n-t,e+=t,e}var g,y,b=e(6486);function k(t){return{id:t.login.username,firstName:t.name.first,lastName:t.name.last,gender:t.gender,dob:t.dob.date,age:t.dob.age,nat:t.nat}}function w(t){return{id:t.nat}}function I(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;try{return JSON.parse(localStorage.getItem(t))}catch(e){return n}}function O(t,n){localStorage.setItem(t,JSON.stringify(n))}var T={status:"",visitor:I("visitor"),account:I("account")},A={isLoggedIn:function(t){return null!=t.visitor},visitorId:function(t){return t.visitor.id},accountId:function(t){return t.account.id}},j=(g={},(0,a.Z)(g,m.ym,(function(t){return(0,s.Z)(regeneratorRuntime.mark((function n(){var e,o,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e=t.commit,o=t.dispatch,e(m.zd),n.prev=2,n.next=5,l()("https://randomuser.me/api/?seed=".concat(Math.floor(h(0,100))));case 5:if(r=n.sent,!r.data.error){n.next=8;break}throw new Error(r.data.error);case 8:return e(m.KB,k(r.data.results[0])),e(m.yV,w(r.data.results[0])),e(m.DP),o(m.z6),n.abrupt("return",r);case 15:throw n.prev=15,n.t0=n["catch"](2),e(m.Ny),n.t0;case 19:case"end":return n.stop()}}),n,null,[[2,15]])})))()})),(0,a.Z)(g,m.Nv,(function(t){var n=t.commit;n(m.KB),n(m.yV),n(m.E8)})),(0,a.Z)(g,m.z6,(function(t){var n=t.state,e=t.getters;e.isLoggedIn?p((0,b.pick)(n,"visitor","account")):p()})),g),x=(y={},(0,a.Z)(y,m.DP,(function(t){t.status=m.zv})),(0,a.Z)(y,m.Ny,(function(t){t.status=m.Un})),(0,a.Z)(y,m.zd,(function(t){t.status=m.wl})),(0,a.Z)(y,m.E8,(function(t){t.status=""})),(0,a.Z)(y,m.KB,(function(t,n){t.visitor=n,t.visitor?O("visitor",t.visitor):localStorage.removeItem("visitor")})),(0,a.Z)(y,m.yV,(function(t,n){t.account=n,t.account?O("account",t.account):localStorage.removeItem("account")})),y),C={state:T,getters:A,actions:j,mutations:x},P=(0,u.MT)({modules:{todo:d,auth:C}}),Z=P,L=(e(1539),e(8783),e(3948),e(2119)),U=[{path:"/",name:"Home",component:function(){return e.e(177).then(e.bind(e,2823))}},{path:"/login",name:"Login",component:function(){return Promise.all([e.e(690),e.e(436),e.e(535)]).then(e.bind(e,7476))}},{path:"/todo-app",name:"Todo Application",component:function(){return Promise.all([e.e(690),e.e(436),e.e(838)]).then(e.bind(e,7193))},meta:{requiresAuth:!0}},{path:"/account",name:"Account",component:function(){return e.e(809).then(e.bind(e,3709))},meta:{requiresAuth:!0}},{path:"/timezone",name:"Timezone Converter",component:function(){return Promise.all([e.e(211),e.e(281),e.e(191),e.e(696)]).then(e.bind(e,5687))}}],_=(0,L.p7)({history:(0,L.PO)("/vendo/"),routes:U});_.beforeEach((function(t,n,e){t.matched.some((function(t){return t.meta.requiresAuth}))&&!Z.getters.isLoggedIn?e({name:"Login",params:{nextUrl:t.fullPath}}):e()}));var E=_,N=e(6252),S=e(3577);(0,N.dD)("data-v-57c7d774");var z={id:"app"},D={id:"nav",class:"p-8 text-center"},M=(0,N.Uk)("Home"),q=(0,N.Uk)(" | "),B=(0,N.Uk)("Todo List"),R=(0,N.Uk)(" | "),H=(0,N.Uk)("Timezone Converter"),W=(0,N.Uk)(" | "),G=(0,N.Uk)("My Account"),K={key:0},V=(0,N.Uk)(" | "),F=(0,N.Uk)("Log In"),$={key:1},J=(0,N.Uk)(" | "),Q=(0,N.Uk)(" | "),X={class:"user"},Y=(0,N.Uk)(),tt={class:"account"};function nt(t,n,e,o,r,i){var u=(0,N.up)("router-link"),a=(0,N.up)("router-view");return(0,N.wg)(),(0,N.iD)("div",z,[(0,N._)("div",D,[(0,N.Wm)(u,{to:{name:"Home"},class:"router-link"},{default:(0,N.w5)((function(){return[M]})),_:1}),q,(0,N.Wm)(u,{to:{name:"Todo Application"},class:"router-link"},{default:(0,N.w5)((function(){return[B]})),_:1}),R,(0,N.Wm)(u,{to:{name:"Timezone Converter"},class:"router-link"},{default:(0,N.w5)((function(){return[H]})),_:1}),W,(0,N.Wm)(u,{to:{name:"Account"},class:"router-link"},{default:(0,N.w5)((function(){return[G]})),_:1}),t.isLoggedIn?(0,N.kq)("",!0):((0,N.wg)(),(0,N.iD)("span",K,[V,(0,N.Wm)(u,{to:{name:"Login"},class:"router-link"},{default:(0,N.w5)((function(){return[F]})),_:1})])),t.isLoggedIn?((0,N.wg)(),(0,N.iD)("span",$,[J,(0,N._)("a",{onClick:n[0]||(n[0]=function(){return i.logOut&&i.logOut.apply(i,arguments)}),class:"router-link"},"Log Out"),Q,(0,N._)("span",X,(0,S.zw)(t.visitorId),1),Y,(0,N._)("span",tt,(0,S.zw)(t.accountId),1)])):(0,N.kq)("",!0)]),(0,N.Wm)(a)])}(0,N.Cn)();var et=e(5082),ot={computed:(0,et.Z)((0,et.Z)({},(0,u.rn)({token:function(t){return t.auth.token}})),(0,u.Se)(["isLoggedIn","visitorId","accountId"])),methods:(0,et.Z)((0,et.Z)({},(0,u.nv)({pendoIdentify:m.z6})),{},{logOut:function(){var t=this;this.$store.dispatch(m.Nv).then((function(){t.$route.meta.requiresAuth&&t.$router.push({name:"Login",params:{nextUrl:t.$route.fullPath}})}))}}),mounted:function(){this.pendoIdentify()}};ot.render=nt,ot.__scopeId="data-v-57c7d774";var rt=ot,it=(0,i.ri)(rt);it.use(Z),it.use(E),it.mount("#app")},6013:function(t,n,e){e.d(n,{DP:function(){return o},Ny:function(){return r},zd:function(){return i},E8:function(){return u},KB:function(){return a},yV:function(){return c},ym:function(){return d},Nv:function(){return s},z6:function(){return f},zv:function(){return l},Un:function(){return m},wl:function(){return p}});var o="Successful authentication",r="Authentication error",i="Authentication loading",u="Unset authentication status",a="Visitor data",c="Account data",d="Log in",s="Log out",f="Send user credentials to Pendo",l="success",m="error",p="loading"},3423:function(t,n,e){e.d(n,{IH:function(){return o},Iy:function(){return r},OQ:function(){return i},eG:function(){return u},Tl:function(){return a},OG:function(){return c},nR:function(){return d},UO:function(){return s}});var o="Create todo",r="Delete todo",i="Complete todo",u="Edit todo",a="Add todo",c="Delete todo at index",d="Complete todo at index",s="Edit todo at index"}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,loaded:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}e.m=t,function(){var t=[];e.O=function(n,o,r,i){if(!o){var u=1/0;for(s=0;s<t.length;s++){o=t[s][0],r=t[s][1],i=t[s][2];for(var a=!0,c=0;c<o.length;c++)(!1&i||u>=i)&&Object.keys(e.O).every((function(t){return e.O[t](o[c])}))?o.splice(c--,1):(a=!1,i<u&&(u=i));if(a){t.splice(s--,1);var d=r();void 0!==d&&(n=d)}}return n}i=i||0;for(var s=t.length;s>0&&t[s-1][2]>i;s--)t[s]=t[s-1];t[s]=[o,r,i]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.f={},e.e=function(t){return Promise.all(Object.keys(e.f).reduce((function(n,o){return e.f[o](t,n),n}),[]))}}(),function(){e.u=function(t){return"js/"+({177:"home",535:"login",809:"account",838:"todo-application"}[t]||t)+"-legacy."+{177:"e29c29b5",191:"bbc613d1",211:"4fdc5867",281:"e2470e54",436:"6af886a4",535:"4bb8bb99",690:"d4783f59",696:"9429b6a2",809:"326dae3f",838:"c4320fbf"}[t]+".js"}}(),function(){e.miniCssF=function(t){return"css/"+{535:"login",838:"todo-application"}[t]+"."+{535:"950696a9",838:"23d119ef"}[t]+".css"}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={},n="vendo:";e.l=function(o,r,i,u){if(t[o])t[o].push(r);else{var a,c;if(void 0!==i)for(var d=document.getElementsByTagName("script"),s=0;s<d.length;s++){var f=d[s];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==n+i){a=f;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,e.nc&&a.setAttribute("nonce",e.nc),a.setAttribute("data-webpack",n+i),a.src=o),t[o]=[r];var l=function(n,e){a.onerror=a.onload=null,clearTimeout(m);var r=t[o];if(delete t[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(t){return t(e)})),n)return n(e)},m=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){e.p="/vendo/"}(),function(){var t=function(t,n,e,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)e();else{var u=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||n,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=i,r.href=n,document.head.appendChild(r),r},n=function(t,n){for(var e=document.getElementsByTagName("link"),o=0;o<e.length;o++){var r=e[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===t||i===n))return r}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){r=u[o],i=r.getAttribute("data-href");if(i===t||i===n)return r}},o=function(o){return new Promise((function(r,i){var u=e.miniCssF(o),a=e.p+u;if(n(u,a))return r();t(o,a,r,i)}))},r={143:0};e.f.miniCss=function(t,n){var e={535:1,838:1};r[t]?n.push(r[t]):0!==r[t]&&e[t]&&n.push(r[t]=o(t).then((function(){r[t]=0}),(function(n){throw delete r[t],n})))}}(),function(){var t={143:0};e.f.j=function(n,o){var r=e.o(t,n)?t[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(e,o){r=t[n]=[e,o]}));o.push(r[2]=i);var u=e.p+e.u(n),a=new Error,c=function(o){if(e.o(t,n)&&(r=t[n],0!==r&&(t[n]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,r[1](a)}};e.l(u,c,"chunk-"+n,n)}},e.O.j=function(n){return 0===t[n]};var n=function(n,o){var r,i,u=o[0],a=o[1],c=o[2],d=0;for(r in a)e.o(a,r)&&(e.m[r]=a[r]);if(c)var s=c(e);for(n&&n(o);d<u.length;d++)i=u[d],e.o(t,i)&&t[i]&&t[i][0](),t[u[d]]=0;return e.O(s)},o=self["webpackChunkvendo"]=self["webpackChunkvendo"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[972,716,227,853,994,293],(function(){return e(8383)}));o=e.O(o)})();
//# sourceMappingURL=app-legacy.a6fc631d.js.map