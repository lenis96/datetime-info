import { WebPlugin } from '@capacitor/core';

import type { DateTimeInfoPlugin } from './definitions';

export class DateTimeInfoWeb extends WebPlugin implements DateTimeInfoPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
