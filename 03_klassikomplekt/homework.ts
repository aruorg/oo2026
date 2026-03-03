class Book{

    protected loanedCount: number = 0;

    constructor(
        protected name: string,
        protected author:string,
        protected copies: number,
        
    ){}

    loan(): void {
        if(this.getAvailability() > 0) {
            this.loanedCount++;
        } else {
            console.log("Raamatu eksemplare pole saadaval")
        }
    }

    returnBook(): void {
        if (this.loanedCount > 0) {
            this.loanedCount--;
        }
    }

    getName(): string {
        return this.name;
    }

    getAuthor(): string {
        return this.author;
    }

    getCopies(): number {
        return this.copies;
    }

    getAvailability(): number {
        return this.copies - this.loanedCount;
    }
}


class Member {

    protected borrowed: Book[] = [];

    constructor(
        protected name: string,
    ) {}

    borrowBook(book: Book): void{
        this.borrowed.push(book);
    }

    returnBook(book: Book): void{
        this.borrowed = this.borrowed.filter(b => b !== book);
    }

    getName(): string {
        return this.name;
    }
}


class Library {

    protected books: Book[] = []
    protected members: Member[] = []

    constructor() {
        console.log("Raamatukogu valmis");
    }
    addBook(book: Book): void {
        this.books.push(book);
        this.draw();
    }
    addMember(member: Member): void {
        this.members.push(member);
    }

    loanBook(bookName: string, memberName: string): void {
        const book: Book | undefined =
            this.books.find(b => b.getName() === bookName);

        const member: Member | undefined =
            this.members.find(m => m.getName() === memberName);

        if (book === undefined) {
            console.log("Raamatut ei leitud.");
            return;
        }

        if (member === undefined) {
            console.log("Raamatukogu liiget ei leitud.");
            return;
        }

        if (book.getAvailability() <= 0) {
            console.log("Kõik eksemplarid on välja laenutatud.");
            return;
        }

        book.loan();
        member.borrowBook(book);

        this.draw();
    }

    returnBook(bookName: string, memberName: string):void {

        const book: Book | undefined =
            this.books.find(b => b.getName() === bookName);
        
        const member: Member | undefined =
            this.members.find(m => m.getName() === memberName);

        if (book === undefined || member === undefined) {
            return;
        } 
            

        book.returnBook();
        member.returnBook(book);

        this.draw();
    }

    draw(): void {
        console.log("\n=== Raamatukogu seis ===");
        this.books.forEach(b => {
            console.log(
                b.getName() +
                " - " +
                b.getAuthor() +
                " Koopiaid: " +
                b.getCopies() +
                " Saadaval koopiate arv: " +
                b.getAvailability()

            );
        });
    }
}

//Näiterakendus

const library = new Library();

const b1 = new Book("Tõde ja Õigus", "A. H. Tammsaare", 6);
const b2 = new Book("1984", "George Orwell", 2);
const b3 = new Book("Atomic Habits", "James Clear", 4);

const m1 = new Member("Mari Mets");
const m2 = new Member("Taavi Tamm");
const m3 = new Member("Liis Luik");



library.addBook(b1);
library.addBook(b2);
library.addBook(b3);
library.addMember(m1);
library.addMember(m2);
library.addMember(m3);


library.loanBook("1984", "Mari Mets");
library.loanBook("Tõde ja Õigus", "Mari Mets");
library.loanBook("1984", "Taavi Tamm");
library.loanBook("1984", "Liis Luik");
library.loanBook("Atomic Habits", "Mari Tamm");

library.returnBook("1984", "Mari Mets");