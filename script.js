

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
            }
        }
    }

}

(function DOMElem () {
    let inputErrorArr = [];

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
    });

    inputErrorArr = inputFormsErrors();

    createButton.addEventListener('click',() =>{
        if(inputErrorArr[0] || inputErrorArr[1] || inputErrorArr[2] || inputErrorArr[3]) return;

        startLibrary(inputsForm[0].value,inputsForm[1].value,inputsForm[2].value,inputsForm[3].value);
    });
})();


const startLibrary = function(title,author,nPages,redIt){

    for(let j = 0; j < Book.prototype.myLibrary.length; j++){
        if(Book.prototype.myLibrary[j].title === title || (redIt !== 'yes' && redIt !== 'no')){
             return;
        }
    }

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
        displayBook();
    });

    changeRead.addEventListener('click', ()=>{
        newBook.changeRed();
        displayBook();
    });


    displayBook();

}

const displayBook = function() {
    let j = 0;
    const elementsSelector = document.querySelectorAll('tr > td');

    for(i = 0 ; i < Book.prototype.myLibrary.length; i++){
        elementsSelector[j].textContent = Book.prototype.myLibrary[i].title;
        elementsSelector[j+1].textContent = Book.prototype.myLibrary[i].author;
        elementsSelector[j+2].textContent = Book.prototype.myLibrary[i].nPages;
        elementsSelector[j+3].textContent = Book.prototype.myLibrary[i].redIt;
        j += 4;
    }
}

function inputFormsErrors(){
    let res = [0,0,0,0];
    const inputsForm = document.querySelectorAll('form input');

    inputsForm[0].addEventListener("input", (event) => {
        if(inputsForm[0].validity.tooShort){
            inputsForm[0].setCustomValidity("You have to Enter a text >= 5 characters");
            res[0] = 1;
        }else{
            inputsForm[0].setCustomValidity("");
            res[0] = 0;
        }
    });

    inputsForm[1].addEventListener("input", (event) => {
        if(inputsForm[1].validity.tooShort){
            inputsForm[1].setCustomValidity("You have to Enter a text >= 5 characters");
            res[1] = 1;
        }else{
            inputsForm[1].setCustomValidity("");
            res[1] = 0;
        }
    });

    inputsForm[2].addEventListener("input", (event) => {
        if((inputsForm[2].validity.tooShort)){
            inputsForm[2].setCustomValidity("Form is too short");
            res[2] = 1;
        }else{
            inputsForm[2].setCustomValidity("");
            res[2] = 0;
        }
    });

    inputsForm[3].addEventListener("input", (event) => {
        if((inputsForm[3].validity.patternMismatch)){
            inputsForm[3].setCustomValidity("Field does not match the right pattern!");
            res[3] = 1;
        }else{
            inputsForm[3].setCustomValidity("");
            res[3] = 0;
        }
    });

    return res;
}