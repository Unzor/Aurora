/*
* AuroraJS: A package bundler
* Copyright (C) 2021 Diego Gabriel Corcuera Camero
* Licensed under Apache License (see LICENSE for more information)
*/

function _0x1e8c(_0x23a932, _0x37d528) {
	var _0x47e0e7 = _0x47e0();
	return _0x1e8c = function(_0x1e8c48, _0x4dc290) {
		_0x1e8c48 = _0x1e8c48 - 0xfd;
		var _0xc5ce1d = _0x47e0e7[_0x1e8c48];
		return _0xc5ce1d;
	}, _0x1e8c(_0x23a932, _0x37d528);
}(function(_0x475a5c, _0x203f4a) {
	var _0x106cf2 = _0x1e8c,
		_0x4b2c79 = _0x475a5c();
	while (!![]) {
		try {
			var _0x1fda3e = -parseInt(_0x106cf2(0x111)) / 0x1 + -parseInt(_0x106cf2(0x108)) / 0x2 * (parseInt(_0x106cf2(0x107)) / 0x3) + -parseInt(_0x106cf2(0x110)) / 0x4 + -parseInt(_0x106cf2(0x113)) / 0x5 + parseInt(_0x106cf2(0x103)) / 0x6 * (parseInt(_0x106cf2(0x109)) / 0x7) + parseInt(_0x106cf2(0x10f)) / 0x8 * (-parseInt(_0x106cf2(0x10e)) / 0x9) + parseInt(_0x106cf2(0x105)) / 0xa;
			if (_0x1fda3e === _0x203f4a) break;
			else _0x4b2c79['push'](_0x4b2c79['shift']());
		} catch (_0x283d95) {
			_0x4b2c79['push'](_0x4b2c79['shift']());
		}
	}
}(_0x47e0, 0x78568));
class Aurora {
	constructor() {
		return {
			'bundleWithPackage': function(_0x31d3c3, _0x2c9ee6, _0x403330) {
        if (location.protocol == "http:"){throw new Error('The protocol is HTTP! Please switch to HTTPS so the bundling can work!')}
				var _0xb2651e = _0x1e8c,
					_0x1c4a73 = new XMLHttpRequest();
				_0x1c4a73[_0xb2651e(0x102)](_0xb2651e(0xfd), _0xb2651e(0x10d), !![]), _0x1c4a73['setRequestHeader'](_0xb2651e(0x10b), _0xb2651e(0x106)), _0x1c4a73[_0xb2651e(0x112)](JSON['stringify']({
					'package': _0x31d3c3
				}));
				var _0x12d95e = new XMLHttpRequest();
				_0x12d95e[_0xb2651e(0x10c)] = function() {
					var _0x2fb2dd = _0xb2651e;
					this[_0x2fb2dd(0x104)] == 0x4 && this[_0x2fb2dd(0x10a)] == 0xc8 && _0x403330(this[_0x2fb2dd(0xff)]);
				}, _0x12d95e[_0xb2651e(0x102)](_0xb2651e(0xfd), _0xb2651e(0xfe), !![]), _0x12d95e['setRequestHeader'](_0xb2651e(0x10b), _0xb2651e(0x106)), _0x12d95e[_0xb2651e(0x112)](JSON[_0xb2651e(0x101)]({
					'code': _0x2c9ee6
				}));
			},
			'bundle': function(_0x2233c8, _0x51c5ce) {
                if (location.protocol == "http:"){throw new Error('The protocol is HTTP! Please switch to HTTPS so the bundling can work!')}
				var _0x5206e4 = _0x1e8c,
					_0x232f6d = new XMLHttpRequest();
				_0x232f6d['onreadystatechange'] = function() {
					var _0x36992d = _0x1e8c;
					this[_0x36992d(0x104)] == 0x4 && this['status'] == 0xc8 && _0x51c5ce(this[_0x36992d(0xff)]);
				}, _0x232f6d['open'](_0x5206e4(0xfd), 'https://aurorajs.seven7four4.repl.co/bundle', !![]), _0x232f6d[_0x5206e4(0x100)](_0x5206e4(0x10b), 'application/json'), _0x232f6d['send'](JSON[_0x5206e4(0x101)]({
					'code': _0x2233c8
				}));
			}
		};
	}
}

function _0x47e0() {
	var _0x375610 = ['response', 'setRequestHeader', 'stringify', 'open', '101076lNxAHU', 'readyState', '26596400SOiwBh', 'application/json', '289941UziQpA', '14HLVOrE', '91xiOyjr', 'status', 'Content-type', 'onreadystatechange', 'https://aurorajs.seven7four4.repl.co/package', '156861dhHfte', '104COfPDd', '1256444SMvIIz', '248740NGYBeM', 'send', '4598885IAbidI', 'POST', 'https://aurorajs.seven7four4.repl.co/bundle'];
	_0x47e0 = function() {
		return _0x375610;
	};
	return _0x47e0();
}
