const posts = [
    {title: 'Post 1', body: 'This is post one'},
    {title: 'Post 2', body: 'This is post two'}
   ];
   
   function getPost(){
       setTimeout(function(){
           let output = '';
           posts.forEach(element => {
               output = output + element.title + '\n'
               //console.log(output);
           });
           console.log(output);
       }, 2000);
   }
   
   function createPost(post, callback){
       /*setTimeout(function(){
           posts.push(post);
           callback();
       },3000);*/
       
       posts.push(post);
       callback();
       
   }
   
   createPost({title: 'Post 3', body: 'This is post three'}, getPost);