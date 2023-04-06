const { readFile, writeFile } = require('fs')

// Calls a callback function after reading file
console.log('start')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-async.txt',
            `Here is the result : ${first} , ${second}`
            // { flag: 'a' }
            ,(err,result)=>{
                if (err) {
                    console.log(err)
                    return
                }
                // undefined
                // console.log(result)

                console.log('done with this task')
            }
            )
    })


    // console.log(result)
})

console.log('starting next task')