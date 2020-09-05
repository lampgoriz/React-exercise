const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

const profileReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
        case ADD_POST:
            let newPost = {
                likeCounter: 0,
                message: state.newPostText,
            };
            state.postsArr.push(newPost);
            state.newPostText = '';
            return state;
        default:
            return state
    }
}

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text});
export const addPostActionCreator = () => ({type: ADD_POST});

export default profileReducer;