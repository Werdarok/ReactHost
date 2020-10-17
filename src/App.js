import React from 'react';
import './App.css';
import { TestComponent } from './components'
import { Button, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link, HashRouter, NavLink, MemoryRouter  } from "react-router-dom";
import Galeria from "./Galeria"
import logo from './images/logo.png'

function App() {
  return (
      <div>
        <HashRouter>
             <div>
             </div>
             <div className="content">
               <Route exact path="/Galeria" component={Galeria}/>
               <Route exact path="/" component={Home}/>
             </div>
          </HashRouter>
      </div>
  );
}
const Home = () => (
  <div className="mainPage">
          <nav className="navbar bar">
            <NavLink to="/Galeria"> 
               <a className="navButton">
                 Galeria
               </a>
            </NavLink>
          </nav>
     <MemoryRouter>
        <Container fluid={true}>
        <Row noGutters={true}>
          <div className="mainPageBackground">
            <div class="col-sm-12">
                <div class="logo">
                  <a href="https://eune.leagueoflegends.com/pl-pl/"><img src={logo} class="img-fluid"/></a>
                </div>
            </div>
          </div>
        </Row>
        </Container>
        <Row noGutters={true}>
            <div class="col-sm-12 bar">
            This website include most of the images copyrighted to Riot Games Inc. Riot-owned images outside of this category are still used under fair-use policy.
            </div>
        </Row>
      </MemoryRouter>
  </div>
);

export default App;
