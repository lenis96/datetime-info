export interface DateTimeInfoPlugin {
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
