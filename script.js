

class Book{
    constructor(title,author,nPages,redIt){
        this.title = title;
        this.author = author;
        this.nPages = nPages;
        this.redIt = redIt;
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
    Book.prototype.myLibrary = [];

    const clickMeButton = document.querySelector('body > button');
    const formToShow = document.querySelector('form');
    const createButton = document.querySelector('form button');
    const inputsForm = document.querySelectorAll('form input');

    clickMeButton.addEventListener('click', () =>{
        if((formToShow.style.visibility) === 'visible'){
            formToShow.style.visibility = 'hidden';
        }else{
            formToShow.style.visibility = 'visible';
        }
    })

    createButton.addEventListener('click',() =>{
        startLibrary(inputsForm[0].value,inputsForm[1].value,inputsForm[2].value,inputsForm[3].value);
    });
})();


function startLibrary(title,author,nPages,redIt){

    let newBook = new Book(title,author,nPages,redIt);
    newBook.addToLibrary();

    displayBook();
}

const displayBook = function() {  //The displayBook function works correctly! you just need to add DOM to it
    for(i = 0 ; i < Book.prototype.myLibrary.length; i++){
        console.log(Book.prototype.myLibrary[i]);
        
    }
}