import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Concerts from "./components/Concerts";
import Sports from "./components/Sports";
import ArtsThearter from "./components/Arts&Theater";
import Family from "./components/Family";
import BuyTickets from "./components/BuyTickets";
import Context from "./components/Context";
import SearchContent from "./components/SearchContent";
// import ToTop from "./components/ToTop";

function App() {
  const [nav, setNav] = useState(false);
  const [showRes, setShowRes] = useState(false);
  const [searchBarVal, setSearchBarVal] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <Context.Provider
          value={{
            display: nav,
            setDisplay: setNav,
            res: showRes,
            setRes: setShowRes,
            searchBarVal: searchBarVal,
            setSearchBarVal: setSearchBarVal
          }}
        >
          <Route path="*" component={Navbar} />
          <Route path="/" exact component={Home} />
          <Route path="/Concerts" component={Concerts} />
          <Route path="/Sports" component={Sports} />
          <Route path="/Arts&theater" component={ArtsThearter} />
          <Route path="/Family" component={Family} />
          <Route path="/buy/:id" component={BuyTickets} />
          <Route path="/results/:name" component={SearchContent} />
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
