const posts = [
    {title: 'Post 1', body: 'This is post one'},
    {title: 'Post 2', body: 'This is post two'}
   ];
   
   function getPost(string){
       setTimeout(function(){
           let output = '';
           posts.forEach(element => {
               output = output + element.title + '\n'
               //console.log(output);
           });
           console.log(output);
       }, 2000);

       console.log(string);
   }
   
   function createPost(post){
       return new Promise (function(resolve, reject){
       setTimeout(function(){
           posts.push(post);
           const error = true;

           if(error)
           {
            resolve();
           }
           else{
               reject('Err! Something went wrong');
           }
       },3000);
    });
       
   } 

 

   createPost({title: 'Post 3', body: 'This is post three'}).then((x)=>{getPost("Spidey")}).catch((err) => {});