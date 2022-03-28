import s from "./../ContactItem/ContactItem.module.css";
import React from "react";
import {ContactType} from "../../../types/types";
import {Button, Form, Input} from "antd";

type PropsType = {
    addContact: (contactData: ContactType) => void
    deactivateAddMode: () => void
}

const AddContactForm: React.FC<PropsType> = ({addContact, deactivateAddMode}) => {
    return (
        <div className={s.list__item}>
            <Form
                className={s.item__data}
                onFinish={addContact}
                size={"small"}
            >
                <Form.Item
                    name="name"
                    rules={[
                        {
                            required: true,
                            // message: 'Please input contact name',
                            max: 30
                        },
                    ]}>
                    <Input
                        placeholder="Name"
                    />
                </Form.Item>
                <Form.Item
                    name="surname"
                    rules={[
                        {
                            max: 30
                        },
                    ]}
                >
                    <Input
                        placeholder="Surname"/>
                </Form.Item>
                <Form.Item
                    name="image"
                    rules={[
                        {
                            max: 150
                        }
                    ]}
                >
                    <Input
                        placeholder="URL link"/>
                </Form.Item>
                <Form.Item
                    name="phone"
                    rules={[
                        {
                            required: true,
                            // message: 'Please input contact phone',
                            max: 30
                        },
                    ]}>
                    <Input
                        placeholder='phone number'/>
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit">
                        Save contact
                    </Button>
                    <Button onClick={deactivateAddMode}>
                        Cancel adding
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
};

export default AddContactForm;