
// import { AllCategory ,Get_Errors} from '../type.js'


const initial = {
    updateDetails: [],
    loading: true,
}

const UpdateDetails = (state = initial, action) => {
    switch (action.type) {
        case "updateDetails":
            return {
                ...state,
                updateDetails: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default UpdateDetails