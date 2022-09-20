let myLibrary = [];

const books = document.querySelector('.books');
const newBookButton = document.querySelector('.new-book');

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  }

  checkRead() {
    if (this.read === "READ") {
      this.read = "NOT READ";
    } else {
      this.read = "READ";
    }
  }
}

class DisplayController {
  addBookToLibrary() {
    let title = prompt("Enter book title:");
    let author = prompt("Enter book author:");

    let pages = 'hold';
    while (isNaN(pages)) {
      pages = prompt("Enter number of pages in book: (ensure it's a number!)");
    }

    let read = null;
    while (read != "READ" && read != "NOT READ") {
      read = prompt("Have you read the book? (type only \"read\" or \"not read\"").toUpperCase();
    }

    myLibrary.push(new Book(title, author, pages, read));
  }

  removeAllChildNodes() {
    while (books.firstChild) {
      books.removeChild(books.firstChild);
    }
  }

  displayBooks() {
    this.removeAllChildNodes();
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
}

let displayController = new DisplayController();

// filler books to display functionality
myLibrary.push(new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'NOT READ'));
myLibrary.push(new Book('Test Book', 'Test Guy', '434', 'READ'));
myLibrary.push(new Book('The Alchemist', 'Paolo Coehlo', 330, 'READ'));

displayController.displayBooks();

newBookButton.addEventListener('click', () => {
  displayController.addBookToLibrary();
  displayController.displayBooks();
});

// if a button is clicked, initiate the corresponding action for the correct book
books.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-btn')) {
    myLibrary.splice(e.target.getAttribute('data-id'), 1);
    displayController.displayBooks();
  } else if (e.target.classList.contains('read-btn')) {
    myLibrary[e.target.getAttribute('data-id-read')].checkRead();
    displayController.displayBooks();
  }
});