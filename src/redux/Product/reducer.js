import {
    GET_ITEM_REQUEST,
    GET_ITEM_SUCCESS,
    GET_ITEM_FAILURE
} from "./actionTypes"

const initialState = {
    products: [],
    isLoading: true,
    isError: false,

}

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEM_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: null
            }
        case GET_ITEM_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: null,
                products: action.payload
            }
        case GET_ITEM_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: action.payload
            }
        default:
            return state;
    }
}