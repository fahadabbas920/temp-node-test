const path = require('path')

//current path of app.js
console.log(path.sep)

// join pathname 
const filePath = path.join('/content/','subfolder','text.txt')
console.log(filePath)

// relative path
const base = path.basename(filePath)
console.log(base)

//Absolute path from beginnig
const absolute = path.resolve(__dirname,'content','subfolder','text.txt')
console.log(absolute)