import React from "react";
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={style.content__img} src="https://images3.alphacoders.com/828/828894.jpg" alt=""/>
            </div>
            <div className={style.description}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;