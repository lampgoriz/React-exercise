import React from "react";
import './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <Post message='Hi, how are you?'/>
            <Post message="It's my first post"/>
        </div>
    )
}

export default MyPosts;