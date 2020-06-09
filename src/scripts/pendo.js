(function (apiKey) {
    (function (p, e, n, d, o) {
        var v, w, x, y, z; o = p[d] = p[d] || {}; o._q = [];
        v = ['initialize', 'identify', 'updateOptions', 'pageLoad']; for (w = 0, x = v.length; w < x; ++w)(function (m) {
            o[m] = o[m] || function () { o._q[m === v[0] ? 'unshift' : 'push']([m].concat([].slice.call(arguments, 0))); };
        })(v[w]);
        y = e.createElement(n); y.async = !0; y.src = 'https://pendo-wildlings-static.storage.googleapis.com/agent/static/' + apiKey + '/pendo.js';
        z = e.getElementsByTagName(n)[0]; z.parentNode.insertBefore(y, z);
    })(window, document, 'script', 'pendo');
})('697ae132-66e8-47f4-6858-96da721a7d3c');

// Initialize on startup
(function () {
    var vid = prompt("Enter your Visitor ID (leave blank for hardcoded default):").trim() || 'Neill-Hardcoded';
    window.pendo.initialize({ visitor: { id: vid } })
})();