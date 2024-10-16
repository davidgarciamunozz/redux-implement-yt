import { Dispatch } from "redux"
import { buyCake } from "./actions"
import { CakeState } from "./cakeReducer"

export const mapStateToProps = (state:CakeState) => {
    return {
        numOfCakes: state.numOfCakes
    }
}

export const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}