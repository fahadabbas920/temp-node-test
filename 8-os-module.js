// built in module

const os = require('os')

// Info about current user
const user = os.userInfo()
console.log(user)

// method returns the system up time in seconds
console.log(`The system uptime is ${os.uptime} seconds`)

const currentOS = {
    name: os.type(),
    release : os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)