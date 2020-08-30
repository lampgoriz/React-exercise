import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>);
    let messagesElements = props.state.messagesData.map(m => <Message message={m.message} id={m.id}/>);
    let newMessage = React.createRef();
    let sendMessage = () => {
        let txt = newMessage.current.value;
        messagesElements.push(<Message message={txt}/>);
        console.log(messagesElements);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialog__items}>
                {dialogsElements}
            </div>
            <div className={style.message}>
                {messagesElements}
                <div className={style.messageInput}>
                    <textarea ref={newMessage} className={style.textarea} cols="60" rows="6"></textarea>
                    <button onClick={sendMessage} className={style.messageButton}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;