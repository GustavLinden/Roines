import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../pictures/roine-slim.png';
import michelin from '../../pictures/michelin-quality-dealer.png';
import './Header.module.scss';
import HeaderLink from '../HeaderLink/HeaderLink';

const Header: React.FC = () => {
  const [isActive, setisActive] = React.useState(false);
  const [isTiresOpen, setIsTiresOpen] = React.useState(false);
  const [isAccessoriesOpen, setIsAccessoriesOpen] = React.useState(false);
  const [isServiceOpen, setIsServiceOpen] = React.useState(false);
  const [isKnowledgeOpen, setIsKnowledgeOpen] = React.useState(false);
  const [isAboutOpen, setIsAboutOpen] = React.useState(false);
  return (
    <div>
      <nav
        className="navbar is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand ">
          <Link to="/" className="navbar-item">
            <img src={process.env.PUBLIC_URL + logo} alt="Loggo" />
          </Link>

          <a
            onClick={() => {
              setisActive(!isActive);
            }}
            role="button"
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          role="button"
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? 'is-active' : ''}`}
        >
          <div className="navbar-start">
            <div
              onMouseEnter={() => {
                setIsTiresOpen(true);
              }}
              onMouseLeave={() => {
                setIsTiresOpen(false);
              }}
              className={`navbar-item has-dropdown is-hoverable `}
            >
              <a className="navbar-link">Däck</a>
              <div
                className={`navbar-dropdown ${
                  !isTiresOpen ? 'is-hidden' : 'is-block'
                }`}
              >
                <HeaderLink page="wintertiers">Vinterdäck</HeaderLink>
                <HeaderLink page="summertiers">Sommardäck</HeaderLink>
              </div>
            </div>
            <HeaderLink page="rimstester">Fälgar</HeaderLink>
            <div
              onMouseEnter={() => {
                setIsAccessoriesOpen(true);
              }}
              onMouseLeave={() => {
                setIsAccessoriesOpen(false);
              }}
              className="navbar-item has-dropdown is-hoverable"
            >
              <a className="navbar-link">Tillbehör</a>
              <div
                className={`navbar-dropdown  ${
                  !isAccessoriesOpen ? 'is-hidden' : 'is-block'
                }`}
              >
                <a className="navbar-item">Autosock</a>
                <a className="navbar-item">Spacers</a>
                <a className="navbar-item">McGard Hjullås</a>
                <a className="navbar-item">Sicustar Hjullås</a>
              </div>
            </div>
            <div
              onMouseEnter={() => {
                setIsServiceOpen(true);
              }}
              onMouseLeave={() => {
                setIsServiceOpen(false);
              }}
              className="navbar-item has-dropdown is-hoverable"
            >
              <a className="navbar-link">Servicetjänster</a>
              <div
                className={`navbar-dropdown ${
                  !isServiceOpen ? 'is-hidden' : 'is-block'
                }`}
              >
                <a className="navbar-item">Däckhotell</a>
                <a className="navbar-item">Paketlösningar</a>
                <a className="navbar-item">Hjulinställning</a>
                <a className="navbar-item">Däckreparation</a>
                <a className="navbar-item">Prislista</a>
              </div>
            </div>
            <div
              onMouseEnter={() => {
                setIsKnowledgeOpen(true);
              }}
              onMouseLeave={() => {
                setIsKnowledgeOpen(false);
              }}
              className="navbar-item has-dropdown is-hoverable"
            >
              <a className="navbar-link">Kunskap</a>
              <div
                className={`navbar-dropdown ${
                  !isKnowledgeOpen ? 'is-hidden' : 'is-block'
                }`}
              >
                <a className="navbar-item">Om Vinterdäck</a>
                <a className="navbar-item">Mönsterdjup</a>
                <a className="navbar-item">Ersätta däck</a>
                <a className="navbar-item">Däckmärkning</a>
                <a className="navbar-item">Bullerkrav</a>
              </div>
            </div>
            <div
              onMouseEnter={() => {
                setIsAboutOpen(true);
              }}
              onMouseLeave={() => {
                setIsAboutOpen(false);
              }}
              className="navbar-item has-dropdown is-hoverable"
            >
              <a className="navbar-link">Om Roines</a>
              <div
                className={`navbar-dropdown ${
                  !isAboutOpen ? 'is-hidden' : 'is-block'
                }`}
              >
                <HeaderLink page="StaffList">
                  Vi som jobbar på Roines
                </HeaderLink>
                <HeaderLink page="history">Vår Historia</HeaderLink>
                <HeaderLink page="buisnessIdea">Affärsidé</HeaderLink>
                <a className="navbar-item">Vision</a>
                <a className="navbar-item">Miljöpolicy</a>
                <a className="navbar-item">Personuppgifter</a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            {' '}
            <div className="michelinLogo">
              <img src={michelin} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
