import Navbar from "./components/Functionality/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import { Routes } from "react-router-dom";
import React from "react";
import Home from "./components/pages/Home";
import SignIn from "./components/pages/SignIn";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import Products from "./components/pages/Products";
import Cart from "./components/pages/Cart";
import Fiction from "./components/pages/Fiction";
import Mystery from "./components/pages/Mystery";
import Horror from "./components/pages/Horror";
import Crime from "./components/pages/Crime";
import ScieFiction from "./components/pages/ScieFiction";
import Biography from "./components/pages/Biography";
import Adventure from "./components/pages/Adventure";
import History from "./components/pages/History";
import YoungAdult from "./components/pages/youngAdult";
import AfterSignInn from "./components/Functionality/AfterSignInn";

import AfterSignUp from "./components/Functionality/AfterSignUp";
import AdminPage from "./components/pages/Admin";

function App() {
  return (
    <>
      <Router>
        <Navbar> </Navbar>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/services" Component={Services} />
          <Route path="/admin" Component={AdminPage} />
          <Route path="/sign-up" Component={SignUp} />
          <Route path="/products" Component={Products} />
          <Route path="/signin" Component={SignIn} />
          <Route path="/Cart" Component={Cart} />
          <Route path="/fiction" Component={Fiction} />
          <Route path="/mystery" Component={Mystery} />

          
          <Route path="/horror" Component={Horror} />
          <Route path="/crime" Component={Crime} />
          <Route path="/sciefiction" Component={ScieFiction} />
          <Route path="/biography" Component={Biography} />
          <Route path="/adventure" Component={Adventure} />
          <Route path="/history" Component={History} />
          <Route path="/youngadult" Component={YoungAdult} />
          <Route path="/AfterSignUp" Component={AfterSignUp} />
          <Route path="/AfterSignInn" Component={AfterSignInn} />

          
        </Routes>
      </Router>
    </>
  );
}

export default App;
