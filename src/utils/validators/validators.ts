export const requiredField = (value: string) => {
    if (value) {
        return undefined;
    } else {
        return 'Field is required'
    }
}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if (value) {
        if (value.length > maxLength || value === "") {
            return `Max length is ${maxLength} symbols`;
        } else {
            return undefined;
        }
    }
}


// export const composeValidators = (...validators) => (value) =>
//     validators.reduce((error, validator) => error || validator(value), undefined);