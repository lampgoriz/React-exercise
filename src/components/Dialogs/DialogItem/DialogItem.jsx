import React from "react";
import style from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/Dialogs/' + props.id;
    return (
        <div className={style.dialog + ' ' + style.active}>
            <img src={props.img} alt="profileImg" className={style.img}/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;