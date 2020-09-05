import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/Profile-reducer";

const MyPosts = (props) => {

    let postsElements = props.postsArr.map(p => <Post message={p.message} likeCouner={p.likeCounter}/>);
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let changePostText = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={style.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={changePostText} value={props.newPostText} cols="40"
                              rows="5"></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts__items}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;