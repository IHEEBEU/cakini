import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const ProductItem = ({ product, onItemClick }) => {
  const [isPopUpOpen, setIsPopUpOpen] = React.useState(false);

  const togglePopUp = () => {
    setIsPopUpOpen(!isPopUpOpen);
  };

  return (
    <div className="col-md-3 col-sm-6">
      <div className="product-grid3">
        <div className="product-image3">
          <a href="#">
            <img className="pic-2" src={product.image} alt={product.title} />
            <img className="pic-1" src={product.image} alt={product.title} />
          </a>
          <ul className="social">
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  togglePopUp();
                }}
              >
                <i className="fa fa-eye"></i>
              </a>
            </li>
            <li>
              <a href="#" onClick={() => onItemClick(product)}> {/* Pass the product when the cart icon is clicked */}
                <i className="fa fa-shopping-cart"></i>
              </a>
            </li>
          </ul>
          <span className="product-new-label">New</span>
        </div>
        <div className="product-content">
          <h3 className="title">
            <a href="#">{`${product.name}`}</a>
          </h3>
          <div className="price">{`$${product.price}`}</div>
          <ul className="rating">
            {Array.from({ length: 5 }, (_, i) => (
              <li
                key={i}
                className={`fa fa-star${
                  i >= product.rating ? " enable" : ""
                }`}
              ></li>
            ))}
          </ul>
        </div>
      </div>

      {isPopUpOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="popup-close" onClick={togglePopUp}>
              &times;
            </span>
            <img className="pop-img" src={product.image} alt={product.title} />
            <div>
              <div className="product-grid3">
                <div className="product-content" id="product-content">
                  <h3 className="title">
                    <a href="#">{`${product.name}`}</a>
                    <hr />
                  </h3>
                  <div className="price">{`$${product.price}`}</div> <hr />
                  <span>{product.description}</span> <hr />
                
              <a href="#" onClick={() => onItemClick(product)}> {/* Pass the product when the cart icon is clicked */}
                <i className="fa fa-shopping-cart" id="shop-cartt"></i>
              </a>
          
                  <ul className="rating">
                    {Array.from({ length: 5 }, (_, i) => (
                      <li
                        key={i}
                        className={`fa fa-star${
                          i >= product.rating ? " enable" : ""
                        }`}
                      ></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const MenuandPricing = () => {
  const [birthday, setBirthday] = useState([]);
  const [wedding, setWedding] = useState([]);
  const [party, setParty] = useState([]);
  const [clickedItem, setClickedItem] = useState(null);
  const [cartMessage, setCartMessage] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const birthdayResponse = await axios.get(
          "https://deployingbec.vercel.app/products/category/Birthday"
        );
        const weddingResponse = await axios.get(
          "https://deployingbec.vercel.app/products/category/Wedding"
        );
        const partyResponse = await axios.get(
          "https://deployingbec.vercel.app/products/category/Party"
        );

        setBirthday(birthdayResponse.data);
        setWedding(weddingResponse.data);
        setParty(partyResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleItemClick = (item) => {
    setClickedItem(item);
    setCartMessage("You just added an item to the cart")
    setTimeout(() => {
      setCartMessage("");
    }, 3000);
  };
  
  return (
    <>
      <Sidebar clickedItem={clickedItem} />
      <div className="products-wrapper" style={{ marginTop: "90px" }}>
        <div className="row">
          {birthday.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onItemClick={handleItemClick}
            />
          ))}
          {wedding.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onItemClick={handleItemClick}
            />
          ))}
          {party.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onItemClick={handleItemClick}
            />
          ))}
        </div>
      </div>
      {cartMessage && (
        <div className="centered-container" >
          <div className="alert alert-info" id="alertt" role="alert">
            {cartMessage}
          </div>
        </div>
      )}
    </>
  );
};

export default MenuandPricing;
