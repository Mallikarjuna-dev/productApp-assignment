
import axios from "axios"
const Server_url = "https://productapp-json-server.onrender.com/products"


export const fetchProducts = () => async (dispatch) => {
    dispatch({ type: 'GET_ITEM_REQUEST' });
    try {
        const res = await axios.get(Server_url)
        dispatch({ type: 'GET_ITEM_SUCCESS', payload: res.data })
    } catch (error) {
        dispatch({ type: 'GET_ITEM_FAILURE', payload: error.message })
    }
}