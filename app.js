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

// class approach //

class Bookclass {
    static library = []

    constructor(title, author, read){
        this.title = title
        this.author = author
        this.read = read
        this.index = Bookclass.library.length
    }

    addBook (title, author, read) {
        let libro = new Bookclass(title,author,read);
        Bookclass.library.push(libro);
    }

    displayBooks () {
        let html = ''
        for (let i=0; i<Bookclass.library.length; i++) {
            html += `<div>`
            html += `<img class='bookImg' src='./img/book-covers-big-2019101610.jpg' alt='book Image'>`
            html += `<p>Title: ${Bookclass.library[i].title}</p>`;
            html += `<p>Author: ${Bookclass.library[i].author}</p>`;
            html += `<p>Read: ${Bookclass.library[i].read}</p>`;
            html += `<button class='btn btn-remove' onclick='Bookclass.prototype.removeBook(${Bookclass.library[i].index})'>Remove Book</button>`;
            html += `</div>`;
        }
        library.innerHTML = html;
    }

    removeBook(bookIndex) {
        let filter = Bookclass.library.filter((item,index) => {
            if(bookIndex === item.index) {
                Bookclass.library.splice(index,1);
                Bookclass.prototype.displayBooks();
            }
        })
    }

    resetForm(){
    title.value = ''; author.value = ''; read.value = ''
    }

    init() {
      this.displayBooks();  
    }


}


Bookclass.prototype.addBook(`title.value`, `author.value`, `read.value`);
Bookclass.prototype.addBook(`title.value`, `author.value`, `read.value`);
Bookclass.prototype.addBook(`title.value`, `author.value`, `read.value`);


Bookclass.prototype.init();



formBtn.addEventListener('click' , event => {
    event.preventDefault();
        if(title.value && author.value && read.value) 
    {
        Bookclass.prototype.addBook(title.value, author.value, read.value);
        Bookclass.prototype.displayBooks();
        Bookclass.prototype.resetForm();
    }
    else return
})

// notas para luyego, refactorizar para que los elementos del DOM sean parte de la clase //