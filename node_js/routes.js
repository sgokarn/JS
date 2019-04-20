//handling routing through multiple files

const fs = require('fs');

function reqListener(request, response){

    const url = request.url;
    const method = request.method;

    if(url === '/')
    {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><title>Enter message!</title></head>');
        response.write('<body><form action ="/message" method ="POST"><input type ="text" name ="message"><button type="submit">Send</button></form></body>');
        response.write('</html>');
        return response.end();
    }

    if(url === '/message' && method === "POST")
    {
        const body = [];
        request.on("data", function(chunk){
            body.push(chunk);
        });

        return request.on("end", function(){
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split(/=(.+)/)[1];
            fs.writeFile("message.txt", message, (err) => {
                response.statusCode = 302;
                response.setHeader('Location', '/');
                return response.end();
            });
       
        });        
    }

    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<head><title>My First Page</title></head>');
    response.write('<body><h1>Hello from my node js</h1></body>');
    response.write('</html>');
    response.end(); 

}

//export required function or any other thing
//to export multiple things, export it as an object
module.exports = {
    handeler: reqListener
};

