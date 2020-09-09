import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/Users-reducer";

let mapStateToProps =(state) =>{
    return{
        usersArr: state.usersPage.usersArr
    }
}

let mapDispatchToProps =(dispatch) =>{
    return{
        follow:(userId)=>{
            dispatch(followAC(userId));
        },
        unFollow: (userId) =>{
            dispatch(unfollowAC(userId));
        },
        setUser:(userArr)=>{
            dispatch(setUsersAC(userArr));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);
