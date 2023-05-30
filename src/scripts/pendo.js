import { JWT } from 'jsonwebtoken';

/* eslint-disable */
// prettier-ignore
(function(apiKey){
    (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
    v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
        o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
        y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo-perfserf.pendo-dev.com/agent/static/'+apiKey+'/pendo.js';
        z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
})('b82bbc53-7f8e-450e-6f8e-80b9e550da97'); // Pendo Perfserf - Vendo
// })('3e02bede-44ff-4d57-78e5-ce22fcfba190'); // Pendo Atlas - Test72885
/* eslint-enable */

const JWTSigningKey = '1e8146b6-4e0d-42bd-539e-1fa42d7d628b'; // Vendo - Vendo App - Neill's Personal Website
const JWTKeyName = 'vend-vend-K4ND7'; // Vendo - Vendo App - Neill's Personal Website

export function pendoIdentify(userData, useJWT = false) {
    const p = window.pendo;

    const payload = useJWT
        ? {
              jwt: JWT.sign(userData, JWTSigningKey),
              signingKeyName: JWTKeyName
          }
        : userData;

    if (typeof p.isReady === 'function' && p.isReady()) {
        p.identify(payload);
    } else {
        p.initialize(payload);
    }
}

export function pendoClearSession() {
    const p = window.pendo;
    if (typeof p.isReady === 'function' && p.isReady()) {
        p.clearSession();
    }
}
