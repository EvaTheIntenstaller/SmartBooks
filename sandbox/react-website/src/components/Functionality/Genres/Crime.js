import CategoryLayout from "../CategoryLayout";
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// Function to chunk the array into groups of 'size'
function chunkArray(array, size) {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
}

export const crimeBooks = [
  {
    id: 1,
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/CrimeOrDetective/Age%20of%20Vice.jpeg?raw=true",
    text: "Age of Vice",
    label: "Crime",
    price: "R500",
    //descriptionm: "This is an Age of Vices Book",
  },
  {
    id: 2,
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/CrimeOrDetective/AllSinnersBleed.jpg?raw=true",
    text: "All Sinners Bleed",
    label: "Crime",
    price: "R500",

    ///descriptionm: "Okay Show me",
  },
  {
    id: 3,
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/CrimeOrDetective/Beware-the-Woman.jpg?raw=true",
    text: "Beware the woman Megan Abbott",
    label: "Crime",
    price: "R500",
  },
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/CrimeOrDetective/Confidence.jpeg?raw=true",
    text: "Confidence",
    label: "Crime",
    price: "R500",
  },
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/CrimeOrDetective/Everybody-Knows.jpg?raw=true",
    text: "Everybody knows",
    label: "Crime",
    price: "R500",
  },
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/CrimeOrDetective/Hope-You-Are-Satisfied.jpeg?raw=true",
    text: "Hope your Satisfied",
    label: "Crime",
    price: "R500",
  },
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/CrimeOrDetective/I-Have-Some-Questions-For-You.jpeg?raw=true",
    text: "I have some questions",
    label: "Crime",
    price: "R500",
  },
  ///////////////////////
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529040203.jpg",
    text: "All Of Us Are Broken",
    label: "Crime",
    price: "R500",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529054064.jpg",
    text: "Cast a Cold Eye",
    label: "Crime",
    price: "R500",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529091687.jpg",
    text: "The Murder Wall",
    label: "Crime",
    price: "R500",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529062014.jpg",
    text: "Simply Lies",
    label: "Crime",
    price: "R500",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529095401.jpg",
    text: "Date With Evil",
    label: "Crime",
    price: "R500",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529094978.jpg",
    text: "The Murders at Fleat House",
    label: "Crime",
    price: "R500",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529070514.jpg",
    text: "The Sleeping and the Dead",
    label: "Crime",
    price: "R500",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529087635.jpg",
    text: "Gin Palace",
    label: "Crime",
    price: "R500",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529061987.jpg",
    text: "The 6:20 Man",
    label: "Crime",
    price: "R500",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529089820.jpg",
    text: "Daisy Darker",
    label: "Crime",
    price: "R500",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529004380.jpg",
    text: "Picture You Dead",
    label: "Crime",
    price: "R500",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529086393.jpg",
    text: "The Blame Game",
    label: "Crime",
    price: "R500",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781035003426.jpg",
    text: "Burial of Ghosts",
    label: "Crime",
    price: "R500",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529080285.jpg",
    text: "Dirt Town",
    label: "Crime",
    price: "R500",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529092837.jpg",
    text: "Die Twice",
    label: "Crime",
    price: "R500",
  },
];

function CrimeCards() {
  //For the cards through out the app
  const sevenBooks = crimeBooks.slice(0, 7);

  return <CategoryLayout title="CRIME" items={sevenBooks} category="Crime" />;
  // <CategoryLayout title="CRIME" items={sevenBooks} category="Crime" />;
}

function DescriptionService() {
  return (
    <div>
      {crimeBooks.map((book) => (
        // <li key={book.id}>
        <Link to={`/description/${book.id}`}>{book.text}</Link>
        // </li>
      ))}
    </div>
  );
}

function Descriptionz() {
  {
    const bookId = this.props.match.params.id;
    const selectedBook = crimeBooks.find(
      (book) => book.id === parseInt(bookId)
    );

    if (!selectedBook) {
      return <div>Book not found</div>;
    }

    return (
      <div>
        <h2>{selectedBook.title}</h2>
        <p>{selectedBook.description}</p>
      </div>
    );
  }
}

function PageCrime() {
  const booksInGroupsOfSeven = chunkArray(crimeBooks, 7);

  return (
    <div>
      {booksInGroupsOfSeven.map((group, index) => (
        <CategoryLayout
          key={index}
          title={index === 0 && "CRIME"} // Display title only for the first group
          items={group}
          category="Crime"
        />
      ))}
    </div>
  );
}

function ArrayCount() {
  return crimeBooks.length;
}
function getCrimeArray() {
  return crimeBooks;
}
export function setCrimeArray(updatedArray) {
  crimeBooks.length = 0; // Clear the existing array
  crimeBooks.push(...updatedArray); // Push the new items into the array
}

export {
  CrimeCards,
  PageCrime,
  ArrayCount,
  getCrimeArray,
  Descriptionz,
  DescriptionService,
};

export default CrimeCards;
