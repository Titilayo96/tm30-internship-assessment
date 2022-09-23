import React from 'react'
import { MenuItems } from './MenuItems'
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1 className='logo'>LOGO</h1>
        <div className='menu-list'>

        </div>
        <ul className='nav-menu'>
            {MenuItems.map((item, index) => {
                return (
                    <li key={index}>
                    <a className={item.cName} href={item.url}>{item.title}</a>
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}

export default Navbar