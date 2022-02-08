import React from 'react';
import {NavLink} from 'react-router-dom';

import s from './navbar.module.css';

const Navbar = (props) => {
  return (
    <nav className="Navbar">
        <NavLink to="/profile" activeClassName={s.activeLink} className={s.link}>
             профиль 
        </NavLink>
        <NavLink to="/users" activeClassName={s.activeLink} className={s.link}>
             пользователи 
        </NavLink>       
    </nav>
  );
}

export default Navbar;

/*

 <NavLink to="/dialogs" activeClassName={s.activeLink}>dialogs</NavLink>
        <NavLink to="/learning" activeClassName={s.activeLink}>learning</NavLink>
*/
