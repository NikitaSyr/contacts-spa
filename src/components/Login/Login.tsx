import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getErrorMessage, logIn} from "../../redux/authReducer";
import {useNavigate} from "react-router-dom";
import {Form, Field} from 'react-final-form'
// import {Input} from "../Common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
// import {connect} from "react-redux";
// import {login} from "../../redux/authReducer";
// import {Navigate} from "react-router";
import f from "./../Common/FormsControls/FormsControls.module.css"
import s from "./Login.module.css"
import {LogInFormType} from "../../types/types";
import {Input} from "../Common/FormsControls/FormsControls";

type PropsType = {
    errorMessage: string
    onSubmit: (formData: LogInFormType) => void
}

type AppPropsType = {
    isAuth: boolean
}


const LoginForm: React.FC<PropsType> = ({onSubmit, errorMessage}) => {
    return (
        <Form onSubmit={onSubmit}>
            {({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <div className={s.form__input}>
                        <Field placeholder={"Email"}
                               validate={requiredField}
                               component={Input}
                               name={"email"}/>
                    </div>
                    <div className={s.form__input}>
                        <Field placeholder={"Password"}
                               validate={requiredField}
                               component={Input}
                               type={"password"}
                               name={"password"}/>
                    </div>
                    <div className={f.form__summaryError}>
                        {errorMessage}
                    </div>
                    <div>
                        <button className={s.form__button}>Login</button>
                    </div>
                </form>
            )}
        </Form>
    )
}

const Login: React.FC<AppPropsType> = ({isAuth}) => {
    // const onSubmit = (formData) => {
    //     props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    // }
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let errorMessage = useSelector(getErrorMessage);
    // dispatch(logIn(formData.email, formData.password))
    const onSubmit = (formData: LogInFormType) => {

        dispatch(logIn(formData.email, formData.password))
    }

    useEffect(() => {
        if (isAuth){
            return navigate("/contacts");
        }
    },[isAuth, navigate]);
    return (
        <div>
            <div>Login</div>
            <LoginForm onSubmit={onSubmit} errorMessage={errorMessage}/>
        </div>
    )
}
// const mapStateToProps = (state) => ({
//     isAuth: state.auth.isAuth,
//     captchaUrl: state.auth.captchaUrl,
//     errorMessage: state.auth.errorMessage,
// })

// export default connect(mapStateToProps, {login})(Login);
export default Login;