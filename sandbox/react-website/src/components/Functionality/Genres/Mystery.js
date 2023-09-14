import CategoryLayout from "../CategoryLayout";

import React from "react";

import { Link, Route, Switch, useNavigate } from "react-router-dom";

function chunkArray(array, size) {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
}

export const mysteryBooks = [
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/Mystery/Anatomy%20of%20a%20Murder.jpg?raw=true",
    text: "Anatomy of a Murderer",
    label: "Mystery",
  },
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/Mystery/And%20Then%20There%20Were%20None.jpg?raw=true",
    text: "And then there were none",
    label: "Mystery",
  },
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/Mystery/Case%20Histories.jpg?raw=true",
    text: "Case Histories",
    label: "Mystery",
  },
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/Mystery/Eye%20of%20the%20Needle.jpg?raw=true",
    text: "The Eye of Neddle",
    label: "Mystery",
  },
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/Mystery/Gone%20Girl.jpg?raw=true",
    text: "Gone girl",
    label: "Mystery",
  },
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/Mystery/In%20Cold%20Blood.jpg?raw=true",
    text: "In cold blood",
    label: "Mystery",
  },
  // Add other items as needed
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689018349-81FdfnFjOUS.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "My Annihilation",
    label: "Mystery",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689018391-91BbLCJOruL.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "The Silent Patient",
    label: "Mystery",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689018490-813WHPxt3eL.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "Berkley Tourist Season",
    label: "Mystery",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689018585-816JLxXG3YL.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "William Morrow & Company Rebecca",
    label: "Mystery",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689018684-91q62eNpqGL.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "Flatiron Books The Dry",
    label: "Mystery",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689018725-81N-xC3Se6L.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "Pushkin Vertigo The Decagon House Murders",
    label: "Mystery",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689018773-91fqdoW5QzL.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "Penguin Books The Shadow of the Wind",
    label: "Mystery",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689018879-41PNrWJUulL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "Bitter Lemon Press Havana Red",
    label: "Mystery",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689020220-9102oXzvz1L.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "Random House Trade Paperbacks The Deep Blue Good-by",
    label: "Mystery",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689020333-61lwEOkIKHL.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "William Morrow & Company Maximum Bob",
    label: "Mystery",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689020497-61MSV64Sl6L.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "Pocket Books Postmortem",
    label: "Mystery",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689020549-61L-Bf01LAL.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "Whose Body?",
    label: "Mystery",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689020709-91gOB5yRilL.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "Vintage Crime/Black Lizard The Last Good Kiss",
    label: "Mystery",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689020905-71VdbG2bXQL.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "Berkley Killing Floor",
    label: "Mystery",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689020948-814QZ5uLV3L.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "Gallery Books Mr. Mercedes",
    label: "Mystery",
  },
];

function BookDescription({ book }) {
  const history = useNavigate();

  // Handle the back button to navigate back to the previous page
  const handleBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h2>Book Description</h2>
      <button onClick={handleBack}>Back</button>
      <div>
        <img src={book.src} alt={book.text} />
        <p>{book.text}</p>
        <p>Label: {book.label}</p>
      </div>
    </div>
  );
}

function MysteryCards() {
  //For the cards through out the app
  const sevenBooks = mysteryBooks.slice(0, 7);

  return (
    // <CategoryLayout title="MYSTERY" items={mysteryBooks} category="Mystery" />

    <CategoryLayout title="MYSTERY" items={sevenBooks} category="Mystery" />
  );
}

function PageMystery() {
  const booksInGroupsOfSeven = chunkArray(mysteryBooks, 7);
  // {booksInGroupsOfSeven.map((group, index) => (
  return (
    <div>
      {mysteryBooks.map((group, index) => (
        <Link to={"/book/${index}"} key={index}>
          <CategoryLayout
            // key={index}
            title={index === 0 && "MYSTERY"} // Display title only for the first group
            items={[group]}
            category="Mystery"
          />
        </Link>
      ))}
    </div>
  );
}

function ArrayCount() {
  return mysteryBooks.length;
}

function getMysteryArray() {
  return mysteryBooks;
}
export function setMysteryArray(updatedArray) {
  mysteryBooks.length = 0; // Clear the existing array
  mysteryBooks.push(...updatedArray); // Push the new items into the array
}

export {
  MysteryCards,
  PageMystery,
  ArrayCount,
  getMysteryArray,
  BookDescription,
};

export default MysteryCards;
