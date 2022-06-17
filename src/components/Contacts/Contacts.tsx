import React, {FC, useCallback, useEffect, useState} from "react";
import s from './Contacts.module.css';
import {useNavigate} from "react-router-dom";
import ContactItem from "./ContactItem/ContactItem";
import {useDispatch, useSelector} from "react-redux";
import {actions, getContactsData} from "../../redux/contactsReducer";
import {ContactType} from "../../types/types";
import AddContactForm from "./ContactForms/AddContactForm";
import {Button, Input} from "antd";

type PropsType = {
    isAuth: boolean
}


const Contacts: FC<PropsType> = ({isAuth}) => {
    const dispatch = useDispatch();
    const [addMode, setAddMode] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const contactsList = useSelector(getContactsData);


    const addContact = (contactData: ContactType) => {
        const {name, surname, image, phone} = contactData;
        const uniqId = Date.now();
        dispatch(actions.addContactAC(uniqId, name, surname, image, phone));
        setAddMode(false)
    }

    const activateMode = (setter: Function) => {
        setter(true);
    }
    const deactivateAddMode = () => {
        setAddMode(false);
    }
    const deleteContact = useCallback(
        (contactId: number) => {
            dispatch(actions.deleteContactAC(contactId));
        }, [dispatch]
    )

    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuth) {
            return navigate("/login");
        }
    }, [isAuth, navigate]);

    const onSearchTermChange = (e: { currentTarget: HTMLInputElement }) => {
        setSearchTerm(e.currentTarget.value);
    }

    const contactItemsList = contactsList.filter((item) => {
        return (item.surname + item.name + item.phone).toLowerCase().includes(searchTerm.trim().toLowerCase());
    }).map(item => (
        <ContactItem {...item} deleteContact={deleteContact} key={item.contactId}/>
    ))

    return (
        <div className={s.contacts}>
            {/*<div className={s.contacts__row}>*/}
                <div className={s.contacts__search}>
                    <Input onChange={onSearchTermChange} type="text"
                           value={searchTerm} autoFocus={true}
                           placeholder={"Type here to start search"}/>
                    <Button onClick={() => {
                        setSearchTerm("")
                    }}>
                        Cancel search
                    </Button>
                </div>
            {/*</div>*/}
            <div className={s.contacts__row}>
                {/*<div className={s.contacts__list}>*/}
                    {contactItemsList}

            </div>
            <div className={s.contacts__row}>
                {addMode
                    ? <AddContactForm addContact={addContact} deactivateAddMode={deactivateAddMode}/>
                    : <Button onClick={() => {
                        activateMode(setAddMode)
                    }}>Add contact</Button>}
            </div>
        </div>
    )
}

export default Contacts;