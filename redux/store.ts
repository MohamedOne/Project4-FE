
export interface IAppState {
    auth?: any;
    cartCount: number;
    merchandise?: any;
    cart?: any;
}

export const initialState: IAppState ={
    auth: undefined,
    cartCount: 0,
    merchandise: undefined,
    cart: undefined
}