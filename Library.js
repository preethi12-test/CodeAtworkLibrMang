import Book from "./Book.js"
class Library
{
    
    constructor()
    {
       this.books= new Map()
        this.members= new Map()
    }

    registerMemeber(member)
    {
        this.members.set(member.memeber_ID,member)
        

    }
    issueBook(memeber_ID,book_isbn)
    {
        const book=this.books.get(book_isbn)
       const  member=this.members.get(memeber_ID)
     
       if(member&&book&&book.isAvailable())
       {
        book.borrowBook();
        member.borrowBook(book)
       }

        // if(member!=null && boook!=null)
        
       
    }
    receiveBook(memeber_ID,book_isbn)
    {
        const book=this.books.get(book_isbn)
        const member=this.members.get(memeber_ID)
       if(member&&book)
       {
        book.returnBook()
        member.returnBook(book)
       }

    }
    listAllBooks()
    {
        this.books.forEach((book,isbn)=>{
            console.log(`${book.title}: ${book.copies} available`);
            
        })
    }

}
export default Library