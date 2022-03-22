import {UserType} from "../types/types";
import {BaseThunkType, InferActionsTypes} from "./reduxStore";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const SET_USER_DATA = "auth/SET_USER_DATA"
const SET_ERROR_MESSAGE = "/auth/SET_ERROR_MESSAGE";

const initialState = {
    userList: [] as Array<UserType>,
    // loginedUser: {} as <UserType>
}


const authReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case SET_USER_DATA:
        {
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
    setAuthUserDataAC: (userId: number, login: string, isAuth: boolean) => ({type: SET_USER_DATA, payload: {userId, login, isAuth}} as const),
    setErrorMessage: (errorMessage: string) => ({type: SET_ERROR_MESSAGE, payload: errorMessage} as const)
}

export const requestAuthUser = (email: string, password: string): ThunkType => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        const response = await authAPI.login(email, password);
        if (response) {
            dispatch(actions.setAuthUserDataAC(response.userId, response.login, response.isAuth));
        } else {
            dispatch(actions.setErrorMessage("Wrong email or password"))
        }

    }
}

export default authReducer;

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>

// export const getItemsList = (state: AppStateType) => {
//     return state.userPage.;
// }
