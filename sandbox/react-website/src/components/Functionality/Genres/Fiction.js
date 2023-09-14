import CategoryLayout from "../CategoryLayout";
import React from "react";

// Function to chunk the array into groups of 'size'
function chunkArray(array, size) {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
}

export const fictionBooks = [
  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1667001947l/62326344.jpg",
    text: "Dark water daughter",
    label: "Fiction",
    id: "1",
    price: "R400",
  },
  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1675355524l/62197599.jpg",
    text: "Paris Agent",
    label: "Fiction",
    id: "2",
    price: "R150"
  },
  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1666542239l/59362274._SY475_.jpg",
    text: "What never happened",
    label: "Fiction",
    id: "3",
    price: "R129",
  },
  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1630547330l/5._SY475_.jpg",
    text: "Harry Potter",
    label: "Fiction",
    id: "4",
    price: "R250",
  },
  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1579621267l/968.jpg",
    text: "Da Vinci Code",
    label: "Fiction",
    id: "5",
    price: "R175",
  },
  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1657781256l/61439040._SX318_.jpghttps://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1490528560l/4671._SY475_.jpg",
    text: "1984",
    label: "Fiction",
    id: "6",
    price: "R200",
  },
  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1654371463l/18144590._SY475_.jpg",
    text: "The Alchemist",
    label: "Fiction",
    id: "7",
    price: "R190",
  },
  ///////////////////////////////////////////////
  {
    src: "https://d3525k1ryd2155.cloudfront.net/h/254/697/1123697254.0.m.jpg",
    text: "Desparation",
    label: "Fiction",
    id: "8",
    price: "R160",
  },
  {
    src: "https://assets.brightspot.abebooks.a2z.com/dims4/default/a69ec01/2147483647/strip/true/crop/225x338+0+0/resize/253x380!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F03%2F11%2F7b36af4deac8e39c039acdf0d813%2Fall-the-light-we-cannot-see.jpg",
    text: "All the light we cannot see",
    label: "Fiction",
    id: "9",
    price: "R170",
  },
  {
    src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR_-KOsOYdPFIyl15AVRZbwDuxOGcC_go0RrrrScXk_fXBccwID",
    text: "Die Trying",
    label: "Fiction",
    id: "10",
    price: "R180",
  },
  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1490528560l/4671._SY475_.jpg",
    text: "The Great Gatsby",
    label: "Fiction",
  },
  {
    src: "https://www.readerswarehouse.co.za/cdn/shop/products/the-storm-sister-lucinda-riley-15104872087667_360x.jpg?v=1638370438",
    text: "The Storm Sister",
    label: "Fiction",
  },
  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1670014934l/63249718.jpg",
    text: "Silver Nitrate",
    label: "Fiction",
  },
  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1668181003l/62703226.jpg",
    text: "The Only One Left",
    label: "Fiction",
  },
  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1674868310l/62920918.jpg",
    text: "To Die For",
    label: "Fiction",
  },

  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1685353061l/63139946.jpg",
    text: "Everyone here is Lying",
    label: "Fiction",
  },
  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1437456543l/20421367._SX98_.jpg",
    text: "Raw",
    label: "Fiction",
  },
  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722975l/2767052._SY475_.jpg",
    text: "The Hunger Games",
    label: "Fiction",
  },
  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1630547330l/5._SY475_.jpg",
    text: "Harry Potter And The Prisoner Of Azkaban",
    label: "Fiction",
  },
  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1678127541l/123193218._SY475_.jpg",
    text: "Ward D",
    label: "Fiction",
  },
  //Duplication
  {
    src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1671054097l/61272710.jpg",
    text: "The Night Travellers",
    label: "Fiction",
  },
  {
    src: "https://www.readerswarehouse.co.za/cdn/shop/products/bridgerton-the-duke-and-i-julia-quinn-15784761229427_360x.jpg?v=1637211425",
    text: "Other Women",
    label: "Fiction",
  },
  {
    src: "https://assets-eu-01.kc-usercontent.com/bcd02f72-b50c-0179-8b4b-5e44f5340bd4/e2ba1b19-b63d-4a69-83a9-a610a8a8b128/50224049.jpg?w=238&h=346&auto=format&bg=%23efefef&fit=crop",
    text: "Everyone here is Lying",
    label: "Fiction",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529097825.jpg",
    text: "How to Kill Your Family",
    label: "Fiction",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529098440.jpg",
    text: "Exiles",
    label: "Fiction",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529077490.jpg",
    text: "To Paradise",
    label: "Fiction",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529043525.jpg",
    text: "Everything's Fine",
    label: "Fiction",
  },
  {
    src: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529074529.jpg",
    text: "Trust",
    label: "Fiction",
  },
];

function FictionCards() {
  //For the cards through out the app
  const sevenBooks = fictionBooks.slice(0, 7);

  return (
    <CategoryLayout title="FICTION" items={sevenBooks} category="Fiction" />
  );
}

function PageFiction() {
  const booksInGroupsOfSeven = chunkArray(fictionBooks, 7);

  return (
    <div>
      {booksInGroupsOfSeven.map((group, index) => (
        <CategoryLayout
          key={index}
          title={index === 0 && "FICTION"} // Display title only for the first group
          items={group}
          category="Fiction"
        />
      ))}
    </div>
  );
}

function ArrayCount() {
  return fictionBooks.length;
}

function getFictionArray() {
  return fictionBooks;
}
export function setFictionArray(updatedArray) {
  fictionBooks.length = 0; // Clear the existing array
  fictionBooks.push(...updatedArray); // Push the new items into the array
}

export { FictionCards, PageFiction, ArrayCount, getFictionArray };
