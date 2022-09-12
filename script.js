let myLibrary = [];

const books = document.querySelector('.books');
const newBookButton = document.querySelector('.new-book');
let removeBtns = null;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  }
}

function addBookToLibrary() {
  title = prompt("Enter book title:");
  author = prompt("Enter book author:");
  pages = prompt("Enter number of pages in book:");
  read = prompt("Have you read the book?");

  myLibrary.push(new Book(title, author, pages, read));
}

function removeAllChildNodes() {
  while (books.firstChild) {
    books.removeChild(books.firstChild);
  }
}

function displayBooks() {
  removeAllChildNodes();
  for (let i = 0; i < myLibrary.length; i++) {
    let book = books.appendChild(document.createElement('p'));
    let removeBtn = books.appendChild(document.createElement('button'));

    removeBtn.textContent = 'remove';
    removeBtn.setAttribute('data-id', i);
    removeBtn.classList.add('removeBtn');

    book.textContent = myLibrary[i].info();
  }
}

myLibrary.push(new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read'));
myLibrary.push(new Book('Test Book', 'Test Guy', '434', 'read'));
myLibrary.push(new Book('The Alchemist', 'Paolo Coehlo', 330, 'read'));

displayBooks();
removeBtns = document.querySelectorAll('.removeBtn');

newBookButton.addEventListener('click', () => {
  addBookToLibrary();
  displayBooks();
  removeBtns = document.querySelectorAll('.removeBtn');
});

books.addEventListener('click', (e) => {
  if (e.target.classList.contains('removeBtn')) {
    myLibrary.splice(e.target.getAttribute('data-id'), 1);
    displayBooks();
  }
});

/* 
In display books function, for each new book object displayed, create new button
Associate newly created button with book object using data-attribute
When button is pressed, it removes the book from the library (and display)
*/