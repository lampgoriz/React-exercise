import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/Dialogs-reducer";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>);
    let messagesElements = props.dialogsPage.messagesData.map(m => <Message message={m.message} id={m.id}/>);

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let updateMessageText = (event) => {
        let newText = event.target.value;
        props.dispatch(updateNewMessageTextActionCreator(newText));
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialog__items}>
                {dialogsElements}
            </div>
            <div className={style.message}>
                {messagesElements}
                <div className={style.messageInput}>
                    <textarea onChange={updateMessageText} value={props.dialogsPage.newMessageText}
                              className={style.textarea} cols="60" rows="6"></textarea>
                    <button onClick={sendMessage} className={style.messageButton}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;