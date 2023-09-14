import React, { useNavigate } from "react";
import "../Styling/Navbar.css";
import "../Styling/aftersignupsearcbar.css";
import "../Styling/Footer.css";
import "../Styling/SignInData.css";
//const [selectedOption, setSelectedOption] = useState('');
import CardItemList from "./CardItemList"; // Assuming you have a CardItemList component
import PropTypes from "prop-types";

//import React from "react";
import BestSellingCards from "./Genres/BestSelling";
import CrimeCards from "./Genres/Crime";
import MysteryCards from "./Genres/Mystery";
import BiographyCards from "./Genres/Biography";
import AdventureCards from "./Genres/Adventure";
import HorrorCards from "./Genres/Horror";
import HistoryCards from "./Genres/History";
import { FictionCards } from "./Genres/Fiction";
import YoungAdultCards from "./Genres/YoungAdult";
import ScieFictionCards from "./Genres/ScieFiction";

import "../Styling/Catalog.css";
// function chunkArray(array, size) {
//   const chunkedArray = [];
//   for (let i = 0; i < array.length; i += size) {
//     chunkedArray.push(array.slice(i, i + size));
//   }
//   return chunkedArray;
// }

function AfterSignInn() {
  //   return (
  //     <div className="BigGuy">
  //       <div className="backgd">
  //         <label for="dropdown">SEE MORE</label>
  //         <select
  //           id="dropdown"
  //           name="links"
  //           size="1"
  //           onchange="window.location.href=this.value;"
  //           //  value={selectedOption}
  //           //   onChange={handleDropdownChange}
  //         >
  //           <option value="SEE MORE">SEE MORE</option>
  //           <option value="Fantasy" target="_blank">
  //             FANTASY
  //           </option>
  //           <option value="CrimeCards" target="_blank">
  //             CRIME
  //           </option>
  //           <option value="Fiction" target="_blank">
  //             FICTION
  //           </option>
  //           <option value="NonFiction" target="_blank">
  //             NON-FICTION
  //           </option>
  //           <option value="Romance" target="_blank">
  //             ROMANCE
  //           </option>
  //           <option value="SCIENCE FICTION" target="_blank">
  //             SCIENCE FICTION
  //           </option>
  //           <option value="History" target="_blank">
  //             History
  //           </option>
  //           <option value="Poetry" target="_blank">
  //             POETRY
  //           </option>
  //           <option value="YOUNG ADULT" target="_blank">
  //             YOUNG ADULT
  //           </option>
  //         </select>
  //         <form>
  //           <div>
  //             <input
  //               className="footer-input"
  //               name="search"
  //               type="text"
  //               placeholder="Search Book"
  //             />
  //           </div>
  //         </form>
  //       </div>
  //       <>
  //         <BestSellingCards />
  //         <MysteryCards />
  //         <CrimeCards />
  //         <BiographyCards />
  //         <AdventureCards />
  //         <HorrorCards />
  //         <HistoryCards />
  //         <FictionCards />
  //         <YoungAdultCards />
  //         <ScieFictionCards />
  //       </>
  //       ;
  //     </div>
  //   );
}

// function CategoryLayout({ title, items, category }) {
//   const navigate = useNavigate(); // Access the navigate function
//   const handleTitleClick = (title) => {
//     // Perform navigation logic here using the navigate function
//     // For example, navigate to "/services"

//     const lowerCase = title.toLowerCase();
//     console.log(lowerCase);
//     if (lowerCase !== "science fiction" || lowerCase !== "young adult") {
//       navigate("/" + lowerCase);
//     }
//     if (lowerCase === "science fiction") {
//       navigate("/sciefiction");
//     }
//     if (lowerCase === "young adult") {
//       navigate("/youngadult");
//     }
//   };
//   return (
//     <div className="cards">
//       <div className="title__pointer">
//         <h1 onClick={() => handleTitleClick(title)}>{title}</h1>
//       </div>
//       <div className="cards__container">
//         <div className="cards__wrapper">
//           <CardItemList items={items} category={category} />
//         </div>
//       </div>
//     </div>
//   );
// }

// CategoryLayout.propTypes = {
//   title: PropTypes.string.isRequired,
//   items: PropTypes.array.isRequired,
//   category: PropTypes.string.isRequired,
// };

//export default CategoryLayout;

// export {
//   // Catalog,
//   AfterSignInn,
//   BestSellingCards,
//   chunkArray,
//   CategoryLayout,
//   // getBestSellingArray,
//   //setBestSellingArray,
// };
export default AfterSignInn;
