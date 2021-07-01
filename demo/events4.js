const EventEmitter = require('events')
const emitter = new EventEmitter()

emitter.once('call', () => {
  setImmediate(() => {
    console.log('async');
  });
});

console.log('1');
emitter.emit('call');
console.log('2');
emitter.emit('call');