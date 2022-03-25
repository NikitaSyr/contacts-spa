export type FieldValidatorType = (value: string) => string | undefined

export const requiredField = (value: string) => {
    if (value) {
        return undefined;
    } else {
        return `Field is required`
    }
}

export const maxLengthCreator = (maxLength: number): FieldValidatorType => (value: string) => {
    if (value) {
        if (value.length > maxLength || value === "") {
            return `Max length is ${maxLength} symbols`;
        } else {
            return undefined;
        }
    }
}

// export const minLengthCreator = (minLength: number): FieldValidatorType => (value: string) => {
//     if (value) {
//         if (value.length <= minLength || value === "") {
//             return `Min length is ${minLength} symbols`;
//         } else {
//             return undefined;
//         }
//     }
// }

// export const phoneValidator = (value: string) => {
//     if (value) {
//         let length = value.length;
//         for (let i = 0; i <= length; i++) {
//             let n = value[0];
//             let a = value[i];
//             let checkingForNumber = (variable: string) => {
//                 return (variable !== "0" && variable !== "1" && variable !== "2" && variable !== "3" && variable !== "4"
//                     && variable !== "5" && variable !== "6" && variable !== "7" && variable !== "8" && variable !== "9"
//                     && variable !== "+")
//             }
//             console.log(checkingForNumber(n));
//             console.log(checkingForNumber(a), a);
//             // console.log(n !== "0" && n !== "1" && n !== "2" && n !== "3" && n !== "4" && n !== "5" && n !== "6" && n !== "7" && n !== "8" && n !== "9" && n !== "+")
//             if (n !== "0" && n !== "1" && n !== "2" && n !== "3" && n !== "4" && n !== "5" && n !== "6" && n !== "7" && n !== "8" && n !== "9" && n !== "+") {
//                 return `Phone number should starts with + or number`;
//             } else if (a !== "0" && a !== "1" && a !== "2" && a !== "3" && a !== "4" && a !== "5" && a !== "6" && a !== "7" && a !== "8" && a !== "9" && n !== "+") {
//                 // console.log(a)
//                 return `Enter correct phone number`;
//             }
//         }
//         return undefined;
//     }
// }


export const composeValidators = (...validators: Array<Function>) => (value: string | undefined) =>
    validators.reduce((error, validator) => error || validator(value), undefined);