import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let postsElements = props.postsArr.map(p => <Post message={p.message} key={p.id} likeCouner={p.likeCounter}/>);

    const addNewPost = (values) => {
        props.addPost(values.newPostBody);
    }

    return (
        <div className={style.posts}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={addNewPost}/>
            <div className={style.posts__items}>
                {postsElements}
            </div>
        </div>
    )
}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea" name='newPostBody'/>
            <button>Add post</button>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'profileAddPostForm'})(AddPostForm);

export default MyPosts;