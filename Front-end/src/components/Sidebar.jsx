import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = ({ clickedItem }) => {
	const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);
	const [cartItems, setCartItems] = useState([]); // State to store cart items
	console.log(clickedItem);

	const toggleMenu = (e) => {
		e.preventDefault();
		setIsMenuDisplayed(!isMenuDisplayed);
	};
	useEffect(() => {
		if (clickedItem) {
			// Check if the item is already in cartItems
			const itemAlreadyInCart = cartItems.find(
				(item) => item._id === clickedItem._id,
			);

			if (!itemAlreadyInCart) {
				setCartItems([...cartItems, clickedItem]);
				console.log("this,", cartItems);
			}
		}
	}, [clickedItem]);
	const handleDeleteItem = (index) => {
		const updatedCartItems = [...cartItems];
		updatedCartItems.splice(index, 1); // Remove the item at the specified index
		setCartItems(updatedCartItems);
	};

	return (
		<div id="wrapper" className={isMenuDisplayed ? "menuDisplayed" : ""}>
			{/* Sidebar */}
			<div id="sidebar-wrapper">
			<div>
  {cartItems.length > 0 ? (
    cartItems.map((item, index) => (
      <div key={index} className="container-sidebar">
        <img className="image-sidebar" src={item.image} alt="0" />
        <div className="nameprice">
          <p className="p-sidebar">{item.name}</p>
          <span>${item.price}</span>
        </div>
        <button
          className="delete-buttonnn"
          onClick={() => handleDeleteItem(index)} // Call a function to delete the item
        >
          x
        </button>
      </div>
    ))
  ) : (
    <p className="p-sidebar">You have no items, add some</p>
  )}

  {/* Calculate and display the total price */}
  {cartItems.length > 0 && (
  <div className="total-price">
    <p className="price-siddee">
      Total Price: $
      {cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2)}
    </p>
  </div>
)}
</div>
				{/* here u write what ur side bar show  */}
			</div>

			{/* Page Content */}
			<div id="page-content-wrapper">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-12">
							<a href="#" className="btn" id="menu-toggle" onClick={toggleMenu}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="1em"
									viewBox="0 0 448 512">
									<path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
