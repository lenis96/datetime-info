import { WebPlugin } from '@capacitor/core';
import type { DateTimeInfoPlugin } from './definitions';
export declare class DateTimeInfoWeb extends WebPlugin implements DateTimeInfoPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    testPluginMethod(options: {
        msg: string;
    }): Promise<{
        value: string;
        current_time?: any;
        elapsed_realtime?: any;
        auto_time?: boolean;
        auto_time_cheked?: boolean;
    }>;
}
