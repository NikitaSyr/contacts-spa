export type FieldValidatorType = (value: string) => string | undefined

export const requiredField = (value: string) => {
    if (value) {
        return undefined;
    } else {
        return 'Field is required'
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


export const composeValidators = (...validators : Array<Function>) => (value: string | undefined) =>
    validators.reduce((error, validator) => error || validator(value), undefined);