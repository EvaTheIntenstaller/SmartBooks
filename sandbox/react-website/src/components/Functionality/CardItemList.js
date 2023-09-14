import CardItem from "./CardItem";
import "../Styling/Catalog.css";

function CardItemList({ items }) {
  return (
    <div>
      <ul className="cards__items">
        {items.map((item, index) => (
          <CardItem
            key={index}
            src={item.src}
            text={item.text}
            price={item.price} // Make sure to include this line
            label={item.label}
            //
            //VERY VERY IMPORTANT TO DIRECT BOOK TO RESPECTIVE DESCRIPTION PAGE WHEN BOOK IS CLICKED
            path="/Services"
          />
        ))}
      </ul>
      {/* <ShoppingCart cartItems={cartItems} /> */}
    </div>
  );
}

export default CardItemList;
