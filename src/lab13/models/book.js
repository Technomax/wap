//model book.js
let books = [
  {
    id: 1,
    title: "Oracle",
    isbn: "122-11-2222",
    publishedDate: "2-12-2022",
    author: "Press",
  },
  {
    id: 2,
    title: "Algorithm",
    isbn: "123-11-2222",
    publishedDate: "2-12-2022",
    author: "Wrox",
  },
  {
    id: 3,
    title: "C#",
    isbn: "124-11-2222",
    publishedDate: "2-12-2022",
    author: "Pearson",
  },
  {
    id: 4,
    title: "Java",
    isbn: "125-11-2222",
    publishedDate: "2-12-2022",
    author: "Press",
  },
];
class Book {
  constructor(id, title, isbn, publishedDate, author) {
    this.id = id;
    this.title = title;
    this.isbn = isbn;
    this.publishedDate = publishedDate;
    this.author = author;
  }
  save() {
    this.id = Math.floor(Math.random() * 100000).toString();
    books.push(this);
    return this;
  }
  update() {
    const index = books.findIndex((x) => x.id == this.id);
    if (index >= 0) {
      books.splice(index, 1, this);
      return this;
    } else {
      throw new Error("Record Not Found");
    }
  }
  static gets() {
    return books;
  }
  static getById(id) {
    const index = books.findIndex((x) => x.id == id);
    if (index >= 0) {
      return books[index];
    } else {
      throw new Error("Record Not Found");
    }
  }
  static deleteById(id) {
    const index = books.findIndex((x) => x.id == id);
    if (index >= 0) {
      books = books.filter((x) => x.id != id);
      return books;
    } else {
      throw new Error("Record Not Found.");
    }
  }
}
module.exports = Book;
