import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElement = props.postsArr.map(p => <Post message={p.message} likeCouner={p.likeCounter}/>);
    let newPostElement = React.createRef();
    let addPost = () =>{
        let text = newPostElement.current.value;
        props.addPost(text);
    }


    return (
        <div className={style.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} name="" id="" cols="40" rows="5"></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts__items}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;