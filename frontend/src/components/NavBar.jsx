import { useState, useEffect, useRef } from "react";
import { BiChevronDown } from "react-icons/bi";
import { SlEnvolopeLetter } from "react-icons/sl";
import { HiMenuAlt3 } from "react-icons/hi";
import imgBergerie from "../assets/img/img-bergerie/bergerie-1.jpg";
import imgMoulin from "../assets/img/img-moulin/moulin-1.jpg";
import logo from "../assets/img/logo-moulin-casta.png";

import { outsideClick } from "./OutsideClickFunction";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef();
  outsideClick(dropdownRef, setDropdown);
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setDropdown(false);
        setShow(false);
      } else {
        setDropdown(false);
        setShow(true);
      }

      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div ref={dropdownRef}>
      <nav className={show ? "nav-active" : "hidden"}>
        <NavLink to="/">
          <img className="logo" src={logo} alt="logo-moulin-casta" />
        </NavLink>
        <input
          className="hamburger-menu"
          type="checkbox"
          style={{ display: "none" }}
        />
        <ul className="menu">
          <div className="dropdown-container">
            <div
              className="accomodations-menu"
              onClick={() => {
                setDropdown(!dropdown);
              }}
            >
              <HiMenuAlt3 />
              <li className="accomodations-navbar">Nos logements</li>
            </div>
          </div>
          <NavLink to="/contact">
            <SlEnvolopeLetter class="contact-navbar-icon" />
            <li class="contact-navbar">Nous contacter</li>
          </NavLink>
        </ul>
      </nav>
      {dropdown && (
        <div className="dropdown">
          <div className="dropdown-first-container">
            <NavLink to="/accomodation-2" className="dropdown-element">
              <img
                className=" img-dropdown skeleton"
                src={imgBergerie}
                alt=""
              />
              <div className="dropdown-element-text">
                <h3>La Bergerie</h3>
                <p>à partir de 95€ par nuit</p>
              </div>
            </NavLink>
            <NavLink to="/accomodation-1" className="dropdown-element">
              <img className=" img-dropdown skeleton" src={imgMoulin} alt="" />
              <div className="dropdown-element-text">
                <h3>Le Moulin</h3>
                <p>à partir de 410€ par nuit</p>
              </div>
            </NavLink>
          </div>
          <div className="dropdown-second-container">
            <p>
              Les logements ne sont jamais loués en même temps pour vous
              garantir une tranquilité absolue lors de votre séjour.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
