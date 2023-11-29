import {logo, settings} from '../assets'
import { Link } from 'react-router-dom';
import './Header.css'


function Header() {
    return(
        <div className='header'>
            <div><img src={logo} alt="" className='logo'/></div>
            <div className='Info'>
                <div><Link to='/' className='infoTxt'>На главную</Link></div>
                <div><Link to='/About' className='infoTxt'>О нас!</Link></div>
            </div>
            <div><img src={settings} alt="" className='settings' /></div>
        </div>
    )
}

export default Header;