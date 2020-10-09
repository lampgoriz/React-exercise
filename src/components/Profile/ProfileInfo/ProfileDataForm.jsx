import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import style from './ProfileInfo.module.css';

const ProfileDataFrom = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>Save</button></div>
        {error && <div className={style.formSummaryError}>{error}</div>}
        <div>
            <b>Full name</b>:{createField('Full name', Input, 'fullName')}
        </div>
        <div>
            <b>About me</b>:{createField('About me ', Input, 'aboutMe')}
        </div>
        <div>
            <b>Looking for a job</b>:{createField(null, Input, 'lookingForAJob', [], {type: 'checkbox'})}
        </div>
        <div>
            <b>My skills</b>: {createField('My skills', Textarea, 'lookingForAJobDescription')}
        </div>
        <div>
            {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={style.about}>
                    <b>{key}:</b> {createField(key, Input, 'contacts.'+key)}
                </div>
            })}
        </div>
    </form>
}

export const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataFrom);