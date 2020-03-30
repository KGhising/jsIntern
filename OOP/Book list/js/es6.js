class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
class UI{
    // Add book list
    addBookToList(book){
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

    // show alert
    showAlert(message, className){
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

    // delete book / list items
    deleteBook(target){
        if(target.className = 'delete'){
            target.parentElement.parentElement.remove();
        }
    }

    // clear inputs
    clearInput(){
        document.getElementById('bookTitle').value = '';
        document.getElementById('bookAuthor').value = '';
        document.getElementById('bookISBN').value = '';
    }
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

// Event listener for remove book list
document.getElementById('List').addEventListener('click', function(e){
    const ui = new UI();

    ui.deleteBook(e.target)

    // alert
    ui.showAlert('Book removed from list', 'success');
    // prevent default
    e.preventDefault();
});