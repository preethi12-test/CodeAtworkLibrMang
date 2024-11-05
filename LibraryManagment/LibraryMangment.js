// import Book  from "./Book.js"
// import Librarian from "./Librarian.js"
// import Library from "./Library.js"
// import Member from "./Member.js"

//  const librn= new Librarian()
//  const li= librn.Library

//    const bk1= new Book("Stary","Pree","23456567",5)
//    const  bk2= new Book("lkuyr","gytre","09874567",5)

   
//    librn.add_book(bk1)
//    librn.add_book(bk2)
   
//    librn. view_inventary()

//    const mem1= new Member("abc",12)
//    li.registerMemeber(mem1)
//    li.issueBook("12", "23456567")

//    console.log(bk1.availableCopies);
//    librn. view_inventary()

   

   




    


import Librarian from './Librarian.js';
import Book from './Book.js';
import Member from './Member.js';
const librarian = new Librarian();
const library = librarian.library;
const book1 = new Book("Book Title 1", "Author 1", "1234567890", 19);
const book2 = new Book("Book Title 2", "Author 2", "0987654321", 46);
librarian.add_book(book1);
librarian.add_book(book2);
librarian.view_inventary();
const member1 = new Member("MemberA", "1");
const member2 = new Member("MemberB", "2");
library.registerMemeber(member1)
library.registerMemeber(member2);
library.issueBook("1", "0987654321");
library.issueBook("2", "1234567890");
// librarian.remove_book(book1);
library.issueBook("2", "1234567890");
librarian.view_inventary()
library.listAllBooks();








    
