import React from 'react';
import {NavLink} from 'react-router-dom';

import s from './navbar.module.css';

const Navbar = (props) => {
  return (
    <nav className="Navbar">
        <NavLink to="/profile" activeClassName={s.activeLink}>profile </NavLink>
        <NavLink to="/users" activeClassName={s.activeLink}>users </NavLink>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>dialogs</NavLink>
    </nav>
  );
}

export default Navbar;
