import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "./bookSlice";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // @ts-ignore
    const book = { id: uuid(), title, author };
    dispatch(addBook(book));
    navigate("/show-book", { replace: true });
  };

  return (
    <div>
      <h2 className="heading2">Add Book</h2>
      <form action="#" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title" className="me-2 fw-bold">
            Title:{" "}
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            placeholder="write the book title"
            required
            className="border-2 border-primary rounded"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="form-field">
          <label htmlFor="author" className="me-2 fw-bold">
            Author:{" "}
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={author}
            placeholder="write the author name"
            required
            className="border-2 border-primary rounded"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-outline-primary">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
