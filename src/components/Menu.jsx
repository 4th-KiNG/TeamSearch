import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <div className='menu'>
            <Link to={'/'} className='menu_title'>На главную</Link>
            <Link to={'/About'} className='menu_title'>О нас</Link>
            <Link to={'/Menu'} className='menu_title'>Анкеты</Link>
        </div>
    )
}

export default Menu
