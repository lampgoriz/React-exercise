import React from "react";
import style from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={style.nav}>
            <ul>
                <li className={style.list__item}>
                    <NavLink className={style.link} to="/Profile" activeClassName={style.activeLink}>Profile</NavLink>
                </li>
                <li className={style.list__item}>
                    <NavLink className={style.link} to="/Dialogs" activeClassName={style.activeLink}>Messages</NavLink>
                </li>
                <li className={style.list__item}>
                    <NavLink className={style.link} to="/Users" activeClassName={style.activeLink}>Users</NavLink>
                </li>
                <li className={style.list__item}>
                    <a className={style.link} href="#">News</a>
                </li>
                <li className={style.list__item}>
                    <a className={style.link} href="#">Music</a>
                </li>
                <li className={style.list__item}>
                    <a className={style.link} href="#">Settings</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
