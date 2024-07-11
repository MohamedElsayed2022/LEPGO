import swal from 'sweetalert'
import baseURL from '../../Api/baseUrl'
const PostCommenttoProduct = (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    return async (dispatch) => {
        try {
            let res = await baseURL.post('/api/v1/reviews/store',data,config) 
            dispatch({ type: "PostComment", payload: res.data })
            console.log(res.data);
        } catch (e) {
            dispatch({ type: "getErrors", payload: "Error through Loadin Data" + e })
            console.log(e.message);
            if(e.message === "Request failed with status code 401"){
                swal(`قم بتحديث بياناتك في الصفحه الرئيسيه ورجاء ان لم تفعل الايميل قم بتفعيله`)
            }
        }
    }
}

export {PostCommenttoProduct}