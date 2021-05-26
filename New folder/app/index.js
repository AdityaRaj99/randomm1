const http =  require('http')
const server = http.createServer((req,res)=>{    //first parameter should b request
   console.log(req)
    res.write("hello")
    res.end()
})
server.listen(8080,()=>console.log('server is running'))