class LibraryItem{
    id: string;
    title: string;
    author: string;
    year: number;
    category: string;

    constructor(id: string, title:string, author:string, year:number, category:string){
    //Removes the whitespaces from both ends of the string
    //=== checking whether this is empty after removing spaces
        if(id.trim()==="") throw new Error("ID cannot be emprty");
        this.id=id;
        this.title=title;
        this.author=author;
        this.year=year;
        this.category=category;
    }

    getId(): string{return this.id;}
    getTitle(): string{return this.title;}
    getAuthor(): string{return this.author;}
    getYear(): number{return this.year;}
    getCategory(): string{return this.category;}
    getSummary(): string{return `[Item] ${this.title}`;}

}

//-------------------------------Book------------------------------------
class Book extends LibraryItem{
    pages: number;
    ISBN: string;

    constructor(id:string, title:string, author:string, year:number, category:string, pages:number, ISBN:string
    ){
        super(id, title, author, year, category);
        if(pages <=0) throw new Error("Pages must be positive");
        this.pages=pages;
        this.ISBN=ISBN;
    }

    getSummary(): string {
        return `[BOOK] ${this.title} (${this.year}) ${this.category}`;
    }
    //This method convert the Book object into a text line (for saving)
    //Here each property is seperated by | so we can read it easily later
    toFillLine():string{
        return `[BOOK]|${this.id}|${this.title}|${this.author}|(${this.year})|${this.category}|${this.pages}|${this.ISBN}`;
    }
}

//----------------------------DVD---------------------------------------------
class DVD extends LibraryItem{
    duration: number;
    constructor (id: string, title:string, director:string, year:number, duration:number, category:string){
        super(id, title, director, year, category);
        if(duration <=0) throw new Error("Duration must be positive");
        this.duration=duration;
    }

    getSummary(): string {
        return `[DVD] ${this.title} (${this.year} ${this.category})`;
    }

    toFillLine():string{
        return `[DVD]|${this.id}|${this.title}|${this.author}|(${this.year})|${this.duration}|${this.category}`;
    }
}

//---------------------------------Library-------------------
//Manage all the items
class Library{

    items: LibraryItem[];

    constructor(){
        this.items = [];
    }

    addItem(item:LibraryItem): void{
        this.items.push(item);
    }

    getAll(): LibraryItem[]{
        return this.items;
    }

    getItemsByCategory(category:string): LibraryItem[]{

        if(category === "all"){
            return this.items;
        }

        return this.items.filter(
            item => item.getCategory() === category
        );
    }

    getCategories(): string[]{

        const categories:string[] = [];

        this.items.forEach(item => {

            if(!categories.includes(item.getCategory())){
                categories.push(item.getCategory());
            }
        });

        return categories;
    }

    toText(): string{

        return this.items
            .map((i:any) => i.toFillLine())
            .join("\n");
    }

    loadFromText(text: string): string[]{

        const lines = text.split("\n");

        const errors: string[] = [];

        for (let line of lines){

            try{

                const parts = line.split("|");

                if (parts[0] === "BOOK"){

                    this.addItem(
                        new Book(
                            parts[1],
                            parts[2],
                            parts[3],
                            Number(parts[4]),
                            parts[5],
                            Number(parts[6]),
                            parts[7]
                        )
                    );

                } else if (parts[0] === "DVD"){

                    this.addItem(
                        new DVD(
                            parts[1],
                            parts[2],
                            parts[3],
                            Number(parts[4]),
                            Number(parts[5]),
                            parts[6]
                        )
                    );
                }

            } catch (e){

                errors.push("Error: " + line);
            }
        }

        return errors;
    }
}

export{
    LibraryItem,
    Book,
    DVD,
    Library
}

const item1=new LibraryItem("1", "Generic item", "unknown", 2020, "unknown");
console.log(item1)
const book1=new Book("2B", "Harry Potter", "J.K rowling", 1990, "fantasy", 300, "334445");
const book2=new Book("3B", "The hobbit", "J.R.R Tolkien", 1937, "fantasy", 300, "554445");
console.log(book1)
console.log(item1.getSummary())
console.log(book1.getSummary())
console.log(book1.toFillLine())
const lib=new Library();
lib.addItem(book1);
lib.addItem(book2);
console.log(lib.toText())