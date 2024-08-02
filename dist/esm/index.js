import { registerPlugin } from '@capacitor/core';
const DateTimeInfo = registerPlugin('DateTimeInfo', {
    web: () => import('./web').then(m => new m.DateTimeInfoWeb()),
});
export * from './definitions';
export { DateTimeInfo };
//# sourceMappingURL=index.js.map