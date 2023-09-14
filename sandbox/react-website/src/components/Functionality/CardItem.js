import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <div>
              <img
                src={props.src}
                alt="Recommended Images"
                className="cards__item__img"
              />
            </div>
            {/* First Label */}
            <p className="cards__item__label">{props.label}</p>
            {/* Second Label (Price) */}
          </figure>

          <div>
            <div className="cards__item__info">
              <h5 className="cards__item__text">{props.text}</h5>
            </div>
          </div>

          {/* I Ashu Added this dividor for the prices now just have to allign them */}
          <div>
            <p className="cards__item__label">${props.price}</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
