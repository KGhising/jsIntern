// ES5 javascript

// book constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


// UI constructor
function UI() {
    
}
// add book to list
UI.prototype.addBookToList = function(book){
    const list = document.getElementById('List');
    // creating tr element
    const row = document.createElement('tr');
    // appending columns
    row.innerHTML = `
         <td>${book.title}</td>
         <td>${book.author}</td>
         <td>${book.isbn}</td>
         <td><a href = "#" class = "delete">X</a></td> 
    `;
    list.appendChild(row);
}

// error message
UI.prototype.showAlert = function(message, className){
    // create div
    const div = document.createElement('div');
    div.className = `alert ${className}`; 
    div.appendChild(document.createTextNode(message));

    // get parent element
    const section = document.querySelector('.section');
    const container = document.querySelector('.container');
    // inserting error element
    container.insertBefore(div, section);

    // hide after 3 sec
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);
}
 // clear inputs
 UI.prototype.clearInput = function(){
    document.getElementById('bookTitle').value = '';
    document.getElementById('bookAuthor').value = '';
    document.getElementById('bookISBN').value = '';
 }
// event listener
document.getElementById('bookForm').addEventListener('submit',function(e){
    // getting value from input
    const title = document.getElementById('bookTitle').value,
          author = document.getElementById('bookAuthor').value,
          isbn = document.getElementById('bookISBN').value

    // instantiate book
    const book = new Book(title, author, isbn);
    
    // instantiate UI
    const ui = new UI();

    // validate input
    if(title === '' || author === '' || isbn === ''){
        // Error alert
        ui.showAlert('Your inputs are empty, Please check!', 'error');
    }else{
        // add book to list
        ui.addBookToList(book);
        // show sucess message
        ui.showAlert('Book added Successful', 'success');
        // clear input
        ui.clearInput();    
    }

    // prevent default
    e.preventDefault();
});