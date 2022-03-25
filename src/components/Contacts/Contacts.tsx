import React, {FC, useEffect, useState} from "react";
// import {ItemsType} from "../../types/types";
// import ContactItem from "./ContactItem/ContactItem";
import s from './Contacts.module.css';
import {useNavigate} from "react-router-dom";
import ContactItem from "./ContactItem/ContactItem";
import {useDispatch, useSelector} from "react-redux";
import {actions, getContactsData, getContactsDataLength} from "../../redux/contactsReducer";
import {ContactType} from "../../types/types";
import {requiredField, maxLengthCreator} from "../../utils/validators/validators";
import AddContactForm from "./ContactForms/AddContactForm";
import SearchContactForm from "./ContactForms/SearchContactForm";
// import {useDispatch} from "react-redux";
// import {actions} from "../../redux/itemsReducer";

type PropsType = {
    isAuth: boolean
}

// "profile" : [
//     {"id": 0, "name": "Nikita", "status": "Hello there", "image": "https://i.imgur.com/atH8nCi.jpg", "phone": 8998888},
//     {"id": 1, "name": "User3", "status": "", "image": "", "phone": 838966507},
//     {"id": 2, "name": "Sasha", "status": "Sup", "image": "", "phone": 83643463},
//     {"id": 3, "name": "Pasha", "status": "Hello world!", "image": "https://i.imgur.com/uNXkBQW.png", "phone": 89998887},
//     {"id": 4, "name": "Masha", "status": "React is awesome!", "image": "https://i.imgur.com/IGZpijv.jpg", "phone": 84536546},
//     {"id": 5, "name": "Dima", "status": "", "image": "https://i.imgur.com/cO8MgYU.jpg", "phone": 86456454},
//     {"id": 6, "name": "Vanya", "status": "Hi there", "image": "https://i.imgur.com/4vEGMXk.jpg", "phone": 8234235},
//     {"id": 7, "name": "Sonya", "status": "", "image": "", "phone": 83456634},
//     {"id": 8, "name": "Anonymous", "status": "I'm anonymous", "image": "", "phone": 83453468},
//     {"id": 9, "name": "Samurai", "status": "JAPAN IS AWESOME", "image": "https://i.imgur.com/Y6PJA6Q.jpg", "phone": 86967678},
//     {"id": 10, "name": "User2", "status": "", "image": "", "phone": 834634634}
// ]


const Contacts: FC<PropsType> = ({isAuth}) => {
    const dispatch = useDispatch();
    // const addItemToCartById = (id: number) => {
    //     dispatch(actions.addToCartAC(id))
    // } incrementIdAC
    let [addMode, setAddMode] = useState(false as boolean);
    // let [searchMode, setSearchMode] = useState(false as boolean);
    let [searchTerm, setSearchTerm] = useState("" as string);

    let contactsList = useSelector(getContactsData);
    let currentContactDataLength = useSelector(getContactsDataLength);
    let [foundContactList, setFoundContactList] = useState([] as Array<ContactType>);
    const addContact = (contactData: ContactType) => {
        let {name, surname, image, phone} = contactData;
        dispatch(actions.addContactAC(currentContactDataLength, name, surname, image, phone));
        dispatch(actions.incrementIdAC(currentContactDataLength));
        setAddMode(false);
    }
    const activateMode = (setter: Function) => {
        setter(true);
    }
    const deleteContact = (contactId: number) => {
        dispatch(actions.deleteContactAC(contactId));
    }
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuth) {
            return navigate("/login");
        }
    }, [isAuth, navigate]);

    const searchFunction = (contactsList: Array<ContactType>, searchTerm: string) => {
        let names = contactsList.map(el => el.name);
        let surnames = contactsList.map(el => el.surname);
        let phones = contactsList.map(el => el.phone);
        let localContactIdArray: Array<number> = [];
        let filteredContactsList = [];
        // console.log(currentContactDataLength)
        for (let i = 0; i <= currentContactDataLength; i++) {
            const searchInArrayFunction = (arrayToSearch: Array<string>) => {
                if (arrayToSearch[i]) {
                    if (arrayToSearch[i].toLowerCase().includes(searchTerm.toLowerCase())) {
                        if (!localContactIdArray.includes(i)) {
                            localContactIdArray.push(i)
                        }
                    }
                }
            }
            searchInArrayFunction(names);
            searchInArrayFunction(surnames);
            searchInArrayFunction(phones);
            // if (names[i]) {
            //     if (names[i].toLowerCase().includes(searchTerm.toLowerCase())) {
            //         if (!localContactIdArray.includes(i)) {
            //             localContactIdArray.push(i)
            //         }
            //     }
            // }
            // if (surnames[i]) {
            //     if (names[i].toLowerCase().includes(searchTerm.toLowerCase())) {
            //         if (!localContactIdArray.includes(i)) {
            //             localContactIdArray.push(i)
            //         }
            //     }
            // }
            // if (phones[i]) {
            //     if (phones[i].toLowerCase().includes(searchTerm.toLowerCase())) {
            //         if (!localContactIdArray.includes(i)) {
            //             localContactIdArray.push(i)
            //         }
            //     }
            // }
            if (contactsList[i]) {
                // console.log("Первый уровень")
                if (localContactIdArray.includes(contactsList[i].contactId)) {
                    // console.log("Второй уровень")
                    filteredContactsList.push(contactsList[i]);
                }
            }
        }
        // console.log(filteredContactsList);
        setFoundContactList(filteredContactsList);
    }
    // console.log(contactsList[0].contactId)
    // console.log(foundContactIdArray)

    // foundContactIdArray.includes(contact.contactId)
    // const searchedContactById = ()

    const filteredContactElement = foundContactList.map(contact =>
        // Сравнить
    <ContactItem key={contact.contactId} contactId={contact.contactId} name={contact.name} surname={contact.surname}
                  image={contact.image} phone={contact.phone} deleteContact={deleteContact}
    />)
    const contactElement = contactsList.map(contact =>
        <ContactItem key={contact.contactId} contactId={contact.contactId} name={contact.name} surname={contact.surname}
                     image={contact.image} phone={contact.phone} deleteContact={deleteContact}
        />)
    // console.log(contactElement[0].props.contactId)
    const onSearchTermChange = (e: { currentTarget: HTMLInputElement }) => {
        let currentInput = e.currentTarget.value;
        setSearchTerm(currentInput);
        searchFunction(contactsList, currentInput)
    }
    return (
        <div className={s.contacts}>
            <div>
                <input
                    onChange={onSearchTermChange}
                    autoFocus={true}
                    type="text"
                    value={searchTerm}
                />
                <button onClick={() => {
                    setSearchTerm("")
                }
                }>Cancel search
                </button>
            </div>
            <div className={s.contacts__row}>
                {(searchTerm.length === 0)
                    ? <div>
                        {contactElement}
                        </div>
                    : <div>
                        {filteredContactElement}
                    </div>
                }
            </div>

            <div className={s.contacts__row}>
                {addMode
                    ? <AddContactForm addContact={addContact} validators={[requiredField, maxLengthCreator]}/>
                    : <button onClick={() => {
                        activateMode(setAddMode)
                    }}>Add contact</button>}
            </div>


            {/*<div className={s.contacts__row}>*/}
            {/*    {searchMode*/}
            {/*        // ? <AddContactForm addContact={addContact} validators={[requiredField, maxLengthCreator]}/>*/}
            {/*        ? <SearchContactForm contactsList={contactsList} currentContactDataLength={currentContactDataLength} setSearchMode={setSearchMode}/>*/}
            {/*        : <button onClick={() => {*/}
            {/*            activateMode(setSearchMode)*/}
            {/*        }}>Search</button>}*/}
            {/*</div>*/}
        </div>
    )
}

export default Contacts;