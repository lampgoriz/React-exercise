import React from "react";
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.post}>
            <img className={style.profile__photo}
                 src="https://vignette.wikia.nocookie.net/discord-wikia/images/5/5e/Default.png/revision/latest/scale-to-width-down/340?cb=20191215094354&path-prefix=ru"
                 alt=""/>
            {props.message}
        </div>
    )
}

export default Post;