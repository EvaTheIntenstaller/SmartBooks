import React, { useState } from "react";
import {
  getAdventureArray,
  setAdventureArray,
} from "../Functionality/Genres/Adventure";
import "../Styling/AdminPage.css";

function AdminPage(title) {
  const initialBooks = getAdventureArray();
  const [books, setBooks] = useState(initialBooks);
  const [newBook, setNewBook] = useState({
    src: "",
    text: "",
    label: "",
    description: "",
  });

  const handleDelete = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
    setAdventureArray(updatedBooks); // Update the original array
  };

  const handleLabelChange = (index, newLabel) => {
    const updatedBooks = [...books];
    updatedBooks[index].label = newLabel;
    setBooks(updatedBooks);
    setAdventureArray(updatedBooks); // Update the original array
  };

  const handleDescriptionChange = (index, newDescription) => {
    const updatedBooks = [...books];
    updatedBooks[index].description = newDescription;
    setBooks(updatedBooks);
    setAdventureArray(updatedBooks); // Update the original array
  };

  const handleNewBookChange = (field, value) => {
    setNewBook((prevNewBook) => ({ ...prevNewBook, [field]: value }));
  };

  const handleAddBook = () => {
    if (newBook.label && newBook.src && newBook.text) {
      const updatedBooks = [...books, newBook];
      setBooks(updatedBooks);
      setAdventureArray(updatedBooks); // Update the original array
      setNewBook({
        src: "",
        text: "",
        label: "",
        description: "",
      });
    }
  };

  return (
    <div className="cards__container">
      {books.map((book, index) => (
        <div key={index} className="cards__item">
          <div className="cards__item__link">
            <div className="cards__item__pic-wrap">
              <img
                src={book.src}
                alt={book.text}
                className="cards__item__img"
              />
            </div>
            <div className="cards__item__info">
              <h5 className="title__pointer">{book.text}</h5>
              <p className="cards__item__text">{book.label}</p>
              <p className="cards__item__text">{book.description}</p>
              <button
                className="btn delete-btn"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
              <input
                type="text"
                value={book.label}
                onChange={(e) => handleLabelChange(index, e.target.value)}
                className="edit-input"
              />
              <textarea
                value={book.description}
                onChange={(e) => handleDescriptionChange(index, e.target.value)}
                className="edit-textarea"
              />
            </div>
          </div>
        </div>
      ))}

      <div className="cards__item">
        <div className="cards__item__link">
          <div className="cards__item__pic-wrap">
            <input
              type="text"
              placeholder="Image URL"
              value={newBook.src}
              onChange={(e) => handleNewBookChange("src", e.target.value)}
              className="new-book-input"
            />
          </div>
          <div className="cards__item__info">
            <input
              type="text"
              placeholder="Book Title"
              value={newBook.text}
              onChange={(e) => handleNewBookChange("text", e.target.value)}
              className="new-book-input"
            />
            <input
              type="text"
              placeholder="Label"
              value={newBook.label}
              onChange={(e) => handleNewBookChange("label", e.target.value)}
              className="new-book-input"
            />
            <textarea
              placeholder="Description"
              value={newBook.description}
              onChange={(e) =>
                handleNewBookChange("description", e.target.value)
              }
              className="new-book-textarea"
            />
            <button className="btn add-btn" onClick={handleAddBook}>
              Add New Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
