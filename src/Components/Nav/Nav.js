import React from 'react';
import './Nav.css';
import { useState, useEffect } from 'react';
import ComputerNav from '../ComputerNav/ComputerNav.js';
import MobileNav from '../MobileNav/MobileNav';

function Nav() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect( () => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])


    return(
        <nav className='nav'>
            { width > 768 ? <ComputerNav /> : <MobileNav /> }
        </nav>
    )
}

 
export default Nav;