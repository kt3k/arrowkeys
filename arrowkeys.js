/**
 * arrowkeys.js 1.0
 *
 * author: Yosiya Hinosawa
 * license: MIT License
 */

this.arrowkeys = (function (window) {
    'use strict';

    var keyEventListener = null;

    var nop = function () {};

    var funcOrNop = function (func) {
        return typeof func === 'function' ? func : nop;
    };

    var removeEventListener = function () {
        if (keyEventListener != null) {
            window.document.removeEventLister('keydown', keyEventListener);
        }
    };

    var exports = function (args) {

        var up = funcOrNop(args.up),
            down = funcOrNop(args.down),
            left = funcOrNop(args.left),
            right = funcOrNop(args.right);

        removeEventListener();

        keyEventListener = function (e) {
            switch (e.keyCode) {
            case 37:
                left();
                break;
            case 38:
                up();
                break;
            case 39:
                right();
                break;
            case 40:
                down();
                break;
            }
        };

        window.document.addEventListener('keydown', keyEventListener);
    };

    exports.removeEventListener = removeEventListener;
    exports.remove = removeEventListener;

    return exports;
}(this));
