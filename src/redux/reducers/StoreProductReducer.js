
import { AllCategory ,Get_Errors} from '../type.js'


const initial = {
    storeProducts: [],
    loading: true,
}

const StoreProductReducer = (state = initial, action) => {
    switch (action.type) {
        case "storeProduct":
            return {
                ...state,
                storeProducts: action.payload,
                loading: false
            }
        case "Get_Errors":
            return {
                loading: true,
                storeProducts: action.payload
            }
        default:
            return state;
    }
}

export default StoreProductReducer