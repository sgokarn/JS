
function requestListener(req, res){
    const url = req.url;
    
    if(url === '/')
    {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Greeting Page</title></head>');
        res.write('<body>');
        res.write('<h1>Welcome on the GREETING PAGE</h1>');
        res.write('<form action ="/create-user" method ="POST">');
        res.write('<input type ="text" name ="username">');
        res.write('<button type="submit">Send</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/users')
    {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Users List</title></head>');
        res.write('<body>');
        res.write('<h1>USER LIST</h1>');
        res.write('<ul></ul>');
        res.write('<li>User 1</li><li>User 2</li><li>User 3</li>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/create-user')
    {
        const body = [];
        req.on('data', function(chunks){
            body.push(chunks);
        });
        req.on('end', function(){
            const parseBody = Buffer.concat(body).toString();
            const msg = parseBody.split(/=(.+)/)[1];
            console.log(msg);
        });

        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Error Page</title></head>');
    res.write('<body>');
    res.write('<h1>PAGE NOT FOUND</h1>');
    res.statusCode = 404;
    res.write('</body>');
    res.write('</html>');
    return res.end();

}

module.exports = {
    handler: requestListener
};