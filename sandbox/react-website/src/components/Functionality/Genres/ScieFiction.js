import CategoryLayout from "../CategoryLayout";

import React from "react";

function chunkArray(array, size) {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
}

export const sciefictionBooks = [
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/SCIENCE%20FICTION/SCIENCE%20FICTION/download%20(10).jpeg?raw=true",
    text: "Eclipse",
    label: "Science Fiction",
  },
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/SCIENCE%20FICTION/SCIENCE%20FICTION/download%20(11).jpeg?raw=true",
    text: "These infinite threads",
    label: "Science Fiction",
  },
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/SCIENCE%20FICTION/SCIENCE%20FICTION/download%20(12).jpeg?raw=true",
    text: "Whalefall",
    label: "Science Fiction",
  },
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/SCIENCE%20FICTION/SCIENCE%20FICTION/download%20(13).jpeg?raw=true",
    text: "The cheat code",
    label: "Science Fiction",
  },
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/SCIENCE%20FICTION/SCIENCE%20FICTION/download%20(14).jpeg?raw=true",
    text: "Witch King",
    label: "Science Fiction",
  },
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/SCIENCE%20FICTION/SCIENCE%20FICTION/download%20(15).jpeg?raw=true",
    text: "The first bright thing",
    label: "Science Fiction",
  },
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/SCIENCE%20FICTION/SCIENCE%20FICTION/download%20(17).jpeg?raw=true",
    text: "War Bodies",
    label: "Science Fiction",
  },
  ///////////////////////
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781035001118.jpg",
    text: "Fractal Noise",
    label: "Science Fiction",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781509835317.jpg",
    text: "The Kaiju Preservation Society",
    label: "Science Fiction",
  },
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/SCIENCE%20FICTION/SCIENCE%20FICTION/download%20(10).jpeg?raw=true",
    text: "Eclipse",
    label: "Science Fiction",
  },
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/images_folder/SCIENCE%20FICTION/SCIENCE%20FICTION/download%20(10).jpeg?raw=true",
    text: "Lords of Uncreation",
    label: "Science Fiction",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529088021.jpg",
    text: "In the Lives of Puppets",
    label: "Science Fiction",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529050080.jpg",
    text: "War Bodies",
    label: "Science Fiction",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529083514.jpg",
    text: "Sea of Tranquillity",
    label: "Science Fiction",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529050059.jpg",
    text: "Weaponized",
    label: "Science Fiction",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529087178.jpg",
    text: "Children of Memory",
    label: "Science Fiction",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529045352.jpg",
    text: "Upgrade",
    label: "Science Fiction",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529073607.jpg",
    text: "Leech",
    label: "Science Fiction",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529001648.jpg",
    text: "A Desolation Called Peace",
    label: "Science Fiction",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781447247623.jpg",
    text: "Invisible Sun",
    label: "Science Fiction",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529051902.jpg",
    text: "Shards of Earth",
    label: "Science Fiction",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781509868575.jpg",
    text: "EcPandora's Star",
    label: "Science Fiction",
  },
];

function ScieFictionCards() {
  //For the cards through out the app
  const sevenBooks = sciefictionBooks.slice(0, 7);

  return (
    <CategoryLayout
      title="SCIENCE FICTION"
      items={sevenBooks}
      category="ScieFiction"
    />
  );
}

function PageScieFiction() {
  const booksInGroupsOfSeven = chunkArray(sciefictionBooks, 7);

  return (
    <div>
      {booksInGroupsOfSeven.map((group, index) => (
        <CategoryLayout
          key={index}
          title={index === 0 && "SCIENCE FICTION"} // Display title only for the first group
          items={group}
          category="ScieFiction"
        />
      ))}
    </div>
  );
}

function ArrayCount() {
  return sciefictionBooks.length;
}
function getScieFictionArray() {
  return sciefictionBooks;
}
export function setScieFictionArray(updatedArray) {
  sciefictionBooks.length = 0; // Clear the existing array
  sciefictionBooks.push(...updatedArray); // Push the new items into the array
}

export { ScieFictionCards, PageScieFiction, ArrayCount,getScieFictionArray };

export default ScieFictionCards;
