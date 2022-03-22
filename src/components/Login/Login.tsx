import React from "react";
// import {Input} from "../Common/FormsControls/FormsControls";
// import {requiredField} from "../../utils/validators/validators";
// import {connect} from "react-redux";
// import {login} from "../../redux/authReducer";
// import {Navigate} from "react-router";
// import f from "./../Common/FormsControls/FormsControls.module.css"
// import s from "./Login.module.css"


// const LoginForm = (props) => {
//     return (
//         <Form onSubmit={props.onSubmit}>
//             {({handleSubmit}) => (
//                 <form onSubmit={handleSubmit}>
//                     <div className={s.form__input}>
//                         <Field placeholder={"Email"}
//                                validate={requiredField}
//                                component={Input}
//                                name={"email"}/>
//                     </div>
//                     <div className={s.form__input}>
//                         <Field placeholder={"Password"}
//                                validate={requiredField}
//                                component={Input}
//                                type={"password"}
//                                name={"password"}/>
//                     </div>
//                     <div>
//                         <Field component={Input}
//                                name={"rememberMe"}
//                                type={"checkbox"}/>Remember me
//                     </div>
//                     <div className={f.form__summaryError}>
//                         {props.errorMessage}
//                     </div>
//                     {props.captchaUrl && <img src={props.captchaUrl} alt=""/>}
//                     {props.captchaUrl && <div className={s.form__input}>
//                         <Field placeholder={"Symbols from image"}
//                                validate={requiredField}
//                                component={Input}
//                                name={"captcha"}/>
//                     </div>}
//                     <div>
//                         <button className={s.form__button}>Login</button>
//                     </div>
//                 </form>
//             )}
//         </Form>
//     )
// }

const Login = () => {
    // const onSubmit = (formData) => {
    //     props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    // }
    // if (props.isAuth) {
    //     return <Navigate to="/profile"/>
    // }

    return (
        <div>
            <div>Login</div>
            {/*<LoginForm onSubmit={onSubmit} errorMessage={props.errorMessage} captchaUrl={props.captchaUrl}/>*/}
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