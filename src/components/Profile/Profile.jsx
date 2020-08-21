import React from "react";
import './Profile.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (<div>
        <div>
            <img className="content__img" src="https://images3.alphacoders.com/828/828894.jpg" alt=""/>
        </div>
        <div>
            ava + dectription
        </div>
        <MyPosts/>
    </div>)
}

export default Profile;