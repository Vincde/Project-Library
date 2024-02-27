function Book(title,author,nPages,isRead){
    this.title = title;
    this.author = author;
    this.nPages = nPages;
    this.isRead = isRead;
}

function start(){
    let myLibrary = [];
    showForm();

    const bbb = document.querySelector('form button');
    bbb.addEventListener('click', () =>{
        addBookToLibrary(myLibrary);
        createElement(myLibrary);
        displayLibrary(myLibrary);
        changeRead(myLibrary);
    }); 
    
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
        if(rowSelector[i].innerHTML === ''){
            continue;
        }else{
        dataSelector = rowSelector[i].querySelectorAll('td');
        dataSelector[0].textContent = myLibrary[i].title;
        dataSelector[1].textContent = myLibrary[i].author;
        dataSelector[2].textContent = myLibrary[i].nPages;
        dataSelector[3].textContent = myLibrary[i].isRead;
        }
    }
}



function showForm(){
    const startButton = document.querySelector('button');
    startButton.addEventListener('click',() =>{
        const formToShow = document.querySelector('form');
        if(formToShow.style.visibility === 'visible'){
            formToShow.style.visibility = 'hidden';
        }else{
            formToShow.style.visibility = 'visible';
        }
    });
}


function createElement(myLibrary){
    const tableSelector = document.querySelector('table');
    const newRow = document.createElement('tr');

    tableSelector.appendChild(newRow);

    let dataSelector;              /* IF YOU WANT TO ADD A BUTTON YOU NEED TO CHANGE THIS*/
    for(let i = 0; i < 4; i++){
        dataSelector = document.createElement('td');
        newRow.appendChild(dataSelector);
    }

    const delButton = document.createElement('button');
    delButton.setAttribute('type','button');
    delButton.textContent = 'x';
    newRow.appendChild(delButton);
    

    const buttonList = newRow.querySelector('button:first-of-type');
    let j = myLibrary.length - 1;
    let varb = `element${j}`;
    buttonList.setAttribute('class',varb);

    
    
    const changeReadButton = document.createElement('button');
    changeReadButton.setAttribute('type','button');
    changeReadButton.textContent = 'change read'; 
    newRow.appendChild(changeReadButton);

    deleteButton(myLibrary,varb);
}

function deleteButton(myLibrary,varb){
    /* const buttonSelect = document.querySelectorAll('table > tr button:first-of-type'); */
    const trSelecting = document.querySelectorAll('table > tr');

    for(let i = 0; i < trSelecting.length; i++){
        if(trSelecting[i].innerHTML === ''){
            continue;
        }
        let buttonSelect = trSelecting[i].querySelector('button:first-of-type');
        valueOfButton = buttonSelect.getAttribute('class');
        if(valueOfButton === varb){
            
            buttonSelect.addEventListener('click',() =>{
                let characterOfString = valueOfButton.slice(valueOfButton.length-1);
                myLibrary.splice(parseInt(characterOfString),1,' ');
                buttonSelect.parentElement.innerHTML = '';
                displayLibrary(myLibrary);
            });
            
        }
    }
}


function changeRead(myLibrary){
    const selector = document.querySelectorAll('table > tr button:last-of-type');

    let lengthOfLibrary = myLibrary.length - 1;

    selector[lengthOfLibrary].addEventListener('click',(e)=>{
        if(myLibrary[lengthOfLibrary].isRead === 'yes') {
            myLibrary[lengthOfLibrary].isRead = 'no';
        }else{
            myLibrary[lengthOfLibrary].isRead = 'yes';
        }
        displayLibrary(myLibrary);
    });
}






start();



