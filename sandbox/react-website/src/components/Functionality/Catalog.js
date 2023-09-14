import React from "react";
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

function Catalog() {
  return (
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
  );
}

export default Catalog;

// *** ProductCard.js ***
