const http = require("http")
const url = require("url")

const Server = http.createServer((req,res)=>{

    const parsedUrl = url.parse(req.url, true)
    const path = parsedUrl.pathname

    console.log("request received on " + path)
    res.end("Hello world")
})

Server.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})