

import React from "react";
import Pages from "./pages/Pages";
import Catagory from "./components/Catagory";
import Search from "./components/Search";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import styled from "styled-components";


const App=()=>{
  return(
    <div className="App">
      <Router>
        <Nav>
          <Logo to={"/"}>
          <GiKnifeFork />
          Master Chef
          </Logo>
        </Nav>
      <Search />
      <Catagory />
      <Pages />
      </Router>
    </div>
  )
}

const Logo=styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight:400;
  font-family:'Lobster two',cursive;
`

const Nav=styled.div`
    padding:1rem 0rem;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    
    svg{
      font-size:2rem;
    }
`

export default App;