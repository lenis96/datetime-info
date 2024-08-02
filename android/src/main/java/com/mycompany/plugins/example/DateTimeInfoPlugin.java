package com.mycompany.plugins.example;

import android.os.SystemClock;
import android.provider.Settings;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "DateTimeInfo")
public class DateTimeInfoPlugin extends Plugin {

    private DateTimeInfo implementation = new DateTimeInfo();

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }

     @PluginMethod
    public void testPluginMethod(PluginCall call) {
        String value = call.getString("msg");
        boolean autotime = true;
        boolean autoTimeOk = false;

        JSObject ret = new JSObject();
        ret.put("value", value);
        ret.put("current_time",System.currentTimeMillis());
        ret.put("elapsed_realtime", SystemClock.elapsedRealtime());

         try {
             autotime = !(Settings.Global.getInt(this.bridge.getContext().getContentResolver(), Settings.Global.AUTO_TIME) == 0);
             autoTimeOk = true;
         } catch (Settings.SettingNotFoundException e) {
//             throw new RuntimeException(e);
         }
         ret.put("auto_time",autotime);
         ret.put("auto_time_cheked",autoTimeOk);


         call.resolve(ret);
//     System.currentTimeMillis();
    }
}
