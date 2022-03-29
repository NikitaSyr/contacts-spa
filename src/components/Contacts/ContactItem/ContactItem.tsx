import React, {useState} from 'react';
import s from './ContactItem.module.css';
import {ContactType} from "../../../types/types";
import {actions} from "../../../redux/contactsReducer";
import {useDispatch} from "react-redux";
import EditContactForm from "../ContactForms/EditContactForm";
import {Button, Modal} from "antd";
import defaultUser from '../../../assets/img/user_profile_default.png';

interface PropsType {
    contactId: number
    name: string
    surname: string
    image: string
    phone: string
    deleteContact: Function
}

const ContactItem: React.FC<PropsType> = ({
                                              contactId, name, surname, image, phone,
                                              deleteContact
                                          }) => {
    let [editMode, setEditMode] = useState(false);
    const [visible, setVisible] = React.useState(false);
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

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        deleteContact(contactId)
        setVisible(false);
    };

    const handleCancel = () => {
        setVisible(false);
    };
    const DeleteButton = () => {
        return (
            <><Button onClick={showModal}
                      danger={true}
                      className={s.item__delete}
            >Delete contact
            </Button>
                <Modal
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <div>Are you sure want to delete this contact?</div>
                </Modal></>
        )
    }
    return (
        <div className={s.list__item}>
            {editMode
                ? <div className={s.item__form}><EditContactForm editContact={editContact}
                                                                 name={name} surname={surname} image={image}
                                                                 phone={phone} deactivateEditMode={deactivateEditMode}/>
                    <DeleteButton/></div>
                : <div className={s.item__info}>
                    <div><img src={image ? image : defaultUser} alt=""
                              onError={e => {
                                  e.currentTarget.src = defaultUser;
                              }}
                              className={s.item__image}/></div>
                    <div className={s.item__data}>
                        <div className={s.item__name}>{name} {surname}</div>
                        <div>{phone}</div>
                        <div className={s.item__buttons}><Button onClick={() => {
                            activateEditMode()
                        }}
                        >Edit contact
                        </Button>
                            <DeleteButton/></div>
                    </div>
                </div>}
        </div>
    )
}

export default React.memo(ContactItem);