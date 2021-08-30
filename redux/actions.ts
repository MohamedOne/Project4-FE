import { IUser } from "../models/User";

export enum AppAction {
    LOGIN = 'Login',
    LOGOUT = 'Logout',
    UPDATE_CART = 'Update Cart',
    UPDATE_CART_COUNT = 'Update Cart Count',
    SET_MERCHANDISE = 'Set Merchandise',
    SWITCH_LOGIN_SIGNUP = 'Flip Card Boolean',
    REMOVE_CART_ITEM = 'Remove Cart Item'
}

export interface IAppActions {
    type: AppAction,
    payload: {
        auth?: any,
        cartCount?: number,
        cart?: any[],
        merchandise?: any,
        user?: IUser,
        isSigningUp?: boolean,
        cartItem: any

    }
}