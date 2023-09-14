import React from "react";
import CardItemList from "./CardItemList"; // Assuming you have a CardItemList component
import PropTypes from "prop-types";

import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

//function CategoryLayout({ title, items, category, price }) {

function CategoryLayout({ title, items, category, price, onItemClick }) {
  const navigate = useNavigate(); // Access the navigate function
  const handleTitleClick = (title) => {
    // Perform navigation logic here using the navigate function
    // For example, navigate to "/services"

    const lowerCase = title.toLowerCase();
    console.log(lowerCase);
    if (lowerCase !== "science fiction" || lowerCase !== "young adult") {
      navigate("/" + lowerCase);
    }
    if (lowerCase === "science fiction") {
      navigate("/sciefiction");
    }
    if (lowerCase === "young adult") {
      navigate("/youngadult");
    }
  };
  return (
    <div className="cards">
      <div className="title__pointer">
        <h1 onClick={() => handleTitleClick(title)}>{title}</h1>
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <CardItemList items={items} category={category} price={price} />
        </div>
      </div>
    </div>
  );
}

CategoryLayout.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default CategoryLayout;
