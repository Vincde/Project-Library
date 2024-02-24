function Book(title,author,nPages,isRead){
    this.title = title;
    this.author = author;
    this.nPages = nPages;
    this.isRead = isRead;
}

function start(){
    let myLibrary = [];
    /* showForm();
    const bbb = document.querySelector('form button');
    bbb.addEventListener('click', () =>{
        addBookToLibrary(myLibrary);
        createElement();
        displayLibrary(myLibrary);
    }); */
}


function addBookToLibrary(myLibrary){
    const inputSelector = document.querySelectorAll('input');

    let title = inputSelector[0].value;
    let author = inputSelector[1].value;
    let nPages = inputSelector[2].value;
    let isRead = inputSelector[3].value;

    let newBook = new Book(title,author,nPages,isRead);

    myLibrary.push(newBook);

}


function displayLibrary(myLibrary){
    let rowSelector = document.querySelectorAll('table > tr');
    let dataSelector;
    
    for(let i = 0; i < myLibrary.length; i++){
        dataSelector = rowSelector[i].querySelectorAll('td');
        dataSelector[0].textContent = myLibrary[i].title;
        dataSelector[1].textContent = myLibrary[i].author;
        dataSelector[2].textContent = myLibrary[i].nPages;
        dataSelector[3].textContent = myLibrary[i].isRead;
    }
}



function showForm(){
    const startButton = document.querySelector('button');
    startButton.addEventListener('click',() =>{
        const formToShow = document.querySelector('form');
        formToShow.style.visibility = 'visible';
    },{once:true});
}


function createElement(){
    const tableSelector = document.querySelector('table');
    const newRow = document.createElement('tr');

    tableSelector.appendChild(newRow);

    let dataSelector;              /* IF YOU WANT TO ADD A BUTTON YOU NEED TO CHANGE THIS*/
    for(let i = 0; i < 4; i++){
        dataSelector = document.createElement('td');
        newRow.appendChild(dataSelector);
    }

}

