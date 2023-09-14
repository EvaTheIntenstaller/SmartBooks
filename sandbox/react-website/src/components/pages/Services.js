import "../../App.css";
import React, { useState } from "react";
import "../Styling/Services.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
//import BestSellingBooks from "./BestSelling";
import CrimeCards from "./Crime";
//import MysteryCards from "./Genres/Mystery";
import MysteryBooks from "./Mystery";
import BiographyCards from "./Biography";
import AdventureCards from "./Adventure";
import HorrorCards from "./Horror";
import HistoryCards from "./History";
import FictionCards from "./Fiction";
//import YoungAdultCards from "./YoungAdult";
import ScieFictionCards from "./ScieFiction";

const books = [
  { id: 1, CrimeCards },
  { MysteryBooks },
  { BiographyCards },
  { AdventureCards },
  { HorrorCards },
  { HistoryCards },
  { FictionCards },
  { ScieFictionCards },
];

function Services() {
  return (
    <div>
      <p>DESCRIPTION PAGE</p>

      {books.map((book) => (
        //<li key={book.id}>
        <Link to={`/description/${book.id}`}>{book.title}</Link>
        // </li>
      ))}
    </div>
  );
}

export default Services;
