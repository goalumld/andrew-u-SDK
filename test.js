import OneAPI from "./src/index.js";

(async function () {
  const api = new OneAPI("some-token");

  const books = await api.getAllBooks();
  console.log(books);

  if (Array.isArray(books.docs) && books.docs.length > 0) {
    const book1 = await api.getBook(books.docs[0]._id);
    console.log(book1);
  }
})();
