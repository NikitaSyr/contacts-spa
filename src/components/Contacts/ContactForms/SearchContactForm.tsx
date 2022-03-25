import React, {useState} from "react";
import {ContactType} from "../../../types/types";
import ContactItem from "../ContactItem/ContactItem";

type PropsType = {
    // editContact: (contactData: ContactType) => void
    // validators: Array<Function>
    // name: string
    // surname: string
    // image: string
    // phone: string
    contactsList: Array<ContactType>
    currentContactDataLength: number
    setSearchMode: Function
    // contactElement: Array<ContactType>
}

const SearchContactForm: React.FC<PropsType> = ({contactsList, currentContactDataLength, setSearchMode}) => {
    // let [searchTerm, setSearchTerm] = useState("" as string);
    // let [foundContactIdArray, setFoundContactIdArray] = useState([] as Array<number>);
    // const searchFunction = (contactsList: Array<ContactType>, searchTerm: string) => {
    //     // const mapListFunction = (mainObject: Array<ContactType>, subObjectArray: Object, elementToMap: object) => {
    //     //     return subObjectArray = mainObject.map(el => el.elementToMap);
    //     // }
    //     //
    //     let names = contactsList.map(el => el.name);
    //     let surnames = contactsList.map(el => el.surname);
    //     let phones = contactsList.map(el => el.phone);
    //     let localContactIdArray = [];
    //     for (let i = 0; i <= currentContactDataLength; i++) {
    //         if (names[i]) {
    //             if (names[i].toLowerCase().includes(searchTerm.toLowerCase())) {
    //                 localContactIdArray.push(i)
    //             }
    //         }
    //         if (surnames[i]) {
    //             if (names[i].toLowerCase().includes(searchTerm.toLowerCase())) {
    //                 if (!localContactIdArray.includes(i)) {
    //                     localContactIdArray.push(i)
    //                 }
    //
    //             }
    //         }
    //         if (phones[i]) {
    //             if (phones[i].toLowerCase().includes(searchTerm.toLowerCase())) {
    //                 if (!localContactIdArray.includes(i)) {
    //                     localContactIdArray.push(i)
    //                 }
    //             }
    //         }
    //     }
    //     setFoundContactIdArray(localContactIdArray);
    // }
    // const onSearchTermChange = (e: { currentTarget: HTMLInputElement}) => {
    //     let currentInput = e.currentTarget.value;
    //     setSearchTerm(currentInput);
    //     searchFunction(contactsList, currentInput)
    // }
    // const searchContactElement = contactsList.map(contact =>
    //     <ContactItem key={contact.contactId} contactId={contact.contactId} name={contact.name} surname={contact.surname}
    //                  image={contact.image} phone={contact.phone} deleteContact={deleteContact}
    //     />)
    return (
        <div>
            {/*<input*/}
            {/*       onChange={onSearchTermChange}*/}
            {/*       autoFocus={true}*/}
            {/*       type="text"*/}
            {/*       value={searchTerm}*/}
            {/*/>*/}
            {/*<button onClick={() => {*/}
            {/*    setSearchMode(false)}*/}
            {/*}>Cancel</button>*/}
        </div>
    )
};

export default SearchContactForm;