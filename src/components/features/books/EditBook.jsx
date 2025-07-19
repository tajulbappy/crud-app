import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBook } from "./bookSlice";

const EditBook = () => {
  const location = useLocation();
  // console.log(location);
  const [id, setId] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook({ id, title, author }));
    navigate("/show-book", {replace:true})
  };
  return (
    <div>
      <h2 className="heading2">Edit Book</h2>
      <form action="#" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title" className="me-2 fw-bold">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
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
            required
            className="border-2 border-primary rounded"
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-outline-primary">
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBook;
