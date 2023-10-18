const myLibrary = [];
const library = document.querySelector('.container');
const btn = document.querySelector('#btn');
const modal = document.querySelector('.new-book-form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const read = document.querySelector('#read');
const formBtn = document.querySelector('#modal-btn');

btn.addEventListener('click' , (event) => {
    modal.showModal();
});

function Book(title, author, read) {
    this.title = title
    this.author = author
    this.read = read
    this.index = myLibrary.length
}

function addBook (title, author, read) {
    let libro = new Book(title,author,read);
    myLibrary.push(libro);
}

formBtn.addEventListener('click' , event => {
    event.preventDefault();
    // if(title.value && author.value && read.value) 
    // {
    addBook(title.value, author.value, read.value);
    displayBooks();
    resetForm();
    // }
})

function removeBook(bookIndex) {
    let filter = myLibrary.filter((item,index) => {
        if(bookIndex === item.index) {
            myLibrary.splice(index,1);
            displayBooks();
        }
    })
};

function displayBooks () {
    let html = ''
    for (i=0; i<myLibrary.length; i++) {
        html += `<div>`
        html += `<img class='bookImg' src='./img/book-covers-big-2019101610.jpg' alt='book Image'>`
        html += `<p>Title: ${myLibrary[i].title}</p>`;
        html += `<p>Author: ${myLibrary[i].author}</p>`;
        html += `<p>Read: ${myLibrary[i].read}</p>`;
        html += `<button class='btn btn-remove' onclick='removeBook(${myLibrary[i].index})'>Remove Book</button>`;
        html += `</div>`;
    }
    library.innerHTML = html;
}

function resetForm(){
    title.value = ''; author.value = ''; read.value = ''
}

addBook(`title.value`, `author.value`, `read.value`);
addBook(`title.value`, `author.value`, `read.value`);
addBook(`title.value`, `author.value`, `read.value`);
displayBooks();



