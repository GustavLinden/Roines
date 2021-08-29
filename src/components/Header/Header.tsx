import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../pictures/roines.png';
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
        <div className="navbar-brand">
          <Link to="/">
            <img
              style={{
                width: '156px',
                height: '66px',
                margin: '5px',
              }}
              src={process.env.PUBLIC_URL + logo}
              alt="Loggo"
            />
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
                <HeaderLink page="/tires/wintertires">Vinterdäck</HeaderLink>
                <HeaderLink page="/tires/summertires">Sommardäck</HeaderLink>

                <HeaderLink page="/tires/yokohamatires">
                  Yokohama hjul
                </HeaderLink>
              </div>
            </div>
            <HeaderLink page="/rims/rimstester">Fälgar</HeaderLink>
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
                <HeaderLink page="/accessories/autosocks">AutoSocks</HeaderLink>
                <HeaderLink page="/accessories/sicustar">
                  Sicustar Hjullås
                </HeaderLink>
                <HeaderLink page="/accessories/mcgard">
                  McGard Hjullås
                </HeaderLink>
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
                <HeaderLink page="/services/tireshotell">
                  Däck Hotell
                </HeaderLink>
                <HeaderLink page="/services/prices">Prislistor</HeaderLink>
                <HeaderLink page="/services/packages">
                  Paketlösningar
                </HeaderLink>
                <HeaderLink page="/services/repairtires">
                  Däckreparation
                </HeaderLink>

                <HeaderLink page="/services/wheelsadjustment">
                  Hjulinställning
                </HeaderLink>
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
                <HeaderLink page="/knowledge/aboutwintertires">
                  Om vinterdäck
                </HeaderLink>
                <HeaderLink page="/knowledge/tiresdepth">
                  Mönsterdjup
                </HeaderLink>
                <HeaderLink page="/knowledge/replacetires">
                  Ersätta däck
                </HeaderLink>
                <HeaderLink page="/knowledge/tiresmarkings">
                  Däckmärkning
                </HeaderLink>
                <HeaderLink page="/knowledge/noiserequirements">
                  Bullerkrav
                </HeaderLink>
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
                <HeaderLink page="/stafflist">
                  Vi som jobbar på Roines
                </HeaderLink>
                <HeaderLink page="/about/aboutus">Om oss</HeaderLink>
                <HeaderLink page="/about/history">Vår Historia</HeaderLink>
                <HeaderLink page="/about/buisnessidea">Affärsidé</HeaderLink>
                <HeaderLink page="/about/vision">Vision</HeaderLink>
                <HeaderLink page="/about/environmentalpolicy">
                  Miljöpolicy
                </HeaderLink>
                <HeaderLink page="/about/personalinformation">
                  Personuppgifter
                </HeaderLink>
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
