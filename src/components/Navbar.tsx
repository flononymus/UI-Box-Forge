import React, { useState, useEffect, FC } from 'react';
import { Page } from '../renderer';
import {motion} from 'framer-motion'

// import "@fontsource/material-icons";
// import "material-symbols"
// import "@fontsource/material-icons-outlined";



interface NavbarProps {
  activePage: Page;
}

const Navbar: React.FC<NavbarProps> = ({ activePage }) => {

  const [isDark, setIsDark] = useState(false)

  function toggleIcon() {
    setIsDark(!isDark);
  }

    return (
    // <div className="bodyCenter" style={{paddingTop:'1rem', paddingBottom:'0.5rem'}}>
    <div className="bodyCenter" style={{paddingTop:'0.75rem', paddingBottom:'0.35rem'}}>
      <nav>
        <div className="navbarLeft">

          <button className={activePage === 'Home' ? "navbarButton active" : "navbarButton"} id="homeButton" onMouseDown={() => window.loadPage("Home")}>
            <span className="material-symbols-outlined">
              home
            </span>
          </button>

          <button className={activePage === 'Buttons' ? "navbarButton active" : "navbarButton"} id="buttonspageButton" onMouseDown={() => window.loadPage("Buttons")}>
            <span className="material-symbols-outlined">
              apps
            </span>
          </button>

          <button className={activePage === 'Spinner' ? "navbarButton active" : "navbarButton"} id="spinnerpageButton" onMouseDown={() => window.loadPage("Spinner")}>
            <span className="material-symbols-outlined">
              network_node
            </span>
          </button>

          <button className={activePage === 'Particles' ? "navbarButton active" : "navbarButton"} id="particlespageButton" onMouseDown={() => window.loadPage("Particles")}>
            <span className="material-symbols-outlined">
              lens_blur
            </span>
          </button>

          <button className={activePage === 'Switches' ? "navbarButton active" : "navbarButton"} id="switchespageButton" onMouseDown={() => window.loadPage("Switches")}>
            <span className="material-symbols-outlined">
              toggle_on 
            </span>
          </button>

          <button className={activePage === 'Tether' ? "navbarButton active" : "navbarButton"} id="tetherpageButton" onMouseDown={() => window.loadPage("Tether")}>
            <span className="material-symbols-outlined">
              tenancy
            </span>
          </button>

          <button className={activePage === 'Ball' ? "navbarButton active" : "navbarButton"} id="ballpageButton" onMouseDown={() => window.loadPage("Ball")}>
            <span className="material-symbols-outlined">
              airline_stops
            </span>
          </button>

          <button className={activePage === 'Joystick' ? "navbarButton active" : "navbarButton"} id="joystickpageButton" onMouseDown={() => window.loadPage("Joystick")}>
            <span className="material-symbols-outlined">
              joystick 
            </span>
          </button>

          <button className={activePage === 'Cube' ? "navbarButton active" : "navbarButton"} id="cubepageButton" onMouseDown={() => window.loadPage("Cube")}>
            <span className="material-symbols-outlined">
              deployed_code
            </span>
          </button>

          </div>

            <button className="settingsButton" id="darkmodeToggleButton"
            onMouseDown={toggleIcon}
            >
              <span className="material-symbols-outlined" 
              // whileHover={{rotate:180}}
              style={{transform: isDark? 'rotate(180deg)':'rotate(0deg)', transition:'transform 0.2s'}}>
                contrast
              </span>
            </button>

        </nav>
      </div>
    )
  }
  export default Navbar