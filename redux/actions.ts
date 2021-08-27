export enum AppAction {
    LOGIN = 'Login',
    LOGOUT = 'Logout',
    UPDATE_CART = 'Update Cart',
    UPDATE_CART_COUNT = 'Update Cart Count',
    SET_MERCHANDISE = 'Set Merchandise'
}

export interface IAppActions {
    type: AppAction,
    payload: {
        auth?: any,
        cartCount: number,
        cart?: any,
        merchandise?: any

    }
}