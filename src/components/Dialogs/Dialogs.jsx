import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id} img={d.img}/>);
    let messagesElements = state.messagesData.map(m => <Message message={m.message} key={m.id} id={m.id}/>);
    let newMessageText = state.newMessageText;

    let onSendMessage = () => {
        props.sendMessage();
    }

    let onUpdateMessageText = (event) => {
        let newText = event.target.value;
        props.updateNewMessageText(newText);
    }

    if(!props.isAuth){return <Redirect to={'/Login'}/>}

    return (
        <div className={style.dialogs}>
            <div className={style.dialog__items}>
                {dialogsElements}
            </div>
            <div className={style.message}>
                {messagesElements}
                <div className={style.messageInput}>
                    <textarea onChange={onUpdateMessageText} value={newMessageText}
                              className={style.textarea} cols="60" rows="6"></textarea>
                    <button onClick={onSendMessage} className={style.messageButton}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;