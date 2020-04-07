'use strict';

const times = process.argv.slice(2);

const timers = function(times) {
  
  for (let i = 0; i < times.length; i++) {
    if (times[i] <= 0 || times[i] === isNaN || times.length[i] === 0) {
      return;
    }
    setTimeout(() => {
      process.stdout.write('\x07');
    },times[i] * 1000);
  }
};

timers(times);


