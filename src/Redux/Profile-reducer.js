const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postsArr: [
        {likeCounter: 10, message: 'Hi, how are you?'},
        {likeCounter: 5, message: 'It\'s my first post'},
    ],
    newPostText: 'Meme',
    profile: null,
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newPostText,
            }
        }
        case ADD_POST: {
            let newPost = {
                likeCounter: 0,
                message: state.newPostText,
            };
            return {
                ...state,
                postsArr: [...state.postsArr, newPost],
                newPostText: '',
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    }
}

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text});
export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export default profileReducer;