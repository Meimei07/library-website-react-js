import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  // books
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
  const [displayBooks, setDisplayBooks] = useState(books);
  const [editBook, setEditBook] = useState(null);
  const [selectValue, setSelectValue] = useState("title");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
    setDisplayBooks(books);
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

  function handleSortBook() {
    let sortedBooks = [...displayBooks];

    switch (selectValue) {
      case "title":
        sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "author":
        sortedBooks.sort((a, b) => a.author.localeCompare(b.author));
        break;
      case "copies":
        sortedBooks.sort((a, b) => a.copies - b.copies);
        break;
      default:
        break;
    }

    setDisplayBooks(sortedBooks);
  }

  useEffect(() => {
    setDisplayBooks(
      books.filter(
        (b) =>
          b.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          b.author.toLowerCase().includes(searchValue.toLowerCase()) ||
          b.publisher.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue]);
  // books

  // visitors
  const initVisitors = JSON.parse(localStorage.getItem("visitors")) || [
    {
      id: 1,
      name: "Aurora",
      phone: "092384091",
    },
    {
      id: 2,
      name: "John",
      phone: "073247912",
    },
  ];

  const [visitors, setVisitors] = useState(initVisitors);
  const [displayVisitors, setDisplayVisitors] = useState(visitors);

  useEffect(() => {
    localStorage.setItem("visitors", JSON.stringify(visitors));
    setDisplayVisitors(visitors);
  }, [visitors]);

  function handleAddVisitor(visitor) {
    visitor.id = Math.floor(Math.random() * 10001);

    setVisitors([...visitors, visitor]);
    console.log(visitor);
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
          displayBooks,
          handleAddBook,
          onEdit,
          editBook,
          setEditBook,
          handleEditBook,
          handleDeleteBook,
          handleSortBook,
          selectValue,
          setSelectValue,
          searchValue,
          setSearchValue,

          visitors,
          handleAddVisitor,
        }}
      />
    </div>
  );
};

export default RootLayout;
