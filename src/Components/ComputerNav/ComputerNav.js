import { Link } from 'react-router-dom';
import githubIcon from '../../Assets/github.svg';
import logo from '../../Assets/logo.png';
import './ComputerNav.css'

function ComputerNav() {
    return (
        <div className='container'>
                <Link to='/'><img className='nav__logo' src={logo} alt='Logo'/></Link>
                <div className='nav__links'>
                    <ul>
                        <li><Link to='/'>HOME</Link></li>
                        <li><Link to='/about' >ABOUT</Link></li>
                        <li><Link to='/portfolio'>PORTFOLIO</Link></li>
                        {/* <li><Link to='/contact'>CONTACT ME</Link></li> */}
                    </ul>
                    <img onClick={() => { window.location.href = 'https://github.com/matthias2003'}} className='nav__icon' src={githubIcon} alt='Github' />
                </div>
            </div>
    )
}

export default ComputerNav;