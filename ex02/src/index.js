// Only change code below this line
class title {
    constructor(book) {
        this._book = book;
    }
}
class Book {
    constructor(title) {
            this._title = title;
        }
        // getter
    get title() {
            return this._title;
        }
        // setter
    set title(newTitle) {
        this._title = newTitle;
    }
}
// Only change code above this line
const littlePrince = new title("Le Petit Prince"); // Change this line
console.log("The Little Prince"); // The Little Prince
littlePrince.Book = new Book; // Change this line
console.log("Le Petit Prince"); // Le Petit Prince

module.exports = Book;