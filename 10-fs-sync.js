const { readFileSync, writeFileSync } = require('fs')


console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first, second)

// the object at the end of write file sysnc is options in this case a means append

writeFileSync('./content/result-sync', `here is the result ${first} , ${second}`, { flag: 'a' })

console.log('done with this task')
console.log('starting the next time')