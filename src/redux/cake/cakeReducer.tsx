//import actions
import { BUY_CAKE, CakeActionTypes } from "./constants"

export interface CakeState {
    numOfCakes: number;
}

export const initialState:CakeState = {
    numOfCakes: 20
}


export const cakeReducer = (state:CakeState = initialState, action: CakeActionTypes) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        default:
            return state
    }
}