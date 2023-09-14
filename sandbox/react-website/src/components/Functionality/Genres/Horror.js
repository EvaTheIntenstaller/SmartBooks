import CategoryLayout from "../CategoryLayout";

import React from "react";

// // Function to chunk the array into groups of 'size'
function chunkArray(array, size) {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
}

export const horrorBooks = [
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1652100340-31gGz1OaoeL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "Dracula",
    label: "Horror",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1652099981-41fEwXk4LmL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "Let the right one In",
    label: "Horror",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1652099865-51hdTqS3nL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "The fisherman",
    label: "Horror",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1629063354-51cmxJqed5L._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "Haunted",
    label: "Horror",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1652099649-51VBnSOi7qL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "I am legend",
    label: "Horror",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1652099534-51B2yAly-TL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "Come closer",
    label: "Horror",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1652099387-41YywOd3pGL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "Pet Sematary",
    label: "Horror",
  },

  /////////

  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1652097675-5147HWXW8OL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "Harvest Home",
    label: "Horror",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1624391723-51SdurB71kS._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "The Other Black Girl",
    label: "Horror",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1626717853-51AikzEz4fL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "The Hunger",
    label: "Horror",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1652098154-613BmWFeHEL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "Dark Valley",
    label: "Horror",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1652098154-613BmWFeHEL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "Bad Box",
    label: "Horror",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1652098544-51fECb3Yh-L._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "Apartment 16",
    label: "Horror",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1652098591-51cye4fPLL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "Lost Souls",
    label: "Horror",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1652098715-515uPL9wObL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "The House Next Door",
    label: "Horror",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1652098831-415Y0Lwf5RL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "Tender is the Flesh",
    label: "Horror",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1652098893-4186wODSttL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "The Good House",
    label: "Horror",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1652099055-51ctCcTmwaL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "World War Z",
    label: "Horror",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1652099111-41rXpHVxefL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "The Return",
    label: "Horror",
  },
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1652098772-51NEB8iqFTL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    text: "The Wasp Factory",
    label: "Horror",
  },
];

function HorrorCards() {
  //For the cards through out the app
  const sevenBooks = horrorBooks.slice(0, 7);

  return <CategoryLayout title="HORROR" items={sevenBooks} category="Horror" />;
}

function PageHorror() {
  const booksInGroupsOfSeven = chunkArray(horrorBooks, 7);

  return (
    <div>
      {booksInGroupsOfSeven.map((group, index) => (
        <CategoryLayout
          key={index}
          title={index === 0 && "HORROR"} // Display title only for the first group
          items={group}
          category="Horror"
        />
      ))}
    </div>
  );
}
function ArrayCount() {
  return horrorBooks.length;
}
function getHorrorArray() {
  return horrorBooks;
}
export function setHorrorArray(updatedArray) {
  horrorBooks.length = 0; // Clear the existing array
  horrorBooks.push(...updatedArray); // Push the new items into the array
}

export { HorrorCards, PageHorror, ArrayCount, getHorrorArray };

export default HorrorCards;
