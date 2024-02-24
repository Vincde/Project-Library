function Book(){
    this.title = title;
    this.author = author;
    this.nPages = nPages;
    this.isRead = isRead;
}

function start(){
    let myLibrary = [];
    /* stuff that activates addBookToLibrary function */
}


function addBookToLibrary(myLibrary){
    const inputSelector = document.querySelectorAll('input');

    let title = inputSelector[0].value;
    let author = inputSelector[1].value;
    let nPages = inputSelector[2].value;
    let isRed = inputSelector[3].value;

    let newBook = new Book(title,author,nPages,isRed);

    myLibrary.push(newBook);

}


function displayLibrary(myLibrary){
    
}