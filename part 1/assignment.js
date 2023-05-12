const http=require("http");
const server=http.createServer((req,res)=>{

    const url=req.url;
    const method=req.method;

    if(url==="/"){
        res.setHeader("Content-Type","text/html");
        res.write("<html><head><title>Assignment 1</title></head><body><form action='/create-user' method='POST'  ><input type='text' name='username'><button type='submit'>Send</button></form></body></html>");
        return res.end();
    }
    if(url==="/users"){
        res.setHeader("Content-Type","text/html");
        res.write("<html><head><title>Assignment 1</title></head><body><ul><li>User 1</li> <li>User 2</li></ul></body></html>");
        return res.end();

    }
    if(url==="/create-user"){
        const body=[];
        req.on('data',chunk=>{
            body.push(chunk)
        })

        req.on('end',()=>{
            const parsedbody=Buffer.concat(body).toString();
            console.log(parsedbody.split('=')[1]);

        })
        res.statusCode=302
        res.setHeader('Location','/')
        res.end()
    }
    


});

server.listen(5000); 