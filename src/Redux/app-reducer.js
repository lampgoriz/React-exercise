import {getAuthUserData, setAuthUserData} from "./auth-reducer";
import {authAPI} from "../api/api";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => async (dispatch) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, login, email, true));
        dispatch(initializedSuccess());
        dispatch(getAuthUserData);
    }


    // let promise = dispatch(getAuthUserData());
    // Promise. all([promise]).then(() => {
    //     dispatch(initializedSuccess());
    // });
}

export default appReducer;