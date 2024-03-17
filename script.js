

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

    deleteSelf(){
        /*for loop into |
                        v
        Book.prototype.myLibrary[i]
        if one of the books === this 
            delete it??? 
            idk if this is possible */
    }

}


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