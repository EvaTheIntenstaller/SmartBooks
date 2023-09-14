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

export const historyBooks = [
  {
    src: "https://assets.brightspot.abebooks.a2z.com/dims4/default/c1d33d4/2147483647/strip/true/crop/196x300+0+0/resize/392x600!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F5d%2Fc1%2F4ec62dd0471ba955b53302c33bb0%2Fbest-history29.jpg",
    text: "Hitler",
    label: "History",
  },
  {
    src: "https://assets.brightspot.abebooks.a2z.com/dims4/default/258fd47/2147483647/strip/true/crop/198x300+0+0/resize/396x600!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F76%2F8c%2F51d6c34e4fc5ab00d4fc9aa77012%2Fbest-history26.jpg",
    text: "1776",
    label: "History",
  },
  {
    src: "https://assets.brightspot.abebooks.a2z.com/dims4/default/6030c55/2147483647/strip/true/crop/197x300+0+0/resize/394x600!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F7a%2F5c%2Fd24fe0f044ebb471a1b08b1c646d%2Fbest-history25.jpg",
    text: "Embracing defeat",
    label: "History",
  },
  {
    src: "https://assets.brightspot.abebooks.a2z.com/dims4/default/6ce9da1/2147483647/strip/true/crop/184x300+0+0/resize/368x600!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F9d%2F67%2F719603a84ce594e94e3af041ddd9%2Fbest-history19.jpg",
    text: "1492",
    label: "History",
  },
  {
    src: "https://assets.brightspot.abebooks.a2z.com/dims4/default/4f1f769/2147483647/strip/true/crop/198x300+0+0/resize/396x600!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F54%2F4c%2F64e467474e28a784e9daba84eacc%2Fbest-history20.jpg",
    text: "Appeasement",
    label: "History",
  },
  {
    src: "https://assets.brightspot.abebooks.a2z.com/dims4/default/b86339e/2147483647/strip/true/crop/193x300+0+0/resize/386x600!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2Fe8%2F8a%2Fa43aec2c4389a6023e6a2de1ec06%2Fbest-history18.jpg",
    text: "Stalin's Englishman",
    label: "History",
  },
  {
    src: "https://assets.brightspot.abebooks.a2z.com/dims4/default/cff95d0/2147483647/strip/true/crop/200x300+0+0/resize/400x600!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2Fe5%2F12%2F6c6606ff4850bfde22289100fc0d%2Fbest-history17.jpg",
    text: "An army at dawn",
    label: "History",
  },

  ///////////////////
  {
    src: "https://assets.brightspot.abebooks.a2z.com/dims4/default/08f3d78/2147483647/strip/true/crop/195x300+0+0/resize/390x600!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F9a%2Fef%2Fd4bf8b1a40d180e2e93fddc869bb%2Fbest-history01.jpg",
    text: "Grant",
    label: "History",
  },
  {
    src: "https://assets.brightspot.abebooks.a2z.com/dims4/default/83e13d3/2147483647/strip/true/crop/200x300+0+0/resize/400x600!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F9c%2Ff6%2Fb4599e574125af0733e3fab79a05%2Fbest-history30.jpg",
    text: "Encounter Of The World",
    label: "History",
  },
  {
    src: "https://assets.brightspot.abebooks.a2z.com/dims4/default/240ff2f/2147483647/strip/true/crop/199x300+0+0/resize/398x600!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F13%2F7e%2F50694eaa4f2dbb874d77972ff2bf%2Fbest-history02.jpg",
    text: "Guns, Germs and Steel",
    label: "History",
  },
  {
    src: "https://assets.brightspot.abebooks.a2z.com/dims4/default/2b5e950/2147483647/strip/true/crop/195x300+0+0/resize/390x600!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2Fe7%2F65%2F2bec539348d1bcf41e73bbcb7c5b%2Fbest-history03.jpg",
    text: "Making of the Modern World",
    label: "History",
  },
  {
    src: "https://assets.brightspot.abebooks.a2z.com/dims4/default/763f213/2147483647/strip/true/crop/198x300+0+0/resize/396x600!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F2a%2F22%2F7da4174348f99b0e77c7b3755f89%2Fbest-history05.jpg",
    text: "Embers of War",
    label: "History",
  },
  {
    src: "https://assets.brightspot.abebooks.a2z.com/dims4/default/53a5121/2147483647/strip/true/crop/197x300+0+0/resize/394x600!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2Fd8%2F6c%2Fb9daa5f4444ea7313f541777db2d%2Fbest-history06.jpg",
    text: "The Great War and the Birth of the Modern Age",
    label: "History",
  },
  {
    src: "https://assets.brightspot.abebooks.a2z.com/dims4/default/a97bc9b/2147483647/strip/true/crop/198x300+0+0/resize/396x600!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F52%2F35%2Fe55c9a4a40319171e006198da2cf%2Fbest-history07.jpg",
    text: "Ancient World",
    label: "History",
  },
  {
    src: "https://assets.brightspot.abebooks.a2z.com/dims4/default/499f14a/2147483647/strip/true/crop/199x300+0+0/resize/398x600!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2Ff6%2Fa5%2F6b8ceaa740b992b23a571ae3290d%2Fbest-history08.jpg",
    text: "Broken Lives",
    label: "History",
  },
  {
    src: "https://assets.brightspot.abebooks.a2z.com/dims4/default/fc17a0a/2147483647/strip/true/crop/200x300+0+0/resize/400x600!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F98%2F15%2Fc2b616ef4f8fa516774b5f7b5212%2Fbest-history10.jpg",
    text: "Democracy",
    label: "History",
  },
  {
    src: "https://assets.brightspot.abebooks.a2z.com/dims4/default/6930426/2147483647/strip/true/crop/199x300+0+0/resize/398x600!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F38%2F3f%2Fc946f3bb49afab6a494e0fda3440%2Fbest-history13.jpg",
    text: "The Crusaders",
    label: "History",
  },
  {
    src: "https://assets.brightspot.abebooks.a2z.com/dims4/default/6930426/2147483647/strip/true/crop/199x300+0+0/resize/398x600!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F38%2F3f%2Fc946f3bb49afab6a494e0fda3440%2Fbest-history13.jpg",
    text: "The Race Beat",
    label: "History",
  },
  {
    src: "https://assets.brightspot.abebooks.a2z.com/dims4/default/1ef3609/2147483647/strip/true/crop/198x300+0+0/resize/396x600!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2Fb1%2Fcc%2F399028ce47a79103988566ae85b6%2Fbest-history12.jpg",
    text: "Churchill",
    label: "History",
  },
  {
    src: "https://assets.brightspot.abebooks.a2z.com/dims4/default/6030c55/2147483647/strip/true/crop/197x300+0+0/resize/394x600!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F7a%2F5c%2Fd24fe0f044ebb471a1b08b1c646d%2Fbest-history25.jpg",
    text: "Embracing Defeat",
    label: "History",
  },
];

function HistoryCards() {
  //For the cards through out the app
  const sevenBooks = historyBooks.slice(0, 7);

  return (
    <CategoryLayout title="HISTORY" items={sevenBooks} category="History" />
  );
}

function PageHistory() {
  const booksInGroupsOfSeven = chunkArray(historyBooks, 7);

  return (
    <div>
      {booksInGroupsOfSeven.map((group, index) => (
        <CategoryLayout
          key={index}
          title={index === 0 && "HISTORY"} // Display title only for the first group
          items={group}
          category="History"
        />
      ))}
    </div>
  );
}

function ArrayCount() {
  return historyBooks.length;
}
function getHistoryArray() {
  return historyBooks;
}
export function setHistoryArray(updatedArray) {
  historyBooks.length = 0; // Clear the existing array
  historyBooks.push(...updatedArray); // Push the new items into the array
}

export { HistoryCards, PageHistory, ArrayCount ,getHistoryArray};

export default HistoryCards;
