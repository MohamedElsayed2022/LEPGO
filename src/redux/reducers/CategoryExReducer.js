
import { AllCategory ,Get_Errors} from '../type.js'


const initial = {
    Excategory: [],
    loading: true,
}

const CategoryExReducer = (state = initial, action) => {
    switch (action.type) {
        case "AllCategory":
            return {
                ...state,
                Excategory: action.payload,
                loading: false
            }
        case "Get_Errors":
            return {
                loading: true,
                Excategory: action.payload
            }
        default:
            return state;
    }
}

export default CategoryExReducer
