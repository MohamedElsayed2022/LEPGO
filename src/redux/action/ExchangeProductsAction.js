import baseURL from '../../Api/baseUrl'
import { GetAllProducts, Get_Errors } from '../type'

const getAllExchangeProducts = () => {
    return async (dispatch) => {
        try {
            let res = await baseURL.get('/api/v1/exchange/products')
            dispatch({ type: GetAllProducts, payload: res.data })
        } catch (e) {
            dispatch({ type: "Get_Errors", payload: "Error through Loadin Data" + e })
        }
    }
}

const getAllExProductsPage = (page) => {
    return async (dispatch) => {
        try {
            let res = await baseURL.get(`/api/v1/exchange/products?page=${page}`)

            dispatch({ type: GetAllProducts, payload: res.data })
        } catch (e) {
            dispatch({ type: 'Get_Errors', payload: "Error through Loadin Data" + e })
        }
    }
}

export {getAllExchangeProducts ,getAllExProductsPage}