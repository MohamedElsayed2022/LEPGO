


const initial = {
    uploadsImages: [],
    loading: true,
}

const UploadImageProfile = (state = initial, action) => {
    switch (action.type) {
        case "upload":
            return {
                ...state,
                uploadsImages: action.payload,
                loading: false
            }
        case "Get_Errors":
            return {
                loading: true,
                uploadsImages: action.payload
            }
        default:
            return state;
    }
}

export default UploadImageProfile