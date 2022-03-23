import {FC, useEffect} from "react";
// import {ItemsType} from "../../types/types";
// import ContactItem from "./ContactItem/ContactItem";
import s from './Contacts.module.css';
import {useNavigate} from "react-router-dom";
// import {useDispatch} from "react-redux";
// import {actions} from "../../redux/itemsReducer";

type PropsType = {
    isAuth: boolean
//     itemsList: Array<ItemsType>
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
// const Contacts = () => {
    // const dispatch = useDispatch();
    // const addItemToCartById = (id: number) => {
    //     dispatch(actions.addToCartAC(id))
    // }

    // const catalogElement = props.itemsList.map(item =>
    //     <ContactItem key={item.id} id={item.id} image={item.image} name={item.name} price={item.price}
    //                  addItemToCartById={addItemToCartById}
    //     />)
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuth){
            return navigate("/login");
        }
    },[isAuth, navigate]);
    return (
        <div className={s.contacts}>
            <div className={s.contacts__row}>
                Contacts
                {/*{catalogElement}*/}
            </div>
        </div>
    )
}

export default Contacts;