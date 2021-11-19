/* Event Module */
const emitter = require('events')

const myEmitter = new emitter

myEmitter.on("STATUS", (data) => {

    /* Print Log */
    console.log(data)
})

myEmitter.emit("STATUS", {
    name: 'Sarangal'
})