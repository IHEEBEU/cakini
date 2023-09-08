import React, { useState } from "react";
import { FaBirthdayCake } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import axios from "axios";

function Navbar({
  changeRc,
  changehome,
  changemenu,
  changemasterchefs,
  changecontact,
  Searches,
  changesearch,
  changeforums,
}) {
  const [searchText, setSearchText] = useState("");
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleSearch = async () => {
    changesearch();
    try {
      if (searchText.trim() === "") {
        console.error("Search text is empty.");
        return;
      }

      console.log("Fetching all products.");
      const response = await axios.get(`http://127.0.0.1:5000/products`);

      const filteredProducts = response.data.filter((product) => {
        const lowerSearchText = searchText.toLowerCase();
        return (
          product.name.toLowerCase().includes(lowerSearchText) ||
          product.description.toLowerCase().includes(lowerSearchText) ||
          product.price.toLowerCase().includes(lowerSearchText) ||
          product.category.toLowerCase().includes(lowerSearchText)
        );
      });

      Searches(filteredProducts);
      console.log("Filtered products:", filteredProducts);
    } catch (error) {
      console.error("Error fetching products:", error.response);
      Searches([]);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-0">
        <FaBirthdayCake className="logo fs-1 text-lgiht me-3" />
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto mx-lg-auto py-0">
            <a
              href="index.html"
              className={`nav-item nav-link ${
                activeLink === "home" ? "active" : ""
              }`}
              onClick={(event) => {
                event.preventDefault();
                handleLinkClick("home");
                changehome();
              }}
            >
              Home
            </a>
            <a
              href="menu.html"
              className={`nav-item nav-link ${
                activeLink === "menu" ? "active" : ""
              }`}
              onClick={(event) => {
                event.preventDefault();
                handleLinkClick("menu");
                changemenu();
              }}
            >
              Menu & Pricing
            </a>
            <a
              href="#"
              className={`nav-item nav-link ${
                activeLink === "masterchefs" ? "active" : ""
              }`}
              onClick={(event) => {
                event.preventDefault();
                handleLinkClick("masterchefs");
                changemasterchefs();
              }}
            >
              Master Chefs
            </a>
            <a
              href="#"
              className={`nav-item nav-link ${
                activeLink === "contact" ? "active" : ""
              }`}
              onClick={(event) => {
                event.preventDefault();
                handleLinkClick("contact");
                changecontact();
              }}
            >
              Contact Us
            </a>
            <a
              href="menu.html"
              className={`nav-item nav-link ${
                activeLink === "tutorials" ? "active" : ""
              }`}
              onClick={(event) => {
                event.preventDefault();
                handleLinkClick("tutorials");
                changeRc();
              }}
            >
              Tutorials
            </a>
          </div>
          <form className="search-bar" role="search">
            <input
              className="form-control me-2 search-input"
              type="search"
              placeholder="Type something ..."
              aria-label="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="custom-btn"
              type="button"
              onClick={handleSearch}
              style={{ minWidth: "100px" , "padding-bottom": "15px"}}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
