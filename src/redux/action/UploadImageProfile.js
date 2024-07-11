

import baseURL from '../../Api/baseUrl'

const UploadImageProfile = (formatData) => {
    var infoUser = JSON.parse(localStorage.getItem('user'));
    return async (dispatch) => {
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
        try {
            let res = await baseURL.post('/api/v1/users/update_img' ,formatData , config )

            dispatch({ type: 'upload', payload: res })
            infoUser.data.user.image = res.data.image
            console.log(res);
            localStorage.setItem("user", JSON.stringify(infoUser));
        } catch (e) {
            dispatch({ type: 'Get_Errors', payload: e.res })
            console.log(e);
        }
    }
}



export {UploadImageProfile}