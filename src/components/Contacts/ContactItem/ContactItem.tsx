import React from 'react';
// import Preloader from "../../Common/Preloader/Preloader";
import s from './ContactItem.module.css';


type PropsType = {
    id: number
    image: string
    name: string
    price: number
    addItemToCartById: (id: number) => void
}

const ContactItem: React.FC<PropsType> = ({id, image, name, price, addItemToCartById}) => {
    return (
        <div className={s.contacts__item}>
            {/*<div className={s.item__image}>*/}
            {/*    {image*/}
            {/*        ? <img src={image} alt="" className={s.image__content}/>*/}
            {/*        : <Preloader/>}*/}
            {/*</div>*/}

        </div>
    )
}

export default ContactItem;