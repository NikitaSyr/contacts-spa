import s from './Header.module.css';
import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.header__row}>
                <div className={s.header__column}>
                    <NavLink className={`${s.header__button} button`}
                             to={`cart`}>Login</NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header;