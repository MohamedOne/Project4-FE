import { AppAction, IAppActions } from "./actions";
import { IAppState, initialState } from "./store";


export const reducers = (state: IAppState = initialState, action: IAppActions): IAppState => {
    const newState = {...state};
    switch(action.type) {
        case AppAction.LOGIN:
            return {...newState, ...action.payload};
        case AppAction.LOGOUT:
            return {...state, auth: undefined};
        case AppAction.UPDATE_CART_COUNT:
            return {...state, cartCount: action.payload?.cartCount};
        case AppAction.UPDATE_CART:
            return {...state, cart: action.payload?.cart};
        case AppAction.SET_MERCHANDISE:
            return {...state, merchandise: !action.payload?.merchandise};
        default:
            return newState;
    }
}