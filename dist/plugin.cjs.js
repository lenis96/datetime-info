'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const DateTimeInfo = core.registerPlugin('DateTimeInfo', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.DateTimeInfoWeb()),
});

class DateTimeInfoWeb extends core.WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    async testPluginMethod(options) {
        // alert(options.msg+'llo');
        return { value: options.msg, current_time: '', elapsed_realtime: '', auto_time: true, auto_time_cheked: false };
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    DateTimeInfoWeb: DateTimeInfoWeb
});

exports.DateTimeInfo = DateTimeInfo;
//# sourceMappingURL=plugin.cjs.js.map
