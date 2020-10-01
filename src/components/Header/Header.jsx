import React from "react";
import style from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (
        <header className={style.header}>
            <img className={style.logo} src="https://upload.wikimedia.org/wikipedia/ru/c/c0/Scuderia_Ferrari_Logo.svg"
                 alt=""/>
            <div className={style.login}>
                {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;
