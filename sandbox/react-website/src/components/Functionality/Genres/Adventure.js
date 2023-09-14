import CategoryLayout from "../CategoryLayout";
import { useState } from "react";
import { TestAdv } from "./TestAdv";
import { AdventDes } from "./AdventDes";

import React from "react";

// Function to chunk the array into groups of 'size'
//const BookList = useState();
function chunkArray(array, size) {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
}

const adventureBooks = [
  {
    id: 1,
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/Adventure/Raptor%20Red.jpg?raw=true",
    text: "Raptor",
    label: "Adventure",
  },
  {
    id: 2,
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/Adventure/Tarzen.jpg?raw=true",
    text: "Tarzen",
    label: "Adventure",
  },
  {
    id: 3,
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/Adventure/The%20Jungle%20Book.jpg?raw=true",
    text: "Jungle Book",
    label: "Adventure",
  },
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/Adventure/The%20Mark%20Of%20Zorro.jpg?raw=true",
    text: "Mark of Zorro",
    label: "Adventure",
  },
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/Adventure/The%20Martian.jpg?raw=true",
    text: "The martian",
    label: "Adventure",
  },
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/Adventure/The%20Riddle%20Of%20The%20Sands.jpg?raw=true",
    text: "The middle of the Sands",
    label: "Adventure",
  },
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/Adventure/Treasure%20Island.jpg?raw=true",
    text: "Treasure Island",
    label: "Adventure",
  },

  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546112331l/3836.jpg",
    text: "Don Quixote",
    label: "Adventure",
  },
  {
    src: "https://m.media-amazon.com/images/I/51UJsfRHTRL.jpg",
    text: "The Three Musketeers",
    label: "Adventure",
  },
  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328864746l/1086164.jpg",
    text: "Journey to the Center of the Earth",
    label: "Adventure",
  },
  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1309203605l/7126.jpg",
    text: "The Count of Monte Cristo",
    label: "Adventure",
  },
  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1589480142l/6440.jpg",
    text: "Ivanhoe",
    label: "Adventure",
  },
  {
    src: "https://m.media-amazon.com/images/I/61nkEgnbf2L.jpg",
    text: "Tarzan of the Apes",
    label: "Adventure",
  },
  {
    src: "https://m.media-amazon.com/images/I/51MV5rjhvUL.jpg",
    text: "Heart of Darkness",
    label: "Adventure",
  },
  {
    src: "https://m.media-amazon.com/images/I/61FbXZT3CBL.jpg",
    text: "Hatchet",
    label: "Adventure",
  },
  {
    src: "https://m.media-amazon.com/images/I/51ONohO80LL.jpg",
    text: "Congo",
    label: "Adventure",
  },
  {
    src: "https://m.media-amazon.com/images/I/51AuG91eHEL.jpg",
    text: "The Jungle Book",
    label: "Adventure",
  },
  {
    src: "https://m.media-amazon.com/images/I/41M1iq7zdTL.jpg",
    text: "20,000 Leagues Under the Sea",
    label: "Adventure",
  },
  {
    src: "https://m.media-amazon.com/images/I/41UZeCEKOBL.jpg",
    text: "Dune",
    label: "Adventure",
  },
  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1399583343l/214614._SY160_.jpg",
    text: "Desert Solitaire",
    label: "Adventure",
  },
  {
    src: "https://m.media-amazon.com/images/I/41BkZ-1vN6L.jpg",
    text: "The Riddle of the Sands",
    label: "Adventure",
  },
  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1441416080l/3030093._SY475_.jpg",
    text: "The Right Stuff",
    label: "Adventure",
  },
];

function AdventureCards() {
  //For the cards through out the app
  const sevenBooks = adventureBooks.slice(0, 7);

  return (
    <CategoryLayout title="ADVENTURE" items={sevenBooks} category="Adventure" />
  );
}

function PageAdventure() {
  const booksInGroupsOfSeven = chunkArray(adventureBooks, 7);

  return (
    <div>
      {booksInGroupsOfSeven.map((group, index) => (
        <CategoryLayout
          key={index}
          title={index === 0 && "ADVENTURE"} // Display title only for the first group
          items={group}
          category="Adventure"
        />
      ))}
    </div>
  );
}

function ArrayCount() {
  return adventureBooks.length;
}
function getAdventureArray() {
  return adventureBooks;
}
export function setAdventureArray(updatedArray) {
  adventureBooks.length = 0; // Clear the existing array
  adventureBooks.push(...updatedArray); // Push the new items into the array
}

// function AdventureDescription() {
//   const BookList = ({ books, onBookClick }) => {
//     return (
//       <div>
//         <h2>Books</h2>
//         <ul>
//           {books.map((book) => (
//             <li key={book.id} onClick={() => onBookClick(book.id)}>
//               {book.title}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   };
// }

// function TypeBookDesc() {
//   const BookDescription = ({ book }) => {
//     return (
//       <div>
//         <h2>{book.title}</h2>
//         <p>{book.description}</p>
//       </div>
//     );
//   };
// }

// function Appz() {
//   const [selectedBook, setSelectedBook] = useState(null);

//   const handleBookClick = (bookId) => {
//     const selected = booksData.find((book) => book.id === bookId);
//     setSelectedBook(selected);
//   };

//   return (
//     <div className="App">
//       <BookList books={booksData} onBookClick={handleBookClick} />
//       {selectedBook && <BookDescription book={selectedBook} />}
//     </div>
//   );
// }
function Appz() {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (bookId) => {
    const selected = adventureBooks.find((book) => book.id === bookId);
    setSelectedBook(selected);
  };

  return (
    <div className="App">
      <AdventDes books={adventureBooks} onBookClick={handleBookClick} />
      {selectedBook && <TestAdv book={selectedBook} />}
    </div>
  );
}

export {
  AdventureCards,
  PageAdventure,
  ArrayCount,
  getAdventureArray,
  //AdventureDescription,
  //TypeBookDesc,
  Appz,
};

export default AdventureCards;

//export default AdventureCards;
