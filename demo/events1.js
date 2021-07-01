const EventEmitter = require('events')
const emitter = new EventEmitter()

emitter.on('call', () => {
    console.log('call event')
})

emitter.emit('call')