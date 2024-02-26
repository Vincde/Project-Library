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
        createElement();
        displayLibrary(myLibrary);
        setDelBttn(myLibrary);
        changeReadButton(myLibrary);
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

    const delButton = document.createElement('button');
    delButton.setAttribute('type','button');
    delButton.setAttribute('class','deleteButton');
    delButton.textContent = 'x';
    newRow.appendChild(delButton);

    const changeReadButton = document.createElement('button');
    changeReadButton.setAttribute('type','button');
    changeReadButton.setAttribute('class','changeReadButton');
    changeReadButton.textContent = 'change read'; 
    newRow.appendChild(changeReadButton);
}



function setDelBttn(myLibrary){
    const bttn = document.querySelectorAll('.deleteButton');

    for(let i = 0; i < myLibrary.length; i++){
        bttn[i].addEventListener('click',function addButton(e){
            
            e.target.parentElement.remove();
            myLibrary.splice(i,1);

            const newList = document.querySelectorAll('.deleteButton');

            for(let j = 0; j < newList.length; j++){
                newList[j].removeEventListener('click',addButton);
            }

            setDelBttn(myLibrary);
        });
    }
}


function changeReadButton(myLibrary){
    const changeReading = document.querySelectorAll('.changeReadButton');

    for(let i = 0; i < myLibrary.length; i++){
        changeReading[i].addEventListener('click',function changeTheRead(e){
            
            if(myLibrary[i].isRead === 'yes'){
             myLibrary[i].isRead = 'no';
            }
            else{
                myLibrary[i].isRead = 'yes';
            }
            displayLibrary(myLibrary);

            const newRead = document.querySelectorAll('.changeReadButton');

            for(let j = 0; j < newRead.length; j++){
                e.target.removeEventListener('click',changeTheRead);
            }

            changeReadButton(myLibrary);
        });
    }
}



start();



