import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/Dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../store-context";

const DialogsContainer = (props) => {
    // let state = props.store.getState().dialogsPage;
    //
    // let sendMessage = () => {
    //     props.store.dispatch(sendMessageActionCreator());
    // }
    //
    // let updateMessageText = (text) => {
    //     props.store.dispatch(updateNewMessageTextActionCreator(text));
    // }

    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState().dialogsPage;

                let sendMessage = () => {
                    store.dispatch(sendMessageActionCreator());
                }

                let updateMessageText = (text) => {
                    store.dispatch(updateNewMessageTextActionCreator(text));
                }
                return <Dialogs updateNewMessageText={updateMessageText} sendMessage={sendMessage} dialogsPage={state}/>
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;