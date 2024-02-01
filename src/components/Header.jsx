import {logo, settings} from '../assets'
import { Link } from 'react-router-dom';
import './Header.css'


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
        </div>
    )
}

export default Header;