import CategoryLayout from "../CategoryLayout";
import { Link } from "react-router-dom";

import React from "react";

// Function to chunk the array into groups of 'size'
function chunkArray(array, size) {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
}

//export const youngadultBooks = [
const youngadultBooks = [
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/YOUNG%20ADULT/download%20(1).jpeg?raw=true",
    text: "Star Girl",
    label: "Young Adult",
  },
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/YOUNG%20ADULT/download%20(2).jpeg?raw=true",
    text: "The boy who never gave up",
    label: "Young Adult",
  },
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/YOUNG%20ADULT/download%20(4).jpeg?raw=true",
    text: "A good kind of trouble",
    label: "Young Adult",
  },
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/YOUNG%20ADULT/download.jpeg?raw=true",
    text: "Chaos Theory",
    label: "Young Adult",
  },
  {
    src: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQvAslSiRXrwfufi-Jrc2JZ6IwM7874mPwiQby-xIRhwJDK4Z7mRL8Yp74XwJX2IO499dfC5N2U1v4muVZKlG-X7nDOqaMwMhQyjDd4_84&usqp=CAc",
    text: "Ordinary",
    label: "Young Adult",
  },
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/YOUNG%20ADULT/download1.jpeg?raw=true",
    text: "Throwback",
    label: "Young Adult",
  },
  ////////////////////////////////
  {
    src: "https://assets-eu-01.kc-usercontent.com/bcd02f72-b50c-0179-8b4b-5e44f5340bd4/e2ba1b19-b63d-4a69-83a9-a610a8a8b128/50224049.jpg?w=238&h=346&auto=format&bg=%23efefef&fit=crop",
    text: "Fake Dates and Mooncakes",
    label: "Young Adult",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529081411.jpg",
    text: "Unraveller",
    label: "Young Adult",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781035003150.jpg",
    text: "Promise Boys",
    label: "Young Adult",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781035011728.jpg",
    text: "Begin Again",
    label: "Young Adult",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529099430.jpg",
    text: "I Kissed Shara Wheeler",
    label: "Young Adult",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781035008636.jpg",
    text: "The Cemetery Boys",
    label: "Young Adult",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529039542.jpg",
    text: "Our Lady of Mysterious Ailments",
    label: "Young Adult",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781035008612.jpg",
    text: "The Sunbearer Trials",
    label: "Young Adult",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781035008179.jpg",
    text: "My Mechanical Romance",
    label: "Young Adult",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529029949.jpg",
    text: "Mark My Words",
    label: "Young Adult",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529049756.jpg",
    text: "Tokyo Dreaming",
    label: "Young Adult",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781509814138.jpg",
    text: "Heartless",
    label: "Young Adult",
  },
  {
    src: "https://assets-eu-01.kc-usercontent.com/bcd02f72-b50c-0179-8b4b-5e44f5340bd4/caa1b797-0b12-40c0-b3fd-81bbbe28dc00/Noughts%20and%20Crosses.jpg?w=270&h=414&auto=format&bg=%23efefef&fit=crop",
    text: "Noughts & Crosses",
    label: "Young Adult",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781509870042.jpg",
    text: "Opposite of Always",
    label: "Young Adult",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781509831715.jpg",
    text: "Field Notes on Love",
    label: "Young Adult",
  },
];

function YoungAdultCards() {
  //For the cards through out the app
  const sevenBooks = youngadultBooks.slice(0, 7);

  return (
    <CategoryLayout
      title="YOUNG ADULT"
      items={sevenBooks}
      category="Young Adult"
    />
  );
}

function PageYoungAdult() {
  const booksInGroupsOfSeven = chunkArray(youngadultBooks, 7);

  return (
    <div>
      {booksInGroupsOfSeven.map((group, index) => (
        // <CategoryLayout
        //   key={index}
        //   title={index === 0 && "YOUNG ADULT"} // Display title only for the first group
        //   items={group}
        //   category="YoungAdult"
        // />
        // <Link to={`/group/${index}`} key={index}>
        //   {/* Replace 'book/' with the path you want for each book */}
        //   <img src={group.src} alt={group.text} />

        <CategoryLayout
          key={index}
          title={index === 0 && "YOUNG ADULT"} // Display title only for the first group
          items={group}
          category="YoungAdult"
        />
        // </Link>
      ))}
    </div>
  );
}

function ArrayCount() {
  return youngadultBooks.length;
}
function getYoungAdultArray() {
  return youngadultBooks;
}
export function setYoungAdultArray(updatedArray) {
  youngadultBooks.length = 0; // Clear the existing array
  youngadultBooks.push(...updatedArray); // Push the new items into the array
}

export { YoungAdultCards, PageYoungAdult, ArrayCount, getYoungAdultArray };

export default YoungAdultCards;
