import { Link, NavLink, useLocation, useNavigate, useSearchParams } from "react-router-dom";
// import User from "../Login/User";
import React, { useEffect, useRef } from "react";
import {GiHamburgerMenu} from "react-icons/gi"
import { useSelector } from "react-redux";
import User from "./User";
import {BsCartFill} from "react-icons/bs"

export default function Navbar() {
  const [currentTheme, setCurrentTheme] = React.useState("dark");
  const themeButtonRef = useRef(null);
  const darkTheme = "dark-theme";
  const iconTheme = "ri-sun-line";
  const navigate = useNavigate();

  const selectedTheme = localStorage.getItem("selected-theme");
  const selectedIcon = localStorage.getItem("selected-icon");

  const [currentIcon, setCurrentIcon] = React.useState(getCurrentIcon());


  const isAuth = useSelector((state)=>state.authReducer.isAuth);
  console.log(isAuth)



  useEffect(() => {
    if (selectedTheme) {
      setCurrentTheme(selectedTheme);
      setCurrentIcon(selectedIcon);
    }
  }, []);

  function getCurrentTheme() {
    return currentTheme === "dark" ? "dark" : "light";
  }

  function getCurrentIcon() {
    return themeButtonRef.current &&
      themeButtonRef.current.classList.contains(iconTheme)
      ? "ri-moon-line"
      : "ri-sun-line";
  }

  function toggleTheme() {
    document.body.classList.toggle(darkTheme);
    themeButtonRef.current.classList.toggle(iconTheme);
    setCurrentTheme(getCurrentTheme());
    setCurrentIcon(getCurrentIcon());
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  }

  const handleTop = () => {
    window.scrollTo(0, 0);
  };

  const handleLoginNavigation = () => {
navigate("")
  }

  const handleCartNavigation = () => {
    navigate("")
  }
const location = useLocation();
console.log(location.pathname)
  return (

    //     <div >



<div style={{ display: location.pathname === "/admin" || location.pathname.startsWith("/adminEditProduct/") ? "none" : "visible" }}>

      <nav className="navbar navbar-expand-lg sticky-top whiteBg"  >
        <div className="container text-black text-center text-md-start ">
          <Link
            onClick={handleTop}
            className="navbar-brand fw-bolder fs-2 nav__link"
            to="/"
          >
            <i className="ri-leaf-line nav__logo-icon"></i> Gardenium
          </Link>
          <div className="nav__btns d-lg-none"  style={{position:"relative",right:"-45px"}}>
            {/* Theme change button */}
            <i
              className={`ri-moon-line change-theme ${currentIcon}`}
              id="theme-button"
              ref={themeButtonRef}
              onClick={toggleTheme}
            ></i>
          </div>
          <button
           style={{position:"relative"}}
            className="border-0 d-lg-none bg-transparent pe-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon"></span> */}
            {/* <HamburgerIcon /> */}
            {/* <GiHamburgerMenu /> */}
            <GiHamburgerMenu className="fs-1 " style={{color:"rgb(62,101,83)"}}/>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ps-4 ps-lg-0 text-uppercase">
              <li className="nav-item">
                <NavLink
                  onClick={handleTop}
                  className="nav-link fw-bold nav__link"
                  aria-current="page"
                  to="/"
                >
                  home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={handleTop}
                  className="nav-link fw-bold nav__link"
                  to="/products"
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={handleTop}
                  className="nav-link fw-bold nav__link"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={handleTop}
                  className="nav-link nav__link fw-bold "
                  to="/contact"
                >
                  Order
                </NavLink>
              </li>
            </ul>
            <div className="d-flex flex-column flex-lg-row">

        { isAuth? <User/> :   <a onClick={handleLoginNavigation} style={{cursor:"pointer"}} className=" fw-bold nav__link px-4 m-3 m-lg-0 mx-lg-3" to="/login">Login</a>}

        {isAuth?<a onClick={handleCartNavigation} className="nav__link mt-1 me-3"><BsCartFill className="fs-3" style={{cursor:"pointer",color:"rgb(62,101,83)"}} /></a>:null}
              
              <div className="nav__btns d-none d-lg-flex">
                {/* Theme change button */}
                <i
                  className={`ri-moon-line change-theme ${currentIcon}`}
                  id="theme-button"
                  ref={themeButtonRef}
                  onClick={toggleTheme}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
