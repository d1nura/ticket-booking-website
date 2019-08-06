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
import menuB from "../logo/menuB.svg";
import searcher from "../logo/searcher.svg";
import searcherB from "../logo/searcherB.svg";
import closeBtn from "../logo/cancel2.svg";
import closeBtnB from "../logo/cancel3.svg";

function Navbar({ match }) {
  const context = useContext(Context);

  const [nav, setNav] = useState(false);
  const [name, setName] = useState("");
  const [navClr, setNavClr] = useState(false);
  const [navHide, setNavHide] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [removeResults, setRemoveResults] = useState(false);
  const [showScreen, setShowScreen] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [navTitle, setNavTitle] = useState(false);
  const [homeNav, setHomeNav] = useState(false);
  const [change, setChange] = useState(false);
  const [full, setFull] = useState(false);
  const [changeB, setChangeB] = useState(true);

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
      setNavTitle(false);
    }

    if (match.params[0].split("/")[1] === "results") {
      setNavTitle(true);
    } else {
      setNavTitle(false);
    }

    setNavHide(context.display);
    document.onclick = e => {
      if (e.target.id === "searchP" || e.target.id === "searchM") {
        setRemoveResults(false);
      } else {
        setRemoveResults(true);
      }
    };
  }, [
    context.display,
    showResults,
    navTitle,
    context.searchBarVal,
    match.params
  ]);

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
    setChange(false);
  };
  const changeSearch = e => {
    setNav(true);
    console.log(showResults);
    setName(e.target.innerText);
    setChange(false);
  };

  const searchValChange = e => {
    setTimeout(setSearchVal(e.target.value), 1000);

    if (e.target.value !== "" && e.key === "Enter") {
      setShowResults(true);
      setNavTitle(true);
      setRemoveResults(true);
      setShowScreen(false);
      context.setSearchBarVal(searchVal);
      e.target.value = "";
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
    setChangeB(true);
  };
  const changeMenuB = () => {
    change ? setChange(false) : setChange(true);
    // changeB ? setChangeB(false) : setChangeB(true);
    setChangeB(false);
  };

  const changeSearchFull = () => {
    full ? setFull(false) : setFull(true);
  };

  return (
    <React.Fragment>
      <ToTop />
      {showResults ? (
        <Redirect to={`/results/${context.searchBarVal}`} push />
      ) : (
        ""
      )}
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
              style={!nav ? { display: "none" } : {}}
            />
            <img
              src={searcherB}
              onClick={changeSearchFull}
              id="searchIcon"
              alt="search"
              style={navClr ? { display: "block" } : { display: "none" }}
            />
            <img
              src={menu}
              onClick={changeMenu}
              id="menuIcon"
              alt="menu"
              style={change ? { display: "none" } : {}}
            />
            <img
              src={menuB}
              onClick={changeMenuB}
              id="menuIcon"
              alt="menu"
              style={
                navClr && changeB ? { display: "block" } : { display: "none" }
              }
            />
            <img
              src={closeBtn}
              onClick={changeMenu}
              id="closeIcon"
              alt="close"
              style={change ? { display: "block" } : {}}
            />
            <img
              src={closeBtnB}
              onClick={changeMenu}
              id="closeIcon"
              alt="close"
              style={navClr && !changeB ? { display: "block" } : {}}
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

          {searchVal !== "" ? (
            <SearchResults
              name={searchVal}
              nav={nav}
              homeNav={homeNav}
              removeResults={removeResults}
            />
          ) : (
            ""
          )}
          <p
            id="cancelP"
            onClick={changeSearchFull}
            style={!full ? { display: "none" } : {}}
          >
            Cancel
          </p>
        </div>
        <div className="navDetails" style={nav ? { display: "block" } : {}}>
          <div
            id="navDetailContent"
            style={navTitle ? { display: "none" } : {}}
          >
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
              Search results for <b>"{match.params[0].split("/")[2]}"</b>
            </h1>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
