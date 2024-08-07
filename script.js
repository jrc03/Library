// Dialog things
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#addBtn");
const closeButton = document.querySelector("#closeBtn");

// Form things
const addBookButton = document.querySelector("#addBookBtn");

// Library stuff
const library = document.querySelector(".library");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

const myLibrary = [
  {
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    pages: 310,
    read: false,
  }, // Add more books here...
];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function display() {
  console.table(myLibrary);


  
  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
  
    const titleElement = document.createElement("h3");
    titleElement.textContent = book.title;
    bookCard.appendChild(titleElement);
  
    const authorElement = document.createElement("p");
    authorElement.textContent = `Author: ${book.author}`;
    bookCard.appendChild(authorElement);
  
    const pagesElement = document.createElement("p");
    pagesElement.textContent = `Pages: ${book.pages}`;
    bookCard.appendChild(pagesElement);
  
    const statusElement = document.createElement("p");
    statusElement.textContent = `Status: ${book.read ? "Read" : "Not Read Yet"}`;
    bookCard.appendChild(statusElement);
  
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => removeBook(index));
    bookCard.appendChild(removeButton);
  
    const toggleReadButton = document.createElement("button");
    toggleReadButton.textContent = "Toggle Read";
    toggleReadButton.addEventListener("click", () => toggleReadStatus(index));
    bookCard.appendChild(toggleReadButton);

    library.appendChild(bookCard);
    
  });
}

function addBookToLibrary() {
  // Retrieve form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#readStatus").checked;

  // Create new book and add to library
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  display();
  clear();
}

function clear() {
  document.querySelector("form").reset();
}

function removeBook(index){
myLibrary.splice(index,1);
display();

}
// Add event listener to the add book button
addBookButton.addEventListener("click", addBookToLibrary);
display();
