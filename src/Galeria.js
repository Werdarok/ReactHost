import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TestComponent } from './components'
import { Button, Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, HashRouter, NavLink, MemoryRouter  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ChampionContainer from "./championContainer"
import Braum from './images/Braum.jpg'
import Cho from './images/Cho.jpg' 
import Heimer from './images/Heimer.jpg'
import Kaisa from './images/Kaisa.jpg'
import Kassadin from './images/Kassadin.jpg'
import Kindred from './images/Kindred.jpg'
import Malzahar from './images/Malzahar.jpg'
import Reksai from './images/Reksai.jpg'
import Sett from './images/Sett.jpg'
import Urgot from './images/Urgot.jpg'
import Velkoz from './images/Velkoz.jpg'
import Xerath_0 from './images/Xerath_0.jpg'



function Galeria() {
  return (
    <div className="mainPage">
          <nav className="navbar bar">
            <NavLink to="/"> 
               <a className="navButton">
                 Main Page
               </a>
            </NavLink>
          </nav>
      <MemoryRouter>
        <Container fluid={true}>
        <Row>
              <ChampionContainer link="https://eune.leagueoflegends.com/pl-pl/champions/braum/" image={Braum} name="Braum"/>
              <ChampionContainer link="https://eune.leagueoflegends.com/pl-pl/champions/cho-gath/" image={Cho} name="Cho'Gath"/>
              <ChampionContainer link="https://eune.leagueoflegends.com/pl-pl/champions/heimerdinger/" image={Heimer} name="Heimerdinger"/>
        </Row>

        <Row>
              <ChampionContainer link="https://eune.leagueoflegends.com/pl-pl/champions/kai-sa/" image={Kaisa} name="Kai'Sa"/>
              <ChampionContainer link="https://eune.leagueoflegends.com/pl-pl/champions/kassadin/" image={Kassadin} name="Kassadin"/>
              <ChampionContainer link="https://eune.leagueoflegends.com/pl-pl/champions/kindred/" image={Kindred} name="Kindred"/>
        </Row>
            
            
        <Row>
              <ChampionContainer link="https://eune.leagueoflegends.com/pl-pl/champions/malzahar/" image={Malzahar} name="Malzahar"/>
              <ChampionContainer link="https://eune.leagueoflegends.com/pl-pl/champions/rek-sai/" image={Reksai} name="Rek'Sai"/>
              <ChampionContainer link="https://eune.leagueoflegends.com/pl-pl/champions/sett/" image={Sett} name="sett"/>
        </Row>

            
        <Row>
              <ChampionContainer objectClass="overlay bottomImages" link="https://eune.leagueoflegends.com/pl-pl/champions/urgot/" image={Urgot} name="Urgot"/>
              <ChampionContainer objectClass="overlay bottomImages" link="https://eune.leagueoflegends.com/pl-pl/champions/velk-koz/" image={Velkoz} name="Vel'Koz"/>
              <ChampionContainer objectClass="overlay bottomImages" link="https://eune.leagueoflegends.com/pl-pl/champions/xerath/" image={Xerath_0} name="Xerath"/>
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
}

export default Galeria;
