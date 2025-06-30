const _0x22c072 = _0x54fd;

function _0x44c5() {
    const _0x1aea5d = ['https://raw.githubusercontent.com/Tenakskd/kasuguma/refs/heads/master/static/contact/english.js', 'userkey', '4280YfLEHA', '57700pOyVrj', '6hEVQMD', '296177sOXhiE', '730116bZowXl', '27WXCyVp', '1110300PcDQDB', 'fetch', '1QwVuhB', '13mxQIcs', 'https://raw.githubusercontent.com/Tenakskd/kasuguma/refs/heads/master/static/contact/mathematics.js', '285GhMMQY', '446788HGbbtu', '352tWYmtR', 'addEventListener', '140264llQzPF'];
    _0x44c5 = function() {
        return _0x1aea5d;
    };
    return _0x44c5();
}(function(_0x3b3fd1, _0x882ccf) {
    const _0x28c257 = _0x54fd,
        _0x3c18b4 = _0x3b3fd1();
    while (!![]) {
        try {
            const _0x2fd437 = -parseInt(_0x28c257(0x1e5)) / 0x1 * (parseInt(_0x28c257(0x1e9)) / 0x2) + parseInt(_0x28c257(0x1e8)) / 0x3 * (-parseInt(_0x28c257(0x1ef)) / 0x4) + parseInt(_0x28c257(0x1f5)) / 0x5 + -parseInt(_0x28c257(0x1f1)) / 0x6 * (parseInt(_0x28c257(0x1f2)) / 0x7) + parseInt(_0x28c257(0x1ec)) / 0x8 * (parseInt(_0x28c257(0x1f4)) / 0x9) + -parseInt(_0x28c257(0x1f0)) / 0xa * (-parseInt(_0x28c257(0x1ea)) / 0xb) + parseInt(_0x28c257(0x1f3)) / 0xc * (parseInt(_0x28c257(0x1e6)) / 0xd);
            if (_0x2fd437 === _0x882ccf) break;
            else _0x3c18b4['push'](_0x3c18b4['shift']());
        } catch (_0x178dac) {
            _0x3c18b4['push'](_0x3c18b4['shift']());
        }
    }
}(_0x44c5, 0x254d3), importScripts(_0x22c072(0x1e7)), importScripts('/contact/geography.js'), importScripts(_0x22c072(0x1ed)));
const sw = new UVServiceWorker();
let userKey = new URL(location)['searchParams']['get'](_0x22c072(0x1ee));

function _0x54fd(_0x50de80, _0x5ac355) {
    const _0x44c571 = _0x44c5();
    return _0x54fd = function(_0x54fd24, _0x1b285d) {
        _0x54fd24 = _0x54fd24 - 0x1e5;
        let _0x35cedb = _0x44c571[_0x54fd24];
        return _0x35cedb;
    }, _0x54fd(_0x50de80, _0x5ac355);
}
self[_0x22c072(0x1eb)](_0x22c072(0x1f6), _0x2ef68e => _0x2ef68e['respondWith'](sw['fetch'](_0x2ef68e)));
