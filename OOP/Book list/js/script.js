// ES5 javascript

// book constructor
function Book(title, author, isbn){
    this.titl = title;
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
         <td>${book.ispn}</td>
         <td><a href = "#" class = "delete">X</a></td> 
    `;
    list.appendChild(row);
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
          ispn = document.getElementById('bookISBN').value

    // instantiate book
    const book = new Book(title, author, ispn);
    
    // instantiate UI
    const ui = new UI();

    // add book to list
    ui.addBookToList(book);
    // clear input
    ui.clearInput();
    // prevent default
    e.preventDefault();
});