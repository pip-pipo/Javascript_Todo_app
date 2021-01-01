// class
// constractor
// propartise
// behaibear / methods
// make object of a class 
// more object of a class


// 
// Book class 
class Book {
    constructor(title,author,ispm){
        this.title = title;
        this.author = author;
        this.ispm = ispm;
    };
};
// ui class 
class Ui{
    static Display__book(){
        const StoreBookdemo = [
            {
                title:'Book one',
                author:'imran',
                ispm :'Mit'
            },
            {
                title:'Book Two',
                author:'Morsalin',
                ispm :'3942'
            }
        ];
        const newStroeDemo = StoreBookdemo;
        newStroeDemo.forEach(book => {
            Ui.addBookList(book)
        });
    };
   static addBookList(book){
        const Book__list = document.querySelector('#book-list');
        const tr = document.createElement('tr');
        tr.innerHTML =`
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.ispm}</td>
        <td ><a href="#" class="btn btn-danger delete">x</a></td>
        `;
        Book__list.appendChild(tr);
    }
};

// get the bookform
document.querySelector('.Book-form').addEventListener('submit',e=>{
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbm = document.querySelector('#isbm').value;
    // initiate book
    const book = new Book(title,author,isbm)

    // add book to ui
    Ui.addBookList(book)

})

// store clases : local store 

// Event display 
document.addEventListener('DOMContentLoaded', Ui.Display__book);
// Event remove

// Event Add a book