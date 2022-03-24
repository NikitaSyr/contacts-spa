import React, {useState} from 'react';
// import Preloader from "../../Common/Preloader/Preloader";
import s from './ContactItem.module.css';
import {ContactType} from "../../../types/types";
import Preloader from "../../Common/Preloader/Preloader";


type PropsType = {
    contactId : number
    name : string
    surname : string
    image : string
    phone : number
    deleteContact: Function
}

const ContactItem: React.FC<PropsType> = ({contactId, name, surname, image, phone,
                                              deleteContact}) => {
    let [editMode, setEditMode] = useState(false);
    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        // props.updateStatus(status);
    }
    return (
        <div className={s.contacts__item}>
            {/*<div>{contactId}</div>*/}
            <div>{name}</div>
            <div>{surname}</div>
            <div><img src={image} alt="" className={s.image__content}/></div>
            <div>{phone}</div>
            <button onClick={() => {
                deleteContact(contactId)
            }}
            >Edit contact</button>
            <button onClick={() => {
                    deleteContact(contactId)
                }}
            >Delete contact</button>
        </div>
    )
}

export default ContactItem;