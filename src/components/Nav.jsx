import React from "react";
import s from './Nav.module.css';

const Nav = () => {
    return(
        <nav className={s.nav}>
            <ul>
                <li className={s.list}><a className={s.link} href="#">Profile</a></li>
                <li className={s.list}><a className={s.link} href="#">Messages</a></li>
                <li className={s.list}><a className={s.link} href="#">News</a></li>
                <li className={s.list}><a className={s.link} href="#">Music</a></li>
                <li className={s.list}><a className={s.link} href="#">Settings</a></li>
            </ul>
        </nav>
    )
}

export default Nav;
