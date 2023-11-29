import {logo, settings} from '../assets'
import './Header.css'


function Header() {
    return(
        <div className='header'>
            <div><img src={logo} alt="" className='logo'/></div>
            <div className='Info'>
                <div><a href="/" className='infoTxt'>На главную</a></div>
<<<<<<< HEAD
                <div><a href="/About" className='infoTxt'>О нас</a></div>
=======
                <div><a href="" className='infoTxt'>О нас</a></div>
>>>>>>> 9d5c864b754522c9eabf318afdbd36dfe94920a0
            </div>
            <div><img src={settings} alt="" className='settings' /></div>

            
        </div>
    )
}

export default Header;