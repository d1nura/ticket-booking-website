import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import logo from "../logo/tic.svg";
import logoB from "../logo/logoBlue.svg";
import "../scss/navbar.scss";
import search from "../logo/search.svg";
import searchB from "../logo/searchB.svg";
import Context from "./Context";
import SearchResults from "./SearchResults";
import ToTop from "./ToTop";
import menu from "../logo/menu.svg";
import searcher from "../logo/searcher.svg";
import closeBtn from "../logo/cancel2.svg";

function Navbar() {
  const context = useContext(Context);

  const [nav, setNav] = useState(false);
  const [name, setName] = useState("");
  const [navClr, setNavClr] = useState(false);
  const [navHide, setNavHide] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [removeResults, setRemvoeResults] = useState(false);
  const [showScreen, setShowScreen] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [navTitle, setNavTitle] = useState(false);
  const [homeNav, setHomeNav] = useState(false);
  const [change, setChange] = useState(false);
  const [full, setFull] = useState(false);

  useEffect(() => {
    if (window.location.pathname !== "") {
      setNav(true);
      setNavHide(false);
      setName(
        [...window.location.pathname].slice(1, window.location.pathname.length)
      );
    }
    if (window.location.pathname === "/") {
      setNav(false);
    }
    if (window.location.pathname === "/results") {
      setShowResults(false);
      setNavTitle(true);
    }
    if (window.location.pathname !== "/results") {
      setNavTitle(false);
    }
    // setShowResults(false);
    setNavHide(context.display);
    document.onclick = e => {
      if (e.target.id === "searchP" || e.target.id === "searchM") {
        setRemvoeResults(false);
      } else {
        setRemvoeResults(true);
      }
    };
  }, [context.display, showResults, name, navTitle, context.searchBarVal]);

  window.onscroll = () => {
    if (window.pageYOffset >= 10) {
      setNavClr(true);
      setHomeNav(true);
    } else {
      setNavClr(false);
      setHomeNav(false);
    }
  };

  const changeHome = () => {
    setNav(false);
  };
  const changeSearch = e => {
    setNav(true);
    console.log(showResults);
    setName(e.target.innerText);
  };

  const searchValChange = e => {
    setSearchVal(e.target.value);
    if (e.target.value !== "" && e.key === "Enter") {
      setShowResults(true);
      setNavTitle(true);
      context.setSearchBarVal(searchVal);
      e.target.value = "";
      console.log(context.searchBarVal);
    }
  };
  const switchScreen = () => {
    setShowScreen(true);
  };
  const removeScreen = () => {
    setShowScreen(false);
  };
  const changeMenu = () => {
    change ? setChange(false) : setChange(true);
    console.log(change);
  };
  const changeSearchFull = () => {
    full ? setFull(false) : setFull(true);
  };

  return (
    <React.Fragment>
      <ToTop />
      {showResults ? <Redirect to="/results" push /> : ""}
      <div
        id="screen"
        onClick={removeScreen}
        style={showScreen ? { display: "block" } : {}}
      />
      <nav
        className="navbar"
        style={nav ? { height: 35 + "vh" } : {}}
        id={navHide ? "hideNav" : ""}
      >
        <div id="nav-group" className={navClr ? "turnWhite" : ""}>
          <div id="navSearch">
            <Link id="logoA" to="/" onClick={changeHome}>
              <img id="logo" alt="logo" src={logo} />
              <img
                id="logoB"
                alt="logoB"
                src={logoB}
                style={navClr ? { opacity: 1 } : {}}
              />
            </Link>
          </div>
          <div id="navLinks" style={change ? { height: 90 + "vh" } : {}}>
            <Link onClick={changeSearch} to="/Concerts">
              Concerts
            </Link>
            <Link onClick={changeSearch} to="/Arts&theater">
              Arts & Theater
            </Link>
            <Link onClick={changeSearch} to="/Sports">
              Sports
            </Link>
            <Link onClick={changeSearch} to="/Family">
              Family
            </Link>
          </div>
          <div id="menuGroup">
            <img
              src={searcher}
              onClick={changeSearchFull}
              id="searchIcon"
              alt="search"
            />
            <img
              src={menu}
              onClick={changeMenu}
              id="menuIcon"
              alt="menu"
              style={change ? { display: "none" } : {}}
            />
            <img
              src={closeBtn}
              onClick={changeMenu}
              id="closeIcon"
              alt="close"
              style={change ? { display: "block" } : {}}
            />
          </div>
        </div>

        <div
          className={nav || homeNav ? "searchBarSmall" : "searchBar"}
          id={navClr ? "navClr" : ""}
          onClick={switchScreen}
          style={full ? { display: "block" } : {}}
        >
          <img
            alt="search"
            src={search}
            id="searchIcon"
            style={navClr ? { display: "none" } : {}}
          />
          <img
            id="searchB"
            alt="search"
            src={searchB}
            style={navClr ? { display: "block" } : {}}
          />
          <input
            id="searchM"
            onKeyUp={searchValChange}
            type="text"
            autoComplete="off"
            placeholder="Find millions of live experience"
          />

          <SearchResults
            name={searchVal}
            nav={nav}
            homeNav={homeNav}
            removeResults={removeResults}
          />
          <p
            id="cancelP"
            onClick={changeSearchFull}
            style={!full ? { display: "none" } : {}}
          >
            Cancel
          </p>
        </div>
        <div className="navDetails" style={nav ? { display: "block" } : {}}>
          <div id="navDetailContent">
            <p>
              <Link to="/" onClick={changeHome}>
                Home
              </Link>
              <span id="slash">/</span>
              {name}
            </p>
            <h1>
              <span>{name}</span>
              Tickets
            </h1>
          </div>
          <div
            className="searchResultTitle"
            style={navTitle ? { display: "block" } : {}}
          >
            <h1>
              Search results for <b>"{context.searchBarVal}"</b>
            </h1>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
