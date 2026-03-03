var Book = /** @class */ (function () {
    function Book(name, author, copies) {
        this.name = name;
        this.author = author;
        this.copies = copies;
        this.loanedCount = 0;
    }
    Book.prototype.loan = function () {
        if (this.getAvailability() > 0) {
            this.loanedCount++;
        }
        else {
            console.log("Raamatu eksemplare pole saadaval");
        }
    };
    Book.prototype.returnBook = function () {
        if (this.loanedCount > 0) {
            this.loanedCount--;
        }
    };
    Book.prototype.getName = function () {
        return this.name;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.getCopies = function () {
        return this.copies;
    };
    Book.prototype.getAvailability = function () {
        return this.copies - this.loanedCount;
    };
    return Book;
}());
var Member = /** @class */ (function () {
    function Member(name) {
        this.name = name;
        this.borrowed = [];
    }
    Member.prototype.borrowBook = function (book) {
        this.borrowed.push(book);
    };
    Member.prototype.returnBook = function (book) {
        this.borrowed = this.borrowed.filter(function (b) { return b !== book; });
    };
    Member.prototype.getName = function () {
        return this.name;
    };
    return Member;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
        this.members = [];
        console.log("Raamatukogu valmis");
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
        this.draw();
    };
    Library.prototype.addMember = function (member) {
        this.members.push(member);
    };
    Library.prototype.loanBook = function (bookName, memberName) {
        var book = this.books.find(function (b) { return b.getName() === bookName; });
        var member = this.members.find(function (m) { return m.getName() === memberName; });
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
    };
    Library.prototype.returnBook = function (bookName, memberName) {
        var book = this.books.find(function (b) { return b.getName() === bookName; });
        var member = this.members.find(function (m) { return m.getName() === memberName; });
        if (book === undefined || member === undefined) {
            return;
        }
        book.returnBook();
        member.returnBook(book);
        this.draw();
    };
    Library.prototype.draw = function () {
        console.log("\n=== Raamatukogu seis ===");
        this.books.forEach(function (b) {
            console.log(b.getName() +
                " - " +
                b.getAuthor() +
                " Koopiaid: " +
                b.getCopies() +
                " Saadaval koopiate arv: " +
                b.getAvailability());
        });
    };
    return Library;
}());
//Näiterakendus
var library = new Library();
var b1 = new Book("Tõde ja Õigus", "A. H. Tammsaare", 6);
var b2 = new Book("1984", "George Orwell", 2);
var b3 = new Book("Atomic Habits", "James Clear", 4);
var m1 = new Member("Mari Mets");
var m2 = new Member("Taavi Tamm");
var m3 = new Member("Liis Luik");
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
