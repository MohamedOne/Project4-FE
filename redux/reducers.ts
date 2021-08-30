import { AppAction, IAppActions } from "./actions";
import { IAppState, initialState } from "./store";


export const reducers = (state: IAppState = initialState, action: IAppActions): IAppState => {
    const newState = {...state};
    switch(action.type) {
        case AppAction.LOGIN:
            return {...newState, user: action.payload.user};
        case AppAction.LOGOUT:
            return {...state, auth: undefined};
        case AppAction.UPDATE_CART_COUNT:
            return {...state, cartCount: action.payload?.cartCount};
        case AppAction.UPDATE_CART:
            return {...state, cart: state.cart.concat(action.payload?.cart), cartCount: action.payload?.cartCount};
        case AppAction.SET_MERCHANDISE:
            return {...state, merchandise: action.payload?.merchandise};
        case AppAction.SWITCH_LOGIN_SIGNUP:
            return {...state, isSigningUp: action.payload?.isSigningUp};
        case AppAction.REMOVE_CART_ITEM:
            return {
                ...state, 
                cart: state.cart?.filter((item: any) => item !== action.payload.cartItem),
                cartCount: action.payload.cartCount    
            }
        default:
            return newState;
    }
}