let count = 0

const cb = () => {
    console.log(`Processing setImmediate cb ${++count}`)
    setImmediate(cb)
}

setImmediate(cb)
setTimeout(() => console.log('setTimeout executed'), 0)

console.log('Start')

// https://jinoantony.com/blog/setimmediate-vs-process-nexttick-in-nodejs