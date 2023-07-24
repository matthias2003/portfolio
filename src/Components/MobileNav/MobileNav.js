import './MobileNav.css';
import { Link } from 'react-router-dom';
import hamburger from '../../Assets/hamburger.png';
import close from '../../Assets/reject.png';
import logo from '../../Assets/logo.png';
import { useState } from 'react';

function MobileNav() {

    const [menuIsClicked, setmenuIsClicked] = useState(false);

    const sideNavHandle = (target) => {
        console.log(target)
        if (target === 'open') {
            setmenuIsClicked(true)
        } else {
            setmenuIsClicked(false)
        }
    }

    if (menuIsClicked === true) {
        return(
            <div className='side__nav'>
                <img onClick={() => sideNavHandle('close')} className='nav__mobile__close' src={close} alt='Close icon'/>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>PORTFOLIO</li>
                    <li>CONTACT ME</li>
                </ul>
            </div>
        )
    }
    else if (menuIsClicked === false){
        return(
            <div className='container'>
                <img onClick={() => sideNavHandle('open')} className='nav__mobile__hamburger' src={hamburger} />
                <Link to='/'><img className='nav__mobile__logo' src={logo} alt='Logo'/></Link>
            </div>
        )
    }
}

export default MobileNav;