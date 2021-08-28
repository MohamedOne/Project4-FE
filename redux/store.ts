import { IUser } from "../models/User"

export interface IAppState {
    auth?: any;
    cartCount: number;
    merchandise?: any;
    cart?: any;
    user?: IUser
}

export const initialState: IAppState ={
    auth: undefined,
    cartCount: 0,
    merchandise: undefined,
    cart: [],
    user: undefined
}