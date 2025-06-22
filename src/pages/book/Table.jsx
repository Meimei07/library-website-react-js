import React from "react";
import { Link } from "react-router-dom";

const Table = ({ books, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full text-md">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>Publish Year</th>
            <th>Pages</th>
            <th>Copies</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => {
            return (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
                <td>{book.publishYear}</td>
                <td>{book.pages}</td>
                <td>{book.copies}</td>
                <td>
                  <Link
                    to="form"
                    onClick={() => onEdit(book.id)}
                    className="text-blue-500 mr-1 cursor-pointer hover:underline"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => onDelete(book.id)}
                    className="text-red-500 cursor-pointer hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
