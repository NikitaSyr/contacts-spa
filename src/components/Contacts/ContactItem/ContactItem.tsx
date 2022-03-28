import React, {useState} from 'react';
import s from './ContactItem.module.css';
import {ContactType} from "../../../types/types";
import {actions} from "../../../redux/contactsReducer";
import {useDispatch} from "react-redux";
import EditContactForm from "../ContactForms/EditContactForm";
import {Button} from "antd";
import defaultUser from '../../../assets/img/user_profile_default.png';

interface PropsType  {
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
    const deactivateEditMode = () => {
        setEditMode(false);
    }
    const editContact = (contactData: ContactType) => {
        let {name, surname, image, phone} = contactData;
        dispatch(actions.editContactAC(contactId, name, surname, image, phone));
        setEditMode(false);
    }
    return (
        <div className={s.list__item}>
            {editMode
            ? <div className={s.item__form}><EditContactForm editContact={editContact}
                                  name={name} surname={surname} image={image} phone={phone} deactivateEditMode={deactivateEditMode}/>
                    <Button onClick={() => {
                        deleteContact(contactId)
                    }}
                            className={s.item__delete}
                    >Delete contact
                    </Button></div>
            : <div className={s.item__info}>
                    <div><img src={image ? image : defaultUser} alt=""
                              onError={e => { e.currentTarget.src = defaultUser; }}
                              className={s.item__image}/></div>
                    <div className={s.item__data}>
                        <div className={s.item__name}>{name} {surname}</div>
                        <div>{phone}</div>
                        <div className={s.item__buttons}><Button onClick={() => {
                            activateEditMode()
                        }}
                        >Edit contact
                        </Button>
                            <Button onClick={() => {
                                deleteContact(contactId)
                            }}
                                    className={s.item__delete}
                            >Delete contact
                            </Button></div>
                    </div>
                </div>}
        </div>
    )
}

export default React.memo(ContactItem);