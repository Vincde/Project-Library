

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

    deleteSelf(){
        for(let j = 0; j < Book.prototype.myLibrary.length; j++){
            if(Book.prototype.myLibrary[j] === this){
                Book.prototype.myLibrary.splice(j,1);
                displayBook();
            }
        }
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

    const newRow = document.createElement('tr');
    const tableSelector = document.querySelector('table');
    const deleteButton = document.createElement('button');
    const changeRead = document.createElement('button');

    tableSelector.appendChild(newRow);

    for(let i = 0 ; i < 4; i++){
        let newData = document.createElement('td');
        newRow.appendChild(newData);   
    }
    newRow.appendChild(deleteButton);
    deleteButton.textContent = 'X';

    newRow.appendChild(changeRead);
    changeRead.textContent = 'change read status';

    
    let newBook = new Book(title,author,nPages,redIt);
    newBook.addToLibrary();

    deleteButton.addEventListener('click',()=>{
        newBook.deleteSelf();
        newRow.remove();
        
    });

    changeRead.addEventListener('click', ()=>{
        newBook.changeRed();
        displayBook();
    });


    displayBook();
}

const displayBook = function() {
    let j = 0;
    const elementsSelector = document.querySelectorAll('tr td');

    for(i = 0 ; i < Book.prototype.myLibrary.length; i++){
        elementsSelector[j].textContent = Book.prototype.myLibrary[i].title;
        elementsSelector[j+1].textContent = Book.prototype.myLibrary[i].author;
        elementsSelector[j+2].textContent = Book.prototype.myLibrary[i].nPages;
        elementsSelector[j+3].textContent = Book.prototype.myLibrary[i].redIt;
        j += 4;
    }
}