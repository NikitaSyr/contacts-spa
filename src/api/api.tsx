import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
import {UserType} from "../types/types";

//json-server --watch db.json --port 4000

const config: AxiosRequestConfig = {
    baseURL: `http://localhost:4000/`,
};
const instance: AxiosInstance = axios.create(config);

const userObjectCreator = (userId: number, login: string, isAuth: boolean) => {
    return {
        userId: userId,
        login: login,
        isAuth: isAuth,
    };
}

const loginFlow = (responseLength: number, email: string, password: string, users: Array<UserType>) => {
    for (let i = 0; i < responseLength; i++) {
        if (email === users[i].email) {
            if (password === users[i].password) {
                return userObjectCreator(users[i].id, users[i].login, true);
            }
        }
    }
    return;
}

export const authAPI = {
    async login(email: string, password: string) {
        const response = await instance.get(`users`);
        const users = response.data;
        const responseLength = users.length;
        return loginFlow(responseLength, email, password, users);
    },
}
