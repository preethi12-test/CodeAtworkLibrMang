import Library from "./Library.js"
import Book from "./Book.js"
class Librarian
{
    constructor()
    {
        this.library= new Library()
        this.books= this.library.books
    }
    add_book(book)
    {
      this.books.set(book.ISBN,book)
    }
    remove_book(book)
    {
       this.books.delete(book.ISBN)
    }
    view_inventary()
    {
        this.books.forEach((book,isbn)=>{
            console.log(`${book.title}:${book.copies} avaialble`);
            
        })
    }

    
}
export default Librarian