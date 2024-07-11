
import { AllCategory ,Get_Errors} from '../type.js'


const initial = {
    myProducts: [],
    loading: true,
}

const MyProductsRed = (state = initial, action) => {
    switch (action.type) {
        case "getMyProducts":
            return {
                ...state,
                myProducts: action.payload,
                loading: false
            }
        case Get_Errors:
            return {
                loading: true,
                myProducts: action.payload
            }
        default:
            return state;
    }
}

export default MyProductsRed