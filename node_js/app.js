const http = require('http'); //Name of the module being imported -- global module as required without path
//const fs = require('fs');
//requiring routes.js file which hold the same routing method over here
const routes = require('./routes');

//function reqListener(request, response){
    //console.log(request.url, request.method, request.headers)
    //console.log("URL \n" + request.url + "\n METHOD \n" + request.method + "\n HEADERS \n" + request.headers);
    //process.exit(); - quits the process (Hard exits the event loop)

    /*
    const url = request.url;
    const method = request.method;

    if(url === '/')
    {
        console.log(request.url, request.method);

        response.setHeader('Content-Type', 'text/html');
        response.write('<html><head><title>Enter message!</title></head><body><form action ="/message" method ="POST"><input type ="text" name ="message"><button type="submit">Send</button></form></body></html>');
        return response.end();
    }

    if(url === '/message' && method === "POST")
    {
        console.log(request.url, request.method);

        const body = [];
        request.on("data", function(chunk){
        console.log(chunk);
        body.push(chunk);
        });
    */
        /*
        request.on("end", function(){
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split(/=(.+)/)[1];
            console.log(message);
            fs.writeFileSync("message.txt", message);
        });

        //fs.writeFileSync("message.txt", "DUMMY");
        response.statusCode = 302;
        response.setHeader('Location', '/');
        return response.end();
        */

        //if not returned the flow will reach to line `70` as just the function is registered and not been executed 
        //and would fail because a response would alread would haveen sent from line `74`
    //    return request.on("end", function(){
    //    const parsedBody = Buffer.concat(body).toString();
        //console.log(parsedBody);
    //    const message = parsedBody.split(/=(.+)/)[1];
        //console.log(message);
        /*
        //using synchronous write which literally blocks the further processing until its completion
        fs.writeFileSync("message.txt", message);
        response.statusCode = 302;
        response.setHeader('Location', '/');
        return response.end();
        */

        //ascynchronus write, will take third parameter which will catch error if any while writing else it remains null
        //and the function is written after catching it!
    /*    fs.writeFile("message.txt", message, (err) => {
        response.statusCode = 302;
        response.setHeader('Location', '/');
        return response.end();
       });
       
        });        
    }

    console.log(request.url, request.method);

    response.setHeader('Content-Type', 'text/html');
    response.write('<html><head><title>My First Page</title></head><body><h1>Hello from my node js</h1></body></html>');
    response.end(); //Nothing should be written below this, as response should not be changed after sending it to the client
    */  
//} 

//as routes has been exported as an object and the reqListener function 
//is stored in handler property
const server = http.createServer(routes.handeler);

server.listen(3000);