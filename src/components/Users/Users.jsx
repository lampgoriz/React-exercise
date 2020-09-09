import React from "react";
import style from './Users.module.css'

let Users = (props) => {
    if (props.usersArr.length === 0) {
        props.setUser([
            {
                id: 1,
                photoUrl: 'https://image.freepik.com/free-photo/puzzled-african-man-with-beard-shrugging-shoulders-looking-camera_1262-12426.jpg',
                followed: true,
                fullName: 'Andrey',
                status: 'torch',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 2,
                photoUrl: 'https://image.freepik.com/free-photo/puzzled-african-man-with-beard-shrugging-shoulders-looking-camera_1262-12426.jpg',
                followed: false,
                fullName: 'Kirill',
                status: 'sport',
                location: {city: 'Mariupol', country: 'Ukraine'}
            },
            {
                id: 3,
                photoUrl: 'https://image.freepik.com/free-photo/puzzled-african-man-with-beard-shrugging-shoulders-looking-camera_1262-12426.jpg',
                followed: false,
                fullName: 'Egor',
                status: 'zadrot',
                location: {city: 'Gornyak', country: 'Ukraine'}
            }
        ]);
    }


    return (
        <div>{
            props.usersArr.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={style.userPhoto} alt=""/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unFollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
        </div>
    )
}

export default Users;
