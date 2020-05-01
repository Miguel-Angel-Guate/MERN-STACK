import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
const Header = props => {
    return <header className="header">
        <NavLink to='/' activeClassName="isActive" exact>Home</NavLink>
        <div className="right">
        <NavLink to='/login' activeClassName="isActive" exact className="log">Login</NavLink>
        <NavLink to='/register' activeClassName="isActive" exact>Register</NavLink>
        </div>
    </header>
}
export default Header;