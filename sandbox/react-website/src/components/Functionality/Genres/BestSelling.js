import CategoryLayout from "../CategoryLayout";

export const bestSellingBooks = [
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/download%20(2).jpg?raw=true",
    text: "The sun is also a star",
    label: "Novel",
  },
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/download%20(1).jpg?raw=true",
    text: "Hunger Games",
    label: "Adventure",
  },

  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/download%20(3).jpg?raw=true",
    text: "The hate you gave us",
    label: "Non-Fiction",
  },

  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/download%20(4).jpg?raw=true",
    text: "Titanium Noir",
    label: "Fiction",
  },
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/download%20(5).jpg?raw=true",
    text: "If I never met you",
    label: "Romance",
  },
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/download%20(6).jpg?raw=true",
    text: "Game of Thrones",
    label: "Adventure",
  },
  {
    src: "https://github.com/EvaTheIntenstaller/GroupPG/blob/main/download.jpg?raw=true",
    text: "Lord of the Rings",
    label: "Adventure",
  },
  //////////////////////
  {
    src: "https://thenational-the-national-prod.cdn.arcpublishing.com/resizer/cM-QxVEndybiiXmT3VEy4A819HY=/800x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/thenational/AVXJO47DXDANVHVWAAHEF5QBVE.jpg",
    text: "Don Quixote",
    label: "Classic",
  },
  {
    src: "https://thenational-the-national-prod.cdn.arcpublishing.com/resizer/w3ZqQJrxLHrfm7p2XuN2sYNxoQI=/800x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/thenational/XPIVDW36UXEZ4QRU7B4V43SPFM.jpg",
    text: "A tale of two cities",
    label: "History",
  },
  {
    src: "https://prodimage.images-bn.com/pimages/9781250301703_p0_v5_s192x300.jpg",
    text: "The silent patient",
    label: "Mystery",
  },
  {
    src: "https://images-na.ssl-images-amazon.com/images/I/41TFFNLibqL._AC_SX368_.jpg",
    text: "Happy Place",
    label: "Fiction",
  },
  {
    src: "https://www.southernliving.com/thmb/boSMe1SkKj7Q2HLG3zKGsOS2qk0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/henry-book-lovers-2000-6ac6944987ad4e7abef8ea51fb399afd.jpg",
    text: "Book Lovers",
    label: "Romance",
  },
  {
    src: "https://readinglist.click/wp-content/uploads/2019/06/gangster-state-194x300.jpg",
    text: "Gangster State",
    label: "Crime",
  },
  {
    src: "https://www.sylviaday.com/WP/wp-content/uploads/2016/04/SoClose_DAY-USA-300x450.jpg",
    text: "Thriller",
    label: "Adventure",
  },
  {
    src: "https://images.penguinrandomhouse.com/cover/9781984859259",
    text: "The rise of the Dragon",
    label: "Mystery",
  },
  {
    src: "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2023_17/3526507/51zvlazs-sl-sl500--61c36f46d60ac.jpg",
    text: "We begin at the end",
    label: "Mystery",
  },
  {
    src: "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2023_17/3526512/41ebrodwo3l-sl500--61c371f9ce303.jpg",
    text: "The code breaker",
    label: "Non Fiction",
  },
  {
    src: "https://res.cloudinary.com/cognitives-s3/image/upload/c_limit,dpr_auto,f_auto,fl_lossy,q_auto,w_750/v1/cog-aap/n/303/2022/Oct/06/b3YzGYUDsdrt3aHV5jw9.jpg",
    text: "The doctor's wife",
    label: "Fiction",
  },
  {
    src: "https://images2.penguinrandomhouse.com/cover/9780593158371",
    text: "The golden enclaves",
    label: "Fiction",
  },
  {
    src: "https://m.media-amazon.com/images/I/41o5B3nR1gL._SL500_.jpg",
    text: "Breath",
    label: "Self-Help",
  },
  {
    src: "https://thenational-the-national-prod.cdn.arcpublishing.com/resizer/dZuwVTRLAyuq2dv5trrijB07-IU=/800x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/thenational/F5I7NV2ZLDK7Z6WKKB3N3M2XKU.jpg",
    text: "The Hobbit",
    label: "Fiction",
  },
  {
    src: "https://www.elizabethgilbert.com/wp-content/uploads/2023/06/city-of-girls-cover-small.jpg",
    text: "City Of girls",
    label: "Romance",
  },
];

function BestSellingCards() {
  //For the cards through out the app
  const sevenBooks = bestSellingBooks.slice(0, 7);

  return (
    <CategoryLayout
      title="BEST SELLING BOOKS"
      items={sevenBooks}
      category="Best Selling Books"
    />
  );
}
function getBestSellingArray() {
  return bestSellingBooks;
}
export function setBestSellingArray(updatedArray) {
  bestSellingBooks.length = 0; // Clear the existing array
  bestSellingBooks.push(...updatedArray); // Push the new items into the array
}
export { BestSellingCards, getBestSellingArray };
export default BestSellingCards;
