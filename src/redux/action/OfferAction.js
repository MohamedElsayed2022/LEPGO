import baseURL from '../../Api/baseUrl'
import {Get_Errors} from '../type'
const GetAllOffersShow = () => {
    // const config = {
    //     headers: {
    //         Authorization: `Bearer ${localStorage.getItem("token")}`
    //     }
    // }
    return async (dispatch) => {
        try {
            let res = await baseURL.get('/api/v1/offers') 
            dispatch({ type: "GetAllOffers", payload: res.data })
        } catch (e) {
            dispatch({ type: Get_Errors, payload: "Error through Loadin Data" + e })
        }
    }
}

export {GetAllOffersShow}