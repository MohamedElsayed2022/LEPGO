import { GetAllProducts ,Get_Errors} from '../type'

const initial = {
    product: [],
    deleteProducts:[],
    loading: true,
}

const ProductReducer = (state = initial, action) => {
    switch (action.type) {
        case GetAllProducts:
            return {
                ...state,
                product: action.payload,
                loading: false
            }
        case "createProduct":
            return {
                ...state,
                product: action.payload,
                loading: false
            }
        case "deleteProduct":
            return {
                ...state,
                deleteProducts: action.payload,
                loading: false
            }
        case "Get_Errors":
            return {
                loading: true,
                product: action.payload
            }
        default:
            return state;
    }
}

export default ProductReducer