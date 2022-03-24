import s from "../Contacts.module.css";
import React from "react";
import {Form, Field} from 'react-final-form'
import {ContactType} from "../../../types/types";
import {composeValidators, requiredField, maxLengthCreator} from "../../../utils/validators/validators";
import {Input} from "../../Common/FormsControls/FormsControls";

type PropsType = {
    addContact: (contactData: ContactType) => void
    // addContact: Function
    validators: Array<Function>
}

const AddContactForm: React.FC<PropsType> = ({addContact, validators }) => {
    return (
        <Form onSubmit={addContact} validators={validators}>
            {({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        Name: <Field validate={composeValidators(requiredField, maxLengthCreator(50))}
                               component={Input}
                               name="name"/>
                    </div>
                    <div>
                        Surname: <Field validate={maxLengthCreator(50)}
                               component={Input}
                               name="surname"/>
                    </div>
                    <div>
                        Image: <Field validate={maxLengthCreator(500)}
                               component={Input}
                               placeholder={"URL link"}
                               name="image"/>
                    </div>
                    <div>
                        Phone number: <Field validate={composeValidators(requiredField, maxLengthCreator(12))}
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