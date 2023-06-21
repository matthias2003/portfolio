import logo from '../../Assets/logo.png';
import { Link } from 'react-router-dom';
import githubIcon from '../../Assets/github.svg';
import './Nav.css';

function Nav() {
    return(
        <nav className='nav'>
            <div className='container'>
                <Link to='/'><img className='nav__logo' src={logo} alt='Logo'/></Link>
                <div className='nav__links'>
                    <ul>
                        <li><Link to='/'>HOME</Link></li> {/* TODO: zrobić sciezki i przekierowania na elementy*/}
                        <li><Link to='/about' >ABOUT</Link></li>
                        <li><Link to='/portfolio'>PORTFOLIO</Link></li>
                        <li><Link to='/contact'>CONTACT ME</Link></li>
                    </ul>
                    <img onClick={() => { window.location.href = 'https://github.com/matthias2003'}} className='nav__icon' src={githubIcon} alt='Github' />
                </div>
            </div>
        </nav>
    )
}

 
export default Nav;