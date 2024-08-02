import { WebPlugin } from '@capacitor/core';

import type { DateTimeInfoPlugin } from './definitions';

export class DateTimeInfoWeb extends WebPlugin implements DateTimeInfoPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async testPluginMethod(options: { msg: string; }): Promise<{ value: string,current_time?:any,elapsed_realtime?:any,auto_time?:boolean,auto_time_cheked?:boolean }> {
    // alert(options.msg+'llo');
    return {value:options.msg,current_time:'',elapsed_realtime:'',auto_time:true,auto_time_cheked:false}
  }
}
