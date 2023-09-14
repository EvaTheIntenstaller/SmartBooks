import React from "react";

export function AdventDes() {
  const BookList = ({ books, onBookClick }) => {
    return (
      <div>
        <h2>Books</h2>
        <ul>
          {books.map((book) => (
            <li key={book.id} onClick={() => onBookClick(book.id)}>
              {book.title}
            </li>
          ))}
        </ul>
      </div>
    );
  };
}
