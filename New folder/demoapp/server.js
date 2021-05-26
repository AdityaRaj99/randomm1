const hostname= '127.0.0.1'
const port = 8080;

const server = require('./controller/contoller')
server.listen(port,hostname,()=>{
    console.log(`srever runningat http://${hostname}:${port}`)
});