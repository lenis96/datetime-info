import { WebPlugin } from '@capacitor/core';
export class DateTimeInfoWeb extends WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    async testPluginMethod(options) {
        // alert(options.msg+'llo');
        return { value: options.msg, current_time: '', elapsed_realtime: '', auto_time: true, auto_time_cheked: false };
    }
}
//# sourceMappingURL=web.js.map