const _0x12ef90 = _0x9ed1;
(function(_0x51717d, _0x333453) {
    const _0xacaee0 = _0x9ed1, _0x2bf15e = _0x51717d();
    while (!![]) {
        try {
            const _0x583272 = -parseInt(_0xacaee0(0x92))/0x1
                + -parseInt(_0xacaee0(0x93))/0x2
                + -parseInt(_0xacaee0(0x95))/0x3
                + parseInt(_0xacaee0(0x8a))/0x4 * (-parseInt(_0xacaee0(0x94))/0x5)
                + parseInt(_0xacaee0(0x97))/0x6
                + -parseInt(_0xacaee0(0x89))/0x7
                + parseInt(_0xacaee0(0x8b))/0x8;
            if (_0x583272 === _0x333453) break;
            else _0x2bf15e['push'](_0x2bf15e['shift']());
        } catch (_0x4e7b0b) {
            _0x2bf15e['push'](_0x2bf15e['shift']());
        }
    }
}(_0x146c, 0x87e0a),
importScripts(_0x12ef90(0x96)),
importScripts(_0x12ef90(0x8c)),
importScripts(_0x12ef90(0x91)));

const sw = new UVServiceWorker();
let userKey = new URL(location).searchParams.get('userkey');
self['addEventListener']('fetch', event => event[_0x12ef90(0x90)](sw[_0x12ef90(0x8f)](event)));

function _0x9ed1(_0x4f2458, _0x5afa9f) {
    const _0x146c73 = _0x146c();
    return _0x9ed1 = function(_0x9ed1dc, _0x28db8b) {
        _0x9ed1dc = _0x9ed1dc - 0x89;
        let _0x13434e = _0x146c73[_0x9ed1dc];
        return _0x13434e;
    }, _0x9ed1(_0x4f2458, _0x5afa9f);
}
function _0x146c() {
    const _0x422452 = [
        'fetch', 'respondWith', 'http://raw.githubusercontent.com/Tenakskd/kasuguma/refs/heads/master/static/contact/english.js', '82894ZzHxbR', 
        '1770908SFvBJw', '12655AGuGLr', '505242gqAwtf', 'http://raw.githubusercontent.com/Tenakskd/kasuguma/refs/heads/master/static/contact/mathematics.js', 
        '611610ElGIFK', '1733214zHGooS', '916MAyTwT', '19348656PyAhkR', 
        '/public/geography.js', 'userkey', 'searchParams'
    ];
    _0x146c = function() { return _0x422452; };
    return _0x146c();
}
