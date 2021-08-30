import { IUser } from "../models/User"

export interface IAppState {
    auth?: any;
    cartCount?: number;
    merchandise?: any;
    cart?: any;
    user?: IUser;
    isSigningUp?: boolean
}

export const initialState: IAppState ={
    auth: undefined,
    cartCount: 0,
    merchandise: [],
    cart: [],
    user: undefined,
    isSigningUp: false
}