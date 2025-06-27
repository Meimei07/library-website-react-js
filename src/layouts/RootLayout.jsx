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
  const [bookSelectValue, setBookSelectValue] = useState("title");
  const [bookSearchValue, setBookSearchValue] = useState("");

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

  function onEditBook(id) {
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

    switch (bookSelectValue) {
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
          b.title.toLowerCase().includes(bookSearchValue.toLowerCase()) ||
          b.author.toLowerCase().includes(bookSearchValue.toLowerCase()) ||
          b.publisher.toLowerCase().includes(bookSearchValue.toLowerCase())
      )
    );
  }, [bookSearchValue]);
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
  const [editVisitor, setEditVisitor] = useState(null);
  const [visitorSelectValue, setVisitorSelectValue] = useState("id");
  const [visitorSearchValue, setVisitorSearchValue] = useState("");

  useEffect(() => {
    localStorage.setItem("visitors", JSON.stringify(visitors));
    setDisplayVisitors(visitors);
  }, [visitors]);

  function handleAddVisitor(visitor) {
    visitor.id = Math.floor(Math.random() * 10001);

    setVisitors([...visitors, visitor]);
    console.log(visitor);
  }

  function onEditVisitor(id) {
    const matchingVisitor = visitors.find((visitor) => visitor.id === id);
    if (!matchingVisitor) return;
    setEditVisitor(matchingVisitor);
  }

  function handleEditVisitor(visitor) {
    setVisitors(
      visitors.map((v) =>
        v.id === editVisitor.id ? { ...v, ...visitor, id: v.id } : v
      )
    );
    console.log("update");
  }

  function handleDeleteVisitor(id) {
    const matchingVisitor = visitors.find((visitor) => visitor.id === id);
    if (!matchingVisitor) return;
    setVisitors(visitors.filter((visitor) => visitor.id !== id));
  }

  function handleSortVisitor() {
    let sortedVisitors = [...displayVisitors];

    switch (visitorSelectValue) {
      case "id":
        sortedVisitors.sort((a, b) => a.id - b.id);
        break;
      case "name":
        sortedVisitors.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    setDisplayVisitors(sortedVisitors);
    console.log("sort");
  }

  useEffect(() => {
    setDisplayVisitors(
      visitors.filter((visitor) =>
        visitor.name.toLowerCase().includes(visitorSearchValue.toLowerCase())
      )
    );
  }, [visitorSearchValue]);

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
          onEditBook,
          editBook,
          setEditBook,
          handleEditBook,
          handleDeleteBook,
          handleSortBook,
          bookSelectValue,
          setBookSelectValue,
          bookSearchValue,
          setBookSearchValue,

          displayVisitors,
          handleAddVisitor,
          onEditVisitor,
          editVisitor,
          setEditVisitor,
          handleEditVisitor,
          handleDeleteVisitor,
          handleSortVisitor,
          visitorSelectValue,
          setVisitorSelectValue,
          visitorSearchValue,
          setVisitorSearchValue,
        }}
      />
    </div>
  );
};

export default RootLayout;
