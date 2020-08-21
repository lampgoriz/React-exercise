import React from "react";
import style from './MyPost.module.css';

const MyPost = () =>{
    return(
        <div>
            <img className={style.profile__photo} src="https://vignette.wikia.nocookie.net/discord-wikia/images/5/5e/Default.png/revision/latest/scale-to-width-down/340?cb=20191215094354&path-prefix=ru" alt=""/>
        </div>
    )
}

export default  MyPost;