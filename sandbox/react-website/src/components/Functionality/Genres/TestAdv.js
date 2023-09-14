import React from "react";

export function TestAdv() {
  const BookDescription = ({ book }) => {
    return (
      <div>
        <h2>{book.title}</h2>
        <p>{book.description}</p>
      </div>
    );
  };
}
