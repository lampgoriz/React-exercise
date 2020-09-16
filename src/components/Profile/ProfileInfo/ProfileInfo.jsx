import React from "react";
import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img className={style.content__img} src="https://images3.alphacoders.com/828/828894.jpg" alt=""/>
            </div>
            <div className={style.description}>
                <img src={props.profile.photos.large} alt=""/>
                <div className={style.about}>
                    <h3>ABOUT ME</h3>
                    <span>{props.profile.fullName}</span>
                    <span>About me: {props.profile.aboutMe}</span>
                    <span>{props.profile.contacts.vk}</span>
                    {props.profile.lookingForAJob ? <span>Looking for a job</span> : null}
                </div>


            </div>
        </div>
    )
}

export default ProfileInfo;