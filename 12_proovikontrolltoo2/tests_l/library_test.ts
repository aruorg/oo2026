import { Library, Book, DVD } from "../library";

test("add book", () => {
    const lib = new Library();
    lib.addItem(new Book("B1","Test","A",2000, "no category",100,"X"));
    expect(lib.getAll().length).toBe(1);
});