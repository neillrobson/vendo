/* eslint-disable */
(function(apiKey){
    (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
    v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
        o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
        y=e.createElement(n);y.async=!0;y.src='https://pendo-perfserf-static.storage.googleapis.com/agent/static/'+apiKey+'/pendo.js';
        z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
})('b82bbc53-7f8e-450e-6f8e-80b9e550da97');
/* eslint-enable */

export default function (userData) {
    const p = window.pendo;
    if (typeof p.isReady === 'function' && p.isReady()) {
        p.identify(userData);
    } else {
        p.initialize(userData);
    }
}