
import { AllCategory ,Get_Errors} from '../type.js'


const initial = {
    Governments: [],
    loading: true,
}

const GovernmentsReducer = (state = initial, action) => {
    switch (action.type) {
        case "getAllGovernments":
            return {
                ...state,
                Governments: action.payload,
                loading: false
            }
        case Get_Errors:
            return {
                loading: true,
                Governments: action.payload
            }
        default:
            return state;
    }
}

export default GovernmentsReducer