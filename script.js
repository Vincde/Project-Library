

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

    changeRed(){
        if(this.redIt === 'yes') this.redIt = 'no';
        else this.redIt = 'yes';
    }

    deleteSelf(i){
        Book.prototype.myLibrary[i].remove(); //???
    }

}

(function DOMElem () {
    const clickMeButton = document.querySelector('body > button');
    const formToShow = document.querySelector('form');
    const createButton = document.querySelector('form button');

    clickMeButton.addEventListener('click', () =>{
        formToShow.style.visibility = 'visible';
    })

    createButton.addEventListener('click',() =>{
        startLibrary(); //this function needs to just create elements and add it to library
    });
})();


function startLibrary(){
    Book.prototype.myLibrary = [];



        //NEW FUNCTION MAYBE????????????????????????????????????????????

    //book pressed!!!!!!!!!1

    /* let name = prompt('title');
       let author = prompt('author');
       let nPages = prompt('npages');
       let redIt = prompt('redit');  */

    let newBook = new Book(title,author,nPages,redIt);
    newBook.addToLibrary();


    //Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

    
}