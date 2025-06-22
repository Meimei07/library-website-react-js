import React from "react";
import { useOutletContext, useNavigate, Link } from "react-router-dom";

const Form = () => {
  const { handleAddBook, editBook, setEditBook, handleEditBook } =
    useOutletContext();
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const book = Object.fromEntries(formData.entries());

    if (editBook) {
      handleEditBook(book);
      setEditBook(null);
    } else {
      handleAddBook(book);
    }

    navigate("/book");
  };

  return (
    <div className="form-container max-w-lg rounded-md shadow-xl">
      <div className="text-xl sm:text-2xl">Book Form</div>

      <form onSubmit={onSubmit} className="max-w-md px-4 sm:px-0">
        <label className="text-sm sm:text-md">
          Title*
          <input
            type="text"
            placeholder="Title..."
            className="border py-1 px-1.5 rounded-sm sm:text-lg sm:h-10 sm:px-3"
            name="title"
            defaultValue={editBook?.title || ""}
            required
          />
        </label>

        <label className="text-sm sm:text-md">
          Author*
          <input
            type="text"
            placeholder="Author..."
            className="border py-1 px-1.5 rounded-sm sm:text-lg sm:h-10 sm:px-3"
            name="author"
            defaultValue={editBook?.author || ""}
            required
          />
        </label>

        <label className="text-sm sm:text-md">
          Publisher*
          <input
            type="text"
            placeholder="Publisher..."
            className="border py-1 px-1.5 rounded-sm sm:text-lg sm:h-10 sm:px-3"
            name="publisher"
            defaultValue={editBook?.publisher || ""}
            required
          />
        </label>

        <label className="text-sm sm:text-md">
          Publish Year*
          <input
            type="text"
            placeholder="Publish Year..."
            className="border py-1 px-1.5 rounded-sm sm:text-lg sm:h-10 sm:px-3"
            name="publishYear"
            defaultValue={editBook?.publishYear || ""}
            required
          />
        </label>

        <label className="text-sm sm:text-md">
          Pages*
          <input
            type="text"
            placeholder="Pages..."
            className="border py-1 px-1.5 rounded-sm sm:text-lg sm:h-10 sm:px-3"
            name="pages"
            defaultValue={editBook?.pages || ""}
            required
          />
        </label>

        <label className="text-sm sm:text-md">
          Copies*
          <input
            type="text"
            placeholder="Copies..."
            className="border py-1 px-1.5 rounded-sm sm:text-lg sm:h-10 sm:px-3"
            name="copies"
            defaultValue={editBook?.copies || ""}
            required
          />
        </label>

        <div className="self-end">
          <button
            type="submit"
            className="bg-pink-300 rounded-md py-1 px-2 text-sm cursor-pointer mr-2 hover:bg-pink-200 sm:text-lg"
          >
            Save
          </button>

          <Link
            to="../book"
            onClick={() => setEditBook(null)}
            className="border rounded-md py-1 px-2 text-sm cursor-pointer hover:bg-gray-100 sm:text-lg"
          >
            Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
