(function(){var t={4145:function(t,e,n){"use strict";var o=n(9963),r=n(894),i=(n(7658),n(3423)),a={state:{todos:[{id:1,title:"Todo A",project:"Project A",done:!1},{id:2,title:"Todo B",project:"Project B",done:!0},{id:3,title:"Todo C",project:"Project C",done:!1},{id:4,title:"Todo D",project:"Project D",done:!1}]},getters:{todoIndex:t=>e=>t.todos.map((t=>t.id)).indexOf(e),newTodoId:t=>t.todos.map((t=>t.id)).reduce(((t,e)=>Math.max(t,e)),0)+1},mutations:{[i.OG](t,e){t.todos.splice(e,1)},[i.Tl](t,e){t.todos.push(e)},[i.nR](t,e){t.todos[e].done=!0},[i.UO](t,{index:e,todo:n}){t.todos[e].title=n.title,t.todos[e].project=n.project}},actions:{[i.Iy](t,e){const n=t.getters.todoIndex(e);t.commit(i.OG,n)},[i.IH](t,e){e.id=t.getters.newTodoId,t.commit(i.Tl,e)},[i.OQ](t,e){const n=t.getters.todoIndex(e);t.commit(i.nR,n)},[i.eG](t,e){const n=t.getters.todoIndex(e.id);t.commit(i.UO,{index:n,todo:e})}}},u=(n(1703),n(9669)),c=n.n(u),d=n(6013),s=n(9704);(function(t){(function(e,n,o,r,i){var a,u,c,d,s;for(i=e[r]=e[r]||{},i._q=i._q||[],a=["initialize","identify","updateOptions","pageLoad","track"],u=0,c=a.length;u<c;++u)(function(t){i[t]=i[t]||function(){i._q[t===a[0]?"unshift":"push"]([t].concat([].slice.call(arguments,0)))}})(a[u]);d=n.createElement(o),d.async=!0,d.src="https://cdn.pendo-dev.pendo-dev.com/agent/static/"+t+"/pendo.js",s=n.getElementsByTagName(o)[0],s.parentNode.insertBefore(d,s)})(window,document,"script","pendo")})("d94dd7b8-2cee-492a-6657-9397c1623a8c");const l="1e8146b6-4e0d-42bd-539e-1fa42d7d628b",f="vend-vend-K4ND7";function m(t,e=!1){const n=window.pendo,o=e?{jwt:s.JWT.sign(t,l),signingKeyName:f}:t;"function"===typeof n.isReady&&n.isReady()?n.identify(o):n.initialize(o)}function p(){const t=window.pendo;"function"===typeof t.isReady&&t.isReady()&&t.clearSession()}const h=()=>Math.sqrt(-2*Math.log(1-Math.random()))*Math.cos(2*Math.PI*Math.random());function g(t=0,e=1){let n=-1;while(n<0||n>=1)n=h()/10+.5;return n*=e-t,n+=t,n}var v=n(6486);const y=[1503510363,1685453018,1595459018],b=[1503510363e3,1685453018e3,1595459018e3];function w(t){return{id:t.login.username,firstName:t.name.first,lastName:t.name.last,gender:t.gender,dob:t.dob.date,age:t.dob.age,nat:t.nat,tsSeconds:y[t.dob.age%3],tsMilliseconds:b[t.dob.age%3]}}function k(t){return{id:t.nat}}function I(t,e=null){try{return JSON.parse(localStorage.getItem(t))}catch(n){return e}}function O(t,e){localStorage.setItem(t,JSON.stringify(e))}const T={status:"",visitor:I("visitor"),account:I("account")},j={isLoggedIn:t=>null!=t.visitor,visitorId:t=>t.visitor.id,accountId:t=>t.account.id},x={async[d.ym]({commit:t,dispatch:e}){t(d.zd);try{const n=await c()(`https://randomuser.me/api/?seed=${Math.floor(g(0,100))}`);if(n.data.error)throw new Error(n.data.error);return t(d.KB,w(n.data.results[0])),t(d.yV,k(n.data.results[0])),t(d.DP),e(d.z6),n}catch(n){throw t(d.Ny),n}},[d.Nv]({commit:t}){t(d.KB),t(d.yV),t(d.E8),p()},[d.z6]({state:t,getters:e}){e.isLoggedIn?m((0,v.pick)(t,"visitor","account")):m()}},S={[d.DP](t){t.status=d.zv},[d.Ny](t){t.status=d.Un},[d.zd](t){t.status=d.wl},[d.E8](t){t.status=""},[d.KB](t,e){t.visitor=e,t.visitor?O("visitor",t.visitor):localStorage.removeItem("visitor")},[d.yV](t,e){t.account=e,t.account?O("account",t.account):localStorage.removeItem("account")}};var L={state:T,getters:j,actions:x,mutations:S};const N=(0,r.MT)({modules:{todo:a,auth:L}});var P=N,_=n(2201),A=n(6252),U=n(3577);const E={id:"layout-nav"},C={id:"nav",class:"p-8 text-center"},z={key:0},M={key:1},B={class:"user"},D={class:"account"};function q(t,e,n,o,r,i){const a=(0,A.up)("router-link");return(0,A.wg)(),(0,A.iD)("div",E,[(0,A._)("div",C,[(0,A.Wm)(a,{to:{name:"Home"},class:"router-link"},{default:(0,A.w5)((()=>[(0,A.Uk)(" Home ")])),_:1}),(0,A.Uk)(" | "),(0,A.Wm)(a,{to:{name:"Todos"},class:"router-link"},{default:(0,A.w5)((()=>[(0,A.Uk)(" Todo List ")])),_:1}),(0,A.Uk)(" | "),(0,A.Wm)(a,{to:{name:"Timespans"},class:"router-link"},{default:(0,A.w5)((()=>[(0,A.Uk)(" Timespans ")])),_:1}),(0,A.Uk)(" | "),(0,A.Wm)(a,{to:{name:"Guide Sandbox"},class:"router-link"},{default:(0,A.w5)((()=>[(0,A.Uk)(" Guide Sandbox ")])),_:1}),(0,A.Uk)(" | "),(0,A.Wm)(a,{to:{name:"Account"},class:"router-link"},{default:(0,A.w5)((()=>[(0,A.Uk)(" My Account ")])),_:1}),t.isLoggedIn?(0,A.kq)("",!0):((0,A.wg)(),(0,A.iD)("span",z,[(0,A.Uk)(" | "),(0,A.Wm)(a,{to:{name:"Login"},class:"router-link"},{default:(0,A.w5)((()=>[(0,A.Uk)("Log In")])),_:1})])),t.isLoggedIn?((0,A.wg)(),(0,A.iD)("span",M,[(0,A.Uk)(" | "),(0,A._)("a",{class:"router-link",onClick:e[0]||(e[0]=(...t)=>i.logOut&&i.logOut(...t))},"Log Out"),(0,A.Uk)(" | "),(0,A._)("span",B,(0,U.zw)(t.visitorId),1),(0,A._)("span",D,(0,U.zw)(t.accountId),1)])):(0,A.kq)("",!0)]),(0,A.WI)(t.$slots,"default",{},void 0,!0)])}var W={computed:{...(0,r.Se)(["isLoggedIn","visitorId","accountId"])},methods:{logOut(){this.$store.dispatch(d.Nv).then((()=>{this.$route.meta.requiresAuth&&this.$router.push({name:"Login",params:{nextUrl:this.$route.fullPath}})}))}}},G=n(3744);const K=(0,G.Z)(W,[["render",q],["__scopeId","data-v-5c8076cc"]]);var R=K;const $=[{path:"/",name:"Home",component:()=>n.e(177).then(n.bind(n,9826)),meta:{layout:R}},{path:"/login",name:"Login",component:()=>Promise.all([n.e(881),n.e(436),n.e(535)]).then(n.bind(n,6163)),meta:{layout:R}},{path:"/todo-app",name:"Todos",component:()=>Promise.all([n.e(881),n.e(436),n.e(838)]).then(n.bind(n,4110)),meta:{layout:R,requiresAuth:!0}},{path:"/account",name:"Account",component:()=>n.e(809).then(n.bind(n,7344)),meta:{layout:R,requiresAuth:!0}},{path:"/timezone",name:"Timespans",component:()=>Promise.all([n.e(371),n.e(303)]).then(n.bind(n,3574)),meta:{layout:R}},{path:"/guide",name:"Guide Sandbox",component:()=>n.e(940).then(n.bind(n,8940)),meta:{layout:R}},{path:"/frame/parent",name:"Parent Iframe",component:()=>n.e(718).then(n.bind(n,4718))},{path:"/frame/basic",name:"Basic Iframe",component:()=>n.e(955).then(n.bind(n,3535))}],H=(0,_.p7)({history:(0,_.PO)("/vendo/"),routes:$});H.beforeEach(((t,e,n)=>{t.matched.some((t=>t.meta.requiresAuth))&&!P.getters.isLoggedIn?n({name:"Login",params:{nextUrl:t.fullPath}}):n()}));var V=H;function F(t,e,n,o,r,i){const a=(0,A.up)("router-view");return(0,A.wg)(),(0,A.j4)((0,A.LL)(t.$route.meta.layout||"div"),null,{default:(0,A.w5)((()=>[(0,A.Wm)(a)])),_:1})}var J={created(){this.pendoIdentify()},methods:{...(0,r.nv)({pendoIdentify:d.z6})}};const Q=(0,G.Z)(J,[["render",F]]);var Z=Q;const X=(0,o.ri)(Z);X.use(P),X.use(V),X.mount("#app")},6013:function(t,e,n){"use strict";n.d(e,{DP:function(){return o},E8:function(){return a},KB:function(){return u},Nv:function(){return s},Ny:function(){return r},Un:function(){return m},wl:function(){return p},yV:function(){return c},ym:function(){return d},z6:function(){return l},zd:function(){return i},zv:function(){return f}});const o="Successful authentication",r="Authentication error",i="Authentication loading",a="Unset authentication status",u="Visitor data",c="Account data",d="Log in",s="Log out",l="Send user credentials to Pendo",f="success",m="error",p="loading"},3423:function(t,e,n){"use strict";n.d(e,{IH:function(){return o},Iy:function(){return r},OG:function(){return c},OQ:function(){return i},Tl:function(){return u},UO:function(){return s},eG:function(){return a},nR:function(){return d}});const o="Create todo",r="Delete todo",i="Complete todo",a="Edit todo",u="Add todo",c="Delete todo at index",d="Complete todo at index",s="Edit todo at index"},950:function(){},6601:function(){},9214:function(){},6419:function(){},6353:function(){},8623:function(){},7748:function(){},5568:function(){},9386:function(){},1616:function(){},6619:function(){},7108:function(){},9862:function(){},964:function(){}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,loaded:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,i){if(!o){var a=1/0;for(s=0;s<t.length;s++){o=t[s][0],r=t[s][1],i=t[s][2];for(var u=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(u=!1,i<a&&(a=i));if(u){t.splice(s--,1);var d=r();void 0!==d&&(e=d)}}return e}i=i||0;for(var s=t.length;s>0&&t[s-1][2]>i;s--)t[s]=t[s-1];t[s]=[o,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+({177:"home",535:"login",809:"account",838:"todo-application"}[t]||t)+"."+{177:"e18dcc43",303:"465864dc",371:"0e4e9908",436:"f8ebf712",535:"14fe358d",718:"f33aeeac",809:"8c009a3c",838:"3d8f2684",881:"c954ab3a",940:"ad3a44ac",955:"c9c2a35b"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+({535:"login",838:"todo-application"}[t]||t)+"."+{371:"f3985d92",535:"393d2ba8",718:"a6a2da3e",838:"a80891c4",940:"5591d75d"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="vendo:";n.l=function(o,r,i,a){if(t[o])t[o].push(r);else{var u,c;if(void 0!==i)for(var d=document.getElementsByTagName("script"),s=0;s<d.length;s++){var l=d[s];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==e+i){u=l;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",e+i),u.src=o),t[o]=[r];var f=function(e,n){u.onerror=u.onload=null,clearTimeout(m);var r=t[o];if(delete t[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){n.p="/vendo/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,o,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var a=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,i.parentNode&&i.parentNode.removeChild(i),r(c)}};return i.onerror=i.onload=a,i.href=e,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},e=function(t,e){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===t||i===e))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===t||i===e)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),u=n.p+a;if(e(a,u))return r();t(o,u,null,r,i)}))},r={143:0};n.f.miniCss=function(t,e){var n={371:1,535:1,718:1,838:1,940:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=o(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,o){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=t[e]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(e),u=new Error,c=function(o){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,r[1](u)}};n.l(a,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,a=o[0],u=o[1],c=o[2],d=0;if(a.some((function(e){return 0!==t[e]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(c)var s=c(n)}for(e&&e(o);d<a.length;d++)i=a[d],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(s)},o=self["webpackChunkvendo"]=self["webpackChunkvendo"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[823,381,709,704,910,200,348,949,632,63,141,634,219,218,894,571,814,708],(function(){return n(4145)}));o=n.O(o)})();
//# sourceMappingURL=app.cafb22d2.js.map