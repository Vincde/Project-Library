class Book{
    constructor(title,author,nPages,isRead){
        this.title = title;
        this.author = author;
        this.nPages = nPages;
        this.isRead = isRead;
    }
}

class bookTry{
    myLibrary = [];

    displayLibrary(myLibrary){
        let rowSelector = document.querySelectorAll('table > tr');
        let dataSelector;
        
        for(let i = 0; i < myLibrary.length; i++){
            if(rowSelector[i].innerHTML === ' '){
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

    createElement(myLibrary){
        const tableSelector = document.querySelector('table');
        const newRow = document.createElement('tr');
    
        tableSelector.appendChild(newRow);
    
        let dataSelector;             
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
    
        this.changeRead(myLibrary,varb);
        this.deleteButton(myLibrary,varb);
        
    }


    changeRead(myLibrary,varb){
        const trSelecting = document.querySelectorAll('table > tr');
        
        for(let j = 0; j < trSelecting.length; j++){
            if(trSelecting[j].innerHTML === ' ') continue;
            let selector = trSelecting[j].querySelector('button:last-of-type');
            let dontUseThis = trSelecting[j].querySelector('button:first-of-type');
    
            let attributeReference = dontUseThis.getAttribute('class');
            if(varb === attributeReference){
                selector.addEventListener('click',(e)=>{
                    if(myLibrary[j].isRead === 'yes') {
                        myLibrary[j].isRead = 'no';
                    }else{
                        myLibrary[j].isRead = 'yes';
                    }
                    this.displayLibrary(myLibrary);
                });
            }
        }
        
        
    }

    deleteButton(myLibrary,varb){
        const trSelecting = document.querySelectorAll('table > tr');
        let characterOfString;
        for(let i = 0; i < trSelecting.length; i++){
            if(trSelecting[i].innerHTML === ' '){
                continue;
            }
    
            let buttonSelect = trSelecting[i].querySelector('button:first-of-type');
            valueOfButton = buttonSelect.getAttribute('class');
    
            if(valueOfButton === varb){
    
                buttonSelect.addEventListener('click',() =>{           
                    characterOfString = varb.slice(varb.length-1,varb.length);
                    myLibrary.splice(characterOfString,1,' ');
                    buttonSelect.parentElement.innerHTML = ' ';
                    this.displayLibrary(myLibrary);
                });
            }
        }
    }

}




function start(){
    const bb = new bookTry();
    showForm();

    const bbb = document.querySelector('form button');
    bbb.addEventListener('click', () =>{

        const inputSelectorAll = document.querySelectorAll('input');

        if(inputSelectorAll[3].value != 'yes' && inputSelectorAll[3].value != 'no') {return;}
        
        for(let i = 0; i < inputSelectorAll.length; i++){
        if(inputSelectorAll[i].value === "" || inputSelectorAll[i].value === null || inputSelectorAll[i].value === undefined) return;
        }
        

        bb.addBookToLibrary(this.myLibrary);
        bb.createElement(this.myLibrary);
        bb.displayLibrary(this.myLibrary);
        
    }); 
    
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













start();



