let books = [
  {
    bookId: 1,
    title: "Node.js",
    author: {
      authorId: 303,
      firstname: "Edward",
      lastname: "Jack",
    },
  },
  {
    bookId: 2,
    title: "Angular",
    author: {
      authorId: 308,
      firstname: "John",
      lastname: "Smith",
    },
  },
  {
    bookId: 3,
    title: "JavaScript",
    author: {
      authorId: 511,
      firstname: "Emma",
      lastname: "Smith",
    },
  },
];

let counter = 3;

class Book {
  constructor(bookId, title, isbn, publishedDate, author) {
    this.bookId = bookId;
    this.title = title;
    this.isbn = this.isbn;
    this.publishedDate = publishedDate;
    this.author = author;
  }

  save() {
    counter++;
    this.bookId = counter;
    books.push(this);
  }

  update() {
    const index = books.findIndex((book) => book.bookId == this.bookId);
    if (index >= 0) {
      books.splice(index, 1, this);
      return this;
    } else {
      throw new Error("Record not found.");
    }
  }

  static getKey() {
    return counter;
  }

  static gets() {
    return books;
  }

  static remove(id) {
    const index = books.findIndex((book) => book.bookId == id);
    if (index >= 0) {
      books = books.filter((book) => book.bookId != id);
      return books;
    } else {
      throw new Error("Record not found.");
    }
  }

  static getById(id) {
    const index = books.findIndex((book) => book.bookId == id);
    if (index >= 0) {
      return books.find((book) => book.bookId == id);
    } else {
      throw new Error("Record not found.");
    }
  }

  static getByAuthorFirstName(firstName) {
    const index = books.findIndex((book) =>
      book.author.firstname.toUpperCase().includes(firstName.toUpperCase())
    );
    if (index >= 0) {
      return books.filter((book) =>
        book.author.firstname.toUpperCase().includes(firstName.toUpperCase())
      );
    } else {
      throw new Error("Record not found.");
    }
  }
}

module.exports = Book;
