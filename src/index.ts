import { registerPlugin } from '@capacitor/core';

import type { DateTimeInfoPlugin } from './definitions';

const DateTimeInfo = registerPlugin<DateTimeInfoPlugin>('DateTimeInfo', {
  web: () => import('./web').then(m => new m.DateTimeInfoWeb()),
});

export * from './definitions';
export { DateTimeInfo };
