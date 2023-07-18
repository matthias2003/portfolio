import './MobileNav.css';
import { Link } from 'react-router-dom';
import hamburger from '../../Assets/hamburger.png';
import logo from '../../Assets/logo.png';

function MobileNav() {
    return(
        <div className='container'>
            <img className='nav__mobile__hamburger' src={hamburger} />
            <Link to='/'><img className='nav__mobile__logo' src={logo} alt='Logo'/></Link>
        </div>
    )
}

export default MobileNav;