import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/Profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../store-context";

const MyPostsContainer = (props) => {
    // let state = props.store.getState();
    //
    // let addPost = () => {
    //     props.store.dispatch(addPostActionCreator());
    // }
    //
    // let changePostText = (text) => {
    //     props.store.dispatch(updateNewPostTextActionCreator(text));
    // }

    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState();

                let addPost = () => {
                   store.dispatch(addPostActionCreator());
                }

                let changePostText = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                }

                return <MyPosts updateNewPostText={changePostText} addPost={addPost} postArr={state.profilePage.postsArr}/>
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;