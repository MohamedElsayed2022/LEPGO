import { GetAllProducts ,Get_Errors} from '../type'

const initial = {
    Exproduct: [],
    // deleteProducts:[],
    loading: true,
}

const ProductReducer = (state = initial, action) => {
    switch (action.type) {
        case GetAllProducts:
            return {
                ...state,
                Exproduct: action.payload,
                loading: false
            }
        case "Get_Errors":
            return {
                loading: true,
                Exproduct: action.payload
            }
        default:
            return state;
    }
}

export default ProductReducer