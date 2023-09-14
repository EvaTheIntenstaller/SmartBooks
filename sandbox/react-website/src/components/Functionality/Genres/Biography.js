import CategoryLayout from "../CategoryLayout";

import React, { useState } from "react";

// Function to chunk the array into groups of 'size'
function chunkArray(array, size) {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
}

export const biographyBooks = [
  {
    id: 1,
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/Biography/American%20Prometheus.jpg?raw=true",
    text: "American Prometheu",
    label: "Biography",
    description: "THE DON DON DOOOOON",
  },
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/Biography/And%20There%20Was%20Light.jpg?raw=true",
    text: "And the was light",
    label: "Biography",
  },
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/Biography/Elon%20Musk.jpg?raw=true",
    text: "Elon Musk",
    label: "Biography",
  },
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/Biography/Long%20Walk%20to%20Freedom.jpg?raw=true",
    text: "Long walk to Freedom",
    label: "Biography",
  },
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/Biography/Roy%20Orbison.jpg?raw=true",
    text: "Roy Orbison",
    label: "Biography",
  },
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/Biography/Steve%20Jobs.jpg?raw=true",
    text: "Steve Jobs",
    label: "Biography",
  },
  ///////////////////////////////////////////////
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1669816964-51ewWNrkjEL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "Crown The Black Count",
    label: "Biography",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1669818652-51hX9OcNgL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "Ralph Ellison",
    label: "Biography",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1669818719-41hdG1-emcL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "Oscar Wilde",
    label: "Biography",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1669818998-51zut9QE0hL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "Vintage Penelope Fitzgerald",
    label: "Biography",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1669819027-41ESKcbxuXL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "Red Comet: The Short Life and Blazing Art of Sylvia Plath",
    label: "Biography",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1669819082-51TEMCFYFWL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "Pontius Pilate",
    label: "Biography",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1669819225-51bSHredduL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "Random House Savage Beauty: The Life of Edna St. Vincent Millay",
    label: "Biography",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1669819297-41HMY14X6AL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:* ",
    text: "Brand: Random House Véra (Mrs. Vladimir Nabokov)",
    label: "Biography",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1669819338-517uT5K1hXL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "How Shakespeare Became Shakespeare",
    label: "Biography",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1669819511-41mQ-q8d0L._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "James Baldwin's America and Its Urgent Lessons for Our Own",
    label: "Biography",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1669819561-51A0gnPgjIL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "St. Martin's Griffin The Mayor of Castro Street",
    label: "Biography",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1669819601-41F084NCJ2L._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "The Brontë Myth",
    label: "Biography",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1669819692-41i3v-fe0XL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "British Film Institute Wong Kar-Wai",
    label: "Biography",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1669819865-41cpd0oMnlL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "Amistad Press Ida: A Sword Among Lions",
    label: "Biography",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1669819959-51Zb4L6sRmL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "Simon & Schuster Ali",
    label: "Biography",
  },
];

function BiographyCards() {
  //For the cards through out the app
  const sevenBooks = biographyBooks.slice(0, 7);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book.text);

    //setSelectedBook(bookDescriptions[book.text]);
  };

  const bookId = biographyBooks.find((book) => book.id === 1);

  return (
    <div>
      {selectedBook ? (
        <div className="Desc">
          <h2>{selectedBook.text}</h2>
          <p>{selectedBook.description}</p>
          <button onClick={() => setSelectedBook(null)}>Back to List</button>
        </div>
      ) : (
        <CategoryLayout
          title="BIOGRAPHY"
          items={sevenBooks}
          category="Biography"
          onItemClick={handleBookClick}
        />
      )}
      ;
    </div>
  );
}
//Place for price check

function PageBiography() {
  const booksInGroupsOfSeven = chunkArray(biographyBooks, 7);

  return (
    <div>
      {booksInGroupsOfSeven.map((group, index) => (
        <CategoryLayout
          key={index}
          title={index === 0 && "BIOGRAPHY"} // Display title only for the first group
          items={group}
          category="Biography"
        />
      ))}
    </div>
  );
}

function ArrayCount() {
  return biographyBooks.length;
}
function getBiographyArray() {
  return biographyBooks;
}
export function setBiographyArray(updatedArray) {
  biographyBooks.length = 0; // Clear the existing array
  biographyBooks.push(...updatedArray); // Push the new items into the array
}

export { BiographyCards, PageBiography, ArrayCount, getBiographyArray };

export default BiographyCards;
