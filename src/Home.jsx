/** @format */

import React from "react";
import Offcanvas from "./components/home/Offcanvas";
import Search from "./components/home/Search";
import Cursor from "./components/Cursor";
import Main from "./components/home/Main";

function Home() {
  return (
    <>
      <Offcanvas />
      <Search />
      <Main />
      <Cursor />
    </>
  );
}

export default Home;
