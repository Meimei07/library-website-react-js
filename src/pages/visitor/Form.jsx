import React from "react";
import { Link, useOutletContext, useNavigate } from "react-router-dom";

const Form = () => {
  const { handleAddVisitor } = useOutletContext();
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const visitor = Object.fromEntries(formData.entries());

    handleAddVisitor(visitor);
    navigate("/visitor");
  };

  return (
    <div className="form-container max-w-lg rounded-md shadow-xl">
      <div className="text-xl sm:text-2xl">Visitor Form</div>

      <form onSubmit={onSubmit} className="max-w-md px-4 sm:px-0">
        <label className="text-sm sm:text-md">
          Name*
          <input
            type="text"
            placeholder="Name..."
            className="border py-1 px-1.5 rounded-sm sm:text-lg sm:h-10 sm:px-3"
            name="name"
            required
          />
        </label>

        <label className="text-sm sm:text-md">
          Phone*
          <input
            type="text"
            placeholder="Phone..."
            className="border py-1 px-1.5 rounded-sm sm:text-lg sm:h-10 sm:px-3"
            name="phone"
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
            to="../visitor"
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
