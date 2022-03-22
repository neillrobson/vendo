(self["webpackChunkvendo"]=self["webpackChunkvendo"]||[]).push([[919],{5717:function(e){"function"===typeof Object.create?e.exports=function(e,r){r&&(e.super_=r,e.prototype=Object.create(r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,r){if(r){e.super_=r;var t=function(){};t.prototype=r.prototype,e.prototype=new t,e.prototype.constructor=e}}},2584:function(e,r,t){"use strict";var n=t(6410)(),i=t(1924),o=i("Object.prototype.toString"),a=function(e){return!(n&&e&&"object"===typeof e&&Symbol.toStringTag in e)&&"[object Arguments]"===o(e)},s=function(e){return!!a(e)||null!==e&&"object"===typeof e&&"number"===typeof e.length&&e.length>=0&&"[object Array]"!==o(e)&&"[object Function]"===o(e.callee)},u=function(){return a(arguments)}();a.isLegacyArguments=s,e.exports=u?a:s},8662:function(e,r,t){"use strict";var n,i=Object.prototype.toString,o=Function.prototype.toString,a=/^\s*(?:function)?\*/,s=t(6410)(),u=Object.getPrototypeOf,f=function(){if(!s)return!1;try{return Function("return function*() {}")()}catch(e){}};e.exports=function(e){if("function"!==typeof e)return!1;if(a.test(o.call(e)))return!0;if(!s){var r=i.call(e);return"[object GeneratorFunction]"===r}if(!u)return!1;if("undefined"===typeof n){var t=f();n=!!t&&u(t)}return u(e)===n}},8611:function(e){"use strict";e.exports=function(e){return e!==e}},360:function(e,r,t){"use strict";var n=t(5559),i=t(4289),o=t(8611),a=t(9415),s=t(3194),u=n(a(),Number);i(u,{getPolyfill:a,implementation:o,shim:s}),e.exports=u},9415:function(e,r,t){"use strict";var n=t(8611);e.exports=function(){return Number.isNaN&&Number.isNaN(NaN)&&!Number.isNaN("a")?Number.isNaN:n}},3194:function(e,r,t){"use strict";var n=t(4289),i=t(9415);e.exports=function(){var e=i();return n(Number,{isNaN:e},{isNaN:function(){return Number.isNaN!==e}}),e}},5692:function(e,r,t){"use strict";var n=t(9804),i=t(3083),o=t(1924),a=o("Object.prototype.toString"),s=t(6410)(),u=i(),f=o("Array.prototype.indexOf",!0)||function(e,r){for(var t=0;t<e.length;t+=1)if(e[t]===r)return t;return-1},c=o("String.prototype.slice"),p={},d=t(882),l=Object.getPrototypeOf;s&&d&&l&&n(u,(function(e){var r=new t.g[e];if(Symbol.toStringTag in r){var n=l(r),i=d(n,Symbol.toStringTag);if(!i){var o=l(n);i=d(o,Symbol.toStringTag)}p[e]=i.get}}));var y=function(e){var r=!1;return n(p,(function(t,n){if(!r)try{r=t.call(e)===n}catch(i){}})),r};e.exports=function(e){if(!e||"object"!==typeof e)return!1;if(!s||!(Symbol.toStringTag in e)){var r=c(a(e),8,-1);return f(u,r)>-1}return!!d&&y(e)}},7626:function(e,r,t){var n=t(158);e.exports=function(e,r){r=r||{};var t=n.decode(e,r);if(!t)return null;var i=t.payload;if("string"===typeof i)try{var o=JSON.parse(i);null!==o&&"object"===typeof o&&(i=o)}catch(a){}return!0===r.complete?{header:t.header,payload:i,signature:t.signature}:i}},9704:function(e,r,t){e.exports={decode:t(7626),verify:t(7030),sign:t(2506),JsonWebTokenError:t(8619),NotBeforeError:t(1826),TokenExpiredError:t(2340)}},8619:function(e){var r=function(e,r){Error.call(this,e),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name="JsonWebTokenError",this.message=e,r&&(this.inner=r)};r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,e.exports=r},1826:function(e,r,t){var n=t(8619),i=function(e,r){n.call(this,e),this.name="NotBeforeError",this.date=r};i.prototype=Object.create(n.prototype),i.prototype.constructor=i,e.exports=i},2340:function(e,r,t){var n=t(8619),i=function(e,r){n.call(this,e),this.name="TokenExpiredError",this.expiredAt=r};i.prototype=Object.create(n.prototype),i.prototype.constructor=i,e.exports=i},4964:function(e,r,t){var n=t(4155),i=t(1878);e.exports=i.satisfies(n.version,"^6.12.0 || >=8.0.0")},8034:function(e,r,t){var n=t(7824);e.exports=function(e,r){var t=r||Math.floor(Date.now()/1e3);if("string"===typeof e){var i=n(e);if("undefined"===typeof i)return;return Math.floor(t+i/1e3)}return"number"===typeof e?t+e:void 0}},2506:function(e,r,t){var n=t(3085)["Buffer"],i=t(8034),o=t(4964),a=t(158),s=t(8922),u=t(8094),f=t(5928),c=t(3126),p=t(8146),d=t(5751),l=t(8917),y=["RS256","RS384","RS512","ES256","ES384","ES512","HS256","HS384","HS512","none"];o&&y.splice(3,0,"PS256","PS384","PS512");var m={expiresIn:{isValid:function(e){return f(e)||d(e)&&e},message:'"expiresIn" should be a number of seconds or string representing a timespan'},notBefore:{isValid:function(e){return f(e)||d(e)&&e},message:'"notBefore" should be a number of seconds or string representing a timespan'},audience:{isValid:function(e){return d(e)||Array.isArray(e)},message:'"audience" must be a string or array'},algorithm:{isValid:s.bind(null,y),message:'"algorithm" must be a valid string enum value'},header:{isValid:p,message:'"header" must be an object'},encoding:{isValid:d,message:'"encoding" must be a string'},issuer:{isValid:d,message:'"issuer" must be a string'},subject:{isValid:d,message:'"subject" must be a string'},jwtid:{isValid:d,message:'"jwtid" must be a string'},noTimestamp:{isValid:u,message:'"noTimestamp" must be a boolean'},keyid:{isValid:d,message:'"keyid" must be a string'},mutatePayload:{isValid:u,message:'"mutatePayload" must be a boolean'}},b={iat:{isValid:c,message:'"iat" should be a number of seconds'},exp:{isValid:c,message:'"exp" should be a number of seconds'},nbf:{isValid:c,message:'"nbf" should be a number of seconds'}};function g(e,r,t,n){if(!p(t))throw new Error('Expected "'+n+'" to be a plain object.');Object.keys(t).forEach((function(i){var o=e[i];if(o){if(!o.isValid(t[i]))throw new Error(o.message)}else if(!r)throw new Error('"'+i+'" is not allowed in "'+n+'"')}))}function h(e){return g(m,!1,e,"options")}function v(e){return g(b,!0,e,"payload")}var w={audience:"aud",issuer:"iss",subject:"sub",jwtid:"jti"},x=["expiresIn","notBefore","noTimestamp","audience","issuer","subject","jwtid"];e.exports=function(e,r,t,o){"function"===typeof t?(o=t,t={}):t=t||{};var s="object"===typeof e&&!n.isBuffer(e),u=Object.assign({alg:t.algorithm||"HS256",typ:s?"JWT":void 0,kid:t.keyid},t.header);function f(e){if(o)return o(e);throw e}if(!r&&"none"!==t.algorithm)return f(new Error("secretOrPrivateKey must have a value"));if("undefined"===typeof e)return f(new Error("payload is required"));if(s){try{v(e)}catch(y){return f(y)}t.mutatePayload||(e=Object.assign({},e))}else{var c=x.filter((function(e){return"undefined"!==typeof t[e]}));if(c.length>0)return f(new Error("invalid "+c.join(",")+" option for "+typeof e+" payload"))}if("undefined"!==typeof e.exp&&"undefined"!==typeof t.expiresIn)return f(new Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));if("undefined"!==typeof e.nbf&&"undefined"!==typeof t.notBefore)return f(new Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));try{h(t)}catch(y){return f(y)}var p=e.iat||Math.floor(Date.now()/1e3);if(t.noTimestamp?delete e.iat:s&&(e.iat=p),"undefined"!==typeof t.notBefore){try{e.nbf=i(t.notBefore,p)}catch(m){return f(m)}if("undefined"===typeof e.nbf)return f(new Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'))}if("undefined"!==typeof t.expiresIn&&"object"===typeof e){try{e.exp=i(t.expiresIn,p)}catch(m){return f(m)}if("undefined"===typeof e.exp)return f(new Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'))}Object.keys(w).forEach((function(r){var n=w[r];if("undefined"!==typeof t[r]){if("undefined"!==typeof e[n])return f(new Error('Bad "options.'+r+'" option. The payload already has an "'+n+'" property.'));e[n]=t[r]}}));var d=t.encoding||"utf8";if("function"!==typeof o)return a.sign({header:u,payload:e,secret:r,encoding:d});o=o&&l(o),a.createSign({header:u,privateKey:r,payload:e,encoding:d}).once("error",o).once("done",(function(e){o(null,e)}))}},7030:function(e,r,t){var n=t(8619),i=t(1826),o=t(2340),a=t(7626),s=t(8034),u=t(4964),f=t(158),c=["RS256","RS384","RS512","ES256","ES384","ES512"],p=["RS256","RS384","RS512"],d=["HS256","HS384","HS512"];u&&(c.splice(3,0,"PS256","PS384","PS512"),p.splice(3,0,"PS256","PS384","PS512")),e.exports=function(e,r,t,u){var l;if("function"!==typeof t||u||(u=t,t={}),t||(t={}),t=Object.assign({},t),l=u||function(e,r){if(e)throw e;return r},t.clockTimestamp&&"number"!==typeof t.clockTimestamp)return l(new n("clockTimestamp must be a number"));if(void 0!==t.nonce&&("string"!==typeof t.nonce||""===t.nonce.trim()))return l(new n("nonce must be a non-empty string"));var y=t.clockTimestamp||Math.floor(Date.now()/1e3);if(!e)return l(new n("jwt must be provided"));if("string"!==typeof e)return l(new n("jwt must be a string"));var m,b=e.split(".");if(3!==b.length)return l(new n("jwt malformed"));try{m=a(e,{complete:!0})}catch(v){return l(v)}if(!m)return l(new n("invalid token"));var g,h=m.header;if("function"===typeof r){if(!u)return l(new n("verify must be called asynchronous if secret or public key is provided as a callback"));g=r}else g=function(e,t){return t(null,r)};return g(h,(function(r,a){if(r)return l(new n("error in secret or public key callback: "+r.message));var u,g=""!==b[2].trim();if(!g&&a)return l(new n("jwt signature is required"));if(g&&!a)return l(new n("secret or public key must be provided"));if(g||t.algorithms||(t.algorithms=["none"]),t.algorithms||(t.algorithms=~a.toString().indexOf("BEGIN CERTIFICATE")||~a.toString().indexOf("BEGIN PUBLIC KEY")?c:~a.toString().indexOf("BEGIN RSA PUBLIC KEY")?p:d),!~t.algorithms.indexOf(m.header.alg))return l(new n("invalid algorithm"));try{u=f.verify(e,m.header.alg,a)}catch(k){return l(k)}if(!u)return l(new n("invalid signature"));var v=m.payload;if("undefined"!==typeof v.nbf&&!t.ignoreNotBefore){if("number"!==typeof v.nbf)return l(new n("invalid nbf value"));if(v.nbf>y+(t.clockTolerance||0))return l(new i("jwt not active",new Date(1e3*v.nbf)))}if("undefined"!==typeof v.exp&&!t.ignoreExpiration){if("number"!==typeof v.exp)return l(new n("invalid exp value"));if(y>=v.exp+(t.clockTolerance||0))return l(new o("jwt expired",new Date(1e3*v.exp)))}if(t.audience){var w=Array.isArray(t.audience)?t.audience:[t.audience],x=Array.isArray(v.aud)?v.aud:[v.aud],j=x.some((function(e){return w.some((function(r){return r instanceof RegExp?r.test(e):r===e}))}));if(!j)return l(new n("jwt audience invalid. expected: "+w.join(" or ")))}if(t.issuer){var S="string"===typeof t.issuer&&v.iss!==t.issuer||Array.isArray(t.issuer)&&-1===t.issuer.indexOf(v.iss);if(S)return l(new n("jwt issuer invalid. expected: "+t.issuer))}if(t.subject&&v.sub!==t.subject)return l(new n("jwt subject invalid. expected: "+t.subject));if(t.jwtid&&v.jti!==t.jwtid)return l(new n("jwt jwtid invalid. expected: "+t.jwtid));if(t.nonce&&v.nonce!==t.nonce)return l(new n("jwt nonce invalid. expected: "+t.nonce));if(t.maxAge){if("number"!==typeof v.iat)return l(new n("iat required when maxAge is specified"));var E=s(t.maxAge,v.iat);if("undefined"===typeof E)return l(new n('"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));if(y>=E+(t.clockTolerance||0))return l(new o("maxAge exceeded",new Date(1e3*E)))}if(!0===t.complete){var N=m.signature;return l(null,{header:h,payload:v,signature:N})}return l(null,v)}))}}}]);
//# sourceMappingURL=chunk-vendors-f82e0cd2.d962a0cc.js.map