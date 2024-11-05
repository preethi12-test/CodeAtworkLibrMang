import Book from "./Book.js"
class Member{
    
    constructor(name,Memeber_ID)
    {
        this.name=name
        this.Memeber_ID=Memeber_ID
        this.borrowed_book=[]
    }
    borrow_book(book )
    {
        this.borrowed_book.push(book)
    }
    return_book(book)
    {
        this.borrowed_book.pop(book)
    }
    borrowed_books_list()
    {
        return this.borrowed_book
    }
}
export default Member