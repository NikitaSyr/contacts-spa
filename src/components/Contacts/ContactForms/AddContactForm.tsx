import s from "../Contacts.module.css";
import React from "react";
import {Form, Field} from 'react-final-form'
import {ContactType} from "../../../types/types";
import {composeValidators, requiredField, maxLengthCreator} from "../../../utils/validators/validators";
import {Input} from "../../Common/FormsControls/FormsControls";

type PropsType = {
    addContact: (contactData: ContactType) => void
    // addContact: Function
    // requiredField: () => void
    // maxLengthCreator: (value : number) => void
    validators: Array<Function>
    // incrementId: Function
}

const AddContactForm: React.FC<PropsType> = ({addContact, validators }) => {
    return (
        <Form onSubmit={addContact} validators={validators}>
            {({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field validate={composeValidators(requiredField, maxLengthCreator(50))}
                               component={Input}
                               name="name"/>
                    </div>
                    <div>
                        <Field validate={maxLengthCreator(50)}
                               component={Input}
                               name="surname"/>
                    </div>
                    <div>
                        <Field validate={maxLengthCreator(500)}
                               component={Input}
                               name="image"/>
                    </div>
                    <div>
                        <Field validate={composeValidators(requiredField, maxLengthCreator(12))}
                               component={Input}
                               name="phone"/>
                    </div>
                    <div>
                        <button>
                            Save contact
                        </button>
                    </div>
                </form>
            )}
        </Form>
    )
};

export default AddContactForm;