import './styles.css';
import './material-icons.css'

import React, { useState, useEffect, FC } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Buttons from './pages/Buttons';
import Spinner from './pages/Spinner';
import Particles from './pages/Particles';
import Tether from './pages/Tether';
import Switches from './pages/Switches'
import Ball from './pages/Ball';
import Joystick from './pages/Joystick'
import Cube from './pages/Cube'
import Test from './pages/Test'

export type Page = 'Home' | 'Settings' | 'Buttons' | 'Spinner' | 'Particles' | 'Switches' | 'Tether' | 'Ball' | 'Joystick' | 'Test' | 'Cube';

const startPage = "Cube"

declare global {
  interface Window {
      loadPage: (page: Page) => void;
      setActivePage: (page: Page) => void;
      darkMode: {
            toggle: () => Promise<void>;
            system: () => Promise<void>;
            getThemeSource: () => Promise<string>;
        }
  }
  interface NavbarProps {
    activePage: Page;
  }
}

const App: FC = () => {
    const [page, setPage] = useState<Page>(startPage);
    const [active, setActive] = useState<Page>(page);

    let CurrentPage: React.ComponentType<{ loadPage: (page: Page) => void }>;

    switch (page) {
        case 'Home':
            CurrentPage = Home;
            break;
        case 'Settings':
            CurrentPage = Settings;
            break;
        case 'Buttons':
            CurrentPage = Buttons;
            break;
        case 'Spinner':
            CurrentPage = Spinner;
            break;
        case 'Particles':
            CurrentPage = Particles;
            break;
        case 'Tether':
            CurrentPage = Tether;
            break;
        case 'Switches':
            CurrentPage = Switches;
            break;
        case 'Ball':
            CurrentPage = Ball;
            break;
        case 'Joystick':
            CurrentPage = Joystick;
            break;
        // case 'Lock':
        //     CurrentPage = Lock;
        //     break;
        case 'Test':
            CurrentPage = Test
            break;
        case 'Cube':
            CurrentPage = Cube
            break;
        default:
            CurrentPage = Home;
    }

    const loadPage = (newPage: Page) => {
        setPage(newPage)
        setActive(newPage)
    }

    window.loadPage = (page: Page) => {
        setPage(page);
        setActive(page);
    };

    return (
        <>
            {/* <Navbar activePage={active} /> */}
            <CurrentPage loadPage={loadPage} />
        </>
    )
};

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

      // return {
      //   <Navbar activePage={active} /> 
      // }
    }


// const attachEventListeners = () => {

//     const clickType = "mousedown";

//     const buttons: {[key: string] : Page} = {
//         'homeButton': 'Home',
//         'settingsButton': 'Settings',
//         'buttonspageButton': 'Buttons',
//         'spinnerpageButton': 'Spinner',
//         'particlespageButton': 'Particles',
//         'tetherpageButton': 'Tether',
//         'switchespageButton': 'Switches',
//         'ballpageButton': 'Ball',
//         'joystickpageButton': 'Joystick',
//         'testpageButton': 'Test',
//         'cubepageButton': 'Cube',
//     };


//     Object.entries(buttons).forEach(([buttonId, pageName]) => {
//         const button = document.getElementById(buttonId);
//         if (button) {
//             button.addEventListener(clickType, () => {
//                 window.loadPage(pageName as Page);

//                 navbarRoot.render(<Navbar activePage={pageName} />);
//                 console.log(pageName)
//             })
//         }
//     });
        
//     const darkmodeToggleButton= document.getElementById('darkmodeToggleButton');

//     if (darkmodeToggleButton) {
//         darkmodeToggleButton!.addEventListener(clickType, () => {
//             window.darkMode.toggle()
//         });
//     }

//     if (!darkmodeToggleButton) {
//       console.log('darkbutton not found')
//     }
 
// }

// document.addEventListener('DOMContentLoaded', attachEventListeners);

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);


const navbarContainer = document.getElementById('navbarRoot');
const navbarRoot = createRoot(navbarContainer!)
navbarRoot.render(<Navbar activePage={startPage}/>)








