import baseURL from '../../Api/baseUrl'
import { AllCategory ,Get_Errors} from '../type'
const getAllGovernments = () => {
    // const config = {
    //     headers: {
    //         Authorization: `Bearer ${localStorage.getItem("token")}`
    //     }
    // }
    return async (dispatch) => {
        try {
            let res = await baseURL.get('/api/v1/governorates') 
            dispatch({ type: "getAllGovernments", payload: res.data })
        } catch (e) {
            dispatch({ type: Get_Errors, payload: "Error through Loadin Data" + e })
        }
    }
}

export {getAllGovernments}