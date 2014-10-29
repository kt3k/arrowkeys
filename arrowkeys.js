/**
 * arrowkeys v0.0.0
 *
 * author: Yosiya Hinosawa
 * license: MIT License
 */

(function (window, $) {
    'use strict';

    $.fn.arrowkeys = function () {
        this._arrowkeysHandler = function (event) {
            switch (event.keyCode) {
            case 37:
                this.trigger('leftkey');
                break;
            case 38:
                this.trigger('upkey');
                break;
            case 39:
                this.trigger('rightkey');
                break;
            case 40:
                this.trigger('downkey');
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
