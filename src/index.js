"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
function log() {
    var location = {};
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        try {
            throw new Error('');
        }
        catch (e) {
            var str = e.stack.split('\n')[2];
            var match = str.match(/at (?<func>.*) \(.*?:(?<line>.*):/);
            var func = (match['groups'] || {}).func;
            if (location[func] === undefined) {
                location[func] = 1;
            }
            else {
                location[func]++;
            }
            var result = "[" + func + ":" + location[func] + "]";
            console.log.apply(console, __spreadArray(["%c==> " + result, 'color:red'], args, false));
            return result + "-" + args.join();
        }
    };
}
exports["default"] = log;
