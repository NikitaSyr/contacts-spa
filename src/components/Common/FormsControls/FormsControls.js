import React from "react";
import styles from "./FormsControls.module.css"

export const Input = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={`${styles.form__control} ${hasError ? styles.error : ""}`}>
            <input {...input} {...props}/>
            {hasError && <span>{error}</span>}
        </div>
    )
}