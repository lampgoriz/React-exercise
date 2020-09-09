import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/Profile' render={() => <Profile/>}/>
                <Route path='/Users' render={() => <UsersContainer/>}/>
            </div>
        </div>
    );
}

export default App;
