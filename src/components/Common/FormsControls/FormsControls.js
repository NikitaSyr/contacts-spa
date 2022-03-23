import React from "react";
import styles from "./FormsControls.module.css"

/*
const FormControl = ({input, meta, child, elementName, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${styles.form__control} ${hasError ? styles.error : ""}`}>
            <elementName {...input} {...props}/>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
*/

// export const Textarea = ({input, meta: {touched, error}, ...props}) => {
//     const hasError = touched && error;
//     return (
//         <div className={`${styles.form__control} ${hasError ? styles.error : ""}`}>
//             <textarea {...input} {...props} />
//             {hasError && <span>{error}</span>}
//         </div>
//     )
// }

export const Input = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={`${styles.form__control} ${hasError ? styles.error : ""}`}>
            <input {...input} {...props}/>
            {hasError && <span>{error}</span>}
        </div>
    )
}