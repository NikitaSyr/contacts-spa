import React from "react";
import {ContactType} from "../../../types/types";
import {Button, Form, Input} from "antd";

type PropsType = {
    editContact: (contactData: ContactType) => void
    deactivateEditMode: () => void
    name: string
    surname: string
    image: string
    phone: string
}

const EditContactForm: React.FC<PropsType> = ({editContact, name, surname, image, phone, deactivateEditMode}) => {
    return (
        <Form
            onFinish={editContact}
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
                ]}
                initialValue={name}>
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
                initialValue={surname}
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
                initialValue={image}
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
                ]}
                initialValue={phone}>
                <Input
                    placeholder='phone number'/>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit">
                    Save changes
                </Button>
                <Button onClick={deactivateEditMode}>
                    Cancel edit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default EditContactForm;