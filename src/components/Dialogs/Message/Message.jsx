import React from "react";
import style from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={style.message} id={props.id}>
            {props.message}
        </div>
    )
}

export default Message;