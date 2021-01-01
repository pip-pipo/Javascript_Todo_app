// class
// constractor
// propartise
// behaibear / methods
// make object of a class 
// more object of a class


// 
// Book class 
class Book {
    constructor(title,author,ispn){
        this.title = title;
        this.author = author;
        this.ispn = ispn;
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


// store clases : local store 

// Event display 
document.addEventListener('DOMContentLoaded', Ui.Display__book);
// Event remove

// Event Add a book