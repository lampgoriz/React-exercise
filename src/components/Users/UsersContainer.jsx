import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../Redux/Users-reducer";

let mapStateToProps =(state) =>{
    return{
        usersArr: state.usersPage.usersArr,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        },
        setCurrentPage: (pageNumber) =>{
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) =>{
            dispatch(setTotalUsersCountAC(totalCount));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);
