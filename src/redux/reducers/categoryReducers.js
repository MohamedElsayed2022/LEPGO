
import { AllCategory ,Get_Errors} from '../type.js'


const initial = {
    category: [],
    loading: true,
}

const CategoryReducer = (state = initial, action) => {
    switch (action.type) {
        case AllCategory:
            return {
                ...state,
                category: action.payload,
                loading: false
            }
        case Get_Errors:
            return {
                loading: true,
                category: action.payload
            }
        default:
            return state;
    }
}

export default CategoryReducer