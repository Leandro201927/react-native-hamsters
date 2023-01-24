/**
 * react-native-threads
 * example implementation of Worker thread using:
 * @see https://www.npmjs.com/package/react-native-threads
 */

import {self} from 'react-native-threads';
// import './config';

let count = 0;

self.onmessage = message => {
  console.log(`THREAD: got message ${message}`);

  count++;

  self.postMessage(`Message #${count} from worker thread!`);
};
