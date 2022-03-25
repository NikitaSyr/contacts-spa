import {AppStateType, BaseThunkType, InferActionsTypes} from "./reduxStore";

const ADD_CONTACT = 'contacts/ADD_CONTACT';
const INCREMENT_ID = 'contacts/INCREMENT_ID';
const DELETE_CONTACT = 'contacts/DELETE_CONTACT';
const EDIT_CONTACT = 'contacts/EDIT_CONTACT';

let initialState = {
    contactsData: [
        // {contactId: null as (number | null), name: null as string | null, surname: null as string | null, image: null as string | null, phone: null as (number | null)}
        {contactId: 0, name: "Nikita", surname: "Syrtsov", image: "https://i.imgur.com/atH8nCi.jpg", phone: "109988888"},
        {contactId: 1, name: "User3", surname: "", image: "", phone: "1038966507"},
        {contactId: 2, name: "Sasha", surname: "Kim", image: "", phone: "103643463"},
        {contactId: 3, name: "Pasha", surname: "Yakovlev", image: "https://i.imgur.com/uNXkBQW.png", phone: "109998887"},
        {contactId: 4, name: "Masha", surname: "Ivanova", image: "https://i.imgur.com/IGZpijv.jpg", phone: "104536546"},
        {contactId: 5, name: "Dima", surname: "Timofeev", image: "https://i.imgur.com/cO8MgYU.jpg", phone: "106456454"},
        {contactId: 6, name: "Vanya", surname: "Poddubniy", image: "https://i.imgur.com/4vEGMXk.jpg", phone: "10234235"},
        {contactId: 7, name: "Sonya", surname: "Ivuskina", image: "", phone: "103456634"},
        {contactId: 8, name: "Anonymous", surname: "", image: "", phone: "103453468"},
        {contactId: 9, name: "Samurai", surname: "", image: "https://i.imgur.com/Y6PJA6Q.jpg", phone: "106967678"},
        {contactId: 10, name: "User2", surname: "", image: "", phone: "1034634634"}
    ],
    // as Array<ContactType>
    contactsDataLength: 11 as number
};

const contactsReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_CONTACT: {
            let newContact = {
                contactId: action.payload.contactId,
                name: action.payload.name,
                surname: action.payload.surname,
                image: action.payload.image,
                phone: action.payload.phone,
            }
            return {
                ...state,
                contactsData: [...state.contactsData, newContact]
            }
        }
        case INCREMENT_ID: {
            return {
                ...state,
                contactsDataLength: state.contactsDataLength + 1
            }
        }
        case DELETE_CONTACT: {
            let contactToRemove = state.contactsData.find(item => action.id === item.contactId)
            let newContactsData = state.contactsData.filter(item => action.id !== item.contactId)
            if (contactToRemove) {
                return {
                    ...state,
                    contactsData: newContactsData
                }
            }
            return state;
        }
        case EDIT_CONTACT: {

            const id = state.contactsData.findIndex(contact => contact.contactId === action.payload.contactId);
            const editedContactsData = [...state.contactsData];
            // const editedContactsData = state.contactsData;
            // const id = action.payload.contactId;
            // console.log(id)
            // editedContactsData[id] = {
            //     contactId: action.payload.contactId,
            //     name: action.payload.name,
            //     surname: action.payload.surname,
            //     image: action.payload.image,
            //     phone: action.payload.phone,
            // };
            // console.log(editedContactsData[id])
            // editedContactsData[id].contactId = action.payload.contactId
            editedContactsData[id].name = action.payload.name
            editedContactsData[id].surname = action.payload.surname
            editedContactsData[id].image = action.payload.image
            editedContactsData[id].phone = action.payload.phone
            // console.log(editedContactsData)
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
    incrementIdAC: (currentContactDataLength: number) =>
        ({type: INCREMENT_ID, payload: {currentContactDataLength}} as const),
    deleteContactAC: (id : number) => ({type: DELETE_CONTACT, id} as const),
    editContactAC: (contactId: number, name: string, surname: string, image: string, phone: string) =>
        ({type: EDIT_CONTACT, payload: {contactId, name, surname, image, phone}} as const)
}

// export const addContact = (contactData: ContactType) => {
//     return (dispatch: Dispatch<ActionsTypes>) => {
//         let {contactId, name, surname, image, phone} = contactData
//         dispatch(actions.addContactAC(contactId, name, surname, image, phone));
//     }
// }

export default contactsReducer;

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>

export const getContactsData = (state: AppStateType) => {
    return state.contacts.contactsData
}

export const getContactsDataLength = (state: AppStateType) => {
    return state.contacts.contactsDataLength
}

