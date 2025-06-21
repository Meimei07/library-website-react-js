import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  const initBooks = [
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

  function handleAddBook(book) {
    book.copies = parseInt(book.copies);
    book.id = Math.floor(Math.random() * 10001);

    setBooks([...books, book]);
    console.log(book);
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

      <Outlet context={{ handleAddBook, books }} />
    </div>
  );
};

export default RootLayout;
