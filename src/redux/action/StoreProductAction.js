

import baseURL from '../../Api/baseUrl'
import swal from 'sweetalert'

const StoreProduct = (formatData) => {
    return async (dispatch) => {
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
        try {
            let res = await baseURL.post('/api/v1/products/store' ,formatData , config )

            dispatch({ type: 'storeProduct', payload: res })
            console.log(res);
        } catch (e) {
            dispatch({ type: 'Get_Errors', payload: e.res })
            console.log(e.response.status);
            if(e.response.status === 401){
                swal("قم بتحديث البيانات في الصفحه الرئيسيه")
                setTimeout(()=>{
                    window.location.href = '/addProduct'
                } , 1500)
            }
        }
    }
}



export {StoreProduct}