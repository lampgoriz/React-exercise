import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = (props) => {

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/Users' render={() => <UsersContainer/>}/>
                <Route path='/Login' render={() => <Login/>}/>
            </div>
        </div>
    );
}

export default App;
