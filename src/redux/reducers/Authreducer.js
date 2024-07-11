const initial = {
    createUSer: [],
    LoginUser: [],
    forgetpass: [],
    verifyemail: [],
    VerifyEmailOtp :[],
    loading: true,
}

const UserReducer = (state = initial, action) => {
    switch (action.type) {
        case "getAllUsers":
            return {
                ...state,
                createUSer: action.payload,
                loading: false
            }
        case "getLoginUser":
            return{
                ...state,
                LoginUser: action.payload,
                loading: false
            }
        case "ForgetPass":
            return{
                ...state,
                forgetpass: action.payload,
                loading: false
            }
        case "VerifyEmail":
            return{
                ...state,
                verifyemail: action.payload,
                loading: false
            }
        case "VerifyEmailOtp":
            return{
                ...state,
                VerifyEmailOtp: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default UserReducer