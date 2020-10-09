import React, {useState} from "react";
import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/images/Default.png";
import {ProfileDataReduxForm} from "./ProfileDataForm";

const ProfileInfo = ({profile, savePhoto, isOwner, updateStatus, status, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onProfilePhotoSelected = (event) => {
        if (event.target.files[0]) {
            savePhoto(event.target.files[0]);
        }
    }

    const onSubmit =  (formData) => {
        saveProfile(formData).then(
            ()=>{
                setEditMode(false);
            }
        );
    }

    return (
        <div>
            <div className={style.description}>
                <img src={profile.photos.large || userPhoto} alt="" className={style.profilePhoto}/>
                {isOwner && <input type="file" onChange={onProfilePhotoSelected}/>}
                <ProfileStatus status={status} updateStatus={updateStatus}/>

                {editMode
                    ? <ProfileDataReduxForm initialValues={profile} onSubmit={onSubmit} profile={profile}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={()=>{setEditMode(true)}}/>}
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div className={style.about}>
        {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}

        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Looking for a job</b>:{profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My skills</b>: {profile.lookingForAJobDescription}
        </div>
        }
        <div>
            {Object.keys(profile.contacts).map(key => {
                return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
        </div>
    </div>
}

export const Contacts = ({contactTitle, contactValue}) => {
    return <div className={style.contact}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}

export default ProfileInfo;