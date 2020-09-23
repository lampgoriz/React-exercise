import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../assets/images/Default.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {FollowAPI} from "../../api/api";
import {toggleFollowingProgress} from "../../Redux/Users-reducer";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && style.selectedPage} onClick={(e) => {
                        props.onPageChanged(p)
                    }}>{p}</span>
                })}
            </div>
            {
                props.usersArr.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/Profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={style.userPhoto}
                                 alt=""/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id)
                                FollowAPI.unfollow(u.id)
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id);
                                        }
                                        props.toggleFollowingProgress(false, u.id);
                                    });
                            }}>Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id)
                                FollowAPI.follow(u.id)
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleFollowingProgress(false, u.id);
                                    });
                            }}>Follow</button>}
                    </div>
                </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;

