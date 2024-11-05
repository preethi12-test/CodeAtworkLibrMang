class Book{
    constructor(title,author,ISBN,copies)
    {
        this.title=title
        this.author=author
        this.ISBN=ISBN
        this.copies=copies
        // this.availableCopies=copies

    }
    isAvailable()
    {
        return this.copies>0
    }
    borrowBook()
    {
        if(this.isAvailable())
        {
            this.copies--
            return true
        }
        else{
            console.log(`No copies available for "${this.title}"`);
            return false
            
        }
    }
    returnBook()
    {
        this.copies++
    }
    getDetails()
    {
        return `${this.title} by ${this.author}: Available copies: ${this.availableCopies}/${this.copies}`
    }
}
export default Book