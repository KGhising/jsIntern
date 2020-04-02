const http = new HTTP;

// get user
// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));

// create user data
const data = {
    name: 'kishor ghising',
    username: 'kghising',
    email: 'bhfty99@gmail.com'
}

// create post
// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// put / update post
// http.put('https://jsonplaceholder.typicode.com/users/5', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// Delete user
http.delete('https://jsonplaceholder.typicode.com/users/5')
.then(data => console.log(data))
.catch(err => console.log(err));