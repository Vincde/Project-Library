

class Book{
    constructor(title,author,nPages,redIt){
        this.title = title;
        this.author = author;
        this.nPages = nPages;
        this.redIt = redIt;
    }

    printBook(){
        console.log(this.title + ' ' + this.author + ' ' + this.nPages + ' ' + this.redIt);
    }

    addToLibrary(){
        Book.prototype.myLibrary.push(this);
    }

}


function startLibrary(){
    Book.prototype.myLibrary = [];

    //Create a book?? 
    //divide DOM from the rest
    //when key is pressed
    // a new book object is created
    //this object then adds itself to the library array
    
}