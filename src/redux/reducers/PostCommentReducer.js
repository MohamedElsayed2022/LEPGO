


const initial = {
    comments: [],
    loading: true,
}

const CommentsReducer = (state = initial, action) => {
    switch (action.type) {
        case "PostComment":
            return {
                ...state,
                comments: action.payload,
                loading: false
            }
        case "getErrors":
            return {
                ...state,
                comments: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}

export default CommentsReducer