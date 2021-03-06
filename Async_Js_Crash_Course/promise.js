const posts = [
    { title : 'Post one', body:'this is post one'},
    { title : 'Post two', body:'this is post two'}

];

function getPost(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post)=>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.push(post);
            
            const error = false;

            if(!error)
            {
                resolve();
            }
            else{
                reject('Error: somthing went wrong.');
            }

        }, 2000);
    });
}

// createPost({title:'Post three',body:"this is post"})
// .then(getPost).catch(err => console.log(err));



//async await

// async function init(){
//     await createPost({title:'Post three',body:'this is post'});
//     getPost();
// }

// init();

// Async /Await /fetch

async function fetchUser(){
    const res = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();

    //const data = await res.json();

    //console.log(data);
    console.log(res);
}

fetchUser();

//promis.all 

// const promise1 = Promise.resolve('hello world');

// const promise2 = 10;

// const promise3 = new Promise((resolve,reject) =>{
//     setTimeout(resolve, 2000,'goodbye');
// });

// const promise4 = 
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json());

// Promise.all([promise1,promise2,promise3,promise4])
// .then((values)=>console.log(values));
