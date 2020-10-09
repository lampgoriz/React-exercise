import React from "react";
import style from './FormControls.module.css'
import {required} from "../../../Utils/Validators/validators";
import {Field} from "redux-form";

const FormControl = ({input, meta:{touched, error}, children}) => {
    const hasError = touched && error;

    return (
        <div className={hasError ? style.errorBorder : ''}>
            {children}
            {hasError && <span className={style.errorMessage}>{error}</span>}
        </div>
    )
}


export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const createField = (placeholder, component, name, validators, props = {}, text = "") => {
    return (
        <div>
            <Field placeholder={placeholder} component={component} name={name} validate={validators} {...props}/>{text}
        </div>
    )
}
