const url = require('url')
exports.getUser= function(req,res){
    const reqUrl = url.parse(req.url,true);
    var userName="Aditya"
    var response ={
        "text": "Hello" + userName
    }
    res.statusCodes=200
    res.setHeader('Contrent-Type','application/json')
    res.end(JSON.stringify(response))
}
exports.addUser=function(req,res){
    console.log(res)
    body=''
    req.on('data',function(chunk){
        body+=chunk;
    })
    req.on('end',function(){
        postBody = JSON.parse(body)
        var response={
            "text": "Post response val is"+postBody.value
        }
        res.statusCodes=201;
        res.setHeader('Contrent-Type','application/json')
        res.end(JSON.stringify(response))
    });
}
exports.invalidRequest=function(req,res){
    res.statusCodes=404;
    res.setHeader('Content-Type','text/plain');
    res.end('Invalid Request')
}