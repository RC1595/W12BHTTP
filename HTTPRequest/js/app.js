let btn = document.getElementById('btn');
let text = document.getElementById('text');
let btn2 = document.getElementById('btn2');

btn.addEventListener("click", post);
btn2.addEventListener("click", edit);

deletePost();

// POST
function post(){
    axios.request({
        method: "POST",
        url: "https://jsonplaceholder.typicode.com/posts"
    }).then(response).catch(error);
    }

function response(resp){
    let postSuccess= "Post Successful!";
    document.getElementById('post').innerHTML=postSuccess
    // alert("Post Successful!")
    console.log(resp);
}

// PATCH
function edit(){
    axios.request({
        method: 'PATCH',
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        id: 1,
        title: 'foo',
        body: 'bar',
        userID: 1,
        headers: {
            'content-type': 'application/json; charset=UTF8'
        }
    }).then(log).catch(error)
    }

function log(print){
    console.log(print)
}

// DELETE
function deletePost(){
    axios.request({
        method: 'DELETE',
        url: 'https://jsonplaceholder.typicode.com/posts/1'
    }).then(del).catch(error)
}

function del(erase){
    console.log(erase);
}

// GET
function getPost(){
    axios.request({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts'
    }).then(display).catch(error)
}
function display(allPosts){
    let dataArray = allPosts.data;
    for (let i = 0; i < dataArray.length; i++) {
        let indexedPost = dataArray[i];
        document.getElementById('allPosts').innerHTML += dataArray[i].body;
        console.log(allPosts);
    }
}
getPost();


function error(e){
    console.log(e)
}