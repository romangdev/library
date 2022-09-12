let myLibrary = [];

const books = document.querySelector('.books');
const newBookButton = document.querySelector('.new-book');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function() {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}

Book.prototype.checkRead = function() {
  if (this.read === "read") {
    this.read = "not read";
  } else {
    this.read = "read";
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
    let bookCard = books.appendChild(document.createElement('div'));
    let bookButtons = bookCard.appendChild(document.createElement('div'));
    let book = bookCard.appendChild(document.createElement('p'));
    let removeBtn = bookButtons.appendChild(document.createElement('button'));
    let readBtn = bookButtons.appendChild(document.createElement('button'));

    bookCard.classList.add('book-card');
    bookButtons.classList.add('book-buttons');

    removeBtn.textContent = 'Remove';
    removeBtn.setAttribute('data-id', i);
    removeBtn.classList.add('remove-btn');

    readBtn.textContent = 'Read?';
    readBtn.setAttribute('data-id-read', i);
    readBtn.classList.add('read-btn');

    book.textContent = myLibrary[i].info();
  }
}

myLibrary.push(new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read'));
myLibrary.push(new Book('Test Book', 'Test Guy', '434', 'read'));
myLibrary.push(new Book('The Alchemist', 'Paolo Coehlo', 330, 'read'));

displayBooks();

newBookButton.addEventListener('click', () => {
  addBookToLibrary();
  displayBooks();
});

books.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-btn')) {
    myLibrary.splice(e.target.getAttribute('data-id'), 1);
    displayBooks();
  } else if (e.target.classList.contains('read-btn')) {
    myLibrary[e.target.getAttribute('data-id-read')].checkRead();
    displayBooks();
  }
});