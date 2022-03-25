import React from "react";
import {ContactType} from "../../../types/types";

type PropsType = {
    // editContact: (contactData: ContactType) => void
    // validators: Array<Function>
    // name: string
    // surname: string
    // image: string
    // phone: string
    contactsList: Array<ContactType>
    currentContactDataLength: number
}

const SearchContactForm: React.FC<PropsType> = ({contactsList, currentContactDataLength}) => {
    const names = contactsList.map(el => el.name);
    const surnames = contactsList.map(el => el.surname);
    const phones = contactsList.map(el => el.phone);
    for (let i = 0; i <= currentContactDataLength; i++) {
        if (phones[i]) {
            // x => x.title.toLowerCase().includes(searchStr.toLowerCase()))
            if (phones[i].toLowerCase().includes("10")) {
                console.log(i)
            };
        }
        // console.log(i)
        // console.log(names[i]);
    }
    // let findItems = names.filter(el => el === "Nikita");
    // console.log(findItems)
    // let findPhones = phones.filter(el => el === "109988888");
    // console.log(findPhones)
    return (
        <div>d</div>
    )
};

export default SearchContactForm;