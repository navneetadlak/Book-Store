import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "./Book";

const BookList = () => {
  const [books, setUpBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        "https://d1krvzwx5oquy1.cloudfront.net/books.json"
      );
      console.log(response);
      setUpBooks(response.data);
    } catch (error) {
      console.error("error fetching books: ", error);
    }
  };

  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
