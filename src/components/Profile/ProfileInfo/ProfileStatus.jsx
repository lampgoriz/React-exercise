import React, {useEffect, useState} from "react";
import style from './ProfileInfo.module.css';

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activeEditMode = () => {
        setEditMode(true);
    }

    const deactiveEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value);
    }

    return (
        <div>
            <div>
                {!editMode &&
                <span onClick={activeEditMode}><b>Status</b>: {status || '-----'}</span>
                }
            </div>
            <div>
                {editMode &&
                <input autoFocus={true} onChange={onStatusChange} onBlur={deactiveEditMode}
                       value={status}/>
                }
            </div>
        </div>
    )
}

export default ProfileStatus;