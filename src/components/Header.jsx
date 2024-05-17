import {logo, logo_mobile, userico} from '../assets'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.css'
import useStore from '../store/useStore';
 
function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const {user} = useStore()
    function open_menu(){
        document.querySelector('.nav-toggle').classList.add('opened')
        setMenuOpen(true);
        document.querySelector('body').classList.add('no-scroll');
    }
    function close_menu(){
        document.querySelector('.nav-toggle').classList.remove('opened')
        setMenuOpen(false);
        document.querySelector('body').classList.remove('no-scroll');
        window.scrollTo(0,0)
    }
    function toggle_menu(){
        document.querySelector('.nav-toggle').classList.toggle('opened')
        setMenuOpen(!isMenuOpen);
        document.querySelector('body').classList.toggle('no-scroll');
        window.scrollTo(0,0)
    }
    return(
        <div>
        <div className='header'>
            <div className='container'>
                <Link to='/'><img src={logo} alt="" className='logo'/></Link>
                <div className='Info'>
                    
                    <div><Link to='/' className='infoTxt'>На главную</Link></div>
                    <div><Link to='/About' className='infoTxt'>О нас</Link></div>
                    <div><Link to={user ? '/Menu' : "/Login"} className='infoTxt'>Анкеты</Link></div>
                    {user === null &&
                        <div><Link to='/Login' className='loginbtn'>Войти</Link></div>
                    }
                    {user !== null &&
                        <Link to='/Login' className='infoTxt'><img src={userico} className='userico' alt="" /></Link>
                    }
                </div>
            </div>
            <div className='container_for_mobile'>
                <Link to='/'><img src={logo_mobile} alt="" className='logo_mobile'/></Link>
                <div style={{display: "flex", flexDirection: "row", gap: "10px", alignItems: "center"}}>
                    {user === null &&
                        <div><Link to='/Login' onClick={close_menu} className='loginbtn'>Войти</Link></div>
                    }
                    {user !== null &&
                        <Link to='/Login' onClick={close_menu} className='infoTxt'><img src={userico} className='userico' alt="" /></Link>
                    }
                    <button class="nav-toggle" onClick={toggle_menu}>
                        <span class="bar-top"></span>
                        <span class="bar-mid"></span>
                        <span class="bar-bot"></span>
                    </button>
                    
                </div>
            </div>
            </div>
        {isMenuOpen && 
        <div className='menu'>
            
            <Link to={'/'} onClick={close_menu} className='menu_title'>На главную</Link>
            <Link to={'/About'} onClick={close_menu} className='menu_title'>О нас</Link>
            <Link to={user ? '/Menu' : "/Login"} onClick={close_menu} className='menu_title'>Анкеты</Link>
        </div>}
        </div>
    )
}

export default Header;