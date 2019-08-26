import React from "react";
import { Link } from "react-router-dom";

function NavLinks() {
  const changeSearch = e => {
    setNav(true);
    setName(e.target.innerText);
  };
  return (
    <div id="navLinks">
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
  );
}

export default NavLinks;
