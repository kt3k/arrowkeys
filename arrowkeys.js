/**
 * arrowkeys v0.1.1
 *
 * author: Yosiya Hinosawa
 * license: MIT License
 */

(function (window, $) {
    'use strict';

    $.fn.arrowkeys = function () {
        var that = this;

        this._arrowkeysHandler = function (event) {
            switch (event.keyCode) {
            case 37:
                that.trigger('leftkey');
                break;
            case 38:
                that.trigger('upkey');
                break;
            case 39:
                that.trigger('rightkey');
                break;
            case 40:
                that.trigger('downkey');
                break;
            }
        };

        this.on('keydown', this._arrowkeysHandler);

        return this;
    };

    $.fn.arrowkeysUnbind = function () {
        this.off('keydown', this._arrowkeysHandler);

        delete this._arrowkeysHandler;

        return this;
    };

}(window, window.$));
