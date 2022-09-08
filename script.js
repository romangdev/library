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

