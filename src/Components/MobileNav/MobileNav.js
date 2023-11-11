import './MobileNav.css';
import { Link } from 'react-router-dom';
import hamburger from '../../Assets/hamburger.png';
import close from '../../Assets/next.png';
import logo from '../../Assets/logo.png';
import { useState } from 'react';

function MobileNav() {
    const [menuIsClicked, setmenuIsClicked] = useState(false);

    const sideNavHandle = (target) => {
        if (target === 'open') {
            setmenuIsClicked(true)
        } else {
            setmenuIsClicked(false)
        }
    }


    return(
        <>  
            <div className='container'>
                <Link to='/' onClick={() => sideNavHandle('close')}><img className='nav__mobile__logo' src={logo} alt='Logo'/></Link>
                <img onClick={() => sideNavHandle('open')} className='nav__mobile__hamburger' src={hamburger} />
            </div>
            <div className={menuIsClicked ? 'active__blur' : ''}></div>
            <div className={menuIsClicked ? 'container__side__nav active' : 'container__side__nav'}> 
                <img onClick={() => sideNavHandle('close')} className='nav__mobile__close' src={close} alt='Close icon'/>
                <ul>
                    <li onClick={() => sideNavHandle('close')}><Link to='/'>HOME</Link></li>
                    <li onClick={() => sideNavHandle('close')}><Link to='/about' >ABOUT</Link></li>
                    <li onClick={() => sideNavHandle('close')}><Link to='/portfolio'>PORTFOLIO</Link></li>
                    {/* <li onClick={() => sideNavHandle('close')}><Link to='/contact'>CONTACT ME</Link></li> */}
                </ul>
            </div>
        </>
    )
}

export default MobileNav;