import './HomePage.css';
import photo from '../../Assets/applephoto.png';
import mail from '../../Assets/mail.png';
import phone from '../../Assets/phone.png';
import github from '../../Assets/github.png';

function HomePage() {
    return(
        <div className='home__wrap'> 
            <div className='info__wrap'>
                <p>Hi,</p>
                <p>I am Maciej.</p>
                <p className='last__row'>A web developer.</p>
                <div className='icons__wrap'> 
                    <div className='dot'><img src={mail} className='info__icon' alt='Mail'/></div>
                    <div className='dot'><img src={phone} className='info__icon' alt='Phone'/></div>
                    <div className='dot'><img onClick={() => { window.location.href = 'https://github.com/matthias2003'}} src={github} className='info__icon' alt='Github' /></div>
                </div>
            </div>
            <div className='image__wrap'>
                    <div className='circle '><img src={photo} className='image' alt='Memoji'/></div>
            </div>
        </div>
    )
}

export default HomePage;