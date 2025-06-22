import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  const initBooks = JSON.parse(localStorage.getItem("books")) || [
    {
      id: 1,
      title: "Descandent of the Sun",
      author: "Kim SangIll",
      publisher: "Jo IlSung",
      publishYear: "2016",
      pages: "16",
      copies: 1,
    },
  ];

  const [books, setBooks] = useState(initBooks);
  const [editBook, setEditBook] = useState(null);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  function handleAddBook(book) {
    book.copies = parseInt(book.copies);
    book.id = Math.floor(Math.random() * 10001);

    setBooks([...books, book]);
    console.log(book);
  }

  function handleDeleteBook(id) {
    const matchingBook = books.find((book) => book.id === id);
    if (!matchingBook) return;
    setBooks(books.filter((book) => book.id !== id));
  }

  function onEdit(id) {
    const matchingBook = books.find((book) => book.id === id);
    setEditBook(matchingBook);
    console.log(matchingBook);
  }

  function handleEditBook(book) {
    book.copies = parseInt(book.copies);

    setBooks(
      books.map((b) => (b.id === editBook.id ? { ...b, ...book, id: b.id } : b))
    );
    console.log("update");
  }

  return (
    <div className="root-layout">
      <div className="text-pink-300 font-semibold tracking-widest text-3xl pl-3 mb-3 sm:text-4xl`">
        <span className="text-pink-400 font-bold text-5xl sm:text-6xl">L</span>
        ibrary
      </div>

      <ul className="bg-pink-200 h-10 font-semibold flex items-center  gap-4 text-pink-500 px-3 sm:h-13 sm:text-xl sm:gap-6 sm:px-4">
        <NavLink to="book">Book</NavLink>
        <NavLink to="visitor">Visitor</NavLink>
        <NavLink to="card">Card</NavLink>
        <NavLink to="statistic">Statistic</NavLink>
      </ul>

      <Outlet
        context={{
          books,
          handleAddBook,
          onEdit,
          editBook,
          setEditBook,
          handleEditBook,
          handleDeleteBook,
        }}
      />
    </div>
  );
};

export default RootLayout;
