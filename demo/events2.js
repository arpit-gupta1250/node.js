const EventEmitter = require('events')
const emitter = new EventEmitter()

emitter.on('call', (name, age) => {
    console.log('call event')
    console.log(name, age)
})

emitter.emit('call', 'Arpit', 22)