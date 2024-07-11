import { Get_Errors} from '../type'

const initial = {
    offers: [],
    loading: true,
}

const OfferReducer = (state = initial, action) => {
    switch (action.type) {
        case "GetAllOffers":
            return {
                ...state,
                offers: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default OfferReducer