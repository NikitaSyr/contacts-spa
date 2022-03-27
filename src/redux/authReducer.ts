// import {UserType} from "../types/types";
import {AppStateType, BaseThunkType, InferActionsTypes} from "./reduxStore";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const SET_USER_DATA = "auth/SET_USER_DATA"
const SET_ERROR_MESSAGE = "/auth/SET_ERROR_MESSAGE";

interface State {
    userId: number | null,
    login: string | null,
    isAuth: boolean,
    errorMessage: string,
}

const initialState: State = {
    userId: null,
    login: null,
    isAuth: false,
    errorMessage: "",
}


const authReducer = (state = initialState, action: ActionsTypes): State => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
        case SET_ERROR_MESSAGE: {
            return {
                ...state,
                errorMessage: action.payload,
            }
        }
        default:
            return state;
    }
}

export const actions = {
    setAuthUserDataAC: (userId: number | null, login: string | null, isAuth: boolean) => ({
        type: SET_USER_DATA,
        payload: {userId, login, isAuth}
    } as const),
    setErrorMessage: (errorMessage: string) => ({type: SET_ERROR_MESSAGE, payload: errorMessage} as const)
}

export const logIn = (email: string, password: string): ThunkType => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        const response = await authAPI.login(email, password);
        if (response) {
            let {userId, login, isAuth} = response;
            dispatch(actions.setAuthUserDataAC(userId, login, isAuth));
            dispatch(actions.setErrorMessage(""))
        } else {
            dispatch(actions.setErrorMessage("Wrong email or password"));
        }

    }
}

export const logOut = (): ThunkType => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        dispatch(actions.setAuthUserDataAC(null, null, false));
    }
};

export default authReducer;

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>

export const getCurrentUserId = (state: AppStateType) => {
    return state.auth.userId
}

export const getCurrentUserLogin = (state: AppStateType) => {
    return state.auth.login
}

export const getUserAuth = (state: AppStateType) => {
    return state.auth.isAuth
}

export const getErrorMessage = (state: AppStateType) => {
    return state.auth.errorMessage
}

export const getAuthData = (state: AppStateType) => {
    return state.auth
}


