import {logo, logo_mobile, settings} from '../assets'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.css'
import Menu from '../components/Menu';



function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    function open_menu(){
        document.querySelector('.nav-toggle').classList.toggle('opened')
        setMenuOpen(!isMenuOpen);
        document.querySelector('body').classList.toggle('no-scroll');
    }
    return(
        <div>
        <div className='header'>
            <div className='container'>
                <img src={logo} alt="" className='logo'/>
                <div className='Info'>
                    <div><Link to='/' className='infoTxt'>На главную</Link></div>
                    <div><Link to='/About' className='infoTxt'>О нас</Link></div>
                    <div><Link to='/Menu' className='infoTxt'>Анкеты</Link></div>
                </div>
            </div>
            <div className='container_for_mobile'>
                <img src={logo_mobile} alt="" className='logo_mobile'/>
                <button class="nav-toggle" onClick={open_menu}>
                    <span class="bar-top"></span>
                    <span class="bar-mid"></span>
                    <span class="bar-bot"></span>
                </button>
            </div>
            </div>
        {isMenuOpen && <Menu/>}
        </div>
    )
}

export default Header;