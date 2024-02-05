import {logo, logo_mobile, settings} from '../assets'
import { Link } from 'react-router-dom';
import './Header.css'

function open_menu(){
    document.querySelector('.nav-toggle').classList.toggle('opened')
    console.log(123)
}

function Header() {
    return(
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
    )
}

export default Header;