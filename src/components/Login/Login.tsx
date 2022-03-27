import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getErrorMessage, logIn} from "../../redux/authReducer";
import {useNavigate} from "react-router-dom";
import {LogInFormType} from "../../types/types";
import {Button, Form, Input} from "antd";
import s from "./Login.module.css"

type PropsType = {
    onSubmit: (formData: LogInFormType) => void
    errorMessage: string
}

type AppPropsType = {
    isAuth: boolean
}


const LoginForm: React.FC<PropsType> = ({onSubmit, errorMessage}) => {
    return (
        <Form
            onFinish={onSubmit}
            className={s.login__form}
        >
            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your email',
                    },
                ]}>
                <Input
                    // prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Email"/>
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password',
                    },
                ]}
            >
                <Input
                    // prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit"
                        // className="login-form-button"
                >
                    Log in
                </Button>
            </Form.Item>
            <div className={s.form__error}>
                {(errorMessage.length > 0) && errorMessage}
            </div>
        </Form>
    )
}

const Login: React.FC<AppPropsType> = ({isAuth}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let errorMessage = useSelector(getErrorMessage);
    const onSubmit = (values: LogInFormType) => {
        dispatch(logIn(values.email, values.password));
    }
    useEffect(() => {
        if (isAuth) {
            return navigate("/contacts");
        }
    }, [isAuth, navigate]);
    return (
        <div className={s.login}>
            <LoginForm onSubmit={onSubmit} errorMessage={errorMessage}/>
        </div>
    )
}
export default Login;