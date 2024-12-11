class Book {
  constructor(title, author, year, pages) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
  }

  bookDetails() {
    const bookDiv = document.getElementById("book-details");
    bookDiv.innerHTML += `
    <div class = "book">
        <h1>Title: ${this.title}</h1>
        <p>Author: ${this.author}</p>
        <p>Year: ${this.year}</p>
        <p>Number of pages: ${this.pages}</p> 

    </div>
        `;
  }
}

class Ebook extends Book {
  constructor(title, author, year, pages, price) {
    super(title, author, year, pages);
    this.price = price;
  }

  Details() {
    const bookDiv = document.getElementById("book-details");
    bookDiv.innerHTML += `
      <div class= "book">
            <h1>Title: ${this.title}</h1>
            <p>Author: ${this.author}</p>
            <p>Year: ${this.year}</p>
            <p>Number of pages: ${this.pages}</p> 
            <p>Price: $ ${this.price}</p>
        </div
            `;
  }
}

const ebook1 = new Ebook("The Da Vinci Code", "Dan Brown", 2003, 689, 15);
const ebook2 = new Ebook(
  "Murder on the Orient Express",
  "Agatha Christie",
  1934,
  489,
  14
);
ebook1.Details();
ebook2.Details();
