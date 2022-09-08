let myLibrary = [];

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

function displayBooks() {
  for (i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i].info());
  }
}

myLibrary.push(new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'no'));
myLibrary.push(new Book('Test Book', 'Test Guy', '434', 'yes'));
myLibrary.push(new Book('The Alchemist', 'Paolo Coehlo', 330, 'yes'));