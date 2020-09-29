import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id} img={d.img}/>);
    let messagesElements = state.messagesData.map(m => <Message message={m.message} key={m.id} id={m.id}/>);

    if (!props.isAuth) {
        return <Redirect to={'/Login'}/>
    }

    const onSubmit = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialog__items}>
                {dialogsElements}
            </div>
            <div className={style.message}>
                {messagesElements}
                <AddMessageFormRedux onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea" name="newMessageBody"/>
            <button>Send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;