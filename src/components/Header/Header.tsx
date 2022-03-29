import s from './Header.module.css';
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentUserLogin, logOut} from "../../redux/authReducer";
import {Button, Popover} from "antd";

type PropsType = {
    isAuth: boolean
}

const Header: React.FC<PropsType> = ({isAuth}) => {
    const dispatch = useDispatch();
    const onLogOut = () => {
        dispatch(logOut());
    }
    const userLogin = useSelector(getCurrentUserLogin);
    return (
        <header className={s.header}>
            <div className={s.header__row}>
                <div className={s.header__column}>
                    {isAuth &&
                        <Button href={'#/contacts'} className={s.header__button}>Contacts</Button>}
                </div>
                <div className={s.header__column}>
                    {isAuth
                        ?
                        <Popover
                        content={<Button onClick={onLogOut}>Log out</Button>}
                        trigger="hover">
                        <Button>{userLogin}</Button>
                        </Popover>

                        // <div className={s.header__info}>{userLogin} - <Button onClick={onLogOut}
                        //                              className={s.header__button}>Log out</Button></div>
                        : <Button href={'#/login'} className={s.header__button}>Log in</Button>}
                </div>
            </div>
        </header>
    )
}

export default Header;