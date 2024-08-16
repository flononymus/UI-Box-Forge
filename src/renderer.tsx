import './styles.css';
import './material-icons.css'
// import "@fontsource/material-icons";
// import 'material-icons/iconfont/material-icons.css';
// import "@fontsource/material-icons-outlined";

import React, { useState, useEffect, FC } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home';
import Navbar from './components/Navbar'
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
            <CurrentPage loadPage={loadPage} />
        </>
    )
};


const attachEventListeners = () => {

    const clickType = "mousedown";

    const homeButton = document.getElementById('homeButton');
    const settingsButton = document.getElementById('settingsButton');
    const darkmodeToggleButton= document.getElementById('darkmodeToggleButton');
    const buttonsPageButton = document.getElementById('buttonspageButton');
    const spinnerPageButton = document.getElementById('spinnerpageButton');
    const particlesPageButton = document.getElementById('particlespageButton');
    const tetherPageButton = document.getElementById('tetherpageButton');
    const switchesPageButton = document.getElementById('switchespageButton');
    const ballPageButton = document.getElementById('ballpageButton');
    const joystickPageButton= document.getElementById('joystickpageButton');

    if (homeButton) {
        homeButton.addEventListener(clickType, () => window.loadPage('Home'));
    }
    if (!homeButton) {
        console.log('homebutton not found')
    }

    if (settingsButton) {
        settingsButton.addEventListener(clickType, () => window.loadPage('Settings'));
    }

    if (buttonsPageButton) {
        buttonsPageButton.addEventListener(clickType, () => window.loadPage('Buttons'));
    
    }
    if (spinnerPageButton) {
        spinnerPageButton.addEventListener(clickType, () => window.loadPage('Spinner'));
    }
    if (particlesPageButton) {
        particlesPageButton.addEventListener(clickType, () => window.loadPage('Particles'));
    }
    if (tetherPageButton) {
        tetherPageButton.addEventListener(clickType, () => window.loadPage('Tether'));
    }
    if (switchesPageButton) {
        switchesPageButton.addEventListener(clickType, () => window.loadPage('Switches'));
    }
    if (ballPageButton) {
        ballPageButton.addEventListener(clickType, () => window.loadPage('Ball'));
    }
    if (joystickPageButton) {
        joystickPageButton.addEventListener(clickType, () => window.loadPage('Joystick'));
    }

    // const buttons: {[key: string] : Page} = {
    //     'homeButton': 'Home',
    //     'settingsButton': 'Settings',
    //     'buttonspageButton': 'Buttons',
    //     'spinnerpageButton': 'Spinner',
    //     'particlespageButton': 'Particles',
    //     'tetherpageButton': 'Tether',
    //     'switchespageButton': 'Switches',
    //     'ballpageButton': 'Ball',
    //     'joystickpageButton': 'Joystick',
    //     'testpageButton': 'Test',
    //     'cubepageButton': 'Cube',
    // };


    // Object.entries(buttons).forEach(([buttonId, pageName]) => {
    //     const button = document.getElementById(buttonId);
    //     if (button) {
    //         button.addEventListener(clickType, () => {
    //             window.loadPage(pageName as Page);

    //             navbarRoot.render(<Navbar activePage={pageName} />);
    //             console.log(pageName)
    //         })
    //     }
    // });

        

    if (darkmodeToggleButton) {
        darkmodeToggleButton!.addEventListener(clickType, () => {
            window.darkMode.toggle()
        });
    }
 
}

document.addEventListener('DOMContentLoaded', attachEventListeners);

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);


const navbarContainer = document.getElementById('navbarRoot');
const navbarRoot = createRoot(navbarContainer!)
navbarRoot.render(<Navbar activePage={startPage}/>)
