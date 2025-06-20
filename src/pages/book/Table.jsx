import React from "react";

const Table = () => {
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
          <tr>
            <td>1</td>
            <td>The Hobbit</td>
            <td>J.R.R. Tolkien</td>
            <td>Jimmie Collon</td>
            <td>1989</td>
            <td>129</td>
            <td>12</td>
            <td>
              <button className="text-blue-500 hover:underline">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
