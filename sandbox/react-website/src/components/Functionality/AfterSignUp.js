import React from "react";
// import "../Styling/Navbar.css";
// import "../Styling/aftersignupsearcbar.css";
// import "../Styling/Footer.css";
// import "../Styling/SignInData.css";
import "../Styling/AfterSignUp.css";
//const [selectedOption, setSelectedOption] = useState('');

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
function chunkArray(array, size) {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
}

function AfterSignUp() {
  return (
    <div className="BigGuy">
      <form>
        <div className="search-bar">
          <input
            className="footer-input"
            name="search"
            type="text"
            placeholder="Search Book"
          />
        </div>
      </form>
      <div className="seemore__dropdown">
        {/* <label for="dropdown">SEE MORE</label> */}
        <select
          id="dropdown"
          name="links"
          size="1"
          onchange="window.location.href=this.value;"
          //  value={selectedOption}
          //   onChange={handleDropdownChange}
        >
          <option value="SEE MORE">
            <h1 className="seemoresize"> SEE MORE </h1>
          </option>
          <option value="Fantasy" target="_blank">
            FANTASY
          </option>
          <option value="CrimeCards" target="_blank">
            CRIME
          </option>
          <option value="Fiction" target="_blank">
            FICTION
          </option>
          <option value="NonFiction" target="_blank">
            NON-FICTION
          </option>
          <option value="Romance" target="_blank">
            ROMANCE
          </option>
          <option value="SCIENCE FICTION" target="_blank">
            SCIENCE FICTION
          </option>
          <option value="History" target="_blank">
            History
          </option>
          <option value="Poetry" target="_blank">
            POETRY
          </option>
          <option value="YOUNG ADULT" target="_blank">
            YOUNG ADULT
          </option>
        </select>
      </div>
      <>
        <BestSellingCards />
        <MysteryCards />
        <CrimeCards />
        <BiographyCards />
        <AdventureCards />
        <HorrorCards />
        <HistoryCards />
        <FictionCards />
        <YoungAdultCards />
        <ScieFictionCards />
      </>
      ;
    </div>
  );
}

export {
  // Catalog,
  AfterSignUp,
  BestSellingCards,
  chunkArray,
  // getBestSellingArray,
  //setBestSellingArray,
};
export default AfterSignUp;
