const http = require('http')

const server = http.createServer((req,res)=>{
    // console.log(req)
    if(req.url === '/'){
        // res.write('Hello to our home page')
       return res.end('Hello to our home page')
    }
    if(req.url === '/contact'){
        return res.end('Contact Us')
    }
    if(req.url === '/about'){
        return res.end('About Us')
    }
    res.end(
    `<h1>Oops!</h1>
    <p>We cant see to file the page you are looking for.</p>
    <a href="/">back homepage</a>`)
})

server.listen(5000)