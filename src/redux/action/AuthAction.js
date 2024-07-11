import baseURL from '../../Api/baseUrl'

const createNewUsers = (data) => {
    return async (dispatch) => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
        try {
            let res = await baseURL.post('/api/v1/users/register', data , config)

            dispatch({ type: 'getAllUsers', payload: res })
        } catch (e) {
            dispatch({ type: 'getAllUsers', payload: e.res })
        }
    }
}
const LoginUser = (data) => {
    return async (dispatch) => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
        try {
            let res = await baseURL.post('/api/v1/users/login', data , config)

            dispatch({ type: 'getLoginUser', payload: res })
        } catch (e) {
            dispatch({ type: 'getLoginUser', payload: e.res })
        }
    }
}

const ForgetPass = (data) => {
    return async (dispatch) => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
        try {
            let res = await baseURL.post('/api/v1/users/forgot-password', data , config)

            dispatch({ type: 'ForgetPass', payload: res })
        } catch (e) {
            dispatch({ type: 'ForgetPass', payload: e.res })
        }
    }
}

const VerifyEmailCode = (data) => {
    return async (dispatch) => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
        
        try {
            let res = await baseURL.get('/api/v1/users/verfiy-email', config , data)

            dispatch({ type: 'VerifyEmail', payload: res })
            // console.log(localStorage.getItem('token'))
            console.log(res);
        } catch (e) {
            dispatch({ type: 'VerifyEmail', payload: e.res })
            console.log(localStorage.getItem('token'))
        }
    }
}
const VerifyEmailCodeNumOtp = (data) => {
    return async (dispatch) => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
        try {
            let res = await baseURL.post('/api/v1/users/verfiy-email/otp' ,data , config)

            dispatch({ type: 'VerifyEmailOtp', payload: res })
            // console.log(localStorage.getItem('token));
        } catch (e) {
            dispatch({ type: 'VerifyEmailOtp', payload: e.res })
            console.log(localStorage.getItem('token'));
        }
    }
}

export { createNewUsers, LoginUser, ForgetPass, VerifyEmailCode, VerifyEmailCodeNumOtp }