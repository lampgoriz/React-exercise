import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../Utils/Validators/validators";
import {login, logout} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import  style from  './../common/FormsControls/FormControls.module.css'

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {createField("email", Input, "email", [required])}
                {createField("password", Input, "password", [required], {type: 'password'})}
                {createField(null, Input, "rememberMe", [], {type: "checkbox"}, 'remember me')}

                {captchaUrl && <img src={captchaUrl }/>}
                {captchaUrl && createField('Symbols from image', Input, 'capthca', [required])}

                {error && <div className={style.formSummaryError}>
                        {error}
                    </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.capthca);
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>;
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login, logout})(Login);
