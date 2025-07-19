import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "./bookSlice";
import { Link } from "react-router-dom";

const BooksView = () => {
  // @ts-ignore
  const books = useSelector((state) => state.booksReducer.books);
  // console.log(books);
  const dispatch = useDispatch();
  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };
  return (
    <div>
      <h2 className="heading2">List of Books </h2>
      <table className="BooksTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book) => {
              const { id, title, author } = book;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>
                    <Link to="/edit-book" state={{ id, title, author }}>
                      <button className="btn btn-outline-info">Edit</button>
                    </Link>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => {
                        handleDeleteBook(id);
                      }}
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

export default BooksView;
