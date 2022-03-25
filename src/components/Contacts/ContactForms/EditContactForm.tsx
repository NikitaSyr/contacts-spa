import s from "../Contacts.module.css";
import React from "react";
import {Form, Field} from 'react-final-form'
import {ContactType} from "../../../types/types";
import {composeValidators, requiredField, maxLengthCreator} from "../../../utils/validators/validators";
import {Input} from "../../Common/FormsControls/FormsControls";

type PropsType = {
    editContact: (contactData: ContactType) => void
    validators: Array<Function>
    name: string
    surname: string
    image: string
    phone: string
}

const EditContactForm: React.FC<PropsType> = ({editContact, validators, name, surname, image, phone}) => {
    return (
        <Form onSubmit={editContact} validators={validators}>
            {({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        Name: <Field validate={composeValidators(requiredField, maxLengthCreator(40))}
                                     component={Input}
                                     initialValue={name}
                                     name="name"/>
                    </div>
                    <div>
                        Surname: <Field validate={maxLengthCreator(40)}
                                        component={Input}
                                        initialValue={surname}
                                        name="surname"/>
                    </div>
                    <div>
                        Image: <Field validate={maxLengthCreator(500)}
                                      component={Input}
                                      placeholder={"URL link"}
                                      initialValue={image}
                                      name="image"/>
                    </div>
                    <div>
                        Phone number: <Field validate={composeValidators(requiredField, maxLengthCreator(15))}
                                             component={Input}
                                             initialValue={phone}
                                             name="phone"/>
                    </div>
                    <div>
                        <button>
                            Save changes
                        </button>
                    </div>
                </form>
            )}
        </Form>
    )
};

export default EditContactForm;