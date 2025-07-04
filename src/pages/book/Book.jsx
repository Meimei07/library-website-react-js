import React from "react";
import Table from "./Table";
import { Link, useOutletContext } from "react-router-dom";

const Book = () => {
  const {
    displayBooks,
    onEditBook,
    handleDeleteBook,
    handleSortBook,
    bookSelectValue,
    setBookSelectValue,
    bookSearchValue,
    setBookSearchValue,
  } = useOutletContext();

  return (
    <div className="px-2 sm:px-5">
      <div className="flex py-3">
        <div className="flex-1 font-semibold text-lg sm:text-2xl">
          Manage Books
        </div>

        <div>
          <Link
            to="form"
            className="bg-pink-300 rounded-md py-1 px-2 text-sm cursor-pointer hover:bg-pink-200 sm:text-lg"
          >
            Add book
          </Link>
        </div>
      </div>

      <div className="flex flex-col my-4 max-w-70 sm:flex-row sm:max-w-full sm:items-center sm:justify-between">
        <div className="flex gap-2 sm:flex-1 sm:max-w-70">
          <select
            value={bookSelectValue}
            onChange={(e) => setBookSelectValue(e.target.value)}
            className="flex-2 border rounded-md text-sm sm:text-lg"
          >
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="copies">Copies</option>
          </select>

          <div className="flex-1">
            <button
              onClick={handleSortBook}
              className="bg-pink-300 rounded-md py-1 px-2 text-sm cursor-pointer hover:bg-pink-200 sm:text-lg"
            >
              Sort
            </button>
          </div>
        </div>

        <div className="mt-3 sm:mt-0 sm:flex-1 sm:max-w-70">
          <input
            type="search"
            placeholder="search..."
            className="text-sm border rounded-md px-2 h-7.5 w-full sm:text-lg sm:h-8"
            defaultValue={bookSearchValue}
            onChange={(e) => {
              setBookSearchValue(e.target.value);
            }}
          />
        </div>
      </div>

      <Table
        books={displayBooks}
        onEdit={onEditBook}
        onDelete={handleDeleteBook}
      />
    </div>
  );
};

export default Book;
