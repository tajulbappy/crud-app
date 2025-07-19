import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialBooks = {
  books: [
    {
      id: uuidv4(),
      title: "Love Bangladesh",
      author: "Tajul Islam",
    },
    {
      id: uuidv4(),
      title: "Bangabondhu-71",
      author: "Tajul Islam",
    },
    {
      id: uuidv4(),
      title: "Failure is the piller of success",
      author: "Bappy",
    },
  ],
};

export const bookSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const isBookExist = state.books.filter((book) => book.id == id);
      if (isBookExist) {
        isBookExist[0].title = title;
        isBookExist[0].author = author;
      }
    },
    deleteBook: (state, action) => {
      //   const id = action.payload;
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { showBooks, addBook, deleteBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;
