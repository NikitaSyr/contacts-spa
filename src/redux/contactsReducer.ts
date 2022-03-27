import {AppStateType, InferActionsTypes} from "./reduxStore";

const ADD_CONTACT = 'contacts/ADD_CONTACT';
const DELETE_CONTACT = 'contacts/DELETE_CONTACT';
const EDIT_CONTACT = 'contacts/EDIT_CONTACT';

interface ContactItem {
    contactId: number,
    name: string
    surname: string,
    image: string,
    phone: string
}

interface State {
    contactsData: ContactItem[]
}

let initialState: State = {
    contactsData: [
        // {contactId: 0, name:. "Nikita", surname: "Syrtsov", image: "https://i.imgur.com/atH8nCi.jpg", phone: "109988888"},
        // {contactId: 1, name: "User3", surname: "", image: "", phone: "1038966507"},
        // {contactId: 2, name: "Sasha", surname: "Kim", image: "", phone: "103643463"},
        // {contactId: 3, name: "Pasha", surname: "Yakovlev", image: "https://i.imgur.com/uNXkBQW.png", phone: "109998887"},
        // {contactId: 4, name: "Masha", surname: "Ivanova", image: "https://i.imgur.com/IGZpijv.jpg", phone: "104536546"},
        // {contactId: 5, name: "Dima", surname: "Timofeev", image: "https://i.imgur.com/cO8MgYU.jpg", phone: "106456454"},
        // {contactId: 6, name: "Vanya", surname: "Poddubniy", image: "https://i.imgur.com/4vEGMXk.jpg", phone: "10234235"},
        // {contactId: 7, name: "Sonya", surname: "Ivuskina", image: "", phone: "103456634"},
        // {contactId: 8, name: "Anonymous", surname: "", image: "", phone: "103453468"},
        // {contactId: 9, name: "Samurai", surname: "", image: "https://i.imgur.com/Y6PJA6Q.jpg", phone: "106967678"},
        // {contactId: 10, name: "User2", surname: "", image: "", phone: "1034634634"}
    ],
};

const contactsReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_CONTACT: {
            return {
                ...state,
                contactsData: [...state.contactsData, {...action.payload}]
            }
        }
        case DELETE_CONTACT: {
            let newContactsData = state.contactsData.filter(item => action.id !== item.contactId)
            return {
                ...state,
                contactsData: newContactsData
            }
            return state;
        }
        case EDIT_CONTACT: {
            const {contactId, name, surname, image, phone} = action.payload
            const id = state.contactsData.findIndex(contact => contact.contactId === contactId);
            const editedContactsData = [...state.contactsData];
            editedContactsData[id].name = name
            editedContactsData[id].surname = surname
            editedContactsData[id].image = image
            editedContactsData[id].phone = phone
            return {
                ...state,
                contactsData: editedContactsData
            }
        }

        default:
            return state;
    }
}

export const actions = {
    addContactAC: (contactId: number, name: string, surname: string, image: string, phone: string) =>
        ({type: ADD_CONTACT, payload: {contactId, name, surname, image, phone}} as const),
    deleteContactAC: (id: number) => ({type: DELETE_CONTACT, id} as const),
    editContactAC: (contactId: number, name: string, surname: string, image: string, phone: string) =>
        ({type: EDIT_CONTACT, payload: {contactId, name, surname, image, phone}} as const)
}


export default contactsReducer;

type ActionsTypes = InferActionsTypes<typeof actions>

export const getContactsData = (state: AppStateType) => {
    return state.contacts.contactsData
}

