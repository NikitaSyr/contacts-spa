import React, {useState} from 'react';
// import Preloader from "../../Common/Preloader/Preloader";
import s from './ContactItem.module.css';
import {ContactType} from "../../../types/types";
import Preloader from "../../Common/Preloader/Preloader";
import {actions} from "../../../redux/contactsReducer";
import {useDispatch} from "react-redux";
import EditContactForm from "../ContactForms/EditContactForm";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";


type PropsType = {
    contactId : number
    name : string
    surname : string
    image : string
    phone : string
    deleteContact: Function
}

const ContactItem: React.FC<PropsType> = ({contactId, name, surname, image, phone,
                                              deleteContact}) => {
    let [editMode, setEditMode] = useState(false);
    const dispatch = useDispatch();
    const activateEditMode = () => {
        setEditMode(true);
    }
    const editContact = (contactData: ContactType) => {
        let {name, surname, image, phone} = contactData;
        dispatch(actions.editContactAC(contactId, name, surname, image, phone));
        setEditMode(false);
    }
    return (
        <div className={s.contacts__item}>
            {editMode
            ? <EditContactForm editContact={editContact} validators={[requiredField, maxLengthCreator]}
                               name={name} surname={surname} image={image} phone={phone} contactId={contactId}/>
            : <>
                    <div>{name}</div>
                    <div>{surname}</div>
                    <div><img src={image} alt="" className={s.image__content}/></div>
                    <div>{phone}</div>
                    <div>
                        <button onClick={() => {
                            activateEditMode()
                        }}
                        >Edit contact
                        </button>
                    </div>
                </>}
            <div>
                <button onClick={() => {
                    deleteContact(contactId)
                }}
                >Delete contact
                </button>
            </div>
        </div>
    )
}

export default ContactItem;