import baseURL from '../../Api/baseUrl'
import { AllCategory ,Get_Errors} from '../type'
const getAllExchangeCategory = () => {
    return async (dispatch) => {
        try {
            let res = await baseURL.get('/api/v1/exchange/categories') 
            dispatch({ type: "AllCategory", payload: res.data })
        } catch (e) {
            dispatch({ type: "Get_Errors", payload: "Error through Loadin Data" + e })
        }
    }
}

export {getAllExchangeCategory}