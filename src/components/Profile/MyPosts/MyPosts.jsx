import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.postsArr.map(p => <Post message={p.message} key={p.id} likeCouner={p.likeCounter}/>);

    let onAddPost = () => {
        props.addPost();
    }

    let onchangePostText = (event) => {
        let text = event.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={style.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onchangePostText} value={props.newPostText} cols="40"
                              rows="5"></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts__items}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;